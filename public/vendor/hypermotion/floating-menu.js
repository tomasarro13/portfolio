var $f = Object.defineProperty;
var Lo = (n) => {
  throw TypeError(n);
};
var eu = (n, e, t) => e in n ? $f(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var We = (n, e, t) => eu(n, typeof e != "symbol" ? e + "" : e, t), us = (n, e, t) => e.has(n) || Lo("Cannot " + t);
var v = (n, e, t) => (us(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Z = (n, e, t) => e.has(n) ? Lo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Q = (n, e, t, r) => (us(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), se = (n, e, t) => (us(n, e, "access private method"), t);
var La = Array.isArray, tu = Array.prototype.indexOf, xn = Array.prototype.includes, rs = Array.from, ru = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, Ba = Object.getOwnPropertyDescriptors, nu = Object.prototype, iu = Array.prototype, io = Object.getPrototypeOf, Bo = Object.isExtensible;
const su = () => {
};
function ou(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Va() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const ze = 2, wn = 4, ns = 8, so = 1 << 24, kt = 16, Et = 32, mr = 64, Ts = 128, vt = 512, Te = 1024, Oe = 2048, It = 4096, Le = 8192, Ct = 16384, Jr = 32768, Vo = 1 << 25, Hr = 65536, Bi = 1 << 17, au = 1 << 18, On = 1 << 19, lu = 1 << 20, Dt = 1 << 25, Kr = 65536, Vi = 1 << 21, un = 1 << 22, dr = 1 << 23, Xn = Symbol("$state"), fu = Symbol(""), Mi = Symbol("attributes"), Ss = Symbol("class"), uu = Symbol("style"), Bn = Symbol("text"), is = new class extends Error {
  constructor() {
    super(...arguments);
    We(this, "name", "StaleReactionError");
    We(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function cu(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function hu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function du(n, e, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function _u(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function pu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function mu(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function gu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function bu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function yu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function xu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const wu = 1, ku = 2, Wa = 4, Tu = 8, Su = 16, Cu = 1, Eu = 2, Ae = Symbol(), Ga = "http://www.w3.org/1999/xhtml";
function Au() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Pu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ja(n) {
  return n === this.v;
}
function Ua(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function qa(n) {
  return !Ua(n, this.v);
}
let at = null;
function kn(n) {
  at = n;
}
function Ya(n, e = !1, t) {
  at = {
    p: at,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    r: (
      /** @type {Effect} */
      ie
    ),
    l: null
  };
}
function Xa(n) {
  var e = (
    /** @type {ComponentContext} */
    at
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      ml(r);
  }
  return e.i = !0, at = e.p, /** @type {T} */
  {};
}
function Ha() {
  return !0;
}
let Mr = [];
function Ka() {
  var n = Mr;
  Mr = [], ou(n);
}
function Br(n) {
  if (Mr.length === 0 && !Hn) {
    var e = Mr;
    queueMicrotask(() => {
      e === Mr && Ka();
    });
  }
  Mr.push(n);
}
function Mu() {
  for (; Mr.length > 0; )
    Ka();
}
function Qa(n) {
  var e = ie;
  if (e === null)
    return re.f |= dr, n;
  if ((e.f & Jr) === 0 && (e.f & wn) === 0)
    throw n;
  fr(n, e);
}
function fr(n, e) {
  for (; e !== null; ) {
    if ((e.f & Ts) !== 0) {
      if ((e.f & Jr) === 0)
        throw n;
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    }
    e = e.parent;
  }
  throw n;
}
const Ou = -7169;
function ge(n, e) {
  n.f = n.f & Ou | e;
}
function oo(n) {
  (n.f & vt) !== 0 || n.deps === null ? ge(n, Te) : ge(n, It);
}
function Za(n) {
  if (n !== null)
    for (const e of n)
      (e.f & ze) === 0 || (e.f & Kr) === 0 || (e.f ^= Kr, Za(
        /** @type {Derived} */
        e.deps
      ));
}
function Ja(n, e, t) {
  (n.f & Oe) !== 0 ? e.add(n) : (n.f & It) !== 0 && t.add(n), Za(n.deps), ge(n, Te);
}
let cs = null, rn = null, oe = null, Cs = null, Tt = null, Es = null, Hn = !1, hs = !1, an = null, Oi = null;
var Wo = 0;
let Ru = 1;
var _n, or, Dr, pn, mn, Nr, gn, Qt, fi, Je, ui, ar, Mt, Ot, vn, bn, ae, As, Vn, Ps, $a, el, Ri, zu, Ms, on;
const $i = class $i {
  constructor() {
    Z(this, ae);
    We(this, "id", Ru++);
    /** True as soon as `#process` was called */
    Z(this, _n, !1);
    We(this, "linked", !0);
    /** @type {Batch | null} */
    Z(this, or, null);
    /** @type {Batch | null} */
    Z(this, Dr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    We(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    We(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    We(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    We(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Z(this, pn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Z(this, mn, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    Z(this, Nr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Z(this, gn, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    Z(this, Qt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Z(this, fi, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    Z(this, Je, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    Z(this, ui, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    Z(this, ar, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    Z(this, Mt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Z(this, Ot, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    Z(this, vn, /* @__PURE__ */ new Set());
    We(this, "is_fork", !1);
    Z(this, bn, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    v(this, Ot).has(e) || v(this, Ot).set(e, { d: [], m: [] }), v(this, vn).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, t = (r) => this.schedule(r)) {
    var r = v(this, Ot).get(e);
    if (r) {
      v(this, Ot).delete(e);
      for (var i of r.d)
        ge(i, Oe), t(i);
      for (i of r.m)
        ge(i, It), t(i);
    }
    v(this, vn).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, t, r = !1) {
    e.v !== Ae && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & dr) === 0 && (this.current.set(e, [t, r]), Tt?.set(e, t)), this.is_fork || (e.v = t);
  }
  activate() {
    oe = this;
  }
  deactivate() {
    oe = null, Tt = null;
  }
  flush() {
    try {
      hs = !0, oe = this, se(this, ae, Vn).call(this);
    } finally {
      Wo = 0, Es = null, an = null, Oi = null, hs = !1, oe = null, Tt = null, Vr.clear();
    }
  }
  discard() {
    for (const e of v(this, mn)) e(this);
    v(this, mn).clear(), v(this, Nr).clear(), se(this, ae, on).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    v(this, ui).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, t) {
    if (Q(this, gn, v(this, gn) + 1), e) {
      let r = v(this, Qt).get(t) ?? 0;
      v(this, Qt).set(t, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, t) {
    if (Q(this, gn, v(this, gn) - 1), e) {
      let r = v(this, Qt).get(t) ?? 0;
      r === 1 ? v(this, Qt).delete(t) : v(this, Qt).set(t, r - 1);
    }
    v(this, bn) || (Q(this, bn, !0), Br(() => {
      Q(this, bn, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, t) {
    for (const r of e)
      v(this, ar).add(r);
    for (const r of t)
      v(this, Mt).add(r);
    e.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    v(this, pn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    v(this, mn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    v(this, Nr).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of v(this, Nr)) e(this);
    v(this, Nr).clear();
  }
  settled() {
    return (v(this, fi) ?? Q(this, fi, Va())).promise;
  }
  static ensure() {
    var e;
    if (oe === null) {
      const t = oe = new $i();
      se(e = t, ae, Ms).call(e), !hs && !Hn && Br(() => {
        v(t, _n) || t.flush();
      });
    }
    return oe;
  }
  apply() {
    {
      Tt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    if (Es = e, e.b?.is_pending && (e.f & (wn | ns | so)) !== 0 && (e.f & Jr) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var t = e; t.parent !== null; ) {
      t = t.parent;
      var r = t.f;
      if (an !== null && t === ie && (re === null || (re.f & ze) === 0))
        return;
      if ((r & (mr | Et)) !== 0) {
        if ((r & Te) === 0)
          return;
        t.f ^= Te;
      }
    }
    v(this, Je).push(t);
  }
};
_n = new WeakMap(), or = new WeakMap(), Dr = new WeakMap(), pn = new WeakMap(), mn = new WeakMap(), Nr = new WeakMap(), gn = new WeakMap(), Qt = new WeakMap(), fi = new WeakMap(), Je = new WeakMap(), ui = new WeakMap(), ar = new WeakMap(), Mt = new WeakMap(), Ot = new WeakMap(), vn = new WeakMap(), bn = new WeakMap(), ae = new WeakSet(), As = function() {
  if (this.is_fork) return !0;
  for (const r of v(this, Qt).keys()) {
    for (var e = r, t = !1; e.parent !== null; ) {
      if (v(this, Ot).has(e)) {
        t = !0;
        break;
      }
      e = e.parent;
    }
    if (!t)
      return !0;
  }
  return !1;
}, Vn = function() {
  var l, f, u;
  if (Q(this, _n, !0), Wo++ > 1e3 && (se(this, ae, on).call(this), Nu()), !se(this, ae, As).call(this)) {
    for (const c of v(this, ar))
      v(this, Mt).delete(c), ge(c, Oe), this.schedule(c);
    for (const c of v(this, Mt))
      ge(c, It), this.schedule(c);
  }
  const e = v(this, Je);
  Q(this, Je, []), this.apply();
  var t = an = [], r = [], i = Oi = [];
  for (const c of e)
    try {
      se(this, ae, Ps).call(this, c, t, r);
    } catch (h) {
      throw nl(c), h;
    }
  if (oe = null, i.length > 0) {
    var s = $i.ensure();
    for (const c of i)
      s.schedule(c);
  }
  if (an = null, Oi = null, se(this, ae, As).call(this)) {
    se(this, ae, Ri).call(this, r), se(this, ae, Ri).call(this, t);
    for (const [c, h] of v(this, Ot))
      rl(c, h);
    i.length > 0 && /** @type {unknown} */
    se(l = oe, ae, Vn).call(l);
    return;
  }
  const o = se(this, ae, $a).call(this);
  if (o) {
    se(f = o, ae, el).call(f, this);
    return;
  }
  v(this, ar).clear(), v(this, Mt).clear();
  for (const c of v(this, pn)) c(this);
  v(this, pn).clear(), Cs = this, Go(r), Go(t), Cs = null, v(this, fi)?.resolve();
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    oe
  );
  if (this.linked && v(this, gn) === 0 && se(this, ae, on).call(this), v(this, Je).length > 0) {
    a === null && (a = this, se(this, ae, Ms).call(this));
    const c = a;
    v(c, Je).push(...v(this, Je).filter((h) => !v(c, Je).includes(h)));
  }
  a !== null && se(u = a, ae, Vn).call(u);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ps = function(e, t, r) {
  e.f ^= Te;
  for (var i = e.first; i !== null; ) {
    var s = i.f, o = (s & (Et | mr)) !== 0, a = o && (s & Te) !== 0, l = a || (s & Le) !== 0 || v(this, Ot).has(i);
    if (!l && i.fn !== null) {
      o ? i.f ^= Te : (s & wn) !== 0 ? t.push(i) : mi(i) && ((s & kt) !== 0 && v(this, Mt).add(i), Sn(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var u = i.next;
      if (u !== null) {
        i = u;
        break;
      }
      i = i.parent;
    }
  }
}, $a = function() {
  for (var e = v(this, or); e !== null; ) {
    if (!e.is_fork) {
      for (const [t, [, r]] of this.current)
        if (e.current.has(t) && !r)
          return e;
    }
    e = v(e, or);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
el = function(e) {
  var r;
  for (const [i, s] of e.current)
    !this.previous.has(i) && e.previous.has(i) && this.previous.set(i, e.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of e.async_deriveds) {
    const o = this.async_deriveds.get(i);
    o && s.promise.then(o.resolve);
  }
  const t = (i) => {
    var s = i.reactions;
    if (s !== null)
      for (const l of s) {
        var o = l.f;
        if ((o & ze) !== 0)
          t(
            /** @type {Derived} */
            l
          );
        else {
          var a = (
            /** @type {Effect} */
            l
          );
          o & (un | kt) && !this.async_deriveds.has(a) && (v(this, Mt).delete(a), ge(a, Oe), this.schedule(a));
        }
      }
  };
  for (const i of this.current.keys())
    t(i);
  this.oncommit(() => e.discard()), se(r = e, ae, on).call(r), oe = this, se(this, ae, Vn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Ri = function(e) {
  for (var t = 0; t < e.length; t += 1)
    Ja(e[t], v(this, ar), v(this, Mt));
}, zu = function() {
  var u;
  se(this, ae, on).call(this);
  for (let c = cs; c !== null; c = v(c, Dr)) {
    var e = c.id < this.id, t = [];
    for (const [h, [_, m]] of this.current) {
      if (c.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (e && _ !== r)
          c.current.set(h, [_, m]);
        else
          continue;
      }
      t.push(h);
    }
    if (e)
      for (const [h, _] of this.async_deriveds) {
        const m = c.async_deriveds.get(h);
        m && _.promise.then(m.resolve);
      }
    if (v(c, _n)) {
      var i = [...c.current.keys()].filter((h) => !this.current.has(h));
      if (i.length === 0)
        e && c.discard();
      else if (t.length > 0) {
        if (e)
          for (const h of v(this, vn))
            c.unskip_effect(h, (_) => {
              var m;
              (_.f & (kt | un)) !== 0 ? c.schedule(_) : se(m = c, ae, Ri).call(m, [_]);
            });
        c.activate();
        var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var a of t)
          tl(a, i, s, o);
        o = /* @__PURE__ */ new Map();
        var l = [...c.current.keys()].filter(
          (h) => this.current.has(h) ? (
            /** @type {[any, boolean]} */
            this.current.get(h)[0] !== h.v
          ) : !0
        );
        if (l.length > 0)
          for (const h of v(this, ui))
            (h.f & (Ct | Le | Bi)) === 0 && ao(h, l, o) && ((h.f & (un | kt)) !== 0 ? (ge(h, Oe), c.schedule(h)) : v(c, ar).add(h));
        if (v(c, Je).length > 0) {
          c.apply();
          for (var f of v(c, Je))
            se(u = c, ae, Ps).call(u, f, [], []);
          Q(c, Je, []);
        }
        c.deactivate();
      }
    }
  }
}, Ms = function() {
  rn === null ? cs = rn = this : (Q(rn, Dr, this), Q(this, or, rn)), rn = this;
}, on = function() {
  var e = v(this, or), t = v(this, Dr);
  e === null ? cs = t : Q(e, Dr, t), t === null ? rn = e : Q(t, or, e), this.linked = !1;
};
let Qr = $i;
function Du(n) {
  var e = Hn;
  Hn = !0;
  try {
    for (var t; ; ) {
      if (Mu(), oe === null)
        return (
          /** @type {T} */
          t
        );
      oe.flush();
    }
  } finally {
    Hn = e;
  }
}
function Nu() {
  try {
    gu();
  } catch (n) {
    fr(n, Es);
  }
}
let Xt = null;
function Go(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if ((r.f & (Ct | Le)) === 0 && mi(r) && (Xt = /* @__PURE__ */ new Set(), Sn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && yl(r), Xt?.size > 0)) {
        Vr.clear();
        for (const i of Xt) {
          if ((i.f & (Ct | Le)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            Xt.has(o) && (Xt.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (Ct | Le)) === 0 && Sn(l);
          }
        }
        Xt.clear();
      }
    }
    Xt = null;
  }
}
function tl(n, e, t, r) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const i of n.reactions) {
      const s = i.f;
      (s & ze) !== 0 ? tl(
        /** @type {Derived} */
        i,
        e,
        t,
        r
      ) : (s & (un | kt)) !== 0 && (s & Oe) === 0 && ao(i, e, r) && (ge(i, Oe), lo(
        /** @type {Effect} */
        i
      ));
    }
}
function ao(n, e, t) {
  const r = t.get(n);
  if (r !== void 0) return r;
  if (n.deps !== null)
    for (const i of n.deps) {
      if (xn.call(e, i))
        return !0;
      if ((i.f & ze) !== 0 && ao(
        /** @type {Derived} */
        i,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function lo(n) {
  oe.schedule(n);
}
function rl(n, e) {
  if (!((n.f & Et) !== 0 && (n.f & Te) !== 0)) {
    (n.f & Oe) !== 0 ? e.d.push(n) : (n.f & It) !== 0 && e.m.push(n), ge(n, Te);
    for (var t = n.first; t !== null; )
      rl(t, e), t = t.next;
  }
}
function nl(n) {
  ge(n, Te);
  for (var e = n.first; e !== null; )
    nl(e), e = e.next;
}
function Iu(n) {
  let e = 0, t = Zr(0), r;
  return () => {
    uo() && (me(t), vl(() => (e === 0 && (r = os(() => n(() => Kn(t)))), e += 1, () => {
      Br(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, Kn(t));
      });
    })));
  };
}
var Fu = Hr | On;
function Lu(n, e, t, r) {
  new Bu(n, e, t, r);
}
var dt, no, _t, Ir, Ge, pt, Fe, $e, Zt, Fr, lr, yn, ci, hi, Jt, es, be, Vu, Wu, Gu, Os, zi, Di, Rs, zs;
class Bu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, r, i) {
    Z(this, be);
    /** @type {Boundary | null} */
    We(this, "parent");
    We(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    We(this, "transform_error");
    /** @type {TemplateNode} */
    Z(this, dt);
    /** @type {TemplateNode | null} */
    Z(this, no, null);
    /** @type {BoundaryProps} */
    Z(this, _t);
    /** @type {((anchor: Node) => void)} */
    Z(this, Ir);
    /** @type {Effect} */
    Z(this, Ge);
    /** @type {Effect | null} */
    Z(this, pt, null);
    /** @type {Effect | null} */
    Z(this, Fe, null);
    /** @type {Effect | null} */
    Z(this, $e, null);
    /** @type {DocumentFragment | null} */
    Z(this, Zt, null);
    Z(this, Fr, 0);
    Z(this, lr, 0);
    Z(this, yn, !1);
    /** @type {Set<Effect>} */
    Z(this, ci, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    Z(this, hi, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Z(this, Jt, null);
    Z(this, es, Iu(() => (Q(this, Jt, Zr(v(this, Fr))), () => {
      Q(this, Jt, null);
    })));
    Q(this, dt, e), Q(this, _t, t), Q(this, Ir, (s) => {
      var o = (
        /** @type {Effect} */
        ie
      );
      o.b = this, o.f |= Ts, r(s);
    }), this.parent = /** @type {Effect} */
    ie.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), Q(this, Ge, ss(() => {
      se(this, be, Os).call(this);
    }, Fu));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Ja(e, v(this, ci), v(this, hi));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!v(this, _t).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, t) {
    se(this, be, Rs).call(this, e, t), Q(this, Fr, v(this, Fr) + e), !(!v(this, Jt) || v(this, yn)) && (Q(this, yn, !0), Br(() => {
      Q(this, yn, !1), v(this, Jt) && Tn(v(this, Jt), v(this, Fr));
    }));
  }
  get_effect_pending() {
    return v(this, es).call(this), me(
      /** @type {Source<number>} */
      v(this, Jt)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!v(this, _t).onerror && !v(this, _t).failed)
      throw e;
    oe?.is_fork ? (v(this, pt) && oe.skip_effect(v(this, pt)), v(this, Fe) && oe.skip_effect(v(this, Fe)), v(this, $e) && oe.skip_effect(v(this, $e)), oe.on_fork_commit(() => {
      se(this, be, zs).call(this, e);
    })) : se(this, be, zs).call(this, e);
  }
}
dt = new WeakMap(), no = new WeakMap(), _t = new WeakMap(), Ir = new WeakMap(), Ge = new WeakMap(), pt = new WeakMap(), Fe = new WeakMap(), $e = new WeakMap(), Zt = new WeakMap(), Fr = new WeakMap(), lr = new WeakMap(), yn = new WeakMap(), ci = new WeakMap(), hi = new WeakMap(), Jt = new WeakMap(), es = new WeakMap(), be = new WeakSet(), Vu = function() {
  try {
    Q(this, pt, tt(() => v(this, Ir).call(this, v(this, dt))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Wu = function(e) {
  const t = v(this, _t).failed;
  t && Q(this, $e, tt(() => {
    t(
      v(this, dt),
      () => e,
      () => () => {
      }
    );
  }));
}, Gu = function() {
  const e = v(this, _t).pending;
  e && (this.is_pending = !0, Q(this, Fe, tt(() => e(v(this, dt)))), Br(() => {
    var t = Q(this, Zt, document.createDocumentFragment()), r = Wr();
    t.append(r), Q(this, pt, se(this, be, Di).call(this, () => tt(() => v(this, Ir).call(this, r)))), v(this, lr) === 0 && (v(this, dt).before(t), Q(this, Zt, null), Gr(
      /** @type {Effect} */
      v(this, Fe),
      () => {
        Q(this, Fe, null);
      }
    ), se(this, be, zi).call(
      this,
      /** @type {Batch} */
      oe
    ));
  }));
}, Os = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Q(this, lr, 0), Q(this, Fr, 0), Q(this, pt, tt(() => {
      v(this, Ir).call(this, v(this, dt));
    })), v(this, lr) > 0) {
      var e = Q(this, Zt, document.createDocumentFragment());
      _o(v(this, pt), e);
      const t = (
        /** @type {(anchor: Node) => void} */
        v(this, _t).pending
      );
      Q(this, Fe, tt(() => t(v(this, dt))));
    } else
      se(this, be, zi).call(
        this,
        /** @type {Batch} */
        oe
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
zi = function(e) {
  this.is_pending = !1, e.transfer_effects(v(this, ci), v(this, hi));
}, /**
 * @template T
 * @param {() => T} fn
 */
Di = function(e) {
  var t = ie, r = re, i = at;
  Ft(v(this, Ge)), yt(v(this, Ge)), kn(v(this, Ge).ctx);
  try {
    return Qr.ensure(), e();
  } catch (s) {
    return Qa(s), null;
  } finally {
    Ft(t), yt(r), kn(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Rs = function(e, t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && se(r = this.parent, be, Rs).call(r, e, t);
    return;
  }
  Q(this, lr, v(this, lr) + e), v(this, lr) === 0 && (se(this, be, zi).call(this, t), v(this, Fe) && Gr(v(this, Fe), () => {
    Q(this, Fe, null);
  }), v(this, Zt) && (v(this, dt).before(v(this, Zt)), Q(this, Zt, null)));
}, /**
 * @param {unknown} error
 */
zs = function(e) {
  v(this, pt) && (Be(v(this, pt)), Q(this, pt, null)), v(this, Fe) && (Be(v(this, Fe)), Q(this, Fe, null)), v(this, $e) && (Be(v(this, $e)), Q(this, $e, null));
  var t = v(this, _t).onerror;
  let r = v(this, _t).failed;
  var i = !1, s = !1;
  const o = () => {
    if (i) {
      Pu();
      return;
    }
    i = !0, s && xu(), v(this, $e) !== null && Gr(v(this, $e), () => {
      Q(this, $e, null);
    }), se(this, be, Di).call(this, () => {
      se(this, be, Os).call(this);
    });
  }, a = (l) => {
    try {
      s = !0, t?.(l, o), s = !1;
    } catch (f) {
      fr(f, v(this, Ge) && v(this, Ge).parent);
    }
    r && Q(this, $e, se(this, be, Di).call(this, () => {
      try {
        return tt(() => {
          var f = (
            /** @type {Effect} */
            ie
          );
          f.b = this, f.f |= Ts, r(
            v(this, dt),
            () => l,
            () => o
          );
        });
      } catch (f) {
        return fr(
          f,
          /** @type {Effect} */
          v(this, Ge).parent
        ), null;
      }
    }));
  };
  Br(() => {
    var l;
    try {
      l = this.transform_error(e);
    } catch (f) {
      fr(f, v(this, Ge) && v(this, Ge).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      a,
      /** @param {unknown} e */
      (f) => fr(f, v(this, Ge) && v(this, Ge).parent)
    ) : a(l);
  });
};
function ju(n, e, t, r) {
  const i = sl;
  var s = n.filter((h) => !h.settled);
  if (t.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    ie
  ), a = Uu(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    if ((o.f & Ct) === 0) {
      a();
      try {
        r(h);
      } catch (_) {
        fr(_, o);
      }
      Wi();
    }
  }
  var u = il();
  if (t.length === 0) {
    l.then(() => f(e.map(i))).finally(u);
    return;
  }
  function c() {
    Promise.all(t.map((h) => /* @__PURE__ */ qu(h))).then((h) => f([...e.map(i), ...h])).catch((h) => fr(h, o)).finally(u);
  }
  l ? l.then(() => {
    a(), c(), Wi();
  }) : c();
}
function Uu() {
  var n = (
    /** @type {Effect} */
    ie
  ), e = re, t = at, r = (
    /** @type {Batch} */
    oe
  );
  return function(s = !0) {
    Ft(n), yt(e), kn(t), s && (n.f & Ct) === 0 && (r?.activate(), r?.apply());
  };
}
function Wi(n = !0) {
  Ft(null), yt(null), kn(null), n && oe?.deactivate();
}
function il() {
  var n = (
    /** @type {Effect} */
    ie
  ), e = (
    /** @type {Boundary} */
    n.b
  ), t = (
    /** @type {Batch} */
    oe
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r, n), () => {
    e.update_pending_count(-1, t), t.decrement(r, n);
  };
}
// @__NO_SIDE_EFFECTS__
function sl(n) {
  var e = ze | Oe;
  return ie !== null && (ie.f |= On), {
    ctx: at,
    deps: null,
    effects: null,
    equals: ja,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ae
    ),
    wv: 0,
    parent: ie,
    ac: null
  };
}
const wi = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function qu(n, e, t) {
  let r = (
    /** @type {Effect | null} */
    ie
  );
  r === null && hu();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Zr(
    /** @type {V} */
    Ae
  ), o = !re, a = /* @__PURE__ */ new Set();
  return ic(() => {
    var l = (
      /** @type {Effect} */
      ie
    ), f = Va();
    i = f.promise;
    try {
      Promise.resolve(n()).then(f.resolve, (_) => {
        _ !== is && f.reject(_);
      }).finally(Wi);
    } catch (_) {
      f.reject(_), Wi();
    }
    var u = (
      /** @type {Batch} */
      oe
    );
    if (o) {
      if ((l.f & Jr) !== 0)
        var c = il();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        u.async_deriveds.get(l)?.reject(wi);
      else
        for (const _ of a.values())
          _.reject(wi);
      a.add(f), u.async_deriveds.set(l, f);
    }
    const h = (_, m = void 0) => {
      c?.(), a.delete(f), m !== wi && (u.activate(), m ? (s.f |= dr, Tn(s, m)) : ((s.f & dr) !== 0 && (s.f ^= dr), Tn(s, _)), u.deactivate());
    };
    f.promise.then(h, (_) => h(null, _ || "unknown"));
  }), rc(() => {
    for (const l of a)
      l.reject(wi);
  }), new Promise((l) => {
    function f(u) {
      function c() {
        u === i ? l(s) : f(i);
      }
      u.then(c, c);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Yu(n) {
  const e = /* @__PURE__ */ sl(n);
  return e.equals = qa, e;
}
function Xu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Be(
        /** @type {Effect} */
        e[t]
      );
  }
}
function fo(n) {
  var e, t = ie, r = n.parent;
  if (!gr && r !== null && (r.f & (Ct | Le)) !== 0)
    return Au(), n.v;
  Ft(r);
  try {
    n.f &= ~Kr, Xu(n), e = Cl(n);
  } finally {
    Ft(t);
  }
  return e;
}
function ol(n) {
  var e = fo(n);
  if (!n.equals(e) && (n.wv = Tl(), (!oe?.is_fork || n.deps === null) && (oe !== null ? (oe.capture(n, e, !0), Cs?.capture(n, e, !0)) : n.v = e, n.deps === null))) {
    ge(n, Te);
    return;
  }
  gr || (Tt !== null ? (uo() || oe?.is_fork) && Tt.set(n, e) : oo(n));
}
function Hu(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(is), e.teardown = su, e.ac = null, $n(e, 0), co(e));
}
function al(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      e.teardown && Sn(e);
}
let Gi = /* @__PURE__ */ new Set();
const Vr = /* @__PURE__ */ new Map();
let ll = !1;
function Zr(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: ja,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function Yt(n, e) {
  const t = Zr(n);
  return lc(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ku(n, e = !1, t = !0) {
  const r = Zr(n);
  return e || (r.equals = qa), r;
}
function ir(n, e, t = !1) {
  re !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!St || (re.f & Bi) !== 0) && Ha() && (re.f & (ze | kt | un | Bi)) !== 0 && (bt === null || !xn.call(bt, n)) && yu();
  let r = t ? Wn(e) : e;
  return Tn(n, r, Oi);
}
function Tn(n, e, t = null) {
  if (!n.equals(e)) {
    Vr.set(n, gr ? e : n.v);
    var r = Qr.ensure();
    if (r.capture(n, e), (n.f & ze) !== 0) {
      const i = (
        /** @type {Derived} */
        n
      );
      (n.f & Oe) !== 0 && fo(i), Tt === null && oo(i);
    }
    n.wv = Tl(), fl(n, Oe, t), ie !== null && (ie.f & Te) !== 0 && (ie.f & (Et | mr)) === 0 && (ht === null ? fc([n]) : ht.push(n)), !r.is_fork && Gi.size > 0 && !ll && Qu();
  }
  return e;
}
function Qu() {
  ll = !1;
  for (const n of Gi) {
    (n.f & Te) !== 0 && ge(n, It);
    let e;
    try {
      e = mi(n);
    } catch {
      e = !0;
    }
    e && Sn(n);
  }
  Gi.clear();
}
function Kn(n) {
  ir(n, n.v + 1);
}
function fl(n, e, t) {
  var r = n.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var o = r[s], a = o.f, l = (a & Oe) === 0;
      if (l && ge(o, e), (a & Bi) !== 0)
        Gi.add(
          /** @type {Effect} */
          o
        );
      else if ((a & ze) !== 0) {
        var f = (
          /** @type {Derived} */
          o
        );
        Tt?.delete(f), (a & Kr) === 0 && (a & vt && (ie === null || (ie.f & Vi) === 0) && (o.f |= Kr), fl(f, It, t));
      } else if (l) {
        var u = (
          /** @type {Effect} */
          o
        );
        (a & kt) !== 0 && Xt !== null && Xt.add(u), t !== null ? t.push(u) : lo(u);
      }
    }
}
function Wn(n) {
  if (typeof n != "object" || n === null || Xn in n)
    return n;
  const e = io(n);
  if (e !== nu && e !== iu)
    return n;
  var t = /* @__PURE__ */ new Map(), r = La(n), i = /* @__PURE__ */ Yt(0), s = jr, o = (a) => {
    if (jr === s)
      return a();
    var l = re, f = jr;
    yt(null), Yo(s);
    var u = a();
    return yt(l), Yo(f), u;
  };
  return r && t.set("length", /* @__PURE__ */ Yt(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(a, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && vu();
        var u = t.get(l);
        return u === void 0 ? o(() => {
          var c = /* @__PURE__ */ Yt(f.value);
          return t.set(l, c), c;
        }) : ir(u, f.value, !0), !0;
      },
      deleteProperty(a, l) {
        var f = t.get(l);
        if (f === void 0) {
          if (l in a) {
            const u = o(() => /* @__PURE__ */ Yt(Ae));
            t.set(l, u), Kn(i);
          }
        } else
          ir(f, Ae), Kn(i);
        return !0;
      },
      get(a, l, f) {
        if (l === Xn)
          return n;
        var u = t.get(l), c = l in a;
        if (u === void 0 && (!c || Yn(a, l)?.writable) && (u = o(() => {
          var _ = Wn(c ? a[l] : Ae), m = /* @__PURE__ */ Yt(_);
          return m;
        }), t.set(l, u)), u !== void 0) {
          var h = me(u);
          return h === Ae ? void 0 : h;
        }
        return Reflect.get(a, l, f);
      },
      getOwnPropertyDescriptor(a, l) {
        var f = Reflect.getOwnPropertyDescriptor(a, l);
        if (f && "value" in f) {
          var u = t.get(l);
          u && (f.value = me(u));
        } else if (f === void 0) {
          var c = t.get(l), h = c?.v;
          if (c !== void 0 && h !== Ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return f;
      },
      has(a, l) {
        if (l === Xn)
          return !0;
        var f = t.get(l), u = f !== void 0 && f.v !== Ae || Reflect.has(a, l);
        if (f !== void 0 || ie !== null && (!u || Yn(a, l)?.writable)) {
          f === void 0 && (f = o(() => {
            var h = u ? Wn(a[l]) : Ae, _ = /* @__PURE__ */ Yt(h);
            return _;
          }), t.set(l, f));
          var c = me(f);
          if (c === Ae)
            return !1;
        }
        return u;
      },
      set(a, l, f, u) {
        var c = t.get(l), h = l in a;
        if (r && l === "length")
          for (var _ = f; _ < /** @type {Source<number>} */
          c.v; _ += 1) {
            var m = t.get(_ + "");
            m !== void 0 ? ir(m, Ae) : _ in a && (m = o(() => /* @__PURE__ */ Yt(Ae)), t.set(_ + "", m));
          }
        if (c === void 0)
          (!h || Yn(a, l)?.writable) && (c = o(() => /* @__PURE__ */ Yt(void 0)), ir(c, Wn(f)), t.set(l, c));
        else {
          h = c.v !== Ae;
          var d = o(() => Wn(f));
          ir(c, d);
        }
        var p = Reflect.getOwnPropertyDescriptor(a, l);
        if (p?.set && p.set.call(u, f), !h) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              t.get("length")
            ), b = Number(l);
            Number.isInteger(b) && b >= y.v && ir(y, b + 1);
          }
          Kn(i);
        }
        return !0;
      },
      ownKeys(a) {
        me(i);
        var l = Reflect.ownKeys(a).filter((c) => {
          var h = t.get(c);
          return h === void 0 || h.v !== Ae;
        });
        for (var [f, u] of t)
          u.v !== Ae && !(f in a) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        bu();
      }
    }
  );
}
var jo, ul, cl, hl;
function Zu() {
  if (jo === void 0) {
    jo = window, ul = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    cl = Yn(e, "firstChild").get, hl = Yn(e, "nextSibling").get, Bo(n) && (n[Ss] = void 0, n[Mi] = null, n[uu] = void 0, n.__e = void 0), Bo(t) && (t[Bn] = void 0);
  }
}
function Wr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function ji(n) {
  return (
    /** @type {TemplateNode | null} */
    cl.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function pi(n) {
  return (
    /** @type {TemplateNode | null} */
    hl.call(n)
  );
}
function Ie(n, e) {
  return /* @__PURE__ */ ji(n);
}
function Uo(n, e = !1) {
  {
    var t = /* @__PURE__ */ ji(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ pi(t) : t;
  }
}
function Ut(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ pi(r);
  return r;
}
function Ju(n) {
  n.textContent = "";
}
function dl() {
  return !1;
}
function $u(n, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ga, n, void 0)
  );
}
function _l(n) {
  var e = re, t = ie;
  yt(null), Ft(null);
  try {
    return n();
  } finally {
    yt(e), Ft(t);
  }
}
function ec(n) {
  ie === null && (re === null && mu(), pu()), gr && _u();
}
function tc(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Bt(n, e) {
  var t = ie;
  t !== null && (t.f & Le) !== 0 && (n |= Le);
  var r = {
    ctx: at,
    deps: null,
    nodes: null,
    f: n | Oe | vt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: t,
    b: t && t.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  oe?.register_created_effect(r);
  var i = r;
  if ((n & wn) !== 0)
    an !== null ? an.push(r) : Qr.ensure().schedule(r);
  else if (e !== null) {
    try {
      Sn(r);
    } catch (o) {
      throw Be(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & On) === 0 && (i = i.first, (n & kt) !== 0 && (n & Hr) !== 0 && i !== null && (i.f |= Hr));
  }
  if (i !== null && (i.parent = t, t !== null && tc(i, t), re !== null && (re.f & ze) !== 0 && (n & mr) === 0)) {
    var s = (
      /** @type {Derived} */
      re
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function uo() {
  return re !== null && !St;
}
function rc(n) {
  const e = Bt(ns, null);
  return ge(e, Te), e.teardown = n, e;
}
function pl(n) {
  ec();
  var e = (
    /** @type {Effect} */
    ie.f
  ), t = !re && (e & Et) !== 0 && (e & Jr) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      at
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return ml(n);
}
function ml(n) {
  return Bt(wn | lu, n);
}
function nc(n) {
  Qr.ensure();
  const e = Bt(mr | On, n);
  return (t = {}) => new Promise((r) => {
    t.outro ? Gr(e, () => {
      Be(e), r(void 0);
    }) : (Be(e), r(void 0));
  });
}
function gl(n) {
  return Bt(wn, n);
}
function ic(n) {
  return Bt(un | On, n);
}
function vl(n, e = 0) {
  return Bt(ns | e, n);
}
function Tr(n, e = [], t = [], r = []) {
  ju(r, e, t, (i) => {
    Bt(ns, () => n(...i.map(me)));
  });
}
function ss(n, e = 0) {
  var t = Bt(kt | e, n);
  return t;
}
function sc(n, e = 0) {
  var t = Bt(so | e, n);
  return t;
}
function tt(n) {
  return Bt(Et | On, n);
}
function bl(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = gr, r = re;
    qo(!0), yt(null);
    try {
      e.call(null);
    } finally {
      qo(t), yt(r);
    }
  }
}
function co(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && _l(() => {
      i.abort(is);
    });
    var r = t.next;
    (t.f & mr) !== 0 ? t.parent = null : Be(t, e), t = r;
  }
}
function oc(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    (e.f & Et) === 0 && Be(e), e = t;
  }
}
function Be(n, e = !0) {
  var t = !1;
  (e || (n.f & au) !== 0) && n.nodes !== null && n.nodes.end !== null && (ac(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), ge(n, Vo), co(n, e && !t), $n(n, 0);
  var r = n.nodes && n.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  bl(n), n.f ^= Vo, n.f |= Ct;
  var i = n.parent;
  i !== null && i.first !== null && yl(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = n.b = null;
}
function ac(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ pi(n);
    n.remove(), n = t;
  }
}
function yl(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Gr(n, e, t = !0) {
  var r = [];
  xl(n, r, !0);
  var i = () => {
    t && Be(n), e && e();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var a of r)
      a.out(o);
  } else
    i();
}
function xl(n, e, t) {
  if ((n.f & Le) === 0) {
    n.f ^= Le;
    var r = n.nodes && n.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || t) && e.push(a);
    for (var i = n.first; i !== null; ) {
      var s = i.next;
      if ((i.f & mr) === 0) {
        var o = (i.f & Hr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & Et) !== 0 && (n.f & kt) !== 0;
        xl(i, e, o ? t : !1);
      }
      i = s;
    }
  }
}
function ho(n) {
  wl(n, !0);
}
function wl(n, e) {
  if ((n.f & Le) !== 0) {
    n.f ^= Le, (n.f & Te) === 0 && (ge(n, Oe), Qr.ensure().schedule(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & Hr) !== 0 || (t.f & Et) !== 0;
      wl(t, i ? e : !1), t = r;
    }
    var s = n.nodes && n.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || e) && o.in();
  }
}
function _o(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, r = n.nodes.end; t !== null; ) {
      var i = t === r ? null : /* @__PURE__ */ pi(t);
      e.append(t), t = i;
    }
}
let Ni = !1, gr = !1;
function qo(n) {
  gr = n;
}
let re = null, St = !1;
function yt(n) {
  re = n;
}
let ie = null;
function Ft(n) {
  ie = n;
}
let bt = null;
function lc(n) {
  re !== null && (bt === null ? bt = [n] : bt.push(n));
}
let je = null, Ze = 0, ht = null;
function fc(n) {
  ht = n;
}
let kl = 1, Or = 0, jr = Or;
function Yo(n) {
  jr = n;
}
function Tl() {
  return ++kl;
}
function mi(n) {
  var e = n.f;
  if ((e & Oe) !== 0)
    return !0;
  if (e & ze && (n.f &= ~Kr), (e & It) !== 0) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), r = t.length, i = 0; i < r; i++) {
      var s = t[i];
      if (mi(
        /** @type {Derived} */
        s
      ) && ol(
        /** @type {Derived} */
        s
      ), s.wv > n.wv)
        return !0;
    }
    (e & vt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Tt === null && ge(n, Te);
  }
  return !1;
}
function Sl(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(bt !== null && xn.call(bt, n)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & ze) !== 0 ? Sl(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? ge(s, Oe) : (s.f & Te) !== 0 && ge(s, It), lo(
        /** @type {Effect} */
        s
      ));
    }
}
function Cl(n) {
  var d;
  var e = je, t = Ze, r = ht, i = re, s = bt, o = at, a = St, l = jr, f = n.f;
  je = /** @type {null | Value[]} */
  null, Ze = 0, ht = null, re = (f & (Et | mr)) === 0 ? n : null, bt = null, kn(n.ctx), St = !1, jr = ++Or, n.ac !== null && (_l(() => {
    n.ac.abort(is);
  }), n.ac = null);
  try {
    n.f |= Vi;
    var u = (
      /** @type {Function} */
      n.fn
    ), c = u();
    n.f |= Jr;
    var h = n.deps, _ = oe?.is_fork;
    if (je !== null) {
      var m;
      if (_ || $n(n, Ze), h !== null && Ze > 0)
        for (h.length = Ze + je.length, m = 0; m < je.length; m++)
          h[Ze + m] = je[m];
      else
        n.deps = h = je;
      if (uo() && (n.f & vt) !== 0)
        for (m = Ze; m < h.length; m++)
          ((d = h[m]).reactions ?? (d.reactions = [])).push(n);
    } else !_ && h !== null && Ze < h.length && ($n(n, Ze), h.length = Ze);
    if (Ha() && ht !== null && !St && h !== null && (n.f & (ze | It | Oe)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      ht.length; m++)
        Sl(
          ht[m],
          /** @type {Effect} */
          n
        );
    if (i !== null && i !== n) {
      if (Or++, i.deps !== null)
        for (let p = 0; p < t; p += 1)
          i.deps[p].rv = Or;
      if (e !== null)
        for (const p of e)
          p.rv = Or;
      ht !== null && (r === null ? r = ht : r.push(.../** @type {Source[]} */
      ht));
    }
    return (n.f & dr) !== 0 && (n.f ^= dr), c;
  } catch (p) {
    return Qa(p);
  } finally {
    n.f ^= Vi, je = e, Ze = t, ht = r, re = i, bt = s, kn(o), St = a, jr = l;
  }
}
function uc(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = tu.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  if (t === null && (e.f & ze) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (je === null || !xn.call(je, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & vt) !== 0 && (s.f ^= vt, s.f &= ~Kr), s.v !== Ae && oo(s), Hu(s), $n(s, 0);
  }
}
function $n(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      uc(n, t[r]);
}
function Sn(n) {
  var e = n.f;
  if ((e & Ct) === 0) {
    ge(n, Te);
    var t = ie, r = Ni;
    ie = n, Ni = !0;
    try {
      (e & (kt | so)) !== 0 ? oc(n) : co(n), bl(n);
      var i = Cl(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = kl;
      var s;
    } finally {
      Ni = r, ie = t;
    }
  }
}
async function cc() {
  await Promise.resolve(), Du();
}
function me(n) {
  var e = n.f, t = (e & ze) !== 0;
  if (re !== null && !St) {
    var r = ie !== null && (ie.f & Ct) !== 0;
    if (!r && (bt === null || !xn.call(bt, n))) {
      var i = re.deps;
      if ((re.f & Vi) !== 0)
        n.rv < Or && (n.rv = Or, je === null && i !== null && i[Ze] === n ? Ze++ : je === null ? je = [n] : je.push(n));
      else {
        (re.deps ?? (re.deps = [])).push(n);
        var s = n.reactions;
        s === null ? n.reactions = [re] : xn.call(s, re) || s.push(re);
      }
    }
  }
  if (gr && Vr.has(n))
    return Vr.get(n);
  if (t) {
    var o = (
      /** @type {Derived} */
      n
    );
    if (gr) {
      var a = o.v;
      return ((o.f & Te) === 0 && o.reactions !== null || Al(o)) && (a = fo(o)), Vr.set(o, a), a;
    }
    var l = (o.f & vt) === 0 && !St && re !== null && (Ni || (re.f & vt) !== 0), f = (o.f & Jr) === 0;
    mi(o) && (l && (o.f |= vt), ol(o)), l && !f && (al(o), El(o));
  }
  if (Tt?.has(n))
    return Tt.get(n);
  if ((n.f & dr) !== 0)
    throw n.v;
  return n.v;
}
function El(n) {
  if (n.f |= vt, n.deps !== null)
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), (e.f & ze) !== 0 && (e.f & vt) === 0 && (al(
        /** @type {Derived} */
        e
      ), El(
        /** @type {Derived} */
        e
      ));
}
function Al(n) {
  if (n.v === Ae) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Vr.has(e) || (e.f & ze) !== 0 && Al(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function os(n) {
  var e = St;
  try {
    return St = !0, n();
  } finally {
    St = e;
  }
}
function hc(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (Xn in n)
      Ds(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && Xn in t && Ds(t);
      }
  }
}
function Ds(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        Ds(n[r], e);
      } catch {
      }
    const t = io(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = Ba(t);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(n);
          } catch {
          }
      }
    }
  }
}
const dc = ["touchstart", "touchmove"];
function _c(n) {
  return dc.includes(n);
}
const Rr = Symbol("events"), Pl = /* @__PURE__ */ new Set(), Ns = /* @__PURE__ */ new Set();
function ds(n, e, t) {
  (e[Rr] ?? (e[Rr] = {}))[n] = t;
}
function pc(n) {
  for (var e = 0; e < n.length; e++)
    Pl.add(n[e]);
  for (var t of Ns)
    t(n);
}
let Xo = null;
function Ho(n) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = n.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  Xo = n;
  var o = 0, a = Xo === n && n[Rr];
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n[Rr] = e;
      return;
    }
    var f = i.indexOf(e);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (s = /** @type {Element} */
  i[o] || n.target, s !== e) {
    ru(n, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var u = re, c = ie;
    yt(null), Ft(null);
    try {
      for (var h, _ = []; s !== null; ) {
        var m = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var d = s[Rr]?.[r];
          d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === s) && d.call(s, n);
        } catch (p) {
          h ? _.push(p) : h = p;
        }
        if (n.cancelBubble || m === e || m === null)
          break;
        s = m;
      }
      if (h) {
        for (let p of _)
          queueMicrotask(() => {
            throw p;
          });
        throw h;
      }
    } finally {
      n[Rr] = e, delete n.currentTarget, yt(u), Ft(c);
    }
  }
}
const mc = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function gc(n) {
  return (
    /** @type {string} */
    mc?.createHTML(n) ?? n
  );
}
function vc(n) {
  var e = $u("template");
  return e.innerHTML = gc(n.replaceAll("<!>", "<!---->")), e.content;
}
function Ko(n, e) {
  var t = (
    /** @type {Effect} */
    ie
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function $r(n, e) {
  var t = (e & Cu) !== 0, r = (e & Eu) !== 0, i, s = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = vc(s ? n : "<!>" + n), t || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ ji(i)));
    var o = (
      /** @type {TemplateNode} */
      r || ul ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ji(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ko(a, l);
    } else
      Ko(o, o);
    return o;
  };
}
function Sr(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function ki(n, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== /** @type {any} */
  (n[Bn] ?? (n[Bn] = n.nodeValue)) && (n[Bn] = t, n.nodeValue = `${t}`);
}
function bc(n, e) {
  return yc(n, e);
}
const Ti = /* @__PURE__ */ new Map();
function yc(n, { target: e, anchor: t, props: r = {}, events: i, context: s, intro: o = !0, transformError: a }) {
  Zu();
  var l = void 0, f = nc(() => {
    var u = t ?? e.appendChild(Wr());
    Lu(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (_) => {
        Ya({});
        var m = (
          /** @type {ComponentContext} */
          at
        );
        s && (m.c = s), i && (r.$$events = i), l = n(_, r) || {}, Xa();
      },
      a
    );
    var c = /* @__PURE__ */ new Set(), h = (_) => {
      for (var m = 0; m < _.length; m++) {
        var d = _[m];
        if (!c.has(d)) {
          c.add(d);
          var p = _c(d);
          for (const S of [e, document]) {
            var y = Ti.get(S);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Ti.set(S, y));
            var b = y.get(d);
            b === void 0 ? (S.addEventListener(d, Ho, { passive: p }), y.set(d, 1)) : y.set(d, b + 1);
          }
        }
      }
    };
    return h(rs(Pl)), Ns.add(h), () => {
      for (var _ of c)
        for (const p of [e, document]) {
          var m = (
            /** @type {Map<string, number>} */
            Ti.get(p)
          ), d = (
            /** @type {number} */
            m.get(_)
          );
          --d == 0 ? (p.removeEventListener(_, Ho), m.delete(_), m.size === 0 && Ti.delete(p)) : m.set(_, d);
        }
      Ns.delete(h), u !== t && u.parentNode?.removeChild(u);
    };
  });
  return Is.set(l, f), l;
}
let Is = /* @__PURE__ */ new WeakMap();
function l_(n, e) {
  const t = Is.get(n);
  return t ? (Is.delete(n), t(e)) : Promise.resolve();
}
var wt, Rt, et, Lr, di, _i, ts;
class Ml {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    We(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Z(this, wt, /* @__PURE__ */ new Map());
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
    Z(this, Rt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Z(this, et, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Z(this, Lr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Z(this, di, !0);
    /**
     * @param {Batch} batch
     */
    Z(this, _i, (e) => {
      if (v(this, wt).has(e)) {
        var t = (
          /** @type {Key} */
          v(this, wt).get(e)
        ), r = v(this, Rt).get(t);
        if (r)
          ho(r), v(this, Lr).delete(t);
        else {
          var i = v(this, et).get(t);
          i && (v(this, Rt).set(t, i.effect), v(this, et).delete(t), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, o] of v(this, wt)) {
          if (v(this, wt).delete(s), s === e)
            break;
          const a = v(this, et).get(o);
          a && (Be(a.effect), v(this, et).delete(o));
        }
        for (const [s, o] of v(this, Rt)) {
          if (s === t || v(this, Lr).has(s)) continue;
          const a = () => {
            if (Array.from(v(this, wt).values()).includes(s)) {
              var f = document.createDocumentFragment();
              _o(o, f), f.append(Wr()), v(this, et).set(s, { effect: o, fragment: f });
            } else
              Be(o);
            v(this, Lr).delete(s), v(this, Rt).delete(s);
          };
          v(this, di) || !r ? (v(this, Lr).add(s), Gr(o, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Z(this, ts, (e) => {
      v(this, wt).delete(e);
      const t = Array.from(v(this, wt).values());
      for (const [r, i] of v(this, et))
        t.includes(r) || (Be(i.effect), v(this, et).delete(r));
    });
    this.anchor = e, Q(this, di, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var r = (
      /** @type {Batch} */
      oe
    ), i = dl();
    if (t && !v(this, Rt).has(e) && !v(this, et).has(e))
      if (i) {
        var s = document.createDocumentFragment(), o = Wr();
        s.append(o), v(this, et).set(e, {
          effect: tt(() => t(o)),
          fragment: s
        });
      } else
        v(this, Rt).set(
          e,
          tt(() => t(this.anchor))
        );
    if (v(this, wt).set(r, e), i) {
      for (const [a, l] of v(this, Rt))
        a === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [a, l] of v(this, et))
        a === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(v(this, _i)), r.ondiscard(v(this, ts));
    } else
      v(this, _i).call(this, r);
  }
}
wt = new WeakMap(), Rt = new WeakMap(), et = new WeakMap(), Lr = new WeakMap(), di = new WeakMap(), _i = new WeakMap(), ts = new WeakMap();
function Si(n, e, t = !1) {
  var r = new Ml(n), i = t ? Hr : 0;
  function s(o, a) {
    r.ensure(o, a);
  }
  ss(() => {
    var o = !1;
    e((a, l = 0) => {
      o = !0, s(l, a);
    }), o || s(-1, null);
  }, i);
}
function xc(n, e, t) {
  for (var r = [], i = e.length, s, o = e.length, a = 0; a < i; a++) {
    let c = e[a];
    Gr(
      c,
      () => {
        if (s) {
          if (s.pending.delete(c), s.done.add(c), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Fs(n, rs(s.done)), h.delete(s), h.size === 0 && (n.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = r.length === 0 && t !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        t
      ), u = (
        /** @type {Element} */
        f.parentNode
      );
      Ju(u), u.append(f), n.items.clear();
    }
    Fs(n, e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Fs(n, e, t = !0) {
  var r;
  if (n.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of n.pending.values())
      for (const a of o)
        r.add(
          /** @type {EachItem} */
          n.items.get(a).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var s = e[i];
    if (r?.has(s)) {
      s.f |= Dt;
      const o = document.createDocumentFragment();
      _o(s, o);
    } else
      Be(e[i], t);
  }
}
var Qo;
function Zo(n, e, t, r, i, s = null) {
  var o = n, a = /* @__PURE__ */ new Map(), l = (e & Wa) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      n
    );
    o = f.appendChild(Wr());
  }
  var u = null, c = /* @__PURE__ */ Yu(() => {
    var S = t();
    return La(S) ? S : S == null ? [] : rs(S);
  }), h, _ = /* @__PURE__ */ new Map(), m = !0;
  function d(S) {
    (b.effect.f & Ct) === 0 && (b.pending.delete(S), b.fallback = u, wc(b, h, o, e, r), u !== null && (h.length === 0 ? (u.f & Dt) === 0 ? ho(u) : (u.f ^= Dt, Gn(u, null, o)) : Gr(u, () => {
      u = null;
    })));
  }
  function p(S) {
    b.pending.delete(S);
  }
  var y = ss(() => {
    h = /** @type {V[]} */
    me(c);
    for (var S = h.length, C = /* @__PURE__ */ new Set(), x = (
      /** @type {Batch} */
      oe
    ), O = dl(), E = 0; E < S; E += 1) {
      var g = h[E], A = r(g, E), I = m ? null : a.get(A);
      I ? (I.v && Tn(I.v, g), I.i && Tn(I.i, E), O && x.unskip_effect(I.e)) : (I = kc(
        a,
        m ? o : Qo ?? (Qo = Wr()),
        g,
        A,
        E,
        i,
        e,
        t
      ), m || (I.e.f |= Dt), a.set(A, I)), C.add(A);
    }
    if (S === 0 && s && !u && (m ? u = tt(() => s(o)) : (u = tt(() => s(Qo ?? (Qo = Wr()))), u.f |= Dt)), S > C.size && du(), !m)
      if (_.set(x, C), O) {
        for (const [te, q] of a)
          C.has(te) || x.skip_effect(q.e);
        x.oncommit(d), x.ondiscard(p);
      } else
        d(x);
    me(c);
  }), b = { effect: y, items: a, pending: _, outrogroups: null, fallback: u };
  m = !1;
}
function zn(n) {
  for (; n !== null && (n.f & Et) === 0; )
    n = n.next;
  return n;
}
function wc(n, e, t, r, i) {
  var s = (r & Tu) !== 0, o = e.length, a = n.items, l = zn(n.effect.first), f, u = null, c, h = [], _ = [], m, d, p, y;
  if (s)
    for (y = 0; y < o; y += 1)
      m = e[y], d = i(m, y), p = /** @type {EachItem} */
      a.get(d).e, (p.f & Dt) === 0 && (p.nodes?.a?.measure(), (c ?? (c = /* @__PURE__ */ new Set())).add(p));
  for (y = 0; y < o; y += 1) {
    if (m = e[y], d = i(m, y), p = /** @type {EachItem} */
    a.get(d).e, n.outrogroups !== null)
      for (const I of n.outrogroups)
        I.pending.delete(p), I.done.delete(p);
    if ((p.f & Le) !== 0 && (ho(p), s && (p.nodes?.a?.unfix(), (c ?? (c = /* @__PURE__ */ new Set())).delete(p))), (p.f & Dt) !== 0)
      if (p.f ^= Dt, p === l)
        Gn(p, null, t);
      else {
        var b = u ? u.next : l;
        p === n.effect.last && (n.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), rr(n, u, p), rr(n, p, b), Gn(p, b, t), u = p, h = [], _ = [], l = zn(u.next);
        continue;
      }
    if (p !== l) {
      if (f !== void 0 && f.has(p)) {
        if (h.length < _.length) {
          var S = _[0], C;
          u = S.prev;
          var x = h[0], O = h[h.length - 1];
          for (C = 0; C < h.length; C += 1)
            Gn(h[C], S, t);
          for (C = 0; C < _.length; C += 1)
            f.delete(_[C]);
          rr(n, x.prev, O.next), rr(n, u, x), rr(n, O, S), l = S, u = O, y -= 1, h = [], _ = [];
        } else
          f.delete(p), Gn(p, l, t), rr(n, p.prev, p.next), rr(n, p, u === null ? n.effect.first : u.next), rr(n, u, p), u = p;
        continue;
      }
      for (h = [], _ = []; l !== null && l !== p; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(l), _.push(l), l = zn(l.next);
      if (l === null)
        continue;
    }
    (p.f & Dt) === 0 && h.push(p), u = p, l = zn(p.next);
  }
  if (n.outrogroups !== null) {
    for (const I of n.outrogroups)
      I.pending.size === 0 && (Fs(n, rs(I.done)), n.outrogroups?.delete(I));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var E = [];
    if (f !== void 0)
      for (p of f)
        (p.f & Le) === 0 && E.push(p);
    for (; l !== null; )
      (l.f & Le) === 0 && l !== n.fallback && E.push(l), l = zn(l.next);
    var g = E.length;
    if (g > 0) {
      var A = (r & Wa) !== 0 && o === 0 ? t : null;
      if (s) {
        for (y = 0; y < g; y += 1)
          E[y].nodes?.a?.measure();
        for (y = 0; y < g; y += 1)
          E[y].nodes?.a?.fix();
      }
      xc(n, E, A);
    }
  }
  s && Br(() => {
    if (c !== void 0)
      for (p of c)
        p.nodes?.a?.apply();
  });
}
function kc(n, e, t, r, i, s, o, a) {
  var l = (o & wu) !== 0 ? (o & Su) === 0 ? /* @__PURE__ */ Ku(t, !1, !1) : Zr(t) : null, f = (o & ku) !== 0 ? Zr(i) : null;
  return {
    v: l,
    i: f,
    e: tt(() => (s(e, l ?? t, f ?? i, a), () => {
      n.delete(r);
    }))
  };
}
function Gn(n, e, t) {
  if (n.nodes)
    for (var r = n.nodes.start, i = n.nodes.end, s = e && (e.f & Dt) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pi(r)
      );
      if (s.before(r), r === i)
        return;
      r = o;
    }
}
function rr(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function Tc(n, e, ...t) {
  var r = new Ml(n);
  ss(() => {
    const i = e() ?? null;
    r.ensure(i, i && ((s) => i(s, ...t)));
  }, Hr);
}
function Jo(n, e, t) {
  gl(() => {
    var r = os(() => e(n, t?.()) || {});
    if (t && r?.update) {
      var i = !1, s = (
        /** @type {any} */
        {}
      );
      vl(() => {
        var o = t();
        hc(o), i && Ua(s, o) && (s = o, r.update(o));
      }), i = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Dn(n, e) {
  var t = void 0, r;
  sc(() => {
    t !== (t = e()) && (r && (Be(r), r = null), t && (r = tt(() => {
      gl(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Ol(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = Ol(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Rl() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = Ol(n)) && (r && (r += " "), r += e);
  return r;
}
function Se(n) {
  return typeof n == "object" ? Rl(n) : n ?? "";
}
function Sc(n, e, t) {
  var r = n == null ? "" : "" + n;
  return r === "" ? null : r;
}
function Ce(n, e, t, r, i, s) {
  var o = (
    /** @type {any} */
    n[Ss]
  );
  if (o !== t || o === void 0) {
    var a = Sc(t);
    a == null ? n.removeAttribute("class") : n.className = a, n[Ss] = t;
  }
  return s;
}
const Cc = Symbol("is custom element"), Ec = Symbol("is html");
function Ci(n, e, t, r) {
  var i = Ac(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[fu] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && Pc(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Ac(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    n[Mi] ?? (n[Mi] = {
      [Cc]: n.nodeName.includes("-"),
      [Ec]: n.namespaceURI === Ga
    })
  );
}
var $o = /* @__PURE__ */ new Map();
function Pc(n) {
  var e = n.getAttribute("is") || n.nodeName, t = $o.get(e);
  if (t) return t;
  $o.set(e, t = []);
  for (var r, i = n, s = Element.prototype; s !== i; ) {
    r = Ba(i);
    for (var o in r)
      r[o].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      o !== "innerHTML" && o !== "textContent" && o !== "innerText" && t.push(o);
    i = io(i);
  }
  return t;
}
function Mc(n, e, t, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  r), i), a;
  a = /** @type {V} */
  n[e], a === void 0 && r !== void 0 && (a = o());
  var l;
  return l = () => {
    var f = (
      /** @type {V} */
      n[e]
    );
    return f === void 0 ? o() : (s = !0, f);
  }, l;
}
function Oc(n) {
  at === null && cu(), pl(() => {
    const e = os(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
const Rc = "5";
var Fa;
typeof window < "u" && ((Fa = window.__svelte ?? (window.__svelte = {})).v ?? (Fa.v = /* @__PURE__ */ new Set())).add(Rc);
function Ht(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function zl(n, e) {
  n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ot = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ei = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, po, Re, ce, mt = 1e8, fe = 1 / mt, Ls = Math.PI * 2, zc = Ls / 4, Dc = 0, Dl = Math.sqrt, Nc = Math.cos, Ic = Math.sin, Pe = function(e) {
  return typeof e == "string";
}, ve = function(e) {
  return typeof e == "function";
}, $t = function(e) {
  return typeof e == "number";
}, mo = function(e) {
  return typeof e > "u";
}, Lt = function(e) {
  return typeof e == "object";
}, qe = function(e) {
  return e !== !1;
}, go = function() {
  return typeof window < "u";
}, Ei = function(e) {
  return ve(e) || Pe(e);
}, Nl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ne = Array.isArray, Fc = /random\([^)]+\)/g, Lc = /,\s*/g, ea = /(?:-?\.?\d|\.)+/gi, Il = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ln = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _s = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Fl = /[+-]=-?[.\d]+/, Bc = /[^,'"\[\]\s]+/gi, Vc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, de, Pt, Bs, vo, lt = {}, Ui = {}, Ll, Bl = function(e) {
  return (Ui = Cn(e, lt)) && Ke;
}, bo = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, ti = function(e, t) {
  return !t && console.warn(e);
}, Vl = function(e, t) {
  return e && (lt[e] = t) && Ui && (Ui[e] = t) || lt;
}, ri = function() {
  return 0;
}, Wc = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ii = {
  suppressEvents: !0,
  kill: !1
}, Gc = {
  suppressEvents: !0
}, yo = {}, _r = [], Vs = {}, Wl, rt = {}, ps = {}, ta = 30, Fi = [], xo = "", wo = function(e) {
  var t = e[0], r, i;
  if (Lt(t) || ve(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (i = Fi.length; i-- && !Fi[i].targetTest(t); )
      ;
    r = Fi[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new uf(e[i], r))) || e.splice(i, 1);
  return e;
}, Ur = function(e) {
  return e._gsap || wo(gt(e))[0]._gsap;
}, Gl = function(e, t, r) {
  return (r = e[t]) && ve(r) ? e[t]() : mo(r) && e.getAttribute && e.getAttribute(t) || r;
}, Ye = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, xe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, he = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, cn = function(e, t) {
  var r = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, jc = function(e, t) {
  for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, qi = function() {
  var e = _r.length, t = _r.slice(0), r, i;
  for (Vs = {}, _r.length = 0, r = 0; r < e; r++)
    i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, ko = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, jl = function(e, t, r, i) {
  _r.length && !Re && qi(), e.render(t, r, !!(Re && t < 0 && ko(e))), _r.length && !Re && qi();
}, Ul = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Bc).length < 2 ? t : Pe(e) ? e.trim() : e;
}, ql = function(e) {
  return e;
}, ft = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, Uc = function(e) {
  return function(t, r) {
    for (var i in r)
      i in t || i === "duration" && e || i === "ease" || (t[i] = r[i]);
  };
}, Cn = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, ra = function n(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Lt(t[r]) ? n(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, Yi = function(e, t) {
  var r = {}, i;
  for (i in e)
    i in t || (r[i] = e[i]);
  return r;
}, Qn = function(e) {
  var t = e.parent || de, r = e.keyframes ? Uc(Ne(e.keyframes)) : ft;
  if (qe(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, qc = function(e, t) {
  for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, Yl = function(e, t, r, i, s) {
  var o = e[i], a;
  if (s)
    for (a = t[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
}, as = function(e, t, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var s = t._prev, o = t._next;
  s ? s._next = o : e[r] === t && (e[r] = o), o ? o._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null;
}, vr = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, qr = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, Yc = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Ws = function(e, t, r, i) {
  return e._startAt && (Re ? e._startAt.revert(Ii) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, Xc = function n(e) {
  return !e || e._ts && n(e.parent);
}, na = function(e) {
  return e._repeat ? En(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, En = function(e, t) {
  var r = Math.floor(e = he(e / t));
  return e && r === e ? r - 1 : r;
}, Xi = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, ls = function(e) {
  return e._end = he(e._start + (e._tDur / Math.abs(e._ts || e._rts || fe) || 0));
}, fs = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = he(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ls(e), r._dirty || qr(r, e)), e;
}, Xl = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Xi(e.rawTime(), t), (!t._dur || gi(0, t.totalDuration(), r) - t._tTime > fe) && t.render(r, !0)), qr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -fe;
  }
}, zt = function(e, t, r, i) {
  return t.parent && vr(t), t._start = he(($t(r) ? r : r || e !== de ? ct(e, r, t) : e._time) + t._delay), t._end = he(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Yl(e, t, "_first", "_last", e._sort ? "_start" : 0), Gs(t) || (e._recent = t), i || Xl(e, t), e._ts < 0 && fs(e, e._tTime), e;
}, Hl = function(e, t) {
  return (lt.ScrollTrigger || bo("scrollTrigger", t)) && lt.ScrollTrigger.create(t, e);
}, Kl = function(e, t, r, i, s) {
  if (So(e, t, s), !e._initted)
    return 1;
  if (!r && e._pt && !Re && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Wl !== nt.frame)
    return _r.push(e), e._lazy = [s, i], 1;
}, Hc = function n(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
}, Gs = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Kc = function(e, t, r, i) {
  var s = e.ratio, o = t < 0 || !t && (!e._start && Hc(e) && !(!e._initted && Gs(e)) || (e._ts < 0 || e._dp._ts < 0) && !Gs(e)) ? 0 : 1, a = e._rDelay, l = 0, f, u, c;
  if (a && e._repeat && (l = gi(0, e._tDur, t), u = En(l, a), e._yoyo && u & 1 && (o = 1 - o), u !== En(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || Re || i || e._zTime === fe || !t && e._zTime) {
    if (!e._initted && Kl(e, t, i, r, l))
      return;
    for (c = e._zTime, e._zTime = t || (r ? fe : 0), r || (r = t && !c), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, f = e._pt; f; )
      f.r(o, f.d), f = f._next;
    t < 0 && Ws(e, t, r, !0), e._onUpdate && !r && it(e, "onUpdate"), l && e._repeat && !r && e.parent && it(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && vr(e, 1), !r && !Re && (it(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, Qc = function(e, t, r) {
  var i;
  if (r > t)
    for (i = e._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, An = function(e, t, r, i) {
  var s = e._repeat, o = he(t) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : he(o * (s + 1) + e._rDelay * s) : o, a > 0 && !i && fs(e, e._tTime = e._tDur * a), e.parent && ls(e), r || qr(e.parent, e), e;
}, ia = function(e) {
  return e instanceof Ue ? qr(e) : An(e, e._dur);
}, Zc = {
  _start: 0,
  endTime: ri,
  totalDuration: ri
}, ct = function n(e, t, r) {
  var i = e.labels, s = e._recent || Zc, o = e.duration() >= mt ? s.endTime(!1) : e._dur, a, l, f;
  return Pe(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), f = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (f ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), f && r && (l = l / 100 * (Ne(r) ? r[0] : r).totalDuration()), a > 1 ? n(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t;
}, Zn = function(e, t, r) {
  var i = $t(t[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
  if (i && (o.duration = t[1]), o.parent = r, e) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = qe(l.vars.inherit) && l.parent;
    o.immediateRender = qe(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return new we(t[0], o, t[s + 1]);
}, xr = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, gi = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, De = function(e, t) {
  return !Pe(e) || !(t = Vc.exec(e)) ? "" : t[1];
}, Jc = function(e, t, r) {
  return xr(r, function(i) {
    return gi(e, t, i);
  });
}, js = [].slice, Ql = function(e, t) {
  return e && Lt(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Lt(e[0])) && !e.nodeType && e !== Pt;
}, $c = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var s;
    return Pe(i) && !t || Ql(i, 1) ? (s = r).push.apply(s, gt(i)) : r.push(i);
  }) || r;
}, gt = function(e, t, r) {
  return ce && !t && ce.selector ? ce.selector(e) : Pe(e) && !r && (Bs || !Pn()) ? js.call((t || vo).querySelectorAll(e), 0) : Ne(e) ? $c(e, r) : Ql(e) ? js.call(e, 0) : e ? [e] : [];
}, Us = function(e) {
  return e = gt(e)[0] || ti("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return gt(t, r.querySelectorAll ? r : r === e ? ti("Invalid scope") || vo.createElement("div") : e);
  };
}, Zl = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Jl = function(e) {
  if (ve(e))
    return e;
  var t = Lt(e) ? e : {
    each: e
  }, r = Yr(t.ease), i = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, f = t.axis, u = i, c = i;
  return Pe(i) ? u = c = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (u = i[0], c = i[1]), function(h, _, m) {
    var d = (m || t).length, p = o[d], y, b, S, C, x, O, E, g, A;
    if (!p) {
      if (A = t.grid === "auto" ? 0 : (t.grid || [1, mt])[1], !A) {
        for (E = -mt; E < (E = m[A++].getBoundingClientRect().left) && A < d; )
          ;
        A < d && A--;
      }
      for (p = o[d] = [], y = l ? Math.min(A, d) * u - 0.5 : i % A, b = A === mt ? 0 : l ? d * c / A - 0.5 : i / A | 0, E = 0, g = mt, O = 0; O < d; O++)
        S = O % A - y, C = b - (O / A | 0), p[O] = x = f ? Math.abs(f === "y" ? C : S) : Dl(S * S + C * C), x > E && (E = x), x < g && (g = x);
      i === "random" && Zl(p), p.max = E - g, p.min = g, p.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (A > d ? d - 1 : f ? f === "y" ? d / A : A : Math.max(A, d / A)) || 0) * (i === "edges" ? -1 : 1), p.b = d < 0 ? s - d : s, p.u = De(t.amount || t.each) || 0, r = r && d < 0 ? hh(r) : r;
    }
    return d = (p[h] - p.min) / p.max || 0, he(p.b + (r ? r(d) : d) * p.v) + p.u;
  };
}, qs = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = he(Math.round(parseFloat(r) / e) * e * t);
    return (i - i % 1) / t + ($t(r) ? 0 : De(r));
  };
}, $l = function(e, t) {
  var r = Ne(e), i, s;
  return !r && Lt(e) && (i = r = e.radius || mt, e.values ? (e = gt(e.values), (s = !$t(e[0])) && (i *= i)) : e = qs(e.increment)), xr(t, r ? ve(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= i ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), f = mt, u = 0, c = e.length, h, _; c--; )
      s ? (h = e[c].x - a, _ = e[c].y - l, h = h * h + _ * _) : h = Math.abs(e[c] - a), h < f && (f = h, u = c);
    return u = !i || f <= i ? e[u] : o, s || u === o || $t(o) ? u : u + De(o);
  } : qs(e));
}, ef = function(e, t, r, i) {
  return xr(Ne(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
    return Ne(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i;
  });
}, eh = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    return t.reduce(function(s, o) {
      return o(s);
    }, i);
  };
}, th = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || De(r));
  };
}, rh = function(e, t, r) {
  return rf(e, t, 0, 1, r);
}, tf = function(e, t, r) {
  return xr(r, function(i) {
    return e[~~t(i)];
  });
}, nh = function n(e, t, r) {
  var i = t - e;
  return Ne(e) ? tf(e, n(0, e.length), t) : xr(r, function(s) {
    return (i + (s - e) % i) % i + e;
  });
}, ih = function n(e, t, r) {
  var i = t - e, s = i * 2;
  return Ne(e) ? tf(e, n(0, e.length - 1), t) : xr(r, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o);
  });
}, ni = function(e) {
  return e.replace(Fc, function(t) {
    var r = t.indexOf("[") + 1, i = t.substring(r || 7, r ? t.indexOf("]") : t.length - 1).split(Lc);
    return ef(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5);
  });
}, rf = function(e, t, r, i, s) {
  var o = t - e, a = i - r;
  return xr(s, function(l) {
    return r + ((l - e) / o * a || 0);
  });
}, sh = function n(e, t, r, i) {
  var s = isNaN(e + t) ? 0 : function(_) {
    return (1 - _) * e + _ * t;
  };
  if (!s) {
    var o = Pe(e), a = {}, l, f, u, c, h;
    if (r === !0 && (i = 1) && (r = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Ne(e) && !Ne(t)) {
      for (u = [], c = e.length, h = c - 2, f = 1; f < c; f++)
        u.push(n(e[f - 1], e[f]));
      c--, s = function(m) {
        m *= c;
        var d = Math.min(h, ~~m);
        return u[d](m - d);
      }, r = t;
    } else i || (e = Cn(Ne(e) ? [] : {}, e));
    if (!u) {
      for (l in t)
        To.call(a, e, l, "get", t[l]);
      s = function(m) {
        return Ao(m, a) || (o ? e.p : e);
      };
    }
  }
  return xr(r, s);
}, sa = function(e, t, r) {
  var i = e.labels, s = mt, o, a, l;
  for (o in i)
    a = i[o] - t, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, it = function(e, t, r) {
  var i = e.vars, s = i[t], o = ce, a = e._ctx, l, f, u;
  if (s)
    return l = i[t + "Params"], f = i.callbackScope || e, r && _r.length && qi(), a && (ce = a), u = l ? s.apply(f, l) : s.call(f), ce = o, u;
}, jn = function(e) {
  return vr(e), e.scrollTrigger && e.scrollTrigger.kill(!!Re), e.progress() < 1 && it(e, "onInterrupt"), e;
}, fn, nf = [], sf = function(e) {
  if (e)
    if (e = !e.name && e.default || e, go() || e.headless) {
      var t = e.name, r = ve(e), i = t && !r && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: ri,
        render: Ao,
        add: To,
        kill: wh,
        modifier: xh,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Eo,
        aliases: {},
        register: 0
      };
      if (Pn(), e !== i) {
        if (rt[t])
          return;
        ft(i, ft(Yi(e, s), o)), Cn(i.prototype, Cn(s, Yi(e, o))), rt[i.prop = t] = i, e.targetTest && (Fi.push(i), yo[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Vl(t, i), e.register && e.register(Ke, i, Xe);
    } else
      nf.push(e);
}, le = 255, Un = {
  aqua: [0, le, le],
  lime: [0, le, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, le],
  navy: [0, 0, 128],
  white: [le, le, le],
  olive: [128, 128, 0],
  yellow: [le, le, 0],
  orange: [le, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [le, 0, 0],
  pink: [le, 192, 203],
  cyan: [0, le, le],
  transparent: [le, le, le, 0]
}, ms = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * le + 0.5 | 0;
}, of = function(e, t, r) {
  var i = e ? $t(e) ? [e >> 16, e >> 8 & le, e & le] : 0 : Un.black, s, o, a, l, f, u, c, h, _, m;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Un[e])
      i = Un[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & le, i & le, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & le, e & le];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = m = e.match(ea), !t)
        l = +i[0] % 360 / 360, f = +i[1] / 100, u = +i[2] / 100, o = u <= 0.5 ? u * (f + 1) : u + f - u * f, s = u * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = ms(l + 1 / 3, s, o), i[1] = ms(l, s, o), i[2] = ms(l - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return i = e.match(Il), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(ea) || Un.transparent;
    i = i.map(Number);
  }
  return t && !m && (s = i[0] / le, o = i[1] / le, a = i[2] / le, c = Math.max(s, o, a), h = Math.min(s, o, a), u = (c + h) / 2, c === h ? l = f = 0 : (_ = c - h, f = u > 0.5 ? _ / (2 - c - h) : _ / (c + h), l = c === s ? (o - a) / _ + (o < a ? 6 : 0) : c === o ? (a - s) / _ + 2 : (s - o) / _ + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(f * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, af = function(e) {
  var t = [], r = [], i = -1;
  return e.split(pr).forEach(function(s) {
    var o = s.match(ln) || [];
    t.push.apply(t, o), r.push(i += o.length + 1);
  }), t.c = r, t;
}, oa = function(e, t, r) {
  var i = "", s = (e + i).match(pr), o = t ? "hsla(" : "rgba(", a = 0, l, f, u, c;
  if (!s)
    return e;
  if (s = s.map(function(h) {
    return (h = of(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (u = af(e), l = r.c, l.join(i) !== u.c.join(i)))
    for (f = e.replace(pr, "1").split(ln), c = f.length - 1; a < c; a++)
      i += f[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : r).shift());
  if (!f)
    for (f = e.split(pr), c = f.length - 1; a < c; a++)
      i += f[a] + s[a];
  return i + f[c];
}, pr = (function() {
  var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Un)
    n += "|" + e + "\\b";
  return new RegExp(n + ")", "gi");
})(), oh = /hsl[a]?\(/, lf = function(e) {
  var t = e.join(" "), r;
  if (pr.lastIndex = 0, pr.test(t))
    return r = oh.test(t), e[1] = oa(e[1], r), e[0] = oa(e[0], r, af(e[1])), !0;
}, ii, nt = (function() {
  var n = Date.now, e = 500, t = 33, r = n(), i = r, s = 1e3 / 240, o = s, a = [], l, f, u, c, h, _, m = function d(p) {
    var y = n() - i, b = p === !0, S, C, x, O;
    if ((y > e || y < 0) && (r += y - t), i += y, x = i - r, S = x - o, (S > 0 || b) && (O = ++c.frame, h = x - c.time * 1e3, c.time = x = x / 1e3, o += S + (S >= s ? 4 : s - S), C = 1), b || (l = f(d)), C)
      for (_ = 0; _ < a.length; _++)
        a[_](x, h, O, p);
  };
  return c = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(p) {
      return h / (1e3 / (p || 60));
    },
    wake: function() {
      Ll && (!Bs && go() && (Pt = Bs = window, vo = Pt.document || {}, lt.gsap = Ke, (Pt.gsapVersions || (Pt.gsapVersions = [])).push(Ke.version), Bl(Ui || Pt.GreenSockGlobals || !Pt.gsap && Pt || {}), nf.forEach(sf)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && c.sleep(), f = u || function(p) {
        return setTimeout(p, o - c.time * 1e3 + 1 | 0);
      }, ii = 1, m(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(l), ii = 0, f = ri;
    },
    lagSmoothing: function(p, y) {
      e = p || 1 / 0, t = Math.min(y || 33, e);
    },
    fps: function(p) {
      s = 1e3 / (p || 240), o = c.time * 1e3 + s;
    },
    add: function(p, y, b) {
      var S = y ? function(C, x, O, E) {
        p(C, x, O, E), c.remove(S);
      } : p;
      return c.remove(p), a[b ? "unshift" : "push"](S), Pn(), S;
    },
    remove: function(p, y) {
      ~(y = a.indexOf(p)) && a.splice(y, 1) && _ >= y && _--;
    },
    _listeners: a
  }, c;
})(), Pn = function() {
  return !ii && nt.wake();
}, ne = {}, ah = /^[\d.\-M][\d.\-,\s]/, lh = /["']/g, fh = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, l, f; s < o; s++)
    l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, f = l.substr(0, a), t[i] = isNaN(f) ? f.replace(lh, "").trim() : +f, i = l.substr(a + 1).trim();
  return t;
}, uh = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, ch = function(e) {
  var t = (e + "").split("("), r = ne[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [fh(t[1])] : uh(e).split(",").map(Ul)) : ne._CE && ah.test(e) ? ne._CE("", e) : r;
}, hh = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Yr = function(e, t) {
  return e && (ve(e) ? e : ne[e] || ch(e)) || t;
}, en = function(e, t, r, i) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: r,
    easeInOut: i
  }, o;
  return Ye(e, function(a) {
    ne[a] = lt[a] = s, ne[o = a.toLowerCase()] = r;
    for (var l in s)
      ne[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ne[a + "." + l] = s[l];
  }), s;
}, ff = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, gs = function n(e, t, r) {
  var i = t >= 1 ? t : 1, s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / Ls * (Math.asin(1 / i) || 0), a = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Ic((u - o) * s) + 1;
  }, l = e === "out" ? a : e === "in" ? function(f) {
    return 1 - a(1 - f);
  } : ff(a);
  return s = Ls / s, l.config = function(f, u) {
    return n(e, f, u);
  }, l;
}, vs = function n(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(s) {
    return 1 - r(1 - s);
  } : ff(r);
  return i.config = function(s) {
    return n(e, s);
  }, i;
};
Ye("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, e) {
  var t = e < 5 ? e + 1 : e;
  en(n + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
ne.Linear.easeNone = ne.none = ne.Linear.easeIn;
en("Elastic", gs("in"), gs("out"), gs());
(function(n, e) {
  var t = 1 / e, r = 2 * t, i = 2.5 * t, s = function(a) {
    return a < t ? n * a * a : a < r ? n * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? n * (a -= 2.25 / e) * a + 0.9375 : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  en("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
en("Expo", function(n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
en("Circ", function(n) {
  return -(Dl(1 - n * n) - 1);
});
en("Sine", function(n) {
  return n === 1 ? 1 : -Nc(n * zc) + 1;
});
en("Back", vs("in"), vs("out"), vs());
ne.SteppedEase = ne.steps = lt.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - fe;
    return function(a) {
      return ((i * gi(0, o, a) | 0) + s) * r;
    };
  }
};
ei.ease = ne["quad.out"];
Ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
  return xo += n + "," + n + "Params,";
});
var uf = function(e, t) {
  this.id = Dc++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Gl, this.set = t ? t.getSetter : Eo;
}, si = /* @__PURE__ */ (function() {
  function n(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, An(this, +t.duration, 1, 1), this.data = t.data, ce && (this._ctx = ce, ce.data.push(this)), ii || nt.wake();
  }
  var e = n.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, An(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (Pn(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (fs(this, r), !s._dp || s.parent || Xl(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && zt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === fe || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), jl(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + na(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + na(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? En(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -fe ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var s = this.parent && this._ts ? Xi(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -fe ? 0 : this._rts, this.totalTime(gi(-Math.abs(this._delay), this.totalDuration(), s), i !== !1), ls(this), Yc(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== fe && (this._tTime -= fe)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = he(r);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && zt(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (qe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xi(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = Gc);
    var i = Re;
    return Re = r, ko(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Re = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
      s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : s;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, ia(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, ia(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(ct(this, r), qe(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, qe(i)), this._dur || (this._zTime = -fe), this;
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -fe : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -fe, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - fe);
  }, e.eventCallback = function(r, i, s) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[r] = i, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var i = this, s = i._prom;
    return new Promise(function(o) {
      var a = ve(r) ? r : ql, l = function() {
        var u = i.then;
        i.then = null, s && s(), ve(a) && (a = a(i)) && (a.then || a === i) && (i.then = u), o(a), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    jn(this);
  }, n;
})();
ft(si.prototype, {
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
  _zTime: -fe,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ue = /* @__PURE__ */ (function(n) {
  zl(e, n);
  function e(r, i) {
    var s;
    return r === void 0 && (r = {}), s = n.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = qe(r.sortChildren), de && zt(r.parent || de, Ht(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Hl(Ht(s), r.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(i, s, o) {
    return Zn(0, arguments, this), this;
  }, t.from = function(i, s, o) {
    return Zn(1, arguments, this), this;
  }, t.fromTo = function(i, s, o, a) {
    return Zn(2, arguments, this), this;
  }, t.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, Qn(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new we(i, s, ct(this, o), 1), this;
  }, t.call = function(i, s, o) {
    return zt(this, we.delayedCall(0, i, s), o);
  }, t.staggerTo = function(i, s, o, a, l, f, u) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = f, o.onCompleteParams = u, o.parent = this, new we(i, o, ct(this, l)), this;
  }, t.staggerFrom = function(i, s, o, a, l, f, u) {
    return o.runBackwards = 1, Qn(o).immediateRender = qe(o.immediateRender), this.staggerTo(i, s, o, a, l, f, u);
  }, t.staggerFromTo = function(i, s, o, a, l, f, u, c) {
    return a.startAt = o, Qn(a).immediateRender = qe(a.immediateRender), this.staggerTo(i, s, a, l, f, u, c);
  }, t.render = function(i, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, u = i <= 0 ? 0 : he(i), c = this._zTime < 0 != i < 0 && (this._initted || !f), h, _, m, d, p, y, b, S, C, x, O, E;
    if (this !== de && u > l && i >= 0 && (u = l), u !== this._tTime || o || c) {
      if (a !== this._time && f && (u += this._time - a, i += this._time - a), h = u, C = this._start, S = this._ts, y = !S, c && (f || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (O = this._yoyo, p = f + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(p * 100 + i, s, o);
        if (h = he(u % p), u === l ? (d = this._repeat, h = f) : (x = he(u / p), d = ~~x, d && d === x && (h = f, d--), h > f && (h = f)), x = En(this._tTime, p), !a && this._tTime && x !== d && this._tTime - x * p - this._dur <= 0 && (x = d), O && d & 1 && (h = f - h, E = 1), d !== x && !this._lock) {
          var g = O && x & 1, A = g === (O && d & 1);
          if (d < x && (g = !g), a = g ? 0 : u % f ? f : u, this._lock = 1, this.render(a || (E ? 0 : he(d * p)), s, !f)._lock = 0, this._tTime = u, !s && this.parent && it(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1, x = d), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, l = this._tDur, A && (this._lock = 2, a = g ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (b = Qc(this, he(a), he(h)), b && (u -= h - (h = b._start))), this._tTime = u, this._time = h, this._act = !!S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && u && f && !s && !x && (it(this, "onStart"), this._tTime !== u))
        return this;
      if (h >= a && i >= 0)
        for (_ = this._first; _; ) {
          if (m = _._next, (_._act || h >= _._start) && _._ts && b !== _) {
            if (_.parent !== this)
              return this.render(i, s, o);
            if (_.render(_._ts > 0 ? (h - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (h - _._start) * _._ts, s, o), h !== this._time || !this._ts && !y) {
              b = 0, m && (u += this._zTime = -fe);
              break;
            }
          }
          _ = m;
        }
      else {
        _ = this._last;
        for (var I = i < 0 ? i : h; _; ) {
          if (m = _._prev, (_._act || I <= _._end) && _._ts && b !== _) {
            if (_.parent !== this)
              return this.render(i, s, o);
            if (_.render(_._ts > 0 ? (I - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (I - _._start) * _._ts, s, o || Re && ko(_)), h !== this._time || !this._ts && !y) {
              b = 0, m && (u += this._zTime = I ? -fe : fe);
              break;
            }
          }
          _ = m;
        }
      }
      if (b && !s && (this.pause(), b.render(h >= a ? 0 : -fe)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = C, ls(this), this.render(i, s, o);
      this._onUpdate && !s && it(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (C === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !f) && (u === l && this._ts > 0 || !u && this._ts < 0) && vr(this, 1), !s && !(i < 0 && !a) && (u || a || !l) && (it(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, s) {
    var o = this;
    if ($t(s) || (s = ct(this, s, i)), !(i instanceof si)) {
      if (Ne(i))
        return i.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (Pe(i))
        return this.addLabel(i, s);
      if (ve(i))
        i = we.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? zt(this, i, s) : this;
  }, t.getChildren = function(i, s, o, a) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -mt);
    for (var l = [], f = this._first; f; )
      f._start >= a && (f instanceof we ? s && l.push(f) : (o && l.push(f), i && l.push.apply(l, f.getChildren(!0, s, o)))), f = f._next;
    return l;
  }, t.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === i)
        return s[o];
  }, t.remove = function(i) {
    return Pe(i) ? this.removeLabel(i) : ve(i) ? this.killTweensOf(i) : (i.parent === this && as(this, i), i === this._recent && (this._recent = this._last), qr(this));
  }, t.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = he(nt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), n.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, s) {
    return this.labels[i] = ct(this, s), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, s, o) {
    var a = we.delayedCall(0, s || ri, o);
    return a.data = "isPause", this._hasPause = 1, zt(this, a, ct(this, i));
  }, t.removePause = function(i) {
    var s = this._first;
    for (i = ct(this, i); s; )
      s._start === i && s.data === "isPause" && vr(s), s = s._next;
  }, t.killTweensOf = function(i, s, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      ur !== a[l] && a[l].kill(i, s);
    return this;
  }, t.getTweensOf = function(i, s) {
    for (var o = [], a = gt(i), l = this._first, f = $t(s), u; l; )
      l instanceof we ? jc(l._targets, a) && (f ? (!ur || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u), l = l._next;
    return o;
  }, t.tweenTo = function(i, s) {
    s = s || {};
    var o = this, a = ct(o, i), l = s, f = l.startAt, u = l.onStart, c = l.onStartParams, h = l.immediateRender, _, m = we.to(o, ft({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (f && "time" in f ? f.time : o._time)) / o.timeScale()) || fe,
      onStart: function() {
        if (o.pause(), !_) {
          var p = s.duration || Math.abs((a - (f && "time" in f ? f.time : o._time)) / o.timeScale());
          m._dur !== p && An(m, p, 0, 1).render(m._time, !0, !0), _ = 1;
        }
        u && u.apply(m, c || []);
      }
    }, s));
    return h ? m.render(0) : m;
  }, t.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, ft({
      startAt: {
        time: ct(this, i)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), sa(this, ct(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), sa(this, ct(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + fe);
  }, t.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, f;
    for (i = he(i); a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (s)
      for (f in l)
        l[f] >= o && (l[f] += i);
    return qr(this);
  }, t.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(i), s = s._next;
    return n.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), qr(this);
  }, t.totalDuration = function(i) {
    var s = 0, o = this, a = o._last, l = mt, f, u, c;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (c = o.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, zt(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (s -= u, (!c && !o._dp || c && c.smoothChildTiming) && (o._start += he(u / o._ts), o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = f;
      An(o, o === de && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (de._ts && (jl(de, Xi(i, de)), Wl = nt.frame), nt.frame >= ta) {
      ta += ot.autoSleep || 120;
      var s = de._first;
      if ((!s || !s._ts) && ot.autoSleep && nt._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || nt.sleep();
      }
    }
  }, e;
})(si);
ft(Ue.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var dh = function(e, t, r, i, s, o, a) {
  var l = new Xe(this._pt, e, t, 0, 1, mf, null, s), f = 0, u = 0, c, h, _, m, d, p, y, b;
  for (l.b = r, l.e = i, r += "", i += "", (y = ~i.indexOf("random(")) && (i = ni(i)), o && (b = [r, i], o(b, e, t), r = b[0], i = b[1]), h = r.match(_s) || []; c = _s.exec(i); )
    m = c[0], d = i.substring(f, c.index), _ ? _ = (_ + 1) % 5 : d.substr(-5) === "rgba(" && (_ = 1), m !== h[u++] && (p = parseFloat(h[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || u === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: m.charAt(1) === "=" ? cn(p, m) - p : parseFloat(m) - p,
      m: _ && _ < 4 ? Math.round : 0
    }, f = _s.lastIndex);
  return l.c = f < i.length ? i.substring(f, i.length) : "", l.fp = a, (Fl.test(i) || y) && (l.e = 0), this._pt = l, l;
}, To = function(e, t, r, i, s, o, a, l, f, u) {
  ve(i) && (i = i(s || 0, e, o));
  var c = e[t], h = r !== "get" ? r : ve(c) ? f ? e[t.indexOf("set") || !ve(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](f) : e[t]() : c, _ = ve(c) ? f ? vh : _f : Co, m;
  if (Pe(i) && (~i.indexOf("random(") && (i = ni(i)), i.charAt(1) === "=" && (m = cn(h, i) + (De(h) || 0), (m || m === 0) && (i = m))), !u || h !== i || Ys)
    return !isNaN(h * i) && i !== "" ? (m = new Xe(this._pt, e, t, +h || 0, i - (h || 0), typeof c == "boolean" ? yh : pf, 0, _), f && (m.fp = f), a && m.modifier(a, this, e), this._pt = m) : (!c && !(t in e) && bo(t, i), dh.call(this, e, t, h, i, _, l || ot.stringFilter, f));
}, _h = function(e, t, r, i, s) {
  if (ve(e) && (e = Jn(e, s, t, r, i)), !Lt(e) || e.style && e.nodeType || Ne(e) || Nl(e))
    return Pe(e) ? Jn(e, s, t, r, i) : e;
  var o = {}, a;
  for (a in e)
    o[a] = Jn(e[a], s, t, r, i);
  return o;
}, cf = function(e, t, r, i, s, o) {
  var a, l, f, u;
  if (rt[e] && (a = new rt[e]()).init(s, a.rawVars ? t[e] : _h(t[e], i, s, o, r), r, i, o) !== !1 && (r._pt = l = new Xe(r._pt, s, e, 0, 1, a.render, a, 0, a.priority), r !== fn))
    for (f = r._ptLookup[r._targets.indexOf(s)], u = a._props.length; u--; )
      f[a._props[u]] = l;
  return a;
}, ur, Ys, So = function n(e, t, r) {
  var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, f = i.onUpdate, u = i.runBackwards, c = i.yoyoEase, h = i.keyframes, _ = i.autoRevert, m = e._dur, d = e._startAt, p = e._targets, y = e.parent, b = y && y.data === "nested" ? y.vars.targets : p, S = e._overwrite === "auto" && !po, C = e.timeline, x = i.easeReverse || c, O, E, g, A, I, te, q, Y, F, P, z, k, w;
  if (C && (!h || !s) && (s = "none"), e._ease = Yr(s, ei.ease), e._rEase = x && (Yr(x) || e._ease), e._from = !C && !!i.runBackwards, e._from && (e.ratio = 1), !C || h && !i.stagger) {
    if (Y = p[0] ? Ur(p[0]).harness : 0, k = Y && i[Y.prop], O = Yi(i, yo), d && (d._zTime < 0 && d.progress(1), t < 0 && u && a && !_ ? d.render(-1, !0) : d.revert(u && m ? Ii : Wc), d._lazy = 0), o) {
      if (vr(e._startAt = we.set(p, ft({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !d && qe(l),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return it(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Re || !a && !_) && e._startAt.revert(Ii), a && m && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (u && m && !d) {
      if (t && (a = !1), g = ft({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && qe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, O), k && (g[Y.prop] = k), vr(e._startAt = we.set(p, g)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Re ? e._startAt.revert(Ii) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        n(e._startAt, fe, fe);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = m && qe(l) || l && !m, E = 0; E < p.length; E++) {
      if (I = p[E], q = I._gsap || wo(p)[E]._gsap, e._ptLookup[E] = P = {}, Vs[q.id] && _r.length && qi(), z = b === p ? E : b.indexOf(I), Y && (F = new Y()).init(I, k || O, e, z, b) !== !1 && (e._pt = A = new Xe(e._pt, I, F.name, 0, 1, F.render, F, 0, F.priority), F._props.forEach(function(M) {
        P[M] = A;
      }), F.priority && (te = 1)), !Y || k)
        for (g in O)
          rt[g] && (F = cf(g, O, e, z, I, b)) ? F.priority && (te = 1) : P[g] = A = To.call(e, I, g, "get", O[g], z, b, 0, i.stringFilter);
      e._op && e._op[E] && e.kill(I, e._op[E]), S && e._pt && (ur = e, de.killTweensOf(I, P, e.globalTime(t)), w = !e.parent, ur = 0), e._pt && l && (Vs[q.id] = 1);
    }
    te && gf(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = f, e._initted = (!e._op || e._pt) && !w, h && t <= 0 && C.render(mt, !0, !0);
}, ph = function(e, t, r, i, s, o, a, l) {
  var f = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, c, h, _;
  if (!f)
    for (f = e._ptCache[t] = [], h = e._ptLookup, _ = e._targets.length; _--; ) {
      if (u = h[_][t], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
          u = u._next;
      if (!u)
        return Ys = 1, e.vars[t] = "+=0", So(e, a), Ys = 0, l ? ti(t + " not eligible for reset. Try splitting into individual properties") : 1;
      f.push(u);
    }
  for (_ = f.length; _--; )
    c = f[_], u = c._pt || c, u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c, u.c = r - u.s, c.e && (c.e = xe(r) + De(c.e)), c.b && (c.b = u.s + De(c.b));
}, mh = function(e, t) {
  var r = e[0] ? Ur(e[0]).harness : 0, i = r && r.aliases, s, o, a, l;
  if (!i)
    return t;
  s = Cn({}, t);
  for (o in i)
    if (o in s)
      for (l = i[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, gh = function(e, t, r, i) {
  var s = t.ease || i || "power1.inOut", o, a;
  if (Ne(t))
    a = r[e] || (r[e] = []), t.forEach(function(l, f) {
      return a.push({
        t: f / (t.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (o in t)
      a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: s
      });
}, Jn = function(e, t, r, i, s) {
  return ve(e) ? e.call(t, r, i, s) : Pe(e) && ~e.indexOf("random(") ? ni(e) : e;
}, hf = xo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", df = {};
Ye(hf + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
  return df[n] = 1;
});
var we = /* @__PURE__ */ (function(n) {
  zl(e, n);
  function e(r, i, s, o) {
    var a;
    typeof i == "number" && (s.duration = i, i = s, s = null), a = n.call(this, o ? i : Qn(i)) || this;
    var l = a.vars, f = l.duration, u = l.delay, c = l.immediateRender, h = l.stagger, _ = l.overwrite, m = l.keyframes, d = l.defaults, p = l.scrollTrigger, y = i.parent || de, b = (Ne(r) || Nl(r) ? $t(r[0]) : "length" in i) ? [r] : gt(r), S, C, x, O, E, g, A, I;
    if (a._targets = b.length ? wo(b) : ti("GSAP target " + r + " not found. https://gsap.com", !ot.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = _, m || h || Ei(f) || Ei(u)) {
      i = a.vars;
      var te = i.easeReverse || i.yoyoEase;
      if (S = a.timeline = new Ue({
        data: "nested",
        defaults: d || {},
        targets: y && y.data === "nested" ? y.vars.targets : b
      }), S.kill(), S.parent = S._dp = Ht(a), S._start = 0, h || Ei(f) || Ei(u)) {
        if (O = b.length, A = h && Jl(h), Lt(h))
          for (E in h)
            ~hf.indexOf(E) && (I || (I = {}), I[E] = h[E]);
        for (C = 0; C < O; C++)
          x = Yi(i, df), x.stagger = 0, te && (x.easeReverse = te), I && Cn(x, I), g = b[C], x.duration = +Jn(f, Ht(a), C, g, b), x.delay = (+Jn(u, Ht(a), C, g, b) || 0) - a._delay, !h && O === 1 && x.delay && (a._delay = u = x.delay, a._start += u, x.delay = 0), S.to(g, x, A ? A(C, g, b) : 0), S._ease = ne.none;
        S.duration() ? f = u = 0 : a.timeline = 0;
      } else if (m) {
        Qn(ft(S.vars.defaults, {
          ease: "none"
        })), S._ease = Yr(m.ease || i.ease || "none");
        var q = 0, Y, F, P;
        if (Ne(m))
          m.forEach(function(z) {
            return S.to(b, z, ">");
          }), S.duration();
        else {
          x = {};
          for (E in m)
            E === "ease" || E === "easeEach" || gh(E, m[E], x, m.easeEach);
          for (E in x)
            for (Y = x[E].sort(function(z, k) {
              return z.t - k.t;
            }), q = 0, C = 0; C < Y.length; C++)
              F = Y[C], P = {
                ease: F.e,
                duration: (F.t - (C ? Y[C - 1].t : 0)) / 100 * f
              }, P[E] = F.v, S.to(b, P, q), q += P.duration;
          S.duration() < f && S.to({}, {
            duration: f - S.duration()
          });
        }
      }
      f || a.duration(f = S.duration());
    } else
      a.timeline = 0;
    return _ === !0 && !po && (ur = Ht(a), de.killTweensOf(b), ur = 0), zt(y, Ht(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (c || !f && !m && a._start === he(y._time) && qe(c) && Xc(Ht(a)) && y.data !== "nested") && (a._tTime = -fe, a.render(Math.max(0, -u) || 0)), p && Hl(Ht(a), p), a;
  }
  var t = e.prototype;
  return t.render = function(i, s, o) {
    var a = this._time, l = this._tDur, f = this._dur, u = i < 0, c = i > l - fe && !u ? l : i < fe ? 0 : i, h, _, m, d, p, y, b, S;
    if (!f)
      Kc(this, i, s, o);
    else if (c !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (h = c, S = this.timeline, this._repeat) {
        if (d = f + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(d * 100 + i, s, o);
        if (h = he(c % d), c === l ? (m = this._repeat, h = f) : (p = he(c / d), m = ~~p, m && m === p ? (h = f, m--) : h > f && (h = f)), y = this._yoyo && m & 1, y && (h = f - h), p = En(this._tTime, d), h === a && !o && this._initted && m === p)
          return this._tTime = c, this;
        m !== p && this.vars.repeatRefresh && !y && !this._lock && h !== d && this._initted && (this._lock = o = 1, this.render(he(d * m), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Kl(this, u ? i : h, o, s, c))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && m !== p))
          return this;
        if (f !== this._dur)
          return this.render(i, s, o);
      }
      if (this._rEase) {
        var C = h < a;
        if (C !== this._inv) {
          var x = C ? a : f - a;
          this._inv = C, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = x ? (C ? -1 : 1) / x : 0, this._invScale = C ? -this.ratio : 1 - this.ratio, this._invEase = C ? this._rEase : this._ease;
        }
        this.ratio = b = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip);
      } else
        this.ratio = b = this._ease(h / f);
      if (this._from && (this.ratio = b = 1 - b), this._tTime = c, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && c && !s && !p && (it(this, "onStart"), this._tTime !== c))
        return this;
      for (_ = this._pt; _; )
        _.r(b, _.d), _ = _._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(h / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (u && Ws(this, i, s, o), it(this, "onUpdate")), this._repeat && m !== p && this.vars.onRepeat && !s && this.parent && it(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (u && !this._onUpdate && Ws(this, i, !0, !0), (i || !f) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && vr(this, 1), !s && !(u && !a) && (c || a || y) && (it(this, c === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), n.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, s, o, a, l) {
    ii || nt.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || So(this, f), u = this._ease(f / this._dur), ph(this, i, s, o, a, u, f, l) ? this.resetTo(i, s, o, a, 1) : (fs(this, 0), this.parent || Yl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? jn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Re), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, ur && ur.vars.overwrite !== !0)._first || jn(this), this.parent && o !== this.timeline.totalDuration() && An(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? gt(i) : a, f = this._ptLookup, u = this._pt, c, h, _, m, d, p, y;
    if ((!s || s === "all") && qc(a, l))
      return s === "all" && (this._pt = 0), jn(this);
    for (c = this._op = this._op || [], s !== "all" && (Pe(s) && (d = {}, Ye(s, function(b) {
      return d[b] = 1;
    }), s = d), s = mh(a, s)), y = a.length; y--; )
      if (~l.indexOf(a[y])) {
        h = f[y], s === "all" ? (c[y] = s, m = h, _ = {}) : (_ = c[y] = c[y] || {}, m = s);
        for (d in m)
          p = h && h[d], p && ((!("kill" in p.d) || p.d.kill(d) === !0) && as(this, p, "_pt"), delete h[d]), _ !== "all" && (_[d] = 1);
      }
    return this._initted && !this._pt && u && jn(this), this;
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2]);
  }, e.from = function(i, s) {
    return Zn(1, arguments);
  }, e.delayedCall = function(i, s, o, a) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(i, s, o) {
    return Zn(2, arguments);
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s);
  }, e.killTweensOf = function(i, s, o) {
    return de.killTweensOf(i, s, o);
  }, e;
})(si);
ft(we.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ye("staggerTo,staggerFrom,staggerFromTo", function(n) {
  we[n] = function() {
    var e = new Ue(), t = js.call(arguments, 0);
    return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
  };
});
var Co = function(e, t, r) {
  return e[t] = r;
}, _f = function(e, t, r) {
  return e[t](r);
}, vh = function(e, t, r, i) {
  return e[t](i.fp, r);
}, bh = function(e, t, r) {
  return e.setAttribute(t, r);
}, Eo = function(e, t) {
  return ve(e[t]) ? _f : mo(e[t]) && e.setAttribute ? bh : Co;
}, pf = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, yh = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, mf = function(e, t) {
  var r = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, Ao = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, xh = function(e, t, r, i) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === i && s.modifier(e, t, r), s = o;
}, wh = function(e) {
  for (var t = this._pt, r, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? as(this, t, "_pt") : t.dep || (r = 1), t = i;
  return !r;
}, kh = function(e, t, r, i) {
  i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
}, gf = function(e) {
  for (var t = e._pt, r, i, s, o; t; ) {
    for (r = t._next, i = s; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : o) ? t._prev._next = t : s = t, (t._next = i) ? i._prev = t : o = t, t = r;
  }
  e._pt = s;
}, Xe = /* @__PURE__ */ (function() {
  function n(t, r, i, s, o, a, l, f, u) {
    this.t = r, this.s = s, this.c = o, this.p = i, this.r = a || pf, this.d = l || this, this.set = f || Co, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = n.prototype;
  return e.modifier = function(r, i, s) {
    this.mSet = this.mSet || this.set, this.set = kh, this.m = r, this.mt = s, this.tween = i;
  }, n;
})();
Ye(xo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(n) {
  return yo[n] = 1;
});
lt.TweenMax = lt.TweenLite = we;
lt.TimelineLite = lt.TimelineMax = Ue;
de = new Ue({
  sortChildren: !1,
  defaults: ei,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ot.stringFilter = lf;
var Xr = [], Li = {}, Th = [], aa = 0, Sh = 0, bs = function(e) {
  return (Li[e] || Th).map(function(t) {
    return t();
  });
}, Xs = function() {
  var e = Date.now(), t = [];
  e - aa > 2 && (bs("matchMediaInit"), Xr.forEach(function(r) {
    var i = r.queries, s = r.conditions, o, a, l, f;
    for (a in i)
      o = Pt.matchMedia(i[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, f = 1);
    f && (r.revert(), l && t.push(r));
  }), bs("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), aa = e, bs("matchMedia"));
}, vf = /* @__PURE__ */ (function() {
  function n(t, r) {
    this.selector = r && Us(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Sh++, t && this.add(t);
  }
  var e = n.prototype;
  return e.add = function(r, i, s) {
    ve(r) && (s = i, i = r, r = ve);
    var o = this, a = function() {
      var f = ce, u = o.selector, c;
      return f && f !== o && f.data.push(o), s && (o.selector = Us(s)), ce = o, c = i.apply(o, arguments), ve(c) && o._r.push(c), ce = f, o.selector = u, o.isReverted = !1, c;
    };
    return o.last = a, r === ve ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, e.ignore = function(r) {
    var i = ce;
    ce = null, r(this), ce = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof n ? r.push.apply(r, i.getTweens()) : i instanceof we && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var s = this;
    if (r ? (function() {
      for (var a = s.getTweens(), l = s.data.length, f; l--; )
        f = s.data[l], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(u) {
          return a.splice(a.indexOf(u), 1);
        }));
      for (a.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, c) {
        return c.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(r);
      }), l = s.data.length; l--; )
        f = s.data[l], f instanceof Ue ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof we) && f.revert && f.revert(r);
      s._r.forEach(function(u) {
        return u(r, s);
      }), s.isReverted = !0;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = Xr.length; o--; )
        Xr[o].id === this.id && Xr.splice(o, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, n;
})(), Ch = /* @__PURE__ */ (function() {
  function n(t) {
    this.contexts = [], this.scope = t, ce && ce.data.push(this);
  }
  var e = n.prototype;
  return e.add = function(r, i, s) {
    Lt(r) || (r = {
      matches: r
    });
    var o = new vf(0, s || this.scope), a = o.conditions = {}, l, f, u;
    ce && !o.selector && (o.selector = ce.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
    for (f in r)
      f === "all" ? u = 1 : (l = Pt.matchMedia(r[f]), l && (Xr.indexOf(o) < 0 && Xr.push(o), (a[f] = l.matches) && (u = 1), l.addListener ? l.addListener(Xs) : l.addEventListener("change", Xs)));
    return u && i(o, function(c) {
      return o.add(null, c);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, n;
})(), Hi = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(i) {
      return sf(i);
    });
  },
  timeline: function(e) {
    return new Ue(e);
  },
  getTweensOf: function(e, t) {
    return de.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, i) {
    Pe(e) && (e = gt(e)[0]);
    var s = Ur(e || {}).get, o = r ? ql : Ul;
    return r === "native" && (r = ""), e && (t ? o((rt[t] && rt[t].get || s)(e, t, r, i)) : function(a, l, f) {
      return o((rt[a] && rt[a].get || s)(e, a, l, f));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = gt(e), e.length > 1) {
      var i = e.map(function(u) {
        return Ke.quickSetter(u, t, r);
      }), s = i.length;
      return function(u) {
        for (var c = s; c--; )
          i[c](u);
      };
    }
    e = e[0] || {};
    var o = rt[t], a = Ur(e), l = a.harness && (a.harness.aliases || {})[t] || t, f = o ? function(u) {
      var c = new o();
      fn._pt = 0, c.init(e, r ? u + r : u, fn, 0, [e]), c.render(1, c), fn._pt && Ao(1, fn);
    } : a.set(e, l);
    return o ? f : function(u) {
      return f(e, l, r ? u + r : u, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var i, s = Ke.to(e, ft((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), o = function(l, f, u) {
      return s.resetTo(t, l, f, u);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return de.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Yr(e.ease, ei.ease)), ra(ei, e || {});
  },
  config: function(e) {
    return ra(ot, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, i = e.plugins, s = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !rt[a] && !lt[a] && ti(t + " effect requires " + a + " plugin.");
    }), ps[t] = function(a, l, f) {
      return r(gt(a), ft(l || {}, s), f);
    }, o && (Ue.prototype[t] = function(a, l, f) {
      return this.add(ps[t](a, Lt(l) ? l : (f = l) && {}, this), f);
    });
  },
  registerEase: function(e, t) {
    ne[e] = Yr(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Yr(e, t) : ne;
  },
  getById: function(e) {
    return de.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new Ue(e), i, s;
    for (r.smoothChildTiming = qe(e.smoothChildTiming), de.remove(r), r._dp = 0, r._time = r._tTime = de._time, i = de._first; i; )
      s = i._next, (t || !(!i._dur && i instanceof we && i.vars.onComplete === i._targets[0])) && zt(r, i, i._start - i._delay), i = s;
    return zt(de, r, 0), r;
  },
  context: function(e, t) {
    return e ? new vf(e, t) : ce;
  },
  matchMedia: function(e) {
    return new Ch(e);
  },
  matchMediaRefresh: function() {
    return Xr.forEach(function(e) {
      var t = e.conditions, r, i;
      for (i in t)
        t[i] && (t[i] = !1, r = 1);
      r && e.revert();
    }) || Xs();
  },
  addEventListener: function(e, t) {
    var r = Li[e] || (Li[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = Li[e], i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: nh,
    wrapYoyo: ih,
    distribute: Jl,
    random: ef,
    snap: $l,
    normalize: rh,
    getUnit: De,
    clamp: Jc,
    splitColor: of,
    toArray: gt,
    selector: Us,
    mapRange: rf,
    pipe: eh,
    unitize: th,
    interpolate: sh,
    shuffle: Zl
  },
  install: Bl,
  effects: ps,
  ticker: nt,
  updateRoot: Ue.updateRoot,
  plugins: rt,
  globalTimeline: de,
  core: {
    PropTween: Xe,
    globals: Vl,
    Tween: we,
    Timeline: Ue,
    Animation: si,
    getCache: Ur,
    _removeLinkedListItem: as,
    reverting: function() {
      return Re;
    },
    context: function(e) {
      return e && ce && (ce.data.push(e), e._ctx = ce), ce;
    },
    suppressOverwrites: function(e) {
      return po = e;
    }
  }
};
Ye("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
  return Hi[n] = we[n];
});
nt.add(Ue.updateRoot);
fn = Hi.to({}, {
  duration: 0
});
var Eh = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, Ah = function(e, t) {
  var r = e._targets, i, s, o;
  for (i in t)
    for (s = r.length; s--; )
      o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = Eh(o, i)), o && o.modifier && o.modifier(t[i], e, r[s], i));
}, ys = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, o) {
      o._onInit = function(a) {
        var l, f;
        if (Pe(s) && (l = {}, Ye(s, function(u) {
          return l[u] = 1;
        }), s = l), t) {
          l = {};
          for (f in s)
            l[f] = t(s[f]);
          s = l;
        }
        Ah(a, s);
      };
    }
  };
}, Ke = Hi.registerPlugin({
  name: "attr",
  init: function(e, t, r, i, s) {
    var o, a, l;
    this.tween = r;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      Re ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, ys("roundProps", qs), ys("modifiers"), ys("snap", $l)) || Hi;
we.version = Ue.version = Ke.version = "3.15.0";
Ll = 1;
go() && Pn();
ne.Power0;
ne.Power1;
ne.Power2;
ne.Power3;
ne.Power4;
ne.Linear;
ne.Quad;
ne.Cubic;
ne.Quart;
ne.Quint;
ne.Strong;
ne.Elastic;
ne.Back;
ne.SteppedEase;
ne.Bounce;
ne.Sine;
ne.Expo;
ne.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var la, cr, hn, Po, zr, fa, Mo, Ph = function() {
  return typeof window < "u";
}, er = {}, Pr = 180 / Math.PI, dn = Math.PI / 180, nn = Math.atan2, ua = 1e8, Oo = /([A-Z])/g, Mh = /(left|right|width|margin|padding|x)/i, Oh = /[\s,\(]\S/, Nt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Hs = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Rh = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, zh = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Dh = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Nh = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, bf = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, yf = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Ih = function(e, t, r) {
  return e.style[t] = r;
}, Fh = function(e, t, r) {
  return e.style.setProperty(t, r);
}, Lh = function(e, t, r) {
  return e._gsap[t] = r;
}, Bh = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, Vh = function(e, t, r, i, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, Wh = function(e, t, r, i, s) {
  var o = e._gsap;
  o[t] = r, o.renderTransform(s, o);
}, _e = "transform", He = _e + "Origin", Gh = function n(e, t) {
  var r = this, i = this.target, s = i.style, o = i._gsap;
  if (e in er && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Nt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = Kt(i, a);
      }) : this.tfm[e] = o.x ? o[e] : Kt(i, e), e === He && (this.tfm.zOrigin = o.zOrigin);
    else
      return Nt.transform.split(",").forEach(function(a) {
        return n.call(r, a, t);
      });
    if (this.props.indexOf(_e) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(He, t, "")), e = _e;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, xf = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, jh = function() {
  var e = this.props, t = this.target, r = t.style, i = t._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Oo, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Mo(), (!s || !s.isStart) && !r[_e] && (xf(r), i.zOrigin && r[He] && (r[He] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, wf = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: jh,
    save: Gh
  };
  return e._gsap || Ke.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, kf, Ks = function(e, t) {
  var r = cr.createElementNS ? cr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : cr.createElement(e);
  return r && r.style ? r : cr.createElement(e);
}, st = function n(e, t, r) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Oo, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && n(e, Mn(t) || t, 1) || "";
}, ca = "O,Moz,ms,Ms,Webkit".split(","), Mn = function(e, t, r) {
  var i = t || zr, s = i.style, o = 5;
  if (e in s && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ca[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ca[o] : "") + e;
}, Qs = function() {
  Ph() && window.document && (la = window, cr = la.document, hn = cr.documentElement, zr = Ks("div") || {
    style: {}
  }, Ks("div"), _e = Mn(_e), He = _e + "Origin", zr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kf = !!Mn("perspective"), Mo = Ke.core.reverting, Po = 1);
}, ha = function(e) {
  var t = e.ownerSVGElement, r = Ks("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), s;
  i.style.display = "block", r.appendChild(i), hn.appendChild(r);
  try {
    s = i.getBBox();
  } catch {
  }
  return r.removeChild(i), hn.removeChild(r), s;
}, da = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, Tf = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = ha(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = ha(e)), t && !t.width && !t.x && !t.y ? {
    x: +da(e, ["x", "cx", "x1"]) || 0,
    y: +da(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Sf = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Tf(e));
}, br = function(e, t) {
  if (t) {
    var r = e.style, i;
    t in er && t !== He && (t = _e), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace(Oo, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, hr = function(e, t, r, i, s, o) {
  var a = new Xe(e._pt, t, r, 0, 1, o ? yf : bf);
  return e._pt = a, a.b = i, a.e = s, e._props.push(r), a;
}, _a = {
  deg: 1,
  rad: 1,
  turn: 1
}, Uh = {
  grid: 1,
  flex: 1
}, yr = function n(e, t, r, i) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = zr.style, l = Mh.test(t), f = e.tagName.toLowerCase() === "svg", u = (f ? "client" : "offset") + (l ? "Width" : "Height"), c = 100, h = i === "px", _ = i === "%", m, d, p, y;
  if (i === o || !s || _a[i] || _a[o])
    return s;
  if (o !== "px" && !h && (s = n(e, t, r, "px")), y = e.getCTM && Sf(e), (_ || o === "%") && (er[t] || ~t.indexOf("adius")))
    return m = y ? e.getBBox()[l ? "width" : "height"] : e[u], xe(_ ? s / m * c : s / 100 * m);
  if (a[l ? "width" : "height"] = c + (h ? o : i), d = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !f ? e : e.parentNode, y && (d = (e.ownerSVGElement || {}).parentNode), (!d || d === cr || !d.appendChild) && (d = cr.body), p = d._gsap, p && _ && p.width && l && p.time === nt.time && !p.uncache)
    return xe(s / p.width * c);
  if (_ && (t === "height" || t === "width")) {
    var b = e.style[t];
    e.style[t] = c + i, m = e[u], b ? e.style[t] = b : br(e, t);
  } else
    (_ || o === "%") && !Uh[st(d, "display")] && (a.position = st(e, "position")), d === e && (a.position = "static"), d.appendChild(zr), m = zr[u], d.removeChild(zr), a.position = "absolute";
  return l && _ && (p = Ur(d), p.time = nt.time, p.width = d[u]), xe(h ? m * s / c : m && s ? c / m * s : 0);
}, Kt = function(e, t, r, i) {
  var s;
  return Po || Qs(), t in Nt && t !== "transform" && (t = Nt[t], ~t.indexOf(",") && (t = t.split(",")[0])), er[t] && t !== "transform" ? (s = ai(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Qi(st(e, He)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Ki[t] && Ki[t](e, t, r) || st(e, t) || Gl(e, t) || (t === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? yr(e, t, s, r) + r : s;
}, qh = function(e, t, r, i) {
  if (!r || r === "none") {
    var s = Mn(t, e, 1), o = s && st(e, s, 1);
    o && o !== r ? (t = s, r = o) : t === "borderColor" && (r = st(e, "borderTopColor"));
  }
  var a = new Xe(this._pt, e.style, t, 0, 1, mf), l = 0, f = 0, u, c, h, _, m, d, p, y, b, S, C, x;
  if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = st(e, i.substring(4, i.indexOf(")")))), i === "auto" && (d = e.style[t], e.style[t] = i, i = st(e, t) || i, d ? e.style[t] = d : br(e, t)), u = [r, i], lf(u), r = u[0], i = u[1], h = r.match(ln) || [], x = i.match(ln) || [], x.length) {
    for (; c = ln.exec(i); )
      p = c[0], b = i.substring(l, c.index), m ? m = (m + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (m = 1), p !== (d = h[f++] || "") && (_ = parseFloat(d) || 0, C = d.substr((_ + "").length), p.charAt(1) === "=" && (p = cn(_, p) + C), y = parseFloat(p), S = p.substr((y + "").length), l = ln.lastIndex - S.length, S || (S = S || ot.units[t] || C, l === i.length && (i += S, a.e += S)), C !== S && (_ = yr(e, t, d, S) || 0), a._pt = {
        _next: a._pt,
        p: b || f === 1 ? b : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: _,
        c: y - _,
        m: m && m < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = t === "display" && i === "none" ? yf : bf;
  return Fl.test(i) && (a.e = 0), this._pt = a, a;
}, pa = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Yh = function(e) {
  var t = e.split(" "), r = t[0], i = t[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = pa[r] || r, t[1] = pa[i] || i, t.join(" ");
}, Xh = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, i = r.style, s = t.u, o = r._gsap, a, l, f;
    if (s === "all" || s === !0)
      i.cssText = "", l = 1;
    else
      for (s = s.split(","), f = s.length; --f > -1; )
        a = s[f], er[a] && (l = 1, a = a === "transformOrigin" ? He : _e), br(r, a);
    l && (br(r, _e), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", ai(r, 1), o.uncache = 1, xf(i)));
  }
}, Ki = {
  clearProps: function(e, t, r, i, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Xe(e._pt, t, r, 0, 0, Xh);
      return o.u = i, o.pr = -10, o.tween = s, e._props.push(r), 1;
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
}, oi = [1, 0, 0, 1, 0, 0], Cf = {}, Ef = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, ma = function(e) {
  var t = st(e, _e);
  return Ef(t) ? oi : t.substr(7).match(Il).map(xe);
}, Ro = function(e, t) {
  var r = e._gsap || Ur(e), i = e.style, s = ma(e), o, a, l, f;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? oi : s) : (s === oi && !e.offsetParent && e !== hn && !r.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (f = 1, a = e.nextElementSibling, hn.appendChild(e)), s = ma(e), l ? i.display = l : br(e, "display"), f && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : hn.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Zs = function(e, t, r, i, s, o) {
  var a = e._gsap, l = s || Ro(e, !0), f = a.xOrigin || 0, u = a.yOrigin || 0, c = a.xOffset || 0, h = a.yOffset || 0, _ = l[0], m = l[1], d = l[2], p = l[3], y = l[4], b = l[5], S = t.split(" "), C = parseFloat(S[0]) || 0, x = parseFloat(S[1]) || 0, O, E, g, A;
  r ? l !== oi && (E = _ * p - m * d) && (g = C * (p / E) + x * (-d / E) + (d * b - p * y) / E, A = C * (-m / E) + x * (_ / E) - (_ * b - m * y) / E, C = g, x = A) : (O = Tf(e), C = O.x + (~S[0].indexOf("%") ? C / 100 * O.width : C), x = O.y + (~(S[1] || S[0]).indexOf("%") ? x / 100 * O.height : x)), i || i !== !1 && a.smooth ? (y = C - f, b = x - u, a.xOffset = c + (y * _ + b * d) - y, a.yOffset = h + (y * m + b * p) - b) : a.xOffset = a.yOffset = 0, a.xOrigin = C, a.yOrigin = x, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!r, e.style[He] = "0px 0px", o && (hr(o, a, "xOrigin", f, C), hr(o, a, "yOrigin", u, x), hr(o, a, "xOffset", c, a.xOffset), hr(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", C + " " + x);
}, ai = function(e, t) {
  var r = e._gsap || new uf(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), f = st(e, He) || "0", u, c, h, _, m, d, p, y, b, S, C, x, O, E, g, A, I, te, q, Y, F, P, z, k, w, M, T, B, N, D, L, R;
  return u = c = h = d = p = y = b = S = C = 0, _ = m = 1, r.svg = !!(e.getCTM && Sf(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[_e] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[_e] !== "none" ? l[_e] : "")), i.scale = i.rotate = i.translate = "none"), E = Ro(e, r.svg), r.svg && (r.uncache ? (w = e.getBBox(), f = r.xOrigin - w.x + "px " + (r.yOrigin - w.y) + "px", k = "") : k = !t && e.getAttribute("data-svg-origin"), Zs(e, k || f, !!k || r.originIsAbsolute, r.smooth !== !1, E)), x = r.xOrigin || 0, O = r.yOrigin || 0, E !== oi && (te = E[0], q = E[1], Y = E[2], F = E[3], u = P = E[4], c = z = E[5], E.length === 6 ? (_ = Math.sqrt(te * te + q * q), m = Math.sqrt(F * F + Y * Y), d = te || q ? nn(q, te) * Pr : 0, b = Y || F ? nn(Y, F) * Pr + d : 0, b && (m *= Math.abs(Math.cos(b * dn))), r.svg && (u -= x - (x * te + O * Y), c -= O - (x * q + O * F))) : (R = E[6], D = E[7], T = E[8], B = E[9], N = E[10], L = E[11], u = E[12], c = E[13], h = E[14], g = nn(R, N), p = g * Pr, g && (A = Math.cos(-g), I = Math.sin(-g), k = P * A + T * I, w = z * A + B * I, M = R * A + N * I, T = P * -I + T * A, B = z * -I + B * A, N = R * -I + N * A, L = D * -I + L * A, P = k, z = w, R = M), g = nn(-Y, N), y = g * Pr, g && (A = Math.cos(-g), I = Math.sin(-g), k = te * A - T * I, w = q * A - B * I, M = Y * A - N * I, L = F * I + L * A, te = k, q = w, Y = M), g = nn(q, te), d = g * Pr, g && (A = Math.cos(g), I = Math.sin(g), k = te * A + q * I, w = P * A + z * I, q = q * A - te * I, z = z * A - P * I, te = k, P = w), p && Math.abs(p) + Math.abs(d) > 359.9 && (p = d = 0, y = 180 - y), _ = xe(Math.sqrt(te * te + q * q + Y * Y)), m = xe(Math.sqrt(z * z + R * R)), g = nn(P, z), b = Math.abs(g) > 2e-4 ? g * Pr : 0, C = L ? 1 / (L < 0 ? -L : L) : 0), r.svg && (k = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Ef(st(e, _e)), k && e.setAttribute("transform", k))), Math.abs(b) > 90 && Math.abs(b) < 270 && (s ? (_ *= -1, b += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (m *= -1, b += b <= 0 ? 180 : -180)), t = t || r.uncache, r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = c - ((r.yPercent = c && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = xe(_), r.scaleY = xe(m), r.rotation = xe(d) + a, r.rotationX = xe(p) + a, r.rotationY = xe(y) + a, r.skewX = b + a, r.skewY = S + a, r.transformPerspective = C + o, (r.zOrigin = parseFloat(f.split(" ")[2]) || !t && r.zOrigin || 0) && (i[He] = Qi(f)), r.xOffset = r.yOffset = 0, r.force3D = ot.force3D, r.renderTransform = r.svg ? Kh : kf ? Af : Hh, r.uncache = 0, r;
}, Qi = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, xs = function(e, t, r) {
  var i = De(t);
  return xe(parseFloat(t) + parseFloat(yr(e, "x", r + "px", i))) + i;
}, Hh = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Af(e, t);
}, Cr = "0deg", Nn = "0px", Er = ") ", Af = function(e, t) {
  var r = t || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.z, f = r.rotation, u = r.rotationY, c = r.rotationX, h = r.skewX, _ = r.skewY, m = r.scaleX, d = r.scaleY, p = r.transformPerspective, y = r.force3D, b = r.target, S = r.zOrigin, C = "", x = y === "auto" && e && e !== 1 || y === !0;
  if (S && (c !== Cr || u !== Cr)) {
    var O = parseFloat(u) * dn, E = Math.sin(O), g = Math.cos(O), A;
    O = parseFloat(c) * dn, A = Math.cos(O), o = xs(b, o, E * A * -S), a = xs(b, a, -Math.sin(O) * -S), l = xs(b, l, g * A * -S + S);
  }
  p !== Nn && (C += "perspective(" + p + Er), (i || s) && (C += "translate(" + i + "%, " + s + "%) "), (x || o !== Nn || a !== Nn || l !== Nn) && (C += l !== Nn || x ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Er), f !== Cr && (C += "rotate(" + f + Er), u !== Cr && (C += "rotateY(" + u + Er), c !== Cr && (C += "rotateX(" + c + Er), (h !== Cr || _ !== Cr) && (C += "skew(" + h + ", " + _ + Er), (m !== 1 || d !== 1) && (C += "scale(" + m + ", " + d + Er), b.style[_e] = C || "translate(0, 0)";
}, Kh = function(e, t) {
  var r = t || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, f = r.skewX, u = r.skewY, c = r.scaleX, h = r.scaleY, _ = r.target, m = r.xOrigin, d = r.yOrigin, p = r.xOffset, y = r.yOffset, b = r.forceCSS, S = parseFloat(o), C = parseFloat(a), x, O, E, g, A;
  l = parseFloat(l), f = parseFloat(f), u = parseFloat(u), u && (u = parseFloat(u), f += u, l += u), l || f ? (l *= dn, f *= dn, x = Math.cos(l) * c, O = Math.sin(l) * c, E = Math.sin(l - f) * -h, g = Math.cos(l - f) * h, f && (u *= dn, A = Math.tan(f - u), A = Math.sqrt(1 + A * A), E *= A, g *= A, u && (A = Math.tan(u), A = Math.sqrt(1 + A * A), x *= A, O *= A)), x = xe(x), O = xe(O), E = xe(E), g = xe(g)) : (x = c, g = h, O = E = 0), (S && !~(o + "").indexOf("px") || C && !~(a + "").indexOf("px")) && (S = yr(_, "x", o, "px"), C = yr(_, "y", a, "px")), (m || d || p || y) && (S = xe(S + m - (m * x + d * E) + p), C = xe(C + d - (m * O + d * g) + y)), (i || s) && (A = _.getBBox(), S = xe(S + i / 100 * A.width), C = xe(C + s / 100 * A.height)), A = "matrix(" + x + "," + O + "," + E + "," + g + "," + S + "," + C + ")", _.setAttribute("transform", A), b && (_.style[_e] = A);
}, Qh = function(e, t, r, i, s) {
  var o = 360, a = Pe(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? Pr : 1), f = l - i, u = i + f + "deg", c, h;
  return a && (c = s.split("_")[1], c === "short" && (f %= o, f !== f % (o / 2) && (f += f < 0 ? o : -o)), c === "cw" && f < 0 ? f = (f + o * ua) % o - ~~(f / o) * o : c === "ccw" && f > 0 && (f = (f - o * ua) % o - ~~(f / o) * o)), e._pt = h = new Xe(e._pt, t, r, i, f, Rh), h.e = u, h.u = "deg", e._props.push(r), h;
}, ga = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Zh = function(e, t, r) {
  var i = ga({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, f, u, c, h, _, m;
  i.svg ? (f = r.getAttribute("transform"), r.setAttribute("transform", ""), o[_e] = t, a = ai(r, 1), br(r, _e), r.setAttribute("transform", f)) : (f = getComputedStyle(r)[_e], o[_e] = t, a = ai(r, 1), o[_e] = f);
  for (l in er)
    f = i[l], u = a[l], f !== u && s.indexOf(l) < 0 && (_ = De(f), m = De(u), c = _ !== m ? yr(r, l, f, m) : parseFloat(f), h = parseFloat(u), e._pt = new Xe(e._pt, a, l, c, h - c, Hs), e._pt.u = m || 0, e._props.push(l));
  ga(a, i);
};
Ye("padding,margin,Width,Radius", function(n, e) {
  var t = "Top", r = "Right", i = "Bottom", s = "Left", o = (e < 3 ? [t, r, i, s] : [t + s, t + r, i + r, i + s]).map(function(a) {
    return e < 2 ? n + a : "border" + a + n;
  });
  Ki[e > 1 ? "border" + n : n] = function(a, l, f, u, c) {
    var h, _;
    if (arguments.length < 4)
      return h = o.map(function(m) {
        return Kt(a, m, f);
      }), _ = h.join(" "), _.split(h[0]).length === 5 ? h[0] : _;
    h = (u + "").split(" "), _ = {}, o.forEach(function(m, d) {
      return _[m] = h[d] = h[d] || h[(d - 1) / 2 | 0];
    }), a.init(l, _, c);
  };
});
var Pf = {
  name: "css",
  register: Qs,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, s) {
    var o = this._props, a = e.style, l = r.vars.startAt, f, u, c, h, _, m, d, p, y, b, S, C, x, O, E, g, A;
    Po || Qs(), this.styles = this.styles || wf(e), g = this.styles.props, this.tween = r;
    for (d in t)
      if (d !== "autoRound" && (u = t[d], !(rt[d] && cf(d, t, r, i, e, s)))) {
        if (_ = typeof u, m = Ki[d], _ === "function" && (u = u.call(r, i, e, s), _ = typeof u), _ === "string" && ~u.indexOf("random(") && (u = ni(u)), m)
          m(this, e, d, u, r) && (E = 1);
        else if (d.substr(0, 2) === "--")
          f = (getComputedStyle(e).getPropertyValue(d) + "").trim(), u += "", pr.lastIndex = 0, pr.test(f) || (p = De(f), y = De(u), y ? p !== y && (f = yr(e, d, f, y) + y) : p && (u += p)), this.add(a, "setProperty", f, u, i, s, 0, 0, d), o.push(d), g.push(d, 0, a[d]);
        else if (_ !== "undefined") {
          if (l && d in l ? (f = typeof l[d] == "function" ? l[d].call(r, i, e, s) : l[d], Pe(f) && ~f.indexOf("random(") && (f = ni(f)), De(f + "") || f === "auto" || (f += ot.units[d] || De(Kt(e, d)) || ""), (f + "").charAt(1) === "=" && (f = Kt(e, d))) : f = Kt(e, d), h = parseFloat(f), b = _ === "string" && u.charAt(1) === "=" && u.substr(0, 2), b && (u = u.substr(2)), c = parseFloat(u), d in Nt && (d === "autoAlpha" && (h === 1 && Kt(e, "visibility") === "hidden" && c && (h = 0), g.push("visibility", 0, a.visibility), hr(this, a, "visibility", h ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), d !== "scale" && d !== "transform" && (d = Nt[d], ~d.indexOf(",") && (d = d.split(",")[0]))), S = d in er, S) {
            if (this.styles.save(d), A = u, _ === "string" && u.substring(0, 6) === "var(--") {
              if (u = st(e, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
                var I = e.style.perspective;
                e.style.perspective = u, u = st(e, "perspective"), I ? e.style.perspective = I : br(e, "perspective");
              }
              c = parseFloat(u);
            }
            if (C || (x = e._gsap, x.renderTransform && !t.parseTransform || ai(e, t.parseTransform), O = t.smoothOrigin !== !1 && x.smooth, C = this._pt = new Xe(this._pt, a, _e, 0, 1, x.renderTransform, x, 0, -1), C.dep = 1), d === "scale")
              this._pt = new Xe(this._pt, x, "scaleY", x.scaleY, (b ? cn(x.scaleY, b + c) : c) - x.scaleY || 0, Hs), this._pt.u = 0, o.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              g.push(He, 0, a[He]), u = Yh(u), x.svg ? Zs(e, u, 0, O, 0, this) : (y = parseFloat(u.split(" ")[2]) || 0, y !== x.zOrigin && hr(this, x, "zOrigin", x.zOrigin, y), hr(this, a, d, Qi(f), Qi(u)));
              continue;
            } else if (d === "svgOrigin") {
              Zs(e, u, 1, O, 0, this);
              continue;
            } else if (d in Cf) {
              Qh(this, x, d, h, b ? cn(h, b + u) : u);
              continue;
            } else if (d === "smoothOrigin") {
              hr(this, x, "smooth", x.smooth, u);
              continue;
            } else if (d === "force3D") {
              x[d] = u;
              continue;
            } else if (d === "transform") {
              Zh(this, u, e);
              continue;
            }
          } else d in a || (d = Mn(d) || d);
          if (S || (c || c === 0) && (h || h === 0) && !Oh.test(u) && d in a)
            p = (f + "").substr((h + "").length), c || (c = 0), y = De(u) || (d in ot.units ? ot.units[d] : p), p !== y && (h = yr(e, d, f, y)), this._pt = new Xe(this._pt, S ? x : a, d, h, (b ? cn(h, b + c) : c) - h, !S && (y === "px" || d === "zIndex") && t.autoRound !== !1 ? Nh : Hs), this._pt.u = y || 0, S && A !== u ? (this._pt.b = f, this._pt.e = A, this._pt.r = Dh) : p !== y && y !== "%" && (this._pt.b = f, this._pt.r = zh);
          else if (d in a)
            qh.call(this, e, d, f, b ? b + u : u);
          else if (d in e)
            this.add(e, d, f || e[d], b ? b + u : u, i, s);
          else if (d !== "parseTransform") {
            bo(d, u);
            continue;
          }
          S || (d in a ? g.push(d, 0, a[d]) : typeof e[d] == "function" ? g.push(d, 2, e[d]()) : g.push(d, 1, f || e[d])), o.push(d);
        }
      }
    E && gf(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Mo())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: Kt,
  aliases: Nt,
  getSetter: function(e, t, r) {
    var i = Nt[t];
    return i && i.indexOf(",") < 0 && (t = i), t in er && t !== He && (e._gsap.x || Kt(e, "x")) ? r && fa === r ? t === "scale" ? Bh : Lh : (fa = r || {}) && (t === "scale" ? Vh : Wh) : e.style && !mo(e.style[t]) ? Ih : ~t.indexOf("-") ? Fh : Eo(e, t);
  },
  core: {
    _removeProperty: br,
    _getMatrix: Ro
  }
};
Ke.utils.checkPrefix = Mn;
Ke.core.getStyleSaver = wf;
(function(n, e, t, r) {
  var i = Ye(n + "," + e + "," + t, function(s) {
    er[s] = 1;
  });
  Ye(e, function(s) {
    ot.units[s] = "deg", Cf[s] = 1;
  }), Nt[i[13]] = n + "," + e, Ye(r, function(s) {
    var o = s.split(":");
    Nt[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
  ot.units[n] = "px";
});
Ke.registerPlugin(Pf);
var sr = Ke.registerPlugin(Pf) || Ke;
sr.core.Tween;
/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */
let In, Fn, va = typeof Symbol == "function" ? Symbol() : "_split", Js, Jh = () => Js || to.register(window.gsap), ba = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, li = (n) => n ? typeof n == "string" ? li(document.querySelectorAll(n)) : "length" in n ? Array.from(n).reduce((e, t) => (typeof t == "string" ? e.push(...li(t)) : e.push(t), e), []) : [n] : [], ya = (n) => li(n).filter((e) => e && e.nodeType === 1), $s = [], ws = function() {
}, $h = { add: (n) => n() }, ed = /\s+/g, xa = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), Zi = { left: 0, top: 0, width: 0, height: 0 }, td = (n, e) => {
  for (; ++e < n.length && n[e] === Zi; )
    ;
  return n[e] || Zi;
}, wa = ({ element: n, html: e, ariaL: t, ariaH: r }) => {
  n.innerHTML = e, t ? n.setAttribute("aria-label", t) : n.removeAttribute("aria-label"), r ? n.setAttribute("aria-hidden", r) : n.removeAttribute("aria-hidden");
}, ka = (n, e) => {
  if (e) {
    let t = new Set(n.join("").match(e) || $s), r = n.length, i, s, o, a;
    if (t.size)
      for (; --r > -1; ) {
        s = n[r];
        for (o of t)
          if (o.startsWith(s) && o.length > s.length) {
            for (i = 0, a = s; o.startsWith(a += n[r + ++i]) && a.length < o.length; )
              ;
            if (i && a.length === o.length) {
              n[r] = o, n.splice(r + 1, i);
              break;
            }
          }
      }
  }
  return n;
}, Ta = (n) => window.getComputedStyle(n).display === "inline" && (n.style.display = "inline-block"), sn = (n, e, t) => e.insertBefore(typeof n == "string" ? document.createTextNode(n) : n, t), eo = (n, e, t) => {
  let r = e[n + "sClass"] || "", { tag: i = "div", aria: s = "auto", propIndex: o = !1 } = e, a = n === "line" ? "block" : "inline-block", l = r.indexOf("++") > -1, f = (u) => {
    let c = document.createElement(i), h = t.length + 1;
    return r && (c.className = r + (l ? " " + r + h : "")), o && c.style.setProperty("--" + n, h + ""), s !== "none" && c.setAttribute("aria-hidden", "true"), i !== "span" && (c.style.position = "relative", c.style.display = a), c.textContent = u, t.push(c), c;
  };
  return l && (r = r.replace("++", "")), f.collection = t, f;
}, rd = (n, e, t, r) => {
  let i = eo("line", t, r), s = window.getComputedStyle(n).textAlign || "left";
  return (o, a) => {
    let l = i("");
    for (l.style.textAlign = s, n.insertBefore(l, e[o]); o < a; o++)
      l.appendChild(e[o]);
    l.normalize();
  };
}, Mf = (n, e, t, r, i, s, o, a, l, f) => {
  var u;
  let c = Array.from(n.childNodes), h = 0, { wordDelimiter: _, reduceWhiteSpace: m = !0, prepareText: d } = e, p = n.getBoundingClientRect(), y = p, b = !m && window.getComputedStyle(n).whiteSpace.substring(0, 3) === "pre", S = 0, C = t.collection, x, O, E, g, A, I, te, q, Y, F, P, z, k, w, M, T, B, N;
  for (typeof _ == "object" ? (E = _.delimiter || _, O = _.replaceWith || "") : O = _ === "" ? "" : _ || " ", x = O !== " "; h < c.length; h++)
    if (g = c[h], g.nodeType === 3) {
      for (M = g.textContent || "", m ? M = M.replace(ed, " ") : b && (M = M.replace(/\n/g, O + `
`)), d && (M = d(M, n)), g.textContent = M, A = O || E ? M.split(E || O) : M.match(a) || $s, B = A[A.length - 1], q = x ? B.slice(-1) === " " : !B, B || A.pop(), y = p, te = x ? A[0].charAt(0) === " " : !A[0], te && sn(" ", n, g), A[0] || A.shift(), ka(A, l), s && f || (g.textContent = ""), Y = 1; Y <= A.length; Y++)
        if (T = A[Y - 1], !m && b && T.charAt(0) === `
` && ((u = g.previousSibling) == null || u.remove(), sn(document.createElement("br"), n, g), T = T.slice(1)), !m && T === "")
          sn(O, n, g);
        else if (T === " ")
          n.insertBefore(document.createTextNode(" "), g);
        else {
          if (x && T.charAt(0) === " " && sn(" ", n, g), S && Y === 1 && !te && C.indexOf(S.parentNode) > -1 ? (I = C[C.length - 1], I.appendChild(document.createTextNode(r ? "" : T))) : (I = t(r ? "" : T), sn(I, n, g), S && Y === 1 && !te && I.insertBefore(S, I.firstChild)), r)
            for (P = ba ? ka([...ba.segment(T)].map((D) => D.segment), l) : T.match(a) || $s, N = 0; N < P.length; N++)
              I.appendChild(P[N] === " " ? document.createTextNode(" ") : r(P[N]));
          if (s && f) {
            if (M = g.textContent = M.substring(T.length + 1, M.length), F = I.getBoundingClientRect(), F.top > y.top && F.left <= y.left) {
              for (z = n.cloneNode(), k = n.childNodes[0]; k && k !== I; )
                w = k, k = k.nextSibling, z.appendChild(w);
              n.parentNode.insertBefore(z, n), i && Ta(z);
            }
            y = F;
          }
          (Y < A.length || q) && sn(Y >= A.length ? " " : x && T.slice(-1) === " " ? " " + O : O, n, g);
        }
      n.removeChild(g), S = 0;
    } else g.nodeType === 1 && (o && o.indexOf(g) > -1 ? (C.indexOf(g.previousSibling) > -1 && C[C.length - 1].appendChild(g), S = g) : (Mf(g, e, t, r, i, s, o, a, l, !0), S = 0), i && Ta(g));
};
const Of = class Rf {
  constructor(e, t) {
    this.isSplit = !1, Jh(), this.elements = ya(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach((o) => {
      var a;
      t.overwrite !== !1 && ((a = o[va]) == null || a._data.orig.filter(({ element: l }) => l === o).forEach(wa)), o[va] = this;
    }), this._split = () => this.isSplit && this.split(this.vars);
    let r = [], i, s = () => {
      let o = r.length, a;
      for (; o--; ) {
        a = r[o];
        let l = a.element.offsetWidth;
        if (l !== a.width) {
          a.width = l, this._split();
          return;
        }
      }
    };
    this._data = { orig: r, obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
      clearTimeout(i), i = setTimeout(s, 200);
    }) }, ws(this), this.split(t);
  }
  split(e) {
    return (this._ctx || $h).add(() => {
      this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
      let { type: t = "chars,words,lines", aria: r = "auto", deepSlice: i = !0, smartWrap: s, onSplit: o, autoSplit: a = !1, specialChars: l, mask: f } = this.vars, u = t.indexOf("lines") > -1, c = t.indexOf("chars") > -1, h = t.indexOf("words") > -1, _ = c && !h && !u, m = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l), d = m ? new RegExp(m.source + "|" + xa.source, "gu") : xa, p = !!e.ignore && ya(e.ignore), { orig: y, animTime: b, obs: S } = this._data, C;
      (c || h || u) && (this.elements.forEach((x, O) => {
        y[O] = {
          element: x,
          html: x.innerHTML,
          ariaL: x.getAttribute("aria-label"),
          ariaH: x.getAttribute("aria-hidden")
        }, r === "auto" ? x.setAttribute("aria-label", (x.textContent || "").trim()) : r === "hidden" && x.setAttribute("aria-hidden", "true");
        let E = [], g = [], A = [], I = c ? eo("char", e, E) : null, te = eo("word", e, g), q, Y, F, P;
        if (Mf(x, e, te, I, _, i && (u || _), p, d, m, !1), u) {
          let z = li(x.childNodes), k = rd(x, z, e, A), w, M = [], T = 0, B = z.map((L) => L.nodeType === 1 ? L.getBoundingClientRect() : Zi), N = Zi, D;
          for (q = 0; q < z.length; q++)
            w = z[q], w.nodeType === 1 && (w.nodeName === "BR" ? ((!q || z[q - 1].nodeName !== "BR") && (M.push(w), k(T, q + 1)), T = q + 1, N = td(B, q)) : (D = B[q], q && D.top > N.top && D.left < N.left + N.width - 1 && (k(T, q), T = q), N = D));
          T < q && k(T, q), M.forEach((L) => {
            var R;
            return (R = L.parentNode) == null ? void 0 : R.removeChild(L);
          });
        }
        if (!h) {
          for (q = 0; q < g.length; q++)
            if (Y = g[q], c || !Y.nextSibling || Y.nextSibling.nodeType !== 3)
              if (s && !u) {
                for (F = document.createElement("span"), F.style.whiteSpace = "nowrap"; Y.firstChild; )
                  F.appendChild(Y.firstChild);
                Y.replaceWith(F);
              } else
                Y.replaceWith(...Y.childNodes);
            else
              P = Y.nextSibling, P && P.nodeType === 3 && (P.textContent = (Y.textContent || "") + (P.textContent || ""), Y.remove());
          g.length = 0, x.normalize();
        }
        this.lines.push(...A), this.words.push(...g), this.chars.push(...E);
      }), f && this[f] && this.masks.push(...this[f].map((x) => {
        let O = x.cloneNode();
        return x.replaceWith(O), O.appendChild(x), x.className && (O.className = x.className.trim().split(" ").map((E) => E + "-mask").join(" ")), O.style.overflow = "clip", O;
      }))), this.isSplit = !0, Fn && u && a && Fn.addEventListener("loadingdone", this._split), (C = o && o(this)) && C.totalTime && (this._data.anim = b ? C.totalTime(b) : C), u && a && this.elements.forEach((x, O) => {
        y[O].width = x.offsetWidth, S && S.observe(x);
      });
    }), this;
  }
  kill() {
    let { obs: e } = this._data;
    e && e.disconnect(), Fn?.removeEventListener("loadingdone", this._split);
  }
  revert() {
    var e, t;
    if (this.isSplit) {
      let { orig: r, anim: i } = this._data;
      this.kill(), r.forEach(wa), this.chars.length = this.words.length = this.lines.length = r.length = this.masks.length = 0, this.isSplit = !1, i && (this._data.animTime = i.totalTime(), i.revert()), (t = (e = this.vars).onRevert) == null || t.call(e, this);
    }
    return this;
  }
  static create(e, t) {
    return new Rf(e, t);
  }
  static register(e) {
    In = In || e || window.gsap, In && (li = In.utils.toArray, ws = In.core.context || ws), !Js && window.innerWidth > 0 && (Fn = document.fonts, Js = !0);
  }
};
Of.version = "3.15.0";
let to = Of;
var qn = { exports: {} }, nd = qn.exports, Sa;
function id() {
  return Sa || (Sa = 1, (function(n, e) {
    (function(t, r) {
      r(e);
    })(nd, (function(t) {
      var r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, i = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, s = Math.PI / 180, o = Math.sin, a = Math.cos, l = Math.abs, f = Math.sqrt, u = function(P) {
        return typeof P == "number";
      }, c = 1e5, h = function(P) {
        return Math.round(P * c) / c || 0;
      }, _ = function(P) {
        return P.closed = Math.abs(P[0] - P[P.length - 2]) < 1e-3 && Math.abs(P[1] - P[P.length - 1]) < 1e-3;
      };
      function m(F, P, z, k, w, M, T) {
        for (var B = F.length, N, D, L, R, G; --B > -1; )
          for (N = F[B], D = N.length, L = 0; L < D; L += 2)
            R = N[L], G = N[L + 1], N[L] = R * P + G * k + M, N[L + 1] = R * z + G * w + T;
        return F._dirty = 1, F;
      }
      function d(F, P, z, k, w, M, T, B, N) {
        if (!(F === B && P === N)) {
          z = l(z), k = l(k);
          var D = w % 360 * s, L = a(D), R = o(D), G = Math.PI, K = G * 2, j = (F - B) / 2, V = (P - N) / 2, $ = L * j + R * V, H = -R * j + L * V, X = $ * $, J = H * H, pe = X / (z * z) + J / (k * k);
          pe > 1 && (z = f(pe) * z, k = f(pe) * k);
          var ue = z * z, ye = k * k, Me = (ue * ye - ue * J - ye * X) / (ue * J + ye * X);
          Me < 0 && (Me = 0);
          var xt = (M === T ? -1 : 1) * f(Me), ut = xt * (z * H / k), Ve = xt * -(k * $ / z), kr = (F + B) / 2, tr = (P + N) / 2, Rn = kr + (L * ut - R * Ve), Hf = tr + (R * ut + L * Ve), Vt = ($ - ut) / z, Wt = (H - Ve) / k, vi = (-$ - ut) / z, bi = (-H - Ve) / k, No = Vt * Vt + Wt * Wt, Io = (Wt < 0 ? -1 : 1) * Math.acos(Vt / f(No)), Gt = (Vt * bi - Wt * vi < 0 ? -1 : 1) * Math.acos((Vt * vi + Wt * bi) / f(No * (vi * vi + bi * bi)));
          isNaN(Gt) && (Gt = G), !T && Gt > 0 ? Gt -= K : T && Gt < 0 && (Gt += K), Io %= K, Gt %= K;
          var Fo = Math.ceil(l(Gt) / (K / 4)), jt = [], yi = Gt / Fo, xi = 4 / 3 * o(yi / 2) / (1 + a(yi / 2)), Kf = L * z, Qf = R * z, Zf = R * -k, Jf = L * k, Qe;
          for (Qe = 0; Qe < Fo; Qe++)
            w = Io + Qe * yi, $ = a(w), H = o(w), Vt = a(w += yi), Wt = o(w), jt.push($ - xi * H, H + xi * $, Vt + xi * Wt, Wt - xi * Vt, Vt, Wt);
          for (Qe = 0; Qe < jt.length; Qe += 2)
            $ = jt[Qe], H = jt[Qe + 1], jt[Qe] = $ * Kf + H * Zf + Rn, jt[Qe + 1] = $ * Qf + H * Jf + Hf;
          return jt[Qe - 2] = B, jt[Qe - 1] = N, jt;
        }
      }
      function p(F) {
        var P = (F + "").replace(i, function(ut) {
          var Ve = +ut;
          return Ve < 1e-4 && Ve > -1e-4 ? 0 : Ve;
        }).match(r) || [], z = [], k = 0, w = 0, M = 2 / 3, T = P.length, B = 0, N = "ERROR: malformed path: " + F, D, L, R, G, K, j, V, $, H, X, J, pe, ue, ye, Me, xt = function(Ve, kr, tr, Rn) {
          X = (tr - Ve) / 3, J = (Rn - kr) / 3, V.push(Ve + X, kr + J, tr - X, Rn - J, tr, Rn);
        };
        if (!F || !isNaN(P[0]) || isNaN(P[1]))
          return console.log(N), z;
        for (D = 0; D < T; D++)
          if (ue = K, isNaN(P[D]) ? (K = P[D].toUpperCase(), j = K !== P[D]) : D--, R = +P[D + 1], G = +P[D + 2], j && (R += k, G += w), D || ($ = R, H = G), K === "M")
            V && (V.length < 8 ? z.length -= 1 : B += V.length, _(V)), k = $ = R, w = H = G, V = [R, G], z.push(V), D += 2, K = "L";
          else if (K === "C")
            V || (V = [0, 0]), j || (k = w = 0), V.push(R, G, k + P[D + 3] * 1, w + P[D + 4] * 1, k += P[D + 5] * 1, w += P[D + 6] * 1), D += 6;
          else if (K === "S")
            X = k, J = w, (ue === "C" || ue === "S") && (X += k - V[V.length - 4], J += w - V[V.length - 3]), j || (k = w = 0), V.push(X, J, R, G, k += P[D + 3] * 1, w += P[D + 4] * 1), D += 4;
          else if (K === "Q")
            X = k + (R - k) * M, J = w + (G - w) * M, j || (k = w = 0), k += P[D + 3] * 1, w += P[D + 4] * 1, V.push(X, J, k + (R - k) * M, w + (G - w) * M, k, w), D += 4;
          else if (K === "T")
            X = k - V[V.length - 4], J = w - V[V.length - 3], V.push(k + X, w + J, R + (k + X * 1.5 - R) * M, G + (w + J * 1.5 - G) * M, k = R, w = G), D += 2;
          else if (K === "H")
            xt(k, w, k = R, w), D += 1;
          else if (K === "V")
            xt(k, w, k, w = R + (j ? w - k : 0)), D += 1;
          else if (K === "L" || K === "Z")
            K === "Z" && (R = $, G = H, V.closed = !0), (K === "L" || l(k - R) > 0.5 || l(w - G) > 0.5) && (xt(k, w, R, G), K === "L" && (D += 2)), k = R, w = G;
          else if (K === "A") {
            if (ye = P[D + 4], Me = P[D + 5], X = P[D + 6], J = P[D + 7], L = 7, ye.length > 1 && (ye.length < 3 ? (J = X, X = Me, L--) : (J = Me, X = ye.substr(2), L -= 2), Me = ye.charAt(1), ye = ye.charAt(0)), pe = d(k, w, +P[D + 1], +P[D + 2], +P[D + 3], +ye, +Me, (j ? k : 0) + X * 1, (j ? w : 0) + J * 1), D += L, pe)
              for (L = 0; L < pe.length; L++)
                V.push(pe[L]);
            k = V[V.length - 2], w = V[V.length - 1];
          } else
            console.log(N);
        return D = V.length, D < 6 ? (z.pop(), D = 0) : _(V), z.totalPoints = B + D, z;
      }
      function y(F) {
        u(F[0]) && (F = [F]);
        var P = "", z = F.length, k, w, M, T;
        for (w = 0; w < z; w++) {
          for (T = F[w], P += "M" + h(T[0]) + "," + h(T[1]) + " C", k = T.length, M = 2; M < k; M++)
            P += h(T[M++]) + "," + h(T[M++]) + " " + h(T[M++]) + "," + h(T[M++]) + " " + h(T[M++]) + "," + h(T[M]) + " ";
          T.closed && (P += "z");
        }
        return P;
      }
      /*!
       * CustomEase 3.15.0
       * https://gsap.com
       *
       * @license Copyright 2008-2026, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license
       * @author: Jack Doyle, jack@greensock.com
      */
      var b, S, C = function() {
        return b || typeof window < "u" && (b = window.gsap) && b.registerPlugin && b;
      }, x = function() {
        b = C(), b ? (b.registerEase("_CE", Y.create), S = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
      }, O = 1e20, E = function(P) {
        return ~~(P * 1e3 + (P < 0 ? -0.5 : 0.5)) / 1e3;
      }, g = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi, A = /[cLlsSaAhHvVtTqQ]/g, I = function(P) {
        var z = P.length, k = O, w;
        for (w = 1; w < z; w += 6)
          +P[w] < k && (k = +P[w]);
        return k;
      }, te = function(P, z, k) {
        !k && k !== 0 && (k = Math.max(+P[P.length - 1], +P[1]));
        var w = +P[0] * -1, M = -k, T = P.length, B = 1 / (+P[T - 2] + w), N = -z || (Math.abs(+P[T - 1] - +P[1]) < 0.01 * (+P[T - 2] - +P[0]) ? I(P) + M : +P[T - 1] + M), D;
        for (N ? N = 1 / N : N = -B, D = 0; D < T; D += 2)
          P[D] = (+P[D] + w) * B, P[D + 1] = (+P[D + 1] + M) * N;
      }, q = function F(P, z, k, w, M, T, B, N, D, L, R) {
        var G = (P + k) / 2, K = (z + w) / 2, j = (k + M) / 2, V = (w + T) / 2, $ = (M + B) / 2, H = (T + N) / 2, X = (G + j) / 2, J = (K + V) / 2, pe = (j + $) / 2, ue = (V + H) / 2, ye = (X + pe) / 2, Me = (J + ue) / 2, xt = B - P, ut = N - z, Ve = Math.abs((k - B) * ut - (w - N) * xt), kr = Math.abs((M - B) * ut - (T - N) * xt), tr;
        return L || (L = [{
          x: P,
          y: z
        }, {
          x: B,
          y: N
        }], R = 1), L.splice(R || L.length - 1, 0, {
          x: ye,
          y: Me
        }), (Ve + kr) * (Ve + kr) > D * (xt * xt + ut * ut) && (tr = L.length, F(P, z, G, K, X, J, ye, Me, D, L, R), F(ye, Me, pe, ue, $, H, B, N, D, L, R + 1 + (L.length - tr))), L;
      }, Y = (function() {
        function F(z, k, w) {
          S || x(), this.id = z, this.setData(k, w);
        }
        var P = F.prototype;
        return P.setData = function(k, w) {
          w = w || {}, k = k || "0,0,1,1";
          var M = k.match(g), T = 1, B = [], N = [], D = w.precision || 1, L = D <= 1, R, G, K, j, V, $, H, X, J;
          if (this.data = k, (A.test(k) || ~k.indexOf("M") && k.indexOf("C") < 0) && (M = p(k)[0]), R = M.length, R === 4)
            M.unshift(0, 0), M.push(1, 1), R = 8;
          else if ((R - 2) % 6)
            throw "Invalid CustomEase";
          for ((+M[0] != 0 || +M[R - 2] != 1) && te(M, w.height, w.originY), this.segment = M, j = 2; j < R; j += 6)
            G = {
              x: +M[j - 2],
              y: +M[j - 1]
            }, K = {
              x: +M[j + 4],
              y: +M[j + 5]
            }, B.push(G, K), q(G.x, G.y, +M[j], +M[j + 1], +M[j + 2], +M[j + 3], K.x, K.y, 1 / (D * 2e5), B, B.length - 1);
          for (R = B.length, j = 0; j < R; j++)
            H = B[j], X = B[j - 1] || H, (H.x > X.x || X.y !== H.y && X.x === H.x || H === X) && H.x <= 1 ? (X.cx = H.x - X.x, X.cy = H.y - X.y, X.n = H, X.nx = H.x, L && j > 1 && Math.abs(X.cy / X.cx - B[j - 2].cy / B[j - 2].cx) > 2 && (L = 0), X.cx < T && (X.cx ? T = X.cx : (X.cx = 1e-3, j === R - 1 && (X.x -= 1e-3, T = Math.min(T, 1e-3), L = 0)))) : (B.splice(j--, 1), R--);
          if (R = 1 / T + 1 | 0, V = 1 / R, $ = 0, H = B[0], L) {
            for (j = 0; j < R; j++)
              J = j * V, H.nx < J && (H = B[++$]), G = H.y + (J - H.x) / H.cx * H.cy, N[j] = {
                x: J,
                cx: V,
                y: G,
                cy: 0,
                nx: 9
              }, j && (N[j - 1].cy = G - N[j - 1].y);
            $ = B[B.length - 1], N[R - 1].cy = $.y - G, N[R - 1].cx = $.x - N[N.length - 1].x;
          } else {
            for (j = 0; j < R; j++)
              H.nx < j * V && (H = B[++$]), N[j] = H;
            $ < B.length - 1 && (N[j - 1] = B[B.length - 2]);
          }
          return this.ease = function(pe) {
            var ue = N[pe * R | 0] || N[R - 1];
            return ue.nx < pe && (ue = ue.n), ue.y + (pe - ue.x) / ue.cx * ue.cy;
          }, this.ease.custom = this, this.id && b && b.registerEase(this.id, this.ease), this;
        }, P.getSVGData = function(k) {
          return F.getSVGData(this, k);
        }, F.create = function(k, w, M) {
          return new F(k, w, M).ease;
        }, F.register = function(k) {
          b = k, x();
        }, F.get = function(k) {
          return b.parseEase(k);
        }, F.getSVGData = function(k, w) {
          w = w || {};
          var M = w.width || 100, T = w.height || 100, B = w.x || 0, N = (w.y || 0) + T, D = b.utils.toArray(w.path)[0], L, R, G, K, j, V, $, H, X, J;
          if (w.invert && (T = -T, N = 0), typeof k == "string" && (k = b.parseEase(k)), k.custom && (k = k.custom), k instanceof F)
            L = y(m([k.segment.slice(0)], M, 0, 0, -T, B, N));
          else {
            for (L = [B, N], $ = Math.max(5, (w.precision || 1) * 200), K = 1 / $, $ += 2, H = 5 / $, X = E(B + K * M), J = E(N + k(K) * -T), R = (J - N) / (X - B), G = 2; G < $; G++)
              j = E(B + G * K * M), V = E(N + k(G * K) * -T), (Math.abs((V - J) / (j - X) - R) > H || G === $ - 1) && (L.push(X, J), R = (V - J) / (j - X)), X = j, J = V;
            L = "M" + L.join(",");
          }
          return D && D.setAttribute("d", L), L;
        }, F;
      })();
      Y.version = "3.15.0", Y.headless = !0, C() && b.registerPlugin(Y), t.CustomEase = Y, t.default = Y, Object.defineProperty(t, "__esModule", { value: !0 });
    }));
  })(qn, qn.exports)), qn.exports;
}
var Ca = /* @__PURE__ */ id();
const Ea = /* @__PURE__ */ new Set(), Aa = "motion-core-ease", sd = "0.625, 0.05, 0, 1";
let Pa = !1;
function zf(...n) {
  const e = n.filter((t) => !Ea.has(t));
  e.length && (sr.registerPlugin(...e), e.forEach((t) => {
    Ea.add(t);
  }));
}
function od() {
  return zf(Ca.CustomEase), Pa || (Ca.CustomEase.create(Aa, sd), Pa = !0), Aa;
}
const ad = (n, e) => {
  const t = new Array(n.length + e.length);
  for (let r = 0; r < n.length; r++)
    t[r] = n[r];
  for (let r = 0; r < e.length; r++)
    t[n.length + r] = e[r];
  return t;
}, ld = (n, e) => ({
  classGroupId: n,
  validator: e
}), Df = (n = /* @__PURE__ */ new Map(), e = null, t) => ({
  nextPart: n,
  validators: e,
  classGroupId: t
}), Ji = "-", Ma = [], fd = "arbitrary..", ud = (n) => {
  const e = hd(n), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = n;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return cd(o);
      const a = o.split(Ji), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return Nf(a, l, e);
    },
    getConflictingClassGroupIds: (o, a) => {
      if (a) {
        const l = r[o], f = t[o];
        return l ? f ? ad(f, l) : l : f || Ma;
      }
      return t[o] || Ma;
    }
  };
}, Nf = (n, e, t) => {
  if (n.length - e === 0)
    return t.classGroupId;
  const i = n[e], s = t.nextPart.get(i);
  if (s) {
    const f = Nf(n, e + 1, s);
    if (f) return f;
  }
  const o = t.validators;
  if (o === null)
    return;
  const a = e === 0 ? n.join(Ji) : n.slice(e).join(Ji), l = o.length;
  for (let f = 0; f < l; f++) {
    const u = o[f];
    if (u.validator(a))
      return u.classGroupId;
  }
}, cd = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = n.slice(1, -1), t = e.indexOf(":"), r = e.slice(0, t);
  return r ? fd + r : void 0;
})(), hd = (n) => {
  const {
    theme: e,
    classGroups: t
  } = n;
  return dd(t, e);
}, dd = (n, e) => {
  const t = Df();
  for (const r in n) {
    const i = n[r];
    zo(i, t, r, e);
  }
  return t;
}, zo = (n, e, t, r) => {
  const i = n.length;
  for (let s = 0; s < i; s++) {
    const o = n[s];
    _d(o, e, t, r);
  }
}, _d = (n, e, t, r) => {
  if (typeof n == "string") {
    pd(n, e, t);
    return;
  }
  if (typeof n == "function") {
    md(n, e, t, r);
    return;
  }
  gd(n, e, t, r);
}, pd = (n, e, t) => {
  const r = n === "" ? e : If(e, n);
  r.classGroupId = t;
}, md = (n, e, t, r) => {
  if (vd(n)) {
    zo(n(r), e, t, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(ld(t, n));
}, gd = (n, e, t, r) => {
  const i = Object.entries(n), s = i.length;
  for (let o = 0; o < s; o++) {
    const [a, l] = i[o];
    zo(l, If(e, a), t, r);
  }
}, If = (n, e) => {
  let t = n;
  const r = e.split(Ji), i = r.length;
  for (let s = 0; s < i; s++) {
    const o = r[s];
    let a = t.nextPart.get(o);
    a || (a = Df(), t.nextPart.set(o, a)), t = a;
  }
  return t;
}, vd = (n) => "isThemeGetter" in n && n.isThemeGetter === !0, bd = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const i = (s, o) => {
    t[s] = o, e++, e > n && (e = 0, r = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let o = t[s];
      if (o !== void 0)
        return o;
      if ((o = r[s]) !== void 0)
        return i(s, o), o;
    },
    set(s, o) {
      s in t ? t[s] = o : i(s, o);
    }
  };
}, ro = "!", Oa = ":", yd = [], Ra = (n, e, t, r, i) => ({
  modifiers: n,
  hasImportantModifier: e,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: i
}), xd = (n) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = n;
  let r = (i) => {
    const s = [];
    let o = 0, a = 0, l = 0, f;
    const u = i.length;
    for (let d = 0; d < u; d++) {
      const p = i[d];
      if (o === 0 && a === 0) {
        if (p === Oa) {
          s.push(i.slice(l, d)), l = d + 1;
          continue;
        }
        if (p === "/") {
          f = d;
          continue;
        }
      }
      p === "[" ? o++ : p === "]" ? o-- : p === "(" ? a++ : p === ")" && a--;
    }
    const c = s.length === 0 ? i : i.slice(l);
    let h = c, _ = !1;
    c.endsWith(ro) ? (h = c.slice(0, -1), _ = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      c.startsWith(ro) && (h = c.slice(1), _ = !0)
    );
    const m = f && f > l ? f - l : void 0;
    return Ra(s, _, h, m);
  };
  if (e) {
    const i = e + Oa, s = r;
    r = (o) => o.startsWith(i) ? s(o.slice(i.length)) : Ra(yd, !1, o, void 0, !0);
  }
  if (t) {
    const i = r;
    r = (s) => t({
      className: s,
      parseClassName: i
    });
  }
  return r;
}, wd = (n) => {
  const e = /* @__PURE__ */ new Map();
  return n.orderSensitiveModifiers.forEach((t, r) => {
    e.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], a = o[0] === "[", l = e.has(o);
      a || l ? (i.length > 0 && (i.sort(), r.push(...i), i = []), r.push(o)) : i.push(o);
    }
    return i.length > 0 && (i.sort(), r.push(...i)), r;
  };
}, kd = (n) => ({
  cache: bd(n.cacheSize),
  parseClassName: xd(n),
  sortModifiers: wd(n),
  postfixLookupClassGroupIds: Td(n),
  ...ud(n)
}), Td = (n) => {
  const e = /* @__PURE__ */ Object.create(null), t = n.postfixLookupClassGroups;
  if (t)
    for (let r = 0; r < t.length; r++)
      e[t[r]] = !0;
  return e;
}, Sd = /\s+/, Cd = (n, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: i,
    sortModifiers: s,
    postfixLookupClassGroupIds: o
  } = e, a = [], l = n.trim().split(Sd);
  let f = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const c = l[u], {
      isExternal: h,
      modifiers: _,
      hasImportantModifier: m,
      baseClassName: d,
      maybePostfixModifierPosition: p
    } = t(c);
    if (h) {
      f = c + (f.length > 0 ? " " + f : f);
      continue;
    }
    let y = !!p, b;
    if (y) {
      const E = d.substring(0, p);
      b = r(E);
      const g = b && o[b] ? r(d) : void 0;
      g && g !== b && (b = g, y = !1);
    } else
      b = r(d);
    if (!b) {
      if (!y) {
        f = c + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (b = r(d), !b) {
        f = c + (f.length > 0 ? " " + f : f);
        continue;
      }
      y = !1;
    }
    const S = _.length === 0 ? "" : _.length === 1 ? _[0] : s(_).join(":"), C = m ? S + ro : S, x = C + b;
    if (a.indexOf(x) > -1)
      continue;
    a.push(x);
    const O = i(b, y);
    for (let E = 0; E < O.length; ++E) {
      const g = O[E];
      a.push(C + g);
    }
    f = c + (f.length > 0 ? " " + f : f);
  }
  return f;
}, Ed = (...n) => {
  let e = 0, t, r, i = "";
  for (; e < n.length; )
    (t = n[e++]) && (r = Ff(t)) && (i && (i += " "), i += r);
  return i;
}, Ff = (n) => {
  if (typeof n == "string")
    return n;
  let e, t = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (e = Ff(n[r])) && (t && (t += " "), t += e);
  return t;
}, Ad = (n, ...e) => {
  let t, r, i, s;
  const o = (l) => {
    const f = e.reduce((u, c) => c(u), n());
    return t = kd(f), r = t.cache.get, i = t.cache.set, s = a, a(l);
  }, a = (l) => {
    const f = r(l);
    if (f)
      return f;
    const u = Cd(l, t);
    return i(l, u), u;
  };
  return s = o, (...l) => s(Ed(...l));
}, Pd = [], ke = (n) => {
  const e = (t) => t[n] || Pd;
  return e.isThemeGetter = !0, e;
}, Lf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Bf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Md = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Od = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, zd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Dd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Nd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, nr = (n) => Md.test(n), ee = (n) => !!n && !Number.isNaN(Number(n)), At = (n) => !!n && Number.isInteger(Number(n)), ks = (n) => n.endsWith("%") && ee(n.slice(0, -1)), qt = (n) => Od.test(n), Vf = () => !0, Id = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Rd.test(n) && !zd.test(n)
), Do = () => !1, Fd = (n) => Dd.test(n), Ld = (n) => Nd.test(n), Bd = (n) => !W(n) && !U(n), Vd = (n) => n.startsWith("@container") && (n[10] === "/" && n[11] !== void 0 || n[11] === "s" && n[16] !== void 0 && n.startsWith("-size/", 10) || n[11] === "n" && n[18] !== void 0 && n.startsWith("-normal/", 10)), Wd = (n) => wr(n, jf, Do), W = (n) => Lf.test(n), Ar = (n) => wr(n, Uf, Id), za = (n) => wr(n, Kd, ee), Gd = (n) => wr(n, Yf, Vf), jd = (n) => wr(n, qf, Do), Da = (n) => wr(n, Wf, Do), Ud = (n) => wr(n, Gf, Ld), Ai = (n) => wr(n, Xf, Fd), U = (n) => Bf.test(n), Ln = (n) => tn(n, Uf), qd = (n) => tn(n, qf), Na = (n) => tn(n, Wf), Yd = (n) => tn(n, jf), Xd = (n) => tn(n, Gf), Pi = (n) => tn(n, Xf, !0), Hd = (n) => tn(n, Yf, !0), wr = (n, e, t) => {
  const r = Lf.exec(n);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, tn = (n, e, t = !1) => {
  const r = Bf.exec(n);
  return r ? r[1] ? e(r[1]) : t : !1;
}, Wf = (n) => n === "position" || n === "percentage", Gf = (n) => n === "image" || n === "url", jf = (n) => n === "length" || n === "size" || n === "bg-size", Uf = (n) => n === "length", Kd = (n) => n === "number", qf = (n) => n === "family-name", Yf = (n) => n === "number" || n === "weight", Xf = (n) => n === "shadow", Qd = () => {
  const n = ke("color"), e = ke("font"), t = ke("text"), r = ke("font-weight"), i = ke("tracking"), s = ke("leading"), o = ke("breakpoint"), a = ke("container"), l = ke("spacing"), f = ke("radius"), u = ke("shadow"), c = ke("inset-shadow"), h = ke("text-shadow"), _ = ke("drop-shadow"), m = ke("blur"), d = ke("perspective"), p = ke("aspect"), y = ke("ease"), b = ke("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], x = () => [...C(), U, W], O = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], g = () => [U, W, l], A = () => [nr, "full", "auto", ...g()], I = () => [At, "none", "subgrid", U, W], te = () => ["auto", {
    span: ["full", At, U, W]
  }, At, U, W], q = () => [At, "auto", U, W], Y = () => ["auto", "min", "max", "fr", U, W], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], z = () => ["auto", ...g()], k = () => [nr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...g()], w = () => [nr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...g()], M = () => [nr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...g()], T = () => [n, U, W], B = () => [...C(), Na, Da, {
    position: [U, W]
  }], N = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], D = () => ["auto", "cover", "contain", Yd, Wd, {
    size: [U, W]
  }], L = () => [ks, Ln, Ar], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    U,
    W
  ], G = () => ["", ee, Ln, Ar], K = () => ["solid", "dashed", "dotted", "double"], j = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => [ee, ks, Na, Da], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    U,
    W
  ], H = () => ["none", ee, U, W], X = () => ["none", ee, U, W], J = () => [ee, U, W], pe = () => [nr, "full", ...g()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [qt],
      breakpoint: [qt],
      color: [Vf],
      container: [qt],
      "drop-shadow": [qt],
      ease: ["in", "out", "in-out"],
      font: [Bd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [qt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [qt],
      shadow: [qt],
      spacing: ["px", ee],
      text: [qt],
      "text-shadow": [qt],
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
        aspect: ["auto", "square", nr, W, U, p]
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
        "@container": ["", "normal", "size", U, W]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [Vd],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ee, W, U, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
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
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        inset: A()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": A(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: A()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": A(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: A()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": A()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
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
        z: [At, "auto", U, W]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [nr, "full", "auto", a, ...g()]
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
        flex: [ee, nr, "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ee, U, W]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ee, U, W]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [At, "first", "last", "none", U, W]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: te()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: te()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": q()
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
        "auto-cols": Y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: g()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": g()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": g()
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
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
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
        items: [...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), {
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
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: g()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: g()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: g()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: g()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: g()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: g()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: g()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: g()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: g()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: g()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: g()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: z()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: z()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: z()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: z()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: z()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: z()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: z()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": g()
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
        "space-y": g()
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
        size: k()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...w()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...w()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...w()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...M()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...M()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...M()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...k()]
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
          ...k()
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
            screen: [o]
          },
          ...k()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...k()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...k()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...k()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Ln, Ar]
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
        font: [r, Hd, Gd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ks, W]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qd, jd, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [W]
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
        tracking: [i, U, W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ee, "none", U, za]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...g()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U, W]
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
        list: ["disc", "decimal", "none", U, W]
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
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ee, "from-font", "auto", U, Ar]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ee, "auto", U, W]
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
        indent: g()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [At, U, W]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U, W]
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
        content: ["none", U, W]
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
        bg: B()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: N()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: D()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, At, U, W],
          radial: ["", U, W],
          conic: [At, U, W]
        }, Xd, Ud]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: L()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: R()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": R()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": R()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": R()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": R()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": R()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": R()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": R()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": R()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": R()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": R()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": R()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": R()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": R()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": R()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: G()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": G()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
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
        "divide-y": G()
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
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": T()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ee, U, W]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ee, Ln, Ar]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
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
          u,
          Pi,
          Ai
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", c, Pi, Ai]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: G()
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
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ee, Ar]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": G()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Pi, Ai]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ee, U, W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...j(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": j()
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
        "mask-linear": [ee]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": V()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": V()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": V()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": V()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": V()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": V()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": V()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [U, W]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": V()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ee]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": V()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
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
        mask: B()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: N()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: D()
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
        mask: ["none", U, W]
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
          U,
          W
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ee, U, W]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ee, U, W]
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
          _,
          Pi,
          Ai
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ee, U, W]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ee, U, W]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ee, U, W]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ee, U, W]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ee, U, W]
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
          U,
          W
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ee, U, W]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ee, U, W]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ee, U, W]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ee, U, W]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ee, U, W]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ee, U, W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ee, U, W]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ee, U, W]
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
        "border-spacing": g()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": g()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": g()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", U, W]
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
        duration: [ee, "initial", U, W]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, U, W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ee, U, W]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, U, W]
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
        perspective: [d, U, W]
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
        rotate: H()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": H()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": H()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": H()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: X()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": X()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": X()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": X()
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
        skew: J()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": J()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": J()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [U, W, "", "none", "gpu", "cpu"]
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
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
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
        zoom: [At, U, W]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: T()
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
        caret: T()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U, W]
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
        "scrollbar-thumb": T()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": T()
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
        "scroll-m": g()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": g()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": g()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
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
        "will-change": ["auto", "scroll", "contents", "transform", U, W]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ee, Ln, Ar, za]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
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
}, Zd = /* @__PURE__ */ Ad(Qd);
function Ee(...n) {
  return Zd(Rl(n));
}
function Ia(n, e = "body") {
  let t;
  async function r(s) {
    if (e = s, typeof e == "string")
      t = document.querySelector(e), t === null && (await cc(), t = document.querySelector(e)), t === null && (console.warn(`Portal target "${e}" not found. Appending to body.`), t = document.body);
    else if (e instanceof HTMLElement)
      t = e;
    else
      throw new Error(
        `Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`
      );
    t.appendChild(n);
  }
  function i() {
    n.parentNode && n.parentNode.removeChild(n);
  }
  return r(e), {
    update: r,
    destroy: i
  };
}
var Jd = /* @__PURE__ */ $r('<div data-slot="logo"><!></div>'), $d = /* @__PURE__ */ $r('<a data-slot="secondary-button"> </a>'), e_ = /* @__PURE__ */ $r('<a data-slot="primary-button"> </a>'), t_ = /* @__PURE__ */ $r('<hr data-slot="divider"/>'), r_ = /* @__PURE__ */ $r('<a data-slot="link"><span class="relative z-10 block leading-tight"><span data-slot="link-text"> </span></span> <span data-slot="link-underline"></span></a> <!>', 1), n_ = /* @__PURE__ */ $r('<div data-slot="group"><h3 data-slot="group-title"> </h3> <div class="mt-4 flex flex-col gap-4"></div></div>'), i_ = /* @__PURE__ */ $r('<div data-slot="overlay" role="button" tabindex="-1" aria-label="Close menu"></div> <div data-slot="root"><div data-slot="header"><button data-slot="toggle-button" aria-label="Toggle menu"><div class="relative flex h-10 w-10 items-center justify-center"><span data-slot="toggle-line" style="transform: translateY(4px)"></span> <span data-slot="toggle-line" style="transform: translateY(-4px)"></span></div> <span class="ml-1 text-sm font-medium text-foreground transition-[color] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:text-accent">Menu</span></button> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu" style="backface-visibility: hidden;"><!></div> <div data-slot="actions"><!> <!></div></div> <div data-slot="menu-wrapper"><div data-slot="grid"></div></div></div>', 1);
function s_(n, e) {
  Ya(e, !0);
  let t = Mc(e, "portalTarget", 3, "body"), r = /* @__PURE__ */ Yt(!1), i = null, s, o, a, l, f;
  const u = (w) => {
    s = w;
  }, c = (w) => {
    o = w;
  }, h = (w) => {
    a = w;
  }, _ = (w) => {
    l = w;
  }, m = (w) => {
    f = w;
  };
  function d() {
    i && (ir(r, !me(r)), me(r) ? i.play() : i.reverse());
  }
  Oc(() => {
    zf(to), od();
  }), pl(() => {
    if (!e.menuGroups.length) return;
    let w = !1, M = [], T = null;
    return (async () => {
      if (await document.fonts.ready, w) return;
      const N = window.innerWidth, D = N < 768, L = N >= 768 && N < 1024;
      let R = "75%", G = "50%";
      D ? (R = "100%", G = "95%") : L && (R = "85%", G = "70%"), T?.revert(), T = sr.context(
        () => {
          sr.set(f, { autoAlpha: 0 }), sr.set(s, { maxWidth: G }), sr.set(o, { height: 0, autoAlpha: 0 }), M = sr.utils.toArray('[data-slot="link-text"]', o).map((V) => to.create(V, { type: "lines", mask: "lines" }));
          const j = M.flatMap((V) => V.lines);
          i = sr.timeline({
            paused: !0,
            defaults: { ease: "motion-core-ease", duration: 0.5 }
          }), i.to(
            s,
            {
              maxWidth: R,
              ...D ? {
                top: 0,
                paddingTop: "0.5rem",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              } : {}
            },
            0
          ).to(f, { autoAlpha: 1 }, 0).to(o, { height: "auto", autoAlpha: 1 }, 0.2).to([a, l], { y: 0, duration: 0.4 }, 0.2).to(a, { rotation: 45, duration: 0.4 }, 0.2).to(l, { rotation: -45, duration: 0.4 }, 0.2), j.length && i.from(j, { yPercent: 100, autoAlpha: 0, stagger: 0.02 }, 0.3);
        },
        s
      ), os(() => me(r)) && i?.progress(1);
    })(), () => {
      w = !0, T?.revert(), T = null, i = null, M.forEach((N) => N.revert());
    };
  });
  var p = i_(), y = Uo(p);
  Jo(y, (w, M) => Ia?.(w, M), t), Dn(y, () => m);
  var b = Ut(y, 2), S = Ie(b), C = Ie(S), x = Ie(C), O = Ie(x);
  Dn(O, () => h);
  var E = Ut(O, 2);
  Dn(E, () => _);
  var g = Ut(C, 2), A = Ie(g);
  {
    var I = (w) => {
      var M = Jd(), T = Ie(M);
      Tc(T, () => e.logo), Tr((B) => Ce(M, 1, B), [
        () => Se(Ee("flex items-center gap-3", e.classes?.logo))
      ]), Sr(w, M);
    };
    Si(A, (w) => {
      e.logo && w(I);
    });
  }
  var te = Ut(g, 2), q = Ie(te);
  {
    var Y = (w) => {
      var M = $d(), T = Ie(M);
      Tr(
        (B) => {
          Ci(M, "href", e.secondaryButton.href), Ce(M, 1, B), ki(T, e.secondaryButton.label);
        },
        [
          () => Se(Ee("hidden h-10 items-center justify-center rounded-sm px-4 text-sm font-medium text-foreground transition-[background-color,color] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] hover:bg-background-muted hover:text-foreground md:flex", e.classes?.secondaryButton))
        ]
      ), Sr(w, M);
    };
    Si(q, (w) => {
      e.secondaryButton && w(Y);
    });
  }
  var F = Ut(q, 2);
  {
    var P = (w) => {
      var M = e_(), T = Ie(M);
      Tr(
        (B) => {
          Ci(M, "href", e.primaryButton.href), Ce(M, 1, B), ki(T, e.primaryButton.label);
        },
        [
          () => Se(Ee("flex h-10 items-center justify-center rounded-sm bg-accent/10 px-4 text-sm font-medium text-accent transition-[background-color] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] hover:bg-accent/20", e.classes?.primaryButton))
        ]
      ), Sr(w, M);
    };
    Si(F, (w) => {
      e.primaryButton && w(P);
    });
  }
  var z = Ut(S, 2), k = Ie(z);
  Zo(k, 21, () => e.menuGroups, (w) => w.title, (w, M) => {
    var T = n_(), B = Ie(T), N = Ie(B), D = Ut(B, 2);
    Zo(D, 23, () => me(M).links, (L) => L.href + L.label, (L, R, G) => {
      var K = r_(), j = Uo(K), V = Ie(j), $ = Ie(V), H = Ie($), X = Ut(V, 2), J = Ut(j, 2);
      {
        var pe = (ue) => {
          var ye = t_();
          Tr((Me) => Ce(ye, 1, Me), [() => Se(Ee("border-border", e.classes?.divider))]), Sr(ue, ye);
        };
        Si(J, (ue) => {
          me(G) < me(M).links.length - 1 && ue(pe);
        });
      }
      Tr(
        (ue, ye, Me) => {
          Ci(j, "href", me(R).href), Ce(j, 1, ue), Ce($, 1, ye), ki(H, me(R).label), Ce(X, 1, Me);
        },
        [
          () => Se(Ee("group/link relative block w-fit text-2xl font-normal text-foreground-muted transition-colors duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] hover:text-foreground", e.classes?.link)),
          () => Se(Ee("menu-link-text block whitespace-nowrap", e.classes?.linkText)),
          () => Se(Ee("absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-foreground transition-transform duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover/link:origin-left group-hover/link:scale-x-100", e.classes?.linkUnderline))
        ]
      ), Sr(L, K);
    }), Tr(
      (L, R) => {
        Ce(T, 1, L), Ce(B, 1, R), ki(N, me(M).title);
      },
      [
        () => Se(Ee("flex flex-col gap-4 rounded-sm p-4 transition-colors ease-[cubic-bezier(0.625,0.05,0,1)]", me(M).variant === "muted" ? "bg-background-muted" : "bg-transparent", e.classes?.group, me(M).variant === "muted" && e.classes?.groupMuted)),
        () => Se(Ee("mono text-xs font-medium tracking-wider text-foreground-muted/50 uppercase", e.classes?.groupTitle))
      ]
    ), Sr(w, T);
  }), Dn(z, () => c), Jo(b, (w, M) => Ia?.(w, M), t), Dn(b, () => u), Tr(
    (w, M, T, B, N, D, L, R, G) => {
      Ce(y, 1, w), Ci(y, "data-open", me(r)), Ce(b, 1, M), Ce(S, 1, T), Ce(C, 1, B), Ce(O, 1, N), Ce(E, 1, D), Ce(te, 1, L), Ce(z, 1, R), Ce(k, 1, G);
    },
    [
      () => Se(Ee("pointer-events-none fixed inset-0 z-40 bg-background-inset/80 opacity-0 data-[open=true]:pointer-events-auto", e.classes?.overlay)),
      () => Se(Ee("fixed top-2 left-1/2 z-50 w-full max-w-[95vw] -translate-x-1/2 rounded-md border border-border bg-background text-foreground shadow-md md:top-4 md:max-w-[70vw] lg:max-w-[50vw]", e.class, e.classes?.root)),
      () => Se(Ee("relative z-20 flex w-full items-center justify-between p-1", e.classes?.header)),
      () => Se(Ee("group relative flex h-10 items-center justify-center rounded-sm pr-2 transition-[background-color] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] hover:bg-accent/10", e.classes?.toggleButton)),
      () => Se(Ee("absolute h-px w-6 bg-foreground transition-[background-color] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:bg-accent", e.classes?.toggleLine)),
      () => Se(Ee("absolute h-px w-6 bg-foreground transition-[background-color] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:bg-accent", e.classes?.toggleLine)),
      () => Se(Ee("flex items-center gap-1", e.classes?.actions)),
      () => Se(Ee("h-0 w-full overflow-hidden border-t border-border opacity-0", e.classes?.menuWrapper)),
      () => Se(Ee("grid max-h-[65vh] grid-cols-1 gap-4 overflow-y-auto overscroll-contain p-4 md:max-h-none md:grid-cols-3 md:overflow-visible", e.classes?.grid))
    ]
  ), ds("click", y, d), ds("keydown", y, (w) => {
    w.key === "Escape" && me(r) && (w.preventDefault(), d());
  }), ds("click", C, d), Sr(n, p), Xa();
}
pc(["click", "keydown"]);
function f_(n, e = {}) {
  return bc(s_, { target: n, props: e });
}
export {
  s_ as default,
  f_ as render,
  l_ as unmount
};
