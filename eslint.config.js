// @ts-check
import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** Import patterns (alias and relative) that point into a given layer. */
const layer = (/** @type {string} */ name) => [`@${name}/*`, `**/${name}/**`];

/**
 * Architecture rules: the dependency rule of Clean Architecture enforced by the linter.
 * An import that crosses a boundary in the wrong direction fails CI.
 */
/** @returns {import('eslint').Linter.RulesRecord} */
const boundary = (/** @type {string[]} */ forbidden, /** @type {string} */ message) => ({
  'no-restricted-imports': ['error', { patterns: [{ group: forbidden, message }] }],
});

export default defineConfig(
  { ignores: ['dist/', '.astro/', 'coverage/', 'node_modules/', '.wrangler/'] },

  js.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  astro.configs.recommended,

  {
    languageOptions: { globals: { ...globals.node } },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      eqeqeq: ['error', 'always'],
      'no-console': 'error',
    },
  },

  {
    files: ['src/domain/**/*.ts'],
    rules: boundary(
      [
        ...layer('application'),
        ...layer('infrastructure'),
        ...layer('presentation'),
        '**/composition-root',
        'astro',
        'astro:*',
      ],
      'Domain is the core: it must not import outer layers or frameworks.',
    ),
  },
  {
    files: ['src/application/**/*.ts'],
    rules: boundary(
      [
        ...layer('infrastructure'),
        ...layer('presentation'),
        '**/composition-root',
        'astro',
        'astro:*',
      ],
      'Application may only depend on the domain.',
    ),
  },
  {
    files: ['src/infrastructure/**/*.ts'],
    rules: boundary(
      [...layer('presentation'), '**/composition-root'],
      'Infrastructure implements inner ports; it must not know about the UI.',
    ),
  },
  {
    files: ['src/presentation/**/*.{ts,astro}'],
    rules: boundary(
      [...layer('domain'), ...layer('infrastructure'), '**/composition-root'],
      'Presentation renders application DTOs only. Pages obtain data through the composition root.',
    ),
  },
);
