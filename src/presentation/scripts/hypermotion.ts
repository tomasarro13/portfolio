/*
 * Mounts HyperMotion components (https://www.hypermotion.tech/) on elements marked with
 * `data-hypermotion="<component>"` and `data-props='<json>'`.
 *
 * The bundles are vendored in /public/vendor/hypermotion and served from this origin, so the
 * Content-Security-Policy keeps `script-src 'self'`. Each one exports `render(target, props)`.
 *
 * - Components load only when they are about to enter the viewport.
 * - With `prefers-reduced-motion: reduce`, animated components are not mounted and the
 *   static HTML inside each element stays as it is.
 * - If a bundle fails to load, the static HTML stays too: the page never depends on it.
 */

interface HyperMotionModule {
  render(target: HTMLElement, props: Record<string, unknown>): unknown;
}

const BASE = '/vendor/hypermotion/';

/** Components that only add motion. They are skipped when the user asks for less motion. */
const MOTION_ONLY = new Set(['fluid-simulation', 'globe', 'text-loop']);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cache = new Map<string, Promise<HyperMotionModule>>();

function load(component: string): Promise<HyperMotionModule> {
  let module = cache.get(component);
  if (!module) {
    module = import(/* @vite-ignore */ `${BASE}${component}.js`) as Promise<HyperMotionModule>;
    cache.set(component, module);
  }
  return module;
}

function readProps(element: HTMLElement): Record<string, unknown> {
  try {
    return JSON.parse(element.dataset.props ?? '{}') as Record<string, unknown>;
  } catch {
    return {};
  }
}

async function mount(element: HTMLElement): Promise<void> {
  const component = element.dataset.hypermotion;
  if (!component || element.dataset.hypermotionState) return;
  element.dataset.hypermotionState = 'loading';
  try {
    const { render } = await load(component);
    const fallback = Array.from(element.childNodes);
    element.replaceChildren();
    try {
      render(element, readProps(element));
      element.dataset.hypermotionState = 'mounted';
      document.documentElement.classList.add(`has-${component}`);
    } catch (error) {
      element.replaceChildren(...fallback);
      throw error;
    }
  } catch {
    // The static fallback stays. The state is visible in the DOM for debugging.
    element.dataset.hypermotionState = 'failed';
  }
}

const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-hypermotion]')).filter(
  (element) => {
    if (reducedMotion && MOTION_ONLY.has(element.dataset.hypermotion ?? '')) {
      element.dataset.hypermotionState = 'skipped';
      return false;
    }
    return true;
  },
);

const lazy = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      lazy.unobserve(entry.target);
      void mount(entry.target as HTMLElement);
    }
  },
  { rootMargin: '300px 0px' },
);

for (const element of elements) {
  if (element.dataset.eager !== undefined) void mount(element);
  else lazy.observe(element);
}
