var vu = Object.defineProperty;
var Mo = (r) => {
  throw TypeError(r);
};
var bu = (r, t, e) => t in r ? vu(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Ft = (r, t, e) => bu(r, typeof t != "symbol" ? t + "" : t, e), Cs = (r, t, e) => t.has(r) || Mo("Cannot " + e);
var A = (r, t, e) => (Cs(r, t, "read from private field"), e ? e.call(r) : t.get(r)), B = (r, t, e) => t.has(r) ? Mo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), N = (r, t, e, i) => (Cs(r, t, "write to private field"), i ? i.call(r, e) : t.set(r, e), e), H = (r, t, e) => (Cs(r, t, "access private method"), e);
var Fa = Array.isArray, yu = Array.prototype.indexOf, Mi = Array.prototype.includes, fs = Array.from, xu = Object.defineProperty, pi = Object.getOwnPropertyDescriptor, wu = Object.getOwnPropertyDescriptors, Au = Object.prototype, Tu = Array.prototype, Ul = Object.getPrototypeOf, So = Object.isExtensible;
const ku = () => {
};
function Eu(r) {
  for (var t = 0; t < r.length; t++)
    r[t]();
}
function Vl() {
  var r, t, e = new Promise((i, n) => {
    r = i, t = n;
  });
  return { promise: e, resolve: r, reject: t };
}
const Mt = 2, Si = 4, hs = 8, za = 1 << 24, ke = 16, Se = 32, _r = 64, Zs = 128, pe = 512, yt = 1024, Tt = 2048, Ne = 4096, Dt = 8192, _e = 16384, Qr = 32768, Co = 1 << 25, qr = 65536, qn = 1 << 17, Mu = 1 << 18, Li = 1 << 19, Su = 1 << 20, Qe = 1 << 25, Wr = 65536, Wn = 1 << 21, _i = 1 << 22, fr = 1 << 23, gi = Symbol("$state"), Cu = Symbol("legacy props"), Pu = Symbol(""), In = Symbol("attributes"), $s = Symbol("class"), Js = Symbol("style"), Xi = Symbol("text"), us = new class extends Error {
  constructor() {
    super(...arguments);
    Ft(this, "name", "StaleReactionError");
    Ft(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Yl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ru() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ou(r, t, e) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Du(r) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zu(r) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Iu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Lu(r) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Nu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Bu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Uu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Vu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Yu = 1, Gu = 2, Xu = 16, qu = 1, Wu = 4, ju = 8, Hu = 16, Qu = 1, Ku = 2, bt = Symbol(), Gl = "http://www.w3.org/1999/xhtml", Zu = "@attach";
function $u() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ju() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function tc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Xl(r) {
  return r === this.v;
}
function ec(r, t) {
  return r != r ? t == t : r !== t || r !== null && typeof r == "object" || typeof r == "function";
}
function ql(r) {
  return !ec(r, this.v);
}
let me = null;
function Ci(r) {
  me = r;
}
function cs(r, t = !1, e) {
  me = {
    p: me,
    i: !1,
    c: null,
    e: null,
    s: r,
    x: null,
    r: (
      /** @type {Effect} */
      W
    ),
    l: null
  };
}
function ds(r) {
  var t = (
    /** @type {ComponentContext} */
    me
  ), e = t.e;
  if (e !== null) {
    t.e = null;
    for (var i of e)
      _f(i);
  }
  return t.i = !0, me = t.p, /** @type {T} */
  {};
}
function Wl() {
  return !0;
}
let fi = [];
function rc() {
  var r = fi;
  fi = [], Eu(r);
}
function hr(r) {
  if (fi.length === 0) {
    var t = fi;
    queueMicrotask(() => {
      t === fi && rc();
    });
  }
  fi.push(r);
}
function jl(r) {
  var t = W;
  if (t === null)
    return q.f |= fr, r;
  if ((t.f & Qr) === 0 && (t.f & Si) === 0)
    throw r;
  sr(r, t);
}
function sr(r, t) {
  for (; t !== null; ) {
    if ((t.f & Zs) !== 0) {
      if ((t.f & Qr) === 0)
        throw r;
      try {
        t.b.error(r);
        return;
      } catch (e) {
        r = e;
      }
    }
    t = t.parent;
  }
  throw r;
}
const ic = -7169;
function lt(r, t) {
  r.f = r.f & ic | t;
}
function Ia(r) {
  (r.f & pe) !== 0 || r.deps === null ? lt(r, yt) : lt(r, Ne);
}
function Hl(r) {
  if (r !== null)
    for (const t of r)
      (t.f & Mt) === 0 || (t.f & Wr) === 0 || (t.f ^= Wr, Hl(
        /** @type {Derived} */
        t.deps
      ));
}
function Ql(r, t, e) {
  (r.f & Tt) !== 0 ? t.add(r) : (r.f & Ne) !== 0 && e.add(r), Hl(r.deps), lt(r, yt);
}
let Pn = !1;
function nc(r) {
  var t = Pn;
  try {
    return Pn = !1, [r(), Pn];
  } finally {
    Pn = t;
  }
}
let Ps = null, si = null, K = null, ta = null, Ee = null, ea = null, Rs = !1, hi = null, Ln = null;
var Po = 0;
let sc = 1;
var yi, rr, Dr, xi, wi, Fr, Ai, We, dn, Ht, pn, ir, De, Fe, Ti, ki, Z, ra, qi, ia, Kl, Zl, Nn, ac, na, li;
const as = class as {
  constructor() {
    B(this, Z);
    Ft(this, "id", sc++);
    /** True as soon as `#process` was called */
    B(this, yi, !1);
    Ft(this, "linked", !0);
    /** @type {Batch | null} */
    B(this, rr, null);
    /** @type {Batch | null} */
    B(this, Dr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Ft(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Ft(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Ft(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    Ft(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, xi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, wi, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    B(this, Fr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    B(this, Ai, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    B(this, We, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    B(this, dn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    B(this, Ht, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    B(this, pn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    B(this, ir, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    B(this, De, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    B(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    B(this, Ti, /* @__PURE__ */ new Set());
    Ft(this, "is_fork", !1);
    B(this, ki, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    A(this, Fe).has(t) || A(this, Fe).set(t, { d: [], m: [] }), A(this, Ti).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, e = (i) => this.schedule(i)) {
    var i = A(this, Fe).get(t);
    if (i) {
      A(this, Fe).delete(t);
      for (var n of i.d)
        lt(n, Tt), e(n);
      for (n of i.m)
        lt(n, Ne), e(n);
    }
    A(this, Ti).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, e, i = !1) {
    t.v !== bt && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & fr) === 0 && (this.current.set(t, [e, i]), Ee?.set(t, e)), this.is_fork || (t.v = e);
  }
  activate() {
    K = this;
  }
  deactivate() {
    K = null, Ee = null;
  }
  flush() {
    try {
      Rs = !0, K = this, H(this, Z, qi).call(this);
    } finally {
      Po = 0, ea = null, hi = null, Ln = null, Rs = !1, K = null, Ee = null, Nr.clear();
    }
  }
  discard() {
    for (const t of A(this, wi)) t(this);
    A(this, wi).clear(), A(this, Fr).clear(), H(this, Z, li).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    A(this, pn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, e) {
    if (N(this, Ai, A(this, Ai) + 1), t) {
      let i = A(this, We).get(e) ?? 0;
      A(this, We).set(e, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, e) {
    if (N(this, Ai, A(this, Ai) - 1), t) {
      let i = A(this, We).get(e) ?? 0;
      i === 1 ? A(this, We).delete(e) : A(this, We).set(e, i - 1);
    }
    A(this, ki) || (N(this, ki, !0), hr(() => {
      N(this, ki, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, e) {
    for (const i of t)
      A(this, ir).add(i);
    for (const i of e)
      A(this, De).add(i);
    t.clear(), e.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    A(this, xi).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    A(this, wi).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    A(this, Fr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of A(this, Fr)) t(this);
    A(this, Fr).clear();
  }
  settled() {
    return (A(this, dn) ?? N(this, dn, Vl())).promise;
  }
  static ensure() {
    var t;
    if (K === null) {
      const e = K = new as();
      H(t = e, Z, na).call(t), Rs || hr(() => {
        A(e, yi) || e.flush();
      });
    }
    return K;
  }
  apply() {
    {
      Ee = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (ea = t, t.b?.is_pending && (t.f & (Si | hs | za)) !== 0 && (t.f & Qr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var e = t; e.parent !== null; ) {
      e = e.parent;
      var i = e.f;
      if (hi !== null && e === W && (q === null || (q.f & Mt) === 0))
        return;
      if ((i & (_r | Se)) !== 0) {
        if ((i & yt) === 0)
          return;
        e.f ^= yt;
      }
    }
    A(this, Ht).push(e);
  }
};
yi = new WeakMap(), rr = new WeakMap(), Dr = new WeakMap(), xi = new WeakMap(), wi = new WeakMap(), Fr = new WeakMap(), Ai = new WeakMap(), We = new WeakMap(), dn = new WeakMap(), Ht = new WeakMap(), pn = new WeakMap(), ir = new WeakMap(), De = new WeakMap(), Fe = new WeakMap(), Ti = new WeakMap(), ki = new WeakMap(), Z = new WeakSet(), ra = function() {
  if (this.is_fork) return !0;
  for (const i of A(this, We).keys()) {
    for (var t = i, e = !1; t.parent !== null; ) {
      if (A(this, Fe).has(t)) {
        e = !0;
        break;
      }
      t = t.parent;
    }
    if (!e)
      return !0;
  }
  return !1;
}, qi = function() {
  var l, f, h;
  if (N(this, yi, !0), Po++ > 1e3 && (H(this, Z, li).call(this), oc()), !H(this, Z, ra).call(this)) {
    for (const u of A(this, ir))
      A(this, De).delete(u), lt(u, Tt), this.schedule(u);
    for (const u of A(this, De))
      lt(u, Ne), this.schedule(u);
  }
  const t = A(this, Ht);
  N(this, Ht, []), this.apply();
  var e = hi = [], i = [], n = Ln = [];
  for (const u of t)
    try {
      H(this, Z, ia).call(this, u, e, i);
    } catch (c) {
      throw tf(u), c;
    }
  if (K = null, n.length > 0) {
    var s = as.ensure();
    for (const u of n)
      s.schedule(u);
  }
  if (hi = null, Ln = null, H(this, Z, ra).call(this)) {
    H(this, Z, Nn).call(this, i), H(this, Z, Nn).call(this, e);
    for (const [u, c] of A(this, Fe))
      Jl(u, c);
    n.length > 0 && /** @type {unknown} */
    H(l = K, Z, qi).call(l);
    return;
  }
  const a = H(this, Z, Kl).call(this);
  if (a) {
    H(f = a, Z, Zl).call(f, this);
    return;
  }
  A(this, ir).clear(), A(this, De).clear();
  for (const u of A(this, xi)) u(this);
  A(this, xi).clear(), ta = this, Ro(i), Ro(e), ta = null, A(this, dn)?.resolve();
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    K
  );
  if (this.linked && A(this, Ai) === 0 && H(this, Z, li).call(this), A(this, Ht).length > 0) {
    o === null && (o = this, H(this, Z, na).call(this));
    const u = o;
    A(u, Ht).push(...A(this, Ht).filter((c) => !A(u, Ht).includes(c)));
  }
  o !== null && H(h = o, Z, qi).call(h);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
ia = function(t, e, i) {
  t.f ^= yt;
  for (var n = t.first; n !== null; ) {
    var s = n.f, a = (s & (Se | _r)) !== 0, o = a && (s & yt) !== 0, l = o || (s & Dt) !== 0 || A(this, Fe).has(n);
    if (!l && n.fn !== null) {
      a ? n.f ^= yt : (s & Si) !== 0 ? e.push(n) : yn(n) && ((s & ke) !== 0 && A(this, De).add(n), Ri(n));
      var f = n.first;
      if (f !== null) {
        n = f;
        continue;
      }
    }
    for (; n !== null; ) {
      var h = n.next;
      if (h !== null) {
        n = h;
        break;
      }
      n = n.parent;
    }
  }
}, Kl = function() {
  for (var t = A(this, rr); t !== null; ) {
    if (!t.is_fork) {
      for (const [e, [, i]] of this.current)
        if (t.current.has(e) && !i)
          return t;
    }
    t = A(t, rr);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Zl = function(t) {
  var i;
  for (const [n, s] of t.current)
    !this.previous.has(n) && t.previous.has(n) && this.previous.set(n, t.previous.get(n)), this.current.set(n, s);
  for (const [n, s] of t.async_deriveds) {
    const a = this.async_deriveds.get(n);
    a && s.promise.then(a.resolve);
  }
  const e = (n) => {
    var s = n.reactions;
    if (s !== null)
      for (const l of s) {
        var a = l.f;
        if ((a & Mt) !== 0)
          e(
            /** @type {Derived} */
            l
          );
        else {
          var o = (
            /** @type {Effect} */
            l
          );
          a & (_i | ke) && !this.async_deriveds.has(o) && (A(this, De).delete(o), lt(o, Tt), this.schedule(o));
        }
      }
  };
  for (const n of this.current.keys())
    e(n);
  this.oncommit(() => t.discard()), H(i = t, Z, li).call(i), K = this, H(this, Z, qi).call(this);
}, /**
 * @param {Effect[]} effects
 */
Nn = function(t) {
  for (var e = 0; e < t.length; e += 1)
    Ql(t[e], A(this, ir), A(this, De));
}, ac = function() {
  var h;
  H(this, Z, li).call(this);
  for (let u = Ps; u !== null; u = A(u, Dr)) {
    var t = u.id < this.id, e = [];
    for (const [c, [p, _]] of this.current) {
      if (u.current.has(c)) {
        var i = (
          /** @type {[any, boolean]} */
          u.current.get(c)[0]
        );
        if (t && p !== i)
          u.current.set(c, [p, _]);
        else
          continue;
      }
      e.push(c);
    }
    if (t)
      for (const [c, p] of this.async_deriveds) {
        const _ = u.async_deriveds.get(c);
        _ && p.promise.then(_.resolve);
      }
    if (A(u, yi)) {
      var n = [...u.current.keys()].filter((c) => !this.current.has(c));
      if (n.length === 0)
        t && u.discard();
      else if (e.length > 0) {
        if (t)
          for (const c of A(this, Ti))
            u.unskip_effect(c, (p) => {
              var _;
              (p.f & (ke | _i)) !== 0 ? u.schedule(p) : H(_ = u, Z, Nn).call(_, [p]);
            });
        u.activate();
        var s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var o of e)
          $l(o, n, s, a);
        a = /* @__PURE__ */ new Map();
        var l = [...u.current.keys()].filter(
          (c) => this.current.has(c) ? (
            /** @type {[any, boolean]} */
            this.current.get(c)[0] !== c.v
          ) : !0
        );
        if (l.length > 0)
          for (const c of A(this, pn))
            (c.f & (_e | Dt | qn)) === 0 && La(c, l, a) && ((c.f & (_i | ke)) !== 0 ? (lt(c, Tt), u.schedule(c)) : A(u, ir).add(c));
        if (A(u, Ht).length > 0) {
          u.apply();
          for (var f of A(u, Ht))
            H(h = u, Z, ia).call(h, f, [], []);
          N(u, Ht, []);
        }
        u.deactivate();
      }
    }
  }
}, na = function() {
  si === null ? Ps = si = this : (N(si, Dr, this), N(this, rr, si)), si = this;
}, li = function() {
  var t = A(this, rr), e = A(this, Dr);
  t === null ? Ps = e : N(t, Dr, e), e === null ? si = t : N(e, rr, t), this.linked = !1;
};
let jr = as;
function oc() {
  try {
    Iu();
  } catch (r) {
    sr(r, ea);
  }
}
let Ge = null;
function Ro(r) {
  var t = r.length;
  if (t !== 0) {
    for (var e = 0; e < t; ) {
      var i = r[e++];
      if ((i.f & (_e | Dt)) === 0 && yn(i) && (Ge = /* @__PURE__ */ new Set(), Ri(i), i.deps === null && i.first === null && i.nodes === null && i.teardown === null && i.ac === null && bf(i), Ge?.size > 0)) {
        Nr.clear();
        for (const n of Ge) {
          if ((n.f & (_e | Dt)) !== 0) continue;
          const s = [n];
          let a = n.parent;
          for (; a !== null; )
            Ge.has(a) && (Ge.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (_e | Dt)) === 0 && Ri(l);
          }
        }
        Ge.clear();
      }
    }
    Ge = null;
  }
}
function $l(r, t, e, i) {
  if (!e.has(r) && (e.add(r), r.reactions !== null))
    for (const n of r.reactions) {
      const s = n.f;
      (s & Mt) !== 0 ? $l(
        /** @type {Derived} */
        n,
        t,
        e,
        i
      ) : (s & (_i | ke)) !== 0 && (s & Tt) === 0 && La(n, t, i) && (lt(n, Tt), Na(
        /** @type {Effect} */
        n
      ));
    }
}
function La(r, t, e) {
  const i = e.get(r);
  if (i !== void 0) return i;
  if (r.deps !== null)
    for (const n of r.deps) {
      if (Mi.call(t, n))
        return !0;
      if ((n.f & Mt) !== 0 && La(
        /** @type {Derived} */
        n,
        t,
        e
      ))
        return e.set(
          /** @type {Derived} */
          n,
          !0
        ), !0;
    }
  return e.set(r, !1), !1;
}
function Na(r) {
  K.schedule(r);
}
function Jl(r, t) {
  if (!((r.f & Se) !== 0 && (r.f & yt) !== 0)) {
    (r.f & Tt) !== 0 ? t.d.push(r) : (r.f & Ne) !== 0 && t.m.push(r), lt(r, yt);
    for (var e = r.first; e !== null; )
      Jl(e, t), e = e.next;
  }
}
function tf(r) {
  lt(r, yt);
  for (var t = r.first; t !== null; )
    tf(t), t = t.next;
}
function lc(r) {
  let t = 0, e = Hr(0), i;
  return () => {
    Va() && (G(e), Rc(() => (t === 0 && (i = qa(() => r(() => Qi(e)))), t += 1, () => {
      hr(() => {
        t -= 1, t === 0 && (i?.(), i = void 0, Qi(e));
      });
    })));
  };
}
var fc = qr | Li;
function hc(r, t, e, i) {
  new uc(r, t, e, i);
}
var fe, Da, he, zr, zt, ue, Ot, Qt, je, Ir, nr, Ei, _n, gn, He, os, ht, cc, dc, pc, sa, Bn, Un, aa, oa;
class uc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, e, i, n) {
    B(this, ht);
    /** @type {Boundary | null} */
    Ft(this, "parent");
    Ft(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Ft(this, "transform_error");
    /** @type {TemplateNode} */
    B(this, fe);
    /** @type {TemplateNode | null} */
    B(this, Da, null);
    /** @type {BoundaryProps} */
    B(this, he);
    /** @type {((anchor: Node) => void)} */
    B(this, zr);
    /** @type {Effect} */
    B(this, zt);
    /** @type {Effect | null} */
    B(this, ue, null);
    /** @type {Effect | null} */
    B(this, Ot, null);
    /** @type {Effect | null} */
    B(this, Qt, null);
    /** @type {DocumentFragment | null} */
    B(this, je, null);
    B(this, Ir, 0);
    B(this, nr, 0);
    B(this, Ei, !1);
    /** @type {Set<Effect>} */
    B(this, _n, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    B(this, gn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    B(this, He, null);
    B(this, os, lc(() => (N(this, He, Hr(A(this, Ir))), () => {
      N(this, He, null);
    })));
    N(this, fe, t), N(this, he, e), N(this, zr, (s) => {
      var a = (
        /** @type {Effect} */
        W
      );
      a.b = this, a.f |= Zs, i(s);
    }), this.parent = /** @type {Effect} */
    W.b, this.transform_error = n ?? this.parent?.transform_error ?? ((s) => s), N(this, zt, ps(() => {
      H(this, ht, sa).call(this);
    }, fc));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ql(t, A(this, _n), A(this, gn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!A(this, he).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, e) {
    H(this, ht, aa).call(this, t, e), N(this, Ir, A(this, Ir) + t), !(!A(this, He) || A(this, Ei)) && (N(this, Ei, !0), hr(() => {
      N(this, Ei, !1), A(this, He) && Pi(A(this, He), A(this, Ir));
    }));
  }
  get_effect_pending() {
    return A(this, os).call(this), G(
      /** @type {Source<number>} */
      A(this, He)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!A(this, he).onerror && !A(this, he).failed)
      throw t;
    K?.is_fork ? (A(this, ue) && K.skip_effect(A(this, ue)), A(this, Ot) && K.skip_effect(A(this, Ot)), A(this, Qt) && K.skip_effect(A(this, Qt)), K.on_fork_commit(() => {
      H(this, ht, oa).call(this, t);
    })) : H(this, ht, oa).call(this, t);
  }
}
fe = new WeakMap(), Da = new WeakMap(), he = new WeakMap(), zr = new WeakMap(), zt = new WeakMap(), ue = new WeakMap(), Ot = new WeakMap(), Qt = new WeakMap(), je = new WeakMap(), Ir = new WeakMap(), nr = new WeakMap(), Ei = new WeakMap(), _n = new WeakMap(), gn = new WeakMap(), He = new WeakMap(), os = new WeakMap(), ht = new WeakSet(), cc = function() {
  try {
    N(this, ue, Lt(() => A(this, zr).call(this, A(this, fe))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
dc = function(t) {
  const e = A(this, he).failed;
  e && N(this, Qt, Lt(() => {
    e(
      A(this, fe),
      () => t,
      () => () => {
      }
    );
  }));
}, pc = function() {
  const t = A(this, he).pending;
  t && (this.is_pending = !0, N(this, Ot, Lt(() => t(A(this, fe)))), hr(() => {
    var e = N(this, je, document.createDocumentFragment()), i = ur();
    e.append(i), N(this, ue, H(this, ht, Un).call(this, () => Lt(() => A(this, zr).call(this, i)))), A(this, nr) === 0 && (A(this, fe).before(e), N(this, je, null), Br(
      /** @type {Effect} */
      A(this, Ot),
      () => {
        N(this, Ot, null);
      }
    ), H(this, ht, Bn).call(
      this,
      /** @type {Batch} */
      K
    ));
  }));
}, sa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), N(this, nr, 0), N(this, Ir, 0), N(this, ue, Lt(() => {
      A(this, zr).call(this, A(this, fe));
    })), A(this, nr) > 0) {
      var t = N(this, je, document.createDocumentFragment());
      Xa(A(this, ue), t);
      const e = (
        /** @type {(anchor: Node) => void} */
        A(this, he).pending
      );
      N(this, Ot, Lt(() => e(A(this, fe))));
    } else
      H(this, ht, Bn).call(
        this,
        /** @type {Batch} */
        K
      );
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {Batch} batch
 */
Bn = function(t) {
  this.is_pending = !1, t.transfer_effects(A(this, _n), A(this, gn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Un = function(t) {
  var e = W, i = q, n = me;
  Be(A(this, zt)), ve(A(this, zt)), Ci(A(this, zt).ctx);
  try {
    return jr.ensure(), t();
  } catch (s) {
    return jl(s), null;
  } finally {
    Be(e), ve(i), Ci(n);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
aa = function(t, e) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && H(i = this.parent, ht, aa).call(i, t, e);
    return;
  }
  N(this, nr, A(this, nr) + t), A(this, nr) === 0 && (H(this, ht, Bn).call(this, e), A(this, Ot) && Br(A(this, Ot), () => {
    N(this, Ot, null);
  }), A(this, je) && (A(this, fe).before(A(this, je)), N(this, je, null)));
}, /**
 * @param {unknown} error
 */
oa = function(t) {
  A(this, ue) && (kt(A(this, ue)), N(this, ue, null)), A(this, Ot) && (kt(A(this, Ot)), N(this, Ot, null)), A(this, Qt) && (kt(A(this, Qt)), N(this, Qt, null));
  var e = A(this, he).onerror;
  let i = A(this, he).failed;
  var n = !1, s = !1;
  const a = () => {
    if (n) {
      tc();
      return;
    }
    n = !0, s && Vu(), A(this, Qt) !== null && Br(A(this, Qt), () => {
      N(this, Qt, null);
    }), H(this, ht, Un).call(this, () => {
      H(this, ht, sa).call(this);
    });
  }, o = (l) => {
    try {
      s = !0, e?.(l, a), s = !1;
    } catch (f) {
      sr(f, A(this, zt) && A(this, zt).parent);
    }
    i && N(this, Qt, H(this, ht, Un).call(this, () => {
      try {
        return Lt(() => {
          var f = (
            /** @type {Effect} */
            W
          );
          f.b = this, f.f |= Zs, i(
            A(this, fe),
            () => l,
            () => a
          );
        });
      } catch (f) {
        return sr(
          f,
          /** @type {Effect} */
          A(this, zt).parent
        ), null;
      }
    }));
  };
  hr(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      sr(f, A(this, zt) && A(this, zt).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (f) => sr(f, A(this, zt) && A(this, zt).parent)
    ) : o(l);
  });
};
function ef(r, t, e, i) {
  const n = rn;
  var s = r.filter((c) => !c.settled);
  if (e.length === 0 && s.length === 0) {
    i(t.map(n));
    return;
  }
  var a = (
    /** @type {Effect} */
    W
  ), o = _c(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((c) => c.promise)) : null;
  function f(c) {
    if ((a.f & _e) === 0) {
      o();
      try {
        i(c);
      } catch (p) {
        sr(p, a);
      }
      jn();
    }
  }
  var h = rf();
  if (e.length === 0) {
    l.then(() => f(t.map(n))).finally(h);
    return;
  }
  function u() {
    Promise.all(e.map((c) => /* @__PURE__ */ gc(c))).then((c) => f([...t.map(n), ...c])).catch((c) => sr(c, a)).finally(h);
  }
  l ? l.then(() => {
    o(), u(), jn();
  }) : u();
}
function _c() {
  var r = (
    /** @type {Effect} */
    W
  ), t = q, e = me, i = (
    /** @type {Batch} */
    K
  );
  return function(s = !0) {
    Be(r), ve(t), Ci(e), s && (r.f & _e) === 0 && (i?.activate(), i?.apply());
  };
}
function jn(r = !0) {
  Be(null), ve(null), Ci(null), r && K?.deactivate();
}
function rf() {
  var r = (
    /** @type {Effect} */
    W
  ), t = (
    /** @type {Boundary} */
    r.b
  ), e = (
    /** @type {Batch} */
    K
  ), i = t.is_rendered();
  return t.update_pending_count(1, e), e.increment(i, r), () => {
    t.update_pending_count(-1, e), e.decrement(i, r);
  };
}
// @__NO_SIDE_EFFECTS__
function rn(r) {
  var t = Mt | Tt;
  return W !== null && (W.f |= Li), {
    ctx: me,
    deps: null,
    effects: null,
    equals: Xl,
    f: t,
    fn: r,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      bt
    ),
    wv: 0,
    parent: W,
    ac: null
  };
}
const Rn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function gc(r, t, e) {
  let i = (
    /** @type {Effect | null} */
    W
  );
  i === null && Ru();
  var n = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Hr(
    /** @type {V} */
    bt
  ), a = !q, o = /* @__PURE__ */ new Set();
  return Pc(() => {
    var l = (
      /** @type {Effect} */
      W
    ), f = Vl();
    n = f.promise;
    try {
      Promise.resolve(r()).then(f.resolve, (p) => {
        p !== us && f.reject(p);
      }).finally(jn);
    } catch (p) {
      f.reject(p), jn();
    }
    var h = (
      /** @type {Batch} */
      K
    );
    if (a) {
      if ((l.f & Qr) !== 0)
        var u = rf();
      if (
        /** @type {Boundary} */
        i.b.is_rendered()
      )
        h.async_deriveds.get(l)?.reject(Rn);
      else
        for (const p of o.values())
          p.reject(Rn);
      o.add(f), h.async_deriveds.set(l, f);
    }
    const c = (p, _ = void 0) => {
      u?.(), o.delete(f), _ !== Rn && (h.activate(), _ ? (s.f |= fr, Pi(s, _)) : ((s.f & fr) !== 0 && (s.f ^= fr), Pi(s, p)), h.deactivate());
    };
    f.promise.then(c, (p) => c(null, p || "unknown"));
  }), pf(() => {
    for (const l of o)
      l.reject(Rn);
  }), new Promise((l) => {
    function f(h) {
      function u() {
        h === n ? l(s) : f(n);
      }
      h.then(u, u);
    }
    f(n);
  });
}
// @__NO_SIDE_EFFECTS__
function Hn(r) {
  const t = /* @__PURE__ */ rn(r);
  return wf(t), t;
}
// @__NO_SIDE_EFFECTS__
function nf(r) {
  const t = /* @__PURE__ */ rn(r);
  return t.equals = ql, t;
}
function mc(r) {
  var t = r.effects;
  if (t !== null) {
    r.effects = null;
    for (var e = 0; e < t.length; e += 1)
      kt(
        /** @type {Effect} */
        t[e]
      );
  }
}
function Ba(r) {
  var t, e = W, i = r.parent;
  if (!Ke && i !== null && (i.f & (_e | Dt)) !== 0)
    return $u(), r.v;
  Be(i);
  try {
    r.f &= ~Wr, mc(r), t = Ef(r);
  } finally {
    Be(e);
  }
  return t;
}
function sf(r) {
  var t = Ba(r);
  if (!r.equals(t) && (r.wv = Tf(), (!K?.is_fork || r.deps === null) && (K !== null ? (K.capture(r, t, !0), ta?.capture(r, t, !0)) : r.v = t, r.deps === null))) {
    lt(r, yt);
    return;
  }
  Ke || (Ee !== null ? (Va() || K?.is_fork) && Ee.set(r, t) : Ia(r));
}
function vc(r) {
  if (r.effects !== null)
    for (const t of r.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(us), t.teardown = ku, t.ac = null, nn(t, 0), Ya(t));
}
function af(r) {
  if (r.effects !== null)
    for (const t of r.effects)
      t.teardown && Ri(t);
}
let Qn = /* @__PURE__ */ new Set();
const Nr = /* @__PURE__ */ new Map();
let of = !1;
function Hr(r, t) {
  var e = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: Xl,
    rv: 0,
    wv: 0
  };
  return e;
}
// @__NO_SIDE_EFFECTS__
function we(r, t) {
  const e = Hr(r);
  return wf(e), e;
}
// @__NO_SIDE_EFFECTS__
function bc(r, t = !1, e = !0) {
  const i = Hr(r);
  return t || (i.equals = ql), i;
}
function Te(r, t, e = !1) {
  q !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Me || (q.f & qn) !== 0) && Wl() && (q.f & (Mt | ke | _i | qn)) !== 0 && (ge === null || !Mi.call(ge, r)) && Uu();
  let i = e ? Cr(t) : t;
  return Pi(r, i, Ln);
}
function Pi(r, t, e = null) {
  if (!r.equals(t)) {
    Nr.set(r, Ke ? t : r.v);
    var i = jr.ensure();
    if (i.capture(r, t), (r.f & Mt) !== 0) {
      const n = (
        /** @type {Derived} */
        r
      );
      (r.f & Tt) !== 0 && Ba(n), Ee === null && Ia(n);
    }
    r.wv = Tf(), lf(r, Tt, e), W !== null && (W.f & yt) !== 0 && (W.f & (Se | _r)) === 0 && (le === null ? Fc([r]) : le.push(r)), !i.is_fork && Qn.size > 0 && !of && yc();
  }
  return t;
}
function yc() {
  of = !1;
  for (const r of Qn) {
    (r.f & yt) !== 0 && lt(r, Ne);
    let t;
    try {
      t = yn(r);
    } catch {
      t = !0;
    }
    t && Ri(r);
  }
  Qn.clear();
}
function Qi(r) {
  Te(r, r.v + 1);
}
function lf(r, t, e) {
  var i = r.reactions;
  if (i !== null)
    for (var n = i.length, s = 0; s < n; s++) {
      var a = i[s], o = a.f, l = (o & Tt) === 0;
      if (l && lt(a, t), (o & qn) !== 0)
        Qn.add(
          /** @type {Effect} */
          a
        );
      else if ((o & Mt) !== 0) {
        var f = (
          /** @type {Derived} */
          a
        );
        Ee?.delete(f), (o & Wr) === 0 && (o & pe && (W === null || (W.f & Wn) === 0) && (a.f |= Wr), lf(f, Ne, e));
      } else if (l) {
        var h = (
          /** @type {Effect} */
          a
        );
        (o & ke) !== 0 && Ge !== null && Ge.add(h), e !== null ? e.push(h) : Na(h);
      }
    }
}
function Cr(r) {
  if (typeof r != "object" || r === null || gi in r)
    return r;
  const t = Ul(r);
  if (t !== Au && t !== Tu)
    return r;
  var e = /* @__PURE__ */ new Map(), i = Fa(r), n = /* @__PURE__ */ we(0), s = Ur, a = (o) => {
    if (Ur === s)
      return o();
    var l = q, f = Ur;
    ve(null), Io(s);
    var h = o();
    return ve(l), Io(f), h;
  };
  return i && e.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    r.length
  )), new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(o, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Nu();
        var h = e.get(l);
        return h === void 0 ? a(() => {
          var u = /* @__PURE__ */ we(f.value);
          return e.set(l, u), u;
        }) : Te(h, f.value, !0), !0;
      },
      deleteProperty(o, l) {
        var f = e.get(l);
        if (f === void 0) {
          if (l in o) {
            const h = a(() => /* @__PURE__ */ we(bt));
            e.set(l, h), Qi(n);
          }
        } else
          Te(f, bt), Qi(n);
        return !0;
      },
      get(o, l, f) {
        if (l === gi)
          return r;
        var h = e.get(l), u = l in o;
        if (h === void 0 && (!u || pi(o, l)?.writable) && (h = a(() => {
          var p = Cr(u ? o[l] : bt), _ = /* @__PURE__ */ we(p);
          return _;
        }), e.set(l, h)), h !== void 0) {
          var c = G(h);
          return c === bt ? void 0 : c;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && "value" in f) {
          var h = e.get(l);
          h && (f.value = G(h));
        } else if (f === void 0) {
          var u = e.get(l), c = u?.v;
          if (u !== void 0 && c !== bt)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return f;
      },
      has(o, l) {
        if (l === gi)
          return !0;
        var f = e.get(l), h = f !== void 0 && f.v !== bt || Reflect.has(o, l);
        if (f !== void 0 || W !== null && (!h || pi(o, l)?.writable)) {
          f === void 0 && (f = a(() => {
            var c = h ? Cr(o[l]) : bt, p = /* @__PURE__ */ we(c);
            return p;
          }), e.set(l, f));
          var u = G(f);
          if (u === bt)
            return !1;
        }
        return h;
      },
      set(o, l, f, h) {
        var u = e.get(l), c = l in o;
        if (i && l === "length")
          for (var p = f; p < /** @type {Source<number>} */
          u.v; p += 1) {
            var _ = e.get(p + "");
            _ !== void 0 ? Te(_, bt) : p in o && (_ = a(() => /* @__PURE__ */ we(bt)), e.set(p + "", _));
          }
        if (u === void 0)
          (!c || pi(o, l)?.writable) && (u = a(() => /* @__PURE__ */ we(void 0)), Te(u, Cr(f)), e.set(l, u));
        else {
          c = u.v !== bt;
          var d = a(() => Cr(f));
          Te(u, d);
        }
        var g = Reflect.getOwnPropertyDescriptor(o, l);
        if (g?.set && g.set.call(h, f), !c) {
          if (i && typeof l == "string") {
            var m = (
              /** @type {Source<number>} */
              e.get("length")
            ), b = Number(l);
            Number.isInteger(b) && b >= m.v && Te(m, b + 1);
          }
          Qi(n);
        }
        return !0;
      },
      ownKeys(o) {
        G(n);
        var l = Reflect.ownKeys(o).filter((u) => {
          var c = e.get(u);
          return c === void 0 || c.v !== bt;
        });
        for (var [f, h] of e)
          h.v !== bt && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        Bu();
      }
    }
  );
}
function Oo(r) {
  try {
    if (r !== null && typeof r == "object" && gi in r)
      return r[gi];
  } catch {
  }
  return r;
}
function xc(r, t) {
  return Object.is(Oo(r), Oo(t));
}
var Do, ff, hf, uf;
function wc() {
  if (Do === void 0) {
    Do = window, ff = /Firefox/.test(navigator.userAgent);
    var r = Element.prototype, t = Node.prototype, e = Text.prototype;
    hf = pi(t, "firstChild").get, uf = pi(t, "nextSibling").get, So(r) && (r[$s] = void 0, r[In] = null, r[Js] = void 0, r.__e = void 0), So(e) && (e[Xi] = void 0);
  }
}
function ur(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function Kn(r) {
  return (
    /** @type {TemplateNode | null} */
    hf.call(r)
  );
}
// @__NO_SIDE_EFFECTS__
function bn(r) {
  return (
    /** @type {TemplateNode | null} */
    uf.call(r)
  );
}
function Ki(r, t) {
  return /* @__PURE__ */ Kn(r);
}
function cf(r, t = !1) {
  {
    var e = /* @__PURE__ */ Kn(r);
    return e instanceof Comment && e.data === "" ? /* @__PURE__ */ bn(e) : e;
  }
}
function Ac(r, t = 1, e = !1) {
  let i = r;
  for (; t--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ bn(i);
  return i;
}
function Tc(r) {
  r.textContent = "";
}
function df() {
  return !1;
}
function kc(r, t, e) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Gl, r, void 0)
  );
}
function Ec(r, t) {
  if (t) {
    const e = document.body;
    r.autofocus = !0, hr(() => {
      document.activeElement === e && r.focus();
    });
  }
}
function Ua(r) {
  var t = q, e = W;
  ve(null), Be(null);
  try {
    return r();
  } finally {
    ve(t), Be(e);
  }
}
function Mc(r) {
  W === null && (q === null && zu(), Fu()), Ke && Du();
}
function Sc(r, t) {
  var e = t.last;
  e === null ? t.last = t.first = r : (e.next = r, r.prev = e, t.last = r);
}
function Ve(r, t) {
  var e = W;
  e !== null && (e.f & Dt) !== 0 && (r |= Dt);
  var i = {
    ctx: me,
    deps: null,
    nodes: null,
    f: r | Tt | pe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: e,
    b: e && e.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  K?.register_created_effect(i);
  var n = i;
  if ((r & Si) !== 0)
    hi !== null ? hi.push(i) : jr.ensure().schedule(i);
  else if (t !== null) {
    try {
      Ri(i);
    } catch (a) {
      throw kt(i), a;
    }
    n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
    (n.f & Li) === 0 && (n = n.first, (r & ke) !== 0 && (r & qr) !== 0 && n !== null && (n.f |= qr));
  }
  if (n !== null && (n.parent = e, e !== null && Sc(n, e), q !== null && (q.f & Mt) !== 0 && (r & _r) === 0)) {
    var s = (
      /** @type {Derived} */
      q
    );
    (s.effects ?? (s.effects = [])).push(n);
  }
  return i;
}
function Va() {
  return q !== null && !Me;
}
function pf(r) {
  const t = Ve(hs, null);
  return lt(t, yt), t.teardown = r, t;
}
function Fo(r) {
  Mc();
  var t = (
    /** @type {Effect} */
    W.f
  ), e = !q && (t & Se) !== 0 && (t & Qr) === 0;
  if (e) {
    var i = (
      /** @type {ComponentContext} */
      me
    );
    (i.e ?? (i.e = [])).push(r);
  } else
    return _f(r);
}
function _f(r) {
  return Ve(Si | Su, r);
}
function Cc(r) {
  jr.ensure();
  const t = Ve(_r | Li, r);
  return (e = {}) => new Promise((i) => {
    e.outro ? Br(t, () => {
      kt(t), i(void 0);
    }) : (kt(t), i(void 0));
  });
}
function gf(r) {
  return Ve(Si, r);
}
function Pc(r) {
  return Ve(_i | Li, r);
}
function Rc(r, t = 0) {
  return Ve(hs | t, r);
}
function Os(r, t = [], e = [], i = []) {
  ef(i, t, e, (n) => {
    Ve(hs, () => r(...n.map(G)));
  });
}
function ps(r, t = 0) {
  var e = Ve(ke | t, r);
  return e;
}
function mf(r, t = 0) {
  var e = Ve(za | t, r);
  return e;
}
function Lt(r) {
  return Ve(Se | Li, r);
}
function vf(r) {
  var t = r.teardown;
  if (t !== null) {
    const e = Ke, i = q;
    zo(!0), ve(null);
    try {
      t.call(null);
    } finally {
      zo(e), ve(i);
    }
  }
}
function Ya(r, t = !1) {
  var e = r.first;
  for (r.first = r.last = null; e !== null; ) {
    const n = e.ac;
    n !== null && Ua(() => {
      n.abort(us);
    });
    var i = e.next;
    (e.f & _r) !== 0 ? e.parent = null : kt(e, t), e = i;
  }
}
function Oc(r) {
  for (var t = r.first; t !== null; ) {
    var e = t.next;
    (t.f & Se) === 0 && kt(t), t = e;
  }
}
function kt(r, t = !0) {
  var e = !1;
  (t || (r.f & Mu) !== 0) && r.nodes !== null && r.nodes.end !== null && (Dc(
    r.nodes.start,
    /** @type {TemplateNode} */
    r.nodes.end
  ), e = !0), lt(r, Co), Ya(r, t && !e), nn(r, 0);
  var i = r.nodes && r.nodes.t;
  if (i !== null)
    for (const s of i)
      s.stop();
  vf(r), r.f ^= Co, r.f |= _e;
  var n = r.parent;
  n !== null && n.first !== null && bf(r), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes = r.ac = r.b = null;
}
function Dc(r, t) {
  for (; r !== null; ) {
    var e = r === t ? null : /* @__PURE__ */ bn(r);
    r.remove(), r = e;
  }
}
function bf(r) {
  var t = r.parent, e = r.prev, i = r.next;
  e !== null && (e.next = i), i !== null && (i.prev = e), t !== null && (t.first === r && (t.first = i), t.last === r && (t.last = e));
}
function Br(r, t, e = !0) {
  var i = [];
  yf(r, i, !0);
  var n = () => {
    e && kt(r), t && t();
  }, s = i.length;
  if (s > 0) {
    var a = () => --s || n();
    for (var o of i)
      o.out(a);
  } else
    n();
}
function yf(r, t, e) {
  if ((r.f & Dt) === 0) {
    r.f ^= Dt;
    var i = r.nodes && r.nodes.t;
    if (i !== null)
      for (const o of i)
        (o.is_global || e) && t.push(o);
    for (var n = r.first; n !== null; ) {
      var s = n.next;
      if ((n.f & _r) === 0) {
        var a = (n.f & qr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (n.f & Se) !== 0 && (r.f & ke) !== 0;
        yf(n, t, a ? e : !1);
      }
      n = s;
    }
  }
}
function Ga(r) {
  xf(r, !0);
}
function xf(r, t) {
  if ((r.f & Dt) !== 0) {
    r.f ^= Dt, (r.f & yt) === 0 && (lt(r, Tt), jr.ensure().schedule(r));
    for (var e = r.first; e !== null; ) {
      var i = e.next, n = (e.f & qr) !== 0 || (e.f & Se) !== 0;
      xf(e, n ? t : !1), e = i;
    }
    var s = r.nodes && r.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || t) && a.in();
  }
}
function Xa(r, t) {
  if (r.nodes)
    for (var e = r.nodes.start, i = r.nodes.end; e !== null; ) {
      var n = e === i ? null : /* @__PURE__ */ bn(e);
      t.append(e), e = n;
    }
}
let Vn = !1, Ke = !1;
function zo(r) {
  Ke = r;
}
let q = null, Me = !1;
function ve(r) {
  q = r;
}
let W = null;
function Be(r) {
  W = r;
}
let ge = null;
function wf(r) {
  q !== null && (ge === null ? ge = [r] : ge.push(r));
}
let It = null, jt = 0, le = null;
function Fc(r) {
  le = r;
}
let Af = 1, Pr = 0, Ur = Pr;
function Io(r) {
  Ur = r;
}
function Tf() {
  return ++Af;
}
function yn(r) {
  var t = r.f;
  if ((t & Tt) !== 0)
    return !0;
  if (t & Mt && (r.f &= ~Wr), (t & Ne) !== 0) {
    for (var e = (
      /** @type {Value[]} */
      r.deps
    ), i = e.length, n = 0; n < i; n++) {
      var s = e[n];
      if (yn(
        /** @type {Derived} */
        s
      ) && sf(
        /** @type {Derived} */
        s
      ), s.wv > r.wv)
        return !0;
    }
    (t & pe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ee === null && lt(r, yt);
  }
  return !1;
}
function kf(r, t, e = !0) {
  var i = r.reactions;
  if (i !== null && !(ge !== null && Mi.call(ge, r)))
    for (var n = 0; n < i.length; n++) {
      var s = i[n];
      (s.f & Mt) !== 0 ? kf(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (e ? lt(s, Tt) : (s.f & yt) !== 0 && lt(s, Ne), Na(
        /** @type {Effect} */
        s
      ));
    }
}
function Ef(r) {
  var d;
  var t = It, e = jt, i = le, n = q, s = ge, a = me, o = Me, l = Ur, f = r.f;
  It = /** @type {null | Value[]} */
  null, jt = 0, le = null, q = (f & (Se | _r)) === 0 ? r : null, ge = null, Ci(r.ctx), Me = !1, Ur = ++Pr, r.ac !== null && (Ua(() => {
    r.ac.abort(us);
  }), r.ac = null);
  try {
    r.f |= Wn;
    var h = (
      /** @type {Function} */
      r.fn
    ), u = h();
    r.f |= Qr;
    var c = r.deps, p = K?.is_fork;
    if (It !== null) {
      var _;
      if (p || nn(r, jt), c !== null && jt > 0)
        for (c.length = jt + It.length, _ = 0; _ < It.length; _++)
          c[jt + _] = It[_];
      else
        r.deps = c = It;
      if (Va() && (r.f & pe) !== 0)
        for (_ = jt; _ < c.length; _++)
          ((d = c[_]).reactions ?? (d.reactions = [])).push(r);
    } else !p && c !== null && jt < c.length && (nn(r, jt), c.length = jt);
    if (Wl() && le !== null && !Me && c !== null && (r.f & (Mt | Ne | Tt)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      le.length; _++)
        kf(
          le[_],
          /** @type {Effect} */
          r
        );
    if (n !== null && n !== r) {
      if (Pr++, n.deps !== null)
        for (let g = 0; g < e; g += 1)
          n.deps[g].rv = Pr;
      if (t !== null)
        for (const g of t)
          g.rv = Pr;
      le !== null && (i === null ? i = le : i.push(.../** @type {Source[]} */
      le));
    }
    return (r.f & fr) !== 0 && (r.f ^= fr), u;
  } catch (g) {
    return jl(g);
  } finally {
    r.f ^= Wn, It = t, jt = e, le = i, q = n, ge = s, Ci(a), Me = o, Ur = l;
  }
}
function zc(r, t) {
  let e = t.reactions;
  if (e !== null) {
    var i = yu.call(e, r);
    if (i !== -1) {
      var n = e.length - 1;
      n === 0 ? e = t.reactions = null : (e[i] = e[n], e.pop());
    }
  }
  if (e === null && (t.f & Mt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (It === null || !Mi.call(It, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & pe) !== 0 && (s.f ^= pe, s.f &= ~Wr), s.v !== bt && Ia(s), vc(s), nn(s, 0);
  }
}
function nn(r, t) {
  var e = r.deps;
  if (e !== null)
    for (var i = t; i < e.length; i++)
      zc(r, e[i]);
}
function Ri(r) {
  var t = r.f;
  if ((t & _e) === 0) {
    lt(r, yt);
    var e = W, i = Vn;
    W = r, Vn = !0;
    try {
      (t & (ke | za)) !== 0 ? Oc(r) : Ya(r), vf(r);
      var n = Ef(r);
      r.teardown = typeof n == "function" ? n : null, r.wv = Af;
      var s;
    } finally {
      Vn = i, W = e;
    }
  }
}
function G(r) {
  var t = r.f, e = (t & Mt) !== 0;
  if (q !== null && !Me) {
    var i = W !== null && (W.f & _e) !== 0;
    if (!i && (ge === null || !Mi.call(ge, r))) {
      var n = q.deps;
      if ((q.f & Wn) !== 0)
        r.rv < Pr && (r.rv = Pr, It === null && n !== null && n[jt] === r ? jt++ : It === null ? It = [r] : It.push(r));
      else {
        (q.deps ?? (q.deps = [])).push(r);
        var s = r.reactions;
        s === null ? r.reactions = [q] : Mi.call(s, q) || s.push(q);
      }
    }
  }
  if (Ke && Nr.has(r))
    return Nr.get(r);
  if (e) {
    var a = (
      /** @type {Derived} */
      r
    );
    if (Ke) {
      var o = a.v;
      return ((a.f & yt) === 0 && a.reactions !== null || Sf(a)) && (o = Ba(a)), Nr.set(a, o), o;
    }
    var l = (a.f & pe) === 0 && !Me && q !== null && (Vn || (q.f & pe) !== 0), f = (a.f & Qr) === 0;
    yn(a) && (l && (a.f |= pe), sf(a)), l && !f && (af(a), Mf(a));
  }
  if (Ee?.has(r))
    return Ee.get(r);
  if ((r.f & fr) !== 0)
    throw r.v;
  return r.v;
}
function Mf(r) {
  if (r.f |= pe, r.deps !== null)
    for (const t of r.deps)
      (t.reactions ?? (t.reactions = [])).push(r), (t.f & Mt) !== 0 && (t.f & pe) === 0 && (af(
        /** @type {Derived} */
        t
      ), Mf(
        /** @type {Derived} */
        t
      ));
}
function Sf(r) {
  if (r.v === bt) return !0;
  if (r.deps === null) return !1;
  for (const t of r.deps)
    if (Nr.has(t) || (t.f & Mt) !== 0 && Sf(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function qa(r) {
  var t = Me;
  try {
    return Me = !0, r();
  } finally {
    Me = t;
  }
}
function Ic(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const Lc = [
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
function Nc(r) {
  return Lc.includes(r);
}
const Bc = {
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
function Uc(r) {
  return r = r.toLowerCase(), Bc[r] ?? r;
}
const Vc = ["touchstart", "touchmove"];
function Yc(r) {
  return Vc.includes(r);
}
const Rr = Symbol("events"), Cf = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new Set();
function Gc(r, t, e, i = {}) {
  function n(s) {
    if (i.capture || fa.call(t, s), !s.cancelBubble)
      return Ua(() => e?.call(this, s));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? hr(() => {
    t.addEventListener(r, n, i);
  }) : t.addEventListener(r, n, i), n;
}
function Xc(r, t, e) {
  (t[Rr] ?? (t[Rr] = {}))[r] = e;
}
function qc(r) {
  for (var t = 0; t < r.length; t++)
    Cf.add(r[t]);
  for (var e of la)
    e(r);
}
let Lo = null;
function fa(r) {
  var t = this, e = (
    /** @type {Node} */
    t.ownerDocument
  ), i = r.type, n = r.composedPath?.() || [], s = (
    /** @type {null | Element} */
    n[0] || r.target
  );
  Lo = r;
  var a = 0, o = Lo === r && r[Rr];
  if (o) {
    var l = n.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      r[Rr] = t;
      return;
    }
    var f = n.indexOf(t);
    if (f === -1)
      return;
    l <= f && (a = l);
  }
  if (s = /** @type {Element} */
  n[a] || r.target, s !== t) {
    xu(r, "currentTarget", {
      configurable: !0,
      get() {
        return s || e;
      }
    });
    var h = q, u = W;
    ve(null), Be(null);
    try {
      for (var c, p = []; s !== null; ) {
        var _ = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var d = s[Rr]?.[i];
          d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === s) && d.call(s, r);
        } catch (g) {
          c ? p.push(g) : c = g;
        }
        if (r.cancelBubble || _ === t || _ === null)
          break;
        s = _;
      }
      if (c) {
        for (let g of p)
          queueMicrotask(() => {
            throw g;
          });
        throw c;
      }
    } finally {
      r[Rr] = t, delete r.currentTarget, ve(h), Be(u);
    }
  }
}
const Wc = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (r) => r
  })
);
function jc(r) {
  return (
    /** @type {string} */
    Wc?.createHTML(r) ?? r
  );
}
function Hc(r) {
  var t = kc("template");
  return t.innerHTML = jc(r.replaceAll("<!>", "<!---->")), t.content;
}
function ha(r, t) {
  var e = (
    /** @type {Effect} */
    W
  );
  e.nodes === null && (e.nodes = { start: r, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function xn(r, t) {
  var e = (t & Qu) !== 0, i = (t & Ku) !== 0, n, s = !r.startsWith("<!>");
  return () => {
    n === void 0 && (n = Hc(s ? r : "<!>" + r), e || (n = /** @type {TemplateNode} */
    /* @__PURE__ */ Kn(n)));
    var a = (
      /** @type {TemplateNode} */
      i || ff ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    if (e) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kn(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      ha(o, l);
    } else
      ha(a, a);
    return a;
  };
}
function Qc() {
  var r = document.createDocumentFragment(), t = document.createComment(""), e = ur();
  return r.append(t, e), ha(t, e), r;
}
function ui(r, t) {
  r !== null && r.before(
    /** @type {Node} */
    t
  );
}
function Kc(r, t) {
  var e = t == null ? "" : typeof t == "object" ? `${t}` : t;
  e !== /** @type {any} */
  (r[Xi] ?? (r[Xi] = r.nodeValue)) && (r[Xi] = e, r.nodeValue = `${e}`);
}
function Zc(r, t) {
  return $c(r, t);
}
const On = /* @__PURE__ */ new Map();
function $c(r, { target: t, anchor: e, props: i = {}, events: n, context: s, intro: a = !0, transformError: o }) {
  wc();
  var l = void 0, f = Cc(() => {
    var h = e ?? t.appendChild(ur());
    hc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (p) => {
        cs({});
        var _ = (
          /** @type {ComponentContext} */
          me
        );
        s && (_.c = s), n && (i.$$events = n), l = r(p, i) || {}, ds();
      },
      o
    );
    var u = /* @__PURE__ */ new Set(), c = (p) => {
      for (var _ = 0; _ < p.length; _++) {
        var d = p[_];
        if (!u.has(d)) {
          u.add(d);
          var g = Yc(d);
          for (const y of [t, document]) {
            var m = On.get(y);
            m === void 0 && (m = /* @__PURE__ */ new Map(), On.set(y, m));
            var b = m.get(d);
            b === void 0 ? (y.addEventListener(d, fa, { passive: g }), m.set(d, 1)) : m.set(d, b + 1);
          }
        }
      }
    };
    return c(fs(Cf)), la.add(c), () => {
      for (var p of u)
        for (const g of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            On.get(g)
          ), d = (
            /** @type {number} */
            _.get(p)
          );
          --d == 0 ? (g.removeEventListener(p, fa), _.delete(p), _.size === 0 && On.delete(g)) : _.set(p, d);
        }
      la.delete(c), h !== e && h.parentNode?.removeChild(h);
    };
  });
  return ua.set(l, f), l;
}
let ua = /* @__PURE__ */ new WeakMap();
function Rg(r, t) {
  const e = ua.get(r);
  return e ? (ua.delete(r), e(t)) : Promise.resolve();
}
var Ae, ze, Kt, Lr, mn, vn, ls;
class Pf {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, e = !0) {
    /** @type {TemplateNode} */
    Ft(this, "anchor");
    /** @type {Map<Batch, Key>} */
    B(this, Ae, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    B(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    B(this, Kt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    B(this, Lr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    B(this, mn, !0);
    /**
     * @param {Batch} batch
     */
    B(this, vn, (t) => {
      if (A(this, Ae).has(t)) {
        var e = (
          /** @type {Key} */
          A(this, Ae).get(t)
        ), i = A(this, ze).get(e);
        if (i)
          Ga(i), A(this, Lr).delete(e);
        else {
          var n = A(this, Kt).get(e);
          n && (A(this, ze).set(e, n.effect), A(this, Kt).delete(e), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), i = n.effect);
        }
        for (const [s, a] of A(this, Ae)) {
          if (A(this, Ae).delete(s), s === t)
            break;
          const o = A(this, Kt).get(a);
          o && (kt(o.effect), A(this, Kt).delete(a));
        }
        for (const [s, a] of A(this, ze)) {
          if (s === e || A(this, Lr).has(s)) continue;
          const o = () => {
            if (Array.from(A(this, Ae).values()).includes(s)) {
              var f = document.createDocumentFragment();
              Xa(a, f), f.append(ur()), A(this, Kt).set(s, { effect: a, fragment: f });
            } else
              kt(a);
            A(this, Lr).delete(s), A(this, ze).delete(s);
          };
          A(this, mn) || !i ? (A(this, Lr).add(s), Br(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    B(this, ls, (t) => {
      A(this, Ae).delete(t);
      const e = Array.from(A(this, Ae).values());
      for (const [i, n] of A(this, Kt))
        e.includes(i) || (kt(n.effect), A(this, Kt).delete(i));
    });
    this.anchor = t, N(this, mn, e);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, e) {
    var i = (
      /** @type {Batch} */
      K
    ), n = df();
    if (e && !A(this, ze).has(t) && !A(this, Kt).has(t))
      if (n) {
        var s = document.createDocumentFragment(), a = ur();
        s.append(a), A(this, Kt).set(t, {
          effect: Lt(() => e(a)),
          fragment: s
        });
      } else
        A(this, ze).set(
          t,
          Lt(() => e(this.anchor))
        );
    if (A(this, Ae).set(i, t), n) {
      for (const [o, l] of A(this, ze))
        o === t ? i.unskip_effect(l) : i.skip_effect(l);
      for (const [o, l] of A(this, Kt))
        o === t ? i.unskip_effect(l.effect) : i.skip_effect(l.effect);
      i.oncommit(A(this, vn)), i.ondiscard(A(this, ls));
    } else
      A(this, vn).call(this, i);
  }
}
Ae = new WeakMap(), ze = new WeakMap(), Kt = new WeakMap(), Lr = new WeakMap(), mn = new WeakMap(), vn = new WeakMap(), ls = new WeakMap();
function No(r, t, e = !1) {
  var i = new Pf(r), n = e ? qr : 0;
  function s(a, o) {
    i.ensure(a, o);
  }
  ps(() => {
    var a = !1;
    t((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(-1, null);
  }, n);
}
function Jc(r, t, e) {
  for (var i = [], n = t.length, s, a = t.length, o = 0; o < n; o++) {
    let u = t[o];
    Br(
      u,
      () => {
        if (s) {
          if (s.pending.delete(u), s.done.add(u), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              r.outrogroups
            );
            ca(r, fs(s.done)), c.delete(s), c.size === 0 && (r.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = i.length === 0 && e !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        e
      ), h = (
        /** @type {Element} */
        f.parentNode
      );
      Tc(h), h.append(f), r.items.clear();
    }
    ca(r, t, !l);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (r.outrogroups ?? (r.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function ca(r, t, e = !0) {
  var i;
  if (r.pending.size > 0) {
    i = /* @__PURE__ */ new Set();
    for (const a of r.pending.values())
      for (const o of a)
        i.add(
          /** @type {EachItem} */
          r.items.get(o).e
        );
  }
  for (var n = 0; n < t.length; n++) {
    var s = t[n];
    if (i?.has(s)) {
      s.f |= Qe;
      const a = document.createDocumentFragment();
      Xa(s, a);
    } else
      kt(t[n], e);
  }
}
var Bo;
function td(r, t, e, i, n, s = null) {
  var a = r, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      r
    );
    a = l.appendChild(ur());
  }
  var f = null, h = /* @__PURE__ */ nf(() => {
    var b = e();
    return Fa(b) ? b : b == null ? [] : fs(b);
  }), u, c = /* @__PURE__ */ new Map(), p = !0;
  function _(b) {
    (m.effect.f & _e) === 0 && (m.pending.delete(b), m.fallback = f, ed(m, u, a, t, i), f !== null && (u.length === 0 ? (f.f & Qe) === 0 ? Ga(f) : (f.f ^= Qe, Wi(f, null, a)) : Br(f, () => {
      f = null;
    })));
  }
  function d(b) {
    m.pending.delete(b);
  }
  var g = ps(() => {
    u = /** @type {V[]} */
    G(h);
    for (var b = u.length, y = /* @__PURE__ */ new Set(), v = (
      /** @type {Batch} */
      K
    ), x = df(), k = 0; k < b; k += 1) {
      var T = u[k], w = i(T, k), E = p ? null : o.get(w);
      E ? (E.v && Pi(E.v, T), E.i && Pi(E.i, k), x && v.unskip_effect(E.e)) : (E = rd(
        o,
        p ? a : Bo ?? (Bo = ur()),
        T,
        w,
        k,
        n,
        t,
        e
      ), p || (E.e.f |= Qe), o.set(w, E)), y.add(w);
    }
    if (b === 0 && s && !f && (p ? f = Lt(() => s(a)) : (f = Lt(() => s(Bo ?? (Bo = ur()))), f.f |= Qe)), b > y.size && Ou(), !p)
      if (c.set(v, y), x) {
        for (const [M, z] of o)
          y.has(M) || v.skip_effect(z.e);
        v.oncommit(_), v.ondiscard(d);
      } else
        _(v);
    G(h);
  }), m = { effect: g, items: o, pending: c, outrogroups: null, fallback: f };
  p = !1;
}
function Bi(r) {
  for (; r !== null && (r.f & Se) === 0; )
    r = r.next;
  return r;
}
function ed(r, t, e, i, n) {
  var s = t.length, a = r.items, o = Bi(r.effect.first), l, f = null, h = [], u = [], c, p, _, d;
  for (d = 0; d < s; d += 1) {
    if (c = t[d], p = n(c, d), _ = /** @type {EachItem} */
    a.get(p).e, r.outrogroups !== null)
      for (const w of r.outrogroups)
        w.pending.delete(_), w.done.delete(_);
    if ((_.f & Dt) !== 0 && Ga(_), (_.f & Qe) !== 0)
      if (_.f ^= Qe, _ === o)
        Wi(_, null, e);
      else {
        var g = f ? f.next : o;
        _ === r.effect.last && (r.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), tr(r, f, _), tr(r, _, g), Wi(_, g, e), f = _, h = [], u = [], o = Bi(f.next);
        continue;
      }
    if (_ !== o) {
      if (l !== void 0 && l.has(_)) {
        if (h.length < u.length) {
          var m = u[0], b;
          f = m.prev;
          var y = h[0], v = h[h.length - 1];
          for (b = 0; b < h.length; b += 1)
            Wi(h[b], m, e);
          for (b = 0; b < u.length; b += 1)
            l.delete(u[b]);
          tr(r, y.prev, v.next), tr(r, f, y), tr(r, v, m), o = m, f = v, d -= 1, h = [], u = [];
        } else
          l.delete(_), Wi(_, o, e), tr(r, _.prev, _.next), tr(r, _, f === null ? r.effect.first : f.next), tr(r, f, _), f = _;
        continue;
      }
      for (h = [], u = []; o !== null && o !== _; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), u.push(o), o = Bi(o.next);
      if (o === null)
        continue;
    }
    (_.f & Qe) === 0 && h.push(_), f = _, o = Bi(_.next);
  }
  if (r.outrogroups !== null) {
    for (const w of r.outrogroups)
      w.pending.size === 0 && (ca(r, fs(w.done)), r.outrogroups?.delete(w));
    r.outrogroups.size === 0 && (r.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var x = [];
    if (l !== void 0)
      for (_ of l)
        (_.f & Dt) === 0 && x.push(_);
    for (; o !== null; )
      (o.f & Dt) === 0 && o !== r.fallback && x.push(o), o = Bi(o.next);
    var k = x.length;
    if (k > 0) {
      var T = s === 0 ? e : null;
      Jc(r, x, T);
    }
  }
}
function rd(r, t, e, i, n, s, a, o) {
  var l = (a & Yu) !== 0 ? (a & Xu) === 0 ? /* @__PURE__ */ bc(e, !1, !1) : Hr(e) : null, f = (a & Gu) !== 0 ? Hr(n) : null;
  return {
    v: l,
    i: f,
    e: Lt(() => (s(t, l ?? e, f ?? n, o), () => {
      r.delete(i);
    }))
  };
}
function Wi(r, t, e) {
  if (r.nodes)
    for (var i = r.nodes.start, n = r.nodes.end, s = t && (t.f & Qe) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : e; i !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bn(i)
      );
      if (s.before(i), i === n)
        return;
      i = a;
    }
}
function tr(r, t, e) {
  t === null ? r.effect.first = e : t.next = e, e === null ? r.effect.last = t : e.prev = t;
}
function id(r, t, ...e) {
  var i = new Pf(r);
  ps(() => {
    const n = t() ?? null;
    i.ensure(n, n && ((s) => n(s, ...e)));
  }, qr);
}
function Rf(r, t) {
  var e = void 0, i;
  mf(() => {
    e !== (e = t()) && (i && (kt(i), i = null), e && (i = Lt(() => {
      gf(() => (
        /** @type {(node: Element) => void} */
        e(r)
      ));
    })));
  });
}
function Of(r) {
  var t, e, i = "";
  if (typeof r == "string" || typeof r == "number") i += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var n = r.length;
    for (t = 0; t < n; t++) r[t] && (e = Of(r[t])) && (i && (i += " "), i += e);
  } else for (e in r) r[e] && (i && (i += " "), i += e);
  return i;
}
function Df() {
  for (var r, t, e = 0, i = "", n = arguments.length; e < n; e++) (r = arguments[e]) && (t = Of(r)) && (i && (i += " "), i += t);
  return i;
}
function nd(r) {
  return typeof r == "object" ? Df(r) : r ?? "";
}
const Uo = [...` 	
\r\f \v\uFEFF`];
function sd(r, t, e) {
  var i = r == null ? "" : "" + r;
  if (e) {
    for (var n of Object.keys(e))
      if (e[n])
        i = i ? i + " " + n : n;
      else if (i.length)
        for (var s = n.length, a = 0; (a = i.indexOf(n, a)) >= 0; ) {
          var o = a + s;
          (a === 0 || Uo.includes(i[a - 1])) && (o === i.length || Uo.includes(i[o])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(o + 1) : a = o;
        }
  }
  return i === "" ? null : i;
}
function Vo(r, t = !1) {
  var e = t ? " !important;" : ";", i = "";
  for (var n of Object.keys(r)) {
    var s = r[n];
    s != null && s !== "" && (i += " " + n + ": " + s + e);
  }
  return i;
}
function Ds(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function ad(r, t) {
  if (t) {
    var e = "", i, n;
    if (Array.isArray(t) ? (i = t[0], n = t[1]) : i = t, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, a = 0, o = !1, l = [];
      i && l.push(...Object.keys(i).map(Ds)), n && l.push(...Object.keys(n).map(Ds));
      var f = 0, h = -1;
      const d = r.length;
      for (var u = 0; u < d; u++) {
        var c = r[u];
        if (o ? c === "/" && r[u - 1] === "*" && (o = !1) : s ? s === c && (s = !1) : c === "/" && r[u + 1] === "*" ? o = !0 : c === '"' || c === "'" ? s = c : c === "(" ? a++ : c === ")" && a--, !o && s === !1 && a === 0) {
          if (c === ":" && h === -1)
            h = u;
          else if (c === ";" || u === d - 1) {
            if (h !== -1) {
              var p = Ds(r.substring(f, h).trim());
              if (!l.includes(p)) {
                c !== ";" && u++;
                var _ = r.substring(f, u).trim();
                e += " " + _ + ";";
              }
            }
            f = u + 1, h = -1;
          }
        }
      }
    }
    return i && (e += Vo(i)), n && (e += Vo(n, !0)), e = e.trim(), e === "" ? null : e;
  }
  return r == null ? null : String(r);
}
function od(r, t, e, i, n, s) {
  var a = (
    /** @type {any} */
    r[$s]
  );
  if (a !== e || a === void 0) {
    var o = sd(e, i, s);
    o == null ? r.removeAttribute("class") : t ? r.className = o : r.setAttribute("class", o), r[$s] = e;
  } else if (s && n !== s)
    for (var l in s) {
      var f = !!s[l];
      (n == null || f !== !!n[l]) && r.classList.toggle(l, f);
    }
  return s;
}
function Fs(r, t = {}, e, i) {
  for (var n in e) {
    var s = e[n];
    t[n] !== s && (e[n] == null ? r.style.removeProperty(n) : r.style.setProperty(n, s, i));
  }
}
function da(r, t, e, i) {
  var n = (
    /** @type {any} */
    r[Js]
  );
  if (n !== t) {
    var s = ad(t, i);
    s == null ? r.removeAttribute("style") : r.style.cssText = s, r[Js] = t;
  } else i && (Array.isArray(i) ? (Fs(r, e?.[0], i[0]), Fs(r, e?.[1], i[1], "important")) : Fs(r, e, i));
  return i;
}
function pa(r, t, e = !1) {
  if (r.multiple) {
    if (t == null)
      return;
    if (!Fa(t))
      return Ju();
    for (var i of r.options)
      i.selected = t.includes(Yo(i));
    return;
  }
  for (i of r.options) {
    var n = Yo(i);
    if (xc(n, t)) {
      i.selected = !0;
      return;
    }
  }
  (!e || t !== void 0) && (r.selectedIndex = -1);
}
function ld(r) {
  var t = new MutationObserver(() => {
    pa(r, r.__value);
  });
  t.observe(r, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), pf(() => {
    t.disconnect();
  });
}
function Yo(r) {
  return "__value" in r ? r.__value : r.value;
}
const Ui = Symbol("class"), Vi = Symbol("style"), Ff = Symbol("is custom element"), zf = Symbol("is html"), fd = Yl ? "option" : "OPTION", hd = Yl ? "select" : "SELECT";
function ud(r, t) {
  t ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function Go(r, t, e, i) {
  var n = If(r);
  n[t] !== (n[t] = e) && (t === "loading" && (r[Pu] = e), e == null ? r.removeAttribute(t) : typeof e != "string" && Lf(r).includes(t) ? r[t] = e : r.setAttribute(t, e));
}
function cd(r, t, e, i, n = !1, s = !1) {
  var a = If(r), o = a[Ff], l = !a[zf], f = t || {}, h = r.nodeName === fd;
  for (var u in t)
    u in e || (e[u] = null);
  e.class ? e.class = nd(e.class) : e[Ui] && (e.class = null), e[Vi] && (e.style ?? (e.style = null));
  var c = Lf(r);
  for (const y in e) {
    let v = e[y];
    if (h && y === "value" && v == null) {
      r.value = r.__value = "", f[y] = v;
      continue;
    }
    if (y === "class") {
      var p = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      od(r, p, v, i, t?.[Ui], e[Ui]), f[y] = v, f[Ui] = e[Ui];
      continue;
    }
    if (y === "style") {
      da(r, v, t?.[Vi], e[Vi]), f[y] = v, f[Vi] = e[Vi];
      continue;
    }
    var _ = f[y];
    if (!(v === _ && !(v === void 0 && r.hasAttribute(y)))) {
      f[y] = v;
      var d = y[0] + y[1];
      if (d !== "$$")
        if (d === "on") {
          const x = {}, k = "$$" + y;
          let T = y.slice(2);
          var g = Nc(T);
          if (Ic(T) && (T = T.slice(0, -7), x.capture = !0), !g && _) {
            if (v != null) continue;
            r.removeEventListener(T, f[k], x), f[k] = null;
          }
          if (g)
            Xc(T, r, v), qc([T]);
          else if (v != null) {
            let w = function(E) {
              f[y].call(this, E);
            };
            f[k] = Gc(T, r, w, x);
          }
        } else if (y === "style")
          Go(r, y, v);
        else if (y === "autofocus")
          Ec(
            /** @type {HTMLElement} */
            r,
            !!v
          );
        else if (!o && (y === "__value" || y === "value" && v != null))
          r.value = r.__value = v;
        else if (y === "selected" && h)
          ud(
            /** @type {HTMLOptionElement} */
            r,
            v
          );
        else {
          var m = y;
          l || (m = Uc(m));
          var b = m === "defaultValue" || m === "defaultChecked";
          if (v == null && !o && !b)
            if (a[y] = null, m === "value" || m === "checked") {
              let x = (
                /** @type {HTMLInputElement} */
                r
              );
              const k = t === void 0;
              if (m === "value") {
                let T = x.defaultValue;
                x.removeAttribute(m), x.defaultValue = T, x.value = x.__value = k ? T : null;
              } else {
                let T = x.defaultChecked;
                x.removeAttribute(m), x.defaultChecked = T, x.checked = k ? T : !1;
              }
            } else
              r.removeAttribute(y);
          else b || c.includes(m) && (o || typeof v != "string") ? (r[m] = v, m in a && (a[m] = bt)) : typeof v != "function" && Go(r, m, v);
        }
    }
  }
  return f;
}
function dd(r, t, e = [], i = [], n = [], s, a = !1, o = !1) {
  ef(n, e, i, (l) => {
    var f = void 0, h = {}, u = r.nodeName === hd, c = !1;
    if (mf(() => {
      var _ = t(...l.map(G)), d = cd(
        r,
        f,
        _,
        s,
        a,
        o
      );
      c && u && "value" in _ && pa(
        /** @type {HTMLSelectElement} */
        r,
        _.value
      );
      for (let m of Object.getOwnPropertySymbols(h))
        _[m] || kt(h[m]);
      for (let m of Object.getOwnPropertySymbols(_)) {
        var g = _[m];
        m.description === Zu && (!f || g !== f[m]) && (h[m] && kt(h[m]), h[m] = Lt(() => Rf(r, () => g))), d[m] = g;
      }
      f = d;
    }), u) {
      var p = (
        /** @type {HTMLSelectElement} */
        r
      );
      gf(() => {
        pa(
          p,
          /** @type {Record<string | symbol, any>} */
          f.value,
          !0
        ), ld(p);
      });
    }
    c = !0;
  });
}
function If(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    r[In] ?? (r[In] = {
      [Ff]: r.nodeName.includes("-"),
      [zf]: r.namespaceURI === Gl
    })
  );
}
var Xo = /* @__PURE__ */ new Map();
function Lf(r) {
  var t = r.getAttribute("is") || r.nodeName, e = Xo.get(t);
  if (e) return e;
  Xo.set(t, e = []);
  for (var i, n = r, s = Element.prototype; s !== n; ) {
    i = wu(n);
    for (var a in i)
      i[a].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      a !== "innerHTML" && a !== "textContent" && a !== "innerText" && e.push(a);
    n = Ul(n);
  }
  return e;
}
const pd = {
  get(r, t) {
    if (!r.exclude.includes(t))
      return r.props[t];
  },
  set(r, t) {
    return !1;
  },
  getOwnPropertyDescriptor(r, t) {
    if (!r.exclude.includes(t) && t in r.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: r.props[t]
      };
  },
  has(r, t) {
    return r.exclude.includes(t) ? !1 : t in r.props;
  },
  ownKeys(r) {
    return Reflect.ownKeys(r.props).filter((t) => !r.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function _d(r, t, e) {
  return new Proxy(
    { props: r, exclude: t },
    pd
  );
}
function _t(r, t, e, i) {
  var n = !0, s = (e & ju) !== 0, a = (e & Hu) !== 0, o = (
    /** @type {V} */
    i
  ), l = !0, f = (
    /** @type {Derived<V> | undefined} */
    void 0
  ), h = () => a && n ? (f ?? (f = /* @__PURE__ */ rn(
    /** @type {() => V} */
    i
  )), G(f)) : (l && (l = !1, o = a ? qa(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), o);
  let u;
  if (s) {
    var c = gi in r || Cu in r;
    u = pi(r, t)?.set ?? (c && t in r ? (v) => r[t] = v : void 0);
  }
  var p, _ = !1;
  s ? [p, _] = nc(() => (
    /** @type {V} */
    r[t]
  )) : p = /** @type {V} */
  r[t], p === void 0 && i !== void 0 && (p = h(), u && (Lu(), u(p)));
  var d;
  if (d = () => {
    var v = (
      /** @type {V} */
      r[t]
    );
    return v === void 0 ? h() : (l = !0, v);
  }, (e & Wu) === 0)
    return d;
  if (u) {
    var g = r.$$legacy;
    return (
      /** @type {() => V} */
      (function(v, x) {
        return arguments.length > 0 ? ((!x || g || _) && u(x ? d() : v), v) : d();
      })
    );
  }
  var m = !1, b = ((e & qu) !== 0 ? rn : nf)(() => (m = !1, d()));
  s && G(b);
  var y = (
    /** @type {Effect} */
    W
  );
  return (
    /** @type {() => V} */
    (function(v, x) {
      if (arguments.length > 0) {
        const k = x ? G(b) : s ? Cr(v) : v;
        return Te(b, k), m = !0, o !== void 0 && (o = k), v;
      }
      return Ke && m || (y.f & _e) !== 0 ? b.v : G(b);
    })
  );
}
const gd = "5";
var Bl;
typeof window < "u" && ((Bl = window.__svelte ?? (window.__svelte = {})).v ?? (Bl.v = /* @__PURE__ */ new Set())).add(gd);
function Zi(r) {
  let t = r[0], e = r[1], i = r[2];
  return Math.sqrt(t * t + e * e + i * i);
}
function _a(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r;
}
function md(r, t, e, i) {
  return r[0] = t, r[1] = e, r[2] = i, r;
}
function qo(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r[2] = t[2] + e[2], r;
}
function Wo(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r[2] = t[2] - e[2], r;
}
function vd(r, t, e) {
  return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r[2] = t[2] * e[2], r;
}
function bd(r, t, e) {
  return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r[2] = t[2] / e[2], r;
}
function zs(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e, r;
}
function yd(r, t) {
  let e = t[0] - r[0], i = t[1] - r[1], n = t[2] - r[2];
  return Math.sqrt(e * e + i * i + n * n);
}
function xd(r, t) {
  let e = t[0] - r[0], i = t[1] - r[1], n = t[2] - r[2];
  return e * e + i * i + n * n;
}
function jo(r) {
  let t = r[0], e = r[1], i = r[2];
  return t * t + e * e + i * i;
}
function wd(r, t) {
  return r[0] = -t[0], r[1] = -t[1], r[2] = -t[2], r;
}
function Ad(r, t) {
  return r[0] = 1 / t[0], r[1] = 1 / t[1], r[2] = 1 / t[2], r;
}
function ga(r, t) {
  let e = t[0], i = t[1], n = t[2], s = e * e + i * i + n * n;
  return s > 0 && (s = 1 / Math.sqrt(s)), r[0] = t[0] * s, r[1] = t[1] * s, r[2] = t[2] * s, r;
}
function Nf(r, t) {
  return r[0] * t[0] + r[1] * t[1] + r[2] * t[2];
}
function Ho(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = e[0], o = e[1], l = e[2];
  return r[0] = n * l - s * o, r[1] = s * a - i * l, r[2] = i * o - n * a, r;
}
function Td(r, t, e, i) {
  let n = t[0], s = t[1], a = t[2];
  return r[0] = n + i * (e[0] - n), r[1] = s + i * (e[1] - s), r[2] = a + i * (e[2] - a), r;
}
function kd(r, t, e, i, n) {
  const s = Math.exp(-i * n);
  let a = t[0], o = t[1], l = t[2];
  return r[0] = e[0] + (a - e[0]) * s, r[1] = e[1] + (o - e[1]) * s, r[2] = e[2] + (l - e[2]) * s, r;
}
function Ed(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = e[3] * i + e[7] * n + e[11] * s + e[15];
  return a = a || 1, r[0] = (e[0] * i + e[4] * n + e[8] * s + e[12]) / a, r[1] = (e[1] * i + e[5] * n + e[9] * s + e[13]) / a, r[2] = (e[2] * i + e[6] * n + e[10] * s + e[14]) / a, r;
}
function Md(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = e[3] * i + e[7] * n + e[11] * s + e[15];
  return a = a || 1, r[0] = (e[0] * i + e[4] * n + e[8] * s) / a, r[1] = (e[1] * i + e[5] * n + e[9] * s) / a, r[2] = (e[2] * i + e[6] * n + e[10] * s) / a, r;
}
function Sd(r, t, e) {
  let i = t[0], n = t[1], s = t[2];
  return r[0] = i * e[0] + n * e[3] + s * e[6], r[1] = i * e[1] + n * e[4] + s * e[7], r[2] = i * e[2] + n * e[5] + s * e[8], r;
}
function Cd(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = e[0], o = e[1], l = e[2], f = e[3], h = o * s - l * n, u = l * i - a * s, c = a * n - o * i, p = o * c - l * u, _ = l * h - a * c, d = a * u - o * h, g = f * 2;
  return h *= g, u *= g, c *= g, p *= 2, _ *= 2, d *= 2, r[0] = i + h + p, r[1] = n + u + _, r[2] = s + c + d, r;
}
const Pd = /* @__PURE__ */ (function() {
  const r = [0, 0, 0], t = [0, 0, 0];
  return function(e, i) {
    _a(r, e), _a(t, i), ga(r, r), ga(t, t);
    let n = Nf(r, t);
    return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
  };
})();
function Rd(r, t) {
  return r[0] === t[0] && r[1] === t[1] && r[2] === t[2];
}
class it extends Array {
  constructor(t = 0, e = t, i = t) {
    return super(t, e, i), this;
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
  set x(t) {
    this[0] = t;
  }
  set y(t) {
    this[1] = t;
  }
  set z(t) {
    this[2] = t;
  }
  set(t, e = t, i = t) {
    return t.length ? this.copy(t) : (md(this, t, e, i), this);
  }
  copy(t) {
    return _a(this, t), this;
  }
  add(t, e) {
    return e ? qo(this, t, e) : qo(this, this, t), this;
  }
  sub(t, e) {
    return e ? Wo(this, t, e) : Wo(this, this, t), this;
  }
  multiply(t) {
    return t.length ? vd(this, this, t) : zs(this, this, t), this;
  }
  divide(t) {
    return t.length ? bd(this, this, t) : zs(this, this, 1 / t), this;
  }
  inverse(t = this) {
    return Ad(this, t), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return Zi(this);
  }
  distance(t) {
    return t ? yd(this, t) : Zi(this);
  }
  squaredLen() {
    return jo(this);
  }
  squaredDistance(t) {
    return t ? xd(this, t) : jo(this);
  }
  negate(t = this) {
    return wd(this, t), this;
  }
  cross(t, e) {
    return e ? Ho(this, t, e) : Ho(this, this, t), this;
  }
  scale(t) {
    return zs(this, this, t), this;
  }
  normalize() {
    return ga(this, this), this;
  }
  dot(t) {
    return Nf(this, t);
  }
  equals(t) {
    return Rd(this, t);
  }
  applyMatrix3(t) {
    return Sd(this, this, t), this;
  }
  applyMatrix4(t) {
    return Ed(this, this, t), this;
  }
  scaleRotateMatrix4(t) {
    return Md(this, this, t), this;
  }
  applyQuaternion(t) {
    return Cd(this, this, t), this;
  }
  angle(t) {
    return Pd(this, t);
  }
  lerp(t, e) {
    return Td(this, this, t, e), this;
  }
  smoothLerp(t, e, i) {
    return kd(this, this, t, e, i), this;
  }
  clone() {
    return new it(this[0], this[1], this[2]);
  }
  fromArray(t, e = 0) {
    return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t;
  }
  transformDirection(t) {
    const e = this[0], i = this[1], n = this[2];
    return this[0] = t[0] * e + t[4] * i + t[8] * n, this[1] = t[1] * e + t[5] * i + t[9] * n, this[2] = t[2] * e + t[6] * i + t[10] * n, this.normalize();
  }
}
const Qo = /* @__PURE__ */ new it();
let Od = 1, Dd = 1, Ko = !1;
class Fd {
  constructor(t, e = {}) {
    t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = e, this.id = Od++, this.VAOs = {}, this.drawRange = { start: 0, count: 0 }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
    for (let i in e)
      this.addAttribute(i, e[i]);
  }
  addAttribute(t, e) {
    if (this.attributes[t] = e, e.id = Dd++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset = e.offset || 0, e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size), e.divisor = e.instanced || 0, e.needsUpdate = !1, e.usage = e.usage || this.gl.STATIC_DRAW, e.buffer || this.updateAttribute(e), e.divisor) {
      if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor)
        return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
      this.instancedCount = e.count * e.divisor;
    } else t === "index" ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count));
  }
  updateAttribute(t) {
    const e = !t.buffer;
    e && (t.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data), t.needsUpdate = !1;
  }
  setIndex(t) {
    this.addAttribute("index", t);
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  setInstancedCount(t) {
    this.instancedCount = t;
  }
  createVAO(t) {
    this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t);
  }
  bindAttributes(t) {
    t.attributeLocations.forEach((e, { name: i, type: n }) => {
      if (!this.attributes[i]) {
        console.warn(`active attribute ${i} not being supplied`);
        return;
      }
      const s = this.attributes[i];
      this.gl.bindBuffer(s.target, s.buffer), this.glState.boundBuffer = s.buffer;
      let a = 1;
      n === 35674 && (a = 2), n === 35675 && (a = 3), n === 35676 && (a = 4);
      const o = s.size / a, l = a === 1 ? 0 : a * a * 4, f = a === 1 ? 0 : a * 4;
      for (let h = 0; h < a; h++)
        this.gl.vertexAttribPointer(e + h, o, s.type, s.normalized, s.stride + l, s.offset + h * f), this.gl.enableVertexAttribArray(e + h), this.gl.renderer.vertexAttribDivisor(e + h, s.divisor);
    }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }
  draw({ program: t, mode: e = this.gl.TRIANGLES }) {
    this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach((n, { name: s }) => {
      const a = this.attributes[s];
      a.needsUpdate && this.updateAttribute(a);
    });
    let i = 2;
    this.attributes.index?.type === this.gl.UNSIGNED_INT && (i = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(
      e,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * i,
      this.instancedCount
    ) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(
      e,
      this.drawRange.count,
      this.attributes.index.type,
      this.attributes.index.offset + this.drawRange.start * i
    ) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count);
  }
  getPosition() {
    const t = this.attributes.position;
    if (t.data) return t;
    if (!Ko)
      return console.warn("No position buffer data found to compute bounds"), Ko = !0;
  }
  computeBoundingBox(t) {
    t || (t = this.getPosition());
    const e = t.data, i = t.size;
    this.bounds || (this.bounds = {
      min: new it(),
      max: new it(),
      center: new it(),
      scale: new it(),
      radius: 1 / 0
    });
    const n = this.bounds.min, s = this.bounds.max, a = this.bounds.center, o = this.bounds.scale;
    n.set(1 / 0), s.set(-1 / 0);
    for (let l = 0, f = e.length; l < f; l += i) {
      const h = e[l], u = e[l + 1], c = e[l + 2];
      n.x = Math.min(h, n.x), n.y = Math.min(u, n.y), n.z = Math.min(c, n.z), s.x = Math.max(h, s.x), s.y = Math.max(u, s.y), s.z = Math.max(c, s.z);
    }
    o.sub(s, n), a.add(n, s).divide(2);
  }
  computeBoundingSphere(t) {
    t || (t = this.getPosition());
    const e = t.data, i = t.size;
    this.bounds || this.computeBoundingBox(t);
    let n = 0;
    for (let s = 0, a = e.length; s < a; s += i)
      Qo.fromArray(e, s), n = Math.max(n, this.bounds.center.squaredDistance(Qo));
    this.bounds.radius = Math.sqrt(n);
  }
  remove() {
    for (let t in this.VAOs)
      this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
    for (let t in this.attributes)
      this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t];
  }
}
let zd = 1;
const Zo = {};
class $o {
  constructor(t, {
    vertex: e,
    fragment: i,
    uniforms: n = {},
    transparent: s = !1,
    cullFace: a = t.BACK,
    frontFace: o = t.CCW,
    depthTest: l = !0,
    depthWrite: f = !0,
    depthFunc: h = t.LEQUAL
  } = {}) {
    t.canvas || console.error("gl not passed as first argument to Program"), this.gl = t, this.uniforms = n, this.id = zd++, e || console.warn("vertex shader not supplied"), i || console.warn("fragment shader not supplied"), this.transparent = s, this.cullFace = a, this.frontFace = o, this.depthTest = l, this.depthWrite = f, this.depthFunc = h, this.blendFunc = {}, this.blendEquation = {}, this.stencilFunc = {}, this.stencilOp = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = t.createShader(t.VERTEX_SHADER), this.fragmentShader = t.createShader(t.FRAGMENT_SHADER), this.program = t.createProgram(), t.attachShader(this.program, this.vertexShader), t.attachShader(this.program, this.fragmentShader), this.setShaders({ vertex: e, fragment: i });
  }
  setShaders({ vertex: t, fragment: e }) {
    if (t && (this.gl.shaderSource(this.vertexShader, t), this.gl.compileShader(this.vertexShader), this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Jo(t)}`)), e && (this.gl.shaderSource(this.fragmentShader, e), this.gl.compileShader(this.fragmentShader), this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Jo(e)}`)), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
      return console.warn(this.gl.getProgramInfoLog(this.program));
    this.uniformLocations = /* @__PURE__ */ new Map();
    let i = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    for (let a = 0; a < i; a++) {
      let o = this.gl.getActiveUniform(this.program, a);
      this.uniformLocations.set(o, this.gl.getUniformLocation(this.program, o.name));
      const l = o.name.match(/(\w+)/g);
      o.uniformName = l[0], o.nameComponents = l.slice(1);
    }
    this.attributeLocations = /* @__PURE__ */ new Map();
    const n = [], s = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
    for (let a = 0; a < s; a++) {
      const o = this.gl.getActiveAttrib(this.program, a), l = this.gl.getAttribLocation(this.program, o.name);
      l !== -1 && (n[l] = o.name, this.attributeLocations.set(o, l));
    }
    this.attributeOrder = n.join("");
  }
  setBlendFunc(t, e, i, n) {
    this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = i, this.blendFunc.dstAlpha = n, t && (this.transparent = !0);
  }
  setBlendEquation(t, e) {
    this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e;
  }
  setStencilFunc(t, e, i) {
    this.stencilRef = e, this.stencilFunc.func = t, this.stencilFunc.ref = e, this.stencilFunc.mask = i;
  }
  setStencilOp(t, e, i) {
    this.stencilOp.stencilFail = t, this.stencilOp.depthFail = e, this.stencilOp.depthPass = i;
  }
  applyState() {
    this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha), this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST), this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask), this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass);
  }
  use({ flipFaces: t = !1 } = {}) {
    let e = -1;
    this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((n, s) => {
      let a = this.uniforms[s.uniformName];
      for (const o of s.nameComponents) {
        if (!a) break;
        if (o in a)
          a = a[o];
        else {
          if (Array.isArray(a.value))
            break;
          a = void 0;
          break;
        }
      }
      if (!a)
        return tl(`Active uniform ${s.name} has not been supplied`);
      if (a && a.value === void 0)
        return tl(`${s.name} uniform is missing a value parameter`);
      if (a.value.texture)
        return e = e + 1, a.value.update(e), Is(this.gl, s.type, n, e);
      if (a.value.length && a.value[0].texture) {
        const o = [];
        return a.value.forEach((l) => {
          e = e + 1, l.update(e), o.push(e);
        }), Is(this.gl, s.type, n, o);
      }
      Is(this.gl, s.type, n, a.value);
    }), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function Is(r, t, e, i) {
  i = i.length ? Id(i) : i;
  const n = r.renderer.state.uniformLocations.get(e);
  if (i.length)
    if (n === void 0 || n.length !== i.length)
      r.renderer.state.uniformLocations.set(e, i.slice(0));
    else {
      if (Ld(n, i)) return;
      n.set ? n.set(i) : Nd(n, i), r.renderer.state.uniformLocations.set(e, n);
    }
  else {
    if (n === i) return;
    r.renderer.state.uniformLocations.set(e, i);
  }
  switch (t) {
    case 5126:
      return i.length ? r.uniform1fv(e, i) : r.uniform1f(e, i);
    // FLOAT
    case 35664:
      return r.uniform2fv(e, i);
    // FLOAT_VEC2
    case 35665:
      return r.uniform3fv(e, i);
    // FLOAT_VEC3
    case 35666:
      return r.uniform4fv(e, i);
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
      return i.length ? r.uniform1iv(e, i) : r.uniform1i(e, i);
    // SAMPLER_CUBE
    case 35671:
    // BOOL_VEC2
    case 35667:
      return r.uniform2iv(e, i);
    // INT_VEC2
    case 35672:
    // BOOL_VEC3
    case 35668:
      return r.uniform3iv(e, i);
    // INT_VEC3
    case 35673:
    // BOOL_VEC4
    case 35669:
      return r.uniform4iv(e, i);
    // INT_VEC4
    case 35674:
      return r.uniformMatrix2fv(e, !1, i);
    // FLOAT_MAT2
    case 35675:
      return r.uniformMatrix3fv(e, !1, i);
    // FLOAT_MAT3
    case 35676:
      return r.uniformMatrix4fv(e, !1, i);
  }
}
function Jo(r) {
  let t = r.split(`
`);
  for (let e = 0; e < t.length; e++)
    t[e] = e + 1 + ": " + t[e];
  return t.join(`
`);
}
function Id(r) {
  const t = r.length, e = r[0].length;
  if (e === void 0) return r;
  const i = t * e;
  let n = Zo[i];
  n || (Zo[i] = n = new Float32Array(i));
  for (let s = 0; s < t; s++) n.set(r[s], s * e);
  return n;
}
function Ld(r, t) {
  if (r.length !== t.length) return !1;
  for (let e = 0, i = r.length; e < i; e++)
    if (r[e] !== t[e]) return !1;
  return !0;
}
function Nd(r, t) {
  for (let e = 0, i = r.length; e < i; e++)
    r[e] = t[e];
}
let Ls = 0;
function tl(r) {
  Ls > 100 || (console.warn(r), Ls++, Ls > 100 && console.warn("More than 100 program warnings - stopping logs."));
}
const Ns = /* @__PURE__ */ new it();
let Bd = 1;
class Ud {
  constructor({
    canvas: t = document.createElement("canvas"),
    width: e = 300,
    height: i = 150,
    dpr: n = 1,
    alpha: s = !1,
    depth: a = !0,
    stencil: o = !1,
    antialias: l = !1,
    premultipliedAlpha: f = !1,
    preserveDrawingBuffer: h = !1,
    powerPreference: u = "default",
    autoClear: c = !0,
    webgl: p = 2
  } = {}) {
    const _ = { alpha: s, depth: a, stencil: o, antialias: l, premultipliedAlpha: f, preserveDrawingBuffer: h, powerPreference: u };
    this.dpr = n, this.alpha = s, this.color = !0, this.depth = a, this.stencil = o, this.premultipliedAlpha = f, this.autoClear = c, this.id = Bd++, p === 2 && (this.gl = t.getContext("webgl2", _)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", _)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(e, i), this.state = {}, this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }, this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }, this.state.cullFace = !1, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LEQUAL, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = { x: 0, y: 0, width: null, height: null }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = /* @__PURE__ */ new Map(), this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(t, e) {
    this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
      width: t + "px",
      height: e + "px"
    });
  }
  setViewport(t, e, i = 0, n = 0) {
    this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.state.viewport.x = i, this.state.viewport.y = n, this.gl.viewport(i, n, t, e));
  }
  setScissor(t, e, i = 0, n = 0) {
    this.gl.scissor(i, n, t, e);
  }
  enable(t) {
    this.state[t] !== !0 && (this.gl.enable(t), this.state[t] = !0);
  }
  disable(t) {
    this.state[t] !== !1 && (this.gl.disable(t), this.state[t] = !1);
  }
  setBlendFunc(t, e, i, n) {
    this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === n || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = n, i !== void 0 ? this.gl.blendFuncSeparate(t, e, i, n) : this.gl.blendFunc(t, e));
  }
  setBlendEquation(t, e) {
    t = t || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) && (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, e !== void 0 ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t));
  }
  setCullFace(t) {
    this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t));
  }
  setFrontFace(t) {
    this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t));
  }
  setDepthMask(t) {
    this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t));
  }
  setDepthFunc(t) {
    this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t));
  }
  setStencilMask(t) {
    this.state.stencilMask !== t && (this.state.stencilMask = t, this.gl.stencilMask(t));
  }
  setStencilFunc(t, e, i) {
    this.state.stencilFunc === t && this.state.stencilRef === e && this.state.stencilFuncMask === i || (this.state.stencilFunc = t || this.gl.ALWAYS, this.state.stencilRef = e || 0, this.state.stencilFuncMask = i || 0, this.gl.stencilFunc(t || this.gl.ALWAYS, e || 0, i || 0));
  }
  setStencilOp(t, e, i) {
    this.state.stencilFail === t && this.state.stencilDepthFail === e && this.state.stencilDepthPass === i || (this.state.stencilFail = t, this.state.stencilDepthFail = e, this.state.stencilDepthPass = i, this.gl.stencilOp(t, e, i));
  }
  activeTexture(t) {
    this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t));
  }
  bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: e = null } = {}) {
    this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e));
  }
  getExtension(t, e, i) {
    return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null : this.extensions[t]);
  }
  sortOpaque(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id;
  }
  sortTransparent(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id;
  }
  sortUI(t, e) {
    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id;
  }
  getRenderList({ scene: t, camera: e, frustumCull: i, sort: n }) {
    let s = [];
    if (e && i && e.updateFrustum(), t.traverse((a) => {
      if (!a.visible) return !0;
      a.draw && (i && a.frustumCulled && e && !e.frustumIntersectsMesh(a) || s.push(a));
    }), n) {
      const a = [], o = [], l = [];
      s.forEach((f) => {
        f.program.transparent ? f.program.depthTest ? o.push(f) : l.push(f) : a.push(f), f.zDepth = 0, !(f.renderOrder !== 0 || !f.program.depthTest || !e) && (f.worldMatrix.getTranslation(Ns), Ns.applyMatrix4(e.projectionViewMatrix), f.zDepth = Ns.z);
      }), a.sort(this.sortOpaque), o.sort(this.sortTransparent), l.sort(this.sortUI), s = a.concat(o, l);
    }
    return s;
  }
  render({ scene: t, camera: e, target: i = null, update: n = !0, sort: s = !0, frustumCull: a = !0, clear: o }) {
    i === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)), (o || this.autoClear && o !== !1) && (this.depth && (!i || i.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), (this.stencil || !i || i.stencil) && (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)), this.gl.clear(
      (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
    )), n && t.updateMatrixWorld(), e && e.updateMatrixWorld(), this.getRenderList({ scene: t, camera: e, frustumCull: a, sort: s }).forEach((f) => {
      f.draw({ camera: e });
    });
  }
}
function Vd(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
function Yd(r, t, e, i, n) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r;
}
function Gd(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[3], a = e * e + i * i + n * n + s * s;
  return a > 0 && (a = 1 / Math.sqrt(a)), r[0] = e * a, r[1] = i * a, r[2] = n * a, r[3] = s * a, r;
}
function Xd(r, t) {
  return r[0] * t[0] + r[1] * t[1] + r[2] * t[2] + r[3] * t[3];
}
function qd(r) {
  return r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r;
}
function Wd(r, t, e) {
  e = e * 0.5;
  let i = Math.sin(e);
  return r[0] = i * t[0], r[1] = i * t[1], r[2] = i * t[2], r[3] = Math.cos(e), r;
}
function el(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = t[3], o = e[0], l = e[1], f = e[2], h = e[3];
  return r[0] = i * h + a * o + n * f - s * l, r[1] = n * h + a * l + s * o - i * f, r[2] = s * h + a * f + i * l - n * o, r[3] = a * h - i * o - n * l - s * f, r;
}
function jd(r, t, e) {
  e *= 0.5;
  let i = t[0], n = t[1], s = t[2], a = t[3], o = Math.sin(e), l = Math.cos(e);
  return r[0] = i * l + a * o, r[1] = n * l + s * o, r[2] = s * l - n * o, r[3] = a * l - i * o, r;
}
function Hd(r, t, e) {
  e *= 0.5;
  let i = t[0], n = t[1], s = t[2], a = t[3], o = Math.sin(e), l = Math.cos(e);
  return r[0] = i * l - s * o, r[1] = n * l + a * o, r[2] = s * l + i * o, r[3] = a * l - n * o, r;
}
function Qd(r, t, e) {
  e *= 0.5;
  let i = t[0], n = t[1], s = t[2], a = t[3], o = Math.sin(e), l = Math.cos(e);
  return r[0] = i * l + n * o, r[1] = n * l - i * o, r[2] = s * l + a * o, r[3] = a * l - s * o, r;
}
function Kd(r, t, e, i) {
  let n = t[0], s = t[1], a = t[2], o = t[3], l = e[0], f = e[1], h = e[2], u = e[3], c, p, _, d, g;
  return p = n * l + s * f + a * h + o * u, p < 0 && (p = -p, l = -l, f = -f, h = -h, u = -u), 1 - p > 1e-6 ? (c = Math.acos(p), _ = Math.sin(c), d = Math.sin((1 - i) * c) / _, g = Math.sin(i * c) / _) : (d = 1 - i, g = i), r[0] = d * n + g * l, r[1] = d * s + g * f, r[2] = d * a + g * h, r[3] = d * o + g * u, r;
}
function Zd(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[3], a = e * e + i * i + n * n + s * s, o = a ? 1 / a : 0;
  return r[0] = -e * o, r[1] = -i * o, r[2] = -n * o, r[3] = s * o, r;
}
function $d(r, t) {
  return r[0] = -t[0], r[1] = -t[1], r[2] = -t[2], r[3] = t[3], r;
}
function Jd(r, t) {
  let e = t[0] + t[4] + t[8], i;
  if (e > 0)
    i = Math.sqrt(e + 1), r[3] = 0.5 * i, i = 0.5 / i, r[0] = (t[5] - t[7]) * i, r[1] = (t[6] - t[2]) * i, r[2] = (t[1] - t[3]) * i;
  else {
    let n = 0;
    t[4] > t[0] && (n = 1), t[8] > t[n * 3 + n] && (n = 2);
    let s = (n + 1) % 3, a = (n + 2) % 3;
    i = Math.sqrt(t[n * 3 + n] - t[s * 3 + s] - t[a * 3 + a] + 1), r[n] = 0.5 * i, i = 0.5 / i, r[3] = (t[s * 3 + a] - t[a * 3 + s]) * i, r[s] = (t[s * 3 + n] + t[n * 3 + s]) * i, r[a] = (t[a * 3 + n] + t[n * 3 + a]) * i;
  }
  return r;
}
function tp(r, t, e = "YXZ") {
  let i = Math.sin(t[0] * 0.5), n = Math.cos(t[0] * 0.5), s = Math.sin(t[1] * 0.5), a = Math.cos(t[1] * 0.5), o = Math.sin(t[2] * 0.5), l = Math.cos(t[2] * 0.5);
  return e === "XYZ" ? (r[0] = i * a * l + n * s * o, r[1] = n * s * l - i * a * o, r[2] = n * a * o + i * s * l, r[3] = n * a * l - i * s * o) : e === "YXZ" ? (r[0] = i * a * l + n * s * o, r[1] = n * s * l - i * a * o, r[2] = n * a * o - i * s * l, r[3] = n * a * l + i * s * o) : e === "ZXY" ? (r[0] = i * a * l - n * s * o, r[1] = n * s * l + i * a * o, r[2] = n * a * o + i * s * l, r[3] = n * a * l - i * s * o) : e === "ZYX" ? (r[0] = i * a * l - n * s * o, r[1] = n * s * l + i * a * o, r[2] = n * a * o - i * s * l, r[3] = n * a * l + i * s * o) : e === "YZX" ? (r[0] = i * a * l + n * s * o, r[1] = n * s * l + i * a * o, r[2] = n * a * o - i * s * l, r[3] = n * a * l - i * s * o) : e === "XZY" && (r[0] = i * a * l - n * s * o, r[1] = n * s * l - i * a * o, r[2] = n * a * o + i * s * l, r[3] = n * a * l + i * s * o), r;
}
const ep = Vd, rp = Yd, ip = Xd, np = Gd;
class sp extends Array {
  constructor(t = 0, e = 0, i = 0, n = 1) {
    super(t, e, i, n), this.onChange = () => {
    }, this._target = this;
    const s = ["0", "1", "2", "3"];
    return new Proxy(this, {
      set(a, o) {
        const l = Reflect.set(...arguments);
        return l && s.includes(o) && a.onChange(), l;
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
  set x(t) {
    this._target[0] = t, this.onChange();
  }
  set y(t) {
    this._target[1] = t, this.onChange();
  }
  set z(t) {
    this._target[2] = t, this.onChange();
  }
  set w(t) {
    this._target[3] = t, this.onChange();
  }
  identity() {
    return qd(this._target), this.onChange(), this;
  }
  set(t, e, i, n) {
    return t.length ? this.copy(t) : (rp(this._target, t, e, i, n), this.onChange(), this);
  }
  rotateX(t) {
    return jd(this._target, this._target, t), this.onChange(), this;
  }
  rotateY(t) {
    return Hd(this._target, this._target, t), this.onChange(), this;
  }
  rotateZ(t) {
    return Qd(this._target, this._target, t), this.onChange(), this;
  }
  inverse(t = this._target) {
    return Zd(this._target, t), this.onChange(), this;
  }
  conjugate(t = this._target) {
    return $d(this._target, t), this.onChange(), this;
  }
  copy(t) {
    return ep(this._target, t), this.onChange(), this;
  }
  normalize(t = this._target) {
    return np(this._target, t), this.onChange(), this;
  }
  multiply(t, e) {
    return e ? el(this._target, t, e) : el(this._target, this._target, t), this.onChange(), this;
  }
  dot(t) {
    return ip(this._target, t);
  }
  fromMatrix3(t) {
    return Jd(this._target, t), this.onChange(), this;
  }
  fromEuler(t, e) {
    return tp(this._target, t, t.order), e || this.onChange(), this;
  }
  fromAxisAngle(t, e) {
    return Wd(this._target, t, e), this.onChange(), this;
  }
  slerp(t, e) {
    return Kd(this._target, this._target, t, e), this.onChange(), this;
  }
  fromArray(t, e = 0) {
    return this._target[0] = t[e], this._target[1] = t[e + 1], this._target[2] = t[e + 2], this._target[3] = t[e + 3], this.onChange(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t;
  }
}
const ap = 1e-6;
function op(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r[6] = t[6], r[7] = t[7], r[8] = t[8], r[9] = t[9], r[10] = t[10], r[11] = t[11], r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15], r;
}
function lp(r, t, e, i, n, s, a, o, l, f, h, u, c, p, _, d, g) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r[4] = s, r[5] = a, r[6] = o, r[7] = l, r[8] = f, r[9] = h, r[10] = u, r[11] = c, r[12] = p, r[13] = _, r[14] = d, r[15] = g, r;
}
function fp(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 1, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 1, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function hp(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], f = t[7], h = t[8], u = t[9], c = t[10], p = t[11], _ = t[12], d = t[13], g = t[14], m = t[15], b = e * o - i * a, y = e * l - n * a, v = e * f - s * a, x = i * l - n * o, k = i * f - s * o, T = n * f - s * l, w = h * d - u * _, E = h * g - c * _, M = h * m - p * _, z = u * g - c * d, F = u * m - p * d, I = c * m - p * g, S = b * I - y * F + v * z + x * M - k * E + T * w;
  return S ? (S = 1 / S, r[0] = (o * I - l * F + f * z) * S, r[1] = (n * F - i * I - s * z) * S, r[2] = (d * T - g * k + m * x) * S, r[3] = (c * k - u * T - p * x) * S, r[4] = (l * M - a * I - f * E) * S, r[5] = (e * I - n * M + s * E) * S, r[6] = (g * v - _ * T - m * y) * S, r[7] = (h * T - c * v + p * y) * S, r[8] = (a * F - o * M + f * w) * S, r[9] = (i * M - e * F - s * w) * S, r[10] = (_ * k - d * v + m * b) * S, r[11] = (u * v - h * k - p * b) * S, r[12] = (o * E - a * z - l * w) * S, r[13] = (e * z - i * E + n * w) * S, r[14] = (d * y - _ * x - g * b) * S, r[15] = (h * x - u * y + c * b) * S, r) : null;
}
function Bf(r) {
  let t = r[0], e = r[1], i = r[2], n = r[3], s = r[4], a = r[5], o = r[6], l = r[7], f = r[8], h = r[9], u = r[10], c = r[11], p = r[12], _ = r[13], d = r[14], g = r[15], m = t * a - e * s, b = t * o - i * s, y = t * l - n * s, v = e * o - i * a, x = e * l - n * a, k = i * l - n * o, T = f * _ - h * p, w = f * d - u * p, E = f * g - c * p, M = h * d - u * _, z = h * g - c * _, F = u * g - c * d;
  return m * F - b * z + y * M + v * E - x * w + k * T;
}
function rl(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], f = t[6], h = t[7], u = t[8], c = t[9], p = t[10], _ = t[11], d = t[12], g = t[13], m = t[14], b = t[15], y = e[0], v = e[1], x = e[2], k = e[3];
  return r[0] = y * i + v * o + x * u + k * d, r[1] = y * n + v * l + x * c + k * g, r[2] = y * s + v * f + x * p + k * m, r[3] = y * a + v * h + x * _ + k * b, y = e[4], v = e[5], x = e[6], k = e[7], r[4] = y * i + v * o + x * u + k * d, r[5] = y * n + v * l + x * c + k * g, r[6] = y * s + v * f + x * p + k * m, r[7] = y * a + v * h + x * _ + k * b, y = e[8], v = e[9], x = e[10], k = e[11], r[8] = y * i + v * o + x * u + k * d, r[9] = y * n + v * l + x * c + k * g, r[10] = y * s + v * f + x * p + k * m, r[11] = y * a + v * h + x * _ + k * b, y = e[12], v = e[13], x = e[14], k = e[15], r[12] = y * i + v * o + x * u + k * d, r[13] = y * n + v * l + x * c + k * g, r[14] = y * s + v * f + x * p + k * m, r[15] = y * a + v * h + x * _ + k * b, r;
}
function up(r, t, e) {
  let i = e[0], n = e[1], s = e[2], a, o, l, f, h, u, c, p, _, d, g, m;
  return t === r ? (r[12] = t[0] * i + t[4] * n + t[8] * s + t[12], r[13] = t[1] * i + t[5] * n + t[9] * s + t[13], r[14] = t[2] * i + t[6] * n + t[10] * s + t[14], r[15] = t[3] * i + t[7] * n + t[11] * s + t[15]) : (a = t[0], o = t[1], l = t[2], f = t[3], h = t[4], u = t[5], c = t[6], p = t[7], _ = t[8], d = t[9], g = t[10], m = t[11], r[0] = a, r[1] = o, r[2] = l, r[3] = f, r[4] = h, r[5] = u, r[6] = c, r[7] = p, r[8] = _, r[9] = d, r[10] = g, r[11] = m, r[12] = a * i + h * n + _ * s + t[12], r[13] = o * i + u * n + d * s + t[13], r[14] = l * i + c * n + g * s + t[14], r[15] = f * i + p * n + m * s + t[15]), r;
}
function cp(r, t, e) {
  let i = e[0], n = e[1], s = e[2];
  return r[0] = t[0] * i, r[1] = t[1] * i, r[2] = t[2] * i, r[3] = t[3] * i, r[4] = t[4] * n, r[5] = t[5] * n, r[6] = t[6] * n, r[7] = t[7] * n, r[8] = t[8] * s, r[9] = t[9] * s, r[10] = t[10] * s, r[11] = t[11] * s, r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15], r;
}
function dp(r, t, e, i) {
  let n = i[0], s = i[1], a = i[2], o = Math.hypot(n, s, a), l, f, h, u, c, p, _, d, g, m, b, y, v, x, k, T, w, E, M, z, F, I, S, Y;
  return Math.abs(o) < ap ? null : (o = 1 / o, n *= o, s *= o, a *= o, l = Math.sin(e), f = Math.cos(e), h = 1 - f, u = t[0], c = t[1], p = t[2], _ = t[3], d = t[4], g = t[5], m = t[6], b = t[7], y = t[8], v = t[9], x = t[10], k = t[11], T = n * n * h + f, w = s * n * h + a * l, E = a * n * h - s * l, M = n * s * h - a * l, z = s * s * h + f, F = a * s * h + n * l, I = n * a * h + s * l, S = s * a * h - n * l, Y = a * a * h + f, r[0] = u * T + d * w + y * E, r[1] = c * T + g * w + v * E, r[2] = p * T + m * w + x * E, r[3] = _ * T + b * w + k * E, r[4] = u * M + d * z + y * F, r[5] = c * M + g * z + v * F, r[6] = p * M + m * z + x * F, r[7] = _ * M + b * z + k * F, r[8] = u * I + d * S + y * Y, r[9] = c * I + g * S + v * Y, r[10] = p * I + m * S + x * Y, r[11] = _ * I + b * S + k * Y, t !== r && (r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]), r);
}
function pp(r, t) {
  return r[0] = t[12], r[1] = t[13], r[2] = t[14], r;
}
function Uf(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[4], a = t[5], o = t[6], l = t[8], f = t[9], h = t[10];
  return r[0] = Math.hypot(e, i, n), r[1] = Math.hypot(s, a, o), r[2] = Math.hypot(l, f, h), r;
}
function _p(r) {
  let t = r[0], e = r[1], i = r[2], n = r[4], s = r[5], a = r[6], o = r[8], l = r[9], f = r[10];
  const h = t * t + e * e + i * i, u = n * n + s * s + a * a, c = o * o + l * l + f * f;
  return Math.sqrt(Math.max(h, u, c));
}
const Vf = /* @__PURE__ */ (function() {
  const r = [1, 1, 1];
  return function(t, e) {
    let i = r;
    Uf(i, e);
    let n = 1 / i[0], s = 1 / i[1], a = 1 / i[2], o = e[0] * n, l = e[1] * s, f = e[2] * a, h = e[4] * n, u = e[5] * s, c = e[6] * a, p = e[8] * n, _ = e[9] * s, d = e[10] * a, g = o + u + d, m = 0;
    return g > 0 ? (m = Math.sqrt(g + 1) * 2, t[3] = 0.25 * m, t[0] = (c - _) / m, t[1] = (p - f) / m, t[2] = (l - h) / m) : o > u && o > d ? (m = Math.sqrt(1 + o - u - d) * 2, t[3] = (c - _) / m, t[0] = 0.25 * m, t[1] = (l + h) / m, t[2] = (p + f) / m) : u > d ? (m = Math.sqrt(1 + u - o - d) * 2, t[3] = (p - f) / m, t[0] = (l + h) / m, t[1] = 0.25 * m, t[2] = (c + _) / m) : (m = Math.sqrt(1 + d - o - u) * 2, t[3] = (l - h) / m, t[0] = (p + f) / m, t[1] = (c + _) / m, t[2] = 0.25 * m), t;
  };
})();
function gp(r, t, e, i) {
  let n = Zi([r[0], r[1], r[2]]);
  const s = Zi([r[4], r[5], r[6]]), a = Zi([r[8], r[9], r[10]]);
  Bf(r) < 0 && (n = -n), e[0] = r[12], e[1] = r[13], e[2] = r[14];
  const l = r.slice(), f = 1 / n, h = 1 / s, u = 1 / a;
  l[0] *= f, l[1] *= f, l[2] *= f, l[4] *= h, l[5] *= h, l[6] *= h, l[8] *= u, l[9] *= u, l[10] *= u, Vf(t, l), i[0] = n, i[1] = s, i[2] = a;
}
function mp(r, t, e, i) {
  const n = r, s = t[0], a = t[1], o = t[2], l = t[3], f = s + s, h = a + a, u = o + o, c = s * f, p = s * h, _ = s * u, d = a * h, g = a * u, m = o * u, b = l * f, y = l * h, v = l * u, x = i[0], k = i[1], T = i[2];
  return n[0] = (1 - (d + m)) * x, n[1] = (p + v) * x, n[2] = (_ - y) * x, n[3] = 0, n[4] = (p - v) * k, n[5] = (1 - (c + m)) * k, n[6] = (g + b) * k, n[7] = 0, n[8] = (_ + y) * T, n[9] = (g - b) * T, n[10] = (1 - (c + d)) * T, n[11] = 0, n[12] = e[0], n[13] = e[1], n[14] = e[2], n[15] = 1, n;
}
function vp(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[3], a = e + e, o = i + i, l = n + n, f = e * a, h = i * a, u = i * o, c = n * a, p = n * o, _ = n * l, d = s * a, g = s * o, m = s * l;
  return r[0] = 1 - u - _, r[1] = h + m, r[2] = c - g, r[3] = 0, r[4] = h - m, r[5] = 1 - f - _, r[6] = p + d, r[7] = 0, r[8] = c + g, r[9] = p - d, r[10] = 1 - f - u, r[11] = 0, r[12] = 0, r[13] = 0, r[14] = 0, r[15] = 1, r;
}
function bp(r, t, e, i, n) {
  let s = 1 / Math.tan(t / 2), a = 1 / (i - n);
  return r[0] = s / e, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = s, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = (n + i) * a, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = 2 * n * i * a, r[15] = 0, r;
}
function yp(r, t, e, i, n, s, a) {
  let o = 1 / (t - e), l = 1 / (i - n), f = 1 / (s - a);
  return r[0] = -2 * o, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = -2 * l, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = 2 * f, r[11] = 0, r[12] = (t + e) * o, r[13] = (n + i) * l, r[14] = (a + s) * f, r[15] = 1, r;
}
function xp(r, t, e, i) {
  let n = t[0], s = t[1], a = t[2], o = i[0], l = i[1], f = i[2], h = n - e[0], u = s - e[1], c = a - e[2], p = h * h + u * u + c * c;
  p === 0 ? c = 1 : (p = 1 / Math.sqrt(p), h *= p, u *= p, c *= p);
  let _ = l * c - f * u, d = f * h - o * c, g = o * u - l * h;
  return p = _ * _ + d * d + g * g, p === 0 && (f ? o += 1e-6 : l ? f += 1e-6 : l += 1e-6, _ = l * c - f * u, d = f * h - o * c, g = o * u - l * h, p = _ * _ + d * d + g * g), p = 1 / Math.sqrt(p), _ *= p, d *= p, g *= p, r[0] = _, r[1] = d, r[2] = g, r[3] = 0, r[4] = u * g - c * d, r[5] = c * _ - h * g, r[6] = h * d - u * _, r[7] = 0, r[8] = h, r[9] = u, r[10] = c, r[11] = 0, r[12] = n, r[13] = s, r[14] = a, r[15] = 1, r;
}
function il(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r[2] = t[2] + e[2], r[3] = t[3] + e[3], r[4] = t[4] + e[4], r[5] = t[5] + e[5], r[6] = t[6] + e[6], r[7] = t[7] + e[7], r[8] = t[8] + e[8], r[9] = t[9] + e[9], r[10] = t[10] + e[10], r[11] = t[11] + e[11], r[12] = t[12] + e[12], r[13] = t[13] + e[13], r[14] = t[14] + e[14], r[15] = t[15] + e[15], r;
}
function nl(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r[2] = t[2] - e[2], r[3] = t[3] - e[3], r[4] = t[4] - e[4], r[5] = t[5] - e[5], r[6] = t[6] - e[6], r[7] = t[7] - e[7], r[8] = t[8] - e[8], r[9] = t[9] - e[9], r[10] = t[10] - e[10], r[11] = t[11] - e[11], r[12] = t[12] - e[12], r[13] = t[13] - e[13], r[14] = t[14] - e[14], r[15] = t[15] - e[15], r;
}
function wp(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e, r[3] = t[3] * e, r[4] = t[4] * e, r[5] = t[5] * e, r[6] = t[6] * e, r[7] = t[7] * e, r[8] = t[8] * e, r[9] = t[9] * e, r[10] = t[10] * e, r[11] = t[11] * e, r[12] = t[12] * e, r[13] = t[13] * e, r[14] = t[14] * e, r[15] = t[15] * e, r;
}
class cr extends Array {
  constructor(t = 1, e = 0, i = 0, n = 0, s = 0, a = 1, o = 0, l = 0, f = 0, h = 0, u = 1, c = 0, p = 0, _ = 0, d = 0, g = 1) {
    return super(t, e, i, n, s, a, o, l, f, h, u, c, p, _, d, g), this;
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
  set x(t) {
    this[12] = t;
  }
  set y(t) {
    this[13] = t;
  }
  set z(t) {
    this[14] = t;
  }
  set w(t) {
    this[15] = t;
  }
  set(t, e, i, n, s, a, o, l, f, h, u, c, p, _, d, g) {
    return t.length ? this.copy(t) : (lp(this, t, e, i, n, s, a, o, l, f, h, u, c, p, _, d, g), this);
  }
  translate(t, e = this) {
    return up(this, e, t), this;
  }
  rotate(t, e, i = this) {
    return dp(this, i, t, e), this;
  }
  scale(t, e = this) {
    return cp(this, e, typeof t == "number" ? [t, t, t] : t), this;
  }
  add(t, e) {
    return e ? il(this, t, e) : il(this, this, t), this;
  }
  sub(t, e) {
    return e ? nl(this, t, e) : nl(this, this, t), this;
  }
  multiply(t, e) {
    return t.length ? e ? rl(this, t, e) : rl(this, this, t) : wp(this, this, t), this;
  }
  identity() {
    return fp(this), this;
  }
  copy(t) {
    return op(this, t), this;
  }
  fromPerspective({ fov: t, aspect: e, near: i, far: n } = {}) {
    return bp(this, t, e, i, n), this;
  }
  fromOrthogonal({ left: t, right: e, bottom: i, top: n, near: s, far: a }) {
    return yp(this, t, e, i, n, s, a), this;
  }
  fromQuaternion(t) {
    return vp(this, t), this;
  }
  setPosition(t) {
    return this.x = t[0], this.y = t[1], this.z = t[2], this;
  }
  inverse(t = this) {
    return hp(this, t), this;
  }
  compose(t, e, i) {
    return mp(this, t, e, i), this;
  }
  decompose(t, e, i) {
    return gp(this, t, e, i), this;
  }
  getRotation(t) {
    return Vf(t, this), this;
  }
  getTranslation(t) {
    return pp(t, this), this;
  }
  getScaling(t) {
    return Uf(t, this), this;
  }
  getMaxScaleOnAxis() {
    return _p(this);
  }
  lookAt(t, e, i) {
    return xp(this, t, e, i), this;
  }
  determinant() {
    return Bf(this);
  }
  fromArray(t, e = 0) {
    return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this[4] = t[e + 4], this[5] = t[e + 5], this[6] = t[e + 6], this[7] = t[e + 7], this[8] = t[e + 8], this[9] = t[e + 9], this[10] = t[e + 10], this[11] = t[e + 11], this[12] = t[e + 12], this[13] = t[e + 13], this[14] = t[e + 14], this[15] = t[e + 15], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t[e + 4] = this[4], t[e + 5] = this[5], t[e + 6] = this[6], t[e + 7] = this[7], t[e + 8] = this[8], t[e + 9] = this[9], t[e + 10] = this[10], t[e + 11] = this[11], t[e + 12] = this[12], t[e + 13] = this[13], t[e + 14] = this[14], t[e + 15] = this[15], t;
  }
}
function Ap(r, t, e = "YXZ") {
  return e === "XYZ" ? (r[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)), Math.abs(t[8]) < 0.99999 ? (r[0] = Math.atan2(-t[9], t[10]), r[2] = Math.atan2(-t[4], t[0])) : (r[0] = Math.atan2(t[6], t[5]), r[2] = 0)) : e === "YXZ" ? (r[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)), Math.abs(t[9]) < 0.99999 ? (r[1] = Math.atan2(t[8], t[10]), r[2] = Math.atan2(t[1], t[5])) : (r[1] = Math.atan2(-t[2], t[0]), r[2] = 0)) : e === "ZXY" ? (r[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)), Math.abs(t[6]) < 0.99999 ? (r[1] = Math.atan2(-t[2], t[10]), r[2] = Math.atan2(-t[4], t[5])) : (r[1] = 0, r[2] = Math.atan2(t[1], t[0]))) : e === "ZYX" ? (r[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)), Math.abs(t[2]) < 0.99999 ? (r[0] = Math.atan2(t[6], t[10]), r[2] = Math.atan2(t[1], t[0])) : (r[0] = 0, r[2] = Math.atan2(-t[4], t[5]))) : e === "YZX" ? (r[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)), Math.abs(t[1]) < 0.99999 ? (r[0] = Math.atan2(-t[9], t[5]), r[1] = Math.atan2(-t[2], t[0])) : (r[0] = 0, r[1] = Math.atan2(t[8], t[10]))) : e === "XZY" && (r[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)), Math.abs(t[4]) < 0.99999 ? (r[0] = Math.atan2(t[6], t[5]), r[1] = Math.atan2(t[8], t[0])) : (r[0] = Math.atan2(-t[9], t[10]), r[1] = 0)), r;
}
const sl = /* @__PURE__ */ new cr();
class Tp extends Array {
  constructor(t = 0, e = t, i = t, n = "YXZ") {
    super(t, e, i), this.order = n, this.onChange = () => {
    }, this._target = this;
    const s = ["0", "1", "2"];
    return new Proxy(this, {
      set(a, o) {
        const l = Reflect.set(...arguments);
        return l && s.includes(o) && a.onChange(), l;
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
  set x(t) {
    this._target[0] = t, this.onChange();
  }
  set y(t) {
    this._target[1] = t, this.onChange();
  }
  set z(t) {
    this._target[2] = t, this.onChange();
  }
  set(t, e = t, i = t) {
    return t.length ? this.copy(t) : (this._target[0] = t, this._target[1] = e, this._target[2] = i, this.onChange(), this);
  }
  copy(t) {
    return this._target[0] = t[0], this._target[1] = t[1], this._target[2] = t[2], this.onChange(), this;
  }
  reorder(t) {
    return this._target.order = t, this.onChange(), this;
  }
  fromRotationMatrix(t, e = this.order) {
    return Ap(this._target, t, e), this.onChange(), this;
  }
  fromQuaternion(t, e = this.order, i) {
    return sl.fromQuaternion(t), this._target.fromRotationMatrix(sl, e), i || this.onChange(), this;
  }
  fromArray(t, e = 0) {
    return this._target[0] = t[e], this._target[1] = t[e + 1], this._target[2] = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t;
  }
}
class Zn {
  constructor() {
    this.parent = null, this.children = [], this.visible = !0, this.matrix = new cr(), this.worldMatrix = new cr(), this.matrixAutoUpdate = !0, this.worldMatrixNeedsUpdate = !1, this.position = new it(), this.quaternion = new sp(), this.scale = new it(1), this.rotation = new Tp(), this.up = new it(0, 1, 0), this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0), this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0);
  }
  setParent(t, e = !0) {
    this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1);
  }
  addChild(t, e = !0) {
    ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1);
  }
  removeChild(t, e = !0) {
    ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
    for (let e = 0, i = this.children.length; e < i; e++)
      this.children[e].updateMatrixWorld(t);
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0;
  }
  traverse(t) {
    if (!t(this))
      for (let e = 0, i = this.children.length; e < i; e++)
        this.children[e].traverse(t);
  }
  decompose() {
    this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(t, e = !1) {
    e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion);
  }
}
const kp = /* @__PURE__ */ new cr(), Ep = /* @__PURE__ */ new it(), Mp = /* @__PURE__ */ new it();
class Sp extends Zn {
  constructor(t, { near: e = 0.1, far: i = 100, fov: n = 45, aspect: s = 1, left: a, right: o, bottom: l, top: f, zoom: h = 1 } = {}) {
    super(), Object.assign(this, { near: e, far: i, fov: n, aspect: s, left: a, right: o, bottom: l, top: f, zoom: h }), this.projectionMatrix = new cr(), this.viewMatrix = new cr(), this.projectionViewMatrix = new cr(), this.worldPosition = new it(), this.type = a || o ? "orthographic" : "perspective", this.type === "orthographic" ? this.orthographic() : this.perspective();
  }
  perspective({ near: t = this.near, far: e = this.far, fov: i = this.fov, aspect: n = this.aspect } = {}) {
    return Object.assign(this, { near: t, far: e, fov: i, aspect: n }), this.projectionMatrix.fromPerspective({ fov: i * (Math.PI / 180), aspect: n, near: t, far: e }), this.type = "perspective", this;
  }
  orthographic({
    near: t = this.near,
    far: e = this.far,
    left: i = this.left || -1,
    right: n = this.right || 1,
    bottom: s = this.bottom || -1,
    top: a = this.top || 1,
    zoom: o = this.zoom
  } = {}) {
    return Object.assign(this, { near: t, far: e, left: i, right: n, bottom: s, top: a, zoom: o }), i /= o, n /= o, s /= o, a /= o, this.projectionMatrix.fromOrthogonal({ left: i, right: n, bottom: s, top: a, near: t, far: e }), this.type = "orthographic", this;
  }
  updateMatrixWorld() {
    return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this;
  }
  updateProjectionMatrix() {
    return this.type === "perspective" ? this.perspective() : this.orthographic();
  }
  lookAt(t) {
    return super.lookAt(t, !0), this;
  }
  // Project 3D coordinate to 2D point
  project(t) {
    return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this;
  }
  // Unproject 2D point to 3D coordinate
  unproject(t) {
    return t.applyMatrix4(kp.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this;
  }
  updateFrustum() {
    this.frustum || (this.frustum = [new it(), new it(), new it(), new it(), new it(), new it()]);
    const t = this.projectionViewMatrix;
    this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
    for (let e = 0; e < 6; e++) {
      const i = 1 / this.frustum[e].distance();
      this.frustum[e].multiply(i), this.frustum[e].constant *= i;
    }
  }
  frustumIntersectsMesh(t, e = t.worldMatrix) {
    if (!t.geometry.attributes.position || ((!t.geometry.bounds || t.geometry.bounds.radius === 1 / 0) && t.geometry.computeBoundingSphere(), !t.geometry.bounds)) return !0;
    const i = Ep;
    i.copy(t.geometry.bounds.center), i.applyMatrix4(e);
    const n = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(i, n);
  }
  frustumIntersectsSphere(t, e) {
    const i = Mp;
    for (let n = 0; n < 6; n++) {
      const s = this.frustum[n];
      if (i.copy(s).dot(t) + s.constant < -e) return !1;
    }
    return !0;
  }
}
function Cp(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[4], r[4] = t[5], r[5] = t[6], r[6] = t[8], r[7] = t[9], r[8] = t[10], r;
}
function Pp(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[3], a = e + e, o = i + i, l = n + n, f = e * a, h = i * a, u = i * o, c = n * a, p = n * o, _ = n * l, d = s * a, g = s * o, m = s * l;
  return r[0] = 1 - u - _, r[3] = h - m, r[6] = c + g, r[1] = h + m, r[4] = 1 - f - _, r[7] = p - d, r[2] = c - g, r[5] = p + d, r[8] = 1 - f - u, r;
}
function Rp(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r[6] = t[6], r[7] = t[7], r[8] = t[8], r;
}
function Op(r, t, e, i, n, s, a, o, l, f) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r[4] = s, r[5] = a, r[6] = o, r[7] = l, r[8] = f, r;
}
function Dp(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r;
}
function Fp(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], f = t[7], h = t[8], u = h * a - o * f, c = -h * s + o * l, p = f * s - a * l, _ = e * u + i * c + n * p;
  return _ ? (_ = 1 / _, r[0] = u * _, r[1] = (-h * i + n * f) * _, r[2] = (o * i - n * a) * _, r[3] = c * _, r[4] = (h * e - n * l) * _, r[5] = (-o * e + n * s) * _, r[6] = p * _, r[7] = (-f * e + i * l) * _, r[8] = (a * e - i * s) * _, r) : null;
}
function al(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], f = t[6], h = t[7], u = t[8], c = e[0], p = e[1], _ = e[2], d = e[3], g = e[4], m = e[5], b = e[6], y = e[7], v = e[8];
  return r[0] = c * i + p * a + _ * f, r[1] = c * n + p * o + _ * h, r[2] = c * s + p * l + _ * u, r[3] = d * i + g * a + m * f, r[4] = d * n + g * o + m * h, r[5] = d * s + g * l + m * u, r[6] = b * i + y * a + v * f, r[7] = b * n + y * o + v * h, r[8] = b * s + y * l + v * u, r;
}
function zp(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], f = t[6], h = t[7], u = t[8], c = e[0], p = e[1];
  return r[0] = i, r[1] = n, r[2] = s, r[3] = a, r[4] = o, r[5] = l, r[6] = c * i + p * a + f, r[7] = c * n + p * o + h, r[8] = c * s + p * l + u, r;
}
function Ip(r, t, e) {
  let i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], f = t[6], h = t[7], u = t[8], c = Math.sin(e), p = Math.cos(e);
  return r[0] = p * i + c * a, r[1] = p * n + c * o, r[2] = p * s + c * l, r[3] = p * a - c * i, r[4] = p * o - c * n, r[5] = p * l - c * s, r[6] = f, r[7] = h, r[8] = u, r;
}
function Lp(r, t, e) {
  let i = e[0], n = e[1];
  return r[0] = i * t[0], r[1] = i * t[1], r[2] = i * t[2], r[3] = n * t[3], r[4] = n * t[4], r[5] = n * t[5], r[6] = t[6], r[7] = t[7], r[8] = t[8], r;
}
function Np(r, t) {
  let e = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], f = t[7], h = t[8], u = t[9], c = t[10], p = t[11], _ = t[12], d = t[13], g = t[14], m = t[15], b = e * o - i * a, y = e * l - n * a, v = e * f - s * a, x = i * l - n * o, k = i * f - s * o, T = n * f - s * l, w = h * d - u * _, E = h * g - c * _, M = h * m - p * _, z = u * g - c * d, F = u * m - p * d, I = c * m - p * g, S = b * I - y * F + v * z + x * M - k * E + T * w;
  return S ? (S = 1 / S, r[0] = (o * I - l * F + f * z) * S, r[1] = (l * M - a * I - f * E) * S, r[2] = (a * F - o * M + f * w) * S, r[3] = (n * F - i * I - s * z) * S, r[4] = (e * I - n * M + s * E) * S, r[5] = (i * M - e * F - s * w) * S, r[6] = (d * T - g * k + m * x) * S, r[7] = (g * v - _ * T - m * y) * S, r[8] = (_ * k - d * v + m * b) * S, r) : null;
}
class Bp extends Array {
  constructor(t = 1, e = 0, i = 0, n = 0, s = 1, a = 0, o = 0, l = 0, f = 1) {
    return super(t, e, i, n, s, a, o, l, f), this;
  }
  set(t, e, i, n, s, a, o, l, f) {
    return t.length ? this.copy(t) : (Op(this, t, e, i, n, s, a, o, l, f), this);
  }
  translate(t, e = this) {
    return zp(this, e, t), this;
  }
  rotate(t, e = this) {
    return Ip(this, e, t), this;
  }
  scale(t, e = this) {
    return Lp(this, e, t), this;
  }
  multiply(t, e) {
    return e ? al(this, t, e) : al(this, this, t), this;
  }
  identity() {
    return Dp(this), this;
  }
  copy(t) {
    return Rp(this, t), this;
  }
  fromMatrix4(t) {
    return Cp(this, t), this;
  }
  fromQuaternion(t) {
    return Pp(this, t), this;
  }
  fromBasis(t, e, i) {
    return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this;
  }
  inverse(t = this) {
    return Fp(this, t), this;
  }
  getNormalMatrix(t) {
    return Np(this, t), this;
  }
}
let Up = 0;
class ol extends Zn {
  constructor(t, { geometry: e, program: i, mode: n = t.TRIANGLES, frustumCulled: s = !0, renderOrder: a = 0 } = {}) {
    super(), t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = Up++, this.geometry = e, this.program = i, this.mode = n, this.frustumCulled = s, this.renderOrder = a, this.modelViewMatrix = new cr(), this.normalMatrix = new Bp(), this.beforeRenderCallbacks = [], this.afterRenderCallbacks = [];
  }
  onBeforeRender(t) {
    return this.beforeRenderCallbacks.push(t), this;
  }
  onAfterRender(t) {
    return this.afterRenderCallbacks.push(t), this;
  }
  draw({ camera: t } = {}) {
    t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
      modelMatrix: { value: null },
      viewMatrix: { value: null },
      modelViewMatrix: { value: null },
      normalMatrix: { value: null },
      projectionMatrix: { value: null },
      cameraPosition: { value: null }
    }), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach((i) => i && i({ mesh: this, camera: t }));
    let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({ flipFaces: e }), this.geometry.draw({ mode: this.mode, program: this.program }), this.afterRenderCallbacks.forEach((i) => i && i({ mesh: this, camera: t }));
  }
}
const ll = new Uint8Array(4);
function fl(r) {
  return (r & r - 1) === 0;
}
let Vp = 1;
class Yp {
  constructor(t, {
    image: e,
    target: i = t.TEXTURE_2D,
    type: n = t.UNSIGNED_BYTE,
    format: s = t.RGBA,
    internalFormat: a = s,
    wrapS: o = t.CLAMP_TO_EDGE,
    wrapT: l = t.CLAMP_TO_EDGE,
    wrapR: f = t.CLAMP_TO_EDGE,
    generateMipmaps: h = i === (t.TEXTURE_2D || t.TEXTURE_CUBE_MAP),
    minFilter: u = h ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
    magFilter: c = t.LINEAR,
    premultiplyAlpha: p = !1,
    unpackAlignment: _ = 4,
    flipY: d = i == (t.TEXTURE_2D || t.TEXTURE_3D),
    anisotropy: g = 0,
    level: m = 0,
    width: b,
    // used for RenderTargets or Data Textures
    height: y = b,
    length: v = 1
  } = {}) {
    this.gl = t, this.id = Vp++, this.image = e, this.target = i, this.type = n, this.format = s, this.internalFormat = a, this.minFilter = u, this.magFilter = c, this.wrapS = o, this.wrapT = l, this.wrapR = f, this.generateMipmaps = h, this.premultiplyAlpha = p, this.unpackAlignment = _, this.flipY = d, this.anisotropy = Math.min(g, this.gl.renderer.parameters.maxAnisotropy), this.level = m, this.width = b, this.height = y, this.length = v, this.texture = this.gl.createTexture(), this.store = {
      image: null
    }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0;
  }
  bind() {
    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id);
  }
  update(t = 0) {
    const e = !(this.image === this.store.image && !this.needsUpdate);
    if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), !!e) {
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
        this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!fl(this.image.width) || !fl(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate();
      } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
        for (let i = 0; i < 6; i++)
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, ll);
      else this.width ? this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, ll);
      this.store.image = this.image;
    }
  }
}
function Gp(r, t) {
  return r[0] = t[0], r[1] = t[1], r;
}
function Xp(r, t, e) {
  return r[0] = t, r[1] = e, r;
}
function hl(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function ul(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function qp(r, t, e) {
  return r[0] = t[0] * e[0], r[1] = t[1] * e[1], r;
}
function Wp(r, t, e) {
  return r[0] = t[0] / e[0], r[1] = t[1] / e[1], r;
}
function Bs(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function jp(r, t) {
  var e = t[0] - r[0], i = t[1] - r[1];
  return Math.sqrt(e * e + i * i);
}
function Hp(r, t) {
  var e = t[0] - r[0], i = t[1] - r[1];
  return e * e + i * i;
}
function cl(r) {
  var t = r[0], e = r[1];
  return Math.sqrt(t * t + e * e);
}
function Qp(r) {
  var t = r[0], e = r[1];
  return t * t + e * e;
}
function Kp(r, t) {
  return r[0] = -t[0], r[1] = -t[1], r;
}
function Zp(r, t) {
  return r[0] = 1 / t[0], r[1] = 1 / t[1], r;
}
function $p(r, t) {
  var e = t[0], i = t[1], n = e * e + i * i;
  return n > 0 && (n = 1 / Math.sqrt(n)), r[0] = t[0] * n, r[1] = t[1] * n, r;
}
function Jp(r, t) {
  return r[0] * t[0] + r[1] * t[1];
}
function dl(r, t) {
  return r[0] * t[1] - r[1] * t[0];
}
function t0(r, t, e, i) {
  var n = t[0], s = t[1];
  return r[0] = n + i * (e[0] - n), r[1] = s + i * (e[1] - s), r;
}
function e0(r, t, e, i, n) {
  const s = Math.exp(-i * n);
  let a = t[0], o = t[1];
  return r[0] = e[0] + (a - e[0]) * s, r[1] = e[1] + (o - e[1]) * s, r;
}
function r0(r, t, e) {
  var i = t[0], n = t[1];
  return r[0] = e[0] * i + e[3] * n + e[6], r[1] = e[1] * i + e[4] * n + e[7], r;
}
function i0(r, t, e) {
  let i = t[0], n = t[1];
  return r[0] = e[0] * i + e[4] * n + e[12], r[1] = e[1] * i + e[5] * n + e[13], r;
}
function n0(r, t) {
  return r[0] === t[0] && r[1] === t[1];
}
class $i extends Array {
  constructor(t = 0, e = t) {
    return super(t, e), this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  set x(t) {
    this[0] = t;
  }
  set y(t) {
    this[1] = t;
  }
  set(t, e = t) {
    return t.length ? this.copy(t) : (Xp(this, t, e), this);
  }
  copy(t) {
    return Gp(this, t), this;
  }
  add(t, e) {
    return e ? hl(this, t, e) : hl(this, this, t), this;
  }
  sub(t, e) {
    return e ? ul(this, t, e) : ul(this, this, t), this;
  }
  multiply(t) {
    return t.length ? qp(this, this, t) : Bs(this, this, t), this;
  }
  divide(t) {
    return t.length ? Wp(this, this, t) : Bs(this, this, 1 / t), this;
  }
  inverse(t = this) {
    return Zp(this, t), this;
  }
  // Can't use 'length' as Array.prototype uses it
  len() {
    return cl(this);
  }
  distance(t) {
    return t ? jp(this, t) : cl(this);
  }
  squaredLen() {
    return this.squaredDistance();
  }
  squaredDistance(t) {
    return t ? Hp(this, t) : Qp(this);
  }
  negate(t = this) {
    return Kp(this, t), this;
  }
  cross(t, e) {
    return e ? dl(t, e) : dl(this, t);
  }
  scale(t) {
    return Bs(this, this, t), this;
  }
  normalize() {
    return $p(this, this), this;
  }
  dot(t) {
    return Jp(this, t);
  }
  equals(t) {
    return n0(this, t);
  }
  applyMatrix3(t) {
    return r0(this, this, t), this;
  }
  applyMatrix4(t) {
    return i0(this, this, t), this;
  }
  lerp(t, e) {
    return t0(this, this, t, e), this;
  }
  smoothLerp(t, e, i) {
    return e0(this, this, t, e, i), this;
  }
  clone() {
    return new $i(this[0], this[1]);
  }
  fromArray(t, e = 0) {
    return this[0] = t[e], this[1] = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this[0], t[e + 1] = this[1], t;
  }
}
class s0 extends Fd {
  constructor(t, { attributes: e = {} } = {}) {
    Object.assign(e, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
    }), super(t, e);
  }
}
function Xe(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Yf(r, t) {
  r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.__proto__ = t;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ee = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, sn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Wa, Et, nt, ce = 1e8, et = 1 / ce, ma = Math.PI * 2, a0 = ma / 4, o0 = 0, Gf = Math.sqrt, l0 = Math.cos, f0 = Math.sin, wt = function(t) {
  return typeof t == "string";
}, ft = function(t) {
  return typeof t == "function";
}, Ze = function(t) {
  return typeof t == "number";
}, ja = function(t) {
  return typeof t > "u";
}, Ue = function(t) {
  return typeof t == "object";
}, Bt = function(t) {
  return t !== !1;
}, Ha = function() {
  return typeof window < "u";
}, Dn = function(t) {
  return ft(t) || wt(t);
}, Xf = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ct = Array.isArray, h0 = /random\([^)]+\)/g, u0 = /,\s*/g, pl = /(?:-?\.?\d|\.)+/gi, qf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ci = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Us = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Wf = /[+-]=-?[.\d]+/, c0 = /[^,'"\[\]\s]+/gi, d0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, at, Oe, va, Qa, re = {}, $n = {}, jf, Hf = function(t) {
  return ($n = Oi(t, re)) && Gt;
}, Ka = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, an = function(t, e) {
  return !e && console.warn(t);
}, Qf = function(t, e) {
  return t && (re[t] = e) && $n && ($n[t] = e) || re;
}, on = function() {
  return 0;
}, p0 = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Yn = {
  suppressEvents: !0,
  kill: !1
}, _0 = {
  suppressEvents: !0
}, Za = {}, dr = [], ba = {}, Kf, Zt = {}, Vs = {}, _l = 30, Gn = [], $a = "", Ja = function(t) {
  var e = t[0], i, n;
  if (Ue(e) || ft(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (n = Gn.length; n-- && !Gn[n].targetTest(e); )
      ;
    i = Gn[n];
  }
  for (n = t.length; n--; )
    t[n] && (t[n]._gsap || (t[n]._gsap = new vh(t[n], i))) || t.splice(n, 1);
  return t;
}, Vr = function(t) {
  return t._gsap || Ja(de(t))[0]._gsap;
}, Zf = function(t, e, i) {
  return (i = t[e]) && ft(i) ? t[e]() : ja(i) && t.getAttribute && t.getAttribute(e) || i;
}, Ut = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, ct = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, st = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, mi = function(t, e) {
  var i = e.charAt(0), n = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + n : i === "-" ? t - n : i === "*" ? t * n : t / n;
}, g0 = function(t, e) {
  for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; )
    ;
  return n < i;
}, Jn = function() {
  var t = dr.length, e = dr.slice(0), i, n;
  for (ba = {}, dr.length = 0, i = 0; i < t; i++)
    n = e[i], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, to = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, $f = function(t, e, i, n) {
  dr.length && !Et && Jn(), t.render(e, i, !!(Et && e < 0 && to(t))), dr.length && !Et && Jn();
}, Jf = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(c0).length < 2 ? e : wt(t) ? t.trim() : t;
}, th = function(t) {
  return t;
}, ie = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, m0 = function(t) {
  return function(e, i) {
    for (var n in i)
      n in e || n === "duration" && t || n === "ease" || (e[n] = i[n]);
  };
}, Oi = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, gl = function r(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = Ue(e[i]) ? r(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, ts = function(t, e) {
  var i = {}, n;
  for (n in t)
    n in e || (i[n] = t[n]);
  return i;
}, Ji = function(t) {
  var e = t.parent || at, i = t.keyframes ? m0(Ct(t.keyframes)) : ie;
  if (Bt(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, v0 = function(t, e) {
  for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, eh = function(t, e, i, n, s) {
  var a = t[n], o;
  if (s)
    for (o = e[s]; a && a[s] > o; )
      a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t, e;
}, _s = function(t, e, i, n) {
  i === void 0 && (i = "_first"), n === void 0 && (n = "_last");
  var s = e._prev, a = e._next;
  s ? s._next = a : t[i] === e && (t[i] = a), a ? a._prev = s : t[n] === e && (t[n] = s), e._next = e._prev = e.parent = null;
}, gr = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Yr = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, b0 = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, ya = function(t, e, i, n) {
  return t._startAt && (Et ? t._startAt.revert(Yn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n));
}, y0 = function r(t) {
  return !t || t._ts && r(t.parent);
}, ml = function(t) {
  return t._repeat ? Di(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Di = function(t, e) {
  var i = Math.floor(t = st(t / e));
  return t && i === t ? i - 1 : i;
}, es = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, gs = function(t) {
  return t._end = st(t._start + (t._tDur / Math.abs(t._ts || t._rts || et) || 0));
}, ms = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = st(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), gs(t), i._dirty || Yr(i, t)), t;
}, rh = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = es(t.rawTime(), e), (!e._dur || wn(0, e.totalDuration(), i) - e._tTime > et) && e.render(i, !0)), Yr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -et;
  }
}, Ie = function(t, e, i, n) {
  return e.parent && gr(e), e._start = st((Ze(i) ? i : i || t !== at ? oe(t, i, e) : t._time) + e._delay), e._end = st(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), eh(t, e, "_first", "_last", t._sort ? "_start" : 0), xa(e) || (t._recent = e), n || rh(t, e), t._ts < 0 && ms(t, t._tTime), t;
}, ih = function(t, e) {
  return (re.ScrollTrigger || Ka("scrollTrigger", e)) && re.ScrollTrigger.create(e, t);
}, nh = function(t, e, i, n, s) {
  if (ro(t, e, s), !t._initted)
    return 1;
  if (!i && t._pt && !Et && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Kf !== $t.frame)
    return dr.push(t), t._lazy = [s, n], 1;
}, x0 = function r(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || r(e));
}, xa = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, w0 = function(t, e, i, n) {
  var s = t.ratio, a = e < 0 || !e && (!t._start && x0(t) && !(!t._initted && xa(t)) || (t._ts < 0 || t._dp._ts < 0) && !xa(t)) ? 0 : 1, o = t._rDelay, l = 0, f, h, u;
  if (o && t._repeat && (l = wn(0, t._tDur, e), h = Di(l, o), t._yoyo && h & 1 && (a = 1 - a), h !== Di(t._tTime, o) && (s = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== s || Et || n || t._zTime === et || !e && t._zTime) {
    if (!t._initted && nh(t, e, n, i, l))
      return;
    for (u = t._zTime, t._zTime = e || (i ? et : 0), i || (i = e && !u), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = l, f = t._pt; f; )
      f.r(a, f.d), f = f._next;
    e < 0 && ya(t, e, i, !0), t._onUpdate && !i && Jt(t, "onUpdate"), l && t._repeat && !i && t.parent && Jt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && gr(t, 1), !i && !Et && (Jt(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, A0 = function(t, e, i) {
  var n;
  if (i > e)
    for (n = t._first; n && n._start <= i; ) {
      if (n.data === "isPause" && n._start > e)
        return n;
      n = n._next;
    }
  else
    for (n = t._last; n && n._start >= i; ) {
      if (n.data === "isPause" && n._start < e)
        return n;
      n = n._prev;
    }
}, Fi = function(t, e, i, n) {
  var s = t._repeat, a = st(e) || 0, o = t._tTime / t._tDur;
  return o && !n && (t._time *= a / t._dur), t._dur = a, t._tDur = s ? s < 0 ? 1e10 : st(a * (s + 1) + t._rDelay * s) : a, o > 0 && !n && ms(t, t._tTime = t._tDur * o), t.parent && gs(t), i || Yr(t.parent, t), t;
}, vl = function(t) {
  return t instanceof Nt ? Yr(t) : Fi(t, t._dur);
}, T0 = {
  _start: 0,
  endTime: on,
  totalDuration: on
}, oe = function r(t, e, i) {
  var n = t.labels, s = t._recent || T0, a = t.duration() >= ce ? s.endTime(!1) : t._dur, o, l, f;
  return wt(e) && (isNaN(e) || e in n) ? (l = e.charAt(0), f = e.substr(-1) === "%", o = e.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (o < 0 ? s : i).totalDuration() / 100 : 1)) : o < 0 ? (e in n || (n[e] = a), n[e]) : (l = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), f && i && (l = l / 100 * (Ct(i) ? i[0] : i).totalDuration()), o > 1 ? r(t, e.substr(0, o - 1), i) + l : a + l)) : e == null ? a : +e;
}, tn = function(t, e, i) {
  var n = Ze(e[1]), s = (n ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s], o, l;
  if (n && (a.duration = e[1]), a.parent = i, t) {
    for (o = a, l = i; l && !("immediateRender" in o); )
      o = l.vars.defaults || {}, l = Bt(l.vars.inherit) && l.parent;
    a.immediateRender = Bt(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1];
  }
  return new gt(e[0], a, e[s + 1]);
}, br = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, wn = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, St = function(t, e) {
  return !wt(t) || !(e = d0.exec(t)) ? "" : e[1];
}, k0 = function(t, e, i) {
  return br(i, function(n) {
    return wn(t, e, n);
  });
}, wa = [].slice, sh = function(t, e) {
  return t && Ue(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Ue(t[0])) && !t.nodeType && t !== Oe;
}, E0 = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(n) {
    var s;
    return wt(n) && !e || sh(n, 1) ? (s = i).push.apply(s, de(n)) : i.push(n);
  }) || i;
}, de = function(t, e, i) {
  return nt && !e && nt.selector ? nt.selector(t) : wt(t) && !i && (va || !zi()) ? wa.call((e || Qa).querySelectorAll(t), 0) : Ct(t) ? E0(t, i) : sh(t) ? wa.call(t, 0) : t ? [t] : [];
}, Aa = function(t) {
  return t = de(t)[0] || an("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return de(e, i.querySelectorAll ? i : i === t ? an("Invalid scope") || Qa.createElement("div") : t);
  };
}, ah = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, oh = function(t) {
  if (ft(t))
    return t;
  var e = Ue(t) ? t : {
    each: t
  }, i = Gr(e.ease), n = e.from || 0, s = parseFloat(e.base) || 0, a = {}, o = n > 0 && n < 1, l = isNaN(n) || o, f = e.axis, h = n, u = n;
  return wt(n) ? h = u = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !o && l && (h = n[0], u = n[1]), function(c, p, _) {
    var d = (_ || e).length, g = a[d], m, b, y, v, x, k, T, w, E;
    if (!g) {
      if (E = e.grid === "auto" ? 0 : (e.grid || [1, ce])[1], !E) {
        for (T = -ce; T < (T = _[E++].getBoundingClientRect().left) && E < d; )
          ;
        E < d && E--;
      }
      for (g = a[d] = [], m = l ? Math.min(E, d) * h - 0.5 : n % E, b = E === ce ? 0 : l ? d * u / E - 0.5 : n / E | 0, T = 0, w = ce, k = 0; k < d; k++)
        y = k % E - m, v = b - (k / E | 0), g[k] = x = f ? Math.abs(f === "y" ? v : y) : Gf(y * y + v * v), x > T && (T = x), x < w && (w = x);
      n === "random" && ah(g), g.max = T - w, g.min = w, g.v = d = (parseFloat(e.amount) || parseFloat(e.each) * (E > d ? d - 1 : f ? f === "y" ? d / E : E : Math.max(E, d / E)) || 0) * (n === "edges" ? -1 : 1), g.b = d < 0 ? s - d : s, g.u = St(e.amount || e.each) || 0, i = i && d < 0 ? B0(i) : i;
    }
    return d = (g[c] - g.min) / g.max || 0, st(g.b + (i ? i(d) : d) * g.v) + g.u;
  };
}, Ta = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var n = st(Math.round(parseFloat(i) / t) * t * e);
    return (n - n % 1) / e + (Ze(i) ? 0 : St(i));
  };
}, lh = function(t, e) {
  var i = Ct(t), n, s;
  return !i && Ue(t) && (n = i = t.radius || ce, t.values ? (t = de(t.values), (s = !Ze(t[0])) && (n *= n)) : t = Ta(t.increment)), br(e, i ? ft(t) ? function(a) {
    return s = t(a), Math.abs(s - a) <= n ? s : a;
  } : function(a) {
    for (var o = parseFloat(s ? a.x : a), l = parseFloat(s ? a.y : 0), f = ce, h = 0, u = t.length, c, p; u--; )
      s ? (c = t[u].x - o, p = t[u].y - l, c = c * c + p * p) : c = Math.abs(t[u] - o), c < f && (f = c, h = u);
    return h = !n || f <= n ? t[h] : a, s || h === a || Ze(a) ? h : h + St(a);
  } : Ta(t));
}, fh = function(t, e, i, n) {
  return br(Ct(t) ? !e : i === !0 ? !!(i = 0) : !n, function() {
    return Ct(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * n) / n;
  });
}, M0 = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(n) {
    return e.reduce(function(s, a) {
      return a(s);
    }, n);
  };
}, S0 = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || St(i));
  };
}, C0 = function(t, e, i) {
  return uh(t, e, 0, 1, i);
}, hh = function(t, e, i) {
  return br(i, function(n) {
    return t[~~e(n)];
  });
}, P0 = function r(t, e, i) {
  var n = e - t;
  return Ct(t) ? hh(t, r(0, t.length), e) : br(i, function(s) {
    return (n + (s - t) % n) % n + t;
  });
}, R0 = function r(t, e, i) {
  var n = e - t, s = n * 2;
  return Ct(t) ? hh(t, r(0, t.length - 1), e) : br(i, function(a) {
    return a = (s + (a - t) % s) % s || 0, t + (a > n ? s - a : a);
  });
}, ln = function(t) {
  return t.replace(h0, function(e) {
    var i = e.indexOf("[") + 1, n = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(u0);
    return fh(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5);
  });
}, uh = function(t, e, i, n, s) {
  var a = e - t, o = n - i;
  return br(s, function(l) {
    return i + ((l - t) / a * o || 0);
  });
}, O0 = function r(t, e, i, n) {
  var s = isNaN(t + e) ? 0 : function(p) {
    return (1 - p) * t + p * e;
  };
  if (!s) {
    var a = wt(t), o = {}, l, f, h, u, c;
    if (i === !0 && (n = 1) && (i = null), a)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Ct(t) && !Ct(e)) {
      for (h = [], u = t.length, c = u - 2, f = 1; f < u; f++)
        h.push(r(t[f - 1], t[f]));
      u--, s = function(_) {
        _ *= u;
        var d = Math.min(c, ~~_);
        return h[d](_ - d);
      }, i = e;
    } else n || (t = Oi(Ct(t) ? [] : {}, t));
    if (!h) {
      for (l in e)
        eo.call(o, t, l, "get", e[l]);
      s = function(_) {
        return so(_, o) || (a ? t.p : t);
      };
    }
  }
  return br(i, s);
}, bl = function(t, e, i) {
  var n = t.labels, s = ce, a, o, l;
  for (a in n)
    o = n[a] - e, o < 0 == !!i && o && s > (o = Math.abs(o)) && (l = a, s = o);
  return l;
}, Jt = function(t, e, i) {
  var n = t.vars, s = n[e], a = nt, o = t._ctx, l, f, h;
  if (s)
    return l = n[e + "Params"], f = n.callbackScope || t, i && dr.length && Jn(), o && (nt = o), h = l ? s.apply(f, l) : s.call(f), nt = a, h;
}, ji = function(t) {
  return gr(t), t.scrollTrigger && t.scrollTrigger.kill(!!Et), t.progress() < 1 && Jt(t, "onInterrupt"), t;
}, di, ch = [], dh = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Ha() || t.headless) {
      var e = t.name, i = ft(t), n = e && !i && t.init ? function() {
        this._props = [];
      } : t, s = {
        init: on,
        render: so,
        add: eo,
        kill: Q0,
        modifier: H0,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: no,
        aliases: {},
        register: 0
      };
      if (zi(), t !== n) {
        if (Zt[e])
          return;
        ie(n, ie(ts(t, s), a)), Oi(n.prototype, Oi(s, ts(t, a))), Zt[n.prop = e] = n, t.targetTest && (Gn.push(n), Za[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Qf(e, n), t.register && t.register(Gt, n, Vt);
    } else
      ch.push(t);
}, tt = 255, Hi = {
  aqua: [0, tt, tt],
  lime: [0, tt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, tt],
  navy: [0, 0, 128],
  white: [tt, tt, tt],
  olive: [128, 128, 0],
  yellow: [tt, tt, 0],
  orange: [tt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [tt, 0, 0],
  pink: [tt, 192, 203],
  cyan: [0, tt, tt],
  transparent: [tt, tt, tt, 0]
}, Ys = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * tt + 0.5 | 0;
}, ph = function(t, e, i) {
  var n = t ? Ze(t) ? [t >> 16, t >> 8 & tt, t & tt] : 0 : Hi.black, s, a, o, l, f, h, u, c, p, _;
  if (!n) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Hi[t])
      n = Hi[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + s + s + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return n = parseInt(t.substr(1, 6), 16), [n >> 16, n >> 8 & tt, n & tt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), n = [t >> 16, t >> 8 & tt, t & tt];
    } else if (t.substr(0, 3) === "hsl") {
      if (n = _ = t.match(pl), !e)
        l = +n[0] % 360 / 360, f = +n[1] / 100, h = +n[2] / 100, a = h <= 0.5 ? h * (f + 1) : h + f - h * f, s = h * 2 - a, n.length > 3 && (n[3] *= 1), n[0] = Ys(l + 1 / 3, s, a), n[1] = Ys(l, s, a), n[2] = Ys(l - 1 / 3, s, a);
      else if (~t.indexOf("="))
        return n = t.match(qf), i && n.length < 4 && (n[3] = 1), n;
    } else
      n = t.match(pl) || Hi.transparent;
    n = n.map(Number);
  }
  return e && !_ && (s = n[0] / tt, a = n[1] / tt, o = n[2] / tt, u = Math.max(s, a, o), c = Math.min(s, a, o), h = (u + c) / 2, u === c ? l = f = 0 : (p = u - c, f = h > 0.5 ? p / (2 - u - c) : p / (u + c), l = u === s ? (a - o) / p + (a < o ? 6 : 0) : u === a ? (o - s) / p + 2 : (s - a) / p + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(f * 100 + 0.5), n[2] = ~~(h * 100 + 0.5)), i && n.length < 4 && (n[3] = 1), n;
}, _h = function(t) {
  var e = [], i = [], n = -1;
  return t.split(pr).forEach(function(s) {
    var a = s.match(ci) || [];
    e.push.apply(e, a), i.push(n += a.length + 1);
  }), e.c = i, e;
}, yl = function(t, e, i) {
  var n = "", s = (t + n).match(pr), a = e ? "hsla(" : "rgba(", o = 0, l, f, h, u;
  if (!s)
    return t;
  if (s = s.map(function(c) {
    return (c = ph(c, e, 1)) && a + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (h = _h(t), l = i.c, l.join(n) !== h.c.join(n)))
    for (f = t.replace(pr, "1").split(ci), u = f.length - 1; o < u; o++)
      n += f[o] + (~l.indexOf(o) ? s.shift() || a + "0,0,0,0)" : (h.length ? h : s.length ? s : i).shift());
  if (!f)
    for (f = t.split(pr), u = f.length - 1; o < u; o++)
      n += f[o] + s[o];
  return n + f[u];
}, pr = (function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Hi)
    r += "|" + t + "\\b";
  return new RegExp(r + ")", "gi");
})(), D0 = /hsl[a]?\(/, gh = function(t) {
  var e = t.join(" "), i;
  if (pr.lastIndex = 0, pr.test(e))
    return i = D0.test(e), t[1] = yl(t[1], i), t[0] = yl(t[0], i, _h(t[1])), !0;
}, fn, $t = (function() {
  var r = Date.now, t = 500, e = 33, i = r(), n = i, s = 1e3 / 240, a = s, o = [], l, f, h, u, c, p, _ = function d(g) {
    var m = r() - n, b = g === !0, y, v, x, k;
    if ((m > t || m < 0) && (i += m - e), n += m, x = n - i, y = x - a, (y > 0 || b) && (k = ++u.frame, c = x - u.time * 1e3, u.time = x = x / 1e3, a += y + (y >= s ? 4 : s - y), v = 1), b || (l = f(d)), v)
      for (p = 0; p < o.length; p++)
        o[p](x, c, k, g);
  };
  return u = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(g) {
      return c / (1e3 / (g || 60));
    },
    wake: function() {
      jf && (!va && Ha() && (Oe = va = window, Qa = Oe.document || {}, re.gsap = Gt, (Oe.gsapVersions || (Oe.gsapVersions = [])).push(Gt.version), Hf($n || Oe.GreenSockGlobals || !Oe.gsap && Oe || {}), ch.forEach(dh)), h = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && u.sleep(), f = h || function(g) {
        return setTimeout(g, a - u.time * 1e3 + 1 | 0);
      }, fn = 1, _(2));
    },
    sleep: function() {
      (h ? cancelAnimationFrame : clearTimeout)(l), fn = 0, f = on;
    },
    lagSmoothing: function(g, m) {
      t = g || 1 / 0, e = Math.min(m || 33, t);
    },
    fps: function(g) {
      s = 1e3 / (g || 240), a = u.time * 1e3 + s;
    },
    add: function(g, m, b) {
      var y = m ? function(v, x, k, T) {
        g(v, x, k, T), u.remove(y);
      } : g;
      return u.remove(g), o[b ? "unshift" : "push"](y), zi(), y;
    },
    remove: function(g, m) {
      ~(m = o.indexOf(g)) && o.splice(m, 1) && p >= m && p--;
    },
    _listeners: o
  }, u;
})(), zi = function() {
  return !fn && $t.wake();
}, j = {}, F0 = /^[\d.\-M][\d.\-,\s]/, z0 = /["']/g, I0 = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), n = i[0], s = 1, a = i.length, o, l, f; s < a; s++)
    l = i[s], o = s !== a - 1 ? l.lastIndexOf(",") : l.length, f = l.substr(0, o), e[n] = isNaN(f) ? f.replace(z0, "").trim() : +f, n = l.substr(o + 1).trim();
  return e;
}, L0 = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), n = t.indexOf("(", e);
  return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i);
}, N0 = function(t) {
  var e = (t + "").split("("), i = j[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [I0(e[1])] : L0(t).split(",").map(Jf)) : j._CE && F0.test(t) ? j._CE("", t) : i;
}, B0 = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Gr = function(t, e) {
  return t && (ft(t) ? t : j[t] || N0(t)) || e;
}, Kr = function(t, e, i, n) {
  i === void 0 && (i = function(l) {
    return 1 - e(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: e,
    easeOut: i,
    easeInOut: n
  }, a;
  return Ut(t, function(o) {
    j[o] = re[o] = s, j[a = o.toLowerCase()] = i;
    for (var l in s)
      j[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = j[o + "." + l] = s[l];
  }), s;
}, mh = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Gs = function r(t, e, i) {
  var n = e >= 1 ? e : 1, s = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = s / ma * (Math.asin(1 / n) || 0), o = function(h) {
    return h === 1 ? 1 : n * Math.pow(2, -10 * h) * f0((h - a) * s) + 1;
  }, l = t === "out" ? o : t === "in" ? function(f) {
    return 1 - o(1 - f);
  } : mh(o);
  return s = ma / s, l.config = function(f, h) {
    return r(t, f, h);
  }, l;
}, Xs = function r(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, n = t === "out" ? i : t === "in" ? function(s) {
    return 1 - i(1 - s);
  } : mh(i);
  return n.config = function(s) {
    return r(t, s);
  }, n;
};
Ut("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, t) {
  var e = t < 5 ? t + 1 : t;
  Kr(r + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
j.Linear.easeNone = j.none = j.Linear.easeIn;
Kr("Elastic", Gs("in"), Gs("out"), Gs());
(function(r, t) {
  var e = 1 / t, i = 2 * e, n = 2.5 * e, s = function(o) {
    return o < e ? r * o * o : o < i ? r * Math.pow(o - 1.5 / t, 2) + 0.75 : o < n ? r * (o -= 2.25 / t) * o + 0.9375 : r * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  Kr("Bounce", function(a) {
    return 1 - s(1 - a);
  }, s);
})(7.5625, 2.75);
Kr("Expo", function(r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
Kr("Circ", function(r) {
  return -(Gf(1 - r * r) - 1);
});
Kr("Sine", function(r) {
  return r === 1 ? 1 : -l0(r * a0) + 1;
});
Kr("Back", Xs("in"), Xs("out"), Xs());
j.SteppedEase = j.steps = re.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, n = t + (e ? 0 : 1), s = e ? 1 : 0, a = 1 - et;
    return function(o) {
      return ((n * wn(0, a, o) | 0) + s) * i;
    };
  }
};
sn.ease = j["quad.out"];
Ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return $a += r + "," + r + "Params,";
});
var vh = function(t, e) {
  this.id = o0++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Zf, this.set = e ? e.getSetter : no;
}, hn = /* @__PURE__ */ (function() {
  function r(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Fi(this, +e.duration, 1, 1), this.data = e.data, nt && (this._ctx = nt, nt.data.push(this)), fn || $t.wake();
  }
  var t = r.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Fi(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, n) {
    if (zi(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (ms(this, i), !s._dp || s.parent || rh(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Ie(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === et || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), $f(this, i, n)), this;
  }, t.time = function(i, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + ml(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time;
  }, t.totalProgress = function(i, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + ml(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * s, n) : this._repeat ? Di(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(i, n) {
    if (!arguments.length)
      return this._rts === -et ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var s = this.parent && this._ts ? es(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -et ? 0 : this._rts, this.totalTime(wn(-Math.abs(this._delay), this.totalDuration(), s), n !== !1), gs(this), b0(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== et && (this._tTime -= et)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = st(i);
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && Ie(n, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Bt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var n = this.parent || this._dp;
    return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? es(n.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = _0);
    var n = Et;
    return Et = i, to(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), Et = n, this;
  }, t.globalTime = function(i) {
    for (var n = this, s = arguments.length ? i : n.rawTime(); n; )
      s = n._start + s / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : s;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, vl(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = i, vl(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, n) {
    return this.totalTime(oe(this, i), Bt(n));
  }, t.restart = function(i, n) {
    return this.play().totalTime(i ? -this._delay : 0, Bt(n)), this._dur || (this._zTime = -et), this;
  }, t.play = function(i, n) {
    return i != null && this.seek(i, n), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, n) {
    return i != null && this.seek(i || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, t.pause = function(i, n) {
    return i != null && this.seek(i, n), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -et : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -et, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, n = this._start, s;
    return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= n && s < this.endTime(!0) - et);
  }, t.eventCallback = function(i, n, s) {
    var a = this.vars;
    return arguments.length > 1 ? (n ? (a[i] = n, s && (a[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = n)) : delete a[i], this) : a[i];
  }, t.then = function(i) {
    var n = this, s = n._prom;
    return new Promise(function(a) {
      var o = ft(i) ? i : th, l = function() {
        var h = n.then;
        n.then = null, s && s(), ft(o) && (o = o(n)) && (o.then || o === n) && (n.then = h), a(o), n.then = h;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? l() : n._prom = l;
    });
  }, t.kill = function() {
    ji(this);
  }, r;
})();
ie(hn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -et,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Nt = /* @__PURE__ */ (function(r) {
  Yf(t, r);
  function t(i, n) {
    var s;
    return i === void 0 && (i = {}), s = r.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = Bt(i.sortChildren), at && Ie(i.parent || at, Xe(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && ih(Xe(s), i.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(n, s, a) {
    return tn(0, arguments, this), this;
  }, e.from = function(n, s, a) {
    return tn(1, arguments, this), this;
  }, e.fromTo = function(n, s, a, o) {
    return tn(2, arguments, this), this;
  }, e.set = function(n, s, a) {
    return s.duration = 0, s.parent = this, Ji(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new gt(n, s, oe(this, a), 1), this;
  }, e.call = function(n, s, a) {
    return Ie(this, gt.delayedCall(0, n, s), a);
  }, e.staggerTo = function(n, s, a, o, l, f, h) {
    return a.duration = s, a.stagger = a.stagger || o, a.onComplete = f, a.onCompleteParams = h, a.parent = this, new gt(n, a, oe(this, l)), this;
  }, e.staggerFrom = function(n, s, a, o, l, f, h) {
    return a.runBackwards = 1, Ji(a).immediateRender = Bt(a.immediateRender), this.staggerTo(n, s, a, o, l, f, h);
  }, e.staggerFromTo = function(n, s, a, o, l, f, h, u) {
    return o.startAt = a, Ji(o).immediateRender = Bt(o.immediateRender), this.staggerTo(n, s, o, l, f, h, u);
  }, e.render = function(n, s, a) {
    var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, h = n <= 0 ? 0 : st(n), u = this._zTime < 0 != n < 0 && (this._initted || !f), c, p, _, d, g, m, b, y, v, x, k, T;
    if (this !== at && h > l && n >= 0 && (h = l), h !== this._tTime || a || u) {
      if (o !== this._time && f && (h += this._time - o, n += this._time - o), c = h, v = this._start, y = this._ts, m = !y, u && (f || (o = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (k = this._yoyo, g = f + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(g * 100 + n, s, a);
        if (c = st(h % g), h === l ? (d = this._repeat, c = f) : (x = st(h / g), d = ~~x, d && d === x && (c = f, d--), c > f && (c = f)), x = Di(this._tTime, g), !o && this._tTime && x !== d && this._tTime - x * g - this._dur <= 0 && (x = d), k && d & 1 && (c = f - c, T = 1), d !== x && !this._lock) {
          var w = k && x & 1, E = w === (k && d & 1);
          if (d < x && (w = !w), o = w ? 0 : h % f ? f : h, this._lock = 1, this.render(o || (T ? 0 : st(d * g)), s, !f)._lock = 0, this._tTime = h, !s && this.parent && Jt(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1, x = d), o && o !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, l = this._tDur, E && (this._lock = 2, o = w ? f : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (b = A0(this, st(o), st(c)), b && (h -= c - (c = b._start))), this._tTime = h, this._time = c, this._act = !!y, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, o = 0), !o && h && f && !s && !x && (Jt(this, "onStart"), this._tTime !== h))
        return this;
      if (c >= o && n >= 0)
        for (p = this._first; p; ) {
          if (_ = p._next, (p._act || c >= p._start) && p._ts && b !== p) {
            if (p.parent !== this)
              return this.render(n, s, a);
            if (p.render(p._ts > 0 ? (c - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (c - p._start) * p._ts, s, a), c !== this._time || !this._ts && !m) {
              b = 0, _ && (h += this._zTime = -et);
              break;
            }
          }
          p = _;
        }
      else {
        p = this._last;
        for (var M = n < 0 ? n : c; p; ) {
          if (_ = p._prev, (p._act || M <= p._end) && p._ts && b !== p) {
            if (p.parent !== this)
              return this.render(n, s, a);
            if (p.render(p._ts > 0 ? (M - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (M - p._start) * p._ts, s, a || Et && to(p)), c !== this._time || !this._ts && !m) {
              b = 0, _ && (h += this._zTime = M ? -et : et);
              break;
            }
          }
          p = _;
        }
      }
      if (b && !s && (this.pause(), b.render(c >= o ? 0 : -et)._zTime = c >= o ? 1 : -1, this._ts))
        return this._start = v, gs(this), this.render(n, s, a);
      this._onUpdate && !s && Jt(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && o) && (v === this._start || Math.abs(y) !== Math.abs(this._ts)) && (this._lock || ((n || !f) && (h === l && this._ts > 0 || !h && this._ts < 0) && gr(this, 1), !s && !(n < 0 && !o) && (h || o || !l) && (Jt(this, h === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(n, s) {
    var a = this;
    if (Ze(s) || (s = oe(this, s, n)), !(n instanceof hn)) {
      if (Ct(n))
        return n.forEach(function(o) {
          return a.add(o, s);
        }), this;
      if (wt(n))
        return this.addLabel(n, s);
      if (ft(n))
        n = gt.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? Ie(this, n, s) : this;
  }, e.getChildren = function(n, s, a, o) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = !0), o === void 0 && (o = -ce);
    for (var l = [], f = this._first; f; )
      f._start >= o && (f instanceof gt ? s && l.push(f) : (a && l.push(f), n && l.push.apply(l, f.getChildren(!0, s, a)))), f = f._next;
    return l;
  }, e.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
      if (s[a].vars.id === n)
        return s[a];
  }, e.remove = function(n) {
    return wt(n) ? this.removeLabel(n) : ft(n) ? this.killTweensOf(n) : (n.parent === this && _s(this, n), n === this._recent && (this._recent = this._last), Yr(this));
  }, e.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = st($t.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), r.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(n, s) {
    return this.labels[n] = oe(this, s), this;
  }, e.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, e.addPause = function(n, s, a) {
    var o = gt.delayedCall(0, s || on, a);
    return o.data = "isPause", this._hasPause = 1, Ie(this, o, oe(this, n));
  }, e.removePause = function(n) {
    var s = this._first;
    for (n = oe(this, n); s; )
      s._start === n && s.data === "isPause" && gr(s), s = s._next;
  }, e.killTweensOf = function(n, s, a) {
    for (var o = this.getTweensOf(n, a), l = o.length; l--; )
      ar !== o[l] && o[l].kill(n, s);
    return this;
  }, e.getTweensOf = function(n, s) {
    for (var a = [], o = de(n), l = this._first, f = Ze(s), h; l; )
      l instanceof gt ? g0(l._targets, o) && (f ? (!ar || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && a.push(l) : (h = l.getTweensOf(o, s)).length && a.push.apply(a, h), l = l._next;
    return a;
  }, e.tweenTo = function(n, s) {
    s = s || {};
    var a = this, o = oe(a, n), l = s, f = l.startAt, h = l.onStart, u = l.onStartParams, c = l.immediateRender, p, _ = gt.to(a, ie({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: s.duration || Math.abs((o - (f && "time" in f ? f.time : a._time)) / a.timeScale()) || et,
      onStart: function() {
        if (a.pause(), !p) {
          var g = s.duration || Math.abs((o - (f && "time" in f ? f.time : a._time)) / a.timeScale());
          _._dur !== g && Fi(_, g, 0, 1).render(_._time, !0, !0), p = 1;
        }
        h && h.apply(_, u || []);
      }
    }, s));
    return c ? _.render(0) : _;
  }, e.tweenFromTo = function(n, s, a) {
    return this.tweenTo(s, ie({
      startAt: {
        time: oe(this, n)
      }
    }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(n) {
    return n === void 0 && (n = this._time), bl(this, oe(this, n));
  }, e.previousLabel = function(n) {
    return n === void 0 && (n = this._time), bl(this, oe(this, n), 1);
  }, e.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + et);
  }, e.shiftChildren = function(n, s, a) {
    a === void 0 && (a = 0);
    var o = this._first, l = this.labels, f;
    for (n = st(n); o; )
      o._start >= a && (o._start += n, o._end += n), o = o._next;
    if (s)
      for (f in l)
        l[f] >= a && (l[f] += n);
    return Yr(this);
  }, e.invalidate = function(n) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(n), s = s._next;
    return r.prototype.invalidate.call(this, n);
  }, e.clear = function(n) {
    n === void 0 && (n = !0);
    for (var s = this._first, a; s; )
      a = s._next, this.remove(s), s = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), Yr(this);
  }, e.totalDuration = function(n) {
    var s = 0, a = this, o = a._last, l = ce, f, h, u;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -n : n));
    if (a._dirty) {
      for (u = a.parent; o; )
        f = o._prev, o._dirty && o.totalDuration(), h = o._start, h > l && a._sort && o._ts && !a._lock ? (a._lock = 1, Ie(a, o, h - o._delay, 1)._lock = 0) : l = h, h < 0 && o._ts && (s -= h, (!u && !a._dp || u && u.smoothChildTiming) && (a._start += st(h / a._ts), a._time -= h, a._tTime -= h), a.shiftChildren(-h, !1, -1 / 0), l = 0), o._end > s && o._ts && (s = o._end), o = f;
      Fi(a, a === at && a._time > s ? a._time : s, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(n) {
    if (at._ts && ($f(at, es(n, at)), Kf = $t.frame), $t.frame >= _l) {
      _l += ee.autoSleep || 120;
      var s = at._first;
      if ((!s || !s._ts) && ee.autoSleep && $t._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || $t.sleep();
      }
    }
  }, t;
})(hn);
ie(Nt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var U0 = function(t, e, i, n, s, a, o) {
  var l = new Vt(this._pt, t, e, 0, 1, Th, null, s), f = 0, h = 0, u, c, p, _, d, g, m, b;
  for (l.b = i, l.e = n, i += "", n += "", (m = ~n.indexOf("random(")) && (n = ln(n)), a && (b = [i, n], a(b, t, e), i = b[0], n = b[1]), c = i.match(Us) || []; u = Us.exec(n); )
    _ = u[0], d = n.substring(f, u.index), p ? p = (p + 1) % 5 : d.substr(-5) === "rgba(" && (p = 1), _ !== c[h++] && (g = parseFloat(c[h - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || h === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? mi(g, _) - g : parseFloat(_) - g,
      m: p && p < 4 ? Math.round : 0
    }, f = Us.lastIndex);
  return l.c = f < n.length ? n.substring(f, n.length) : "", l.fp = o, (Wf.test(n) || m) && (l.e = 0), this._pt = l, l;
}, eo = function(t, e, i, n, s, a, o, l, f, h) {
  ft(n) && (n = n(s || 0, t, a));
  var u = t[e], c = i !== "get" ? i : ft(u) ? f ? t[e.indexOf("set") || !ft(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : u, p = ft(u) ? f ? q0 : wh : io, _;
  if (wt(n) && (~n.indexOf("random(") && (n = ln(n)), n.charAt(1) === "=" && (_ = mi(c, n) + (St(c) || 0), (_ || _ === 0) && (n = _))), !h || c !== n || ka)
    return !isNaN(c * n) && n !== "" ? (_ = new Vt(this._pt, t, e, +c || 0, n - (c || 0), typeof u == "boolean" ? j0 : Ah, 0, p), f && (_.fp = f), o && _.modifier(o, this, t), this._pt = _) : (!u && !(e in t) && Ka(e, n), U0.call(this, t, e, c, n, p, l || ee.stringFilter, f));
}, V0 = function(t, e, i, n, s) {
  if (ft(t) && (t = en(t, s, e, i, n)), !Ue(t) || t.style && t.nodeType || Ct(t) || Xf(t))
    return wt(t) ? en(t, s, e, i, n) : t;
  var a = {}, o;
  for (o in t)
    a[o] = en(t[o], s, e, i, n);
  return a;
}, bh = function(t, e, i, n, s, a) {
  var o, l, f, h;
  if (Zt[t] && (o = new Zt[t]()).init(s, o.rawVars ? e[t] : V0(e[t], n, s, a, i), i, n, a) !== !1 && (i._pt = l = new Vt(i._pt, s, t, 0, 1, o.render, o, 0, o.priority), i !== di))
    for (f = i._ptLookup[i._targets.indexOf(s)], h = o._props.length; h--; )
      f[o._props[h]] = l;
  return o;
}, ar, ka, ro = function r(t, e, i) {
  var n = t.vars, s = n.ease, a = n.startAt, o = n.immediateRender, l = n.lazy, f = n.onUpdate, h = n.runBackwards, u = n.yoyoEase, c = n.keyframes, p = n.autoRevert, _ = t._dur, d = t._startAt, g = t._targets, m = t.parent, b = m && m.data === "nested" ? m.vars.targets : g, y = t._overwrite === "auto" && !Wa, v = t.timeline, x = n.easeReverse || u, k, T, w, E, M, z, F, I, S, Y, X, Q, mt;
  if (v && (!c || !s) && (s = "none"), t._ease = Gr(s, sn.ease), t._rEase = x && (Gr(x) || t._ease), t._from = !v && !!n.runBackwards, t._from && (t.ratio = 1), !v || c && !n.stagger) {
    if (I = g[0] ? Vr(g[0]).harness : 0, Q = I && n[I.prop], k = ts(n, Za), d && (d._zTime < 0 && d.progress(1), e < 0 && h && o && !p ? d.render(-1, !0) : d.revert(h && _ ? Yn : p0), d._lazy = 0), a) {
      if (gr(t._startAt = gt.set(g, ie({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !d && Bt(l),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return Jt(t, "onUpdate");
        },
        stagger: 0
      }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Et || !o && !p) && t._startAt.revert(Yn), o && _ && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (h && _ && !d) {
      if (e && (o = !1), w = ie({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !d && Bt(l),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, k), Q && (w[I.prop] = Q), gr(t._startAt = gt.set(g, w)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Et ? t._startAt.revert(Yn) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        r(t._startAt, et, et);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && Bt(l) || l && !_, T = 0; T < g.length; T++) {
      if (M = g[T], F = M._gsap || Ja(g)[T]._gsap, t._ptLookup[T] = Y = {}, ba[F.id] && dr.length && Jn(), X = b === g ? T : b.indexOf(M), I && (S = new I()).init(M, Q || k, t, X, b) !== !1 && (t._pt = E = new Vt(t._pt, M, S.name, 0, 1, S.render, S, 0, S.priority), S._props.forEach(function(Pt) {
        Y[Pt] = E;
      }), S.priority && (z = 1)), !I || Q)
        for (w in k)
          Zt[w] && (S = bh(w, k, t, X, M, b)) ? S.priority && (z = 1) : Y[w] = E = eo.call(t, M, w, "get", k[w], X, b, 0, n.stringFilter);
      t._op && t._op[T] && t.kill(M, t._op[T]), y && t._pt && (ar = t, at.killTweensOf(M, Y, t.globalTime(e)), mt = !t.parent, ar = 0), t._pt && l && (ba[F.id] = 1);
    }
    z && kh(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !mt, c && e <= 0 && v.render(ce, !0, !0);
}, Y0 = function(t, e, i, n, s, a, o, l) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], h, u, c, p;
  if (!f)
    for (f = t._ptCache[e] = [], c = t._ptLookup, p = t._targets.length; p--; ) {
      if (h = c[p][e], h && h.d && h.d._pt)
        for (h = h.d._pt; h && h.p !== e && h.fp !== e; )
          h = h._next;
      if (!h)
        return ka = 1, t.vars[e] = "+=0", ro(t, o), ka = 0, l ? an(e + " not eligible for reset. Try splitting into individual properties") : 1;
      f.push(h);
    }
  for (p = f.length; p--; )
    u = f[p], h = u._pt || u, h.s = (n || n === 0) && !s ? n : h.s + (n || 0) + a * h.c, h.c = i - h.s, u.e && (u.e = ct(i) + St(u.e)), u.b && (u.b = h.s + St(u.b));
}, G0 = function(t, e) {
  var i = t[0] ? Vr(t[0]).harness : 0, n = i && i.aliases, s, a, o, l;
  if (!n)
    return e;
  s = Oi({}, e);
  for (a in n)
    if (a in s)
      for (l = n[a].split(","), o = l.length; o--; )
        s[l[o]] = s[a];
  return s;
}, X0 = function(t, e, i, n) {
  var s = e.ease || n || "power1.inOut", a, o;
  if (Ct(e))
    o = i[t] || (i[t] = []), e.forEach(function(l, f) {
      return o.push({
        t: f / (e.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (a in e)
      o = i[a] || (i[a] = []), a === "ease" || o.push({
        t: parseFloat(t),
        v: e[a],
        e: s
      });
}, en = function(t, e, i, n, s) {
  return ft(t) ? t.call(e, i, n, s) : wt(t) && ~t.indexOf("random(") ? ln(t) : t;
}, yh = $a + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", xh = {};
Ut(yh + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return xh[r] = 1;
});
var gt = /* @__PURE__ */ (function(r) {
  Yf(t, r);
  function t(i, n, s, a) {
    var o;
    typeof n == "number" && (s.duration = n, n = s, s = null), o = r.call(this, a ? n : Ji(n)) || this;
    var l = o.vars, f = l.duration, h = l.delay, u = l.immediateRender, c = l.stagger, p = l.overwrite, _ = l.keyframes, d = l.defaults, g = l.scrollTrigger, m = n.parent || at, b = (Ct(i) || Xf(i) ? Ze(i[0]) : "length" in n) ? [i] : de(i), y, v, x, k, T, w, E, M;
    if (o._targets = b.length ? Ja(b) : an("GSAP target " + i + " not found. https://gsap.com", !ee.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = p, _ || c || Dn(f) || Dn(h)) {
      n = o.vars;
      var z = n.easeReverse || n.yoyoEase;
      if (y = o.timeline = new Nt({
        data: "nested",
        defaults: d || {},
        targets: m && m.data === "nested" ? m.vars.targets : b
      }), y.kill(), y.parent = y._dp = Xe(o), y._start = 0, c || Dn(f) || Dn(h)) {
        if (k = b.length, E = c && oh(c), Ue(c))
          for (T in c)
            ~yh.indexOf(T) && (M || (M = {}), M[T] = c[T]);
        for (v = 0; v < k; v++)
          x = ts(n, xh), x.stagger = 0, z && (x.easeReverse = z), M && Oi(x, M), w = b[v], x.duration = +en(f, Xe(o), v, w, b), x.delay = (+en(h, Xe(o), v, w, b) || 0) - o._delay, !c && k === 1 && x.delay && (o._delay = h = x.delay, o._start += h, x.delay = 0), y.to(w, x, E ? E(v, w, b) : 0), y._ease = j.none;
        y.duration() ? f = h = 0 : o.timeline = 0;
      } else if (_) {
        Ji(ie(y.vars.defaults, {
          ease: "none"
        })), y._ease = Gr(_.ease || n.ease || "none");
        var F = 0, I, S, Y;
        if (Ct(_))
          _.forEach(function(X) {
            return y.to(b, X, ">");
          }), y.duration();
        else {
          x = {};
          for (T in _)
            T === "ease" || T === "easeEach" || X0(T, _[T], x, _.easeEach);
          for (T in x)
            for (I = x[T].sort(function(X, Q) {
              return X.t - Q.t;
            }), F = 0, v = 0; v < I.length; v++)
              S = I[v], Y = {
                ease: S.e,
                duration: (S.t - (v ? I[v - 1].t : 0)) / 100 * f
              }, Y[T] = S.v, y.to(b, Y, F), F += Y.duration;
          y.duration() < f && y.to({}, {
            duration: f - y.duration()
          });
        }
      }
      f || o.duration(f = y.duration());
    } else
      o.timeline = 0;
    return p === !0 && !Wa && (ar = Xe(o), at.killTweensOf(b), ar = 0), Ie(m, Xe(o), s), n.reversed && o.reverse(), n.paused && o.paused(!0), (u || !f && !_ && o._start === st(m._time) && Bt(u) && y0(Xe(o)) && m.data !== "nested") && (o._tTime = -et, o.render(Math.max(0, -h) || 0)), g && ih(Xe(o), g), o;
  }
  var e = t.prototype;
  return e.render = function(n, s, a) {
    var o = this._time, l = this._tDur, f = this._dur, h = n < 0, u = n > l - et && !h ? l : n < et ? 0 : n, c, p, _, d, g, m, b, y;
    if (!f)
      w0(this, n, s, a);
    else if (u !== this._tTime || !n || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h || this._lazy) {
      if (c = u, y = this.timeline, this._repeat) {
        if (d = f + this._rDelay, this._repeat < -1 && h)
          return this.totalTime(d * 100 + n, s, a);
        if (c = st(u % d), u === l ? (_ = this._repeat, c = f) : (g = st(u / d), _ = ~~g, _ && _ === g ? (c = f, _--) : c > f && (c = f)), m = this._yoyo && _ & 1, m && (c = f - c), g = Di(this._tTime, d), c === o && !a && this._initted && _ === g)
          return this._tTime = u, this;
        _ !== g && this.vars.repeatRefresh && !m && !this._lock && c !== d && this._initted && (this._lock = a = 1, this.render(st(d * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (nh(this, h ? n : c, a, s, u))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && _ !== g))
          return this;
        if (f !== this._dur)
          return this.render(n, s, a);
      }
      if (this._rEase) {
        var v = c < o;
        if (v !== this._inv) {
          var x = v ? o : f - o;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = o, this._invRecip = x ? (v ? -1 : 1) / x : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = b = this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip);
      } else
        this.ratio = b = this._ease(c / f);
      if (this._from && (this.ratio = b = 1 - b), this._tTime = u, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), !o && u && !s && !g && (Jt(this, "onStart"), this._tTime !== u))
        return this;
      for (p = this._pt; p; )
        p.r(b, p.d), p = p._next;
      y && y.render(n < 0 ? n : y._dur * y._ease(c / this._dur), s, a) || this._startAt && (this._zTime = n), this._onUpdate && !s && (h && ya(this, n, s, a), Jt(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !s && this.parent && Jt(this, "onRepeat"), (u === this._tDur || !u) && this._tTime === u && (h && !this._onUpdate && ya(this, n, !0, !0), (n || !f) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && gr(this, 1), !s && !(h && !o) && (u || o || m) && (Jt(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), r.prototype.invalidate.call(this, n);
  }, e.resetTo = function(n, s, a, o, l) {
    fn || $t.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), h;
    return this._initted || ro(this, f), h = this._ease(f / this._dur), Y0(this, n, s, a, o, h, f, l) ? this.resetTo(n, s, a, o, 1) : (ms(this, 0), this.parent || eh(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? ji(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Et), this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, ar && ar.vars.overwrite !== !0)._first || ji(this), this.parent && a !== this.timeline.totalDuration() && Fi(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, l = n ? de(n) : o, f = this._ptLookup, h = this._pt, u, c, p, _, d, g, m;
    if ((!s || s === "all") && v0(o, l))
      return s === "all" && (this._pt = 0), ji(this);
    for (u = this._op = this._op || [], s !== "all" && (wt(s) && (d = {}, Ut(s, function(b) {
      return d[b] = 1;
    }), s = d), s = G0(o, s)), m = o.length; m--; )
      if (~l.indexOf(o[m])) {
        c = f[m], s === "all" ? (u[m] = s, _ = c, p = {}) : (p = u[m] = u[m] || {}, _ = s);
        for (d in _)
          g = c && c[d], g && ((!("kill" in g.d) || g.d.kill(d) === !0) && _s(this, g, "_pt"), delete c[d]), p !== "all" && (p[d] = 1);
      }
    return this._initted && !this._pt && h && ji(this), this;
  }, t.to = function(n, s) {
    return new t(n, s, arguments[2]);
  }, t.from = function(n, s) {
    return tn(1, arguments);
  }, t.delayedCall = function(n, s, a, o) {
    return new t(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, t.fromTo = function(n, s, a) {
    return tn(2, arguments);
  }, t.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(n, s);
  }, t.killTweensOf = function(n, s, a) {
    return at.killTweensOf(n, s, a);
  }, t;
})(hn);
ie(gt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ut("staggerTo,staggerFrom,staggerFromTo", function(r) {
  gt[r] = function() {
    var t = new Nt(), e = wa.call(arguments, 0);
    return e.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), t[r].apply(t, e);
  };
});
var io = function(t, e, i) {
  return t[e] = i;
}, wh = function(t, e, i) {
  return t[e](i);
}, q0 = function(t, e, i, n) {
  return t[e](n.fp, i);
}, W0 = function(t, e, i) {
  return t.setAttribute(e, i);
}, no = function(t, e) {
  return ft(t[e]) ? wh : ja(t[e]) && t.setAttribute ? W0 : io;
}, Ah = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, j0 = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Th = function(t, e) {
  var i = e._pt, n = "";
  if (!t && e.b)
    n = e.b;
  else if (t === 1 && e.e)
    n = e.e;
  else {
    for (; i; )
      n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + n, i = i._next;
    n += e.c;
  }
  e.set(e.t, e.p, n, e);
}, so = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, H0 = function(t, e, i, n) {
  for (var s = this._pt, a; s; )
    a = s._next, s.p === n && s.modifier(t, e, i), s = a;
}, Q0 = function(t) {
  for (var e = this._pt, i, n; e; )
    n = e._next, e.p === t && !e.op || e.op === t ? _s(this, e, "_pt") : e.dep || (i = 1), e = n;
  return !i;
}, K0 = function(t, e, i, n) {
  n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
}, kh = function(t) {
  for (var e = t._pt, i, n, s, a; e; ) {
    for (i = e._next, n = s; n && n.pr > e.pr; )
      n = n._next;
    (e._prev = n ? n._prev : a) ? e._prev._next = e : s = e, (e._next = n) ? n._prev = e : a = e, e = i;
  }
  t._pt = s;
}, Vt = /* @__PURE__ */ (function() {
  function r(e, i, n, s, a, o, l, f, h) {
    this.t = i, this.s = s, this.c = a, this.p = n, this.r = o || Ah, this.d = l || this, this.set = f || io, this.pr = h || 0, this._next = e, e && (e._prev = this);
  }
  var t = r.prototype;
  return t.modifier = function(i, n, s) {
    this.mSet = this.mSet || this.set, this.set = K0, this.m = i, this.mt = s, this.tween = n;
  }, r;
})();
Ut($a + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(r) {
  return Za[r] = 1;
});
re.TweenMax = re.TweenLite = gt;
re.TimelineLite = re.TimelineMax = Nt;
at = new Nt({
  sortChildren: !1,
  defaults: sn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ee.stringFilter = gh;
var Xr = [], Xn = {}, Z0 = [], xl = 0, $0 = 0, qs = function(t) {
  return (Xn[t] || Z0).map(function(e) {
    return e();
  });
}, Ea = function() {
  var t = Date.now(), e = [];
  t - xl > 2 && (qs("matchMediaInit"), Xr.forEach(function(i) {
    var n = i.queries, s = i.conditions, a, o, l, f;
    for (o in n)
      a = Oe.matchMedia(n[o]).matches, a && (l = 1), a !== s[o] && (s[o] = a, f = 1);
    f && (i.revert(), l && e.push(i));
  }), qs("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(n) {
      return i.add(null, n);
    });
  }), xl = t, qs("matchMedia"));
}, Eh = /* @__PURE__ */ (function() {
  function r(e, i) {
    this.selector = i && Aa(i), this.data = [], this._r = [], this.isReverted = !1, this.id = $0++, e && this.add(e);
  }
  var t = r.prototype;
  return t.add = function(i, n, s) {
    ft(i) && (s = n, n = i, i = ft);
    var a = this, o = function() {
      var f = nt, h = a.selector, u;
      return f && f !== a && f.data.push(a), s && (a.selector = Aa(s)), nt = a, u = n.apply(a, arguments), ft(u) && a._r.push(u), nt = f, a.selector = h, a.isReverted = !1, u;
    };
    return a.last = o, i === ft ? o(a, function(l) {
      return a.add(null, l);
    }) : i ? a[i] = o : o;
  }, t.ignore = function(i) {
    var n = nt;
    nt = null, i(this), nt = n;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(n) {
      return n instanceof r ? i.push.apply(i, n.getTweens()) : n instanceof gt && !(n.parent && n.parent.data === "nested") && i.push(n);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, n) {
    var s = this;
    if (i ? (function() {
      for (var o = s.getTweens(), l = s.data.length, f; l--; )
        f = s.data[l], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(h) {
          return o.splice(o.indexOf(h), 1);
        }));
      for (o.map(function(h) {
        return {
          g: h._dur || h._delay || h._sat && !h._sat.vars.immediateRender ? h.globalTime(0) : -1 / 0,
          t: h
        };
      }).sort(function(h, u) {
        return u.g - h.g || -1 / 0;
      }).forEach(function(h) {
        return h.t.revert(i);
      }), l = s.data.length; l--; )
        f = s.data[l], f instanceof Nt ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof gt) && f.revert && f.revert(i);
      s._r.forEach(function(h) {
        return h(i, s);
      }), s.isReverted = !0;
    })() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), n)
      for (var a = Xr.length; a--; )
        Xr[a].id === this.id && Xr.splice(a, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, r;
})(), J0 = /* @__PURE__ */ (function() {
  function r(e) {
    this.contexts = [], this.scope = e, nt && nt.data.push(this);
  }
  var t = r.prototype;
  return t.add = function(i, n, s) {
    Ue(i) || (i = {
      matches: i
    });
    var a = new Eh(0, s || this.scope), o = a.conditions = {}, l, f, h;
    nt && !a.selector && (a.selector = nt.selector), this.contexts.push(a), n = a.add("onMatch", n), a.queries = i;
    for (f in i)
      f === "all" ? h = 1 : (l = Oe.matchMedia(i[f]), l && (Xr.indexOf(a) < 0 && Xr.push(a), (o[f] = l.matches) && (h = 1), l.addListener ? l.addListener(Ea) : l.addEventListener("change", Ea)));
    return h && n(a, function(u) {
      return a.add(null, u);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(n) {
      return n.kill(i, !0);
    });
  }, r;
})(), rs = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(n) {
      return dh(n);
    });
  },
  timeline: function(t) {
    return new Nt(t);
  },
  getTweensOf: function(t, e) {
    return at.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, n) {
    wt(t) && (t = de(t)[0]);
    var s = Vr(t || {}).get, a = i ? th : Jf;
    return i === "native" && (i = ""), t && (e ? a((Zt[e] && Zt[e].get || s)(t, e, i, n)) : function(o, l, f) {
      return a((Zt[o] && Zt[o].get || s)(t, o, l, f));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = de(t), t.length > 1) {
      var n = t.map(function(h) {
        return Gt.quickSetter(h, e, i);
      }), s = n.length;
      return function(h) {
        for (var u = s; u--; )
          n[u](h);
      };
    }
    t = t[0] || {};
    var a = Zt[e], o = Vr(t), l = o.harness && (o.harness.aliases || {})[e] || e, f = a ? function(h) {
      var u = new a();
      di._pt = 0, u.init(t, i ? h + i : h, di, 0, [t]), u.render(1, u), di._pt && so(1, di);
    } : o.set(t, l);
    return a ? f : function(h) {
      return f(t, l, i ? h + i : h, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var n, s = Gt.to(t, ie((n = {}, n[e] = "+=0.1", n.paused = !0, n.stagger = 0, n), i || {})), a = function(l, f, h) {
      return s.resetTo(e, l, f, h);
    };
    return a.tween = s, a;
  },
  isTweening: function(t) {
    return at.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Gr(t.ease, sn.ease)), gl(sn, t || {});
  },
  config: function(t) {
    return gl(ee, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, n = t.plugins, s = t.defaults, a = t.extendTimeline;
    (n || "").split(",").forEach(function(o) {
      return o && !Zt[o] && !re[o] && an(e + " effect requires " + o + " plugin.");
    }), Vs[e] = function(o, l, f) {
      return i(de(o), ie(l || {}, s), f);
    }, a && (Nt.prototype[e] = function(o, l, f) {
      return this.add(Vs[e](o, Ue(l) ? l : (f = l) && {}, this), f);
    });
  },
  registerEase: function(t, e) {
    j[t] = Gr(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Gr(t, e) : j;
  },
  getById: function(t) {
    return at.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new Nt(t), n, s;
    for (i.smoothChildTiming = Bt(t.smoothChildTiming), at.remove(i), i._dp = 0, i._time = i._tTime = at._time, n = at._first; n; )
      s = n._next, (e || !(!n._dur && n instanceof gt && n.vars.onComplete === n._targets[0])) && Ie(i, n, n._start - n._delay), n = s;
    return Ie(at, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Eh(t, e) : nt;
  },
  matchMedia: function(t) {
    return new J0(t);
  },
  matchMediaRefresh: function() {
    return Xr.forEach(function(t) {
      var e = t.conditions, i, n;
      for (n in e)
        e[n] && (e[n] = !1, i = 1);
      i && t.revert();
    }) || Ea();
  },
  addEventListener: function(t, e) {
    var i = Xn[t] || (Xn[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = Xn[t], n = i && i.indexOf(e);
    n >= 0 && i.splice(n, 1);
  },
  utils: {
    wrap: P0,
    wrapYoyo: R0,
    distribute: oh,
    random: fh,
    snap: lh,
    normalize: C0,
    getUnit: St,
    clamp: k0,
    splitColor: ph,
    toArray: de,
    selector: Aa,
    mapRange: uh,
    pipe: M0,
    unitize: S0,
    interpolate: O0,
    shuffle: ah
  },
  install: Hf,
  effects: Vs,
  ticker: $t,
  updateRoot: Nt.updateRoot,
  plugins: Zt,
  globalTimeline: at,
  core: {
    PropTween: Vt,
    globals: Qf,
    Tween: gt,
    Timeline: Nt,
    Animation: hn,
    getCache: Vr,
    _removeLinkedListItem: _s,
    reverting: function() {
      return Et;
    },
    context: function(t) {
      return t && nt && (nt.data.push(t), t._ctx = nt), nt;
    },
    suppressOverwrites: function(t) {
      return Wa = t;
    }
  }
};
Ut("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return rs[r] = gt[r];
});
$t.add(Nt.updateRoot);
di = rs.to({}, {
  duration: 0
});
var t_ = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, e_ = function(t, e) {
  var i = t._targets, n, s, a;
  for (n in e)
    for (s = i.length; s--; )
      a = t._ptLookup[s][n], a && (a = a.d) && (a._pt && (a = t_(a, n)), a && a.modifier && a.modifier(e[n], t, i[s], n));
}, Ws = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, a) {
      a._onInit = function(o) {
        var l, f;
        if (wt(s) && (l = {}, Ut(s, function(h) {
          return l[h] = 1;
        }), s = l), e) {
          l = {};
          for (f in s)
            l[f] = e(s[f]);
          s = l;
        }
        e_(o, s);
      };
    }
  };
}, Gt = rs.registerPlugin({
  name: "attr",
  init: function(t, e, i, n, s) {
    var a, o, l;
    this.tween = i;
    for (a in e)
      l = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (l || 0) + "", e[a], n, s, 0, 0, a), o.op = a, o.b = l, this._props.push(a);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      Et ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Ws("roundProps", Ta), Ws("modifiers"), Ws("snap", lh)) || rs;
gt.version = Nt.version = Gt.version = "3.15.0";
jf = 1;
Ha() && zi();
j.Power0;
j.Power1;
j.Power2;
j.Power3;
j.Power4;
j.Linear;
j.Quad;
j.Cubic;
j.Quart;
j.Quint;
j.Strong;
j.Elastic;
j.Back;
j.SteppedEase;
j.Bounce;
j.Sine;
j.Expo;
j.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var wl, or, vi, ao, Or, Al, oo, r_ = function() {
  return typeof window < "u";
}, $e = {}, Sr = 180 / Math.PI, bi = Math.PI / 180, ai = Math.atan2, Tl = 1e8, lo = /([A-Z])/g, i_ = /(left|right|width|margin|padding|x)/i, n_ = /[\s,\(]\S/, Le = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ma = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, s_ = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, a_ = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, o_ = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, l_ = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Mh = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Sh = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, f_ = function(t, e, i) {
  return t.style[e] = i;
}, h_ = function(t, e, i) {
  return t.style.setProperty(e, i);
}, u_ = function(t, e, i) {
  return t._gsap[e] = i;
}, c_ = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, d_ = function(t, e, i, n, s) {
  var a = t._gsap;
  a.scaleX = a.scaleY = i, a.renderTransform(s, a);
}, p_ = function(t, e, i, n, s) {
  var a = t._gsap;
  a[e] = i, a.renderTransform(s, a);
}, ot = "transform", Yt = ot + "Origin", __ = function r(t, e) {
  var i = this, n = this.target, s = n.style, a = n._gsap;
  if (t in $e && s) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Le[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = qe(n, o);
      }) : this.tfm[t] = a.x ? a[t] : qe(n, t), t === Yt && (this.tfm.zOrigin = a.zOrigin);
    else
      return Le.transform.split(",").forEach(function(o) {
        return r.call(i, o, e);
      });
    if (this.props.indexOf(ot) >= 0)
      return;
    a.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Yt, e, "")), t = ot;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, Ch = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, g_ = function() {
  var t = this.props, e = this.target, i = e.style, n = e._gsap, s, a;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? t[s + 1] === 2 ? e[t[s]](t[s + 2]) : e[t[s]] = t[s + 2] : t[s + 2] ? i[t[s]] = t[s + 2] : i.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(lo, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      n[a] = this.tfm[a];
    n.svg && (n.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = oo(), (!s || !s.isStart) && !i[ot] && (Ch(i), n.zOrigin && i[Yt] && (i[Yt] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, Ph = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: g_,
    save: __
  };
  return t._gsap || Gt.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(n) {
    return i.save(n);
  }), i;
}, Rh, Sa = function(t, e) {
  var i = or.createElementNS ? or.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : or.createElement(t);
  return i && i.style ? i : or.createElement(t);
}, te = function r(t, e, i) {
  var n = getComputedStyle(t);
  return n[e] || n.getPropertyValue(e.replace(lo, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && r(t, Ii(e) || e, 1) || "";
}, kl = "O,Moz,ms,Ms,Webkit".split(","), Ii = function(t, e, i) {
  var n = e || Or, s = n.style, a = 5;
  if (t in s && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(kl[a] + t in s); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? kl[a] : "") + t;
}, Ca = function() {
  r_() && window.document && (wl = window, or = wl.document, vi = or.documentElement, Or = Sa("div") || {
    style: {}
  }, Sa("div"), ot = Ii(ot), Yt = ot + "Origin", Or.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Rh = !!Ii("perspective"), oo = Gt.core.reverting, ao = 1);
}, El = function(t) {
  var e = t.ownerSVGElement, i = Sa("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = t.cloneNode(!0), s;
  n.style.display = "block", i.appendChild(n), vi.appendChild(i);
  try {
    s = n.getBBox();
  } catch {
  }
  return i.removeChild(n), vi.removeChild(i), s;
}, Ml = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Oh = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = El(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = El(t)), e && !e.width && !e.x && !e.y ? {
    x: +Ml(t, ["x", "cx", "x1"]) || 0,
    y: +Ml(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Dh = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Oh(t));
}, mr = function(t, e) {
  if (e) {
    var i = t.style, n;
    e in $e && e !== Yt && (e = ot), i.removeProperty ? (n = e.substr(0, 2), (n === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(n === "--" ? e : e.replace(lo, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, lr = function(t, e, i, n, s, a) {
  var o = new Vt(t._pt, e, i, 0, 1, a ? Sh : Mh);
  return t._pt = o, o.b = n, o.e = s, t._props.push(i), o;
}, Sl = {
  deg: 1,
  rad: 1,
  turn: 1
}, m_ = {
  grid: 1,
  flex: 1
}, vr = function r(t, e, i, n) {
  var s = parseFloat(i) || 0, a = (i + "").trim().substr((s + "").length) || "px", o = Or.style, l = i_.test(e), f = t.tagName.toLowerCase() === "svg", h = (f ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, c = n === "px", p = n === "%", _, d, g, m;
  if (n === a || !s || Sl[n] || Sl[a])
    return s;
  if (a !== "px" && !c && (s = r(t, e, i, "px")), m = t.getCTM && Dh(t), (p || a === "%") && ($e[e] || ~e.indexOf("adius")))
    return _ = m ? t.getBBox()[l ? "width" : "height"] : t[h], ct(p ? s / _ * u : s / 100 * _);
  if (o[l ? "width" : "height"] = u + (c ? a : n), d = n !== "rem" && ~e.indexOf("adius") || n === "em" && t.appendChild && !f ? t : t.parentNode, m && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === or || !d.appendChild) && (d = or.body), g = d._gsap, g && p && g.width && l && g.time === $t.time && !g.uncache)
    return ct(s / g.width * u);
  if (p && (e === "height" || e === "width")) {
    var b = t.style[e];
    t.style[e] = u + n, _ = t[h], b ? t.style[e] = b : mr(t, e);
  } else
    (p || a === "%") && !m_[te(d, "display")] && (o.position = te(t, "position")), d === t && (o.position = "static"), d.appendChild(Or), _ = Or[h], d.removeChild(Or), o.position = "absolute";
  return l && p && (g = Vr(d), g.time = $t.time, g.width = d[h]), ct(c ? _ * s / u : _ && s ? u / _ * s : 0);
}, qe = function(t, e, i, n) {
  var s;
  return ao || Ca(), e in Le && e !== "transform" && (e = Le[e], ~e.indexOf(",") && (e = e.split(",")[0])), $e[e] && e !== "transform" ? (s = cn(t, n), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : ns(te(t, Yt)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = is[e] && is[e](t, e, i) || te(t, e) || Zf(t, e) || (e === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? vr(t, e, s, i) + i : s;
}, v_ = function(t, e, i, n) {
  if (!i || i === "none") {
    var s = Ii(e, t, 1), a = s && te(t, s, 1);
    a && a !== i ? (e = s, i = a) : e === "borderColor" && (i = te(t, "borderTopColor"));
  }
  var o = new Vt(this._pt, t.style, e, 0, 1, Th), l = 0, f = 0, h, u, c, p, _, d, g, m, b, y, v, x;
  if (o.b = i, o.e = n, i += "", n += "", n.substring(0, 6) === "var(--" && (n = te(t, n.substring(4, n.indexOf(")")))), n === "auto" && (d = t.style[e], t.style[e] = n, n = te(t, e) || n, d ? t.style[e] = d : mr(t, e)), h = [i, n], gh(h), i = h[0], n = h[1], c = i.match(ci) || [], x = n.match(ci) || [], x.length) {
    for (; u = ci.exec(n); )
      g = u[0], b = n.substring(l, u.index), _ ? _ = (_ + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (_ = 1), g !== (d = c[f++] || "") && (p = parseFloat(d) || 0, v = d.substr((p + "").length), g.charAt(1) === "=" && (g = mi(p, g) + v), m = parseFloat(g), y = g.substr((m + "").length), l = ci.lastIndex - y.length, y || (y = y || ee.units[e] || v, l === n.length && (n += y, o.e += y)), v !== y && (p = vr(t, e, d, y) || 0), o._pt = {
        _next: o._pt,
        p: b || f === 1 ? b : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: m - p,
        m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    o.r = e === "display" && n === "none" ? Sh : Mh;
  return Wf.test(n) && (o.e = 0), this._pt = o, o;
}, Cl = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, b_ = function(t) {
  var e = t.split(" "), i = e[0], n = e[1] || "50%";
  return (i === "top" || i === "bottom" || n === "left" || n === "right") && (t = i, i = n, n = t), e[0] = Cl[i] || i, e[1] = Cl[n] || n, e.join(" ");
}, y_ = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, n = i.style, s = e.u, a = i._gsap, o, l, f;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), f = s.length; --f > -1; )
        o = s[f], $e[o] && (l = 1, o = o === "transformOrigin" ? Yt : ot), mr(i, o);
    l && (mr(i, ot), a && (a.svg && i.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", cn(i, 1), a.uncache = 1, Ch(n)));
  }
}, is = {
  clearProps: function(t, e, i, n, s) {
    if (s.data !== "isFromStart") {
      var a = t._pt = new Vt(t._pt, e, i, 0, 0, y_);
      return a.u = n, a.pr = -10, a.tween = s, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, un = [1, 0, 0, 1, 0, 0], Fh = {}, zh = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Pl = function(t) {
  var e = te(t, ot);
  return zh(e) ? un : e.substr(7).match(qf).map(ct);
}, fo = function(t, e) {
  var i = t._gsap || Vr(t), n = t.style, s = Pl(t), a, o, l, f;
  return i.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? un : s) : (s === un && !t.offsetParent && t !== vi && !i.svg && (l = n.display, n.display = "block", a = t.parentNode, (!a || !t.offsetParent && !t.getBoundingClientRect().width) && (f = 1, o = t.nextElementSibling, vi.appendChild(t)), s = Pl(t), l ? n.display = l : mr(t, "display"), f && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : vi.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Pa = function(t, e, i, n, s, a) {
  var o = t._gsap, l = s || fo(t, !0), f = o.xOrigin || 0, h = o.yOrigin || 0, u = o.xOffset || 0, c = o.yOffset || 0, p = l[0], _ = l[1], d = l[2], g = l[3], m = l[4], b = l[5], y = e.split(" "), v = parseFloat(y[0]) || 0, x = parseFloat(y[1]) || 0, k, T, w, E;
  i ? l !== un && (T = p * g - _ * d) && (w = v * (g / T) + x * (-d / T) + (d * b - g * m) / T, E = v * (-_ / T) + x * (p / T) - (p * b - _ * m) / T, v = w, x = E) : (k = Oh(t), v = k.x + (~y[0].indexOf("%") ? v / 100 * k.width : v), x = k.y + (~(y[1] || y[0]).indexOf("%") ? x / 100 * k.height : x)), n || n !== !1 && o.smooth ? (m = v - f, b = x - h, o.xOffset = u + (m * p + b * d) - m, o.yOffset = c + (m * _ + b * g) - b) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = x, o.smooth = !!n, o.origin = e, o.originIsAbsolute = !!i, t.style[Yt] = "0px 0px", a && (lr(a, o, "xOrigin", f, v), lr(a, o, "yOrigin", h, x), lr(a, o, "xOffset", u, o.xOffset), lr(a, o, "yOffset", c, o.yOffset)), t.setAttribute("data-svg-origin", v + " " + x);
}, cn = function(t, e) {
  var i = t._gsap || new vh(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var n = t.style, s = i.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(t), f = te(t, Yt) || "0", h, u, c, p, _, d, g, m, b, y, v, x, k, T, w, E, M, z, F, I, S, Y, X, Q, mt, Pt, O, Xt, Rt, qt, dt, $;
  return h = u = c = d = g = m = b = y = v = 0, p = _ = 1, i.svg = !!(t.getCTM && Dh(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[ot] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ot] !== "none" ? l[ot] : "")), n.scale = n.rotate = n.translate = "none"), T = fo(t, i.svg), i.svg && (i.uncache ? (mt = t.getBBox(), f = i.xOrigin - mt.x + "px " + (i.yOrigin - mt.y) + "px", Q = "") : Q = !e && t.getAttribute("data-svg-origin"), Pa(t, Q || f, !!Q || i.originIsAbsolute, i.smooth !== !1, T)), x = i.xOrigin || 0, k = i.yOrigin || 0, T !== un && (z = T[0], F = T[1], I = T[2], S = T[3], h = Y = T[4], u = X = T[5], T.length === 6 ? (p = Math.sqrt(z * z + F * F), _ = Math.sqrt(S * S + I * I), d = z || F ? ai(F, z) * Sr : 0, b = I || S ? ai(I, S) * Sr + d : 0, b && (_ *= Math.abs(Math.cos(b * bi))), i.svg && (h -= x - (x * z + k * I), u -= k - (x * F + k * S))) : ($ = T[6], qt = T[7], O = T[8], Xt = T[9], Rt = T[10], dt = T[11], h = T[12], u = T[13], c = T[14], w = ai($, Rt), g = w * Sr, w && (E = Math.cos(-w), M = Math.sin(-w), Q = Y * E + O * M, mt = X * E + Xt * M, Pt = $ * E + Rt * M, O = Y * -M + O * E, Xt = X * -M + Xt * E, Rt = $ * -M + Rt * E, dt = qt * -M + dt * E, Y = Q, X = mt, $ = Pt), w = ai(-I, Rt), m = w * Sr, w && (E = Math.cos(-w), M = Math.sin(-w), Q = z * E - O * M, mt = F * E - Xt * M, Pt = I * E - Rt * M, dt = S * M + dt * E, z = Q, F = mt, I = Pt), w = ai(F, z), d = w * Sr, w && (E = Math.cos(w), M = Math.sin(w), Q = z * E + F * M, mt = Y * E + X * M, F = F * E - z * M, X = X * E - Y * M, z = Q, Y = mt), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, m = 180 - m), p = ct(Math.sqrt(z * z + F * F + I * I)), _ = ct(Math.sqrt(X * X + $ * $)), w = ai(Y, X), b = Math.abs(w) > 2e-4 ? w * Sr : 0, v = dt ? 1 / (dt < 0 ? -dt : dt) : 0), i.svg && (Q = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !zh(te(t, ot)), Q && t.setAttribute("transform", Q))), Math.abs(b) > 90 && Math.abs(b) < 270 && (s ? (p *= -1, b += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (_ *= -1, b += b <= 0 ? 180 : -180)), e = e || i.uncache, i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + a, i.y = u - ((i.yPercent = u && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + a, i.z = c + a, i.scaleX = ct(p), i.scaleY = ct(_), i.rotation = ct(d) + o, i.rotationX = ct(g) + o, i.rotationY = ct(m) + o, i.skewX = b + o, i.skewY = y + o, i.transformPerspective = v + a, (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) && (n[Yt] = ns(f)), i.xOffset = i.yOffset = 0, i.force3D = ee.force3D, i.renderTransform = i.svg ? w_ : Rh ? Ih : x_, i.uncache = 0, i;
}, ns = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, js = function(t, e, i) {
  var n = St(e);
  return ct(parseFloat(e) + parseFloat(vr(t, "x", i + "px", n))) + n;
}, x_ = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ih(t, e);
}, kr = "0deg", Yi = "0px", Er = ") ", Ih = function(t, e) {
  var i = e || this, n = i.xPercent, s = i.yPercent, a = i.x, o = i.y, l = i.z, f = i.rotation, h = i.rotationY, u = i.rotationX, c = i.skewX, p = i.skewY, _ = i.scaleX, d = i.scaleY, g = i.transformPerspective, m = i.force3D, b = i.target, y = i.zOrigin, v = "", x = m === "auto" && t && t !== 1 || m === !0;
  if (y && (u !== kr || h !== kr)) {
    var k = parseFloat(h) * bi, T = Math.sin(k), w = Math.cos(k), E;
    k = parseFloat(u) * bi, E = Math.cos(k), a = js(b, a, T * E * -y), o = js(b, o, -Math.sin(k) * -y), l = js(b, l, w * E * -y + y);
  }
  g !== Yi && (v += "perspective(" + g + Er), (n || s) && (v += "translate(" + n + "%, " + s + "%) "), (x || a !== Yi || o !== Yi || l !== Yi) && (v += l !== Yi || x ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + Er), f !== kr && (v += "rotate(" + f + Er), h !== kr && (v += "rotateY(" + h + Er), u !== kr && (v += "rotateX(" + u + Er), (c !== kr || p !== kr) && (v += "skew(" + c + ", " + p + Er), (_ !== 1 || d !== 1) && (v += "scale(" + _ + ", " + d + Er), b.style[ot] = v || "translate(0, 0)";
}, w_ = function(t, e) {
  var i = e || this, n = i.xPercent, s = i.yPercent, a = i.x, o = i.y, l = i.rotation, f = i.skewX, h = i.skewY, u = i.scaleX, c = i.scaleY, p = i.target, _ = i.xOrigin, d = i.yOrigin, g = i.xOffset, m = i.yOffset, b = i.forceCSS, y = parseFloat(a), v = parseFloat(o), x, k, T, w, E;
  l = parseFloat(l), f = parseFloat(f), h = parseFloat(h), h && (h = parseFloat(h), f += h, l += h), l || f ? (l *= bi, f *= bi, x = Math.cos(l) * u, k = Math.sin(l) * u, T = Math.sin(l - f) * -c, w = Math.cos(l - f) * c, f && (h *= bi, E = Math.tan(f - h), E = Math.sqrt(1 + E * E), T *= E, w *= E, h && (E = Math.tan(h), E = Math.sqrt(1 + E * E), x *= E, k *= E)), x = ct(x), k = ct(k), T = ct(T), w = ct(w)) : (x = u, w = c, k = T = 0), (y && !~(a + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (y = vr(p, "x", a, "px"), v = vr(p, "y", o, "px")), (_ || d || g || m) && (y = ct(y + _ - (_ * x + d * T) + g), v = ct(v + d - (_ * k + d * w) + m)), (n || s) && (E = p.getBBox(), y = ct(y + n / 100 * E.width), v = ct(v + s / 100 * E.height)), E = "matrix(" + x + "," + k + "," + T + "," + w + "," + y + "," + v + ")", p.setAttribute("transform", E), b && (p.style[ot] = E);
}, A_ = function(t, e, i, n, s) {
  var a = 360, o = wt(s), l = parseFloat(s) * (o && ~s.indexOf("rad") ? Sr : 1), f = l - n, h = n + f + "deg", u, c;
  return o && (u = s.split("_")[1], u === "short" && (f %= a, f !== f % (a / 2) && (f += f < 0 ? a : -a)), u === "cw" && f < 0 ? f = (f + a * Tl) % a - ~~(f / a) * a : u === "ccw" && f > 0 && (f = (f - a * Tl) % a - ~~(f / a) * a)), t._pt = c = new Vt(t._pt, e, i, n, f, s_), c.e = h, c.u = "deg", t._props.push(i), c;
}, Rl = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, T_ = function(t, e, i) {
  var n = Rl({}, i._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", a = i.style, o, l, f, h, u, c, p, _;
  n.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), a[ot] = e, o = cn(i, 1), mr(i, ot), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[ot], a[ot] = e, o = cn(i, 1), a[ot] = f);
  for (l in $e)
    f = n[l], h = o[l], f !== h && s.indexOf(l) < 0 && (p = St(f), _ = St(h), u = p !== _ ? vr(i, l, f, _) : parseFloat(f), c = parseFloat(h), t._pt = new Vt(t._pt, o, l, u, c - u, Ma), t._pt.u = _ || 0, t._props.push(l));
  Rl(o, n);
};
Ut("padding,margin,Width,Radius", function(r, t) {
  var e = "Top", i = "Right", n = "Bottom", s = "Left", a = (t < 3 ? [e, i, n, s] : [e + s, e + i, n + i, n + s]).map(function(o) {
    return t < 2 ? r + o : "border" + o + r;
  });
  is[t > 1 ? "border" + r : r] = function(o, l, f, h, u) {
    var c, p;
    if (arguments.length < 4)
      return c = a.map(function(_) {
        return qe(o, _, f);
      }), p = c.join(" "), p.split(c[0]).length === 5 ? c[0] : p;
    c = (h + "").split(" "), p = {}, a.forEach(function(_, d) {
      return p[_] = c[d] = c[d] || c[(d - 1) / 2 | 0];
    }), o.init(l, p, u);
  };
});
var Lh = {
  name: "css",
  register: Ca,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, n, s) {
    var a = this._props, o = t.style, l = i.vars.startAt, f, h, u, c, p, _, d, g, m, b, y, v, x, k, T, w, E;
    ao || Ca(), this.styles = this.styles || Ph(t), w = this.styles.props, this.tween = i;
    for (d in e)
      if (d !== "autoRound" && (h = e[d], !(Zt[d] && bh(d, e, i, n, t, s)))) {
        if (p = typeof h, _ = is[d], p === "function" && (h = h.call(i, n, t, s), p = typeof h), p === "string" && ~h.indexOf("random(") && (h = ln(h)), _)
          _(this, t, d, h, i) && (T = 1);
        else if (d.substr(0, 2) === "--")
          f = (getComputedStyle(t).getPropertyValue(d) + "").trim(), h += "", pr.lastIndex = 0, pr.test(f) || (g = St(f), m = St(h), m ? g !== m && (f = vr(t, d, f, m) + m) : g && (h += g)), this.add(o, "setProperty", f, h, n, s, 0, 0, d), a.push(d), w.push(d, 0, o[d]);
        else if (p !== "undefined") {
          if (l && d in l ? (f = typeof l[d] == "function" ? l[d].call(i, n, t, s) : l[d], wt(f) && ~f.indexOf("random(") && (f = ln(f)), St(f + "") || f === "auto" || (f += ee.units[d] || St(qe(t, d)) || ""), (f + "").charAt(1) === "=" && (f = qe(t, d))) : f = qe(t, d), c = parseFloat(f), b = p === "string" && h.charAt(1) === "=" && h.substr(0, 2), b && (h = h.substr(2)), u = parseFloat(h), d in Le && (d === "autoAlpha" && (c === 1 && qe(t, "visibility") === "hidden" && u && (c = 0), w.push("visibility", 0, o.visibility), lr(this, o, "visibility", c ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), d !== "scale" && d !== "transform" && (d = Le[d], ~d.indexOf(",") && (d = d.split(",")[0]))), y = d in $e, y) {
            if (this.styles.save(d), E = h, p === "string" && h.substring(0, 6) === "var(--") {
              if (h = te(t, h.substring(4, h.indexOf(")"))), h.substring(0, 5) === "calc(") {
                var M = t.style.perspective;
                t.style.perspective = h, h = te(t, "perspective"), M ? t.style.perspective = M : mr(t, "perspective");
              }
              u = parseFloat(h);
            }
            if (v || (x = t._gsap, x.renderTransform && !e.parseTransform || cn(t, e.parseTransform), k = e.smoothOrigin !== !1 && x.smooth, v = this._pt = new Vt(this._pt, o, ot, 0, 1, x.renderTransform, x, 0, -1), v.dep = 1), d === "scale")
              this._pt = new Vt(this._pt, x, "scaleY", x.scaleY, (b ? mi(x.scaleY, b + u) : u) - x.scaleY || 0, Ma), this._pt.u = 0, a.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              w.push(Yt, 0, o[Yt]), h = b_(h), x.svg ? Pa(t, h, 0, k, 0, this) : (m = parseFloat(h.split(" ")[2]) || 0, m !== x.zOrigin && lr(this, x, "zOrigin", x.zOrigin, m), lr(this, o, d, ns(f), ns(h)));
              continue;
            } else if (d === "svgOrigin") {
              Pa(t, h, 1, k, 0, this);
              continue;
            } else if (d in Fh) {
              A_(this, x, d, c, b ? mi(c, b + h) : h);
              continue;
            } else if (d === "smoothOrigin") {
              lr(this, x, "smooth", x.smooth, h);
              continue;
            } else if (d === "force3D") {
              x[d] = h;
              continue;
            } else if (d === "transform") {
              T_(this, h, t);
              continue;
            }
          } else d in o || (d = Ii(d) || d);
          if (y || (u || u === 0) && (c || c === 0) && !n_.test(h) && d in o)
            g = (f + "").substr((c + "").length), u || (u = 0), m = St(h) || (d in ee.units ? ee.units[d] : g), g !== m && (c = vr(t, d, f, m)), this._pt = new Vt(this._pt, y ? x : o, d, c, (b ? mi(c, b + u) : u) - c, !y && (m === "px" || d === "zIndex") && e.autoRound !== !1 ? l_ : Ma), this._pt.u = m || 0, y && E !== h ? (this._pt.b = f, this._pt.e = E, this._pt.r = o_) : g !== m && m !== "%" && (this._pt.b = f, this._pt.r = a_);
          else if (d in o)
            v_.call(this, t, d, f, b ? b + h : h);
          else if (d in t)
            this.add(t, d, f || t[d], b ? b + h : h, n, s);
          else if (d !== "parseTransform") {
            Ka(d, h);
            continue;
          }
          y || (d in o ? w.push(d, 0, o[d]) : typeof t[d] == "function" ? w.push(d, 2, t[d]()) : w.push(d, 1, f || t[d])), a.push(d);
        }
      }
    T && kh(this);
  },
  render: function(t, e) {
    if (e.tween._time || !oo())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: qe,
  aliases: Le,
  getSetter: function(t, e, i) {
    var n = Le[e];
    return n && n.indexOf(",") < 0 && (e = n), e in $e && e !== Yt && (t._gsap.x || qe(t, "x")) ? i && Al === i ? e === "scale" ? c_ : u_ : (Al = i || {}) && (e === "scale" ? d_ : p_) : t.style && !ja(t.style[e]) ? f_ : ~e.indexOf("-") ? h_ : no(t, e);
  },
  core: {
    _removeProperty: mr,
    _getMatrix: fo
  }
};
Gt.utils.checkPrefix = Ii;
Gt.core.getStyleSaver = Ph;
(function(r, t, e, i) {
  var n = Ut(r + "," + t + "," + e, function(s) {
    $e[s] = 1;
  });
  Ut(t, function(s) {
    ee.units[s] = "deg", Fh[s] = 1;
  }), Le[n[13]] = r + "," + t, Ut(i, function(s) {
    var a = s.split(":");
    Le[a[1]] = n[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  ee.units[r] = "px";
});
Gt.registerPlugin(Lh);
var Nh = Gt.registerPlugin(Lh) || Gt;
Nh.core.Tween;
const k_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg==", E_ = (r, t, e) => Math.min(e, Math.max(t, r)), Hs = (r) => E_(r, 0, 1), Qs = (r) => r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), Ra = (r, t, e) => {
  const i = Math.max(r, t, e) > 1 ? 255 : 1;
  return [Hs(r / i), Hs(t / i), Hs(e / i)];
}, Bh = (r) => {
  const t = r.replace("#", "").trim();
  if (t.length === 3 || t.length === 4) {
    const e = Number.parseInt(t[0] + t[0], 16), i = Number.parseInt(t[1] + t[1], 16), n = Number.parseInt(t[2] + t[2], 16);
    return [e / 255, i / 255, n / 255];
  }
  if (t.length === 6 || t.length === 8) {
    const e = Number.parseInt(t.slice(0, 2), 16), i = Number.parseInt(t.slice(2, 4), 16), n = Number.parseInt(t.slice(4, 6), 16);
    return [e / 255, i / 255, n / 255];
  }
  return null;
};
let oi;
const M_ = (r) => {
  if (typeof document > "u") return null;
  if (oi === void 0) {
    const n = document.createElement("canvas");
    n.width = 1, n.height = 1, oi = n.getContext("2d");
  }
  if (!oi) return null;
  oi.fillStyle = "#000000", oi.fillStyle = r;
  const t = oi.fillStyle;
  if (t.startsWith("#"))
    return Bh(t);
  const e = t.match(/rgba?\(([^)]+)\)/i);
  if (!e) return null;
  const i = e[1].split(",").map((n) => Number.parseFloat(n.trim())).filter((n) => Number.isFinite(n));
  return i.length < 3 ? null : Ra(i[0], i[1], i[2]);
}, S_ = (r, t) => {
  if (typeof r == "number" && Number.isFinite(r)) {
    const e = Math.min(16777215, Math.max(0, Math.floor(r)));
    return [
      (e >> 16 & 255) / 255,
      (e >> 8 & 255) / 255,
      (e & 255) / 255
    ];
  }
  if (typeof r == "string") {
    const e = r.trim();
    return (e.startsWith("#") ? Bh(e) : M_(e)) ?? t;
  }
  if (Array.isArray(r) && r.length >= 3)
    return Ra(r[0], r[1], r[2]);
  if (r && typeof r == "object" && "r" in r && "g" in r && "b" in r) {
    const e = r;
    return Ra(e.r, e.g, e.b);
  }
  return t;
}, Ol = (r, t) => {
  const [e, i, n] = S_(r, t);
  return [Qs(e), Qs(i), Qs(n)];
};
var C_ = /* @__PURE__ */ xn('<div class="bg-fixed-dark/80 rounded-xs px-2 py-1 text-xs whitespace-nowrap text-fixed-light backdrop-blur-sm"> </div>'), P_ = /* @__PURE__ */ xn('<div class="pointer-events-none absolute top-0 left-1/2 inline-flex -translate-x-1/2 -translate-y-8 flex-col items-center transition-[opacity,filter] duration-200 ease-out will-change-transform"><!></div>'), R_ = /* @__PURE__ */ xn('<div class="pointer-events-none absolute"><!></div>');
function O_(r, t) {
  cs(t, !0);
  const e = 8;
  let i = /* @__PURE__ */ Hn(() => (1 - t.visibility) * e), n = /* @__PURE__ */ Hn(() => ({
    marker: t.marker,
    index: t.index,
    visibility: t.visibility
  }));
  var s = R_();
  let a;
  var o = Ki(s);
  {
    var l = (f) => {
      var h = P_();
      let u;
      var c = Ki(h);
      {
        var p = (d) => {
          var g = Qc(), m = cf(g);
          id(m, () => t.tooltip, () => G(n)), ui(d, g);
        }, _ = (d) => {
          var g = C_(), m = Ki(g);
          Os(() => Kc(m, t.marker.label)), ui(d, g);
        };
        No(c, (d) => {
          t.tooltip ? d(p) : d(_, -1);
        });
      }
      Os(() => u = da(h, "", u, {
        opacity: t.visibility,
        filter: `blur(${G(i)}px)`
      })), ui(f, h);
    };
    No(o, (f) => {
      (t.tooltip || t.marker.label) && f(l);
    });
  }
  Os(() => a = da(s, "", a, {
    left: `${t.screenX * 100}%`,
    top: `${t.screenY * 100}%`,
    transform: "translate(-50%, -50%)"
  })), ui(r, s), ds();
}
var D_ = /* @__PURE__ */ xn('<canvas class="absolute inset-0 block h-full w-full" style="width:100%;height:100%;touch-action:none;" aria-hidden="true"></canvas> <div class="pointer-events-none absolute inset-0 overflow-hidden"></div>', 1);
function F_(r, t) {
  cs(t, !0);
  const e = Math.PI, i = e / 180, n = 1e-6, s = 0.8, a = 1, o = 2 * e / 30, l = 5e-3, f = 14, u = Math.asin(Math.cos(1.5)), c = -e * 0.5 + 1e-3, p = e * 0.5 - 1e-3, _ = 0.24, d = 0.48, g = 128, m = 0.5, b = 3e-3, y = 0.06, v = {
    color: "#17181A",
    rimColor: "#c9fd34",
    rimPower: 6,
    rimIntensity: 1.5
  }, x = {
    color: "#c9fd34",
    scale: 1.1,
    power: 12,
    coefficient: 0.9,
    intensity: 1.1
  };
  let k = _t(t, "scale", 3, 1), T = _t(t, "offsetX", 3, 0), w = _t(t, "offsetY", 3, 0), E = _t(t, "fresnelConfig", 19, () => ({})), M = _t(t, "atmosphereConfig", 19, () => ({})), z = _t(t, "pointCount", 3, 15e3), F = _t(t, "pointSize", 3, 0.05), I = _t(t, "landPointColor", 3, "#c9fd34"), S = _t(t, "autoRotate", 3, !0), Y = _t(t, "lockedPolarAngle", 3, !0), X = _t(t, "markers", 19, () => []), Q = _t(t, "focusOn", 3, null), mt = /* @__PURE__ */ we(Cr([]));
  const Pt = /* @__PURE__ */ Hn(() => ({ ...v, ...E() })), O = /* @__PURE__ */ Hn(() => ({ ...x, ...M() }));
  let Xt = /* @__PURE__ */ we(null), Rt = /* @__PURE__ */ we(null), qt = null;
  const dt = (P, L, D) => Math.min(D, Math.max(L, P)), $ = (P, L) => L ? u : dt(P, c, p), At = (P, L, D) => {
    if (Math.abs(D - L) <= n)
      return P >= D ? 1 : 0;
    const J = dt((P - L) / (D - L), 0, 1);
    return J * J * (3 - 2 * J);
  }, xr = (P) => Math.max(1e-3, P * 0.16);
  function An(P) {
    return ((P + e) % (2 * e) + 2 * e) % (2 * e) - e;
  }
  function pt(P, L) {
    const D = An(L - P);
    return P + D;
  }
  function $r(P, L, D) {
    const J = P * i, xt = L * i, rt = D * Math.sin(xt), ne = D * Math.cos(xt), se = ne * Math.sin(J), be = ne * Math.cos(J);
    return { x: se, y: rt, z: be };
  }
  function Jr(P, L, D) {
    const J = Math.hypot(P, L, D);
    if (J <= n)
      return { phi: 0, theta: 0 };
    const xt = P / J, rt = L / J, ne = D / J;
    return { phi: Math.atan2(-xt, ne), theta: Math.asin(dt(rt, -1, 1)) };
  }
  function ti(P, L, D, J, xt) {
    const rt = Math.cos(xt), ne = Math.cos(J), se = Math.sin(xt), be = Math.sin(J);
    return {
      rx: ne * P + be * D,
      ry: be * se * P + rt * L - ne * se * D,
      rz: -be * rt * P + se * L + ne * rt * D
    };
  }
  function ei(P, L, D, J, xt) {
    const rt = 1 - P;
    return rt * rt * rt * L + 3 * rt * rt * P * D + 3 * rt * P * P * J + P * P * P * xt;
  }
  function ri(P, L, D, J, xt) {
    const rt = 1 - P;
    return 3 * rt * rt * (D - L) + 6 * rt * P * (J - D) + 3 * P * P * (xt - J);
  }
  function tu(P) {
    const L = dt(P, 0, 1);
    let D = L;
    for (let J = 0; J < 5; J++) {
      const xt = ei(D, 0, 0.625, 0, 1), rt = ri(D, 0, 0.625, 0, 1);
      if (Math.abs(rt) < 1e-6) break;
      D = dt(D - (xt - L) / rt, 0, 1);
    }
    return ei(D, 0, 0.05, 1, 1);
  }
  function eu(P, L, D) {
    const J = Math.max(1e-3, k()), xt = P * D * J, rt = L * J;
    return {
      x: (xt + T() * D * 2) / D,
      y: rt - w() * 2
    };
  }
  Fo(() => {
    G(Xt) && G(Xt)({
      scale: k(),
      offsetX: T(),
      offsetY: w(),
      pointCount: z(),
      pointSize: F(),
      landPointColor: I(),
      fresnelConfig: G(Pt),
      atmosphereConfig: G(O)
    });
  }), Fo(() => {
    G(Rt) && G(Rt)(Q());
  });
  const ru = (P) => {
    const L = new Ud({
      canvas: P,
      alpha: !0,
      antialias: !0,
      dpr: typeof window < "u" ? window.devicePixelRatio : 1
    }), D = L.gl;
    D.clearColor(0, 0, 0, 0), P.style.width = "100%", P.style.height = "100%";
    const J = new Sp(D);
    J.position.z = 1;
    const xt = new Zn(), rt = new Zn(), ne = new s0(D), se = new Array(g * 4).fill(0), be = new Array(g * 3).fill(0), Je = new Yp(D, {
      image: new Uint8Array([0, 0, 0, 255]),
      width: 1,
      height: 1,
      format: D.RGBA,
      type: D.UNSIGNED_BYTE,
      minFilter: D.NEAREST,
      magFilter: D.NEAREST,
      generateMipmaps: !1,
      wrapS: D.REPEAT,
      wrapT: D.REPEAT
    }), ut = {
      uTime: { value: 0 },
      uResolution: { value: new $i(1, 1) },
      uRotation: { value: new $i(0, $(0, Y())) },
      uScale: { value: a },
      uDisplayScale: { value: k() },
      uDisplayOffset: { value: new $i(T(), w()) },
      uDots: { value: Math.max(1, Math.floor(z())) },
      uPointRadius: { value: xr(F()) },
      uBaseColor: { value: new it(0, 0, 0) },
      uRimColor: { value: new it(0, 0, 0) },
      uRimPower: { value: G(Pt).rimPower },
      uRimIntensity: { value: G(Pt).rimIntensity },
      uAtmosphereColor: { value: new it(0, 0, 0) },
      uAtmosphereScale: { value: G(O).scale },
      uAtmospherePower: { value: G(O).power },
      uAtmosphereCoefficient: { value: G(O).coefficient },
      uAtmosphereIntensity: { value: G(O).intensity },
      uLandPointColor: { value: new it(0, 0, 0) },
      uLandTexture: { value: Je },
      uMarkerCount: { value: 0 },
      uMarkerData: { value: se },
      uMarkerColor: { value: be }
    }, _o = `
			attribute vec2 uv;
			attribute vec2 position;
			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = vec4(position, 0.0, 1.0);
			}
		`, su = `
			precision highp float;

			varying vec2 vUv;

			uniform float uTime;
			uniform vec2 uResolution;
			uniform vec2 uRotation;
			uniform float uScale;
			uniform float uDisplayScale;
			uniform vec2 uDisplayOffset;
			uniform float uDots;
			uniform float uPointRadius;
			uniform vec3 uBaseColor;
			uniform vec3 uRimColor;
			uniform float uRimPower;
			uniform float uRimIntensity;
			uniform vec3 uLandPointColor;
			uniform sampler2D uLandTexture;
			uniform float uMarkerCount;
			uniform vec4 uMarkerData[${g}];
			uniform vec3 uMarkerColor[${g}];

			const float kPi = 3.141592653589793;
			const float kTau = 6.283185307179586;
			const float kPhi = 1.618033988749895;
			const float kSqrt5 = 2.23606797749979;
			const float kSphereRadius = 0.8;
			const int kMaxMarkers = ${g};

			float byDots;

			vec2 transformUv(vec2 uv) {
				float aspect = uResolution.x / max(1.0, uResolution.y);
				vec2 centered = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
				vec2 transformed = (
					centered - vec2(uDisplayOffset.x * aspect, uDisplayOffset.y)
				) / max(uDisplayScale, 0.001);
				return vec2(transformed.x / aspect + 0.5, transformed.y + 0.5);
			}

			mat3 rotate(float theta, float phi) {
				float cx = cos(theta);
				float cy = cos(phi);
				float sx = sin(theta);
				float sy = sin(phi);
				return mat3(
					cy, sy * sx, -sy * cx,
					0.0, cx, sx,
					sy, cy * -sx, cy * cx
				);
			}

			vec3 nearestFibonacciLattice(vec3 p, out float m) {
				p = p.xzy;

				float k = max(2.0, floor(log2(kSqrt5 * uDots * kPi * (1.0 - p.z * p.z)) * 0.72021));
				vec2 f = floor(pow(kPhi, k) / kSqrt5 * vec2(1.0, kPhi) + 0.5);
				vec2 br1 = fract((f + 1.0) * (kPhi - 1.0)) * kTau - 3.883222;
				vec2 br2 = -2.0 * f;
				vec2 sp = vec2(atan(p.y, p.x), p.z - 1.0);
				vec2 c = floor(vec2(
					br2.y * sp.x - br1.y * (sp.y * uDots + 1.0),
					-br2.x * sp.x + br1.x * (sp.y * uDots + 1.0)
				) / (br1.x * br2.y - br2.x * br1.y));

				float mindist = kPi;
				vec3 minip = vec3(0.0, 0.0, 1.0);

				for (float s = 0.0; s < 4.0; s += 1.0) {
					vec2 o = vec2(mod(s, 2.0), floor(s * 0.5));
					float idx = dot(f, c + o);
					if (idx > uDots) continue;

					float a = idx;
					float b = 0.0;
					if (a >= 16384.0) a -= 16384.0, b += 0.868872;
					if (a >= 8192.0) a -= 8192.0, b += 0.934436;
					if (a >= 4096.0) a -= 4096.0, b += 0.467218;
					if (a >= 2048.0) a -= 2048.0, b += 0.733609;
					if (a >= 1024.0) a -= 1024.0, b += 0.866804;
					if (a >= 512.0) a -= 512.0, b += 0.433402;
					if (a >= 256.0) a -= 256.0, b += 0.216701;
					if (a >= 128.0) a -= 128.0, b += 0.108351;
					if (a >= 64.0) a -= 64.0, b += 0.554175;
					if (a >= 32.0) a -= 32.0, b += 0.777088;
					if (a >= 16.0) a -= 16.0, b += 0.888544;
					if (a >= 8.0) a -= 8.0, b += 0.944272;
					if (a >= 4.0) a -= 4.0, b += 0.472136;
					if (a >= 2.0) a -= 2.0, b += 0.236068;
					if (a >= 1.0) a -= 1.0, b += 0.618034;

					float theta = fract(b) * kTau;
					float cosphi = 1.0 - 2.0 * idx * byDots;
					float sinphi = sqrt(max(0.0, 1.0 - cosphi * cosphi));
					vec3 samplePoint = vec3(cos(theta) * sinphi, sin(theta) * sinphi, cosphi);

					float dist = length(p - samplePoint);
					if (dist < mindist) {
						mindist = dist;
						minip = samplePoint;
					}
				}

				m = mindist;
				return minip.xzy;
			}

			vec2 pointToMaskUV(vec3 p) {
				float lengthP = length(p);
				if (lengthP <= 0.0) {
					return vec2(0.0, 0.0);
				}

				vec3 n = p / lengthP;

				float nx = n.z;
				float ny = n.y;
				float nz = -n.x;

				float gPhi = asin(clamp(ny, -1.0, 1.0));
				float cosPhi = cos(gPhi);

				float gTheta = 0.0;
				if (abs(cosPhi) > 1e-6) {
					float thetaInput = clamp(-nx / cosPhi, -1.0, 1.0);
					gTheta = acos(thetaInput);
					if (nz < 0.0) {
						gTheta = -gTheta;
					}
				}

				return vec2(
					fract((gTheta * 0.5) / kPi),
					fract(gPhi / kPi + 0.5)
				);
			}

			vec3 linearToSrgb(vec3 color) {
				vec3 safe = max(color, vec3(0.0));
				vec3 low = safe * 12.92;
				vec3 high = 1.055 * pow(safe, vec3(1.0 / 2.4)) - 0.055;
				vec3 cutoff = step(vec3(0.0031308), safe);
				return mix(low, high, cutoff);
			}

			void main() {
				byDots = 1.0 / max(1.0, uDots);

				vec2 uv = transformUv(vUv) * 2.0 - 1.0;
				uv.x *= uResolution.x / max(1.0, uResolution.y);
				uv /= max(0.0001, uScale);

				float l = dot(uv, uv);
				float globeR2 = kSphereRadius * kSphereRadius;

				vec3 color = vec3(0.0);
				float alpha = 0.0;

				if (l <= globeR2) {
					float dis;
					vec3 p = normalize(vec3(uv, sqrt(max(0.0, globeR2 - l))));
					mat3 rot = rotate(uRotation.y, uRotation.x);
					vec3 globePoint = p * rot;
					vec3 samplePoint = nearestFibonacciLattice(globePoint, dis);
					vec2 mapUv = pointToMaskUV(samplePoint);
					float land = texture2D(uLandTexture, mapUv).r;

					float landDots = step(0.5, land) * smoothstep(uPointRadius, 0.0, dis);

					float dotNV = clamp(p.z / kSphereRadius, 0.0, 1.0);
					float rim = pow(1.0 - dotNV, max(0.0001, uRimPower)) * uRimIntensity;
					// Match the geometric foreshortening from the old instanced point mesh:
					// near the silhouette points should visually fade instead of staying fully crisp.
					float dotFade = smoothstep(0.04, 0.28, dotNV);
					landDots *= dotFade;

					vec3 markerColor = vec3(0.0);
					float markerMask = 0.0;
					float markerWeightSum = 0.0;
					for (int i = 0; i < kMaxMarkers; i++) {
						if (float(i) >= uMarkerCount) {
							break;
						}

						vec4 marker = uMarkerData[i];
						float markerDist = length(globePoint - marker.xyz);
						float markerCore = smoothstep(marker.w, marker.w * 0.62, markerDist);
						float pulse = fract(uTime * 0.85 + float(i) * 0.173);
						float pulseRadius = marker.w * mix(1.15, 2.8, pulse);
						float pulseWidth = marker.w * 0.42;
						float pulseInner = smoothstep(
							pulseRadius - pulseWidth,
							pulseRadius,
							markerDist
						);
						float pulseOuter =
							1.0 - smoothstep(pulseRadius, pulseRadius + pulseWidth, markerDist);
						float markerPulse = pulseInner * pulseOuter * (1.0 - pulse);
						float markerDot = max(markerCore, markerPulse * 0.72);
						markerMask = max(markerMask, markerDot);
						markerWeightSum += markerDot;
						markerColor += uMarkerColor[i] * markerDot;
					}

					if (markerWeightSum > 0.0) {
						markerColor /= markerWeightSum;
					}

					vec3 surface = uBaseColor;
					surface += uRimColor * rim;
					surface += uLandPointColor * (landDots * (1.0 - markerMask));

					// Keep marker color clean and dominant over land dots.
					vec3 boostedMarker = markerColor * (1.0 + 0.25 * markerMask);
					surface = mix(surface, boostedMarker, markerMask);

					color += surface;
					alpha = 1.0;
				}

				gl_FragColor = vec4(linearToSrgb(color), clamp(alpha, 0.0, 1.0));
			}
		`, au = `
			precision highp float;

			varying vec2 vUv;

			uniform vec2 uResolution;
			uniform float uScale;
			uniform float uDisplayScale;
			uniform vec2 uDisplayOffset;
			uniform vec3 uAtmosphereColor;
			uniform float uAtmosphereScale;
			uniform float uAtmospherePower;
			uniform float uAtmosphereCoefficient;
			uniform float uAtmosphereIntensity;

			const float kSphereRadius = 0.8;

			vec2 transformUv(vec2 uv) {
				float aspect = uResolution.x / max(1.0, uResolution.y);
				vec2 centered = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
				vec2 transformed = (
					centered - vec2(uDisplayOffset.x * aspect, uDisplayOffset.y)
				) / max(uDisplayScale, 0.001);
				return vec2(transformed.x / aspect + 0.5, transformed.y + 0.5);
			}

			vec3 linearToSrgb(vec3 color) {
				vec3 safe = max(color, vec3(0.0));
				vec3 low = safe * 12.92;
				vec3 high = 1.055 * pow(safe, vec3(1.0 / 2.4)) - 0.055;
				vec3 cutoff = step(vec3(0.0031308), safe);
				return mix(low, high, cutoff);
			}

			void main() {
				vec2 uv = transformUv(vUv) * 2.0 - 1.0;
				uv.x *= uResolution.x / max(1.0, uResolution.y);
				uv /= max(0.0001, uScale);

				float globeR = kSphereRadius;
				float atmosphereR = kSphereRadius * max(1.0, uAtmosphereScale);
				float l = dot(uv, uv);
				float radial = sqrt(l);

				if (radial <= globeR) {
					discard;
				}

				float shellWidth = max(1e-5, atmosphereR - globeR);
				float x = (radial - globeR) / shellWidth;
				if (x > 3.0) {
					discard;
				}

				// Smooth outward blur profile (no hard ring cutoff at shell boundary).
				float falloff = exp(-pow(max(0.0, x), 1.2) * max(0.15, uAtmospherePower * 0.09));
				float finalFactor =
					falloff * uAtmosphereIntensity * max(0.0, uAtmosphereCoefficient);

				vec3 finalColor = uAtmosphereColor * finalFactor;
				float alpha = finalFactor;

				gl_FragColor = vec4(linearToSrgb(finalColor), clamp(alpha, 0.0, 1.0));
			}
		`, go = new $o(D, {
      vertex: _o,
      fragment: su,
      uniforms: ut,
      transparent: !0,
      depthTest: !1,
      depthWrite: !1
    }), vs = new $o(D, {
      vertex: _o,
      fragment: au,
      uniforms: ut,
      transparent: !0,
      depthTest: !1,
      depthWrite: !1
    });
    vs.setBlendFunc(D.SRC_ALPHA, D.ONE);
    const mo = new ol(D, { geometry: ne, program: go, frustumCulled: !1 });
    mo.setParent(xt);
    const vo = new ol(D, { geometry: ne, program: vs, frustumCulled: !1 });
    vo.setParent(rt);
    let bs = a;
    const Tn = new it(), kn = (U, ae, Wt) => {
      const [ye, Ce, Pe] = Ol(ae, Wt);
      U.set(ye, Ce, Pe);
    };
    Te(Xt, (U) => {
      bs = a, ut.uScale.value = bs, ut.uDisplayScale.value = Math.max(1e-3, U.scale), ut.uDisplayOffset.value.set(U.offsetX, U.offsetY), ut.uDots.value = Math.max(1, Math.floor(U.pointCount)), ut.uPointRadius.value = xr(U.pointSize), kn(ut.uBaseColor.value, U.fresnelConfig.color, [17 / 255, 17 / 255, 19 / 255]), kn(ut.uRimColor.value, U.fresnelConfig.rimColor, [1, 105 / 255, 0]), ut.uRimPower.value = Math.max(1e-4, U.fresnelConfig.rimPower), ut.uRimIntensity.value = Math.max(0, U.fresnelConfig.rimIntensity), kn(ut.uAtmosphereColor.value, U.atmosphereConfig.color, [1, 105 / 255, 0]), ut.uAtmosphereScale.value = Math.max(1, U.atmosphereConfig.scale), ut.uAtmospherePower.value = Math.max(1e-4, U.atmosphereConfig.power), ut.uAtmosphereCoefficient.value = Math.max(0, U.atmosphereConfig.coefficient), ut.uAtmosphereIntensity.value = Math.max(0, U.atmosphereConfig.intensity), kn(Tn, U.landPointColor, [247 / 255, 113 / 255, 20 / 255]), ut.uLandPointColor.value.set(Tn.x, Tn.y, Tn.z);
    }), G(Xt)({
      scale: k(),
      offsetX: T(),
      offsetY: w(),
      pointCount: z(),
      pointSize: F(),
      landPointColor: I(),
      fresnelConfig: G(Pt),
      atmosphereConfig: G(O)
    });
    let bo = 1, yo = 1;
    const xo = $(0, Y());
    let Ni = 0, En = xo, ii = Ni, wr = xo;
    const ou = (U, ae, Wt) => {
      const ye = s, Ce = bo / Math.max(1, yo), Pe = Math.min(X().length, g);
      se.fill(0), be.fill(0), ut.uMarkerCount.value = Pe;
      const Ar = [];
      for (let xe = 0; xe < X().length; xe++) {
        const Tr = X()[xe], ks = $r(Tr.location[1], Tr.location[0], ye), Es = ti(ks.x, ks.y, ks.z, U, ae), lu = Es.rx / Ce * Wt, fu = -Es.ry * Wt, Eo = eu(lu, fu, Ce), hu = (Eo.x + 1) * 0.5, uu = (Eo.y + 1) * 0.5, cu = Es.rz / ye, du = At(cu, _, d), pu = tu(du);
        if (Ar.push({ marker: Tr, index: xe, screenX: hu, screenY: uu, visibility: pu }), xe >= Pe) continue;
        const Ms = $r(Tr.location[1], Tr.location[0], 1), Cn = xe * 4;
        se[Cn] = Ms.x, se[Cn + 1] = Ms.y, se[Cn + 2] = Ms.z, se[Cn + 3] = dt((Tr.size ?? 0.05) * m, b, y);
        const [_u, gu, mu] = Ol(Tr.color ?? "#ffffff", [1, 1, 1]), Ss = xe * 3;
        be[Ss] = _u, be[Ss + 1] = gu, be[Ss + 2] = mu;
      }
      Te(mt, Ar, !0);
    };
    Te(Rt, (U) => {
      if (qt?.kill(), qt = null, !U) return;
      const [ae, Wt] = U, ye = $r(Wt, ae, 1), Ce = Jr(ye.x, ye.y, ye.z), Pe = $(Ce.theta, Y()), Ar = pt(ii, Ce.phi), xe = { phi: ii, theta: wr };
      qt = Nh.to(xe, {
        phi: Ar,
        theta: Pe,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          ii = xe.phi, wr = $(xe.theta, Y());
        },
        overwrite: !0
      });
    }), G(Rt)(Q());
    let ys = !1, Mn = -1, xs = 0, ws = 0;
    const wo = (U) => {
      U.button === 0 && (ys = !0, Mn = U.pointerId, xs = U.clientX, ws = U.clientY, P.setPointerCapture(U.pointerId), qt?.kill(), qt = null);
    }, Ao = (U) => {
      if (!ys || U.pointerId !== Mn) return;
      const ae = U.clientX - xs, Wt = U.clientY - ws;
      xs = U.clientX, ws = U.clientY, ii += ae * l, wr = $(wr + Wt * l, Y());
    }, ni = (U) => {
      U.pointerId === Mn && (ys = !1, Mn = -1);
    };
    P.addEventListener("pointerdown", wo), P.addEventListener("pointermove", Ao), P.addEventListener("pointerup", ni), P.addEventListener("pointercancel", ni), P.addEventListener("lostpointercapture", ni);
    let To = !1;
    const Sn = new Image();
    Sn.onload = () => {
      To || (Je.image = Sn, Je.generateMipmaps = !0, Je.minFilter = D.NEAREST_MIPMAP_NEAREST, Je.magFilter = D.NEAREST, Je.needsUpdate = !0);
    }, Sn.onerror = (U) => {
      console.warn("GlobeScene: failed to load land mask texture", U);
    }, Sn.src = k_;
    let As = 0, Ts = 0;
    const ko = (U) => {
      const ae = Math.max(1, P.clientWidth), Wt = Math.max(1, P.clientHeight), ye = Math.round(ae * L.dpr), Ce = Math.round(Wt * L.dpr);
      (P.width !== ye || P.height !== Ce) && (P.width = ye, P.height = Ce, L.width = ae, L.height = Wt, L.state.viewport = { x: 0, y: 0, width: null, height: null }, bo = ae, yo = Wt, ut.uResolution.value.set(ae, Wt));
      const Pe = Ts ? (U - Ts) / 1e3 : 0;
      Ts = U, ut.uTime.value += Pe, S() && (ii -= o * Pe), wr = $(wr, Y());
      const Ar = 1 - Math.exp(-Pe * f);
      Ni += (ii - Ni) * Ar, En += (wr - En) * Ar, ut.uRotation.value.set(Ni, En), ou(Ni, En, bs), L.render({ scene: xt, camera: J, clear: !0 }), L.render({ scene: rt, camera: J, clear: !1 }), As = window.requestAnimationFrame(ko);
    };
    return As = window.requestAnimationFrame(ko), () => {
      To = !0, qt?.kill(), qt = null, window.cancelAnimationFrame(As), P.removeEventListener("pointerdown", wo), P.removeEventListener("pointermove", Ao), P.removeEventListener("pointerup", ni), P.removeEventListener("pointercancel", ni), P.removeEventListener("lostpointercapture", ni), mo.setParent(null), vo.setParent(null), ne.remove(), go.remove(), vs.remove(), Je.texture && D.deleteTexture(Je.texture);
    };
  }, iu = (P) => qa(() => ru(P));
  var co = D_(), po = cf(co);
  Rf(po, () => iu);
  var nu = Ac(po, 2);
  td(nu, 23, () => G(mt), (P, L) => P.marker.label || L, (P, L) => {
    O_(P, {
      get marker() {
        return G(L).marker;
      },
      get index() {
        return G(L).index;
      },
      get screenX() {
        return G(L).screenX;
      },
      get screenY() {
        return G(L).screenY;
      },
      get visibility() {
        return G(L).visibility;
      },
      get tooltip() {
        return t.markerTooltip;
      }
    });
  }), ui(r, co), ds();
}
const z_ = (r, t) => {
  const e = new Array(r.length + t.length);
  for (let i = 0; i < r.length; i++)
    e[i] = r[i];
  for (let i = 0; i < t.length; i++)
    e[r.length + i] = t[i];
  return e;
}, I_ = (r, t) => ({
  classGroupId: r,
  validator: t
}), Uh = (r = /* @__PURE__ */ new Map(), t = null, e) => ({
  nextPart: r,
  validators: t,
  classGroupId: e
}), ss = "-", Dl = [], L_ = "arbitrary..", N_ = (r) => {
  const t = U_(r), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: i
  } = r;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return B_(a);
      const o = a.split(ss), l = o[0] === "" && o.length > 1 ? 1 : 0;
      return Vh(o, l, t);
    },
    getConflictingClassGroupIds: (a, o) => {
      if (o) {
        const l = i[a], f = e[a];
        return l ? f ? z_(f, l) : l : f || Dl;
      }
      return e[a] || Dl;
    }
  };
}, Vh = (r, t, e) => {
  if (r.length - t === 0)
    return e.classGroupId;
  const n = r[t], s = e.nextPart.get(n);
  if (s) {
    const f = Vh(r, t + 1, s);
    if (f) return f;
  }
  const a = e.validators;
  if (a === null)
    return;
  const o = t === 0 ? r.join(ss) : r.slice(t).join(ss), l = a.length;
  for (let f = 0; f < l; f++) {
    const h = a[f];
    if (h.validator(o))
      return h.classGroupId;
  }
}, B_ = (r) => r.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = r.slice(1, -1), e = t.indexOf(":"), i = t.slice(0, e);
  return i ? L_ + i : void 0;
})(), U_ = (r) => {
  const {
    theme: t,
    classGroups: e
  } = r;
  return V_(e, t);
}, V_ = (r, t) => {
  const e = Uh();
  for (const i in r) {
    const n = r[i];
    ho(n, e, i, t);
  }
  return e;
}, ho = (r, t, e, i) => {
  const n = r.length;
  for (let s = 0; s < n; s++) {
    const a = r[s];
    Y_(a, t, e, i);
  }
}, Y_ = (r, t, e, i) => {
  if (typeof r == "string") {
    G_(r, t, e);
    return;
  }
  if (typeof r == "function") {
    X_(r, t, e, i);
    return;
  }
  q_(r, t, e, i);
}, G_ = (r, t, e) => {
  const i = r === "" ? t : Yh(t, r);
  i.classGroupId = e;
}, X_ = (r, t, e, i) => {
  if (W_(r)) {
    ho(r(i), t, e, i);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(I_(e, r));
}, q_ = (r, t, e, i) => {
  const n = Object.entries(r), s = n.length;
  for (let a = 0; a < s; a++) {
    const [o, l] = n[a];
    ho(l, Yh(t, o), e, i);
  }
}, Yh = (r, t) => {
  let e = r;
  const i = t.split(ss), n = i.length;
  for (let s = 0; s < n; s++) {
    const a = i[s];
    let o = e.nextPart.get(a);
    o || (o = Uh(), e.nextPart.set(a, o)), e = o;
  }
  return e;
}, W_ = (r) => "isThemeGetter" in r && r.isThemeGetter === !0, j_ = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  const n = (s, a) => {
    e[s] = a, t++, t > r && (t = 0, i = e, e = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let a = e[s];
      if (a !== void 0)
        return a;
      if ((a = i[s]) !== void 0)
        return n(s, a), a;
    },
    set(s, a) {
      s in e ? e[s] = a : n(s, a);
    }
  };
}, Oa = "!", Fl = ":", H_ = [], zl = (r, t, e, i, n) => ({
  modifiers: r,
  hasImportantModifier: t,
  baseClassName: e,
  maybePostfixModifierPosition: i,
  isExternal: n
}), Q_ = (r) => {
  const {
    prefix: t,
    experimentalParseClassName: e
  } = r;
  let i = (n) => {
    const s = [];
    let a = 0, o = 0, l = 0, f;
    const h = n.length;
    for (let d = 0; d < h; d++) {
      const g = n[d];
      if (a === 0 && o === 0) {
        if (g === Fl) {
          s.push(n.slice(l, d)), l = d + 1;
          continue;
        }
        if (g === "/") {
          f = d;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? o++ : g === ")" && o--;
    }
    const u = s.length === 0 ? n : n.slice(l);
    let c = u, p = !1;
    u.endsWith(Oa) ? (c = u.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith(Oa) && (c = u.slice(1), p = !0)
    );
    const _ = f && f > l ? f - l : void 0;
    return zl(s, p, c, _);
  };
  if (t) {
    const n = t + Fl, s = i;
    i = (a) => a.startsWith(n) ? s(a.slice(n.length)) : zl(H_, !1, a, void 0, !0);
  }
  if (e) {
    const n = i;
    i = (s) => e({
      className: s,
      parseClassName: n
    });
  }
  return i;
}, K_ = (r) => {
  const t = /* @__PURE__ */ new Map();
  return r.orderSensitiveModifiers.forEach((e, i) => {
    t.set(e, 1e6 + i);
  }), (e) => {
    const i = [];
    let n = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], o = a[0] === "[", l = t.has(a);
      o || l ? (n.length > 0 && (n.sort(), i.push(...n), n = []), i.push(a)) : n.push(a);
    }
    return n.length > 0 && (n.sort(), i.push(...n)), i;
  };
}, Z_ = (r) => ({
  cache: j_(r.cacheSize),
  parseClassName: Q_(r),
  sortModifiers: K_(r),
  postfixLookupClassGroupIds: $_(r),
  ...N_(r)
}), $_ = (r) => {
  const t = /* @__PURE__ */ Object.create(null), e = r.postfixLookupClassGroups;
  if (e)
    for (let i = 0; i < e.length; i++)
      t[e[i]] = !0;
  return t;
}, J_ = /\s+/, tg = (r, t) => {
  const {
    parseClassName: e,
    getClassGroupId: i,
    getConflictingClassGroupIds: n,
    sortModifiers: s,
    postfixLookupClassGroupIds: a
  } = t, o = [], l = r.trim().split(J_);
  let f = "";
  for (let h = l.length - 1; h >= 0; h -= 1) {
    const u = l[h], {
      isExternal: c,
      modifiers: p,
      hasImportantModifier: _,
      baseClassName: d,
      maybePostfixModifierPosition: g
    } = e(u);
    if (c) {
      f = u + (f.length > 0 ? " " + f : f);
      continue;
    }
    let m = !!g, b;
    if (m) {
      const T = d.substring(0, g);
      b = i(T);
      const w = b && a[b] ? i(d) : void 0;
      w && w !== b && (b = w, m = !1);
    } else
      b = i(d);
    if (!b) {
      if (!m) {
        f = u + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (b = i(d), !b) {
        f = u + (f.length > 0 ? " " + f : f);
        continue;
      }
      m = !1;
    }
    const y = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), v = _ ? y + Oa : y, x = v + b;
    if (o.indexOf(x) > -1)
      continue;
    o.push(x);
    const k = n(b, m);
    for (let T = 0; T < k.length; ++T) {
      const w = k[T];
      o.push(v + w);
    }
    f = u + (f.length > 0 ? " " + f : f);
  }
  return f;
}, eg = (...r) => {
  let t = 0, e, i, n = "";
  for (; t < r.length; )
    (e = r[t++]) && (i = Gh(e)) && (n && (n += " "), n += i);
  return n;
}, Gh = (r) => {
  if (typeof r == "string")
    return r;
  let t, e = "";
  for (let i = 0; i < r.length; i++)
    r[i] && (t = Gh(r[i])) && (e && (e += " "), e += t);
  return e;
}, rg = (r, ...t) => {
  let e, i, n, s;
  const a = (l) => {
    const f = t.reduce((h, u) => u(h), r());
    return e = Z_(f), i = e.cache.get, n = e.cache.set, s = o, o(l);
  }, o = (l) => {
    const f = i(l);
    if (f)
      return f;
    const h = tg(l, e);
    return n(l, h), h;
  };
  return s = a, (...l) => s(eg(...l));
}, ig = [], vt = (r) => {
  const t = (e) => e[r] || ig;
  return t.isThemeGetter = !0, t;
}, Xh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, qh = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ng = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, sg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ag = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, og = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, er = (r) => ng.test(r), V = (r) => !!r && !Number.isNaN(Number(r)), Re = (r) => !!r && Number.isInteger(Number(r)), Ks = (r) => r.endsWith("%") && V(r.slice(0, -1)), Ye = (r) => sg.test(r), Wh = () => !0, hg = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ag.test(r) && !og.test(r)
), uo = () => !1, ug = (r) => lg.test(r), cg = (r) => fg.test(r), dg = (r) => !C(r) && !R(r), pg = (r) => r.startsWith("@container") && (r[10] === "/" && r[11] !== void 0 || r[11] === "s" && r[16] !== void 0 && r.startsWith("-size/", 10) || r[11] === "n" && r[18] !== void 0 && r.startsWith("-normal/", 10)), _g = (r) => yr(r, Qh, uo), C = (r) => Xh.test(r), Mr = (r) => yr(r, Kh, hg), Il = (r) => yr(r, Ag, V), gg = (r) => yr(r, $h, Wh), mg = (r) => yr(r, Zh, uo), Ll = (r) => yr(r, jh, uo), vg = (r) => yr(r, Hh, cg), Fn = (r) => yr(r, Jh, ug), R = (r) => qh.test(r), Gi = (r) => Zr(r, Kh), bg = (r) => Zr(r, Zh), Nl = (r) => Zr(r, jh), yg = (r) => Zr(r, Qh), xg = (r) => Zr(r, Hh), zn = (r) => Zr(r, Jh, !0), wg = (r) => Zr(r, $h, !0), yr = (r, t, e) => {
  const i = Xh.exec(r);
  return i ? i[1] ? t(i[1]) : e(i[2]) : !1;
}, Zr = (r, t, e = !1) => {
  const i = qh.exec(r);
  return i ? i[1] ? t(i[1]) : e : !1;
}, jh = (r) => r === "position" || r === "percentage", Hh = (r) => r === "image" || r === "url", Qh = (r) => r === "length" || r === "size" || r === "bg-size", Kh = (r) => r === "length", Ag = (r) => r === "number", Zh = (r) => r === "family-name", $h = (r) => r === "number" || r === "weight", Jh = (r) => r === "shadow", Tg = () => {
  const r = vt("color"), t = vt("font"), e = vt("text"), i = vt("font-weight"), n = vt("tracking"), s = vt("leading"), a = vt("breakpoint"), o = vt("container"), l = vt("spacing"), f = vt("radius"), h = vt("shadow"), u = vt("inset-shadow"), c = vt("text-shadow"), p = vt("drop-shadow"), _ = vt("blur"), d = vt("perspective"), g = vt("aspect"), m = vt("ease"), b = vt("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], v = () => [
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
  ], x = () => [...v(), R, C], k = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], w = () => [R, C, l], E = () => [er, "full", "auto", ...w()], M = () => [Re, "none", "subgrid", R, C], z = () => ["auto", {
    span: ["full", Re, R, C]
  }, Re, R, C], F = () => [Re, "auto", R, C], I = () => ["auto", "min", "max", "fr", R, C], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Y = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], X = () => ["auto", ...w()], Q = () => [er, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], mt = () => [er, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...w()], Pt = () => [er, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...w()], O = () => [r, R, C], Xt = () => [...v(), Nl, Ll, {
    position: [R, C]
  }], Rt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], qt = () => ["auto", "cover", "contain", yg, _g, {
    size: [R, C]
  }], dt = () => [Ks, Gi, Mr], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    R,
    C
  ], At = () => ["", V, Gi, Mr], xr = () => ["solid", "dashed", "dotted", "double"], An = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], pt = () => [V, Ks, Nl, Ll], $r = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    R,
    C
  ], Jr = () => ["none", V, R, C], ti = () => ["none", V, R, C], ei = () => [V, R, C], ri = () => [er, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ye],
      breakpoint: [Ye],
      color: [Wh],
      container: [Ye],
      "drop-shadow": [Ye],
      ease: ["in", "out", "in-out"],
      font: [dg],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ye],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ye],
      shadow: [Ye],
      spacing: ["px", V],
      text: [Ye],
      "text-shadow": [Ye],
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
        aspect: ["auto", "square", er, C, R, g]
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
        "@container": ["", "normal", "size", R, C]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [pg],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [V, C, R, o]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
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
        object: x()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
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
        inset: E()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": E(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: E()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": E(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: E()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": E()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
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
        z: [Re, "auto", R, C]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [er, "full", "auto", o, ...w()]
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
        flex: [V, er, "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", V, R, C]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", V, R, C]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Re, "first", "last", "none", R, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": M()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": I()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": I()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...S(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Y(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Y()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...S()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Y(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": S()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Y(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Y()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: w()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: X()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: X()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: X()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: X()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: X()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: X()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: X()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: X()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: X()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: X()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: X()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
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
        "space-y": w()
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
        size: Q()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...mt()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...mt()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...mt()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...Pt()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...Pt()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...Pt()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [o, "screen", ...Q()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          o,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Q()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          o,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", e, Gi, Mr]
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
        font: [i, wg, gg]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ks, C]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [bg, mg, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [C]
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
        tracking: [n, R, C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [V, "none", R, Il]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...w()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", R, C]
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
        list: ["disc", "decimal", "none", R, C]
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
        placeholder: O()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: O()
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
        decoration: [...xr(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [V, "from-font", "auto", R, Mr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: O()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [V, "auto", R, C]
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
        indent: w()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Re, R, C]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", R, C]
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
        content: ["none", R, C]
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
        bg: Xt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Rt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: qt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Re, R, C],
          radial: ["", R, C],
          conic: [Re, R, C]
        }, xg, vg]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: O()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: dt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: dt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: dt()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: O()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: $()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": $()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": $()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": $()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": $()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": $()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": $()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": $()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": $()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": $()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": $()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": $()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": $()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": $()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": $()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: At()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": At()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": At()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": At()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": At()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": At()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": At()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": At()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": At()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": At()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": At()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": At()
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
        "divide-y": At()
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
        border: [...xr(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...xr(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: O()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": O()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": O()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": O()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": O()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": O()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": O()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": O()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": O()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": O()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": O()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: O()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...xr(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [V, R, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", V, Gi, Mr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: O()
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
          h,
          zn,
          Fn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: O()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, zn, Fn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": O()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: At()
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
        ring: O()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [V, Mr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": O()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": At()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": O()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", c, zn, Fn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": O()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [V, R, C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...An(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": An()
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
        "mask-linear": [V]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": pt()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": pt()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": O()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": pt()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": pt()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": O()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": pt()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": pt()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": O()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": pt()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": pt()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": O()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": pt()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": pt()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": O()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": pt()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": pt()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": O()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": pt()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": pt()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": O()
      }],
      "mask-image-radial": [{
        "mask-radial": [R, C]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": pt()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": pt()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": O()
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
        "mask-radial-at": v()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [V]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": pt()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": pt()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": O()
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
        mask: Xt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Rt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: qt()
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
        mask: ["none", R, C]
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
          R,
          C
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $r()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [V, R, C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [V, R, C]
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
          p,
          zn,
          Fn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": O()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", V, R, C]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [V, R, C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", V, R, C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [V, R, C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", V, R, C]
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
          R,
          C
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $r()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [V, R, C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [V, R, C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", V, R, C]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [V, R, C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", V, R, C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [V, R, C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [V, R, C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", V, R, C]
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
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", R, C]
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
        duration: [V, "initial", R, C]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", m, R, C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [V, R, C]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, R, C]
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
        perspective: [d, R, C]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": x()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Jr()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Jr()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Jr()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Jr()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ti()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ti()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ti()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ti()
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
        skew: ei()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ei()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ei()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [R, C, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: x()
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
        translate: ri()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ri()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ri()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ri()
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
        zoom: [Re, R, C]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: O()
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
        caret: O()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R, C]
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
        "scrollbar-thumb": O()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": O()
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
        "scroll-m": w()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": w()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": w()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
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
        "will-change": ["auto", "scroll", "contents", "transform", R, C]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...O()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, Gi, Mr, Il]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...O()]
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
}, kg = /* @__PURE__ */ rg(Tg);
function Eg(...r) {
  return kg(Df(r));
}
var Mg = /* @__PURE__ */ xn('<div><div class="absolute inset-0 z-0"><!></div></div>');
function Sg(r, t) {
  cs(t, !0);
  let e = _t(t, "class", 3, ""), i = _t(t, "scale", 3, 1), n = _t(t, "offsetX", 3, 0), s = _t(t, "offsetY", 3, 0), a = _t(t, "autoRotate", 3, !0), o = _t(t, "lockedPolarAngle", 3, !0), l = _t(t, "markers", 19, () => []), f = _t(t, "focusOn", 3, null), h = /* @__PURE__ */ _d(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "class",
    "scale",
    "offsetX",
    "offsetY",
    "fresnelConfig",
    "atmosphereConfig",
    "pointCount",
    "landPointColor",
    "pointSize",
    "autoRotate",
    "lockedPolarAngle",
    "markers",
    "markerTooltip",
    "focusOn"
  ]);
  var u = Mg();
  dd(u, (_) => ({ class: _, ...h }), [
    () => Eg("relative h-full w-full overflow-hidden", e())
  ]);
  var c = Ki(u), p = Ki(c);
  F_(p, {
    get scale() {
      return i();
    },
    get offsetX() {
      return n();
    },
    get offsetY() {
      return s();
    },
    get fresnelConfig() {
      return t.fresnelConfig;
    },
    get atmosphereConfig() {
      return t.atmosphereConfig;
    },
    get pointCount() {
      return t.pointCount;
    },
    get landPointColor() {
      return t.landPointColor;
    },
    get pointSize() {
      return t.pointSize;
    },
    get autoRotate() {
      return a();
    },
    get lockedPolarAngle() {
      return o();
    },
    get markers() {
      return l();
    },
    get markerTooltip() {
      return t.markerTooltip;
    },
    get focusOn() {
      return f();
    }
  }), ui(r, u), ds();
}
function Og(r, t = {}) {
  return Zc(Sg, { target: r, props: t });
}
export {
  Sg as default,
  Og as render,
  Rg as unmount
};
