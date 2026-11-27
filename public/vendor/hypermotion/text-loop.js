var kl = Object.defineProperty;
var Fs = (i) => {
  throw TypeError(i);
};
var Tl = (i, e, t) => e in i ? kl(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var ve = (i, e, t) => Tl(i, typeof e != "symbol" ? e + "" : e, t), vi = (i, e, t) => e.has(i) || Fs("Cannot " + t);
var g = (i, e, t) => (vi(i, e, "read from private field"), t ? t.call(i) : e.get(i)), R = (i, e, t) => e.has(i) ? Fs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), M = (i, e, t, r) => (vi(i, e, "write to private field"), r ? r.call(i, t) : e.set(i, t), t), N = (i, e, t) => (vi(i, e, "access private method"), t);
var Sl = Array.isArray, Cl = Array.prototype.indexOf, Vr = Array.prototype.includes, Pl = Array.from, Ol = Object.defineProperty, sn = Object.getOwnPropertyDescriptor, Al = Object.prototype, El = Array.prototype, Ml = Object.getPrototypeOf, Ns = Object.isExtensible;
function Rl(i) {
  return typeof i == "function";
}
const wr = () => {
};
function zl(i) {
  for (var e = 0; e < i.length; e++)
    i[e]();
}
function Po() {
  var i, e, t = new Promise((r, n) => {
    i = r, e = n;
  });
  return { promise: t, resolve: i, reject: e };
}
const he = 2, Br = 4, ui = 8, Oo = 1 << 24, Xe = 16, _t = 32, Yt = 64, Mi = 128, Ke = 512, oe = 1024, ue = 2048, pt = 4096, Qe = 8192, dt = 16384, $t = 32768, Ls = 1 << 25, Gr = 65536, Xn = 1 << 17, Dl = 1 << 18, Hr = 1 << 19, Il = 1 << 20, pr = 65536, $n = 1 << 21, Or = 1 << 22, Bt = 1 << 23, bi = Symbol("$state"), Fl = Symbol("attributes"), Ri = Symbol("class"), Nl = Symbol("style"), Jr = Symbol("text"), ci = new class extends Error {
  constructor() {
    super(...arguments);
    ve(this, "name", "StaleReactionError");
    ve(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ll(i) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Vl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Bl(i) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ul(i) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Yl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ql() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Xl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const $l = 1, Hl = 2, Kl = 4, Ql = 2, le = Symbol(), Zl = "http://www.w3.org/1999/xhtml";
function Jl() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ef() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ao(i) {
  return i === this.v;
}
let Le = null;
function Ur(i) {
  Le = i;
}
function Eo(i, e = !1, t) {
  Le = {
    p: Le,
    i: !1,
    c: null,
    e: null,
    s: i,
    x: null,
    r: (
      /** @type {Effect} */
      I
    ),
    l: null
  };
}
function Mo(i) {
  var e = (
    /** @type {ComponentContext} */
    Le
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      Ko(r);
  }
  return e.i = !0, Le = e.p, /** @type {T} */
  {};
}
function Ro() {
  return !0;
}
let Tr = [];
function tf() {
  var i = Tr;
  Tr = [], zl(i);
}
function lr(i) {
  if (Tr.length === 0) {
    var e = Tr;
    queueMicrotask(() => {
      e === Tr && tf();
    });
  }
  Tr.push(i);
}
function zo(i) {
  var e = I;
  if (e === null)
    return D.f |= Bt, i;
  if ((e.f & $t) === 0 && (e.f & Br) === 0)
    throw i;
  Ft(i, e);
}
function Ft(i, e) {
  for (; e !== null; ) {
    if ((e.f & Mi) !== 0) {
      if ((e.f & $t) === 0)
        throw i;
      try {
        e.b.error(i);
        return;
      } catch (t) {
        i = t;
      }
    }
    e = e.parent;
  }
  throw i;
}
const rf = -7169;
function ee(i, e) {
  i.f = i.f & rf | e;
}
function os(i) {
  (i.f & Ke) !== 0 || i.deps === null ? ee(i, oe) : ee(i, pt);
}
function Do(i) {
  if (i !== null)
    for (const e of i)
      (e.f & he) === 0 || (e.f & pr) === 0 || (e.f ^= pr, Do(
        /** @type {Derived} */
        e.deps
      ));
}
function Io(i, e, t) {
  (i.f & ue) !== 0 ? e.add(i) : (i.f & pt) !== 0 && t.add(i), Do(i.deps), ee(i, oe);
}
let yi = null, br = null, B = null, zi = null, tt = null, Di = null, wi = !1, Sr = null, Vn = null;
var Vs = 0;
let nf = 1;
var Rr, zt, nr, zr, Dr, ir, Ir, Tt, yn, Ae, wn, Dt, lt, ft, Fr, Nr, V, Ii, en, Fi, Fo, No, Bn, sf, Ni, xr;
const ai = class ai {
  constructor() {
    R(this, V);
    ve(this, "id", nf++);
    /** True as soon as `#process` was called */
    R(this, Rr, !1);
    ve(this, "linked", !0);
    /** @type {Batch | null} */
    R(this, zt, null);
    /** @type {Batch | null} */
    R(this, nr, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ve(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ve(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ve(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    ve(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, zr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Dr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, ir, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    R(this, Ir, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    R(this, Tt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    R(this, yn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    R(this, Ae, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    R(this, wn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    R(this, Dt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    R(this, lt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    R(this, ft, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    R(this, Fr, /* @__PURE__ */ new Set());
    ve(this, "is_fork", !1);
    R(this, Nr, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    g(this, ft).has(e) || g(this, ft).set(e, { d: [], m: [] }), g(this, Fr).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, t = (r) => this.schedule(r)) {
    var r = g(this, ft).get(e);
    if (r) {
      g(this, ft).delete(e);
      for (var n of r.d)
        ee(n, ue), t(n);
      for (n of r.m)
        ee(n, pt), t(n);
    }
    g(this, Fr).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, t, r = !1) {
    e.v !== le && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & Bt) === 0 && (this.current.set(e, [t, r]), tt?.set(e, t)), this.is_fork || (e.v = t);
  }
  activate() {
    B = this;
  }
  deactivate() {
    B = null, tt = null;
  }
  flush() {
    try {
      wi = !0, B = this, N(this, V, en).call(this);
    } finally {
      Vs = 0, Di = null, Sr = null, Vn = null, wi = !1, B = null, tt = null, fr.clear();
    }
  }
  discard() {
    for (const e of g(this, Dr)) e(this);
    g(this, Dr).clear(), g(this, ir).clear(), N(this, V, xr).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    g(this, wn).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, t) {
    if (M(this, Ir, g(this, Ir) + 1), e) {
      let r = g(this, Tt).get(t) ?? 0;
      g(this, Tt).set(t, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(e, t) {
    if (M(this, Ir, g(this, Ir) - 1), e) {
      let r = g(this, Tt).get(t) ?? 0;
      r === 1 ? g(this, Tt).delete(t) : g(this, Tt).set(t, r - 1);
    }
    g(this, Nr) || (M(this, Nr, !0), lr(() => {
      M(this, Nr, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, t) {
    for (const r of e)
      g(this, Dt).add(r);
    for (const r of t)
      g(this, lt).add(r);
    e.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    g(this, zr).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    g(this, Dr).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    g(this, ir).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of g(this, ir)) e(this);
    g(this, ir).clear();
  }
  settled() {
    return (g(this, yn) ?? M(this, yn, Po())).promise;
  }
  static ensure() {
    var e;
    if (B === null) {
      const t = B = new ai();
      N(e = t, V, Ni).call(e), wi || lr(() => {
        g(t, Rr) || t.flush();
      });
    }
    return B;
  }
  apply() {
    {
      tt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    if (Di = e, e.b?.is_pending && (e.f & (Br | ui | Oo)) !== 0 && (e.f & $t) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var t = e; t.parent !== null; ) {
      t = t.parent;
      var r = t.f;
      if (Sr !== null && t === I && (D === null || (D.f & he) === 0))
        return;
      if ((r & (Yt | _t)) !== 0) {
        if ((r & oe) === 0)
          return;
        t.f ^= oe;
      }
    }
    g(this, Ae).push(t);
  }
};
Rr = new WeakMap(), zt = new WeakMap(), nr = new WeakMap(), zr = new WeakMap(), Dr = new WeakMap(), ir = new WeakMap(), Ir = new WeakMap(), Tt = new WeakMap(), yn = new WeakMap(), Ae = new WeakMap(), wn = new WeakMap(), Dt = new WeakMap(), lt = new WeakMap(), ft = new WeakMap(), Fr = new WeakMap(), Nr = new WeakMap(), V = new WeakSet(), Ii = function() {
  if (this.is_fork) return !0;
  for (const r of g(this, Tt).keys()) {
    for (var e = r, t = !1; e.parent !== null; ) {
      if (g(this, ft).has(e)) {
        t = !0;
        break;
      }
      e = e.parent;
    }
    if (!t)
      return !0;
  }
  return !1;
}, en = function() {
  var l, f, u;
  if (M(this, Rr, !0), Vs++ > 1e3 && (N(this, V, xr).call(this), of()), !N(this, V, Ii).call(this)) {
    for (const c of g(this, Dt))
      g(this, lt).delete(c), ee(c, ue), this.schedule(c);
    for (const c of g(this, lt))
      ee(c, pt), this.schedule(c);
  }
  const e = g(this, Ae);
  M(this, Ae, []), this.apply();
  var t = Sr = [], r = [], n = Vn = [];
  for (const c of e)
    try {
      N(this, V, Fi).call(this, c, t, r);
    } catch (h) {
      throw Bo(c), h;
    }
  if (B = null, n.length > 0) {
    var s = ai.ensure();
    for (const c of n)
      s.schedule(c);
  }
  if (Sr = null, Vn = null, N(this, V, Ii).call(this)) {
    N(this, V, Bn).call(this, r), N(this, V, Bn).call(this, t);
    for (const [c, h] of g(this, ft))
      Vo(c, h);
    n.length > 0 && /** @type {unknown} */
    N(l = B, V, en).call(l);
    return;
  }
  const o = N(this, V, Fo).call(this);
  if (o) {
    N(f = o, V, No).call(f, this);
    return;
  }
  g(this, Dt).clear(), g(this, lt).clear();
  for (const c of g(this, zr)) c(this);
  g(this, zr).clear(), zi = this, Bs(r), Bs(t), zi = null, g(this, yn)?.resolve();
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    B
  );
  if (this.linked && g(this, Ir) === 0 && N(this, V, xr).call(this), g(this, Ae).length > 0) {
    a === null && (a = this, N(this, V, Ni).call(this));
    const c = a;
    g(c, Ae).push(...g(this, Ae).filter((h) => !g(c, Ae).includes(h)));
  }
  a !== null && N(u = a, V, en).call(u);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Fi = function(e, t, r) {
  e.f ^= oe;
  for (var n = e.first; n !== null; ) {
    var s = n.f, o = (s & (_t | Yt)) !== 0, a = o && (s & oe) !== 0, l = a || (s & Qe) !== 0 || g(this, ft).has(n);
    if (!l && n.fn !== null) {
      o ? n.f ^= oe : (s & Br) !== 0 ? t.push(n) : Cn(n) && ((s & Xe) !== 0 && g(this, lt).add(n), Yr(n));
      var f = n.first;
      if (f !== null) {
        n = f;
        continue;
      }
    }
    for (; n !== null; ) {
      var u = n.next;
      if (u !== null) {
        n = u;
        break;
      }
      n = n.parent;
    }
  }
}, Fo = function() {
  for (var e = g(this, zt); e !== null; ) {
    if (!e.is_fork) {
      for (const [t, [, r]] of this.current)
        if (e.current.has(t) && !r)
          return e;
    }
    e = g(e, zt);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
No = function(e) {
  var r;
  for (const [n, s] of e.current)
    !this.previous.has(n) && e.previous.has(n) && this.previous.set(n, e.previous.get(n)), this.current.set(n, s);
  for (const [n, s] of e.async_deriveds) {
    const o = this.async_deriveds.get(n);
    o && s.promise.then(o.resolve);
  }
  const t = (n) => {
    var s = n.reactions;
    if (s !== null)
      for (const l of s) {
        var o = l.f;
        if ((o & he) !== 0)
          t(
            /** @type {Derived} */
            l
          );
        else {
          var a = (
            /** @type {Effect} */
            l
          );
          o & (Or | Xe) && !this.async_deriveds.has(a) && (g(this, lt).delete(a), ee(a, ue), this.schedule(a));
        }
      }
  };
  for (const n of this.current.keys())
    t(n);
  this.oncommit(() => e.discard()), N(r = e, V, xr).call(r), B = this, N(this, V, en).call(this);
}, /**
 * @param {Effect[]} effects
 */
Bn = function(e) {
  for (var t = 0; t < e.length; t += 1)
    Io(e[t], g(this, Dt), g(this, lt));
}, sf = function() {
  var u;
  N(this, V, xr).call(this);
  for (let c = yi; c !== null; c = g(c, nr)) {
    var e = c.id < this.id, t = [];
    for (const [h, [_, p]] of this.current) {
      if (c.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (e && _ !== r)
          c.current.set(h, [_, p]);
        else
          continue;
      }
      t.push(h);
    }
    if (e)
      for (const [h, _] of this.async_deriveds) {
        const p = c.async_deriveds.get(h);
        p && _.promise.then(p.resolve);
      }
    if (g(c, Rr)) {
      var n = [...c.current.keys()].filter((h) => !this.current.has(h));
      if (n.length === 0)
        e && c.discard();
      else if (t.length > 0) {
        if (e)
          for (const h of g(this, Fr))
            c.unskip_effect(h, (_) => {
              var p;
              (_.f & (Xe | Or)) !== 0 ? c.schedule(_) : N(p = c, V, Bn).call(p, [_]);
            });
        c.activate();
        var s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
        for (var a of t)
          Lo(a, n, s, o);
        o = /* @__PURE__ */ new Map();
        var l = [...c.current.keys()].filter(
          (h) => this.current.has(h) ? (
            /** @type {[any, boolean]} */
            this.current.get(h)[0] !== h.v
          ) : !0
        );
        if (l.length > 0)
          for (const h of g(this, wn))
            (h.f & (dt | Qe | Xn)) === 0 && as(h, l, o) && ((h.f & (Or | Xe)) !== 0 ? (ee(h, ue), c.schedule(h)) : g(c, Dt).add(h));
        if (g(c, Ae).length > 0) {
          c.apply();
          for (var f of g(c, Ae))
            N(u = c, V, Fi).call(u, f, [], []);
          M(c, Ae, []);
        }
        c.deactivate();
      }
    }
  }
}, Ni = function() {
  br === null ? yi = br = this : (M(br, nr, this), M(this, zt, br)), br = this;
}, xr = function() {
  var e = g(this, zt), t = g(this, nr);
  e === null ? yi = t : M(e, nr, t), t === null ? br = e : M(t, zt, e), this.linked = !1;
};
let mr = ai;
function of() {
  try {
    Yl();
  } catch (i) {
    Ft(i, Di);
  }
}
let bt = null;
function Bs(i) {
  var e = i.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = i[t++];
      if ((r.f & (dt | Qe)) === 0 && Cn(r) && (bt = /* @__PURE__ */ new Set(), Yr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Jo(r), bt?.size > 0)) {
        fr.clear();
        for (const n of bt) {
          if ((n.f & (dt | Qe)) !== 0) continue;
          const s = [n];
          let o = n.parent;
          for (; o !== null; )
            bt.has(o) && (bt.delete(o), s.push(o)), o = o.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const l = s[a];
            (l.f & (dt | Qe)) === 0 && Yr(l);
          }
        }
        bt.clear();
      }
    }
    bt = null;
  }
}
function Lo(i, e, t, r) {
  if (!t.has(i) && (t.add(i), i.reactions !== null))
    for (const n of i.reactions) {
      const s = n.f;
      (s & he) !== 0 ? Lo(
        /** @type {Derived} */
        n,
        e,
        t,
        r
      ) : (s & (Or | Xe)) !== 0 && (s & ue) === 0 && as(n, e, r) && (ee(n, ue), ls(
        /** @type {Effect} */
        n
      ));
    }
}
function as(i, e, t) {
  const r = t.get(i);
  if (r !== void 0) return r;
  if (i.deps !== null)
    for (const n of i.deps) {
      if (Vr.call(e, n))
        return !0;
      if ((n.f & he) !== 0 && as(
        /** @type {Derived} */
        n,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          n,
          !0
        ), !0;
    }
  return t.set(i, !1), !1;
}
function ls(i) {
  B.schedule(i);
}
function Vo(i, e) {
  if (!((i.f & _t) !== 0 && (i.f & oe) !== 0)) {
    (i.f & ue) !== 0 ? e.d.push(i) : (i.f & pt) !== 0 && e.m.push(i), ee(i, oe);
    for (var t = i.first; t !== null; )
      Vo(t, e), t = t.next;
  }
}
function Bo(i) {
  ee(i, oe);
  for (var e = i.first; e !== null; )
    Bo(e), e = e.next;
}
function af(i) {
  let e = 0, t = hi(0), r;
  return () => {
    cs() && (qe(t), Rf(() => (e === 0 && (r = ds(() => i(() => on(t)))), e += 1, () => {
      lr(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, on(t));
      });
    })));
  };
}
var lf = Gr | Hr;
function ff(i, e, t, r) {
  new uf(i, e, t, r);
}
var Ye, ss, We, sr, be, je, ge, Ee, St, or, It, Lr, xn, kn, Ct, li, re, cf, hf, df, Li, Gn, Un, Vi, Bi;
class uf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, r, n) {
    R(this, re);
    /** @type {Boundary | null} */
    ve(this, "parent");
    ve(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ve(this, "transform_error");
    /** @type {TemplateNode} */
    R(this, Ye);
    /** @type {TemplateNode | null} */
    R(this, ss, null);
    /** @type {BoundaryProps} */
    R(this, We);
    /** @type {((anchor: Node) => void)} */
    R(this, sr);
    /** @type {Effect} */
    R(this, be);
    /** @type {Effect | null} */
    R(this, je, null);
    /** @type {Effect | null} */
    R(this, ge, null);
    /** @type {Effect | null} */
    R(this, Ee, null);
    /** @type {DocumentFragment | null} */
    R(this, St, null);
    R(this, or, 0);
    R(this, It, 0);
    R(this, Lr, !1);
    /** @type {Set<Effect>} */
    R(this, xn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    R(this, kn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    R(this, Ct, null);
    R(this, li, af(() => (M(this, Ct, hi(g(this, or))), () => {
      M(this, Ct, null);
    })));
    M(this, Ye, e), M(this, We, t), M(this, sr, (s) => {
      var o = (
        /** @type {Effect} */
        I
      );
      o.b = this, o.f |= Mi, r(s);
    }), this.parent = /** @type {Effect} */
    I.b, this.transform_error = n ?? this.parent?.transform_error ?? ((s) => s), M(this, be, Qo(() => {
      N(this, re, Li).call(this);
    }, lf));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Io(e, g(this, xn), g(this, kn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!g(this, We).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, t) {
    N(this, re, Vi).call(this, e, t), M(this, or, g(this, or) + e), !(!g(this, Ct) || g(this, Lr)) && (M(this, Lr, !0), lr(() => {
      M(this, Lr, !1), g(this, Ct) && Qn(g(this, Ct), g(this, or));
    }));
  }
  get_effect_pending() {
    return g(this, li).call(this), qe(
      /** @type {Source<number>} */
      g(this, Ct)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!g(this, We).onerror && !g(this, We).failed)
      throw e;
    B?.is_fork ? (g(this, je) && B.skip_effect(g(this, je)), g(this, ge) && B.skip_effect(g(this, ge)), g(this, Ee) && B.skip_effect(g(this, Ee)), B.on_fork_commit(() => {
      N(this, re, Bi).call(this, e);
    })) : N(this, re, Bi).call(this, e);
  }
}
Ye = new WeakMap(), ss = new WeakMap(), We = new WeakMap(), sr = new WeakMap(), be = new WeakMap(), je = new WeakMap(), ge = new WeakMap(), Ee = new WeakMap(), St = new WeakMap(), or = new WeakMap(), It = new WeakMap(), Lr = new WeakMap(), xn = new WeakMap(), kn = new WeakMap(), Ct = new WeakMap(), li = new WeakMap(), re = new WeakSet(), cf = function() {
  try {
    M(this, je, yt(() => g(this, sr).call(this, g(this, Ye))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
hf = function(e) {
  const t = g(this, We).failed;
  t && M(this, Ee, yt(() => {
    t(
      g(this, Ye),
      () => e,
      () => () => {
      }
    );
  }));
}, df = function() {
  const e = g(this, We).pending;
  e && (this.is_pending = !0, M(this, ge, yt(() => e(g(this, Ye)))), lr(() => {
    var t = M(this, St, document.createDocumentFragment()), r = Zn();
    t.append(r), M(this, je, N(this, re, Un).call(this, () => yt(() => g(this, sr).call(this, r)))), g(this, It) === 0 && (g(this, Ye).before(t), M(this, St, null), an(
      /** @type {Effect} */
      g(this, ge),
      () => {
        M(this, ge, null);
      }
    ), N(this, re, Gn).call(
      this,
      /** @type {Batch} */
      B
    ));
  }));
}, Li = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), M(this, It, 0), M(this, or, 0), M(this, je, yt(() => {
      g(this, sr).call(this, g(this, Ye));
    })), g(this, It) > 0) {
      var e = M(this, St, document.createDocumentFragment());
      ra(g(this, je), e);
      const t = (
        /** @type {(anchor: Node) => void} */
        g(this, We).pending
      );
      M(this, ge, yt(() => t(g(this, Ye))));
    } else
      N(this, re, Gn).call(
        this,
        /** @type {Batch} */
        B
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
Gn = function(e) {
  this.is_pending = !1, e.transfer_effects(g(this, xn), g(this, kn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Un = function(e) {
  var t = I, r = D, n = Le;
  mt(g(this, be)), Je(g(this, be)), Ur(g(this, be).ctx);
  try {
    return mr.ensure(), e();
  } catch (s) {
    return zo(s), null;
  } finally {
    mt(t), Je(r), Ur(n);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Vi = function(e, t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && N(r = this.parent, re, Vi).call(r, e, t);
    return;
  }
  M(this, It, g(this, It) + e), g(this, It) === 0 && (N(this, re, Gn).call(this, t), g(this, ge) && an(g(this, ge), () => {
    M(this, ge, null);
  }), g(this, St) && (g(this, Ye).before(g(this, St)), M(this, St, null)));
}, /**
 * @param {unknown} error
 */
Bi = function(e) {
  g(this, je) && (Fe(g(this, je)), M(this, je, null)), g(this, ge) && (Fe(g(this, ge)), M(this, ge, null)), g(this, Ee) && (Fe(g(this, Ee)), M(this, Ee, null));
  var t = g(this, We).onerror;
  let r = g(this, We).failed;
  var n = !1, s = !1;
  const o = () => {
    if (n) {
      ef();
      return;
    }
    n = !0, s && Xl(), g(this, Ee) !== null && an(g(this, Ee), () => {
      M(this, Ee, null);
    }), N(this, re, Un).call(this, () => {
      N(this, re, Li).call(this);
    });
  }, a = (l) => {
    try {
      s = !0, t?.(l, o), s = !1;
    } catch (f) {
      Ft(f, g(this, be) && g(this, be).parent);
    }
    r && M(this, Ee, N(this, re, Un).call(this, () => {
      try {
        return yt(() => {
          var f = (
            /** @type {Effect} */
            I
          );
          f.b = this, f.f |= Mi, r(
            g(this, Ye),
            () => l,
            () => o
          );
        });
      } catch (f) {
        return Ft(
          f,
          /** @type {Effect} */
          g(this, be).parent
        ), null;
      }
    }));
  };
  lr(() => {
    var l;
    try {
      l = this.transform_error(e);
    } catch (f) {
      Ft(f, g(this, be) && g(this, be).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      a,
      /** @param {unknown} e */
      (f) => Ft(f, g(this, be) && g(this, be).parent)
    ) : a(l);
  });
};
function _f(i, e, t, r) {
  const n = mf;
  var s = i.filter((h) => !h.settled);
  if (t.length === 0 && s.length === 0) {
    r(e.map(n));
    return;
  }
  var o = (
    /** @type {Effect} */
    I
  ), a = pf(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    if ((o.f & dt) === 0) {
      a();
      try {
        r(h);
      } catch (_) {
        Ft(_, o);
      }
      Hn();
    }
  }
  var u = Go();
  if (t.length === 0) {
    l.then(() => f(e.map(n))).finally(u);
    return;
  }
  function c() {
    Promise.all(t.map((h) => /* @__PURE__ */ gf(h))).then((h) => f([...e.map(n), ...h])).catch((h) => Ft(h, o)).finally(u);
  }
  l ? l.then(() => {
    a(), c(), Hn();
  }) : c();
}
function pf() {
  var i = (
    /** @type {Effect} */
    I
  ), e = D, t = Le, r = (
    /** @type {Batch} */
    B
  );
  return function(s = !0) {
    mt(i), Je(e), Ur(t), s && (i.f & dt) === 0 && (r?.activate(), r?.apply());
  };
}
function Hn(i = !0) {
  mt(null), Je(null), Ur(null), i && B?.deactivate();
}
function Go() {
  var i = (
    /** @type {Effect} */
    I
  ), e = (
    /** @type {Boundary} */
    i.b
  ), t = (
    /** @type {Batch} */
    B
  ), r = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(r, i), () => {
    e.update_pending_count(-1, t), t.decrement(r, i);
  };
}
// @__NO_SIDE_EFFECTS__
function mf(i) {
  var e = he | ue;
  return I !== null && (I.f |= Hr), {
    ctx: Le,
    deps: null,
    effects: null,
    equals: Ao,
    f: e,
    fn: i,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      le
    ),
    wv: 0,
    parent: I,
    ac: null
  };
}
const Rn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function gf(i, e, t) {
  let r = (
    /** @type {Effect | null} */
    I
  );
  r === null && Vl();
  var n = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = hi(
    /** @type {V} */
    le
  ), o = !D, a = /* @__PURE__ */ new Set();
  return Mf(() => {
    var l = (
      /** @type {Effect} */
      I
    ), f = Po();
    n = f.promise;
    try {
      Promise.resolve(i()).then(f.resolve, (_) => {
        _ !== ci && f.reject(_);
      }).finally(Hn);
    } catch (_) {
      f.reject(_), Hn();
    }
    var u = (
      /** @type {Batch} */
      B
    );
    if (o) {
      if ((l.f & $t) !== 0)
        var c = Go();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        u.async_deriveds.get(l)?.reject(Rn);
      else
        for (const _ of a.values())
          _.reject(Rn);
      a.add(f), u.async_deriveds.set(l, f);
    }
    const h = (_, p = void 0) => {
      c?.(), a.delete(f), p !== Rn && (u.activate(), p ? (s.f |= Bt, Qn(s, p)) : ((s.f & Bt) !== 0 && (s.f ^= Bt), Qn(s, _)), u.deactivate());
    };
    f.promise.then(h, (_) => h(null, _ || "unknown"));
  }), Pf(() => {
    for (const l of a)
      l.reject(Rn);
  }), new Promise((l) => {
    function f(u) {
      function c() {
        u === n ? l(s) : f(n);
      }
      u.then(c, c);
    }
    f(n);
  });
}
function vf(i) {
  var e = i.effects;
  if (e !== null) {
    i.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Fe(
        /** @type {Effect} */
        e[t]
      );
  }
}
function fs(i) {
  var e, t = I, r = i.parent;
  if (!Wt && r !== null && (r.f & (dt | Qe)) !== 0)
    return Jl(), i.v;
  mt(r);
  try {
    i.f &= ~pr, vf(i), e = oa(i);
  } finally {
    mt(t);
  }
  return e;
}
function Uo(i) {
  var e = fs(i);
  if (!i.equals(e) && (i.wv = ia(), (!B?.is_fork || i.deps === null) && (B !== null ? (B.capture(i, e, !0), zi?.capture(i, e, !0)) : i.v = e, i.deps === null))) {
    ee(i, oe);
    return;
  }
  Wt || (tt !== null ? (cs() || B?.is_fork) && tt.set(i, e) : os(i));
}
function bf(i) {
  if (i.effects !== null)
    for (const e of i.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(ci), e.teardown = wr, e.ac = null, cn(e, 0), hs(e));
}
function Yo(i) {
  if (i.effects !== null)
    for (const e of i.effects)
      e.teardown && Yr(e);
}
let Kn = /* @__PURE__ */ new Set();
const fr = /* @__PURE__ */ new Map();
let Wo = !1;
function hi(i, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: i,
    reactions: null,
    equals: Ao,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function ot(i, e) {
  const t = hi(i);
  return Ff(t), t;
}
function xt(i, e, t = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!rt || (D.f & Xn) !== 0) && Ro() && (D.f & (he | Xe | Or | Xn)) !== 0 && (Ze === null || !Vr.call(Ze, i)) && ql();
  let r = t ? tn(e) : e;
  return Qn(i, r, Vn);
}
function Qn(i, e, t = null) {
  if (!i.equals(e)) {
    fr.set(i, Wt ? e : i.v);
    var r = mr.ensure();
    if (r.capture(i, e), (i.f & he) !== 0) {
      const n = (
        /** @type {Derived} */
        i
      );
      (i.f & ue) !== 0 && fs(n), tt === null && os(n);
    }
    i.wv = ia(), jo(i, ue, t), I !== null && (I.f & oe) !== 0 && (I.f & (_t | Yt)) === 0 && (Ue === null ? Nf([i]) : Ue.push(i)), !r.is_fork && Kn.size > 0 && !Wo && yf();
  }
  return e;
}
function yf() {
  Wo = !1;
  for (const i of Kn) {
    (i.f & oe) !== 0 && ee(i, pt);
    let e;
    try {
      e = Cn(i);
    } catch {
      e = !0;
    }
    e && Yr(i);
  }
  Kn.clear();
}
function on(i) {
  xt(i, i.v + 1);
}
function jo(i, e, t) {
  var r = i.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var o = r[s], a = o.f, l = (a & ue) === 0;
      if (l && ee(o, e), (a & Xn) !== 0)
        Kn.add(
          /** @type {Effect} */
          o
        );
      else if ((a & he) !== 0) {
        var f = (
          /** @type {Derived} */
          o
        );
        tt?.delete(f), (a & pr) === 0 && (a & Ke && (I === null || (I.f & $n) === 0) && (o.f |= pr), jo(f, pt, t));
      } else if (l) {
        var u = (
          /** @type {Effect} */
          o
        );
        (a & Xe) !== 0 && bt !== null && bt.add(u), t !== null ? t.push(u) : ls(u);
      }
    }
}
function tn(i) {
  if (typeof i != "object" || i === null || bi in i)
    return i;
  const e = Ml(i);
  if (e !== Al && e !== El)
    return i;
  var t = /* @__PURE__ */ new Map(), r = Sl(i), n = /* @__PURE__ */ ot(0), s = ur, o = (a) => {
    if (ur === s)
      return a();
    var l = D, f = ur;
    Je(null), js(s);
    var u = a();
    return Je(l), js(f), u;
  };
  return r && t.set("length", /* @__PURE__ */ ot(
    /** @type {any[]} */
    i.length
  )), new Proxy(
    /** @type {any} */
    i,
    {
      defineProperty(a, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Wl();
        var u = t.get(l);
        return u === void 0 ? o(() => {
          var c = /* @__PURE__ */ ot(f.value);
          return t.set(l, c), c;
        }) : xt(u, f.value, !0), !0;
      },
      deleteProperty(a, l) {
        var f = t.get(l);
        if (f === void 0) {
          if (l in a) {
            const u = o(() => /* @__PURE__ */ ot(le));
            t.set(l, u), on(n);
          }
        } else
          xt(f, le), on(n);
        return !0;
      },
      get(a, l, f) {
        if (l === bi)
          return i;
        var u = t.get(l), c = l in a;
        if (u === void 0 && (!c || sn(a, l)?.writable) && (u = o(() => {
          var _ = tn(c ? a[l] : le), p = /* @__PURE__ */ ot(_);
          return p;
        }), t.set(l, u)), u !== void 0) {
          var h = qe(u);
          return h === le ? void 0 : h;
        }
        return Reflect.get(a, l, f);
      },
      getOwnPropertyDescriptor(a, l) {
        var f = Reflect.getOwnPropertyDescriptor(a, l);
        if (f && "value" in f) {
          var u = t.get(l);
          u && (f.value = qe(u));
        } else if (f === void 0) {
          var c = t.get(l), h = c?.v;
          if (c !== void 0 && h !== le)
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
        if (l === bi)
          return !0;
        var f = t.get(l), u = f !== void 0 && f.v !== le || Reflect.has(a, l);
        if (f !== void 0 || I !== null && (!u || sn(a, l)?.writable)) {
          f === void 0 && (f = o(() => {
            var h = u ? tn(a[l]) : le, _ = /* @__PURE__ */ ot(h);
            return _;
          }), t.set(l, f));
          var c = qe(f);
          if (c === le)
            return !1;
        }
        return u;
      },
      set(a, l, f, u) {
        var c = t.get(l), h = l in a;
        if (r && l === "length")
          for (var _ = f; _ < /** @type {Source<number>} */
          c.v; _ += 1) {
            var p = t.get(_ + "");
            p !== void 0 ? xt(p, le) : _ in a && (p = o(() => /* @__PURE__ */ ot(le)), t.set(_ + "", p));
          }
        if (c === void 0)
          (!h || sn(a, l)?.writable) && (c = o(() => /* @__PURE__ */ ot(void 0)), xt(c, tn(f)), t.set(l, c));
        else {
          h = c.v !== le;
          var d = o(() => tn(f));
          xt(c, d);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, l);
        if (m?.set && m.set.call(u, f), !h) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              t.get("length")
            ), v = Number(l);
            Number.isInteger(v) && v >= y.v && xt(y, v + 1);
          }
          on(n);
        }
        return !0;
      },
      ownKeys(a) {
        qe(n);
        var l = Reflect.ownKeys(a).filter((c) => {
          var h = t.get(c);
          return h === void 0 || h.v !== le;
        });
        for (var [f, u] of t)
          u.v !== le && !(f in a) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        jl();
      }
    }
  );
}
var Gs, qo, Xo, $o;
function wf() {
  if (Gs === void 0) {
    Gs = window, qo = /Firefox/.test(navigator.userAgent);
    var i = Element.prototype, e = Node.prototype, t = Text.prototype;
    Xo = sn(e, "firstChild").get, $o = sn(e, "nextSibling").get, Ns(i) && (i[Ri] = void 0, i[Fl] = null, i[Nl] = void 0, i.__e = void 0), Ns(t) && (t[Jr] = void 0);
  }
}
function Zn(i = "") {
  return document.createTextNode(i);
}
// @__NO_SIDE_EFFECTS__
function Ho(i) {
  return (
    /** @type {TemplateNode | null} */
    Xo.call(i)
  );
}
// @__NO_SIDE_EFFECTS__
function us(i) {
  return (
    /** @type {TemplateNode | null} */
    $o.call(i)
  );
}
function Us(i, e) {
  return /* @__PURE__ */ Ho(i);
}
function xf(i, e = 1, t = !1) {
  let r = i;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ us(r);
  return r;
}
function kf() {
  return !1;
}
function Tf(i, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Zl, i, void 0)
  );
}
function di(i) {
  var e = D, t = I;
  Je(null), mt(null);
  try {
    return i();
  } finally {
    Je(e), mt(t);
  }
}
function Sf(i) {
  I === null && (D === null && Ul(), Gl()), Wt && Bl();
}
function Cf(i, e) {
  var t = e.last;
  t === null ? e.last = e.first = i : (t.next = i, i.prev = t, e.last = i);
}
function Et(i, e) {
  var t = I;
  t !== null && (t.f & Qe) !== 0 && (i |= Qe);
  var r = {
    ctx: Le,
    deps: null,
    nodes: null,
    f: i | ue | Ke,
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
  B?.register_created_effect(r);
  var n = r;
  if ((i & Br) !== 0)
    Sr !== null ? Sr.push(r) : mr.ensure().schedule(r);
  else if (e !== null) {
    try {
      Yr(r);
    } catch (o) {
      throw Fe(r), o;
    }
    n.deps === null && n.teardown === null && n.nodes === null && n.first === n.last && // either `null`, or a singular child
    (n.f & Hr) === 0 && (n = n.first, (i & Xe) !== 0 && (i & Gr) !== 0 && n !== null && (n.f |= Gr));
  }
  if (n !== null && (n.parent = t, t !== null && Cf(n, t), D !== null && (D.f & he) !== 0 && (i & Yt) === 0)) {
    var s = (
      /** @type {Derived} */
      D
    );
    (s.effects ?? (s.effects = [])).push(n);
  }
  return r;
}
function cs() {
  return D !== null && !rt;
}
function Pf(i) {
  const e = Et(ui, null);
  return ee(e, oe), e.teardown = i, e;
}
function Of(i) {
  Sf();
  var e = (
    /** @type {Effect} */
    I.f
  ), t = !D && (e & _t) !== 0 && (e & $t) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Le
    );
    (r.e ?? (r.e = [])).push(i);
  } else
    return Ko(i);
}
function Ko(i) {
  return Et(Br | Il, i);
}
function Af(i) {
  mr.ensure();
  const e = Et(Yt | Hr, i);
  return (t = {}) => new Promise((r) => {
    t.outro ? an(e, () => {
      Fe(e), r(void 0);
    }) : (Fe(e), r(void 0));
  });
}
function Ef(i) {
  return Et(Br, i);
}
function Mf(i) {
  return Et(Or | Hr, i);
}
function Rf(i, e = 0) {
  return Et(ui | e, i);
}
function Ys(i, e = [], t = [], r = []) {
  _f(r, e, t, (n) => {
    Et(ui, () => i(...n.map(qe)));
  });
}
function Qo(i, e = 0) {
  var t = Et(Xe | e, i);
  return t;
}
function yt(i) {
  return Et(_t | Hr, i);
}
function Zo(i) {
  var e = i.teardown;
  if (e !== null) {
    const t = Wt, r = D;
    Ws(!0), Je(null);
    try {
      e.call(null);
    } finally {
      Ws(t), Je(r);
    }
  }
}
function hs(i, e = !1) {
  var t = i.first;
  for (i.first = i.last = null; t !== null; ) {
    const n = t.ac;
    n !== null && di(() => {
      n.abort(ci);
    });
    var r = t.next;
    (t.f & Yt) !== 0 ? t.parent = null : Fe(t, e), t = r;
  }
}
function zf(i) {
  for (var e = i.first; e !== null; ) {
    var t = e.next;
    (e.f & _t) === 0 && Fe(e), e = t;
  }
}
function Fe(i, e = !0) {
  var t = !1;
  (e || (i.f & Dl) !== 0) && i.nodes !== null && i.nodes.end !== null && (Df(
    i.nodes.start,
    /** @type {TemplateNode} */
    i.nodes.end
  ), t = !0), ee(i, Ls), hs(i, e && !t), cn(i, 0);
  var r = i.nodes && i.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Zo(i), i.f ^= Ls, i.f |= dt;
  var n = i.parent;
  n !== null && n.first !== null && Jo(i), i.next = i.prev = i.teardown = i.ctx = i.deps = i.fn = i.nodes = i.ac = i.b = null;
}
function Df(i, e) {
  for (; i !== null; ) {
    var t = i === e ? null : /* @__PURE__ */ us(i);
    i.remove(), i = t;
  }
}
function Jo(i) {
  var e = i.parent, t = i.prev, r = i.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === i && (e.first = r), e.last === i && (e.last = t));
}
function an(i, e, t = !0) {
  var r = [];
  ea(i, r, !0);
  var n = () => {
    t && Fe(i), e && e();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || n();
    for (var a of r)
      a.out(o);
  } else
    n();
}
function ea(i, e, t) {
  if ((i.f & Qe) === 0) {
    i.f ^= Qe;
    var r = i.nodes && i.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || t) && e.push(a);
    for (var n = i.first; n !== null; ) {
      var s = n.next;
      if ((n.f & Yt) === 0) {
        var o = (n.f & Gr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (n.f & _t) !== 0 && (i.f & Xe) !== 0;
        ea(n, e, o ? t : !1);
      }
      n = s;
    }
  }
}
function If(i) {
  ta(i, !0);
}
function ta(i, e) {
  if ((i.f & Qe) !== 0) {
    i.f ^= Qe, (i.f & oe) === 0 && (ee(i, ue), mr.ensure().schedule(i));
    for (var t = i.first; t !== null; ) {
      var r = t.next, n = (t.f & Gr) !== 0 || (t.f & _t) !== 0;
      ta(t, n ? e : !1), t = r;
    }
    var s = i.nodes && i.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || e) && o.in();
  }
}
function ra(i, e) {
  if (i.nodes)
    for (var t = i.nodes.start, r = i.nodes.end; t !== null; ) {
      var n = t === r ? null : /* @__PURE__ */ us(t);
      e.append(t), t = n;
    }
}
let Yn = !1, Wt = !1;
function Ws(i) {
  Wt = i;
}
let D = null, rt = !1;
function Je(i) {
  D = i;
}
let I = null;
function mt(i) {
  I = i;
}
let Ze = null;
function Ff(i) {
  D !== null && (Ze === null ? Ze = [i] : Ze.push(i));
}
let ye = null, Oe = 0, Ue = null;
function Nf(i) {
  Ue = i;
}
let na = 1, tr = 0, ur = tr;
function js(i) {
  ur = i;
}
function ia() {
  return ++na;
}
function Cn(i) {
  var e = i.f;
  if ((e & ue) !== 0)
    return !0;
  if (e & he && (i.f &= ~pr), (e & pt) !== 0) {
    for (var t = (
      /** @type {Value[]} */
      i.deps
    ), r = t.length, n = 0; n < r; n++) {
      var s = t[n];
      if (Cn(
        /** @type {Derived} */
        s
      ) && Uo(
        /** @type {Derived} */
        s
      ), s.wv > i.wv)
        return !0;
    }
    (e & Ke) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    tt === null && ee(i, oe);
  }
  return !1;
}
function sa(i, e, t = !0) {
  var r = i.reactions;
  if (r !== null && !(Ze !== null && Vr.call(Ze, i)))
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      (s.f & he) !== 0 ? sa(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? ee(s, ue) : (s.f & oe) !== 0 && ee(s, pt), ls(
        /** @type {Effect} */
        s
      ));
    }
}
function oa(i) {
  var d;
  var e = ye, t = Oe, r = Ue, n = D, s = Ze, o = Le, a = rt, l = ur, f = i.f;
  ye = /** @type {null | Value[]} */
  null, Oe = 0, Ue = null, D = (f & (_t | Yt)) === 0 ? i : null, Ze = null, Ur(i.ctx), rt = !1, ur = ++tr, i.ac !== null && (di(() => {
    i.ac.abort(ci);
  }), i.ac = null);
  try {
    i.f |= $n;
    var u = (
      /** @type {Function} */
      i.fn
    ), c = u();
    i.f |= $t;
    var h = i.deps, _ = B?.is_fork;
    if (ye !== null) {
      var p;
      if (_ || cn(i, Oe), h !== null && Oe > 0)
        for (h.length = Oe + ye.length, p = 0; p < ye.length; p++)
          h[Oe + p] = ye[p];
      else
        i.deps = h = ye;
      if (cs() && (i.f & Ke) !== 0)
        for (p = Oe; p < h.length; p++)
          ((d = h[p]).reactions ?? (d.reactions = [])).push(i);
    } else !_ && h !== null && Oe < h.length && (cn(i, Oe), h.length = Oe);
    if (Ro() && Ue !== null && !rt && h !== null && (i.f & (he | pt | ue)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      Ue.length; p++)
        sa(
          Ue[p],
          /** @type {Effect} */
          i
        );
    if (n !== null && n !== i) {
      if (tr++, n.deps !== null)
        for (let m = 0; m < t; m += 1)
          n.deps[m].rv = tr;
      if (e !== null)
        for (const m of e)
          m.rv = tr;
      Ue !== null && (r === null ? r = Ue : r.push(.../** @type {Source[]} */
      Ue));
    }
    return (i.f & Bt) !== 0 && (i.f ^= Bt), c;
  } catch (m) {
    return zo(m);
  } finally {
    i.f ^= $n, ye = e, Oe = t, Ue = r, D = n, Ze = s, Ur(o), rt = a, ur = l;
  }
}
function Lf(i, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Cl.call(t, i);
    if (r !== -1) {
      var n = t.length - 1;
      n === 0 ? t = e.reactions = null : (t[r] = t[n], t.pop());
    }
  }
  if (t === null && (e.f & he) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ye === null || !Vr.call(ye, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & Ke) !== 0 && (s.f ^= Ke, s.f &= ~pr), s.v !== le && os(s), bf(s), cn(s, 0);
  }
}
function cn(i, e) {
  var t = i.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      Lf(i, t[r]);
}
function Yr(i) {
  var e = i.f;
  if ((e & dt) === 0) {
    ee(i, oe);
    var t = I, r = Yn;
    I = i, Yn = !0;
    try {
      (e & (Xe | Oo)) !== 0 ? zf(i) : hs(i), Zo(i);
      var n = oa(i);
      i.teardown = typeof n == "function" ? n : null, i.wv = na;
      var s;
    } finally {
      Yn = r, I = t;
    }
  }
}
function qe(i) {
  var e = i.f, t = (e & he) !== 0;
  if (D !== null && !rt) {
    var r = I !== null && (I.f & dt) !== 0;
    if (!r && (Ze === null || !Vr.call(Ze, i))) {
      var n = D.deps;
      if ((D.f & $n) !== 0)
        i.rv < tr && (i.rv = tr, ye === null && n !== null && n[Oe] === i ? Oe++ : ye === null ? ye = [i] : ye.push(i));
      else {
        (D.deps ?? (D.deps = [])).push(i);
        var s = i.reactions;
        s === null ? i.reactions = [D] : Vr.call(s, D) || s.push(D);
      }
    }
  }
  if (Wt && fr.has(i))
    return fr.get(i);
  if (t) {
    var o = (
      /** @type {Derived} */
      i
    );
    if (Wt) {
      var a = o.v;
      return ((o.f & oe) === 0 && o.reactions !== null || la(o)) && (a = fs(o)), fr.set(o, a), a;
    }
    var l = (o.f & Ke) === 0 && !rt && D !== null && (Yn || (D.f & Ke) !== 0), f = (o.f & $t) === 0;
    Cn(o) && (l && (o.f |= Ke), Uo(o)), l && !f && (Yo(o), aa(o));
  }
  if (tt?.has(i))
    return tt.get(i);
  if ((i.f & Bt) !== 0)
    throw i.v;
  return i.v;
}
function aa(i) {
  if (i.f |= Ke, i.deps !== null)
    for (const e of i.deps)
      (e.reactions ?? (e.reactions = [])).push(i), (e.f & he) !== 0 && (e.f & Ke) === 0 && (Yo(
        /** @type {Derived} */
        e
      ), aa(
        /** @type {Derived} */
        e
      ));
}
function la(i) {
  if (i.v === le) return !0;
  if (i.deps === null) return !1;
  for (const e of i.deps)
    if (fr.has(e) || (e.f & he) !== 0 && la(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function ds(i) {
  var e = rt;
  try {
    return rt = !0, i();
  } finally {
    rt = e;
  }
}
const Vf = ["touchstart", "touchmove"];
function Bf(i) {
  return Vf.includes(i);
}
const zn = Symbol("events"), Gf = /* @__PURE__ */ new Set(), qs = /* @__PURE__ */ new Set();
let Xs = null;
function $s(i) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = i.type, n = i.composedPath?.() || [], s = (
    /** @type {null | Element} */
    n[0] || i.target
  );
  Xs = i;
  var o = 0, a = Xs === i && i[zn];
  if (a) {
    var l = n.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      i[zn] = e;
      return;
    }
    var f = n.indexOf(e);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (s = /** @type {Element} */
  n[o] || i.target, s !== e) {
    Ol(i, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var u = D, c = I;
    Je(null), mt(null);
    try {
      for (var h, _ = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var d = s[zn]?.[r];
          d != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          i.target === s) && d.call(s, i);
        } catch (m) {
          h ? _.push(m) : h = m;
        }
        if (i.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (h) {
        for (let m of _)
          queueMicrotask(() => {
            throw m;
          });
        throw h;
      }
    } finally {
      i[zn] = e, delete i.currentTarget, Je(u), mt(c);
    }
  }
}
const Uf = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (i) => i
  })
);
function Yf(i) {
  return (
    /** @type {string} */
    Uf?.createHTML(i) ?? i
  );
}
function Wf(i) {
  var e = Tf("template");
  return e.innerHTML = Yf(i.replaceAll("<!>", "<!---->")), e.content;
}
function jf(i, e) {
  var t = (
    /** @type {Effect} */
    I
  );
  t.nodes === null && (t.nodes = { start: i, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function fa(i, e) {
  var t = (e & Ql) !== 0, r, n = !i.startsWith("<!>");
  return () => {
    r === void 0 && (r = Wf(n ? i : "<!>" + i), r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ho(r));
    var s = (
      /** @type {TemplateNode} */
      t || qo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return jf(s, s), s;
  };
}
function Hs(i, e) {
  i !== null && i.before(
    /** @type {Node} */
    e
  );
}
let Gi = !0;
function qf(i, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== /** @type {any} */
  (i[Jr] ?? (i[Jr] = i.nodeValue)) && (i[Jr] = t, i.nodeValue = `${t}`);
}
function Xf(i, e) {
  return $f(i, e);
}
const Dn = /* @__PURE__ */ new Map();
function $f(i, { target: e, anchor: t, props: r = {}, events: n, context: s, intro: o = !0, transformError: a }) {
  wf();
  var l = void 0, f = Af(() => {
    var u = t ?? e.appendChild(Zn());
    ff(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (_) => {
        Eo({});
        var p = (
          /** @type {ComponentContext} */
          Le
        );
        s && (p.c = s), n && (r.$$events = n), Gi = o, l = i(_, r) || {}, Gi = !0, Mo();
      },
      a
    );
    var c = /* @__PURE__ */ new Set(), h = (_) => {
      for (var p = 0; p < _.length; p++) {
        var d = _[p];
        if (!c.has(d)) {
          c.add(d);
          var m = Bf(d);
          for (const x of [e, document]) {
            var y = Dn.get(x);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Dn.set(x, y));
            var v = y.get(d);
            v === void 0 ? (x.addEventListener(d, $s, { passive: m }), y.set(d, 1)) : y.set(d, v + 1);
          }
        }
      }
    };
    return h(Pl(Gf)), qs.add(h), () => {
      for (var _ of c)
        for (const m of [e, document]) {
          var p = (
            /** @type {Map<string, number>} */
            Dn.get(m)
          ), d = (
            /** @type {number} */
            p.get(_)
          );
          --d == 0 ? (m.removeEventListener(_, $s), p.delete(_), p.size === 0 && Dn.delete(m)) : p.set(_, d);
        }
      qs.delete(h), u !== t && u.parentNode?.removeChild(u);
    };
  });
  return Ui.set(l, f), l;
}
let Ui = /* @__PURE__ */ new WeakMap();
function wh(i, e) {
  const t = Ui.get(i);
  return t ? (Ui.delete(i), t(e)) : Promise.resolve();
}
var et, ut, Me, ar, Tn, Sn, fi;
class Hf {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    ve(this, "anchor");
    /** @type {Map<Batch, Key>} */
    R(this, et, /* @__PURE__ */ new Map());
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
    R(this, ut, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    R(this, Me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    R(this, ar, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    R(this, Tn, !0);
    /**
     * @param {Batch} batch
     */
    R(this, Sn, (e) => {
      if (g(this, et).has(e)) {
        var t = (
          /** @type {Key} */
          g(this, et).get(e)
        ), r = g(this, ut).get(t);
        if (r)
          If(r), g(this, ar).delete(t);
        else {
          var n = g(this, Me).get(t);
          n && (g(this, ut).set(t, n.effect), g(this, Me).delete(t), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), r = n.effect);
        }
        for (const [s, o] of g(this, et)) {
          if (g(this, et).delete(s), s === e)
            break;
          const a = g(this, Me).get(o);
          a && (Fe(a.effect), g(this, Me).delete(o));
        }
        for (const [s, o] of g(this, ut)) {
          if (s === t || g(this, ar).has(s)) continue;
          const a = () => {
            if (Array.from(g(this, et).values()).includes(s)) {
              var f = document.createDocumentFragment();
              ra(o, f), f.append(Zn()), g(this, Me).set(s, { effect: o, fragment: f });
            } else
              Fe(o);
            g(this, ar).delete(s), g(this, ut).delete(s);
          };
          g(this, Tn) || !r ? (g(this, ar).add(s), an(o, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    R(this, fi, (e) => {
      g(this, et).delete(e);
      const t = Array.from(g(this, et).values());
      for (const [r, n] of g(this, Me))
        t.includes(r) || (Fe(n.effect), g(this, Me).delete(r));
    });
    this.anchor = e, M(this, Tn, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var r = (
      /** @type {Batch} */
      B
    ), n = kf();
    if (t && !g(this, ut).has(e) && !g(this, Me).has(e))
      if (n) {
        var s = document.createDocumentFragment(), o = Zn();
        s.append(o), g(this, Me).set(e, {
          effect: yt(() => t(o)),
          fragment: s
        });
      } else
        g(this, ut).set(
          e,
          yt(() => t(this.anchor))
        );
    if (g(this, et).set(r, e), n) {
      for (const [a, l] of g(this, ut))
        a === e ? r.unskip_effect(l) : r.skip_effect(l);
      for (const [a, l] of g(this, Me))
        a === e ? r.unskip_effect(l.effect) : r.skip_effect(l.effect);
      r.oncommit(g(this, Sn)), r.ondiscard(g(this, fi));
    } else
      g(this, Sn).call(this, r);
  }
}
et = new WeakMap(), ut = new WeakMap(), Me = new WeakMap(), ar = new WeakMap(), Tn = new WeakMap(), Sn = new WeakMap(), fi = new WeakMap();
const Kf = Symbol("NaN");
function Qf(i, e, t) {
  var r = new Hf(i);
  Qo(() => {
    var n = e();
    n !== n && (n = /** @type {any} */
    Kf), r.ensure(n, t);
  });
}
const Zf = () => performance.now(), Pt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (i) => requestAnimationFrame(i)
  ),
  now: () => Zf(),
  tasks: /* @__PURE__ */ new Set()
};
function ua() {
  const i = Pt.now();
  Pt.tasks.forEach((e) => {
    e.c(i) || (Pt.tasks.delete(e), e.f());
  }), Pt.tasks.size !== 0 && Pt.tick(ua);
}
function Jf(i) {
  let e;
  return Pt.tasks.size === 0 && Pt.tick(ua), {
    promise: new Promise((t) => {
      Pt.tasks.add(e = { c: i, f: t });
    }),
    abort() {
      Pt.tasks.delete(e);
    }
  };
}
function In(i, e) {
  di(() => {
    i.dispatchEvent(new CustomEvent(e));
  });
}
function eu(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const e = i.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Ks(i) {
  const e = {}, t = i.split(";");
  for (const r of t) {
    const [n, s] = r.split(":");
    if (!n || s === void 0) break;
    const o = eu(n.trim());
    e[o] = s.trim();
  }
  return e;
}
const tu = (i) => i;
function Qs(i, e, t, r) {
  var x;
  var n = (i & $l) !== 0, s = (i & Hl) !== 0, o = n && s, a = (i & Kl) !== 0, l = o ? "both" : n ? "in" : "out", f, u = e.inert, c = e.style.overflow, h, _;
  function p() {
    return di(() => f ?? (f = t()(e, r?.() ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var d = {
    is_global: a,
    in() {
      if (e.inert = u, !n) {
        _?.abort(), _?.reset?.();
        return;
      }
      s || h?.abort(), h = Yi(
        e,
        p(),
        _,
        1,
        () => {
          In(e, "introstart");
        },
        () => {
          In(e, "introend"), h?.abort(), h = f = void 0, e.style.overflow = c;
        }
      );
    },
    out(k) {
      if (!s) {
        k?.(), f = void 0;
        return;
      }
      e.inert = !0, _ = Yi(
        e,
        p(),
        h,
        0,
        () => {
          In(e, "outrostart");
        },
        () => {
          In(e, "outroend"), k?.();
        }
      );
    },
    stop: () => {
      h?.abort(), _?.abort();
    }
  }, m = (
    /** @type {Effect & { nodes: EffectNodes }} */
    I
  );
  if (((x = m.nodes).t ?? (x.t = [])).push(d), n && Gi) {
    var y = a;
    if (!y) {
      for (var v = (
        /** @type {Effect | null} */
        m.parent
      ); v && (v.f & Gr) !== 0; )
        for (; (v = v.parent) && (v.f & Xe) === 0; )
          ;
      y = !v || (v.f & $t) !== 0;
    }
    y && Ef(() => {
      ds(() => d.in());
    });
  }
}
function Yi(i, e, t, r, n, s) {
  var o = r === 1;
  if (Rl(e)) {
    var a, l = !1;
    return lr(() => {
      if (!l) {
        var y = e({ direction: o ? "in" : "out" });
        a = Yi(i, y, t, r, n, s);
      }
    }), {
      abort: () => {
        l = !0, a?.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (t?.deactivate(), !e?.duration && !e?.delay)
    return n(), s(), {
      abort: wr,
      deactivate: wr,
      reset: wr,
      t: () => r
    };
  const { delay: f = 0, css: u, tick: c, easing: h = tu } = e;
  var _ = [];
  if (o && t === void 0 && (c && c(0, 1), u)) {
    var p = Ks(u(0, 1));
    _.push(p, p);
  }
  var d = () => 1 - r, m = i.animate(_, { duration: f, fill: "forwards" });
  return m.onfinish = () => {
    m.cancel(), n();
    var y = t?.t() ?? 1 - r;
    t?.abort();
    var v = r - y, x = (
      /** @type {number} */
      e.duration * Math.abs(v)
    ), k = [];
    if (x > 0) {
      var w = !1;
      if (u)
        for (var P = Math.ceil(x / 16.666666666666668), S = 0; S <= P; S += 1) {
          var b = y + v * h(S / P), T = Ks(u(b, 1 - b));
          k.push(T), w || (w = T.overflow === "hidden");
        }
      w && (i.style.overflow = "hidden"), d = () => {
        var E = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return y + v * h(E / x);
      }, c && Jf(() => {
        if (m.playState !== "running") return !1;
        var E = d();
        return c(E, 1 - E), !0;
      });
    }
    m = i.animate(k, { duration: x, fill: "forwards" }), m.onfinish = () => {
      d = () => r, c?.(r, 1 - r), s();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = wr);
    },
    deactivate: () => {
      s = wr;
    },
    reset: () => {
      r === 0 && c?.(1, 0);
    },
    t: () => d()
  };
}
function ca(i) {
  var e, t, r = "";
  if (typeof i == "string" || typeof i == "number") r += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var n = i.length;
    for (e = 0; e < n; e++) i[e] && (t = ca(i[e])) && (r && (r += " "), r += t);
  } else for (t in i) i[t] && (r && (r += " "), r += t);
  return r;
}
function ha() {
  for (var i, e, t = 0, r = "", n = arguments.length; t < n; t++) (i = arguments[t]) && (e = ca(i)) && (r && (r += " "), r += e);
  return r;
}
function Zs(i) {
  return typeof i == "object" ? ha(i) : i ?? "";
}
function ru(i, e, t) {
  var r = i == null ? "" : "" + i;
  return r === "" ? null : r;
}
function Js(i, e, t, r, n, s) {
  var o = (
    /** @type {any} */
    i[Ri]
  );
  if (o !== t || o === void 0) {
    var a = ru(t);
    a == null ? i.removeAttribute("class") : i.className = a, i[Ri] = t;
  }
  return s;
}
function nu(i, e, t, r) {
  var n = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, n = /** @type {V} */
  r), n), a;
  a = /** @type {V} */
  i[e], a === void 0 && r !== void 0 && (a = o());
  var l;
  return l = () => {
    var f = (
      /** @type {V} */
      i[e]
    );
    return f === void 0 ? o() : (s = !0, f);
  }, l;
}
function iu(i) {
  Le === null && Ll(), Of(() => {
    const e = ds(i);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
const su = "5";
var Co;
typeof window < "u" && ((Co = window.__svelte ?? (window.__svelte = {})).v ?? (Co.v = /* @__PURE__ */ new Set())).add(su);
function wt(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function da(i, e) {
  i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.__proto__ = e;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ne = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, hn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, _s, ce, H, $e = 1e8, j = 1 / $e, Wi = Math.PI * 2, ou = Wi / 4, au = 0, _a = Math.sqrt, lu = Math.cos, fu = Math.sin, fe = function(e) {
  return typeof e == "string";
}, te = function(e) {
  return typeof e == "function";
}, Ot = function(e) {
  return typeof e == "number";
}, ps = function(e) {
  return typeof e > "u";
}, gt = function(e) {
  return typeof e == "object";
}, xe = function(e) {
  return e !== !1;
}, ms = function() {
  return typeof window < "u";
}, Fn = function(e) {
  return te(e) || fe(e);
}, pa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, pe = Array.isArray, uu = /random\([^)]+\)/g, cu = /,\s*/g, eo = /(?:-?\.?\d|\.)+/gi, ma = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Cr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, xi = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ga = /[+-]=-?[.\d]+/, hu = /[^,'"\[\]\s]+/gi, du = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Z, at, ji, gs, Ve = {}, Jn = {}, va, ba = function(e) {
  return (Jn = Wr(e, Ve)) && Ce;
}, vs = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, dn = function(e, t) {
  return !t && console.warn(e);
}, ya = function(e, t) {
  return e && (Ve[e] = t) && Jn && (Jn[e] = t) || Ve;
}, _n = function() {
  return 0;
}, _u = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Wn = {
  suppressEvents: !0,
  kill: !1
}, pu = {
  suppressEvents: !0
}, bs = {}, Gt = [], qi = {}, wa, Re = {}, ki = {}, to = 30, jn = [], ys = "", ws = function(e) {
  var t = e[0], r, n;
  if (gt(t) || te(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (n = jn.length; n-- && !jn[n].targetTest(t); )
      ;
    r = jn[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new Ya(e[n], r))) || e.splice(n, 1);
  return e;
}, cr = function(e) {
  return e._gsap || ws(He(e))[0]._gsap;
}, xa = function(e, t, r) {
  return (r = e[t]) && te(r) ? e[t]() : ps(r) && e.getAttribute && e.getAttribute(t) || r;
}, ke = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, ne = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, Q = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Ar = function(e, t) {
  var r = t.charAt(0), n = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n;
}, mu = function(e, t) {
  for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; )
    ;
  return n < r;
}, ei = function() {
  var e = Gt.length, t = Gt.slice(0), r, n;
  for (qi = {}, Gt.length = 0, r = 0; r < e; r++)
    n = t[r], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, xs = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, ka = function(e, t, r, n) {
  Gt.length && !ce && ei(), e.render(t, r, !!(ce && t < 0 && xs(e))), Gt.length && !ce && ei();
}, Ta = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(hu).length < 2 ? t : fe(e) ? e.trim() : e;
}, Sa = function(e) {
  return e;
}, Be = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, gu = function(e) {
  return function(t, r) {
    for (var n in r)
      n in t || n === "duration" && e || n === "ease" || (t[n] = r[n]);
  };
}, Wr = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, ro = function i(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = gt(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, ti = function(e, t) {
  var r = {}, n;
  for (n in e)
    n in t || (r[n] = e[n]);
  return r;
}, ln = function(e) {
  var t = e.parent || Z, r = e.keyframes ? gu(pe(e.keyframes)) : Be;
  if (xe(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, vu = function(e, t) {
  for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, Ca = function(e, t, r, n, s) {
  var o = e[n], a;
  if (s)
    for (a = t[s]; o && o[s] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = o, t.parent = t._dp = e, t;
}, _i = function(e, t, r, n) {
  r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
  var s = t._prev, o = t._next;
  s ? s._next = o : e[r] === t && (e[r] = o), o ? o._prev = s : e[n] === t && (e[n] = s), t._next = t._prev = t.parent = null;
}, jt = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, hr = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, bu = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Xi = function(e, t, r, n) {
  return e._startAt && (ce ? e._startAt.revert(Wn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n));
}, yu = function i(e) {
  return !e || e._ts && i(e.parent);
}, no = function(e) {
  return e._repeat ? jr(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, jr = function(e, t) {
  var r = Math.floor(e = Q(e / t));
  return e && r === e ? r - 1 : r;
}, ri = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, pi = function(e) {
  return e._end = Q(e._start + (e._tDur / Math.abs(e._ts || e._rts || j) || 0));
}, mi = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = Q(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), pi(e), r._dirty || hr(r, e)), e;
}, Pa = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = ri(e.rawTime(), t), (!t._dur || Pn(0, t.totalDuration(), r) - t._tTime > j) && t.render(r, !0)), hr(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -j;
  }
}, ct = function(e, t, r, n) {
  return t.parent && jt(t), t._start = Q((Ot(r) ? r : r || e !== Z ? Ge(e, r, t) : e._time) + t._delay), t._end = Q(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ca(e, t, "_first", "_last", e._sort ? "_start" : 0), $i(t) || (e._recent = t), n || Pa(e, t), e._ts < 0 && mi(e, e._tTime), e;
}, Oa = function(e, t) {
  return (Ve.ScrollTrigger || vs("scrollTrigger", t)) && Ve.ScrollTrigger.create(t, e);
}, Aa = function(e, t, r, n, s) {
  if (Ts(e, t, s), !e._initted)
    return 1;
  if (!r && e._pt && !ce && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && wa !== ze.frame)
    return Gt.push(e), e._lazy = [s, n], 1;
}, wu = function i(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
}, $i = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, xu = function(e, t, r, n) {
  var s = e.ratio, o = t < 0 || !t && (!e._start && wu(e) && !(!e._initted && $i(e)) || (e._ts < 0 || e._dp._ts < 0) && !$i(e)) ? 0 : 1, a = e._rDelay, l = 0, f, u, c;
  if (a && e._repeat && (l = Pn(0, e._tDur, t), u = jr(l, a), e._yoyo && u & 1 && (o = 1 - o), u !== jr(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || ce || n || e._zTime === j || !t && e._zTime) {
    if (!e._initted && Aa(e, t, n, r, l))
      return;
    for (c = e._zTime, e._zTime = t || (r ? j : 0), r || (r = t && !c), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, f = e._pt; f; )
      f.r(o, f.d), f = f._next;
    t < 0 && Xi(e, t, r, !0), e._onUpdate && !r && De(e, "onUpdate"), l && e._repeat && !r && e.parent && De(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && jt(e, 1), !r && !ce && (De(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, ku = function(e, t, r) {
  var n;
  if (r > t)
    for (n = e._first; n && n._start <= r; ) {
      if (n.data === "isPause" && n._start > t)
        return n;
      n = n._next;
    }
  else
    for (n = e._last; n && n._start >= r; ) {
      if (n.data === "isPause" && n._start < t)
        return n;
      n = n._prev;
    }
}, qr = function(e, t, r, n) {
  var s = e._repeat, o = Q(t) || 0, a = e._tTime / e._tDur;
  return a && !n && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : Q(o * (s + 1) + e._rDelay * s) : o, a > 0 && !n && mi(e, e._tTime = e._tDur * a), e.parent && pi(e), r || hr(e.parent, e), e;
}, io = function(e) {
  return e instanceof we ? hr(e) : qr(e, e._dur);
}, Tu = {
  _start: 0,
  endTime: _n,
  totalDuration: _n
}, Ge = function i(e, t, r) {
  var n = e.labels, s = e._recent || Tu, o = e.duration() >= $e ? s.endTime(!1) : e._dur, a, l, f;
  return fe(t) && (isNaN(t) || t in n) ? (l = t.charAt(0), f = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (f ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = o), n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), f && r && (l = l / 100 * (pe(r) ? r[0] : r).totalDuration()), a > 1 ? i(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t;
}, fn = function(e, t, r) {
  var n = Ot(t[1]), s = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[s], a, l;
  if (n && (o.duration = t[1]), o.parent = r, e) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = xe(l.vars.inherit) && l.parent;
    o.immediateRender = xe(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1];
  }
  return new ie(t[0], o, t[s + 1]);
}, Ht = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Pn = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, _e = function(e, t) {
  return !fe(e) || !(t = du.exec(e)) ? "" : t[1];
}, Su = function(e, t, r) {
  return Ht(r, function(n) {
    return Pn(e, t, n);
  });
}, Hi = [].slice, Ea = function(e, t) {
  return e && gt(e) && "length" in e && (!t && !e.length || e.length - 1 in e && gt(e[0])) && !e.nodeType && e !== at;
}, Cu = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(n) {
    var s;
    return fe(n) && !t || Ea(n, 1) ? (s = r).push.apply(s, He(n)) : r.push(n);
  }) || r;
}, He = function(e, t, r) {
  return H && !t && H.selector ? H.selector(e) : fe(e) && !r && (ji || !Xr()) ? Hi.call((t || gs).querySelectorAll(e), 0) : pe(e) ? Cu(e, r) : Ea(e) ? Hi.call(e, 0) : e ? [e] : [];
}, Ki = function(e) {
  return e = He(e)[0] || dn("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return He(t, r.querySelectorAll ? r : r === e ? dn("Invalid scope") || gs.createElement("div") : e);
  };
}, Ma = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Ra = function(e) {
  if (te(e))
    return e;
  var t = gt(e) ? e : {
    each: e
  }, r = dr(t.ease), n = t.from || 0, s = parseFloat(t.base) || 0, o = {}, a = n > 0 && n < 1, l = isNaN(n) || a, f = t.axis, u = n, c = n;
  return fe(n) ? u = c = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !a && l && (u = n[0], c = n[1]), function(h, _, p) {
    var d = (p || t).length, m = o[d], y, v, x, k, w, P, S, b, T;
    if (!m) {
      if (T = t.grid === "auto" ? 0 : (t.grid || [1, $e])[1], !T) {
        for (S = -$e; S < (S = p[T++].getBoundingClientRect().left) && T < d; )
          ;
        T < d && T--;
      }
      for (m = o[d] = [], y = l ? Math.min(T, d) * u - 0.5 : n % T, v = T === $e ? 0 : l ? d * c / T - 0.5 : n / T | 0, S = 0, b = $e, P = 0; P < d; P++)
        x = P % T - y, k = v - (P / T | 0), m[P] = w = f ? Math.abs(f === "y" ? k : x) : _a(x * x + k * k), w > S && (S = w), w < b && (b = w);
      n === "random" && Ma(m), m.max = S - b, m.min = b, m.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (T > d ? d - 1 : f ? f === "y" ? d / T : T : Math.max(T, d / T)) || 0) * (n === "edges" ? -1 : 1), m.b = d < 0 ? s - d : s, m.u = _e(t.amount || t.each) || 0, r = r && d < 0 ? Vu(r) : r;
    }
    return d = (m[h] - m.min) / m.max || 0, Q(m.b + (r ? r(d) : d) * m.v) + m.u;
  };
}, Qi = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var n = Q(Math.round(parseFloat(r) / e) * e * t);
    return (n - n % 1) / t + (Ot(r) ? 0 : _e(r));
  };
}, za = function(e, t) {
  var r = pe(e), n, s;
  return !r && gt(e) && (n = r = e.radius || $e, e.values ? (e = He(e.values), (s = !Ot(e[0])) && (n *= n)) : e = Qi(e.increment)), Ht(t, r ? te(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= n ? s : o;
  } : function(o) {
    for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), f = $e, u = 0, c = e.length, h, _; c--; )
      s ? (h = e[c].x - a, _ = e[c].y - l, h = h * h + _ * _) : h = Math.abs(e[c] - a), h < f && (f = h, u = c);
    return u = !n || f <= n ? e[u] : o, s || u === o || Ot(o) ? u : u + _e(o);
  } : Qi(e));
}, Da = function(e, t, r, n) {
  return Ht(pe(e) ? !t : r === !0 ? !!(r = 0) : !n, function() {
    return pe(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * n) / n;
  });
}, Pu = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduce(function(s, o) {
      return o(s);
    }, n);
  };
}, Ou = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || _e(r));
  };
}, Au = function(e, t, r) {
  return Fa(e, t, 0, 1, r);
}, Ia = function(e, t, r) {
  return Ht(r, function(n) {
    return e[~~t(n)];
  });
}, Eu = function i(e, t, r) {
  var n = t - e;
  return pe(e) ? Ia(e, i(0, e.length), t) : Ht(r, function(s) {
    return (n + (s - e) % n) % n + e;
  });
}, Mu = function i(e, t, r) {
  var n = t - e, s = n * 2;
  return pe(e) ? Ia(e, i(0, e.length - 1), t) : Ht(r, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > n ? s - o : o);
  });
}, pn = function(e) {
  return e.replace(uu, function(t) {
    var r = t.indexOf("[") + 1, n = t.substring(r || 7, r ? t.indexOf("]") : t.length - 1).split(cu);
    return Da(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5);
  });
}, Fa = function(e, t, r, n, s) {
  var o = t - e, a = n - r;
  return Ht(s, function(l) {
    return r + ((l - e) / o * a || 0);
  });
}, Ru = function i(e, t, r, n) {
  var s = isNaN(e + t) ? 0 : function(_) {
    return (1 - _) * e + _ * t;
  };
  if (!s) {
    var o = fe(e), a = {}, l, f, u, c, h;
    if (r === !0 && (n = 1) && (r = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (pe(e) && !pe(t)) {
      for (u = [], c = e.length, h = c - 2, f = 1; f < c; f++)
        u.push(i(e[f - 1], e[f]));
      c--, s = function(p) {
        p *= c;
        var d = Math.min(h, ~~p);
        return u[d](p - d);
      }, r = t;
    } else n || (e = Wr(pe(e) ? [] : {}, e));
    if (!u) {
      for (l in t)
        ks.call(a, e, l, "get", t[l]);
      s = function(p) {
        return Ps(p, a) || (o ? e.p : e);
      };
    }
  }
  return Ht(r, s);
}, so = function(e, t, r) {
  var n = e.labels, s = $e, o, a, l;
  for (o in n)
    a = n[o] - t, a < 0 == !!r && a && s > (a = Math.abs(a)) && (l = o, s = a);
  return l;
}, De = function(e, t, r) {
  var n = e.vars, s = n[t], o = H, a = e._ctx, l, f, u;
  if (s)
    return l = n[t + "Params"], f = n.callbackScope || e, r && Gt.length && ei(), a && (H = a), u = l ? s.apply(f, l) : s.call(f), H = o, u;
}, rn = function(e) {
  return jt(e), e.scrollTrigger && e.scrollTrigger.kill(!!ce), e.progress() < 1 && De(e, "onInterrupt"), e;
}, Pr, Na = [], La = function(e) {
  if (e)
    if (e = !e.name && e.default || e, ms() || e.headless) {
      var t = e.name, r = te(e), n = t && !r && e.init ? function() {
        this._props = [];
      } : e, s = {
        init: _n,
        render: Ps,
        add: ks,
        kill: Hu,
        modifier: $u,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Cs,
        aliases: {},
        register: 0
      };
      if (Xr(), e !== n) {
        if (Re[t])
          return;
        Be(n, Be(ti(e, s), o)), Wr(n.prototype, Wr(s, ti(e, o))), Re[n.prop = t] = n, e.targetTest && (jn.push(n), bs[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      ya(t, n), e.register && e.register(Ce, n, Te);
    } else
      Na.push(e);
}, W = 255, nn = {
  aqua: [0, W, W],
  lime: [0, W, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, W],
  navy: [0, 0, 128],
  white: [W, W, W],
  olive: [128, 128, 0],
  yellow: [W, W, 0],
  orange: [W, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [W, 0, 0],
  pink: [W, 192, 203],
  cyan: [0, W, W],
  transparent: [W, W, W, 0]
}, Ti = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * W + 0.5 | 0;
}, Va = function(e, t, r) {
  var n = e ? Ot(e) ? [e >> 16, e >> 8 & W, e & W] : 0 : nn.black, s, o, a, l, f, u, c, h, _, p;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), nn[e])
      n = nn[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & W, n & W, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & W, e & W];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = p = e.match(eo), !t)
        l = +n[0] % 360 / 360, f = +n[1] / 100, u = +n[2] / 100, o = u <= 0.5 ? u * (f + 1) : u + f - u * f, s = u * 2 - o, n.length > 3 && (n[3] *= 1), n[0] = Ti(l + 1 / 3, s, o), n[1] = Ti(l, s, o), n[2] = Ti(l - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return n = e.match(ma), r && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(eo) || nn.transparent;
    n = n.map(Number);
  }
  return t && !p && (s = n[0] / W, o = n[1] / W, a = n[2] / W, c = Math.max(s, o, a), h = Math.min(s, o, a), u = (c + h) / 2, c === h ? l = f = 0 : (_ = c - h, f = u > 0.5 ? _ / (2 - c - h) : _ / (c + h), l = c === s ? (o - a) / _ + (o < a ? 6 : 0) : c === o ? (a - s) / _ + 2 : (s - o) / _ + 4, l *= 60), n[0] = ~~(l + 0.5), n[1] = ~~(f * 100 + 0.5), n[2] = ~~(u * 100 + 0.5)), r && n.length < 4 && (n[3] = 1), n;
}, Ba = function(e) {
  var t = [], r = [], n = -1;
  return e.split(Ut).forEach(function(s) {
    var o = s.match(Cr) || [];
    t.push.apply(t, o), r.push(n += o.length + 1);
  }), t.c = r, t;
}, oo = function(e, t, r) {
  var n = "", s = (e + n).match(Ut), o = t ? "hsla(" : "rgba(", a = 0, l, f, u, c;
  if (!s)
    return e;
  if (s = s.map(function(h) {
    return (h = Va(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (u = Ba(e), l = r.c, l.join(n) !== u.c.join(n)))
    for (f = e.replace(Ut, "1").split(Cr), c = f.length - 1; a < c; a++)
      n += f[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : r).shift());
  if (!f)
    for (f = e.split(Ut), c = f.length - 1; a < c; a++)
      n += f[a] + s[a];
  return n + f[c];
}, Ut = (function() {
  var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in nn)
    i += "|" + e + "\\b";
  return new RegExp(i + ")", "gi");
})(), zu = /hsl[a]?\(/, Ga = function(e) {
  var t = e.join(" "), r;
  if (Ut.lastIndex = 0, Ut.test(t))
    return r = zu.test(t), e[1] = oo(e[1], r), e[0] = oo(e[0], r, Ba(e[1])), !0;
}, mn, ze = (function() {
  var i = Date.now, e = 500, t = 33, r = i(), n = r, s = 1e3 / 240, o = s, a = [], l, f, u, c, h, _, p = function d(m) {
    var y = i() - n, v = m === !0, x, k, w, P;
    if ((y > e || y < 0) && (r += y - t), n += y, w = n - r, x = w - o, (x > 0 || v) && (P = ++c.frame, h = w - c.time * 1e3, c.time = w = w / 1e3, o += x + (x >= s ? 4 : s - x), k = 1), v || (l = f(d)), k)
      for (_ = 0; _ < a.length; _++)
        a[_](w, h, P, m);
  };
  return c = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return h / (1e3 / (m || 60));
    },
    wake: function() {
      va && (!ji && ms() && (at = ji = window, gs = at.document || {}, Ve.gsap = Ce, (at.gsapVersions || (at.gsapVersions = [])).push(Ce.version), ba(Jn || at.GreenSockGlobals || !at.gsap && at || {}), Na.forEach(La)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && c.sleep(), f = u || function(m) {
        return setTimeout(m, o - c.time * 1e3 + 1 | 0);
      }, mn = 1, p(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(l), mn = 0, f = _n;
    },
    lagSmoothing: function(m, y) {
      e = m || 1 / 0, t = Math.min(y || 33, e);
    },
    fps: function(m) {
      s = 1e3 / (m || 240), o = c.time * 1e3 + s;
    },
    add: function(m, y, v) {
      var x = y ? function(k, w, P, S) {
        m(k, w, P, S), c.remove(x);
      } : m;
      return c.remove(m), a[v ? "unshift" : "push"](x), Xr(), x;
    },
    remove: function(m, y) {
      ~(y = a.indexOf(m)) && a.splice(y, 1) && _ >= y && _--;
    },
    _listeners: a
  }, c;
})(), Xr = function() {
  return !mn && ze.wake();
}, F = {}, Du = /^[\d.\-M][\d.\-,\s]/, Iu = /["']/g, Fu = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), n = r[0], s = 1, o = r.length, a, l, f; s < o; s++)
    l = r[s], a = s !== o - 1 ? l.lastIndexOf(",") : l.length, f = l.substr(0, a), t[n] = isNaN(f) ? f.replace(Iu, "").trim() : +f, n = l.substr(a + 1).trim();
  return t;
}, Nu = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", t);
  return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
}, Lu = function(e) {
  var t = (e + "").split("("), r = F[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Fu(t[1])] : Nu(e).split(",").map(Ta)) : F._CE && Du.test(e) ? F._CE("", e) : r;
}, Vu = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, dr = function(e, t) {
  return e && (te(e) ? e : F[e] || Lu(e)) || t;
}, gr = function(e, t, r, n) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), n === void 0 && (n = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: t,
    easeOut: r,
    easeInOut: n
  }, o;
  return ke(e, function(a) {
    F[a] = Ve[a] = s, F[o = a.toLowerCase()] = r;
    for (var l in s)
      F[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = F[a + "." + l] = s[l];
  }), s;
}, Ua = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Si = function i(e, t, r) {
  var n = t >= 1 ? t : 1, s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = s / Wi * (Math.asin(1 / n) || 0), a = function(u) {
    return u === 1 ? 1 : n * Math.pow(2, -10 * u) * fu((u - o) * s) + 1;
  }, l = e === "out" ? a : e === "in" ? function(f) {
    return 1 - a(1 - f);
  } : Ua(a);
  return s = Wi / s, l.config = function(f, u) {
    return i(e, f, u);
  }, l;
}, Ci = function i(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, n = e === "out" ? r : e === "in" ? function(s) {
    return 1 - r(1 - s);
  } : Ua(r);
  return n.config = function(s) {
    return i(e, s);
  }, n;
};
ke("Linear,Quad,Cubic,Quart,Quint,Strong", function(i, e) {
  var t = e < 5 ? e + 1 : e;
  gr(i + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
F.Linear.easeNone = F.none = F.Linear.easeIn;
gr("Elastic", Si("in"), Si("out"), Si());
(function(i, e) {
  var t = 1 / e, r = 2 * t, n = 2.5 * t, s = function(a) {
    return a < t ? i * a * a : a < r ? i * Math.pow(a - 1.5 / e, 2) + 0.75 : a < n ? i * (a -= 2.25 / e) * a + 0.9375 : i * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  gr("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
gr("Expo", function(i) {
  return Math.pow(2, 10 * (i - 1)) * i + i * i * i * i * i * i * (1 - i);
});
gr("Circ", function(i) {
  return -(_a(1 - i * i) - 1);
});
gr("Sine", function(i) {
  return i === 1 ? 1 : -lu(i * ou) + 1;
});
gr("Back", Ci("in"), Ci("out"), Ci());
F.SteppedEase = F.steps = Ve.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, n = e + (t ? 0 : 1), s = t ? 1 : 0, o = 1 - j;
    return function(a) {
      return ((n * Pn(0, o, a) | 0) + s) * r;
    };
  }
};
hn.ease = F["quad.out"];
ke("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(i) {
  return ys += i + "," + i + "Params,";
});
var Ya = function(e, t) {
  this.id = au++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : xa, this.set = t ? t.getSetter : Cs;
}, gn = /* @__PURE__ */ (function() {
  function i(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, qr(this, +t.duration, 1, 1), this.data = t.data, H && (this._ctx = H, H.data.push(this)), mn || ze.wake();
  }
  var e = i.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, qr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, n) {
    if (Xr(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (mi(this, r), !s._dp || s.parent || Pa(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ct(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === j || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), ka(this, r, n)), this;
  }, e.time = function(r, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + no(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(r, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + no(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, n) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, n) : this._repeat ? jr(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(r, n) {
    if (!arguments.length)
      return this._rts === -j ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var s = this.parent && this._ts ? ri(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -j ? 0 : this._rts, this.totalTime(Pn(-Math.abs(this._delay), this.totalDuration(), s), n !== !1), pi(this), bu(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Xr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== j && (this._tTime -= j)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = Q(r);
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && ct(n, this, this._start - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (xe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var n = this.parent || this._dp;
    return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ri(n.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = pu);
    var n = ce;
    return ce = r, xs(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), ce = n, this;
  }, e.globalTime = function(r) {
    for (var n = this, s = arguments.length ? r : n.rawTime(); n; )
      s = n._start + s / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : s;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, io(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = r, io(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, n) {
    return this.totalTime(Ge(this, r), xe(n));
  }, e.restart = function(r, n) {
    return this.play().totalTime(r ? -this._delay : 0, xe(n)), this._dur || (this._zTime = -j), this;
  }, e.play = function(r, n) {
    return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, n) {
    return r != null && this.seek(r || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(r, n) {
    return r != null && this.seek(r, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -j : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -j, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, n = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= n && s < this.endTime(!0) - j);
  }, e.eventCallback = function(r, n, s) {
    var o = this.vars;
    return arguments.length > 1 ? (n ? (o[r] = n, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = n)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var n = this, s = n._prom;
    return new Promise(function(o) {
      var a = te(r) ? r : Sa, l = function() {
        var u = n.then;
        n.then = null, s && s(), te(a) && (a = a(n)) && (a.then || a === n) && (n.then = u), o(a), n.then = u;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? l() : n._prom = l;
    });
  }, e.kill = function() {
    rn(this);
  }, i;
})();
Be(gn.prototype, {
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
  _zTime: -j,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var we = /* @__PURE__ */ (function(i) {
  da(e, i);
  function e(r, n) {
    var s;
    return r === void 0 && (r = {}), s = i.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = xe(r.sortChildren), Z && ct(r.parent || Z, wt(s), n), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Oa(wt(s), r.scrollTrigger), s;
  }
  var t = e.prototype;
  return t.to = function(n, s, o) {
    return fn(0, arguments, this), this;
  }, t.from = function(n, s, o) {
    return fn(1, arguments, this), this;
  }, t.fromTo = function(n, s, o, a) {
    return fn(2, arguments, this), this;
  }, t.set = function(n, s, o) {
    return s.duration = 0, s.parent = this, ln(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new ie(n, s, Ge(this, o), 1), this;
  }, t.call = function(n, s, o) {
    return ct(this, ie.delayedCall(0, n, s), o);
  }, t.staggerTo = function(n, s, o, a, l, f, u) {
    return o.duration = s, o.stagger = o.stagger || a, o.onComplete = f, o.onCompleteParams = u, o.parent = this, new ie(n, o, Ge(this, l)), this;
  }, t.staggerFrom = function(n, s, o, a, l, f, u) {
    return o.runBackwards = 1, ln(o).immediateRender = xe(o.immediateRender), this.staggerTo(n, s, o, a, l, f, u);
  }, t.staggerFromTo = function(n, s, o, a, l, f, u, c) {
    return a.startAt = o, ln(a).immediateRender = xe(a.immediateRender), this.staggerTo(n, s, a, l, f, u, c);
  }, t.render = function(n, s, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, u = n <= 0 ? 0 : Q(n), c = this._zTime < 0 != n < 0 && (this._initted || !f), h, _, p, d, m, y, v, x, k, w, P, S;
    if (this !== Z && u > l && n >= 0 && (u = l), u !== this._tTime || o || c) {
      if (a !== this._time && f && (u += this._time - a, n += this._time - a), h = u, k = this._start, x = this._ts, y = !x, c && (f || (a = this._zTime), (n || !s) && (this._zTime = n)), this._repeat) {
        if (P = this._yoyo, m = f + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(m * 100 + n, s, o);
        if (h = Q(u % m), u === l ? (d = this._repeat, h = f) : (w = Q(u / m), d = ~~w, d && d === w && (h = f, d--), h > f && (h = f)), w = jr(this._tTime, m), !a && this._tTime && w !== d && this._tTime - w * m - this._dur <= 0 && (w = d), P && d & 1 && (h = f - h, S = 1), d !== w && !this._lock) {
          var b = P && w & 1, T = b === (P && d & 1);
          if (d < w && (b = !b), a = b ? 0 : u % f ? f : u, this._lock = 1, this.render(a || (S ? 0 : Q(d * m)), s, !f)._lock = 0, this._tTime = u, !s && this.parent && De(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1, w = d), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, l = this._tDur, T && (this._lock = 2, a = b ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = ku(this, Q(a), Q(h)), v && (u -= h - (h = v._start))), this._tTime = u, this._time = h, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, a = 0), !a && u && f && !s && !w && (De(this, "onStart"), this._tTime !== u))
        return this;
      if (h >= a && n >= 0)
        for (_ = this._first; _; ) {
          if (p = _._next, (_._act || h >= _._start) && _._ts && v !== _) {
            if (_.parent !== this)
              return this.render(n, s, o);
            if (_.render(_._ts > 0 ? (h - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (h - _._start) * _._ts, s, o), h !== this._time || !this._ts && !y) {
              v = 0, p && (u += this._zTime = -j);
              break;
            }
          }
          _ = p;
        }
      else {
        _ = this._last;
        for (var E = n < 0 ? n : h; _; ) {
          if (p = _._prev, (_._act || E <= _._end) && _._ts && v !== _) {
            if (_.parent !== this)
              return this.render(n, s, o);
            if (_.render(_._ts > 0 ? (E - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (E - _._start) * _._ts, s, o || ce && xs(_)), h !== this._time || !this._ts && !y) {
              v = 0, p && (u += this._zTime = E ? -j : j);
              break;
            }
          }
          _ = p;
        }
      }
      if (v && !s && (this.pause(), v.render(h >= a ? 0 : -j)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = k, pi(this), this.render(n, s, o);
      this._onUpdate && !s && De(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (k === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((n || !f) && (u === l && this._ts > 0 || !u && this._ts < 0) && jt(this, 1), !s && !(n < 0 && !a) && (u || a || !l) && (De(this, u === l && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(n, s) {
    var o = this;
    if (Ot(s) || (s = Ge(this, s, n)), !(n instanceof gn)) {
      if (pe(n))
        return n.forEach(function(a) {
          return o.add(a, s);
        }), this;
      if (fe(n))
        return this.addLabel(n, s);
      if (te(n))
        n = ie.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? ct(this, n, s) : this;
  }, t.getChildren = function(n, s, o, a) {
    n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -$e);
    for (var l = [], f = this._first; f; )
      f._start >= a && (f instanceof ie ? s && l.push(f) : (o && l.push(f), n && l.push.apply(l, f.getChildren(!0, s, o)))), f = f._next;
    return l;
  }, t.getById = function(n) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === n)
        return s[o];
  }, t.remove = function(n) {
    return fe(n) ? this.removeLabel(n) : te(n) ? this.killTweensOf(n) : (n.parent === this && _i(this, n), n === this._recent && (this._recent = this._last), hr(this));
  }, t.totalTime = function(n, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Q(ze.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), i.prototype.totalTime.call(this, n, s), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(n, s) {
    return this.labels[n] = Ge(this, s), this;
  }, t.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, t.addPause = function(n, s, o) {
    var a = ie.delayedCall(0, s || _n, o);
    return a.data = "isPause", this._hasPause = 1, ct(this, a, Ge(this, n));
  }, t.removePause = function(n) {
    var s = this._first;
    for (n = Ge(this, n); s; )
      s._start === n && s.data === "isPause" && jt(s), s = s._next;
  }, t.killTweensOf = function(n, s, o) {
    for (var a = this.getTweensOf(n, o), l = a.length; l--; )
      Nt !== a[l] && a[l].kill(n, s);
    return this;
  }, t.getTweensOf = function(n, s) {
    for (var o = [], a = He(n), l = this._first, f = Ot(s), u; l; )
      l instanceof ie ? mu(l._targets, a) && (f ? (!Nt || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u), l = l._next;
    return o;
  }, t.tweenTo = function(n, s) {
    s = s || {};
    var o = this, a = Ge(o, n), l = s, f = l.startAt, u = l.onStart, c = l.onStartParams, h = l.immediateRender, _, p = ie.to(o, Be({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: s.duration || Math.abs((a - (f && "time" in f ? f.time : o._time)) / o.timeScale()) || j,
      onStart: function() {
        if (o.pause(), !_) {
          var m = s.duration || Math.abs((a - (f && "time" in f ? f.time : o._time)) / o.timeScale());
          p._dur !== m && qr(p, m, 0, 1).render(p._time, !0, !0), _ = 1;
        }
        u && u.apply(p, c || []);
      }
    }, s));
    return h ? p.render(0) : p;
  }, t.tweenFromTo = function(n, s, o) {
    return this.tweenTo(s, Be({
      startAt: {
        time: Ge(this, n)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(n) {
    return n === void 0 && (n = this._time), so(this, Ge(this, n));
  }, t.previousLabel = function(n) {
    return n === void 0 && (n = this._time), so(this, Ge(this, n), 1);
  }, t.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + j);
  }, t.shiftChildren = function(n, s, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, f;
    for (n = Q(n); a; )
      a._start >= o && (a._start += n, a._end += n), a = a._next;
    if (s)
      for (f in l)
        l[f] >= o && (l[f] += n);
    return hr(this);
  }, t.invalidate = function(n) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(n), s = s._next;
    return i.prototype.invalidate.call(this, n);
  }, t.clear = function(n) {
    n === void 0 && (n = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), hr(this);
  }, t.totalDuration = function(n) {
    var s = 0, o = this, a = o._last, l = $e, f, u, c;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -n : n));
    if (o._dirty) {
      for (c = o.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, ct(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (s -= u, (!c && !o._dp || c && c.smoothChildTiming) && (o._start += Q(u / o._ts), o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > s && a._ts && (s = a._end), a = f;
      qr(o, o === Z && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(n) {
    if (Z._ts && (ka(Z, ri(n, Z)), wa = ze.frame), ze.frame >= to) {
      to += Ne.autoSleep || 120;
      var s = Z._first;
      if ((!s || !s._ts) && Ne.autoSleep && ze._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || ze.sleep();
      }
    }
  }, e;
})(gn);
Be(we.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Bu = function(e, t, r, n, s, o, a) {
  var l = new Te(this._pt, e, t, 0, 1, Ha, null, s), f = 0, u = 0, c, h, _, p, d, m, y, v;
  for (l.b = r, l.e = n, r += "", n += "", (y = ~n.indexOf("random(")) && (n = pn(n)), o && (v = [r, n], o(v, e, t), r = v[0], n = v[1]), h = r.match(xi) || []; c = xi.exec(n); )
    p = c[0], d = n.substring(f, c.index), _ ? _ = (_ + 1) % 5 : d.substr(-5) === "rgba(" && (_ = 1), p !== h[u++] && (m = parseFloat(h[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || u === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? Ar(m, p) - m : parseFloat(p) - m,
      m: _ && _ < 4 ? Math.round : 0
    }, f = xi.lastIndex);
  return l.c = f < n.length ? n.substring(f, n.length) : "", l.fp = a, (ga.test(n) || y) && (l.e = 0), this._pt = l, l;
}, ks = function(e, t, r, n, s, o, a, l, f, u) {
  te(n) && (n = n(s || 0, e, o));
  var c = e[t], h = r !== "get" ? r : te(c) ? f ? e[t.indexOf("set") || !te(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](f) : e[t]() : c, _ = te(c) ? f ? ju : Xa : Ss, p;
  if (fe(n) && (~n.indexOf("random(") && (n = pn(n)), n.charAt(1) === "=" && (p = Ar(h, n) + (_e(h) || 0), (p || p === 0) && (n = p))), !u || h !== n || Zi)
    return !isNaN(h * n) && n !== "" ? (p = new Te(this._pt, e, t, +h || 0, n - (h || 0), typeof c == "boolean" ? Xu : $a, 0, _), f && (p.fp = f), a && p.modifier(a, this, e), this._pt = p) : (!c && !(t in e) && vs(t, n), Bu.call(this, e, t, h, n, _, l || Ne.stringFilter, f));
}, Gu = function(e, t, r, n, s) {
  if (te(e) && (e = un(e, s, t, r, n)), !gt(e) || e.style && e.nodeType || pe(e) || pa(e))
    return fe(e) ? un(e, s, t, r, n) : e;
  var o = {}, a;
  for (a in e)
    o[a] = un(e[a], s, t, r, n);
  return o;
}, Wa = function(e, t, r, n, s, o) {
  var a, l, f, u;
  if (Re[e] && (a = new Re[e]()).init(s, a.rawVars ? t[e] : Gu(t[e], n, s, o, r), r, n, o) !== !1 && (r._pt = l = new Te(r._pt, s, e, 0, 1, a.render, a, 0, a.priority), r !== Pr))
    for (f = r._ptLookup[r._targets.indexOf(s)], u = a._props.length; u--; )
      f[a._props[u]] = l;
  return a;
}, Nt, Zi, Ts = function i(e, t, r) {
  var n = e.vars, s = n.ease, o = n.startAt, a = n.immediateRender, l = n.lazy, f = n.onUpdate, u = n.runBackwards, c = n.yoyoEase, h = n.keyframes, _ = n.autoRevert, p = e._dur, d = e._startAt, m = e._targets, y = e.parent, v = y && y.data === "nested" ? y.vars.targets : m, x = e._overwrite === "auto" && !_s, k = e.timeline, w = n.easeReverse || c, P, S, b, T, E, $, U, Y, q, X, L, G, de;
  if (k && (!h || !s) && (s = "none"), e._ease = dr(s, hn.ease), e._rEase = w && (dr(w) || e._ease), e._from = !k && !!n.runBackwards, e._from && (e.ratio = 1), !k || h && !n.stagger) {
    if (Y = m[0] ? cr(m[0]).harness : 0, G = Y && n[Y.prop], P = ti(n, bs), d && (d._zTime < 0 && d.progress(1), t < 0 && u && a && !_ ? d.render(-1, !0) : d.revert(u && p ? Wn : _u), d._lazy = 0), o) {
      if (jt(e._startAt = ie.set(m, Be({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !d && xe(l),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return De(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ce || !a && !_) && e._startAt.revert(Wn), a && p && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (u && p && !d) {
      if (t && (a = !1), b = Be({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !d && xe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, P), G && (b[Y.prop] = G), jt(e._startAt = ie.set(m, b)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ce ? e._startAt.revert(Wn) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        i(e._startAt, j, j);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = p && xe(l) || l && !p, S = 0; S < m.length; S++) {
      if (E = m[S], U = E._gsap || ws(m)[S]._gsap, e._ptLookup[S] = X = {}, qi[U.id] && Gt.length && ei(), L = v === m ? S : v.indexOf(E), Y && (q = new Y()).init(E, G || P, e, L, v) !== !1 && (e._pt = T = new Te(e._pt, E, q.name, 0, 1, q.render, q, 0, q.priority), q._props.forEach(function(nt) {
        X[nt] = T;
      }), q.priority && ($ = 1)), !Y || G)
        for (b in P)
          Re[b] && (q = Wa(b, P, e, L, E, v)) ? q.priority && ($ = 1) : X[b] = T = ks.call(e, E, b, "get", P[b], L, v, 0, n.stringFilter);
      e._op && e._op[S] && e.kill(E, e._op[S]), x && e._pt && (Nt = e, Z.killTweensOf(E, X, e.globalTime(t)), de = !e.parent, Nt = 0), e._pt && l && (qi[U.id] = 1);
    }
    $ && Ka(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = f, e._initted = (!e._op || e._pt) && !de, h && t <= 0 && k.render($e, !0, !0);
}, Uu = function(e, t, r, n, s, o, a, l) {
  var f = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, c, h, _;
  if (!f)
    for (f = e._ptCache[t] = [], h = e._ptLookup, _ = e._targets.length; _--; ) {
      if (u = h[_][t], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
          u = u._next;
      if (!u)
        return Zi = 1, e.vars[t] = "+=0", Ts(e, a), Zi = 0, l ? dn(t + " not eligible for reset. Try splitting into individual properties") : 1;
      f.push(u);
    }
  for (_ = f.length; _--; )
    c = f[_], u = c._pt || c, u.s = (n || n === 0) && !s ? n : u.s + (n || 0) + o * u.c, u.c = r - u.s, c.e && (c.e = ne(r) + _e(c.e)), c.b && (c.b = u.s + _e(c.b));
}, Yu = function(e, t) {
  var r = e[0] ? cr(e[0]).harness : 0, n = r && r.aliases, s, o, a, l;
  if (!n)
    return t;
  s = Wr({}, t);
  for (o in n)
    if (o in s)
      for (l = n[o].split(","), a = l.length; a--; )
        s[l[a]] = s[o];
  return s;
}, Wu = function(e, t, r, n) {
  var s = t.ease || n || "power1.inOut", o, a;
  if (pe(t))
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
}, un = function(e, t, r, n, s) {
  return te(e) ? e.call(t, r, n, s) : fe(e) && ~e.indexOf("random(") ? pn(e) : e;
}, ja = ys + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", qa = {};
ke(ja + ",id,stagger,delay,duration,paused,scrollTrigger", function(i) {
  return qa[i] = 1;
});
var ie = /* @__PURE__ */ (function(i) {
  da(e, i);
  function e(r, n, s, o) {
    var a;
    typeof n == "number" && (s.duration = n, n = s, s = null), a = i.call(this, o ? n : ln(n)) || this;
    var l = a.vars, f = l.duration, u = l.delay, c = l.immediateRender, h = l.stagger, _ = l.overwrite, p = l.keyframes, d = l.defaults, m = l.scrollTrigger, y = n.parent || Z, v = (pe(r) || pa(r) ? Ot(r[0]) : "length" in n) ? [r] : He(r), x, k, w, P, S, b, T, E;
    if (a._targets = v.length ? ws(v) : dn("GSAP target " + r + " not found. https://gsap.com", !Ne.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = _, p || h || Fn(f) || Fn(u)) {
      n = a.vars;
      var $ = n.easeReverse || n.yoyoEase;
      if (x = a.timeline = new we({
        data: "nested",
        defaults: d || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), x.kill(), x.parent = x._dp = wt(a), x._start = 0, h || Fn(f) || Fn(u)) {
        if (P = v.length, T = h && Ra(h), gt(h))
          for (S in h)
            ~ja.indexOf(S) && (E || (E = {}), E[S] = h[S]);
        for (k = 0; k < P; k++)
          w = ti(n, qa), w.stagger = 0, $ && (w.easeReverse = $), E && Wr(w, E), b = v[k], w.duration = +un(f, wt(a), k, b, v), w.delay = (+un(u, wt(a), k, b, v) || 0) - a._delay, !h && P === 1 && w.delay && (a._delay = u = w.delay, a._start += u, w.delay = 0), x.to(b, w, T ? T(k, b, v) : 0), x._ease = F.none;
        x.duration() ? f = u = 0 : a.timeline = 0;
      } else if (p) {
        ln(Be(x.vars.defaults, {
          ease: "none"
        })), x._ease = dr(p.ease || n.ease || "none");
        var U = 0, Y, q, X;
        if (pe(p))
          p.forEach(function(L) {
            return x.to(v, L, ">");
          }), x.duration();
        else {
          w = {};
          for (S in p)
            S === "ease" || S === "easeEach" || Wu(S, p[S], w, p.easeEach);
          for (S in w)
            for (Y = w[S].sort(function(L, G) {
              return L.t - G.t;
            }), U = 0, k = 0; k < Y.length; k++)
              q = Y[k], X = {
                ease: q.e,
                duration: (q.t - (k ? Y[k - 1].t : 0)) / 100 * f
              }, X[S] = q.v, x.to(v, X, U), U += X.duration;
          x.duration() < f && x.to({}, {
            duration: f - x.duration()
          });
        }
      }
      f || a.duration(f = x.duration());
    } else
      a.timeline = 0;
    return _ === !0 && !_s && (Nt = wt(a), Z.killTweensOf(v), Nt = 0), ct(y, wt(a), s), n.reversed && a.reverse(), n.paused && a.paused(!0), (c || !f && !p && a._start === Q(y._time) && xe(c) && yu(wt(a)) && y.data !== "nested") && (a._tTime = -j, a.render(Math.max(0, -u) || 0)), m && Oa(wt(a), m), a;
  }
  var t = e.prototype;
  return t.render = function(n, s, o) {
    var a = this._time, l = this._tDur, f = this._dur, u = n < 0, c = n > l - j && !u ? l : n < j ? 0 : n, h, _, p, d, m, y, v, x;
    if (!f)
      xu(this, n, s, o);
    else if (c !== this._tTime || !n || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (h = c, x = this.timeline, this._repeat) {
        if (d = f + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(d * 100 + n, s, o);
        if (h = Q(c % d), c === l ? (p = this._repeat, h = f) : (m = Q(c / d), p = ~~m, p && p === m ? (h = f, p--) : h > f && (h = f)), y = this._yoyo && p & 1, y && (h = f - h), m = jr(this._tTime, d), h === a && !o && this._initted && p === m)
          return this._tTime = c, this;
        p !== m && this.vars.repeatRefresh && !y && !this._lock && h !== d && this._initted && (this._lock = o = 1, this.render(Q(d * p), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Aa(this, u ? n : h, o, s, c))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && p !== m))
          return this;
        if (f !== this._dur)
          return this.render(n, s, o);
      }
      if (this._rEase) {
        var k = h < a;
        if (k !== this._inv) {
          var w = k ? a : f - a;
          this._inv = k, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = w ? (k ? -1 : 1) / w : 0, this._invScale = k ? -this.ratio : 1 - this.ratio, this._invEase = k ? this._rEase : this._ease;
        }
        this.ratio = v = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip);
      } else
        this.ratio = v = this._ease(h / f);
      if (this._from && (this.ratio = v = 1 - v), this._tTime = c, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && c && !s && !m && (De(this, "onStart"), this._tTime !== c))
        return this;
      for (_ = this._pt; _; )
        _.r(v, _.d), _ = _._next;
      x && x.render(n < 0 ? n : x._dur * x._ease(h / this._dur), s, o) || this._startAt && (this._zTime = n), this._onUpdate && !s && (u && Xi(this, n, s, o), De(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !s && this.parent && De(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (u && !this._onUpdate && Xi(this, n, !0, !0), (n || !f) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && jt(this, 1), !s && !(u && !a) && (c || a || y) && (De(this, c === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), i.prototype.invalidate.call(this, n);
  }, t.resetTo = function(n, s, o, a, l) {
    mn || ze.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || Ts(this, f), u = this._ease(f / this._dur), Uu(this, n, s, o, a, u, f, l) ? this.resetTo(n, s, o, a, 1) : (mi(this, 0), this.parent || Ca(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(n, s) {
    if (s === void 0 && (s = "all"), !n && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? rn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!ce), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, s, Nt && Nt.vars.overwrite !== !0)._first || rn(this), this.parent && o !== this.timeline.totalDuration() && qr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = n ? He(n) : a, f = this._ptLookup, u = this._pt, c, h, _, p, d, m, y;
    if ((!s || s === "all") && vu(a, l))
      return s === "all" && (this._pt = 0), rn(this);
    for (c = this._op = this._op || [], s !== "all" && (fe(s) && (d = {}, ke(s, function(v) {
      return d[v] = 1;
    }), s = d), s = Yu(a, s)), y = a.length; y--; )
      if (~l.indexOf(a[y])) {
        h = f[y], s === "all" ? (c[y] = s, p = h, _ = {}) : (_ = c[y] = c[y] || {}, p = s);
        for (d in p)
          m = h && h[d], m && ((!("kill" in m.d) || m.d.kill(d) === !0) && _i(this, m, "_pt"), delete h[d]), _ !== "all" && (_[d] = 1);
      }
    return this._initted && !this._pt && u && rn(this), this;
  }, e.to = function(n, s) {
    return new e(n, s, arguments[2]);
  }, e.from = function(n, s) {
    return fn(1, arguments);
  }, e.delayedCall = function(n, s, o, a) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(n, s, o) {
    return fn(2, arguments);
  }, e.set = function(n, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(n, s);
  }, e.killTweensOf = function(n, s, o) {
    return Z.killTweensOf(n, s, o);
  }, e;
})(gn);
Be(ie.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ke("staggerTo,staggerFrom,staggerFromTo", function(i) {
  ie[i] = function() {
    var e = new we(), t = Hi.call(arguments, 0);
    return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var Ss = function(e, t, r) {
  return e[t] = r;
}, Xa = function(e, t, r) {
  return e[t](r);
}, ju = function(e, t, r, n) {
  return e[t](n.fp, r);
}, qu = function(e, t, r) {
  return e.setAttribute(t, r);
}, Cs = function(e, t) {
  return te(e[t]) ? Xa : ps(e[t]) && e.setAttribute ? qu : Ss;
}, $a = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Xu = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Ha = function(e, t) {
  var r = t._pt, n = "";
  if (!e && t.b)
    n = t.b;
  else if (e === 1 && t.e)
    n = t.e;
  else {
    for (; r; )
      n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n, r = r._next;
    n += t.c;
  }
  t.set(t.t, t.p, n, t);
}, Ps = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, $u = function(e, t, r, n) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === n && s.modifier(e, t, r), s = o;
}, Hu = function(e) {
  for (var t = this._pt, r, n; t; )
    n = t._next, t.p === e && !t.op || t.op === e ? _i(this, t, "_pt") : t.dep || (r = 1), t = n;
  return !r;
}, Ku = function(e, t, r, n) {
  n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
}, Ka = function(e) {
  for (var t = e._pt, r, n, s, o; t; ) {
    for (r = t._next, n = s; n && n.pr > t.pr; )
      n = n._next;
    (t._prev = n ? n._prev : o) ? t._prev._next = t : s = t, (t._next = n) ? n._prev = t : o = t, t = r;
  }
  e._pt = s;
}, Te = /* @__PURE__ */ (function() {
  function i(t, r, n, s, o, a, l, f, u) {
    this.t = r, this.s = s, this.c = o, this.p = n, this.r = a || $a, this.d = l || this, this.set = f || Ss, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = i.prototype;
  return e.modifier = function(r, n, s) {
    this.mSet = this.mSet || this.set, this.set = Ku, this.m = r, this.mt = s, this.tween = n;
  }, i;
})();
ke(ys + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(i) {
  return bs[i] = 1;
});
Ve.TweenMax = Ve.TweenLite = ie;
Ve.TimelineLite = Ve.TimelineMax = we;
Z = new we({
  sortChildren: !1,
  defaults: hn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ne.stringFilter = Ga;
var _r = [], qn = {}, Qu = [], ao = 0, Zu = 0, Pi = function(e) {
  return (qn[e] || Qu).map(function(t) {
    return t();
  });
}, Ji = function() {
  var e = Date.now(), t = [];
  e - ao > 2 && (Pi("matchMediaInit"), _r.forEach(function(r) {
    var n = r.queries, s = r.conditions, o, a, l, f;
    for (a in n)
      o = at.matchMedia(n[a]).matches, o && (l = 1), o !== s[a] && (s[a] = o, f = 1);
    f && (r.revert(), l && t.push(r));
  }), Pi("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(n) {
      return r.add(null, n);
    });
  }), ao = e, Pi("matchMedia"));
}, Qa = /* @__PURE__ */ (function() {
  function i(t, r) {
    this.selector = r && Ki(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Zu++, t && this.add(t);
  }
  var e = i.prototype;
  return e.add = function(r, n, s) {
    te(r) && (s = n, n = r, r = te);
    var o = this, a = function() {
      var f = H, u = o.selector, c;
      return f && f !== o && f.data.push(o), s && (o.selector = Ki(s)), H = o, c = n.apply(o, arguments), te(c) && o._r.push(c), H = f, o.selector = u, o.isReverted = !1, c;
    };
    return o.last = a, r === te ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, e.ignore = function(r) {
    var n = H;
    H = null, r(this), H = n;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(n) {
      return n instanceof i ? r.push.apply(r, n.getTweens()) : n instanceof ie && !(n.parent && n.parent.data === "nested") && r.push(n);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, n) {
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
        f = s.data[l], f instanceof we ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof ie) && f.revert && f.revert(r);
      s._r.forEach(function(u) {
        return u(r, s);
      }), s.isReverted = !0;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), n)
      for (var o = _r.length; o--; )
        _r[o].id === this.id && _r.splice(o, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, i;
})(), Ju = /* @__PURE__ */ (function() {
  function i(t) {
    this.contexts = [], this.scope = t, H && H.data.push(this);
  }
  var e = i.prototype;
  return e.add = function(r, n, s) {
    gt(r) || (r = {
      matches: r
    });
    var o = new Qa(0, s || this.scope), a = o.conditions = {}, l, f, u;
    H && !o.selector && (o.selector = H.selector), this.contexts.push(o), n = o.add("onMatch", n), o.queries = r;
    for (f in r)
      f === "all" ? u = 1 : (l = at.matchMedia(r[f]), l && (_r.indexOf(o) < 0 && _r.push(o), (a[f] = l.matches) && (u = 1), l.addListener ? l.addListener(Ji) : l.addEventListener("change", Ji)));
    return u && n(o, function(c) {
      return o.add(null, c);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(n) {
      return n.kill(r, !0);
    });
  }, i;
})(), ni = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(n) {
      return La(n);
    });
  },
  timeline: function(e) {
    return new we(e);
  },
  getTweensOf: function(e, t) {
    return Z.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, n) {
    fe(e) && (e = He(e)[0]);
    var s = cr(e || {}).get, o = r ? Sa : Ta;
    return r === "native" && (r = ""), e && (t ? o((Re[t] && Re[t].get || s)(e, t, r, n)) : function(a, l, f) {
      return o((Re[a] && Re[a].get || s)(e, a, l, f));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = He(e), e.length > 1) {
      var n = e.map(function(u) {
        return Ce.quickSetter(u, t, r);
      }), s = n.length;
      return function(u) {
        for (var c = s; c--; )
          n[c](u);
      };
    }
    e = e[0] || {};
    var o = Re[t], a = cr(e), l = a.harness && (a.harness.aliases || {})[t] || t, f = o ? function(u) {
      var c = new o();
      Pr._pt = 0, c.init(e, r ? u + r : u, Pr, 0, [e]), c.render(1, c), Pr._pt && Ps(1, Pr);
    } : a.set(e, l);
    return o ? f : function(u) {
      return f(e, l, r ? u + r : u, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var n, s = Ce.to(e, Be((n = {}, n[t] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})), o = function(l, f, u) {
      return s.resetTo(t, l, f, u);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return Z.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = dr(e.ease, hn.ease)), ro(hn, e || {});
  },
  config: function(e) {
    return ro(Ne, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, n = e.plugins, s = e.defaults, o = e.extendTimeline;
    (n || "").split(",").forEach(function(a) {
      return a && !Re[a] && !Ve[a] && dn(t + " effect requires " + a + " plugin.");
    }), ki[t] = function(a, l, f) {
      return r(He(a), Be(l || {}, s), f);
    }, o && (we.prototype[t] = function(a, l, f) {
      return this.add(ki[t](a, gt(l) ? l : (f = l) && {}, this), f);
    });
  },
  registerEase: function(e, t) {
    F[e] = dr(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? dr(e, t) : F;
  },
  getById: function(e) {
    return Z.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new we(e), n, s;
    for (r.smoothChildTiming = xe(e.smoothChildTiming), Z.remove(r), r._dp = 0, r._time = r._tTime = Z._time, n = Z._first; n; )
      s = n._next, (t || !(!n._dur && n instanceof ie && n.vars.onComplete === n._targets[0])) && ct(r, n, n._start - n._delay), n = s;
    return ct(Z, r, 0), r;
  },
  context: function(e, t) {
    return e ? new Qa(e, t) : H;
  },
  matchMedia: function(e) {
    return new Ju(e);
  },
  matchMediaRefresh: function() {
    return _r.forEach(function(e) {
      var t = e.conditions, r, n;
      for (n in t)
        t[n] && (t[n] = !1, r = 1);
      r && e.revert();
    }) || Ji();
  },
  addEventListener: function(e, t) {
    var r = qn[e] || (qn[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = qn[e], n = r && r.indexOf(t);
    n >= 0 && r.splice(n, 1);
  },
  utils: {
    wrap: Eu,
    wrapYoyo: Mu,
    distribute: Ra,
    random: Da,
    snap: za,
    normalize: Au,
    getUnit: _e,
    clamp: Su,
    splitColor: Va,
    toArray: He,
    selector: Ki,
    mapRange: Fa,
    pipe: Pu,
    unitize: Ou,
    interpolate: Ru,
    shuffle: Ma
  },
  install: ba,
  effects: ki,
  ticker: ze,
  updateRoot: we.updateRoot,
  plugins: Re,
  globalTimeline: Z,
  core: {
    PropTween: Te,
    globals: ya,
    Tween: ie,
    Timeline: we,
    Animation: gn,
    getCache: cr,
    _removeLinkedListItem: _i,
    reverting: function() {
      return ce;
    },
    context: function(e) {
      return e && H && (H.data.push(e), e._ctx = H), H;
    },
    suppressOverwrites: function(e) {
      return _s = e;
    }
  }
};
ke("to,from,fromTo,delayedCall,set,killTweensOf", function(i) {
  return ni[i] = ie[i];
});
ze.add(we.updateRoot);
Pr = ni.to({}, {
  duration: 0
});
var ec = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, tc = function(e, t) {
  var r = e._targets, n, s, o;
  for (n in t)
    for (s = r.length; s--; )
      o = e._ptLookup[s][n], o && (o = o.d) && (o._pt && (o = ec(o, n)), o && o.modifier && o.modifier(t[n], e, r[s], n));
}, Oi = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, s, o) {
      o._onInit = function(a) {
        var l, f;
        if (fe(s) && (l = {}, ke(s, function(u) {
          return l[u] = 1;
        }), s = l), t) {
          l = {};
          for (f in s)
            l[f] = t(s[f]);
          s = l;
        }
        tc(a, s);
      };
    }
  };
}, Ce = ni.registerPlugin({
  name: "attr",
  init: function(e, t, r, n, s) {
    var o, a, l;
    this.tween = r;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], n, s, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      ce ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, Oi("roundProps", Qi), Oi("modifiers"), Oi("snap", za)) || ni;
ie.version = we.version = Ce.version = "3.15.0";
va = 1;
ms() && Xr();
F.Power0;
F.Power1;
F.Power2;
F.Power3;
F.Power4;
F.Linear;
F.Quad;
F.Cubic;
F.Quart;
F.Quint;
F.Strong;
F.Elastic;
F.Back;
F.SteppedEase;
F.Bounce;
F.Sine;
F.Expo;
F.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var lo, Lt, Er, Os, rr, fo, As, rc = function() {
  return typeof window < "u";
}, At = {}, er = 180 / Math.PI, Mr = Math.PI / 180, yr = Math.atan2, uo = 1e8, Es = /([A-Z])/g, nc = /(left|right|width|margin|padding|x)/i, ic = /[\s,\(]\S/, ht = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, es = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, sc = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, oc = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, ac = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, lc = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, Za = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Ja = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, fc = function(e, t, r) {
  return e.style[t] = r;
}, uc = function(e, t, r) {
  return e.style.setProperty(t, r);
}, cc = function(e, t, r) {
  return e._gsap[t] = r;
}, hc = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, dc = function(e, t, r, n, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, _c = function(e, t, r, n, s) {
  var o = e._gsap;
  o[t] = r, o.renderTransform(s, o);
}, J = "transform", Se = J + "Origin", pc = function i(e, t) {
  var r = this, n = this.target, s = n.style, o = n._gsap;
  if (e in At && s) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = ht[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = kt(n, a);
      }) : this.tfm[e] = o.x ? o[e] : kt(n, e), e === Se && (this.tfm.zOrigin = o.zOrigin);
    else
      return ht.transform.split(",").forEach(function(a) {
        return i.call(r, a, t);
      });
    if (this.props.indexOf(J) >= 0)
      return;
    o.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Se, t, "")), e = J;
  }
  (s || t) && this.props.push(e, t, s[e]);
}, el = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, mc = function() {
  var e = this.props, t = this.target, r = t.style, n = t._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? e[s + 1] === 2 ? t[e[s]](e[s + 2]) : t[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Es, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      n[o] = this.tfm[o];
    n.svg && (n.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = As(), (!s || !s.isStart) && !r[J] && (el(r), n.zOrigin && r[Se] && (r[Se] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, tl = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: mc,
    save: pc
  };
  return e._gsap || Ce.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(n) {
    return r.save(n);
  }), r;
}, rl, ts = function(e, t) {
  var r = Lt.createElementNS ? Lt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Lt.createElement(e);
  return r && r.style ? r : Lt.createElement(e);
}, Ie = function i(e, t, r) {
  var n = getComputedStyle(e);
  return n[t] || n.getPropertyValue(t.replace(Es, "-$1").toLowerCase()) || n.getPropertyValue(t) || !r && i(e, $r(t) || t, 1) || "";
}, co = "O,Moz,ms,Ms,Webkit".split(","), $r = function(e, t, r) {
  var n = t || rr, s = n.style, o = 5;
  if (e in s && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(co[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? co[o] : "") + e;
}, rs = function() {
  rc() && window.document && (lo = window, Lt = lo.document, Er = Lt.documentElement, rr = ts("div") || {
    style: {}
  }, ts("div"), J = $r(J), Se = J + "Origin", rr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", rl = !!$r("perspective"), As = Ce.core.reverting, Os = 1);
}, ho = function(e) {
  var t = e.ownerSVGElement, r = ts("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0), s;
  n.style.display = "block", r.appendChild(n), Er.appendChild(r);
  try {
    s = n.getBBox();
  } catch {
  }
  return r.removeChild(n), Er.removeChild(r), s;
}, _o = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, nl = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = ho(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = ho(e)), t && !t.width && !t.x && !t.y ? {
    x: +_o(e, ["x", "cx", "x1"]) || 0,
    y: +_o(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, il = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && nl(e));
}, qt = function(e, t) {
  if (t) {
    var r = e.style, n;
    t in At && t !== Se && (t = J), r.removeProperty ? (n = t.substr(0, 2), (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(n === "--" ? t : t.replace(Es, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, Vt = function(e, t, r, n, s, o) {
  var a = new Te(e._pt, t, r, 0, 1, o ? Ja : Za);
  return e._pt = a, a.b = n, a.e = s, e._props.push(r), a;
}, po = {
  deg: 1,
  rad: 1,
  turn: 1
}, gc = {
  grid: 1,
  flex: 1
}, Xt = function i(e, t, r, n) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = rr.style, l = nc.test(t), f = e.tagName.toLowerCase() === "svg", u = (f ? "client" : "offset") + (l ? "Width" : "Height"), c = 100, h = n === "px", _ = n === "%", p, d, m, y;
  if (n === o || !s || po[n] || po[o])
    return s;
  if (o !== "px" && !h && (s = i(e, t, r, "px")), y = e.getCTM && il(e), (_ || o === "%") && (At[t] || ~t.indexOf("adius")))
    return p = y ? e.getBBox()[l ? "width" : "height"] : e[u], ne(_ ? s / p * c : s / 100 * p);
  if (a[l ? "width" : "height"] = c + (h ? o : n), d = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !f ? e : e.parentNode, y && (d = (e.ownerSVGElement || {}).parentNode), (!d || d === Lt || !d.appendChild) && (d = Lt.body), m = d._gsap, m && _ && m.width && l && m.time === ze.time && !m.uncache)
    return ne(s / m.width * c);
  if (_ && (t === "height" || t === "width")) {
    var v = e.style[t];
    e.style[t] = c + n, p = e[u], v ? e.style[t] = v : qt(e, t);
  } else
    (_ || o === "%") && !gc[Ie(d, "display")] && (a.position = Ie(e, "position")), d === e && (a.position = "static"), d.appendChild(rr), p = rr[u], d.removeChild(rr), a.position = "absolute";
  return l && _ && (m = cr(d), m.time = ze.time, m.width = d[u]), ne(h ? p * s / c : p && s ? c / p * s : 0);
}, kt = function(e, t, r, n) {
  var s;
  return Os || rs(), t in ht && t !== "transform" && (t = ht[t], ~t.indexOf(",") && (t = t.split(",")[0])), At[t] && t !== "transform" ? (s = bn(e, n), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : si(Ie(e, Se)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) && (s = ii[t] && ii[t](e, t, r) || Ie(e, t) || xa(e, t) || (t === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Xt(e, t, s, r) + r : s;
}, vc = function(e, t, r, n) {
  if (!r || r === "none") {
    var s = $r(t, e, 1), o = s && Ie(e, s, 1);
    o && o !== r ? (t = s, r = o) : t === "borderColor" && (r = Ie(e, "borderTopColor"));
  }
  var a = new Te(this._pt, e.style, t, 0, 1, Ha), l = 0, f = 0, u, c, h, _, p, d, m, y, v, x, k, w;
  if (a.b = r, a.e = n, r += "", n += "", n.substring(0, 6) === "var(--" && (n = Ie(e, n.substring(4, n.indexOf(")")))), n === "auto" && (d = e.style[t], e.style[t] = n, n = Ie(e, t) || n, d ? e.style[t] = d : qt(e, t)), u = [r, n], Ga(u), r = u[0], n = u[1], h = r.match(Cr) || [], w = n.match(Cr) || [], w.length) {
    for (; c = Cr.exec(n); )
      m = c[0], v = n.substring(l, c.index), p ? p = (p + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1), m !== (d = h[f++] || "") && (_ = parseFloat(d) || 0, k = d.substr((_ + "").length), m.charAt(1) === "=" && (m = Ar(_, m) + k), y = parseFloat(m), x = m.substr((y + "").length), l = Cr.lastIndex - x.length, x || (x = x || Ne.units[t] || k, l === n.length && (n += x, a.e += x)), k !== x && (_ = Xt(e, t, d, x) || 0), a._pt = {
        _next: a._pt,
        p: v || f === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: _,
        c: y - _,
        m: p && p < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < n.length ? n.substring(l, n.length) : "";
  } else
    a.r = t === "display" && n === "none" ? Ja : Za;
  return ga.test(n) && (a.e = 0), this._pt = a, a;
}, mo = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, bc = function(e) {
  var t = e.split(" "), r = t[0], n = t[1] || "50%";
  return (r === "top" || r === "bottom" || n === "left" || n === "right") && (e = r, r = n, n = e), t[0] = mo[r] || r, t[1] = mo[n] || n, t.join(" ");
}, yc = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, n = r.style, s = t.u, o = r._gsap, a, l, f;
    if (s === "all" || s === !0)
      n.cssText = "", l = 1;
    else
      for (s = s.split(","), f = s.length; --f > -1; )
        a = s[f], At[a] && (l = 1, a = a === "transformOrigin" ? Se : J), qt(r, a);
    l && (qt(r, J), o && (o.svg && r.removeAttribute("transform"), n.scale = n.rotate = n.translate = "none", bn(r, 1), o.uncache = 1, el(n)));
  }
}, ii = {
  clearProps: function(e, t, r, n, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Te(e._pt, t, r, 0, 0, yc);
      return o.u = n, o.pr = -10, o.tween = s, e._props.push(r), 1;
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
}, vn = [1, 0, 0, 1, 0, 0], sl = {}, ol = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, go = function(e) {
  var t = Ie(e, J);
  return ol(t) ? vn : t.substr(7).match(ma).map(ne);
}, Ms = function(e, t) {
  var r = e._gsap || cr(e), n = e.style, s = go(e), o, a, l, f;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? vn : s) : (s === vn && !e.offsetParent && e !== Er && !r.svg && (l = n.display, n.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (f = 1, a = e.nextElementSibling, Er.appendChild(e)), s = go(e), l ? n.display = l : qt(e, "display"), f && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Er.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, ns = function(e, t, r, n, s, o) {
  var a = e._gsap, l = s || Ms(e, !0), f = a.xOrigin || 0, u = a.yOrigin || 0, c = a.xOffset || 0, h = a.yOffset || 0, _ = l[0], p = l[1], d = l[2], m = l[3], y = l[4], v = l[5], x = t.split(" "), k = parseFloat(x[0]) || 0, w = parseFloat(x[1]) || 0, P, S, b, T;
  r ? l !== vn && (S = _ * m - p * d) && (b = k * (m / S) + w * (-d / S) + (d * v - m * y) / S, T = k * (-p / S) + w * (_ / S) - (_ * v - p * y) / S, k = b, w = T) : (P = nl(e), k = P.x + (~x[0].indexOf("%") ? k / 100 * P.width : k), w = P.y + (~(x[1] || x[0]).indexOf("%") ? w / 100 * P.height : w)), n || n !== !1 && a.smooth ? (y = k - f, v = w - u, a.xOffset = c + (y * _ + v * d) - y, a.yOffset = h + (y * p + v * m) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = k, a.yOrigin = w, a.smooth = !!n, a.origin = t, a.originIsAbsolute = !!r, e.style[Se] = "0px 0px", o && (Vt(o, a, "xOrigin", f, k), Vt(o, a, "yOrigin", u, w), Vt(o, a, "xOffset", c, a.xOffset), Vt(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", k + " " + w);
}, bn = function(e, t) {
  var r = e._gsap || new Ya(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var n = e.style, s = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), f = Ie(e, Se) || "0", u, c, h, _, p, d, m, y, v, x, k, w, P, S, b, T, E, $, U, Y, q, X, L, G, de, nt, A, Mt, it, Kr, Pe, K;
  return u = c = h = d = m = y = v = x = k = 0, _ = p = 1, r.svg = !!(e.getCTM && il(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[J] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[J] !== "none" ? l[J] : "")), n.scale = n.rotate = n.translate = "none"), S = Ms(e, r.svg), r.svg && (r.uncache ? (de = e.getBBox(), f = r.xOrigin - de.x + "px " + (r.yOrigin - de.y) + "px", G = "") : G = !t && e.getAttribute("data-svg-origin"), ns(e, G || f, !!G || r.originIsAbsolute, r.smooth !== !1, S)), w = r.xOrigin || 0, P = r.yOrigin || 0, S !== vn && ($ = S[0], U = S[1], Y = S[2], q = S[3], u = X = S[4], c = L = S[5], S.length === 6 ? (_ = Math.sqrt($ * $ + U * U), p = Math.sqrt(q * q + Y * Y), d = $ || U ? yr(U, $) * er : 0, v = Y || q ? yr(Y, q) * er + d : 0, v && (p *= Math.abs(Math.cos(v * Mr))), r.svg && (u -= w - (w * $ + P * Y), c -= P - (w * U + P * q))) : (K = S[6], Kr = S[7], A = S[8], Mt = S[9], it = S[10], Pe = S[11], u = S[12], c = S[13], h = S[14], b = yr(K, it), m = b * er, b && (T = Math.cos(-b), E = Math.sin(-b), G = X * T + A * E, de = L * T + Mt * E, nt = K * T + it * E, A = X * -E + A * T, Mt = L * -E + Mt * T, it = K * -E + it * T, Pe = Kr * -E + Pe * T, X = G, L = de, K = nt), b = yr(-Y, it), y = b * er, b && (T = Math.cos(-b), E = Math.sin(-b), G = $ * T - A * E, de = U * T - Mt * E, nt = Y * T - it * E, Pe = q * E + Pe * T, $ = G, U = de, Y = nt), b = yr(U, $), d = b * er, b && (T = Math.cos(b), E = Math.sin(b), G = $ * T + U * E, de = X * T + L * E, U = U * T - $ * E, L = L * T - X * E, $ = G, X = de), m && Math.abs(m) + Math.abs(d) > 359.9 && (m = d = 0, y = 180 - y), _ = ne(Math.sqrt($ * $ + U * U + Y * Y)), p = ne(Math.sqrt(L * L + K * K)), b = yr(X, L), v = Math.abs(b) > 2e-4 ? b * er : 0, k = Pe ? 1 / (Pe < 0 ? -Pe : Pe) : 0), r.svg && (G = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !ol(Ie(e, J)), G && e.setAttribute("transform", G))), Math.abs(v) > 90 && Math.abs(v) < 270 && (s ? (_ *= -1, v += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (p *= -1, v += v <= 0 ? 180 : -180)), t = t || r.uncache, r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = c - ((r.yPercent = c && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = ne(_), r.scaleY = ne(p), r.rotation = ne(d) + a, r.rotationX = ne(m) + a, r.rotationY = ne(y) + a, r.skewX = v + a, r.skewY = x + a, r.transformPerspective = k + o, (r.zOrigin = parseFloat(f.split(" ")[2]) || !t && r.zOrigin || 0) && (n[Se] = si(f)), r.xOffset = r.yOffset = 0, r.force3D = Ne.force3D, r.renderTransform = r.svg ? xc : rl ? al : wc, r.uncache = 0, r;
}, si = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Ai = function(e, t, r) {
  var n = _e(t);
  return ne(parseFloat(t) + parseFloat(Xt(e, "x", r + "px", n))) + n;
}, wc = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, al(e, t);
}, Qt = "0deg", Qr = "0px", Zt = ") ", al = function(e, t) {
  var r = t || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.z, f = r.rotation, u = r.rotationY, c = r.rotationX, h = r.skewX, _ = r.skewY, p = r.scaleX, d = r.scaleY, m = r.transformPerspective, y = r.force3D, v = r.target, x = r.zOrigin, k = "", w = y === "auto" && e && e !== 1 || y === !0;
  if (x && (c !== Qt || u !== Qt)) {
    var P = parseFloat(u) * Mr, S = Math.sin(P), b = Math.cos(P), T;
    P = parseFloat(c) * Mr, T = Math.cos(P), o = Ai(v, o, S * T * -x), a = Ai(v, a, -Math.sin(P) * -x), l = Ai(v, l, b * T * -x + x);
  }
  m !== Qr && (k += "perspective(" + m + Zt), (n || s) && (k += "translate(" + n + "%, " + s + "%) "), (w || o !== Qr || a !== Qr || l !== Qr) && (k += l !== Qr || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Zt), f !== Qt && (k += "rotate(" + f + Zt), u !== Qt && (k += "rotateY(" + u + Zt), c !== Qt && (k += "rotateX(" + c + Zt), (h !== Qt || _ !== Qt) && (k += "skew(" + h + ", " + _ + Zt), (p !== 1 || d !== 1) && (k += "scale(" + p + ", " + d + Zt), v.style[J] = k || "translate(0, 0)";
}, xc = function(e, t) {
  var r = t || this, n = r.xPercent, s = r.yPercent, o = r.x, a = r.y, l = r.rotation, f = r.skewX, u = r.skewY, c = r.scaleX, h = r.scaleY, _ = r.target, p = r.xOrigin, d = r.yOrigin, m = r.xOffset, y = r.yOffset, v = r.forceCSS, x = parseFloat(o), k = parseFloat(a), w, P, S, b, T;
  l = parseFloat(l), f = parseFloat(f), u = parseFloat(u), u && (u = parseFloat(u), f += u, l += u), l || f ? (l *= Mr, f *= Mr, w = Math.cos(l) * c, P = Math.sin(l) * c, S = Math.sin(l - f) * -h, b = Math.cos(l - f) * h, f && (u *= Mr, T = Math.tan(f - u), T = Math.sqrt(1 + T * T), S *= T, b *= T, u && (T = Math.tan(u), T = Math.sqrt(1 + T * T), w *= T, P *= T)), w = ne(w), P = ne(P), S = ne(S), b = ne(b)) : (w = c, b = h, P = S = 0), (x && !~(o + "").indexOf("px") || k && !~(a + "").indexOf("px")) && (x = Xt(_, "x", o, "px"), k = Xt(_, "y", a, "px")), (p || d || m || y) && (x = ne(x + p - (p * w + d * S) + m), k = ne(k + d - (p * P + d * b) + y)), (n || s) && (T = _.getBBox(), x = ne(x + n / 100 * T.width), k = ne(k + s / 100 * T.height)), T = "matrix(" + w + "," + P + "," + S + "," + b + "," + x + "," + k + ")", _.setAttribute("transform", T), v && (_.style[J] = T);
}, kc = function(e, t, r, n, s) {
  var o = 360, a = fe(s), l = parseFloat(s) * (a && ~s.indexOf("rad") ? er : 1), f = l - n, u = n + f + "deg", c, h;
  return a && (c = s.split("_")[1], c === "short" && (f %= o, f !== f % (o / 2) && (f += f < 0 ? o : -o)), c === "cw" && f < 0 ? f = (f + o * uo) % o - ~~(f / o) * o : c === "ccw" && f > 0 && (f = (f - o * uo) % o - ~~(f / o) * o)), e._pt = h = new Te(e._pt, t, r, n, f, sc), h.e = u, h.u = "deg", e._props.push(r), h;
}, vo = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Tc = function(e, t, r) {
  var n = vo({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, f, u, c, h, _, p;
  n.svg ? (f = r.getAttribute("transform"), r.setAttribute("transform", ""), o[J] = t, a = bn(r, 1), qt(r, J), r.setAttribute("transform", f)) : (f = getComputedStyle(r)[J], o[J] = t, a = bn(r, 1), o[J] = f);
  for (l in At)
    f = n[l], u = a[l], f !== u && s.indexOf(l) < 0 && (_ = _e(f), p = _e(u), c = _ !== p ? Xt(r, l, f, p) : parseFloat(f), h = parseFloat(u), e._pt = new Te(e._pt, a, l, c, h - c, es), e._pt.u = p || 0, e._props.push(l));
  vo(a, n);
};
ke("padding,margin,Width,Radius", function(i, e) {
  var t = "Top", r = "Right", n = "Bottom", s = "Left", o = (e < 3 ? [t, r, n, s] : [t + s, t + r, n + r, n + s]).map(function(a) {
    return e < 2 ? i + a : "border" + a + i;
  });
  ii[e > 1 ? "border" + i : i] = function(a, l, f, u, c) {
    var h, _;
    if (arguments.length < 4)
      return h = o.map(function(p) {
        return kt(a, p, f);
      }), _ = h.join(" "), _.split(h[0]).length === 5 ? h[0] : _;
    h = (u + "").split(" "), _ = {}, o.forEach(function(p, d) {
      return _[p] = h[d] = h[d] || h[(d - 1) / 2 | 0];
    }), a.init(l, _, c);
  };
});
var ll = {
  name: "css",
  register: rs,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, n, s) {
    var o = this._props, a = e.style, l = r.vars.startAt, f, u, c, h, _, p, d, m, y, v, x, k, w, P, S, b, T;
    Os || rs(), this.styles = this.styles || tl(e), b = this.styles.props, this.tween = r;
    for (d in t)
      if (d !== "autoRound" && (u = t[d], !(Re[d] && Wa(d, t, r, n, e, s)))) {
        if (_ = typeof u, p = ii[d], _ === "function" && (u = u.call(r, n, e, s), _ = typeof u), _ === "string" && ~u.indexOf("random(") && (u = pn(u)), p)
          p(this, e, d, u, r) && (S = 1);
        else if (d.substr(0, 2) === "--")
          f = (getComputedStyle(e).getPropertyValue(d) + "").trim(), u += "", Ut.lastIndex = 0, Ut.test(f) || (m = _e(f), y = _e(u), y ? m !== y && (f = Xt(e, d, f, y) + y) : m && (u += m)), this.add(a, "setProperty", f, u, n, s, 0, 0, d), o.push(d), b.push(d, 0, a[d]);
        else if (_ !== "undefined") {
          if (l && d in l ? (f = typeof l[d] == "function" ? l[d].call(r, n, e, s) : l[d], fe(f) && ~f.indexOf("random(") && (f = pn(f)), _e(f + "") || f === "auto" || (f += Ne.units[d] || _e(kt(e, d)) || ""), (f + "").charAt(1) === "=" && (f = kt(e, d))) : f = kt(e, d), h = parseFloat(f), v = _ === "string" && u.charAt(1) === "=" && u.substr(0, 2), v && (u = u.substr(2)), c = parseFloat(u), d in ht && (d === "autoAlpha" && (h === 1 && kt(e, "visibility") === "hidden" && c && (h = 0), b.push("visibility", 0, a.visibility), Vt(this, a, "visibility", h ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), d !== "scale" && d !== "transform" && (d = ht[d], ~d.indexOf(",") && (d = d.split(",")[0]))), x = d in At, x) {
            if (this.styles.save(d), T = u, _ === "string" && u.substring(0, 6) === "var(--") {
              if (u = Ie(e, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
                var E = e.style.perspective;
                e.style.perspective = u, u = Ie(e, "perspective"), E ? e.style.perspective = E : qt(e, "perspective");
              }
              c = parseFloat(u);
            }
            if (k || (w = e._gsap, w.renderTransform && !t.parseTransform || bn(e, t.parseTransform), P = t.smoothOrigin !== !1 && w.smooth, k = this._pt = new Te(this._pt, a, J, 0, 1, w.renderTransform, w, 0, -1), k.dep = 1), d === "scale")
              this._pt = new Te(this._pt, w, "scaleY", w.scaleY, (v ? Ar(w.scaleY, v + c) : c) - w.scaleY || 0, es), this._pt.u = 0, o.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              b.push(Se, 0, a[Se]), u = bc(u), w.svg ? ns(e, u, 0, P, 0, this) : (y = parseFloat(u.split(" ")[2]) || 0, y !== w.zOrigin && Vt(this, w, "zOrigin", w.zOrigin, y), Vt(this, a, d, si(f), si(u)));
              continue;
            } else if (d === "svgOrigin") {
              ns(e, u, 1, P, 0, this);
              continue;
            } else if (d in sl) {
              kc(this, w, d, h, v ? Ar(h, v + u) : u);
              continue;
            } else if (d === "smoothOrigin") {
              Vt(this, w, "smooth", w.smooth, u);
              continue;
            } else if (d === "force3D") {
              w[d] = u;
              continue;
            } else if (d === "transform") {
              Tc(this, u, e);
              continue;
            }
          } else d in a || (d = $r(d) || d);
          if (x || (c || c === 0) && (h || h === 0) && !ic.test(u) && d in a)
            m = (f + "").substr((h + "").length), c || (c = 0), y = _e(u) || (d in Ne.units ? Ne.units[d] : m), m !== y && (h = Xt(e, d, f, y)), this._pt = new Te(this._pt, x ? w : a, d, h, (v ? Ar(h, v + c) : c) - h, !x && (y === "px" || d === "zIndex") && t.autoRound !== !1 ? lc : es), this._pt.u = y || 0, x && T !== u ? (this._pt.b = f, this._pt.e = T, this._pt.r = ac) : m !== y && y !== "%" && (this._pt.b = f, this._pt.r = oc);
          else if (d in a)
            vc.call(this, e, d, f, v ? v + u : u);
          else if (d in e)
            this.add(e, d, f || e[d], v ? v + u : u, n, s);
          else if (d !== "parseTransform") {
            vs(d, u);
            continue;
          }
          x || (d in a ? b.push(d, 0, a[d]) : typeof e[d] == "function" ? b.push(d, 2, e[d]()) : b.push(d, 1, f || e[d])), o.push(d);
        }
      }
    S && Ka(this);
  },
  render: function(e, t) {
    if (t.tween._time || !As())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: kt,
  aliases: ht,
  getSetter: function(e, t, r) {
    var n = ht[t];
    return n && n.indexOf(",") < 0 && (t = n), t in At && t !== Se && (e._gsap.x || kt(e, "x")) ? r && fo === r ? t === "scale" ? hc : cc : (fo = r || {}) && (t === "scale" ? dc : _c) : e.style && !ps(e.style[t]) ? fc : ~t.indexOf("-") ? uc : Cs(e, t);
  },
  core: {
    _removeProperty: qt,
    _getMatrix: Ms
  }
};
Ce.utils.checkPrefix = $r;
Ce.core.getStyleSaver = tl;
(function(i, e, t, r) {
  var n = ke(i + "," + e + "," + t, function(s) {
    At[s] = 1;
  });
  ke(e, function(s) {
    Ne.units[s] = "deg", sl[s] = 1;
  }), ht[n[13]] = i + "," + e, ke(r, function(s) {
    var o = s.split(":");
    ht[o[1]] = n[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ke("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(i) {
  Ne.units[i] = "px";
});
Ce.registerPlugin(ll);
var kr = Ce.registerPlugin(ll) || Ce;
kr.core.Tween;
const Sc = (i, e) => {
  const t = new Array(i.length + e.length);
  for (let r = 0; r < i.length; r++)
    t[r] = i[r];
  for (let r = 0; r < e.length; r++)
    t[i.length + r] = e[r];
  return t;
}, Cc = (i, e) => ({
  classGroupId: i,
  validator: e
}), fl = (i = /* @__PURE__ */ new Map(), e = null, t) => ({
  nextPart: i,
  validators: e,
  classGroupId: t
}), oi = "-", bo = [], Pc = "arbitrary..", Oc = (i) => {
  const e = Ec(i), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = i;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return Ac(o);
      const a = o.split(oi), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return ul(a, l, e);
    },
    getConflictingClassGroupIds: (o, a) => {
      if (a) {
        const l = r[o], f = t[o];
        return l ? f ? Sc(f, l) : l : f || bo;
      }
      return t[o] || bo;
    }
  };
}, ul = (i, e, t) => {
  if (i.length - e === 0)
    return t.classGroupId;
  const n = i[e], s = t.nextPart.get(n);
  if (s) {
    const f = ul(i, e + 1, s);
    if (f) return f;
  }
  const o = t.validators;
  if (o === null)
    return;
  const a = e === 0 ? i.join(oi) : i.slice(e).join(oi), l = o.length;
  for (let f = 0; f < l; f++) {
    const u = o[f];
    if (u.validator(a))
      return u.classGroupId;
  }
}, Ac = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = i.slice(1, -1), t = e.indexOf(":"), r = e.slice(0, t);
  return r ? Pc + r : void 0;
})(), Ec = (i) => {
  const {
    theme: e,
    classGroups: t
  } = i;
  return Mc(t, e);
}, Mc = (i, e) => {
  const t = fl();
  for (const r in i) {
    const n = i[r];
    Rs(n, t, r, e);
  }
  return t;
}, Rs = (i, e, t, r) => {
  const n = i.length;
  for (let s = 0; s < n; s++) {
    const o = i[s];
    Rc(o, e, t, r);
  }
}, Rc = (i, e, t, r) => {
  if (typeof i == "string") {
    zc(i, e, t);
    return;
  }
  if (typeof i == "function") {
    Dc(i, e, t, r);
    return;
  }
  Ic(i, e, t, r);
}, zc = (i, e, t) => {
  const r = i === "" ? e : cl(e, i);
  r.classGroupId = t;
}, Dc = (i, e, t, r) => {
  if (Fc(i)) {
    Rs(i(r), e, t, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(Cc(t, i));
}, Ic = (i, e, t, r) => {
  const n = Object.entries(i), s = n.length;
  for (let o = 0; o < s; o++) {
    const [a, l] = n[o];
    Rs(l, cl(e, a), t, r);
  }
}, cl = (i, e) => {
  let t = i;
  const r = e.split(oi), n = r.length;
  for (let s = 0; s < n; s++) {
    const o = r[s];
    let a = t.nextPart.get(o);
    a || (a = fl(), t.nextPart.set(o, a)), t = a;
  }
  return t;
}, Fc = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, Nc = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const n = (s, o) => {
    t[s] = o, e++, e > i && (e = 0, r = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let o = t[s];
      if (o !== void 0)
        return o;
      if ((o = r[s]) !== void 0)
        return n(s, o), o;
    },
    set(s, o) {
      s in t ? t[s] = o : n(s, o);
    }
  };
}, is = "!", yo = ":", Lc = [], wo = (i, e, t, r, n) => ({
  modifiers: i,
  hasImportantModifier: e,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: n
}), Vc = (i) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = i;
  let r = (n) => {
    const s = [];
    let o = 0, a = 0, l = 0, f;
    const u = n.length;
    for (let d = 0; d < u; d++) {
      const m = n[d];
      if (o === 0 && a === 0) {
        if (m === yo) {
          s.push(n.slice(l, d)), l = d + 1;
          continue;
        }
        if (m === "/") {
          f = d;
          continue;
        }
      }
      m === "[" ? o++ : m === "]" ? o-- : m === "(" ? a++ : m === ")" && a--;
    }
    const c = s.length === 0 ? n : n.slice(l);
    let h = c, _ = !1;
    c.endsWith(is) ? (h = c.slice(0, -1), _ = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      c.startsWith(is) && (h = c.slice(1), _ = !0)
    );
    const p = f && f > l ? f - l : void 0;
    return wo(s, _, h, p);
  };
  if (e) {
    const n = e + yo, s = r;
    r = (o) => o.startsWith(n) ? s(o.slice(n.length)) : wo(Lc, !1, o, void 0, !0);
  }
  if (t) {
    const n = r;
    r = (s) => t({
      className: s,
      parseClassName: n
    });
  }
  return r;
}, Bc = (i) => {
  const e = /* @__PURE__ */ new Map();
  return i.orderSensitiveModifiers.forEach((t, r) => {
    e.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let n = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], a = o[0] === "[", l = e.has(o);
      a || l ? (n.length > 0 && (n.sort(), r.push(...n), n = []), r.push(o)) : n.push(o);
    }
    return n.length > 0 && (n.sort(), r.push(...n)), r;
  };
}, Gc = (i) => ({
  cache: Nc(i.cacheSize),
  parseClassName: Vc(i),
  sortModifiers: Bc(i),
  postfixLookupClassGroupIds: Uc(i),
  ...Oc(i)
}), Uc = (i) => {
  const e = /* @__PURE__ */ Object.create(null), t = i.postfixLookupClassGroups;
  if (t)
    for (let r = 0; r < t.length; r++)
      e[t[r]] = !0;
  return e;
}, Yc = /\s+/, Wc = (i, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: s,
    postfixLookupClassGroupIds: o
  } = e, a = [], l = i.trim().split(Yc);
  let f = "";
  for (let u = l.length - 1; u >= 0; u -= 1) {
    const c = l[u], {
      isExternal: h,
      modifiers: _,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: m
    } = t(c);
    if (h) {
      f = c + (f.length > 0 ? " " + f : f);
      continue;
    }
    let y = !!m, v;
    if (y) {
      const S = d.substring(0, m);
      v = r(S);
      const b = v && o[v] ? r(d) : void 0;
      b && b !== v && (v = b, y = !1);
    } else
      v = r(d);
    if (!v) {
      if (!y) {
        f = c + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (v = r(d), !v) {
        f = c + (f.length > 0 ? " " + f : f);
        continue;
      }
      y = !1;
    }
    const x = _.length === 0 ? "" : _.length === 1 ? _[0] : s(_).join(":"), k = p ? x + is : x, w = k + v;
    if (a.indexOf(w) > -1)
      continue;
    a.push(w);
    const P = n(v, y);
    for (let S = 0; S < P.length; ++S) {
      const b = P[S];
      a.push(k + b);
    }
    f = c + (f.length > 0 ? " " + f : f);
  }
  return f;
}, jc = (...i) => {
  let e = 0, t, r, n = "";
  for (; e < i.length; )
    (t = i[e++]) && (r = hl(t)) && (n && (n += " "), n += r);
  return n;
}, hl = (i) => {
  if (typeof i == "string")
    return i;
  let e, t = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (e = hl(i[r])) && (t && (t += " "), t += e);
  return t;
}, qc = (i, ...e) => {
  let t, r, n, s;
  const o = (l) => {
    const f = e.reduce((u, c) => c(u), i());
    return t = Gc(f), r = t.cache.get, n = t.cache.set, s = a, a(l);
  }, a = (l) => {
    const f = r(l);
    if (f)
      return f;
    const u = Wc(l, t);
    return n(l, u), u;
  };
  return s = o, (...l) => s(jc(...l));
}, Xc = [], se = (i) => {
  const e = (t) => t[i] || Xc;
  return e.isThemeGetter = !0, e;
}, dl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, _l = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $c = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Hc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Zc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Rt = (i) => $c.test(i), z = (i) => !!i && !Number.isNaN(Number(i)), st = (i) => !!i && Number.isInteger(Number(i)), Ei = (i) => i.endsWith("%") && z(i.slice(0, -1)), vt = (i) => Hc.test(i), pl = () => !0, eh = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kc.test(i) && !Qc.test(i)
), zs = () => !1, th = (i) => Zc.test(i), rh = (i) => Jc.test(i), nh = (i) => !C(i) && !O(i), ih = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), sh = (i) => Kt(i, vl, zs), C = (i) => dl.test(i), Jt = (i) => Kt(i, bl, eh), xo = (i) => Kt(i, dh, z), oh = (i) => Kt(i, wl, pl), ah = (i) => Kt(i, yl, zs), ko = (i) => Kt(i, ml, zs), lh = (i) => Kt(i, gl, rh), Nn = (i) => Kt(i, xl, th), O = (i) => _l.test(i), Zr = (i) => vr(i, bl), fh = (i) => vr(i, yl), To = (i) => vr(i, ml), uh = (i) => vr(i, vl), ch = (i) => vr(i, gl), Ln = (i) => vr(i, xl, !0), hh = (i) => vr(i, wl, !0), Kt = (i, e, t) => {
  const r = dl.exec(i);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, vr = (i, e, t = !1) => {
  const r = _l.exec(i);
  return r ? r[1] ? e(r[1]) : t : !1;
}, ml = (i) => i === "position" || i === "percentage", gl = (i) => i === "image" || i === "url", vl = (i) => i === "length" || i === "size" || i === "bg-size", bl = (i) => i === "length", dh = (i) => i === "number", yl = (i) => i === "family-name", wl = (i) => i === "number" || i === "weight", xl = (i) => i === "shadow", _h = () => {
  const i = se("color"), e = se("font"), t = se("text"), r = se("font-weight"), n = se("tracking"), s = se("leading"), o = se("breakpoint"), a = se("container"), l = se("spacing"), f = se("radius"), u = se("shadow"), c = se("inset-shadow"), h = se("text-shadow"), _ = se("drop-shadow"), p = se("blur"), d = se("perspective"), m = se("aspect"), y = se("ease"), v = se("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], w = () => [...k(), O, C], P = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], b = () => [O, C, l], T = () => [Rt, "full", "auto", ...b()], E = () => [st, "none", "subgrid", O, C], $ = () => ["auto", {
    span: ["full", st, O, C]
  }, st, O, C], U = () => [st, "auto", O, C], Y = () => ["auto", "min", "max", "fr", O, C], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], X = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...b()], G = () => [Rt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], de = () => [Rt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...b()], nt = () => [Rt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...b()], A = () => [i, O, C], Mt = () => [...k(), To, ko, {
    position: [O, C]
  }], it = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Kr = () => ["auto", "cover", "contain", uh, sh, {
    size: [O, C]
  }], Pe = () => [Ei, Zr, Jt], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    O,
    C
  ], me = () => ["", z, Zr, Jt], On = () => ["solid", "dashed", "dotted", "double"], Ds = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ae = () => [z, Ei, To, ko], Is = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    O,
    C
  ], An = () => ["none", z, O, C], En = () => ["none", z, O, C], gi = () => [z, O, C], Mn = () => [Rt, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [pl],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [nh],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vt],
      shadow: [vt],
      spacing: ["px", z],
      text: [vt],
      "text-shadow": [vt],
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
        aspect: ["auto", "square", Rt, C, O, m]
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
        "@container": ["", "normal", "size", O, C]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [ih],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [z, C, O, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        inset: T()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": T(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: T()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": T(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: T()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": T()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
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
        z: [st, "auto", O, C]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Rt, "full", "auto", a, ...b()]
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
        flex: [z, Rt, "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", z, O, C]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", z, O, C]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [st, "first", "last", "none", O, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": E()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: $()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": E()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: $()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
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
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...q(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...X(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...X()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...q()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": q()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...X(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...X()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: b()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: L()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: L()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: L()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: L()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: L()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: L()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: L()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: L()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: L()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: L()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: L()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
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
        "space-y": b()
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
        size: G()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...de()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...de()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...de()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...nt()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...nt()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...nt()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...G()]
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
          ...G()
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
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Zr, Jt]
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
        font: [r, hh, oh]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ei, C]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fh, ah, e]
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
        tracking: [n, O, C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [z, "none", O, xo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O, C]
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
        list: ["disc", "decimal", "none", O, C]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [...On(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [z, "from-font", "auto", O, Jt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [z, "auto", O, C]
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
        indent: b()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [st, O, C]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, C]
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
        content: ["none", O, C]
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
        bg: Mt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: it()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Kr()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, st, O, C],
          radial: ["", O, C],
          conic: [st, O, C]
        }, ch, lh]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Pe()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Pe()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Pe()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: K()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": K()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": K()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": K()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": K()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": K()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": K()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": K()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": K()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": K()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": K()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": K()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": K()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": K()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": K()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: me()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": me()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": me()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": me()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": me()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": me()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": me()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": me()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": me()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": me()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": me()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": me()
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
        "divide-y": me()
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
        border: [...On(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...On(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: A()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": A()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...On(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z, O, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", z, Zr, Jt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
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
          Ln,
          Nn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", c, Ln, Nn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: me()
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
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [z, Jt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": me()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Ln, Nn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [z, O, C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ds(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ds()
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
        "mask-linear": [z]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ae()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ae()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ae()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ae()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ae()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ae()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ae()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ae()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ae()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ae()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ae()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ae()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ae()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ae()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, C]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ae()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ae()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [z]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ae()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ae()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: Mt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: it()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Kr()
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
        mask: ["none", O, C]
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
          O,
          C
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Is()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [z, O, C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [z, O, C]
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
          Ln,
          Nn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", z, O, C]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [z, O, C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", z, O, C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z, O, C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", z, O, C]
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
          O,
          C
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Is()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [z, O, C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [z, O, C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", z, O, C]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [z, O, C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", z, O, C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [z, O, C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z, O, C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", z, O, C]
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
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, C]
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
        duration: [z, "initial", O, C]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, O, C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [z, O, C]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, O, C]
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
        perspective: [d, O, C]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: An()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": An()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": An()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": An()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: En()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": En()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": En()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": En()
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
        skew: gi()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": gi()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": gi()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [O, C, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
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
        translate: Mn()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Mn()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Mn()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Mn()
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
        zoom: [st, O, C]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: A()
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
        caret: A()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, C]
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
        "scrollbar-thumb": A()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": A()
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": b()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": b()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        "will-change": ["auto", "scroll", "contents", "transform", O, C]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, Zr, Jt, xo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
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
}, ph = /* @__PURE__ */ qc(_h);
function So(...i) {
  return ph(ha(i));
}
var mh = /* @__PURE__ */ fa("<span> </span>"), gh = /* @__PURE__ */ fa('<span style="clip-path: inset(-100vh 0 -100vh 0);"><span class="font-inherit invisible inline-block w-0 text-inherit" aria-hidden="true">&nbsp;</span><!></span>');
function vh(i, e) {
  Eo(e, !0);
  let t = nu(e, "interval", 3, 2e3), r = /* @__PURE__ */ ot(0), n = /* @__PURE__ */ ot(!0);
  function s(l, { direction: f }) {
    kr.killTweensOf(l);
    const u = l.parentElement;
    return f === "in" ? qe(n) ? (kr.set(l, { yPercent: 0, opacity: 1, filter: "blur(0px)" }), { duration: 0, tick: () => {
    } }) : (u && kr.fromTo(u, { width: u.offsetWidth }, {
      width: l.offsetWidth,
      duration: 0.35,
      ease: "power2.inOut"
    }), kr.fromTo(l, { yPercent: 50, opacity: 0, filter: "blur(8px)" }, {
      yPercent: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.3,
      delay: 0.25,
      ease: "back.out(1.2)"
    }), { duration: 900, tick: () => {
    } }) : (u && (u.style.width = `${u.offsetWidth}px`), Object.assign(l.style, { position: "absolute", top: "0", left: "0", width: "100%" }), kr.to(l, {
      yPercent: -50,
      opacity: 0,
      filter: "blur(6px)",
      duration: 0.2,
      ease: "power2.in"
    }), { duration: 300, tick: () => {
    } });
  }
  iu(() => {
    const l = setInterval(
      () => {
        document.hidden || (xt(n, !1), xt(r, (qe(r) + 1) % e.texts.length));
      },
      t()
    );
    return () => clearInterval(l);
  });
  var o = gh(), a = xf(Us(o));
  Qf(a, () => qe(r), (l) => {
    var f = mh(), u = Us(f);
    Ys(
      (c) => {
        Js(f, 1, c), qf(u, e.texts[qe(r)]);
      },
      [
        () => Zs(So("font-inherit whitespace-nowrap text-inherit", qe(n) ? "relative inline-block" : "absolute top-0 left-0"))
      ]
    ), Qs(1, f, () => s, () => ({ direction: "in" })), Qs(2, f, () => s, () => ({ direction: "out" })), Hs(l, f);
  }), Ys((l) => Js(o, 1, l), [
    () => Zs(So("font-inherit relative inline-block text-inherit", e.class))
  ]), Hs(i, o), Mo();
}
function xh(i, e = {}) {
  return Xf(vh, { target: i, props: e });
}
export {
  vh as default,
  xh as render,
  wh as unmount
};
