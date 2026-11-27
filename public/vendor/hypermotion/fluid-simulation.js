var il = Object.defineProperty;
var Vi = (t) => {
  throw TypeError(t);
};
var sl = (t, e, r) => e in t ? il(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var ce = (t, e, r) => sl(t, typeof e != "symbol" ? e + "" : e, r), Gr = (t, e, r) => e.has(t) || Vi("Cannot " + r);
var g = (t, e, r) => (Gr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), N = (t, e, r) => e.has(t) ? Vi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), z = (t, e, r, i) => (Gr(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r), B = (t, e, r) => (Gr(t, e, "access private method"), r);
var Ls = Array.isArray, nl = Array.prototype.indexOf, Xt = Array.prototype.includes, ll = Array.from, al = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, ol = Object.getOwnPropertyDescriptors, hl = Object.prototype, cl = Array.prototype, Ns = Object.getPrototypeOf, Gi = Object.isExtensible;
const fl = () => {
};
function ul(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Is() {
  var t, e, r = new Promise((i, s) => {
    t = i, e = s;
  });
  return { promise: r, resolve: t, reject: e };
}
const re = 2, qt = 4, yi = 8, wi = 1 << 24, Re = 16, qe = 32, lt = 64, ti = 128, ye = 512, ee = 1024, ie = 2048, Ne = 4096, De = 8192, Le = 16384, St = 32768, Wi = 1 << 25, Ar = 65536, Mr = 1 << 17, dl = 1 << 18, Ht = 1 << 19, pl = 1 << 20, Mt = 65536, Sr = 1 << 21, Nt = 1 << 22, st = 1 << 23, ir = Symbol("$state"), gl = Symbol(""), br = Symbol("attributes"), ri = Symbol("class"), ii = Symbol("style"), ml = Symbol("text"), Nr = new class extends Error {
  constructor() {
    super(...arguments);
    ce(this, "name", "StaleReactionError");
    ce(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Os = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function vl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function bl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _l() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function yl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function El() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Tl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Al() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ml = 2, K = Symbol(), Bs = "http://www.w3.org/1999/xhtml", Sl = "@attach";
function Rl() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function kl() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Fl() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Us(t) {
  return t === this.v;
}
let Ee = null;
function $t(t) {
  Ee = t;
}
function Ei(t, e = !1, r) {
  Ee = {
    p: Ee,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      O
    ),
    l: null
  };
}
function Ti(t) {
  var e = (
    /** @type {ComponentContext} */
    Ee
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var i of r)
      hn(i);
  }
  return e.i = !0, Ee = e.p, /** @type {T} */
  {};
}
function Vs() {
  return !0;
}
let Dt = [];
function Cl() {
  var t = Dt;
  Dt = [], ul(t);
}
function nt(t) {
  if (Dt.length === 0) {
    var e = Dt;
    queueMicrotask(() => {
      e === Dt && Cl();
    });
  }
  Dt.push(t);
}
function Gs(t) {
  var e = O;
  if (e === null)
    return I.f |= st, t;
  if ((e.f & St) === 0 && (e.f & qt) === 0)
    throw t;
  rt(t, e);
}
function rt(t, e) {
  for (; e !== null; ) {
    if ((e.f & ti) !== 0) {
      if ((e.f & St) === 0)
        throw t;
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    }
    e = e.parent;
  }
  throw t;
}
const zl = -7169;
function Y(t, e) {
  t.f = t.f & zl | e;
}
function Ai(t) {
  (t.f & ye) !== 0 || t.deps === null ? Y(t, ee) : Y(t, Ne);
}
function Ws(t) {
  if (t !== null)
    for (const e of t)
      (e.f & re) === 0 || (e.f & Mt) === 0 || (e.f ^= Mt, Ws(
        /** @type {Derived} */
        e.deps
      ));
}
function Xs(t, e, r) {
  (t.f & ie) !== 0 ? e.add(t) : (t.f & Ne) !== 0 && r.add(t), Ws(t.deps), Y(t, ee);
}
let Wr = null, Ft = null, G = null, si = null, ke = null, ni = null, Xr = !1, Lt = null, _r = null;
var Xi = 0;
let Pl = 1;
var It, Je, xt, Ot, Bt, yt, Ut, Ge, ar, ue, or, et, ze, Pe, Vt, Gt, V, li, tr, ai, qs, $s, xr, Dl, oi, Pt;
const Dr = class Dr {
  constructor() {
    N(this, V);
    ce(this, "id", Pl++);
    /** True as soon as `#process` was called */
    N(this, It, !1);
    ce(this, "linked", !0);
    /** @type {Batch | null} */
    N(this, Je, null);
    /** @type {Batch | null} */
    N(this, xt, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ce(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ce(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ce(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    ce(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Ot, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Bt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, yt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    N(this, Ut, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    N(this, Ge, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    N(this, ar, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    N(this, ue, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    N(this, or, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    N(this, et, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    N(this, ze, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    N(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    N(this, Vt, /* @__PURE__ */ new Set());
    ce(this, "is_fork", !1);
    N(this, Gt, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    g(this, Pe).has(e) || g(this, Pe).set(e, { d: [], m: [] }), g(this, Vt).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, r = (i) => this.schedule(i)) {
    var i = g(this, Pe).get(e);
    if (i) {
      g(this, Pe).delete(e);
      for (var s of i.d)
        Y(s, ie), r(s);
      for (s of i.m)
        Y(s, Ne), r(s);
    }
    g(this, Vt).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, r, i = !1) {
    e.v !== K && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & st) === 0 && (this.current.set(e, [r, i]), ke?.set(e, r)), this.is_fork || (e.v = r);
  }
  activate() {
    G = this;
  }
  deactivate() {
    G = null, ke = null;
  }
  flush() {
    try {
      Xr = !0, G = this, B(this, V, tr).call(this);
    } finally {
      Xi = 0, ni = null, Lt = null, _r = null, Xr = !1, G = null, ke = null, Tt.clear();
    }
  }
  discard() {
    for (const e of g(this, Bt)) e(this);
    g(this, Bt).clear(), g(this, yt).clear(), B(this, V, Pt).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    g(this, or).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, r) {
    if (z(this, Ut, g(this, Ut) + 1), e) {
      let i = g(this, Ge).get(r) ?? 0;
      g(this, Ge).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, r) {
    if (z(this, Ut, g(this, Ut) - 1), e) {
      let i = g(this, Ge).get(r) ?? 0;
      i === 1 ? g(this, Ge).delete(r) : g(this, Ge).set(r, i - 1);
    }
    g(this, Gt) || (z(this, Gt, !0), nt(() => {
      z(this, Gt, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, r) {
    for (const i of e)
      g(this, et).add(i);
    for (const i of r)
      g(this, ze).add(i);
    e.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    g(this, Ot).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    g(this, Bt).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    g(this, yt).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of g(this, yt)) e(this);
    g(this, yt).clear();
  }
  settled() {
    return (g(this, ar) ?? z(this, ar, Is())).promise;
  }
  static ensure() {
    var e;
    if (G === null) {
      const r = G = new Dr();
      B(e = r, V, oi).call(e), Xr || nt(() => {
        g(r, It) || r.flush();
      });
    }
    return G;
  }
  apply() {
    {
      ke = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    if (ni = e, e.b?.is_pending && (e.f & (qt | yi | wi)) !== 0 && (e.f & St) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var r = e; r.parent !== null; ) {
      r = r.parent;
      var i = r.f;
      if (Lt !== null && r === O && (I === null || (I.f & re) === 0))
        return;
      if ((i & (lt | qe)) !== 0) {
        if ((i & ee) === 0)
          return;
        r.f ^= ee;
      }
    }
    g(this, ue).push(r);
  }
};
It = new WeakMap(), Je = new WeakMap(), xt = new WeakMap(), Ot = new WeakMap(), Bt = new WeakMap(), yt = new WeakMap(), Ut = new WeakMap(), Ge = new WeakMap(), ar = new WeakMap(), ue = new WeakMap(), or = new WeakMap(), et = new WeakMap(), ze = new WeakMap(), Pe = new WeakMap(), Vt = new WeakMap(), Gt = new WeakMap(), V = new WeakSet(), li = function() {
  if (this.is_fork) return !0;
  for (const i of g(this, Ge).keys()) {
    for (var e = i, r = !1; e.parent !== null; ) {
      if (g(this, Pe).has(e)) {
        r = !0;
        break;
      }
      e = e.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, tr = function() {
  var o, h, f;
  if (z(this, It, !0), Xi++ > 1e3 && (B(this, V, Pt).call(this), Ll()), !B(this, V, li).call(this)) {
    for (const c of g(this, et))
      g(this, ze).delete(c), Y(c, ie), this.schedule(c);
    for (const c of g(this, ze))
      Y(c, Ne), this.schedule(c);
  }
  const e = g(this, ue);
  z(this, ue, []), this.apply();
  var r = Lt = [], i = [], s = _r = [];
  for (const c of e)
    try {
      B(this, V, ai).call(this, c, r, i);
    } catch (u) {
      throw Hs(c), u;
    }
  if (G = null, s.length > 0) {
    var n = Dr.ensure();
    for (const c of s)
      n.schedule(c);
  }
  if (Lt = null, _r = null, B(this, V, li).call(this)) {
    B(this, V, xr).call(this, i), B(this, V, xr).call(this, r);
    for (const [c, u] of g(this, Pe))
      Ys(c, u);
    s.length > 0 && /** @type {unknown} */
    B(o = G, V, tr).call(o);
    return;
  }
  const l = B(this, V, qs).call(this);
  if (l) {
    B(h = l, V, $s).call(h, this);
    return;
  }
  g(this, et).clear(), g(this, ze).clear();
  for (const c of g(this, Ot)) c(this);
  g(this, Ot).clear(), si = this, qi(i), qi(r), si = null, g(this, ar)?.resolve();
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    G
  );
  if (this.linked && g(this, Ut) === 0 && B(this, V, Pt).call(this), g(this, ue).length > 0) {
    a === null && (a = this, B(this, V, oi).call(this));
    const c = a;
    g(c, ue).push(...g(this, ue).filter((u) => !g(c, ue).includes(u)));
  }
  a !== null && B(f = a, V, tr).call(f);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ai = function(e, r, i) {
  e.f ^= ee;
  for (var s = e.first; s !== null; ) {
    var n = s.f, l = (n & (qe | lt)) !== 0, a = l && (n & ee) !== 0, o = a || (n & De) !== 0 || g(this, Pe).has(s);
    if (!o && s.fn !== null) {
      l ? s.f ^= ee : (n & qt) !== 0 ? r.push(s) : fr(s) && ((n & Re) !== 0 && g(this, ze).add(s), Yt(s));
      var h = s.first;
      if (h !== null) {
        s = h;
        continue;
      }
    }
    for (; s !== null; ) {
      var f = s.next;
      if (f !== null) {
        s = f;
        break;
      }
      s = s.parent;
    }
  }
}, qs = function() {
  for (var e = g(this, Je); e !== null; ) {
    if (!e.is_fork) {
      for (const [r, [, i]] of this.current)
        if (e.current.has(r) && !i)
          return e;
    }
    e = g(e, Je);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
$s = function(e) {
  var i;
  for (const [s, n] of e.current)
    !this.previous.has(s) && e.previous.has(s) && this.previous.set(s, e.previous.get(s)), this.current.set(s, n);
  for (const [s, n] of e.async_deriveds) {
    const l = this.async_deriveds.get(s);
    l && n.promise.then(l.resolve);
  }
  const r = (s) => {
    var n = s.reactions;
    if (n !== null)
      for (const o of n) {
        var l = o.f;
        if ((l & re) !== 0)
          r(
            /** @type {Derived} */
            o
          );
        else {
          var a = (
            /** @type {Effect} */
            o
          );
          l & (Nt | Re) && !this.async_deriveds.has(a) && (g(this, ze).delete(a), Y(a, ie), this.schedule(a));
        }
      }
  };
  for (const s of this.current.keys())
    r(s);
  this.oncommit(() => e.discard()), B(i = e, V, Pt).call(i), G = this, B(this, V, tr).call(this);
}, /**
 * @param {Effect[]} effects
 */
xr = function(e) {
  for (var r = 0; r < e.length; r += 1)
    Xs(e[r], g(this, et), g(this, ze));
}, Dl = function() {
  var f;
  B(this, V, Pt).call(this);
  for (let c = Wr; c !== null; c = g(c, xt)) {
    var e = c.id < this.id, r = [];
    for (const [u, [d, p]] of this.current) {
      if (c.current.has(u)) {
        var i = (
          /** @type {[any, boolean]} */
          c.current.get(u)[0]
        );
        if (e && d !== i)
          c.current.set(u, [d, p]);
        else
          continue;
      }
      r.push(u);
    }
    if (e)
      for (const [u, d] of this.async_deriveds) {
        const p = c.async_deriveds.get(u);
        p && d.promise.then(p.resolve);
      }
    if (g(c, It)) {
      var s = [...c.current.keys()].filter((u) => !this.current.has(u));
      if (s.length === 0)
        e && c.discard();
      else if (r.length > 0) {
        if (e)
          for (const u of g(this, Vt))
            c.unskip_effect(u, (d) => {
              var p;
              (d.f & (Re | Nt)) !== 0 ? c.schedule(d) : B(p = c, V, xr).call(p, [d]);
            });
        c.activate();
        var n = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var a of r)
          js(a, s, n, l);
        l = /* @__PURE__ */ new Map();
        var o = [...c.current.keys()].filter(
          (u) => this.current.has(u) ? (
            /** @type {[any, boolean]} */
            this.current.get(u)[0] !== u.v
          ) : !0
        );
        if (o.length > 0)
          for (const u of g(this, or))
            (u.f & (Le | De | Mr)) === 0 && Mi(u, o, l) && ((u.f & (Nt | Re)) !== 0 ? (Y(u, ie), c.schedule(u)) : g(c, et).add(u));
        if (g(c, ue).length > 0) {
          c.apply();
          for (var h of g(c, ue))
            B(f = c, V, ai).call(f, h, [], []);
          z(c, ue, []);
        }
        c.deactivate();
      }
    }
  }
}, oi = function() {
  Ft === null ? Wr = Ft = this : (z(Ft, xt, this), z(this, Je, Ft)), Ft = this;
}, Pt = function() {
  var e = g(this, Je), r = g(this, xt);
  e === null ? Wr = r : z(e, xt, r), r === null ? Ft = e : z(r, Je, e), this.linked = !1;
};
let jt = Dr;
function Ll() {
  try {
    yl();
  } catch (t) {
    rt(t, ni);
  }
}
let Ue = null;
function qi(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var i = t[r++];
      if ((i.f & (Le | De)) === 0 && fr(i) && (Ue = /* @__PURE__ */ new Set(), Yt(i), i.deps === null && i.first === null && i.nodes === null && i.teardown === null && i.ac === null && dn(i), Ue?.size > 0)) {
        Tt.clear();
        for (const s of Ue) {
          if ((s.f & (Le | De)) !== 0) continue;
          const n = [s];
          let l = s.parent;
          for (; l !== null; )
            Ue.has(l) && (Ue.delete(l), n.push(l)), l = l.parent;
          for (let a = n.length - 1; a >= 0; a--) {
            const o = n[a];
            (o.f & (Le | De)) === 0 && Yt(o);
          }
        }
        Ue.clear();
      }
    }
    Ue = null;
  }
}
function js(t, e, r, i) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const s of t.reactions) {
      const n = s.f;
      (n & re) !== 0 ? js(
        /** @type {Derived} */
        s,
        e,
        r,
        i
      ) : (n & (Nt | Re)) !== 0 && (n & ie) === 0 && Mi(s, e, i) && (Y(s, ie), Si(
        /** @type {Effect} */
        s
      ));
    }
}
function Mi(t, e, r) {
  const i = r.get(t);
  if (i !== void 0) return i;
  if (t.deps !== null)
    for (const s of t.deps) {
      if (Xt.call(e, s))
        return !0;
      if ((s.f & re) !== 0 && Mi(
        /** @type {Derived} */
        s,
        e,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(t, !1), !1;
}
function Si(t) {
  G.schedule(t);
}
function Ys(t, e) {
  if (!((t.f & qe) !== 0 && (t.f & ee) !== 0)) {
    (t.f & ie) !== 0 ? e.d.push(t) : (t.f & Ne) !== 0 && e.m.push(t), Y(t, ee);
    for (var r = t.first; r !== null; )
      Ys(r, e), r = r.next;
  }
}
function Hs(t) {
  Y(t, ee);
  for (var e = t.first; e !== null; )
    Hs(e), e = e.next;
}
function Nl(t) {
  let e = 0, r = Ir(0), i;
  return () => {
    Fi() && (bt(r), na(() => (e === 0 && (i = yn(() => t(() => sr(r)))), e += 1, () => {
      nt(() => {
        e -= 1, e === 0 && (i?.(), i = void 0, sr(r));
      });
    })));
  };
}
var Il = Ar | Ht;
function Ol(t, e, r, i) {
  new Bl(t, e, r, i);
}
var be, xi, _e, wt, le, xe, ne, de, We, Et, tt, Wt, hr, cr, Xe, Lr, $, Ul, Vl, Gl, hi, yr, wr, ci, fi;
class Bl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, r, i, s) {
    N(this, $);
    /** @type {Boundary | null} */
    ce(this, "parent");
    ce(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ce(this, "transform_error");
    /** @type {TemplateNode} */
    N(this, be);
    /** @type {TemplateNode | null} */
    N(this, xi, null);
    /** @type {BoundaryProps} */
    N(this, _e);
    /** @type {((anchor: Node) => void)} */
    N(this, wt);
    /** @type {Effect} */
    N(this, le);
    /** @type {Effect | null} */
    N(this, xe, null);
    /** @type {Effect | null} */
    N(this, ne, null);
    /** @type {Effect | null} */
    N(this, de, null);
    /** @type {DocumentFragment | null} */
    N(this, We, null);
    N(this, Et, 0);
    N(this, tt, 0);
    N(this, Wt, !1);
    /** @type {Set<Effect>} */
    N(this, hr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    N(this, cr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    N(this, Xe, null);
    N(this, Lr, Nl(() => (z(this, Xe, Ir(g(this, Et))), () => {
      z(this, Xe, null);
    })));
    z(this, be, e), z(this, _e, r), z(this, wt, (n) => {
      var l = (
        /** @type {Effect} */
        O
      );
      l.b = this, l.f |= ti, i(n);
    }), this.parent = /** @type {Effect} */
    O.b, this.transform_error = s ?? this.parent?.transform_error ?? ((n) => n), z(this, le, la(() => {
      B(this, $, hi).call(this);
    }, Il));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Xs(e, g(this, hr), g(this, cr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!g(this, _e).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, r) {
    B(this, $, ci).call(this, e, r), z(this, Et, g(this, Et) + e), !(!g(this, Xe) || g(this, Wt)) && (z(this, Wt, !0), nt(() => {
      z(this, Wt, !1), g(this, Xe) && Fr(g(this, Xe), g(this, Et));
    }));
  }
  get_effect_pending() {
    return g(this, Lr).call(this), bt(
      /** @type {Source<number>} */
      g(this, Xe)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!g(this, _e).onerror && !g(this, _e).failed)
      throw e;
    G?.is_fork ? (g(this, xe) && G.skip_effect(g(this, xe)), g(this, ne) && G.skip_effect(g(this, ne)), g(this, de) && G.skip_effect(g(this, de)), G.on_fork_commit(() => {
      B(this, $, fi).call(this, e);
    })) : B(this, $, fi).call(this, e);
  }
}
be = new WeakMap(), xi = new WeakMap(), _e = new WeakMap(), wt = new WeakMap(), le = new WeakMap(), xe = new WeakMap(), ne = new WeakMap(), de = new WeakMap(), We = new WeakMap(), Et = new WeakMap(), tt = new WeakMap(), Wt = new WeakMap(), hr = new WeakMap(), cr = new WeakMap(), Xe = new WeakMap(), Lr = new WeakMap(), $ = new WeakSet(), Ul = function() {
  try {
    z(this, xe, Ve(() => g(this, wt).call(this, g(this, be))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Vl = function(e) {
  const r = g(this, _e).failed;
  r && z(this, de, Ve(() => {
    r(
      g(this, be),
      () => e,
      () => () => {
      }
    );
  }));
}, Gl = function() {
  const e = g(this, _e).pending;
  e && (this.is_pending = !0, z(this, ne, Ve(() => e(g(this, be)))), nt(() => {
    var r = z(this, We, document.createDocumentFragment()), i = nn();
    r.append(i), z(this, xe, B(this, $, wr).call(this, () => Ve(() => g(this, wt).call(this, i)))), g(this, tt) === 0 && (g(this, be).before(r), z(this, We, null), Er(
      /** @type {Effect} */
      g(this, ne),
      () => {
        z(this, ne, null);
      }
    ), B(this, $, yr).call(
      this,
      /** @type {Batch} */
      G
    ));
  }));
}, hi = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), z(this, tt, 0), z(this, Et, 0), z(this, xe, Ve(() => {
      g(this, wt).call(this, g(this, be));
    })), g(this, tt) > 0) {
      var e = z(this, We, document.createDocumentFragment());
      ha(g(this, xe), e);
      const r = (
        /** @type {(anchor: Node) => void} */
        g(this, _e).pending
      );
      z(this, ne, Ve(() => r(g(this, be))));
    } else
      B(this, $, yr).call(
        this,
        /** @type {Batch} */
        G
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
yr = function(e) {
  this.is_pending = !1, e.transfer_effects(g(this, hr), g(this, cr));
}, /**
 * @template T
 * @param {() => T} fn
 */
wr = function(e) {
  var r = O, i = I, s = Ee;
  Ie(g(this, le)), Te(g(this, le)), $t(g(this, le).ctx);
  try {
    return jt.ensure(), e();
  } catch (n) {
    return Gs(n), null;
  } finally {
    Ie(r), Te(i), $t(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
ci = function(e, r) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && B(i = this.parent, $, ci).call(i, e, r);
    return;
  }
  z(this, tt, g(this, tt) + e), g(this, tt) === 0 && (B(this, $, yr).call(this, r), g(this, ne) && Er(g(this, ne), () => {
    z(this, ne, null);
  }), g(this, We) && (g(this, be).before(g(this, We)), z(this, We, null)));
}, /**
 * @param {unknown} error
 */
fi = function(e) {
  g(this, xe) && (ge(g(this, xe)), z(this, xe, null)), g(this, ne) && (ge(g(this, ne)), z(this, ne, null)), g(this, de) && (ge(g(this, de)), z(this, de, null));
  var r = g(this, _e).onerror;
  let i = g(this, _e).failed;
  var s = !1, n = !1;
  const l = () => {
    if (s) {
      Fl();
      return;
    }
    s = !0, n && Al(), g(this, de) !== null && Er(g(this, de), () => {
      z(this, de, null);
    }), B(this, $, wr).call(this, () => {
      B(this, $, hi).call(this);
    });
  }, a = (o) => {
    try {
      n = !0, r?.(o, l), n = !1;
    } catch (h) {
      rt(h, g(this, le) && g(this, le).parent);
    }
    i && z(this, de, B(this, $, wr).call(this, () => {
      try {
        return Ve(() => {
          var h = (
            /** @type {Effect} */
            O
          );
          h.b = this, h.f |= ti, i(
            g(this, be),
            () => o,
            () => l
          );
        });
      } catch (h) {
        return rt(
          h,
          /** @type {Effect} */
          g(this, le).parent
        ), null;
      }
    }));
  };
  nt(() => {
    var o;
    try {
      o = this.transform_error(e);
    } catch (h) {
      rt(h, g(this, le) && g(this, le).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      a,
      /** @param {unknown} e */
      (h) => rt(h, g(this, le) && g(this, le).parent)
    ) : a(o);
  });
};
function Wl(t, e, r, i) {
  const s = ql;
  var n = t.filter((u) => !u.settled);
  if (r.length === 0 && n.length === 0) {
    i(e.map(s));
    return;
  }
  var l = (
    /** @type {Effect} */
    O
  ), a = Xl(), o = n.length === 1 ? n[0].promise : n.length > 1 ? Promise.all(n.map((u) => u.promise)) : null;
  function h(u) {
    if ((l.f & Le) === 0) {
      a();
      try {
        i(u);
      } catch (d) {
        rt(d, l);
      }
      Rr();
    }
  }
  var f = Zs();
  if (r.length === 0) {
    o.then(() => h(e.map(s))).finally(f);
    return;
  }
  function c() {
    Promise.all(r.map((u) => /* @__PURE__ */ $l(u))).then((u) => h([...e.map(s), ...u])).catch((u) => rt(u, l)).finally(f);
  }
  o ? o.then(() => {
    a(), c(), Rr();
  }) : c();
}
function Xl() {
  var t = (
    /** @type {Effect} */
    O
  ), e = I, r = Ee, i = (
    /** @type {Batch} */
    G
  );
  return function(n = !0) {
    Ie(t), Te(e), $t(r), n && (t.f & Le) === 0 && (i?.activate(), i?.apply());
  };
}
function Rr(t = !0) {
  Ie(null), Te(null), $t(null), t && G?.deactivate();
}
function Zs() {
  var t = (
    /** @type {Effect} */
    O
  ), e = (
    /** @type {Boundary} */
    t.b
  ), r = (
    /** @type {Batch} */
    G
  ), i = e.is_rendered();
  return e.update_pending_count(1, r), r.increment(i, t), () => {
    e.update_pending_count(-1, r), r.decrement(i, t);
  };
}
// @__NO_SIDE_EFFECTS__
function ql(t) {
  var e = re | ie;
  return O !== null && (O.f |= Ht), {
    ctx: Ee,
    deps: null,
    effects: null,
    equals: Us,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      K
    ),
    wv: 0,
    parent: O,
    ac: null
  };
}
const pr = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function $l(t, e, r) {
  let i = (
    /** @type {Effect | null} */
    O
  );
  i === null && vl();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), n = Ir(
    /** @type {V} */
    K
  ), l = !I, a = /* @__PURE__ */ new Set();
  return sa(() => {
    var o = (
      /** @type {Effect} */
      O
    ), h = Is();
    s = h.promise;
    try {
      Promise.resolve(t()).then(h.resolve, (d) => {
        d !== Nr && h.reject(d);
      }).finally(Rr);
    } catch (d) {
      h.reject(d), Rr();
    }
    var f = (
      /** @type {Batch} */
      G
    );
    if (l) {
      if ((o.f & St) !== 0)
        var c = Zs();
      if (
        /** @type {Boundary} */
        i.b.is_rendered()
      )
        f.async_deriveds.get(o)?.reject(pr);
      else
        for (const d of a.values())
          d.reject(pr);
      a.add(h), f.async_deriveds.set(o, h);
    }
    const u = (d, p = void 0) => {
      c?.(), a.delete(h), p !== pr && (f.activate(), p ? (n.f |= st, Fr(n, p)) : ((n.f & st) !== 0 && (n.f ^= st), Fr(n, d)), f.deactivate());
    };
    h.promise.then(u, (d) => u(null, d || "unknown"));
  }), on(() => {
    for (const o of a)
      o.reject(pr);
  }), new Promise((o) => {
    function h(f) {
      function c() {
        f === s ? o(n) : h(s);
      }
      f.then(c, c);
    }
    h(s);
  });
}
function jl(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      ge(
        /** @type {Effect} */
        e[r]
      );
  }
}
function Ri(t) {
  var e, r = O, i = t.parent;
  if (!at && i !== null && (i.f & (Le | De)) !== 0)
    return Rl(), t.v;
  Ie(i);
  try {
    t.f &= ~Mt, jl(t), e = bn(t);
  } finally {
    Ie(r);
  }
  return e;
}
function Qs(t) {
  var e = Ri(t);
  if (!t.equals(e) && (t.wv = mn(), (!G?.is_fork || t.deps === null) && (G !== null ? (G.capture(t, e, !0), si?.capture(t, e, !0)) : t.v = e, t.deps === null))) {
    Y(t, ee);
    return;
  }
  at || (ke !== null ? (Fi() || G?.is_fork) && ke.set(t, e) : Ai(t));
}
function Yl(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(Nr), e.teardown = fl, e.ac = null, lr(e, 0), Ci(e));
}
function Ks(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && Yt(e);
}
let kr = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
let Js = !1;
function Ir(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Us,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function Qe(t, e) {
  const r = Ir(t);
  return ca(r), r;
}
function mt(t, e, r = !1) {
  I !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fe || (I.f & Mr) !== 0) && Vs() && (I.f & (re | Re | Nt | Mr)) !== 0 && (we === null || !Xt.call(we, t)) && Tl();
  let i = r ? it(e) : e;
  return Fr(t, i, _r);
}
function Fr(t, e, r = null) {
  if (!t.equals(e)) {
    Tt.set(t, at ? e : t.v);
    var i = jt.ensure();
    if (i.capture(t, e), (t.f & re) !== 0) {
      const s = (
        /** @type {Derived} */
        t
      );
      (t.f & ie) !== 0 && Ri(s), ke === null && Ai(s);
    }
    t.wv = mn(), en(t, ie, r), O !== null && (O.f & ee) !== 0 && (O.f & (qe | lt)) === 0 && (ve === null ? fa([t]) : ve.push(t)), !i.is_fork && kr.size > 0 && !Js && Hl();
  }
  return e;
}
function Hl() {
  Js = !1;
  for (const t of kr) {
    (t.f & ee) !== 0 && Y(t, Ne);
    let e;
    try {
      e = fr(t);
    } catch {
      e = !0;
    }
    e && Yt(t);
  }
  kr.clear();
}
function sr(t) {
  mt(t, t.v + 1);
}
function en(t, e, r) {
  var i = t.reactions;
  if (i !== null)
    for (var s = i.length, n = 0; n < s; n++) {
      var l = i[n], a = l.f, o = (a & ie) === 0;
      if (o && Y(l, e), (a & Mr) !== 0)
        kr.add(
          /** @type {Effect} */
          l
        );
      else if ((a & re) !== 0) {
        var h = (
          /** @type {Derived} */
          l
        );
        ke?.delete(h), (a & Mt) === 0 && (a & ye && (O === null || (O.f & Sr) === 0) && (l.f |= Mt), en(h, Ne, r));
      } else if (o) {
        var f = (
          /** @type {Effect} */
          l
        );
        (a & Re) !== 0 && Ue !== null && Ue.add(f), r !== null ? r.push(f) : Si(f);
      }
    }
}
function it(t) {
  if (typeof t != "object" || t === null || ir in t)
    return t;
  const e = Ns(t);
  if (e !== hl && e !== cl)
    return t;
  var r = /* @__PURE__ */ new Map(), i = Ls(t), s = /* @__PURE__ */ Qe(0), n = At, l = (a) => {
    if (At === n)
      return a();
    var o = I, h = At;
    Te(null), Zi(n);
    var f = a();
    return Te(o), Zi(h), f;
  };
  return i && r.set("length", /* @__PURE__ */ Qe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, o, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && wl();
        var f = r.get(o);
        return f === void 0 ? l(() => {
          var c = /* @__PURE__ */ Qe(h.value);
          return r.set(o, c), c;
        }) : mt(f, h.value, !0), !0;
      },
      deleteProperty(a, o) {
        var h = r.get(o);
        if (h === void 0) {
          if (o in a) {
            const f = l(() => /* @__PURE__ */ Qe(K));
            r.set(o, f), sr(s);
          }
        } else
          mt(h, K), sr(s);
        return !0;
      },
      get(a, o, h) {
        if (o === ir)
          return t;
        var f = r.get(o), c = o in a;
        if (f === void 0 && (!c || rr(a, o)?.writable) && (f = l(() => {
          var d = it(c ? a[o] : K), p = /* @__PURE__ */ Qe(d);
          return p;
        }), r.set(o, f)), f !== void 0) {
          var u = bt(f);
          return u === K ? void 0 : u;
        }
        return Reflect.get(a, o, h);
      },
      getOwnPropertyDescriptor(a, o) {
        var h = Reflect.getOwnPropertyDescriptor(a, o);
        if (h && "value" in h) {
          var f = r.get(o);
          f && (h.value = bt(f));
        } else if (h === void 0) {
          var c = r.get(o), u = c?.v;
          if (c !== void 0 && u !== K)
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return h;
      },
      has(a, o) {
        if (o === ir)
          return !0;
        var h = r.get(o), f = h !== void 0 && h.v !== K || Reflect.has(a, o);
        if (h !== void 0 || O !== null && (!f || rr(a, o)?.writable)) {
          h === void 0 && (h = l(() => {
            var u = f ? it(a[o]) : K, d = /* @__PURE__ */ Qe(u);
            return d;
          }), r.set(o, h));
          var c = bt(h);
          if (c === K)
            return !1;
        }
        return f;
      },
      set(a, o, h, f) {
        var c = r.get(o), u = o in a;
        if (i && o === "length")
          for (var d = h; d < /** @type {Source<number>} */
          c.v; d += 1) {
            var p = r.get(d + "");
            p !== void 0 ? mt(p, K) : d in a && (p = l(() => /* @__PURE__ */ Qe(K)), r.set(d + "", p));
          }
        if (c === void 0)
          (!u || rr(a, o)?.writable) && (c = l(() => /* @__PURE__ */ Qe(void 0)), mt(c, it(h)), r.set(o, c));
        else {
          u = c.v !== K;
          var m = l(() => it(h));
          mt(c, m);
        }
        var v = Reflect.getOwnPropertyDescriptor(a, o);
        if (v?.set && v.set.call(f, h), !u) {
          if (i && typeof o == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), M = Number(o);
            Number.isInteger(M) && M >= b.v && mt(b, M + 1);
          }
          sr(s);
        }
        return !0;
      },
      ownKeys(a) {
        bt(s);
        var o = Reflect.ownKeys(a).filter((c) => {
          var u = r.get(c);
          return u === void 0 || u.v !== K;
        });
        for (var [h, f] of r)
          f.v !== K && !(h in a) && o.push(h);
        return o;
      },
      setPrototypeOf() {
        El();
      }
    }
  );
}
function $i(t) {
  try {
    if (t !== null && typeof t == "object" && ir in t)
      return t[ir];
  } catch {
  }
  return t;
}
function Zl(t, e) {
  return Object.is($i(t), $i(e));
}
var ji, tn, rn, sn;
function Ql() {
  if (ji === void 0) {
    ji = window, tn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    rn = rr(e, "firstChild").get, sn = rr(e, "nextSibling").get, Gi(t) && (t[ri] = void 0, t[br] = null, t[ii] = void 0, t.__e = void 0), Gi(r) && (r[ml] = void 0);
  }
}
function nn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ln(t) {
  return (
    /** @type {TemplateNode | null} */
    rn.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function an(t) {
  return (
    /** @type {TemplateNode | null} */
    sn.call(t)
  );
}
function Yi(t, e) {
  return /* @__PURE__ */ ln(t);
}
function Kl(t, e, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Bs, t, void 0)
  );
}
function Jl(t, e) {
  if (e) {
    const r = document.body;
    t.autofocus = !0, nt(() => {
      document.activeElement === r && t.focus();
    });
  }
}
function ki(t) {
  var e = I, r = O;
  Te(null), Ie(null);
  try {
    return t();
  } finally {
    Te(e), Ie(r);
  }
}
function ea(t) {
  O === null && (I === null && xl(), _l()), at && bl();
}
function ta(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function $e(t, e) {
  var r = O;
  r !== null && (r.f & De) !== 0 && (t |= De);
  var i = {
    ctx: Ee,
    deps: null,
    nodes: null,
    f: t | ie | ye,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  G?.register_created_effect(i);
  var s = i;
  if ((t & qt) !== 0)
    Lt !== null ? Lt.push(i) : jt.ensure().schedule(i);
  else if (e !== null) {
    try {
      Yt(i);
    } catch (l) {
      throw ge(i), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Ht) === 0 && (s = s.first, (t & Re) !== 0 && (t & Ar) !== 0 && s !== null && (s.f |= Ar));
  }
  if (s !== null && (s.parent = r, r !== null && ta(s, r), I !== null && (I.f & re) !== 0 && (t & lt) === 0)) {
    var n = (
      /** @type {Derived} */
      I
    );
    (n.effects ?? (n.effects = [])).push(s);
  }
  return i;
}
function Fi() {
  return I !== null && !Fe;
}
function on(t) {
  const e = $e(yi, null);
  return Y(e, ee), e.teardown = t, e;
}
function ra(t) {
  ea();
  var e = (
    /** @type {Effect} */
    O.f
  ), r = !I && (e & qe) !== 0 && (e & St) === 0;
  if (r) {
    var i = (
      /** @type {ComponentContext} */
      Ee
    );
    (i.e ?? (i.e = [])).push(t);
  } else
    return hn(t);
}
function hn(t) {
  return $e(qt | pl, t);
}
function ia(t) {
  jt.ensure();
  const e = $e(lt | Ht, t);
  return (r = {}) => new Promise((i) => {
    r.outro ? Er(e, () => {
      ge(e), i(void 0);
    }) : (ge(e), i(void 0));
  });
}
function cn(t) {
  return $e(qt, t);
}
function sa(t) {
  return $e(Nt | Ht, t);
}
function na(t, e = 0) {
  return $e(yi | e, t);
}
function la(t, e = 0) {
  var r = $e(Re | e, t);
  return r;
}
function fn(t, e = 0) {
  var r = $e(wi | e, t);
  return r;
}
function Ve(t) {
  return $e(qe | Ht, t);
}
function un(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = at, i = I;
    Hi(!0), Te(null);
    try {
      e.call(null);
    } finally {
      Hi(r), Te(i);
    }
  }
}
function Ci(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && ki(() => {
      s.abort(Nr);
    });
    var i = r.next;
    (r.f & lt) !== 0 ? r.parent = null : ge(r, e), r = i;
  }
}
function aa(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & qe) === 0 && ge(e), e = r;
  }
}
function ge(t, e = !0) {
  var r = !1;
  (e || (t.f & dl) !== 0) && t.nodes !== null && t.nodes.end !== null && (oa(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), Y(t, Wi), Ci(t, e && !r), lr(t, 0);
  var i = t.nodes && t.nodes.t;
  if (i !== null)
    for (const n of i)
      n.stop();
  un(t), t.f ^= Wi, t.f |= Le;
  var s = t.parent;
  s !== null && s.first !== null && dn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function oa(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : /* @__PURE__ */ an(t);
    t.remove(), t = r;
  }
}
function dn(t) {
  var e = t.parent, r = t.prev, i = t.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), e !== null && (e.first === t && (e.first = i), e.last === t && (e.last = r));
}
function Er(t, e, r = !0) {
  var i = [];
  pn(t, i, !0);
  var s = () => {
    r && ge(t), e && e();
  }, n = i.length;
  if (n > 0) {
    var l = () => --n || s();
    for (var a of i)
      a.out(l);
  } else
    s();
}
function pn(t, e, r) {
  if ((t.f & De) === 0) {
    t.f ^= De;
    var i = t.nodes && t.nodes.t;
    if (i !== null)
      for (const a of i)
        (a.is_global || r) && e.push(a);
    for (var s = t.first; s !== null; ) {
      var n = s.next;
      if ((s.f & lt) === 0) {
        var l = (s.f & Ar) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & qe) !== 0 && (t.f & Re) !== 0;
        pn(s, e, l ? r : !1);
      }
      s = n;
    }
  }
}
function ha(t, e) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end; r !== null; ) {
      var s = r === i ? null : /* @__PURE__ */ an(r);
      e.append(r), r = s;
    }
}
let Tr = !1, at = !1;
function Hi(t) {
  at = t;
}
let I = null, Fe = !1;
function Te(t) {
  I = t;
}
let O = null;
function Ie(t) {
  O = t;
}
let we = null;
function ca(t) {
  I !== null && (we === null ? we = [t] : we.push(t));
}
let ae = null, fe = 0, ve = null;
function fa(t) {
  ve = t;
}
let gn = 1, vt = 0, At = vt;
function Zi(t) {
  At = t;
}
function mn() {
  return ++gn;
}
function fr(t) {
  var e = t.f;
  if ((e & ie) !== 0)
    return !0;
  if (e & re && (t.f &= ~Mt), (e & Ne) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), i = r.length, s = 0; s < i; s++) {
      var n = r[s];
      if (fr(
        /** @type {Derived} */
        n
      ) && Qs(
        /** @type {Derived} */
        n
      ), n.wv > t.wv)
        return !0;
    }
    (e & ye) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    ke === null && Y(t, ee);
  }
  return !1;
}
function vn(t, e, r = !0) {
  var i = t.reactions;
  if (i !== null && !(we !== null && Xt.call(we, t)))
    for (var s = 0; s < i.length; s++) {
      var n = i[s];
      (n.f & re) !== 0 ? vn(
        /** @type {Derived} */
        n,
        e,
        !1
      ) : e === n && (r ? Y(n, ie) : (n.f & ee) !== 0 && Y(n, Ne), Si(
        /** @type {Effect} */
        n
      ));
    }
}
function bn(t) {
  var m;
  var e = ae, r = fe, i = ve, s = I, n = we, l = Ee, a = Fe, o = At, h = t.f;
  ae = /** @type {null | Value[]} */
  null, fe = 0, ve = null, I = (h & (qe | lt)) === 0 ? t : null, we = null, $t(t.ctx), Fe = !1, At = ++vt, t.ac !== null && (ki(() => {
    t.ac.abort(Nr);
  }), t.ac = null);
  try {
    t.f |= Sr;
    var f = (
      /** @type {Function} */
      t.fn
    ), c = f();
    t.f |= St;
    var u = t.deps, d = G?.is_fork;
    if (ae !== null) {
      var p;
      if (d || lr(t, fe), u !== null && fe > 0)
        for (u.length = fe + ae.length, p = 0; p < ae.length; p++)
          u[fe + p] = ae[p];
      else
        t.deps = u = ae;
      if (Fi() && (t.f & ye) !== 0)
        for (p = fe; p < u.length; p++)
          ((m = u[p]).reactions ?? (m.reactions = [])).push(t);
    } else !d && u !== null && fe < u.length && (lr(t, fe), u.length = fe);
    if (Vs() && ve !== null && !Fe && u !== null && (t.f & (re | Ne | ie)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      ve.length; p++)
        vn(
          ve[p],
          /** @type {Effect} */
          t
        );
    if (s !== null && s !== t) {
      if (vt++, s.deps !== null)
        for (let v = 0; v < r; v += 1)
          s.deps[v].rv = vt;
      if (e !== null)
        for (const v of e)
          v.rv = vt;
      ve !== null && (i === null ? i = ve : i.push(.../** @type {Source[]} */
      ve));
    }
    return (t.f & st) !== 0 && (t.f ^= st), c;
  } catch (v) {
    return Gs(v);
  } finally {
    t.f ^= Sr, ae = e, fe = r, ve = i, I = s, we = n, $t(l), Fe = a, At = o;
  }
}
function ua(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var i = nl.call(r, t);
    if (i !== -1) {
      var s = r.length - 1;
      s === 0 ? r = e.reactions = null : (r[i] = r[s], r.pop());
    }
  }
  if (r === null && (e.f & re) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !Xt.call(ae, e))) {
    var n = (
      /** @type {Derived} */
      e
    );
    (n.f & ye) !== 0 && (n.f ^= ye, n.f &= ~Mt), n.v !== K && Ai(n), Yl(n), lr(n, 0);
  }
}
function lr(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var i = e; i < r.length; i++)
      ua(t, r[i]);
}
function Yt(t) {
  var e = t.f;
  if ((e & Le) === 0) {
    Y(t, ee);
    var r = O, i = Tr;
    O = t, Tr = !0;
    try {
      (e & (Re | wi)) !== 0 ? aa(t) : Ci(t), un(t);
      var s = bn(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = gn;
      var n;
    } finally {
      Tr = i, O = r;
    }
  }
}
function bt(t) {
  var e = t.f, r = (e & re) !== 0;
  if (I !== null && !Fe) {
    var i = O !== null && (O.f & Le) !== 0;
    if (!i && (we === null || !Xt.call(we, t))) {
      var s = I.deps;
      if ((I.f & Sr) !== 0)
        t.rv < vt && (t.rv = vt, ae === null && s !== null && s[fe] === t ? fe++ : ae === null ? ae = [t] : ae.push(t));
      else {
        (I.deps ?? (I.deps = [])).push(t);
        var n = t.reactions;
        n === null ? t.reactions = [I] : Xt.call(n, I) || n.push(I);
      }
    }
  }
  if (at && Tt.has(t))
    return Tt.get(t);
  if (r) {
    var l = (
      /** @type {Derived} */
      t
    );
    if (at) {
      var a = l.v;
      return ((l.f & ee) === 0 && l.reactions !== null || xn(l)) && (a = Ri(l)), Tt.set(l, a), a;
    }
    var o = (l.f & ye) === 0 && !Fe && I !== null && (Tr || (I.f & ye) !== 0), h = (l.f & St) === 0;
    fr(l) && (o && (l.f |= ye), Qs(l)), o && !h && (Ks(l), _n(l));
  }
  if (ke?.has(t))
    return ke.get(t);
  if ((t.f & st) !== 0)
    throw t.v;
  return t.v;
}
function _n(t) {
  if (t.f |= ye, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & re) !== 0 && (e.f & ye) === 0 && (Ks(
        /** @type {Derived} */
        e
      ), _n(
        /** @type {Derived} */
        e
      ));
}
function xn(t) {
  if (t.v === K) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Tt.has(e) || (e.f & re) !== 0 && xn(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function yn(t) {
  var e = Fe;
  try {
    return Fe = !0, t();
  } finally {
    Fe = e;
  }
}
function da(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const pa = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function ga(t) {
  return pa.includes(t);
}
const ma = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function va(t) {
  return t = t.toLowerCase(), ma[t] ?? t;
}
const ba = ["touchstart", "touchmove"];
function _a(t) {
  return ba.includes(t);
}
const _t = Symbol("events"), wn = /* @__PURE__ */ new Set(), ui = /* @__PURE__ */ new Set();
function xa(t, e, r, i = {}) {
  function s(n) {
    if (i.capture || di.call(e, n), !n.cancelBubble)
      return ki(() => r?.call(this, n));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? nt(() => {
    e.addEventListener(t, s, i);
  }) : e.addEventListener(t, s, i), s;
}
function ya(t, e, r) {
  (e[_t] ?? (e[_t] = {}))[t] = r;
}
function wa(t) {
  for (var e = 0; e < t.length; e++)
    wn.add(t[e]);
  for (var r of ui)
    r(t);
}
let Qi = null;
function di(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), i = t.type, s = t.composedPath?.() || [], n = (
    /** @type {null | Element} */
    s[0] || t.target
  );
  Qi = t;
  var l = 0, a = Qi === t && t[_t];
  if (a) {
    var o = s.indexOf(a);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[_t] = e;
      return;
    }
    var h = s.indexOf(e);
    if (h === -1)
      return;
    o <= h && (l = o);
  }
  if (n = /** @type {Element} */
  s[l] || t.target, n !== e) {
    al(t, "currentTarget", {
      configurable: !0,
      get() {
        return n || r;
      }
    });
    var f = I, c = O;
    Te(null), Ie(null);
    try {
      for (var u, d = []; n !== null; ) {
        var p = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var m = n[_t]?.[i];
          m != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === n) && m.call(n, t);
        } catch (v) {
          u ? d.push(v) : u = v;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        n = p;
      }
      if (u) {
        for (let v of d)
          queueMicrotask(() => {
            throw v;
          });
        throw u;
      }
    } finally {
      t[_t] = e, delete t.currentTarget, Te(f), Ie(c);
    }
  }
}
const Ea = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Ta(t) {
  return (
    /** @type {string} */
    Ea?.createHTML(t) ?? t
  );
}
function Aa(t) {
  var e = Kl("template");
  return e.innerHTML = Ta(t.replaceAll("<!>", "<!---->")), e.content;
}
function Ma(t, e) {
  var r = (
    /** @type {Effect} */
    O
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function En(t, e) {
  var r = (e & Ml) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Aa(s ? t : "<!>" + t), i = /** @type {TemplateNode} */
    /* @__PURE__ */ ln(i));
    var n = (
      /** @type {TemplateNode} */
      r || tn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    return Ma(n, n), n;
  };
}
function Tn(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Sa(t, e) {
  return Ra(t, e);
}
const gr = /* @__PURE__ */ new Map();
function Ra(t, { target: e, anchor: r, props: i = {}, events: s, context: n, intro: l = !0, transformError: a }) {
  Ql();
  var o = void 0, h = ia(() => {
    var f = r ?? e.appendChild(nn());
    Ol(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (d) => {
        Ei({});
        var p = (
          /** @type {ComponentContext} */
          Ee
        );
        n && (p.c = n), s && (i.$$events = s), o = t(d, i) || {}, Ti();
      },
      a
    );
    var c = /* @__PURE__ */ new Set(), u = (d) => {
      for (var p = 0; p < d.length; p++) {
        var m = d[p];
        if (!c.has(m)) {
          c.add(m);
          var v = _a(m);
          for (const _ of [e, document]) {
            var b = gr.get(_);
            b === void 0 && (b = /* @__PURE__ */ new Map(), gr.set(_, b));
            var M = b.get(m);
            M === void 0 ? (_.addEventListener(m, di, { passive: v }), b.set(m, 1)) : b.set(m, M + 1);
          }
        }
      }
    };
    return u(ll(wn)), ui.add(u), () => {
      for (var d of c)
        for (const v of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            gr.get(v)
          ), m = (
            /** @type {number} */
            p.get(d)
          );
          --m == 0 ? (v.removeEventListener(d, di), p.delete(d), p.size === 0 && gr.delete(v)) : p.set(d, m);
        }
      ui.delete(u), f !== r && f.parentNode?.removeChild(f);
    };
  });
  return pi.set(o, h), o;
}
let pi = /* @__PURE__ */ new WeakMap();
function Pc(t, e) {
  const r = pi.get(t);
  return r ? (pi.delete(t), r(e)) : Promise.resolve();
}
function An(t, e) {
  var r = void 0, i;
  fn(() => {
    r !== (r = e()) && (i && (ge(i), i = null), r && (i = Ve(() => {
      cn(() => (
        /** @type {(node: Element) => void} */
        r(t)
      ));
    })));
  });
}
function Mn(t) {
  var e, r, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (e = 0; e < s; e++) t[e] && (r = Mn(t[e])) && (i && (i += " "), i += r);
  } else for (r in t) t[r] && (i && (i += " "), i += r);
  return i;
}
function Sn() {
  for (var t, e, r = 0, i = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (e = Mn(t)) && (i && (i += " "), i += e);
  return i;
}
function ka(t) {
  return typeof t == "object" ? Sn(t) : t ?? "";
}
const Ki = [...` 	
\r\f \v\uFEFF`];
function Fa(t, e, r) {
  var i = t == null ? "" : "" + t;
  if (r) {
    for (var s of Object.keys(r))
      if (r[s])
        i = i ? i + " " + s : s;
      else if (i.length)
        for (var n = s.length, l = 0; (l = i.indexOf(s, l)) >= 0; ) {
          var a = l + n;
          (l === 0 || Ki.includes(i[l - 1])) && (a === i.length || Ki.includes(i[a])) ? i = (l === 0 ? "" : i.substring(0, l)) + i.substring(a + 1) : l = a;
        }
  }
  return i === "" ? null : i;
}
function Ji(t, e = !1) {
  var r = e ? " !important;" : ";", i = "";
  for (var s of Object.keys(t)) {
    var n = t[s];
    n != null && n !== "" && (i += " " + s + ": " + n + r);
  }
  return i;
}
function qr(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Ca(t, e) {
  if (e) {
    var r = "", i, s;
    if (Array.isArray(e) ? (i = e[0], s = e[1]) : i = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var n = !1, l = 0, a = !1, o = [];
      i && o.push(...Object.keys(i).map(qr)), s && o.push(...Object.keys(s).map(qr));
      var h = 0, f = -1;
      const m = t.length;
      for (var c = 0; c < m; c++) {
        var u = t[c];
        if (a ? u === "/" && t[c - 1] === "*" && (a = !1) : n ? n === u && (n = !1) : u === "/" && t[c + 1] === "*" ? a = !0 : u === '"' || u === "'" ? n = u : u === "(" ? l++ : u === ")" && l--, !a && n === !1 && l === 0) {
          if (u === ":" && f === -1)
            f = c;
          else if (u === ";" || c === m - 1) {
            if (f !== -1) {
              var d = qr(t.substring(h, f).trim());
              if (!o.includes(d)) {
                u !== ";" && c++;
                var p = t.substring(h, c).trim();
                r += " " + p + ";";
              }
            }
            h = c + 1, f = -1;
          }
        }
      }
    }
    return i && (r += Ji(i)), s && (r += Ji(s, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function za(t, e, r, i, s, n) {
  var l = (
    /** @type {any} */
    t[ri]
  );
  if (l !== r || l === void 0) {
    var a = Fa(r, i, n);
    a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a), t[ri] = r;
  } else if (n && s !== n)
    for (var o in n) {
      var h = !!n[o];
      (s == null || h !== !!s[o]) && t.classList.toggle(o, h);
    }
  return n;
}
function $r(t, e = {}, r, i) {
  for (var s in r) {
    var n = r[s];
    e[s] !== n && (r[s] == null ? t.style.removeProperty(s) : t.style.setProperty(s, n, i));
  }
}
function Pa(t, e, r, i) {
  var s = (
    /** @type {any} */
    t[ii]
  );
  if (s !== e) {
    var n = Ca(e, i);
    n == null ? t.removeAttribute("style") : t.style.cssText = n, t[ii] = e;
  } else i && (Array.isArray(i) ? ($r(t, r?.[0], i[0]), $r(t, r?.[1], i[1], "important")) : $r(t, r, i));
  return i;
}
function gi(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ls(e))
      return kl();
    for (var i of t.options)
      i.selected = e.includes(es(i));
    return;
  }
  for (i of t.options) {
    var s = es(i);
    if (Zl(s, e)) {
      i.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function Da(t) {
  var e = new MutationObserver(() => {
    gi(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), on(() => {
    e.disconnect();
  });
}
function es(t) {
  return "__value" in t ? t.__value : t.value;
}
const Kt = Symbol("class"), Jt = Symbol("style"), Rn = Symbol("is custom element"), kn = Symbol("is html"), La = Os ? "option" : "OPTION", Na = Os ? "select" : "SELECT";
function Ia(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function ts(t, e, r, i) {
  var s = Fn(t);
  s[e] !== (s[e] = r) && (e === "loading" && (t[gl] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && Cn(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Oa(t, e, r, i, s = !1, n = !1) {
  var l = Fn(t), a = l[Rn], o = !l[kn], h = e || {}, f = t.nodeName === La;
  for (var c in e)
    c in r || (r[c] = null);
  r.class ? r.class = ka(r.class) : r[Kt] && (r.class = null), r[Jt] && (r.style ?? (r.style = null));
  var u = Cn(t);
  for (const _ in r) {
    let x = r[_];
    if (f && _ === "value" && x == null) {
      t.value = t.__value = "", h[_] = x;
      continue;
    }
    if (_ === "class") {
      var d = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      za(t, d, x, i, e?.[Kt], r[Kt]), h[_] = x, h[Kt] = r[Kt];
      continue;
    }
    if (_ === "style") {
      Pa(t, x, e?.[Jt], r[Jt]), h[_] = x, h[Jt] = r[Jt];
      continue;
    }
    var p = h[_];
    if (!(x === p && !(x === void 0 && t.hasAttribute(_)))) {
      h[_] = x;
      var m = _[0] + _[1];
      if (m !== "$$")
        if (m === "on") {
          const A = {}, S = "$$" + _;
          let k = _.slice(2);
          var v = ga(k);
          if (da(k) && (k = k.slice(0, -7), A.capture = !0), !v && p) {
            if (x != null) continue;
            t.removeEventListener(k, h[S], A), h[S] = null;
          }
          if (v)
            ya(k, t, x), wa([k]);
          else if (x != null) {
            let y = function(L) {
              h[_].call(this, L);
            };
            h[S] = xa(k, t, y, A);
          }
        } else if (_ === "style")
          ts(t, _, x);
        else if (_ === "autofocus")
          Jl(
            /** @type {HTMLElement} */
            t,
            !!x
          );
        else if (!a && (_ === "__value" || _ === "value" && x != null))
          t.value = t.__value = x;
        else if (_ === "selected" && f)
          Ia(
            /** @type {HTMLOptionElement} */
            t,
            x
          );
        else {
          var b = _;
          o || (b = va(b));
          var M = b === "defaultValue" || b === "defaultChecked";
          if (x == null && !a && !M)
            if (l[_] = null, b === "value" || b === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                t
              );
              const S = e === void 0;
              if (b === "value") {
                let k = A.defaultValue;
                A.removeAttribute(b), A.defaultValue = k, A.value = A.__value = S ? k : null;
              } else {
                let k = A.defaultChecked;
                A.removeAttribute(b), A.defaultChecked = k, A.checked = S ? k : !1;
              }
            } else
              t.removeAttribute(_);
          else M || u.includes(b) && (a || typeof x != "string") ? (t[b] = x, b in l && (l[b] = K)) : typeof x != "function" && ts(t, b, x);
        }
    }
  }
  return h;
}
function Ba(t, e, r = [], i = [], s = [], n, l = !1, a = !1) {
  Wl(s, r, i, (o) => {
    var h = void 0, f = {}, c = t.nodeName === Na, u = !1;
    if (fn(() => {
      var p = e(...o.map(bt)), m = Oa(
        t,
        h,
        p,
        n,
        l,
        a
      );
      u && c && "value" in p && gi(
        /** @type {HTMLSelectElement} */
        t,
        p.value
      );
      for (let b of Object.getOwnPropertySymbols(f))
        p[b] || ge(f[b]);
      for (let b of Object.getOwnPropertySymbols(p)) {
        var v = p[b];
        b.description === Sl && (!h || v !== h[b]) && (f[b] && ge(f[b]), f[b] = Ve(() => An(t, () => v))), m[b] = v;
      }
      h = m;
    }), c) {
      var d = (
        /** @type {HTMLSelectElement} */
        t
      );
      cn(() => {
        gi(
          d,
          /** @type {Record<string | symbol, any>} */
          h.value,
          !0
        ), Da(d);
      });
    }
    u = !0;
  });
}
function Fn(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    t[br] ?? (t[br] = {
      [Rn]: t.nodeName.includes("-"),
      [kn]: t.namespaceURI === Bs
    })
  );
}
var rs = /* @__PURE__ */ new Map();
function Cn(t) {
  var e = t.getAttribute("is") || t.nodeName, r = rs.get(e);
  if (r) return r;
  rs.set(e, r = []);
  for (var i, s = t, n = Element.prototype; n !== s; ) {
    i = ol(s);
    for (var l in i)
      i[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && r.push(l);
    s = Ns(s);
  }
  return r;
}
const Ua = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function Va(t, e, r) {
  return new Proxy(
    { props: t, exclude: e },
    Ua
  );
}
function Se(t, e, r, i) {
  var s = (
    /** @type {V} */
    i
  ), n = !0, l = () => (n && (n = !1, s = /** @type {V} */
  i), s), a;
  a = /** @type {V} */
  t[e], a === void 0 && i !== void 0 && (a = l());
  var o;
  return o = () => {
    var h = (
      /** @type {V} */
      t[e]
    );
    return h === void 0 ? l() : (n = !0, h);
  }, o;
}
const Ga = "5";
var Ds;
typeof window < "u" && ((Ds = window.__svelte ?? (window.__svelte = {})).v ?? (Ds.v = /* @__PURE__ */ new Set())).add(Ga);
function nr(t) {
  let e = t[0], r = t[1], i = t[2];
  return Math.sqrt(e * e + r * r + i * i);
}
function mi(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function Wa(t, e, r, i) {
  return t[0] = e, t[1] = r, t[2] = i, t;
}
function is(t, e, r) {
  return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
}
function ss(t, e, r) {
  return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t[2] = e[2] - r[2], t;
}
function Xa(t, e, r) {
  return t[0] = e[0] * r[0], t[1] = e[1] * r[1], t[2] = e[2] * r[2], t;
}
function qa(t, e, r) {
  return t[0] = e[0] / r[0], t[1] = e[1] / r[1], t[2] = e[2] / r[2], t;
}
function jr(t, e, r) {
  return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t;
}
function $a(t, e) {
  let r = e[0] - t[0], i = e[1] - t[1], s = e[2] - t[2];
  return Math.sqrt(r * r + i * i + s * s);
}
function ja(t, e) {
  let r = e[0] - t[0], i = e[1] - t[1], s = e[2] - t[2];
  return r * r + i * i + s * s;
}
function ns(t) {
  let e = t[0], r = t[1], i = t[2];
  return e * e + r * r + i * i;
}
function Ya(t, e) {
  return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function Ha(t, e) {
  return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t;
}
function vi(t, e) {
  let r = e[0], i = e[1], s = e[2], n = r * r + i * i + s * s;
  return n > 0 && (n = 1 / Math.sqrt(n)), t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t;
}
function zn(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function ls(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = r[0], a = r[1], o = r[2];
  return t[0] = s * o - n * a, t[1] = n * l - i * o, t[2] = i * a - s * l, t;
}
function Za(t, e, r, i) {
  let s = e[0], n = e[1], l = e[2];
  return t[0] = s + i * (r[0] - s), t[1] = n + i * (r[1] - n), t[2] = l + i * (r[2] - l), t;
}
function Qa(t, e, r, i, s) {
  const n = Math.exp(-i * s);
  let l = e[0], a = e[1], o = e[2];
  return t[0] = r[0] + (l - r[0]) * n, t[1] = r[1] + (a - r[1]) * n, t[2] = r[2] + (o - r[2]) * n, t;
}
function Ka(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = r[3] * i + r[7] * s + r[11] * n + r[15];
  return l = l || 1, t[0] = (r[0] * i + r[4] * s + r[8] * n + r[12]) / l, t[1] = (r[1] * i + r[5] * s + r[9] * n + r[13]) / l, t[2] = (r[2] * i + r[6] * s + r[10] * n + r[14]) / l, t;
}
function Ja(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = r[3] * i + r[7] * s + r[11] * n + r[15];
  return l = l || 1, t[0] = (r[0] * i + r[4] * s + r[8] * n) / l, t[1] = (r[1] * i + r[5] * s + r[9] * n) / l, t[2] = (r[2] * i + r[6] * s + r[10] * n) / l, t;
}
function eo(t, e, r) {
  let i = e[0], s = e[1], n = e[2];
  return t[0] = i * r[0] + s * r[3] + n * r[6], t[1] = i * r[1] + s * r[4] + n * r[7], t[2] = i * r[2] + s * r[5] + n * r[8], t;
}
function to(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = r[0], a = r[1], o = r[2], h = r[3], f = a * n - o * s, c = o * i - l * n, u = l * s - a * i, d = a * u - o * c, p = o * f - l * u, m = l * c - a * f, v = h * 2;
  return f *= v, c *= v, u *= v, d *= 2, p *= 2, m *= 2, t[0] = i + f + d, t[1] = s + c + p, t[2] = n + u + m, t;
}
const ro = /* @__PURE__ */ (function() {
  const t = [0, 0, 0], e = [0, 0, 0];
  return function(r, i) {
    mi(t, r), mi(e, i), vi(t, t), vi(e, e);
    let s = zn(t, e);
    return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s);
  };
})();
function io(t, e) {
  return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
}
class pe extends Array {
  constructor(e = 0, r = e, i = e) {
    return super(e, r, i), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    this[0] = e;
  }
  set y(e) {
    this[1] = e;
  }
  set z(e) {
    this[2] = e;
  }
  set(e, r = e, i = e) {
    return e.length ? this.copy(e) : (Wa(this, e, r, i), this);
  }
  copy(e) {
    return mi(this, e), this;
  }
  add(e, r) {
    return r ? is(this, e, r) : is(this, this, e), this;
  }
  sub(e, r) {
    return r ? ss(this, e, r) : ss(this, this, e), this;
  }
  multiply(e) {
    return e.length ? Xa(this, this, e) : jr(this, this, e), this;
  }
  divide(e) {
    return e.length ? qa(this, this, e) : jr(this, this, 1 / e), this;
  }
  inverse(e = this) {
    return Ha(this, e), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return nr(this);
  }
  distance(e) {
    return e ? $a(this, e) : nr(this);
  }
  squaredLen() {
    return ns(this);
  }
  squaredDistance(e) {
    return e ? ja(this, e) : ns(this);
  }
  negate(e = this) {
    return Ya(this, e), this;
  }
  cross(e, r) {
    return r ? ls(this, e, r) : ls(this, this, e), this;
  }
  scale(e) {
    return jr(this, this, e), this;
  }
  normalize() {
    return vi(this, this), this;
  }
  dot(e) {
    return zn(this, e);
  }
  equals(e) {
    return io(this, e);
  }
  applyMatrix3(e) {
    return eo(this, this, e), this;
  }
  applyMatrix4(e) {
    return Ka(this, this, e), this;
  }
  scaleRotateMatrix4(e) {
    return Ja(this, this, e), this;
  }
  applyQuaternion(e) {
    return to(this, this, e), this;
  }
  angle(e) {
    return ro(this, e);
  }
  lerp(e, r) {
    return Za(this, this, e, r), this;
  }
  smoothLerp(e, r, i) {
    return Qa(this, this, e, r, i), this;
  }
  clone() {
    return new pe(this[0], this[1], this[2]);
  }
  fromArray(e, r = 0) {
    return this[0] = e[r], this[1] = e[r + 1], this[2] = e[r + 2], this;
  }
  toArray(e = [], r = 0) {
    return e[r] = this[0], e[r + 1] = this[1], e[r + 2] = this[2], e;
  }
  transformDirection(e) {
    const r = this[0], i = this[1], s = this[2];
    return this[0] = e[0] * r + e[4] * i + e[8] * s, this[1] = e[1] * r + e[5] * i + e[9] * s, this[2] = e[2] * r + e[6] * i + e[10] * s, this.normalize();
  }
}
const as = /* @__PURE__ */ new pe();
let so = 1, no = 1, os = !1;
class lo {
  constructor(e, r = {}) {
    e.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = e, this.attributes = r, this.id = so++, this.VAOs = {}, this.drawRange = { start: 0, count: 0 }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
    for (let i in r)
      this.addAttribute(i, r[i]);
  }
  addAttribute(e, r) {
    if (this.attributes[e] = r, r.id = no++, r.size = r.size || 1, r.type = r.type || (r.data.constructor === Float32Array ? this.gl.FLOAT : r.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), r.target = e === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, r.normalized = r.normalized || !1, r.stride = r.stride || 0, r.offset = r.offset || 0, r.count = r.count || (r.stride ? r.data.byteLength / r.stride : r.data.length / r.size), r.divisor = r.instanced || 0, r.needsUpdate = !1, r.usage = r.usage || this.gl.STATIC_DRAW, r.buffer || this.updateAttribute(r), r.divisor) {
      if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== r.count * r.divisor)
        return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, r.count * r.divisor);
      this.instancedCount = r.count * r.divisor;
    } else e === "index" ? this.drawRange.count = r.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, r.count));
  }
  updateAttribute(e) {
    const r = !e.buffer;
    r && (e.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== e.buffer && (this.gl.bindBuffer(e.target, e.buffer), this.glState.boundBuffer = e.buffer), r ? this.gl.bufferData(e.target, e.data, e.usage) : this.gl.bufferSubData(e.target, 0, e.data), e.needsUpdate = !1;
  }
  setIndex(e) {
    this.addAttribute("index", e);
  }
  setDrawRange(e, r) {
    this.drawRange.start = e, this.drawRange.count = r;
  }
  setInstancedCount(e) {
    this.instancedCount = e;
  }
  createVAO(e) {
    this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]), this.bindAttributes(e);
  }
  bindAttributes(e) {
    e.attributeLocations.forEach((r, { name: i, type: s }) => {
      if (!this.attributes[i]) {
        console.warn(`active attribute ${i} not being supplied`);
        return;
      }
      const n = this.attributes[i];
      this.gl.bindBuffer(n.target, n.buffer), this.glState.boundBuffer = n.buffer;
      let l = 1;
      s === 35674 && (l = 2), s === 35675 && (l = 3), s === 35676 && (l = 4);
      const a = n.size / l, o = l === 1 ? 0 : l * l * 4, h = l === 1 ? 0 : l * 4;
      for (let f = 0; f < l; f++)
        this.gl.vertexAttribPointer(r + f, a, n.type, n.normalized, n.stride + o, n.offset + f * h), this.gl.enableVertexAttribArray(r + f), this.gl.renderer.vertexAttribDivisor(r + f, n.divisor);
    }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({ program: e, mode: r = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_${e.attributeOrder}` && (this.VAOs[e.attributeOrder] || this.createVAO(e), this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${e.attributeOrder}`), e.attributeLocations.forEach((s, { name: n }) => {
      const l = this.attributes[n];
      l.needsUpdate && this.updateAttribute(l);
    });
    let i = 2;
    this.attributes.index?.type === this.gl.UNSIGNED_INT && (i = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(
      r,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * i,
      this.instancedCount
    ) : this.gl.renderer.drawArraysInstanced(r, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(
      r,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * i
    ) : this.gl.drawArrays(r, this.drawRange.start, this.drawRange.count);
  }
  getPosition() {
    const e = this.attributes.position;
    if (e.data) return e;
    if (!os)
      return console.warn("No position buffer data found to compute bounds"), os = !0;
  }
  computeBoundingBox(e) {
    e || (e = this.getPosition());
    const r = e.data, i = e.size;
    this.bounds || (this.bounds = {
      min: new pe(),
      max: new pe(),
      center: new pe(),
      scale: new pe(),
      radius: 1 / 0
    });
    const s = this.bounds.min, n = this.bounds.max, l = this.bounds.center, a = this.bounds.scale;
    s.set(1 / 0), n.set(-1 / 0);
    for (let o = 0, h = r.length; o < h; o += i) {
      const f = r[o], c = r[o + 1], u = r[o + 2];
      s.x = Math.min(f, s.x), s.y = Math.min(c, s.y), s.z = Math.min(u, s.z), n.x = Math.max(f, n.x), n.y = Math.max(c, n.y), n.z = Math.max(u, n.z);
    }
    a.sub(n, s), l.add(s, n).divide(2);
  }
  computeBoundingSphere(e) {
    e || (e = this.getPosition());
    const r = e.data, i = e.size;
    this.bounds || this.computeBoundingBox(e);
    let s = 0;
    for (let n = 0, l = r.length; n < l; n += i)
      as.fromArray(r, n), s = Math.max(s, this.bounds.center.squaredDistance(as));
    this.bounds.radius = Math.sqrt(s);
  }
  remove() {
    for (let e in this.VAOs)
      this.gl.renderer.deleteVertexArray(this.VAOs[e]), delete this.VAOs[e];
    for (let e in this.attributes)
      this.gl.deleteBuffer(this.attributes[e].buffer), delete this.attributes[e];
  }
}
let ao = 1;
const hs = {};
class Ct {
  constructor(e, {
    vertex: r,
    fragment: i,
    uniforms: s = {},
    transparent: n = !1,
    cullFace: l = e.BACK,
    frontFace: a = e.CCW,
    depthTest: o = !0,
    depthWrite: h = !0,
    depthFunc: f = e.LEQUAL
  } = {}) {
    e.canvas || console.error("gl not passed as first argument to Program"), this.gl = e, this.uniforms = s, this.id = ao++, r || console.warn("vertex shader not supplied"), i || console.warn("fragment shader not supplied"), this.transparent = n, this.cullFace = l, this.frontFace = a, this.depthTest = o, this.depthWrite = h, this.depthFunc = f, this.blendFunc = {}, this.blendEquation = {}, this.stencilFunc = {}, this.stencilOp = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = e.createShader(e.VERTEX_SHADER), this.fragmentShader = e.createShader(e.FRAGMENT_SHADER), this.program = e.createProgram(), e.attachShader(this.program, this.vertexShader), e.attachShader(this.program, this.fragmentShader), this.setShaders({ vertex: r, fragment: i });
  }
  setShaders({ vertex: e, fragment: r }) {
    if (e && (this.gl.shaderSource(this.vertexShader, e), this.gl.compileShader(this.vertexShader), this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${cs(e)}`)), r && (this.gl.shaderSource(this.fragmentShader, r), this.gl.compileShader(this.fragmentShader), this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${cs(r)}`)), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
      return console.warn(this.gl.getProgramInfoLog(this.program));
    this.uniformLocations = /* @__PURE__ */ new Map();
    let i = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    for (let l = 0; l < i; l++) {
      let a = this.gl.getActiveUniform(this.program, l);
      this.uniformLocations.set(a, this.gl.getUniformLocation(this.program, a.name));
      const o = a.name.match(/(\w+)/g);
      a.uniformName = o[0], a.nameComponents = o.slice(1);
    }
    this.attributeLocations = /* @__PURE__ */ new Map();
    const s = [], n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
    for (let l = 0; l < n; l++) {
      const a = this.gl.getActiveAttrib(this.program, l), o = this.gl.getAttribLocation(this.program, a.name);
      o !== -1 && (s[o] = a.name, this.attributeLocations.set(a, o));
    }
    this.attributeOrder = s.join("");
  }
  setBlendFunc(e, r, i, s) {
    this.blendFunc.src = e, this.blendFunc.dst = r, this.blendFunc.srcAlpha = i, this.blendFunc.dstAlpha = s, e && (this.transparent = !0);
  }
  setBlendEquation(e, r) {
    this.blendEquation.modeRGB = e, this.blendEquation.modeAlpha = r;
  }
  setStencilFunc(e, r, i) {
    this.stencilRef = r, this.stencilFunc.func = e, this.stencilFunc.ref = r, this.stencilFunc.mask = i;
  }
  setStencilOp(e, r, i) {
    this.stencilOp.stencilFail = e, this.stencilOp.depthFail = r, this.stencilOp.depthPass = i;
  }
  applyState() {
    this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha), this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST), this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask), this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass);
  }
  use({ flipFaces: e = !1 } = {}) {
    let r = -1;
    this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((s, n) => {
      let l = this.uniforms[n.uniformName];
      for (const a of n.nameComponents) {
        if (!l) break;
        if (a in l)
          l = l[a];
        else {
          if (Array.isArray(l.value))
            break;
          l = void 0;
          break;
        }
      }
      if (!l)
        return fs(`Active uniform ${n.name} has not been supplied`);
      if (l && l.value === void 0)
        return fs(`${n.name} uniform is missing a value parameter`);
      if (l.value.texture)
        return r = r + 1, l.value.update(r), Yr(this.gl, n.type, s, r);
      if (l.value.length && l.value[0].texture) {
        const a = [];
        return l.value.forEach((o) => {
          r = r + 1, o.update(r), a.push(r);
        }), Yr(this.gl, n.type, s, a);
      }
      Yr(this.gl, n.type, s, l.value);
    }), this.applyState(), e && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function Yr(t, e, r, i) {
  i = i.length ? oo(i) : i;
  const s = t.renderer.state.uniformLocations.get(r);
  if (i.length)
    if (s === void 0 || s.length !== i.length)
      t.renderer.state.uniformLocations.set(r, i.slice(0));
    else {
      if (ho(s, i)) return;
      s.set ? s.set(i) : co(s, i), t.renderer.state.uniformLocations.set(r, s);
    }
  else {
    if (s === i) return;
    t.renderer.state.uniformLocations.set(r, i);
  }
  switch (e) {
    case 5126:
      return i.length ? t.uniform1fv(r, i) : t.uniform1f(r, i);
    // FLOAT
    case 35664:
      return t.uniform2fv(r, i);
    // FLOAT_VEC2
    case 35665:
      return t.uniform3fv(r, i);
    // FLOAT_VEC3
    case 35666:
      return t.uniform4fv(r, i);
    // FLOAT_VEC4
    case 35670:
    // BOOL
    case 5124:
    // INT
    case 35678:
    // SAMPLER_2D
    case 36306:
    // U_SAMPLER_2D
    case 35680:
    // SAMPLER_CUBE
    case 36289:
      return i.length ? t.uniform1iv(r, i) : t.uniform1i(r, i);
    // SAMPLER_CUBE
    case 35671:
    // BOOL_VEC2
    case 35667:
      return t.uniform2iv(r, i);
    // INT_VEC2
    case 35672:
    // BOOL_VEC3
    case 35668:
      return t.uniform3iv(r, i);
    // INT_VEC3
    case 35673:
    // BOOL_VEC4
    case 35669:
      return t.uniform4iv(r, i);
    // INT_VEC4
    case 35674:
      return t.uniformMatrix2fv(r, !1, i);
    // FLOAT_MAT2
    case 35675:
      return t.uniformMatrix3fv(r, !1, i);
    // FLOAT_MAT3
    case 35676:
      return t.uniformMatrix4fv(r, !1, i);
  }
}
function cs(t) {
  let e = t.split(`
`);
  for (let r = 0; r < e.length; r++)
    e[r] = r + 1 + ": " + e[r];
  return e.join(`
`);
}
function oo(t) {
  const e = t.length, r = t[0].length;
  if (r === void 0) return t;
  const i = e * r;
  let s = hs[i];
  s || (hs[i] = s = new Float32Array(i));
  for (let n = 0; n < e; n++) s.set(t[n], n * r);
  return s;
}
function ho(t, e) {
  if (t.length !== e.length) return !1;
  for (let r = 0, i = t.length; r < i; r++)
    if (t[r] !== e[r]) return !1;
  return !0;
}
function co(t, e) {
  for (let r = 0, i = t.length; r < i; r++)
    t[r] = e[r];
}
let Hr = 0;
function fs(t) {
  Hr > 100 || (console.warn(t), Hr++, Hr > 100 && console.warn("More than 100 program warnings - stopping logs."));
}
const Zr = /* @__PURE__ */ new pe();
let fo = 1;
class uo {
  constructor({
    canvas: e = document.createElement("canvas"),
    width: r = 300,
    height: i = 150,
    dpr: s = 1,
    alpha: n = !1,
    depth: l = !0,
    stencil: a = !1,
    antialias: o = !1,
    premultipliedAlpha: h = !1,
    preserveDrawingBuffer: f = !1,
    powerPreference: c = "default",
    autoClear: u = !0,
    webgl: d = 2
  } = {}) {
    const p = { alpha: n, depth: l, stencil: a, antialias: o, premultipliedAlpha: h, preserveDrawingBuffer: f, powerPreference: c };
    this.dpr = s, this.alpha = n, this.color = !0, this.depth = l, this.stencil = a, this.premultipliedAlpha = h, this.autoClear = u, this.id = fo++, d === 2 && (this.gl = e.getContext("webgl2", p)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = e.getContext("webgl", p)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(r, i), this.state = {}, this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }, this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }, this.state.cullFace = !1, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LEQUAL, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = { x: 0, y: 0, width: null, height: null }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = /* @__PURE__ */ new Map(), this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(e, r) {
    this.width = e, this.height = r, this.gl.canvas.width = e * this.dpr, this.gl.canvas.height = r * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
      width: e + "px",
      height: r + "px"
    });
  }
  setViewport(e, r, i = 0, s = 0) {
    this.state.viewport.width === e && this.state.viewport.height === r || (this.state.viewport.width = e, this.state.viewport.height = r, this.state.viewport.x = i, this.state.viewport.y = s, this.gl.viewport(i, s, e, r));
  }
  setScissor(e, r, i = 0, s = 0) {
    this.gl.scissor(i, s, e, r);
  }
  enable(e) {
    this.state[e] !== !0 && (this.gl.enable(e), this.state[e] = !0);
  }
  disable(e) {
    this.state[e] !== !1 && (this.gl.disable(e), this.state[e] = !1);
  }
  setBlendFunc(e, r, i, s) {
    this.state.blendFunc.src === e && this.state.blendFunc.dst === r && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === s || (this.state.blendFunc.src = e, this.state.blendFunc.dst = r, this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = s, i !== void 0 ? this.gl.blendFuncSeparate(e, r, i, s) : this.gl.blendFunc(e, r));
  }
  setBlendEquation(e, r) {
    e = e || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === e && this.state.blendEquation.modeAlpha === r) && (this.state.blendEquation.modeRGB = e, this.state.blendEquation.modeAlpha = r, r !== void 0 ? this.gl.blendEquationSeparate(e, r) : this.gl.blendEquation(e));
  }
  setCullFace(e) {
    this.state.cullFace !== e && (this.state.cullFace = e, this.gl.cullFace(e));
  }
  setFrontFace(e) {
    this.state.frontFace !== e && (this.state.frontFace = e, this.gl.frontFace(e));
  }
  setDepthMask(e) {
    this.state.depthMask !== e && (this.state.depthMask = e, this.gl.depthMask(e));
  }
  setDepthFunc(e) {
    this.state.depthFunc !== e && (this.state.depthFunc = e, this.gl.depthFunc(e));
  }
  setStencilMask(e) {
    this.state.stencilMask !== e && (this.state.stencilMask = e, this.gl.stencilMask(e));
  }
  setStencilFunc(e, r, i) {
    this.state.stencilFunc === e && this.state.stencilRef === r && this.state.stencilFuncMask === i || (this.state.stencilFunc = e || this.gl.ALWAYS, this.state.stencilRef = r || 0, this.state.stencilFuncMask = i || 0, this.gl.stencilFunc(e || this.gl.ALWAYS, r || 0, i || 0));
  }
  setStencilOp(e, r, i) {
    this.state.stencilFail === e && this.state.stencilDepthFail === r && this.state.stencilDepthPass === i || (this.state.stencilFail = e, this.state.stencilDepthFail = r, this.state.stencilDepthPass = i, this.gl.stencilOp(e, r, i));
  }
  activeTexture(e) {
    this.state.activeTextureUnit !== e && (this.state.activeTextureUnit = e, this.gl.activeTexture(this.gl.TEXTURE0 + e));
  }
  bindFramebuffer({ target: e = this.gl.FRAMEBUFFER, buffer: r = null } = {}) {
    this.state.framebuffer !== r && (this.state.framebuffer = r, this.gl.bindFramebuffer(e, r));
  }
  getExtension(e, r, i) {
    return r && this.gl[r] ? this.gl[r].bind(this.gl) : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)), r ? this.extensions[e] ? this.extensions[e][i].bind(this.extensions[e]) : null : this.extensions[e]);
  }
  sortOpaque(e, r) {
    return e.renderOrder !== r.renderOrder ? e.renderOrder - r.renderOrder : e.program.id !== r.program.id ? e.program.id - r.program.id : e.zDepth !== r.zDepth ? e.zDepth - r.zDepth : r.id - e.id;
  }
  sortTransparent(e, r) {
    return e.renderOrder !== r.renderOrder ? e.renderOrder - r.renderOrder : e.zDepth !== r.zDepth ? r.zDepth - e.zDepth : r.id - e.id;
  }
  sortUI(e, r) {
    return e.renderOrder !== r.renderOrder ? e.renderOrder - r.renderOrder : e.program.id !== r.program.id ? e.program.id - r.program.id : r.id - e.id;
  }
  getRenderList({ scene: e, camera: r, frustumCull: i, sort: s }) {
    let n = [];
    if (r && i && r.updateFrustum(), e.traverse((l) => {
      if (!l.visible) return !0;
      l.draw && (i && l.frustumCulled && r && !r.frustumIntersectsMesh(l) || n.push(l));
    }), s) {
      const l = [], a = [], o = [];
      n.forEach((h) => {
        h.program.transparent ? h.program.depthTest ? a.push(h) : o.push(h) : l.push(h), h.zDepth = 0, !(h.renderOrder !== 0 || !h.program.depthTest || !r) && (h.worldMatrix.getTranslation(Zr), Zr.applyMatrix4(r.projectionViewMatrix), h.zDepth = Zr.z);
      }), l.sort(this.sortOpaque), a.sort(this.sortTransparent), o.sort(this.sortUI), n = l.concat(a, o);
    }
    return n;
  }
  render({ scene: e, camera: r, target: i = null, update: s = !0, sort: n = !0, frustumCull: l = !0, clear: a }) {
    i === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)), (a || this.autoClear && a !== !1) && (this.depth && (!i || i.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), (this.stencil || !i || i.stencil) && (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)), this.gl.clear(
      (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
    )), s && e.updateMatrixWorld(), r && r.updateMatrixWorld(), this.getRenderList({ scene: e, camera: r, frustumCull: l, sort: n }).forEach((h) => {
      h.draw({ camera: r });
    });
  }
}
function po(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
}
function go(t, e, r, i, s) {
  return t[0] = e, t[1] = r, t[2] = i, t[3] = s, t;
}
function mo(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[3], l = r * r + i * i + s * s + n * n;
  return l > 0 && (l = 1 / Math.sqrt(l)), t[0] = r * l, t[1] = i * l, t[2] = s * l, t[3] = n * l, t;
}
function vo(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
}
function bo(t) {
  return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
}
function _o(t, e, r) {
  r = r * 0.5;
  let i = Math.sin(r);
  return t[0] = i * e[0], t[1] = i * e[1], t[2] = i * e[2], t[3] = Math.cos(r), t;
}
function us(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = e[3], a = r[0], o = r[1], h = r[2], f = r[3];
  return t[0] = i * f + l * a + s * h - n * o, t[1] = s * f + l * o + n * a - i * h, t[2] = n * f + l * h + i * o - s * a, t[3] = l * f - i * a - s * o - n * h, t;
}
function xo(t, e, r) {
  r *= 0.5;
  let i = e[0], s = e[1], n = e[2], l = e[3], a = Math.sin(r), o = Math.cos(r);
  return t[0] = i * o + l * a, t[1] = s * o + n * a, t[2] = n * o - s * a, t[3] = l * o - i * a, t;
}
function yo(t, e, r) {
  r *= 0.5;
  let i = e[0], s = e[1], n = e[2], l = e[3], a = Math.sin(r), o = Math.cos(r);
  return t[0] = i * o - n * a, t[1] = s * o + l * a, t[2] = n * o + i * a, t[3] = l * o - s * a, t;
}
function wo(t, e, r) {
  r *= 0.5;
  let i = e[0], s = e[1], n = e[2], l = e[3], a = Math.sin(r), o = Math.cos(r);
  return t[0] = i * o + s * a, t[1] = s * o - i * a, t[2] = n * o + l * a, t[3] = l * o - n * a, t;
}
function Eo(t, e, r, i) {
  let s = e[0], n = e[1], l = e[2], a = e[3], o = r[0], h = r[1], f = r[2], c = r[3], u, d, p, m, v;
  return d = s * o + n * h + l * f + a * c, d < 0 && (d = -d, o = -o, h = -h, f = -f, c = -c), 1 - d > 1e-6 ? (u = Math.acos(d), p = Math.sin(u), m = Math.sin((1 - i) * u) / p, v = Math.sin(i * u) / p) : (m = 1 - i, v = i), t[0] = m * s + v * o, t[1] = m * n + v * h, t[2] = m * l + v * f, t[3] = m * a + v * c, t;
}
function To(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[3], l = r * r + i * i + s * s + n * n, a = l ? 1 / l : 0;
  return t[0] = -r * a, t[1] = -i * a, t[2] = -s * a, t[3] = n * a, t;
}
function Ao(t, e) {
  return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t;
}
function Mo(t, e) {
  let r = e[0] + e[4] + e[8], i;
  if (r > 0)
    i = Math.sqrt(r + 1), t[3] = 0.5 * i, i = 0.5 / i, t[0] = (e[5] - e[7]) * i, t[1] = (e[6] - e[2]) * i, t[2] = (e[1] - e[3]) * i;
  else {
    let s = 0;
    e[4] > e[0] && (s = 1), e[8] > e[s * 3 + s] && (s = 2);
    let n = (s + 1) % 3, l = (s + 2) % 3;
    i = Math.sqrt(e[s * 3 + s] - e[n * 3 + n] - e[l * 3 + l] + 1), t[s] = 0.5 * i, i = 0.5 / i, t[3] = (e[n * 3 + l] - e[l * 3 + n]) * i, t[n] = (e[n * 3 + s] + e[s * 3 + n]) * i, t[l] = (e[l * 3 + s] + e[s * 3 + l]) * i;
  }
  return t;
}
function So(t, e, r = "YXZ") {
  let i = Math.sin(e[0] * 0.5), s = Math.cos(e[0] * 0.5), n = Math.sin(e[1] * 0.5), l = Math.cos(e[1] * 0.5), a = Math.sin(e[2] * 0.5), o = Math.cos(e[2] * 0.5);
  return r === "XYZ" ? (t[0] = i * l * o + s * n * a, t[1] = s * n * o - i * l * a, t[2] = s * l * a + i * n * o, t[3] = s * l * o - i * n * a) : r === "YXZ" ? (t[0] = i * l * o + s * n * a, t[1] = s * n * o - i * l * a, t[2] = s * l * a - i * n * o, t[3] = s * l * o + i * n * a) : r === "ZXY" ? (t[0] = i * l * o - s * n * a, t[1] = s * n * o + i * l * a, t[2] = s * l * a + i * n * o, t[3] = s * l * o - i * n * a) : r === "ZYX" ? (t[0] = i * l * o - s * n * a, t[1] = s * n * o + i * l * a, t[2] = s * l * a - i * n * o, t[3] = s * l * o + i * n * a) : r === "YZX" ? (t[0] = i * l * o + s * n * a, t[1] = s * n * o + i * l * a, t[2] = s * l * a - i * n * o, t[3] = s * l * o - i * n * a) : r === "XZY" && (t[0] = i * l * o - s * n * a, t[1] = s * n * o - i * l * a, t[2] = s * l * a + i * n * o, t[3] = s * l * o + i * n * a), t;
}
const Ro = po, ko = go, Fo = vo, Co = mo;
class zo extends Array {
  constructor(e = 0, r = 0, i = 0, s = 1) {
    super(e, r, i, s), this.onChange = () => {
    }, this._target = this;
    const n = ["0", "1", "2", "3"];
    return new Proxy(this, {
      set(l, a) {
        const o = Reflect.set(...arguments);
        return o && n.includes(a) && l.onChange(), o;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(e) {
    this._target[0] = e, this.onChange();
  }
  set y(e) {
    this._target[1] = e, this.onChange();
  }
  set z(e) {
    this._target[2] = e, this.onChange();
  }
  set w(e) {
    this._target[3] = e, this.onChange();
  }
  identity() {
    return bo(this._target), this.onChange(), this;
  }
  set(e, r, i, s) {
    return e.length ? this.copy(e) : (ko(this._target, e, r, i, s), this.onChange(), this);
  }
  rotateX(e) {
    return xo(this._target, this._target, e), this.onChange(), this;
  }
  rotateY(e) {
    return yo(this._target, this._target, e), this.onChange(), this;
  }
  rotateZ(e) {
    return wo(this._target, this._target, e), this.onChange(), this;
  }
  inverse(e = this._target) {
    return To(this._target, e), this.onChange(), this;
  }
  conjugate(e = this._target) {
    return Ao(this._target, e), this.onChange(), this;
  }
  copy(e) {
    return Ro(this._target, e), this.onChange(), this;
  }
  normalize(e = this._target) {
    return Co(this._target, e), this.onChange(), this;
  }
  multiply(e, r) {
    return r ? us(this._target, e, r) : us(this._target, this._target, e), this.onChange(), this;
  }
  dot(e) {
    return Fo(this._target, e);
  }
  fromMatrix3(e) {
    return Mo(this._target, e), this.onChange(), this;
  }
  fromEuler(e, r) {
    return So(this._target, e, e.order), r || this.onChange(), this;
  }
  fromAxisAngle(e, r) {
    return _o(this._target, e, r), this.onChange(), this;
  }
  slerp(e, r) {
    return Eo(this._target, this._target, e, r), this.onChange(), this;
  }
  fromArray(e, r = 0) {
    return this._target[0] = e[r], this._target[1] = e[r + 1], this._target[2] = e[r + 2], this._target[3] = e[r + 3], this.onChange(), this;
  }
  toArray(e = [], r = 0) {
    return e[r] = this[0], e[r + 1] = this[1], e[r + 2] = this[2], e[r + 3] = this[3], e;
  }
}
const Po = 1e-6;
function Do(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function Lo(t, e, r, i, s, n, l, a, o, h, f, c, u, d, p, m, v) {
  return t[0] = e, t[1] = r, t[2] = i, t[3] = s, t[4] = n, t[5] = l, t[6] = a, t[7] = o, t[8] = h, t[9] = f, t[10] = c, t[11] = u, t[12] = d, t[13] = p, t[14] = m, t[15] = v, t;
}
function No(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Io(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[3], l = e[4], a = e[5], o = e[6], h = e[7], f = e[8], c = e[9], u = e[10], d = e[11], p = e[12], m = e[13], v = e[14], b = e[15], M = r * a - i * l, _ = r * o - s * l, x = r * h - n * l, A = i * o - s * a, S = i * h - n * a, k = s * h - n * o, y = f * m - c * p, L = f * v - u * p, q = f * b - d * p, C = c * v - u * m, D = c * b - d * m, R = u * b - d * v, F = M * R - _ * D + x * C + A * q - S * L + k * y;
  return F ? (F = 1 / F, t[0] = (a * R - o * D + h * C) * F, t[1] = (s * D - i * R - n * C) * F, t[2] = (m * k - v * S + b * A) * F, t[3] = (u * S - c * k - d * A) * F, t[4] = (o * q - l * R - h * L) * F, t[5] = (r * R - s * q + n * L) * F, t[6] = (v * x - p * k - b * _) * F, t[7] = (f * k - u * x + d * _) * F, t[8] = (l * D - a * q + h * y) * F, t[9] = (i * q - r * D - n * y) * F, t[10] = (p * S - m * x + b * M) * F, t[11] = (c * x - f * S - d * M) * F, t[12] = (a * L - l * C - o * y) * F, t[13] = (r * C - i * L + s * y) * F, t[14] = (m * _ - p * A - v * M) * F, t[15] = (f * A - c * _ + u * M) * F, t) : null;
}
function Pn(t) {
  let e = t[0], r = t[1], i = t[2], s = t[3], n = t[4], l = t[5], a = t[6], o = t[7], h = t[8], f = t[9], c = t[10], u = t[11], d = t[12], p = t[13], m = t[14], v = t[15], b = e * l - r * n, M = e * a - i * n, _ = e * o - s * n, x = r * a - i * l, A = r * o - s * l, S = i * o - s * a, k = h * p - f * d, y = h * m - c * d, L = h * v - u * d, q = f * m - c * p, C = f * v - u * p, D = c * v - u * m;
  return b * D - M * C + _ * q + x * L - A * y + S * k;
}
function ds(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = e[3], a = e[4], o = e[5], h = e[6], f = e[7], c = e[8], u = e[9], d = e[10], p = e[11], m = e[12], v = e[13], b = e[14], M = e[15], _ = r[0], x = r[1], A = r[2], S = r[3];
  return t[0] = _ * i + x * a + A * c + S * m, t[1] = _ * s + x * o + A * u + S * v, t[2] = _ * n + x * h + A * d + S * b, t[3] = _ * l + x * f + A * p + S * M, _ = r[4], x = r[5], A = r[6], S = r[7], t[4] = _ * i + x * a + A * c + S * m, t[5] = _ * s + x * o + A * u + S * v, t[6] = _ * n + x * h + A * d + S * b, t[7] = _ * l + x * f + A * p + S * M, _ = r[8], x = r[9], A = r[10], S = r[11], t[8] = _ * i + x * a + A * c + S * m, t[9] = _ * s + x * o + A * u + S * v, t[10] = _ * n + x * h + A * d + S * b, t[11] = _ * l + x * f + A * p + S * M, _ = r[12], x = r[13], A = r[14], S = r[15], t[12] = _ * i + x * a + A * c + S * m, t[13] = _ * s + x * o + A * u + S * v, t[14] = _ * n + x * h + A * d + S * b, t[15] = _ * l + x * f + A * p + S * M, t;
}
function Oo(t, e, r) {
  let i = r[0], s = r[1], n = r[2], l, a, o, h, f, c, u, d, p, m, v, b;
  return e === t ? (t[12] = e[0] * i + e[4] * s + e[8] * n + e[12], t[13] = e[1] * i + e[5] * s + e[9] * n + e[13], t[14] = e[2] * i + e[6] * s + e[10] * n + e[14], t[15] = e[3] * i + e[7] * s + e[11] * n + e[15]) : (l = e[0], a = e[1], o = e[2], h = e[3], f = e[4], c = e[5], u = e[6], d = e[7], p = e[8], m = e[9], v = e[10], b = e[11], t[0] = l, t[1] = a, t[2] = o, t[3] = h, t[4] = f, t[5] = c, t[6] = u, t[7] = d, t[8] = p, t[9] = m, t[10] = v, t[11] = b, t[12] = l * i + f * s + p * n + e[12], t[13] = a * i + c * s + m * n + e[13], t[14] = o * i + u * s + v * n + e[14], t[15] = h * i + d * s + b * n + e[15]), t;
}
function Bo(t, e, r) {
  let i = r[0], s = r[1], n = r[2];
  return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * s, t[5] = e[5] * s, t[6] = e[6] * s, t[7] = e[7] * s, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function Uo(t, e, r, i) {
  let s = i[0], n = i[1], l = i[2], a = Math.hypot(s, n, l), o, h, f, c, u, d, p, m, v, b, M, _, x, A, S, k, y, L, q, C, D, R, F, se;
  return Math.abs(a) < Po ? null : (a = 1 / a, s *= a, n *= a, l *= a, o = Math.sin(r), h = Math.cos(r), f = 1 - h, c = e[0], u = e[1], d = e[2], p = e[3], m = e[4], v = e[5], b = e[6], M = e[7], _ = e[8], x = e[9], A = e[10], S = e[11], k = s * s * f + h, y = n * s * f + l * o, L = l * s * f - n * o, q = s * n * f - l * o, C = n * n * f + h, D = l * n * f + s * o, R = s * l * f + n * o, F = n * l * f - s * o, se = l * l * f + h, t[0] = c * k + m * y + _ * L, t[1] = u * k + v * y + x * L, t[2] = d * k + b * y + A * L, t[3] = p * k + M * y + S * L, t[4] = c * q + m * C + _ * D, t[5] = u * q + v * C + x * D, t[6] = d * q + b * C + A * D, t[7] = p * q + M * C + S * D, t[8] = c * R + m * F + _ * se, t[9] = u * R + v * F + x * se, t[10] = d * R + b * F + A * se, t[11] = p * R + M * F + S * se, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t);
}
function Vo(t, e) {
  return t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function Dn(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[4], l = e[5], a = e[6], o = e[8], h = e[9], f = e[10];
  return t[0] = Math.hypot(r, i, s), t[1] = Math.hypot(n, l, a), t[2] = Math.hypot(o, h, f), t;
}
function Go(t) {
  let e = t[0], r = t[1], i = t[2], s = t[4], n = t[5], l = t[6], a = t[8], o = t[9], h = t[10];
  const f = e * e + r * r + i * i, c = s * s + n * n + l * l, u = a * a + o * o + h * h;
  return Math.sqrt(Math.max(f, c, u));
}
const Ln = /* @__PURE__ */ (function() {
  const t = [1, 1, 1];
  return function(e, r) {
    let i = t;
    Dn(i, r);
    let s = 1 / i[0], n = 1 / i[1], l = 1 / i[2], a = r[0] * s, o = r[1] * n, h = r[2] * l, f = r[4] * s, c = r[5] * n, u = r[6] * l, d = r[8] * s, p = r[9] * n, m = r[10] * l, v = a + c + m, b = 0;
    return v > 0 ? (b = Math.sqrt(v + 1) * 2, e[3] = 0.25 * b, e[0] = (u - p) / b, e[1] = (d - h) / b, e[2] = (o - f) / b) : a > c && a > m ? (b = Math.sqrt(1 + a - c - m) * 2, e[3] = (u - p) / b, e[0] = 0.25 * b, e[1] = (o + f) / b, e[2] = (d + h) / b) : c > m ? (b = Math.sqrt(1 + c - a - m) * 2, e[3] = (d - h) / b, e[0] = (o + f) / b, e[1] = 0.25 * b, e[2] = (u + p) / b) : (b = Math.sqrt(1 + m - a - c) * 2, e[3] = (o - f) / b, e[0] = (d + h) / b, e[1] = (u + p) / b, e[2] = 0.25 * b), e;
  };
})();
function Wo(t, e, r, i) {
  let s = nr([t[0], t[1], t[2]]);
  const n = nr([t[4], t[5], t[6]]), l = nr([t[8], t[9], t[10]]);
  Pn(t) < 0 && (s = -s), r[0] = t[12], r[1] = t[13], r[2] = t[14];
  const o = t.slice(), h = 1 / s, f = 1 / n, c = 1 / l;
  o[0] *= h, o[1] *= h, o[2] *= h, o[4] *= f, o[5] *= f, o[6] *= f, o[8] *= c, o[9] *= c, o[10] *= c, Ln(e, o), i[0] = s, i[1] = n, i[2] = l;
}
function Xo(t, e, r, i) {
  const s = t, n = e[0], l = e[1], a = e[2], o = e[3], h = n + n, f = l + l, c = a + a, u = n * h, d = n * f, p = n * c, m = l * f, v = l * c, b = a * c, M = o * h, _ = o * f, x = o * c, A = i[0], S = i[1], k = i[2];
  return s[0] = (1 - (m + b)) * A, s[1] = (d + x) * A, s[2] = (p - _) * A, s[3] = 0, s[4] = (d - x) * S, s[5] = (1 - (u + b)) * S, s[6] = (v + M) * S, s[7] = 0, s[8] = (p + _) * k, s[9] = (v - M) * k, s[10] = (1 - (u + m)) * k, s[11] = 0, s[12] = r[0], s[13] = r[1], s[14] = r[2], s[15] = 1, s;
}
function qo(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[3], l = r + r, a = i + i, o = s + s, h = r * l, f = i * l, c = i * a, u = s * l, d = s * a, p = s * o, m = n * l, v = n * a, b = n * o;
  return t[0] = 1 - c - p, t[1] = f + b, t[2] = u - v, t[3] = 0, t[4] = f - b, t[5] = 1 - h - p, t[6] = d + m, t[7] = 0, t[8] = u + v, t[9] = d - m, t[10] = 1 - h - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function $o(t, e, r, i, s) {
  let n = 1 / Math.tan(e / 2), l = 1 / (i - s);
  return t[0] = n / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (s + i) * l, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * s * i * l, t[15] = 0, t;
}
function jo(t, e, r, i, s, n, l) {
  let a = 1 / (e - r), o = 1 / (i - s), h = 1 / (n - l);
  return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (e + r) * a, t[13] = (s + i) * o, t[14] = (l + n) * h, t[15] = 1, t;
}
function Yo(t, e, r, i) {
  let s = e[0], n = e[1], l = e[2], a = i[0], o = i[1], h = i[2], f = s - r[0], c = n - r[1], u = l - r[2], d = f * f + c * c + u * u;
  d === 0 ? u = 1 : (d = 1 / Math.sqrt(d), f *= d, c *= d, u *= d);
  let p = o * u - h * c, m = h * f - a * u, v = a * c - o * f;
  return d = p * p + m * m + v * v, d === 0 && (h ? a += 1e-6 : o ? h += 1e-6 : o += 1e-6, p = o * u - h * c, m = h * f - a * u, v = a * c - o * f, d = p * p + m * m + v * v), d = 1 / Math.sqrt(d), p *= d, m *= d, v *= d, t[0] = p, t[1] = m, t[2] = v, t[3] = 0, t[4] = c * v - u * m, t[5] = u * p - f * v, t[6] = f * m - c * p, t[7] = 0, t[8] = f, t[9] = c, t[10] = u, t[11] = 0, t[12] = s, t[13] = n, t[14] = l, t[15] = 1, t;
}
function ps(t, e, r) {
  return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t[3] = e[3] + r[3], t[4] = e[4] + r[4], t[5] = e[5] + r[5], t[6] = e[6] + r[6], t[7] = e[7] + r[7], t[8] = e[8] + r[8], t[9] = e[9] + r[9], t[10] = e[10] + r[10], t[11] = e[11] + r[11], t[12] = e[12] + r[12], t[13] = e[13] + r[13], t[14] = e[14] + r[14], t[15] = e[15] + r[15], t;
}
function gs(t, e, r) {
  return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t[2] = e[2] - r[2], t[3] = e[3] - r[3], t[4] = e[4] - r[4], t[5] = e[5] - r[5], t[6] = e[6] - r[6], t[7] = e[7] - r[7], t[8] = e[8] - r[8], t[9] = e[9] - r[9], t[10] = e[10] - r[10], t[11] = e[11] - r[11], t[12] = e[12] - r[12], t[13] = e[13] - r[13], t[14] = e[14] - r[14], t[15] = e[15] - r[15], t;
}
function Ho(t, e, r) {
  return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * r, t[9] = e[9] * r, t[10] = e[10] * r, t[11] = e[11] * r, t[12] = e[12] * r, t[13] = e[13] * r, t[14] = e[14] * r, t[15] = e[15] * r, t;
}
class Cr extends Array {
  constructor(e = 1, r = 0, i = 0, s = 0, n = 0, l = 1, a = 0, o = 0, h = 0, f = 0, c = 1, u = 0, d = 0, p = 0, m = 0, v = 1) {
    return super(e, r, i, s, n, l, a, o, h, f, c, u, d, p, m, v), this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(e) {
    this[12] = e;
  }
  set y(e) {
    this[13] = e;
  }
  set z(e) {
    this[14] = e;
  }
  set w(e) {
    this[15] = e;
  }
  set(e, r, i, s, n, l, a, o, h, f, c, u, d, p, m, v) {
    return e.length ? this.copy(e) : (Lo(this, e, r, i, s, n, l, a, o, h, f, c, u, d, p, m, v), this);
  }
  translate(e, r = this) {
    return Oo(this, r, e), this;
  }
  rotate(e, r, i = this) {
    return Uo(this, i, e, r), this;
  }
  scale(e, r = this) {
    return Bo(this, r, typeof e == "number" ? [e, e, e] : e), this;
  }
  add(e, r) {
    return r ? ps(this, e, r) : ps(this, this, e), this;
  }
  sub(e, r) {
    return r ? gs(this, e, r) : gs(this, this, e), this;
  }
  multiply(e, r) {
    return e.length ? r ? ds(this, e, r) : ds(this, this, e) : Ho(this, this, e), this;
  }
  identity() {
    return No(this), this;
  }
  copy(e) {
    return Do(this, e), this;
  }
  fromPerspective({ fov: e, aspect: r, near: i, far: s } = {}) {
    return $o(this, e, r, i, s), this;
  }
  fromOrthogonal({ left: e, right: r, bottom: i, top: s, near: n, far: l }) {
    return jo(this, e, r, i, s, n, l), this;
  }
  fromQuaternion(e) {
    return qo(this, e), this;
  }
  setPosition(e) {
    return this.x = e[0], this.y = e[1], this.z = e[2], this;
  }
  inverse(e = this) {
    return Io(this, e), this;
  }
  compose(e, r, i) {
    return Xo(this, e, r, i), this;
  }
  decompose(e, r, i) {
    return Wo(this, e, r, i), this;
  }
  getRotation(e) {
    return Ln(e, this), this;
  }
  getTranslation(e) {
    return Vo(e, this), this;
  }
  getScaling(e) {
    return Dn(e, this), this;
  }
  getMaxScaleOnAxis() {
    return Go(this);
  }
  lookAt(e, r, i) {
    return Yo(this, e, r, i), this;
  }
  determinant() {
    return Pn(this);
  }
  fromArray(e, r = 0) {
    return this[0] = e[r], this[1] = e[r + 1], this[2] = e[r + 2], this[3] = e[r + 3], this[4] = e[r + 4], this[5] = e[r + 5], this[6] = e[r + 6], this[7] = e[r + 7], this[8] = e[r + 8], this[9] = e[r + 9], this[10] = e[r + 10], this[11] = e[r + 11], this[12] = e[r + 12], this[13] = e[r + 13], this[14] = e[r + 14], this[15] = e[r + 15], this;
  }
  toArray(e = [], r = 0) {
    return e[r] = this[0], e[r + 1] = this[1], e[r + 2] = this[2], e[r + 3] = this[3], e[r + 4] = this[4], e[r + 5] = this[5], e[r + 6] = this[6], e[r + 7] = this[7], e[r + 8] = this[8], e[r + 9] = this[9], e[r + 10] = this[10], e[r + 11] = this[11], e[r + 12] = this[12], e[r + 13] = this[13], e[r + 14] = this[14], e[r + 15] = this[15], e;
  }
}
function Zo(t, e, r = "YXZ") {
  return r === "XYZ" ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)), Math.abs(e[8]) < 0.99999 ? (t[0] = Math.atan2(-e[9], e[10]), t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]), t[2] = 0)) : r === "YXZ" ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < 0.99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0)) : r === "ZXY" ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)), Math.abs(e[6]) < 0.99999 ? (t[1] = Math.atan2(-e[2], e[10]), t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0, t[2] = Math.atan2(e[1], e[0]))) : r === "ZYX" ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)), Math.abs(e[2]) < 0.99999 ? (t[0] = Math.atan2(e[6], e[10]), t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0, t[2] = Math.atan2(-e[4], e[5]))) : r === "YZX" ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)), Math.abs(e[1]) < 0.99999 ? (t[0] = Math.atan2(-e[9], e[5]), t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0, t[1] = Math.atan2(e[8], e[10]))) : r === "XZY" && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)), Math.abs(e[4]) < 0.99999 ? (t[0] = Math.atan2(e[6], e[5]), t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]), t[1] = 0)), t;
}
const ms = /* @__PURE__ */ new Cr();
class Qo extends Array {
  constructor(e = 0, r = e, i = e, s = "YXZ") {
    super(e, r, i), this.order = s, this.onChange = () => {
    }, this._target = this;
    const n = ["0", "1", "2"];
    return new Proxy(this, {
      set(l, a) {
        const o = Reflect.set(...arguments);
        return o && n.includes(a) && l.onChange(), o;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(e) {
    this._target[0] = e, this.onChange();
  }
  set y(e) {
    this._target[1] = e, this.onChange();
  }
  set z(e) {
    this._target[2] = e, this.onChange();
  }
  set(e, r = e, i = e) {
    return e.length ? this.copy(e) : (this._target[0] = e, this._target[1] = r, this._target[2] = i, this.onChange(), this);
  }
  copy(e) {
    return this._target[0] = e[0], this._target[1] = e[1], this._target[2] = e[2], this.onChange(), this;
  }
  reorder(e) {
    return this._target.order = e, this.onChange(), this;
  }
  fromRotationMatrix(e, r = this.order) {
    return Zo(this._target, e, r), this.onChange(), this;
  }
  fromQuaternion(e, r = this.order, i) {
    return ms.fromQuaternion(e), this._target.fromRotationMatrix(ms, r), i || this.onChange(), this;
  }
  fromArray(e, r = 0) {
    return this._target[0] = e[r], this._target[1] = e[r + 1], this._target[2] = e[r + 2], this;
  }
  toArray(e = [], r = 0) {
    return e[r] = this[0], e[r + 1] = this[1], e[r + 2] = this[2], e;
  }
}
class Ko {
  constructor() {
    this.parent = null, this.children = [], this.visible = !0, this.matrix = new Cr(), this.worldMatrix = new Cr(), this.matrixAutoUpdate = !0, this.worldMatrixNeedsUpdate = !1, this.position = new pe(), this.quaternion = new zo(), this.scale = new pe(1), this.rotation = new Qo(), this.up = new pe(0, 1, 0), this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0), this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0);
  }
  setParent(e, r = !0) {
    this.parent && e !== this.parent && this.parent.removeChild(this, !1), this.parent = e, r && e && e.addChild(this, !1);
  }
  addChild(e, r = !0) {
    ~this.children.indexOf(e) || this.children.push(e), r && e.setParent(this, !1);
  }
  removeChild(e, r = !0) {
    ~this.children.indexOf(e) && this.children.splice(this.children.indexOf(e), 1), r && e.setParent(null, !1);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || e) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, e = !0);
    for (let r = 0, i = this.children.length; r < i; r++)
      this.children[r].updateMatrixWorld(e);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0;
  }
  traverse(e) {
    if (!e(this))
      for (let r = 0, i = this.children.length; r < i; r++)
        this.children[r].traverse(e);
  }
  decompose() {
    this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(e, r = !1) {
    r ? this.matrix.lookAt(this.position, e, this.up) : this.matrix.lookAt(e, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion);
  }
}
function Jo(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t;
}
function eh(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[3], l = r + r, a = i + i, o = s + s, h = r * l, f = i * l, c = i * a, u = s * l, d = s * a, p = s * o, m = n * l, v = n * a, b = n * o;
  return t[0] = 1 - c - p, t[3] = f - b, t[6] = u + v, t[1] = f + b, t[4] = 1 - h - p, t[7] = d - m, t[2] = u - v, t[5] = d + m, t[8] = 1 - h - c, t;
}
function th(t, e) {
  return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
}
function rh(t, e, r, i, s, n, l, a, o, h) {
  return t[0] = e, t[1] = r, t[2] = i, t[3] = s, t[4] = n, t[5] = l, t[6] = a, t[7] = o, t[8] = h, t;
}
function ih(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
}
function sh(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[3], l = e[4], a = e[5], o = e[6], h = e[7], f = e[8], c = f * l - a * h, u = -f * n + a * o, d = h * n - l * o, p = r * c + i * u + s * d;
  return p ? (p = 1 / p, t[0] = c * p, t[1] = (-f * i + s * h) * p, t[2] = (a * i - s * l) * p, t[3] = u * p, t[4] = (f * r - s * o) * p, t[5] = (-a * r + s * n) * p, t[6] = d * p, t[7] = (-h * r + i * o) * p, t[8] = (l * r - i * n) * p, t) : null;
}
function vs(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = e[3], a = e[4], o = e[5], h = e[6], f = e[7], c = e[8], u = r[0], d = r[1], p = r[2], m = r[3], v = r[4], b = r[5], M = r[6], _ = r[7], x = r[8];
  return t[0] = u * i + d * l + p * h, t[1] = u * s + d * a + p * f, t[2] = u * n + d * o + p * c, t[3] = m * i + v * l + b * h, t[4] = m * s + v * a + b * f, t[5] = m * n + v * o + b * c, t[6] = M * i + _ * l + x * h, t[7] = M * s + _ * a + x * f, t[8] = M * n + _ * o + x * c, t;
}
function nh(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = e[3], a = e[4], o = e[5], h = e[6], f = e[7], c = e[8], u = r[0], d = r[1];
  return t[0] = i, t[1] = s, t[2] = n, t[3] = l, t[4] = a, t[5] = o, t[6] = u * i + d * l + h, t[7] = u * s + d * a + f, t[8] = u * n + d * o + c, t;
}
function lh(t, e, r) {
  let i = e[0], s = e[1], n = e[2], l = e[3], a = e[4], o = e[5], h = e[6], f = e[7], c = e[8], u = Math.sin(r), d = Math.cos(r);
  return t[0] = d * i + u * l, t[1] = d * s + u * a, t[2] = d * n + u * o, t[3] = d * l - u * i, t[4] = d * a - u * s, t[5] = d * o - u * n, t[6] = h, t[7] = f, t[8] = c, t;
}
function ah(t, e, r) {
  let i = r[0], s = r[1];
  return t[0] = i * e[0], t[1] = i * e[1], t[2] = i * e[2], t[3] = s * e[3], t[4] = s * e[4], t[5] = s * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
}
function oh(t, e) {
  let r = e[0], i = e[1], s = e[2], n = e[3], l = e[4], a = e[5], o = e[6], h = e[7], f = e[8], c = e[9], u = e[10], d = e[11], p = e[12], m = e[13], v = e[14], b = e[15], M = r * a - i * l, _ = r * o - s * l, x = r * h - n * l, A = i * o - s * a, S = i * h - n * a, k = s * h - n * o, y = f * m - c * p, L = f * v - u * p, q = f * b - d * p, C = c * v - u * m, D = c * b - d * m, R = u * b - d * v, F = M * R - _ * D + x * C + A * q - S * L + k * y;
  return F ? (F = 1 / F, t[0] = (a * R - o * D + h * C) * F, t[1] = (o * q - l * R - h * L) * F, t[2] = (l * D - a * q + h * y) * F, t[3] = (s * D - i * R - n * C) * F, t[4] = (r * R - s * q + n * L) * F, t[5] = (i * q - r * D - n * y) * F, t[6] = (m * k - v * S + b * A) * F, t[7] = (v * x - p * k - b * _) * F, t[8] = (p * S - m * x + b * M) * F, t) : null;
}
class hh extends Array {
  constructor(e = 1, r = 0, i = 0, s = 0, n = 1, l = 0, a = 0, o = 0, h = 1) {
    return super(e, r, i, s, n, l, a, o, h), this;
  }
  set(e, r, i, s, n, l, a, o, h) {
    return e.length ? this.copy(e) : (rh(this, e, r, i, s, n, l, a, o, h), this);
  }
  translate(e, r = this) {
    return nh(this, r, e), this;
  }
  rotate(e, r = this) {
    return lh(this, r, e), this;
  }
  scale(e, r = this) {
    return ah(this, r, e), this;
  }
  multiply(e, r) {
    return r ? vs(this, e, r) : vs(this, this, e), this;
  }
  identity() {
    return ih(this), this;
  }
  copy(e) {
    return th(this, e), this;
  }
  fromMatrix4(e) {
    return Jo(this, e), this;
  }
  fromQuaternion(e) {
    return eh(this, e), this;
  }
  fromBasis(e, r, i) {
    return this.set(e[0], e[1], e[2], r[0], r[1], r[2], i[0], i[1], i[2]), this;
  }
  inverse(e = this) {
    return sh(this, e), this;
  }
  getNormalMatrix(e) {
    return oh(this, e), this;
  }
}
let ch = 0;
class bs extends Ko {
  constructor(e, { geometry: r, program: i, mode: s = e.TRIANGLES, frustumCulled: n = !0, renderOrder: l = 0 } = {}) {
    super(), e.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = e, this.id = ch++, this.geometry = r, this.program = i, this.mode = s, this.frustumCulled = n, this.renderOrder = l, this.modelViewMatrix = new Cr(), this.normalMatrix = new hh(), this.beforeRenderCallbacks = [], this.afterRenderCallbacks = [];
  }
  onBeforeRender(e) {
    return this.beforeRenderCallbacks.push(e), this;
  }
  onAfterRender(e) {
    return this.afterRenderCallbacks.push(e), this;
  }
  draw({ camera: e } = {}) {
    e && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
      modelMatrix: { value: null },
      viewMatrix: { value: null },
      modelViewMatrix: { value: null },
      normalMatrix: { value: null },
      projectionMatrix: { value: null },
      cameraPosition: { value: null }
    }), this.program.uniforms.projectionMatrix.value = e.projectionMatrix, this.program.uniforms.cameraPosition.value = e.worldPosition, this.program.uniforms.viewMatrix.value = e.viewMatrix, this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach((i) => i && i({ mesh: this, camera: e }));
    let r = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: r }), this.geometry.draw({ mode: this.mode, program: this.program }), this.afterRenderCallbacks.forEach((i) => i && i({ mesh: this, camera: e }));
  }
}
const _s = new Uint8Array(4);
function xs(t) {
  return (t & t - 1) === 0;
}
let fh = 1;
class ys {
  constructor(e, {
    image: r,
    target: i = e.TEXTURE_2D,
    type: s = e.UNSIGNED_BYTE,
    format: n = e.RGBA,
    internalFormat: l = n,
    wrapS: a = e.CLAMP_TO_EDGE,
    wrapT: o = e.CLAMP_TO_EDGE,
    wrapR: h = e.CLAMP_TO_EDGE,
    generateMipmaps: f = i === (e.TEXTURE_2D || e.TEXTURE_CUBE_MAP),
    minFilter: c = f ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR,
    magFilter: u = e.LINEAR,
    premultiplyAlpha: d = !1,
    unpackAlignment: p = 4,
    flipY: m = i == (e.TEXTURE_2D || e.TEXTURE_3D),
    anisotropy: v = 0,
    level: b = 0,
    width: M,
    // used for RenderTargets or Data Textures
    height: _ = M,
    length: x = 1
  } = {}) {
    this.gl = e, this.id = fh++, this.image = r, this.target = i, this.type = s, this.format = n, this.internalFormat = l, this.minFilter = c, this.magFilter = u, this.wrapS = a, this.wrapT = o, this.wrapR = h, this.generateMipmaps = f, this.premultiplyAlpha = d, this.unpackAlignment = p, this.flipY = m, this.anisotropy = Math.min(v, this.gl.renderer.parameters.maxAnisotropy), this.level = b, this.width = M, this.height = _, this.length = x, this.texture = this.gl.createTexture(), this.store = {
      image: null
    }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0;
  }
  bind() {
    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id);
  }
  update(e = 0) {
    const r = !(this.image === this.store.image && !this.needsUpdate);
    if ((r || this.glState.textureUnits[e] !== this.id) && (this.gl.renderer.activeTexture(e), this.bind()), !!r) {
      if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.wrapR !== this.state.wrapR && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.wrapR), this.state.wrapR = this.wrapR), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
        if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
          for (let i = 0; i < 6; i++)
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
        else if (ArrayBuffer.isView(this.image))
          this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : (this.target === this.gl.TEXTURE_2D_ARRAY || this.target === this.gl.TEXTURE_3D) && this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
        else if (this.image.isCompressedTexture)
          for (let i = 0; i < this.image.length; i++)
            this.gl.compressedTexImage2D(this.target, i, this.internalFormat, this.image[i].width, this.image[i].height, 0, this.image[i].data);
        else
          this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
        this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!xs(this.image.width) || !xs(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate();
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
        for (let i = 0; i < 6; i++)
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, _s);
      else this.width ? this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, _s);
      this.store.image = this.image;
    }
  }
}
class uh {
  constructor(e, {
    width: r = e.canvas.width,
    height: i = e.canvas.height,
    target: s = e.FRAMEBUFFER,
    color: n = 1,
    // number of color attachments
    depth: l = !0,
    stencil: a = !1,
    depthTexture: o = !1,
    wrapS: h = e.CLAMP_TO_EDGE,
    wrapT: f = e.CLAMP_TO_EDGE,
    wrapR: c = e.CLAMP_TO_EDGE,
    minFilter: u = e.LINEAR,
    magFilter: d = u,
    type: p = e.UNSIGNED_BYTE,
    format: m = e.RGBA,
    internalFormat: v = m,
    unpackAlignment: b,
    premultiplyAlpha: M
  } = {}) {
    this.gl = e, this.width = r, this.height = i, this.depth = l, this.stencil = a, this.buffer = this.gl.createFramebuffer(), this.target = s, this.gl.renderer.bindFramebuffer(this), this.textures = [];
    const _ = [];
    for (let x = 0; x < n; x++)
      this.textures.push(
        new ys(e, {
          width: r,
          height: i,
          wrapS: h,
          wrapT: f,
          wrapR: c,
          minFilter: u,
          magFilter: d,
          type: p,
          format: m,
          internalFormat: v,
          unpackAlignment: b,
          premultiplyAlpha: M,
          flipY: !1,
          generateMipmaps: !1
        })
      ), this.textures[x].update(), this.gl.framebufferTexture2D(
        this.target,
        this.gl.COLOR_ATTACHMENT0 + x,
        this.gl.TEXTURE_2D,
        this.textures[x].texture,
        0
        /* level */
      ), _.push(this.gl.COLOR_ATTACHMENT0 + x);
    _.length > 1 && this.gl.renderer.drawBuffers(_), this.texture = this.textures[0], o && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new ys(e, {
      width: r,
      height: i,
      minFilter: this.gl.NEAREST,
      magFilter: this.gl.NEAREST,
      format: this.stencil ? this.gl.DEPTH_STENCIL : this.gl.DEPTH_COMPONENT,
      internalFormat: e.renderer.isWebgl2 ? this.stencil ? this.gl.DEPTH24_STENCIL8 : this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
      type: this.stencil ? this.gl.UNSIGNED_INT_24_8 : this.gl.UNSIGNED_INT
    }), this.depthTexture.update(), this.gl.framebufferTexture2D(
      this.target,
      this.stencil ? this.gl.DEPTH_STENCIL_ATTACHMENT : this.gl.DEPTH_ATTACHMENT,
      this.gl.TEXTURE_2D,
      this.depthTexture.texture,
      0
      /* level */
    )) : (l && !a && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, r, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), a && !l && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, r, i), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), l && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, r, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.renderer.bindFramebuffer({ target: this.target });
  }
  setSize(e, r) {
    if (!(this.width === e && this.height === r)) {
      this.width = e, this.height = r, this.gl.renderer.bindFramebuffer(this);
      for (let i = 0; i < this.textures.length; i++)
        this.textures[i].width = e, this.textures[i].height = r, this.textures[i].needsUpdate = !0, this.textures[i].update(), this.gl.framebufferTexture2D(
          this.target,
          this.gl.COLOR_ATTACHMENT0 + i,
          this.gl.TEXTURE_2D,
          this.textures[i].texture,
          0
          /* level */
        );
      this.depthTexture ? (this.depthTexture.width = e, this.depthTexture.height = r, this.depthTexture.needsUpdate = !0, this.depthTexture.update(), this.gl.framebufferTexture2D(
        this.target,
        this.gl.DEPTH_ATTACHMENT,
        this.gl.TEXTURE_2D,
        this.depthTexture.texture,
        0
        /* level */
      )) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, r)), this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, r)), this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, r))), this.gl.renderer.bindFramebuffer({ target: this.target });
    }
  }
}
function dh(t, e) {
  return t[0] = e[0], t[1] = e[1], t;
}
function ph(t, e, r) {
  return t[0] = e, t[1] = r, t;
}
function ws(t, e, r) {
  return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t;
}
function Es(t, e, r) {
  return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t;
}
function gh(t, e, r) {
  return t[0] = e[0] * r[0], t[1] = e[1] * r[1], t;
}
function mh(t, e, r) {
  return t[0] = e[0] / r[0], t[1] = e[1] / r[1], t;
}
function Qr(t, e, r) {
  return t[0] = e[0] * r, t[1] = e[1] * r, t;
}
function vh(t, e) {
  var r = e[0] - t[0], i = e[1] - t[1];
  return Math.sqrt(r * r + i * i);
}
function bh(t, e) {
  var r = e[0] - t[0], i = e[1] - t[1];
  return r * r + i * i;
}
function Ts(t) {
  var e = t[0], r = t[1];
  return Math.sqrt(e * e + r * r);
}
function _h(t) {
  var e = t[0], r = t[1];
  return e * e + r * r;
}
function xh(t, e) {
  return t[0] = -e[0], t[1] = -e[1], t;
}
function yh(t, e) {
  return t[0] = 1 / e[0], t[1] = 1 / e[1], t;
}
function wh(t, e) {
  var r = e[0], i = e[1], s = r * r + i * i;
  return s > 0 && (s = 1 / Math.sqrt(s)), t[0] = e[0] * s, t[1] = e[1] * s, t;
}
function Eh(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function As(t, e) {
  return t[0] * e[1] - t[1] * e[0];
}
function Th(t, e, r, i) {
  var s = e[0], n = e[1];
  return t[0] = s + i * (r[0] - s), t[1] = n + i * (r[1] - n), t;
}
function Ah(t, e, r, i, s) {
  const n = Math.exp(-i * s);
  let l = e[0], a = e[1];
  return t[0] = r[0] + (l - r[0]) * n, t[1] = r[1] + (a - r[1]) * n, t;
}
function Mh(t, e, r) {
  var i = e[0], s = e[1];
  return t[0] = r[0] * i + r[3] * s + r[6], t[1] = r[1] * i + r[4] * s + r[7], t;
}
function Sh(t, e, r) {
  let i = e[0], s = e[1];
  return t[0] = r[0] * i + r[4] * s + r[12], t[1] = r[1] * i + r[5] * s + r[13], t;
}
function Rh(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
class zr extends Array {
  constructor(e = 0, r = e) {
    return super(e, r), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(e) {
    this[0] = e;
  }
  set y(e) {
    this[1] = e;
  }
  set(e, r = e) {
    return e.length ? this.copy(e) : (ph(this, e, r), this);
  }
  copy(e) {
    return dh(this, e), this;
  }
  add(e, r) {
    return r ? ws(this, e, r) : ws(this, this, e), this;
  }
  sub(e, r) {
    return r ? Es(this, e, r) : Es(this, this, e), this;
  }
  multiply(e) {
    return e.length ? gh(this, this, e) : Qr(this, this, e), this;
  }
  divide(e) {
    return e.length ? mh(this, this, e) : Qr(this, this, 1 / e), this;
  }
  inverse(e = this) {
    return yh(this, e), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return Ts(this);
  }
  distance(e) {
    return e ? vh(this, e) : Ts(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(e) {
    return e ? bh(this, e) : _h(this);
  }
  negate(e = this) {
    return xh(this, e), this;
  }
  cross(e, r) {
    return r ? As(e, r) : As(this, e);
  }
  scale(e) {
    return Qr(this, this, e), this;
  }
  normalize() {
    return wh(this, this), this;
  }
  dot(e) {
    return Eh(this, e);
  }
  equals(e) {
    return Rh(this, e);
  }
  applyMatrix3(e) {
    return Mh(this, this, e), this;
  }
  applyMatrix4(e) {
    return Sh(this, this, e), this;
  }
  lerp(e, r) {
    return Th(this, this, e, r), this;
  }
  smoothLerp(e, r, i) {
    return Ah(this, this, e, r, i), this;
  }
  clone() {
    return new zr(this[0], this[1]);
  }
  fromArray(e, r = 0) {
    return this[0] = e[r], this[1] = e[r + 1], this;
  }
  toArray(e = [], r = 0) {
    return e[r] = this[0], e[r + 1] = this[1], e;
  }
}
class kh extends lo {
  constructor(e, { attributes: r = {} } = {}) {
    Object.assign(r, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
    }), super(e, r);
  }
}
const Fh = (t, e, r) => Math.min(r, Math.max(e, t)), Kr = (t) => Fh(t, 0, 1), Jr = (t) => t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4), bi = (t, e, r) => {
  const i = Math.max(t, e, r) > 1 ? 255 : 1;
  return [Kr(t / i), Kr(e / i), Kr(r / i)];
}, Nn = (t) => {
  const e = t.replace("#", "").trim();
  if (e.length === 3 || e.length === 4) {
    const r = Number.parseInt(e[0] + e[0], 16), i = Number.parseInt(e[1] + e[1], 16), s = Number.parseInt(e[2] + e[2], 16);
    return [r / 255, i / 255, s / 255];
  }
  if (e.length === 6 || e.length === 8) {
    const r = Number.parseInt(e.slice(0, 2), 16), i = Number.parseInt(e.slice(2, 4), 16), s = Number.parseInt(e.slice(4, 6), 16);
    return [r / 255, i / 255, s / 255];
  }
  return null;
};
let zt;
const Ch = (t) => {
  if (typeof document > "u") return null;
  if (zt === void 0) {
    const s = document.createElement("canvas");
    s.width = 1, s.height = 1, zt = s.getContext("2d");
  }
  if (!zt) return null;
  zt.fillStyle = "#000000", zt.fillStyle = t;
  const e = zt.fillStyle;
  if (e.startsWith("#"))
    return Nn(e);
  const r = e.match(/rgba?\(([^)]+)\)/i);
  if (!r) return null;
  const i = r[1].split(",").map((s) => Number.parseFloat(s.trim())).filter((s) => Number.isFinite(s));
  return i.length < 3 ? null : bi(i[0], i[1], i[2]);
}, zh = (t, e) => {
  if (typeof t == "number" && Number.isFinite(t)) {
    const r = Math.min(16777215, Math.max(0, Math.floor(t)));
    return [
      (r >> 16 & 255) / 255,
      (r >> 8 & 255) / 255,
      (r & 255) / 255
    ];
  }
  if (typeof t == "string") {
    const r = t.trim();
    return (r.startsWith("#") ? Nn(r) : Ch(r)) ?? e;
  }
  if (Array.isArray(t) && t.length >= 3)
    return bi(t[0], t[1], t[2]);
  if (t && typeof t == "object" && "r" in t && "g" in t && "b" in t) {
    const r = t;
    return bi(r.r, r.g, r.b);
  }
  return e;
}, Ph = (t, e) => {
  const [r, i, s] = zh(t, e);
  return [Jr(r), Jr(i), Jr(s)];
}, Ms = (t, e, r) => Math.min(r, Math.max(e, t)), Ss = (t, e, r) => t + (e - t) * r, Dh = ({
  state: t,
  uv: e,
  x: r,
  y: i,
  width: s,
  height: n,
  forceClamp: l,
  initialLerp: a,
  lerp: o,
  forceScale: h = 5
}) => {
  const f = t.x, c = t.y, u = Ms(h * (r - f), -l, l), d = Ms(h * (i - c), -l, l), p = t.initialized ? o : a;
  t.moved = !0, t.dx = Ss(t.dx, u, p), t.dy = Ss(t.dy, d, p), t.x = r, t.y = i, t.initialized = !0, s > 0 && n > 0 && e.set(r / s, 1 - i / n);
};
var Lh = /* @__PURE__ */ En('<canvas class="absolute inset-0 block h-full w-full" style="width:100%;height:100%;" aria-hidden="true"></canvas>');
function Nh(t, e) {
  Ei(e, !0);
  let r = Se(e, "dissipation", 3, 0.96), i = Se(e, "pointerSize", 3, 5e-3), s = Se(e, "color", 3, "#c9fd34"), n = Se(e, "velocityDissipation", 3, 0.96), l = Se(e, "pressureIterations", 3, 10);
  const a = it({ x: 0, y: 0, dx: 0, dy: 0, moved: !1, initialized: !1 }), o = it({ enabled: !0, timeMs: 0 }), h = it({ width: 1, height: 1 }), f = new zr(), c = new pe(), u = 450, d = 0.2, p = 0.55;
  ra(() => {
    const [C, D, R] = Ph(s(), [1, 0.4117647058823529, 0]);
    c.set(C, D, R);
  });
  const m = (C, D, R, F) => {
    Dh({
      state: a,
      uv: f,
      x: C,
      y: D,
      width: R,
      height: F,
      forceClamp: u,
      initialLerp: d,
      lerp: p
    });
  }, v = `
		attribute vec2 uv;
		attribute vec2 position;
		varying vec2 vUv;
		varying vec2 vL;
		varying vec2 vR;
		varying vec2 vT;
		varying vec2 vB;
		uniform vec2 uTexel;

		void main () {
			vUv = uv;
			vL = vUv - vec2(uTexel.x, 0.);
			vR = vUv + vec2(uTexel.x, 0.);
			vT = vUv + vec2(0., uTexel.y);
			vB = vUv - vec2(0., uTexel.y);
			gl_Position = vec4(position, 0.0, 1.0);
		}
	`, b = `
		precision highp float;
		varying vec2 vUv;
		uniform sampler2D uVelocity;
		uniform sampler2D uInput;
		uniform vec2 uTexel;
		uniform float uDt;
		uniform float uDissipation;

		vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
			vec2 st = uv / tsize - 0.5;
			vec2 iuv = floor(st);
			vec2 fuv = fract(st);
			vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
			vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
			vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
			vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
			return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
		}

		void main () {
			vec2 coord = vUv - uDt * bilerp(uVelocity, vUv, uTexel).xy * uTexel;
			gl_FragColor = uDissipation * bilerp(uInput, coord, uTexel);
			gl_FragColor.a = 1.;
		}
	`, M = `
		precision highp float;
		varying vec2 vL;
		varying vec2 vR;
		varying vec2 vT;
		varying vec2 vB;
		uniform sampler2D uVelocity;

		void main () {
			float L = texture2D(uVelocity, vL).x;
			float R = texture2D(uVelocity, vR).x;
			float T = texture2D(uVelocity, vT).y;
			float B = texture2D(uVelocity, vB).y;
			float div = .6 * (R - L + T - B);
			gl_FragColor = vec4(div, 0., 0., 1.);
		}
	`, _ = `
		precision highp float;
		varying vec2 vUv;
		varying vec2 vL;
		varying vec2 vR;
		varying vec2 vT;
		varying vec2 vB;
		uniform sampler2D uPressure;
		uniform sampler2D uDivergence;

		void main () {
			float L = texture2D(uPressure, vL).x;
			float R = texture2D(uPressure, vR).x;
			float T = texture2D(uPressure, vT).x;
			float B = texture2D(uPressure, vB).x;
			float divergence = texture2D(uDivergence, vUv).x;
			float pressure = (L + R + B + T - divergence) * 0.25;
			gl_FragColor = vec4(pressure, 0., 0., 1.);
		}
	`, x = `
		precision highp float;
		varying vec2 vUv;
		varying vec2 vL;
		varying vec2 vR;
		varying vec2 vT;
		varying vec2 vB;
		uniform sampler2D uPressure;
		uniform sampler2D uVelocity;

		void main () {
			float L = texture2D(uPressure, vL).x;
			float R = texture2D(uPressure, vR).x;
			float T = texture2D(uPressure, vT).x;
			float B = texture2D(uPressure, vB).x;
			vec2 velocity = texture2D(uVelocity, vUv).xy;
			velocity.xy -= vec2(R - L, T - B);
			gl_FragColor = vec4(velocity, 0., 1.);
		}
	`, A = `
		precision highp float;
		varying vec2 vUv;
		uniform sampler2D uInput;
		uniform float uRatio;
		uniform vec3 uPointValue;
		uniform vec2 uPoint;
		uniform float uPointSize;

		void main () {
			vec2 p = vUv - uPoint.xy;
			p.x *= uRatio;
			vec3 splat = pow(2., -dot(p, p) / uPointSize) * uPointValue;
			vec3 base = texture2D(uInput, vUv).xyz;
			gl_FragColor = vec4(base + splat, 1.);
		}
	`, S = `
		attribute vec2 uv;
		attribute vec2 position;
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = vec4(position, 0.0, 1.0);
		}
	`, k = `
		precision highp float;
		varying vec2 vUv;
		uniform sampler2D uTexture;

		vec3 linearToSrgb(vec3 color) {
			vec3 safe = max(color, vec3(0.0));
			vec3 low = safe * 12.92;
			vec3 high = 1.055 * pow(safe, vec3(1.0 / 2.4)) - 0.055;
			vec3 cutoff = step(vec3(0.0031308), safe);
			return mix(low, high, cutoff);
		}

		void main() {
			vec3 C = texture2D(uTexture, vUv).rgb;
			float a = max(C.r, max(C.g, C.b));
			gl_FragColor = vec4(linearToSrgb(C), a);
		}
	`, y = (C) => {
    const D = new uo({
      canvas: C,
      alpha: !0,
      dpr: typeof window < "u" ? window.devicePixelRatio : 1
    }), R = D.gl;
    R.clearColor(0, 0, 0, 0), C.style.width = "100%", C.style.height = "100%";
    const F = R.renderer.extensions.OES_texture_half_float, se = R.renderer.isWebgl2 ? R.HALF_FLOAT : F?.HALF_FLOAT_OES ?? R.FLOAT, oe = R.renderer.isWebgl2 ? se === R.FLOAT ? R.RGBA32F : R.RGBA16F : R.RGBA, Ae = (U, W) => new uh(R, {
      width: U,
      height: W,
      type: se,
      format: R.RGBA,
      internalFormat: oe,
      minFilter: R.NEAREST,
      magFilter: R.NEAREST,
      depth: !1,
      stencil: !1
    }), ht = (U, W) => {
      const X = {
        read: Ae(U, W),
        write: Ae(U, W),
        swap: () => {
          const te = X.read;
          X.read = X.write, X.write = te;
        }
      };
      return X;
    }, H = ht(128, 128), w = ht(128, 128), he = ht(128, 128), je = Ae(128, 128), Oe = new zr(1 / 128, 1 / 128), me = {
      uVelocity: { value: w.read.texture },
      uInput: { value: w.read.texture },
      uTexel: { value: Oe },
      uDt: { value: 1 / 60 },
      uDissipation: { value: n() }
    }, J = {
      uVelocity: { value: w.read.texture },
      uTexel: { value: Oe }
    }, Z = {
      uPressure: { value: he.read.texture },
      uDivergence: { value: je.texture },
      uTexel: { value: Oe }
    }, Ye = {
      uPressure: { value: he.read.texture },
      uVelocity: { value: w.read.texture },
      uTexel: { value: Oe }
    }, Me = {
      uInput: { value: w.read.texture },
      uRatio: { value: 1 },
      uPointValue: { value: new pe() },
      uPoint: { value: f },
      uPointSize: { value: i() },
      uTexel: { value: Oe }
    }, j = { uTexture: { value: H.read.texture } }, ct = new Ct(R, {
      vertex: v,
      fragment: b,
      uniforms: me,
      depthTest: !1,
      depthWrite: !1
    }), ft = new Ct(R, {
      vertex: v,
      fragment: M,
      uniforms: J,
      depthTest: !1,
      depthWrite: !1
    }), ut = new Ct(R, {
      vertex: v,
      fragment: _,
      uniforms: Z,
      depthTest: !1,
      depthWrite: !1
    }), kt = new Ct(R, {
      vertex: v,
      fragment: x,
      uniforms: Ye,
      depthTest: !1,
      depthWrite: !1
    }), He = new Ct(R, {
      vertex: v,
      fragment: A,
      uniforms: Me,
      depthTest: !1,
      depthWrite: !1
    }), Di = new Ct(R, {
      vertex: S,
      fragment: k,
      uniforms: j,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), Or = new kh(R), Li = new bs(R, { geometry: Or, program: ct }), Qn = new bs(R, { geometry: Or, program: Di }), dt = (U, W) => {
      Li.program = U, D.render({ scene: Li, target: W, clear: !0 });
    }, Ni = (U) => {
      const W = C.getBoundingClientRect(), X = U.clientX - W.left, te = U.clientY - W.top, Ze = o.enabled;
      o.enabled = !1, Ze && (a.initialized = !1, a.dx = 0, a.dy = 0), m(X, te, W.width, W.height);
    }, Ii = (U) => {
      U.preventDefault();
      const W = U.touches[0];
      if (!W) return;
      const X = C.getBoundingClientRect(), te = W.clientX - X.left, Ze = W.clientY - X.top, Zt = o.enabled;
      o.enabled = !1, Zt && (a.initialized = !1, a.dx = 0, a.dy = 0), m(te, Ze, X.width, X.height);
    };
    C.addEventListener("pointermove", Ni), C.addEventListener("touchmove", Ii, { passive: !1 });
    const Kn = (U, W) => {
      const X = Math.max(1, Math.floor(U * 0.5)), te = Math.max(1, Math.floor(W * 0.5));
      (X > H.read.width || te > H.read.height) && (H.read.setSize(X, te), H.write.setSize(X, te), w.read.setSize(X, te), w.write.setSize(X, te), he.read.setSize(X, te), he.write.setSize(X, te), je.setSize(X, te));
      const Ze = H.read.width, Zt = H.read.height;
      Oe.set(1 / Ze, 1 / Zt), U > 0 && W > 0 && f.set(a.x / U, 1 - a.y / W);
    }, pt = (U) => {
      U.textures.forEach((W) => {
        W.texture && R.deleteTexture(W.texture);
      }), U.depthTexture?.texture && R.deleteTexture(U.depthTexture.texture), U.depthBuffer && R.deleteRenderbuffer(U.depthBuffer), U.stencilBuffer && R.deleteRenderbuffer(U.stencilBuffer), U.depthStencilBuffer && R.deleteRenderbuffer(U.depthStencilBuffer), U.buffer && R.deleteFramebuffer(U.buffer);
    };
    let Br = 0, Ur = 0, Oi = 0, Bi = 0, Vr = 0;
    const Ui = (U) => {
      const W = Math.max(1, C.clientWidth), X = Math.max(1, C.clientHeight), te = Math.round(W * D.dpr), Ze = Math.round(X * D.dpr);
      (C.width !== te || C.height !== Ze) && (C.width = te, C.height = Ze, D.width = W, D.height = X, D.state.viewport = { x: 0, y: 0, width: null, height: null }, h.width = W, h.height = X, Oi = W, Bi = X, clearTimeout(Vr), Vr = window.setTimeout(() => Kn(Oi, Bi), 150));
      const Zt = Ur ? (U - Ur) / 1e3 : 0;
      Ur = U;
      const Jn = 1 / 60, ur = h.width || C.clientWidth || 1, Qt = h.height || C.clientHeight || 1, el = Qt > 0 ? ur / Qt : 1;
      if (o.enabled && ur > 0 && Qt > 0) {
        o.timeMs += Zt * 1e3;
        const dr = (0.5 - 0.45 * Math.sin(3e-3 * o.timeMs - 2)) * ur, rl = (0.5 + 0.1 * Math.sin(25e-4 * o.timeMs) + 0.1 * Math.cos(2e-3 * o.timeMs)) * Qt;
        m(dr, rl, ur, Qt);
      }
      a.moved && (Me.uInput.value = w.read.texture, Me.uRatio.value = el, Me.uPoint.value.set(f.x, f.y), Me.uPointValue.value.set(a.dx, -a.dy, 1), Me.uPointSize.value = i(), dt(He, w.write), w.swap(), Me.uInput.value = H.read.texture, Me.uPointValue.value.set(c.x, c.y, c.z), dt(He, H.write), H.swap(), o.enabled || (a.moved = !1)), J.uVelocity.value = w.read.texture, dt(ft, je), Z.uDivergence.value = je.texture;
      const tl = Math.max(0, Math.floor(l()));
      for (let dr = 0; dr < tl; dr++)
        Z.uPressure.value = he.read.texture, dt(ut, he.write), he.swap();
      Ye.uPressure.value = he.read.texture, Ye.uVelocity.value = w.read.texture, dt(kt, w.write), w.swap(), me.uDt.value = Jn, me.uVelocity.value = w.read.texture, me.uInput.value = w.read.texture, me.uDissipation.value = n(), dt(ct, w.write), w.swap(), me.uVelocity.value = w.read.texture, me.uInput.value = H.read.texture, me.uDissipation.value = r(), dt(ct, H.write), H.swap(), j.uTexture.value = H.read.texture, D.render({ scene: Qn, clear: !0 }), Br = window.requestAnimationFrame(Ui);
    };
    return Br = window.requestAnimationFrame(Ui), () => {
      window.cancelAnimationFrame(Br), clearTimeout(Vr), C.removeEventListener("pointermove", Ni), C.removeEventListener("touchmove", Ii), pt(H.read), pt(H.write), pt(w.read), pt(w.write), pt(he.read), pt(he.write), pt(je), ct.remove(), ft.remove(), ut.remove(), kt.remove(), He.remove(), Di.remove(), Or.remove();
    };
  }, L = (C) => yn(() => y(C));
  var q = Lh();
  An(q, () => L), Tn(t, q), Ti();
}
const Ih = (t, e) => {
  const r = new Array(t.length + e.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t[i];
  for (let i = 0; i < e.length; i++)
    r[t.length + i] = e[i];
  return r;
}, Oh = (t, e) => ({
  classGroupId: t,
  validator: e
}), In = (t = /* @__PURE__ */ new Map(), e = null, r) => ({
  nextPart: t,
  validators: e,
  classGroupId: r
}), Pr = "-", Rs = [], Bh = "arbitrary..", Uh = (t) => {
  const e = Gh(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: i
  } = t;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return Vh(l);
      const a = l.split(Pr), o = a[0] === "" && a.length > 1 ? 1 : 0;
      return On(a, o, e);
    },
    getConflictingClassGroupIds: (l, a) => {
      if (a) {
        const o = i[l], h = r[l];
        return o ? h ? Ih(h, o) : o : h || Rs;
      }
      return r[l] || Rs;
    }
  };
}, On = (t, e, r) => {
  if (t.length - e === 0)
    return r.classGroupId;
  const s = t[e], n = r.nextPart.get(s);
  if (n) {
    const h = On(t, e + 1, n);
    if (h) return h;
  }
  const l = r.validators;
  if (l === null)
    return;
  const a = e === 0 ? t.join(Pr) : t.slice(e).join(Pr), o = l.length;
  for (let h = 0; h < o; h++) {
    const f = l[h];
    if (f.validator(a))
      return f.classGroupId;
  }
}, Vh = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), r = e.indexOf(":"), i = e.slice(0, r);
  return i ? Bh + i : void 0;
})(), Gh = (t) => {
  const {
    theme: e,
    classGroups: r
  } = t;
  return Wh(r, e);
}, Wh = (t, e) => {
  const r = In();
  for (const i in t) {
    const s = t[i];
    zi(s, r, i, e);
  }
  return r;
}, zi = (t, e, r, i) => {
  const s = t.length;
  for (let n = 0; n < s; n++) {
    const l = t[n];
    Xh(l, e, r, i);
  }
}, Xh = (t, e, r, i) => {
  if (typeof t == "string") {
    qh(t, e, r);
    return;
  }
  if (typeof t == "function") {
    $h(t, e, r, i);
    return;
  }
  jh(t, e, r, i);
}, qh = (t, e, r) => {
  const i = t === "" ? e : Bn(e, t);
  i.classGroupId = r;
}, $h = (t, e, r, i) => {
  if (Yh(t)) {
    zi(t(i), e, r, i);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(Oh(r, t));
}, jh = (t, e, r, i) => {
  const s = Object.entries(t), n = s.length;
  for (let l = 0; l < n; l++) {
    const [a, o] = s[l];
    zi(o, Bn(e, a), r, i);
  }
}, Bn = (t, e) => {
  let r = t;
  const i = e.split(Pr), s = i.length;
  for (let n = 0; n < s; n++) {
    const l = i[n];
    let a = r.nextPart.get(l);
    a || (a = In(), r.nextPart.set(l, a)), r = a;
  }
  return r;
}, Yh = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, Hh = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  const s = (n, l) => {
    r[n] = l, e++, e > t && (e = 0, i = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(n) {
      let l = r[n];
      if (l !== void 0)
        return l;
      if ((l = i[n]) !== void 0)
        return s(n, l), l;
    },
    set(n, l) {
      n in r ? r[n] = l : s(n, l);
    }
  };
}, _i = "!", ks = ":", Zh = [], Fs = (t, e, r, i, s) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: r,
  maybePostfixModifierPosition: i,
  isExternal: s
}), Qh = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: r
  } = t;
  let i = (s) => {
    const n = [];
    let l = 0, a = 0, o = 0, h;
    const f = s.length;
    for (let m = 0; m < f; m++) {
      const v = s[m];
      if (l === 0 && a === 0) {
        if (v === ks) {
          n.push(s.slice(o, m)), o = m + 1;
          continue;
        }
        if (v === "/") {
          h = m;
          continue;
        }
      }
      v === "[" ? l++ : v === "]" ? l-- : v === "(" ? a++ : v === ")" && a--;
    }
    const c = n.length === 0 ? s : s.slice(o);
    let u = c, d = !1;
    c.endsWith(_i) ? (u = c.slice(0, -1), d = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      c.startsWith(_i) && (u = c.slice(1), d = !0)
    );
    const p = h && h > o ? h - o : void 0;
    return Fs(n, d, u, p);
  };
  if (e) {
    const s = e + ks, n = i;
    i = (l) => l.startsWith(s) ? n(l.slice(s.length)) : Fs(Zh, !1, l, void 0, !0);
  }
  if (r) {
    const s = i;
    i = (n) => r({
      className: n,
      parseClassName: s
    });
  }
  return i;
}, Kh = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((r, i) => {
    e.set(r, 1e6 + i);
  }), (r) => {
    const i = [];
    let s = [];
    for (let n = 0; n < r.length; n++) {
      const l = r[n], a = l[0] === "[", o = e.has(l);
      a || o ? (s.length > 0 && (s.sort(), i.push(...s), s = []), i.push(l)) : s.push(l);
    }
    return s.length > 0 && (s.sort(), i.push(...s)), i;
  };
}, Jh = (t) => ({
  cache: Hh(t.cacheSize),
  parseClassName: Qh(t),
  sortModifiers: Kh(t),
  postfixLookupClassGroupIds: ec(t),
  ...Uh(t)
}), ec = (t) => {
  const e = /* @__PURE__ */ Object.create(null), r = t.postfixLookupClassGroups;
  if (r)
    for (let i = 0; i < r.length; i++)
      e[r[i]] = !0;
  return e;
}, tc = /\s+/, rc = (t, e) => {
  const {
    parseClassName: r,
    getClassGroupId: i,
    getConflictingClassGroupIds: s,
    sortModifiers: n,
    postfixLookupClassGroupIds: l
  } = e, a = [], o = t.trim().split(tc);
  let h = "";
  for (let f = o.length - 1; f >= 0; f -= 1) {
    const c = o[f], {
      isExternal: u,
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    } = r(c);
    if (u) {
      h = c + (h.length > 0 ? " " + h : h);
      continue;
    }
    let b = !!v, M;
    if (b) {
      const k = m.substring(0, v);
      M = i(k);
      const y = M && l[M] ? i(m) : void 0;
      y && y !== M && (M = y, b = !1);
    } else
      M = i(m);
    if (!M) {
      if (!b) {
        h = c + (h.length > 0 ? " " + h : h);
        continue;
      }
      if (M = i(m), !M) {
        h = c + (h.length > 0 ? " " + h : h);
        continue;
      }
      b = !1;
    }
    const _ = d.length === 0 ? "" : d.length === 1 ? d[0] : n(d).join(":"), x = p ? _ + _i : _, A = x + M;
    if (a.indexOf(A) > -1)
      continue;
    a.push(A);
    const S = s(M, b);
    for (let k = 0; k < S.length; ++k) {
      const y = S[k];
      a.push(x + y);
    }
    h = c + (h.length > 0 ? " " + h : h);
  }
  return h;
}, ic = (...t) => {
  let e = 0, r, i, s = "";
  for (; e < t.length; )
    (r = t[e++]) && (i = Un(r)) && (s && (s += " "), s += i);
  return s;
}, Un = (t) => {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let i = 0; i < t.length; i++)
    t[i] && (e = Un(t[i])) && (r && (r += " "), r += e);
  return r;
}, sc = (t, ...e) => {
  let r, i, s, n;
  const l = (o) => {
    const h = e.reduce((f, c) => c(f), t());
    return r = Jh(h), i = r.cache.get, s = r.cache.set, n = a, a(o);
  }, a = (o) => {
    const h = i(o);
    if (h)
      return h;
    const f = rc(o, r);
    return s(o, f), f;
  };
  return n = l, (...o) => n(ic(...o));
}, nc = [], Q = (t) => {
  const e = (r) => r[t] || nc;
  return e.isThemeGetter = !0, e;
}, Vn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, lc = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ac = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, oc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, cc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ke = (t) => lc.test(t), P = (t) => !!t && !Number.isNaN(Number(t)), Ce = (t) => !!t && Number.isInteger(Number(t)), ei = (t) => t.endsWith("%") && P(t.slice(0, -1)), Be = (t) => ac.test(t), Wn = () => !0, uc = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  oc.test(t) && !hc.test(t)
), Pi = () => !1, dc = (t) => cc.test(t), pc = (t) => fc.test(t), gc = (t) => !E(t) && !T(t), mc = (t) => t.startsWith("@container") && (t[10] === "/" && t[11] !== void 0 || t[11] === "s" && t[16] !== void 0 && t.startsWith("-size/", 10) || t[11] === "n" && t[18] !== void 0 && t.startsWith("-normal/", 10)), vc = (t) => ot(t, $n, Pi), E = (t) => Vn.test(t), gt = (t) => ot(t, jn, uc), Cs = (t) => ot(t, Ac, P), bc = (t) => ot(t, Hn, Wn), _c = (t) => ot(t, Yn, Pi), zs = (t) => ot(t, Xn, Pi), xc = (t) => ot(t, qn, pc), mr = (t) => ot(t, Zn, dc), T = (t) => Gn.test(t), er = (t) => Rt(t, jn), yc = (t) => Rt(t, Yn), Ps = (t) => Rt(t, Xn), wc = (t) => Rt(t, $n), Ec = (t) => Rt(t, qn), vr = (t) => Rt(t, Zn, !0), Tc = (t) => Rt(t, Hn, !0), ot = (t, e, r) => {
  const i = Vn.exec(t);
  return i ? i[1] ? e(i[1]) : r(i[2]) : !1;
}, Rt = (t, e, r = !1) => {
  const i = Gn.exec(t);
  return i ? i[1] ? e(i[1]) : r : !1;
}, Xn = (t) => t === "position" || t === "percentage", qn = (t) => t === "image" || t === "url", $n = (t) => t === "length" || t === "size" || t === "bg-size", jn = (t) => t === "length", Ac = (t) => t === "number", Yn = (t) => t === "family-name", Hn = (t) => t === "number" || t === "weight", Zn = (t) => t === "shadow", Mc = () => {
  const t = Q("color"), e = Q("font"), r = Q("text"), i = Q("font-weight"), s = Q("tracking"), n = Q("leading"), l = Q("breakpoint"), a = Q("container"), o = Q("spacing"), h = Q("radius"), f = Q("shadow"), c = Q("inset-shadow"), u = Q("text-shadow"), d = Q("drop-shadow"), p = Q("blur"), m = Q("perspective"), v = Q("aspect"), b = Q("ease"), M = Q("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], A = () => [...x(), T, E], S = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], y = () => [T, E, o], L = () => [Ke, "full", "auto", ...y()], q = () => [Ce, "none", "subgrid", T, E], C = () => ["auto", {
    span: ["full", Ce, T, E]
  }, Ce, T, E], D = () => [Ce, "auto", T, E], R = () => ["auto", "min", "max", "fr", T, E], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], se = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], oe = () => ["auto", ...y()], Ae = () => [Ke, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...y()], ht = () => [Ke, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...y()], H = () => [Ke, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...y()], w = () => [t, T, E], he = () => [...x(), Ps, zs, {
    position: [T, E]
  }], je = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Oe = () => ["auto", "cover", "contain", wc, vc, {
    size: [T, E]
  }], me = () => [ei, er, gt], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    h,
    T,
    E
  ], Z = () => ["", P, er, gt], Ye = () => ["solid", "dashed", "dotted", "double"], Me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => [P, ei, Ps, zs], ct = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    T,
    E
  ], ft = () => ["none", P, T, E], ut = () => ["none", P, T, E], kt = () => [P, T, E], He = () => [Ke, "full", ...y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Be],
      breakpoint: [Be],
      color: [Wn],
      container: [Be],
      "drop-shadow": [Be],
      ease: ["in", "out", "in-out"],
      font: [gc],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Be],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Be],
      shadow: [Be],
      spacing: ["px", P],
      text: [Be],
      "text-shadow": [Be],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ke, E, T, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", T, E]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [mc],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [P, E, T, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: A()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: L()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: L()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: L()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": L()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ce, "auto", T, E]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ke, "full", "auto", a, ...y()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [P, Ke, "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", P, T, E]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", P, T, E]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ce, "first", "last", "none", T, E]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": q()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: C()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": q()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: C()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": R()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": R()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...se(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...se()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...se(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...se(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...se()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: y()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: y()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: y()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: y()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: y()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: y()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: oe()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: oe()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: oe()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: oe()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: oe()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: oe()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: oe()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: oe()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: oe()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: oe()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: oe()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": y()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": y()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Ae()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...ht()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...ht()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...ht()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...H()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...H()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...H()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...Ae()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Ae()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...Ae()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Ae()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Ae()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Ae()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, er, gt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [i, Tc, bc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ei, E]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yc, _c, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [E]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, T, E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [P, "none", T, Cs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", T, E]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", T, E]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: w()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: w()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ye(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [P, "from-font", "auto", T, gt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: w()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [P, "auto", T, E]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: y()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Ce, T, E]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", T, E]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", T, E]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: he()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: je()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Oe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ce, T, E],
          radial: ["", T, E],
          conic: [Ce, T, E]
        }, Ec, xc]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: w()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: me()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: me()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: me()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: w()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: J()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": J()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": J()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": J()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": J()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": J()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": J()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": J()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": J()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": J()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": J()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": J()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": J()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": J()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": J()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Z()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Z()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Z()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Z()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Z()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": Z()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": Z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ye(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ye(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: w()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": w()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": w()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": w()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": w()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": w()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": w()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": w()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": w()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": w()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": w()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: w()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ye(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [P, T, E]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", P, er, gt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: w()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          vr,
          mr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: w()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", c, vr, mr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": w()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: w()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [P, gt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": w()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": w()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", u, vr, mr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": w()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P, T, E]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Me(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Me()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [P]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": j()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": w()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": j()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": w()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": j()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": w()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": j()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": w()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": j()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": w()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": j()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": w()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": j()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": w()
      }],
      "mask-image-radial": [{
        "mask-radial": [T, E]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": j()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": w()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [P]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": j()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": w()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: he()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: je()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Oe()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", T, E]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          T,
          E
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ct()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [P, T, E]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [P, T, E]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          vr,
          mr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": w()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", P, T, E]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [P, T, E]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", P, T, E]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [P, T, E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", P, T, E]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          T,
          E
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ct()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [P, T, E]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [P, T, E]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", P, T, E]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [P, T, E]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", P, T, E]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P, T, E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [P, T, E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", P, T, E]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": y()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", T, E]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [P, "initial", T, E]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, T, E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [P, T, E]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", M, T, E]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [m, T, E]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": A()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ft()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ft()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ft()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ft()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ut()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ut()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ut()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ut()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: kt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": kt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": kt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [T, E, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: A()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: He()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": He()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": He()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": He()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [Ce, T, E]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: w()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: w()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", T, E]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": w()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": w()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": y()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": y()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": y()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", T, E]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...w()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [P, er, gt, Cs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...w()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Sc = /* @__PURE__ */ sc(Mc);
function Rc(...t) {
  return Sc(Sn(t));
}
var kc = /* @__PURE__ */ En('<div><div class="absolute inset-0 z-0"><!></div></div>');
function Fc(t, e) {
  Ei(e, !0);
  let r = Se(e, "class", 3, ""), i = Se(e, "dissipation", 3, 0.96), s = Se(e, "pointerSize", 3, 5e-3), n = Se(e, "color", 3, "#c9fd34"), l = Se(e, "velocityDissipation", 3, 0.96), a = Se(e, "pressureIterations", 3, 10), o = /* @__PURE__ */ Va(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "class",
    "dissipation",
    "pointerSize",
    "color",
    "velocityDissipation",
    "pressureIterations"
  ]);
  var h = kc();
  Ba(h, (u) => ({ class: u, ...o }), [
    () => Rc("relative h-full w-full overflow-hidden", r())
  ]);
  var f = Yi(h), c = Yi(f);
  Nh(c, {
    get dissipation() {
      return i();
    },
    get pointerSize() {
      return s();
    },
    get color() {
      return n();
    },
    get velocityDissipation() {
      return l();
    },
    get pressureIterations() {
      return a();
    }
  }), Tn(t, h), Ti();
}
function Dc(t, e = {}) {
  return Sa(Fc, { target: t, props: e });
}
export {
  Fc as default,
  Dc as render,
  Pc as unmount
};
