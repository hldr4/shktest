(function () {
    var innerGlobal = typeof window != "undefined" ? window : global;
    var exportTo = {};
    (function (window, global, module) {
        var q;

        function ba(a) {
            var b = 0;
            return function () {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }
        var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        };

        function da(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        }
        var ea = da(this);

        function ha(a, b) {
            if (b) a: {
                for (var c = ea, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                d = d[d.length - 1];e = c[d];f = b(e);f != e && null != f && ca(c, d, {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
        }
        ha("Symbol", function (a) {
            function b(f) {
                if (this instanceof b) throw new TypeError("Symbol is not a constructor");
                return new c(d + (f || "") + "_" + e++, f)
            }

            function c(f, g) {
                this.g = f;
                ca(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: g
                })
            }
            if (a) return a;
            c.prototype.toString = function () {
                return this.g
            };
            var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
                e = 0;
            return b
        });
        ha("Symbol.iterator", function (a) {
            if (a) return a;
            a = Symbol("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = ea[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        return ia(ba(this))
                    }
                })
            }
            return a
        });

        function ia(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function () {
                return this
            };
            return a
        }

        function t(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: ba(a)
            }
        }

        function ja(a) {
            if (!(a instanceof Array)) {
                a = t(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        }
        var ka = "function" == typeof Object.create ? Object.create : function (a) {
                function b() {}
                b.prototype = a;
                return new b
            },
            la;
        if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
        else {
            var ma;
            a: {
                var na = {
                        a: !0
                    },
                    oa = {};
                try {
                    oa.__proto__ = na;
                    ma = oa.a;
                    break a
                } catch (a) {}
                ma = !1
            }
            la = ma ? function (a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var pa = la;

        function ra(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa) pa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.vg = b.prototype
        }

        function sa() {
            this.s = !1;
            this.l = null;
            this.h = void 0;
            this.g = 1;
            this.j = this.m = 0;
            this.D = this.i = null
        }

        function ta(a) {
            if (a.s) throw new TypeError("Generator is already running");
            a.s = !0
        }
        sa.prototype.u = function (a) {
            this.h = a
        };

        function ua(a, b) {
            a.i = {
                Wd: b,
                ae: !0
            };
            a.g = a.m || a.j
        }
        sa.prototype["return"] = function (a) {
            this.i = {
                "return": a
            };
            this.g = this.j
        };

        function v(a, b, c) {
            a.g = c;
            return {
                value: b
            }
        }
        sa.prototype.v = function (a) {
            this.g = a
        };

        function z(a) {
            a.g = 0
        }

        function B(a, b, c) {
            a.m = b;
            void 0 != c && (a.j = c)
        }

        function va(a) {
            a.m = 0;
            a.j = 2
        }

        function wa(a, b) {
            a.g = b;
            a.m = 0
        }

        function E(a) {
            a.m = 0;
            var b = a.i.Wd;
            a.i = null;
            return b
        }

        function xa(a) {
            a.D = [a.i];
            a.m = 0;
            a.j = 0
        }

        function ya(a, b) {
            var c = a.D.splice(0)[0];
            (c = a.i = a.i || c) ? c.ae ? a.g = a.m || a.j : void 0 != c.v && a.j < c.v ? (a.g = c.v, a.i = null) : a.g = a.j: a.g = b
        }

        function za(a) {
            this.g = new sa;
            this.h = a
        }

        function Aa(a, b) {
            ta(a.g);
            var c = a.g.l;
            if (c) return Ba(a, "return" in c ? c["return"] : function (d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.g["return"]);
            a.g["return"](b);
            return Ca(a)
        }

        function Ba(a, b, c, d) {
            try {
                var e = b.call(a.g.l, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.g.s = !1, e;
                var f = e.value
            } catch (g) {
                return a.g.l = null, ua(a.g, g), Ca(a)
            }
            a.g.l = null;
            d.call(a.g, f);
            return Ca(a)
        }

        function Ca(a) {
            for (; a.g.g;) try {
                var b = a.h(a.g);
                if (b) return a.g.s = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.g.h = void 0, ua(a.g, c)
            }
            a.g.s = !1;
            if (a.g.i) {
                b = a.g.i;
                a.g.i = null;
                if (b.ae) throw b.Wd;
                return {
                    value: b["return"],
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }

        function Ea(a) {
            this.next = function (b) {
                ta(a.g);
                a.g.l ? b = Ba(a, a.g.l.next, b, a.g.u) : (a.g.u(b), b = Ca(a));
                return b
            };
            this["throw"] = function (b) {
                ta(a.g);
                a.g.l ? b = Ba(a, a.g.l["throw"], b, a.g.u) : (ua(a.g, b), b = Ca(a));
                return b
            };
            this["return"] = function (b) {
                return Aa(a, b)
            };
            this[Symbol.iterator] = function () {
                return this
            }
        }

        function Fa(a, b) {
            var c = new Ea(new za(b));
            pa && a.prototype && pa(c, a.prototype);
            return c
        }

        function Ga(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a["throw"](d)
            }
            return new Promise(function (d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        }

        function K(a) {
            return Ga(new Ea(new za(a)))
        }
        ha("Promise", function (a) {
            function b(g) {
                this.h = 0;
                this.i = void 0;
                this.g = [];
                this.s = !1;
                var h = this.j();
                try {
                    g(h.resolve, h.reject)
                } catch (k) {
                    h.reject(k)
                }
            }

            function c() {
                this.g = null
            }

            function d(g) {
                return g instanceof b ? g : new b(function (h) {
                    h(g)
                })
            }
            if (a) return a;
            c.prototype.h = function (g) {
                if (null == this.g) {
                    this.g = [];
                    var h = this;
                    this.i(function () {
                        h.l()
                    })
                }
                this.g.push(g)
            };
            var e = ea.setTimeout;
            c.prototype.i = function (g) {
                e(g, 0)
            };
            c.prototype.l = function () {
                for (; this.g && this.g.length;) {
                    var g = this.g;
                    this.g = [];
                    for (var h = 0; h < g.length; ++h) {
                        var k =
                            g[h];
                        g[h] = null;
                        try {
                            k()
                        } catch (l) {
                            this.j(l)
                        }
                    }
                }
                this.g = null
            };
            c.prototype.j = function (g) {
                this.i(function () {
                    throw g;
                })
            };
            b.prototype.j = function () {
                function g(l) {
                    return function (m) {
                        k || (k = !0, l.call(h, m))
                    }
                }
                var h = this,
                    k = !1;
                return {
                    resolve: g(this.I),
                    reject: g(this.l)
                }
            };
            b.prototype.I = function (g) {
                if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));
                else if (g instanceof b) this.N(g);
                else {
                    a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                    }
                    h ? this.H(g) : this.m(g)
                }
            };
            b.prototype.H = function (g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (k) {
                    this.l(k);
                    return
                }
                "function" == typeof h ? this.S(h, g) : this.m(g)
            };
            b.prototype.l = function (g) {
                this.u(2, g)
            };
            b.prototype.m = function (g) {
                this.u(1, g)
            };
            b.prototype.u = function (g, h) {
                if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
                this.h = g;
                this.i = h;
                2 === this.h && this.L();
                this.D()
            };
            b.prototype.L = function () {
                var g = this;
                e(function () {
                    if (g.F()) {
                        var h = ea.console;
                        "undefined" !== typeof h && h.error(g.i)
                    }
                }, 1)
            };
            b.prototype.F =
                function () {
                    if (this.s) return !1;
                    var g = ea.CustomEvent,
                        h = ea.Event,
                        k = ea.dispatchEvent;
                    if ("undefined" === typeof k) return !0;
                    "function" === typeof g ? g = new g("unhandledrejection", {
                        cancelable: !0
                    }) : "function" === typeof h ? g = new h("unhandledrejection", {
                        cancelable: !0
                    }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                    g.promise = this;
                    g.reason = this.i;
                    return k(g)
                };
            b.prototype.D = function () {
                if (null != this.g) {
                    for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
                    this.g = null
                }
            };
            var f = new c;
            b.prototype.N = function (g) {
                var h = this.j();
                g.rc(h.resolve, h.reject)
            };
            b.prototype.S = function (g, h) {
                var k = this.j();
                try {
                    g.call(h, k.resolve, k.reject)
                } catch (l) {
                    k.reject(l)
                }
            };
            b.prototype.then = function (g, h) {
                function k(p, r) {
                    return "function" == typeof p ? function (u) {
                        try {
                            l(p(u))
                        } catch (w) {
                            m(w)
                        }
                    } : r
                }
                var l, m, n = new b(function (p, r) {
                    l = p;
                    m = r
                });
                this.rc(k(g, l), k(h, m));
                return n
            };
            b.prototype["catch"] = function (g) {
                return this.then(void 0, g)
            };
            b.prototype.rc = function (g, h) {
                function k() {
                    switch (l.h) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                    }
                }
                var l = this;
                null == this.g ? f.h(k) : this.g.push(k);
                this.s = !0
            };
            b.resolve = d;
            b.reject = function (g) {
                return new b(function (h, k) {
                    k(g)
                })
            };
            b.race = function (g) {
                return new b(function (h, k) {
                    for (var l = t(g), m = l.next(); !m.done; m = l.next()) d(m.value).rc(h, k)
                })
            };
            b.all = function (g) {
                var h = t(g),
                    k = h.next();
                return k.done ? d([]) : new b(function (l, m) {
                    function n(u) {
                        return function (w) {
                            p[u] = w;
                            r--;
                            0 == r && l(p)
                        }
                    }
                    var p = [],
                        r = 0;
                    do p.push(void 0), r++, d(k.value).rc(n(p.length - 1), m), k = h.next();
                    while (!k.done)
                })
            };
            return b
        });

        function Ha(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
        ha("WeakMap", function (a) {
            function b(k) {
                this.g = (h += Math.random() + 1).toString();
                if (k) {
                    k = t(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            }

            function c() {}

            function d(k) {
                var l = typeof k;
                return "object" === l && null !== k || "function" === l
            }

            function e(k) {
                if (!Ha(k, g)) {
                    var l = new c;
                    ca(k, g, {
                        value: l
                    })
                }
            }

            function f(k) {
                var l = Object[k];
                l && (Object[k] = function (m) {
                    if (m instanceof c) return m;
                    Object.isExtensible(m) && e(m);
                    return l(m)
                })
            }
            if (function () {
                    if (!a || !Object.seal) return !1;
                    try {
                        var k = Object.seal({}),
                            l = Object.seal({}),
                            m = new a([
                                [k, 2],
                                [l, 3]
                            ]);
                        if (2 != m.get(k) || 3 != m.get(l)) return !1;
                        m["delete"](k);
                        m.set(l, 4);
                        return !m.has(k) && 4 == m.get(l)
                    } catch (n) {
                        return !1
                    }
                }()) return a;
            var g = "$jscomp_hidden_" + Math.random();
            f("freeze");
            f("preventExtensions");
            f("seal");
            var h = 0;
            b.prototype.set = function (k, l) {
                if (!d(k)) throw Error("Invalid WeakMap key");
                e(k);
                if (!Ha(k, g)) throw Error("WeakMap key fail: " + k);
                k[g][this.g] = l;
                return this
            };
            b.prototype.get = function (k) {
                return d(k) && Ha(k, g) ? k[g][this.g] : void 0
            };
            b.prototype.has = function (k) {
                return d(k) &&
                    Ha(k, g) && Ha(k[g], this.g)
            };
            b.prototype["delete"] = function (k) {
                return d(k) && Ha(k, g) && Ha(k[g], this.g) ? delete k[g][this.g] : !1
            };
            return b
        });
        ha("Map", function (a) {
            function b() {
                var h = {};
                return h.Sa = h.next = h.head = h
            }

            function c(h, k) {
                var l = h.g;
                return ia(function () {
                    if (l) {
                        for (; l.head != h.g;) l = l.Sa;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }

            function d(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
                var m = h.h[l];
                if (m && Ha(h.h, l))
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (k !== k && p.key !== p.key || k === p.key) return {
                            id: l,
                            list: m,
                            index: n,
                            ga: p
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    ga: void 0
                }
            }

            function e(h) {
                this.h = {};
                this.g = b();
                this.size = 0;
                if (h) {
                    h = t(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            }
            if (function () {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var h = Object.seal({
                                x: 4
                            }),
                            k = new a(t([
                                [h, "s"]
                            ]));
                        if ("s" != k.get(h) || 1 != k.size || k.get({
                                x: 4
                            }) || k.set({
                                x: 4
                            }, "t") != k || 2 != k.size) return !1;
                        var l = k.entries(),
                            m = l.next();
                        if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                        m = l.next();
                        return m.done || 4 != m.value[0].x ||
                            "t" != m.value[1] || !l.next().done ? !1 : !0
                    } catch (n) {
                        return !1
                    }
                }()) return a;
            var f = new WeakMap;
            e.prototype.set = function (h, k) {
                h = 0 === h ? 0 : h;
                var l = d(this, h);
                l.list || (l.list = this.h[l.id] = []);
                l.ga ? l.ga.value = k : (l.ga = {
                    next: this.g,
                    Sa: this.g.Sa,
                    head: this.g,
                    key: h,
                    value: k
                }, l.list.push(l.ga), this.g.Sa.next = l.ga, this.g.Sa = l.ga, this.size++);
                return this
            };
            e.prototype["delete"] = function (h) {
                h = d(this, h);
                return h.ga && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.ga.Sa.next = h.ga.next, h.ga.next.Sa = h.ga.Sa,
                    h.ga.head = null, this.size--, !0) : !1
            };
            e.prototype.clear = function () {
                this.h = {};
                this.g = this.g.Sa = b();
                this.size = 0
            };
            e.prototype.has = function (h) {
                return !!d(this, h).ga
            };
            e.prototype.get = function (h) {
                return (h = d(this, h).ga) && h.value
            };
            e.prototype.entries = function () {
                return c(this, function (h) {
                    return [h.key, h.value]
                })
            };
            e.prototype.keys = function () {
                return c(this, function (h) {
                    return h.key
                })
            };
            e.prototype.values = function () {
                return c(this, function (h) {
                    return h.value
                })
            };
            e.prototype.forEach = function (h, k) {
                for (var l = this.entries(),
                        m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
            };
            e.prototype[Symbol.iterator] = e.prototype.entries;
            var g = 0;
            return e
        });
        ha("Set", function (a) {
            function b(c) {
                this.g = new Map;
                if (c) {
                    c = t(c);
                    for (var d; !(d = c.next()).done;) this.add(d.value)
                }
                this.size = this.g.size
            }
            if (function () {
                    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                    try {
                        var c = Object.seal({
                                x: 4
                            }),
                            d = new a(t([c]));
                        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                                x: 4
                            }) != d || 2 != d.size) return !1;
                        var e = d.entries(),
                            f = e.next();
                        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                        f = e.next();
                        return f.done || f.value[0] == c || 4 != f.value[0].x ||
                            f.value[1] != f.value[0] ? !1 : e.next().done
                    } catch (g) {
                        return !1
                    }
                }()) return a;
            b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.g.set(c, c);
                this.size = this.g.size;
                return this
            };
            b.prototype["delete"] = function (c) {
                c = this.g["delete"](c);
                this.size = this.g.size;
                return c
            };
            b.prototype.clear = function () {
                this.g.clear();
                this.size = 0
            };
            b.prototype.has = function (c) {
                return this.g.has(c)
            };
            b.prototype.entries = function () {
                return this.g.entries()
            };
            b.prototype.values = function () {
                return this.g.values()
            };
            b.prototype.keys = b.prototype.values;
            b.prototype[Symbol.iterator] = b.prototype.values;
            b.prototype.forEach = function (c, d) {
                var e = this;
                this.g.forEach(function (f) {
                    return c.call(d, f, f, e)
                })
            };
            return b
        });
        ha("Object.is", function (a) {
            return a ? a : function (b, c) {
                return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
            }
        });
        ha("Array.prototype.includes", function (a) {
            return a ? a : function (b, c) {
                var d = this;
                d instanceof String && (d = String(d));
                var e = d.length,
                    f = c || 0;
                for (0 > f && (f = Math.max(f + e, 0)); f < e; f++) {
                    var g = d[f];
                    if (g === b || Object.is(g, b)) return !0
                }
                return !1
            }
        });

        function Ja(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        }
        ha("String.prototype.includes", function (a) {
            return a ? a : function (b, c) {
                return -1 !== Ja(this, b, "includes").indexOf(b, c || 0)
            }
        });

        function Ka(a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                if (b.call(c, f, e, a)) return {
                    ha: e,
                    ue: f
                }
            }
            return {
                ha: -1,
                ue: void 0
            }
        }
        ha("Array.prototype.findIndex", function (a) {
            return a ? a : function (b, c) {
                return Ka(this, b, c).ha
            }
        });

        function La(a, b) {
            a instanceof String && (a += "");
            var c = 0,
                d = !1,
                e = {
                    next: function () {
                        if (!d && c < a.length) {
                            var f = c++;
                            return {
                                value: b(f, a[f]),
                                done: !1
                            }
                        }
                        d = !0;
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                };
            e[Symbol.iterator] = function () {
                return e
            };
            return e
        }
        ha("Array.prototype.values", function (a) {
            return a ? a : function () {
                return La(this, function (b, c) {
                    return c
                })
            }
        });
        ha("Array.prototype.find", function (a) {
            return a ? a : function (b, c) {
                return Ka(this, b, c).ue
            }
        });
        ha("String.prototype.startsWith", function (a) {
            return a ? a : function (b, c) {
                for (var d = Ja(this, b, "startsWith"), e = d.length, f = b.length, g = Math.max(0, Math.min(c | 0, d.length)), h = 0; h < f && g < e;)
                    if (d[g++] != b[h++]) return !1;
                return h >= f
            }
        });
        ha("Array.prototype.keys", function (a) {
            return a ? a : function () {
                return La(this, function (b) {
                    return b
                })
            }
        });
        var Ma = "function" == typeof Object.assign ? Object.assign : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Ha(d, e) && (a[e] = d[e])
            }
            return a
        };
        ha("Object.assign", function (a) {
            return a || Ma
        });
        ha("Array.from", function (a) {
            return a ? a : function (b, c, d) {
                c = null != c ? c : function (h) {
                    return h
                };
                var e = [],
                    f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
                if ("function" == typeof f) {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
                } else
                    for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
                return e
            }
        });
        ha("Promise.prototype.finally", function (a) {
            return a ? a : function (b) {
                return this.then(function (c) {
                    return Promise.resolve(b()).then(function () {
                        return c
                    })
                }, function (c) {
                    return Promise.resolve(b()).then(function () {
                        throw c;
                    })
                })
            }
        });
        ha("Array.prototype.entries", function (a) {
            return a ? a : function () {
                return La(this, function (b, c) {
                    return [b, c]
                })
            }
        });
        ha("String.prototype.repeat", function (a) {
            return a ? a : function (b) {
                var c = Ja(this, null, "repeat");
                if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
                b |= 0;
                for (var d = ""; b;)
                    if (b & 1 && (d += c), b >>>= 1) c += c;
                return d
            }
        });
        ha("Object.values", function (a) {
            return a ? a : function (b) {
                var c = [],
                    d;
                for (d in b) Ha(b, d) && c.push(b[d]);
                return c
            }
        });
        ha("Math.log2", function (a) {
            return a ? a : function (b) {
                return Math.log(b) / Math.LN2
            }
        });
        ha("Object.entries", function (a) {
            return a ? a : function (b) {
                var c = [],
                    d;
                for (d in b) Ha(b, d) && c.push([d, b[d]]);
                return c
            }
        });
        var Na = this || self;

        function L(a, b) {
            var c = a.split("."),
                d = Na;
            c[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {} : d[e] = b
        };

        function Oa(a) {
            this.i = Math.exp(Math.log(.5) / a);
            this.h = this.g = 0
        }

        function Pa(a, b, c) {
            var d = Math.pow(a.i, b);
            c = c * (1 - d) + d * a.g;
            isNaN(c) || (a.g = c, a.h += b)
        }

        function Qa(a) {
            return a.g / (1 - Math.pow(a.i, a.h))
        };

        function Ra() {
            this.h = new Oa(2);
            this.i = new Oa(5);
            this.g = 0
        }
        Ra.prototype.getBandwidthEstimate = function (a) {
            return 128E3 > this.g ? a : Math.min(Qa(this.h), Qa(this.i))
        };

        function Sa() {}

        function Ta() {}

        function Ua() {}

        function Va(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            Wa.has(a) || (Wa.add(a), Ua.apply(Sa, ja(c)))
        }

        function Xa() {}

        function bb() {}

        function cb() {}

        function db() {}
        var Wa = new Set;
        if (window.console && window.console.log.bind) {
            var eb = {},
                fb = (eb[1] = console.error.bind(console), eb[2] = console.warn.bind(console), eb[3] = console.info.bind(console), eb[4] = console.log.bind(console), eb[5] = console.debug.bind(console), eb[6] = console.debug.bind(console), eb);
            Ua = fb[2];
            Ta = fb[1]
        };

        function gb(a, b) {
            for (var c = [], d = t(a), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));
            return c
        }

        function hb(a, b) {
            for (var c = t(a), d = c.next(); !d.done; d = c.next())
                if (!b(d.value)) return !1;
            return !0
        }
        var jb = function ib(a) {
                var c;
                return Fa(ib, function (d) {
                    1 == d.g && (c = 0);
                    if (3 != d.g) return c < a ? v(d, c, 3) : d.v(0);
                    c++;
                    return d.v(2)
                })
            },
            mb = function lb(a) {
                var c, d, e, f, g, h;
                return Fa(lb, function (k) {
                    1 == k.g && (c = -1, e = d = void 0, f = t(a), g = f.next());
                    if (5 != k.g) {
                        if (g.done) return -1 == c ? k.v(0) : v(k, {
                            ha: c,
                            rf: d,
                            item: e,
                            next: void 0
                        }, 0);
                        h = g.value;
                        return 0 <= c ? v(k, {
                            ha: c,
                            item: e,
                            rf: d,
                            next: h
                        }, 5) : k.v(5)
                    }
                    c++;
                    d = e;
                    e = h;
                    g = f.next();
                    return k.v(2)
                })
            };

        function nb() {}

        function ob(a, b) {
            if (!a && !b) return !0;
            if (!a || !b || a.byteLength != b.byteLength) return !1;
            if (pb(a) == pb(b) && (a.byteOffset || 0) == (b.byteOffset || 0)) return !0;
            for (var c = qb(a), d = qb(b), e = t(jb(a.byteLength)), f = e.next(); !f.done; f = e.next())
                if (f = f.value, c[f] != d[f]) return !1;
            return !0
        }

        function pb(a) {
            return a instanceof ArrayBuffer ? a : a.buffer
        }

        function rb(a) {
            return a instanceof ArrayBuffer ? a : 0 == a.byteOffset && a.byteLength == a.buffer.byteLength ? a.buffer : (new Uint8Array(a)).buffer
        }

        function qb(a, b, c) {
            c = void 0 === c ? Infinity : c;
            return sb(a, void 0 === b ? 0 : b, c, Uint8Array)
        }

        function tb(a, b, c) {
            c = void 0 === c ? Infinity : c;
            return sb(a, void 0 === b ? 0 : b, c, DataView)
        }

        function sb(a, b, c, d) {
            var e = (a.byteOffset || 0) + a.byteLength;
            b = Math.max(0, Math.min((a.byteOffset || 0) + b, e));
            return new d(pb(a), b, Math.min(b + Math.max(c, 0), e) - b)
        }
        L("shaka.util.BufferUtils", nb);
        nb.toDataView = tb;
        nb.toUint8 = qb;
        nb.toArrayBuffer = rb;
        nb.equal = ob;

        function O(a, b, c, d) {
            for (var e = [], f = 3; f < arguments.length; ++f) e[f - 3] = arguments[f];
            this.severity = a;
            this.category = b;
            this.code = c;
            this.data = e;
            this.handled = !1
        }
        O.prototype.toString = function () {
            return "shaka.util.Error " + JSON.stringify(this, null, "  ")
        };
        L("shaka.util.Error", O);
        O.Severity = {
            RECOVERABLE: 1,
            CRITICAL: 2
        };
        O.Category = {
            NETWORK: 1,
            TEXT: 2,
            MEDIA: 3,
            MANIFEST: 4,
            STREAMING: 5,
            DRM: 6,
            PLAYER: 7,
            CAST: 8,
            STORAGE: 9,
            ADS: 10
        };
        O.Code = {
            UNSUPPORTED_SCHEME: 1E3,
            BAD_HTTP_STATUS: 1001,
            HTTP_ERROR: 1002,
            TIMEOUT: 1003,
            MALFORMED_DATA_URI: 1004,
            REQUEST_FILTER_ERROR: 1006,
            RESPONSE_FILTER_ERROR: 1007,
            MALFORMED_TEST_URI: 1008,
            UNEXPECTED_TEST_REQUEST: 1009,
            ATTEMPTS_EXHAUSTED: 1010,
            INVALID_TEXT_HEADER: 2E3,
            INVALID_TEXT_CUE: 2001,
            UNABLE_TO_DETECT_ENCODING: 2003,
            BAD_ENCODING: 2004,
            INVALID_XML: 2005,
            INVALID_MP4_TTML: 2007,
            INVALID_MP4_VTT: 2008,
            UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
            INVALID_MP4_CEA: 2010,
            TEXT_COULD_NOT_GUESS_MIME_TYPE: 2011,
            CANNOT_ADD_EXTERNAL_TEXT_TO_SRC_EQUALS: 2012,
            TEXT_ONLY_WEBVTT_SRC_EQUALS: 2013,
            MISSING_TEXT_PLUGIN: 2014,
            BUFFER_READ_OUT_OF_BOUNDS: 3E3,
            JS_INTEGER_OVERFLOW: 3001,
            EBML_OVERFLOW: 3002,
            EBML_BAD_FLOATING_POINT_SIZE: 3003,
            MP4_SIDX_WRONG_BOX_TYPE: 3004,
            MP4_SIDX_INVALID_TIMESCALE: 3005,
            MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
            WEBM_CUES_ELEMENT_MISSING: 3007,
            WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
            WEBM_SEGMENT_ELEMENT_MISSING: 3009,
            WEBM_INFO_ELEMENT_MISSING: 3010,
            WEBM_DURATION_ELEMENT_MISSING: 3011,
            WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
            WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
            MEDIA_SOURCE_OPERATION_FAILED: 3014,
            MEDIA_SOURCE_OPERATION_THREW: 3015,
            VIDEO_ERROR: 3016,
            QUOTA_EXCEEDED_ERROR: 3017,
            TRANSMUXING_FAILED: 3018,
            CONTENT_TRANSFORMATION_FAILED: 3019,
            UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
            DASH_INVALID_XML: 4001,
            DASH_NO_SEGMENT_INFO: 4002,
            DASH_EMPTY_ADAPTATION_SET: 4003,
            DASH_EMPTY_PERIOD: 4004,
            DASH_WEBM_MISSING_INIT: 4005,
            DASH_UNSUPPORTED_CONTAINER: 4006,
            DASH_PSSH_BAD_ENCODING: 4007,
            DASH_NO_COMMON_KEY_SYSTEM: 4008,
            DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
            DASH_CONFLICTING_KEY_IDS: 4010,
            RESTRICTIONS_CANNOT_BE_MET: 4012,
            HLS_PLAYLIST_HEADER_MISSING: 4015,
            INVALID_HLS_TAG: 4016,
            HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
            DASH_DUPLICATE_REPRESENTATION_ID: 4018,
            HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
            HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
            HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
            HLS_REQUIRED_TAG_MISSING: 4024,
            HLS_COULD_NOT_GUESS_CODECS: 4025,
            HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
            DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
            DASH_XLINK_DEPTH_LIMIT: 4028,
            HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
            CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
            CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
            HLS_AES_128_ENCRYPTION_NOT_SUPPORTED: 4034,
            HLS_INTERNAL_SKIP_STREAM: 4035,
            NO_VARIANTS: 4036,
            PERIOD_FLATTENING_FAILED: 4037,
            INCONSISTENT_DRM_ACROSS_PERIODS: 4038,
            HLS_VARIABLE_NOT_FOUND: 4039,
            STREAMING_ENGINE_STARTUP_INVALID_STATE: 5006,
            NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
            REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
            FAILED_TO_CREATE_CDM: 6002,
            FAILED_TO_ATTACH_TO_VIDEO: 6003,
            INVALID_SERVER_CERTIFICATE: 6004,
            FAILED_TO_CREATE_SESSION: 6005,
            FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
            LICENSE_REQUEST_FAILED: 6007,
            LICENSE_RESPONSE_REJECTED: 6008,
            ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
            NO_LICENSE_SERVER_GIVEN: 6012,
            OFFLINE_SESSION_REMOVED: 6013,
            EXPIRED: 6014,
            SERVER_CERTIFICATE_REQUIRED: 6015,
            INIT_DATA_TRANSFORM_ERROR: 6016,
            LOAD_INTERRUPTED: 7E3,
            OPERATION_ABORTED: 7001,
            NO_VIDEO_ELEMENT: 7002,
            OBJECT_DESTROYED: 7003,
            CONTENT_NOT_LOADED: 7004,
            CAST_API_UNAVAILABLE: 8E3,
            NO_CAST_RECEIVERS: 8001,
            ALREADY_CASTING: 8002,
            UNEXPECTED_CAST_ERROR: 8003,
            CAST_CANCELED_BY_USER: 8004,
            CAST_CONNECTION_TIMED_OUT: 8005,
            CAST_RECEIVER_APP_UNAVAILABLE: 8006,
            STORAGE_NOT_SUPPORTED: 9E3,
            INDEXED_DB_ERROR: 9001,
            DEPRECATED_OPERATION_ABORTED: 9002,
            REQUESTED_ITEM_NOT_FOUND: 9003,
            MALFORMED_OFFLINE_URI: 9004,
            CANNOT_STORE_LIVE_OFFLINE: 9005,
            NO_INIT_DATA_FOR_OFFLINE: 9007,
            LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
            NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
            KEY_NOT_FOUND: 9012,
            MISSING_STORAGE_CELL: 9013,
            STORAGE_LIMIT_REACHED: 9014,
            DOWNLOAD_SIZE_CALLBACK_ERROR: 9015,
            CS_IMA_SDK_MISSING: 1E4,
            CS_AD_MANAGER_NOT_INITIALIZED: 10001,
            SS_IMA_SDK_MISSING: 10002,
            SS_AD_MANAGER_NOT_INITIALIZED: 10003,
            CURRENT_DAI_REQUEST_NOT_FINISHED: 10004
        };

        function ub(a) {
            this.h = a;
            this.g = void 0
        }
        ub.prototype.value = function () {
            void 0 == this.g && (this.g = this.h());
            return this.g
        };

        function vb() {}

        function wb(a) {
            if (!a) return "";
            a = qb(a);
            239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
            a = (new TextDecoder).decode(a);
            a.includes("�") && Ta('Decoded string contains an "unknown character" codepoint.  That probably means the UTF8 encoding was incorrect!');
            return a
        }

        function xb(a, b, c) {
            if (!a) return "";
            if (!c && 0 != a.byteLength % 2) throw new O(2, 2, 2004);
            var d = Math.floor(a.byteLength / 2);
            c = new Uint16Array(d);
            a = tb(a);
            d = t(jb(d));
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, c[e] = a.getUint16(2 * e, b);
            return yb.value()(c)
        }

        function zb(a) {
            function b(d) {
                return c.byteLength <= d || 32 <= c[d] && 126 >= c[d]
            }
            if (!a) return "";
            var c = qb(a);
            if (239 == c[0] && 187 == c[1] && 191 == c[2]) return wb(c);
            if (254 == c[0] && 255 == c[1]) return xb(c.subarray(2), !1);
            if (255 == c[0] && 254 == c[1]) return xb(c.subarray(2), !0);
            if (0 == c[0] && 0 == c[2]) return xb(a, !1);
            if (0 == c[1] && 0 == c[3]) return xb(a, !0);
            if (b(0) && b(1) && b(2) && b(3)) return wb(a);
            throw new O(2, 2, 2003);
        }

        function Ab(a) {
            var b = new TextEncoder;
            return rb(b.encode(a))
        }

        function Cb(a, b) {
            for (var c = new ArrayBuffer(2 * a.length), d = new DataView(c), e = t(mb(a)), f = e.next(); !f.done; f = e.next()) f = f.value, d.setUint16(2 * f.ha, f.item.charCodeAt(0), b);
            return c
        }
        L("shaka.util.StringUtils", vb);
        vb.resetFromCharCode = function () {
            yb.g = void 0
        };
        vb.toUTF16 = Cb;
        vb.toUTF8 = Ab;
        vb.fromBytesAutoDetect = zb;
        vb.fromUTF16 = xb;
        vb.fromUTF8 = wb;
        var yb = new ub(function () {
            function a(c) {
                try {
                    var d = new Uint8Array(c);
                    return 0 < String.fromCharCode.apply(null, d).length
                } catch (e) {
                    return !1
                }
            }
            for (var b = {
                    Ua: 65536
                }; 0 < b.Ua; b = {
                    Ua: b.Ua
                }, b.Ua /= 2)
                if (a(b.Ua)) return function (c) {
                    return function (d) {
                        for (var e = "", f = 0; f < d.length; f += c.Ua) e += String.fromCharCode.apply(null, d.subarray(f, f + c.Ua));
                        return e
                    }
                }(b);
            return null
        });

        function Db(a, b) {
            this.R = tb(a);
            this.h = b == Eb;
            this.g = 0
        }
        q = Db.prototype;
        q.na = function () {
            return this.g < this.R.byteLength
        };
        q.Z = function () {
            return this.g
        };
        q.Pe = function () {
            return this.R.byteLength
        };
        q.$ = function () {
            try {
                var a = this.R.getUint8(this.g);
                this.g += 1;
                return a
            } catch (b) {
                throw Fb();
            }
        };
        q.Fb = function () {
            try {
                var a = this.R.getUint16(this.g, this.h);
                this.g += 2;
                return a
            } catch (b) {
                throw Fb();
            }
        };
        q.M = function () {
            try {
                var a = this.R.getUint32(this.g, this.h);
                this.g += 4;
                return a
            } catch (b) {
                throw Fb();
            }
        };
        q.he = function () {
            try {
                var a = this.R.getInt32(this.g, this.h);
                this.g += 4;
                return a
            } catch (b) {
                throw Fb();
            }
        };
        q.kb = function () {
            try {
                if (this.h) {
                    var a = this.R.getUint32(this.g, !0);
                    var b = this.R.getUint32(this.g + 4, !0)
                } else b = this.R.getUint32(this.g, !1), a = this.R.getUint32(this.g + 4, !1)
            } catch (c) {
                throw Fb();
            }
            if (2097151 < b) throw new O(2, 3, 3001);
            this.g += 8;
            return b * Math.pow(2, 32) + a
        };
        q.Za = function (a) {
            if (this.g + a > this.R.byteLength) throw Fb();
            var b = qb(this.R, this.g, a);
            this.g += a;
            return b
        };
        q.skip = function (a) {
            if (this.g + a > this.R.byteLength) throw Fb();
            this.g += a
        };
        q.je = function (a) {
            if (this.g < a) throw Fb();
            this.g -= a
        };
        q.seek = function (a) {
            if (0 > a || a > this.R.byteLength) throw Fb();
            this.g = a
        };
        q.Yb = function () {
            for (var a = this.g; this.na() && 0 != this.R.getUint8(this.g);) this.g += 1;
            a = qb(this.R, a, this.g - a);
            this.g += 1;
            return wb(a)
        };

        function Fb() {
            return new O(2, 3, 3E3)
        }
        L("shaka.util.DataViewReader", Db);
        Db.prototype.readTerminatedString = Db.prototype.Yb;
        Db.prototype.seek = Db.prototype.seek;
        Db.prototype.rewind = Db.prototype.je;
        Db.prototype.skip = Db.prototype.skip;
        Db.prototype.readBytes = Db.prototype.Za;
        Db.prototype.readUint64 = Db.prototype.kb;
        Db.prototype.readInt32 = Db.prototype.he;
        Db.prototype.readUint32 = Db.prototype.M;
        Db.prototype.readUint16 = Db.prototype.Fb;
        Db.prototype.readUint8 = Db.prototype.$;
        Db.prototype.getLength = Db.prototype.Pe;
        Db.prototype.getPosition = Db.prototype.Z;
        Db.prototype.hasMoreData = Db.prototype.na;
        var Eb = 1;
        Db.Endianness = {
            BIG_ENDIAN: 0,
            LITTLE_ENDIAN: Eb
        };

        function Gb(a, b) {
            this.g = a;
            this.h = b
        }
        Gb.prototype.toString = function () {
            return "v" + this.g + "." + this.h
        };

        function Hb(a, b) {
            var c = new Gb(4, 0),
                d = Ib,
                e = d.g,
                f = c.h - e.h;
            (0 < (c.g - e.g || f) ? d.i : d.h)(d.g, c, a, b)
        }

        function Jb(a, b, c, d) {
            Ua([c, "has been deprecated and will be removed in", b, ". We are currently at version", a, ". Additional information:", d].join(" "))
        }

        function Kb(a, b, c, d) {
            Ta([c, "has been deprecated and has been removed in", b, ". We are now at version", a, ". Additional information:", d].join(""))
        }
        var Ib = null;

        function Lb(a, b) {
            return a.concat(b)
        }

        function Mb() {}

        function Nb(a) {
            return null != a
        }

        function Ob(a) {
            var b = Object.create(a.prototype || Object.prototype);
            try {
                var c = a.call(b);
                c || (Hb("Factories requiring new", "Factories should be plain functions"), c = b)
            } catch (d) {
                Hb("Factories requiring new", "Factories should be plain functions"), c = new a
            }
            return c
        };

        function Qb() {
            this.i = [];
            this.h = [];
            this.g = !1
        }
        q = Qb.prototype;
        q.box = function (a, b) {
            var c = Rb(a);
            this.i[c] = Sb;
            this.h[c] = b;
            return this
        };
        q.U = function (a, b) {
            var c = Rb(a);
            this.i[c] = Tb;
            this.h[c] = b;
            return this
        };
        q.stop = function () {
            this.g = !0
        };
        q.parse = function (a, b, c) {
            a = new Db(a, 0);
            for (this.g = !1; a.na() && !this.g;) this.Fc(0, a, b, c)
        };
        q.Fc = function (a, b, c, d) {
            var e = b.Z();
            if (d && e + 8 > b.R.byteLength) this.g = !0;
            else {
                var f = b.M(),
                    g = b.M(),
                    h = !1;
                switch (f) {
                case 0:
                    f = b.R.byteLength - e;
                    break;
                case 1:
                    if (d && b.Z() + 8 > b.R.byteLength) {
                        this.g = !0;
                        return
                    }
                    f = b.kb();
                    h = !0
                }
                var k = this.h[g];
                if (k) {
                    var l = null,
                        m = null;
                    if (this.i[g] == Tb) {
                        if (d && b.Z() + 4 > b.R.byteLength) {
                            this.g = !0;
                            return
                        }
                        m = b.M();
                        l = m >>> 24;
                        m &= 16777215
                    }
                    g = e + f;
                    c && g > b.R.byteLength && (g = b.R.byteLength);
                    d && g > b.R.byteLength ? this.g = !0 : (d = g - b.Z(), b = 0 < d ? b.Za(d) : new Uint8Array(0), b = new Db(b, 0), k({
                        parser: this,
                        partialOkay: c ||
                            !1,
                        version: l,
                        flags: m,
                        reader: b,
                        size: f,
                        start: e + a,
                        has64BitSize: h
                    }))
                } else b.skip(Math.min(e + f - b.Z(), b.R.byteLength - b.Z()))
            }
        };

        function Ub(a) {
            for (var b = Vb(a); a.reader.na() && !a.parser.g;) a.parser.Fc(a.start + b, a.reader, a.partialOkay)
        }

        function Wb(a) {
            var b = Vb(a),
                c = a.reader.M();
            c = t(jb(c));
            for (var d = c.next(); !d.done && (a.parser.Fc(a.start + b, a.reader, a.partialOkay), !a.parser.g); d = c.next());
        }

        function Xb(a) {
            return function (b) {
                a(b.reader.Za(b.reader.R.byteLength - b.reader.Z()))
            }
        }

        function Rb(a) {
            var b = 0;
            a = t(a);
            for (var c = a.next(); !c.done; c = a.next()) b = b << 8 | c.value.charCodeAt(0);
            return b
        }

        function Yb(a) {
            return String.fromCharCode(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255)
        }

        function Vb(a) {
            return 8 + (a.has64BitSize ? 8 : 0) + (null != a.flags ? 4 : 0)
        }
        L("shaka.util.Mp4Parser", Qb);
        Qb.headerSize = Vb;
        Qb.typeToString = Yb;
        Qb.allData = Xb;
        Qb.sampleDescription = Wb;
        Qb.children = Ub;
        Qb.prototype.parseNext = Qb.prototype.Fc;
        Qb.prototype.parse = Qb.prototype.parse;
        Qb.prototype.stop = Qb.prototype.stop;
        Qb.prototype.fullBox = Qb.prototype.U;
        Qb.prototype.box = Qb.prototype.box;
        var Sb = 0,
            Tb = 1;

        function Zb(a) {
            this.h = a;
            this.g = null
        }
        Zb.prototype.T = function (a) {
            var b = this;
            this.stop();
            var c = !0,
                d = null;
            this.g = function () {
                window.clearTimeout(d);
                c = !1
            };
            d = window.setTimeout(function () {
                c && b.h()
            }, 1E3 * a);
            return this
        };
        Zb.prototype.stop = function () {
            this.g && (this.g(), this.g = null)
        };

        function P(a) {
            this.h = a;
            this.g = null
        }
        P.prototype.bc = function () {
            this.stop();
            this.h();
            return this
        };
        P.prototype.T = function (a) {
            var b = this;
            this.stop();
            this.g = (new Zb(function () {
                b.h()
            })).T(a);
            return this
        };
        P.prototype.Ba = function (a) {
            var b = this;
            this.stop();
            this.g = (new Zb(function () {
                b.g.T(a);
                b.h()
            })).T(a);
            return this
        };
        P.prototype.stop = function () {
            this.g && (this.g.stop(), this.g = null)
        };
        L("shaka.util.Timer", P);
        P.prototype.stop = P.prototype.stop;
        P.prototype.tickEvery = P.prototype.Ba;
        P.prototype.tickAfter = P.prototype.T;
        P.prototype.tickNow = P.prototype.bc;

        function $b() {
            return window.MediaSource && MediaSource.isTypeSupported ? !0 : !1
        }

        function ac(a) {
            return "" != bc().canPlayType(a)
        }

        function cc() {
            return dc("Xbox One")
        }

        function ec() {
            return dc("Tizen")
        }

        function fc() {
            return dc("CrKey")
        }

        function gc() {
            return !!navigator.vendor && navigator.vendor.includes("Apple") && !ec()
        }

        function hc() {
            if (!gc()) return null;
            var a = navigator.userAgent.match(/Version\/(\d+)/);
            return a ? parseInt(a[1], 10) : (a = navigator.userAgent.match(/OS (\d+)(?:_\d+)?/)) ? parseInt(a[1], 10) : null
        }

        function dc(a) {
            return (navigator.userAgent || "").includes(a)
        }

        function bc() {
            if (ic) return ic;
            jc || (jc = new P(function () {
                ic = null
            }));
            (ic = document.getElementsByTagName("video")[0] || document.getElementsByTagName("audio")[0]) || (ic = document.createElement("video"));
            jc.T(1);
            return ic
        }
        var jc = null,
            ic = null;

        function kc() {}

        function lc(a) {
            a = qb(a);
            a = yb.value()(a);
            return btoa(a)
        }

        function mc(a, b) {
            b = void 0 == b ? !0 : b;
            var c = lc(a).replace(/\+/g, "-").replace(/\//g, "_");
            return b ? c : c.replace(/[=]*$/, "")
        }

        function nc(a) {
            var b = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
            a = new Uint8Array(b.length);
            b = t(mb(b));
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, a[c.ha] = c.item.charCodeAt(0);
            return a
        }

        function oc(a) {
            var b = a.length / 2,
                c = new Uint8Array(b);
            b = t(jb(b));
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = window.parseInt(a.substr(2 * d, 2), 16);
            return c
        }

        function pc(a) {
            var b = qb(a);
            a = "";
            b = t(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, c = c.toString(16), 1 == c.length && (c = "0" + c), a += c;
            return a
        }

        function qc(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
            var d = 0,
                e = t(b);
            for (c = e.next(); !c.done; c = e.next()) d += c.value.byteLength;
            d = new Uint8Array(d);
            e = 0;
            b = t(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, d.set(qb(c), e), e += c.byteLength;
            return d
        }
        L("shaka.util.Uint8ArrayUtils", kc);
        kc.concat = qc;
        kc.toHex = pc;
        kc.fromHex = oc;
        kc.fromBase64 = nc;
        kc.toBase64 = mc;
        kc.toStandardBase64 = lc;
        kc.equal = function (a, b) {
            Hb("shaka.util.Uint8ArrayUtils.equal", "Please use shaka.util.BufferUtils.equal instead.");
            return ob(a, b)
        };

        function rc(a) {
            function b() {
                d = !0
            }

            function c(l) {
                f.push(l);
                Ub(l)
            }
            a = qb(a);
            var d = !1,
                e, f = [],
                g = [];
            (new Qb).box("moov", c).box("trak", c).box("mdia", c).box("minf", c).box("stbl", c).U("stsd", function (l) {
                e = l;
                f.push(l);
                Wb(l)
            }).U("encv", b).U("enca", b).U("avc1", function (l) {
                g.push({
                    box: l,
                    td: 1701733238
                })
            }).U("ec-3", function (l) {
                g.push({
                    box: l,
                    td: 1701733217
                })
            }).U("mp4a", function (l) {
                g.push({
                    box: l,
                    td: 1701733217
                })
            }).parse(a);
            if (d) return a;
            if (0 == g.length || !e) throw db(pc(a)), new O(2, 3, 3019);
            g.reverse();
            for (var h = t(g), k = h.next(); !k.done; k =
                h.next()) k = k.value, a = sc(a, e, k.box, f, k.td);
            return a
        }

        function sc(a, b, c, d, e) {
            var f = tc.value(),
                g = a.subarray(c.start, c.start + c.size),
                h = tb(g),
                k = new Uint8Array(c.size + f.byteLength);
            k.set(g, 0);
            g = tb(k);
            g.setUint32(4, e);
            k.set(f, c.size);
            e = h.getUint32(4);
            g.setUint32(c.size + 16, e);
            uc(k, 0, k.byteLength);
            e = new Uint8Array(a.byteLength + k.byteLength);
            c = cc() ? c.start : c.start + c.size;
            f = a.subarray(c);
            e.set(a.subarray(0, c));
            e.set(k, c);
            e.set(f, c + k.byteLength);
            a = t(d);
            for (d = a.next(); !d.done; d = a.next()) d = d.value, uc(e, d.start, d.size + k.byteLength);
            k = tb(e, b.start);
            b = Vb(b);
            a = k.getUint32(b);
            k.setUint32(b, a + 1);
            return e
        }

        function uc(a, b, c) {
            a = tb(a, b);
            b = a.getUint32(0);
            0 != b && (1 == b ? (a.setUint32(8, c >> 32), a.setUint32(12, c & 4294967295)) : a.setUint32(0, c))
        }
        var tc = new ub(function () {
            return new Uint8Array([0, 0, 0, 80, 115, 105, 110, 102, 0, 0, 0, 12, 102, 114, 109, 97, 0, 0, 0, 0, 0, 0, 0, 20, 115, 99, 104, 109, 0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0, 0, 0, 0, 40, 115, 99, 104, 105, 0, 0, 0, 32, 116, 101, 110, 99, 0, 0, 0, 0, 0, 0, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        });

        function vc(a, b) {
            return "number" === typeof a && "number" === typeof b && isNaN(a) && isNaN(b) ? !0 : a === b
        }

        function wc(a, b) {
            var c = a.indexOf(b); - 1 < c && a.splice(c, 1)
        }

        function xc(a, b, c) {
            c || (c = vc);
            if (a.length != b.length) return !1;
            b = b.slice();
            var d = {};
            a = t(a);
            for (var e = a.next(); !e.done; d = {
                    Pc: d.Pc
                }, e = a.next()) {
                d.Pc = e.value;
                e = b.findIndex(function (f) {
                    return function (g) {
                        return c(f.Pc, g)
                    }
                }(d));
                if (-1 == e) return !1;
                b[e] = b[b.length - 1];
                b.pop()
            }
            return 0 == b.length
        }

        function yc(a, b, c) {
            c || (c = vc);
            if (a.length != b.length) return !1;
            for (var d = 0; d < a.length; d++)
                if (!c(a[d], b[d])) return !1;
            return !0
        };

        function zc(a, b, c) {
            this.startTime = a;
            this.direction = Ac;
            this.endTime = b;
            this.payload = c;
            this.region = new Bc;
            this.position = null;
            this.positionAlign = Dc;
            this.size = 0;
            this.textAlign = Ec;
            this.writingMode = Fc;
            this.lineInterpretation = Gc;
            this.line = null;
            this.lineHeight = "";
            this.lineAlign = Hc;
            this.displayAlign = Ic;
            this.fontSize = this.border = this.backgroundImage = this.backgroundColor = this.color = "";
            this.fontWeight = Jc;
            this.fontStyle = Kc;
            this.linePadding = this.letterSpacing = this.fontFamily = "";
            this.opacity = 1;
            this.textDecoration = [];
            this.wrapLine = !0;
            this.id = "";
            this.nestedCues = [];
            this.spacer = this.lineBreak = !1;
            this.cellResolution = {
                columns: 32,
                rows: 15
            }
        }
        zc.prototype.clone = function () {
            var a = new zc(0, 0, ""),
                b;
            for (b in this) a[b] = this[b], a[b] && a[b].constructor == Array && (a[b] = a[b].slice());
            return a
        };

        function Lc(a, b) {
            if (a.startTime != b.startTime || a.endTime != b.endTime || a.payload != b.payload) return !1;
            for (var c in a)
                if ("startTime" != c && "endTime" != c && "payload" != c)
                    if ("nestedCues" == c) {
                        if (!yc(a.nestedCues, b.nestedCues, Lc)) return !1
                    } else if ("region" == c || "cellResolution" == c)
                for (var d in a[c]) {
                    if (a[c][d] != b[c][d]) return !1
                } else if (Array.isArray(a[c])) {
                    if (!yc(a[c], b[c])) return !1
                } else if (a[c] != b[c]) return !1;
            return !0
        }
        L("shaka.text.Cue", zc);
        var Dc = "auto";
        zc.positionAlign = {
            LEFT: "line-left",
            RIGHT: "line-right",
            CENTER: "center",
            AUTO: Dc
        };
        var Ec = "center",
            Mc = {
                LEFT: "left",
                RIGHT: "right",
                CENTER: Ec,
                START: "start",
                END: "end"
            };
        zc.textAlign = Mc;
        var Ic = "after",
            Nc = {
                BEFORE: "before",
                CENTER: "center",
                AFTER: Ic
            };
        zc.displayAlign = Nc;
        var Ac = "ltr";
        zc.direction = {
            HORIZONTAL_LEFT_TO_RIGHT: Ac,
            HORIZONTAL_RIGHT_TO_LEFT: "rtl"
        };
        var Fc = "horizontal-tb";
        zc.writingMode = {
            HORIZONTAL_TOP_TO_BOTTOM: Fc,
            VERTICAL_LEFT_TO_RIGHT: "vertical-lr",
            VERTICAL_RIGHT_TO_LEFT: "vertical-rl"
        };
        var Gc = 0;
        zc.lineInterpretation = {
            LINE_NUMBER: Gc,
            PERCENTAGE: 1
        };
        var Hc = "start",
            Oc = {
                CENTER: "center",
                START: Hc,
                END: "end"
            };
        zc.lineAlign = Oc;
        var Pc = {
            white: "#FFF",
            lime: "#0F0",
            cyan: "#0FF",
            red: "#F00",
            yellow: "#FF0",
            magenta: "#F0F",
            blue: "#00F",
            black: "#000"
        };
        zc.defaultTextColor = Pc;
        var Qc = {
            bg_white: "#FFF",
            bg_lime: "#0F0",
            bg_cyan: "#0FF",
            bg_red: "#F00",
            bg_yellow: "#FF0",
            bg_magenta: "#F0F",
            bg_blue: "#00F",
            bg_black: "#000"
        };
        zc.defaultTextBackgroundColor = Qc;
        var Jc = 400;
        zc.fontWeight = {
            NORMAL: Jc,
            BOLD: 700
        };
        var Kc = "normal",
            Rc = {
                NORMAL: Kc,
                ITALIC: "italic",
                OBLIQUE: "oblique"
            };
        zc.fontStyle = Rc;
        zc.textDecoration = {
            UNDERLINE: "underline",
            LINE_THROUGH: "lineThrough",
            OVERLINE: "overline"
        };

        function Bc() {
            this.id = "";
            this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0;
            this.height = this.width = 100;
            this.viewportAnchorUnits = this.widthUnits = this.heightUnits = Sc;
            this.scroll = Tc
        }
        L("shaka.text.CueRegion", Bc);
        var Sc = 1;
        Bc.units = {
            PX: 0,
            PERCENTAGE: Sc,
            LINES: 2
        };
        var Tc = "";
        Bc.scrollMode = {
            NONE: Tc,
            UP: "up"
        };

        function Uc(a, b, c, d, e) {
            if (d >= e) return null;
            for (var f = -1, g = -1, h = 0; h < c.length; h++)
                if (c[h].some(function (A) {
                        return null != A && "" != A.g.trim()
                    })) {
                    f = h;
                    break
                } for (h = c.length - 1; 0 <= h; h--)
                if (c[h].some(function (A) {
                        return null != A && "" != A.g.trim()
                    })) {
                    g = h;
                    break
                } if (-1 === f || -1 === g) return null;
            for (var k = h = !1, l = "white", m = "black", n = Vc(d, e, h, k, l, m); f <= g; f++) {
                for (var p = c[f], r = -1, u = -1, w = 0; w < p.length; w++)
                    if (null != p[w] && "" !== p[w].g.trim()) {
                        r = w;
                        break
                    } for (w = p.length - 1; 0 <= w; w--)
                    if (null != p[w] && "" !== p[w].g.trim()) {
                        u = w;
                        break
                    } if (-1 ===
                    r || -1 === u) p = Wc(d, e), a.nestedCues.push(p);
                else {
                    for (; r <= u; r++)
                        if (w = p[r]) {
                            var x = w.l,
                                y = w.i,
                                D = w.j,
                                C = w.h;
                            if (x != h || y != k || D != l || C != m) n.payload && a.nestedCues.push(n), n = Vc(d, e, x, y, D, C), h = x, k = y, l = D, m = C;
                            n.payload += w.g
                        } else n.payload += " ";
                    n.payload && a.nestedCues.push(n);
                    f !== g && (n = Wc(d, e), a.nestedCues.push(n));
                    n = Vc(d, e, h, k, l, m)
                }
            }
            return a.nestedCues.length ? {
                cue: a,
                stream: b
            } : null
        }

        function Vc(a, b, c, d, e, f) {
            a = new zc(a, b, "");
            c && a.textDecoration.push("underline");
            d && (a.fontStyle = "italic");
            a.color = e;
            a.backgroundColor = f;
            return a
        }

        function Wc(a, b) {
            var c = new zc(a, b, "");
            c.lineBreak = !0;
            return c
        }

        function Xc(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.i = c;
            this.h = d;
            this.j = e
        };

        function Yc() {
            this.l = !1;
            this.F = this.I = 0;
            this.H = Zc;
            this.i = [];
            this.g = this.h = this.j = 0;
            this.D = this.s = !1;
            this.u = "white";
            this.m = "black";
            $c(this)
        }

        function $c(a) {
            a.i = [];
            for (var b = 0; 15 > b; b++) a.i.push(ad())
        }

        function ad() {
            for (var a = [], b = 0; 42 > b; b++) a.push(null);
            return a
        }

        function bd(a, b) {
            cd(a) && (a.i[a.h][a.g] = new Xc(b, a.D, a.s, a.m, a.u), a.g++)
        }

        function cd(a) {
            var b = a.g < a.F && 0 <= a.g;
            return a.h < a.I && 0 <= a.h && b
        }
        Yc.prototype.isVisible = function () {
            return this.l
        };

        function dd(a, b, c) {
            var d = new zc(a.j, b, "");
            d.textAlign = a.H === ed ? "left" : a.H === fd ? "right" : Ec;
            if (c = Uc(d, "svc" + c, a.i, a.j, b)) a.j = b;
            return c
        }
        var ed = 0,
            fd = 1,
            Zc = 2;

        function gd() {
            this.i = [];
            this.h = null;
            this.g = 0
        }

        function hd(a, b) {
            3 === b.type ? (a.g = 2 * (b.value & 63) - 1, a.h = []) : a.h && (0 < a.g && (a.h.push(b), a.g--), 0 === a.g && (a.i.push(new id(a.h)), a.h = null, a.g = 0))
        }

        function id(a) {
            this.g = 0;
            this.h = a
        }
        id.prototype.na = function () {
            return this.g < this.h.length
        };
        id.prototype.Z = function () {
            return this.g
        };

        function jd(a) {
            if (!a.na()) throw new O(2, 2, 3E3);
            return a.h[a.g++]
        }
        id.prototype.skip = function (a) {
            if (this.g + a > this.h.length) throw new O(2, 2, 3E3);
            this.g += a
        };

        function kd(a) {
            this.i = a;
            this.h = [null, null, null, null, null, null, null, null];
            this.g = null
        }

        function ld(a, b, c, d) {
            if (128 <= c && 135 >= c) d = c & 7, a.h[d] && (a.g = a.h[d]);
            else {
                if (136 === c) {
                    c = jd(b).value;
                    b = null;
                    c = t(md(a, c));
                    for (var e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = dd(e, d, a.i)), $c(e);
                    return b
                }
                if (137 === c)
                    for (b = jd(b).value, b = t(md(a, b)), c = b.next(); !c.done; c = b.next()) c = a.h[c.value], c.isVisible() || (c.j = d), c.l = !0;
                else {
                    if (138 === c) {
                        c = jd(b).value;
                        b = null;
                        c = t(md(a, c));
                        for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() && (b = dd(e, d, a.i)), e.l = !1;
                        return b
                    }
                    if (139 === c) {
                        c = jd(b).value;
                        b = null;
                        c = t(md(a, c));
                        for (e = c.next(); !e.done; e = c.next()) e = a.h[e.value], e.isVisible() ? b = dd(e, d, a.i) : e.j = d, e.l = !e.l;
                        return b
                    }
                    if (140 === c) return b = jd(b).value, nd(a, b, d);
                    if (143 === c) return d = nd(a, 255, d), od(a), d;
                    if (144 === c) b.skip(1), d = jd(b).value, a.g && (a.g.s = 0 < (d & 128), a.g.D = 0 < (d & 64));
                    else if (145 === c) d = jd(b).value, c = jd(b).value, b.skip(1), a.g && (b = pd((c & 48) >> 4, (c & 12) >> 2, c & 3), a.g.u = pd((d & 48) >> 4, (d & 12) >> 2, d & 3), a.g.m = b);
                    else if (146 === c) d = jd(b).value, b = jd(b).value, a.g && (a = a.g, a.h = d & 15, a.g = b & 63);
                    else if (151 === c) b.skip(1),
                        b.skip(1), d = jd(b).value, b.skip(1), a.g && (a.g.H = d & 3);
                    else if (152 <= c && 159 >= c) {
                        c = (c & 15) - 8;
                        e = null !== a.h[c];
                        if (!e) {
                            var f = new Yc;
                            f.j = d;
                            a.h[c] = f
                        }
                        d = jd(b).value;
                        jd(b);
                        jd(b);
                        f = jd(b).value;
                        var g = jd(b).value;
                        b = jd(b).value;
                        e && 0 === (b & 7) || (b = a.h[c], b.h = 0, b.g = 0, b.D = !1, b.s = !1, b.u = "white", b.m = "black");
                        b = a.h[c];
                        b.l = 0 < (d & 32);
                        b.I = (f & 15) + 1;
                        b.F = (g & 63) + 1;
                        a.g = a.h[c]
                    }
                }
            }
            return null
        }
        var md = function qd(a, b) {
            var d, e;
            return Fa(qd, function (f) {
                1 == f.g && (d = 0);
                if (5 != f.g) return 8 > d ? (e = 1 === (b & 1)) && a.h[d] ? v(f, d, 5) : f.v(5) : f.v(0);
                b >>= 1;
                d++;
                return f.v(2)
            })
        };

        function nd(a, b, c) {
            var d = null;
            b = t(md(a, b));
            for (var e = b.next(); !e.done; e = b.next()) {
                e = e.value;
                var f = a.h[e];
                f.isVisible() && (d = dd(f, c, a.i));
                a.h[e] = null
            }
            return d
        }

        function od(a) {
            a.g = null;
            a.h = [null, null, null, null, null, null, null, null]
        }

        function pd(a, b, c) {
            var d = {
                0: 0,
                1: 0,
                2: 1,
                3: 1
            };
            a = d[a];
            b = d[b];
            c = d[c];
            return rd[a << 2 | b << 1 | c]
        }
        var sd = new Map([
                [32, " "],
                [33, " "],
                [37, "…"],
                [42, "Š"],
                [44, "Œ"],
                [48, "█"],
                [49, "‘"],
                [50, "’"],
                [51, "“"],
                [52, "”"],
                [53, "•"],
                [57, "™"],
                [58, "š"],
                [60, "œ"],
                [61, "℠"],
                [63, "Ÿ"],
                [118, "⅛"],
                [119, "⅜"],
                [120, "⅝"],
                [121, "⅞"],
                [122, "│"],
                [123, "┐"],
                [124, "└"],
                [125, "─"],
                [126, "┘"],
                [127, "┌"]
            ]),
            rd = "black blue green cyan red magenta yellow white".split(" ");

        function td(a, b) {
            this.i = [];
            this.g = 1;
            this.h = 0;
            this.D = a;
            this.u = b;
            this.j = this.m = !1;
            this.l = "white";
            this.s = "black";
            ud(this)
        }

        function vd(a, b, c) {
            return Uc(new zc(b, c, ""), "CC" + (a.D << 1 | a.u + 1), a.i, b, c)
        }

        function ud(a) {
            wd(a, 0, 15);
            a.g = 1
        }

        function xd(a, b, c) {
            if (!(32 > c || 127 < c)) {
                var d = "";
                switch (b) {
                case yd:
                    d = zd.has(c) ? zd.get(c) : String.fromCharCode(c);
                    break;
                case Ad:
                    d = Bd.get(c);
                    break;
                case Cd:
                    a.i[a.g].pop();
                    d = Dd.get(c);
                    break;
                case Ed:
                    a.i[a.g].pop(), d = Fd.get(c)
                }
                d && a.i[a.g].push(new Xc(d, a.m, a.j, a.s, a.l))
            }
        }

        function Gd(a, b, c, d) {
            if (b >= c)
                for (--d; 0 <= d; d--) a.i[b + d] = a.i[c + d].map(function (f) {
                    return f
                });
            else
                for (var e = 0; e < d; e++) a.i[b + e] = a.i[c + e].map(function (f) {
                    return f
                })
        }

        function wd(a, b, c) {
            for (var d = 0; d <= c; d++) a.i[b + d] = []
        }
        var yd = 0,
            Ad = 1,
            Cd = 2,
            Ed = 3,
            zd = new Map([
                [39, "’"],
                [42, "á"],
                [92, "é"],
                [92, "é"],
                [94, "í"],
                [95, "ó"],
                [96, "ú"],
                [123, "ç"],
                [124, "÷"],
                [125, "Ñ"],
                [126, "ñ"],
                [127, "█"]
            ]),
            Bd = new Map([
                [48, "®"],
                [49, "°"],
                [50, "½"],
                [51, "¿"],
                [52, "™"],
                [53, "¢"],
                [54, "£"],
                [55, "♪"],
                [56, "à"],
                [57, "⠀"],
                [58, "è"],
                [59, "â"],
                [60, "ê"],
                [61, "î"],
                [62, "ô"],
                [63, "û"]
            ]),
            Dd = new Map([
                [32, "Á"],
                [33, "É"],
                [34, "Ó"],
                [35, "Ú"],
                [36, "Ü"],
                [37, "ü"],
                [38, "‘"],
                [39, "¡"],
                [40, "*"],
                [41, "'"],
                [42, "─"],
                [43, "©"],
                [44, "℠"],
                [45, "·"],
                [46, "“"],
                [47, "”"],
                [48, "À"],
                [49, "Â"],
                [50, "Ç"],
                [51, "È"],
                [52, "Ê"],
                [53, "Ë"],
                [54, "ë"],
                [55, "Î"],
                [56, "Ï"],
                [57, "ï"],
                [58, "Ô"],
                [59, "Ù"],
                [60, "ù"],
                [61, "Û"],
                [62, "«"],
                [63, "»"]
            ]),
            Fd = new Map([
                [32, "Ã"],
                [33, "ã"],
                [34, "Í"],
                [35, "Ì"],
                [36, "ì"],
                [37, "Ò"],
                [38, "ò"],
                [39, "Õ"],
                [40, "õ"],
                [41, "{"],
                [42, "}"],
                [43, "\\"],
                [44, "^"],
                [45, "_"],
                [46, "|"],
                [47, "~"],
                [48, "Ä"],
                [49, "ä"],
                [50, "Ö"],
                [51, "ö"],
                [52, "ß"],
                [53, "¥"],
                [54, "¤"],
                [55, "│"],
                [56, "Å"],
                [57, "å"],
                [58, "Ø"],
                [59, "ø"],
                [60, "┌"],
                [61, "┐"],
                [62, "└"],
                [63, "┘"]
            ]);

        function Hd(a, b) {
            this.h = Id;
            this.s = new td(a, b);
            this.i = new td(a, b);
            this.l = new td(a, b);
            this.g = this.i;
            this.j = 0;
            this.m = null
        }

        function Jd(a, b, c) {
            a.g = a.i;
            var d = a.g,
                e = null;
            a.h !== Kd && a.h !== Ld && (e = vd(d, a.j, c), c = a.i, c.g = 0 < c.h ? c.h : 0, wd(c, 0, 15), c = a.l, c.g = 0 < c.h ? c.h : 0, wd(c, 0, 15), d.g = 15);
            a.h = Kd;
            d.h = b;
            return e
        }

        function Md(a) {
            a.h = Nd;
            a.g = a.l;
            a.g.h = 0
        }

        function Od(a) {
            Va("Cea608DataChannel", "CEA-608 text mode entered, but is unsupported");
            a.g = a.s;
            a.h = Ld
        }
        var Id = 0,
            Nd = 1,
            Kd = 3,
            Ld = 4,
            Pd = "black green blue cyan red yellow magenta black".split(" "),
            Qd = "white green blue cyan red yellow magenta white_italics".split(" ");

        function Rd() {
            this.h = [];
            this.g = [];
            this.i = new gd;
            this.l = 0;
            this.u = new Map([
                ["CC1", new Hd(0, 0)],
                ["CC2", new Hd(0, 1)],
                ["CC3", new Hd(1, 0)],
                ["CC4", new Hd(1, 1)]
            ]);
            this.s = this.m = 0;
            this.j = new Map;
            Sd(this)
        }

        function Sd(a) {
            a.m = 0;
            a.s = 0;
            a = t(a.u.values());
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, b.h = 2, b.g = b.i, b.m = null, ud(b.i), ud(b.l), ud(b.s)
        }

        function Td(a) {
            function b(f, g) {
                return f.pts - g.pts || f.order - g.order
            }
            var c = [];
            a.h.sort(b);
            a.g.sort(b);
            for (var d = t(a.h), e = d.next(); !e.done; e = d.next())(e = Ud(a, e.value)) && c.push(e);
            d = t(a.g);
            for (e = d.next(); !e.done; e = d.next()) hd(a.i, e.value);
            d = t(a.i.i);
            for (e = d.next(); !e.done; e = d.next()) e = Vd(a, e.value), c.push.apply(c, ja(e));
            a.i.i = [];
            a.h = [];
            a.g = [];
            return c
        }

        function Ud(a, b) {
            var c = b.type;
            if (16 === (b.za & 112)) {
                var d = b.za >> 3 & 1;
                0 === c ? a.m = d : a.s = d
            }
            c = a.u.get("CC" + (c << 1 | (c ? a.s : a.m) + 1));
            if (255 === b.za && 255 === b.Pa || !b.za && !b.Pa || !Wd(b.za) || !Wd(b.Pa)) return 45 <= ++a.l && Sd(a), null;
            a.l = 0;
            b.za &= 127;
            b.Pa &= 127;
            if (!b.za && !b.Pa) return null;
            d = null;
            if (16 === (b.za & 112)) a: {
                var e = b.za;d = b.Pa;
                if (c.m === (e << 8 | d)) c.m = null;
                else if (c.m = e << 8 | d, 16 === (e & 240) && 64 === (d & 192)) {
                    e = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | d >> 5 & 1];
                    var f = (d & 30) >> 1,
                        g = "white",
                        h = !1;
                    7 > f ? g = Qd[f] : 7 === f && (h = !0);
                    d = 1 === (d & 1);
                    if (c.h !== Ld) {
                        f = c.g;
                        if (c.h === Kd && e !== f.g) {
                            var k = 1 + e - f.h;
                            Gd(f, k, 1 + f.g - f.h, f.h);
                            wd(f, 0, k - 1);
                            wd(f, e + 1, 15 - e)
                        }
                        f.g = e;
                        c.g.m = d;
                        c.g.j = h;
                        c.g.l = g;
                        c.g.s = "black"
                    }
                } else if (17 === (e & 247) && 32 === (d & 240)) c.g.m = !1,
                c.g.j = !1,
                c.g.l = "white",
                xd(c.g, yd, 32),
                g = !1,
                e = Qd[(d & 14) >> 1],
                "white_italics" === e && (e = "white", g = !0),
                c.g.m = 1 === (d & 1),
                c.g.j = g,
                c.g.l = e;
                else if (16 === (e & 247) && 32 === (d & 240) || 23 === (e & 247) && 45 === (d & 255)) g = "black",
                0 === (e & 7) && (g = Pd[(d & 14) >> 1]),
                c.g.s = g;
                else if (17 === (e & 247) && 48 === (d & 240)) xd(c.g, Ad, d);
                else if (18 ===
                    (e & 246) && 32 === (d & 224)) xd(c.g, e & 1 ? Ed : Cd, d);
                else if (20 === (e & 246) && 32 === (d & 240)) {
                    d = b.pts;
                    e = null;
                    switch (b.Pa) {
                    case 32:
                        Md(c);
                        break;
                    case 33:
                        c = c.g;
                        c.i[c.g].pop();
                        break;
                    case 37:
                        e = Jd(c, 2, d);
                        break;
                    case 38:
                        e = Jd(c, 3, d);
                        break;
                    case 39:
                        e = Jd(c, 4, d);
                        break;
                    case 40:
                        xd(c.g, yd, 32);
                        break;
                    case 41:
                        c.h = 2;
                        c.g = c.i;
                        c.g.h = 0;
                        c.j = d;
                        break;
                    case 42:
                        ud(c.s);
                        Od(c);
                        break;
                    case 43:
                        Od(c);
                        break;
                    case 44:
                        e = c.i;
                        g = null;
                        c.h !== Ld && (g = vd(e, c.j, d));
                        wd(e, 0, 15);
                        e = g;
                        break;
                    case 45:
                        e = c.g;
                        c.h !== Kd ? e = null : (g = vd(e, c.j, d), h = e.g - e.h + 1, Gd(e, h - 1, h, e.h), wd(e,
                            0, h - 1), wd(e, e.g, 15 - e.g), c.j = d, e = g);
                        break;
                    case 46:
                        wd(c.l, 0, 15);
                        break;
                    case 47:
                        e = null, c.h !== Ld && (e = vd(c.i, c.j, d)), g = c.l, c.l = c.i, c.i = g, Md(c), c.j = d
                    }
                    d = e;
                    break a
                }
                d = null
            }
            else e = b.Pa, xd(c.g, yd, b.za), xd(c.g, yd, e);
            return d
        }

        function Vd(a, b) {
            var c = [];
            try {
                for (; b.na();) {
                    var d = jd(b).value,
                        e = (d & 224) >> 5,
                        f = d & 31;
                    7 === e && 0 != f && (e = jd(b).value & 63);
                    if (0 != e) {
                        a.j.has(e) || a.j.set(e, new kd(e));
                        for (var g = a.j.get(e), h = b.Z(); b.Z() - h < f;) {
                            e = b;
                            var k = jd(e),
                                l = k.value,
                                m = k.pts;
                            if (16 === l) {
                                var n = jd(e);
                                l = l << 16 | n.value
                            }
                            if (0 <= l && 31 >= l) {
                                var p = m;
                                if (g.g) {
                                    var r = g.g;
                                    e = null;
                                    switch (l) {
                                    case 8:
                                        !cd(r) || 0 >= r.g && 0 >= r.h || (0 >= r.g ? (r.g = r.F - 1, r.h--) : r.g--, r.i[r.h][r.g] = null);
                                        break;
                                    case 13:
                                        r.isVisible() && (e = dd(r, p, g.i));
                                        if (r.h + 1 >= r.I) {
                                            p = r;
                                            for (var u = 0, w = 1; 15 > w; w++,
                                                u++) p.i[u] = p.i[w];
                                            for (w = 0; 1 > w; w++, u++) p.i[u] = ad()
                                        } else r.h++;
                                        r.g = 0;
                                        break;
                                    case 14:
                                        r.isVisible() && (e = dd(r, p, g.i));
                                        r.i[r.h] = ad();
                                        r.g = 0;
                                        break;
                                    case 12:
                                        r.isVisible() && (e = dd(r, p, g.i)), $c(r), p = r, p.h = 0, p.g = 0
                                    }
                                    var x = e
                                } else x = null
                            } else if (128 <= l && 159 >= l) x = ld(g, e, l, m);
                            else {
                                if (4096 <= l && 4127 >= l) p = l & 255, 8 <= p && 15 >= p ? e.skip(1) : 16 <= p && 23 >= p ? e.skip(2) : 24 <= p && 31 >= p && e.skip(3);
                                else if (4224 <= l && 4255 >= l) p = l & 255, 128 <= p && 135 >= p ? e.skip(4) : 136 <= p && 143 >= p && e.skip(5);
                                else if (32 <= l && 127 >= l) e = l, g.g && (127 === e ? bd(g.g, "♪") : bd(g.g,
                                    String.fromCharCode(e)));
                                else if (160 <= l && 255 >= l) g.g && bd(g.g, String.fromCharCode(l));
                                else if (4128 <= l && 4223 >= l) {
                                    if (e = l & 255, g.g)
                                        if (sd.has(e)) {
                                            var y = sd.get(e);
                                            bd(g.g, y)
                                        } else bd(g.g, "_")
                                } else 4256 <= l && 4351 >= l && g.g && (160 != (l & 255) ? bd(g.g, "_") : bd(g.g, "[CC]"));
                                x = null
                            }(e = x) && c.push(e)
                        }
                    }
                }
            } catch (D) {
                if (D instanceof O && 3E3 === D.code) Va("CEA708_INVALID_DATA", "Buffer read out of bounds / invalid CEA-708 Data.");
                else throw D;
            }
            return c
        }

        function Wd(a) {
            for (var b = 0; a;) b ^= a & 1, a >>= 1;
            return 1 === b
        };

        function Xd() {}
        var Zd = function Yd(a, b) {
            var d, e, f, g;
            return Fa(Yd, function (h) {
                if (1 == h.g) {
                    for (var k = 0, l = 0, m = 0; l < b.length;) 2 == k && 3 == b[l] ? k = 0 : (0 == b[l] ? k++ : k = 0, b[m] = b[l], m++), l++;
                    d = l - m;
                    e = 0
                }
                if (4 != h.g) {
                    if (!(e + d < b.length)) return h.v(0);
                    for (f = 0; 255 == b[e];) f += 255, e++;
                    f += b[e++];
                    for (g = 0; 255 == b[e];) g += 255, e++;
                    g += b[e++];
                    return 4 != f ? h.v(4) : v(h, b.subarray(e, e + g), 4)
                }
                e += g;
                return h.v(2)
            })
        };

        function ae(a, b) {
            var c = null,
                d = null,
                e = a.M();
            b & 1 && a.skip(8);
            b & 2 && a.skip(4);
            b & 8 && (c = a.M());
            b & 16 && (d = a.M());
            return {
                trackId: e,
                Ud: c,
                He: d
            }
        }

        function be(a, b) {
            return {
                bd: 1 == b ? a.kb() : a.M()
            }
        }

        function ce(a, b) {
            1 == b ? (a.skip(8), a.skip(8)) : (a.skip(4), a.skip(4));
            return {
                timescale: a.M()
            }
        }

        function de(a, b, c) {
            var d = a.M(),
                e = [];
            c & 1 && a.skip(4);
            c & 4 && a.skip(4);
            for (var f = t(jb(d)), g = f.next(); !g.done; g = f.next()) g = {
                Ed: null,
                sampleSize: null,
                Hc: null
            }, c & 256 && (g.Ed = a.M()), c & 512 && (g.sampleSize = a.M()), c & 1024 && a.skip(4), c & 2048 && (g.Hc = 0 == b ? a.M() : a.he()), e.push(g);
            return {
                ug: d,
                ke: e
            }
        };

        function ee() {
            this.j = new Xd;
            this.i = new Map;
            this.h = this.g = 0
        }
        ee.prototype.init = function (a) {
            var b = this,
                c = [],
                d = [];
            (new Qb).box("moov", Ub).box("mvex", Ub).U("trex", function (e) {
                var f = e.reader;
                f.skip(4);
                f.skip(4);
                e = f.M();
                f = f.M();
                b.g = e;
                b.h = f
            }).box("trak", Ub).U("tkhd", function (e) {
                var f = e.reader;
                1 == e.version ? (f.skip(8), f.skip(8), e = f.kb()) : (f.skip(4), f.skip(4), e = f.M());
                c.push(e)
            }).box("mdia", Ub).U("mdhd", function (e) {
                e = ce(e.reader, e.version);
                d.push(e.timescale)
            }).parse(a, !0);
            if (!c.length || !d.length || c.length != d.length) throw new O(2, 2, 2010);
            c.forEach(function (e, f) {
                b.i.set(e,
                    d[f])
            })
        };
        ee.prototype.parse = function (a) {
            var b = this,
                c = [],
                d = this.g,
                e = this.h,
                f = [],
                g = null,
                h = 9E4;
            (new Qb).box("moof", Ub).box("traf", Ub).U("trun", function (k) {
                f = de(k.reader, k.version, k.flags).ke
            }).U("tfhd", function (k) {
                k = ae(k.reader, k.flags);
                d = k.Ud || b.g;
                e = k.He || b.h;
                k = k.trackId;
                b.i.has(k) && (h = b.i.get(k))
            }).U("tfdt", function (k) {
                g = be(k.reader, k.version).bd
            }).box("mdat", function (k) {
                if (null === g) throw new O(2, 2, 2010);
                k = k.reader;
                var l = g,
                    m = h,
                    n = d,
                    p = e,
                    r = f,
                    u = 0,
                    w = p;
                for (r.length && (w = r[0].sampleSize || p); k.na();) {
                    var x = k.M();
                    if (6 ==
                        (k.$() & 31)) {
                        var y = 0;
                        r.length > u && (y = r[u].Hc || 0);
                        y = (l + y) / m;
                        for (var D = t(Zd(b.j, k.Za(x - 1))), C = D.next(); !C.done; C = D.next()) c.push({
                            pf: C.value,
                            pts: y
                        })
                    } else k.skip(x - 1);
                    w -= x + 4;
                    0 == w && (l = r.length > u ? l + (r[u].Ed || n) : l + n, u++, w = r.length > u ? r[u].sampleSize || p : p)
                }
            }).parse(a, !1);
            return c
        };

        function fe() {
            this.h = new ee;
            this.g = new Rd
        }
        fe.prototype.init = function (a) {
            this.h.init(a)
        };

        function ge(a, b) {
            var c = a.h.parse(b);
            c = t(c);
            for (var d = c.next(); !d.done; d = c.next()) {
                var e = d.value,
                    f = qb(e.pf);
                d = a.g;
                e = e.pts;
                f = new Db(f, 0);
                if (181 === f.$() && 49 === f.Fb() && 1195456820 === f.M() && 3 === f.$()) {
                    var g = f.$();
                    if (0 !== (g & 64)) {
                        g &= 31;
                        f.skip(1);
                        for (var h = 0; h < g; h++) {
                            var k = f.$(),
                                l = (k & 4) >> 2,
                                m = f.$(),
                                n = f.$();
                            l && (k &= 3, 0 === k || 1 === k ? d.h.push({
                                pts: e,
                                type: k,
                                za: m,
                                Pa: n,
                                order: d.h.length
                            }) : (d.g.push({
                                pts: e,
                                type: k,
                                value: m,
                                order: d.g.length
                            }), d.g.push({
                                pts: e,
                                type: 2,
                                value: n,
                                order: d.g.length
                            })))
                        }
                    }
                }
            }
            return Td(a.g)
        };

        function he(a) {
            return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null
        }

        function ie(a, b, c) {
            c = void 0 === c ? 0 : c;
            return !a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0) || b > a.end(a.length - 1) ? !1 : b + c >= a.start(0)
        }

        function je(a, b) {
            if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return 0;
            for (var c = 0, d = t(ke(a)), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = f.start;
                f = f.end;
                f > b && (c += f - Math.max(e, b))
            }
            return c
        }

        function le(a, b, c) {
            if (!a || !a.length || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return null;
            a = ke(a).findIndex(function (d, e, f) {
                return d.start > b && (0 == e || f[e - 1].end - b <= c)
            });
            return 0 <= a ? a : null
        }

        function ke(a) {
            if (!a) return [];
            for (var b = [], c = t(jb(a.length)), d = c.next(); !d.done; d = c.next()) d = d.value, b.push({
                start: a.start(d),
                end: a.end(d)
            });
            return b
        };
        var me = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

        function ne(a) {
            var b;
            a instanceof ne ? (oe(this, a.Da), this.nb = a.nb, this.Ga = a.Ga, pe(this, a.Eb), this.wa = a.wa, qe(this, a.g.clone()), this.eb = a.eb) : a && (b = String(a).match(me)) ? (oe(this, b[1] || "", !0), this.nb = re(b[2] || ""), this.Ga = re(b[3] || "", !0), pe(this, b[4]), this.wa = re(b[5] || "", !0), qe(this, b[6] || "", !0), this.eb = re(b[7] || "")) : this.g = new se(null)
        }
        q = ne.prototype;
        q.Da = "";
        q.nb = "";
        q.Ga = "";
        q.Eb = null;
        q.wa = "";
        q.eb = "";
        q.toString = function () {
            var a = [],
                b = this.Da;
            b && a.push(te(b, ue, !0), ":");
            if (b = this.Ga) {
                a.push("//");
                var c = this.nb;
                c && a.push(te(c, ue, !0), "@");
                a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
                b = this.Eb;
                null != b && a.push(":", String(b))
            }
            if (b = this.wa) this.Ga && "/" != b.charAt(0) && a.push("/"), a.push(te(b, "/" == b.charAt(0) ? ve : we, !0));
            (b = this.g.toString()) && a.push("?", b);
            (b = this.eb) && a.push("#", te(b, xe));
            return a.join("")
        };
        q.resolve = function (a) {
            var b = this.clone();
            "data" === b.Da && (b = new ne);
            var c = !!a.Da;
            c ? oe(b, a.Da) : c = !!a.nb;
            c ? b.nb = a.nb : c = !!a.Ga;
            c ? b.Ga = a.Ga : c = null != a.Eb;
            var d = a.wa;
            if (c) pe(b, a.Eb);
            else if (c = !!a.wa) {
                if ("/" != d.charAt(0))
                    if (this.Ga && !this.wa) d = "/" + d;
                    else {
                        var e = b.wa.lastIndexOf("/"); - 1 != e && (d = b.wa.substr(0, e + 1) + d)
                    } if (".." == d || "." == d) d = "";
                else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
                    e = 0 == d.lastIndexOf("/", 0);
                    d = d.split("/");
                    for (var f = [], g = 0; g < d.length;) {
                        var h = d[g++];
                        "." == h ? e && g == d.length && f.push("") : ".." ==
                            h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
                    }
                    d = f.join("/")
                }
            }
            c ? b.wa = d : c = "" !== a.g.toString();
            c ? qe(b, a.g.clone()) : c = !!a.eb;
            c && (b.eb = a.eb);
            return b
        };
        q.clone = function () {
            return new ne(this)
        };

        function oe(a, b, c) {
            a.Da = c ? re(b, !0) : b;
            a.Da && (a.Da = a.Da.replace(/:$/, ""))
        }

        function pe(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.Eb = b
            } else a.Eb = null
        }

        function qe(a, b, c) {
            b instanceof se ? a.g = b : (c || (b = te(b, ye)), a.g = new se(b))
        }

        function re(a, b) {
            return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
        }

        function te(a, b, c) {
            return null != a ? (a = encodeURI(a).replace(b, ze), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        }

        function ze(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
        var ue = /[#\/\?@]/g,
            we = /[#\?:]/g,
            ve = /[#\?]/g,
            ye = /[#\?@]/g,
            xe = /#/g;

        function se(a) {
            this.g = a || null
        }
        q = se.prototype;
        q.ta = null;
        q.tc = null;
        q.add = function (a, b) {
            if (!this.ta && (this.ta = {}, this.tc = 0, this.g))
                for (var c = this.g.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        f = null;
                    if (0 <= e) {
                        var g = c[d].substring(0, e);
                        f = c[d].substring(e + 1)
                    } else g = c[d];
                    g = decodeURIComponent(g.replace(/\+/g, " "));
                    f = f || "";
                    this.add(g, decodeURIComponent(f.replace(/\+/g, " ")))
                }
            this.g = null;
            (c = this.ta.hasOwnProperty(a) && this.ta[a]) || (this.ta[a] = c = []);
            c.push(b);
            this.tc++;
            return this
        };
        q.toString = function () {
            if (this.g) return this.g;
            if (!this.ta) return "";
            var a = [],
                b;
            for (b in this.ta)
                for (var c = encodeURIComponent(b), d = this.ta[b], e = 0; e < d.length; e++) {
                    var f = c;
                    "" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
                    a.push(f)
                }
            return this.g = a.join("&")
        };
        q.clone = function () {
            var a = new se;
            a.g = this.g;
            if (this.ta) {
                var b = {},
                    c;
                for (c in this.ta) b[c] = this.ta[c].concat();
                a.ta = b;
                a.tc = this.tc
            }
            return a
        };

        function Ae(a, b) {
            if (0 == b.length) return a;
            var c = b.map(function (d) {
                return new ne(d)
            });
            return a.map(function (d) {
                return new ne(d)
            }).map(function (d) {
                return c.map(function (e) {
                    return d.resolve(e)
                })
            }).reduce(Lb, []).map(function (d) {
                return d.toString()
            })
        }

        function Be(a, b) {
            return {
                keySystem: a,
                licenseServerUri: "",
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !1,
                audioRobustness: "",
                videoRobustness: "",
                serverCertificate: null,
                sessionType: "",
                initData: b || [],
                keyIds: new Set
            }
        }

        function Ce(a, b) {
            if (1 == b.length) return b[0];
            var c = De(a, b);
            if (null != c) return c;
            throw new O(2, 4, 4025, b);
        }

        function De(a, b) {
            for (var c = t(Ee[a]), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                for (var e = t(b), f = e.next(); !f.done; f = e.next())
                    if (f = f.value, d.test(f.trim())) return f.trim()
            }
            return a == Fe ? "" : null
        }
        var Fe = "text",
            Ge = {
                Na: "video",
                ab: "audio",
                fa: Fe,
                Wf: "image",
                Of: "application"
            },
            Ee = {
                audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
                video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
                text: [/^vtt$/, /^wvtt/, /^stpp/]
            };

        function He() {
            var a, b, c = new Promise(function (d, e) {
                a = d;
                b = e
            });
            c.resolve = a;
            c.reject = b;
            return c
        }
        He.prototype.resolve = function () {};
        He.prototype.reject = function () {};

        function Ie() {}
        L("shaka.dependencies", Ie);
        Ie.has = function (a) {
            return Je.has(a)
        };
        Ie.add = function (a, b) {
            if (!Ke[a]) throw Error(a + " is not supported");
            Je.set(a, function () {
                return b
            })
        };
        var Ke = {
            muxjs: "muxjs"
        };
        Ie.Allowed = Ke;
        var Je = new Map([
            ["muxjs", function () {
                return window.muxjs
            }]
        ]);

        function Le() {
            var a = this;
            this.s = Je.get("muxjs")();
            this.g = new this.s.mp4.Transmuxer({
                keepOriginalTimestamps: !0
            });
            this.h = null;
            this.m = [];
            this.j = [];
            this.i = [];
            this.l = !1;
            this.g.on("data", function (b) {
                a.j = b.captions;
                a.i = b.metadata;
                a.m.push(qc(b.initSegment, b.data))
            });
            this.g.on("done", function () {
                var b = {
                    data: qc.apply(kc, ja(a.m)),
                    captions: a.j,
                    metadata: a.i
                };
                a.h.resolve(b);
                a.l = !1
            })
        }
        Le.prototype.destroy = function () {
            this.g.dispose();
            this.g = null;
            return Promise.resolve()
        };

        function Me(a, b) {
            if (!Je.get("muxjs")() || !Ne(a)) return !1;
            if (b) return MediaSource.isTypeSupported(Oe(b, a));
            var c = Oe("audio", a),
                d = Oe("video", a);
            return MediaSource.isTypeSupported(c) || MediaSource.isTypeSupported(d)
        }

        function Ne(a) {
            return "mp2t" == a.toLowerCase().split(";")[0].split("/")[1]
        }

        function Oe(a, b) {
            var c = b.replace(/mp2t/i, "mp4");
            "audio" == a && (c = c.replace("video", "audio"));
            var d = /avc1\.(66|77|100)\.(\d+)/.exec(c);
            if (d) {
                var e = "avc1.",
                    f = d[1],
                    g = Number(d[2]);
                e = ("66" == f ? e + "4200" : "77" == f ? e + "4d00" : e + "6400") + (g >> 4).toString(16);
                e += (g & 15).toString(16);
                c = c.replace(d[0], e)
            }
            return c
        }

        function Pe(a, b) {
            a.l = !0;
            a.h = new He;
            a.m = [];
            a.j = [];
            a.i = [];
            var c = qb(b);
            a.g.push(c);
            a.g.flush();
            a.l && a.h.reject(new O(2, 3, 3018));
            return a.h
        };

        function Qe(a, b) {
            var c = a;
            b && (c += '; codecs="' + b + '"');
            return c
        }

        function Re(a, b, c) {
            a = Qe(a, b);
            return Je.get("muxjs")() && Ne(a) ? Oe(c, a) : a
        }

        function Se(a) {
            var b = [a.mimeType];
            Te.forEach(function (c, d) {
                var e = a[d];
                e && b.push(c + '="' + e + '"')
            });
            "PQ" == a.hdr && b.push('eotf="smpte2084"');
            return b.join(";")
        }

        function Ue(a) {
            a = a.split(".");
            var b = a[0];
            a.pop();
            return b
        }

        function Ve(a) {
            a = a.split(/ *; */);
            a.shift();
            return (a = a.find(function (b) {
                return b.startsWith("codecs=")
            })) ? a.split("=")[1].replace(/^"|"$/g, "") : ""
        }
        var Te = (new Map).set("codecs", "codecs").set("frameRate", "framerate").set("bandwidth", "bitrate").set("width", "width").set("height", "height").set("channelsCount", "channels");

        function We(a) {
            this.s = null;
            this.i = a;
            this.j = this.D = 0;
            this.l = Infinity;
            this.h = this.g = null;
            this.u = "";
            this.m = new Map
        }

        function Xe(a) {
            return Ye[a] || "application/cea-608" == a || "application/cea-708" == a ? !0 : !1
        }
        We.prototype.destroy = function () {
            this.i = this.s = null;
            this.m.clear();
            return Promise.resolve()
        };

        function Ze(a, b, c, d) {
            var e, f, g;
            return K(function (h) {
                if (1 == h.g) return v(h, Promise.resolve(), 2);
                if (!a.s || !a.i) return h["return"]();
                if (null == c || null == d) return a.s.parseInit(qb(b)), h["return"]();
                e = {
                    periodStart: a.D,
                    segmentStart: c,
                    segmentEnd: d
                };
                f = a.s.parseMedia(qb(b), e);
                g = f.filter(function (k) {
                    return k.startTime >= a.j && k.startTime < a.l
                });
                a.i.append(g);
                null == a.g && (a.g = Math.max(c, a.j));
                a.h = Math.min(d, a.l);
                z(h)
            })
        }
        We.prototype.remove = function (a, b) {
            var c = this;
            return K(function (d) {
                if (1 == d.g) return v(d, Promise.resolve(), 2);
                !c.i || !c.i.remove(a, b) || null == c.g || b <= c.g || a >= c.h || (a <= c.g && b >= c.h ? c.g = c.h = null : a <= c.g && b < c.h ? c.g = b : a > c.g && b >= c.h && (c.h = a));
                z(d)
            })
        };

        function $e(a, b, c) {
            a.j = b;
            a.l = c
        }

        function af(a, b, c) {
            a.u = b;
            if (b = a.m.get(b))
                for (var d = t(b.keys()), e = d.next(); !e.done; e = d.next())(e = b.get(e.value).filter(function (f) {
                    return f.endTime <= c
                })) && a.i.append(e)
        }

        function bf(a) {
            var b = [];
            a = t(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, b.push({
                stream: c.stream,
                cue: new zc(c.startTime, c.endTime, c.text)
            });
            return b
        }

        function cf(a, b, c, d, e) {
            var f = c + " " + d,
                g = new Map;
            b = t(b);
            for (var h = b.next(); !h.done; h = b.next()) {
                var k = h.value;
                h = k.stream;
                k = k.cue;
                g.has(h) || g.set(h, new Map);
                g.get(h).has(f) || g.get(h).set(f, []);
                k.startTime += e;
                k.endTime += e;
                k.startTime >= a.j && k.startTime < a.l && (g.get(h).get(f).push(k), h == a.u && a.i.append([k]))
            }
            e = t(g.keys());
            for (f = e.next(); !f.done; f = e.next())
                for (f = f.value, a.m.has(f) || a.m.set(f, new Map), b = t(g.get(f).keys()), h = b.next(); !h.done; h = b.next()) h = h.value, k = g.get(f).get(h), a.m.get(f).set(h, k);
            a.g = null ==
                a.g ? Math.max(c, a.j) : Math.min(a.g, Math.max(c, a.j));
            a.h = Math.max(a.h, Math.min(d, a.l))
        }
        L("shaka.text.TextEngine", We);
        We.prototype.destroy = We.prototype.destroy;
        We.findParser = function (a) {
            return Ye[a]
        };
        We.unregisterParser = function (a) {
            delete Ye[a]
        };
        We.registerParser = function (a, b) {
            Ye[a] = b
        };
        var Ye = {};

        function df(a) {
            this.g = !1;
            this.h = new He;
            this.i = a
        }
        df.prototype.destroy = function () {
            var a = this;
            if (this.g) return this.h;
            this.g = !0;
            return this.i().then(function () {
                a.h.resolve()
            }, function () {
                a.h.resolve()
            })
        };

        function ef(a, b) {
            if (a.g) {
                if (b instanceof O && 7003 == b.code) throw b;
                throw new O(2, 7, 7003, b);
            }
        };

        function ff() {
            this.g = {}
        }
        ff.prototype.push = function (a, b) {
            this.g.hasOwnProperty(a) ? this.g[a].push(b) : this.g[a] = [b]
        };
        ff.prototype.get = function (a) {
            return (a = this.g[a]) ? a.slice() : null
        };
        ff.prototype.remove = function (a, b) {
            a in this.g && (this.g[a] = this.g[a].filter(function (c) {
                return c != b
            }), 0 == this.g[a].length && delete this.g[a])
        };

        function gf(a, b) {
            for (var c in a.g) b(c, a.g[c])
        }
        ff.prototype.size = function () {
            return Object.keys(this.g).length
        };

        function hf() {
            this.g = new ff
        }
        q = hf.prototype;
        q.release = function () {
            this.lb();
            this.g = null
        };
        q.B = function (a, b, c, d) {
            this.g && (a = new jf(a, b, c, d), this.g.push(b, a))
        };
        q.ua = function (a, b, c, d) {
            function e(g) {
                f.Ca(a, b, e);
                c(g)
            }
            var f = this;
            this.B(a, b, e, d)
        };
        q.Ca = function (a, b, c) {
            if (this.g) {
                var d = this.g.get(b) || [];
                d = t(d);
                for (var e = d.next(); !e.done; e = d.next()) e = e.value, e.target != a || c != e.listener && c || (e.Ca(), this.g.remove(b, e))
            }
        };
        q.lb = function () {
            if (this.g) {
                var a = this.g,
                    b = [],
                    c;
                for (c in a.g) b.push.apply(b, ja(a.g[c]));
                a = t(b);
                for (b = a.next(); !b.done; b = a.next()) b.value.Ca();
                this.g.g = {}
            }
        };
        L("shaka.util.EventManager", hf);
        hf.prototype.removeAll = hf.prototype.lb;
        hf.prototype.unlisten = hf.prototype.Ca;
        hf.prototype.listenOnce = hf.prototype.ua;
        hf.prototype.listen = hf.prototype.B;
        hf.prototype.release = hf.prototype.release;

        function jf(a, b, c, d) {
            this.target = a;
            this.type = b;
            this.listener = c;
            this.g = kf(a, d);
            this.target.addEventListener(b, c, this.g)
        }
        jf.prototype.Ca = function () {
            this.target.removeEventListener(this.type, this.listener, this.g);
            this.listener = this.target = null;
            this.g = !1
        };

        function kf(a, b) {
            if (void 0 == b) return !1;
            if ("boolean" == typeof b) return b;
            var c = new Set(["passive", "capture"]);
            Object.keys(b).filter(function (d) {
                return !c.has(d)
            });
            return lf(a) ? b : b.capture || !1
        }

        function lf(a) {
            var b = nf;
            if (void 0 == b) {
                b = !1;
                try {
                    var c = {},
                        d = {
                            get: function () {
                                b = !0;
                                return !1
                            }
                        };
                    Object.defineProperty(c, "passive", d);
                    Object.defineProperty(c, "capture", d);
                    d = function () {};
                    a.addEventListener("test", d, c);
                    a.removeEventListener("test", d, c)
                } catch (e) {
                    b = !1
                }
                nf = b
            }
            return b || !1
        }
        var nf = void 0;

        function of (a, b, c, d) {
            var e = this;
            this.g = a;
            this.m = c;
            this.j = {};
            this.I = {};
            this.i = null;
            this.L = d || function () {};
            this.l = {};
            this.h = new hf;
            this.u = {};
            this.D = b;
            this.F = new He;
            this.s = qf(this, this.F);
            this.J = new df(function () {
                return rf(e)
            });
            this.H = ""
        }

        function qf(a, b) {
            var c = new MediaSource;
            a.h.ua(c, "sourceopen", function () {
                URL.revokeObjectURL(a.H);
                b.resolve()
            });
            a.H = sf(c);
            a.g.src = a.H;
            return c
        }

        function tf(a) {
            var b = Qe(a.mimeType, a.codecs),
                c = Se(a);
            return Xe(b) || MediaSource.isTypeSupported(c) || Me(b, a.type)
        }
        q = of .prototype;
        q.destroy = function () {
            return this.J.destroy()
        };

        function rf(a) {
            var b, c, d, e, f, g, h, k;
            return K(function (l) {
                if (1 == l.g) {
                    b = [];
                    for (c in a.l)
                        for (d = a.l[c], e = d[0], a.l[c] = d.slice(0, 1), e && b.push(e.p["catch"](Mb)), f = t(d.slice(1)), g = f.next(); !g.done; g = f.next()) h = g.value, h.p.reject(new O(2, 7, 7003, void 0));
                    a.i && b.push(a.i.destroy());
                    a.m && b.push(a.m.destroy());
                    for (k in a.u) b.push(a.u[k].destroy());
                    return v(l, Promise.all(b), 2)
                }
                a.h && (a.h.release(), a.h = null);
                a.g && (a.g.removeAttribute("src"), a.g.load(), a.g = null);
                a.s = null;
                a.i = null;
                a.m = null;
                a.j = {};
                a.u = {};
                a.D = null;
                a.l = {};
                z(l)
            })
        }
        q.init = function (a, b) {
            var c = this,
                d, e, f, g, h, k, l;
            return K(function (m) {
                if (1 == m.g) return d = Ge, v(m, c.F, 2);
                e = {};
                f = t(a.keys());
                for (g = f.next(); !g.done; e = {
                        qa: e.qa
                    }, g = f.next()) e.qa = g.value, h = a.get(e.qa), k = Qe(h.mimeType, h.codecs), e.qa == d.fa ? uf(c, k) : (!b && MediaSource.isTypeSupported(k) || !Me(k, e.qa) || (c.u[e.qa] = new Le, k = Oe(e.qa, k)), l = c.s.addSourceBuffer(k), c.h.B(l, "error", function (n) {
                        return function () {
                            c.l[n.qa][0].p.reject(new O(2, 3, 3014, c.g.error ? c.g.error.code : 0))
                        }
                    }(e)), c.h.B(l, "updateend", function (n) {
                        return function () {
                            return vf(c, n.qa)
                        }
                    }(e)),
                    c.j[e.qa] = l, c.I[e.qa] = k, c.l[e.qa] = []);
                z(m)
            })
        };

        function uf(a, b) {
            a.i || (a.i = new We(a.m));
            "application/cea-608" != b && "application/cea-708" != b && (a.i.s = Ob(Ye[b]))
        }

        function wf(a) {
            return a.s ? "ended" == a.s.readyState : !0
        }

        function xf(a, b) {
            if (b == Fe) var c = a.i.g;
            else c = yf(a, b), c = !c || 1 == c.length && 1E-6 > c.end(0) - c.start(0) ? null : 1 == c.length && 0 > c.start(0) ? 0 : c.length ? c.start(0) : null;
            return c
        }

        function zf(a, b) {
            return b == Fe ? a.i.h : he(yf(a, b))
        }

        function Af(a, b, c) {
            if (b == Fe) return a = a.i, null == a.h || a.h < c ? 0 : a.h - Math.max(c, a.g);
            a = yf(a, b);
            return je(a, c)
        }
        q.vc = function () {
            var a = {
                total: ke(this.g.buffered),
                audio: ke(yf(this, "audio")),
                video: ke(yf(this, "video")),
                text: []
            };
            if (this.i) {
                var b = this.i.g,
                    c = this.i.h;
                null != b && null != c && a.text.push({
                    start: b,
                    end: c
                })
            }
            return a
        };

        function yf(a, b) {
            try {
                return a.j[b].buffered
            } catch (c) {
                return null
            }
        }

        function Bf(a, b, c, d, e, f) {
            var g, h, k, l, m, n, p, r;
            return K(function (u) {
                if (1 == u.g) {
                    g = Ge;
                    if (b == g.fa) return v(u, Ze(a.i, c, d, e), 0);
                    if (a.u[b]) return v(u, Pe(a.u[b], c), 10);
                    if (f) return a.i || uf(a, "text/vtt"), null == d && null == e ? a.D.init(c) : (h = ge(a.D, c), h.length && (k = a.j[g.Na].timestampOffset, cf(a.i, h, d, e, k))), c = Cf(a, c, d, b), v(u, Df(a, b, function () {
                        a.j[b].appendBuffer(c)
                    }), 0);
                    c = Cf(a, c, d, b);
                    return v(u, Df(a, b, function () {
                        a.j[b].appendBuffer(c)
                    }), 0)
                }
                l = u.h;
                a.i || uf(a, "text/vtt");
                l.metadata && (m = a.j[b].timestampOffset, a.L(l.metadata,
                    m, e));
                l.captions && l.captions.length && (n = a.j[g.Na].timestampOffset, p = bf(l.captions), cf(a.i, p, d, e, n));
                r = l.data;
                r = Cf(a, r, d, b);
                return v(u, Df(a, b, function () {
                    a.j[b].appendBuffer(r)
                }), 0)
            })
        }

        function Ef(a, b) {
            var c = zf(a, "video") || 0;
            af(a.i, b, c)
        }

        function Ff(a) {
            a.i && af(a.i, "", 0)
        }
        q.remove = function (a, b, c) {
            var d = this,
                e;
            return K(function (f) {
                e = Ge;
                return a == e.fa ? v(f, d.i.remove(b, c), 0) : v(f, Df(d, a, function () {
                    c <= b ? vf(d, a) : d.j[a].remove(b, c)
                }), 0)
            })
        };

        function Gf(a, b) {
            var c;
            return K(function (d) {
                c = Ge;
                return b == c.fa ? a.i ? v(d, a.i.remove(0, Infinity), 0) : d["return"]() : v(d, Df(a, b, function () {
                    var e = a.s.duration;
                    0 >= e ? vf(a, b) : a.j[b].remove(0, e)
                }), 0)
            })
        }
        q.flush = function (a) {
            var b = this,
                c;
            return K(function (d) {
                c = Ge;
                return a == c.fa ? d["return"]() : v(d, Df(b, a, function () {
                    b.g.currentTime -= .001;
                    vf(b, a)
                }), 0)
            })
        };

        function Hf(a, b, c, d, e) {
            var f;
            return K(function (g) {
                f = Ge;
                return b == f.fa ? (a.i.D = c, $e(a.i, d, e), g["return"]()) : v(g, Promise.all([Df(a, b, function () {
                    var h = a.j[b].appendWindowStart,
                        k = a.j[b].appendWindowEnd;
                    a.j[b].abort();
                    a.j[b].appendWindowStart = h;
                    a.j[b].appendWindowEnd = k;
                    vf(a, b)
                }), Df(a, b, function () {
                    var h = c;
                    0 > h && (h += .001);
                    a.j[b].timestampOffset = h;
                    vf(a, b)
                }), Df(a, b, function () {
                    a.j[b].appendWindowStart = 0;
                    a.j[b].appendWindowEnd = e;
                    a.j[b].appendWindowStart = d;
                    vf(a, b)
                })]), 0)
            })
        }
        q.endOfStream = function (a) {
            var b = this;
            return K(function (c) {
                return v(c, If(b, function () {
                    wf(b) || (a ? b.s.endOfStream(a) : b.s.endOfStream())
                }), 0)
            })
        };
        q.Ja = function (a) {
            var b = this;
            return K(function (c) {
                return v(c, If(b, function () {
                    b.s.duration = a
                }), 0)
            })
        };
        q.getDuration = function () {
            return this.s.duration
        };

        function vf(a, b) {
            var c = a.l[b][0];
            c && (c.p.resolve(), Jf(a, b))
        }

        function Df(a, b, c) {
            ef(a.J);
            c = {
                start: c,
                p: new He
            };
            a.l[b].push(c);
            1 == a.l[b].length && Kf(a, b);
            return c.p
        }

        function If(a, b) {
            var c, d, e, f, g, h;
            return K(function (k) {
                switch (k.g) {
                case 1:
                    ef(a.J);
                    c = [];
                    d = {};
                    for (e in a.j) d.Jb = new He, f = {
                        start: function (l) {
                            return function () {
                                return l.Jb.resolve()
                            }
                        }(d),
                        p: d.Jb
                    }, a.l[e].push(f), c.push(d.Jb), 1 == a.l[e].length && f.start(), d = {
                        Jb: d.Jb
                    };
                    B(k, 2);
                    return v(k, Promise.all(c), 4);
                case 4:
                    wa(k, 3);
                    break;
                case 2:
                    throw g = E(k), g;
                case 3:
                    try {
                        b()
                    } catch (l) {
                        throw new O(2, 3, 3015, l);
                    } finally {
                        for (h in a.j) Jf(a, h)
                    }
                    z(k)
                }
            })
        }

        function Jf(a, b) {
            a.l[b].shift();
            Kf(a, b)
        }

        function Kf(a, b) {
            var c = a.l[b][0];
            if (c) try {
                c.start()
            } catch (d) {
                "QuotaExceededError" == d.name ? c.p.reject(new O(2, 3, 3017, b)) : c.p.reject(new O(2, 3, 3015, d)), Jf(a, b)
            }
        }

        function Cf(a, b, c, d) {
            var e = a.g.mediaKeys;
            null == c && e && (ec() || cc()) && "mp4" == a.I[d].split(";")[0].split("/")[1] && (b = rc(b));
            return b
        }
        var sf = window.URL.createObjectURL;

        function Lf(a, b) {
            a = Mf(a);
            b = Mf(b);
            return a.split("-")[0] == b.split("-")[0]
        }

        function Nf(a, b) {
            a = Mf(a);
            b = Mf(b);
            var c = a.split("-"),
                d = b.split("-");
            return c[0] == d[0] && 1 == c.length && 2 == d.length
        }

        function Of(a, b) {
            a = Mf(a);
            b = Mf(b);
            var c = a.split("-"),
                d = b.split("-");
            return 2 == c.length && 2 == d.length && c[0] == d[0]
        }

        function Mf(a) {
            var b = a.split("-");
            a = b[0] || "";
            b = b[1] || "";
            a = a.toLowerCase();
            a = Pf.get(a) || a;
            return (b = b.toUpperCase()) ? a + "-" + b : a
        }

        function Qf(a, b) {
            a = Mf(a);
            b = Mf(b);
            return b == a ? 4 : Nf(b, a) ? 3 : Of(b, a) ? 2 : Nf(a, b) ? 1 : 0
        }

        function Rf(a) {
            return a.language ? Mf(a.language) : a.audio && a.audio.language ? Mf(a.audio.language) : a.video && a.video.language ? Mf(a.video.language) : "und"
        }

        function Sf(a, b) {
            for (var c = Mf(a), d = new Set, e = t(b), f = e.next(); !f.done; f = e.next()) d.add(Mf(f.value));
            e = t(d);
            for (f = e.next(); !f.done; f = e.next())
                if (f = f.value, f == c) return f;
            e = t(d);
            for (f = e.next(); !f.done; f = e.next())
                if (f = f.value, Nf(f, c)) return f;
            e = t(d);
            for (f = e.next(); !f.done; f = e.next())
                if (f = f.value, Of(f, c)) return f;
            d = t(d);
            for (f = d.next(); !f.done; f = d.next())
                if (f = f.value, Nf(c, f)) return f;
            return null
        }
        var Pf = new Map([
            ["aar", "aa"],
            ["abk", "ab"],
            ["afr", "af"],
            ["aka", "ak"],
            ["alb", "sq"],
            ["amh", "am"],
            ["ara", "ar"],
            ["arg", "an"],
            ["arm", "hy"],
            ["asm", "as"],
            ["ava", "av"],
            ["ave", "ae"],
            ["aym", "ay"],
            ["aze", "az"],
            ["bak", "ba"],
            ["bam", "bm"],
            ["baq", "eu"],
            ["bel", "be"],
            ["ben", "bn"],
            ["bih", "bh"],
            ["bis", "bi"],
            ["bod", "bo"],
            ["bos", "bs"],
            ["bre", "br"],
            ["bul", "bg"],
            ["bur", "my"],
            ["cat", "ca"],
            ["ces", "cs"],
            ["cha", "ch"],
            ["che", "ce"],
            ["chi", "zh"],
            ["chu", "cu"],
            ["chv", "cv"],
            ["cor", "kw"],
            ["cos", "co"],
            ["cre", "cr"],
            ["cym", "cy"],
            ["cze",
                "cs"
            ],
            ["dan", "da"],
            ["deu", "de"],
            ["div", "dv"],
            ["dut", "nl"],
            ["dzo", "dz"],
            ["ell", "el"],
            ["eng", "en"],
            ["epo", "eo"],
            ["est", "et"],
            ["eus", "eu"],
            ["ewe", "ee"],
            ["fao", "fo"],
            ["fas", "fa"],
            ["fij", "fj"],
            ["fin", "fi"],
            ["fra", "fr"],
            ["fre", "fr"],
            ["fry", "fy"],
            ["ful", "ff"],
            ["geo", "ka"],
            ["ger", "de"],
            ["gla", "gd"],
            ["gle", "ga"],
            ["glg", "gl"],
            ["glv", "gv"],
            ["gre", "el"],
            ["grn", "gn"],
            ["guj", "gu"],
            ["hat", "ht"],
            ["hau", "ha"],
            ["heb", "he"],
            ["her", "hz"],
            ["hin", "hi"],
            ["hmo", "ho"],
            ["hrv", "hr"],
            ["hun", "hu"],
            ["hye", "hy"],
            ["ibo", "ig"],
            ["ice",
                "is"
            ],
            ["ido", "io"],
            ["iii", "ii"],
            ["iku", "iu"],
            ["ile", "ie"],
            ["ina", "ia"],
            ["ind", "id"],
            ["ipk", "ik"],
            ["isl", "is"],
            ["ita", "it"],
            ["jav", "jv"],
            ["jpn", "ja"],
            ["kal", "kl"],
            ["kan", "kn"],
            ["kas", "ks"],
            ["kat", "ka"],
            ["kau", "kr"],
            ["kaz", "kk"],
            ["khm", "km"],
            ["kik", "ki"],
            ["kin", "rw"],
            ["kir", "ky"],
            ["kom", "kv"],
            ["kon", "kg"],
            ["kor", "ko"],
            ["kua", "kj"],
            ["kur", "ku"],
            ["lao", "lo"],
            ["lat", "la"],
            ["lav", "lv"],
            ["lim", "li"],
            ["lin", "ln"],
            ["lit", "lt"],
            ["ltz", "lb"],
            ["lub", "lu"],
            ["lug", "lg"],
            ["mac", "mk"],
            ["mah", "mh"],
            ["mal", "ml"],
            ["mao",
                "mi"
            ],
            ["mar", "mr"],
            ["may", "ms"],
            ["mkd", "mk"],
            ["mlg", "mg"],
            ["mlt", "mt"],
            ["mon", "mn"],
            ["mri", "mi"],
            ["msa", "ms"],
            ["mya", "my"],
            ["nau", "na"],
            ["nav", "nv"],
            ["nbl", "nr"],
            ["nde", "nd"],
            ["ndo", "ng"],
            ["nep", "ne"],
            ["nld", "nl"],
            ["nno", "nn"],
            ["nob", "nb"],
            ["nor", "no"],
            ["nya", "ny"],
            ["oci", "oc"],
            ["oji", "oj"],
            ["ori", "or"],
            ["orm", "om"],
            ["oss", "os"],
            ["pan", "pa"],
            ["per", "fa"],
            ["pli", "pi"],
            ["pol", "pl"],
            ["por", "pt"],
            ["pus", "ps"],
            ["que", "qu"],
            ["roh", "rm"],
            ["ron", "ro"],
            ["rum", "ro"],
            ["run", "rn"],
            ["rus", "ru"],
            ["sag", "sg"],
            ["san",
                "sa"
            ],
            ["sin", "si"],
            ["slk", "sk"],
            ["slo", "sk"],
            ["slv", "sl"],
            ["sme", "se"],
            ["smo", "sm"],
            ["sna", "sn"],
            ["snd", "sd"],
            ["som", "so"],
            ["sot", "st"],
            ["spa", "es"],
            ["sqi", "sq"],
            ["srd", "sc"],
            ["srp", "sr"],
            ["ssw", "ss"],
            ["sun", "su"],
            ["swa", "sw"],
            ["swe", "sv"],
            ["tah", "ty"],
            ["tam", "ta"],
            ["tat", "tt"],
            ["tel", "te"],
            ["tgk", "tg"],
            ["tgl", "tl"],
            ["tha", "th"],
            ["tib", "bo"],
            ["tir", "ti"],
            ["ton", "to"],
            ["tsn", "tn"],
            ["tso", "ts"],
            ["tuk", "tk"],
            ["tur", "tr"],
            ["twi", "tw"],
            ["uig", "ug"],
            ["ukr", "uk"],
            ["urd", "ur"],
            ["uzb", "uz"],
            ["ven", "ve"],
            ["vie",
                "vi"
            ],
            ["vol", "vo"],
            ["wel", "cy"],
            ["wln", "wa"],
            ["wol", "wo"],
            ["xho", "xh"],
            ["yid", "yi"],
            ["yor", "yo"],
            ["zha", "za"],
            ["zho", "zh"],
            ["zul", "zu"]
        ]);

        function Tf(a, b) {
            var c = Uf(a.variants, b);
            c = Vf(c);
            c = Wf(c);
            var d = Xf(c);
            a.variants = a.variants.filter(function (e) {
                return Yf(e) == d ? !0 : !1
            })
        }

        function Vf(a) {
            var b = new ff;
            a = t(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                var d = Yf(c);
                b.push(d, c)
            }
            return b
        }

        function Wf(a) {
            var b = 0,
                c = new Map,
                d = a.size();
            gf(a, function (e, f) {
                for (var g = t(f), h = g.next(); !h.done; h = g.next()) {
                    h = h.value;
                    var k = h.video;
                    if (k && k.width && k.height) {
                        k = k.width * k.height * (k.frameRate || 1);
                        c.has(k) || c.set(k, new ff);
                        var l = c.get(k);
                        l.push(e, h);
                        l.size() === d && (b = Math.max(b, k))
                    }
                }
            });
            return b ? c.get(b) : a
        }

        function Xf(a) {
            var b = "",
                c = Infinity;
            gf(a, function (d, e) {
                for (var f = 0, g = 0, h = t(e), k = h.next(); !k.done; k = h.next()) f += k.value.bandwidth || 0, ++g;
                f /= g;
                f < c && (b = d, c = f)
            });
            return b
        }

        function Yf(a) {
            var b = "";
            a.video && (b = Ue(a.video.codecs));
            var c = "";
            a.audio && (c = Ue(a.audio.codecs));
            return b + "-" + c
        }

        function Zf(a, b, c) {
            a.variants = a.variants.filter(function (d) {
                return $f(d, b, c)
            })
        }

        function $f(a, b, c) {
            function d(f, g, h) {
                return f >= g && f <= h
            }
            var e = a.video;
            return e && e.width && e.height && (!d(e.width, b.minWidth, Math.min(b.maxWidth, c.width)) || !d(e.height, b.minHeight, Math.min(b.maxHeight, c.height)) || !d(e.width * e.height, b.minPixels, b.maxPixels)) || a && a.video && a.video.frameRate && !d(a.video.frameRate, b.minFrameRate, b.maxFrameRate) || !d(a.bandwidth, b.minBandwidth, b.maxBandwidth) ? !1 : !0
        }

        function ag(a, b, c, d) {
            return K(function (e) {
                if (1 == e.g) return d ? v(e, dg(c, 0 < c.offlineSessionIds.length), 2) : (bg(c, a), cg(c), e.v(2));
                eg(b, c);
                fg(c);
                gg(c);
                z(e)
            })
        }

        function bg(a, b) {
            a.variants = a.variants.filter(function (c) {
                return b && b.L && !hg(b, c) ? !1 : !0
            })
        }

        function dg(a, b) {
            return K(function (c) {
                if (1 == c.g) return v(c, ig(a.variants, b), 2);
                a.variants = a.variants.filter(function (d) {
                    var e = d.video;
                    if (cc() && e && (e.width && 1920 < e.width || e.height && 1080 < e.height) && e.codecs.includes("avc1.")) return bb(jg(d)), !1;
                    (e = d.decodingInfos.some(function (f) {
                        return f.supported
                    })) || bb(jg(d));
                    return e
                });
                z(c)
            })
        }

        function cg(a) {
            a.variants = a.variants.filter(function (b) {
                var c = b.audio;
                b = b.video;
                return c && !tf(c) || b && !tf(b) || cc() && b && (b.width && 1920 < b.width || b.height && 1080 < b.height) && b.codecs.includes("avc1.") ? !1 : !0
            })
        }

        function ig(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p;
            return K(function (r) {
                if (c = a.some(function (u) {
                        return u.decodingInfos.length
                    })) return r["return"]();
                d = navigator.mediaCapabilities;
                e = [];
                f = function (u, w) {
                    var x;
                    return K(function (y) {
                        if (1 == y.g) return B(y, 2), v(y, d.decodingInfo(w), 4);
                        if (2 != y.g) return x = y.h, u.decodingInfos.push(x), wa(y, 0);
                        E(y);
                        JSON.stringify(w);
                        z(y)
                    })
                };
                g = t(a);
                for (h = g.next(); !h.done; h = g.next())
                    for (k = h.value, l = kg(k, b), m = t(l), n = m.next(); !n.done; n = m.next()) p = n.value, e.push(f(k, p));
                return v(r, Promise.all(e),
                    0)
            })
        }

        function kg(a, b) {
            var c = a.audio,
                d = a.video,
                e = {
                    type: "media-source"
                };
            if (d) {
                var f = d.codecs;
                if (d.codecs.includes(",")) {
                    var g = d.codecs.split(",");
                    f = Ce("video", g);
                    f = "vp9" == f ? "vp09.00.10.08" : f;
                    g = Ce("audio", g);
                    g = Re(d.mimeType, g, "audio");
                    e.audio = {
                        contentType: g,
                        channels: 2,
                        bitrate: a.bandwidth || 1,
                        samplerate: 1,
                        spatialRendering: !1
                    }
                }
                f = Re(d.mimeType, "vp9" == f ? "vp09.00.10.08" : f, "video");
                e.video = {
                    contentType: f,
                    width: d.width || 1,
                    height: d.height || 1,
                    bitrate: d.bandwidth || a.bandwidth || 1,
                    framerate: d.frameRate || 1
                }
            }
            c && (f = "ac-3" ==
                c.codecs.toLowerCase() && ec() ? "ec-3" : c.codecs, f = Re(c.mimeType, f, "audio"), e.audio = {
                    contentType: f,
                    channels: c.channelsCount || 2,
                    bitrate: c.bandwidth || a.bandwidth || 1,
                    samplerate: c.audioSamplingRate || 1,
                    spatialRendering: c.spatialAudio
                });
            var h = (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : []);
            if (!h.length) return [e];
            f = [];
            g = new Map;
            h = t(h);
            for (var k = h.next(); !k.done; k = h.next()) {
                var l = k.value;
                g.get(l.keySystem) || g.set(l.keySystem, []);
                g.get(l.keySystem).push(l)
            }
            h = b ? "required" : "optional";
            l = b ? ["persistent-license"] : ["temporary"];
            for (var m = t(g.keys()), n = m.next(); !n.done; n = m.next()) {
                var p = n.value;
                n = Object.assign({}, e);
                var r = g.get(p);
                p = {
                    keySystem: p,
                    initDataType: "cenc",
                    persistentState: h,
                    distinctiveIdentifier: "optional",
                    sessionTypes: l
                };
                r = t(r);
                for (k = r.next(); !k.done; k = r.next()) {
                    k = k.value;
                    if (k.initData && k.initData.length) {
                        for (var u = new Set, w = t(k.initData), x = w.next(); !x.done; x = w.next()) u.add(x.value.initDataType);
                        p.initDataType = k.initData[0].initDataType
                    }
                    k.distinctiveIdentifierRequired && (p.distinctiveIdentifier = "required");
                    k.persistentStateRequired && (p.persistentState = "required");
                    k.sessionType && (p.sessionTypes = [k.sessionType]);
                    c && (p.audio ? p.audio.robustness = p.audio.robustness || k.audioRobustness : p.audio = {
                        robustness: k.audioRobustness
                    });
                    d && (p.video ? p.video.robustness = p.video.robustness || k.videoRobustness : p.video = {
                        robustness: k.videoRobustness
                    })
                }
                n.keySystemConfiguration = p;
                f.push(n)
            }
            return f
        }

        function eg(a, b) {
            b.variants = b.variants.filter(function (c) {
                var d = c.audio;
                c = c.video;
                return d && a && a.audio && !lg(d, a.audio) || c && a && a.video && !lg(c, a.video) ? !1 : !0
            })
        }

        function fg(a) {
            a.textStreams = a.textStreams.filter(function (b) {
                return Xe(Qe(b.mimeType, b.codecs))
            })
        }

        function gg(a) {
            a.imageStreams = a.imageStreams.filter(function (b) {
                var c = ["image/svg+xml", "image/png", "image/jpeg"];
                (dc("Web0S") || ec() || fc()) && c.push("image/webp");
                return c.includes(b.mimeType)
            })
        }

        function lg(a, b) {
            return a.mimeType != b.mimeType || a.codecs.split(".")[0] != b.codecs.split(".")[0] ? !1 : !0
        }

        function mg(a) {
            var b = a.audio,
                c = a.video,
                d = b ? b.codecs : null,
                e = c ? c.codecs : null,
                f = [];
            e && f.push(e);
            d && f.push(d);
            var g = [];
            c && g.push(c.mimeType);
            b && g.push(b.mimeType);
            g = g[0] || null;
            var h = [];
            b && h.push(b.kind);
            c && h.push(c.kind);
            h = h[0] || null;
            var k = new Set;
            if (b)
                for (var l = t(b.roles), m = l.next(); !m.done; m = l.next()) k.add(m.value);
            if (c)
                for (l = t(c.roles), m = l.next(); !m.done; m = l.next()) k.add(m.value);
            a = {
                id: a.id,
                active: !1,
                type: "variant",
                bandwidth: a.bandwidth,
                language: a.language,
                label: null,
                kind: h,
                width: null,
                height: null,
                frameRate: null,
                pixelAspectRatio: null,
                hdr: null,
                mimeType: g,
                codecs: f.join(", "),
                audioCodec: d,
                videoCodec: e,
                primary: a.primary,
                roles: Array.from(k),
                audioRoles: null,
                forced: !1,
                videoId: null,
                audioId: null,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                tilesLayout: null,
                audioBandwidth: null,
                videoBandwidth: null,
                originalVideoId: null,
                originalAudioId: null,
                originalTextId: null,
                originalImageId: null
            };
            c && (a.videoId = c.id, a.originalVideoId = c.originalId, a.width = c.width || null, a.height = c.height || null, a.frameRate = c.frameRate ||
                null, a.pixelAspectRatio = c.pixelAspectRatio || null, a.videoBandwidth = c.bandwidth || null);
            b && (a.audioId = b.id, a.originalAudioId = b.originalId, a.channelsCount = b.channelsCount, a.audioSamplingRate = b.audioSamplingRate, a.audioBandwidth = b.bandwidth || null, a.label = b.label, a.audioRoles = b.roles);
            return a
        }

        function ng(a) {
            return {
                id: a.id,
                active: !1,
                type: Fe,
                bandwidth: 0,
                language: a.language,
                label: a.label,
                kind: a.kind || null,
                width: null,
                height: null,
                frameRate: null,
                pixelAspectRatio: null,
                hdr: null,
                mimeType: a.mimeType,
                codecs: a.codecs || null,
                audioCodec: null,
                videoCodec: null,
                primary: a.primary,
                roles: a.roles,
                audioRoles: null,
                forced: a.forced,
                videoId: null,
                audioId: null,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                tilesLayout: null,
                audioBandwidth: null,
                videoBandwidth: null,
                originalVideoId: null,
                originalAudioId: null,
                originalTextId: a.originalId,
                originalImageId: null
            }
        }

        function og(a) {
            return {
                id: a.id,
                active: !1,
                type: "image",
                bandwidth: a.bandwidth || 0,
                language: "",
                label: null,
                kind: null,
                width: a.width || null,
                height: a.height || null,
                frameRate: null,
                pixelAspectRatio: null,
                hdr: null,
                mimeType: a.mimeType,
                codecs: null,
                audioCodec: null,
                videoCodec: null,
                primary: !1,
                roles: [],
                audioRoles: null,
                forced: !1,
                videoId: null,
                audioId: null,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                tilesLayout: a.tilesLayout || null,
                audioBandwidth: null,
                videoBandwidth: null,
                originalVideoId: null,
                originalAudioId: null,
                originalTextId: null,
                originalImageId: a.originalId
            }
        }

        function pg(a) {
            a.__shaka_id || (a.__shaka_id = qg++);
            return a.__shaka_id
        }

        function rg(a) {
            var b = sg(a);
            b.active = a.enabled;
            b.type = "variant";
            b.originalAudioId = a.id;
            "main" == a.kind && (b.primary = !0);
            a.kind && (b.roles = [a.kind], b.audioRoles = [a.kind], b.label = a.label);
            return b
        }

        function sg(a) {
            return {
                id: pg(a),
                active: !1,
                type: "",
                bandwidth: 0,
                language: Mf(a.language),
                label: a.label,
                kind: a.kind,
                width: null,
                height: null,
                frameRate: null,
                pixelAspectRatio: null,
                hdr: null,
                mimeType: null,
                codecs: null,
                audioCodec: null,
                videoCodec: null,
                primary: !1,
                roles: [],
                forced: !1,
                audioRoles: null,
                videoId: null,
                audioId: null,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                tilesLayout: null,
                audioBandwidth: null,
                videoBandwidth: null,
                originalVideoId: null,
                originalAudioId: null,
                originalTextId: null,
                originalImageId: null
            }
        }

        function tg(a) {
            return a.allowedByApplication && a.allowedByKeySystem
        }

        function ug(a) {
            return a.filter(function (b) {
                return tg(b)
            })
        }

        function Uf(a, b) {
            var c = a.filter(function (g) {
                    return g.audio && g.audio.channelsCount
                }),
                d = new Map;
            c = t(c);
            for (var e = c.next(); !e.done; e = c.next()) {
                e = e.value;
                var f = e.audio.channelsCount;
                d.has(f) || d.set(f, []);
                d.get(f).push(e)
            }
            c = Array.from(d.keys());
            if (0 == c.length) return a;
            e = c.filter(function (g) {
                return g <= b
            });
            return e.length ? d.get(Math.max.apply(Math, ja(e))) : d.get(Math.min.apply(Math, ja(c)))
        }

        function vg(a, b, c, d) {
            var e = a,
                f = a.filter(function (k) {
                    return k.primary
                });
            f.length && (e = f);
            var g = e.length ? e[0].language : "";
            e = e.filter(function (k) {
                return k.language == g
            });
            if (b) {
                var h = Sf(Mf(b), a.map(function (k) {
                    return k.language
                }));
                h && (e = a.filter(function (k) {
                    return Mf(k.language) == h
                }))
            }
            e = e.filter(function (k) {
                return k.forced == d
            });
            if (c) {
                if (a = wg(e, c), a.length) return a
            } else if (a = e.filter(function (k) {
                    return 0 == k.roles.length
                }), a.length) return a;
            a = e.map(function (k) {
                return k.roles
            }).reduce(Lb, []);
            return a.length ?
                wg(e, a[0]) : e
        }

        function wg(a, b) {
            return a.filter(function (c) {
                return c.roles.includes(b)
            })
        }

        function jg(a) {
            var b = [];
            a.audio && b.push(xg(a.audio));
            a.video && b.push(xg(a.video));
            return b.join(", ")
        }

        function xg(a) {
            return "audio" == a.type ? "type=audio codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " channelsCount=" + a.channelsCount + " audioSamplingRate=" + a.audioSamplingRate : "video" == a.type ? "type=video codecs=" + a.codecs + " bandwidth=" + a.bandwidth + " frameRate=" + a.frameRate + " width=" + a.width + " height=" + a.height : "unexpected stream type"
        }
        var qg = 0;

        function yg() {
            var a = this;
            this.j = null;
            this.i = !1;
            this.g = new Ra;
            navigator.connection && navigator.connection.addEventListener("change", function () {
                if (a.o.useNetworkInformation && a.i) {
                    a.g = new Ra;
                    var b = a.chooseVariant();
                    b && a.j(b)
                }
            });
            this.h = [];
            this.m = 1;
            this.s = !1;
            this.o = this.l = null
        }
        q = yg.prototype;
        q.stop = function () {
            this.j = null;
            this.i = !1;
            this.h = [];
            this.m = 1;
            this.l = null
        };
        q.init = function (a) {
            this.j = a
        };
        q.chooseVariant = function () {
            var a = zg(this.o.restrictions, this.h),
                b = this.g.getBandwidthEstimate(Ag(this));
            this.h.length && !a.length && (a = zg(null, this.h), a = [a[0]]);
            var c = a[0] || null;
            a = t(mb(a));
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value;
                d = e.item;
                var f = isNaN(this.m) ? 1 : Math.abs(this.m);
                e = f * (e.next || {
                    bandwidth: Infinity
                }).bandwidth / this.o.bandwidthUpgradeTarget;
                b >= f * d.bandwidth / this.o.bandwidthDowngradeTarget && b <= e && (c = d)
            }
            this.l = Date.now();
            return c
        };
        q.enable = function () {
            this.i = !0
        };
        q.disable = function () {
            this.i = !1
        };
        q.segmentDownloaded = function (a, b) {
            var c = this.g;
            if (!(16E3 > b)) {
                var d = 8E3 * b / a,
                    e = a / 1E3;
                c.g += b;
                Pa(c.h, e, d);
                Pa(c.i, e, d)
            }
            if (null != this.l && this.i) a: {
                if (!this.s) {
                    if (!(128E3 <= this.g.g)) break a;
                    this.s = !0
                } else if (Date.now() - this.l < 1E3 * this.o.switchInterval) break a;c = this.chooseVariant();this.g.getBandwidthEstimate(Ag(this));c && this.j(c)
            }
        };
        q.getBandwidthEstimate = function () {
            return this.g.getBandwidthEstimate(this.o.defaultBandwidthEstimate)
        };
        q.setVariants = function (a) {
            this.h = a
        };
        q.playbackRateChanged = function (a) {
            this.m = a
        };
        q.configure = function (a) {
            this.o = a
        };

        function Ag(a) {
            var b = a.o.defaultBandwidthEstimate;
            navigator.connection && navigator.connection.downlink && a.o.useNetworkInformation && (b = 1E6 * navigator.connection.downlink);
            return b
        }

        function zg(a, b) {
            a && (b = b.filter(function (c) {
                return $f(c, a, {
                    width: Infinity,
                    height: Infinity
                })
            }));
            return b.sort(function (c, d) {
                return c.bandwidth - d.bandwidth
            })
        }
        L("shaka.abr.SimpleAbrManager", yg);
        yg.prototype.configure = yg.prototype.configure;
        yg.prototype.playbackRateChanged = yg.prototype.playbackRateChanged;
        yg.prototype.setVariants = yg.prototype.setVariants;
        yg.prototype.getBandwidthEstimate = yg.prototype.getBandwidthEstimate;
        yg.prototype.segmentDownloaded = yg.prototype.segmentDownloaded;
        yg.prototype.disable = yg.prototype.disable;
        yg.prototype.enable = yg.prototype.enable;
        yg.prototype.chooseVariant = yg.prototype.chooseVariant;
        yg.prototype.init = yg.prototype.init;
        yg.prototype.stop = yg.prototype.stop;

        function Bg(a, b) {
            this.h = a;
            this.g = new Set([a]);
            b = b || [];
            for (var c = t(b), d = c.next(); !d.done; d = c.next()) this.add(d.value)
        }
        Bg.prototype.add = function (a) {
            return Cg(this.h, a) ? (this.g.add(a), !0) : !1
        };

        function Cg(a, b) {
            var c;
            if (!(c = !!a.audio != !!b.audio || !!a.video != !!b.video || a.language != b.language) && (c = a.audio && b.audio)) {
                c = a.audio;
                var d = b.audio;
                c = !((!(!c.channelsCount || !d.channelsCount || 2 < c.channelsCount || 2 < d.channelsCount) || c.channelsCount == d.channelsCount) && Dg(c, d) && Eg(c.roles, d.roles))
            }!c && (c = a.video && b.video) && (c = a.video, d = b.video, c = !(Dg(c, d) && Eg(c.roles, d.roles)));
            return c ? !1 : !0
        }
        Bg.prototype.values = function () {
            return this.g.values()
        };

        function Dg(a, b) {
            if (a.mimeType != b.mimeType) return !1;
            var c = a.codecs.split(",").map(function (g) {
                    return Ue(g)
                }),
                d = b.codecs.split(",").map(function (g) {
                    return Ue(g)
                });
            if (c.length != d.length) return !1;
            c.sort();
            d.sort();
            for (var e = t(jb(c.length)), f = e.next(); !f.done; f = e.next())
                if (f = f.value, c[f] != d[f]) return !1;
            return !0
        }

        function Eg(a, b) {
            var c = new Set(a),
                d = new Set(b);
            c["delete"]("main");
            d["delete"]("main");
            if (c.size != d.size) return !1;
            c = t(c);
            for (var e = c.next(); !e.done; e = c.next())
                if (!d.has(e.value)) return !1;
            return !0
        };

        function Fg(a) {
            this.g = a;
            this.h = new Gg(a.language, "", a.audio && a.audio.channelsCount ? a.audio.channelsCount : 0, "")
        }
        Fg.prototype.create = function (a) {
            var b = this,
                c = a.filter(function (d) {
                    return Cg(b.g, d)
                });
            return c.length ? new Bg(c[0], c) : this.h.create(a)
        };

        function Gg(a, b, c, d) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.h = void 0 === d ? "" : d
        }
        Gg.prototype.create = function (a) {
            var b = [];
            b = Hg(a, this.i);
            var c = a.filter(function (d) {
                return d.primary
            });
            b = b.length ? b : c.length ? c : a;
            a = Ig(b, this.j);
            a.length && (b = a);
            this.g && (a = Uf(b, this.g), a.length && (b = a));
            this.h && (a = Jg(b, this.h), a.length && (b = a));
            a = new Bg(b[0]);
            b = t(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, Cg(a.h, c) && a.add(c);
            return a
        };

        function Hg(a, b) {
            var c = Mf(b),
                d = Sf(c, a.map(function (e) {
                    return Rf(e)
                }));
            return d ? a.filter(function (e) {
                return d == Rf(e)
            }) : []
        }

        function Ig(a, b) {
            return a.filter(function (c) {
                return c.audio ? b ? c.audio.roles.includes(b) : 0 == c.audio.roles.length : !1
            })
        }

        function Jg(a, b) {
            return a.filter(function (c) {
                return c.audio ? c.audio.label.toLowerCase() == b.toLowerCase() : !1
            })
        };

        function Kg() {
            this.g = Lg;
            this.h = (new Map).set(Lg, 2).set(Mg, 1)
        }

        function Ng(a, b, c) {
            a.h.set(Lg, c).set(Mg, b)
        }
        var Mg = 0,
            Lg = 1;

        function Og(a, b) {
            var c = Pg();
            this.l = null == a.maxAttempts ? c.maxAttempts : a.maxAttempts;
            this.j = null == a.baseDelay ? c.baseDelay : a.baseDelay;
            this.s = null == a.fuzzFactor ? c.fuzzFactor : a.fuzzFactor;
            this.m = null == a.backoffFactor ? c.backoffFactor : a.backoffFactor;
            this.g = 0;
            this.h = this.j;
            if (this.i = void 0 === b ? !1 : b) this.g = 1
        }

        function Qg(a) {
            var b, c;
            return K(function (d) {
                if (1 == d.g) {
                    if (a.g >= a.l)
                        if (a.i) a.g = 1, a.h = a.j;
                        else throw new O(2, 7, 1010);
                    b = a.g;
                    a.g++;
                    if (0 == b) return d["return"]();
                    c = a.h * (1 + (2 * Math.random() - 1) * a.s);
                    return v(d, new Promise(function (e) {
                        (new P(e)).T(c / 1E3)
                    }), 2)
                }
                a.h *= a.m;
                z(d)
            })
        }

        function Pg() {
            return {
                maxAttempts: 2,
                baseDelay: 1E3,
                backoffFactor: 2,
                fuzzFactor: .5,
                timeout: 3E4,
                stallTimeout: 5E3,
                connectionTimeout: 1E4
            }
        };

        function Rg(a, b) {
            this.promise = a;
            this.i = b;
            this.g = !1
        }

        function Sg(a) {
            return new Rg(Promise.reject(a), function () {
                return Promise.resolve()
            })
        }

        function Tg() {
            var a = Promise.reject(new O(2, 7, 7001));
            a["catch"](function () {});
            return new Rg(a, function () {
                return Promise.resolve()
            })
        }

        function Ug(a) {
            return new Rg(Promise.resolve(a), function () {
                return Promise.resolve()
            })
        }

        function Vg(a) {
            return new Rg(a, function () {
                return a["catch"](function () {})
            })
        }
        Rg.prototype.abort = function () {
            this.g = !0;
            return this.i()
        };

        function Wg(a) {
            return new Rg(Promise.all(a.map(function (b) {
                return b.promise
            })), function () {
                return Promise.all(a.map(function (b) {
                    return b.abort()
                }))
            })
        }
        Rg.prototype["finally"] = function (a) {
            this.promise.then(function () {
                return a(!0)
            }, function () {
                return a(!1)
            });
            return this
        };
        Rg.prototype.aa = function (a, b) {
            function c(h) {
                return function (k) {
                    if (e.g && h) f.reject(g);
                    else {
                        var l = h ? a : b;
                        l ? d = Xg(l, k, f) : (h ? f.resolve : f.reject)(k)
                    }
                }
            }

            function d() {
                f.reject(g);
                return e.abort()
            }
            var e = this,
                f = new He,
                g = new O(2, 7, 7001);
            this.promise.then(c(!0), c(!1));
            return new Rg(f, function () {
                return d()
            })
        };

        function Xg(a, b, c) {
            try {
                var d = a(b);
                if (d && d.promise && d.abort) return c.resolve(d.promise),
                    function () {
                        return d.abort()
                    };
                c.resolve(d);
                return function () {
                    return Promise.resolve(d).then(function () {}, function () {})
                }
            } catch (e) {
                return c.reject(e),
                    function () {
                        return Promise.resolve()
                    }
            }
        }
        L("shaka.util.AbortableOperation", Rg);
        Rg.prototype.chain = Rg.prototype.aa;
        Rg.prototype["finally"] = Rg.prototype["finally"];
        Rg.all = Wg;
        Rg.prototype.abort = Rg.prototype.abort;
        Rg.notAbortable = Vg;
        Rg.completed = Ug;
        Rg.aborted = Tg;
        Rg.failed = Sg;

        function Q(a, b) {
            b = void 0 === b ? {} : b;
            for (var c in b) Object.defineProperty(this, c, {
                value: b[c],
                writable: !0,
                enumerable: !0
            });
            this.defaultPrevented = this.cancelable = this.bubbles = !1;
            this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
            this.type = a;
            this.isTrusted = !1;
            this.target = this.currentTarget = null;
            this.g = !1
        }
        Q.prototype.preventDefault = function () {
            this.cancelable && (this.defaultPrevented = !0)
        };
        Q.prototype.stopImmediatePropagation = function () {
            this.g = !0
        };
        Q.prototype.stopPropagation = function () {};
        L("shaka.util.FakeEvent", Q);

        function Yg() {
            this.oc = new ff;
            this.nc = this
        }
        Yg.prototype.addEventListener = function (a, b) {
            this.oc.push(a, b)
        };
        Yg.prototype.removeEventListener = function (a, b) {
            this.oc.remove(a, b)
        };
        Yg.prototype.dispatchEvent = function (a) {
            var b = this.oc.get(a.type) || [],
                c = this.oc.get("All");
            c && (b = b.concat(c));
            b = t(b);
            for (c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                a.target = this.nc;
                a.currentTarget = this.nc;
                try {
                    c.handleEvent ? c.handleEvent(a) : c.call(this, a)
                } catch (d) {}
                if (a.g) break
            }
            return a.defaultPrevented
        };

        function Zg(a) {
            function b(d) {
                switch (typeof d) {
                case "undefined":
                case "boolean":
                case "number":
                case "string":
                case "symbol":
                case "function":
                    return d;
                default:
                    if (!d || d.buffer && d.buffer.constructor == ArrayBuffer) return d;
                    if (c.has(d)) return null;
                    var e = d.constructor == Array;
                    if (d.constructor != Object && !e) return null;
                    c.add(d);
                    var f = e ? [] : {},
                        g;
                    for (g in d) f[g] = b(d[g]);
                    e && (f.length = d.length);
                    return f
                }
            }
            var c = new Set;
            return b(a)
        }

        function $g(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        };

        function ah() {
            this.g = []
        }

        function bh(a, b) {
            a.g.push(b["finally"](function () {
                wc(a.g, b)
            }))
        }
        ah.prototype.destroy = function () {
            for (var a = [], b = t(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.promise["catch"](function () {}), a.push(c.abort());
            this.g = [];
            return Promise.all(a)
        };

        function ch(a) {
            Yg.call(this);
            this.i = !1;
            this.l = new ah;
            this.g = new Set;
            this.h = new Set;
            this.j = a || null;
            this.m = !1
        }
        ra(ch, Yg);
        q = ch.prototype;
        q.Jd = function (a) {
            this.m = a
        };

        function dh(a, b, c, d) {
            c = c || eh;
            var e = fh[a];
            if (!e || c >= e.priority) fh[a] = {
                priority: c,
                qf: b,
                sf: void 0 === d ? !1 : d
            }
        }
        q.tf = function (a) {
            this.g.add(a)
        };
        q.Kf = function (a) {
            this.g["delete"](a)
        };
        q.Ee = function () {
            this.g.clear()
        };
        q.uf = function (a) {
            this.h.add(a)
        };
        q.Lf = function (a) {
            this.h["delete"](a)
        };
        q.Fe = function () {
            this.h.clear()
        };

        function gh(a, b, c) {
            return {
                uris: a,
                method: "GET",
                body: null,
                headers: {},
                allowCrossSiteCredentials: !1,
                retryParameters: b,
                licenseRequestType: null,
                sessionId: null,
                streamDataCallback: void 0 === c ? null : c
            }
        }
        q.destroy = function () {
            this.i = !0;
            this.g.clear();
            this.h.clear();
            return this.l.destroy()
        };
        q.request = function (a, b) {
            var c = this,
                d = new hh;
            if (this.i) {
                var e = Promise.reject(new O(2, 7, 7001));
                e["catch"](function () {});
                return new ih(e, function () {
                    return Promise.resolve()
                }, d)
            }
            b.method = b.method || "GET";
            b.headers = b.headers || {};
            b.retryParameters = b.retryParameters ? Zg(b.retryParameters) : Pg();
            b.uris = Zg(b.uris);
            e = jh(this, a, b);
            var f = e.aa(function () {
                    return kh(c, a, b, new Og(b.retryParameters, !1), 0, null, d)
                }),
                g = f.aa(function (n) {
                    return lh(c, a, n)
                }),
                h = Date.now(),
                k = 0;
            e.promise.then(function () {
                k = Date.now() - h
            }, function () {});
            var l = 0;
            f.promise.then(function () {
                l = Date.now()
            }, function () {});
            var m = g.aa(function (n) {
                var p = Date.now() - l,
                    r = n.response;
                r.timeMs += k;
                r.timeMs += p;
                n.ff || !c.j || r.fromCache || a != mh || c.j(r.timeMs, r.data.byteLength);
                return r
            }, function (n) {
                n && (n.severity = 2);
                throw n;
            });
            e = new ih(m.promise, function () {
                return m.abort()
            }, d);
            bh(this.l, e);
            return e
        };

        function jh(a, b, c) {
            var d = Ug(void 0),
                e = {};
            a = t(a.g);
            for (var f = a.next(); !f.done; e = {
                    Uc: e.Uc
                }, f = a.next()) e.Uc = f.value, d = d.aa(function (g) {
                return function () {
                    c.body && (c.body = rb(c.body));
                    return g.Uc(b, c)
                }
            }(e));
            return d.aa(void 0, function (g) {
                if (g instanceof O && 7001 == g.code) throw g;
                throw new O(2, 1, 1006, g);
            })
        }

        function kh(a, b, c, d, e, f, g) {
            a.m && (c.uris[e] = c.uris[e].replace("http://", "https://"));
            var h = new ne(c.uris[e]),
                k = h.Da,
                l = !1;
            k || (k = location.protocol, k = k.slice(0, -1), oe(h, k), c.uris[e] = h.toString());
            k = k.toLowerCase();
            var m = (k = fh[k]) ? k.qf : null;
            if (!m) return Sg(new O(2, 1, 1E3, h));
            var n = k.sf,
                p = null,
                r = null,
                u = !1,
                w;
            return Vg(Qg(d)).aa(function () {
                if (a.i) return Tg();
                w = Date.now();
                var x = m(c.uris[e], c, b, function (C, A, F) {
                    p && p.stop();
                    r && r.T(D / 1E3);
                    a.j && b == mh && (a.j(C, A), l = !0, g.g = F)
                });
                if (!n) return x;
                var y = c.retryParameters.connectionTimeout;
                y && (p = new P(function () {
                    u = !0;
                    x.abort()
                }), p.T(y / 1E3));
                var D = c.retryParameters.stallTimeout;
                D && (r = new P(function () {
                    u = !0;
                    x.abort()
                }));
                return x
            }).aa(function (x) {
                p && p.stop();
                r && r.stop();
                void 0 == x.timeMs && (x.timeMs = Date.now() - w);
                return {
                    response: x,
                    ff: l
                }
            }, function (x) {
                p && p.stop();
                r && r.stop();
                if (a.i) return Tg();
                u && (x = new O(1, 1, 1003, c.uris[e], b));
                if (x instanceof O) {
                    if (7001 == x.code) throw x;
                    if (1010 == x.code) throw f;
                    if (1 == x.severity) {
                        var y = new Q("retry", {
                            error: x
                        });
                        a.dispatchEvent(y);
                        e = (e + 1) % c.uris.length;
                        return kh(a,
                            b, c, d, e, x, g)
                    }
                }
                throw x;
            })
        }

        function lh(a, b, c) {
            var d = Ug(void 0),
                e = {};
            a = t(a.h);
            for (var f = a.next(); !f.done; e = {
                    Vc: e.Vc
                }, f = a.next()) e.Vc = f.value, d = d.aa(function (g) {
                return function () {
                    var h = c.response;
                    h.data && (h.data = rb(h.data));
                    return g.Vc(b, h)
                }
            }(e));
            return d.aa(function () {
                return c
            }, function (g) {
                var h = 2;
                if (g instanceof O) {
                    if (7001 == g.code) throw g;
                    h = g.severity
                }
                throw new O(h, 1, 1007, g);
            })
        }
        L("shaka.net.NetworkingEngine", ch);
        ch.prototype.request = ch.prototype.request;
        ch.prototype.destroy = ch.prototype.destroy;
        ch.makeRequest = gh;
        ch.defaultRetryParameters = function () {
            return Pg()
        };
        ch.prototype.clearAllResponseFilters = ch.prototype.Fe;
        ch.prototype.unregisterResponseFilter = ch.prototype.Lf;
        ch.prototype.registerResponseFilter = ch.prototype.uf;
        ch.prototype.clearAllRequestFilters = ch.prototype.Ee;
        ch.prototype.unregisterRequestFilter = ch.prototype.Kf;
        ch.prototype.registerRequestFilter = ch.prototype.tf;
        ch.unregisterScheme = function (a) {
            delete fh[a]
        };
        ch.registerScheme = dh;
        ch.prototype.setForceHTTPS = ch.prototype.Jd;

        function hh() {
            this.g = 0
        }
        ch.NumBytesRemainingClass = hh;

        function ih(a, b, c) {
            Rg.call(this, a, b);
            this.h = c
        }
        ra(ih, Rg);
        ch.PendingRequest = ih;
        var mh = 1;
        ch.RequestType = {
            MANIFEST: 0,
            SEGMENT: mh,
            LICENSE: 2,
            APP: 3,
            TIMING: 4
        };
        var eh = 3;
        ch.PluginPriority = {
            FALLBACK: 1,
            PREFERRED: 2,
            APPLICATION: eh
        };
        var fh = {};

        function nh() {}

        function oh(a) {
            a = zb(a);
            return (new ne(a)).Ga
        }

        function ph(a, b, c) {
            function d(h) {
                tb(f).setUint32(g, h.byteLength, !0);
                g += 4;
                f.set(qb(h), g);
                g += h.byteLength
            }
            if (!c || !c.byteLength) throw new O(2, 6, 6015);
            var e;
            "string" == typeof b ? e = Cb(b, !0) : e = b;
            a = zb(a);
            a = Cb(a, !0);
            var f = new Uint8Array(12 + a.byteLength + e.byteLength + c.byteLength),
                g = 0;
            d(a);
            d(e);
            d(c);
            return f
        }
        L("shaka.util.FairPlayUtils", nh);
        nh.initDataTransform = ph;
        nh.defaultGetContentId = oh;

        function qh(a) {
            for (var b = new Map, c = t(Object.keys(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, a[d]);
            return b
        }

        function rh(a) {
            var b = {};
            a.forEach(function (c, d) {
                b[d] = c
            });
            return b
        }

        function sh(a, b) {
            if (a || b) {
                if (a && !b || b && !a) return !1
            } else return !0;
            if (a.size != b.size) return !1;
            for (var c = t(a), d = c.next(); !d.done; d = c.next()) {
                var e = t(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!b.has(d)) return !1;
                d = b.get(d);
                if (d != e || void 0 == d) return !1
            }
            return !0
        };

        function th(a, b) {
            var c = this;
            b = void 0 === b ? 1 : b;
            this.C = a;
            this.u = new Set;
            this.g = this.m = null;
            this.oa = this.L = !1;
            this.H = 0;
            this.i = null;
            this.h = new hf;
            this.j = new Map;
            this.D = [];
            this.s = new He;
            this.o = null;
            this.l = function (d) {
                c.s.reject(d);
                a.onError(d)
            };
            this.pa = new Map;
            this.X = new Map;
            this.S = new P(function () {
                return uh(c)
            });
            this.F = !1;
            this.I = [];
            this.N = !1;
            this.ca = (new P(function () {
                vh(c)
            })).Ba(b);
            this.s["catch"](function () {});
            this.J = new df(function () {
                return wh(c)
            })
        }
        q = th.prototype;
        q.destroy = function () {
            return this.J.destroy()
        };

        function wh(a) {
            return K(function (b) {
                switch (b.g) {
                case 1:
                    return a.h.release(), a.h = null, a.s.reject(), a.ca.stop(), a.ca = null, a.S.stop(), a.S = null, v(b, xh(a), 2);
                case 2:
                    if (!a.g) {
                        b.v(3);
                        break
                    }
                    B(b, 4);
                    return v(b, a.g.setMediaKeys(null), 6);
                case 6:
                    wa(b, 5);
                    break;
                case 4:
                    E(b);
                case 5:
                    a.g = null;
                case 3:
                    a.i = null, a.u.clear(), a.m = null, a.D = [], a.o = null, a.l = function () {}, a.C = null, z(b)
                }
            })
        }
        q.configure = function (a) {
            this.o = a
        };

        function yh(a, b, c, d) {
            a.oa = !0;
            a.D = [];
            a.F = c;
            return zh(a, b, !!d)
        }

        function Ah(a, b, c, d) {
            a.D = c;
            a.F = 0 < c.length;
            return zh(a, b, !!d)
        }

        function Bh(a, b, c, d, e, f) {
            var g = new Map;
            e = {
                audioCapabilities: e,
                videoCapabilities: f,
                distinctiveIdentifier: "optional",
                persistentState: "required",
                sessionTypes: ["persistent-license"],
                label: b
            };
            e.drmInfos = [{
                keySystem: b,
                licenseServerUri: c,
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !0,
                audioRobustness: "",
                videoRobustness: "",
                serverCertificate: d,
                initData: null,
                keyIds: null
            }];
            g.set(b, e);
            return Ch(a, g, [], !1)
        }

        function zh(a, b, c) {
            var d, e, f, g, h, k, l, m, n, p, r, u, w, x, y;
            return K(function (D) {
                if (1 == D.g) {
                    if (d = Dh(a))
                        for (e = t(b), f = e.next(); !f.done; f = e.next()) g = f.value, g.video && (g.video.drmInfos = [d]), g.audio && (g.audio.drmInfos = [d]);
                    h = b.some(function (C) {
                        return C.video && C.video.drmInfos.length || C.audio && C.audio.drmInfos.length ? !0 : !1
                    });
                    h || (k = qh(a.o.servers), Eh(b, k));
                    l = t(b);
                    for (f = l.next(); !f.done; f = l.next())
                        for (m = f.value, n = Fh(m), p = t(n), r = p.next(); !r.done; r = p.next()) u = r.value, Gh(u, qh(a.o.servers), qh(a.o.advanced || {}));
                    return c ?
                        v(D, ig(b, a.F), 2) : (w = Hh(a, b), D.v(2))
                }
                x = h || Object.keys(a.o.servers).length;
                if (!x) return a.L = !0, D["return"](Promise.resolve());
                y = Ch(a, w, b, c);
                return D["return"](h ? y : y["catch"](function () {}))
            })
        }
        q.Mb = function (a) {
            var b = this,
                c, d;
            return K(function (e) {
                if (1 == e.g) {
                    if (!b.m) return b.h.ua(a, "encrypted", function () {
                        b.l(new O(2, 6, 6010))
                    }), e["return"]();
                    b.g = a;
                    b.h.ua(b.g, "play", function () {
                        for (var f = t(b.I), g = f.next(); !g.done; g = f.next()) Kh(b, g.value);
                        b.N = !0;
                        b.I = []
                    });
                    "webkitCurrentPlaybackTargetIsWireless" in b.g && b.h.B(b.g, "webkitcurrentplaybacktargetiswirelesschanged", function () {
                        return xh(b)
                    });
                    c = b.g.setMediaKeys(b.m);
                    c = c["catch"](function (f) {
                        return Promise.reject(new O(2, 6, 6003, f.message))
                    });
                    return v(e,
                        c, 2)
                }
                ef(b.J);
                Lh(b);
                b.i.initData.length || b.D.length || (d = function (f) {
                    return Mh(b, f.initDataType, qb(f.initData))
                }, b.h.B(b.g, "encrypted", d));
                z(e)
            })
        };

        function Nh(a) {
            var b;
            return K(function (c) {
                if (1 == c.g) {
                    if (!(a.m && a.i && a.i.serverCertificate && a.i.serverCertificate.length)) return c.v(0);
                    B(c, 3);
                    return v(c, a.m.setServerCertificate(a.i.serverCertificate), 5)
                }
                if (3 != c.g) return wa(c, 0);
                b = E(c);
                throw new O(2, 6, 6004, b.message);
            })
        }

        function Oh(a, b) {
            var c, d, e;
            return K(function (f) {
                if (1 == f.g) return v(f, Ph(a, b), 2);
                c = f.h;
                if (!c) return f["return"]();
                d = [];
                if (e = a.j.get(c)) e.Ka = new He, d.push(e.Ka);
                d.push(c.remove());
                return v(f, Promise.all(d), 0)
            })
        }

        function Lh(a) {
            for (var b = (a.i ? a.i.initData : []) || [], c = t(b), d = c.next(); !d.done; d = c.next()) d = d.value, Mh(a, d.initDataType, d.initData);
            c = t(a.D);
            for (d = c.next(); !d.done; d = c.next()) Ph(a, d.value);
            b.length || a.D.length || a.s.resolve();
            return a.s
        }

        function Mh(a, b, c) {
            var d = a.j.values();
            d = t(d);
            for (var e = d.next(); !e.done; e = d.next())
                if (ob(c, e.value.initData) && !dc("Tizen 2")) return;
            Qh(a, b, c)
        }

        function Rh(a) {
            return a ? a.keySystem : ""
        }

        function Sh(a) {
            return a ? !!a.match(/^com\.(microsoft|chromecast)\.playready/) : !1
        }

        function Th(a, b) {
            if (navigator.userAgent.match(/Edge\//)) return !0;
            b = b.toLowerCase();
            if (ec() && b.includes('codecs="ac-3"')) {
                var c = b.replace("ac-3", "ec-3");
                return a.u.has(b) || a.u.has(c)
            }
            return a.u.has(b)
        }

        function Uh(a) {
            a = a.j.keys();
            a = gb(a, function (b) {
                return b.sessionId
            });
            return Array.from(a)
        }
        q.Qb = function () {
            var a = Infinity,
                b = this.j.keys();
            b = t(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, isNaN(c.expiration) || (a = Math.min(a, c.expiration));
            return a
        };
        q.xc = function () {
            return rh(this.X)
        };

        function Hh(a, b) {
            for (var c = new Set, d = t(b), e = d.next(); !e.done; e = d.next()) {
                var f = t(Fh(e.value));
                for (e = f.next(); !e.done; e = f.next()) c.add(e.value)
            }
            d = t(c);
            for (e = d.next(); !e.done; e = d.next()) Gh(e.value, qh(a.o.servers), qh(a.o.advanced || {}));
            f = a.F ? "required" : "optional";
            var g = a.F ? ["persistent-license"] : ["temporary"];
            d = new Map;
            c = t(c);
            for (e = c.next(); !e.done; e = c.next()) e = e.value, d.set(e.keySystem, {
                initDataTypes: ["cenc"],
                audioCapabilities: [],
                videoCapabilities: [],
                distinctiveIdentifier: "optional",
                persistentState: f,
                sessionTypes: g,
                label: e.keySystem,
                drmInfos: []
            });
            c = t(b);
            for (e = c.next(); !e.done; e = c.next())
                for (e = e.value, f = t([e.audio, e.video]), e = f.next(); !e.done; e = f.next())
                    if (g = e.value) {
                        var h = Vh(g),
                            k = null;
                        "ac-3" == g.codecs.toLowerCase() && ec() && (k = Vh(g, "ec-3"));
                        var l = t(g.drmInfos);
                        for (e = l.next(); !e.done; e = l.next()) {
                            var m = e.value;
                            e = d.get(m.keySystem);
                            e.drmInfos.push(m);
                            m.initData && m.initData.length && (e.initDataTypes = [].concat(ja(new Set(m.initData.map(function (p) {
                                return p.initDataType
                            })))));
                            m.distinctiveIdentifierRequired &&
                                (e.distinctiveIdentifier = "required");
                            m.persistentStateRequired && (e.persistentState = "required");
                            m.sessionType && (e.sessionTypes = [m.sessionType]);
                            m = "audio" == g.type ? m.audioRobustness : m.videoRobustness;
                            var n = {
                                robustness: m || "",
                                contentType: h
                            };
                            "audio" == g.type ? e.audioCapabilities.push(n) : e.videoCapabilities.push(n);
                            k && (m = {
                                robustness: m || "",
                                contentType: k
                            }, "audio" == g.type ? e.audioCapabilities.push(m) : e.videoCapabilities.push(m))
                        }
                    } return d
        }

        function Vh(a, b) {
            var c = Qe(a.mimeType, b || a.codecs);
            return Me(c) ? Oe(a.type, c) : c
        }

        function Ch(a, b, c, d) {
            var e, f, g, h, k, l, m, n, p, r, u, w, x;
            return K(function (y) {
                switch (y.g) {
                case 1:
                    e = new Map;
                    if (d) {
                        a: {
                            for (var D = t(c), C = D.next(); !C.done; C = D.next()) {
                                var A = t(Fh(C.value));
                                for (C = A.next(); !C.done; C = A.next()) {
                                    var F = C.value;
                                    e.has(F.keySystem) || e.set(F.keySystem, []);
                                    e.get(F.keySystem).push(F)
                                }
                            }
                            if (1 == e.size && e.has("")) throw new O(2, 6, 6E3);D = t([!0, !1]);
                            for (A = D.next(); !A.done; A = D.next())
                                for (A = A.value, F = t(c), C = F.next(); !C.done; C = F.next()) {
                                    var G = t(C.value.decodingInfos);
                                    for (C = G.next(); !C.done; C = G.next()) {
                                        var H =
                                            C.value;
                                        if (H.supported && H.keySystemAccess) {
                                            C = e.get(H.keySystemAccess.keySystem);
                                            var I = t(C);
                                            for (C = I.next(); !C.done; C = I.next())
                                                if (!!C.value.licenseServerUri == A) {
                                                    f = H.keySystemAccess;
                                                    break a
                                                }
                                        }
                                    }
                                }
                            f = null
                        }
                        y.v(2);
                        break
                    }
                    return v(y, Wh(a, b), 3);
                case 3:
                    f = y.h;
                case 2:
                    g = f;
                    if (!g) throw new O(2, 6, 6001);
                    ef(a.J);
                    B(y, 4);
                    a.u.clear();
                    h = g.getConfiguration();
                    k = h.audioCapabilities || [];
                    l = h.videoCapabilities || [];
                    m = t(k);
                    for (n = m.next(); !n.done; n = m.next()) p = n.value, a.u.add(p.contentType.toLowerCase());
                    r = t(l);
                    for (n = r.next(); !n.done; n =
                        r.next()) u = n.value, a.u.add(u.contentType.toLowerCase());
                    if (d) {
                        A = g.keySystem;
                        D = e.get(g.keySystem);
                        F = [];
                        C = [];
                        G = [];
                        H = new Set;
                        Xh(D, F, C, G, H);
                        I = a.F ? "persistent-license" : "temporary";
                        A = {
                            keySystem: A,
                            licenseServerUri: F[0],
                            distinctiveIdentifierRequired: D[0].distinctiveIdentifierRequired,
                            persistentStateRequired: D[0].persistentStateRequired,
                            sessionType: D[0].sessionType || I,
                            audioRobustness: D[0].audioRobustness || "",
                            videoRobustness: D[0].videoRobustness || "",
                            serverCertificate: C[0],
                            initData: G,
                            keyIds: H
                        };
                        D = t(D);
                        for (F =
                            D.next(); !F.done; F = D.next()) F = F.value, F.distinctiveIdentifierRequired && (A.distinctiveIdentifierRequired = F.distinctiveIdentifierRequired), F.persistentStateRequired && (A.persistentStateRequired = F.persistentStateRequired);
                        D = A
                    } else D = g.keySystem, A = b.get(g.keySystem), F = [], C = [], G = [], H = new Set, Xh(A.drmInfos, F, C, G, H), D = {
                        keySystem: D,
                        licenseServerUri: F[0],
                        distinctiveIdentifierRequired: "required" == A.distinctiveIdentifier,
                        persistentStateRequired: "required" == A.persistentState,
                        sessionType: A.sessionTypes[0] || "temporary",
                        audioRobustness: (A.audioCapabilities ? A.audioCapabilities[0].robustness : "") || "",
                        videoRobustness: (A.videoCapabilities ? A.videoCapabilities[0].robustness : "") || "",
                        serverCertificate: C[0],
                        initData: G,
                        keyIds: H
                    };
                    a.i = D;
                    if (!a.i.licenseServerUri) throw new O(2, 6, 6012, a.i.keySystem);
                    return v(y, g.createMediaKeys(), 6);
                case 6:
                    return w = y.h, ef(a.J), a.m = w, a.L = !0, v(y, Nh(a), 7);
                case 7:
                    ef(a.J);
                    wa(y, 0);
                    break;
                case 4:
                    x = E(y);
                    ef(a.J, x);
                    a.i = null;
                    a.u.clear();
                    if (x instanceof O) throw x;
                    throw new O(2, 6, 6002, x.message);
                }
            })
        }

        function Wh(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p, r;
            return K(function (u) {
                switch (u.g) {
                case 1:
                    if (1 == b.size && b.has("")) throw new O(2, 6, 6E3);
                    d = t(b.values());
                    for (e = d.next(); !e.done; e = d.next()) f = e.value, 0 == f.audioCapabilities.length && delete f.audioCapabilities, 0 == f.videoCapabilities.length && delete f.videoCapabilities;
                    g = t([!0, !1]);
                    h = g.next();
                case 2:
                    if (h.done) {
                        u.v(4);
                        break
                    }
                    k = h.value;
                    l = t(b.keys());
                    m = l.next();
                case 5:
                    if (m.done) {
                        h = g.next();
                        u.v(2);
                        break
                    }
                    n = m.value;
                    p = b.get(n);
                    r = p.drmInfos.some(function (w) {
                        return !!w.licenseServerUri
                    });
                    if (r != k) {
                        u.v(6);
                        break
                    }
                    B(u, 8);
                    return v(u, navigator.requestMediaKeySystemAccess(n, [p]), 10);
                case 10:
                    return c = u.h, u["return"](c);
                case 8:
                    E(u);
                case 9:
                    ef(a.J);
                case 6:
                    m = l.next();
                    u.v(5);
                    break;
                case 4:
                    return u["return"](c)
                }
            })
        }

        function Dh(a) {
            a = qh(a.o.clearKeys);
            if (0 == a.size) return null;
            var b = [],
                c = [];
            a.forEach(function (e, f) {
                var g = oc(f),
                    h = oc(e);
                g = {
                    kty: "oct",
                    kid: mc(g, !1),
                    k: mc(h, !1)
                };
                b.push(g);
                c.push(g.kid)
            });
            a = JSON.stringify({
                keys: b
            });
            var d = JSON.stringify({
                kids: c
            });
            d = [{
                initData: qb(Ab(d)),
                initDataType: "keyids"
            }];
            return {
                keySystem: "org.w3.clearkey",
                licenseServerUri: "data:application/json;base64," + window.btoa(a),
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !1,
                audioRobustness: "",
                videoRobustness: "",
                serverCertificate: null,
                sessionType: "",
                initData: d,
                keyIds: new Set(c)
            }
        }

        function Ph(a, b) {
            var c, d, e, f, g;
            return K(function (h) {
                switch (h.g) {
                case 1:
                    try {
                        c = a.m.createSession("persistent-license")
                    } catch (k) {
                        return d = new O(2, 6, 6005, k.message), a.l(d), h["return"](Promise.reject(d))
                    }
                    a.h.B(c, "message", function (k) {
                        a.g && a.o.delayLicenseRequestUntilPlayed && a.g.paused && !a.N ? a.I.push(k) : Kh(a, k)
                    });
                    a.h.B(c, "keystatuseschange", function (k) {
                        return Yh(a, k)
                    });
                    e = {
                        initData: null,
                        loaded: !1,
                        xd: Infinity,
                        Ka: null,
                        type: "persistent-license"
                    };
                    a.j.set(c, e);
                    B(h, 2);
                    return v(h, c.load(b), 4);
                case 4:
                    f = h.h;
                    ef(a.J);
                    if (!f) return a.j["delete"](c), a.l(new O(2, 6, 6013)), h["return"](Promise.resolve());
                    e.loaded = !0;
                    Zh(a) && a.s.resolve();
                    return h["return"](c);
                case 2:
                    g = E(h), ef(a.J, g), a.j["delete"](c), a.l(new O(2, 6, 6005, g.message));
                case 3:
                    return h["return"](Promise.resolve())
                }
            })
        }

        function Qh(a, b, c) {
            var d = a.i.sessionType;
            try {
                var e = a.m.createSession(d)
            } catch (f) {
                a.l(new O(2, 6, 6005, f.message));
                return
            }
            a.h.B(e, "message", function (f) {
                a.g && a.o.delayLicenseRequestUntilPlayed && a.g.paused && !a.N ? a.I.push(f) : Kh(a, f)
            });
            a.h.B(e, "keystatuseschange", function (f) {
                return Yh(a, f)
            });
            a.j.set(e, {
                initData: c,
                loaded: !1,
                xd: Infinity,
                Ka: null,
                type: d
            });
            try {
                c = a.o.initDataTransform(c, b, a.i)
            } catch (f) {
                b = f;
                f instanceof O || (b = new O(2, 6, 6016, f));
                a.l(b);
                return
            }
            a.o.logLicenseExchange && mc(c);
            e.generateRequest(b, c)["catch"](function (f) {
                if (!a.J.g) {
                    a.j["delete"](e);
                    var g = f.errorCode;
                    if (g && g.systemCode) {
                        var h = g.systemCode;
                        0 > h && (h += Math.pow(2, 32));
                        h = "0x" + h.toString(16)
                    }
                    a.l(new O(2, 6, 6006, f.message, f, h))
                }
            })
        }

        function $h(a, b, c) {
            "skd" == b && (b = c.serverCertificate, c = oh(a), a = ph(a, c, b));
            return a
        }

        function Kh(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p, r, u, w;
            K(function (x) {
                switch (x.g) {
                case 1:
                    return c = b.target, a.o.logLicenseExchange && mc(b.message), d = a.j.get(c), e = a.i.licenseServerUri, f = a.o.advanced[a.i.keySystem], "individualization-request" == b.messageType && f && f.individualizationServer && (e = f.individualizationServer), g = gh([e], a.o.retryParameters), g.body = b.message, g.method = "POST", g.licenseRequestType = b.messageType, g.sessionId = c.sessionId, Sh(a.i.keySystem) && ai(g), h = Date.now(), B(x, 2), l = a.C.Bb.request(2, g), v(x,
                        l.promise, 4);
                case 4:
                    k = x.h;
                    wa(x, 3);
                    break;
                case 2:
                    return m = E(x), n = new O(2, 6, 6007, m), a.l(n), d && d.Ka && d.Ka.reject(n), x["return"]();
                case 3:
                    if (a.J.g) return x["return"]();
                    a.H += (Date.now() - h) / 1E3;
                    a.o.logLicenseExchange && mc(k.data);
                    B(x, 5);
                    return v(x, c.update(k.data), 7);
                case 7:
                    wa(x, 6);
                    break;
                case 5:
                    return p = E(x), r = new O(2, 6, 6008, p.message), a.l(r), d && d.Ka && d.Ka.reject(r), x["return"]();
                case 6:
                    u = new Q("drmsessionupdate"), a.C.onEvent(u), d && (d.Ka && d.Ka.resolve(), w = new P(function () {
                            d.loaded = !0;
                            Zh(a) && a.s.resolve()
                        }),
                        w.T(bi)), z(x)
                }
            })
        }

        function ai(a) {
            var b = xb(a.body, !0, !0);
            if (b.includes("PlayReadyKeyMessage")) {
                b = (new DOMParser).parseFromString(b, "application/xml");
                for (var c = t(b.getElementsByTagName("HttpHeader")), d = c.next(); !d.done; d = c.next()) d = d.value, a.headers[d.getElementsByTagName("name")[0].textContent] = d.getElementsByTagName("value")[0].textContent;
                a.body = nc(b.getElementsByTagName("Challenge")[0].textContent)
            } else a.headers["Content-Type"] = "text/xml; charset=utf-8"
        }

        function Yh(a, b) {
            var c = b.target,
                d = a.j.get(c),
                e = !1;
            c.keyStatuses.forEach(function (g, h) {
                if ("string" == typeof h) {
                    var k = h;
                    h = g;
                    g = k
                }
                if (Sh(a.i.keySystem) && 16 == h.byteLength && navigator.userAgent.match(/Edge?\//)) {
                    k = tb(h);
                    var l = k.getUint32(0, !0),
                        m = k.getUint16(4, !0),
                        n = k.getUint16(6, !0);
                    k.setUint32(0, l, !1);
                    k.setUint16(4, m, !1);
                    k.setUint16(6, n, !1)
                }
                "status-pending" != g && (d.loaded = !0);
                "expired" == g && (e = !0);
                k = pc(h);
                a.pa.set(k, g)
            });
            var f = c.expiration - Date.now();
            (0 > f || e && 1E3 > f) && d && !d.Ka && (a.j["delete"](c), c.close()["catch"](function () {}));
            Zh(a) && (a.s.resolve(), a.S.T(ci))
        }

        function uh(a) {
            var b = a.pa,
                c = a.X;
            c.clear();
            b.forEach(function (d, e) {
                return c.set(e, d)
            });
            b = Array.from(c.values());
            b.length && b.every(function (d) {
                return "expired" == d
            }) && a.l(new O(2, 6, 6014));
            a.C.Dc(rh(c))
        }

        function di() {
            var a, b, c, d, e, f, g, h;
            return K(function (k) {
                return 1 == k.g ? (a = "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.microsoft.playready.recommendation com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" "), b = [{
                    contentType: 'video/mp4; codecs="avc1.42E01E"'
                }, {
                    contentType: 'video/webm; codecs="vp8"'
                }], c = {
                    initDataTypes: ["cenc"],
                    videoCapabilities: b
                }, d = {
                    videoCapabilities: b,
                    persistentState: "required",
                    sessionTypes: ["persistent-license"]
                }, e = [d,
                    c
                ], f = new Map, g = function (l) {
                    var m, n, p;
                    return K(function (r) {
                        switch (r.g) {
                        case 1:
                            return B(r, 2), v(r, navigator.requestMediaKeySystemAccess(l, e), 4);
                        case 4:
                            return m = r.h, p = (n = m.getConfiguration().sessionTypes) ? n.includes("persistent-license") : !1, dc("Tizen 3") && (p = !1), f.set(l, {
                                persistentState: p
                            }), v(r, m.createMediaKeys(), 5);
                        case 5:
                            wa(r, 0);
                            break;
                        case 2:
                            E(r), f.set(l, null), z(r)
                        }
                    })
                }, h = a.map(function (l) {
                    return g(l)
                }), v(k, Promise.all(h), 2)) : k["return"](rh(f))
            })
        }

        function ei(a) {
            var b;
            return K(function (c) {
                if (1 == c.g) return b = new Promise(function (d, e) {
                    (new P(e)).T(fi)
                }), B(c, 2), v(c, Promise.race([Promise.all([a.close(), a.closed]), b]), 4);
                if (2 != c.g) return wa(c, 0);
                E(c);
                z(c)
            })
        }

        function xh(a) {
            var b;
            return K(function (c) {
                b = Array.from(a.j.entries());
                a.j.clear();
                return v(c, Promise.all(b.map(function (d) {
                    d = t(d);
                    var e = d.next().value,
                        f = d.next().value;
                    return K(function (g) {
                        if (1 == g.g) return B(g, 2), a.oa || a.D.includes(e.sessionId) || "persistent-license" !== f.type ? v(g, ei(e), 5) : v(g, e.remove(), 5);
                        if (2 != g.g) return wa(g, 0);
                        E(g);
                        z(g)
                    })
                })), 0)
            })
        }

        function hg(a, b) {
            var c = b.audio,
                d = b.video;
            if (c && c.encrypted && (c = Vh(c), !Th(a, c)) || d && d.encrypted && (d = Vh(d), !Th(a, d))) return !1;
            var e = Rh(a.i);
            d = Fh(b);
            return 0 == d.length || d.some(function (f) {
                return f.keySystem == e
            })
        }

        function gi(a, b) {
            if (!a.length) return b;
            if (!b.length) return a;
            for (var c = [], d = t(a), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                for (var f = t(b), g = f.next(); !g.done; g = f.next())
                    if (g = g.value, e.keySystem == g.keySystem) {
                        f = [];
                        f = f.concat(e.initData || []);
                        f = f.concat(g.initData || []);
                        var h = e.keyIds && g.keyIds ? new Set([].concat(ja(e.keyIds), ja(g.keyIds))) : e.keyIds || g.keyIds;
                        c.push({
                            keySystem: e.keySystem,
                            licenseServerUri: e.licenseServerUri || g.licenseServerUri,
                            distinctiveIdentifierRequired: e.distinctiveIdentifierRequired ||
                                g.distinctiveIdentifierRequired,
                            persistentStateRequired: e.persistentStateRequired || g.persistentStateRequired,
                            videoRobustness: e.videoRobustness || g.videoRobustness,
                            audioRobustness: e.audioRobustness || g.audioRobustness,
                            serverCertificate: e.serverCertificate || g.serverCertificate,
                            initData: f,
                            keyIds: h
                        });
                        break
                    }
            }
            return c
        }

        function Fh(a) {
            return (a.video ? a.video.drmInfos : []).concat(a.audio ? a.audio.drmInfos : [])
        }

        function vh(a) {
            a.j.forEach(function (b, c) {
                var d = b.xd,
                    e = c.expiration;
                isNaN(e) && (e = Infinity);
                e != d && (a.C.onExpirationUpdated(c.sessionId, e), b.xd = e)
            })
        }

        function Zh(a) {
            a = a.j.values();
            return hb(a, function (b) {
                return b.loaded
            })
        }

        function Eh(a, b) {
            var c = [];
            b.forEach(function (f, g) {
                c.push({
                    keySystem: g,
                    licenseServerUri: f,
                    distinctiveIdentifierRequired: !1,
                    persistentStateRequired: !1,
                    audioRobustness: "",
                    videoRobustness: "",
                    serverCertificate: null,
                    initData: [],
                    keyIds: new Set
                })
            });
            for (var d = t(a), e = d.next(); !e.done; e = d.next()) e = e.value, e.video && (e.video.drmInfos = c), e.audio && (e.audio.drmInfos = c)
        }

        function Xh(a, b, c, d, e) {
            var f = {};
            a = t(a);
            for (var g = a.next(); !g.done; f = {
                    xa: f.xa
                }, g = a.next()) {
                f.xa = g.value;
                b.includes(f.xa.licenseServerUri) || b.push(f.xa.licenseServerUri);
                f.xa.serverCertificate && (c.some(function (l) {
                    return function (m) {
                        return ob(m, l.xa.serverCertificate)
                    }
                }(f)) || c.push(f.xa.serverCertificate));
                if (f.xa.initData) {
                    g = {};
                    for (var h = t(f.xa.initData), k = h.next(); !k.done; g = {
                            fc: g.fc
                        }, k = h.next()) g.fc = k.value, d.some(function (l) {
                        return function (m) {
                            var n = l.fc;
                            return m.keyId && m.keyId == n.keyId ? !0 : m.initDataType ==
                                n.initDataType && ob(m.initData, n.initData)
                        }
                    }(g)) || d.push(g.fc)
                }
                if (f.xa.keyIds)
                    for (g = t(f.xa.keyIds), h = g.next(); !h.done; h = g.next()) e.add(h.value)
            }
        }

        function Gh(a, b, c) {
            if (a.keySystem && ("org.w3.clearkey" != a.keySystem || !a.licenseServerUri)) {
                b.size && (b = b.get(a.keySystem) || "", a.licenseServerUri = b);
                a.keyIds || (a.keyIds = new Set);
                if (c = c.get(a.keySystem)) a.distinctiveIdentifierRequired || (a.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), a.persistentStateRequired || (a.persistentStateRequired = c.persistentStateRequired), a.videoRobustness || (a.videoRobustness = c.videoRobustness), a.audioRobustness || (a.audioRobustness = c.audioRobustness), a.serverCertificate ||
                    (a.serverCertificate = c.serverCertificate), c.sessionType && (a.sessionType = c.sessionType);
                window.cast && window.cast.__platform__ && "com.microsoft.playready" == a.keySystem && (a.keySystem = "com.chromecast.playready")
            }
        }
        var fi = 1,
            bi = 5,
            ci = .5,
            hi = new ub(function () {
                return rb(new Uint8Array([0]))
            });

        function ii() {}

        function ji(a, b, c, d) {
            var e, f, g, h;
            return K(function (k) {
                if (1 == k.g) {
                    if (d && (e = ki[d.toLowerCase()])) return k["return"](e);
                    if (f = li(a))
                        if (g = mi[f]) return k["return"](g);
                    return d ? k.v(2) : v(k, ni(a, b, c), 3)
                }
                if (2 != k.g && (d = k.h) && (h = ki[d])) return k["return"](h);
                throw new O(2, 4, 4E3, a);
            })
        }

        function ni(a, b, c) {
            var d, e, f;
            return K(function (g) {
                if (1 == g.g) return d = gh([a], c), d.method = "HEAD", v(g, b.request(0, d).promise, 2);
                e = g.h;
                f = e.headers["content-type"];
                return g["return"](f ? f.toLowerCase().split(";").shift() : "")
            })
        }

        function li(a) {
            a = (new ne(a)).wa.split("/").pop().split(".");
            return 1 == a.length ? "" : a.pop().toLowerCase()
        }
        L("shaka.media.ManifestParser", ii);
        ii.unregisterParserByMime = function (a) {
            delete ki[a]
        };
        ii.registerParserByMime = function (a, b) {
            ki[a] = b
        };
        ii.registerParserByExtension = function (a, b) {
            mi[a] = b
        };
        var ki = {},
            mi = {};

        function oi(a, b, c) {
            this.ma = a;
            this.ja = b;
            this.da = c
        }
        oi.prototype.Tb = function () {
            return this.ja
        };
        oi.prototype.Pb = function () {
            return this.da
        };

        function pi(a, b) {
            return a && b ? a.Tb() == b.Tb() && a.Pb() == b.Pb() && yc(a.ma(), b.ma()) : a == b
        }
        L("shaka.media.InitSegmentReference", oi);
        oi.prototype.getEndByte = oi.prototype.Pb;
        oi.prototype.getStartByte = oi.prototype.Tb;

        function qi(a, b, c, d, e, f, g, h, k, l) {
            l = void 0 === l ? [] : l;
            this.startTime = a;
            this.endTime = b;
            this.i = c;
            this.ja = d;
            this.da = e;
            this.h = f;
            this.timestampOffset = g;
            this.appendWindowStart = h;
            this.appendWindowEnd = k;
            this.g = l
        }
        q = qi.prototype;
        q.ma = function () {
            return this.i()
        };
        q.$e = function () {
            return this.startTime
        };
        q.Ne = function () {
            return this.endTime
        };
        q.Tb = function () {
            return this.ja
        };
        q.Pb = function () {
            return this.da
        };
        L("shaka.media.SegmentReference", qi);
        qi.prototype.getEndByte = qi.prototype.Pb;
        qi.prototype.getStartByte = qi.prototype.Tb;
        qi.prototype.getEndTime = qi.prototype.Ne;
        qi.prototype.getStartTime = qi.prototype.$e;
        qi.prototype.getUris = qi.prototype.ma;

        function T(a, b, c) {
            this.j = a;
            this.Gc = b;
            this.m = this.l = Infinity;
            this.g = 1;
            this.h = this.i = null;
            this.s = 0;
            this.u = !0;
            this.D = 0;
            this.F = void 0 === c ? !0 : c;
            this.H = 0
        }
        q = T.prototype;
        q.getDuration = function () {
            return this.l
        };
        q.Te = function () {
            return this.g
        };
        q.Ja = function (a) {
            this.l = a
        };
        q.Ze = function () {
            return this.j
        };
        q.pe = function (a) {
            this.s = a
        };
        q.ac = function (a) {
            this.u = a
        };
        q.Md = function (a) {
            this.m = a
        };
        q.Ff = function (a) {
            this.Gc = a
        };
        q.Me = function () {
            return this.Gc
        };
        q.Cb = function (a) {
            if (0 != a.length) {
                var b = a[a.length - 1].endTime;
                this.vd(a[0].startTime);
                this.g = a.reduce(function (c, d) {
                    return Math.max(c, d.endTime - d.startTime)
                }, this.g);
                this.h = Math.max(this.h, b);
                null != this.j && this.F && (this.j = (Date.now() + this.s) / 1E3 - this.h - this.g)
            }
        };
        q.vd = function (a) {
            this.i = null == this.i ? a : Math.min(this.i, a)
        };
        q.ud = function (a) {
            this.g = Math.max(this.g, a)
        };
        q.offset = function (a) {
            null != this.i && (this.i += a);
            null != this.h && (this.h += a)
        };
        q.Y = function () {
            return Infinity == this.l && !this.u
        };
        q.ib = function () {
            return Infinity != this.l && !this.u
        };
        q.Ya = function () {
            return Math.max(this.D, this.fb() - this.m)
        };
        q.qe = function (a) {
            this.D = a
        };
        q.fb = function () {
            return this.Y() || this.ib() ? Math.min(Math.max(0, (Date.now() + this.s) / 1E3 - this.g - this.j) + this.H, this.l) : this.l
        };
        q.Sb = function (a) {
            var b = Math.max(this.i, this.D);
            return Infinity == this.m ? Math.ceil(1E3 * b) / 1E3 : Math.max(b, Math.min(this.fb() - this.m + a, this.Qa()))
        };
        q.xb = function () {
            return this.Sb(0)
        };
        q.Qa = function () {
            return Math.max(0, this.fb() - (this.Y() || this.ib() ? this.Gc : 0))
        };
        q.te = function () {
            return null == this.j || null != this.h && this.F ? !1 : !0
        };
        q.oe = function (a) {
            this.H = a
        };
        L("shaka.media.PresentationTimeline", T);
        T.prototype.setAvailabilityTimeOffset = T.prototype.oe;
        T.prototype.usingPresentationStartTime = T.prototype.te;
        T.prototype.getSeekRangeEnd = T.prototype.Qa;
        T.prototype.getSeekRangeStart = T.prototype.xb;
        T.prototype.getSafeSeekRangeStart = T.prototype.Sb;
        T.prototype.getSegmentAvailabilityEnd = T.prototype.fb;
        T.prototype.setUserSeekStart = T.prototype.qe;
        T.prototype.getSegmentAvailabilityStart = T.prototype.Ya;
        T.prototype.isInProgress = T.prototype.ib;
        T.prototype.isLive = T.prototype.Y;
        T.prototype.offset = T.prototype.offset;
        T.prototype.notifyMaxSegmentDuration = T.prototype.ud;
        T.prototype.notifyMinSegmentStartTime = T.prototype.vd;
        T.prototype.notifySegments = T.prototype.Cb;
        T.prototype.getDelay = T.prototype.Me;
        T.prototype.setDelay = T.prototype.Ff;
        T.prototype.setSegmentAvailabilityDuration = T.prototype.Md;
        T.prototype.setStatic = T.prototype.ac;
        T.prototype.setClockOffset = T.prototype.pe;
        T.prototype.getPresentationStartTime = T.prototype.Ze;
        T.prototype.setDuration = T.prototype.Ja;
        T.prototype.getMaxSegmentDuration = T.prototype.Te;
        T.prototype.getDuration = T.prototype.getDuration;

        function ri(a, b) {
            this.j = a;
            this.m = si(a);
            this.g = a.g.currentTime;
            this.l = Date.now() / 1E3;
            this.h = !1;
            this.s = b;
            this.i = function () {}
        }
        ri.prototype.release = function () {
            this.j = null;
            this.i = function () {}
        };

        function ti(a, b) {
            a.i = b
        }

        function ui(a) {
            this.g = a
        }

        function si(a) {
            if (a.g.paused || 0 == a.g.playbackRate || 0 == a.g.buffered.length) var b = !1;
            else a: {
                b = a.g.currentTime;a = t(ke(a.g.buffered));
                for (var c = a.next(); !c.done; c = a.next())
                    if (c = c.value, !(b < c.start - .1 || b > c.end - .5)) {
                        b = !0;
                        break a
                    } b = !1
            }
            return b
        };

        function vi(a, b, c, d, e) {
            var f = this;
            this.g = a;
            this.D = b;
            this.o = c;
            this.u = e;
            this.h = new hf;
            this.s = !1;
            this.F = a.readyState;
            this.j = !1;
            this.i = d;
            this.m = !1;
            this.h.B(a, "waiting", function () {
                return wi(f)
            });
            this.l = (new P(function () {
                wi(f)
            })).Ba(.25)
        }
        vi.prototype.release = function () {
            this.h && (this.h.release(), this.h = null);
            null != this.l && (this.l.stop(), this.l = null);
            this.i && (this.i.release(), this.i = null);
            this.g = this.D = this.u = null
        };
        vi.prototype.yd = function () {
            this.m = !0;
            wi(this)
        };

        function wi(a) {
            if (0 != a.g.readyState) {
                if (a.g.seeking) {
                    if (!a.s) return
                } else a.s = !1;
                if (!a.g.paused || 0 == a.g.currentTime) {
                    a.g.readyState != a.F && (a.j = !1, a.F = a.g.readyState);
                    var b;
                    if (!(b = !a.i)) {
                        b = a.i;
                        var c = b.j,
                            d = si(c),
                            e = c.g.currentTime,
                            f = Date.now() / 1E3;
                        if (b.g != e || b.m != d) b.l = f, b.g = e, b.m = d, b.h = !1;
                        e = f - b.l;
                        if (d = e >= b.s && d && !b.h) b.i(b.g, e), b.h = !0, b.g = c.g.currentTime;
                        b = !d
                    }
                    if (b) {
                        var g = a.o.smallGapLimit;
                        e = a.g.currentTime;
                        b = a.g.buffered;
                        c = le(b, e, a.o.gapDetectionThreshold);
                        if (!(null == c || 0 == c && !a.m || (d = b.start(c), d >=
                                a.D.Qa()))) {
                            f = d - e;
                            g = f <= g;
                            var h = !1;
                            .001 > f || (g || a.j || (a.j = !0, e = new Q("largegap", {
                                currentTime: e,
                                gapSize: f
                            }), e.cancelable = !0, a.u(e), a.o.jumpLargeGaps && !e.defaultPrevented && (h = !0)), !g && !h) || (0 != c && b.end(c - 1), a.g.currentTime = d)
                        }
                    }
                }
            }
        };

        function xi(a, b, c, d) {
            b == HTMLMediaElement.HAVE_NOTHING || a.readyState >= b ? d() : (b = yi.value().get(b), c.ua(a, b, d))
        }
        var yi = new ub(function () {
            return new Map([
                [HTMLMediaElement.HAVE_METADATA, "loadedmetadata"],
                [HTMLMediaElement.HAVE_CURRENT_DATA, "loadeddata"],
                [HTMLMediaElement.HAVE_FUTURE_DATA, "canplay"],
                [HTMLMediaElement.HAVE_ENOUGH_DATA, "canplaythrough"]
            ])
        });

        function zi(a, b, c) {
            var d = this;
            this.g = a;
            this.l = b;
            this.j = c;
            this.m = !1;
            this.h = new hf;
            this.i = new Ai(a);
            xi(this.g, HTMLMediaElement.HAVE_METADATA, this.h, function () {
                Bi(d, d.j)
            })
        }
        zi.prototype.release = function () {
            this.h && (this.h.release(), this.h = null);
            null != this.i && (this.i.release(), this.i = null);
            this.l = function () {};
            this.g = null
        };

        function Ci(a) {
            return a.m ? a.g.currentTime : a.j
        }

        function Di(a, b) {
            0 < a.g.readyState ? Ei(a.i, b) : xi(a.g, HTMLMediaElement.HAVE_METADATA, a.h, function () {
                Bi(a, a.j)
            })
        }

        function Bi(a, b) {
            .001 > Math.abs(a.g.currentTime - b) ? Fi(a) : (a.h.ua(a.g, "seeking", function () {
                Fi(a)
            }), Ei(a.i, 0 == a.g.currentTime ? b : a.g.currentTime))
        }

        function Fi(a) {
            a.m = !0;
            a.h.B(a.g, "seeking", function () {
                return a.l()
            })
        }

        function Ai(a) {
            var b = this;
            this.h = a;
            this.m = 10;
            this.l = this.j = this.i = 0;
            this.g = new P(function () {
                0 >= b.i ? b.g.stop() : b.h.currentTime != b.j ? b.g.stop() : (b.h.currentTime = b.l, b.i--)
            })
        }
        Ai.prototype.release = function () {
            this.g && (this.g.stop(), this.g = null);
            this.h = null
        };

        function Ei(a, b) {
            a.j = a.h.currentTime;
            a.l = b;
            a.i = a.m;
            a.h.currentTime = b;
            a.g.Ba(.1)
        };

        function Gi(a) {
            function b() {
                null == c.i ? c.j = !0 : (c.h.ua(c.g, "seeking", function () {
                    c.j = !0
                }), c.g.currentTime = Math.max(0, c.g.currentTime + c.i))
            }
            var c = this;
            this.g = a;
            this.j = !1;
            this.i = null;
            this.h = new hf;
            xi(this.g, HTMLMediaElement.HAVE_CURRENT_DATA, this.h, function () {
                b()
            })
        }
        Gi.prototype.release = function () {
            this.h && (this.h.release(), this.h = null);
            this.g = null
        };
        Gi.prototype.m = function (a) {
            this.i = this.j ? this.i : a
        };
        Gi.prototype.l = function () {
            return (this.j ? this.g.currentTime : this.i) || 0
        };
        Gi.prototype.F = function () {};

        function Hi(a, b, c, d, e, f) {
            var g = this;
            this.i = a;
            this.g = b.presentationTimeline;
            this.H = b.minBufferTime || 0;
            this.o = c;
            this.D = e;
            this.u = null;
            this.j = new vi(a, b.presentationTimeline, c, Ii(a, c), f);
            this.h = new zi(a, function () {
                a: {
                    var h = g.j;h.s = !0;h.m = !1;h.j = !1;
                    var k = Ci(g.h);h = Ji(g, k);
                    if (.001 < Math.abs(h - k) && (k = Date.now() / 1E3, !g.u || g.u < k - 1)) {
                        g.u = k;
                        Di(g.h, h);
                        h = void 0;
                        break a
                    }
                    g.D();h = void 0
                }
                return h
            }, Ki(this, d));
            this.s = (new P(function () {
                if (0 != g.i.readyState && !g.i.paused) {
                    var h = Ci(g.h),
                        k = g.g.xb(),
                        l = g.g.Qa();
                    3 > l - k && (k =
                        l - 3);
                    h < k && (h = Ji(g, h), g.i.currentTime = h)
                }
            })).Ba(.25)
        }
        Hi.prototype.release = function () {
            this.h && (this.h.release(), this.h = null);
            this.j && (this.j.release(), this.j = null);
            this.s && (this.s.stop(), this.s = null);
            this.i = this.h = this.g = this.o = null;
            this.D = function () {}
        };
        Hi.prototype.m = function (a) {
            Di(this.h, a)
        };
        Hi.prototype.l = function () {
            var a = Ci(this.h);
            return 0 < this.i.readyState && !this.i.paused ? Li(this, a) : a
        };

        function Ki(a, b) {
            null == b ? b = Infinity > a.g.getDuration() ? a.g.xb() : a.g.Qa() : 0 > b && (b = a.g.Qa() + b);
            return Mi(a, Li(a, b))
        }
        Hi.prototype.F = function () {
            this.j.yd()
        };

        function Mi(a, b) {
            var c = a.g.getDuration();
            return b >= c ? c - a.o.durationBackoff : b
        }

        function Ji(a, b) {
            var c = Math.max(a.H, a.o.rebufferingGoal),
                d = a.o.safeSeekOffset,
                e = a.g.xb(),
                f = a.g.Qa(),
                g = a.g.getDuration();
            3 > f - e && (e = f - 3);
            var h = a.g.Sb(c),
                k = a.g.Sb(d);
            c = a.g.Sb(c + d);
            return b >= g ? Mi(a, b) : b > f ? f : b < e ? ie(a.i.buffered, k) ? k : c : b >= h || ie(a.i.buffered, b) ? b : c
        }

        function Li(a, b) {
            var c = a.g.xb();
            if (b < c) return c;
            c = a.g.Qa();
            return b > c ? c : b
        }

        function Ii(a, b) {
            if (!b.stallEnabled) return null;
            var c = b.stallSkip,
                d = new ri(new ui(a), b.stallThreshold);
            ti(d, function () {
                c ? a.currentTime += c : (a.pause(), a.play())
            });
            return d
        };

        function U(a) {
            this.g = a;
            this.h = null;
            this.i = 0;
            this.j = !1
        }
        q = U.prototype;
        q.destroy = function () {
            Hb("shaka.media.SegmentIndex", "Please use release() instead of destroy().");
            this.release();
            return Promise.resolve()
        };
        q.release = function () {
            this.j || (this.g = [], this.h && this.h.stop(), this.h = null)
        };
        q.jf = function () {
            this.j = !0
        };
        q.find = function (a) {
            for (var b = this.g.length - 1, c = b; 0 <= c; --c) {
                var d = this.g[c],
                    e = c < b ? this.g[c + 1].startTime : d.endTime;
                if (a >= d.startTime && a < e) return c + this.i
            }
            return this.g.length && a < this.g[0].startTime ? this.i : null
        };
        q.get = function (a) {
            if (0 == this.g.length) return null;
            a -= this.i;
            return 0 > a || a >= this.g.length ? null : this.g[a]
        };
        q.offset = function (a) {
            if (!this.j)
                for (var b = t(this.g), c = b.next(); !c.done; c = b.next()) c = c.value, c.startTime += a, c.endTime += a, c.timestampOffset += a
        };
        q.Bc = function (a) {
            !this.j && a.length && (this.g = this.g.filter(function (b) {
                return b.startTime < a[0].startTime
            }), this.g.push.apply(this.g, ja(a)))
        };
        q.Ab = function (a, b) {
            var c = this;
            a = a.filter(function (d) {
                return d.endTime > b && (0 == c.g.length || d.endTime > c.g[0].startTime)
            });
            this.Bc(a);
            this.cb(b)
        };
        q.cb = function (a) {
            if (!this.j) {
                var b = this.g.length;
                this.g = this.g.filter(function (c) {
                    return c.endTime > a
                });
                this.i += b - this.g.length
            }
        };
        q.Xa = function (a, b, c) {
            c = void 0 === c ? !1 : c;
            if (!this.j) {
                for (; this.g.length;)
                    if (this.g[this.g.length - 1].startTime >= b) this.g.pop();
                    else break;
                for (; this.g.length;)
                    if (this.g[0].endTime <= a) this.g.shift(), c || this.i++;
                    else break;
                0 != this.g.length && (a = this.g[this.g.length - 1], this.g[this.g.length - 1] = new qi(a.startTime, b, a.i, a.ja, a.da, a.h, a.timestampOffset, a.appendWindowStart, a.appendWindowEnd))
            }
        };
        q.Jc = function (a, b) {
            var c = this;
            this.j || (this.h && this.h.stop(), this.h = new P(function () {
                var d = b();
                d ? c.g.push.apply(c.g, ja(d)) : (c.h.stop(), c.h = null)
            }), this.h.Ba(a))
        };
        U.prototype[Symbol.iterator] = function () {
            return this.wb(0)
        };
        U.prototype.wb = function (a) {
            var b = this.find(a);
            if (null == b) return null;
            b--;
            var c = this.get(b + 1),
                d = -1;
            if (c && 0 < c.g.length)
                for (var e = c.g.length - 1; 0 <= e; --e) {
                    var f = c.g[e];
                    if (a >= f.startTime && a < f.endTime) {
                        b++;
                        d = e - 1;
                        break
                    }
                }
            return new Ni(this, b, d)
        };

        function Oi(a, b, c) {
            return new U([new qi(a, a + b, function () {
                return c
            }, 0, null, null, a, a, a + b)])
        }
        L("shaka.media.SegmentIndex", U);
        U.forSingleSegment = Oi;
        U.prototype.getIteratorForTime = U.prototype.wb;
        U.prototype.updateEvery = U.prototype.Jc;
        U.prototype.fit = U.prototype.Xa;
        U.prototype.evict = U.prototype.cb;
        U.prototype.mergeAndEvict = U.prototype.Ab;
        U.prototype.merge = U.prototype.Bc;
        U.prototype.offset = U.prototype.offset;
        U.prototype.get = U.prototype.get;
        U.prototype.find = U.prototype.find;
        U.prototype.markImmutable = U.prototype.jf;
        U.prototype.release = U.prototype.release;
        U.prototype.destroy = U.prototype.destroy;

        function Ni(a, b, c) {
            this.i = a;
            this.h = b;
            this.g = c
        }
        Ni.prototype.seek = function (a) {
            Hb("shaka.media.SegmentIterator", "Please use SegmentIndex.getIteratorForTime instead of seek().");
            (a = this.i.wb(a)) ? (this.h = a.h, this.g = a.g) : (this.h = Number.MAX_VALUE, this.g = 0);
            return this.next().value
        };
        Ni.prototype.current = function () {
            var a = this.i.get(this.h);
            a && 0 < a.g.length && a.ma().length && this.g >= a.g.length && (this.h++, this.g = 0, a = this.i.get(this.h));
            return a && 0 < a.g.length ? a.g[this.g] : a
        };
        Ni.prototype.next = function () {
            var a = this.i.get(this.h);
            a && 0 < a.g.length ? (this.g++, a.ma().length && this.g == a.g.length && (this.h++, this.g = 0)) : (this.h++, this.g = 0);
            a = this.current();
            return {
                value: a,
                done: !a
            }
        };
        L("shaka.media.SegmentIterator", Ni);
        Ni.prototype.next = Ni.prototype.next;
        Ni.prototype.current = Ni.prototype.current;
        Ni.prototype.seek = Ni.prototype.seek;

        function Pi() {
            U.call(this, []);
            this.l = []
        }
        ra(Pi, U);
        q = Pi.prototype;
        q.clone = function () {
            var a = new Pi;
            a.l = this.l.slice();
            return a
        };
        q.release = function () {
            for (var a = t(this.l), b = a.next(); !b.done; b = a.next()) b.value.release();
            this.l = []
        };
        q.find = function (a) {
            for (var b = 0, c = t(this.l), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = d.find(a);
                if (null != e) return e + b;
                b += d.i + d.g.length
            }
            return null
        };
        q.get = function (a) {
            for (var b = 0, c = t(this.l), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = d.get(a - b);
                if (e) return e;
                b += d.i + d.g.length
            }
            return null
        };
        q.offset = function () {};
        q.Bc = function () {};
        q.cb = function () {};
        q.Ab = function () {};
        q.Xa = function () {};
        q.Jc = function () {};
        L("shaka.media.MetaSegmentIndex", Pi);
        Pi.prototype.updateEvery = Pi.prototype.Jc;
        Pi.prototype.fit = Pi.prototype.Xa;
        Pi.prototype.mergeAndEvict = Pi.prototype.Ab;
        Pi.prototype.evict = Pi.prototype.cb;
        Pi.prototype.merge = Pi.prototype.Bc;
        Pi.prototype.offset = Pi.prototype.offset;
        Pi.prototype.get = Pi.prototype.get;
        Pi.prototype.find = Pi.prototype.find;
        Pi.prototype.release = Pi.prototype.release;

        function Qi(a) {
            var b = this;
            this.g = a;
            this.j = !1;
            this.i = this.g.zc();
            this.h = new P(function () {
                b.g.fe(.25 * b.i)
            })
        }
        Qi.prototype.release = function () {
            this.h && (this.h.stop(), this.h = null);
            this.g = null
        };
        Qi.prototype.set = function (a) {
            this.i = a;
            Ri(this)
        };
        Qi.prototype.wc = function () {
            return this.g.wc()
        };

        function Ri(a) {
            a.h.stop();
            var b = a.j ? 0 : a.i;
            if (0 <= b) try {
                a.g.zc() != b && a.g.Ld(b);
                return
            } catch (c) {}
            a.h.Ba(.25);
            0 != a.g.zc() && a.g.Ld(0)
        };

        function Si(a) {
            var b = this;
            this.h = a;
            this.g = new Set;
            this.i = (new P(function () {
                Ti(b, !1)
            })).Ba(.25)
        }
        Si.prototype.release = function () {
            this.i.stop();
            for (var a = t(this.g), b = a.next(); !b.done; b = a.next()) b.value.release();
            this.g.clear()
        };

        function Ti(a, b) {
            for (var c = t(a.g), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                for (var e = a.h.currentTime, f = b, g = t(d.l.g), h = g.next(); !h.done; h = g.next()) {
                    h = h.value;
                    var k = d.j.get(h),
                        l = e < h.startTime ? Ui : e > h.endTime ? Vi : Wi;
                    d.j.set(h, l);
                    for (var m = t(d.m), n = m.next(); !n.done; n = m.next()) n = n.value, n.qb == k && n.pb == l && n.hb(h, f)
                }
            }
        };

        function Xi(a) {
            var b = this;
            this.h = function () {};
            this.g = new Set;
            this.j = a;
            this.i = (new P(function () {
                for (var c = b.j(), d = t(b.g), e = d.next(); !e.done; e = d.next()) e = e.value, e.endTime < c.start && b.g["delete"](e)
            })).Ba(2)
        }
        Xi.prototype.release = function () {
            this.h = function () {};
            this.g.clear();
            this.i.stop()
        };

        function Yi(a, b) {
            a.h = b
        };

        function Zi(a) {
            var b = this;
            this.l = a;
            this.j = new Map;
            this.g = function () {};
            this.h = function () {};
            this.i = function () {};
            this.m = [{
                qb: null,
                pb: Wi,
                hb: function (c, d) {
                    return b.g(c, d)
                }
            }, {
                qb: Ui,
                pb: Wi,
                hb: function (c, d) {
                    return b.g(c, d)
                }
            }, {
                qb: Vi,
                pb: Wi,
                hb: function (c, d) {
                    return b.g(c, d)
                }
            }, {
                qb: Wi,
                pb: Ui,
                hb: function (c, d) {
                    return b.h(c, d)
                }
            }, {
                qb: Wi,
                pb: Vi,
                hb: function (c, d) {
                    return b.h(c, d)
                }
            }, {
                qb: Ui,
                pb: Vi,
                hb: function (c, d) {
                    return b.i(c, d)
                }
            }, {
                qb: Vi,
                pb: Ui,
                hb: function (c, d) {
                    return b.i(c, d)
                }
            }]
        }
        Zi.prototype.release = function () {
            this.l = null;
            this.j.clear();
            this.g = function () {};
            this.h = function () {};
            this.i = function () {}
        };

        function $i(a, b, c, d) {
            a.g = b;
            a.h = c;
            a.i = d
        }
        var Ui = 1,
            Wi = 2,
            Vi = 3;

        function aj(a, b, c, d, e) {
            a = gh(a, d, e);
            if (0 != b || null != c) a.headers.Range = c ? "bytes=" + b + "-" + c : "bytes=" + b + "-";
            return a
        };

        function bj(a, b) {
            var c = this;
            this.C = b;
            this.A = a;
            this.o = null;
            this.j = 1;
            this.i = this.h = null;
            this.g = new Map;
            this.m = !1;
            this.s = null;
            this.l = !1;
            this.J = new df(function () {
                return cj(c)
            })
        }
        bj.prototype.destroy = function () {
            return this.J.destroy()
        };

        function cj(a) {
            var b, c, d, e;
            return K(function (f) {
                if (1 == f.g) {
                    b = [];
                    c = t(a.g.values());
                    for (d = c.next(); !d.done; d = c.next()) e = d.value, dj(e), b.push(ej(e));
                    return v(f, Promise.all(b), 2)
                }
                a.g.clear();
                a.C = null;
                a.A = null;
                a.o = null;
                z(f)
            })
        }
        bj.prototype.configure = function (a) {
            this.o = a;
            this.s = new Og({
                maxAttempts: Math.max(a.retryParameters.maxAttempts, 2),
                baseDelay: a.retryParameters.baseDelay,
                backoffFactor: a.retryParameters.backoffFactor,
                fuzzFactor: a.retryParameters.fuzzFactor,
                timeout: 0,
                stallTimeout: 0,
                connectionTimeout: 0
            }, !0)
        };
        bj.prototype.start = function () {
            var a = this;
            return K(function (b) {
                if (1 == b.g) return v(b, fj(a), 2);
                ef(a.J);
                a.m = !0;
                z(b)
            })
        };

        function gj(a, b) {
            var c, d, e, f, g, h;
            K(function (k) {
                switch (k.g) {
                case 1:
                    return c = Ge, B(k, 2), v(k, Gf(a.C.P, c.fa), 4);
                case 4:
                    wa(k, 3);
                    break;
                case 2:
                    if (d = E(k), a.C) a.C.onError(d);
                case 3:
                    e = Qe(b.mimeType, b.codecs);
                    uf(a.C.P, e);
                    f = a.C.P.m;
                    if (g = f.isTextVisible() || a.o.alwaysStreamText) h = hj(b), a.g.set(c.fa, h), ij(a, h, 0);
                    z(k)
                }
            })
        }

        function jj(a) {
            var b = a.g.get(Fe);
            b && (dj(b), ej(b)["catch"](function () {}), a.g["delete"](Fe));
            a.i = null
        }

        function kj(a, b) {
            var c = a.g.get("video");
            if (c) {
                var d = c.stream;
                if (d)
                    if (b) {
                        var e = d.trickModeVideo;
                        e && !c.mb && (lj(a, e, !1, 0, !1), c.mb = d)
                    } else if (d = c.mb) c.mb = null, lj(a, d, !0, 0, !1)
            }
        }

        function mj(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? 0 : d;
            a.h = b;
            a.m && (b.video && lj(a, b.video, c, d, !1), b.audio && lj(a, b.audio, c, d, !1))
        }

        function nj(a, b) {
            a.i = b;
            a.m && lj(a, b, !0, 0, !1)
        }

        function lj(a, b, c, d, e) {
            var f = a.g.get(b.type);
            f || b.type != Fe ? f && (f.mb && (b.trickModeVideo ? (f.mb = b, b = b.trickModeVideo) : f.mb = null), f.stream != b || e) && (b.type == Fe && uf(a.C.P, Qe(b.mimeType, b.codecs)), f.stream = b, f.ba = null, c && (f.Nb ? f.Mc = !0 : f.Ra ? (f.ob = !0, f.sc = d, f.Mc = !0) : (dj(f), oj(a, f, !0, d)["catch"](function (g) {
                if (a.C) a.C.onError(g)
            }))), pj(a, f)["catch"](function (g) {
                if (a.C) a.C.onError(g)
            })) : gj(a, b)
        }

        function pj(a, b) {
            var c, d;
            return K(function (e) {
                if (1 == e.g) {
                    if (!b.va) return e["return"]();
                    c = b.stream;
                    d = b.va;
                    return c.segmentIndex ? e.v(2) : v(e, c.createSegmentIndex(), 2)
                }
                if (b.va != d || b.stream != c) return e["return"]();
                var f = a.C.yc();
                var g = zf(a.C.P, b.type),
                    h = b.stream.segmentIndex.find(b.Aa ? b.Aa.endTime : f),
                    k = null == h ? null : b.stream.segmentIndex.get(h);
                h = k ? k.da ? k.da - k.ja : null : null;
                k && !h && (h = (k.endTime - k.startTime) * (b.stream.bandwidth || 0) / 8);
                h ? ((k = k.h) && (h += (k.da ? k.da - k.ja : null) || 0), k = a.C.getBandwidthEstimate(),
                    f = 8 * h / k < (g || 0) - f - Math.max(a.A.minBufferTime || 0, a.o.rebufferingGoal) || b.va.h.g > h ? !0 : !1) : f = !1;
                f && b.va.abort();
                z(e)
            })
        }

        function qj(a, b) {
            b.Nb || b.ob || (b.Ra ? (b.ob = !0, b.sc = 0) : null == xf(a.C.P, b.type) ? null == b.La && ij(a, b, 0) : (dj(b), oj(a, b, !1, 0)["catch"](function (c) {
                if (a.C) a.C.onError(c)
            })))
        }

        function fj(a) {
            var b, c, d, e, f, g, h, k, l, m;
            return K(function (n) {
                if (1 == n.g) {
                    b = Ge;
                    if (!a.h) throw new O(2, 5, 5006);
                    c = new Map;
                    d = new Set;
                    a.h.audio && (c.set(b.ab, a.h.audio), d.add(a.h.audio));
                    a.h.video && (c.set(b.Na, a.h.video), d.add(a.h.video));
                    a.i && (c.set(b.fa, a.i), d.add(a.i));
                    e = a.C.P;
                    f = a.o.forceTransmuxTS;
                    return v(n, e.init(c, f), 2)
                }
                ef(a.J);
                var p = a.A.presentationTimeline.getDuration();
                Infinity > p ? a.C.P.Ja(p) : a.C.P.Ja(Math.pow(2, 32));
                g = t(c.keys());
                for (h = g.next(); !h.done; h = g.next()) k = h.value, l = c.get(k), a.g.has(k) ||
                    (m = hj(l), a.g.set(k, m), ij(a, m, 0));
                z(n)
            })
        }

        function hj(a) {
            return {
                stream: a,
                type: a.type,
                ba: null,
                Aa: null,
                Ac: null,
                qd: null,
                pd: null,
                od: null,
                mb: null,
                endOfStream: !1,
                Ra: !1,
                La: null,
                ob: !1,
                sc: 0,
                Mc: !1,
                Nb: !1,
                Cd: !1,
                Ub: !1,
                va: null
            }
        }
        bj.prototype.Wb = function (a) {
            var b = this,
                c, d, e, f, g;
            return K(function (h) {
                switch (h.g) {
                case 1:
                    ef(b.J);
                    if (a.Ra || null == a.La || a.Nb) return h["return"]();
                    a.La = null;
                    if (!a.ob) {
                        h.v(2);
                        break
                    }
                    return v(h, oj(b, a, a.Mc, a.sc), 3);
                case 3:
                    return h["return"]();
                case 2:
                    if (a.stream.segmentIndex) {
                        h.v(4);
                        break
                    }
                    c = a.stream;
                    return v(h, a.stream.createSegmentIndex(), 5);
                case 5:
                    if (c != a.stream) return null == a.La && ij(b, a, 0), h["return"]();
                case 4:
                    B(h, 6);
                    d = rj(b, a);
                    null != d && (ij(b, a, d), a.Ub = !1);
                    wa(h, 7);
                    break;
                case 6:
                    return e = E(h), v(h, sj(b, e),
                        8);
                case 8:
                    return h["return"]();
                case 7:
                    f = Array.from(b.g.values());
                    if (!b.m || !f.every(function (k) {
                            return k.endOfStream
                        })) {
                        h.v(0);
                        break
                    }
                    return v(h, b.C.P.endOfStream(), 10);
                case 10:
                    ef(b.J), g = b.C.P.getDuration(), 0 != g && g < b.A.presentationTimeline.getDuration() && b.A.presentationTimeline.Ja(g), z(h)
                }
            })
        };

        function rj(a, b) {
            if (tj(b)) return Ef(a.C.P, b.stream.originalId || ""), null;
            b.type == Fe && Ff(a.C.P);
            var c = a.C.yc(),
                d = b.Aa ? b.Aa.endTime : c,
                e = Af(a.C.P, b.type, c),
                f = Math.max(a.A.minBufferTime || 0, a.o.rebufferingGoal, a.o.bufferingGoal) * a.j;
            if (d >= a.A.presentationTimeline.getDuration()) return b.endOfStream = !0, "video" == b.type && (c = a.g.get(Fe)) && tj(c) && (c.endOfStream = !0), null;
            b.endOfStream = !1;
            if (e >= f) return .5;
            e = zf(a.C.P, b.type);
            e = uj(a, b, c, e);
            if (!e) return 1;
            f = Infinity;
            var g = Array.from(a.g.values());
            g = t(g);
            for (var h =
                    g.next(); !h.done; h = g.next()) h = h.value, tj(h) || h.ba && !h.ba.current() || (f = Math.min(f, h.Aa ? h.Aa.endTime : c));
            if (d >= f + a.A.presentationTimeline.g) return 1;
            vj(a, b, c, e)["catch"](function () {});
            return null
        }

        function uj(a, b, c, d) {
            if (b.ba) return b.ba.current();
            if (b.Aa || d) return b.ba = b.stream.segmentIndex.wb(b.Aa ? b.Aa.endTime : d), b.ba && b.ba.next().value;
            a = a.o.inaccurateManifestTolerance;
            d = Math.max(c - a, 0);
            var e = null;
            a && (b.ba = b.stream.segmentIndex.wb(d), e = b.ba && b.ba.next().value);
            e || (b.ba = b.stream.segmentIndex.wb(c), e = b.ba && b.ba.next().value);
            return e
        }

        function vj(a, b, c, d) {
            var e, f, g, h, k, l, m, n, p, r, u, w, x;
            return K(function (y) {
                switch (y.g) {
                case 1:
                    e = Ge;
                    f = b.stream;
                    g = b.ba;
                    b.Ra = !0;
                    h = wj(a, b, d);
                    B(y, 2);
                    k = "video/mp4" == f.mimeType || "audio/mp4" == f.mimeType;
                    l = window.ReadableStream;
                    if (a.o.lowLatencyMode && l && k) return p = new Uint8Array(0), r = function (D) {
                        var C, A, F;
                        return K(function (G) {
                            if (1 == G.g) return v(G, h, 2);
                            ef(a.J);
                            if (a.l) return G["return"]();
                            p = xj(p, D);
                            C = !1;
                            A = 0;
                            (new Qb).box("mdat", function (H) {
                                A = H.size + H.start;
                                C = !0
                            }).parse(p, !1, !0);
                            if (!C) return G.v(0);
                            F = p.subarray(0,
                                A);
                            p = p.subarray(A);
                            return v(G, yj(a, b, c, f, d, F), 0)
                        })
                    }, v(y, zj(a, b, d, r), 5);
                    m = zj(a, b, d);
                    return v(y, Promise.all([h, m]), 6);
                case 6:
                    return n = y.h, ef(a.J), a.l ? y["return"]() : b.ob ? (b.Ra = !1, ij(a, b, 0), y["return"]()) : v(y, yj(a, b, c, f, d, n[1]), 5);
                case 5:
                    ef(a.J);
                    if (a.l) return y["return"]();
                    b.Aa = d;
                    g.next();
                    b.Ra = !1;
                    b.Cd = !1;
                    u = a.C.P.vc();
                    w = u[b.type];
                    cb(JSON.stringify(w));
                    b.ob || a.C.yd();
                    ij(a, b, 0);
                    wa(y, 0);
                    break;
                case 2:
                    x = E(y);
                    ef(a.J, x);
                    if (a.l) return y["return"]();
                    b.Ra = !1;
                    if (b.type == e.fa && a.o.ignoreTextStreamFailures) a.g["delete"](e.fa),
                        y.v(0);
                    else if (7001 == x.code) b.Ra = !1, b.La = null, ij(a, b, 0), y.v(0);
                    else if (3017 == x.code) Aj(a, b, x), y.v(0);
                    else if (1001 == x.code && x.data && 404 == x.data[1]) b.Ra = !1, b.La = null, ij(a, b, 1), y.v(0);
                    else return b.Ub = !0, x.severity = 2, v(y, sj(a, x), 0)
                }
            })
        }

        function xj(a, b) {
            var c = new Uint8Array(a.length + b.length);
            c.set(a);
            c.set(b, a.length);
            return c
        }

        function Aj(a, b, c) {
            if (!Array.from(a.g.values()).some(function (e) {
                    return e != b && e.Cd
                })) {
                var d = Math.round(100 * a.j);
                if (20 < d) a.j -= .2;
                else if (4 < d) a.j -= .04;
                else {
                    b.Ub = !0;
                    a.l = !0;
                    a.C.onError(c);
                    return
                }
                b.Cd = !0
            }
            ij(a, b, 4)
        }

        function wj(a, b, c) {
            var d, e, f, g, h, k, l;
            return K(function (m) {
                d = [];
                e = Math.max(0, c.appendWindowStart - .1);
                f = c.appendWindowEnd + .01;
                g = c.timestampOffset;
                if (g != b.qd || e != b.pd || f != b.od) h = function () {
                    var n;
                    return K(function (p) {
                        if (1 == p.g) return B(p, 2), b.pd = e, b.od = f, b.qd = g, v(p, Hf(a.C.P, b.type, g, e, f), 4);
                        if (2 != p.g) return wa(p, 0);
                        n = E(p);
                        b.pd = null;
                        b.od = null;
                        b.qd = null;
                        throw n;
                    })
                }, d.push(h());
                !pi(c.h, b.Ac) && (b.Ac = c.h) && (k = zj(a, b, c.h), l = function () {
                    var n, p, r;
                    return K(function (u) {
                        switch (u.g) {
                        case 1:
                            return B(u, 2), v(u, k, 4);
                        case 4:
                            return n = u.h, ef(a.J), p = b.stream.closedCaptions && 0 < b.stream.closedCaptions.size, v(u, Bf(a.C.P, b.type, n, null, null, p), 5);
                        case 5:
                            wa(u, 0);
                            break;
                        case 2:
                            throw r = E(u), b.Ac = null, r;
                        }
                    })
                }, d.push(l()));
                return v(m, Promise.all(d), 0)
            })
        }

        function yj(a, b, c, d, e, f) {
            var g;
            return K(function (h) {
                if (1 == h.g) return g = d.closedCaptions && 0 < d.closedCaptions.size, null != d.emsgSchemeIdUris && 0 < d.emsgSchemeIdUris.length && (new Qb).U("emsg", function (k) {
                    var l = d.emsgSchemeIdUris;
                    if (0 === k.version) {
                        var m = k.reader.Yb();
                        var n = k.reader.Yb();
                        var p = k.reader.M();
                        var r = k.reader.M();
                        var u = k.reader.M();
                        var w = k.reader.M();
                        var x = e.startTime + r / p
                    } else p = k.reader.M(), x = k.reader.kb() / p + e.timestampOffset, r = x - e.startTime, u = k.reader.M(), w = k.reader.M(), m = k.reader.Yb(), n = k.reader.Yb();
                    k = k.reader.Za(k.reader.R.byteLength - k.reader.Z());
                    l.includes(m) && ("urn:mpeg:dash:event:2012" == m ? a.C.nf() : (l = new Q(Bj, {
                        detail: {
                            startTime: x,
                            endTime: x + u / p,
                            schemeIdUri: m,
                            value: n,
                            timescale: p,
                            presentationTimeDelta: r,
                            eventDuration: u,
                            id: w,
                            messageData: k
                        }
                    }), a.C.onEvent(l)))
                }).parse(f), v(h, Cj(a, b, c), 2);
                if (3 != h.g) return ef(a.J), v(h, Bf(a.C.P, b.type, f, e.startTime, e.endTime, g), 3);
                ef(a.J);
                z(h)
            })
        }

        function Cj(a, b, c) {
            var d, e, f, g;
            return K(function (h) {
                if (1 == h.g) {
                    d = Math.max(a.o.bufferBehind, a.A.presentationTimeline.g);
                    e = xf(a.C.P, b.type);
                    if (null == e) return h["return"]();
                    f = c - e;
                    g = f - d;
                    return .01 >= g ? h["return"]() : v(h, a.C.P.remove(b.type, e, e + g), 2)
                }
                ef(a.J);
                z(h)
            })
        }

        function tj(a) {
            return a && a.type == Fe && ("application/cea-608" == a.stream.mimeType || "application/cea-708" == a.stream.mimeType)
        }

        function zj(a, b, c, d) {
            var e, f, g, h;
            return K(function (k) {
                if (1 == k.g) return e = mh, f = aj(c.ma(), c.ja, c.da, a.o.retryParameters, d), g = a.C.Bb.request(e, f), b.va = g, v(k, g.promise, 2);
                h = k.h;
                b.va = null;
                return k["return"](h.data)
            })
        }

        function oj(a, b, c, d) {
            var e, f;
            return K(function (g) {
                if (1 == g.g) return b.ob = !1, b.Mc = !1, b.sc = 0, b.Nb = !0, b.Aa = null, b.Ac = null, b.ba = null, d ? (e = a.C.yc(), f = a.C.P.getDuration(), v(g, a.C.P.remove(b.type, e + d, f), 3)) : v(g, Gf(a.C.P, b.type), 4);
                if (3 != g.g) return ef(a.J), c ? v(g, a.C.P.flush(b.type), 3) : g.v(3);
                ef(a.J);
                b.Nb = !1;
                b.endOfStream = !1;
                ij(a, b, 0);
                z(g)
            })
        }

        function ij(a, b, c) {
            var d = b.type;
            if (d != Fe || a.g.has(d)) b.La = (new Zb(function () {
                var e;
                return K(function (f) {
                    if (1 == f.g) return B(f, 2), v(f, a.Wb(b), 4);
                    if (2 != f.g) return wa(f, 0);
                    e = E(f);
                    if (a.C) a.C.onError(e);
                    z(f)
                })
            })).T(c)
        }

        function dj(a) {
            null != a.La && (a.La.stop(), a.La = null)
        }

        function ej(a) {
            return K(function (b) {
                return a.va ? v(b, a.va.abort(), 0) : b.v(0)
            })
        }

        function sj(a, b) {
            return K(function (c) {
                if (1 == c.g) return v(c, Qg(a.s), 2);
                ef(a.J);
                a.C.onError(b);
                b.handled || a.o.failureCallback(b);
                z(c)
            })
        };

        function Dj(a, b) {
            var c = Ej(),
                d = this;
            this.j = b;
            this.i = a;
            this.l = c;
            this.s = null;
            this.m = [];
            this.h = this.g = null;
            this.u = Promise.resolve().then(function () {
                return Fj(d)
            });
            this.J = new df(function () {
                return Gj(d)
            })
        }
        Dj.prototype.destroy = function () {
            return this.J.destroy()
        };

        function Gj(a) {
            var b, c, d;
            return K(function (e) {
                if (1 == e.g) return a.h && a.h.abort(), Hj(a), v(e, a.u, 2);
                a.g && a.g.Ha.jb();
                b = t(a.m);
                for (c = b.next(); !c.done; c = b.next()) d = c.value, d.Ha.jb();
                a.g = null;
                a.m = [];
                a.j = null;
                z(e)
            })
        }

        function Ij(a, b) {
            var c = {
                Db: function () {},
                Cc: function () {},
                jb: function () {},
                onError: function () {},
                Ec: function () {},
                tg: function () {}
            };
            a.m.push({
                create: b,
                Ha: c
            });
            a.h && a.h.abort();
            Hj(a);
            return c
        }

        function Fj(a) {
            return K(function (b) {
                if (a.J.g) b = b.v(0);
                else {
                    if (0 == a.m.length || a.g && !a.g.gb) var c = !1;
                    else {
                        a.g && (a.g.Ha.jb(), a.g = null);
                        c = a.m.shift();
                        var d = c.create(a.l);
                        d ? (c.Ha.Db(), a.g = {
                            node: d.node,
                            payload: d.payload,
                            gb: d.gb,
                            Ha: c.Ha
                        }) : c.Ha.Ec();
                        c = !0
                    }
                    c ? c = Promise.resolve() : a.g ? c = Jj(a) : (a.j.mf(a.i), a.s = new He, c = a.s);
                    b = v(b, c, 1)
                }
                return b
            })
        }

        function Jj(a) {
            var b, c;
            return K(function (d) {
                switch (d.g) {
                case 1:
                    return a.i = a.j.Ve(a.i, a.l, a.g.node, a.g.payload), B(d, 2), a.h = a.j.Je(a.i, a.l, a.g.payload), v(d, a.h.promise, 4);
                case 4:
                    a.h = null;
                    a.i == a.g.node && (a.g.Ha.Cc(), a.g = null);
                    wa(d, 0);
                    break;
                case 2:
                    b = E(d);
                    if (7001 == b.code) a.g.Ha.jb();
                    else a.g.Ha.onError(b);
                    a.g = null;
                    a.h = null;
                    c = a;
                    return v(d, a.j.handleError(a.l, b), 5);
                case 5:
                    c.i = d.h, z(d)
                }
            })
        }

        function Hj(a) {
            a.s && (a.s.resolve(), a.s = null)
        };

        function Kj(a) {
            this.g = null;
            for (var b = t(Array.from(a.textTracks)), c = b.next(); !c.done; c = b.next()) c = c.value, c.mode = "disabled", "Shaka Player TextTrack" == c.label && (this.g = c);
            this.g || (this.g = a.addTextTrack("subtitles", "Shaka Player TextTrack"));
            this.g.mode = "hidden"
        }
        q = Kj.prototype;
        q.remove = function (a, b) {
            if (!this.g) return !1;
            Lj(this.g, function (c) {
                return c.startTime < b && c.endTime > a
            });
            return !0
        };
        q.append = function (a) {
            function b(g) {
                var h = [],
                    k = 700 <= g.fontWeight,
                    l = "italic" == g.fontStyle,
                    m = g.textDecoration.includes("underline");
                k && h.push("b");
                l && h.push("i");
                m && h.push("u");
                k = h.reduce(function (n, p) {
                    return n + "<" + p + ">"
                }, "");
                h = h.reduceRight(function (n, p) {
                    return n + "</" + p + ">"
                }, "");
                return g.lineBreak || g.spacer ? (g.spacer && Hb("shaka.extern.Cue", "Please use lineBreak instead of spacer."), "\n") : g.nestedCues.length ? g.nestedCues.map(b).join("") : k + g.payload + h
            }
            var c = a.map(function (g) {
                    if (g.nestedCues.length) {
                        var h =
                            g.clone();
                        h.nestedCues = [];
                        h.payload = b(g);
                        return h
                    }
                    return g
                }),
                d = [];
            a = this.g.cues ? Array.from(this.g.cues) : [];
            var e = {};
            c = t(c);
            for (var f = c.next(); !f.done; e = {
                    rb: e.rb
                }, f = c.next()) e.rb = f.value, a.some(function (g) {
                return function (h) {
                    return h.startTime == g.rb.startTime && h.endTime == g.rb.endTime && h.text == g.rb.payload ? !0 : !1
                }
            }(e)) || (f = Mj(e.rb)) && d.push(f);
            a = d.slice().sort(function (g, h) {
                return g.startTime != h.startTime ? g.startTime - h.startTime : g.endTime != h.endTime ? g.endTime - h.startTime : "line" in VTTCue.prototype ? d.indexOf(h) -
                    d.indexOf(g) : d.indexOf(g) - d.indexOf(h)
            });
            a = t(a);
            for (e = a.next(); !e.done; e = a.next()) this.g.addCue(e.value)
        };
        q.destroy = function () {
            this.g && (Lj(this.g, function () {
                return !0
            }), this.g.mode = "disabled");
            this.g = null;
            return Promise.resolve()
        };
        q.isTextVisible = function () {
            return "showing" == this.g.mode
        };
        q.setTextVisibility = function (a) {
            this.g.mode = a ? "showing" : "hidden"
        };

        function Mj(a) {
            if (a.startTime >= a.endTime) return null;
            var b = new VTTCue(a.startTime, a.endTime, a.payload);
            b.lineAlign = a.lineAlign;
            b.positionAlign = a.positionAlign;
            a.size && (b.size = a.size);
            try {
                b.align = a.textAlign
            } catch (c) {}
            "center" == a.textAlign && "center" != b.align && (b.align = "middle");
            "vertical-lr" == a.writingMode ? b.vertical = "lr" : "vertical-rl" == a.writingMode && (b.vertical = "rl");
            1 == a.lineInterpretation && (b.snapToLines = !1);
            null != a.line && (b.line = a.line);
            null != a.position && (b.position = a.position);
            return b
        }

        function Lj(a, b) {
            var c = a.mode;
            a.mode = "showing" == c ? "showing" : "hidden";
            for (var d = t(Array.from(a.cues)), e = d.next(); !e.done; e = d.next())(e = e.value) && b(e) && a.removeCue(e);
            a.mode = c
        }
        L("shaka.text.SimpleTextDisplayer", Kj);
        Kj.prototype.setTextVisibility = Kj.prototype.setTextVisibility;
        Kj.prototype.isTextVisible = Kj.prototype.isTextVisible;
        Kj.prototype.destroy = Kj.prototype.destroy;
        Kj.prototype.append = Kj.prototype.append;
        Kj.prototype.remove = Kj.prototype.remove;

        function Nj() {}

        function Oj(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        }
        L("shaka.util.Dom", Nj);
        Nj.removeAllChildren = Oj;

        function Pj(a, b) {
            var c = this;
            this.u = !1;
            this.j = [];
            this.g = a;
            this.m = b;
            this.i = document.createElement("div");
            this.i.classList.add("shaka-text-container");
            this.i.style.textAlign = "center";
            this.i.style.display = "flex";
            this.i.style.flexDirection = "column";
            this.i.style.alignItems = "center";
            this.i.style.justifyContent = "flex-end";
            this.m.appendChild(this.i);
            this.D = (new P(function () {
                Qj(c)
            })).Ba(.25);
            this.l = new Map;
            this.h = new hf;
            this.h.B(document, "fullscreenchange", function () {
                Qj(c, !0)
            });
            this.s = null;
            "ResizeObserver" in
            window && (this.s = new ResizeObserver(function () {
                Qj(c, !0)
            }), this.s.observe(this.i))
        }
        q = Pj.prototype;
        q.append = function (a) {
            var b = [].concat(ja(this.j)),
                c = {};
            a = t(a);
            for (var d = a.next(); !d.done; c = {
                    dc: c.dc
                }, d = a.next()) c.dc = d.value, b.some(function (e) {
                return function (f) {
                    return Lc(f, e.dc)
                }
            }(c)) || this.j.push(c.dc);
            Qj(this)
        };
        q.destroy = function () {
            this.m.removeChild(this.i);
            this.i = null;
            this.u = !1;
            this.j = [];
            this.D && this.D.stop();
            this.l.clear();
            this.h && (this.h.release(), this.h = null);
            this.s && (this.s.disconnect(), this.s = null)
        };
        q.remove = function (a, b) {
            if (!this.i) return !1;
            this.j = this.j.filter(function (c) {
                return c.startTime < a || c.endTime >= b
            });
            Qj(this);
            return !0
        };
        q.isTextVisible = function () {
            return this.u
        };
        q.setTextVisibility = function (a) {
            this.u = a
        };

        function Qj(a, b) {
            function c(h) {
                return a.j.includes(h) && a.u && h.startTime <= d && h.endTime > d
            }
            b = void 0 === b ? !1 : b;
            for (var d = a.g.currentTime, e = t(a.l.keys()), f = e.next(); !f.done; f = e.next())
                if (f = f.value, !c(f) || b) {
                    var g = a.l.get(f);
                    a.i.removeChild(g);
                    a.l["delete"](f)
                } e = new Set(a.l.values());
            f = t(Array.from(a.i.childNodes));
            for (g = f.next(); !g.done; g = f.next()) g = g.value, e.has(g) || a.i.removeChild(g);
            e = a.j.filter(function (h) {
                return c(h) && !a.l.has(h)
            }).sort(function (h, k) {
                return h.startTime != k.startTime ? h.startTime - k.startTime :
                    h.endTime - k.endTime
            });
            e = t(e);
            for (f = e.next(); !f.done; f = e.next()) f = f.value, g = Rj(a, a.i, f, !1), a.l.set(f, g)
        }

        function Rj(a, b, c, d) {
            var e = d ? "span" : "div";
            if (c.lineBreak || c.spacer) c.spacer && Hb("shaka.extern.Cue", "Please use lineBreak instead of spacer."), e = "br";
            var f = document.createElement(e);
            if ("br" != e)
                for (Sj(a, f, c, d), c = t(c.nestedCues), d = c.next(); !d.done; d = c.next()) Rj(a, f, d.value, !0);
            b.appendChild(f);
            return f
        }

        function Sj(a, b, c, d) {
            var e = b.style,
                f = 0 == c.nestedCues.length;
            e.whiteSpace = "pre-wrap";
            var g = c.payload.replace(/\s+$/g, function (h) {
                return " ".repeat(h.length)
            });
            d ? b.textContent = g : g.length && (e = document.createElement("span"), e.textContent = g, b.appendChild(e), e = e.style);
            e.backgroundColor = c.backgroundColor;
            e.border = c.border;
            e.color = c.color;
            e.direction = c.direction;
            e.opacity = c.opacity;
            e.paddingLeft = Tj(c.linePadding, c, a.m);
            e.paddingRight = Tj(c.linePadding, c, a.m);
            c.backgroundImage && (e.backgroundImage = "url('" +
                c.backgroundImage + "')", e.backgroundRepeat = "no-repeat", e.backgroundSize = "contain", e.backgroundPosition = "center", "" == c.backgroundColor && (e.backgroundColor = "transparent"));
            e.verticalAlign = "before" == c.displayAlign ? "top" : "center" == c.displayAlign ? "middle" : "bottom";
            f || (e.margin = "0");
            e.fontFamily = c.fontFamily;
            e.fontWeight = c.fontWeight.toString();
            e.fontStyle = c.fontStyle;
            e.letterSpacing = c.letterSpacing;
            e.fontSize = Tj(c.fontSize, c, a.m);
            c.line ? 1 == c.lineInterpretation && (e.position = "absolute", c.writingMode == Fc ?
                c.lineAlign == Hc ? e.top = c.line + "%" : "end" == c.lineAlign && (e.bottom = c.line + "%") : "vertical-lr" == c.writingMode ? c.lineAlign == Hc ? e.left = c.line + "%" : "end" == c.lineAlign && (e.right = c.line + "%") : c.lineAlign == Hc ? e.right = c.line + "%" : "end" == c.lineAlign && (e.left = c.line + "%")) : c.region && c.region.id && (!d && !f || c.backgroundImage) && (a = c.region.widthUnits == Sc ? "%" : "px", b = c.region.viewportAnchorUnits == Sc ? "%" : "px", e.height = c.region.height + (c.region.heightUnits == Sc ? "%" : "px"), e.width = c.region.width + a, e.position = "absolute", e.top =
                c.region.viewportAnchorY + b, e.left = c.region.viewportAnchorX + b);
            e.lineHeight = c.lineHeight;
            c.position && (c.writingMode == Fc ? e.paddingLeft = c.position : e.paddingTop = c.position);
            "line-left" == c.positionAlign ? e.cssFloat = "left" : "line-right" == c.positionAlign && (e.cssFloat = "right");
            e.textAlign = c.textAlign;
            e.textDecoration = c.textDecoration.join(" ");
            e.writingMode = c.writingMode;
            "writingMode" in document.documentElement.style && e.writingMode == c.writingMode || (e.webkitWritingMode = c.writingMode);
            c.size && (c.writingMode ==
                Fc ? e.width = c.size + "%" : e.height = c.size + "%")
        }

        function Tj(a, b, c) {
            var d = (d = (new RegExp(/(\d*\.?\d+)([a-z]+|%+)/)).exec(a)) ? {
                value: Number(d[1]),
                Jf: d[2]
            } : null;
            if (!d) return a;
            var e = d.value;
            switch (d.Jf) {
            case "%":
                return e / 100 * c.clientHeight / b.cellResolution.rows + "px";
            case "c":
                return c.clientHeight * e / b.cellResolution.rows + "px";
            default:
                return a
            }
        }
        L("shaka.text.UITextDisplayer", Pj);
        Pj.prototype.setTextVisibility = Pj.prototype.setTextVisibility;
        Pj.prototype.isTextVisible = Pj.prototype.isTextVisible;
        Pj.prototype.remove = Pj.prototype.remove;
        Pj.prototype.destroy = Pj.prototype.destroy;
        Pj.prototype.append = Pj.prototype.append;

        function Uj(a) {
            function b(f) {
                var g = [],
                    h = 700 <= f.fontWeight,
                    k = "italic" == f.fontStyle,
                    l = f.textDecoration.includes("underline");
                h && g.push("b");
                k && g.push("i");
                l && g.push("u");
                h = g.reduce(function (m, n) {
                    return m + "<" + n + ">"
                }, "");
                g = g.reduceRight(function (m, n) {
                    return m + "</" + n + ">"
                }, "");
                return f.lineBreak || f.spacer ? (f.spacer && Hb("shaka.text.Cue", "Please use lineBreak instead of spacer."), "\n") : f.nestedCues.length ? f.nestedCues.map(b).join("") : h + f.payload + g
            }
            var c = a.map(function (f) {
                if (f.nestedCues.length) {
                    var g = f.clone();
                    g.nestedCues = [];
                    g.payload = b(f);
                    return g
                }
                return f
            });
            a = "WEBVTT\n\n";
            c = t(c);
            for (var d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = function (f) {
                    var g = Math.floor(f / 3600),
                        h = Math.floor(f / 60 % 60),
                        k = Math.floor(f % 60);
                    f = Math.floor(1E3 * f % 1E3);
                    return (10 > g ? "0" : "") + g + ":" + (10 > h ? "0" : "") + h + ":" + (10 > k ? "0" : "") + k + "." + (100 > f ? 10 > f ? "00" : "0" : "") + f
                };
                a += e(d.startTime) + " --> " + e(d.endTime) + "\n";
                a += d.payload + "\n\n"
            }
            return a
        }
        L("shaka.text.WebVttGenerator", function () {});

        function Vj() {}

        function Wj(a, b, c, d, e) {
            var f = e in d,
                g = !0,
                h;
            for (h in b) {
                var k = e + "." + h,
                    l = f ? d[e] : c[h];
                f || h in c ? void 0 === b[h] ? void 0 === l || f ? delete a[h] : a[h] = Zg(l) : l.constructor == Object && b[h] && b[h].constructor == Object ? (a[h] || (a[h] = Zg(l)), k = Wj(a[h], b[h], l, d, k), g = g && k) : typeof b[h] != typeof l || null == b[h] || "function" != typeof b[h] && b[h].constructor != l.constructor ? (Ta("Invalid config, wrong type for " + k), g = !1) : ("function" == typeof c[h] && c[h].length != b[h].length && Ua("Unexpected number of arguments for " + k), a[h] = b[h]) : (Ta("Invalid config, unrecognized key " +
                    k), g = !1)
            }
            return g
        }

        function Xj(a, b) {
            for (var c = {}, d = c, e = 0, f = 0;;) {
                e = a.indexOf(".", e);
                if (0 > e) break;
                if (0 == e || "\\" != a[e - 1]) f = a.substring(f, e).replace(/\\\./g, "."), d[f] = {}, d = d[f], f = e + 1;
                e += 1
            }
            d[a.substring(f).replace(/\\\./g, ".")] = b;
            return c
        }
        L("shaka.util.ConfigUtils", Vj);
        Vj.convertToConfigObject = Xj;
        Vj.mergeConfigObjects = Wj;

        function Yj() {}

        function Zj() {
            var a = Infinity;
            navigator.connection && navigator.connection.saveData && (a = 360);
            var b = {
                    retryParameters: Pg(),
                    servers: {},
                    clearKeys: {},
                    advanced: {},
                    delayLicenseRequestUntilPlayed: !1,
                    initDataTransform: $h,
                    logLicenseExchange: !1,
                    updateExpirationTime: 1
                },
                c = {
                    retryParameters: Pg(),
                    availabilityWindowOverride: NaN,
                    disableAudio: !1,
                    disableVideo: !1,
                    disableText: !1,
                    disableThumbnails: !1,
                    defaultPresentationDelay: 0,
                    dash: {
                        clockSyncUri: "",
                        ignoreDrmInfo: !1,
                        disableXlinkProcessing: !1,
                        xlinkFailGracefully: !1,
                        ignoreMinBufferTime: !1,
                        autoCorrectDrift: !0,
                        initialSegmentLimit: 1E3,
                        ignoreSuggestedPresentationDelay: !1,
                        ignoreEmptyAdaptationSet: !1,
                        ignoreMaxSegmentDuration: !1,
                        keySystemsByURI: {
                            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
                            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
                            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
                            "urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95": "com.microsoft.playready",
                            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
                        }
                    },
                    hls: {
                        ignoreTextStreamFailures: !1,
                        useFullSegmentsForStartTime: !1
                    }
                },
                d = {
                    retryParameters: Pg(),
                    failureCallback: function (g) {
                        return [g]
                    },
                    rebufferingGoal: 2,
                    bufferingGoal: 10,
                    bufferBehind: 30,
                    ignoreTextStreamFailures: !1,
                    alwaysStreamText: !1,
                    startAtSegmentBoundary: !1,
                    gapDetectionThreshold: .1,
                    smallGapLimit: .5,
                    jumpLargeGaps: !1,
                    durationBackoff: 1,
                    forceTransmuxTS: !1,
                    safeSeekOffset: 5,
                    stallEnabled: !0,
                    stallThreshold: 1,
                    stallSkip: .1,
                    useNativeHlsOnSafari: !0,
                    inaccurateManifestTolerance: 2,
                    lowLatencyMode: !1,
                    autoLowLatencyMode: !1,
                    forceHTTPS: !1,
                    preferNativeHls: !1
                };
            if (navigator.userAgent.match(/Edge\//) || ec() || fc()) d.gapDetectionThreshold = .5;
            if (dc("Web0S") || ec() || fc()) d.stallSkip = 0;
            var e = {
                    trackSelectionCallback: function (g) {
                        return K(function (h) {
                            return h["return"](g)
                        })
                    },
                    downloadSizeCallback: function (g) {
                        var h;
                        return K(function (k) {
                            if (1 == k.g) return navigator.storage && navigator.storage.estimate ? v(k, navigator.storage.estimate(), 3) : k["return"](!0);
                            h = k.h;
                            return k["return"](h.usage + g < .95 * h.quota)
                        })
                    },
                    progressCallback: function (g, h) {
                        return [g,
                            h
                        ]
                    },
                    usePersistentLicense: !0
                },
                f = {
                    drm: b,
                    manifest: c,
                    streaming: d,
                    offline: e,
                    abrFactory: function () {
                        return new yg
                    },
                    abr: {
                        enabled: !0,
                        useNetworkInformation: !0,
                        defaultBandwidthEstimate: 1E6,
                        switchInterval: 8,
                        bandwidthUpgradeTarget: .85,
                        bandwidthDowngradeTarget: .95,
                        restrictions: {
                            minWidth: 0,
                            maxWidth: Infinity,
                            minHeight: 0,
                            maxHeight: a,
                            minPixels: 0,
                            maxPixels: Infinity,
                            minFrameRate: 0,
                            maxFrameRate: Infinity,
                            minBandwidth: 0,
                            maxBandwidth: Infinity
                        }
                    },
                    preferredAudioLanguage: "",
                    preferredTextLanguage: "",
                    preferredVariantRole: "",
                    preferredTextRole: "",
                    preferredAudioChannelCount: 2,
                    preferForcedSubs: !1,
                    restrictions: {
                        minWidth: 0,
                        maxWidth: Infinity,
                        minHeight: 0,
                        maxHeight: Infinity,
                        minPixels: 0,
                        maxPixels: Infinity,
                        minFrameRate: 0,
                        maxFrameRate: Infinity,
                        minBandwidth: 0,
                        maxBandwidth: Infinity
                    },
                    playRangeStart: 0,
                    playRangeEnd: Infinity,
                    useMediaCapabilities: !1,
                    textDisplayFactory: function () {
                        return null
                    }
                };
            e.trackSelectionCallback = function (g) {
                return K(function (h) {
                    return h["return"](ak(g, f.preferredAudioLanguage))
                })
            };
            return f
        }

        function bk(a, b, c) {
            var d = {
                ".drm.servers": "",
                ".drm.clearKeys": "",
                ".drm.advanced": {
                    distinctiveIdentifierRequired: !1,
                    persistentStateRequired: !1,
                    videoRobustness: "",
                    audioRobustness: "",
                    sessionType: "",
                    serverCertificate: new Uint8Array(0),
                    individualizationServer: ""
                }
            };
            return Wj(a, b, c || Zj(), d, "")
        }

        function ak(a, b) {
            var c = a.filter(function (h) {
                    return "variant" == h.type
                }),
                d = [],
                e = Sf(b, c.map(function (h) {
                    return h.language
                }));
            e && (d = c.filter(function (h) {
                return Mf(h.language) == e
            }));
            0 == d.length && (d = c.filter(function (h) {
                return h.primary
            }));
            0 == d.length && (c.map(function (h) {
                return h.language
            }), d = c);
            var f = d.filter(function (h) {
                return h.height && 480 >= h.height
            });
            f.length && (f.sort(function (h, k) {
                return k.height - h.height
            }), d = f.filter(function (h) {
                return h.height == f[0].height
            }));
            c = [];
            if (d.length) {
                var g = Math.floor(d.length /
                    2);
                d.sort(function (h, k) {
                    return h.bandwidth - k.bandwidth
                });
                c.push(d[g])
            }
            d = t(a);
            for (g = d.next(); !g.done; g = d.next()) g = g.value, g.type != Fe && "image" != g.type || c.push(g);
            return c
        }
        L("shaka.util.PlayerConfiguration", Yj);
        Yj.mergeConfigObjects = bk;

        function ck() {
            this.g = null;
            this.h = []
        }

        function dk(a, b) {
            if (null == a.g) a.g = {
                timestamp: Date.now() / 1E3,
                state: b,
                duration: 0
            };
            else {
                var c = Date.now() / 1E3;
                a.g.duration = c - a.g.timestamp;
                a.g.state != b && (a.h.push(a.g), a.g = {
                    timestamp: c,
                    state: b,
                    duration: 0
                })
            }
        }

        function ek(a, b) {
            var c = 0;
            a.g && a.g.state == b && (c += a.g.duration);
            for (var d = t(a.h), e = d.next(); !e.done; e = d.next()) e = e.value, c += e.state == b ? e.duration : 0;
            return c
        }

        function fk(a) {
            function b(f) {
                return {
                    timestamp: f.timestamp,
                    state: f.state,
                    duration: f.duration
                }
            }
            for (var c = [], d = t(a.h), e = d.next(); !e.done; e = d.next()) c.push(b(e.value));
            a.g && c.push(b(a.g));
            return c
        };

        function gk() {
            this.i = this.h = null;
            this.g = []
        }

        function hk(a, b, c) {
            a.h != b && (a.h = b, a.g.push({
                timestamp: Date.now() / 1E3,
                id: b.id,
                type: "variant",
                fromAdaptation: c,
                bandwidth: b.bandwidth
            }))
        }

        function ik(a, b, c) {
            a.i != b && (a.i = b, a.g.push({
                timestamp: Date.now() / 1E3,
                id: b.id,
                type: "text",
                fromAdaptation: c,
                bandwidth: null
            }))
        };

        function jk() {
            this.s = this.u = this.I = this.F = this.m = this.j = this.H = this.l = this.i = this.L = this.N = this.S = this.D = this.X = NaN;
            this.h = new ck;
            this.g = new gk
        };

        function V(a, b) {
            Yg.call(this);
            var c = this;
            this.l = kk;
            this.kc = this.g = null;
            this.X = !1;
            this.h = new hf;
            this.Zc = this.u = this.Va = this.A = this.pc = this.s = this.i = this.cc = this.H = this.lc = this.F = this.Fa = this.D = this.I = this.m = this.O = null;
            this.gd = 1E9;
            this.o = lk(this);
            this.fd = {
                width: Infinity,
                height: Infinity
            };
            this.j = null;
            this.oa = new Gg(this.o.preferredAudioLanguage, this.o.preferredVariantRole, this.o.preferredAudioChannelCount);
            this.pa = this.o.preferredTextLanguage;
            this.Wa = this.o.preferredTextRole;
            this.mc = this.o.preferForcedSubs;
            this.$c = [];
            b && b(this);
            this.O = mk(this);
            this.O.Jd(this.o.streaming.forceHTTPS);
            this.L = null;
            nk && (this.L = Ob(nk));
            this.h.B(window, "online", function () {
                c.Dd()
            });
            this.ra = {
                name: "detach"
            };
            this.Oa = {
                name: "attach"
            };
            this.S = {
                name: "unload"
            };
            this.kd = {
                name: "manifest-parser"
            };
            this.ed = {
                name: "manifest"
            };
            this.Ea = {
                name: "media-source"
            };
            this.cd = {
                name: "drm-engine"
            };
            this.N = {
                name: "load"
            };
            this.ld = {
                name: "src-equals-drm-engine"
            };
            this.Ma = {
                name: "src-equals"
            };
            var d = new Map;
            d.set(this.Oa, function (e, f) {
                return Vg(ok(c, e, f))
            });
            d.set(this.ra,
                function (e) {
                    e.G && (c.h.Ca(e.G, "error"), e.G = null);
                    c.g = null;
                    e = Promise.resolve();
                    return Vg(e)
                });
            d.set(this.S, function (e) {
                return Vg(pk(c, e))
            });
            d.set(this.Ea, function (e) {
                e = qk(c, e);
                return Vg(e)
            });
            d.set(this.kd, function (e, f) {
                var g = rk(c, e, f);
                return Vg(g)
            });
            d.set(this.ed, function (e) {
                return sk(c, e)
            });
            d.set(this.cd, function (e) {
                e = tk(c, e);
                return Vg(e)
            });
            d.set(this.N, function (e, f) {
                return Vg(uk(c, e, f))
            });
            d.set(this.ld, function (e, f) {
                var g = vk(c, e, f);
                return Vg(g)
            });
            d.set(this.Ma, function (e, f) {
                return wk(c, e, f)
            });
            this.ca =
                new Dj(this.ra, {
                    Ve: function (e, f, g, h) {
                        var k = null;
                        e == c.ra && (k = g == c.ra ? c.ra : c.Oa);
                        e == c.Oa && (k = g == c.ra || f.G != h.G ? c.ra : g == c.Oa ? c.Oa : g == c.Ea || g == c.N ? c.Ea : g == c.Ma ? c.ld : null);
                        e == c.Ea && (k = g == c.N && f.G == h.G ? c.kd : c.S);
                        e == c.kd && (k = xk(c.N, c.ed, c.S, g, f, h));
                        e == c.ed && (k = xk(c.N, c.cd, c.S, g, f, h));
                        e == c.cd && (k = xk(c.N, c.N, c.S, g, f, h));
                        e == c.ld && (k = g == c.Ma && f.G == h.G ? c.Ma : c.S);
                        if (e == c.N || e == c.Ma) k = c.S;
                        e == c.S && (k = h.G && f.G == h.G ? c.Oa : c.ra);
                        return k
                    },
                    Je: function (e, f, g) {
                        c.dispatchEvent(yk(zk, {
                            state: e.name
                        }));
                        return d.get(e)(f, g)
                    },
                    handleError: function (e) {
                        return K(function (f) {
                            return 1 == f.g ? v(f, pk(c, e), 2) : f["return"](e.G ? c.Oa : c.ra)
                        })
                    },
                    mf: function (e) {
                        c.dispatchEvent(yk(Ak, {
                            state: e.name
                        }))
                    }
                });
            a && this.Mb(a, !0)
        }
        ra(V, Yg);

        function yk(a, b) {
            return new Q(a, b)
        }
        q = V.prototype;
        q.destroy = function () {
            var a = this,
                b;
            return K(function (c) {
                switch (c.g) {
                case 1:
                    if (a.l == Bk) return c["return"]();
                    a.l = Bk;
                    b = Ij(a.ca, function () {
                        return {
                            node: a.ra,
                            payload: Ej(),
                            gb: !1
                        }
                    });
                    return v(c, new Promise(function (d) {
                        b.Db = function () {};
                        b.Cc = function () {
                            d()
                        };
                        b.jb = function () {
                            d()
                        };
                        b.onError = function () {
                            d()
                        };
                        b.Ec = function () {
                            d()
                        }
                    }), 2);
                case 2:
                    return v(c, a.ca.destroy(), 3);
                case 3:
                    a.h && (a.h.release(), a.h = null);
                    a.Zc = null;
                    a.u = null;
                    a.o = null;
                    a.j = null;
                    a.kc = null;
                    if (!a.O) {
                        c.v(0);
                        break
                    }
                    return v(c, a.O.destroy(), 5);
                case 5:
                    a.O =
                        null, z(c)
                }
            })
        };
        q.Mb = function (a, b) {
            b = void 0 === b ? !0 : b;
            if (this.l == Bk) return Promise.reject(Ck());
            var c = Ej();
            c.G = a;
            $b() || (b = !1);
            var d = b ? this.Ea : this.Oa,
                e = Ij(this.ca, function () {
                    return {
                        node: d,
                        payload: c,
                        gb: !1
                    }
                });
            e.Db = function () {};
            return Dk(e)
        };
        q.detach = function () {
            var a = this;
            if (this.l == Bk) return Promise.reject(Ck());
            var b = Ij(this.ca, function () {
                return {
                    node: a.ra,
                    payload: Ej(),
                    gb: !1
                }
            });
            b.Db = function () {};
            return Dk(b)
        };
        q.Pd = function (a) {
            var b = this;
            a = void 0 === a ? !0 : a;
            if (this.l == Bk) return Promise.reject(Ck());
            $b() || (a = !1);
            var c = Ej(),
                d = Ij(this.ca, function (e) {
                    var f = e.G && a ? b.Ea : e.G ? b.Oa : b.ra;
                    c.G = e.G;
                    return {
                        node: f,
                        payload: c,
                        gb: !1
                    }
                });
            d.Db = function () {};
            return Dk(d)
        };
        q.load = function (a, b, c) {
            var d = this;
            if (this.l == Bk) return Promise.reject(Ck());
            this.dispatchEvent(yk(Ek));
            var e = Ej();
            e.uri = a;
            e.Nd = Date.now() / 1E3;
            c && (e.mimeType = c);
            void 0 !== b && (e.startTime = b);
            var f = Fk(this, e) ? this.Ma : this.N,
                g = Ij(this.ca, function (h) {
                    if (null == h.G) return null;
                    e.G = h.G;
                    return {
                        node: f,
                        payload: e,
                        gb: !0
                    }
                });
            this.j = new jk;
            g.Db = function () {};
            return new Promise(function (h, k) {
                g.Ec = function () {
                    return k(new O(2, 7, 7002))
                };
                g.Cc = function () {
                    h();
                    d.dispatchEvent(yk(Gk))
                };
                g.jb = function () {
                    return k(Ck())
                };
                g.onError =
                    function (l) {
                        return k(l)
                    }
            })
        };

        function Fk(a, b) {
            if (!$b()) return !0;
            var c = b.mimeType,
                d = b.uri || "";
            c || (c = {
                mp4: "video/mp4",
                m4v: "video/mp4",
                m4a: "audio/mp4",
                webm: "video/webm",
                weba: "audio/webm",
                mkv: "video/webm",
                ts: "video/mp2t",
                ogv: "video/ogg",
                ogg: "audio/ogg",
                mpg: "video/mpeg",
                mpeg: "video/mpeg",
                m3u8: "application/x-mpegurl",
                mp3: "audio/mpeg",
                aac: "audio/aac",
                flac: "audio/flac",
                wav: "audio/wav"
            } [li(d)]);
            if (c) {
                if ("" == (b.G || bc()).canPlayType(c)) return !1;
                if (!$b() || !(c in ki || li(d) in mi) || a.o.streaming.preferNativeHls) return !0;
                if (gc()) return a.o.streaming.useNativeHlsOnSafari
            }
            return !1
        }

        function ok(a, b, c) {
            null == b.G && (b.G = c.G, a.h.B(b.G, "error", function () {
                var d = Hk(a);
                d && Ik(a, d)
            }));
            a.g = b.G;
            return Promise.resolve()
        }

        function pk(a, b) {
            var c, d, e, f, g, h, k, l, m;
            return K(function (n) {
                switch (n.g) {
                case 1:
                    return a.l != Bk && (a.l = kk), c = a.$c.map(function (p) {
                        return p()
                    }), a.$c = [], v(n, Promise.all(c), 2);
                case 2:
                    a.dispatchEvent(yk(Jk));
                    b.mimeType = null;
                    b.startTime = null;
                    b.uri = null;
                    b.G && (a.h.Ca(b.G, "loadedmetadata"), a.h.Ca(b.G, "playing"), a.h.Ca(b.G, "pause"), a.h.Ca(b.G, "ended"), a.h.Ca(b.G, "ratechange"));
                    a.Fa && (a.Fa.release(), a.Fa = null);
                    a.lc && (a.lc.stop(), a.lc = null);
                    if (!a.s) {
                        n.v(3);
                        break
                    }
                    return v(n, a.s.stop(), 4);
                case 4:
                    a.s = null, a.pc = null;
                case 3:
                    if (!a.u) {
                        n.v(5);
                        break
                    }
                    return v(n, a.u.stop(), 5);
                case 5:
                    if (!a.i) {
                        n.v(7);
                        break
                    }
                    return v(n, a.i.destroy(), 8);
                case 8:
                    a.i = null;
                case 7:
                    a.F && (a.F.release(), a.F = null);
                    a.D && (a.D.release(), a.D = null);
                    if (!a.I) {
                        n.v(9);
                        break
                    }
                    return v(n, a.I.destroy(), 10);
                case 10:
                    a.I = null;
                case 9:
                    if (a.L) a.L.onAssetUnload();
                    if (!b.G || !b.G.src) {
                        n.v(11);
                        break
                    }
                    return v(n, new Promise(function (p) {
                        return (new P(p)).T(.1)
                    }), 12);
                case 12:
                    for (b.G.removeAttribute("src"), b.G.load(); b.G.lastChild;) b.G.removeChild(b.G.firstChild);
                case 11:
                    if (!a.m) {
                        n.v(13);
                        break
                    }
                    return v(n, a.m.destroy(), 14);
                case 14:
                    a.m = null;
                case 13:
                    a.Va = null;
                    a.H = null;
                    if (a.A) {
                        d = t(a.A.variants);
                        for (e = d.next(); !e.done; e = d.next())
                            for (f = e.value, g = t([f.audio, f.video]), h = g.next(); !h.done; h = g.next())(k = h.value) && k.segmentIndex && k.segmentIndex.release();
                        l = t(a.A.textStreams);
                        for (h = l.next(); !h.done; h = l.next()) m = h.value, m.segmentIndex && m.segmentIndex.release()
                    }
                    a.A = null;
                    a.j = new jk;
                    a.dd = null;
                    Kk(a);
                    z(n)
                }
            })
        }

        function qk(a, b) {
            var c, d, e, f;
            return K(function (g) {
                if (1 == g.g) return c = new fe, d = a.o.textDisplayFactory, e = Ob(d), a.dd = d, f = Lk(b.G, c, e, function (h, k, l) {
                    h = t(h);
                    for (var m = h.next(); !m.done; m = h.next())
                        if (m = m.value, m.data && m.cueTime && m.frames) {
                            for (var n = m.cueTime + k, p = l, r = t(m.frames), u = r.next(); !u.done; u = r.next()) Mk(a, n, p, "ID3", u.value);
                            if (a.L) a.L.onHlsTimedMetadata(m, n)
                        }
                }), v(g, f.F, 2);
                a.I = f;
                z(g)
            })
        }

        function rk(a, b, c) {
            var d, e, f, g;
            return K(function (h) {
                if (1 == h.g) return b.mimeType = c.mimeType, b.uri = c.uri, d = b.uri, e = a.O, a.Va = d, f = a, v(h, ji(d, e, a.o.manifest.retryParameters, b.mimeType), 2);
                f.pc = h.h;
                a.s = Ob(a.pc);
                g = Zg(a.o.manifest);
                c.G && "AUDIO" === c.G.nodeName && (g.disableVideo = !0);
                a.s.configure(g);
                z(h)
            })
        }

        function sk(a, b) {
            var c = b.uri,
                d = a.O;
            a.cc = new Xi(function () {
                return a.Fd()
            });
            Yi(a.cc, function (g) {
                Nk(a, Ok, g);
                if (a.L) a.L.onDashTimedMetadata(g)
            });
            var e = {
                    networkingEngine: d,
                    filter: function (g) {
                        return K(function (h) {
                            return h["return"](a.uc(g))
                        })
                    },
                    makeTextStreamsForClosedCaptions: function (g) {
                        return Pk(a, g)
                    },
                    onTimelineRegionAdded: function (g) {
                        var h = a.cc;
                        a: {
                            var k = t(h.g);
                            for (var l = k.next(); !l.done; l = k.next())
                                if (l = l.value, l.schemeIdUri == g.schemeIdUri && l.id == g.id && l.startTime == g.startTime && l.endTime == g.endTime) {
                                    k =
                                        l;
                                    break a
                                } k = null
                        }
                        null == k && (h.g.add(g), h.h(g))
                    },
                    onEvent: function (g) {
                        return a.dispatchEvent(g)
                    },
                    onError: function (g) {
                        return Ik(a, g)
                    },
                    isLowLatencyMode: function () {
                        return a.o.streaming.lowLatencyMode
                    },
                    isAutoLowLatencyMode: function () {
                        return a.o.streaming.autoLowLatencyMode
                    },
                    enableLowLatencyMode: function () {
                        a.configure("streaming.lowLatencyMode", !0)
                    }
                },
                f = Date.now() / 1E3;
            return new Rg(function () {
                var g, h, k, l;
                return K(function (m) {
                    if (1 == m.g) return g = a, v(m, a.s.start(c, e), 2);
                    g.A = m.h;
                    h = yk(Qk);
                    a.dispatchEvent(h);
                    if (0 ==
                        a.A.variants.length) throw new O(2, 4, 4036);
                    Rk(a.A);
                    k = Date.now() / 1E3;
                    l = k - f;
                    a.j.H = l;
                    z(m)
                })
            }(), function () {
                return a.s.stop()
            })
        }

        function tk(a, b) {
            var c, d;
            return K(function (e) {
                return 1 == e.g ? (c = Date.now() / 1E3, d = !0, a.m = Sk(a, {
                    Bb: a.O,
                    onError: function (f) {
                        Ik(a, f)
                    },
                    Dc: function (f) {
                        Tk(a, f)
                    },
                    onExpirationUpdated: function (f, g) {
                        Uk(a, f, g)
                    },
                    onEvent: function (f) {
                        a.dispatchEvent(f);
                        f.type == Vk && d && (d = !1, a.j.j = Date.now() / 1E3 - c)
                    }
                }), a.o.useMediaCapabilities || cg(a.A), a.m.configure(a.o.drm), v(e, Ah(a.m, a.A.variants, a.A.offlineSessionIds, a.o.useMediaCapabilities), 2)) : 3 != e.g ? v(e, a.m.Mb(b.G), 3) : v(e, a.uc(a.A), 0)
            })
        }

        function uk(a, b, c) {
            var d, e, f, g, h, k, l, m, n, p;
            return K(function (r) {
                switch (r.g) {
                case 1:
                    b.startTime = c.startTime;
                    d = b.G;
                    e = b.uri;
                    a.Va = e;
                    a.F = new Qi({
                        zc: function () {
                            return b.G.playbackRate
                        },
                        wc: function () {
                            return b.G.defaultPlaybackRate
                        },
                        Ld: function (u) {
                            b.G.playbackRate = u
                        },
                        fe: function (u) {
                            b.G.currentTime += u
                        }
                    });
                    f = function () {
                        return Wk(a)
                    };
                    g = function () {
                        return Xk(a)
                    };
                    a.h.B(d, "playing", f);
                    a.h.B(d, "pause", f);
                    a.h.B(d, "ended", f);
                    a.h.B(d, "ratechange", g);
                    h = a.o.abrFactory;
                    a.u && a.Zc == h || (a.Zc = h, a.u = Ob(h), "function" != typeof a.u.playbackRateChanged &&
                        (Hb("AbrManager", "Please use an AbrManager with playbackRateChanged function."), a.u.playbackRateChanged = function () {}), a.u.configure(a.o.abr));
                    a.oa = new Gg(a.o.preferredAudioLanguage, a.o.preferredVariantRole, a.o.preferredAudioChannelCount);
                    a.pa = a.o.preferredTextLanguage;
                    a.Wa = a.o.preferredTextRole;
                    Yk(a.A.presentationTimeline, a.o.playRangeStart, a.o.playRangeEnd);
                    a.u.init(function (u, w, x) {
                        w = void 0 === w ? !1 : w;
                        x = void 0 === x ? 0 : x;
                        a.i && u != a.i.h && (hk(a.j.g, u, !0), mj(a.i, u, w, x), Zk(a))
                    });
                    a.D = $k(a, b.startTime);
                    a.Fa =
                        al(a);
                    k = Math.max(a.A.minBufferTime, a.o.streaming.rebufferingGoal);
                    bl(a, k);
                    Tf(a.A, a.o.preferredAudioChannelCount);
                    a.i = cl(a);
                    a.i.configure(a.o.streaming);
                    a.l = dl;
                    a.dispatchEvent(yk(el));
                    l = fl(a) ? a.u.chooseVariant() : null;
                    hk(a.j.g, l, !0);
                    mj(a.i, l, !1, 0);
                    (m = vg(a.A.textStreams, a.pa, a.Wa, a.mc)[0] || null) && ik(a.j.g, m, !0);
                    m ? (l.audio && gl(a, l.audio, m) && (a.X = !0), a.X && a.I.m.setTextVisibility(!0), hl(a)) : a.X = !1;
                    m && (a.o.streaming.alwaysStreamText || a.nd()) && nj(a.i, m);
                    if (!a.o.streaming.startAtSegmentBoundary) {
                        r.v(2);
                        break
                    }
                    n =
                        a.D.l();
                    return v(r, il(l, n), 3);
                case 3:
                    p = r.h, a.D.m(p);
                case 2:
                    return v(r, a.i.start(), 4);
                case 4:
                    a.o.abr.enabled && (a.u.enable(), jl(a)), eg(a.i ? a.i.h : null, a.A), kl(a.A), ll(a), Zk(a), fl(a), a.A.variants.some(function (u) {
                        return u.primary
                    }), a.h.ua(d, "loadedmetadata", function () {
                        a.j.l = Date.now() / 1E3 - c.Nd
                    }), z(r)
                }
            })
        }

        function vk(a, b, c) {
            var d, e, f, g;
            return K(function (h) {
                return 1 == h.g ? (d = Ge, e = Date.now() / 1E3, f = !0, a.m = Sk(a, {
                    Bb: a.O,
                    onError: function (k) {
                        Ik(a, k)
                    },
                    Dc: function (k) {
                        Tk(a, k)
                    },
                    onExpirationUpdated: function (k, l) {
                        Uk(a, k, l)
                    },
                    onEvent: function (k) {
                        a.dispatchEvent(k);
                        k.type == Vk && f && (f = !1, a.j.j = Date.now() / 1E3 - e)
                    }
                }), a.m.configure(a.o.drm), g = {
                    id: 0,
                    language: "und",
                    primary: !1,
                    audio: null,
                    video: {
                        id: 0,
                        originalId: null,
                        createSegmentIndex: function () {
                            return Promise.resolve()
                        },
                        segmentIndex: null,
                        mimeType: c.mimeType ? c.mimeType.split(";")[0] : "video/mp4",
                        codecs: c.mimeType ? Ve(c.mimeType) : "",
                        encrypted: !0,
                        drmInfos: [],
                        keyIds: new Set,
                        language: "und",
                        label: null,
                        type: d.Na,
                        primary: !1,
                        trickModeVideo: null,
                        emsgSchemeIdUris: null,
                        roles: [],
                        forced: !1,
                        channelsCount: null,
                        audioSamplingRate: null,
                        spatialAudio: !1,
                        closedCaptions: null
                    },
                    bandwidth: 100,
                    allowedByApplication: !0,
                    allowedByKeySystem: !0,
                    decodingInfos: []
                }, v(h, Ah(a.m, [g], []), 2)) : v(h, a.m.Mb(b.G), 0)
            })
        }

        function wk(a, b, c) {
            function d() {
                return Wk(a)
            }
            b.uri = c.uri;
            b.startTime = c.startTime;
            a.Va = b.uri;
            a.D = new Gi(b.G);
            null != b.startTime && a.D.m(b.startTime);
            a.F = new Qi({
                zc: function () {
                    return b.G.playbackRate
                },
                wc: function () {
                    return b.G.defaultPlaybackRate
                },
                Ld: function (g) {
                    b.G.playbackRate = g
                },
                fe: function (g) {
                    b.G.currentTime += g
                }
            });
            bl(a, a.o.streaming.rebufferingGoal);
            a.h.B(b.G, "playing", d);
            a.h.B(b.G, "pause", d);
            a.h.B(b.G, "ended", d);
            a.h.B(b.G, "ratechange", function () {
                return Xk(a)
            });
            "none" != a.g.preload && a.h.ua(a.g, "loadedmetadata",
                function () {
                    a.j.l = Date.now() / 1E3 - c.Nd
                });
            a.g.audioTracks && (a.h.B(a.g.audioTracks, "addtrack", function () {
                return ll(a)
            }), a.h.B(a.g.audioTracks, "removetrack", function () {
                return ll(a)
            }), a.h.B(a.g.audioTracks, "change", function () {
                return ll(a)
            }));
            a.g.textTracks && (a.h.B(a.g.textTracks, "addtrack", function (g) {
                ll(a);
                ml(a, g)
            }), a.h.B(a.g.textTracks, "removetrack", function () {
                return ll(a)
            }), a.h.B(a.g.textTracks, "change", function () {
                return ll(a)
            }));
            b.G.src = b.uri;
            (ec() || dc("Web0S")) && b.G.load();
            a.l = nl;
            a.dispatchEvent(yk(el));
            var e = new He;
            xi(a.g, HTMLMediaElement.HAVE_METADATA, a.h, function () {
                e.resolve()
            });
            var f = !1;
            a.$c.push(function () {
                f = !0
            });
            xi(a.g, HTMLMediaElement.HAVE_CURRENT_DATA, a.h, function () {
                var g;
                return K(function (h) {
                    if (1 == h.g) {
                        if (f) return h["return"]();
                        ol(a);
                        g = pl(a);
                        return g.find(function (k) {
                            return "disabled" != k.mode
                        }) ? h.v(2) : v(h, new Promise(function (k) {
                            a.h.ua(a.g.textTracks, "change", k);
                            (new P(k)).T(1)
                        }), 2)
                    }
                    if (f) return h["return"]();
                    ql(a);
                    z(h)
                })
            });
            a.g.error ? e.reject(Hk(a)) : "none" == a.g.preload && (Ua('With <video preload="none">, the browser will not load anything until play() is called. We are unable to measure load latency in a meaningful way, and we cannot provide track info yet. Please do not use preload="none" with Shaka Player.'),
                e.resolve());
            a.h.ua(a.g, "error", function () {
                e.reject(Hk(a))
            });
            return new Rg(e, function () {
                e.reject(new O(2, 7, 7001));
                return Promise.resolve()
            })
        }

        function ol(a) {
            var b = a.o.preferredAudioLanguage;
            if ("" != b) {
                a.Gd(b);
                var c = a.o.preferredVariantRole;
                "" != c && a.Gd(b, c)
            }
        }

        function ql(a) {
            var b = a.o.preferredTextLanguage,
                c = a.o.preferForcedSubs;
            if ("" != b) {
                a.Hd(b, "", c);
                var d = a.o.preferredTextRole;
                "" != d && a.Hd(b, d, c)
            }
        }

        function ml(a, b) {
            var c = b.track;
            "metadata" == c.kind && (c.mode = "hidden", a.h.B(c, "cuechange", function () {
                if (c.activeCues)
                    for (var d = t(c.activeCues), e = d.next(); !e.done; e = d.next())
                        if (e = e.value, Mk(a, e.startTime, e.endTime, e.type, e.value), a.L) a.L.onCueMetadataChange(e.value)
            }), (new P(function () {
                var d = rl(a);
                d = t(d);
                for (var e = d.next(); !e.done; e = d.next()) e.value.mode = "hidden"
            })).bc().T(.5))
        }

        function Mk(a, b, c, d, e) {
            a.dispatchEvent(yk(sl, {
                startTime: b,
                endTime: c,
                pg: d,
                payload: e
            }))
        }

        function Rk(a) {
            function b(c) {
                return c.video && c.audio || c.video && c.video.codecs.includes(",")
            }
            a.variants.some(b) && (a.variants = a.variants.filter(b))
        }

        function Sk(a, b) {
            return new th(b, a.o.drm.updateExpirationTime)
        }

        function mk(a) {
            return new ch(function (b, c) {
                a.u && a.u.segmentDownloaded(b, c)
            })
        }

        function $k(a, b) {
            return new Hi(a.g, a.A, a.o.streaming, b, function () {
                a.Fa && Ti(a.Fa, !0);
                if (a.i)
                    for (var c = a.i, d = c.C.yc(), e = c.o.smallGapLimit, f = t(c.g.keys()), g = f.next(); !g.done; g = f.next()) {
                        g = g.value;
                        var h = c.g.get(g);
                        h.ba = null;
                        var k = c.C.P;
                        g == Fe ? (k = k.i, k = null == k.g || null == k.h ? !1 : d >= k.g && d < k.h) : (k = yf(k, g), k = ie(k, d, e));
                        if (!k && (null != zf(c.C.P, g) && qj(c, h), h.va && (h.va.abort(), h.va = null), g === Fe))
                            for (g = c.C.P.D.g, g.l = 0, g.h = [], g.g = [], h = g.i, h.i = [], h.h = [], h.g = 0, Sd(g), g = t(g.j.values()), h = g.next(); !h.done; h = g.next()) od(h.value)
                    }
                a.H &&
                    tl(a)
            }, function (c) {
                return a.dispatchEvent(c)
            })
        }

        function al(a) {
            var b = new Zi(a.cc);
            $i(b, function (d) {
                Nk(a, ul, d)
            }, function (d) {
                Nk(a, vl, d)
            }, function (d, e) {
                e || (Nk(a, ul, d), Nk(a, vl, d))
            });
            var c = new Si(a.g);
            c.g.add(b);
            return c
        }

        function bl(a, b) {
            a.H = new Kg;
            a.H.g = Mg;
            Ng(a.H, b, Math.min(.5, b / 2));
            Kk(a);
            a.lc = (new P(function () {
                tl(a)
            })).Ba(.25)
        }

        function tl(a) {
            switch (a.l) {
            case nl:
                if (a.g.ended) var b = !0;
                else {
                    var c = he(a.g.buffered);
                    b = null != c && c >= a.g.duration - 1
                }
                break;
            case dl:
                a: if (a.g.ended || wf(a.I)) b = !0;
                    else {
                        if (a.A.presentationTimeline.Y()) {
                            c = a.A.presentationTimeline.fb();
                            var d = he(a.g.buffered);
                            if (null != d && d >= c) {
                                b = !0;
                                break a
                            }
                        }
                        b = !1
                    }
                break;
            default:
                b = !1
            }
            d = je(a.g.buffered, a.g.currentTime);
            c = a.H;
            var e = b,
                f = c.h.get(c.g);
            b = c.g;
            d = e || d >= f ? Lg : Mg;
            c.g = d;
            b != d && Kk(a)
        }

        function Lk(a, b, c, d) {
            return new of (a, b, c, d)
        }

        function cl(a) {
            return new bj(a.A, {
                yc: function () {
                    return a.D.l()
                },
                getBandwidthEstimate: function () {
                    return a.u.getBandwidthEstimate()
                },
                P: a.I,
                Bb: a.O,
                onError: function (b) {
                    return Ik(a, b)
                },
                onEvent: function (b) {
                    return a.dispatchEvent(b)
                },
                nf: function () {
                    a.s && a.s.update && a.s.update()
                },
                yd: function () {
                    a.D && a.D.F();
                    tl(a)
                }
            })
        }
        q.configure = function (a, b) {
            2 == arguments.length && "string" == typeof a && (a = Xj(a, b));
            a.manifest && a.manifest.dash && "defaultPresentationDelay" in a.manifest.dash && (Hb("manifest.dash.defaultPresentationDelay configuration", "Please Use manifest.defaultPresentationDelay instead."), a.manifest.defaultPresentationDelay = a.manifest.dash.defaultPresentationDelay, delete a.manifest.dash.defaultPresentationDelay);
            a.streaming && a.streaming.lowLatencyMode && (void 0 == a.streaming.inaccurateManifestTolerance && (a.streaming.inaccurateManifestTolerance =
                0), void 0 == a.streaming.rebufferingGoal && (a.streaming.rebufferingGoal = .01));
            var c = bk(this.o, a, lk(this));
            wl(this);
            return c
        };

        function wl(a) {
            if (a.s) {
                var b = Zg(a.o.manifest);
                a.g && "AUDIO" === a.g.nodeName && (b.disableVideo = !0);
                a.s.configure(b)
            }
            a.m && a.m.configure(a.o.drm);
            if (a.i) {
                a.i.configure(a.o.streaming);
                try {
                    xl(a, a.A)
                } catch (f) {
                    Ik(a, f)
                }
                a.u && fl(a);
                b = a.i.h;
                !b || b.allowedByApplication && b.allowedByKeySystem || yl(a)
            }
            a.O && a.O.Jd(a.o.streaming.forceHTTPS);
            if (a.I && (b = a.o.textDisplayFactory, a.dd != b)) {
                var c = Ob(b),
                    d = a.I,
                    e = d.m;
                d.m = c;
                e && (c.setTextVisibility(e.isTextVisible()), e.destroy());
                d.i && (d.i.i = c);
                a.dd = b;
                a.i && (b = a.i, (c = b.g.get(Fe)) &&
                    lj(b, c.stream, !0, 0, !0))
            }
            a.u && (a.u.configure(a.o.abr), a.o.abr.enabled ? a.u.enable() : a.u.disable(), jl(a));
            a.H && (b = a.o.streaming.rebufferingGoal, a.A && (b = Math.max(b, a.A.minBufferTime)), Ng(a.H, b, Math.min(.5, b / 2)));
            a.A && Yk(a.A.presentationTimeline, a.o.playRangeStart, a.o.playRangeEnd)
        }
        q.getConfiguration = function () {
            var a = lk(this);
            bk(a, this.o, lk(this));
            return a
        };
        q.zf = function () {
            for (var a in this.o) delete this.o[a];
            bk(this.o, lk(this), lk(this));
            wl(this)
        };
        q.Qe = function () {
            return this.l
        };
        q.Ue = function () {
            return this.g
        };
        q.Rb = function () {
            return this.O
        };
        q.hd = function () {
            return this.Va
        };
        q.Yd = function () {
            return this.L ? this.L : null
        };
        q.Y = function () {
            return this.A ? this.A.presentationTimeline.Y() : this.g && this.g.src ? Infinity == this.g.duration : !1
        };
        q.ib = function () {
            return this.A ? this.A.presentationTimeline.ib() : !1
        };
        q.gf = function () {
            if (this.A) {
                var a = this.A.variants;
                return a.length ? !a[0].video : !1
            }
            return this.g && this.g.src ? this.g.videoTracks ? 0 == this.g.videoTracks.length : 0 == this.g.videoHeight : !1
        };
        q.Fd = function () {
            if (this.A) {
                var a = this.A.presentationTimeline;
                return {
                    start: a.xb(),
                    end: a.Qa()
                }
            }
            return this.g && this.g.src && (a = this.g.seekable, a.length) ? {
                start: a.start(0),
                end: a.end(a.length - 1)
            } : {
                start: 0,
                end: 0
            }
        };
        q.keySystem = function () {
            return Rh(this.drmInfo())
        };
        q.drmInfo = function () {
            return this.m ? this.m.i : null
        };
        q.Qb = function () {
            return this.m ? this.m.Qb() : Infinity
        };
        q.xc = function () {
            return this.m ? this.m.xc() : {}
        };
        q.md = function () {
            return this.H ? this.H.g == Mg : !1
        };
        q.We = function () {
            return this.g ? this.F ? this.F.i : 1 : 0
        };
        q.If = function (a) {
            0 == a ? Ua("A trick play rate of 0 is unsupported!") : (this.g.paused && this.g.play(), this.F.set(a), this.l == dl && (this.u.playbackRateChanged(a), kj(this.i, 1 < Math.abs(a))))
        };
        q.Ce = function () {
            var a = this.F.wc();
            this.l == nl && this.F.set(a);
            this.l == dl && (this.F.set(a), this.u.playbackRateChanged(a), kj(this.i, !1))
        };
        q.jd = function () {
            if (this.A) {
                for (var a = this.i ? this.i.h : null, b = [], c = t(this.A.variants), d = c.next(); !d.done; d = c.next())
                    if (d = d.value, tg(d)) {
                        var e = mg(d);
                        e.active = d == a;
                        b.push(e)
                    } return b
            }
            return this.g && this.g.audioTracks ? Array.from(this.g.audioTracks).map(function (f) {
                return rg(f)
            }) : []
        };
        q.yb = function () {
            if (this.A) {
                for (var a = this.i ? this.i.i : null, b = [], c = t(this.A.textStreams), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = ng(d);
                    e.active = d == a;
                    b.push(e)
                }
                return b
            }
            return this.g && this.g.src && this.g.textTracks ? pl(this).map(function (f) {
                var g = sg(f);
                g.active = "disabled" != f.mode;
                g.type = "text";
                g.originalTextId = f.id;
                "captions" == f.kind && (g.mimeType = "application/cea-608");
                f.kind && (g.roles = [f.kind]);
                "forced" == f.kind && (g.forced = !0);
                return g
            }) : []
        };
        q.Oe = function () {
            return this.A ? this.A.imageStreams.map(function (a) {
                return og(a)
            }) : []
        };
        q.df = function (a, b) {
            var c = this,
                d, e, f, g, h, k, l, m, n, p, r, u, w, x, y, D;
            return K(function (C) {
                if (1 == C.g) return c.A ? (d = c.A.imageStreams.find(function (A) {
                    return A.id == a
                })) ? d.segmentIndex ? C.v(3) : v(C, d.createSegmentIndex(), 3) : C["return"](null) : C.v(2);
                if (2 != C.g) {
                    e = d.segmentIndex.find(b);
                    if (null == e) return C["return"](null);
                    f = d.segmentIndex.get(e);
                    g = /(\d+)x(\d+)/.exec(d.tilesLayout);
                    if (!g) return C["return"](null);
                    h = d.width || 0;
                    k = d.height || 0;
                    l = parseInt(g[1], 10);
                    m = parseInt(g[2], 10);
                    n = h / l;
                    p = k / m;
                    u = r = 0;
                    w = l * m;
                    1 < w && (x = b - f.startTime,
                        y = f.endTime - f.startTime, D = Math.floor(x * w / y), r = D % l / l * h, u = D % m / m * k);
                    return C["return"]({
                        height: p,
                        positionX: r,
                        positionY: u,
                        uris: f.ma(),
                        width: n
                    })
                }
                return C["return"](null)
            })
        };
        q.me = function (a) {
            if (this.A && this.i) {
                var b = this.A.textStreams.find(function (d) {
                    return d.id == a.id
                });
                b && b != this.i.i && (ik(this.j.g, b, !1), nj(this.i, b), zl(this), this.pa = b.language)
            } else if (this.g && this.g.src && this.g.textTracks) {
                b = pl(this);
                b = t(b);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, pg(c) == a.id ? c.mode = this.X ? "showing" : "hidden" : c.mode = "disabled";
                zl(this)
            }
        };
        q.ne = function (a, b, c) {
            b = void 0 === b ? !1 : b;
            c = void 0 === c ? 0 : c;
            if (this.A && this.i) {
                this.o.abr.enabled && Ua("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");
                var d = this.A.variants.find(function (e) {
                    return e.id == a.id
                });
                d && tg(d) && (Al(this, d, !1, b, c), this.oa = new Fg(d), fl(this))
            } else if (this.g && this.g.audioTracks)
                for (b = Array.from(this.g.audioTracks), b = t(b), c = b.next(); !c.done; c = b.next())
                    if (c = c.value,
                        pg(c) == a.id) {
                        Bl(this, c);
                        break
                    }
        };
        q.Le = function () {
            return Cl(this.jd())
        };
        q.cf = function () {
            return Cl(this.yb())
        };
        q.Ke = function () {
            return Array.from(Dl(this.jd()))
        };
        q.bf = function () {
            return Array.from(Dl(this.yb()))
        };
        q.Gd = function (a, b) {
            if (this.A && this.D) {
                this.oa = new Gg(a, b || "", 0, "");
                if (!this.o.abr.enabled) {
                    var c = function (k, l) {
                            return k.video || l.video ? k.video && l.video ? Math.abs((k.video.height || 0) - (l.video.height || 0)) + Math.abs((k.video.width || 0) - (l.video.width || 0)) : Infinity : 0
                        },
                        d = this.i.h,
                        e = this.oa.create(this.A.variants),
                        f = null;
                    e = t(e.values());
                    for (var g = e.next(); !g.done; g = e.next())
                        if (g = g.value, !f || c(f, d) > c(g, d)) f = g;
                    if (f) {
                        c = mg(f);
                        this.ne(c, !0);
                        return
                    }
                }
                yl(this)
            } else if (this.g && this.g.audioTracks) {
                e = Array.from(this.g.audioTracks);
                c = Mf(a);
                f = d = null;
                e = t(e);
                for (g = e.next(); !g.done; g = e.next()) {
                    g = g.value;
                    var h = rg(g);
                    Mf(h.language) == c && (d = g, b ? h.roles.includes(b) && (f = g) : 0 == h.roles.length && (f = g))
                }
                f ? Bl(this, f) : d && Bl(this, d)
            }
        };
        q.Hd = function (a, b, c) {
            c = void 0 === c ? !1 : c;
            if (this.A && this.D) {
                if (this.pa = a, this.Wa = b || "", this.mc = c, (a = vg(this.A.textStreams, this.pa, this.Wa, this.mc)[0] || null) && a != this.i.i && (ik(this.j.g, a, !1), this.o.streaming.alwaysStreamText || this.nd())) nj(this.i, a), zl(this)
            } else {
                var d = Mf(a);
                (a = this.yb().find(function (e) {
                    return Mf(e.language) == d && (!b || e.roles.includes(b)) && e.forced == c
                })) && this.me(a)
            }
        };
        q.Af = function (a) {
            if (this.A && this.D) {
                for (var b = null, c = t(this.A.variants), d = c.next(); !d.done; d = c.next())
                    if (d = d.value, d.audio.label == a) {
                        b = d;
                        break
                    } null != b && (this.oa = new Gg(b.language, "", 0, a), yl(this))
            }
        };
        q.nd = function () {
            var a = this.X;
            return this.I ? this.I.m.isTextVisible() : this.g && this.g.src && this.g.textTracks ? pl(this).some(function (b) {
                return "showing" == b.mode
            }) : a
        };

        function pl(a) {
            return Array.from(a.g.textTracks).filter(function (b) {
                return "metadata" != b.kind && "chapters" != b.kind && "Shaka Player TextTrack" != b.label
            })
        }

        function rl(a) {
            return Array.from(a.g.textTracks).filter(function (b) {
                return "metadata" == b.kind
            })
        }
        q.Gf = function (a) {
            a = !!a;
            if (this.X != a) {
                this.X = a;
                if (this.l == dl) this.I.m.setTextVisibility(a), this.o.streaming.alwaysStreamText || (a ? this.i.i || (a = vg(this.A.textStreams, this.pa, this.Wa, this.mc), 0 < a.length && (nj(this.i, a[0]), zl(this))) : jj(this.i));
                else if (this.g && this.g.src && this.g.textTracks) {
                    var b = pl(this);
                    b = t(b);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, "disabled" != c.mode && (c.mode = a ? "showing" : "hidden")
                }
                hl(this)
            }
        };
        q.Ye = function () {
            if (!this.Y()) return null;
            var a = this.ca.l,
                b = 0;
            if (this.D) b = this.D.l();
            else if (a) {
                if (null == a.startTime) return new Date;
                b = a.startTime
            }
            return this.A ? new Date(1E3 * (this.A.presentationTimeline.j + b)) : this.g && this.g.getStartDate ? (a = this.g.getStartDate(), isNaN(a.getTime()) ? null : new Date(a.getTime() + 1E3 * b)) : null
        };
        q.Zd = function () {
            if (!this.Y()) return null;
            if (this.A) return new Date(1E3 * this.A.presentationTimeline.j);
            if (this.g && this.g.getStartDate) {
                var a = this.g.getStartDate();
                return isNaN(a.getTime()) ? null : a
            }
            return null
        };
        q.vc = function () {
            if (this.l == dl) return this.I.vc();
            var a = {
                total: [],
                audio: [],
                video: [],
                text: []
            };
            this.l == nl && (a.total = ke(this.g.buffered));
            return a
        };
        q.getStats = function () {
            if (this.l != dl && this.l != nl) return {
                width: NaN,
                height: NaN,
                streamBandwidth: NaN,
                decodedFrames: NaN,
                droppedFrames: NaN,
                corruptedFrames: NaN,
                estimatedBandwidth: NaN,
                completionPercent: NaN,
                loadLatency: NaN,
                manifestTimeSeconds: NaN,
                drmTimeSeconds: NaN,
                playTime: NaN,
                pauseTime: NaN,
                bufferingTime: NaN,
                licenseTime: NaN,
                liveLatency: NaN,
                maxSegmentDuration: NaN,
                switchHistory: [],
                stateHistory: []
            };
            Wk(this);
            var a = this.g,
                b = a.currentTime / a.duration;
            if (!isNaN(b)) {
                var c = this.j;
                b = Math.round(100 * b);
                c.i = isNaN(c.i) ?
                    b : Math.max(c.i, b)
            }
            a.getVideoPlaybackQuality && (a = a.getVideoPlaybackQuality(), c = this.j, b = Number(a.totalVideoFrames), c.S = Number(a.droppedVideoFrames), c.N = b, this.j.L = Number(a.corruptedVideoFrames));
            this.m ? (a = this.m, a = a.H ? a.H : NaN) : a = NaN;
            this.j.m = a;
            if (this.l == dl) {
                if (a = this.i.h) this.j.u = (this.F ? this.F.i : 1) * a.bandwidth;
                a && a.video && (c = this.j, b = a.video.height || NaN, c.X = a.video.width || NaN, c.D = b);
                this.Y() && (a = this.Zd().valueOf() + 1E3 * this.Fd().end, this.j.F = (Date.now() - a) / 1E3);
                this.A && this.A.presentationTimeline &&
                    (this.j.I = this.A.presentationTimeline.g);
                a = this.u.getBandwidthEstimate();
                this.j.s = a
            }
            var d = this.j;
            a = d.X;
            c = d.D;
            b = d.u;
            var e = d.N,
                f = d.S,
                g = d.L,
                h = d.s,
                k = d.i,
                l = d.l,
                m = d.H,
                n = d.j,
                p = ek(d.h, "playing"),
                r = ek(d.h, "paused"),
                u = ek(d.h, "buffering"),
                w = d.m,
                x = d.F,
                y = d.I,
                D = fk(d.h),
                C = [];
            d = t(d.g.g);
            for (var A = d.next(); !A.done; A = d.next()) A = A.value, C.push({
                timestamp: A.timestamp,
                id: A.id,
                type: A.type,
                fromAdaptation: A.fromAdaptation,
                bandwidth: A.bandwidth
            });
            return {
                width: a,
                height: c,
                streamBandwidth: b,
                decodedFrames: e,
                droppedFrames: f,
                corruptedFrames: g,
                estimatedBandwidth: h,
                completionPercent: k,
                loadLatency: l,
                manifestTimeSeconds: m,
                drmTimeSeconds: n,
                playTime: p,
                pauseTime: r,
                bufferingTime: u,
                licenseTime: w,
                liveLatency: x,
                maxSegmentDuration: y,
                stateHistory: D,
                switchHistory: C
            }
        };
        q.addTextTrack = function (a, b, c, d, e, f, g) {
            g = void 0 === g ? !1 : g;
            Hb("addTextTrack", "Please use an addTextTrackAsync.");
            if (this.l != dl && this.l != nl) throw new O(1, 7, 7004);
            if (!d) {
                var h = li(a);
                d = {
                    sbv: "text/x-subviewer",
                    srt: "text/srt",
                    vtt: "text/vtt",
                    webvtt: "text/vtt",
                    ttml: "application/ttml+xml",
                    lrc: "application/x-subtitle-lrc",
                    ssa: "text/x-ssa",
                    ass: "text/x-ssa"
                } [h];
                if (!d) throw new O(1, 2, 2011, h);
            }
            if (this.l == nl) {
                if ("text/vtt" != d) throw new O(1, 2, 2013, d);
                g && (c = "forced");
                d = document.createElement("track");
                d.src = a;
                d.label =
                    f || "";
                d.kind = c;
                d.srclang = b;
                this.g.getAttribute("crossorigin") || this.g.setAttribute("crossorigin", "anonymous");
                this.g.appendChild(d);
                if (a = this.yb().find(function (k) {
                        return k.language == b && k.label == (f || "") && k.kind == c
                    })) return ll(this), a;
                throw new O(1, 2, 2012);
            }
            h = this.A.presentationTimeline.getDuration();
            if (Infinity == h) throw new O(1, 4, 4033);
            a = {
                id: this.gd++,
                originalId: null,
                createSegmentIndex: function () {
                    return Promise.resolve()
                },
                segmentIndex: Oi(0, h, [a]),
                mimeType: d || "",
                codecs: e || "",
                kind: c,
                encrypted: !1,
                drmInfos: [],
                keyIds: new Set,
                language: b,
                label: f || null,
                type: Fe,
                primary: !1,
                trickModeVideo: null,
                emsgSchemeIdUris: null,
                roles: [],
                forced: !!g,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                closedCaptions: null
            };
            if (!Xe(Qe(a.mimeType, a.codecs))) throw new O(2, 2, 2014, d);
            this.A.textStreams.push(a);
            ll(this);
            return ng(a)
        };
        q.ye = function (a, b, c, d, e, f, g) {
            g = void 0 === g ? !1 : g;
            var h = this,
                k, l, m, n, p, r, u, w, x, y, D, C;
            return K(function (A) {
                switch (A.g) {
                case 1:
                    if (h.l != dl && h.l != nl) throw new O(1, 7, 7004);
                    if (d) {
                        A.v(2);
                        break
                    }
                    k = li(a);
                    if (d = {
                            sbv: "text/x-subviewer",
                            srt: "text/srt",
                            vtt: "text/vtt",
                            webvtt: "text/vtt",
                            ttml: "application/ttml+xml",
                            lrc: "application/x-subtitle-lrc",
                            ssa: "text/x-ssa",
                            ass: "text/x-ssa"
                        } [k]) {
                        A.v(3);
                        break
                    }
                    B(A, 4);
                    return v(A, ni(a, h.O, h.o.streaming.retryParameters), 6);
                case 6:
                    d = A.h;
                    wa(A, 3);
                    break;
                case 4:
                    E(A);
                case 3:
                    if (!d) throw new O(1,
                        2, 2011, k);
                case 2:
                    if (h.l != nl) {
                        A.v(7);
                        break
                    }
                    if ("text/vtt" == d) {
                        A.v(8);
                        break
                    }
                    return v(A, El(a, h.O, h.o.streaming.retryParameters), 9);
                case 9:
                    l = A.h, m = Fl(h, l, d), n = new Blob([m], {
                        type: "text/vtt"
                    }), a = sf(n), d = "text/vtt";
                case 8:
                    g && (c = "forced");
                    p = document.createElement("track");
                    p.src = a;
                    p.label = f || "";
                    p.kind = c;
                    p.srclang = b;
                    h.g.getAttribute("crossorigin") || h.g.setAttribute("crossorigin", "anonymous");
                    h.g.appendChild(p);
                    r = h.yb();
                    if (u = r.find(function (F) {
                            return F.language == b && F.label == (f || "") && F.kind == c
                        })) return ll(h),
                        A["return"](u);
                    throw new O(1, 2, 2012);
                case 7:
                    w = Ge;
                    x = h.A.presentationTimeline.getDuration();
                    if (Infinity == x) throw new O(1, 4, 4033);
                    y = {
                        id: h.gd++,
                        originalId: null,
                        createSegmentIndex: function () {
                            return Promise.resolve()
                        },
                        segmentIndex: Oi(0, x, [a]),
                        mimeType: d || "",
                        codecs: e || "",
                        kind: c,
                        encrypted: !1,
                        drmInfos: [],
                        keyIds: new Set,
                        language: b,
                        label: f || null,
                        type: w.fa,
                        primary: !1,
                        trickModeVideo: null,
                        emsgSchemeIdUris: null,
                        roles: [],
                        forced: !!g,
                        channelsCount: null,
                        audioSamplingRate: null,
                        spatialAudio: !1,
                        closedCaptions: null
                    };
                    D =
                        Qe(y.mimeType, y.codecs);
                    C = Xe(D);
                    if (!C) throw new O(2, 2, 2014, d);
                    h.A.textStreams.push(y);
                    ll(h);
                    return A["return"](ng(y))
                }
            })
        };

        function El(a, b, c) {
            var d, e, f;
            return K(function (g) {
                if (1 == g.g) return d = mh, e = gh([a], c), e.method = "GET", v(g, b.request(d, e).promise, 2);
                f = g.h;
                return g["return"](f.data)
            })
        }

        function Fl(a, b, c) {
            var d = Ye[c];
            if (d) return c = d(), a = {
                periodStart: 0,
                segmentStart: 0,
                segmentEnd: a.g.duration
            }, b = qb(b), b = c.parseMedia(b, a), Uj(b);
            throw new O(2, 2, 2014, c);
        }
        q.Kd = function (a, b) {
            this.fd.width = a;
            this.fd.height = b
        };
        q.Dd = function () {
            if (this.l == dl) {
                var a = this.i;
                if (a.J.g) a = !1;
                else if (a.l) a = !1;
                else {
                    for (var b = t(a.g.values()), c = b.next(); !c.done; c = b.next()) c = c.value, c.Ub && (c.Ub = !1, ij(a, c, .1));
                    a = !0
                }
            } else a = !1;
            return a
        };
        q.Re = function () {
            Ua("Shaka Player's internal Manifest structure is NOT covered by semantic versioning compatibility guarantees.  It may change at any time!  Please consider filing a feature request for whatever you use getManifest() for.");
            return this.A
        };
        q.Se = function () {
            return this.pc
        };

        function lk(a) {
            var b = Zj();
            b.streaming.failureCallback = function (c) {
                var d = [1001, 1002, 1003];
                a.Y() && d.includes(c.code) && (c.severity = 1, a.Dd())
            };
            b.textDisplayFactory = function () {
                return a.kc ? new Pj(a.g, a.kc) : new Kj(a.g)
            };
            return b
        }
        q.re = function (a) {
            this.kc = a
        };

        function Pk(a, b) {
            for (var c = new Set, d = t(b.textStreams), e = d.next(); !e.done; e = d.next()) e = e.value, "application/cea-608" != e.mimeType && "application/cea-708" != e.mimeType || c.add(e.originalId);
            d = t(b.variants);
            for (e = d.next(); !e.done; e = d.next())
                if ((e = e.value.video) && e.closedCaptions)
                    for (var f = t(e.closedCaptions.keys()), g = f.next(); !g.done; g = f.next())
                        if (g = g.value, !c.has(g)) {
                            var h = g.startsWith("CC") ? "application/cea-608" : "application/cea-708",
                                k = new Pi;
                            h = {
                                id: a.gd++,
                                originalId: g,
                                createSegmentIndex: function () {
                                    return Promise.resolve()
                                },
                                segmentIndex: k,
                                mimeType: h,
                                codecs: "",
                                kind: "caption",
                                encrypted: !1,
                                drmInfos: [],
                                keyIds: new Set,
                                language: e.closedCaptions.get(g),
                                label: null,
                                type: Fe,
                                primary: !1,
                                trickModeVideo: null,
                                emsgSchemeIdUris: null,
                                roles: e.roles,
                                forced: !1,
                                channelsCount: null,
                                audioSamplingRate: null,
                                spatialAudio: !1,
                                closedCaptions: null
                            };
                            b.textStreams.push(h);
                            c.add(g)
                        }
        }
        q.uc = function (a) {
            var b = this;
            return K(function (c) {
                if (1 == c.g) return v(c, Gl(b, a), 2);
                xl(b, a);
                z(c)
            })
        };

        function Gl(a, b) {
            var c;
            return K(function (d) {
                if (1 == d.g) return c = a.i ? a.i.h : null, v(d, ag(a.m, c, b, a.o.useMediaCapabilities), 2);
                kl(b);
                z(d)
            })
        }

        function xl(a, b) {
            if (a.l != Bk) {
                for (var c = a.o.restrictions, d = a.fd, e = !1, f = t(b.variants), g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = g.allowedByApplication;
                    g.allowedByApplication = $f(g, c, d);
                    h != g.allowedByApplication && (e = !0)
                }
                e && a.i && ll(a);
                if ((c = a.m ? a.m.i : null) && a.m.m)
                    for (d = t(b.variants), e = d.next(); !e.done; e = d.next())
                        for (e = e.value, e = t((e.video ? e.video.drmInfos : []).concat(e.audio ? e.audio.drmInfos : [])), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, f.keySystem == c.keySystem)
                                for (f = t(f.initData || []), g = f.next(); !g.done; g =
                                    f.next()) g = g.value, Mh(a.m, g.initDataType, g.initData);
                Hl(a, b)
            }
        }

        function il(a, b) {
            var c, d, e, f, g;
            return K(function (h) {
                if (1 == h.g) return c = a.audio, d = a.video, e = function (k, l) {
                    var m, n;
                    return K(function (p) {
                        if (1 == p.g) return k ? v(p, k.createSegmentIndex(), 2) : p["return"](null);
                        m = k.segmentIndex[Symbol.iterator]().seek(l);
                        if (!m) return p["return"](null);
                        n = m.startTime;
                        return p["return"](n)
                    })
                }, v(h, e(c, b), 2);
                if (3 != h.g) return f = h.h, v(h, e(d, b), 3);
                g = h.h;
                return null != g && null != f ? h["return"](Math.max(g, f)) : null != g ? h["return"](g) : null != f ? h["return"](f) : h["return"](b)
            })
        }

        function Kk(a) {
            var b = a.md();
            if (a.j && a.H && a.D) {
                var c = a.F;
                c.j = b;
                Ri(c);
                Wk(a)
            }
            a.dispatchEvent(yk(Il, {
                buffering: b
            }))
        }

        function Xk(a) {
            var b = a.g.playbackRate;
            0 != b && (a.F && a.F.set(b), b = yk(Jl), a.dispatchEvent(b))
        }

        function Wk(a) {
            if (a.j && a.H) {
                var b = a.j.h;
                a.H.g == Mg ? dk(b, "buffering") : a.g.paused ? dk(b, "paused") : a.g.ended ? dk(b, "ended") : dk(b, "playing")
            }
        }

        function fl(a) {
            try {
                Hl(a, a.A)
            } catch (c) {
                return Ik(a, c), !1
            }
            var b = a.A.variants.filter(function (c) {
                return tg(c)
            });
            b = a.oa.create(b);
            a.u.setVariants(Array.from(b.values()));
            return !0
        }

        function yl(a) {
            var b;
            if (b = fl(a) ? a.u.chooseVariant() : null) Al(a, b, !0, !0, 0), Zk(a)
        }

        function Al(a, b, c, d, e) {
            var f = a.i.h;
            b != f && (hk(a.j.g, b, c), mj(a.i, b, d, e), c = null, f && (c = mg(f)), b = mg(b), Kl(a, c, b))
        }

        function Bl(a, b) {
            var c = Array.from(a.g.audioTracks).find(function (e) {
                return e.enabled
            });
            b.enabled = !0;
            c = rg(c);
            var d = rg(b);
            Kl(a, c, d)
        }

        function gl(a, b, c) {
            a = Mf(a.o.preferredTextLanguage);
            b = Mf(b.language);
            c = Mf(c.language);
            return Lf(c, a) && !Lf(b, c)
        }

        function Zk(a) {
            var b = yk(Ll);
            Ml(a, b)
        }

        function ll(a) {
            var b = yk(Nl);
            Ml(a, b)
        }

        function Kl(a, b, c) {
            b = yk(Ol, {
                sg: b,
                rg: c
            });
            Ml(a, b)
        }

        function zl(a) {
            var b = yk(Pl);
            Ml(a, b)
        }

        function hl(a) {
            var b = yk(Ql);
            Ml(a, b)
        }

        function jl(a) {
            var b = yk(Rl, {
                qg: a.o.abr.enabled
            });
            Ml(a, b)
        }

        function Ik(a, b) {
            if (a.l != Bk) {
                var c = yk(Sl, {
                    detail: b
                });
                a.dispatchEvent(c);
                c.defaultPrevented && (b.handled = !0)
            }
        }

        function Nk(a, b, c) {
            a.dispatchEvent(yk(b, {
                detail: {
                    schemeIdUri: c.schemeIdUri,
                    value: c.value,
                    startTime: c.startTime,
                    endTime: c.endTime,
                    id: c.id,
                    eventElement: c.eventElement
                }
            }))
        }

        function Hk(a) {
            if (!a.g.error) return null;
            var b = a.g.error.code;
            if (1 == b) return null;
            var c = a.g.error.msExtendedCode;
            c && (0 > c && (c += Math.pow(2, 32)), c = c.toString(16));
            return new O(2, 3, 3016, b, c, a.g.error.message)
        }

        function Tk(a, b) {
            if (a.i) {
                var c = Object.keys(b),
                    d = 1 == c.length && "00" == c[0],
                    e = !1;
                if (c.length) {
                    c = t(a.A.variants);
                    for (var f = c.next(); !f.done; f = c.next()) {
                        f = f.value;
                        var g = [];
                        f.audio && g.push(f.audio);
                        f.video && g.push(f.video);
                        g = t(g);
                        for (var h = g.next(); !h.done; h = g.next()) {
                            var k = h.value;
                            h = f.allowedByKeySystem;
                            if (k.keyIds.size) {
                                f.allowedByKeySystem = !0;
                                k = t(k.keyIds);
                                for (var l = k.next(); !l.done; l = k.next()) l = l.value, l = b[d ? "00" : l], f.allowedByKeySystem = f.allowedByKeySystem && !!l && !Tl.includes(l)
                            }
                            h != f.allowedByKeySystem &&
                                (e = !0)
                        }
                    }
                }
                e && fl(a);
                (d = a.i.h) && !d.allowedByKeySystem && yl(a);
                e && ll(a)
            }
        }

        function Uk(a, b, c) {
            if (a.s && a.s.onExpirationUpdated) a.s.onExpirationUpdated(b, c);
            b = yk(Ul);
            a.dispatchEvent(b)
        }

        function Yk(a, b, c) {
            0 < b && (a.Y() || a.qe(b));
            b = a.getDuration();
            c < b && (a.Y() || a.Ja(c))
        }

        function Hl(a, b) {
            var c = a.m ? a.m.xc() : {},
                d = Object.keys(c);
            d = d.length && "00" == d[0];
            for (var e = !1, f = !1, g = new Set, h = new Set, k = t(b.variants), l = k.next(); !l.done; l = k.next()) {
                l = l.value;
                var m = [];
                l.audio && m.push(l.audio);
                l.video && m.push(l.video);
                m = t(m);
                for (var n = m.next(); !n.done; n = m.next())
                    if (n = n.value, n.keyIds.size) {
                        n = t(n.keyIds);
                        for (var p = n.next(); !p.done; p = n.next()) {
                            p = p.value;
                            var r = c[d ? "00" : p];
                            r ? Tl.includes(r) && h.add(r) : g.add(p)
                        }
                    } l.allowedByApplication ? l.allowedByKeySystem && (e = !0) : f = !0
            }
            if (!e) throw c = {
                hasAppRestrictions: f,
                missingKeys: Array.from(g),
                restrictedKeyStatuses: Array.from(h)
            }, new O(2, 4, 4012, c);
        }

        function kl(a) {
            if (!a.variants.some(tg)) throw new O(2, 4, 4032);
        }

        function Ml(a, b) {
            K(function (c) {
                if (1 == c.g) return v(c, Promise.resolve(), 2);
                a.l != Bk && a.dispatchEvent(b);
                z(c)
            })
        }

        function Dl(a) {
            var b = new Set;
            a = t(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.language ? b.add(Mf(c.language)) : b.add("und");
            return b
        }

        function Cl(a) {
            var b = new Map,
                c = new Map;
            a = t(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                var e = "und",
                    f = [];
                d.language && (e = Mf(d.language));
                "variant" == d.type ? f = d.audioRoles : f = d.roles;
                f && f.length || (f = [""]);
                b.has(e) || b.set(e, new Set);
                f = t(f);
                for (var g = f.next(); !g.done; g = f.next()) g = g.value, b.get(e).add(g), d.label && (c.has(e) || c.set(e, new Map), c.get(e).set(g, d.label))
            }
            var h = [];
            b.forEach(function (k, l) {
                for (var m = t(k), n = m.next(); !n.done; n = m.next()) {
                    n = n.value;
                    var p = null;
                    c.has(l) && c.get(l).has(n) && (p = c.get(l).get(n));
                    h.push({
                        language: l,
                        role: n,
                        label: p
                    })
                }
            });
            return h
        }

        function Ck() {
            return new O(2, 7, 7E3)
        }

        function xk(a, b, c, d, e, f) {
            return d == a && e.G == f.G && e.uri == f.uri && e.mimeType == f.mimeType ? b : c
        }

        function Ej() {
            return {
                G: null,
                mimeType: null,
                startTime: null,
                Nd: NaN,
                uri: null
            }
        }

        function Dk(a) {
            return new Promise(function (b, c) {
                a.jb = function () {
                    return c(Ck())
                };
                a.Cc = function () {
                    return b()
                };
                a.onError = function (d) {
                    return c(d)
                };
                a.Ec = function () {
                    return c(Ck())
                }
            })
        }
        L("shaka.Player", V);
        V.prototype.setVideoContainer = V.prototype.re;
        V.prototype.getManifestParserFactory = V.prototype.Se;
        V.prototype.getManifest = V.prototype.Re;
        V.prototype.retryStreaming = V.prototype.Dd;
        V.prototype.setMaxHardwareResolution = V.prototype.Kd;
        V.prototype.addTextTrackAsync = V.prototype.ye;
        V.prototype.addTextTrack = V.prototype.addTextTrack;
        V.prototype.getStats = V.prototype.getStats;
        V.prototype.getBufferedInfo = V.prototype.vc;
        V.prototype.getPresentationStartTimeAsDate = V.prototype.Zd;
        V.prototype.getPlayheadTimeAsDate = V.prototype.Ye;
        V.prototype.setTextTrackVisibility = V.prototype.Gf;
        V.prototype.isTextTrackVisible = V.prototype.nd;
        V.prototype.selectVariantsByLabel = V.prototype.Af;
        V.prototype.selectTextLanguage = V.prototype.Hd;
        V.prototype.selectAudioLanguage = V.prototype.Gd;
        V.prototype.getTextLanguages = V.prototype.bf;
        V.prototype.getAudioLanguages = V.prototype.Ke;
        V.prototype.getTextLanguagesAndRoles = V.prototype.cf;
        V.prototype.getAudioLanguagesAndRoles = V.prototype.Le;
        V.prototype.selectVariantTrack = V.prototype.ne;
        V.prototype.selectTextTrack = V.prototype.me;
        V.prototype.getThumbnails = V.prototype.df;
        V.prototype.getImageTracks = V.prototype.Oe;
        V.prototype.getTextTracks = V.prototype.yb;
        V.prototype.getVariantTracks = V.prototype.jd;
        V.prototype.cancelTrickPlay = V.prototype.Ce;
        V.prototype.trickPlay = V.prototype.If;
        V.prototype.getPlaybackRate = V.prototype.We;
        V.prototype.isBuffering = V.prototype.md;
        V.prototype.getKeyStatuses = V.prototype.xc;
        V.prototype.getExpiration = V.prototype.Qb;
        V.prototype.drmInfo = V.prototype.drmInfo;
        V.prototype.keySystem = V.prototype.keySystem;
        V.prototype.seekRange = V.prototype.Fd;
        V.prototype.isAudioOnly = V.prototype.gf;
        V.prototype.isInProgress = V.prototype.ib;
        V.prototype.isLive = V.prototype.Y;
        V.prototype.getAdManager = V.prototype.Yd;
        V.prototype.getAssetUri = V.prototype.hd;
        V.prototype.getNetworkingEngine = V.prototype.Rb;
        V.prototype.getMediaElement = V.prototype.Ue;
        V.prototype.getLoadMode = V.prototype.Qe;
        V.prototype.resetConfiguration = V.prototype.zf;
        V.prototype.getConfiguration = V.prototype.getConfiguration;
        V.prototype.configure = V.prototype.configure;
        V.prototype.load = V.prototype.load;
        V.prototype.unload = V.prototype.Pd;
        V.prototype.detach = V.prototype.detach;
        V.prototype.attach = V.prototype.Mb;
        V.probeSupport = function (a) {
            a = void 0 === a ? !0 : a;
            var b, c, d, e, f, g;
            return K(function (h) {
                if (1 == h.g) return b = {}, a ? v(h, di(), 3) : h.v(2);
                2 != h.g && (b = h.h);
                var k = {};
                if ($b()) {
                    for (var l in ki) k[l] = !0;
                    for (var m in mi) k[m] = !0
                }
                l = {
                    mpd: "application/dash+xml",
                    m3u8: "application/x-mpegurl",
                    ism: "application/vnd.ms-sstr+xml"
                };
                m = t(["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"]);
                for (var n = m.next(); !n.done; n = m.next()) n = n.value, k[n] = $b() ? !!ki[n] : ac(n);
                for (var p in l) k[p] =
                    $b() ? !!mi[p] : ac(l[p]);
                c = k;
                k = {};
                p = t('video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(","));
                for (l = p.next(); !l.done; l = p.next()) l = l.value, k[l] = $b() ? Xe(l) ? !0 : MediaSource.isTypeSupported(l) || Me(l) : ac(l), m = l.split(";")[0], k[m] = k[m] || k[l];
                d = k;
                e = {
                    manifest: c,
                    media: d,
                    drm: b
                };
                f = Vl;
                for (g in f) e[g] = f[g]();
                return h["return"](e)
            })
        };
        V.isBrowserSupported = function () {
            window.Promise || Ua("A Promise implementation or polyfill is required");
            window.TextDecoder && window.TextEncoder || Ua("A TextDecoder/TextEncoder implementation or polyfill is required");
            if (!(window.Promise && window.Uint8Array && window.TextDecoder && window.TextEncoder && Array.prototype.forEach) || dc("Trident/")) return !1;
            var a = hc();
            return a && 12 > a || !(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration) ?
                !1 : $b() ? !0 : ac("application/x-mpegurl")
        };
        V.setAdManagerFactory = function (a) {
            nk = a
        };
        V.registerSupportPlugin = function (a, b) {
            Vl[a] = b
        };
        V.prototype.destroy = V.prototype.destroy;
        var Rl = "abrstatuschanged",
            Ll = "adaptation",
            Il = "buffering",
            Vk = "drmsessionupdate",
            Bj = "emsg",
            Sl = "error",
            Ul = "expirationupdated",
            Gk = "loaded",
            Ek = "loading",
            Qk = "manifestparsed",
            sl = "metadata",
            zk = "onstatechange",
            Ak = "onstateidle",
            Jl = "ratechange",
            el = "streaming",
            Pl = "textchanged",
            Ql = "texttrackvisibility",
            Ok = "timelineregionadded",
            ul = "timelineregionenter",
            vl = "timelineregionexit",
            Nl = "trackschanged",
            Jk = "unloading",
            Ol = "variantchanged",
            Wl = {
                Pf: Rl,
                Qf: Ll,
                Rf: Il,
                Sf: Vk,
                Uf: Bj,
                Error: Sl,
                Vf: Ul,
                Xf: "largegap",
                Yf: Gk,
                Zf: Ek,
                $f: Qk,
                Metadata: sl,
                ag: zk,
                bg: Ak,
                cg: Jl,
                dg: "sessiondata",
                eg: el,
                fg: Pl,
                gg: Ql,
                hg: Ok,
                ig: ul,
                jg: vl,
                kg: Nl,
                lg: Jk,
                mg: Ol
            },
            Bk = 0,
            kk = 1,
            dl = 2,
            nl = 3;
        V.LoadMode = {
            DESTROYED: Bk,
            NOT_LOADED: kk,
            MEDIA_SOURCE: dl,
            SRC_EQUALS: nl
        };
        V.version = "v3.1.1";
        var Xl = ["3", "1"];
        Ib = new function (a) {
            this.g = a;
            this.i = Jb;
            this.h = Kb
        }(new Gb(Number(Xl[0]), Number(Xl[1])));
        var Tl = ["output-restricted", "internal-error"],
            Vl = {},
            nk = null;

        function Yl() {
            this.h = [];
            this.j = this.i = this.g = 0
        };

        function W(a, b) {
            var c = this;
            this.i = a;
            this.g = b;
            this.j = !1;
            this.l = this.g.getVolume();
            this.h = new hf;
            this.h.B(this.g, google.ima.AdEvent.Type.PAUSED, function () {
                c.j = !0
            });
            this.h.B(this.g, google.ima.AdEvent.Type.RESUMED, function () {
                c.j = !1
            })
        }
        q = W.prototype;
        q.getDuration = function () {
            return this.i.getDuration()
        };
        q.getMinSuggestedDuration = function () {
            return this.i.getMinSuggestedDuration()
        };
        q.getRemainingTime = function () {
            return this.g.getRemainingTime()
        };
        q.isPaused = function () {
            return this.j
        };
        q.isSkippable = function () {
            return 0 <= this.i.getSkipTimeOffset()
        };
        q.getTimeUntilSkippable = function () {
            var a = this.i.getSkipTimeOffset();
            a = this.getRemainingTime() - a;
            return Math.max(a, 0)
        };
        q.canSkipNow = function () {
            return this.g.getAdSkippableState()
        };
        q.skip = function () {
            return this.g.skip()
        };
        q.pause = function () {
            return this.g.pause()
        };
        q.play = function () {
            return this.g.resume()
        };
        q.getVolume = function () {
            return this.g.getVolume()
        };
        q.setVolume = function (a) {
            return this.g.setVolume(a)
        };
        q.isMuted = function () {
            return 0 == this.g.getVolume()
        };
        q.resize = function (a, b) {
            this.g.resize(a, b, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
        };
        q.setMuted = function (a) {
            a ? (this.l = this.getVolume(), this.setVolume(0)) : this.setVolume(this.l)
        };
        q.getSequenceLength = function () {
            var a = this.i.getAdPodInfo();
            return null == a ? 1 : a.getTotalAds()
        };
        q.getPositionInSequence = function () {
            var a = this.i.getAdPodInfo();
            return null == a ? 1 : a.getAdPosition()
        };
        q.release = function () {
            this.g = this.i = null
        };
        L("shaka.ads.ClientSideAd", W);
        W.prototype.release = W.prototype.release;
        W.prototype.getPositionInSequence = W.prototype.getPositionInSequence;
        W.prototype.getSequenceLength = W.prototype.getSequenceLength;
        W.prototype.setMuted = W.prototype.setMuted;
        W.prototype.resize = W.prototype.resize;
        W.prototype.isMuted = W.prototype.isMuted;
        W.prototype.setVolume = W.prototype.setVolume;
        W.prototype.getVolume = W.prototype.getVolume;
        W.prototype.play = W.prototype.play;
        W.prototype.pause = W.prototype.pause;
        W.prototype.skip = W.prototype.skip;
        W.prototype.canSkipNow = W.prototype.canSkipNow;
        W.prototype.getTimeUntilSkippable = W.prototype.getTimeUntilSkippable;
        W.prototype.isSkippable = W.prototype.isSkippable;
        W.prototype.isPaused = W.prototype.isPaused;
        W.prototype.getRemainingTime = W.prototype.getRemainingTime;
        W.prototype.getMinSuggestedDuration = W.prototype.getMinSuggestedDuration;
        W.prototype.getDuration = W.prototype.getDuration;

        function Zl(a, b, c, d) {
            var e = this;
            this.m = a;
            this.g = b;
            this.u = NaN;
            this.j = d;
            this.s = null;
            this.h = new hf;
            google.ima.settings.setLocale(c);
            a = new google.ima.AdDisplayContainer(this.m, this.g);
            a.initialize();
            this.l = new google.ima.AdsLoader(a);
            this.l.getSettings().setPlayerType("shaka-player");
            this.l.getSettings().setPlayerVersion("v3.1.1");
            this.i = null;
            this.h.ua(this.l, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (f) {
                $l(e, f)
            });
            this.h.B(this.l, google.ima.AdErrorEvent.Type.AD_ERROR, function (f) {
                am(e,
                    f)
            });
            this.g.onended = function () {
                e.l.contentComplete()
            }
        }
        Zl.prototype.stop = function () {
            this.i && this.i.stop();
            this.m && Oj(this.m)
        };

        function am(a, b) {
            b.getError();
            bm(a, null);
            a.j(new Q("ad-cue-points-changed", {
                cuepoints: []
            }))
        }

        function $l(a, b) {
            a.j(new Q("ads-loaded", {
                loadTime: Date.now() / 1E3 - a.u
            }));
            a.i = b.getAdsManager(a.g);
            a.j(new Q("ima-ad-manager-loaded", {
                imaAdManager: a.i
            }));
            var c = a.i.getCuePoints();
            if (c.length) {
                var d = [];
                c = t(c);
                for (var e = c.next(); !e.done; e = c.next()) d.push(new cm(e.value));
                a.j(new Q("ad-cue-points-changed", {
                    cuepoints: d
                }))
            }
            dm(a);
            try {
                a.i.init(a.g.offsetWidth, a.g.offsetHeight, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), a.h.B(a.g, "loadeddata", function () {
                    a.i.resize(a.g.offsetWidth,
                        a.g.offsetHeight, document.fullscreenElement ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
                }), a.i.start()
            } catch (f) {
                bm(a, null)
            }
        }

        function dm(a) {
            a.h.B(a.i, google.ima.AdErrorEvent.Type.AD_ERROR, function (b) {
                am(a, b)
            });
            a.h.B(a.i, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function (b) {
                em(a, b)
            });
            a.h.B(a.i, google.ima.AdEvent.Type.STARTED, function (b) {
                em(a, b)
            });
            a.h.B(a.i, google.ima.AdEvent.Type.FIRST_QUARTILE, function (b) {
                a.j(new Q("ad-first-quartile", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.MIDPOINT, function (b) {
                a.j(new Q("ad-midpoint", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.THIRD_QUARTILE, function (b) {
                a.j(new Q("ad-third-quartile", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.COMPLETE, function (b) {
                a.j(new Q("ad-complete", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function (b) {
                bm(a, b)
            });
            a.h.B(a.i, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function (b) {
                bm(a, b)
            });
            a.h.B(a.i, google.ima.AdEvent.Type.SKIPPED, function (b) {
                a.j(new Q("ad-skipped", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.VOLUME_CHANGED, function (b) {
                a.j(new Q("ad-volume-changed", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.VOLUME_MUTED,
                function (b) {
                    a.j(new Q("ad-muted", {
                        originalEvent: b
                    }))
                });
            a.h.B(a.i, google.ima.AdEvent.Type.PAUSED, function (b) {
                a.s.j = !0;
                a.j(new Q("ad-paused", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.RESUMED, function (b) {
                a.s.j = !1;
                a.j(new Q("ad-resumed", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, function (b) {
                a.j(new Q("ad-skip-state-changed", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.CLICK, function (b) {
                a.j(new Q("ad-clicked", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i,
                google.ima.AdEvent.Type.AD_PROGRESS,
                function (b) {
                    a.j(new Q("ad-progress", {
                        originalEvent: b
                    }))
                });
            a.h.B(a.i, google.ima.AdEvent.Type.AD_BUFFERING, function (b) {
                a.j(new Q("ad-buffering", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.IMPRESSION, function (b) {
                a.j(new Q("ad-impression", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.DURATION_CHANGE, function (b) {
                a.j(new Q("ad-duration-changed", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.USER_CLOSE, function (b) {
                a.j(new Q("ad-closed", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.LOADED, function (b) {
                a.j(new Q("ad-loaded", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function (b) {
                a.j(new Q("all-ads-completed", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.LINEAR_CHANGED, function (b) {
                a.j(new Q("ad-linear-changed", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.AD_METADATA, function (b) {
                a.j(new Q("ad-metadata", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.LOG, function (b) {
                a.j(new Q("ad-recoverable-error", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.AD_BREAK_READY, function (b) {
                a.j(new Q("ad-break-ready", {
                    originalEvent: b
                }))
            });
            a.h.B(a.i, google.ima.AdEvent.Type.INTERACTION, function (b) {
                a.j(new Q("ad-interaction", {
                    originalEvent: b
                }))
            })
        }

        function em(a, b) {
            var c = b.getAd();
            a.s = new W(c, a.i);
            a.j(new Q("ad-started", {
                ad: a.s,
                sdkAdObject: c,
                originalEvent: b
            }));
            a.m.setAttribute("ad-active", "true");
            a.g.pause()
        }

        function bm(a, b) {
            a.j(new Q("ad-stopped", {
                originalEvent: b
            }));
            a.m.removeAttribute("ad-active");
            a.g.play()
        };

        function X(a, b) {
            this.i = a;
            this.h = null;
            this.g = b
        }
        q = X.prototype;
        q.getDuration = function () {
            return this.h ? this.h.duration : -1
        };
        q.getMinSuggestedDuration = function () {
            return this.getDuration()
        };
        q.getRemainingTime = function () {
            return this.h ? this.h.duration - this.h.currentTime : -1
        };
        q.isPaused = function () {
            return this.g.paused
        };
        q.isSkippable = function () {
            return this.i.isSkippable()
        };
        q.getTimeUntilSkippable = function () {
            var a = this.i.getSkipTimeOffset();
            a = this.getRemainingTime() - a;
            return Math.max(a, 0)
        };
        q.canSkipNow = function () {
            return 0 == this.getTimeUntilSkippable()
        };
        q.skip = function () {
            this.g.currentTime += this.getRemainingTime()
        };
        q.pause = function () {
            return this.g.pause()
        };
        q.play = function () {
            return this.g.play()
        };
        q.getVolume = function () {
            return this.g.volume
        };
        q.setVolume = function (a) {
            this.g.volume = a
        };
        q.isMuted = function () {
            return this.g.muted
        };
        q.resize = function () {};
        q.setMuted = function (a) {
            this.g.muted = a
        };
        q.getSequenceLength = function () {
            var a = this.i.getAdPodInfo();
            return null == a ? 1 : a.getTotalAds()
        };
        q.getPositionInSequence = function () {
            var a = this.i.getAdPodInfo();
            return null == a ? 1 : a.getAdPosition()
        };
        q.release = function () {
            this.g = this.h = this.i = null
        };
        L("shaka.ads.ServerSideAd", X);
        X.prototype.release = X.prototype.release;
        X.prototype.getPositionInSequence = X.prototype.getPositionInSequence;
        X.prototype.getSequenceLength = X.prototype.getSequenceLength;
        X.prototype.setMuted = X.prototype.setMuted;
        X.prototype.resize = X.prototype.resize;
        X.prototype.isMuted = X.prototype.isMuted;
        X.prototype.setVolume = X.prototype.setVolume;
        X.prototype.getVolume = X.prototype.getVolume;
        X.prototype.play = X.prototype.play;
        X.prototype.pause = X.prototype.pause;
        X.prototype.skip = X.prototype.skip;
        X.prototype.canSkipNow = X.prototype.canSkipNow;
        X.prototype.getTimeUntilSkippable = X.prototype.getTimeUntilSkippable;
        X.prototype.isSkippable = X.prototype.isSkippable;
        X.prototype.isPaused = X.prototype.isPaused;
        X.prototype.getRemainingTime = X.prototype.getRemainingTime;
        X.prototype.getMinSuggestedDuration = X.prototype.getMinSuggestedDuration;
        X.prototype.getDuration = X.prototype.getDuration;

        function fm(a, b, c, d) {
            var e = this;
            this.u = a;
            this.g = b;
            this.l = null;
            this.I = NaN;
            this.j = d;
            this.H = !1;
            this.D = this.m = this.s = null;
            this.F = "";
            this.h = new hf;
            a = new google.ima.dai.api.UiSettings;
            a.setLocale(c);
            this.i = new google.ima.dai.api.StreamManager(this.g, this.u, a);
            this.j(new Q("ima-stream-manager-loaded", {
                imaStreamManager: this.i
            }));
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.LOADED, function (f) {
                gm(e, f)
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.ERROR, function () {
                e.F.length ? e.l.resolve(e.F) :
                    e.l.reject("IMA Stream request returned an error and there was no backup asset uri provided.");
                e.l = null
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED, function () {});
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.STARTED, function (f) {
                f = f.getAd();
                e.m = new X(f, e.g);
                e.D && (e.m.h = e.D);
                e.j(new Q("ad-started", {
                    ad: e.m
                }));
                e.u.setAttribute("ad-active", "true")
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED, function () {
                e.u.removeAttribute("ad-active");
                var f = e.g.currentTime;
                e.s && e.s > f && (e.g.currentTime = e.s, e.s = null)
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.AD_PROGRESS, function (f) {
                e.D = f.getStreamData().adProgressData;
                e.m && (e.m.h = e.D)
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.FIRST_QUARTILE, function () {
                e.j(new Q("ad-first-quartile"))
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.MIDPOINT, function () {
                e.j(new Q("ad-midpoint"))
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.THIRD_QUARTILE, function () {
                e.j(new Q("ad-third-quartile"))
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.COMPLETE, function () {
                e.j(new Q("ad-complete"));
                e.j(new Q("ad-stopped"));
                e.u.removeAttribute("ad-active");
                e.m = null
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.SKIPPED, function () {
                e.j(new Q("ad-skipped"));
                e.j(new Q("ad-stopped"))
            });
            this.h.B(this.i, google.ima.dai.api.StreamEvent.Type.CUEPOINTS_CHANGED, function (f) {
                var g = f.getStreamData();
                f = [];
                g = t(g.cuepoints);
                for (var h = g.next(); !h.done; h = g.next()) h = h.value, f.push(new cm(h.start, h.end));
                e.j(new Q("ad-cue-points-changed", {
                    cuepoints: f
                }))
            })
        }
        fm.prototype.stop = function () {
            this.i.reset();
            this.F = "";
            this.s = null
        };
        fm.prototype.onCueMetadataChange = function (a) {
            if (a.key && a.data) {
                var b = {};
                b[a.key] = a.data;
                this.i.onTimedMetadata(b)
            }
        };

        function gm(a, b) {
            a.j(new Q("ads-loaded", {
                loadTime: Date.now() / 1E3 - a.I
            }));
            var c = b.getStreamData().url;
            a.l.resolve(c);
            a.l = null;
            a.H || a.h.B(a.g, "seeked", function () {
                var d = a.g.currentTime;
                if (0 != d) {
                    a.i.streamTimeForContentTime(d);
                    var e = a.i.previousCuePointForStreamTime(d);
                    e && !e.played && (a.s = d, a.g.currentTime = e.start)
                }
            })
        };

        function Y() {
            Yg.call(this);
            this.g = this.h = null;
            this.j = new Yl;
            this.i = navigator.language
        }
        ra(Y, Yg);
        q = Y.prototype;
        q.setLocale = function (a) {
            this.i = a
        };
        q.initClientSide = function (a, b) {
            var c = this;
            if (!window.google || !google.ima || !google.ima.AdsLoader) throw new O(2, 10, 1E4);
            this.h = new Zl(a, b, this.i, function (d) {
                if (d && d.type) switch (d.type) {
                case "ads-loaded":
                    c.j.h.push(d.loadTime);
                    break;
                case "ad-started":
                    c.j.g++;
                    break;
                case "ad-complete":
                    c.j.i++;
                    break;
                case "ad-skipped":
                    c.j.j++
                }
                c.dispatchEvent(d)
            })
        };
        q.onAssetUnload = function () {
            this.h && this.h.stop();
            this.dispatchEvent(new Q("ad-stopped"));
            this.j = new Yl
        };
        q.requestClientSideAds = function (a) {
            if (!this.h) throw new O(1, 10, 10001);
            var b = this.h;
            b.u = Date.now() / 1E3;
            b.l.requestAds(a)
        };
        q.initServerSide = function (a, b) {
            var c = this;
            if (!window.google || !google.ima || !google.ima.dai) throw new O(2, 10, 10002);
            this.g = new fm(a, b, this.i, function (d) {
                if (d && d.type) switch (d.type) {
                case "ads-loaded":
                    c.j.h.push(d.loadTime);
                    break;
                case "ad-started":
                    c.j.g++;
                    break;
                case "ad-complete":
                    c.j.i++;
                    break;
                case "ad-skipped":
                    c.j.j++
                }
                c.dispatchEvent(d)
            })
        };
        q.requestServerSideStream = function (a, b) {
            b = void 0 === b ? "" : b;
            if (!this.g) throw new O(1, 10, 10003);
            a.adTagParameters || (a.adTagParameters = {});
            var c = a.adTagParameters;
            (c.mpt || c.mpv) && Ua('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
            a.adTagParameters.mpt = "shaka-player";
            a.adTagParameters.mpv = "v3.1.1";
            c = this.g;
            var d = b;
            c.l ? c = Promise.reject(new O(1, 10, 10004)) : (a instanceof google.ima.dai.api.LiveStreamRequest &&
                (c.H = !0), c.l = new He, c.i.requestStream(a), c.F = d || "", c.I = Date.now() / 1E3, c = c.l);
            return c
        };
        q.replaceServerSideAdTagParameters = function (a) {
            if (!this.g) throw new O(1, 10, 10003);
            (a.mpt || a.mpv) && Ua('You have attempted to set "mpt" and/or "mpv" parameters of the ad tag. Please note that those parameters are used for Shaka adoption tracking and will be overriden.');
            a.mpt = "Shaka Player";
            a.mpv = "v3.1.1";
            this.g.i.replaceAdTagParameters(a)
        };
        q.getStats = function () {
            var a = this.j;
            return {
                loadTimes: a.h,
                started: a.g,
                playedCompletely: a.i,
                skipped: a.j
            }
        };
        q.onDashTimedMetadata = function (a) {
            if (this.g && "urn:google:dai:2018" == a.schemeIdUri) {
                var b = a.schemeIdUri,
                    c = a.eventElement ? a.eventElement.getAttribute("messageData") : null;
                this.g.i.processMetadata(b, c, a.startTime)
            }
        };
        q.onHlsTimedMetadata = function (a, b) {
            this.g && this.g.i.processMetadata("ID3", a.data, b)
        };
        q.onCueMetadataChange = function (a) {
            if (this.g) this.g.onCueMetadataChange(a)
        };
        L("shaka.ads.AdManager", Y);
        Y.prototype.onCueMetadataChange = Y.prototype.onCueMetadataChange;
        Y.prototype.onHlsTimedMetadata = Y.prototype.onHlsTimedMetadata;
        Y.prototype.onDashTimedMetadata = Y.prototype.onDashTimedMetadata;
        Y.prototype.getStats = Y.prototype.getStats;
        Y.prototype.replaceServerSideAdTagParameters = Y.prototype.replaceServerSideAdTagParameters;
        Y.prototype.requestServerSideStream = Y.prototype.requestServerSideStream;
        Y.prototype.initServerSide = Y.prototype.initServerSide;
        Y.prototype.requestClientSideAds = Y.prototype.requestClientSideAds;
        Y.prototype.onAssetUnload = Y.prototype.onAssetUnload;
        Y.prototype.initClientSide = Y.prototype.initClientSide;
        Y.prototype.setLocale = Y.prototype.setLocale;

        function cm(a, b) {
            this.start = a;
            this.end = void 0 === b ? null : b
        }
        Y.ADS_LOADED = "ads-loaded";
        Y.AD_STARTED = "ad-started";
        Y.AD_FIRST_QUARTILE = "ad-first-quartile";
        Y.AD_MIDPOINT = "ad-midpoint";
        Y.AD_THIRD_QUARTILE = "ad-third-quartile";
        Y.AD_COMPLETE = "ad-complete";
        Y.AD_STOPPED = "ad-stopped";
        Y.AD_SKIPPED = "ad-skipped";
        Y.AD_VOLUME_CHANGED = "ad-volume-changed";
        Y.AD_MUTED = "ad-muted";
        Y.AD_PAUSED = "ad-paused";
        Y.AD_RESUMED = "ad-resumed";
        Y.AD_SKIP_STATE_CHANGED = "ad-skip-state-changed";
        Y.CUEPOINTS_CHANGED = "ad-cue-points-changed";
        Y.IMA_AD_MANAGER_LOADED = "ima-ad-manager-loaded";
        Y.IMA_STREAM_MANAGER_LOADED = "ima-stream-manager-loaded";
        Y.AD_CLICKED = "ad-clicked";
        Y.AD_PROGRESS = "ad-progress";
        Y.AD_BUFFERING = "ad-buffering";
        Y.AD_IMPRESSION = "ad-impression";
        Y.AD_DURATION_CHANGED = "ad-duration-changed";
        Y.AD_CLOSED = "ad-closed";
        Y.AD_LOADED = "ad-loaded";
        Y.ALL_ADS_COMPLETED = "all-ads-completed";
        Y.AD_LINEAR_CHANGED = "ad-linear-changed";
        Y.AD_METADATA = "ad-metadata";
        Y.AD_RECOVERABLE_ERROR = "ad-recoverable-error";
        Y.AD_BREAK_READY = "ad-break-ready";
        Y.AD_INTERACTION = "ad-interaction";
        nk = function () {
            return new Y
        };

        function hm(a) {
            return JSON.stringify(a, function (b, c) {
                if ("function" != typeof c) {
                    if (c instanceof Event || c instanceof Q) {
                        var d = {};
                        for (f in c) {
                            var e = c[f];
                            e && "object" == typeof e ? "detail" == f && (d[f] = e) : f in Event || (d[f] = e)
                        }
                        return d
                    }
                    if (c instanceof Error) {
                        var f = new Set(["name", "message", "stack"]);
                        for (d in c) f.add(d);
                        e = t(Object.getOwnPropertyNames(c));
                        for (d = e.next(); !d.done; d = e.next()) f.add(d.value);
                        e = {};
                        f = t(f);
                        for (d = f.next(); !d.done; d = f.next()) d = d.value, e[d] = c[d];
                        f = {
                            __type__: "Error",
                            contents: e
                        }
                    } else if (c instanceof TimeRanges)
                        for (f = {
                                __type__: "TimeRanges",
                                length: c.length,
                                start: [],
                                end: []
                            }, d = t(ke(c)), e = d.next(); !e.done; e = d.next()) {
                            e = e.value;
                            var g = e.end;
                            f.start.push(e.start);
                            f.end.push(g)
                        } else f = c instanceof Uint8Array ? {
                            __type__: "Uint8Array",
                            entries: Array.from(c)
                        } : "number" == typeof c ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
                    return f
                }
            })
        }

        function im(a) {
            return JSON.parse(a, function (b, c) {
                if ("NaN" == c) var d = NaN;
                else if ("-Infinity" == c) d = -Infinity;
                else if ("Infinity" == c) d = Infinity;
                else if (c && "object" == typeof c && "TimeRanges" == c.__type__) d = jm(c);
                else if (c && "object" == typeof c && "Uint8Array" == c.__type__) d = new Uint8Array(c.entries);
                else if (c && "object" == typeof c && "Error" == c.__type__) {
                    d = c.contents;
                    var e = Error(d.message),
                        f;
                    for (f in d) e[f] = d[f];
                    d = e
                } else d = c;
                return d
            })
        }

        function jm(a) {
            return {
                length: a.length,
                start: function (b) {
                    return a.start[b]
                },
                end: function (b) {
                    return a.end[b]
                }
            }
        }
        var km = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
            lm = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
            mm = ["loop", "playbackRate"],
            nm = ["pause", "play"],
            om = {
                getAssetUri: 2,
                getAudioLanguages: 4,
                getAudioLanguagesAndRoles: 4,
                getBufferedInfo: 2,
                getConfiguration: 2,
                getExpiration: 2,
                getKeyStatuses: 2,
                getPlaybackRate: 2,
                getTextLanguages: 4,
                getTextLanguagesAndRoles: 4,
                getTextTracks: 2,
                getStats: 5,
                getVariantTracks: 2,
                getImageTracks: 2,
                getThumbnails: 2,
                isAudioOnly: 10,
                isBuffering: 1,
                isInProgress: 1,
                isLive: 10,
                isTextTrackVisible: 1,
                keySystem: 10,
                seekRange: 1,
                getLoadMode: 10
            },
            pm = {
                getPlayheadTimeAsDate: 1,
                getPresentationStartTimeAsDate: 20
            },
            qm = [
                ["getConfiguration", "configure"]
            ],
            rm = [
                ["isTextTrackVisible", "setTextTrackVisibility"]
            ],
            sm = "addTextTrack addTextTrackAsync cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay".split(" "),
            tm = ["attach", "detach", "load", "unload"];

        function um(a, b, c, d, e, f) {
            var g = this;
            this.L = a;
            this.j = new P(b);
            this.ca = c;
            this.D = !1;
            this.u = d;
            this.I = e;
            this.S = f;
            this.h = this.m = !1;
            this.X = "";
            this.s = null;
            this.F = function () {
                return vm(g)
            };
            this.H = function (h, k) {
                var l = im(k);
                switch (l.type) {
                case "event":
                    var m = l.targetName;
                    l = l.event;
                    l = new Q(l.type, l);
                    g.u(m, l);
                    break;
                case "update":
                    m = l.update;
                    for (var n in m) {
                        l = g.g[n] || {};
                        for (var p in m[n]) l[p] = m[n][p]
                    }
                    g.D && (g.ca(), g.D = !1);
                    break;
                case "asyncComplete":
                    if (n = l.id, l = l.error, p = g.i[n], delete g.i[n], p)
                        if (l) {
                            n = new O(l.severity,
                                l.category, l.code);
                            for (m in l) n[m] = l[m];
                            p.reject(n)
                        } else p.resolve()
                }
            };
            this.g = {
                video: {},
                player: {}
            };
            this.N = 0;
            this.i = {};
            this.l = null;
            wm.add(this)
        }
        q = um.prototype;
        q.destroy = function () {
            wm["delete"](this);
            xm(this);
            ym && zm(this);
            this.j && (this.j.stop(), this.j = null);
            this.I = this.u = null;
            this.h = this.m = !1;
            this.H = this.F = this.l = this.i = this.g = this.s = null;
            return Promise.resolve()
        };
        q.sa = function () {
            return this.h
        };
        q.Bd = function () {
            return this.X
        };
        q.init = function () {
            if (this.L.length)
                if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
                    this.m = !0;
                    this.j.bc();
                    var a = new chrome.cast.SessionRequest(this.L);
                    a = new chrome.cast.ApiConfig(a, function (b) {
                        for (var c = t(wm), d = c.next(); !d.done; d = c.next()) Am(d.value, b)
                    }, function (b) {
                        for (var c = t(wm), d = c.next(); !d.done; d = c.next()) d = d.value, Bm = "available" == b, d.j.bc()
                    }, "origin_scoped");
                    chrome.cast.initialize(a, function () {}, function () {});
                    Bm && this.j.T(Cm);
                    (a = ym) && a.status != chrome.cast.SessionStatus.STOPPED ? Am(this,
                        a) : ym = null
                } else window.__onGCastApiAvailable || (window.__onGCastApiAvailable = Dm), window.__onGCastApiAvailable != Dm && Ua("A global Cast SDK hook is already installed! Shaka Player will be unable to receive a notification when the Cast SDK is ready.")
        };
        q.Id = function (a) {
            this.s = a;
            this.h && Em(this, {
                type: "appData",
                appData: this.s
            })
        };
        q.cast = function (a) {
            var b = this;
            return K(function (c) {
                if (!b.m) throw new O(1, 8, 8E3);
                if (!Bm) throw new O(1, 8, 8001);
                if (b.h) throw new O(1, 8, 8002);
                b.l = new He;
                chrome.cast.requestSession(function (d) {
                    return Fm(b, a, d)
                }, function (d) {
                    return Gm(b, d)
                });
                return v(c, b.l, 0)
            })
        };

        function Hm(a) {
            if (a.h) {
                var b = a.S();
                chrome.cast.requestSession(function (c) {
                    return Fm(a, b, c)
                }, function (c) {
                    return Gm(a, c)
                })
            }
        }
        q.ub = function () {
            if (this.h) {
                xm(this);
                if (ym) {
                    zm(this);
                    try {
                        ym.stop(function () {}, function () {})
                    } catch (a) {}
                    ym = null
                }
                vm(this)
            }
        };
        q.get = function (a, b) {
            var c = this;
            if ("video" == a) {
                if (nm.includes(b)) return function (d) {
                    for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                    return c.ie.apply(c, [a, b].concat(ja(e)))
                }
            } else if ("player" == a) {
                if (pm[b] && !this.get("player", "isLive")()) return function () {};
                if (sm.includes(b)) return function (d) {
                    for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                    return c.ie.apply(c, [a, b].concat(ja(e)))
                };
                if (tm.includes(b)) return function (d) {
                    for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                    return c.wf.apply(c,
                        [a, b].concat(ja(e)))
                };
                if (om[b]) return function () {
                    return c.g[a][b]
                }
            }
            return this.g[a][b]
        };
        q.set = function (a, b, c) {
            this.g[a][b] = c;
            Em(this, {
                type: "set",
                targetName: a,
                property: b,
                value: c
            })
        };

        function Fm(a, b, c) {
            ym = c;
            c.addUpdateListener(a.F);
            c.addMessageListener("urn:x-cast:com.google.shaka.v2", a.H);
            vm(a);
            Em(a, {
                type: "init",
                initState: b,
                appData: a.s
            });
            a.l.resolve()
        }

        function Gm(a, b) {
            var c = 8003;
            switch (b.code) {
            case "cancel":
                c = 8004;
                break;
            case "timeout":
                c = 8005;
                break;
            case "receiver_unavailable":
                c = 8006
            }
            a.l.reject(new O(2, 8, c, b))
        }
        q.ie = function (a, b, c) {
            for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
            Em(this, {
                type: "call",
                targetName: a,
                methodName: b,
                args: d
            })
        };
        q.wf = function (a, b, c) {
            for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
            e = new He;
            var f = this.N.toString();
            this.N++;
            this.i[f] = e;
            try {
                Em(this, {
                    type: "asyncCall",
                    targetName: a,
                    methodName: b,
                    args: d,
                    id: f
                })
            } catch (g) {
                e.reject(g)
            }
            return e
        };

        function Am(a, b) {
            var c = a.S();
            a.l = new He;
            a.D = !0;
            Fm(a, c, b)
        }

        function zm(a) {
            var b = ym;
            b.removeUpdateListener(a.F);
            b.removeMessageListener("urn:x-cast:com.google.shaka.v2", a.H)
        }

        function vm(a) {
            var b = ym ? "connected" == ym.status : !1;
            if (a.h && !b) {
                a.I();
                for (var c in a.g) a.g[c] = {};
                xm(a)
            }
            a.h = b;
            a.X = b ? ym.receiver.friendlyName : "";
            a.j.bc()
        }

        function xm(a) {
            for (var b in a.i) {
                var c = a.i[b];
                delete a.i[b];
                c.reject(new O(1, 7, 7E3))
            }
        }

        function Em(a, b) {
            var c = hm(b),
                d = ym;
            try {
                d.sendMessage("urn:x-cast:com.google.shaka.v2", c, function () {}, Xa)
            } catch (e) {
                throw c = new O(2, 8, 8005, e), d = new Q("error", {
                    detail: c
                }), a.u("player", d), a.ub(), c;
            }
        }
        var Cm = .02,
            Bm = !1,
            ym = null,
            wm = new Set;

        function Dm(a) {
            if (a) {
                a = t(wm);
                for (var b = a.next(); !b.done; b = a.next()) b.value.init()
            }
        };

        function Im(a, b, c) {
            Yg.call(this);
            var d = this;
            this.j = a;
            this.i = b;
            this.h = this.s = this.l = this.u = this.m = null;
            this.F = c;
            this.D = new Map;
            this.g = new um(c, function () {
                return Jm(d)
            }, function () {
                return Km(d)
            }, function (e, f) {
                return Lm(d, e, f)
            }, function () {
                return Mm(d)
            }, function () {
                return Nm(d)
            });
            Om(this)
        }
        ra(Im, Yg);
        q = Im.prototype;
        q.destroy = function (a) {
            a && this.g.ub();
            this.h && (this.h.release(), this.h = null);
            a = [];
            this.i && (a.push(this.i.destroy()), this.i = null);
            this.g && (a.push(this.g.destroy()), this.g = null);
            this.u = this.m = this.j = null;
            return Promise.all(a)
        };
        q.ef = function () {
            return this.m
        };
        q.Xe = function () {
            return this.u
        };
        q.Ae = function () {
            return this.g.m && Bm
        };
        q.sa = function () {
            return this.g.sa()
        };
        q.Bd = function () {
            return this.g.Bd()
        };
        q.cast = function () {
            var a = this,
                b;
            return K(function (c) {
                return 1 == c.g ? (b = Nm(a), v(c, a.g.cast(b), 2)) : a.i ? v(c, a.i.Pd(), 0) : c["return"]()
            })
        };
        q.Id = function (a) {
            this.g.Id(a)
        };
        q.Hf = function () {
            Hm(this.g)
        };
        q.ub = function () {
            this.g.ub()
        };
        q.De = function (a) {
            var b = this;
            return K(function (c) {
                if (1 == c.g) {
                    if (a == b.F) return c["return"]();
                    b.F = a;
                    b.g.ub();
                    return v(c, b.g.destroy(), 2)
                }
                b.g = null;
                b.g = new um(a, function () {
                    return Jm(b)
                }, function () {
                    return Km(b)
                }, function (d, e) {
                    return Lm(b, d, e)
                }, function () {
                    return Mm(b)
                }, function () {
                    return Nm(b)
                });
                b.g.init();
                z(c)
            })
        };

        function Om(a) {
            a.g.init();
            a.h = new hf;
            for (var b = t(km), c = b.next(); !c.done; c = b.next()) a.h.B(a.j, c.value, function (f) {
                a.g.sa() || (f = new Q(f.type, f), a.l.dispatchEvent(f))
            });
            for (var d in Wl) a.h.B(a.i, Wl[d], function (f) {
                a.g.sa() || a.s.dispatchEvent(f)
            });
            a.m = {};
            b = {};
            for (var e in a.j) b.Hb = e, Object.defineProperty(a.m, b.Hb, {
                configurable: !1,
                enumerable: !0,
                get: function (f) {
                    return function () {
                        return Pm(a, f.Hb)
                    }
                }(b),
                set: function (f) {
                    return function (g) {
                        var h = f.Hb;
                        a.g.sa() ? a.g.set("video", h, g) : a.j[h] = g
                    }
                }(b)
            }), b = {
                Hb: b.Hb
            };
            a.u = {};
            Qm(a, function (f) {
                Object.defineProperty(a.u, f, {
                    configurable: !1,
                    enumerable: !0,
                    get: function () {
                        return Rm(a, f)
                    }
                })
            });
            Sm(a);
            a.l = new Yg;
            a.l.nc = a.m;
            a.s = new Yg;
            a.s.nc = a.u
        }

        function Sm(a) {
            var b = new Map;
            Qm(a, function (c, d) {
                if (b.has(d)) {
                    var e = b.get(d);
                    c.length < e.length ? a.D.set(c, e) : a.D.set(e, c)
                } else b.set(d, c)
            })
        }

        function Qm(a, b) {
            function c(l) {
                return "constructor" == l || "function" != typeof d[l] ? !1 : !e.has(l)
            }
            var d = a.i,
                e = new Set;
            for (f in d) c(f) && (e.add(f), b(f, d[f]));
            var f = Object.getPrototypeOf(d);
            for (var g = Object.getPrototypeOf({}); f && f != g;) {
                for (var h = t(Object.getOwnPropertyNames(f)), k = h.next(); !k.done; k = h.next()) k = k.value, c(k) && (e.add(k), b(k, d[k]));
                f = Object.getPrototypeOf(f)
            }
        }

        function Nm(a) {
            var b = {
                video: {},
                player: {},
                playerAfterLoad: {},
                manifest: a.i.hd(),
                startTime: null
            };
            a.j.pause();
            for (var c = t(mm), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.j[d];
            a.j.ended || (b.startTime = a.j.currentTime);
            c = t(qm);
            for (d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = e[1];
                e = a.i[e[0]]();
                b.player[d] = e
            }
            c = t(rm);
            for (d = c.next(); !d.done; d = c.next()) e = d.value, d = e[1], e = a.i[e[0]](), b.playerAfterLoad[d] = e;
            return b
        }

        function Jm(a) {
            var b = new Q("caststatuschanged");
            a.dispatchEvent(b)
        }

        function Km(a) {
            var b = new Q(a.m.paused ? "pause" : "play");
            a.l.dispatchEvent(b)
        }

        function Mm(a) {
            for (var b = t(qm), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d[1];
                d = a.g.get("player", d[0])();
                a.i[c](d)
            }
            var e = a.g.get("player", "getAssetUri")();
            c = a.g.get("video", "ended");
            b = Promise.resolve();
            var f = a.j.autoplay;
            d = null;
            c || (d = a.g.get("video", "currentTime"));
            e && (a.j.autoplay = !1, b = a.i.load(e, d));
            var g = {};
            c = t(mm);
            for (d = c.next(); !d.done; d = c.next()) d = d.value, g[d] = a.g.get("video", d);
            b.then(function () {
                if (a.j) {
                    for (var h = t(mm), k = h.next(); !k.done; k = h.next()) k = k.value, a.j[k] = g[k];
                    h = t(rm);
                    for (k =
                        h.next(); !k.done; k = h.next()) {
                        var l = k.value;
                        k = l[1];
                        l = a.g.get("player", l[0])();
                        a.i[k](l)
                    }
                    a.j.autoplay = f;
                    e && a.j.play()
                }
            }, function (h) {
                h = new Q(Sl, {
                    detail: h
                });
                a.i.dispatchEvent(h)
            })
        }

        function Pm(a, b) {
            if ("addEventListener" == b) return function (d, e, f) {
                return a.l.addEventListener(d, e, f)
            };
            if ("removeEventListener" == b) return function (d, e, f) {
                return a.l.removeEventListener(d, e, f)
            };
            if (a.g.sa() && 0 == Object.keys(a.g.g.video).length) {
                var c = a.j[b];
                if ("function" != typeof c) return c
            }
            return a.g.sa() ? a.g.get("video", b) : (c = a.j[b], "function" == typeof c && (c = c.bind(a.j)), c)
        }

        function Rm(a, b) {
            a.D.has(b) && (b = a.D.get(b));
            if ("addEventListener" == b) return function (c, d, e) {
                return a.s.addEventListener(c, d, e)
            };
            if ("removeEventListener" == b) return function (c, d, e) {
                return a.s.removeEventListener(c, d, e)
            };
            if ("getMediaElement" == b) return function () {
                return a.m
            };
            if ("getSharedConfiguration" == b) return a.g.get("player", "getConfiguration");
            if ("getNetworkingEngine" == b) return function () {
                return a.i.Rb()
            };
            if ("getAdManager" == b) return function () {
                return a.i.Yd()
            };
            if ("setVideoContainer" == b) return function (c) {
                return a.i.re(c)
            };
            if (a.g.sa()) {
                if ("getManifest" == b || "drmInfo" == b) return function () {
                    Ua(b + "() does not work while casting!");
                    return null
                };
                if ("attach" == b || "detach" == b) return function () {
                    Ua(b + "() does not work while casting!");
                    return Promise.resolve()
                }
            }
            return a.g.sa() && 0 == Object.keys(a.g.g.video).length && om[b] || !a.g.sa() ? a.i[b].bind(a.i) : a.g.get("player", b)
        }

        function Lm(a, b, c) {
            a.g.sa() && ("video" == b ? a.l.dispatchEvent(c) : "player" == b && a.s.dispatchEvent(c))
        }
        L("shaka.cast.CastProxy", Im);
        Im.prototype.changeReceiverId = Im.prototype.De;
        Im.prototype.forceDisconnect = Im.prototype.ub;
        Im.prototype.suggestDisconnect = Im.prototype.Hf;
        Im.prototype.setAppData = Im.prototype.Id;
        Im.prototype.cast = Im.prototype.cast;
        Im.prototype.receiverName = Im.prototype.Bd;
        Im.prototype.isCasting = Im.prototype.sa;
        Im.prototype.canCast = Im.prototype.Ae;
        Im.prototype.getPlayer = Im.prototype.Xe;
        Im.prototype.getVideo = Im.prototype.ef;
        Im.prototype.destroy = Im.prototype.destroy;

        function Tm(a, b, c, d) {
            Yg.call(this);
            var e = this;
            this.g = a;
            this.i = b;
            this.h = new hf;
            this.N = {
                video: a,
                player: b
            };
            this.H = c || function () {};
            this.S = d || function (f) {
                return f
            };
            this.j = null;
            this.I = !1;
            this.s = !0;
            this.m = 0;
            this.F = !1;
            this.D = !0;
            this.u = this.l = null;
            this.L = new P(function () {
                Um(e)
            });
            Zm(this)
        }
        ra(Tm, Yg);
        q = Tm.prototype;
        q.isConnected = function () {
            return this.I
        };
        q.hf = function () {
            return this.s
        };
        q.Df = function (a) {
            this.j = a
        };
        q.Ge = function () {
            this.j = null
        };
        q.Ef = function (a) {
            this.j || (this.j = {
                metadataType: cast.receiver.media.MetadataType.GENERIC
            });
            this.j.title = a
        };
        q.Cf = function (a) {
            this.j || (this.j = {
                metadataType: cast.receiver.media.MetadataType.GENERIC
            });
            this.j.images = [{
                url: a
            }]
        };
        q.Bf = function (a) {
            this.j || (this.j = {});
            this.j.artist = a;
            this.j.metadataType = cast.receiver.media.MetadataType.MUSIC_TRACK
        };
        q.destroy = function () {
            var a = this,
                b, c;
            return K(function (d) {
                if (1 == d.g) return a.h && (a.h.release(), a.h = null), b = [], a.i && (b.push(a.i.destroy()), a.i = null), a.L && (a.L.stop(), a.L = null), a.g = null, a.N = null, a.H = null, a.I = !1, a.s = !0, a.l = null, a.u = null, v(d, Promise.all(b), 2);
                c = cast.receiver.CastReceiverManager.getInstance();
                c.stop();
                z(d)
            })
        };

        function Zm(a) {
            var b = cast.receiver.CastReceiverManager.getInstance();
            b.onSenderConnected = function () {
                return $m(a)
            };
            b.onSenderDisconnected = function () {
                return $m(a)
            };
            b.onSystemVolumeChanged = function () {
                var e = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
                e && an(a, {
                    type: "update",
                    update: {
                        video: {
                            volume: e.level,
                            muted: e.muted
                        }
                    }
                }, a.l);
                an(a, {
                    type: "event",
                    targetName: "video",
                    event: {
                        type: "volumechange"
                    }
                }, a.l)
            };
            a.u = b.getCastMessageBus("urn:x-cast:com.google.cast.media");
            a.u.onMessage = function (e) {
                return bn(a,
                    e)
            };
            a.l = b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
            a.l.onMessage = function (e) {
                return cn(a, e)
            };
            b.start();
            b = t(km);
            for (var c = b.next(); !c.done; c = b.next()) a.h.B(a.g, c.value, function (e) {
                return dn(a, "video", e)
            });
            for (var d in Wl) a.h.B(a.i, Wl[d], function (e) {
                return dn(a, "player", e)
            });
            cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ? a.i.Kd(3840, 2160) : a.i.Kd(1920, 1080);
            a.h.B(a.g, "loadeddata", function () {
                a.F = !0
            });
            a.h.B(a.i, "loading", function () {
                a.s = !1;
                en(a)
            });
            a.h.B(a.g, "playing", function () {
                a.s = !1;
                en(a)
            });
            a.h.B(a.g, "pause", function () {
                en(a)
            });
            a.h.B(a.i, "unloading", function () {
                a.s = !0;
                en(a)
            });
            a.h.B(a.g, "ended", function () {
                (new P(function () {
                    a.g && a.g.ended && (a.s = !0, en(a))
                })).T(fn)
            })
        }

        function $m(a) {
            a.m = 0;
            a.D = !0;
            a.I = 0 != cast.receiver.CastReceiverManager.getInstance().getSenders().length;
            en(a)
        }

        function en(a) {
            var b;
            K(function (c) {
                if (1 == c.g) return v(c, Promise.resolve(), 2);
                if (!a.i) return c["return"]();
                b = new Q("caststatuschanged");
                a.dispatchEvent(b);
                gn(a) || hn(a);
                z(c)
            })
        }

        function jn(a, b, c) {
            var d, e, f, g, h, k, l, m, n, p;
            K(function (r) {
                switch (r.g) {
                case 1:
                    for (d in b.player) e = b.player[d], a.i[d](e);
                    a.H(c);
                    f = a.g.autoplay;
                    return b.manifest ? (a.g.autoplay = !1, B(r, 5), v(r, a.i.load(b.manifest, b.startTime), 7)) : v(r, Promise.resolve(), 3);
                case 7:
                    wa(r, 3);
                    break;
                case 5:
                    return g = E(r), h = Sl, k = new Q(h, {
                        detail: g
                    }), a.i && a.i.dispatchEvent(k), r["return"]();
                case 3:
                    if (!a.i) return r["return"]();
                    for (l in b.video) m = b.video[l], a.g[l] = m;
                    for (n in b.playerAfterLoad) p = b.playerAfterLoad[n], a.i[n](p);
                    a.g.autoplay =
                        f;
                    b.manifest && (a.g.play(), hn(a));
                    z(r)
                }
            })
        }

        function dn(a, b, c) {
            a.i && (Um(a), an(a, {
                type: "event",
                targetName: b,
                event: c
            }, a.l))
        }

        function Um(a) {
            a.L.T(kn);
            for (var b = {
                    video: {},
                    player: {}
                }, c = t(lm), d = c.next(); !d.done; d = c.next()) d = d.value, b.video[d] = a.g[d];
            if (a.i.Y())
                for (var e in pm) 0 == a.m % pm[e] && (b.player[e] = a.i[e]());
            for (var f in om) 0 == a.m % om[f] && (b.player[f] = a.i[f]());
            if (c = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) b.video.volume = c.level, b.video.muted = c.muted;
            a.F && (a.m += 1);
            an(a, {
                type: "update",
                update: b
            }, a.l);
            gn(a)
        }

        function gn(a) {
            return a.D && (a.g.duration || a.i.Y()) ? (ln(a), a.D = !1, !0) : !1
        }

        function ln(a, b) {
            var c = {
                contentId: a.i.hd(),
                streamType: a.i.Y() ? "LIVE" : "BUFFERED",
                contentType: ""
            };
            a.i.Y() || (c.duration = a.g.duration);
            a.j && (c.metadata = a.j);
            hn(a, void 0 === b ? 0 : b, c)
        }

        function cn(a, b) {
            var c = im(b.data);
            switch (c.type) {
            case "init":
                a.m = 0;
                a.F = !1;
                a.D = !0;
                jn(a, c.initState, c.appData);
                Um(a);
                break;
            case "appData":
                a.H(c.appData);
                break;
            case "set":
                var d = c.targetName,
                    e = c.property;
                c = c.value;
                if ("video" == d) {
                    var f = cast.receiver.CastReceiverManager.getInstance();
                    if ("volume" == e) {
                        f.setSystemVolumeLevel(c);
                        break
                    } else if ("muted" == e) {
                        f.setSystemVolumeMuted(c);
                        break
                    }
                }
                a.N[d][e] = c;
                break;
            case "call":
                d = a.N[c.targetName];
                d[c.methodName].apply(d, c.args);
                break;
            case "asyncCall":
                d = c.targetName;
                e =
                    c.methodName;
                "player" == d && "load" == e && (a.m = 0, a.F = !1);
                var g = c.id,
                    h = b.senderId;
                f = a.N[d];
                c = f[e].apply(f, c.args);
                "player" == d && "load" == e && (c = c.then(function () {
                    a.D = !0
                }));
                c.then(function () {
                    return mn(a, h, g, null)
                }, function (k) {
                    return mn(a, h, g, k)
                })
            }
        }

        function bn(a, b) {
            var c = im(b.data);
            switch (c.type) {
            case "PLAY":
                a.g.play();
                hn(a);
                break;
            case "PAUSE":
                a.g.pause();
                hn(a);
                break;
            case "SEEK":
                var d = c.currentTime,
                    e = c.resumeState;
                null != d && (a.g.currentTime = Number(d));
                e && "PLAYBACK_START" == e ? (a.g.play(), hn(a)) : e && "PLAYBACK_PAUSE" == e && (a.g.pause(), hn(a));
                break;
            case "STOP":
                a.i.Pd().then(function () {
                    a.i && hn(a)
                });
                break;
            case "GET_STATUS":
                ln(a, Number(c.requestId));
                break;
            case "VOLUME":
                e = c.volume;
                d = e.level;
                e = e.muted;
                var f = a.g.volume,
                    g = a.g.muted;
                null != d && (a.g.volume = Number(d));
                null != e && (a.g.muted = e);
                f == a.g.volume && g == a.g.muted || hn(a);
                break;
            case "LOAD":
                a.m = 0;
                a.F = !1;
                a.D = !1;
                d = c.media;
                e = c.currentTime;
                f = a.S(d.contentId);
                g = c.autoplay || !0;
                a.H(d.customData);
                g && (a.g.autoplay = !0);
                a.i.load(f, e).then(function () {
                    a.i && ln(a)
                })["catch"](function (h) {
                    var k = "LOAD_FAILED";
                    7 == h.category && 7E3 == h.code && (k = "LOAD_CANCELLED");
                    an(a, {
                        requestId: Number(c.requestId),
                        type: k
                    }, a.u)
                });
                break;
            default:
                an(a, {
                    requestId: Number(c.requestId),
                    type: "INVALID_REQUEST",
                    reason: "INVALID_COMMAND"
                }, a.u)
            }
        }

        function mn(a, b, c, d) {
            a.i && an(a, {
                type: "asyncComplete",
                id: c,
                error: d
            }, a.l, b)
        }

        function an(a, b, c, d) {
            a.I && (a = hm(b), d ? c.getCastChannel(d).send(a) : c.broadcast(a))
        }

        function hn(a, b, c) {
            c = void 0 === c ? null : c;
            var d = {
                mediaSessionId: 0,
                playbackRate: a.g.playbackRate,
                playerState: a.s ? nn : a.i.md() ? on : a.g.paused ? pn : qn,
                currentTime: a.g.currentTime,
                supportedMediaCommands: 63,
                volume: {
                    level: a.g.volume,
                    muted: a.g.muted
                }
            };
            c && (d.media = c);
            an(a, {
                requestId: void 0 === b ? 0 : b,
                type: "MEDIA_STATUS",
                status: [d]
            }, a.u)
        }
        L("shaka.cast.CastReceiver", Tm);
        Tm.prototype.destroy = Tm.prototype.destroy;
        Tm.prototype.setContentArtist = Tm.prototype.Bf;
        Tm.prototype.setContentImage = Tm.prototype.Cf;
        Tm.prototype.setContentTitle = Tm.prototype.Ef;
        Tm.prototype.clearContentMetadata = Tm.prototype.Ge;
        Tm.prototype.setContentMetadata = Tm.prototype.Df;
        Tm.prototype.isIdle = Tm.prototype.hf;
        Tm.prototype.isConnected = Tm.prototype.isConnected;
        var kn = .5,
            fn = 5,
            nn = "IDLE",
            qn = "PLAYING",
            on = "BUFFERING",
            pn = "PAUSED";

        function rn(a) {
            var b = this;
            this.g = [];
            this.h = [];
            this.data = [];
            (new Qb).box("moov", Ub).U("pssh", function (c) {
                if (!(1 < c.version)) {
                    var d = qb(c.reader.R, -12, c.size);
                    b.data.push(d);
                    b.g.push(pc(c.reader.Za(16)));
                    if (0 < c.version) {
                        d = c.reader.M();
                        d = t(jb(d));
                        for (var e = d.next(); !e.done; e = d.next()) e = pc(c.reader.Za(16)), b.h.push(e)
                    }
                }
            }).parse(a)
        }

        function sn(a, b) {
            var c = a.length,
                d = b.length + 16 + c,
                e = new Uint8Array(d),
                f = tb(e),
                g = 0;
            f.setUint32(g, d);
            g += 4;
            f.setUint32(g, 1886614376);
            g += 4;
            f.setUint32(g, 0);
            g += 4;
            e.set(b, g);
            g += b.length;
            f.setUint32(g, c);
            e.set(a, g + 4);
            return e
        }

        function tn(a) {
            if (!a) return a;
            var b = new rn(a);
            if (1 >= b.data.length) return a;
            a = [];
            var c = {};
            b = t(b.data);
            for (var d = b.next(); !d.done; c = {
                    ec: c.ec
                }, d = b.next()) c.ec = d.value, a.some(function (e) {
                return function (f) {
                    return ob(f, e.ec)
                }
            }(c)) || a.push(c.ec);
            return qc.apply(kc, ja(a))
        };

        function un(a, b) {
            var c = vn(a, b);
            return 1 != c.length ? null : c[0]
        }

        function wn(a, b, c) {
            a = xn(a, b, c);
            return 1 != a.length ? null : a[0]
        }

        function vn(a, b) {
            return Array.from(a.childNodes).filter(function (c) {
                return c instanceof Element && c.tagName == b
            })
        }

        function yn(a) {
            return Array.from(a.childNodes).filter(function (b) {
                return b instanceof Element
            })
        }

        function xn(a, b, c) {
            return Array.from(a.childNodes).filter(function (d) {
                return d instanceof Element && d.localName == c && d.namespaceURI == b
            })
        }

        function zn(a, b, c) {
            return a.hasAttributeNS(b, c) ? a.getAttributeNS(b, c) : null
        }

        function An(a) {
            return Array.from(a.childNodes).every(Bn) ? a.textContent.trim() : null
        }

        function Bn(a) {
            return a.nodeType == Node.TEXT_NODE || a.nodeType == Node.CDATA_SECTION_NODE
        }

        function Cn(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = null;
            a = a.getAttribute(b);
            null != a && (e = c(a));
            return null == e ? d : e
        }

        function Dn(a) {
            if (!a) return null;
            /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a) && (a += "Z");
            a = Date.parse(a);
            return isNaN(a) ? null : Math.floor(a / 1E3)
        }

        function En(a) {
            if (!a) return null;
            a = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
            if (!a) return null;
            a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
            return isFinite(a) ? a : null
        }

        function Fn(a) {
            var b = /([0-9]+)-([0-9]+)/.exec(a);
            if (!b) return null;
            a = Number(b[1]);
            if (!isFinite(a)) return null;
            b = Number(b[2]);
            return isFinite(b) ? {
                start: a,
                end: b
            } : null
        }

        function Gn(a) {
            a = Number(a);
            return 0 === a % 1 ? a : null
        }

        function Hn(a) {
            a = Number(a);
            return 0 === a % 1 && 0 < a ? a : null
        }

        function In(a) {
            a = Number(a);
            return 0 === a % 1 && 0 <= a ? a : null
        }

        function Jn(a) {
            a = Number(a);
            return isNaN(a) ? null : a
        }

        function Kn(a) {
            var b;
            a = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1]) / Number(b[2]) : Number(a);
            return isNaN(a) ? null : a
        }

        function Ln(a, b) {
            var c = new DOMParser,
                d = null,
                e = null;
            try {
                e = c.parseFromString(a, "text/xml")
            } catch (f) {}
            e && e.documentElement.tagName == b && (d = e.documentElement);
            return d && 0 < d.getElementsByTagName("parsererror").length ? null : d
        }

        function Mn(a, b) {
            try {
                var c = wb(a);
                return Ln(c, b)
            } catch (d) {
                return null
            }
        };

        function Nn(a, b, c) {
            var d = On(a),
                e = null;
            a = [];
            var f = [],
                g = new Set(d.map(function (h) {
                    return h.keyId
                }));
            g["delete"](null);
            if (1 < g.size) throw new O(2, 4, 4010);
            b || (f = d.filter(function (h) {
                return "urn:mpeg:dash:mp4protection:2011" == h.le ? (e = h.init || e, !1) : !0
            }), f.length && (a = Pn(e, f, c), 0 == a.length && (a = [Be("", e)])));
            if (d.length && (b || !f.length))
                for (a = [], b = t(Object.values(c)), c = b.next(); !c.done; c = b.next()) c = c.value, "org.w3.clearkey" != c && a.push(Be(c, e));
            if (g = Array.from(g)[0] || null)
                for (b = t(a), c = b.next(); !c.done; c = b.next())
                    for (c =
                        t(c.value.initData), d = c.next(); !d.done; d = c.next()) d.value.keyId = g;
            return {
                Td: g,
                ng: e,
                drmInfos: a,
                Xd: !0
            }
        }

        function Qn(a, b, c, d) {
            var e = Nn(a, c, d);
            if (b.Xd) {
                a = 1 == b.drmInfos.length && !b.drmInfos[0].keySystem;
                c = 0 == e.drmInfos.length;
                if (0 == b.drmInfos.length || a && !c) b.drmInfos = e.drmInfos;
                b.Xd = !1
            } else if (0 < e.drmInfos.length && (b.drmInfos = b.drmInfos.filter(function (f) {
                    return e.drmInfos.some(function (g) {
                        return g.keySystem == f.keySystem
                    })
                }), 0 == b.drmInfos.length)) throw new O(2, 4, 4008);
            return e.Td || b.Td
        }

        function Rn(a) {
            var b = 0,
                c = tb(a),
                d = c.getUint32(b, !0);
            if (d != a.byteLength) return [];
            a: {
                a = b + 6;
                for (b = []; a < c.byteLength - 1;) {
                    d = c.getUint16(a, !0);
                    a += 2;
                    var e = c.getUint16(a, !0);
                    a += 2;
                    if (0 != (e & 1) || e + a > c.byteLength) {
                        c = [];
                        break a
                    }
                    var f = qb(c, a, e);
                    b.push({
                        type: d,
                        value: f
                    });
                    a += e
                }
                c = b
            }
            return c
        }

        function Sn(a) {
            a = t(a.getElementsByTagName("DATA"));
            for (var b = a.next(); !b.done; b = a.next()) {
                b = t(b.value.childNodes);
                for (var c = b.next(); !c.done; c = b.next())
                    if (c = c.value, c instanceof Element && "LA_URL" == c.tagName) return c.textContent
            }
            return ""
        }

        function Tn(a) {
            a = wn(a.node, "urn:microsoft:playready", "pro");
            if (!a) return "";
            a = nc(a.textContent);
            a = Rn(a).filter(function (b) {
                return b.type === Un
            })[0];
            if (!a) return "";
            a = xb(a.value, !0);
            return (a = Ln(a, "WRMHEADER")) ? Sn(a) : ""
        }

        function Pn(a, b, c) {
            var d = [];
            b = t(b);
            for (var e = b.next(); !e.done; e = b.next()) {
                e = e.value;
                var f = c[e.le];
                if (f) {
                    var g;
                    if (g = wn(e.node, "urn:microsoft:playready", "pro")) {
                        g = nc(g.textContent);
                        var h = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                        g = [{
                            initData: sn(g, h),
                            initDataType: "cenc",
                            keyId: e.keyId
                        }]
                    } else g = null;
                    g = Be(f, e.init || a || g);
                    if (f = Vn.get(f)) g.licenseServerUri = f(e);
                    d.push(g)
                }
            }
            return d
        }

        function On(a) {
            var b = [];
            a = t(a);
            for (var c = a.next(); !c.done; c = a.next())(c = Wn(c.value)) && b.push(c);
            return b
        }

        function Wn(a) {
            var b = a.getAttribute("schemeIdUri"),
                c = zn(a, "urn:mpeg:cenc:2013", "default_KID"),
                d = xn(a, "urn:mpeg:cenc:2013", "pssh").map(An);
            if (!b) return null;
            b = b.toLowerCase();
            if (c && (c = c.replace(/-/g, "").toLowerCase(), c.includes(" "))) throw new O(2, 4, 4009);
            var e = [];
            try {
                e = d.map(function (f) {
                    return {
                        initDataType: "cenc",
                        initData: nc(f),
                        keyId: null
                    }
                })
            } catch (f) {
                throw new O(2, 4, 4007);
            }
            return {
                node: a,
                le: b,
                keyId: c,
                init: 0 < e.length ? e : null
            }
        }
        var Un = 1,
            Vn = (new Map).set("com.widevine.alpha", function (a) {
                return (a = wn(a.node, "urn:microsoft", "laurl")) ? a.getAttribute("licenseUrl") || "" : ""
            }).set("com.microsoft.playready", Tn).set("com.microsoft.playready.recommendation", Tn).set("com.microsoft.playready.software", Tn).set("com.microsoft.playready.hardware", Tn);

        function Xn(a, b, c, d, e) {
            var f = {
                RepresentationID: b,
                Number: c,
                Bandwidth: d,
                Time: e
            };
            return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g, function (g, h, k, l) {
                if ("$$" == g) return "$";
                var m = f[h];
                if (null == m) return g;
                "RepresentationID" == h && k && (k = void 0);
                "Time" == h && (m = Math.round(m));
                switch (l) {
                case void 0:
                case "d":
                case "i":
                case "u":
                    g = m.toString();
                    break;
                case "o":
                    g = m.toString(8);
                    break;
                case "x":
                    g = m.toString(16);
                    break;
                case "X":
                    g = m.toString(16).toUpperCase();
                    break;
                default:
                    g = m.toString()
                }
                k =
                    window.parseInt(k, 10) || 1;
                return Array(Math.max(0, k - g.length) + 1).join("0") + g
            })
        }

        function Yn(a, b) {
            var c = Zn(a, b, "timescale"),
                d = 1;
            c && (d = Hn(c) || 1);
            var e = Zn(a, b, "duration");
            c = Hn(e || "");
            "image" == a.K.contentType && (c = Jn(e || ""));
            c && (c /= d);
            var f = Zn(a, b, "startNumber");
            e = Number(Zn(a, b, "presentationTimeOffset")) || 0;
            var g = In(f || "");
            if (null == f || null == g) g = 1;
            var h = $n(a, b, "SegmentTimeline");
            f = null;
            if (h) {
                f = d;
                var k = a.V.duration || Infinity,
                    l = vn(h, "S");
                h = [];
                var m = -e;
                l = t(mb(l));
                for (var n = l.next(); !n.done; n = l.next()) {
                    n = n.value;
                    var p = n.item,
                        r = n.next,
                        u = Cn(p, "t", In);
                    n = Cn(p, "d", In);
                    var w = Cn(p, "r", Gn);
                    null !=
                        u && (u -= e);
                    if (!n) break;
                    p = null != u ? u : m;
                    u = w || 0;
                    if (0 > u)
                        if (r) {
                            r = Cn(r, "t", In);
                            if (null == r) break;
                            else if (p >= r) break;
                            u = Math.ceil((r - p) / n) - 1
                        } else {
                            if (Infinity == k) break;
                            else if (p / f >= k) break;
                            u = Math.ceil((k * f - p) / n) - 1
                        } 0 < h.length && p != m && (h[h.length - 1].end = p / f);
                    r = t(jb(u + 1));
                    for (u = r.next(); !u.done; u = r.next()) m = p + n, h.push({
                        start: p / f,
                        end: m / f,
                        Mf: p
                    }), p = m
                }
                f = h
            }
            return {
                timescale: d,
                ia: c,
                Gb: g,
                Ta: e / d || 0,
                Qd: e,
                timeline: f
            }
        }

        function Zn(a, b, c) {
            return [b(a.K), b(a.ka), b(a.ea)].filter(Nb).map(function (d) {
                return d.getAttribute(c)
            }).reduce(function (d, e) {
                return d || e
            })
        }

        function $n(a, b, c) {
            return [b(a.K), b(a.ka), b(a.ea)].filter(Nb).map(function (d) {
                return un(d, c)
            }).reduce(function (d, e) {
                return d || e
            })
        }

        function ao(a, b, c, d, e, f) {
            for (var g = zn(a, "http://www.w3.org/1999/xlink", "href"), h = zn(a, "http://www.w3.org/1999/xlink", "actuate") || "onRequest", k = t(Array.from(a.attributes)), l = k.next(); !l.done; l = k.next()) l = l.value, "http://www.w3.org/1999/xlink" == l.namespaceURI && a.removeAttributeNS(l.namespaceURI, l.localName);
            if (5 <= f) return Sg(new O(2, 4, 4028));
            if ("onLoad" != h) return Sg(new O(2, 4, 4027));
            var m = Ae([d], [g]);
            return e.request(0, gh(m, b)).aa(function (n) {
                n = Mn(n.data, a.tagName);
                if (!n) return Sg(new O(2, 4, 4001, g));
                for (; a.childNodes.length;) a.removeChild(a.childNodes[0]);
                for (; n.childNodes.length;) {
                    var p = n.childNodes[0];
                    n.removeChild(p);
                    a.appendChild(p)
                }
                n = t(Array.from(n.attributes));
                for (p = n.next(); !p.done; p = n.next()) a.setAttributeNode(p.value.cloneNode(!1));
                return bo(a, b, c, m[0], e, f + 1)
            })
        }

        function bo(a, b, c, d, e, f) {
            f = void 0 === f ? 0 : f;
            if (zn(a, "http://www.w3.org/1999/xlink", "href")) {
                var g = ao(a, b, c, d, e, f);
                c && (g = g.aa(void 0, function () {
                    return bo(a, b, c, d, e, f)
                }));
                return g
            }
            g = [];
            for (var h = t(Array.from(a.childNodes)), k = h.next(); !k.done; k = h.next()) k = k.value, k instanceof Element && ("urn:mpeg:dash:resolve-to-zero:2013" == zn(k, "http://www.w3.org/1999/xlink", "href") ? a.removeChild(k) : "SegmentTimeline" != k.tagName && g.push(bo(k, b, c, d, e, f)));
            return Wg(g).aa(function () {
                return a
            })
        };

        function co(a, b, c, d, e, f, g) {
            var h, k = (new Qb).U("sidx", function (l) {
                h = eo(b, d, e, f, g, c, l)
            });
            a && k.parse(a);
            if (h) return h;
            throw new O(2, 3, 3004);
        }

        function eo(a, b, c, d, e, f, g) {
            var h = [];
            g.reader.skip(4);
            var k = g.reader.M();
            if (0 == k) throw new O(2, 3, 3005);
            if (0 == g.version) {
                var l = g.reader.M();
                var m = g.reader.M()
            } else l = g.reader.kb(), m = g.reader.kb();
            g.reader.skip(2);
            var n = g.reader.Fb();
            a = a + g.size + m;
            n = t(jb(n));
            for (m = n.next(); !m.done; m = n.next()) {
                var p = g.reader.M();
                m = (p & 2147483648) >>> 31;
                p &= 2147483647;
                var r = g.reader.M();
                g.reader.skip(4);
                if (1 == m) throw new O(2, 3, 3006);
                h.push(new qi(l / k + c, (l + r) / k + c, function () {
                    return f
                }, a, a + p - 1, b, c, d, e));
                l += r;
                a += p
            }
            g.parser.stop();
            return h
        };

        function fo(a) {
            this.h = tb(a);
            this.g = new Db(this.h, 0)
        }
        fo.prototype.na = function () {
            return this.g.na()
        };

        function go(a) {
            var b = ho(a);
            if (7 < b.length) throw new O(2, 3, 3002);
            var c = 0;
            b = t(b);
            for (var d = b.next(); !d.done; d = b.next()) c = 256 * c + d.value;
            b = ho(a);
            a: {
                d = t(io);
                for (var e = d.next(); !e.done; e = d.next())
                    if (ob(b, new Uint8Array(e.value))) {
                        d = !0;
                        break a
                    } d = !1
            }
            if (d) b = a.h.byteLength - a.g.Z();
            else {
                if (8 == b.length && b[1] & 224) throw new O(2, 3, 3001);
                d = 0;
                e = t(mb(b));
                for (var f = e.next(); !f.done; f = e.next()) {
                    f = f.value;
                    var g = f.item;
                    d = 0 == f.ha ? g & (1 << 8 - b.length) - 1 : 256 * d + g
                }
                b = d
            }
            b = a.g.Z() + b <= a.h.byteLength ? b : a.h.byteLength - a.g.Z();
            d = tb(a.h,
                a.g.Z(), b);
            a.g.skip(b);
            return new jo(c, d)
        }

        function ho(a) {
            var b = a.g.Z(),
                c = a.g.$();
            if (0 == c) throw new O(2, 3, 3002);
            c = 8 - Math.floor(Math.log2(c));
            a.g.skip(c - 1);
            return qb(a.h, b, c)
        }
        var io = [
            [255],
            [127, 255],
            [63, 255, 255],
            [31, 255, 255, 255],
            [15, 255, 255, 255, 255],
            [7, 255, 255, 255, 255, 255],
            [3, 255, 255, 255, 255, 255, 255],
            [1, 255, 255, 255, 255, 255, 255, 255]
        ];

        function jo(a, b) {
            this.id = a;
            this.g = b
        }

        function ko(a) {
            if (8 < a.g.byteLength) throw new O(2, 3, 3002);
            if (8 == a.g.byteLength && a.g.getUint8(0) & 224) throw new O(2, 3, 3001);
            for (var b = 0, c = t(jb(a.g.byteLength)), d = c.next(); !d.done; d = c.next()) d = a.g.getUint8(d.value), b = 256 * b + d;
            return b
        };

        function lo(a, b, c, d, e, f, g, h, k) {
            function l() {
                return e
            }
            var m = [];
            a = new fo(a.g);
            for (var n = null, p = null; a.na();) {
                var r = go(a);
                if (187 == r.id) {
                    var u = mo(r);
                    u && (r = c * u.Nf, u = b + u.vf, null != n && m.push(new qi(n + g, r + g, l, p, u - 1, f, g, h, k)), n = r, p = u)
                }
            }
            null != n && m.push(new qi(n + g, d + g, l, p, null, f, g, h, k));
            return m
        }

        function mo(a) {
            var b = new fo(a.g);
            a = go(b);
            if (179 != a.id) throw new O(2, 3, 3013);
            a = ko(a);
            b = go(b);
            if (183 != b.id) throw new O(2, 3, 3012);
            b = new fo(b.g);
            for (var c = 0; b.na();) {
                var d = go(b);
                if (241 == d.id) {
                    c = ko(d);
                    break
                }
            }
            return {
                Nf: a,
                vf: c
            }
        };

        function no(a, b) {
            var c = $n(a, b, "Initialization");
            if (!c) return null;
            var d = a.K.ya,
                e = c.getAttribute("sourceURL");
            e && (d = Ae(a.K.ya, [e]));
            e = 0;
            var f = null;
            if (c = Cn(c, "range", Fn)) e = c.start, f = c.end;
            return new oi(function () {
                return d
            }, e, f)
        }

        function oo(a, b) {
            var c = Number(Zn(a, po, "presentationTimeOffset")) || 0,
                d = Zn(a, po, "timescale"),
                e = 1;
            d && (e = Hn(d) || 1);
            var f = c / e || 0,
                g = no(a, po);
            qo(a, g);
            var h = $g(a);
            return {
                vb: function () {
                    var k = $n(h, po, "RepresentationIndex"),
                        l = h.K.ya;
                    k && (k = k.getAttribute("sourceURL")) && (l = Ae(h.K.ya, [k]));
                    k = ro(h);
                    return so(h, b, g, l, k.start, k.end, f)
                }
            }
        }

        function so(a, b, c, d, e, f, g) {
            var h, k, l, m, n, p, r, u, w, x, y, D, C, A, F;
            return K(function (G) {
                if (1 == G.g) return h = a.presentationTimeline, k = !a.bb || !a.V.be, l = a.V.start, m = a.V.duration, n = a.K.mimeType.split("/")[1], p = b, r = null, u = [p(d, e, f), "webm" == n ? p(c.ma(), c.ja, c.da) : null], p = null, v(G, Promise.all(u), 2);
                w = G.h;
                x = w[0];
                y = w[1] || null;
                D = null;
                C = l - g;
                A = l;
                F = m ? l + m : Infinity;
                if ("mp4" == n) var H = co(x, e, d, c, C, A, F);
                else {
                    H = new fo(y);
                    if (440786851 != go(H).id) throw new O(2, 3, 3008);
                    var I = go(H);
                    if (408125543 != I.id) throw new O(2, 3, 3009);
                    H = I.g.byteOffset;
                    I = new fo(I.g);
                    for (var J = null; I.na();) {
                        var M = go(I);
                        if (357149030 == M.id) {
                            J = M;
                            break
                        }
                    }
                    if (!J) throw new O(2, 3, 3010);
                    J = new fo(J.g);
                    M = 1E6;
                    for (I = null; J.na();) {
                        var R = go(J);
                        if (2807729 == R.id) M = ko(R);
                        else if (17545 == R.id)
                            if (4 == R.g.byteLength) I = R.g.getFloat32(0);
                            else if (8 == R.g.byteLength) I = R.g.getFloat64(0);
                        else throw new O(2, 3, 3003);
                    }
                    if (null == I) throw new O(2, 3, 3011);
                    J = M / 1E9;
                    I *= J;
                    M = go(new fo(x));
                    if (475249515 != M.id) throw new O(2, 3, 3007);
                    H = lo(M, H, J, I, d, c, C, A, F)
                }
                D = H;
                h.Cb(D);
                r = new U(D);
                k && r.Xa(A, F, !0);
                return G["return"](r)
            })
        }

        function po(a) {
            return a.Zb
        }

        function ro(a) {
            var b = $n(a, po, "RepresentationIndex");
            a = Zn(a, po, "indexRange");
            a = Fn(a || "");
            b && (a = Cn(b, "range", Fn, a));
            return a
        }

        function qo(a, b) {
            to(a, b);
            if (!ro(a)) throw new O(2, 4, 4002);
        }

        function to(a, b) {
            var c = a.K.mimeType.split("/")[1];
            if (a.K.contentType != Fe && "mp4" != c && "webm" != c) throw new O(2, 4, 4006);
            if ("webm" == c && !b) throw new O(2, 4, 4005);
        };

        function uo(a, b) {
            var c = no(a, vo),
                d = wo(a);
            if (!d.ia && !d.timeline && 1 < d.zb.length) throw new O(2, 4, 4002);
            if (!d.ia && !a.V.duration && !d.timeline && 1 == d.zb.length) throw new O(2, 4, 4002);
            if (d.timeline && 0 == d.timeline.length) throw new O(2, 4, 4002);
            var e = null,
                f = null;
            a.ea.id && a.K.id && (f = a.ea.id + "," + a.K.id, e = b[f]);
            c = xo(a.V.start, a.V.duration, a.K.ya, d, c);
            d = !e;
            e ? e.Ab(c, a.presentationTimeline.Ya()) : (a.presentationTimeline.Cb(c), e = new U(c), f && a.bb && (b[f] = e));
            a.bb && a.V.be || e.Xa(a.V.start, a.V.duration ? a.V.start + a.V.duration :
                Infinity, d);
            return {
                vb: function () {
                    return Promise.resolve(e)
                }
            }
        }

        function vo(a) {
            return a.$a
        }

        function wo(a) {
            var b = yo(a);
            a = Yn(a, vo);
            var c = a.Gb;
            0 == c && (c = 1);
            var d = 0;
            a.ia ? d = a.ia * (c - 1) : a.timeline && 0 < a.timeline.length && (d = a.timeline[0].start);
            return {
                ia: a.ia,
                startTime: d,
                Gb: c,
                Ta: a.Ta,
                timeline: a.timeline,
                zb: b
            }
        }

        function xo(a, b, c, d, e) {
            var f = d.zb.length;
            d.timeline && d.timeline.length != d.zb.length && (f = Math.min(d.timeline.length, d.zb.length));
            var g = a - d.Ta,
                h = b ? a + b : Infinity,
                k = [],
                l = d.startTime,
                m = {};
            f = t(jb(f));
            for (var n = f.next(); !n.done; m = {
                    Rc: m.Rc
                }, n = f.next()) {
                n = n.value;
                var p = d.zb[n];
                m.Rc = Ae(c, [p.lf]);
                var r = void 0;
                r = null != d.ia ? l + d.ia : d.timeline ? d.timeline[n].end : l + b;
                k.push(new qi(a + l, a + r, function (u) {
                    return function () {
                        return u.Rc
                    }
                }(m), p.start, p.end, e, g, a, h));
                l = r
            }
            return k
        }

        function yo(a) {
            return [a.K.$a, a.ka.$a, a.ea.$a].filter(Nb).map(function (b) {
                return vn(b, "SegmentURL")
            }).reduce(function (b, c) {
                return 0 < b.length ? b : c
            }).map(function (b) {
                b.getAttribute("indexRange") && !a.$d && (a.$d = !0);
                var c = b.getAttribute("media");
                b = Cn(b, "mediaRange", Fn, {
                    start: 0,
                    end: null
                });
                return {
                    lf: c,
                    start: b.start,
                    end: b.end
                }
            })
        };

        function zo(a, b, c, d, e, f) {
            var g = Ao(a),
                h = Bo(a);
            Co(h);
            var k = $g(a);
            if (h.Vb) return to(a, g), {
                vb: function () {
                    var u = Xn(h.Vb, k.K.id, null, k.bandwidth || null, null);
                    u = Ae(k.K.ya, [u]);
                    return so(k, b, g, u, 0, null, h.Ta)
                }
            };
            if (h.ia) return d || (a.presentationTimeline.ud(h.ia), a.presentationTimeline.vd(a.V.start)), {
                vb: function () {
                    return Do(k, h, e, g, f)
                }
            };
            var l = null;
            d = null;
            a.ea.id && a.K.id && (d = a.ea.id + "," + a.K.id, l = c[d]);
            var m = Eo(k, h, g),
                n = a.V.start,
                p = a.V.duration ? a.V.start + a.V.duration : Infinity,
                r = Infinity != p;
            l ? (r && (new U(m)).Xa(n,
                p, !0), l.Ab(m, a.presentationTimeline.Ya())) : (a.presentationTimeline.Cb(m), l = new U(m), d && a.bb && (c[d] = l));
            r && l.Xa(n, p);
            return {
                vb: function () {
                    return Promise.resolve(l)
                }
            }
        }

        function Fo(a) {
            return a.$b
        }

        function Bo(a) {
            var b = Yn(a, Fo),
                c = Zn(a, Fo, "media");
            a = Zn(a, Fo, "index");
            return {
                ia: b.ia,
                timescale: b.timescale,
                Gb: b.Gb,
                Ta: b.Ta,
                Qd: b.Qd,
                timeline: b.timeline,
                sd: c,
                Vb: a
            }
        }

        function Co(a) {
            var b = a.Vb ? 1 : 0;
            b += a.timeline ? 1 : 0;
            b += a.ia ? 1 : 0;
            if (0 == b) throw new O(2, 4, 4002);
            1 != b && (a.Vb && (a.timeline = null), a.ia = null);
            if (!a.Vb && !a.sd) throw new O(2, 4, 4002);
        }

        function Do(a, b, c, d, e) {
            function f(J) {
                var M = (J - r) * p,
                    R = M + b.Ta;
                M += l;
                var S = Math.min(M + p, h());
                return new qi(M, S, function () {
                    var N = Xn(w, y, J, x, R * u);
                    return Ae(D, [N])
                }, 0, null, d, C, l, h())
            }

            function g() {
                var J = [Math.max(k.Ya(), l), Math.min(k.fb(), h())].map(function (M) {
                    return M - l
                });
                return [Math.ceil(J[0] / p), Math.ceil(J[1] / p) - 1].map(function (M) {
                    return M + r
                })
            }

            function h() {
                var J = null != m && e[m] || n;
                return J ? l + J : Infinity
            }
            var k = a.presentationTimeline,
                l = a.V.start,
                m = a.ea.id,
                n = a.V.duration,
                p = b.ia,
                r = b.Gb,
                u = b.timescale,
                w = b.sd,
                x =
                a.bandwidth || null,
                y = a.K.id,
                D = a.K.ya,
                C = l - b.Ta,
                A = g();
            a = a.bb ? Math.max(A[0], A[1] - c + 1) : A[0];
            A = A[1];
            c = [];
            for (var F = a; F <= A; ++F) {
                var G = f(F);
                c.push(G)
            }
            var H = new U(c);
            c = k.fb() < h();
            F = k.Y();
            if (c || F) {
                var I = Math.max(a, A + 1);
                H.Jc(p, function () {
                    var J = k.Ya();
                    H.cb(J);
                    var M = t(g());
                    M.next();
                    M = M.next().value;
                    for (var R = []; I <= M;) {
                        var S = f(I);
                        R.push(S);
                        I++
                    }
                    return J > h() && !R.length ? null : R
                })
            }
            return Promise.resolve(H)
        }

        function Eo(a, b, c) {
            var d = a.V.start,
                e = a.V.duration,
                f = d - b.Ta;
            e = e ? d + e : Infinity;
            for (var g = [], h = {}, k = t(mb(b.timeline)), l = k.next(); !l.done; h = {
                    Qc: h.Qc,
                    Tc: h.Tc,
                    Wc: h.Wc,
                    Nc: h.Nc,
                    Yc: h.Yc,
                    Oc: h.Oc
                }, l = k.next()) {
                l = l.value;
                var m = l.item,
                    n = m.start,
                    p = m.Mf;
                m = m.end;
                h.Wc = l.ha + b.Gb;
                h.Yc = p + b.Qd;
                h.Tc = a.K.id;
                h.Nc = a.bandwidth || null;
                h.Qc = b.sd;
                h.Oc = a.K.ya;
                g.push(new qi(d + n, d + m, function (r) {
                    return function () {
                        var u = Xn(r.Qc, r.Tc, r.Wc, r.Nc || null, r.Yc);
                        return Ae(r.Oc, [u]).map(function (w) {
                            return w.toString()
                        })
                    }
                }(h), 0, null, c, f, d, e))
            }
            return g
        }

        function Ao(a) {
            var b = Zn(a, Fo, "initialization");
            if (!b) return null;
            var c = a.K.id,
                d = a.bandwidth || null,
                e = a.K.ya;
            return new oi(function () {
                var f = Xn(b, c, null, d, null);
                return Ae(e, [f])
            }, 0, null)
        };

        function Go() {
            this.l = [];
            this.g = [];
            this.h = [];
            this.j = [];
            this.i = [];
            this.m = new Set
        }
        Go.prototype.release = function () {
            for (var a = t(this.g.concat(this.h, this.j, this.i)), b = a.next(); !b.done; b = a.next()) b = b.value, b.segmentIndex && b.segmentIndex.release();
            this.g = [];
            this.h = [];
            this.j = [];
            this.i = [];
            this.l = []
        };

        function Ho(a, b, c) {
            var d, e, f, g, h, k, l, m, n, p, r, u, w, x, y, D, C, A, F, G, H, I, J, M, R, S, N, aa, qa, fa, Ya;
            return K(function (Da) {
                switch (Da.g) {
                case 1:
                    d = Ge;
                    Io(b);
                    Jo(b);
                    Ko(b);
                    if (!c && 1 == b.length) {
                        e = b[0];
                        a.g = e.qc;
                        a.h = e.Lc;
                        a.j = e.textStreams;
                        a.i = e.imageStreams;
                        Da.v(2);
                        break
                    }
                    f = -1;
                    g = t(mb(b));
                    for (h = g.next(); !h.done; h = g.next()) l = k = h.value, m = l.ha, n = l.item, a.m.has(n.id) || (a.m.add(n.id), -1 == f && (f = m));
                    if (-1 == f) return Da["return"]();
                    p = b.map(function (Ia) {
                        return Ia.qc
                    });
                    r = b.map(function (Ia) {
                        return Ia.Lc
                    });
                    u = b.map(function (Ia) {
                        return Ia.textStreams
                    });
                    w = b.map(function (Ia) {
                        return Ia.imageStreams
                    });
                    x = t(u);
                    for (y = x.next(); !y.done; y = x.next()) D = y.value, D.push(Lo());
                    return v(Da, Mo(a.g, p, f, No, Oo), 3);
                case 3:
                    return v(Da, Mo(a.h, r, f, No, Oo), 4);
                case 4:
                    return v(Da, Mo(a.j, u, f, No, Oo), 5);
                case 5:
                    return v(Da, Mo(a.i, w, f, No, Oo), 2);
                case 2:
                    C = 0;
                    A = [];
                    if (a.h.length && a.g.length)
                        for (M = t(a.g), R = M.next(); !R.done; R = M.next())
                            for (S = R.value, N = t(a.h), aa = N.next(); !aa.done; aa = N.next()) qa = aa.value, fa = gi(S.drmInfos, qa.drmInfos), S.drmInfos.length && qa.drmInfos.length && !fa.length || (Ya =
                                C++, A.push({
                                    id: Ya,
                                    language: S.language,
                                    primary: S.primary,
                                    audio: S,
                                    video: qa,
                                    bandwidth: (S.bandwidth || 0) + (qa.bandwidth || 0),
                                    drmInfos: fa,
                                    allowedByApplication: !0,
                                    allowedByKeySystem: !0,
                                    decodingInfos: []
                                }));
                    else
                        for (F = a.h.concat(a.g), G = t(F), H = G.next(); !H.done; H = G.next()) I = H.value, J = C++, A.push({
                            id: J,
                            language: I.language,
                            primary: I.primary,
                            audio: I.type == d.ab ? I : null,
                            video: I.type == d.Na ? I : null,
                            bandwidth: I.bandwidth || 0,
                            drmInfos: I.drmInfos,
                            allowedByApplication: !0,
                            allowedByKeySystem: !0,
                            decodingInfos: []
                        });
                    a.l = A;
                    z(Da)
                }
            })
        }

        function Io(a) {
            a = t(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                for (var c = [], d = t(b.qc), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = !1, g = t(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.channelsCount == h.channelsCount && e.language == h.language && e.bandwidth == h.bandwidth && e.label == h.label && e.codecs == h.codecs && e.mimeType == h.mimeType && xc(e.roles, h.roles) && e.audioSamplingRate == h.audioSamplingRate && e.primary == h.primary && (f = !0);
                    f || c.push(e)
                }
                b.qc = c
            }
        }

        function Ko(a) {
            a = t(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                for (var c = [], d = t(b.textStreams), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = !1, g = t(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.language == h.language && e.label == h.label && e.codecs == h.codecs && e.mimeType == h.mimeType && xc(e.roles, h.roles) && (f = !0);
                    f || c.push(e)
                }
                b.textStreams = c
            }
        }

        function Jo(a) {
            a = t(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                for (var c = [], d = t(b.Lc), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = !1, g = t(c), h = g.next(); !h.done; h = g.next()) h = h.value, e.id != h.id && e.width == h.width && e.frameRate == h.frameRate && e.codecs == h.codecs && e.mimeType == h.mimeType && e.label == h.label && xc(e.roles, h.roles) && sh(e.closedCaptions, h.closedCaptions) && e.bandwidth == h.bandwidth && (f = !0);
                    f || c.push(e)
                }
                b.Lc = c
            }
        }

        function Po(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p, r, u, w, x, y, D, C, A, F, G;
            return K(function (H) {
                switch (H.g) {
                case 1:
                    b = Ge;
                    if (1 == a.length) return H["return"](a[0]);
                    c = a.map(function (I) {
                        return I.filter(function (J) {
                            return J.type == b.ab
                        })
                    });
                    d = a.map(function (I) {
                        return I.filter(function (J) {
                            return J.type == b.Na
                        })
                    });
                    e = a.map(function (I) {
                        return I.filter(function (J) {
                            return J.type == b.fa
                        })
                    });
                    f = t(e);
                    for (g = f.next(); !g.done; g = f.next()) h = g.value, h.push({
                        id: 0,
                        originalId: "",
                        primary: !1,
                        type: Fe,
                        mimeType: "",
                        codecs: "",
                        language: "",
                        label: null,
                        width: null,
                        height: null,
                        encrypted: !1,
                        keyIds: new Set,
                        segments: [],
                        variantIds: [],
                        roles: [],
                        forced: !1,
                        channelsCount: null,
                        audioSamplingRate: null,
                        spatialAudio: !1,
                        closedCaptions: null
                    });
                    return v(H, Mo([], c, 0, Qo, Ro), 2);
                case 2:
                    return k = H.h, v(H, Mo([], d, 0, Qo, Ro), 3);
                case 3:
                    return l = H.h, v(H, Mo([], e, 0, Qo, Ro), 4);
                case 4:
                    m = H.h;
                    n = 0;
                    if (l.length && k.length)
                        for (x = t(k), y = x.next(); !y.done; y = x.next())
                            for (D = y.value, C = t(l), A = C.next(); !A.done; A = C.next()) F = A.value, G = n++, F.variantIds.push(G), D.variantIds.push(G);
                    else
                        for (p = l.concat(k),
                            r = t(p), u = r.next(); !u.done; u = r.next()) w = u.value, w.variantIds = [n++];
                    return H["return"](l.concat(k).concat(m))
                }
            })
        }

        function Mo(a, b, c, d, e) {
            var f, g, h, k, l, m, n, p, r, u, w, x, y, D, C, A, F, G, H, I, J, M, R, S;
            return K(function (N) {
                switch (N.g) {
                case 1:
                    f = Ge;
                    g = [];
                    h = t(mb(b));
                    for (k = h.next(); !k.done; k = h.next()) m = l = k.value, n = m.ha, p = m.item, n >= c ? g.push(new Set(p)) : g.push(new Set);
                    r = t(a);
                    u = r.next();
                case 2:
                    if (u.done) {
                        N.v(4);
                        break
                    }
                    w = u.value;
                    return v(N, So(w, b, c, e, g), 5);
                case 5:
                    x = N.h;
                    if (!x) throw new O(2, 4, 4037);
                    u = r.next();
                    N.v(2);
                    break;
                case 4:
                    y = t(g), D = y.next();
                case 6:
                    if (D.done) {
                        N.v(8);
                        break
                    }
                    C = D.value;
                    A = t(C);
                    F = A.next();
                case 9:
                    if (F.done) {
                        D = y.next();
                        N.v(6);
                        break
                    }
                    G = F.value;
                    return v(N, To(G, b, d, e, g), 12);
                case 12:
                    (H = N.h) && a.push(H);
                    F = A.next();
                    N.v(9);
                    break;
                case 8:
                    I = t(g);
                    for (D = I.next(); !D.done; D = I.next())
                        for (J = D.value, M = {}, R = t(J), F = R.next(); !F.done; M = {
                                sb: M.sb
                            }, F = R.next())
                            if (M.sb = F.value, M.sb.type != f.fa || M.sb.language)
                                if (S = a.some(function (aa) {
                                        return function (qa) {
                                            return qa.mimeType == aa.sb.mimeType && Ue(qa.codecs) == Ue(aa.sb.codecs)
                                        }
                                    }(M))) throw new O(2, 4, 4037);
                    return N["return"](a)
                }
            })
        }

        function So(a, b, c, d, e) {
            var f;
            return K(function (g) {
                if (1 == g.g) return (f = Uo(b, a)) ? v(g, Vo(f), 2) : g["return"](!1);
                Wo(a, f, c, d, e);
                return g["return"](!0)
            })
        }

        function Vo(a) {
            var b = [];
            a = t(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, b.push(c.createSegmentIndex()), c.trickModeVideo && !c.trickModeVideo.segmentIndex && b.push(c.trickModeVideo.createSegmentIndex());
            return Promise.all(b)
        }

        function To(a, b, c, d, e) {
            var f, g;
            return K(function (h) {
                if (1 == h.g) return f = c(a), (g = Uo(b, f)) ? f.createSegmentIndex ? v(h, Vo(g), 2) : h.v(2) : h["return"](null);
                Wo(f, g, 0, d, e);
                return h["return"](f)
            })
        }

        function Wo(a, b, c, d, e) {
            b = t(mb(b));
            for (var f = b.next(); !f.done; f = b.next()) {
                var g = f.value;
                f = g.ha;
                g = g.item;
                if (f >= c) {
                    d(a, g);
                    var h = !0;
                    "audio" == a.type && 0 == Qf(a.language, g.language) && (h = !1);
                    h && e[f]["delete"](g)
                }
            }
        }

        function No(a) {
            a = Object.assign({}, a);
            a.originalId = null;
            a.createSegmentIndex = function () {
                return Promise.resolve()
            };
            a.segmentIndex = new Pi;
            a.emsgSchemeIdUris = [];
            a.keyIds = new Set;
            a.closedCaptions = null;
            a.trickModeVideo = null;
            return a
        }

        function Qo(a) {
            a = Object.assign({}, a);
            a.keyIds = new Set;
            a.segments = [];
            a.variantIds = [];
            a.closedCaptions = null;
            return a
        }

        function Oo(a, b) {
            a.roles = Array.from(new Set(a.roles.concat(b.roles)));
            b.emsgSchemeIdUris && (a.emsgSchemeIdUris = Array.from(new Set(a.emsgSchemeIdUris.concat(b.emsgSchemeIdUris))));
            var c = b.keyIds;
            c = new Set([].concat(ja(a.keyIds), ja(c)));
            a.keyIds = c;
            null == a.originalId ? a.originalId = b.originalId : a.originalId += "," + (b.originalId || "");
            c = gi(a.drmInfos, b.drmInfos);
            if (b.drmInfos.length && a.drmInfos.length && !c.length) throw new O(2, 4, 4038);
            a.drmInfos = c;
            a.encrypted = a.encrypted || b.encrypted;
            if (b.closedCaptions) {
                a.closedCaptions ||
                    (a.closedCaptions = new Map);
                c = t(b.closedCaptions);
                for (var d = c.next(); !d.done; d = c.next()) {
                    var e = t(d.value);
                    d = e.next().value;
                    e = e.next().value;
                    a.closedCaptions.set(d, e)
                }
            }
            a.segmentIndex.l.push(b.segmentIndex);
            b.trickModeVideo ? (a.trickModeVideo || (a.trickModeVideo = No(b.trickModeVideo), a.trickModeVideo.segmentIndex = a.segmentIndex.clone()), Oo(a.trickModeVideo, b.trickModeVideo)) : a.trickModeVideo && Oo(a.trickModeVideo, b)
        }

        function Ro(a, b) {
            a.roles = Array.from(new Set(a.roles.concat(b.roles)));
            var c = b.keyIds;
            c = new Set([].concat(ja(a.keyIds), ja(c)));
            a.keyIds = c;
            a.encrypted = a.encrypted && b.encrypted;
            a.segments.push.apply(a.segments, ja(b.segments));
            if (b.closedCaptions) {
                a.closedCaptions || (a.closedCaptions = new Map);
                c = t(b.closedCaptions);
                for (var d = c.next(); !d.done; d = c.next()) {
                    var e = t(d.value);
                    d = e.next().value;
                    e = e.next().value;
                    a.closedCaptions.set(d, e)
                }
            }
        }

        function Uo(a, b) {
            for (var c = [], d = t(a), e = d.next(); !e.done; e = d.next()) {
                var f = b,
                    g = {
                        audio: Xo,
                        video: Xo,
                        text: Yo,
                        image: Zo
                    } [f.type],
                    h = {
                        audio: $o,
                        video: ap,
                        text: bp,
                        image: cp
                    } [f.type],
                    k = null;
                e = t(e.value);
                for (var l = e.next(); !l.done; l = e.next()) l = l.value, !g(f, l) || k && !h(f, k, l) || (k = l);
                f = k;
                if (!f) return null;
                c.push(f)
            }
            return c
        }

        function Xo(a, b) {
            var c;
            if (!(c = b.mimeType != a.mimeType || Ue(b.codecs) != Ue(a.codecs)) && (c = a.drmInfos)) {
                c = a.drmInfos;
                var d = b.drmInfos;
                c = !(c.length && d.length ? 0 < gi(c, d).length : 1)
            }
            return c ? !1 : !0
        }

        function Yo(a, b) {
            return a.language ? b.language ? 0 == Qf(a.language, b.language) || b.kind != a.kind ? !1 : !0 : !0 : !1
        }

        function Zo(a) {
            return a.tilesLayout ? !0 : !1
        }

        function $o(a, b, c) {
            if (a.id == c.id) return !0;
            var d = Qf(a.language, b.language),
                e = Qf(a.language, c.language);
            if (e > d) return !0;
            if (e < d) return !1;
            if (!b.primary && c.primary) return !0;
            if (b.primary && !c.primary) return !1;
            if (a.roles.length) return d = b.roles.filter(function (f) {
                return a.roles.includes(f)
            }), e = c.roles.filter(function (f) {
                return a.roles.includes(f)
            }), e.length > d.length ? !0 : e.length < d.length ? !1 : c.roles.length < b.roles.length;
            if (!c.roles.length && b.roles.length) return !0;
            if (c.roles.length && !b.roles.length) return !1;
            d = dp(a.channelsCount, b.channelsCount, c.channelsCount);
            if (d == ep) return !0;
            if (d == fp) return !1;
            d = dp(a.audioSamplingRate, b.audioSamplingRate, c.audioSamplingRate);
            return d == ep ? !0 : d == fp ? !1 : a.bandwidth && gp(a.bandwidth, b.bandwidth, c.bandwidth) == ep ? !0 : !1
        }

        function ap(a, b, c) {
            if (a.id == c.id) return !0;
            var d = dp(a.width * a.height, b.width * b.height, c.width * c.height);
            if (d == ep) return !0;
            if (d == fp) return !1;
            if (a.frameRate) {
                d = dp(a.frameRate, b.frameRate, c.frameRate);
                if (d == ep) return !0;
                if (d == fp) return !1
            }
            return a.bandwidth && gp(a.bandwidth, b.bandwidth, c.bandwidth) == ep ? !0 : !1
        }

        function bp(a, b, c) {
            if (a.id == c.id) return !0;
            var d = Qf(a.language, b.language),
                e = Qf(a.language, c.language);
            if (e > d) return !0;
            if (e < d) return !1;
            if (!b.primary && c.primary) return !0;
            if (b.primary && !c.primary) return !1;
            if (a.roles.length) {
                d = b.roles.filter(function (f) {
                    return a.roles.includes(f)
                });
                e = c.roles.filter(function (f) {
                    return a.roles.includes(f)
                });
                if (e.length > d.length) return !0;
                if (e.length < d.length) return !1
            } else {
                if (!c.roles.length && b.roles.length) return !0;
                if (c.roles.length && !b.roles.length) return !1
            }
            return c.mimeType !=
                a.mimeType || c.codecs != a.codecs || b.mimeType == a.mimeType && b.codecs == a.codecs ? !1 : !0
        }

        function cp(a, b, c) {
            return a.id == c.id || c.mimeType == a.mimeType ? !0 : !1
        }

        function Lo() {
            return {
                id: 0,
                originalId: "",
                createSegmentIndex: function () {
                    return Promise.resolve()
                },
                segmentIndex: new U([]),
                mimeType: "",
                codecs: "",
                encrypted: !1,
                drmInfos: [],
                keyIds: new Set,
                language: "",
                label: null,
                type: Fe,
                primary: !1,
                trickModeVideo: null,
                emsgSchemeIdUris: null,
                roles: [],
                forced: !1,
                channelsCount: null,
                audioSamplingRate: null,
                spatialAudio: !1,
                closedCaptions: null
            }
        }

        function dp(a, b, c) {
            if (b == a && a != c) return fp;
            if (c == a && a != b) return ep;
            if (b > a) {
                if (c <= a || c - a < b - a) return ep;
                if (c - a > b - a) return fp
            } else {
                if (c > a) return fp;
                if (a - c < a - b) return ep;
                if (a - c > a - b) return fp
            }
            return hp
        }

        function gp(a, b, c) {
            b = Math.abs(a - b);
            a = Math.abs(a - c);
            return a < b ? ep : b < a ? fp : hp
        }
        var ep = 1,
            hp = 0,
            fp = -1;

        function ip() {
            var a = this;
            this.C = this.o = null;
            this.h = [];
            this.A = null;
            this.D = 1;
            this.l = {};
            this.H = {};
            this.g = new Go;
            this.u = 0;
            this.F = new Oa(5);
            this.s = new P(function () {
                a.Wb()
            });
            this.i = new ah;
            this.j = Infinity;
            this.m = !1
        }
        q = ip.prototype;
        q.configure = function (a) {
            this.o = a
        };
        q.start = function (a, b) {
            var c = this,
                d;
            return K(function (e) {
                if (1 == e.g) return c.m = b.isLowLatencyMode(), c.h = [a], c.C = b, v(e, jp(c), 2);
                d = e.h;
                c.C && kp(c, d);
                if (!c.C) throw new O(2, 7, 7001);
                return e["return"](c.A)
            })
        };
        q.stop = function () {
            for (var a = t(Object.values(this.l)), b = a.next(); !b.done; b = a.next()) b.value.release();
            this.g && this.g.release();
            this.o = this.C = null;
            this.h = [];
            this.A = null;
            this.l = {};
            this.g = null;
            null != this.s && (this.s.stop(), this.s = null);
            return this.i.destroy()
        };
        q.update = function () {
            var a = this,
                b;
            return K(function (c) {
                if (1 == c.g) return B(c, 2), v(c, jp(a), 4);
                if (2 != c.g) return wa(c, 0);
                b = E(c);
                if (!a.C || !b) return c["return"]();
                a.C.onError(b);
                z(c)
            })
        };
        q.onExpirationUpdated = function () {};

        function jp(a) {
            var b, c, d, e, f, g, h;
            return K(function (k) {
                if (1 == k.g) return b = gh(a.h, a.o.retryParameters), c = a.C.networkingEngine, d = Date.now(), e = c.request(0, b), bh(a.i, e), v(k, e.promise, 2);
                if (3 != k.g) {
                    f = k.h;
                    if (!a.C) return k["return"](0);
                    f.uri && !a.h.includes(f.uri) && a.h.unshift(f.uri);
                    return v(k, lp(a, f.data, f.uri), 3)
                }
                g = Date.now();
                h = (g - d) / 1E3;
                Pa(a.F, 1, h);
                return k["return"](h)
            })
        }

        function lp(a, b, c) {
            var d, e, f, g, h;
            return K(function (k) {
                if (1 == k.g) {
                    d = Mn(b, "MPD");
                    if (!d) throw new O(2, 4, 4001, c);
                    if (e = a.o.dash.disableXlinkProcessing) return k["return"](mp(a, d, c));
                    f = a.o.dash.xlinkFailGracefully;
                    g = bo(d, a.o.retryParameters, f, c, a.C.networkingEngine);
                    bh(a.i, g);
                    return v(k, g.promise, 2)
                }
                h = k.h;
                return k["return"](mp(a, h, c))
            })
        }

        function mp(a, b, c) {
            var d, e, f, g, h, k, l, m, n, p, r, u, w, x, y, D, C, A, F, G, H, I, J, M, R, S, N, aa, qa, fa, Ya;
            return K(function (Da) {
                switch (Da.g) {
                case 1:
                    d = [c];
                    e = vn(b, "Location").map(An).filter(Nb);
                    0 < e.length && (f = Ae(d, e), d = a.h = f);
                    g = vn(b, "BaseURL");
                    h = g.map(An);
                    k = Ae(d, h);
                    l = 0;
                    g && g.length && (l = Cn(g[0], "availabilityTimeOffset", Jn) || 0);
                    m = a.o.dash.ignoreMinBufferTime;
                    n = 0;
                    m || (n = Cn(b, "minBufferTime", En) || 0);
                    a.u = Cn(b, "minimumUpdatePeriod", En, -1);
                    p = Cn(b, "availabilityStartTime", Dn);
                    r = Cn(b, "timeShiftBufferDepth", En);
                    u = a.o.dash.ignoreSuggestedPresentationDelay;
                    w = null;
                    u || (w = Cn(b, "suggestedPresentationDelay", En));
                    x = a.o.dash.ignoreMaxSegmentDuration;
                    y = null;
                    x || (y = Cn(b, "maxSegmentDuration", En));
                    D = b.getAttribute("type") || "static";
                    if (a.A)
                        for (C = a.A.presentationTimeline, A = t(Object.values(a.l)), F = A.next(); !F.done; F = A.next()) G = F.value, G.cb(C.Ya());
                    else H = a.o.defaultPresentationDelay || 1.5 * n, I = null != w ? w : H, C = new T(p, I, a.o.dash.autoCorrectDrift);
                    J = b.getAttribute("profiles") || "";
                    M = {
                        bb: "static" != D,
                        presentationTimeline: C,
                        ea: null,
                        V: null,
                        ka: null,
                        K: null,
                        bandwidth: 0,
                        $d: !1,
                        tb: l,
                        profiles: J.split(",")
                    };
                    var Ia = Cn(b, "mediaPresentationDuration", En),
                        Cc = [],
                        kb = 0,
                        Bb = vn(b, "Period");
                    Bb = t(mb(Bb));
                    for (var Za = Bb.next(); !Za.done; Za = Bb.next()) {
                        var Pb = Za.value;
                        Za = Pb.item;
                        Pb = Pb.next;
                        kb = Cn(Za, "start", En, kb);
                        var mf = Cn(Za, "duration", En),
                            $a = null;
                        if (Pb) {
                            var $d = Cn(Pb, "start", En);
                            null != $d && ($a = $d - kb)
                        } else null != Ia && ($a = Ia - kb);
                        null == $a && ($a = mf);
                        Za = np(a, M, k, {
                            start: kb,
                            duration: $a,
                            node: Za,
                            be: null == $a || !Pb
                        });
                        Cc.push(Za);
                        M.ea.id && $a && (a.H[M.ea.id] = $a);
                        if (null == $a) {
                            kb = null;
                            break
                        }
                        kb += $a
                    }
                    R = null != Ia ? {
                        periods: Cc,
                        duration: Ia,
                        Vd: !1
                    } : {
                        periods: Cc,
                        duration: kb,
                        Vd: !0
                    };
                    S = R.duration;
                    N = R.periods;
                    C.ac("static" == D);
                    "static" != D && R.Vd || C.Ja(S || Infinity);
                    a.j && !a.m && (aa = a.C.isAutoLowLatencyMode()) && (a.C.enableLowLatencyMode(), a.m = a.C.isLowLatencyMode());
                    a.m ? C.oe(a.j) : a.j && Ua("Low-latency DASH live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");
                    (qa = C.Y()) && !isNaN(a.o.availabilityWindowOverride) &&
                        (r = a.o.availabilityWindowOverride);
                    null == r && (r = Infinity);
                    C.Md(r);
                    C.ud(y || 1);
                    return v(Da, Ho(a.g, N, M.bb), 2);
                case 2:
                    if (a.A) {
                        a.A.variants = a.g.l;
                        a.A.textStreams = a.g.j;
                        a.A.imageStreams = a.g.i;
                        a.C.filter(a.A);
                        Da.v(3);
                        break
                    }
                    a.A = {
                        presentationTimeline: C,
                        variants: a.g.l,
                        textStreams: a.g.j,
                        imageStreams: a.g.i,
                        offlineSessionIds: [],
                        minBufferTime: n || 0
                    };
                    if (!C.te()) {
                        Da.v(3);
                        break
                    }
                    fa = vn(b, "UTCTiming");
                    return v(Da, op(a, k, fa), 5);
                case 5:
                    Ya = Da.h;
                    if (!a.C) return Da["return"]();
                    C.pe(Ya);
                case 3:
                    a.C.makeTextStreamsForClosedCaptions(a.A),
                        z(Da)
                }
            })
        }

        function np(a, b, c, d) {
            b.ea = pp(d.node, null, c);
            b.V = d;
            b.ea.tb = b.tb;
            b.ea.id || (b.ea.id = "__shaka_period_" + d.start);
            c = vn(d.node, "EventStream");
            c = t(c);
            for (var e = c.next(); !e.done; e = c.next()) qp(a, d.start, d.duration, e.value);
            c = vn(d.node, "AdaptationSet").map(function (m) {
                return rp(a, b, m)
            }).filter(Nb);
            if (b.bb) {
                d = [];
                e = t(c);
                for (var f = e.next(); !f.done; f = e.next()) {
                    f = t(f.value.yf);
                    for (var g = f.next(); !g.done; g = f.next()) d.push(g.value)
                }
                if (d.length != (new Set(d)).size) throw new O(2, 4, 4018);
            }
            d = c.filter(function (m) {
                return !m.Od
            });
            c =
                c.filter(function (m) {
                    return m.Od
                });
            c = t(c);
            for (e = c.next(); !e.done; e = c.next()) {
                e = e.value;
                f = e.Od.split(" ");
                g = t(d);
                for (var h = g.next(); !h.done; h = g.next()) {
                    var k = h.value;
                    if (f.includes(k.id)) {
                        h = {};
                        k = t(k.streams);
                        for (var l = k.next(); !l.done; h = {
                                jc: h.jc
                            }, l = k.next()) h.jc = l.value, h.jc.trickModeVideo = e.streams.find(function (m) {
                            return function (n) {
                                return Ue(m.jc.codecs) == Ue(n.codecs)
                            }
                        }(h))
                    }
                }
            }
            e = a.o.disableAudio ? [] : sp(d, "audio");
            g = a.o.disableVideo ? [] : sp(d, "video");
            f = a.o.disableText ? [] : sp(d, Fe);
            c = a.o.disableThumbnails ? [] : sp(d, "image");
            if (!g.length && !e.length) throw new O(2, 4, 4004);
            d = [];
            e = t(e);
            for (h = e.next(); !h.done; h = e.next()) d.push.apply(d, ja(h.value.streams));
            e = [];
            g = t(g);
            for (h = g.next(); !h.done; h = g.next()) e.push.apply(e, ja(h.value.streams));
            g = [];
            f = t(f);
            for (h = f.next(); !h.done; h = f.next()) g.push.apply(g, ja(h.value.streams));
            f = [];
            c = t(c);
            for (h = c.next(); !h.done; h = c.next()) f.push.apply(f, ja(h.value.streams));
            return {
                id: b.ea.id,
                qc: d,
                Lc: e,
                textStreams: g,
                imageStreams: f
            }
        }

        function sp(a, b) {
            return a.filter(function (c) {
                return c.contentType == b
            })
        }

        function rp(a, b, c) {
            b.ka = pp(c, b.ea, null);
            var d = !1,
                e = vn(c, "Role"),
                f = e.map(function (A) {
                    return A.getAttribute("value")
                }).filter(Nb),
                g = void 0,
                h = b.ka.contentType == Fe;
            h && (g = "subtitle");
            e = t(e);
            for (var k = e.next(); !k.done; k = e.next()) {
                k = k.value;
                var l = k.getAttribute("schemeIdUri");
                if (null == l || "urn:mpeg:dash:role:2011" == l) switch (k = k.getAttribute("value"), k) {
                case "main":
                    d = !0;
                    break;
                case "caption":
                case "subtitle":
                    g = k
                }
            }
            l = vn(c, "EssentialProperty");
            e = null;
            k = !1;
            l = t(l);
            for (var m = l.next(); !m.done; m = l.next()) m = m.value,
                "http://dashif.org/guidelines/trickmode" == m.getAttribute("schemeIdUri") ? e = m.getAttribute("value") : k = !0;
            l = vn(c, "Accessibility");
            var n = new Map;
            l = t(l);
            for (m = l.next(); !m.done; m = l.next()) {
                var p = m.value;
                m = p.getAttribute("schemeIdUri");
                p = p.getAttribute("value");
                if ("urn:scte:dash:cc:cea-608:2015" == m)
                    if (m = 1, null != p) {
                        p = p.split(";");
                        for (var r = t(p), u = r.next(); !u.done; u = r.next()) {
                            var w = u.value,
                                x = u = void 0;
                            w.includes("=") ? (w = w.split("="), u = w[0].startsWith("CC") ? w[0] : "CC" + w[0], x = w[1]) : (u = "CC" + m, 2 == p.length ? m += 2 :
                                m++, x = w);
                            n.set(u, Mf(x))
                        }
                    } else n.set("CC1", "und");
                else if ("urn:scte:dash:cc:cea-708:2015" == m)
                    if (m = 1, null != p)
                        for (p = t(p.split(";")), u = p.next(); !u.done; u = p.next()) u = u.value, w = r = void 0, u.includes("=") ? (u = u.split("="), r = "svc" + u[0], w = u[1].split(",")[0].split(":").pop()) : (r = "svc" + m, m++, w = u), n.set(r, Mf(w));
                    else n.set("svc1", "und");
                else "urn:mpeg:dash:role:2011" == m && null != p && (f.push(p), "captions" == p && (g = "caption"))
            }
            if (k) return null;
            k = vn(c, "ContentProtection");
            var y = Nn(k, a.o.dash.ignoreDrmInfo, a.o.dash.keySystemsByURI),
                D = Mf(c.getAttribute("lang") || "und"),
                C = c.getAttribute("label");
            (k = vn(c, "Label")) && k.length && (k = k[0], k.textContent && (C = k.textContent));
            k = vn(c, "Representation");
            c = k.map(function (A) {
                return tp(a, b, y, g, D, C, d, f, n, A)
            }).filter(function (A) {
                return !!A
            });
            if (0 == c.length) {
                e = "image" == b.ka.contentType;
                if (a.o.dash.ignoreEmptyAdaptationSet || h || e) return null;
                throw new O(2, 4, 4003);
            }
            if (!b.ka.contentType || "application" == b.ka.contentType)
                for (b.ka.contentType = up(c[0].mimeType, c[0].codecs), h = t(c), l = h.next(); !l.done; l = h.next()) l.value.type =
                    b.ka.contentType;
            h = t(c);
            for (l = h.next(); !l.done; l = h.next())
                for (l = l.value, m = t(y.drmInfos), p = m.next(); !p.done; p = m.next()) p = p.value, p.keyIds = p.keyIds && l.keyIds ? new Set([].concat(ja(p.keyIds), ja(l.keyIds))) : p.keyIds || l.keyIds;
            h = k.map(function (A) {
                return A.getAttribute("id")
            }).filter(Nb);
            return {
                id: b.ka.id || "__fake__" + a.D++,
                contentType: b.ka.contentType,
                language: D,
                og: d,
                streams: c,
                drmInfos: y.drmInfos,
                Od: e,
                yf: h
            }
        }

        function tp(a, b, c, d, e, f, g, h, k, l) {
            b.K = pp(l, b.ka, null);
            a.j = Math.min(a.j, b.K.tb);
            if (!vp(b.K)) return null;
            var m = b.V.start;
            b.bandwidth = Cn(l, "bandwidth", Hn) || 0;
            var n = b.K.contentType,
                p = n == Fe || "application" == n;
            n = "image" == n;
            try {
                var r = function (G, H, I) {
                    return wp(a, G, H, I)
                };
                if (b.K.Zb) var u = oo(b, r);
                else if (b.K.$a) u = uo(b, a.l);
                else if (b.K.$b) u = zo(b, r, a.l, !!a.A, a.o.dash.initialSegmentLimit, a.H);
                else {
                    var w = b.K.ya,
                        x = b.V.duration || 0;
                    u = {
                        vb: function () {
                            return Promise.resolve(Oi(m, x, w))
                        }
                    }
                }
            } catch (G) {
                if ((p || n) && 4002 == G.code) return null;
                throw G;
            }
            r = vn(l, "ContentProtection");
            r = Qn(r, c, a.o.dash.ignoreDrmInfo, a.o.dash.keySystemsByURI);
            r = new Set(r ? [r] : []);
            var y = !1;
            vn(l, "SupplementalProperty").some(function (G) {
                return "tag:dolby.com,2018:dash:EC3_ExtensionType:2018" == G.getAttribute("schemeIdUri") && "JOC" == G.getAttribute("value")
            }) && (b.K.mimeType = "audio/eac3-joc", y = !0);
            var D = !1;
            p && (D = h.includes("forced_subtitle"));
            var C;
            if (n && ((l = vn(l, "EssentialProperty").find(function (G) {
                        return ["http://dashif.org/thumbnail_tile", "http://dashif.org/guidelines/thumbnail_tile"].includes(G.getAttribute("schemeIdUri"))
                    })) &&
                    (C = l.getAttribute("value")), !C)) return null;
            var A;
            l = b.K.codecs;
            b.profiles.includes("http://dashif.org/guidelines/dash-if-uhd#hevc-hdr-pq10") && (l.includes("hvc1.2.4.L153.B0") || l.includes("hev1.2.4.L153.B0")) && (A = "PQ");
            var F = {
                id: a.D++,
                originalId: b.K.id,
                createSegmentIndex: function () {
                    var G;
                    return K(function (H) {
                        if (1 == H.g) {
                            if (F.segmentIndex) return H.v(0);
                            G = F;
                            return v(H, u.vb(), 3)
                        }
                        G.segmentIndex = H.h;
                        z(H)
                    })
                },
                segmentIndex: null,
                mimeType: b.K.mimeType,
                codecs: b.K.codecs,
                frameRate: b.K.frameRate,
                pixelAspectRatio: b.K.pixelAspectRatio,
                bandwidth: b.bandwidth,
                width: b.K.width,
                height: b.K.height,
                kind: d,
                encrypted: 0 < c.drmInfos.length,
                drmInfos: c.drmInfos,
                keyIds: r,
                language: e,
                label: f,
                type: b.ka.contentType,
                primary: g,
                trickModeVideo: null,
                emsgSchemeIdUris: b.K.emsgSchemeIdUris,
                roles: h,
                forced: D,
                channelsCount: b.K.wd,
                audioSamplingRate: b.K.audioSamplingRate,
                spatialAudio: y,
                closedCaptions: k,
                hdr: A,
                tilesLayout: C
            };
            return F
        }
        q.Wb = function () {
            var a = this,
                b, c;
            return K(function (d) {
                switch (d.g) {
                case 1:
                    return b = 0, B(d, 2), v(d, jp(a), 4);
                case 4:
                    b = d.h;
                    wa(d, 3);
                    break;
                case 2:
                    c = E(d), a.C && (c.severity = 1, a.C.onError(c));
                case 3:
                    if (!a.C) return d["return"]();
                    kp(a, b);
                    z(d)
                }
            })
        };

        function kp(a, b) {
            0 > a.u || a.s.T(Math.max(3, a.u - b, Qa(a.F)))
        }

        function pp(a, b, c) {
            b = b || {
                contentType: "",
                mimeType: "",
                codecs: "",
                emsgSchemeIdUris: [],
                frameRate: void 0,
                pixelAspectRatio: void 0,
                wd: null,
                audioSamplingRate: null,
                tb: 0
            };
            c = c || b.ya;
            var d = vn(a, "BaseURL"),
                e = d.map(An),
                f = a.getAttribute("contentType") || b.contentType,
                g = a.getAttribute("mimeType") || b.mimeType,
                h = a.getAttribute("codecs") || b.codecs,
                k = Cn(a, "frameRate", Kn) || b.frameRate,
                l = a.getAttribute("sar") || b.pixelAspectRatio,
                m = vn(a, "InbandEventStream"),
                n = b.emsgSchemeIdUris.slice();
            m = t(m);
            for (var p = m.next(); !p.done; p =
                m.next()) p = p.value.getAttribute("schemeIdUri"), n.includes(p) || n.push(p);
            m = vn(a, "AudioChannelConfiguration");
            m = xp(m) || b.wd;
            p = Cn(a, "audioSamplingRate", In) || b.audioSamplingRate;
            f || (f = up(g, h));
            var r = un(a, "SegmentBase"),
                u = un(a, "SegmentTemplate"),
                w = r ? Cn(r, "availabilityTimeOffset", Jn) || 0 : 0,
                x = u ? Cn(u, "availabilityTimeOffset", Jn) || 0 : 0;
            d = d && d.length ? Cn(d[0], "availabilityTimeOffset", Jn) || 0 : 0;
            d = b.tb + d + w + x;
            console.log(f);
            console.log(h);
            return {
                ya: Ae(c, e),
                Zb: r || b.Zb,
                $a: un(a, "SegmentList") || b.$a,
                $b: u || b.$b,
                width: Cn(a, "width", In) || b.width,
                height: Cn(a,
                    "height", In) || b.height,
                contentType: f,
                mimeType: g,
                codecs: h,
                frameRate: k,
                pixelAspectRatio: l,
                emsgSchemeIdUris: n,
                id: a.getAttribute("id"),
                wd: m,
                audioSamplingRate: p,
                tb: d
            }
        }

        function xp(a) {
            a = t(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                if (b = c.getAttribute("schemeIdUri"))
                    if (c = c.getAttribute("value")) switch (b) {
                    case "urn:mpeg:dash:outputChannelPositionList:2012":
                        return c.trim().split(/ +/).length;
                    case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
                    case "urn:dts:dash:audio_channel_configuration:2012":
                        b = parseInt(c, 10);
                        if (!b) continue;
                        return b;
                    case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
                    case "urn:dolby:dash:audio_channel_configuration:2011":
                        b =
                            parseInt(c, 16);
                        if (!b) continue;
                        for (a = 0; b;) b & 1 && ++a, b >>= 1;
                        return a;
                    case "urn:mpeg:mpegB:cicp:ChannelConfiguration":
                        if (b = [0, 1, 2, 3, 4, 5, 6, 8, 2, 3, 4, 7, 8, 24, 8, 12, 10, 12, 14, 12, 14], (c = parseInt(c, 10)) && 0 < c && c < b.length) return b[c]
                    }
            }
            return null
        }

        function vp(a) {
            var b = a.Zb ? 1 : 0;
            b += a.$a ? 1 : 0;
            b += a.$b ? 1 : 0;
            if (0 == b) return a.contentType == Fe || "application" == a.contentType ? !0 : !1;
            1 != b && (a.Zb && (a.$a = null), a.$b = null);
            return !0
        }

        function yp(a, b, c, d) {
            var e, f, g, h, k, l;
            return K(function (m) {
                if (1 == m.g) return e = Ae(b, [c]), f = gh(e, a.o.retryParameters), f.method = d, g = a.C.networkingEngine.request(4, f), bh(a.i, g), v(m, g.promise, 2);
                h = m.h;
                if ("HEAD" == d) {
                    if (!h.headers || !h.headers.date) return m["return"](0);
                    k = h.headers.date
                } else k = wb(h.data);
                l = Date.parse(k);
                return isNaN(l) ? m["return"](0) : m["return"](l - Date.now())
            })
        }

        function op(a, b, c) {
            var d, e, f, g, h, k, l, m;
            return K(function (n) {
                switch (n.g) {
                case 1:
                    d = c.map(function (p) {
                        return {
                            scheme: p.getAttribute("schemeIdUri"),
                            value: p.getAttribute("value")
                        }
                    }), e = a.o.dash.clockSyncUri, !d.length && e && d.push({
                        scheme: "urn:mpeg:dash:utc:http-head:2014",
                        value: e
                    }), f = t(d), g = f.next();
                case 2:
                    if (g.done) {
                        n.v(4);
                        break
                    }
                    h = g.value;
                    B(n, 5);
                    k = h.scheme;
                    l = h.value;
                    switch (k) {
                    case "urn:mpeg:dash:utc:http-head:2014":
                    case "urn:mpeg:dash:utc:http-head:2012":
                        return n.v(7);
                    case "urn:mpeg:dash:utc:http-xsdate:2014":
                    case "urn:mpeg:dash:utc:http-iso:2014":
                    case "urn:mpeg:dash:utc:http-xsdate:2012":
                    case "urn:mpeg:dash:utc:http-iso:2012":
                        return n.v(8);
                    case "urn:mpeg:dash:utc:direct:2014":
                    case "urn:mpeg:dash:utc:direct:2012":
                        return m = Date.parse(l), n["return"](isNaN(m) ? 0 : m - Date.now());
                    case "urn:mpeg:dash:utc:http-ntp:2014":
                    case "urn:mpeg:dash:utc:ntp:2014":
                    case "urn:mpeg:dash:utc:sntp:2014":
                        Ua("NTP UTCTiming scheme is not supported");
                        break;
                    default:
                        Ua("Unrecognized scheme in UTCTiming element", k)
                    }
                    n.v(9);
                    break;
                case 7:
                    return v(n, yp(a, b, l, "HEAD"), 10);
                case 10:
                    return n["return"](n.h);
                case 8:
                    return v(n, yp(a, b, l, "GET"), 11);
                case 11:
                    return n["return"](n.h);
                case 9:
                    wa(n, 3);
                    break;
                case 5:
                    E(n);
                case 3:
                    g = f.next();
                    n.v(2);
                    break;
                case 4:
                    return Ua("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!"), n["return"](0)
                }
            })
        }

        function qp(a, b, c, d) {
            var e = d.getAttribute("schemeIdUri") || "",
                f = d.getAttribute("value") || "",
                g = Cn(d, "timescale", In) || 1;
            d = t(vn(d, "Event"));
            for (var h = d.next(); !h.done; h = d.next()) {
                h = h.value;
                var k = Cn(h, "presentationTime", In) || 0,
                    l = Cn(h, "duration", In) || 0;
                k = k / g + b;
                l = k + l / g;
                null != c && (k = Math.min(k, b + c), l = Math.min(l, b + c));
                h = {
                    schemeIdUri: e,
                    value: f,
                    startTime: k,
                    endTime: l,
                    id: h.getAttribute("id") || "",
                    eventElement: h
                };
                a.C.onTimelineRegionAdded(h)
            }
        }

        function wp(a, b, c, d) {
            var e, f, g, h, k;
            return K(function (l) {
                if (1 == l.g) return e = mh, f = aj(b, c, d, a.o.retryParameters), g = a.C.networkingEngine, h = g.request(e, f), bh(a.i, h), v(l, h.promise, 2);
                k = l.h;
                return l["return"](k.data)
            })
        }

        function up(a, b) {
            return Xe(Qe(a, b)) ? Fe : a.split("/")[0]
        }
        L("shaka.dash.DashParser", ip);
        mi.mpd = function () {
            return new ip
        };
        ki["application/dash+xml"] = function () {
            return new ip
        };
        ki["video/vnd.mpeg.dash.mpd"] = function () {
            return new ip
        };

        function zp(a, b, c, d) {
            this.g = a;
            this.type = b;
            this.W = c;
            this.segments = d || null
        }

        function Ap(a, b, c, d) {
            this.id = a;
            this.name = b;
            this.g = c;
            this.value = void 0 === d ? null : d
        }
        Ap.prototype.toString = function () {
            function a(d) {
                return d.name + "=" + (isNaN(Number(d.value)) ? '"' + d.value + '"' : d.value)
            }
            var b = "#" + this.name,
                c = this.g ? this.g.map(a) : [];
            this.value && c.unshift(this.value);
            0 < c.length && (b += ":" + c.join(","));
            return b
        };
        Ap.prototype.getAttribute = function (a) {
            var b = this.g.filter(function (c) {
                return c.name == a
            });
            return b.length ? b[0] : null
        };

        function Z(a, b, c) {
            return (a = a.getAttribute(b)) ? a.value : c || null
        }

        function Bp(a, b) {
            var c = a.getAttribute(b);
            if (!c) throw new O(2, 4, 4023, b);
            return c.value
        }

        function Cp(a, b, c) {
            c = void 0 === c ? [] : c;
            this.W = b;
            this.g = a;
            this.h = c
        }

        function Dp(a, b) {
            this.name = a;
            this.value = b
        };

        function Ep(a, b) {
            return a.filter(function (c) {
                return c.name == b
            })
        }

        function Fp(a, b) {
            return a.filter(function (c) {
                return Bp(c, "TYPE") == b
            })
        }

        function Gp(a, b) {
            var c = Ep(a, b);
            return c.length ? c[0] : null
        }

        function Hp(a, b, c) {
            c = void 0 === c ? 0 : c;
            return (a = Gp(a, b)) ? Number(a.value) : c
        };

        function Ip(a) {
            this.h = a;
            this.g = 0
        }

        function Jp(a) {
            Kp(a, /[ \t]+/gm)
        }

        function Kp(a, b) {
            b.lastIndex = a.g;
            var c = b.exec(a.h);
            c = null == c ? null : {
                position: c.index,
                length: c[0].length,
                results: c
            };
            if (a.g == a.h.length || null == c || c.position != a.g) return null;
            a.g += c.length;
            return c.results
        }

        function Lp(a) {
            return a.g == a.h.length ? null : (a = Kp(a, /[^ \t\n]*/gm)) ? a[0] : null
        };

        function Mp() {
            this.g = 0
        }

        function Np(a, b, c) {
            b = wb(b);
            b = b.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
            var d = b.split(/\n+/m);
            if (!/^#EXTM3U($|[ \t\n])/m.test(d[0])) throw new O(2, 4, 4015);
            b = 0;
            for (var e = !0, f = t(d), g = f.next(); !g.done; g = f.next())
                if (g = g.value, /^#(?!EXT)/m.test(g) || e) e = !1;
                else if (g = Op(a.g++, g), --a.g, Pp.includes(g.name)) {
                b = 1;
                break
            } else "EXT-X-STREAM-INF" == g.name && (e = !0);
            f = [];
            e = !0;
            g = t(mb(d));
            for (var h = g.next(); !h.done; h = g.next()) {
                var k = h.value;
                h = k.ha;
                var l = k.item;
                k = k.next;
                if (/^#(?!EXT)/m.test(l) || e) e = !1;
                else {
                    l = Op(a.g++,
                        l);
                    if (Qp.includes(l.name)) {
                        if (1 != b) throw new O(2, 4, 4017);
                        k = d.splice(h, d.length - h);
                        d = c;
                        e = [];
                        g = [];
                        h = [];
                        l = null;
                        k = t(k);
                        for (var m = k.next(); !m.done; m = k.next()) m = m.value, /^(#EXT)/.test(m) ? (m = Op(a.g++, m), Pp.includes(m.name) ? f.push(m) : "EXT-X-MAP" == m.name ? l = m : "EXT-X-PART" == m.name ? h.push(m) : "EXT-X-PRELOAD-HINT" == m.name ? "PART" == Z(m, "TYPE") ? h.push(m) : "MAP" == Z(m, "TYPE") && (m.name = "EXT-X-MAP", l = m) : g.push(m)) : /^#(?!EXT)/m.test(m) || (m = Ae([d], [m.trim()])[0], l && g.push(l), e.push(new Cp(m, g, h)), g = [], h = []);
                        h.length && (l &&
                            g.push(l), e.push(new Cp("", g, h)));
                        return new zp(c, b, f, e)
                    }
                    f.push(l);
                    "EXT-X-STREAM-INF" == l.name && (l.g.push(new Dp("URI", k)), e = !0)
                }
            }
            return new zp(c, b, f)
        }

        function Op(a, b) {
            var c = b.match(/^#(EXT[^:]*)(?::(.*))?$/);
            if (!c) throw new O(2, 4, 4016, b);
            var d = c[1],
                e = c[2];
            c = [];
            var f;
            if (e) {
                e = new Ip(e);
                var g;
                (g = Kp(e, /^([^,=]+)(?:,|$)/g)) && (f = g[1]);
                for (var h = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; g = Kp(e, h);) c.push(new Dp(g[1], g[2] || g[3]))
            }
            return new Ap(a, d, c, f)
        }
        var Pp = "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST EXT-X-SERVER-CONTROL EXT-X-SKIP".split(" "),
            Qp = "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE EXT-X-MAP".split(" ");

        function Rp() {}

        function Sp(a) {
            try {
                var b = Tp(a);
                return Ug({
                    uri: a,
                    ge: a,
                    data: b.data,
                    headers: {
                        "content-type": b.contentType
                    }
                })
            } catch (c) {
                return Sg(c)
            }
        }

        function Tp(a) {
            var b = a.split(":");
            if (2 > b.length || "data" != b[0]) throw new O(2, 1, 1004, a);
            b = b.slice(1).join(":").split(",");
            if (2 > b.length) throw new O(2, 1, 1004, a);
            var c = b[0];
            a = window.decodeURIComponent(b.slice(1).join(","));
            b = c.split(";");
            c = b[0];
            var d = !1;
            1 < b.length && "base64" == b[b.length - 1] && (d = !0, b.pop());
            var e;
            d ? e = nc(a) : e = Ab(a);
            return {
                data: e,
                contentType: c
            }
        }
        L("shaka.net.DataUriPlugin", Rp);
        Rp.parse = Sp;
        dh("data", Sp);

        function Up() {
            var a = this;
            this.o = this.C = null;
            this.Ma = 1;
            this.u = new Map;
            this.m = new Map;
            this.Fa = new Set;
            this.h = new Map;
            this.g = null;
            this.L = "";
            this.X = new Mp;
            this.Ea = 0;
            this.s = new P(function () {
                a.Wb()
            });
            this.j = Vp;
            this.A = null;
            this.oa = 0;
            this.F = Infinity;
            this.S = this.Wa = 0;
            this.D = new ah;
            this.pa = [];
            this.I = new Map;
            this.Va = !1;
            this.l = new Map;
            this.N = null;
            this.ca = new Map;
            this.H = new Map;
            this.i = !1
        }
        q = Up.prototype;
        q.configure = function (a) {
            this.o = a
        };
        q.start = function (a, b) {
            var c = this,
                d, e;
            return K(function (f) {
                if (1 == f.g) return c.C = b, c.i = b.isLowLatencyMode(), v(f, Wp(c, gh([a], c.o.retryParameters), 0), 2);
                if (3 != f.g) return d = f.h, c.L = d.uri, v(f, Xp(c, d.data), 3);
                e = c.Ea;
                0 < e && c.s.T(e);
                return f["return"](c.A)
            })
        };
        q.stop = function () {
            this.s && (this.s.stop(), this.s = null);
            var a = [];
            this.D && (a.push(this.D.destroy()), this.D = null);
            this.o = this.C = null;
            this.Fa.clear();
            this.A = null;
            this.h.clear();
            this.m.clear();
            this.l.clear();
            this.u.clear();
            return Promise.all(a)
        };
        q.update = function () {
            var a = this,
                b, c, d;
            return K(function (e) {
                if (1 == e.g) {
                    if (a.j == Vp) return e["return"]();
                    b = [];
                    a.N = null;
                    c = Array.from(a.h.values());
                    return c.length ? v(e, Yp(a, c[0]), 2) : e.v(2)
                }
                for (d = 1; d < c.length; d++) b.push(Yp(a, c[d]));
                return v(e, Promise.all(b), 0)
            })
        };

        function Yp(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p, r, u;
            return K(function (w) {
                if (1 == w.g) return c = Zp, d = b.xe, e = new ne(d), a.i && b.Be && qe(e, new se("_HLS_skip=YES")), v(w, Wp(a, gh([e.toString()], a.o.retryParameters), 0), 2);
                if (3 != w.g) {
                    f = w.h;
                    g = Np(a.X, f.data, f.uri);
                    if (1 != g.type) throw new O(2, 4, 4017);
                    h = Ep(g.W, "EXT-X-DEFINE");
                    k = $p(a, h);
                    l = b.stream;
                    return v(w, aq(a, b.Kc, g, l.mimeType, b.rd, k, b.Ie), 3)
                }
                m = w.h;
                l.segmentIndex.Ab(m, a.g.Ya());
                m.length && (n = Hp(g.W, "EXT-X-MEDIA-SEQUENCE", 0), p = b.rd.get(n), l.segmentIndex.cb(p));
                r = m[m.length -
                    1];
                if (u = Gp(g.W, "EXT-X-ENDLIST")) bq(a, c.we), a.g.Ja(r.endTime);
                z(w)
            })
        }
        q.onExpirationUpdated = function () {};

        function Xp(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p, r, u, w, x, y, D, C, A, F, G, H, I, J, M;
            return K(function (R) {
                switch (R.g) {
                case 1:
                    c = Np(a.X, b, a.L);
                    if (0 != c.type) throw new O(2, 4, 4022);
                    d = Ep(c.W, "EXT-X-DEFINE");
                    for (var S = t(d), N = S.next(); !N.done; N = S.next()) {
                        var aa = N.value;
                        N = Z(aa, "NAME");
                        aa = Z(aa, "VALUE");
                        N && aa && (a.u.has(N) || a.u.set(N, aa))
                    }
                    e = Ep(c.W, "EXT-X-MEDIA");
                    f = Ep(c.W, "EXT-X-STREAM-INF");
                    S = t(f);
                    for (N = S.next(); !N.done; N = S.next()) {
                        var qa = N.value;
                        aa = Z(qa, "AUDIO");
                        N = Z(qa, "VIDEO");
                        var fa = Z(qa, "SUBTITLES");
                        qa = cq(a, qa);
                        if (fa) {
                            var Ya =
                                De(Fe, qa);
                            a.l.set(fa, Ya);
                            wc(qa, Ya)
                        }
                        aa && (fa = Ce("audio", qa), a.l.set(aa, fa));
                        N && (aa = Ce("video", qa), a.l.set(N, aa))
                    }
                    g = Ep(c.W, "EXT-X-SESSION-DATA");
                    h = t(g);
                    for (k = h.next(); !k.done; k = h.next())
                        if (l = k.value, m = Z(l, "DATA-ID"), n = Z(l, "URI"), p = Z(l, "LANGUAGE"), r = Z(l, "VALUE"), u = {
                                id: m
                            }, n && (u.uri = Ae([a.L], [n])[0]), p && (u.language = p), r && (u.value = r), w = new Q("sessiondata", u), a.C) a.C.onEvent(w);
                    return v(R, dq(a, e), 2);
                case 2:
                    S = Fp(e, "CLOSED-CAPTIONS");
                    S = t(S);
                    for (N = S.next(); !N.done; N = S.next()) fa = N.value, N = eq(fa), aa = Bp(fa, "GROUP-ID"),
                        fa = Bp(fa, "INSTREAM-ID"), a.I.get(aa) || a.I.set(aa, new Map), a.I.get(aa).set(fa, N);
                    return v(R, fq(a, f), 3);
                case 3:
                    return x = R.h, v(R, gq(a, e), 4);
                case 4:
                    y = R.h;
                    if (!a.C) throw new O(2, 7, 7001);
                    if (a.Va && 0 == x.length) throw new O(2, 4, 4034);
                    C = D = Infinity;
                    A = t(a.h.values());
                    for (F = A.next(); !F.done; F = A.next()) G = F.value, D = Math.min(D, G.ee), "text" != G.stream.type && (C = Math.min(C, G.kf - G.ee));
                    a.j != Vp ? (a.g = new T(0, a.o.defaultPresentationDelay ? a.o.defaultPresentationDelay : a.S ? a.S : 3 * a.oa), a.g.ac(!1)) : (a.g = new T(null, 0), a.g.ac(!0));
                    hq(a);
                    if (a.j != Vp) a.Ea = a.F, H = Zp, a.j == H.ve && (I = a.g.Gc, isNaN(a.o.availabilityWindowOverride) || (I = a.o.availabilityWindowOverride), a.g.Md(I));
                    else
                        for (a.g.Ja(C), a.g.offset(-D), J = t(a.h.values()), F = J.next(); !F.done; F = J.next()) M = F.value, M.stream.segmentIndex.offset(-D), M.stream.segmentIndex.Xa(0, C);
                    a.A = {
                        presentationTimeline: a.g,
                        variants: x,
                        textStreams: y,
                        imageStreams: [],
                        offlineSessionIds: [],
                        minBufferTime: 0
                    };
                    a.C.makeTextStreamsForClosedCaptions(a.A);
                    z(R)
                }
            })
        }

        function $p(a, b) {
            for (var c = new Map, d = t(b), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = Z(f, "NAME");
                var g = Z(f, "VALUE");
                f = Z(f, "IMPORT");
                e && g && c.set(e, g);
                f && (e = a.u.get(f)) && c.set(f, e)
            }
            return c
        }

        function gq(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p, r;
            return K(function (u) {
                if (1 == u.g) return c = Fp(b, "SUBTITLES"), d = c.map(function (w) {
                    var x, y, D;
                    return K(function (C) {
                        if (1 == C.g) {
                            if (x = a.o.disableText) return C["return"](null);
                            B(C, 2);
                            return v(C, iq(a, w), 4)
                        }
                        if (2 != C.g) return y = C.h, C["return"](y.stream);
                        D = E(C);
                        if (a.o.hls.ignoreTextStreamFailures) return C["return"](null);
                        throw D;
                    })
                }), v(u, Promise.all(d), 2);
                e = u.h;
                f = t(c);
                for (g = f.next(); !g.done; g = f.next())
                    if (h = g.value, k = Bp(h, "GROUP-ID"), l = a.l.get(k))
                        if (m = a.m.get(k))
                            for (n =
                                t(m), p = n.next(); !p.done; p = n.next()) r = p.value, r.stream.codecs = l;
                return u["return"](e.filter(function (w) {
                    return w
                }))
            })
        }

        function dq(a, b) {
            var c;
            return K(function (d) {
                if (1 == d.g) return b = b.filter(function (e) {
                    var f = Z(e, "URI") || "";
                    return "SUBTITLES" != Z(e, "TYPE") && "" != f
                }), b.length ? v(d, iq(a, b[0]), 2) : d.v(2);
                c = b.slice(1).map(function (e) {
                    return iq(a, e)
                });
                return v(d, Promise.all(c), 0)
            })
        }

        function fq(a, b) {
            var c, d, e;
            return K(function (f) {
                if (1 == f.g) return c = b.map(function (g) {
                    var h, k, l, m, n, p, r, u;
                    return K(function (w) {
                        if (1 == w.g) return h = Z(g, "FRAME-RATE"), k = Number(Z(g, "AVERAGE-BANDWIDTH")) || Number(Bp(g, "BANDWIDTH")), l = Z(g, "RESOLUTION"), m = t(l ? l.split("x") : [null, null]), n = m.next().value, p = m.next().value, r = Z(g, "VIDEO-RANGE"), v(w, jq(a, g), 2);
                        if (u = w.h) {
                            for (var x = w["return"], y = u.audio, D = u.video, C = t(D), A = C.next(); !A.done; A = C.next())
                                if (A = A.value.stream) A.width = Number(n) || void 0, A.height = Number(p) ||
                                    void 0, A.frameRate = Number(h) || void 0, A.hdr = r || void 0;
                            C = a.o.disableAudio;
                            if (!y.length || C) y = [null];
                            C = a.o.disableVideo;
                            if (!D.length || C) D = [null];
                            C = [];
                            y = t(y);
                            for (A = y.next(); !A.done; A = y.next()) {
                                A = A.value;
                                for (var F = t(D), G = F.next(); !G.done; G = F.next()) {
                                    var H = G.value;
                                    G = A ? A.stream : null;
                                    var I = H ? H.stream : null,
                                        J = A ? A.stream.drmInfos : null,
                                        M = H ? H.stream.drmInfos : null;
                                    H = (H ? H.Kc : "") + " - " + (A ? A.Kc : "");
                                    G && I && J.length && M.length && !(0 < gi(J, M).length) || a.Fa.has(H) || (G = {
                                        id: a.Ma++,
                                        language: G ? G.language : "und",
                                        primary: !!G && G.primary ||
                                            !!I && I.primary,
                                        audio: G,
                                        video: I,
                                        bandwidth: k,
                                        allowedByApplication: !0,
                                        allowedByKeySystem: !0,
                                        decodingInfos: []
                                    }, C.push(G), a.Fa.add(H))
                                }
                            }
                            w = x.call(w, C)
                        } else w = w["return"]([]);
                        return w
                    })
                }), v(f, Promise.all(c), 2);
                d = f.h;
                e = d.reduce(Lb, []);
                e = e.filter(function (g) {
                    return null != g
                });
                return f["return"](e)
            })
        }

        function jq(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p, r, u, w;
            return K(function (x) {
                if (1 == x.g) return c = Ge, d = cq(a, b), e = Z(b, "AUDIO"), f = Z(b, "VIDEO"), h = (g = e || f) && a.m.has(g) ? a.m.get(g) : [], k = {
                    audio: e ? h : [],
                    video: f ? h : []
                }, m = !1, n = Bp(b, "URI"), p = k.audio.find(function (y) {
                    return y && y.Kc == n
                }), r = De(c.Na, d), (u = De(c.ab, d)) && !r ? l = c.ab : !h.length && u && r ? (l = c.Na, d = [
                    [r, u].join()
                ]) : k.audio.length && p ? (l = c.ab, m = !0) : l = k.video.length ? c.ab : c.Na, m ? x.v(2) : v(x, kq(a, b, d, l), 3);
                2 != x.g && (w = x.h);
                if (w) k[w.stream.type] = [w];
                else if (null === w) return x["return"](null);
                lq(k);
                return x["return"](k)
            })
        }

        function cq(a, b) {
            var c = [];
            a.o.disableVideo || c.push("avc1.42E01E");
            var d = Z(b, "CODECS", c.join(",")).split(/\s*,\s*/);
            c = new Set;
            var e = [];
            d = t(d);
            for (var f = d.next(); !f.done; f = d.next()) {
                f = f.value;
                var g = Ue(f);
                c.has(g) || (e.push(f), c.add(g))
            }
            return e
        }

        function eq(a) {
            a = Z(a, "LANGUAGE") || "und";
            return Mf(a)
        }

        function lq(a) {
            a = t(a.audio.concat(a.video));
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value) {
                    var c = b.stream.codecs.split(",");
                    c = c.filter(function (d) {
                        return "mp4a.40.34" != d
                    });
                    b.stream.codecs = c.join(",")
                }
        }

        function iq(a, b) {
            var c, d, e, f, g, h, k, l, m, n, p, r, u, w;
            return K(function (x) {
                if (1 == x.g) {
                    c = Bp(b, "GROUP-ID");
                    d = "";
                    var y = Bp(b, "TYPE").toLowerCase();
                    "subtitles" == y && (y = Fe);
                    e = y;
                    e != Fe && c && a.l.has(c) && (d = a.l.get(c));
                    f = mq(Bp(b, "URI"), a.u);
                    if (a.h.has(f)) return x["return"](a.h.get(f));
                    g = eq(b);
                    h = Z(b, "NAME");
                    k = b.getAttribute("DEFAULT");
                    l = "YES" == k;
                    "audio" == e ? y = (y = Z(b, "CHANNELS")) ? parseInt(y.split("/")[0], 10) : null : y = null;
                    m = y;
                    "audio" == e ? y = (y = Z(b, "CHANNELS")) ? y.includes("/JOC") : !1 : y = !1;
                    n = y;
                    p = Z(b, "CHARACTERISTICS");
                    r = Z(b,
                        "FORCED");
                    u = "YES" == r;
                    return v(x, nq(a, f, d, e, g, l, h, m, null, p, u, n), 2)
                }
                w = x.h;
                a.m.has(c) ? a.m.get(c).push(w) : a.m.set(c, [w]);
                if (null == w) return x["return"](null);
                if (a.h.has(f)) return x["return"](a.h.get(f));
                a.h.set(f, w);
                return x["return"](w)
            })
        }

        function kq(a, b, c, d) {
            var e, f, g, h;
            return K(function (k) {
                if (1 == k.g) {
                    e = mq(Bp(b, "URI"), a.u);
                    if (a.h.has(e)) return k["return"](a.h.get(e));
                    var l = Z(b, "CLOSED-CAPTIONS");
                    f = "video" == d && l && "NONE" != l ? a.I.get(l) : null;
                    g = Ce(d, c);
                    return v(k, nq(a, e, g, d, "und", !1, null, null, f, null, !1, !1), 2)
                }
                h = k.h;
                if (null == h) return k["return"](null);
                if (a.h.has(e)) return k["return"](a.h.get(e));
                a.h.set(e, h);
                return k["return"](h)
            })
        }

        function nq(a, b, c, d, e, f, g, h, k, l, m, n) {
            var p, r, u, w, x, y, D, C, A, F, G, H, I, J, M, R, S, N, aa, qa, fa, Ya, Da, Ia, Cc, kb, Bb, Za, Pb, mf, $a, $d, Ih, Jh, pf, Vm, Wm, Xm, Ym;
            return K(function (ab) {
                switch (ab.g) {
                case 1:
                    return p = Ae([a.L], [b])[0], v(ab, Wp(a, gh([p], a.o.retryParameters), 0), 2);
                case 2:
                    r = ab.h;
                    p = r.uri;
                    u = Np(a.X, r.data, p);
                    if (1 != u.type) throw new O(2, 4, 4017);
                    w = [];
                    if (u.segments)
                        for (x = t(u.segments), y = x.next(); !y.done; y = x.next()) D = y.value, C = Ep(D.W, "EXT-X-KEY"), w.push.apply(w, ja(C));
                    A = !1;
                    F = [];
                    G = new Set;
                    H = t(w);
                    for (I = H.next(); !I.done; I =
                        H.next())
                        if (J = I.value, M = Bp(J, "METHOD"), "NONE" != M) {
                            A = !0;
                            if ("AES-128" == M) return a.Va = !0, ab["return"](null);
                            R = Bp(J, "KEYFORMAT");
                            if (N = (S = oq[R]) ? S(J) : null) {
                                if (N.keyIds)
                                    for (aa = t(N.keyIds), qa = aa.next(); !qa.done; qa = aa.next()) fa = qa.value, G.add(fa);
                                F.push(N)
                            }
                        } if (A && !F.length) throw new O(2, 4, 4026);
                    Ya = Ep(u.W, "EXT-X-DEFINE");
                    Da = $p(a, Ya);
                    pq(a, u);
                    return v(ab, qq(a, d, c, u, Da), 3);
                case 3:
                    return Ia = ab.h, rq.includes(Ia) && (c = ""), Cc = new Map, kb = new Map, B(ab, 4), v(ab, aq(a, b, u, Ia, Cc, Da, kb), 6);
                case 6:
                    Bb = ab.h;
                    wa(ab, 5);
                    break;
                case 4:
                    Za =
                        E(ab);
                    if (4035 == Za.code) return Ua("Skipping unsupported HLS stream", Ia, b), ab["return"](null);
                    throw Za;
                case 5:
                    Pb = Bb[0].startTime;
                    mf = Bb[Bb.length - 1].endTime;
                    $a = new U(Bb);
                    $d = d == Fe ? "subtitle" : void 0;
                    Ih = [];
                    if (l)
                        for (Jh = t(l.split(",")), pf = Jh.next(); !pf.done; pf = Jh.next()) Vm = pf.value, Ih.push(Vm);
                    Xm = (Wm = Gp(u.W, "EXT-X-SERVER-CONTROL")) ? null != Wm.getAttribute("CAN-SKIP-UNTIL") : !1;
                    Ym = {
                        id: a.Ma++,
                        originalId: g,
                        createSegmentIndex: function () {
                            return Promise.resolve()
                        },
                        segmentIndex: $a,
                        mimeType: Ia,
                        codecs: c,
                        kind: $d,
                        encrypted: A,
                        drmInfos: F,
                        keyIds: G,
                        language: e,
                        label: g,
                        type: d,
                        primary: f,
                        trickModeVideo: null,
                        emsgSchemeIdUris: null,
                        frameRate: void 0,
                        pixelAspectRatio: void 0,
                        width: void 0,
                        height: void 0,
                        bandwidth: void 0,
                        roles: Ih,
                        forced: m,
                        channelsCount: h,
                        audioSamplingRate: null,
                        spatialAudio: n,
                        closedCaptions: k,
                        hdr: void 0,
                        tilesLayout: void 0
                    };
                    return ab["return"]({
                        stream: Ym,
                        Kc: b,
                        xe: p,
                        ee: Pb,
                        kf: mf,
                        rd: Cc,
                        Ie: kb,
                        Be: Xm
                    })
                }
            })
        }

        function pq(a, b) {
            var c = Gp(b.W, "EXT-X-PLAYLIST-TYPE"),
                d = Gp(b.W, "EXT-X-ENDLIST");
            d = c && "VOD" == c.value || d;
            c = c && "EVENT" == c.value && !d;
            c = !d && !c;
            if (d) bq(a, Vp);
            else {
                c ? bq(a, sq) : bq(a, tq);
                d = Gp(b.W, "EXT-X-TARGETDURATION");
                if (!d) throw new O(2, 4, 4024, "EXT-X-TARGETDURATION");
                d = Number(d.value);
                c = Gp(b.W, "EXT-X-PART-INF");
                a.i && c ? (a.Wa = Number(Bp(c, "PART-TARGET")), a.F = Math.min(a.Wa, a.F), c = Gp(b.W, "EXT-X-SERVER-CONTROL"), a.S = c ? Number(Bp(c, "PART-HOLD-BACK")) : 0) : a.F = Math.min(d, a.F);
                a.oa = Math.max(d, a.oa)
            }
        }

        function uq(a, b, c, d) {
            c = Gp(c, "EXT-X-MAP");
            if (!c) return null;
            var e = Bp(c, "URI");
            d = mq(Ae([b], [e])[0], d);
            b = [d, Z(c, "BYTERANGE", "")].join("-");
            a.ca.has(b) || (c = vq(d, c), a.ca.set(b, c));
            return a.ca.get(b)
        }

        function vq(a, b) {
            var c = 0,
                d = null,
                e = Z(b, "BYTERANGE");
            e && (c = e.split("@"), d = Number(c[0]), c = Number(c[1]), d = c + d - 1);
            return new oi(function () {
                return [a]
            }, c, d)
        }

        function wq(a, b, c, d, e, f, g, h) {
            var k = d.W,
                l = mq(d.g, g),
                m = Gp(k, "EXTINF"),
                n = g = 0,
                p = null,
                r = [];
            if (a.i && d.h.length) {
                a = {};
                d = t(mb(d.h));
                for (var u = d.next(); !u.done; a = {
                        Sc: a.Sc
                    }, u = d.next()) {
                    u = u.value;
                    var w = u.ha;
                    u = u.item;
                    var x = 0 == w ? c : r[r.length - 1];
                    w = 0 == w ? e : x.endTime;
                    var y = Number(Z(u, "DURATION"));
                    y = w + y;
                    var D = 0,
                        C = null;
                    "EXT-X-PRELOAD-HINT" == u.name ? D = (x = Z(u, "BYTERANGE-START")) ? Number(x) : 0 : (D = Z(u, "BYTERANGE"), x = t(xq(x, D)), D = x.next().value, C = x.next().value);
                    u = Z(u, "URI");
                    a.Sc = Ae([h], [u])[0];
                    r.push(new qi(w, y, function (A) {
                            return function () {
                                return [A.Sc]
                            }
                        }(a),
                        D, C, b, f, 0, Infinity))
                }
            } else if (!m) throw new O(2, 4, 4024, "EXTINF");
            m ? g = e + Number(m.value.split(",")[0]) : g = r[r.length - 1].endTime;
            (h = Gp(k, "EXT-X-BYTERANGE")) ? (c = t(xq(c, h.value)), n = c.next().value, p = c.next().value) : r.length && (n = r[0].ja, p = r[r.length - 1].da);
            return new qi(e, g, function () {
                return l.length ? [l] : []
            }, n, p, b, f, 0, Infinity, r)
        }

        function xq(a, b) {
            var c = 0,
                d = null;
            b && (c = b.split("@"), d = Number(c[0]), c = c[1] ? Number(c[1]) : a.da + 1, d = c + d - 1);
            return [c, d]
        }

        function hq(a) {
            if (a.g) {
                for (var b = t(a.pa), c = b.next(); !c.done; c = b.next()) a.g.Cb(c.value);
                a.pa = []
            }
        }

        function aq(a, b, c, d, e, f, g) {
            var h, k, l, m, n, p, r, u, w, x, y, D, C, A, F, G, H, I, J, M, R, S, N, aa, qa;
            return K(function (fa) {
                switch (fa.g) {
                case 1:
                    h = c.segments;
                    l = Hp(c.W, "EXT-X-MEDIA-SEQUENCE", 0);
                    n = (m = Gp(c.W, "EXT-X-SKIP")) ? Number(Z(m, "SKIPPED-SEGMENTS")) : 0;
                    p = l + n;
                    if (a.j != Vp && e.has(p)) {
                        r = e.get(p);
                        fa.v(2);
                        break
                    }
                    if (null != a.N) {
                        fa.v(3);
                        break
                    }
                    k = uq(a, c.g, h[0].W, f);
                    u = a;
                    return v(fa, yq(a, b, k, d, p, !1, h[0], f), 4);
                case 4:
                    u.N = fa.h;
                case 3:
                    r = a.N;
                case 2:
                    w = h[0].g;
                    bb(w.split("/").pop());
                    x = Hp(c.W, "EXT-X-DISCONTINUITY-SEQUENCE");
                    if (a.i && (g.has(x) ||
                            g.set(x, p), n))
                        for (; g.has(x + 1) && g.get(x + 1) < p;) x++;
                    y = a.H.get(x) || 0;
                    D = [];
                    C = function (Ya) {
                        return mb(Ya)
                    };
                    A = t(C(h));
                    F = A.next();
                case 5:
                    if (F.done) {
                        fa.v(7);
                        break
                    }
                    H = G = F.value;
                    I = H.ha;
                    J = H.item;
                    M = D[D.length - 1];
                    R = 0 == I ? r : M.endTime;
                    p = l + n + I;
                    e.set(p, R);
                    k = uq(a, c.g, J.W, f);
                    S = Gp(J.W, "EXT-X-DISCONTINUITY");
                    if (!S) {
                        fa.v(8);
                        break
                    }
                    x++;
                    g.set(x, p);
                    return v(fa, zq(a, x, b, k, d, p, J, f, R), 9);
                case 9:
                    y = fa.h;
                case 8:
                    !a.i && (N = a.C.isAutoLowLatencyMode()) && (a.C.enableLowLatencyMode(), a.i = a.C.isLowLatencyMode());
                    aa = Gp(J.W, "EXTINF");
                    a.i || aa ?
                        (qa = wq(a, k, M, J, R, y, f, c.g), D.push(qa)) : a.i || Ua("Low-latency HLS live stream detected, but low-latency streaming mode is not enabled in Shaka Player. Set streaming.lowLatencyMode configuration to true, and see https://bit.ly/3clctcj for details.");
                    F = A.next();
                    fa.v(5);
                    break;
                case 7:
                    return a.pa.push(D), hq(a), fa["return"](D)
                }
            })
        }

        function zq(a, b, c, d, e, f, g, h, k) {
            var l, m;
            return K(function (n) {
                if (1 == n.g) return l = 0, a.H.has(b) ? (l = a.H.get(b), n.v(2)) : v(n, yq(a, c, d, e, f, !0, g, h), 3);
                2 != n.g && (m = n.h, l = k - m, a.H.set(b, l));
                return n["return"](l)
            })
        }

        function Aq(a, b) {
            var c, d, e, f, g, h;
            return K(function (k) {
                switch (k.g) {
                case 1:
                    c = mh;
                    d = aj(b.ma(), b.ja, b.da, a.o.retryParameters);
                    if (a.o.hls.useFullSegmentsForStartTime) return k["return"](Wp(a, d, c));
                    e = aj(b.ma(), b.ja, b.ja + 2048 - 1, a.o.retryParameters);
                    B(k, 2);
                    return v(k, Wp(a, e, c), 4);
                case 4:
                    return f = k.h, k["return"](f);
                case 2:
                    g = E(k);
                    if (7001 == g.code) throw g;
                    Ua("Unable to fetch the starting part of HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",
                        e.uris[0]);
                    return v(k, Wp(a, d, c), 5);
                case 5:
                    return h = k.h, k["return"](h)
                }
            })
        }

        function yq(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, u, w;
            return K(function (x) {
                switch (x.g) {
                case 1:
                    k = wq(a, c, null, g, 0, 0, h, "");
                    if (a.A && !f && (l = a.h.get(b), m = l.rd.get(e), void 0 != m)) return x["return"](m);
                    d = d.toLowerCase();
                    if (rq.includes(d)) throw Ua("Raw formats are not yet supported.  Skipping " + d), new O(1, 4, 4035);
                    if ("video/webm" == d) throw Ua("WebM in HLS is not yet supported.  Skipping."), new O(1, 4, 4035);
                    if ("video/mp4" != d && "audio/mp4" != d) {
                        x.v(2);
                        break
                    }
                    n = [Aq(a, k)];
                    c && n.push(Aq(a, c));
                    return v(x, Promise.all(n), 3);
                case 3:
                    return p =
                        x.h, r = p[0], u = p[1] || p[0], x["return"](Bq(b, r.uri, r.data, u.data));
                case 2:
                    if ("video/mp2t" != d) {
                        x.v(4);
                        break
                    }
                    return v(x, Aq(a, k), 5);
                case 5:
                    return w = x.h, x["return"](Cq(b, w.uri, w.data));
                case 4:
                    throw new O(2, 4, 4030, b);
                }
            })
        }

        function Bq(a, b, c, d) {
            var e = 0;
            (new Qb).box("moov", Ub).box("trak", Ub).box("mdia", Ub).U("mdhd", function (h) {
                e = ce(h.reader, h.version).timescale;
                h.parser.stop()
            }).parse(d, !0);
            if (!e) throw new O(2, 4, 4030, a, b);
            var f = 0,
                g = !1;
            (new Qb).box("moof", Ub).box("traf", Ub).U("tfdt", function (h) {
                f = be(h.reader, h.version).bd / e;
                g = !0;
                h.parser.stop()
            }).parse(c, !0);
            if (!g) throw new O(2, 4, 4030, a, b);
            return f
        }

        function Cq(a, b, c) {
            function d() {
                f.seek(g + 188);
                h = f.$();
                71 != h && (f.seek(g + 192), h = f.$());
                71 != h && (f.seek(g + 204), h = f.$());
                71 != h && e();
                f.je(1)
            }

            function e() {
                throw new O(2, 4, 4030, a, b);
            }
            for (var f = new Db(c, 0), g = 0, h = 0;;)
                if (g = f.Z(), h = f.$(), 71 != h && e(), c = f.Fb(), 8191 == (c & 8191)) d();
                else if (c & 16384)
                if (c = (f.$() & 48) >> 4, 0 != c && 2 != c || e(), 3 == c && (c = f.$(), f.skip(c)), 1 != f.M() >> 8) d();
                else {
                    f.skip(3);
                    c = f.$() >> 6;
                    0 != c && 1 != c || e();
                    0 == f.$() && e();
                    c = f.$();
                    var k = f.Fb(),
                        l = f.Fb();
                    return (1073741824 * ((c & 14) >> 1) + ((k & 65534) << 14 | (l & 65534) >> 1)) /
                        9E4
                }
            else d()
        }

        function mq(a, b) {
            var c = String(a).replace(/%7B/g, "{").replace(/%7D/g, "}"),
                d = c.match(/{\$\w*}/g);
            if (d) {
                d = t(d);
                for (var e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = e.slice(2, e.length - 1),
                        g = b.get(f);
                    if (g) c = c.replace(e, g);
                    else throw new O(2, 4, 4039, f);
                }
            }
            return c
        }

        function qq(a, b, c, d, e) {
            var f, g, h, k, l, m, n, p, r, u, w;
            return K(function (x) {
                if (1 == x.g) {
                    f = Ge;
                    g = mh;
                    h = mq(d.segments[0].g, e);
                    k = new ne(h);
                    l = k.wa.split(".").pop();
                    m = Dq[b];
                    if (n = m[l]) return x["return"](n);
                    if (b == f.fa) return c && "vtt" != c && "wvtt" != c ? x["return"]("application/mp4") : x["return"]("text/vtt");
                    p = gh([h], a.o.retryParameters);
                    p.method = "HEAD";
                    return v(x, Wp(a, p, g), 2)
                }
                r = x.h;
                u = r.headers["content-type"];
                return u ? x["return"](u.split(";")[0]) : (w = m.mp4, x["return"](w))
            })
        }
        q.Wb = function () {
            var a = this,
                b, c;
            return K(function (d) {
                if (1 == d.g) {
                    if (!a.C) return d["return"]();
                    B(d, 2);
                    return v(d, a.update(), 4)
                }
                if (2 != d.g) return b = a.Ea, a.s.T(b), wa(d, 0);
                c = E(d);
                if (!a.C) return d["return"]();
                c.severity = 1;
                a.C.onError(c);
                a.s.T(.1);
                z(d)
            })
        };

        function bq(a, b) {
            a.j = b;
            a.g && a.g.ac(a.j == Vp);
            a.j != Vp || a.s.stop()
        }

        function Wp(a, b, c) {
            if (!a.D) throw new O(2, 7, 7001);
            b = a.C.networkingEngine.request(c, b);
            bh(a.D, b);
            return b.promise
        }
        L("shaka.hls.HlsParser", Up);
        var rq = ["audio/aac", "audio/ac3", "audio/ec3", "audio/mpeg"],
            Dq = {
                audio: {
                    mp4: "audio/mp4",
                    mp4a: "audio/mp4",
                    m4s: "audio/mp4",
                    m4i: "audio/mp4",
                    m4a: "audio/mp4",
                    m4f: "audio/mp4",
                    cmfa: "audio/mp4",
                    ts: "video/mp2t",
                    aac: "audio/aac",
                    ac3: "audio/ac3",
                    ec3: "audio/ec3",
                    mp3: "audio/mpeg"
                },
                video: {
                    mp4: "video/mp4",
                    mp4v: "video/mp4",
                    m4s: "video/mp4",
                    m4i: "video/mp4",
                    m4v: "video/mp4",
                    m4f: "video/mp4",
                    cmfv: "video/mp4",
                    ts: "video/mp2t"
                },
                text: {
                    mp4: "application/mp4",
                    m4s: "application/mp4",
                    m4i: "application/mp4",
                    m4f: "application/mp4",
                    cmft: "application/mp4",
                    vtt: "text/vtt",
                    ttml: "application/ttml+xml"
                }
            },
            oq = {
                "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function (a) {
                    var b = Bp(a, "METHOD");
                    if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
                    b = Bp(a, "URI");
                    b = Tp(b);
                    b = qb(b.data);
                    b = Be("com.widevine.alpha", [{
                        initDataType: "cenc",
                        initData: b
                    }]);
                    if (a = Z(a, "KEYID")) b.keyIds = new Set([a.toLowerCase().substr(2)]);
                    return b
                },
                "com.microsoft.playready": function (a) {
                    var b = Bp(a, "METHOD");
                    if (!["SAMPLE-AES", "SAMPLE-AES-CTR"].includes(b)) return null;
                    a = Bp(a, "URI");
                    a = Tp(a);
                    a = qb(a.data);
                    b = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                    a = sn(a, b);
                    return Be("com.microsoft.playready", [{
                        initDataType: "cenc",
                        initData: a
                    }])
                }
            },
            Vp = "VOD",
            tq = "EVENT",
            sq = "LIVE",
            Zp = {
                we: Vp,
                Tf: tq,
                ve: sq
            };
        mi.m3u8 = function () {
            return new Up
        };
        ki["application/x-mpegurl"] = function () {
            return new Up
        };
        ki["application/vnd.apple.mpegurl"] = function () {
            return new Up
        };

        function Eq(a, b, c, d, e, f) {
            if (200 <= c && 299 >= c && 202 != c) return {
                uri: e || d,
                ge: d,
                data: b,
                headers: a,
                fromCache: !!a["x-shaka-from-cache"]
            };
            e = null;
            try {
                e = zb(b)
            } catch (g) {}
            throw new O(401 == c || 403 == c ? 2 : 1, 1, 1001, d, c, e, a, f);
        };

        function Fq() {}

        function Gq(a, b, c, d) {
            var e = new Hq;
            qh(b.headers).forEach(function (k, l) {
                e.append(l, k)
            });
            var f = new Iq,
                g = {
                    Rd: !1,
                    se: !1
                };
            a = Jq(a, c, {
                body: b.body || void 0,
                headers: e,
                method: b.method,
                signal: f.signal,
                credentials: b.allowCrossSiteCredentials ? "include" : void 0
            }, g, d, b.streamDataCallback);
            a = new Rg(a, function () {
                g.Rd = !0;
                f.abort();
                return Promise.resolve()
            });
            if (b = b.retryParameters.timeout) {
                var h = new P(function () {
                    g.se = !0;
                    f.abort()
                });
                h.T(b / 1E3);
                a["finally"](function () {
                    h.stop()
                })
            }
            return a
        }

        function Jq(a, b, c, d, e, f) {
            var g, h, k, l, m, n, p, r, u, w, x, y, D, C;
            return K(function (A) {
                switch (A.g) {
                case 1:
                    return g = Kq, h = Lq, n = m = 0, p = Date.now(), B(A, 2), v(A, g(a, c), 4);
                case 4:
                    return k = A.h, r = k.clone().body.getReader(), w = (u = k.headers.get("Content-Length")) ? parseInt(u, 10) : 0, x = function (F) {
                        function G() {
                            var H, I;
                            return K(function (J) {
                                switch (J.g) {
                                case 1:
                                    return B(J, 2), v(J, r.read(), 4);
                                case 4:
                                    H = J.h;
                                    wa(J, 3);
                                    break;
                                case 2:
                                    return E(J), J["return"]();
                                case 3:
                                    if (H.done) {
                                        J.v(5);
                                        break
                                    }
                                    m += H.value.byteLength;
                                    if (!f) {
                                        J.v(5);
                                        break
                                    }
                                    return v(J,
                                        f(H.value), 5);
                                case 5:
                                    I = Date.now();
                                    if (100 < I - p || H.done) e(I - p, m - n, w - m), n = m, p = I;
                                    H.done ? F.close() : (F.enqueue(H.value), G());
                                    z(J)
                                }
                            })
                        }
                        G()
                    }, new h({
                        start: x
                    }), v(A, k.arrayBuffer(), 5);
                case 5:
                    l = A.h;
                    wa(A, 3);
                    break;
                case 2:
                    y = E(A);
                    if (d.Rd) throw new O(1, 1, 7001, a, b);
                    if (d.se) throw new O(1, 1, 1003, a, b);
                    throw new O(1, 1, 1002, a, y, b);
                case 3:
                    return D = {}, C = k.headers, C.forEach(function (F, G) {
                        D[G.trim()] = F
                    }), A["return"](Eq(D, l, k.status, a, k.url, b))
                }
            })
        }

        function Mq() {
            if (window.ReadableStream) try {
                new ReadableStream({})
            } catch (a) {
                return !1
            } else return !1;
            return !(!window.fetch || !window.AbortController)
        }
        L("shaka.net.HttpFetchPlugin", Fq);
        Fq.isSupported = Mq;
        Fq.parse = Gq;
        var Kq = window.fetch,
            Iq = window.AbortController,
            Lq = window.ReadableStream,
            Hq = window.Headers;
        Mq() && (dh("http", Gq, 2, !0), dh("https", Gq, 2, !0));

        function Nq() {}

        function Oq(a, b, c, d) {
            var e = new Pq,
                f = Date.now(),
                g = 0,
                h = new Promise(function (k, l) {
                    e.open(b.method, a, !0);
                    e.responseType = "arraybuffer";
                    e.timeout = b.retryParameters.timeout;
                    e.withCredentials = b.allowCrossSiteCredentials;
                    e.onabort = function () {
                        l(new O(1, 1, 7001, a, c))
                    };
                    e.onload = function (n) {
                        n = n.target;
                        var p = n.getAllResponseHeaders().trim().split("\r\n"),
                            r = {};
                        p = t(p);
                        for (var u = p.next(); !u.done; u = p.next()) u = u.value.split(": "), r[u[0].toLowerCase()] = u.slice(1).join(": ");
                        try {
                            var w = Eq(r, n.response, n.status, a, n.responseURL,
                                c);
                            k(w)
                        } catch (x) {
                            l(x)
                        }
                    };
                    e.onerror = function (n) {
                        l(new O(1, 1, 1002, a, n, c))
                    };
                    e.ontimeout = function () {
                        l(new O(1, 1, 1003, a, c))
                    };
                    e.onprogress = function (n) {
                        var p = Date.now();
                        if (100 < p - f || n.lengthComputable && n.loaded == n.total) d(p - f, n.loaded - g, n.total - n.loaded), g = n.loaded, f = p
                    };
                    for (var m in b.headers) e.setRequestHeader(m.toLowerCase(), b.headers[m]);
                    e.send(b.body)
                });
            return new Rg(h, function () {
                e.abort();
                return Promise.resolve()
            })
        }
        L("shaka.net.HttpXHRPlugin", Nq);
        Nq.parse = Oq;
        var Pq = window.XMLHttpRequest;
        dh("http", Oq, 1, !0);
        dh("https", Oq, 1, !0);

        function Qq() {
            this.h = this.j = this.i = 0;
            this.g = new Map;
            this.l = 0
        }

        function Rq(a, b) {
            a.i += b;
            var c = a.l;
            a.l++;
            a.g.set(c, b);
            return c
        }
        Qq.prototype.close = function (a, b) {
            if (this.g.has(a)) {
                var c = this.g.get(a);
                this.g["delete"](a);
                this.j += c;
                this.h += b
            }
        };

        function Sq(a) {
            var b = this;
            this.O = a;
            this.g = new Map;
            this.J = new df(function () {
                var c = Array.from(b.g.values());
                return Promise.all(c.map(function (d) {
                    return d["catch"](function () {})
                }))
            });
            this.h = [];
            this.de = function () {};
            this.ce = function () {};
            this.Lb = new Qq
        }
        Sq.prototype.destroy = function () {
            return this.J.destroy()
        };

        function Tq(a, b, c) {
            a.de = b;
            a.ce = c
        }

        function Uq(a) {
            var b = a.h.map(function (c) {
                return c()
            });
            a.h = [];
            return Promise.all(b)
        }

        function Vq(a, b, c, d, e, f) {
            ef(a.J);
            var g = Rq(a.Lb, d);
            d = (a.g.get(b) || Promise.resolve()).then(function () {
                var h, k, l, m, n, p, r;
                return K(function (u) {
                    if (1 == u.g) return v(u, Wq(a, c), 2);
                    h = u.h;
                    if (a.J.g) throw new O(2, 9, 7001);
                    if (e)
                        for (m in k = qb(h), l = new rn(k), l.data) n = Number(m), p = l.data[n], r = l.g[n], a.ce(p, r);
                    a.Lb.close(g, h.byteLength);
                    var w = a.Lb;
                    a.de(0 == w.i ? 0 : w.j / w.i, a.Lb.h);
                    return u["return"](f(h))
                })
            });
            a.g.set(b, d);
            return d
        }

        function Xq(a, b, c) {
            ef(a.J);
            var d = (a.g.get(b) || Promise.resolve()).then(function () {
                return K(function (e) {
                    return v(e, c(), 0)
                })
            });
            a.g.set(b, d)
        }

        function Yq(a) {
            return K(function (b) {
                return 1 == b.g ? v(b, Promise.all(a.g.values()), 2) : b["return"](a.Lb.h)
            })
        }

        function Wq(a, b) {
            var c, d, e, f;
            return K(function (g) {
                if (1 == g.g) return c = mh, d = a.O.request(c, b), e = function () {
                    return d.abort()
                }, a.h.push(e), v(g, d.promise, 2);
                f = g.h;
                wc(a.h, e);
                return g["return"](f.data)
            })
        };

        function Zq(a, b) {
            var c = this;
            this.i = a;
            this.h = a.objectStore(b);
            this.g = new He;
            a.onabort = function (d) {
                d.preventDefault();
                c.g.reject()
            };
            a.onerror = function (d) {
                d.preventDefault();
                c.g.reject()
            };
            a.oncomplete = function () {
                c.g.resolve()
            }
        }
        Zq.prototype.abort = function () {
            var a = this;
            return K(function (b) {
                if (1 == b.g) {
                    try {
                        a.i.abort()
                    } catch (c) {}
                    B(b, 2);
                    return v(b, a.g, 4)
                }
                if (2 != b.g) return wa(b, 0);
                E(b);
                z(b)
            })
        };

        function $q(a, b) {
            return new Promise(function (c, d) {
                var e = a.h.openCursor();
                e.onerror = d;
                e.onsuccess = function () {
                    var f;
                    return K(function (g) {
                        if (1 == g.g) {
                            if (null == e.result) return c(), g["return"]();
                            f = e.result;
                            return v(g, b(f.key, f.value, f), 2)
                        }
                        f["continue"]();
                        z(g)
                    })
                }
            })
        }
        Zq.prototype.store = function () {
            return this.h
        };
        Zq.prototype.promise = function () {
            return this.g
        };

        function ar(a) {
            this.h = a;
            this.g = []
        }
        ar.prototype.destroy = function () {
            return Promise.all(this.g.map(function (a) {
                return a.abort()
            }))
        };

        function br(a, b) {
            return cr(a, b, "readwrite")
        }

        function cr(a, b, c) {
            c = a.h.transaction([b], c);
            var d = new Zq(c, b);
            a.g.push(d);
            d.promise().then(function () {
                wc(a.g, d)
            }, function () {
                wc(a.g, d)
            });
            return d
        };

        function dr(a, b, c) {
            this.g = new ar(a);
            this.i = b;
            this.h = c
        }
        q = dr.prototype;
        q.destroy = function () {
            return this.g.destroy()
        };
        q.hasFixedKeySpace = function () {
            return !0
        };
        q.addSegments = function () {
            return er(this.i)
        };
        q.removeSegments = function (a, b) {
            return fr(this, this.i, a, b)
        };
        q.getSegments = function (a) {
            var b = this,
                c;
            return K(function (d) {
                if (1 == d.g) return v(d, gr(b, b.i, a), 2);
                c = d.h;
                return d["return"](c.map(function (e) {
                    return b.Sd(e)
                }))
            })
        };
        q.addManifests = function () {
            return er(this.h)
        };
        q.updateManifestExpiration = function (a, b) {
            var c = br(this.g, this.h),
                d = c.store();
            d.get(a).onsuccess = function (e) {
                if (e = e.target.result) e.expiration = b, d.put(e, a)
            };
            return c.promise()
        };
        q.removeManifests = function (a, b) {
            return fr(this, this.h, a, b)
        };
        q.getManifests = function (a) {
            var b = this,
                c;
            return K(function (d) {
                if (1 == d.g) return v(d, gr(b, b.h, a), 2);
                c = d.h;
                return d["return"](Promise.all(c.map(function (e) {
                    return b.Ob(e)
                })))
            })
        };
        q.getAllManifests = function () {
            var a = this,
                b, c;
            return K(function (d) {
                return 1 == d.g ? (b = cr(a.g, a.h, "readonly"), c = new Map, v(d, $q(b, function (e, f) {
                    var g;
                    return K(function (h) {
                        if (1 == h.g) return v(h, a.Ob(f), 2);
                        g = h.h;
                        c.set(e, g);
                        z(h)
                    })
                }), 2)) : 3 != d.g ? v(d, b.promise(), 3) : d["return"](c)
            })
        };
        q.Sd = function (a) {
            return a
        };
        q.Ob = function (a) {
            return Promise.resolve(a)
        };

        function er(a) {
            return Promise.reject(new O(2, 9, 9011, "Cannot add new value to " + a))
        }
        q.add = function (a, b) {
            var c = this,
                d, e, f, g, h, k, l;
            return K(function (m) {
                if (1 == m.g) {
                    d = br(c.g, a);
                    e = d.store();
                    f = [];
                    g = {};
                    h = t(b);
                    for (k = h.next(); !k.done; g = {
                            ic: g.ic
                        }, k = h.next()) l = k.value, g.ic = e.add(l), g.ic.onsuccess = function (n) {
                        return function () {
                            f.push(n.ic.result)
                        }
                    }(g);
                    return v(m, d.promise(), 2)
                }
                return m["return"](f)
            })
        };

        function fr(a, b, c, d) {
            a = br(a.g, b);
            b = a.store();
            var e = {};
            c = t(c);
            for (var f = c.next(); !f.done; e = {
                    hc: e.hc
                }, f = c.next()) e.hc = f.value, b["delete"](e.hc).onsuccess = function (g) {
                return function () {
                    return d(g.hc)
                }
            }(e);
            return a.promise()
        }

        function gr(a, b, c) {
            var d, e, f, g, h, k, l;
            return K(function (m) {
                if (1 == m.g) {
                    d = cr(a.g, b, "readonly");
                    e = d.store();
                    f = {};
                    g = [];
                    h = {};
                    k = t(c);
                    for (l = k.next(); !l.done; h = {
                            Kb: h.Kb,
                            Ib: h.Ib
                        }, l = k.next()) h.Ib = l.value, h.Kb = e.get(h.Ib), h.Kb.onsuccess = function (n) {
                        return function () {
                            void 0 == n.Kb.result && g.push(n.Ib);
                            f[n.Ib] = n.Kb.result
                        }
                    }(h);
                    return v(m, d.promise(), 2)
                }
                if (g.length) throw new O(2, 9, 9012, "Could not find values for " + g);
                return m["return"](c.map(function (n) {
                    return f[n]
                }))
            })
        };

        function hr(a) {
            this.g = new ar(a)
        }
        hr.prototype.destroy = function () {
            return this.g.destroy()
        };
        hr.prototype.getAll = function () {
            var a = this,
                b, c;
            return K(function (d) {
                return 1 == d.g ? (b = cr(a.g, "session-ids", "readonly"), c = [], v(d, $q(b, function (e, f) {
                    c.push(f)
                }), 2)) : 3 != d.g ? v(d, b.promise(), 3) : d["return"](c)
            })
        };
        hr.prototype.add = function (a) {
            var b = br(this.g, "session-ids"),
                c = b.store();
            a = t(a);
            for (var d = a.next(); !d.done; d = a.next()) c.add(d.value);
            return b.promise()
        };
        hr.prototype.remove = function (a) {
            var b = this,
                c;
            return K(function (d) {
                return 1 == d.g ? (c = br(b.g, "session-ids"), v(d, $q(c, function (e, f, g) {
                    a.includes(f.sessionId) && g["delete"]()
                }), 2)) : v(d, c.promise(), 0)
            })
        };

        function ir() {
            this.g = new Map
        }
        ir.prototype.destroy = function () {
            for (var a = [], b = t(this.g.values()), c = b.next(); !c.done; c = b.next()) a.push(c.value.destroy());
            this.g.clear();
            return Promise.all(a)
        };
        ir.prototype.init = function () {
            var a = this;
            jr.forEach(function (e, f) {
                var g = e();
                g && a.g.set(f, g)
            });
            for (var b = [], c = t(this.g.values()), d = c.next(); !d.done; d = c.next()) b.push(d.value.init());
            return Promise.all(b)
        };

        function kr(a) {
            var b = null;
            a.g.forEach(function (c, d) {
                c.getCells().forEach(function (e, f) {
                    e.hasFixedKeySpace() || b || (b = {
                        path: {
                            Ia: d,
                            la: f
                        },
                        la: e
                    })
                })
            });
            if (b) return b;
            throw new O(2, 9, 9013, "Could not find a cell that supports add-operations");
        }

        function lr(a, b) {
            a.g.forEach(function (c, d) {
                c.getCells().forEach(function (e, f) {
                    b({
                        Ia: d,
                        la: f
                    }, e)
                })
            })
        }

        function mr(a, b, c) {
            a = a.g.get(b);
            if (!a) throw new O(2, 9, 9013, "Could not find mechanism with name " + b);
            b = a.getCells().get(c);
            if (!b) throw new O(2, 9, 9013, "Could not find cell with name " + c);
            return b
        }

        function nr(a, b) {
            a.g.forEach(function (c) {
                b(c.getEmeSessionCell())
            })
        }

        function or(a) {
            var b = Array.from(a.g.keys());
            if (!b.length) throw new O(2, 9, 9E3, "No supported storage mechanisms found");
            return a.g.get(b[0]).getEmeSessionCell()
        }

        function pr(a) {
            var b, c, d;
            return K(function (e) {
                return 1 == e.g ? (b = Array.from(a.g.values()), c = 0 < b.length, c || (d = jr, d.forEach(function (f) {
                    (f = f()) && b.push(f)
                })), v(e, Promise.all(b.map(function (f) {
                    return f.erase()
                })), 2)) : c ? e.v(0) : v(e, Promise.all(b.map(function (f) {
                    return f.destroy()
                })), 0)
            })
        }

        function qr(a, b) {
            jr.set(a, b)
        }
        L("shaka.offline.StorageMuxer", ir);
        ir.unregister = function (a) {
            jr["delete"](a)
        };
        ir.register = qr;
        ir.prototype.destroy = ir.prototype.destroy;
        var jr = new Map;

        function rr() {
            dr.apply(this, arguments)
        }
        ra(rr, dr);
        rr.prototype.updateManifestExpiration = function (a, b) {
            var c = this,
                d, e, f;
            return K(function (g) {
                d = br(c.g, c.h);
                e = d.store();
                f = new He;
                e.get(a).onsuccess = function (h) {
                    (h = h.target.result) ? (h.expiration = b, e.put(h), f.resolve()) : f.reject(new O(2, 9, 9012, "Could not find values for " + a))
                };
                return v(g, Promise.all([d.promise(), f]), 0)
            })
        };
        rr.prototype.Ob = function (a) {
            var b, c, d, e, f, g;
            return K(function (h) {
                if (1 == h.g) {
                    b = [];
                    for (c = 0; c < a.periods.length; ++c) d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime, e = d - a.periods[c].startTime, f = sr(a.periods[c], e), b.push(f);
                    return v(h, Po(b), 2)
                }
                g = h.h;
                return h["return"]({
                    creationTime: 0,
                    originalManifestUri: a.originalManifestUri,
                    duration: a.duration,
                    size: a.size,
                    expiration: null == a.expiration ? Infinity : a.expiration,
                    streams: g,
                    sessionIds: a.sessionIds,
                    drmInfo: a.drmInfo,
                    appMetadata: a.appMetadata
                })
            })
        };

        function sr(a, b) {
            tr(a);
            for (var c = t(a.streams), d = c.next(); !d.done; d = c.next());
            return a.streams.map(function (e) {
                return ur(e, a.startTime, b)
            })
        }

        function ur(a, b, c) {
            var d = a.initSegmentUri ? vr(a.initSegmentUri) : null,
                e = b + a.presentationTimeOffset,
                f = b + c;
            return {
                id: a.id,
                originalId: null,
                primary: a.primary,
                type: a.contentType,
                mimeType: a.mimeType,
                codecs: a.codecs,
                frameRate: a.frameRate,
                pixelAspectRatio: void 0,
                hdr: void 0,
                kind: a.kind,
                language: a.language,
                label: a.label,
                width: a.width,
                height: a.height,
                initSegmentKey: d,
                encrypted: a.encrypted,
                keyIds: new Set([a.keyId]),
                segments: a.segments.map(function (g) {
                    var h = vr(g.uri);
                    return {
                        startTime: b + g.startTime,
                        endTime: b + g.endTime,
                        dataKey: h,
                        initSegmentKey: d,
                        appendWindowStart: b,
                        appendWindowEnd: f,
                        timestampOffset: e
                    }
                }),
                variantIds: a.variantIds,
                roles: [],
                forced: !1,
                audioSamplingRate: null,
                channelsCount: null,
                spatialAudio: !1,
                closedCaptions: null,
                tilesLayout: void 0
            }
        }
        rr.prototype.Sd = function (a) {
            return {
                data: a.data
            }
        };

        function vr(a) {
            var b;
            if ((b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) || (b = /^offline:segment\/([0-9]+)$/.exec(a))) return Number(b[1]);
            throw new O(2, 9, 9004, "Could not parse uri " + a);
        }

        function tr(a) {
            var b = a.streams.filter(function (h) {
                return "audio" == h.contentType
            });
            a = a.streams.filter(function (h) {
                return "video" == h.contentType
            });
            if (!b.every(function (h) {
                    return h.variantIds
                }) || !a.every(function (h) {
                    return h.variantIds
                })) {
                for (var c = t(b), d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];
                c = t(a);
                for (d = c.next(); !d.done; d = c.next()) d.value.variantIds = [];
                c = 0;
                if (a.length && !b.length) {
                    var e = c++,
                        f = t(a);
                    for (d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e)
                }
                if (!a.length && b.length)
                    for (e = c++,
                        f = t(b), d = f.next(); !d.done; d = f.next()) d.value.variantIds.push(e);
                if (a.length && b.length)
                    for (b = t(b), d = b.next(); !d.done; d = b.next())
                        for (d = d.value, e = t(a), f = e.next(); !f.done; f = e.next()) {
                            f = f.value;
                            var g = c++;
                            d.variantIds.push(g);
                            f.variantIds.push(g)
                        }
            }
        };

        function wr() {
            dr.apply(this, arguments)
        }
        ra(wr, dr);
        wr.prototype.Ob = function (a) {
            var b, c, d, e, f, g;
            return K(function (h) {
                if (1 == h.g) {
                    b = [];
                    for (c = 0; c < a.periods.length; ++c) {
                        d = c == a.periods.length - 1 ? a.duration : a.periods[c + 1].startTime;
                        e = d - a.periods[c].startTime;
                        for (var k = a.periods[c], l = [], m = t(k.streams), n = m.next(); !n.done; n = m.next()) n = n.value, 0 != n.variantIds.length && l.push(xr(n, k.startTime, k.startTime + e));
                        f = l;
                        b.push(f)
                    }
                    return v(h, Po(b), 2)
                }
                g = h.h;
                return h["return"]({
                    appMetadata: a.appMetadata,
                    creationTime: 0,
                    drmInfo: a.drmInfo,
                    duration: a.duration,
                    expiration: null ==
                        a.expiration ? Infinity : a.expiration,
                    originalManifestUri: a.originalManifestUri,
                    sessionIds: a.sessionIds,
                    size: a.size,
                    streams: g
                })
            })
        };

        function xr(a, b, c) {
            return {
                id: a.id,
                originalId: a.originalId,
                primary: a.primary,
                type: a.contentType,
                mimeType: a.mimeType,
                codecs: a.codecs,
                frameRate: a.frameRate,
                pixelAspectRatio: a.pixelAspectRatio,
                hdr: void 0,
                kind: a.kind,
                language: a.language,
                label: a.label,
                width: a.width,
                height: a.height,
                encrypted: a.encrypted,
                keyIds: new Set([a.keyId]),
                segments: a.segments.map(function (d) {
                    return {
                        startTime: b + d.startTime,
                        endTime: b + d.endTime,
                        initSegmentKey: a.initSegmentKey,
                        appendWindowStart: b,
                        appendWindowEnd: c,
                        timestampOffset: b - a.presentationTimeOffset,
                        dataKey: d.dataKey
                    }
                }),
                variantIds: a.variantIds,
                roles: [],
                forced: !1,
                audioSamplingRate: null,
                channelsCount: null,
                spatialAudio: !1,
                closedCaptions: null,
                tilesLayout: void 0
            }
        };

        function yr() {
            dr.apply(this, arguments)
        }
        ra(yr, dr);
        yr.prototype.hasFixedKeySpace = function () {
            return !1
        };
        yr.prototype.addSegments = function (a) {
            return this.add(this.i, a)
        };
        yr.prototype.addManifests = function (a) {
            return this.add(this.h, a)
        };
        yr.prototype.Ob = function (a) {
            null == a.expiration && (a.expiration = Infinity);
            return Promise.resolve(a)
        };

        function zr() {
            this.m = this.j = this.i = this.h = this.g = this.l = null
        }
        q = zr.prototype;
        q.init = function () {
            var a = this,
                b = new He,
                c = window.indexedDB.open("shaka_offline_db", 5);
            c.onsuccess = function () {
                var d = c.result;
                a.l = d;
                var e = d.objectStoreNames;
                e = e.contains("manifest") && e.contains("segment") ? new rr(d, "segment", "manifest") : null;
                a.g = e;
                e = d.objectStoreNames;
                e = e.contains("manifest-v2") && e.contains("segment-v2") ? new wr(d, "segment-v2", "manifest-v2") : null;
                a.h = e;
                e = d.objectStoreNames;
                e = e.contains("manifest-v3") && e.contains("segment-v3") ? new wr(d, "segment-v3", "manifest-v3") : null;
                a.i = e;
                e = d.objectStoreNames;
                e = e.contains("manifest-v5") && e.contains("segment-v5") ? new yr(d, "segment-v5", "manifest-v5") : null;
                a.j = e;
                d = d.objectStoreNames.contains("session-ids") ? new hr(d) : null;
                a.m = d;
                b.resolve()
            };
            c.onupgradeneeded = function () {
                for (var d = c.result, e = t(["segment-v5", "manifest-v5", "session-ids"]), f = e.next(); !f.done; f = e.next()) f = f.value, d.objectStoreNames.contains(f) || d.createObjectStore(f, {
                    autoIncrement: !0
                })
            };
            c.onerror = function (d) {
                b.reject(new O(2, 9, 9001, c.error));
                d.preventDefault()
            };
            return b
        };
        q.destroy = function () {
            var a = this;
            return K(function (b) {
                switch (b.g) {
                case 1:
                    if (!a.g) {
                        b.v(2);
                        break
                    }
                    return v(b, a.g.destroy(), 2);
                case 2:
                    if (!a.h) {
                        b.v(4);
                        break
                    }
                    return v(b, a.h.destroy(), 4);
                case 4:
                    if (!a.i) {
                        b.v(6);
                        break
                    }
                    return v(b, a.i.destroy(), 6);
                case 6:
                    if (!a.j) {
                        b.v(8);
                        break
                    }
                    return v(b, a.j.destroy(), 8);
                case 8:
                    if (!a.m) {
                        b.v(10);
                        break
                    }
                    return v(b, a.m.destroy(), 10);
                case 10:
                    a.l && a.l.close(), z(b)
                }
            })
        };
        q.getCells = function () {
            var a = new Map;
            this.g && a.set("v1", this.g);
            this.h && a.set("v2", this.h);
            this.i && a.set("v3", this.i);
            this.j && a.set("v5", this.j);
            return a
        };
        q.getEmeSessionCell = function () {
            return this.m
        };
        q.erase = function () {
            var a = this;
            return K(function (b) {
                switch (b.g) {
                case 1:
                    if (!a.g) {
                        b.v(2);
                        break
                    }
                    return v(b, a.g.destroy(), 2);
                case 2:
                    if (!a.h) {
                        b.v(4);
                        break
                    }
                    return v(b, a.h.destroy(), 4);
                case 4:
                    if (!a.i) {
                        b.v(6);
                        break
                    }
                    return v(b, a.i.destroy(), 6);
                case 6:
                    if (!a.j) {
                        b.v(8);
                        break
                    }
                    return v(b, a.j.destroy(), 8);
                case 8:
                    return a.l && a.l.close(), v(b, Ar(), 10);
                case 10:
                    return a.l = null, a.g = null, a.h = null, a.i = null, a.j = null, v(b, a.init(), 0)
                }
            })
        };

        function Ar() {
            var a = new He,
                b = window.indexedDB.deleteDatabase("shaka_offline_db");
            b.onblocked = function () {};
            b.onsuccess = function () {
                a.resolve()
            };
            b.onerror = function (c) {
                a.reject(new O(2, 9, 9001, b.error));
                c.preventDefault()
            };
            return a
        }
        qr("idb", function () {
            return fc() || !window.indexedDB ? null : new zr
        });

        function Br(a, b, c, d) {
            this.g = a;
            this.i = b;
            this.h = c;
            this.l = d;
            this.j = ["offline:", a, "/", b, "/", c, "/", d].join("")
        }
        Br.prototype.Ia = function () {
            return this.i
        };
        Br.prototype.la = function () {
            return this.h
        };
        Br.prototype.key = function () {
            return this.l
        };
        Br.prototype.toString = function () {
            return this.j
        };

        function Cr(a) {
            a = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(a);
            if (null == a) return null;
            var b = a[1];
            if ("manifest" != b && "segment" != b) return null;
            var c = a[2];
            if (!c) return null;
            var d = a[3];
            return d && null != b ? new Br(b, c, d, Number(a[4])) : null
        };

        function Dr(a, b) {
            this.h = a;
            this.g = b
        }

        function Er(a, b) {
            var c = new T(null, 0);
            c.Ja(b.duration);
            var d = b.streams.filter(function (l) {
                    return "audio" == l.type
                }),
                e = b.streams.filter(function (l) {
                    return "video" == l.type
                });
            d = Fr(a, d, e, c);
            e = b.streams.filter(function (l) {
                return l.type == Fe
            }).map(function (l) {
                return Gr(a, l, c)
            });
            var f = b.streams.filter(function (l) {
                    return "image" == l.type
                }).map(function (l) {
                    return Gr(a, l, c)
                }),
                g = b.drmInfo ? [b.drmInfo] : [];
            if (b.drmInfo)
                for (var h = t(d.values()), k = h.next(); !k.done; k = h.next()) k = k.value, k.audio && k.audio.encrypted && (k.audio.drmInfos =
                    g), k.video && k.video.encrypted && (k.video.drmInfos = g);
            return {
                presentationTimeline: c,
                minBufferTime: 2,
                offlineSessionIds: b.sessionIds,
                variants: Array.from(d.values()),
                textStreams: e,
                imageStreams: f
            }
        }

        function Fr(a, b, c, d) {
            for (var e = new Set, f = t(b), g = f.next(); !g.done; g = f.next()) {
                var h = t(g.value.variantIds);
                for (g = h.next(); !g.done; g = h.next()) e.add(g.value)
            }
            f = t(c);
            for (g = f.next(); !g.done; g = f.next())
                for (h = t(g.value.variantIds), g = h.next(); !g.done; g = h.next()) e.add(g.value);
            f = new Map;
            e = t(e);
            for (g = e.next(); !g.done; g = e.next()) g = g.value, f.set(g, {
                id: g,
                language: "",
                primary: !1,
                audio: null,
                video: null,
                bandwidth: 0,
                allowedByApplication: !0,
                allowedByKeySystem: !0,
                decodingInfos: []
            });
            b = t(b);
            for (e = b.next(); !e.done; e = b.next())
                for (e =
                    e.value, g = Gr(a, e, d), h = t(e.variantIds), e = h.next(); !e.done; e = h.next()) e = f.get(e.value), e.language = g.language, e.primary = e.primary || g.primary, e.audio = g;
            c = t(c);
            for (b = c.next(); !b.done; b = c.next())
                for (e = b.value, b = Gr(a, e, d), g = t(e.variantIds), e = g.next(); !e.done; e = g.next()) e = f.get(e.value), e.primary = e.primary || b.primary, e.video = b;
            return f
        }

        function Gr(a, b, c) {
            var d = b.segments.map(function (e) {
                return Hr(a, e)
            });
            c.Cb(d);
            return {
                id: b.id,
                originalId: b.originalId,
                createSegmentIndex: function () {
                    return Promise.resolve()
                },
                segmentIndex: new U(d),
                mimeType: b.mimeType,
                codecs: b.codecs,
                width: b.width || void 0,
                height: b.height || void 0,
                frameRate: b.frameRate,
                pixelAspectRatio: b.pixelAspectRatio,
                hdr: b.hdr,
                kind: b.kind,
                encrypted: b.encrypted,
                drmInfos: [],
                keyIds: b.keyIds,
                language: b.language,
                label: b.label,
                type: b.type,
                primary: b.primary,
                trickModeVideo: null,
                emsgSchemeIdUris: null,
                roles: b.roles,
                forced: b.forced,
                channelsCount: b.channelsCount,
                audioSamplingRate: b.audioSamplingRate,
                spatialAudio: b.spatialAudio,
                closedCaptions: b.closedCaptions,
                tilesLayout: b.tilesLayout
            }
        }

        function Hr(a, b) {
            var c = new Br("segment", a.h, a.g, b.dataKey);
            return new qi(b.startTime, b.endTime, function () {
                return [c.toString()]
            }, 0, null, null != b.initSegmentKey ? Ir(a, b.initSegmentKey) : null, b.timestampOffset, b.appendWindowStart, b.appendWindowEnd)
        }

        function Ir(a, b) {
            var c = new Br("segment", a.h, a.g, b);
            return new oi(function () {
                return [c.toString()]
            }, 0, null)
        };

        function Jr() {
            this.g = null
        }
        q = Jr.prototype;
        q.configure = function () {};
        q.start = function (a, b) {
            var c = this,
                d, e, f, g, h, k, l;
            return K(function (m) {
                switch (m.g) {
                case 1:
                    d = Cr(a);
                    c.g = d;
                    if (null == d || "manifest" != d.g) throw new O(2, 1, 9004, a);
                    e = new ir;
                    va(m);
                    return v(m, e.init(), 4);
                case 4:
                    return v(m, mr(e, d.Ia(), d.la()), 5);
                case 5:
                    return f = m.h, v(m, f.getManifests([d.key()]), 6);
                case 6:
                    return g = m.h, h = g[0], k = new Dr(d.Ia(), d.la()), l = Er(k, h), b.makeTextStreamsForClosedCaptions(l), m["return"](l);
                case 2:
                    return xa(m), v(m, e.destroy(), 7);
                case 7:
                    ya(m, 0)
                }
            })
        };
        q.stop = function () {
            return Promise.resolve()
        };
        q.update = function () {};
        q.onExpirationUpdated = function (a, b) {
            var c = this,
                d, e, f, g, h, k, l;
            return K(function (m) {
                switch (m.g) {
                case 1:
                    return d = c.g, e = new ir, B(m, 2, 3), v(m, e.init(), 5);
                case 5:
                    return v(m, mr(e, d.Ia(), d.la()), 6);
                case 6:
                    return f = m.h, v(m, f.getManifests([d.key()]), 7);
                case 7:
                    g = m.h;
                    h = g[0];
                    k = h.sessionIds.includes(a);
                    l = void 0 == h.expiration || h.expiration > b;
                    if (!k || !l) {
                        m.v(3);
                        break
                    }
                    return v(m, f.updateManifestExpiration(d.key(), b), 3);
                case 3:
                    return xa(m), v(m, e.destroy(), 10);
                case 10:
                    ya(m, 0);
                    break;
                case 2:
                    E(m), m.v(3)
                }
            })
        };
        ki["application/x-offline-manifest"] = function () {
            return new Jr
        };

        function Kr() {}

        function Lr(a) {
            var b = Cr(a);
            b && "manifest" == b.g ? (a = {
                uri: a,
                ge: a,
                data: new ArrayBuffer(0),
                headers: {
                    "content-type": "application/x-offline-manifest"
                }
            }, a = Ug(a)) : a = b && "segment" == b.g ? Mr(b.key(), b) : Sg(new O(2, 1, 9004, a));
            return a
        }

        function Mr(a, b) {
            var c = new ir;
            return Ug(void 0).aa(function () {
                return c.init()
            }).aa(function () {
                return mr(c, b.Ia(), b.la())
            }).aa(function (d) {
                return d.getSegments([b.key()])
            }).aa(function (d) {
                return {
                    uri: b,
                    data: d[0].data,
                    headers: {}
                }
            })["finally"](function () {
                return c.destroy()
            })
        }
        L("shaka.offline.OfflineScheme", Kr);
        Kr.plugin = Lr;
        dh("offline", Lr);

        function Nr(a, b, c) {
            var d, e, f, g, h, k;
            return K(function (l) {
                switch (l.g) {
                case 1:
                    d = [];
                    for (var m = [], n = t(c), p = n.next(); !p.done; p = n.next()) {
                        p = p.value;
                        for (var r = !1, u = t(m), w = u.next(); !w.done; w = u.next())
                            if (w = w.value, Or(w.info, p)) {
                                w.sessionIds.push(p.sessionId);
                                r = !0;
                                break
                            } r || m.push({
                            info: p,
                            sessionIds: [p.sessionId]
                        })
                    }
                    e = t(m);
                    f = e.next();
                case 2:
                    if (f.done) {
                        l.v(4);
                        break
                    }
                    g = f.value;
                    h = Pr(a, b, g);
                    return v(l, h, 5);
                case 5:
                    k = l.h;
                    d = d.concat(k);
                    f = e.next();
                    l.v(2);
                    break;
                case 4:
                    return l["return"](d)
                }
            })
        }

        function Pr(a, b, c) {
            var d, e;
            return K(function (f) {
                switch (f.g) {
                case 1:
                    return d = new th({
                        Bb: b,
                        onError: function () {},
                        Dc: function () {},
                        onExpirationUpdated: function () {},
                        onEvent: function () {}
                    }), B(f, 2), d.configure(a), v(f, Bh(d, c.info.keySystem, c.info.licenseUri, c.info.serverCertificate, c.info.audioCapabilities, c.info.videoCapabilities), 4);
                case 4:
                    wa(f, 3);
                    break;
                case 2:
                    return E(f), v(f, d.destroy(), 5);
                case 5:
                    return f["return"]([]);
                case 3:
                    return B(f, 6), v(f, Nh(d), 8);
                case 8:
                    wa(f, 7);
                    break;
                case 6:
                    return E(f), v(f, d.destroy(),
                        9);
                case 9:
                    return f["return"]([]);
                case 7:
                    return e = [], v(f, Promise.all(c.sessionIds.map(function (g) {
                        return K(function (h) {
                            if (1 == h.g) return B(h, 2), v(h, Oh(d, g), 4);
                            if (2 != h.g) return e.push(g), wa(h, 0);
                            E(h);
                            z(h)
                        })
                    })), 10);
                case 10:
                    return v(f, d.destroy(), 11);
                case 11:
                    return f["return"](e)
                }
            })
        }

        function Or(a, b) {
            function c(d, e) {
                return d.robustness == e.robustness && d.contentType == e.contentType
            }
            return a.keySystem == b.keySystem && a.licenseUri == b.licenseUri && xc(a.audioCapabilities, b.audioCapabilities, c) && xc(a.videoCapabilities, b.videoCapabilities, c)
        };

        function Qr(a, b, c) {
            var d = b.presentationTimeline.getDuration();
            b = Rr(b);
            return {
                offlineUri: null,
                originalManifestUri: a,
                duration: d,
                size: 0,
                expiration: Infinity,
                tracks: b,
                appMetadata: c
            }
        }

        function Sr(a, b) {
            var c = Er(new Dr(a.Ia(), a.la()), b),
                d = b.appMetadata || {};
            c = Rr(c);
            return {
                offlineUri: a.toString(),
                originalManifestUri: b.originalManifestUri,
                duration: b.duration,
                size: b.size,
                expiration: b.expiration,
                tracks: c,
                appMetadata: d
            }
        }

        function Rr(a) {
            var b = [],
                c = ug(a.variants);
            c = t(c);
            for (var d = c.next(); !d.done; d = c.next()) b.push(mg(d.value));
            a = t(a.textStreams);
            for (c = a.next(); !c.done; c = a.next()) b.push(ng(c.value));
            return b
        };

        function Tr() {
            this.g = {}
        }

        function Ur(a, b, c) {
            c = c.endTime - c.startTime;
            return Vr(a, b) * c
        }

        function Vr(a, b) {
            var c = a.g[b];
            null == c && (c = 0);
            return c
        };

        function Wr(a) {
            var b = this;
            if (a && a.constructor != V) throw new O(2, 9, 9008);
            this.O = this.o = null;
            a ? (this.o = a.o, this.O = a.Rb()) : (this.o = Zj(), this.O = new ch);
            this.Ic = [];
            this.Xb = [];
            this.zd = [];
            var c = !a;
            this.J = new df(function () {
                var d, e, f, g, h;
                return K(function (k) {
                    switch (k.g) {
                    case 1:
                        return v(k, Promise.all(b.zd.map(function (l) {
                            return Uq(l)
                        })), 2);
                    case 2:
                        d = function () {};
                        e = [];
                        f = t(b.Xb);
                        for (g = f.next(); !g.done; g = f.next()) h = g.value, e.push(h.then(d, d));
                        return v(k, Promise.all(e), 3);
                    case 3:
                        if (!c) {
                            k.v(4);
                            break
                        }
                        return v(k, b.O.destroy(),
                            4);
                    case 4:
                        b.o = null, b.O = null, z(k)
                    }
                })
            })
        }

        function Xr() {
            if ($b()) a: {
                var a = t(jr.values());
                for (var b = a.next(); !b.done; b = a.next())
                    if (b = b.value, b = b()) {
                        b.destroy();
                        a = !0;
                        break a
                    } a = !1
            }
            else a = !1;
            return a
        }
        q = Wr.prototype;
        q.destroy = function () {
            return this.J.destroy()
        };
        q.configure = function (a, b) {
            2 == arguments.length && "string" == typeof a && (a = Xj(a, b));
            a.manifest && a.manifest.dash && "defaultPresentationDelay" in a.manifest.dash && (Hb("manifest.dash.defaultPresentationDelay configuration", "Please Use manifest.defaultPresentationDelay instead."), a.manifest.defaultPresentationDelay = a.manifest.dash.defaultPresentationDelay, delete a.manifest.dash.defaultPresentationDelay);
            return bk(this.o, a)
        };
        q.getConfiguration = function () {
            var a = Zj();
            bk(a, this.o, Zj());
            return a
        };
        q.Rb = function () {
            return this.O
        };
        q.store = function (a, b, c) {
            var d = this,
                e = this.getConfiguration(),
                f = new Sq(this.O);
            this.zd.push(f);
            b = Yr(this, a, b || {}, function () {
                var h;
                return K(function (k) {
                    if (1 == k.g) return v(k, ji(a, d.O, e.manifest.retryParameters, c || null), 2);
                    h = k.h;
                    return k["return"](Ob(h))
                })
            }, e, f);
            var g = new Rg(b, function () {
                return Uq(f)
            });
            g["finally"](function () {
                wc(d.zd, f)
            });
            g.then = function (h) {
                Hb("shaka.offline.Storage.store.then", "Storage operations now return a shaka.util.AbortableOperation, rather than a promise.  Please update to conform to this new API; you can use the |chain| method instead.");
                return g.promise.then(h)
            };
            return Zr(this, g)
        };
        q.af = function () {
            Hb("shaka.offline.Storage.getStoreInProgress", "Multiple concurrent downloads are now supported.");
            return !1
        };

        function Yr(a, b, c, d, e, f) {
            var g, h, k, l, m, n, p, r, u, w, x;
            return K(function (y) {
                switch (y.g) {
                case 1:
                    return $r(), h = g = null, k = new ir, m = l = null, B(y, 2, 3), v(y, d(), 5);
                case 5:
                    return g = y.h, v(y, as(a, b, g, e), 6);
                case 6:
                    n = y.h;
                    bs(a);
                    p = !n.presentationTimeline.Y() && !n.presentationTimeline.ib();
                    if (!p) throw new O(2, 9, 9005, b);
                    return v(y, cs(a, n, function (D) {
                        m = m || D
                    }, e), 7);
                case 7:
                    h = y.h;
                    bs(a);
                    if (m) throw m;
                    return v(y, a.uc(n, h, e), 8);
                case 8:
                    return v(y, k.init(), 9);
                case 9:
                    return bs(a), v(y, kr(k), 10);
                case 10:
                    return l = y.h, bs(a), v(y, ds(a, l.la,
                        h, n, b, c, e, f), 11);
                case 11:
                    r = y.h;
                    bs(a);
                    if (m) throw m;
                    return v(y, l.la.addManifests([r]), 12);
                case 12:
                    return u = y.h, bs(a), w = new Br("manifest", l.path.Ia, l.path.la, u[0]), y["return"](Sr(w, r));
                case 3:
                    return xa(y), a.Ic = [], v(y, k.destroy(), 13);
                case 13:
                    if (!g) {
                        y.v(14);
                        break
                    }
                    return v(y, g.stop(), 14);
                case 14:
                    if (!h) {
                        y.v(16);
                        break
                    }
                    return v(y, h.destroy(), 16);
                case 16:
                    ya(y, 0);
                    break;
                case 2:
                    x = E(y);
                    if (!l) {
                        y.v(18);
                        break
                    }
                    return v(y, l.la.removeSegments(a.Ic, function () {}), 18);
                case 18:
                    throw m || x;
                }
            })
        }
        q.uc = function (a, b, c) {
            var d, e, f, g, h, k, l, m, n, p, r, u, w, x, y, D, C, A, F, G, H, I, J, M, R, S;
            return K(function (N) {
                switch (N.g) {
                case 1:
                    d = {
                        width: Infinity,
                        height: Infinity
                    };
                    Zf(a, c.restrictions, d);
                    c.useMediaCapabilities ? dg(a, c.offline.usePersistentLicense) : (cg(a), bg(a, b));
                    e = [];
                    f = c.preferredAudioChannelCount;
                    Tf(a, f);
                    g = t(a.variants);
                    for (h = g.next(); !h.done; h = g.next()) k = h.value, e.push(mg(k));
                    l = t(a.textStreams);
                    for (m = l.next(); !m.done; m = l.next()) n = m.value, e.push(ng(n));
                    p = t(a.imageStreams);
                    for (r = p.next(); !r.done; r = p.next()) u =
                        r.value, e.push(og(u));
                    return v(N, c.offline.trackSelectionCallback(e), 2);
                case 2:
                    w = N.h;
                    x = a.presentationTimeline.getDuration();
                    y = 0;
                    D = t(w);
                    for (C = D.next(); !C.done; C = D.next()) A = C.value, F = A.bandwidth * x / 8, y += F;
                    B(N, 3);
                    return v(N, c.offline.downloadSizeCallback(y), 5);
                case 5:
                    G = N.h;
                    if (!G) throw new O(2, 9, 9014);
                    wa(N, 4);
                    break;
                case 3:
                    H = E(N);
                    if (H instanceof O) throw H;
                    throw new O(2, 9, 9015);
                case 4:
                    I = new Set;
                    J = new Set;
                    M = new Set;
                    R = t(w);
                    for (C = R.next(); !C.done; C = R.next()) S = C.value, "variant" == S.type && I.add(S.id), "text" ==
                        S.type && J.add(S.id), "image" == S.type && M.add(S.id);
                    a.variants = a.variants.filter(function (aa) {
                        return I.has(aa.id)
                    });
                    a.textStreams = a.textStreams.filter(function (aa) {
                        return J.has(aa.id)
                    });
                    a.imageStreams = a.imageStreams.filter(function (aa) {
                        return M.has(aa.id)
                    });
                    es(a);
                    z(N)
                }
            })
        };

        function ds(a, b, c, d, e, f, g, h) {
            var k, l, m, n, p, r, u, w, x, y, D, C;
            return K(function (A) {
                switch (A.g) {
                case 1:
                    return k = Qr(e, d, f), l = g.offline.progressCallback, m = function (F, G) {
                        k.size = G;
                        l(k, F)
                    }, n = function (F, G) {
                        u && g.offline.usePersistentLicense && w == G && Mh(c, "cenc", F)
                    }, Tq(h, m, n), p = d.variants.some(function (F) {
                        var G = F.audio && F.audio.encrypted;
                        return F.video && F.video.encrypted || G
                    }), r = d.variants.some(function (F) {
                        return (F.video ? F.video.drmInfos : []).concat(F.audio ? F.audio.drmInfos : []).some(function (G) {
                            return G.initData &&
                                G.initData.length
                        })
                    }), u = p && !r, w = null, u && (x = c.i, w = fs.get(x.keySystem)), va(A), D = y = gs(a, h, b, c, d, e, f, g), v(A, Yq(h), 4);
                case 4:
                    D.size = A.h;
                    y.expiration = c.Qb();
                    C = Uh(c);
                    y.sessionIds = g.offline.usePersistentLicense ? C : [];
                    if (p && g.offline.usePersistentLicense && !C.length) throw new O(2, 9, 9007);
                    return A["return"](y);
                case 2:
                    return xa(A), v(A, h.destroy(), 5);
                case 5:
                    ya(A, 0)
                }
            })
        }
        q.remove = function (a) {
            return hs(this, is(this, a))
        };

        function is(a, b) {
            var c, d, e, f, g, h;
            return K(function (k) {
                switch (k.g) {
                case 1:
                    $r();
                    c = Cr(b);
                    if (null == c || "manifest" != c.g) throw new O(2, 9, 9004, b);
                    d = c;
                    e = new ir;
                    va(k);
                    return v(k, e.init(), 4);
                case 4:
                    return v(k, mr(e, d.Ia(), d.la()), 5);
                case 5:
                    return f = k.h, v(k, f.getManifests([d.key()]), 6);
                case 6:
                    return g = k.h, h = g[0], v(k, Promise.all([js(a, h, e), ks(f, d, h)]), 2);
                case 2:
                    return xa(k), v(k, e.destroy(), 8);
                case 8:
                    ya(k, 0)
                }
            })
        }

        function ls(a, b) {
            for (var c = [], d = t(a.streams), e = d.next(); !e.done; e = d.next()) e = e.value, b && "video" == e.type ? c.push({
                contentType: Qe(e.mimeType, e.codecs),
                robustness: a.drmInfo.videoRobustness
            }) : b || "audio" != e.type || c.push({
                contentType: Qe(e.mimeType, e.codecs),
                robustness: a.drmInfo.audioRobustness
            });
            return c
        }

        function js(a, b, c) {
            return K(function (d) {
                return v(d, ms(a.O, a.o.drm, c, b), 0)
            })
        }

        function ks(a, b, c) {
            function d() {}
            var e = ns(c);
            Sr(b, c);
            return Promise.all([a.removeSegments(e, d), a.removeManifests([b.key()], d)])
        }
        q.xf = function () {
            return hs(this, os(this))
        };

        function os(a) {
            var b, c, d, e, f, g, h, k, l, m;
            return K(function (n) {
                switch (n.g) {
                case 1:
                    return $r(), b = a.O, c = a.o.drm, d = new ir, e = !1, va(n), v(n, d.init(), 4);
                case 4:
                    f = [], nr(d, function (p) {
                        return f.push(p)
                    }), g = t(f), h = g.next();
                case 5:
                    if (h.done) {
                        n.v(2);
                        break
                    }
                    k = h.value;
                    return v(n, k.getAll(), 8);
                case 8:
                    return l = n.h, v(n, Nr(c, b, l), 9);
                case 9:
                    return m = n.h, v(n, k.remove(m), 10);
                case 10:
                    m.length != l.length && (e = !0);
                    h = g.next();
                    n.v(5);
                    break;
                case 2:
                    return xa(n), v(n, d.destroy(), 11);
                case 11:
                    ya(n, 3);
                    break;
                case 3:
                    return n["return"](!e)
                }
            })
        }
        q.list = function () {
            return hs(this, ps())
        };

        function ps() {
            var a, b, c;
            return K(function (d) {
                switch (d.g) {
                case 1:
                    return $r(), a = [], b = new ir, va(d), v(d, b.init(), 4);
                case 4:
                    return c = Promise.resolve(), lr(b, function (e, f) {
                        c = c.then(function () {
                            var g;
                            return K(function (h) {
                                if (1 == h.g) return v(h, f.getAllManifests(), 2);
                                g = h.h;
                                g.forEach(function (k, l) {
                                    var m = Sr(new Br("manifest", e.Ia, e.la, l), k);
                                    a.push(m)
                                });
                                z(h)
                            })
                        })
                    }), v(d, c, 2);
                case 2:
                    return xa(d), v(d, b.destroy(), 6);
                case 6:
                    ya(d, 3);
                    break;
                case 3:
                    return d["return"](a)
                }
            })
        }

        function as(a, b, c, d) {
            var e, f, g, h, k;
            return K(function (l) {
                if (1 == l.g) return e = null, f = a.O, g = {
                    networkingEngine: f,
                    filter: function () {
                        return Promise.resolve()
                    },
                    makeTextStreamsForClosedCaptions: function () {},
                    onTimelineRegionAdded: function () {},
                    onEvent: function () {},
                    onError: function (m) {
                        e = m
                    },
                    isLowLatencyMode: function () {
                        return !1
                    },
                    isAutoLowLatencyMode: function () {
                        return !1
                    },
                    enableLowLatencyMode: function () {}
                }, c.configure(d.manifest), bs(a), v(l, c.start(b, g), 2);
                if (3 != l.g) return h = l.h, bs(a), k = qs(h), v(l, Promise.all(gb(k,
                    function (m) {
                        return m.createSegmentIndex()
                    })), 3);
                bs(a);
                if (e) throw e;
                return l["return"](h)
            })
        }

        function cs(a, b, c, d) {
            var e;
            return K(function (f) {
                switch (f.g) {
                case 1:
                    return e = new th({
                        Bb: a.O,
                        onError: c,
                        Dc: function () {},
                        onExpirationUpdated: function () {},
                        onEvent: function () {}
                    }), e.configure(d.drm), v(f, yh(e, b.variants, d.offline.usePersistentLicense, d.useMediaCapabilities), 2);
                case 2:
                    return v(f, Nh(e), 3);
                case 3:
                    return v(f, Lh(e), 4);
                case 4:
                    return f["return"](e)
                }
            })
        }

        function gs(a, b, c, d, e, f, g, h) {
            for (var k = new Tr, l = t(e.variants), m = l.next(); !m.done; m = l.next()) {
                var n = k;
                m = m.value;
                var p = m.audio,
                    r = m.video;
                p && !r && (n.g[p.id] = p.bandwidth || m.bandwidth);
                !p && r && (n.g[r.id] = r.bandwidth || m.bandwidth);
                if (p && r) {
                    var u = p.bandwidth || 393216,
                        w = r.bandwidth || m.bandwidth - u;
                    0 >= w && (w = m.bandwidth);
                    n.g[p.id] = u;
                    n.g[r.id] = w
                }
            }
            l = t(e.textStreams);
            for (n = l.next(); !n.done; n = l.next()) k.g[n.value.id] = 52;
            l = t(e.imageStreams);
            for (n = l.next(); !n.done; n = l.next()) n = n.value, k.g[n.id] = n.bandwidth || 2048;
            n = new Map;
            n.set(null, Promise.resolve(null));
            m = new Map;
            p = qs(e);
            l = new Map;
            p = t(p);
            for (r = p.next(); !r.done; r = p.next()) r = r.value, u = rs(a, b, c, k, e, r, h, n, m), l.set(r.id, u);
            a = t(e.variants);
            for (m = a.next(); !m.done; m = a.next()) b = m.value, b.audio && l.get(b.audio.id).variantIds.push(b.id), b.video && l.get(b.video.id).variantIds.push(b.id);
            a = Array.from(l.values());
            h = h.offline.usePersistentLicense;
            (b = d.i) && h && (b.initData = []);
            return {
                creationTime: Date.now(),
                originalManifestUri: f,
                duration: e.presentationTimeline.getDuration(),
                size: 0,
                expiration: d.Qb(),
                streams: a,
                sessionIds: h ? Uh(d) : [],
                drmInfo: b,
                appMetadata: g
            }
        }

        function rs(a, b, c, d, e, f, g, h, k) {
            var l = {
                    id: f.id,
                    originalId: f.originalId,
                    primary: f.primary,
                    type: f.type,
                    mimeType: f.mimeType,
                    codecs: f.codecs,
                    frameRate: f.frameRate,
                    pixelAspectRatio: f.pixelAspectRatio,
                    hdr: f.hdr,
                    kind: f.kind,
                    language: f.language,
                    label: f.label,
                    width: f.width || null,
                    height: f.height || null,
                    encrypted: f.encrypted,
                    keyIds: f.keyIds,
                    segments: [],
                    variantIds: [],
                    roles: f.roles,
                    forced: f.forced,
                    channelsCount: f.channelsCount,
                    audioSamplingRate: f.audioSamplingRate,
                    spatialAudio: f.spatialAudio,
                    closedCaptions: f.closedCaptions,
                    tilesLayout: f.tilesLayout
                },
                m = f.id;
            ss(f, e.presentationTimeline.Ya(), function (n) {
                var p = ts(a, b, m, f.id, c, d, n.h, g, h),
                    r = us(a, b, m, f.id, c, d, n, g, k);
                Xq(b, m, function () {
                    var u, w;
                    return K(function (x) {
                        if (1 == x.g) return v(x, p, 2);
                        if (3 != x.g) return u = x.h, v(x, r, 3);
                        w = x.h;
                        l.segments.push({
                            initSegmentKey: u,
                            startTime: n.startTime,
                            endTime: n.endTime,
                            appendWindowStart: n.appendWindowStart,
                            appendWindowEnd: n.appendWindowEnd,
                            timestampOffset: n.timestampOffset,
                            dataKey: w
                        });
                        z(x)
                    })
                })
            });
            return l
        }

        function ts(a, b, c, d, e, f, g, h, k) {
            if (k.has(g)) return k.get(g);
            h = aj(g.ma(), g.ja, g.da, h.streaming.retryParameters);
            b = Vq(b, c, h, .5 * Vr(f, d), !0, function (l) {
                var m;
                return K(function (n) {
                    if (1 == n.g) return v(n, e.addSegments([{
                        data: l
                    }]), 2);
                    m = n.h;
                    a.Ic.push(m[0]);
                    return n["return"](m[0])
                })
            });
            k.set(g, b);
            return b
        }

        function us(a, b, c, d, e, f, g, h, k) {
            var l = [g.ma()[0], g.ja, g.da].join("-");
            if (k.has(l)) return k.get(l);
            h = aj(g.ma(), g.ja, g.da, h.streaming.retryParameters);
            b = Vq(b, c, h, Ur(f, d, g), !1, function (m) {
                var n;
                return K(function (p) {
                    if (1 == p.g) return v(p, e.addSegments([{
                        data: m
                    }]), 2);
                    n = p.h;
                    a.Ic.push(n[0]);
                    return p["return"](n[0])
                })
            });
            k.set(l, b);
            return b
        }

        function ss(a, b, c) {
            b = a.segmentIndex.find(b);
            if (null != b)
                for (var d = a.segmentIndex.get(b); d;) c(d), d = a.segmentIndex.get(++b)
        }

        function bs(a) {
            if (a.J.g) throw new O(2, 9, 7001);
        }

        function $r() {
            if (!Xr()) throw new O(2, 9, 9E3);
        }

        function hs(a, b) {
            return K(function (c) {
                if (1 == c.g) return a.Xb.push(b), va(c), v(c, b, 4);
                if (2 != c.g) return c["return"](c.h);
                xa(c);
                wc(a.Xb, b);
                return ya(c, 0)
            })
        }

        function Zr(a, b) {
            var c = b.promise;
            a.Xb.push(c);
            return b["finally"](function () {
                wc(a.Xb, c)
            })
        }

        function ns(a) {
            var b = [];
            a = t(a.streams);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = t(c.value.segments);
                for (var d = c.next(); !d.done; d = c.next()) d = d.value, null != d.initSegmentKey && b.push(d.initSegmentKey), b.push(d.dataKey)
            }
            return b
        }

        function ms(a, b, c, d) {
            var e, f, g;
            return K(function (h) {
                if (1 == h.g) {
                    if (!d.drmInfo) return h["return"]();
                    e = or(c);
                    f = d.sessionIds.map(function (k) {
                        return {
                            sessionId: k,
                            keySystem: d.drmInfo.keySystem,
                            licenseUri: d.drmInfo.licenseServerUri,
                            serverCertificate: d.drmInfo.serverCertificate,
                            audioCapabilities: ls(d, !1),
                            videoCapabilities: ls(d, !0)
                        }
                    });
                    return v(h, Nr(b, a, f), 2)
                }
                return 3 != h.g ? (g = h.h, v(h, e.remove(g), 3)) : v(h, e.add(f.filter(function (k) {
                    return !g.includes(k.sessionId)
                })), 0)
            })
        }

        function qs(a) {
            for (var b = new Set, c = t(a.textStreams), d = c.next(); !d.done; d = c.next()) b.add(d.value);
            c = t(a.imageStreams);
            for (d = c.next(); !d.done; d = c.next()) b.add(d.value);
            a = t(a.variants);
            for (c = a.next(); !c.done; c = a.next()) c = c.value, c.audio && b.add(c.audio), c.video && b.add(c.video);
            return b
        }

        function es(a) {
            a.variants.map(function (f) {
                return f.video
            });
            var b = new Set(a.variants.map(function (f) {
                return f.audio
            }));
            a = a.textStreams;
            for (var c = t(b), d = c.next(); !d.done; d = c.next()) {
                d = t(b);
                for (var e = d.next(); !e.done; e = d.next());
            }
            b = t(a);
            for (c = b.next(); !c.done; c = b.next())
                for (c = t(a), d = c.next(); !d.done; d = c.next());
        }
        L("shaka.offline.Storage", Wr);
        Wr.deleteAll = function () {
            var a;
            return K(function (b) {
                return 1 == b.g ? (a = new ir, va(b), v(b, pr(a), 2)) : 5 != b.g ? (xa(b), v(b, a.destroy(), 5)) : ya(b, 0)
            })
        };
        Wr.prototype.list = Wr.prototype.list;
        Wr.prototype.removeEmeSessions = Wr.prototype.xf;
        Wr.prototype.remove = Wr.prototype.remove;
        Wr.prototype.getStoreInProgress = Wr.prototype.af;
        Wr.prototype.store = Wr.prototype.store;
        Wr.prototype.getNetworkingEngine = Wr.prototype.Rb;
        Wr.prototype.getConfiguration = Wr.prototype.getConfiguration;
        Wr.prototype.configure = Wr.prototype.configure;
        Wr.prototype.destroy = Wr.prototype.destroy;
        Wr.support = Xr;
        var fs = (new Map).set("org.w3.clearkey", "1077efecc0b24d02ace33c1e52e2fb4b").set("com.widevine.alpha", "edef8ba979d64acea3c827dcd51d21ed").set("com.microsoft.playready", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.recommendation", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.software", "9a04f07998404286ab92e65be0885f95").set("com.microsoft.playready.hardware", "9a04f07998404286ab92e65be0885f95").set("com.adobe.primetime", "f239e769efa348509c16a903c6932efb");
        Vl.offline = Xr;

        function vs() {}

        function ws(a, b) {
            for (var c = {
                    priority: b || 0,
                    ze: a
                }, d = t(mb(xs)), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = e.ha;
                if (e.item.priority < c.priority) {
                    xs.splice(f, 0, c);
                    return
                }
            }
            xs.push(c)
        }
        L("shaka.polyfill", vs);
        vs.register = ws;
        vs.installAll = function () {
            for (var a = t(xs), b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                try {
                    b.ze()
                } catch (c) {
                    Ua("Error installing polyfill!", c)
                }
            }
        };
        var xs = [];
        ws(function () {
            ys()
        }, -2);

        function zs(a) {
            var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
                c = document.createEvent("Event");
            c.initEvent(b, a.bubbles, a.cancelable);
            a.target.dispatchEvent(c)
        }
        ws(function () {
            if (window.Document) {
                var a = Element.prototype;
                a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
                a = Document.prototype;
                a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitCancelFullScreen;
                "fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
                    get: function () {
                        return document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement ||
                            document.webkitFullscreenElement
                    }
                }), Object.defineProperty(document, "fullscreenEnabled", {
                    get: function () {
                        return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
                    }
                }));
                document.addEventListener("webkitfullscreenchange", zs);
                document.addEventListener("webkitfullscreenerror", zs);
                document.addEventListener("mozfullscreenchange", zs);
                document.addEventListener("mozfullscreenerror", zs);
                document.addEventListener("MSFullscreenChange", zs);
                document.addEventListener("MSFullscreenError",
                    zs)
            }
        });
        ws(function () {});

        function As(a) {
            var b, c, d, e, f, g, h, k, l, m, n, p;
            return K(function (r) {
                switch (r.g) {
                case 1:
                    b = {
                        supported: !1,
                        powerEfficient: !0,
                        smooth: !0,
                        keySystemAccess: null,
                        configuration: a
                    };
                    if (!a || a.video && (c = a.video.contentType, d = MediaSource.isTypeSupported(c), !d) || a.audio && (e = a.audio.contentType, f = MediaSource.isTypeSupported(e), !f)) return r["return"](b);
                    if (!a.keySystemConfiguration) return b.supported = !0, r["return"](Promise.resolve(b));
                    g = a.keySystemConfiguration;
                    h = [];
                    k = [];
                    g.audio && (l = {
                            robustness: g.audio.robustness || "",
                            contentType: a.audio.contentType
                        },
                        h.push(l));
                    g.video && (m = {
                        robustness: g.video.robustness || "",
                        contentType: a.video.contentType
                    }, k.push(m));
                    n = {
                        initDataTypes: [g.initDataType],
                        distinctiveIdentifier: g.distinctiveIdentifier,
                        persistentState: g.persistentState,
                        sessionTypes: g.sessionTypes
                    };
                    h.length && (n.audioCapabilities = h);
                    k.length && (n.videoCapabilities = k);
                    B(r, 3);
                    return v(r, navigator.requestMediaKeySystemAccess(g.keySystem, [n]), 5);
                case 5:
                    p = r.h;
                    wa(r, 4);
                    break;
                case 3:
                    E(r);
                case 4:
                    p && (b.supported = !0, b.keySystemAccess = p);
                case 2:
                    return r["return"](b)
                }
            })
        }
        ws(function () {
            !fc() && navigator.mediaCapabilities || !window.MediaSource || (navigator.mediaCapabilities = {}, navigator.mediaCapabilities.decodingInfo = As)
        }, -1);

        function Bs() {
            var a = MediaSource.prototype.addSourceBuffer;
            MediaSource.prototype.addSourceBuffer = function (b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                c = a.apply(this, c);
                c.abort = function () {};
                return c
            }
        }

        function Cs() {
            var a = SourceBuffer.prototype.remove;
            SourceBuffer.prototype.remove = function (b, c) {
                return a.call(this, b, c - .001)
            }
        }

        function Ds() {
            var a = MediaSource.isTypeSupported;
            MediaSource.isTypeSupported = function (b) {
                return "mp2t" == b.split(/ *; */)[0].split("/")[1].toLowerCase() ? !1 : a(b)
            }
        }

        function Es() {
            var a = MediaSource.isTypeSupported;
            MediaSource.isTypeSupported = function (b) {
                return "opus" != Ue(b) && a(b)
            }
        }

        function Fs() {
            var a = MediaSource.isTypeSupported;
            MediaSource.isTypeSupported = function (b) {
                var c = b.split(/ *; */);
                c.shift();
                return c.some(function (d) {
                    return d.startsWith("codecs=")
                }) ? cast.__platform__.canDisplayType(b) : a(b)
            }
        }

        function Gs() {
            var a = MediaSource.isTypeSupported;
            MediaSource.isTypeSupported = function (b) {
                var c = b.split(/ *; */),
                    d = c.findIndex(function (g) {
                        return g.startsWith("codecs=")
                    });
                if (0 > d) return a(b);
                var e = c[d].replace("codecs=", "").replace(/"/g, "").split(/\s*,\s*/),
                    f = e.findIndex(function (g) {
                        return g.startsWith("vp09")
                    });
                0 <= f && (e[f] = "vp9", c[d] = 'codecs="' + e.join(",") + '"', b = c.join("; "));
                return a(b)
            }
        }
        ws(function () {
            var a = hc();
            window.MediaSource && (window.cast && cast.__platform__ && cast.__platform__.canDisplayType ? Fs() : a ? (Ds(), 12 >= a ? (Bs(), Cs()) : Bs()) : (dc("Tizen 2") || dc("Tizen 3") || dc("Tizen 4")) && Es());
            window.MediaSource && MediaSource.isTypeSupported('video/webm; codecs="vp9"') && !MediaSource.isTypeSupported('video/webm; codecs="vp09.00.10.08"') && Gs()
        });

        function Hs() {
            function a() {
                switch (window.orientation) {
                case -90:
                    b.type = "landscape-secondary";
                    b.angle = 270;
                    break;
                case 0:
                    b.type = "portrait-primary";
                    b.angle = 0;
                    break;
                case 90:
                    b.type = "landscape-primary";
                    b.angle = 90;
                    break;
                case 180:
                    b.type = "portrait-secondary", b.angle = 180
                }
            }
            var b = new Is;
            screen.orientation = b;
            a();
            window.addEventListener("orientationchange", function () {
                a();
                var c = new Q("change", {});
                b.dispatchEvent(c)
            })
        }

        function Is() {
            Yg.call(this);
            this.type = "";
            this.angle = 0
        }
        ra(Is, Yg);
        Is.prototype.lock = function (a) {
            function b(d) {
                return screen.lockOrientation ? screen.lockOrientation(d) : screen.mozLockOrientation ? screen.mozLockOrientation(d) : screen.msLockOrientation ? screen.msLockOrientation(d) : !1
            }
            var c = !1;
            switch (a) {
            case "natural":
                c = b("default");
                break;
            case "any":
                c = !0;
                this.unlock();
                break;
            default:
                c = b(a)
            }
            if (c) return Promise.resolve();
            a = Error("screen.orientation.lock() is not available on this device");
            a.name = "NotSupportedError";
            a.code = DOMException.NOT_SUPPORTED_ERR;
            return Promise.reject(a)
        };
        Is.prototype.unlock = function () {
            screen.unlockOrientation ? screen.unlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        };
        ws(function () {
            screen.orientation || void 0 != window.orientation && Hs()
        });

        function Js(a, b) {
            try {
                var c = new Ks(a, b);
                return Promise.resolve(c)
            } catch (d) {
                return Promise.reject(d)
            }
        }

        function Ls(a) {
            var b = this.mediaKeys;
            b && b != a && Ms(b, null);
            delete this.mediaKeys;
            return (this.mediaKeys = a) ? Ms(a, this) : Promise.resolve()
        }

        function Ns(a) {
            a = qb(a.initData);
            if (tb(a).getUint32(0, !0) + 4 != a.byteLength) throw new RangeError("Malformed FairPlay init data");
            a = xb(a.subarray(4), !0);
            a = Ab(a);
            var b = new Event("encrypted");
            b.initDataType = "skd";
            b.initData = rb(a);
            this.dispatchEvent(b)
        }

        function Ks(a, b) {
            this.keySystem = a;
            if (a.startsWith("com.apple.fps"))
                for (var c = t(b), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    if ("required" == e.persistentState) d = null;
                    else {
                        d = {
                            audioCapabilities: [],
                            videoCapabilities: [],
                            persistentState: "optional",
                            distinctiveIdentifier: "optional",
                            initDataTypes: e.initDataTypes,
                            sessionTypes: ["temporary"],
                            label: e.label
                        };
                        var f = !1,
                            g = !1;
                        if (e.audioCapabilities)
                            for (var h = t(e.audioCapabilities), k = h.next(); !k.done; k = h.next()) k = k.value, k.contentType && (f = !0, WebKitMediaKeys.isTypeSupported(this.keySystem,
                                k.contentType.split(";")[0]) && (d.audioCapabilities.push(k), g = !0));
                        if (e.videoCapabilities)
                            for (e = t(e.videoCapabilities), k = e.next(); !k.done; k = e.next()) h = k.value, h.contentType && (f = !0, WebKitMediaKeys.isTypeSupported(this.keySystem, h.contentType.split(";")[0]) && (d.videoCapabilities.push(h), g = !0));
                        f || (g = WebKitMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
                        d = g ? d : null
                    }
                    if (d) {
                        this.g = d;
                        return
                    }
                }
            c = Error("Unsupported keySystem");
            c.name = "NotSupportedError";
            c.code = DOMException.NOT_SUPPORTED_ERR;
            throw c;
        }
        Ks.prototype.createMediaKeys = function () {
            var a = new Os(this.keySystem);
            return Promise.resolve(a)
        };
        Ks.prototype.getConfiguration = function () {
            return this.g
        };

        function Os(a) {
            this.g = new WebKitMediaKeys(a);
            this.h = new hf
        }
        Os.prototype.createSession = function (a) {
            a = a || "temporary";
            if ("temporary" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
            return new Ps(this.g, a)
        };
        Os.prototype.setServerCertificate = function () {
            return Promise.resolve(!1)
        };

        function Ms(a, b) {
            a.h.lb();
            if (!b) return Promise.resolve();
            a.h.B(b, "webkitneedkey", Ns);
            try {
                return xi(b, HTMLMediaElement.HAVE_METADATA, a.h, function () {
                    b.webkitSetMediaKeys(a.g)
                }), Promise.resolve()
            } catch (c) {
                return Promise.reject(c)
            }
        }

        function Ps(a) {
            Yg.call(this);
            this.j = null;
            this.l = a;
            this.i = this.g = null;
            this.h = new hf;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new He;
            this.keyStatuses = new Qs
        }
        ra(Ps, Yg);
        q = Ps.prototype;
        q.generateRequest = function (a, b) {
            var c = this;
            this.g = new He;
            try {
                var d = this.l.createSession("video/mp4", qb(b));
                this.j = d;
                this.sessionId = d.sessionId || "";
                this.h.B(this.j, "webkitkeymessage", function (e) {
                    c.g && (c.g.resolve(), c.g = null);
                    e = new Q("message", {
                        messageType: void 0 == c.keyStatuses.g ? "license-request" : "license-renewal",
                        message: rb(e.message)
                    });
                    c.dispatchEvent(e)
                });
                this.h.B(d, "webkitkeyadded", function () {
                    c.i && (Rs(c, "usable"), c.i.resolve(), c.i = null)
                });
                this.h.B(d, "webkitkeyerror", function () {
                    var e = Error("EME PatchedMediaKeysApple key error");
                    e.errorCode = c.j.error;
                    if (null != c.g) c.g.reject(e), c.g = null;
                    else if (null != c.i) c.i.reject(e), c.i = null;
                    else switch (c.j.error.code) {
                    case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:
                    case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:
                        Rs(c, "output-not-allowed");
                        break;
                    default:
                        Rs(c, "internal-error")
                    }
                });
                Rs(this, "status-pending")
            } catch (e) {
                this.g.reject(e)
            }
            return this.g
        };
        q.load = function () {
            return Promise.reject(Error("MediaKeySession.load not yet supported"))
        };
        q.update = function (a) {
            this.i = new He;
            try {
                this.j.update(qb(a))
            } catch (b) {
                this.i.reject(b)
            }
            return this.i
        };
        q.close = function () {
            try {
                this.j.close(), this.closed.resolve(), this.h.lb()
            } catch (a) {
                this.closed.reject(a)
            }
            return this.closed
        };
        q.remove = function () {
            return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
        };

        function Rs(a, b) {
            var c = a.keyStatuses;
            c.size = void 0 == b ? 0 : 1;
            c.g = b;
            c = new Q("keystatuseschange");
            a.dispatchEvent(c)
        }

        function Qs() {
            this.size = 0;
            this.g = void 0
        }
        q = Qs.prototype;
        q.forEach = function (a) {
            this.g && a(this.g, hi.value())
        };
        q.get = function (a) {
            if (this.has(a)) return this.g
        };
        q.has = function (a) {
            var b = hi.value();
            return this.g && ob(a, b) ? !0 : !1
        };
        q.entries = function () {};
        q.keys = function () {};
        q.values = function () {};
        ws(function () {
            window.HTMLVideoElement && window.WebKitMediaKeys && (delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Ls, window.MediaKeys = Os, window.MediaKeySystemAccess = Ks, navigator.requestMediaKeySystemAccess = Js)
        });

        function Ss(a, b) {
            try {
                var c = new Ts(a, b);
                return Promise.resolve(c)
            } catch (d) {
                return Promise.reject(d)
            }
        }

        function Us(a) {
            if (a.initData) {
                var b = new CustomEvent("encrypted");
                b.initDataType = "cenc";
                b.initData = rb(tn(a.initData));
                this.dispatchEvent(b)
            }
        }

        function Ts(a, b) {
            this.keySystem = a;
            for (var c = !1, d = t(b), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = {
                        audioCapabilities: [],
                        videoCapabilities: [],
                        persistentState: "optional",
                        distinctiveIdentifier: "optional",
                        initDataTypes: e.initDataTypes,
                        sessionTypes: ["temporary"],
                        label: e.label
                    },
                    g = !1;
                if (e.audioCapabilities)
                    for (var h = t(e.audioCapabilities), k = h.next(); !k.done; k = h.next()) k = k.value, k.contentType && (g = !0, MSMediaKeys.isTypeSupported(this.keySystem, k.contentType.split(";")[0]) && (f.audioCapabilities.push(k), c = !0));
                if (e.videoCapabilities)
                    for (h = t(e.videoCapabilities), k = h.next(); !k.done; k = h.next()) k = k.value, k.contentType && (g = !0, MSMediaKeys.isTypeSupported(this.keySystem, k.contentType.split(";")[0]) && (f.videoCapabilities.push(k), c = !0));
                g || (c = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
                "required" == e.persistentState && (c = !1);
                if (c) {
                    this.g = f;
                    return
                }
            }
            c = Error("Unsupported keySystem");
            c.name = "NotSupportedError";
            c.code = DOMException.NOT_SUPPORTED_ERR;
            throw c;
        }
        Ts.prototype.createMediaKeys = function () {
            var a = new Vs(this.keySystem);
            return Promise.resolve(a)
        };
        Ts.prototype.getConfiguration = function () {
            return this.g
        };

        function Ws(a) {
            var b = this.mediaKeys;
            b && b != a && Xs(b, null);
            delete this.mediaKeys;
            return (this.mediaKeys = a) ? Xs(a, this) : Promise.resolve()
        }

        function Vs(a) {
            this.g = new MSMediaKeys(a);
            this.h = new hf
        }
        Vs.prototype.createSession = function (a) {
            a = a || "temporary";
            if ("temporary" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
            return new Ys(this.g, a)
        };
        Vs.prototype.setServerCertificate = function () {
            return Promise.resolve(!1)
        };

        function Xs(a, b) {
            a.h.lb();
            if (!b) return Promise.resolve();
            a.h.B(b, "msneedkey", Us);
            try {
                return xi(b, HTMLMediaElement.HAVE_METADATA, a.h, function () {
                    b.msSetMediaKeys(a.g)
                }), Promise.resolve()
            } catch (c) {
                return Promise.reject(c)
            }
        }

        function Ys(a) {
            Yg.call(this);
            this.j = null;
            this.l = a;
            this.i = this.g = null;
            this.h = new hf;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new He;
            this.keyStatuses = new Zs
        }
        ra(Ys, Yg);
        q = Ys.prototype;
        q.generateRequest = function (a, b) {
            var c = this;
            this.g = new He;
            try {
                this.j = this.l.createSession("video/mp4", qb(b), null), this.h.B(this.j, "mskeymessage", function (d) {
                    c.g && (c.g.resolve(), c.g = null);
                    d = new Q("message", {
                        messageType: void 0 == c.keyStatuses.g ? "license-request" : "license-renewal",
                        message: rb(d.message)
                    });
                    c.dispatchEvent(d)
                }), this.h.B(this.j, "mskeyadded", function () {
                    c.g ? ($s(c, "usable"), c.g.resolve(), c.g = null) : c.i && ($s(c, "usable"), c.i.resolve(), c.i = null)
                }), this.h.B(this.j, "mskeyerror", function () {
                    var d = Error("EME PatchedMediaKeysMs key error");
                    d.errorCode = c.j.error;
                    if (null != c.g) c.g.reject(d), c.g = null;
                    else if (null != c.i) c.i.reject(d), c.i = null;
                    else switch (c.j.error.code) {
                    case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                    case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                        $s(c, "output-not-allowed");
                        break;
                    default:
                        $s(c, "internal-error")
                    }
                }), $s(this, "status-pending")
            } catch (d) {
                this.g.reject(d)
            }
            return this.g
        };
        q.load = function () {
            return Promise.reject(Error("MediaKeySession.load not yet supported"))
        };
        q.update = function (a) {
            this.i = new He;
            try {
                this.j.update(qb(a))
            } catch (b) {
                this.i.reject(b)
            }
            return this.i
        };
        q.close = function () {
            try {
                this.j.close(), this.closed.resolve(), this.h.lb()
            } catch (a) {
                this.closed.reject(a)
            }
            return this.closed
        };
        q.remove = function () {
            return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
        };

        function $s(a, b) {
            var c = a.keyStatuses;
            c.size = void 0 == b ? 0 : 1;
            c.g = b;
            c = new Q("keystatuseschange");
            a.dispatchEvent(c)
        }

        function Zs() {
            this.size = 0;
            this.g = void 0
        }
        q = Zs.prototype;
        q.forEach = function (a) {
            this.g && a(this.g, hi.value())
        };
        q.get = function (a) {
            if (this.has(a)) return this.g
        };
        q.has = function (a) {
            var b = hi.value();
            return this.g && ob(a, b) ? !0 : !1
        };
        q.entries = function () {};
        q.keys = function () {};
        q.values = function () {};
        ws(function () {
            !window.HTMLVideoElement || !window.MSMediaKeys || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, window.MediaKeys = Vs, window.MediaKeySystemAccess = Ts, navigator.requestMediaKeySystemAccess = Ss, HTMLMediaElement.prototype.setMediaKeys = Ws)
        });

        function at() {
            return Promise.reject(Error("The key system specified is not supported."))
        }

        function bt(a) {
            return null == a ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."))
        }

        function ct() {
            throw new TypeError("Illegal constructor.");
        }
        ct.prototype.createSession = function () {};
        ct.prototype.setServerCertificate = function () {};

        function dt() {
            this.keySystem = "";
            throw new TypeError("Illegal constructor.");
        }
        dt.prototype.getConfiguration = function () {};
        dt.prototype.createMediaKeys = function () {};
        ws(function () {
            !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (navigator.requestMediaKeySystemAccess = at, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = bt, window.MediaKeys = ct, window.MediaKeySystemAccess = dt)
        }, -10);

        function et(a) {
            var b = ft;
            return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a
        }

        function gt(a, b) {
            try {
                var c = new ht(a, b);
                return Promise.resolve(c)
            } catch (d) {
                return Promise.reject(d)
            }
        }

        function it(a) {
            var b = this.mediaKeys;
            b && b != a && jt(b, null);
            delete this.mediaKeys;
            (this.mediaKeys = a) && jt(a, this);
            return Promise.resolve()
        }

        function ht(a, b) {
            this.g = this.keySystem = a;
            var c = !1;
            "org.w3.clearkey" == a && (this.g = "webkit-org.w3.clearkey", c = !1);
            var d = !1;
            var e = document.getElementsByTagName("video");
            e = e.length ? e[0] : document.createElement("video");
            for (var f = t(b), g = f.next(); !g.done; g = f.next()) {
                g = g.value;
                var h = {
                        audioCapabilities: [],
                        videoCapabilities: [],
                        persistentState: "optional",
                        distinctiveIdentifier: "optional",
                        initDataTypes: g.initDataTypes,
                        sessionTypes: ["temporary"],
                        label: g.label
                    },
                    k = !1;
                if (g.audioCapabilities)
                    for (var l = t(g.audioCapabilities),
                            m = l.next(); !m.done; m = l.next()) m = m.value, m.contentType && (k = !0, e.canPlayType(m.contentType.split(";")[0], this.g) && (h.audioCapabilities.push(m), d = !0));
                if (g.videoCapabilities)
                    for (l = t(g.videoCapabilities), m = l.next(); !m.done; m = l.next()) m = m.value, m.contentType && (k = !0, e.canPlayType(m.contentType, this.g) && (h.videoCapabilities.push(m), d = !0));
                k || (d = e.canPlayType("video/mp4", this.g) || e.canPlayType("video/webm", this.g));
                "required" == g.persistentState && (c ? (h.persistentState = "required", h.sessionTypes = ["persistent-license"]) :
                    d = !1);
                if (d) {
                    this.h = h;
                    return
                }
            }
            c = "Unsupported keySystem";
            if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
            c = Error(c);
            c.name = "NotSupportedError";
            c.code = DOMException.NOT_SUPPORTED_ERR;
            throw c;
        }
        ht.prototype.createMediaKeys = function () {
            var a = new kt(this.g);
            return Promise.resolve(a)
        };
        ht.prototype.getConfiguration = function () {
            return this.h
        };

        function kt(a) {
            this.l = a;
            this.g = null;
            this.h = new hf;
            this.i = [];
            this.j = new Map
        }

        function jt(a, b) {
            a.g = b;
            a.h.lb();
            var c = ft;
            b && (a.h.B(b, c + "needkey", function (d) {
                var e = new CustomEvent("encrypted");
                e.initDataType = "cenc";
                e.initData = rb(d.initData);
                a.g.dispatchEvent(e)
            }), a.h.B(b, c + "keymessage", function (d) {
                var e = lt(a, d.sessionId);
                e && (d = new Q("message", {
                    messageType: void 0 == e.keyStatuses.g ? "licenserequest" : "licenserenewal",
                    message: d.message
                }), e.h && (e.h.resolve(), e.h = null), e.dispatchEvent(d))
            }), a.h.B(b, c + "keyadded", function (d) {
                if (d = lt(a, d.sessionId)) mt(d, "usable"), d.g && d.g.resolve(), d.g =
                    null
            }), a.h.B(b, c + "keyerror", function (d) {
                var e = lt(a, d.sessionId);
                e && e.handleError(d)
            }))
        }
        kt.prototype.createSession = function (a) {
            a = a || "temporary";
            if ("temporary" != a && "persistent-license" != a) throw new TypeError("Session type " + a + " is unsupported on this platform.");
            var b = this.g || document.createElement("video");
            b.src || (b.src = "about:blank");
            a = new nt(b, this.l, a);
            this.i.push(a);
            return a
        };
        kt.prototype.setServerCertificate = function () {
            return Promise.resolve(!1)
        };

        function lt(a, b) {
            var c = a.j.get(b);
            return c ? c : (c = a.i.shift()) ? (c.sessionId = b, a.j.set(b, c), c) : null
        }

        function nt(a, b, c) {
            Yg.call(this);
            this.j = a;
            this.m = !1;
            this.g = this.h = null;
            this.i = b;
            this.l = c;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new He;
            this.keyStatuses = new ot
        }
        ra(nt, Yg);
        q = nt.prototype;
        q.handleError = function (a) {
            var b = Error("EME v0.1b key error"),
                c = a.errorCode;
            c.systemCode = a.systemCode;
            b.errorCode = c;
            !a.sessionId && this.h ? (45 == a.systemCode && (b.message = "Unsupported session type."), this.h.reject(b), this.h = null) : a.sessionId && this.g ? (this.g.reject(b), this.g = null) : (b = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? mt(this, "output-restricted") : 1 == b ? mt(this, "expired") : mt(this, "internal-error"))
        };

        function pt(a, b, c) {
            if (a.m) return Promise.reject(Error("The session is already initialized."));
            a.m = !0;
            try {
                if ("persistent-license" == a.l)
                    if (c) var d = qb(Ab("LOAD_SESSION|" + c));
                    else {
                        var e = Ab("PERSISTENT|");
                        d = qc(e, b)
                    }
                else d = qb(b)
            } catch (g) {
                return Promise.reject(g)
            }
            a.h = new He;
            var f = et("generateKeyRequest");
            try {
                a.j[f](a.i, d)
            } catch (g) {
                if ("InvalidStateError" != g.name) return a.h = null, Promise.reject(g);
                (new P(function () {
                    try {
                        a.j[f](a.i, d)
                    } catch (h) {
                        a.h.reject(h), a.h = null
                    }
                })).T(.01)
            }
            return a.h
        }

        function qt(a, b, c) {
            if (a.g) a.g.then(function () {
                return qt(a, b, c)
            })["catch"](function () {
                return qt(a, b, c)
            });
            else {
                a.g = b;
                if ("webkit-org.w3.clearkey" == a.i) {
                    var d = wb(c);
                    var e = JSON.parse(d);
                    "oct" != e.keys[0].kty && (a.g.reject(Error("Response is not a valid JSON Web Key Set.")), a.g = null);
                    d = nc(e.keys[0].k);
                    e = nc(e.keys[0].kid)
                } else d = qb(c), e = null;
                var f = et("addKey");
                try {
                    a.j[f](a.i, d, e, a.sessionId)
                } catch (g) {
                    a.g.reject(g), a.g = null
                }
            }
        }

        function mt(a, b) {
            var c = a.keyStatuses;
            c.size = void 0 == b ? 0 : 1;
            c.g = b;
            c = new Q("keystatuseschange");
            a.dispatchEvent(c)
        }
        q.generateRequest = function (a, b) {
            return pt(this, b, null)
        };
        q.load = function (a) {
            return "persistent-license" == this.l ? pt(this, null, a) : Promise.reject(Error("Not a persistent session."))
        };
        q.update = function (a) {
            var b = new He;
            qt(this, b, a);
            return b
        };
        q.close = function () {
            if ("persistent-license" != this.l) {
                if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
                var a = et("cancelKeyRequest");
                try {
                    this.j[a](this.i, this.sessionId)
                } catch (b) {}
            }
            this.closed.resolve();
            return this.closed
        };
        q.remove = function () {
            return "persistent-license" != this.l ? Promise.reject(Error("Not a persistent session.")) : this.close()
        };

        function ot() {
            this.size = 0;
            this.g = void 0
        }
        q = ot.prototype;
        q.forEach = function (a) {
            this.g && a(this.g, hi.value())
        };
        q.get = function (a) {
            if (this.has(a)) return this.g
        };
        q.has = function (a) {
            var b = hi.value();
            return this.g && ob(a, b) ? !0 : !1
        };
        q.entries = function () {};
        q.keys = function () {};
        q.values = function () {};
        var ft = "";
        ws(function () {
            if (!(!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
                if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) ft = "webkit";
                else if (!HTMLMediaElement.prototype.generateKeyRequest) return;
                navigator.requestMediaKeySystemAccess = gt;
                delete HTMLMediaElement.prototype.mediaKeys;
                HTMLMediaElement.prototype.mediaKeys = null;
                HTMLMediaElement.prototype.setMediaKeys = it;
                window.MediaKeys = kt;
                window.MediaKeySystemAccess = ht
            }
        });

        function rt(a) {
            a = a.target;
            if ("picture-in-picture" == a.webkitPresentationMode) {
                document.pictureInPictureElement = a;
                var b = new Event("enterpictureinpicture");
                a.dispatchEvent(b)
            } else document.pictureInPictureElement == a && (document.pictureInPictureElement = null), b = new Event("leavepictureinpicture"), a.dispatchEvent(b)
        }

        function st() {
            return this.webkitSupportsPresentationMode("picture-in-picture") ? (this.webkitSetPresentationMode("picture-in-picture"), document.pictureInPictureElement = this, Promise.resolve()) : Promise.reject(Error("PiP not allowed by video element"))
        }

        function tt() {
            var a = document.pictureInPictureElement;
            return a ? (a.webkitSetPresentationMode("inline"), document.pictureInPictureElement = null, Promise.resolve()) : Promise.reject(Error("No picture in picture element found"))
        }

        function ut() {
            return this.hasAttribute("disablePictureInPicture") ? !0 : !this.webkitSupportsPresentationMode("picture-in-picture")
        }

        function vt(a) {
            a ? this.setAttribute("disablePictureInPicture", "") : this.removeAttribute("disablePictureInPicture")
        }
        ws(function () {
            if (window.HTMLVideoElement) {
                var a = HTMLVideoElement.prototype;
                a.requestPictureInPicture && document.exitPictureInPicture || !a.webkitSupportsPresentationMode || (document.pictureInPictureEnabled = !0, document.pictureInPictureElement = null, a.requestPictureInPicture = st, Object.defineProperty(a, "disablePictureInPicture", {
                    get: ut,
                    set: vt,
                    enumerable: !0,
                    configurable: !0
                }), document.exitPictureInPicture = tt, document.addEventListener("webkitpresentationmodechanged", rt, !0))
            }
        });

        function wt() {
            return new Promise(function (a, b) {
                navigator.webkitTemporaryStorage.queryUsageAndQuota(function (c, d) {
                    a({
                        usage: c,
                        quota: d
                    })
                }, b)
            })
        }
        ws(function () {
            navigator.storage && navigator.storage.estimate || !navigator.webkitTemporaryStorage || !navigator.webkitTemporaryStorage.queryUsageAndQuota || ("storage" in navigator || (navigator.storage = {}), navigator.storage.estimate = wt)
        });
        ws(function () {
            if (window.HTMLMediaElement) {
                var a = HTMLMediaElement.prototype.play;
                HTMLMediaElement.prototype.play = function () {
                    var b = a.apply(this);
                    b && b["catch"](function () {});
                    return b
                }
            }
        });

        function xt() {
            return {
                droppedVideoFrames: this.webkitDroppedFrameCount,
                totalVideoFrames: this.webkitDecodedFrameCount,
                corruptedVideoFrames: 0,
                creationTime: NaN,
                totalFrameDelay: 0
            }
        }
        ws(function () {
            if (window.HTMLVideoElement) {
                var a = HTMLVideoElement.prototype;
                !a.getVideoPlaybackQuality && "webkitDroppedFrameCount" in a && (a.getVideoPlaybackQuality = xt)
            }
        });

        function yt(a, b, c) {
            return new window.TextTrackCue(a, b, c)
        }

        function zt(a, b, c) {
            return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c)
        }
        ws(function () {
            if (!window.VTTCue && window.TextTrackCue) {
                var a = null,
                    b = TextTrackCue.length;
                if (3 == b) a = yt;
                else if (6 == b) a = zt;
                else {
                    try {
                        var c = !!yt(1, 2, "")
                    } catch (d) {
                        c = !1
                    }
                    c && (a = yt)
                }
                a && (window.VTTCue = function (d, e, f) {
                    return a(d, e, f)
                })
            }
        });

        function At() {}
        At.prototype.parseInit = function () {};
        At.prototype.parseMedia = function (a, b) {
            var c = null,
                d = [],
                e = wb(a).split(/\r?\n/);
            e = t(e);
            for (var f = e.next(); !f.done; f = e.next())
                if ((f = f.value) && !/^\s+$/.test(f) && (f = Bt.exec(f))) {
                    var g = Ct.exec(f[1]);
                    g = 60 * parseInt(g[1], 10) + parseFloat(g[2].replace(",", "."));
                    f = new zc(g, b.segmentEnd ? b.segmentEnd : g + 2, f[2]);
                    c && (c.endTime = g, d.push(c));
                    c = f
                } c && d.push(c);
            return d
        };
        L("shaka.text.LrcTextParser", At);
        At.prototype.parseMedia = At.prototype.parseMedia;
        At.prototype.parseInit = At.prototype.parseInit;
        var Bt = /^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)/,
            Ct = /^(\d+):(\d{1,2}(?:[.,]\d{1,3})?)$/;
        Ye["application/x-subtitle-lrc"] = function () {
            return new At
        };

        function Dt() {}
        Dt.prototype.parseInit = function () {};
        Dt.prototype.parseMedia = function (a, b) {
            var c = wb(a),
                d = [],
                e = new DOMParser,
                f = null;
            if ("" == c) return d;
            try {
                f = e.parseFromString(c, "text/xml")
            } catch (C) {
                throw new O(2, 2, 2005, "Failed to parse TTML.");
            }
            if (f) {
                if (c = f.getElementsByTagName("parsererror")[0]) throw new O(2, 2, 2005, c.textContent);
                var g = f.getElementsByTagName("tt")[0];
                if (!g) throw new O(2, 2, 2005, "TTML does not contain <tt> tag.");
                e = g.getElementsByTagName("body")[0];
                if (!e) return [];
                c = zn(g, "http://www.w3.org/ns/ttml#parameter", "frameRate");
                var h = zn(g, "http://www.w3.org/ns/ttml#parameter",
                        "subFrameRate"),
                    k = zn(g, "http://www.w3.org/ns/ttml#parameter", "frameRateMultiplier"),
                    l = zn(g, "http://www.w3.org/ns/ttml#parameter", "tickRate"),
                    m = zn(g, "http://www.w3.org/ns/ttml#parameter", "cellResolution");
                f = g.getAttribute("xml:space") || "default";
                var n = zn(g, "http://www.w3.org/ns/ttml#styling", "extent");
                if ("default" != f && "preserve" != f) throw new O(2, 2, 2005, "Invalid xml:space value: " + f);
                f = "default" == f;
                c = new Et(c, h, k, l);
                m = m ? (m = /^(\d+) (\d+)$/.exec(m)) ? {
                        columns: parseInt(m[1], 10),
                        rows: parseInt(m[2], 10)
                    } :
                    null : null;
                h = (h = g.getElementsByTagName("metadata")[0]) ? yn(h) : [];
                k = Array.from(g.getElementsByTagName("style"));
                g = Array.from(g.getElementsByTagName("region"));
                l = [];
                for (var p = t(g), r = p.next(); !r.done; r = p.next()) {
                    var u = r.value;
                    r = new Bc;
                    var w = u.getAttribute("xml:id");
                    if (w) {
                        r.id = w;
                        var x = null;
                        n && (x = Ft.exec(n) || Gt.exec(n));
                        w = x ? Number(x[1]) : null;
                        x = x ? Number(x[2]) : null;
                        var y, D;
                        if (y = Ht(u, k, "extent")) y = (D = Ft.exec(y)) || Gt.exec(y), null != y && (r.width = Number(y[1]), r.height = Number(y[2]), D || (null != w && (r.width = 100 * r.width /
                            w), null != x && (r.height = 100 * r.height / x)), r.widthUnits = D || null != w ? Sc : 0, r.heightUnits = D || null != x ? Sc : 0);
                        if (u = Ht(u, k, "origin")) y = (D = Ft.exec(u)) || Gt.exec(u), null != y && (r.viewportAnchorX = Number(y[1]), r.viewportAnchorY = Number(y[2]), D || (null != x && (r.viewportAnchorY = 100 * r.viewportAnchorY / x), null != w && (r.viewportAnchorX = 100 * r.viewportAnchorX / w)), r.viewportAnchorUnits = D || null != w ? Sc : 0)
                    } else r = null;
                    r && l.push(r)
                }
                if (vn(e, "p").length) throw new O(2, 2, 2001, "<p> can only be inside <div> in TTML");
                e = t(vn(e, "div"));
                for (n =
                    e.next(); !n.done; n = e.next()) {
                    n = n.value;
                    if (vn(n, "span").length) throw new O(2, 2, 2001, "<span> can only be inside <p> in TTML");
                    if ((p = vn(n, "p")) && p.length)
                        for (n = t(p), p = n.next(); !p.done; p = n.next())(p = It(p.value, b.periodStart, c, h, k, g, l, f, !1, m)) && d.push(p);
                    else(n = It(n, b.periodStart, c, h, k, g, l, f, !1, m)) && d.push(n)
                }
            }
            return d
        };

        function It(a, b, c, d, e, f, g, h, k, l) {
            var m = a.parentNode;
            if (a.nodeType == Node.TEXT_NODE) {
                var n = document.createElement("span");
                n.textContent = a.textContent;
                a = n
            }
            h = "default" == (a.getAttribute("xml:space") || (h ? "default" : "preserve"));
            n = /\S/.test(a.textContent);
            if (!(a.hasAttribute("begin") || a.hasAttribute("end") || a.hasAttribute("dur") || n || "br" == a.tagName || k && !h)) return null;
            var p = Jt(a, c);
            n = p.start;
            for (p = p.end; m && m.nodeType == Node.ELEMENT_NODE && "tt" != m.tagName;) p = Kt(m, c, n, p), n = p.start, p = p.end, m = m.parentNode;
            null ==
                n && (n = 0);
            n += b;
            p = null == p ? Infinity : p + b;
            if ("br" == a.tagName) return d = new zc(n, p, ""), d.lineBreak = !0, d;
            var r = "";
            m = [];
            if (Array.from(a.childNodes).every(function (y) {
                    return y.nodeType == Node.TEXT_NODE
                })) r = a.textContent, h && (r = r.trim(), r = r.replace(/\s+/g, " "));
            else
                for (var u = t(a.childNodes), w = u.next(); !w.done; w = u.next())(w = It(w.value, b, c, d, e, f, g, h, !0, l)) && m.push(w);
            b = new zc(n, p, r);
            b.nestedCues = m;
            l && (b.cellResolution = l);
            if ((f = Lt(a, "region", f, "")[0]) && f.getAttribute("xml:id")) {
                var x = f.getAttribute("xml:id");
                b.region =
                    g.filter(function (y) {
                        return y.id == x
                    })[0]
            }
            g = null;
            l = t(Mt);
            for (c = l.next(); !c.done && !(g = Lt(a, "backgroundImage", d, "#", c.value)[0]); c = l.next());
            Nt(b, a, f, g, e, k, 0 == m.length);
            return b
        }

        function Nt(a, b, c, d, e, f, g) {
            f = f || g;
            "rtl" == Ot(b, c, e, "direction", f) && (a.direction = "rtl");
            g = Ot(b, c, e, "writingMode", f);
            "tb" == g || "tblr" == g ? a.writingMode = "vertical-lr" : "tbrl" == g ? a.writingMode = "vertical-rl" : "rltb" == g || "rl" == g ? a.direction = "rtl" : g && (a.direction = Ac);
            (g = Ot(b, c, e, "textAlign", f)) ? (a.positionAlign = Pt[g], a.lineAlign = Qt[g], a.textAlign = Mc[g.toUpperCase()]) : a.textAlign = "start";
            if (g = Ot(b, c, e, "displayAlign", f)) a.displayAlign = Nc[g.toUpperCase()];
            if (g = Ot(b, c, e, "color", f)) a.color = g;
            if (g = Ot(b, c, e, "backgroundColor",
                    f)) a.backgroundColor = g;
            if (g = Ot(b, c, e, "border", f)) a.border = g;
            if (g = Ot(b, c, e, "fontFamily", f)) a.fontFamily = g;
            (g = Ot(b, c, e, "fontWeight", f)) && "bold" == g && (a.fontWeight = 700);
            g = Ot(b, c, e, "wrapOption", f);
            a.wrapLine = g && "noWrap" == g ? !1 : !0;
            (g = Ot(b, c, e, "lineHeight", f)) && g.match(Rt) && (a.lineHeight = g);
            (g = Ot(b, c, e, "fontSize", f)) && (g.match(Rt) || g.match(St)) && (a.fontSize = g);
            if (g = Ot(b, c, e, "fontStyle", f)) a.fontStyle = Rc[g.toUpperCase()];
            if (d) {
                g = d.getAttribute("imageType") || d.getAttribute("imagetype");
                var h = d.getAttribute("encoding");
                d = d.textContent.trim();
                "PNG" == g && "Base64" == h && d && (a.backgroundImage = "data:image/png;base64," + d)
            }(d = Ot(b, c, e, "letterSpacing", f)) && d.match(Rt) && (a.letterSpacing = d);
            (d = Ot(b, c, e, "linePadding", f)) && d.match(Rt) && (a.linePadding = d);
            if (f = Ot(b, c, e, "opacity", f)) a.opacity = parseFloat(f);
            (c = Ht(c, e, "textDecoration")) && Tt(a, c);
            (b = Ut(b, e, "textDecoration")) && Tt(a, b)
        }

        function Tt(a, b) {
            for (var c = t(b.split(" ")), d = c.next(); !d.done; d = c.next()) switch (d.value) {
            case "underline":
                a.textDecoration.includes("underline") || a.textDecoration.push("underline");
                break;
            case "noUnderline":
                a.textDecoration.includes("underline") && wc(a.textDecoration, "underline");
                break;
            case "lineThrough":
                a.textDecoration.includes("lineThrough") || a.textDecoration.push("lineThrough");
                break;
            case "noLineThrough":
                a.textDecoration.includes("lineThrough") && wc(a.textDecoration, "lineThrough");
                break;
            case "overline":
                a.textDecoration.includes("overline") ||
                    a.textDecoration.push("overline");
                break;
            case "noOverline":
                a.textDecoration.includes("overline") && wc(a.textDecoration, "overline")
            }
        }

        function Ot(a, b, c, d, e) {
            e = void 0 === e ? !0 : e;
            return (a = Ut(a, c, d)) ? a : e ? Ht(b, c, d) : null
        }

        function Ht(a, b, c) {
            if (!a) return null;
            var d = zn(a, "http://www.w3.org/ns/ttml#styling", c);
            return d ? d : Vt(a, b, c)
        }

        function Ut(a, b, c) {
            var d = zn(a, "http://www.w3.org/ns/ttml#styling", c);
            return d ? d : Vt(a, b, c)
        }

        function Vt(a, b, c) {
            a = Lt(a, "style", b, "");
            for (var d = null, e = 0; e < a.length; e++) {
                var f = zn(a[e], "urn:ebu:tt:style", c);
                f || (f = zn(a[e], "http://www.w3.org/ns/ttml#styling", c));
                f || (f = Ut(a[e], b, c));
                f && (d = f)
            }
            return d
        }

        function Lt(a, b, c, d, e) {
            var f = [];
            if (!a || 1 > c.length) return f;
            var g = a;
            for (a = null; g && !(a = e ? zn(g, e, b) : g.getAttribute(b)) && (g = g.parentNode, g instanceof Element););
            if (b = a)
                for (b = t(b.split(" ")), e = b.next(); !e.done; e = b.next())
                    for (e = e.value, a = t(c), g = a.next(); !g.done; g = a.next())
                        if (g = g.value, d + g.getAttribute("xml:id") == e) {
                            f.push(g);
                            break
                        } return f
        }

        function Kt(a, b, c, d) {
            a = Jt(a, b);
            null == c ? c = a.start : null != a.start && (c += a.start);
            null == d ? d = a.end : null != a.start && (d += a.start);
            return {
                start: c,
                end: d
            }
        }

        function Jt(a, b) {
            var c = Wt(a.getAttribute("begin"), b),
                d = Wt(a.getAttribute("end"), b),
                e = Wt(a.getAttribute("dur"), b);
            null == d && null != e && (d = c + e);
            return {
                start: c,
                end: d
            }
        }

        function Wt(a, b) {
            var c = null;
            if (Xt.test(a)) {
                c = Xt.exec(a);
                var d = Number(c[1]),
                    e = Number(c[2]),
                    f = Number(c[3]),
                    g = Number(c[4]);
                g += (Number(c[5]) || 0) / b.h;
                f += g / b.frameRate;
                c = f + 60 * e + 3600 * d
            } else if (Yt.test(a)) c = Zt(Yt, a);
            else if ($t.test(a)) c = Zt($t, a);
            else if (au.test(a)) c = au.exec(a), c = Number(c[1]) / b.frameRate;
            else if (bu.test(a)) c = bu.exec(a), c = Number(c[1]) / b.g;
            else if (cu.test(a)) c = Zt(cu, a);
            else if (a) throw new O(2, 2, 2001, "Could not parse cue time range in TTML");
            return c
        }

        function Zt(a, b) {
            var c = a.exec(b);
            return null == c || "" == c[0] ? null : (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0)
        }
        L("shaka.text.TtmlTextParser", Dt);
        Dt.prototype.parseMedia = Dt.prototype.parseMedia;
        Dt.prototype.parseInit = Dt.prototype.parseInit;

        function Et(a, b, c, d) {
            this.frameRate = Number(a) || 30;
            this.h = Number(b) || 1;
            this.g = Number(d);
            0 == this.g && (this.g = a ? this.frameRate * this.h : 1);
            c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= Number(a[1]) / Number(a[2]))
        }
        var Ft = /^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,
            St = /^(\d{1,2}(?:\.\d+)?|100)%$/,
            Rt = /^(\d+px|\d+em|\d*\.?\d+c)$/,
            Gt = /^(\d+)px (\d+)px$/,
            Xt = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
            Yt = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
            $t = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,
            au = /^(\d*(?:\.\d*)?)f$/,
            bu = /^(\d*(?:\.\d*)?)t$/,
            cu = /^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,
            Qt = {
                left: Hc,
                center: "center",
                right: "end",
                start: Hc,
                end: "end"
            },
            Pt = {
                left: "line-left",
                center: "center",
                right: "line-right"
            },
            Mt = ["http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt", "http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt"];
        Ye["application/ttml+xml"] = function () {
            return new Dt
        };

        function du() {
            this.s = new Dt
        }
        du.prototype.parseInit = function (a) {
            var b = !1;
            (new Qb).box("moov", Ub).box("trak", Ub).box("mdia", Ub).box("minf", Ub).box("stbl", Ub).U("stsd", Wb).box("stpp", function (c) {
                b = !0;
                c.parser.stop()
            }).parse(a);
            if (!b) throw new O(2, 2, 2007);
        };
        du.prototype.parseMedia = function (a, b) {
            var c = this,
                d = !1,
                e = [];
            (new Qb).box("mdat", Xb(function (f) {
                d = !0;
                e = e.concat(c.s.parseMedia(f, b))
            })).parse(a, !1);
            if (!d) throw new O(2, 2, 2007);
            return e
        };
        L("shaka.text.Mp4TtmlParser", du);
        du.prototype.parseMedia = du.prototype.parseMedia;
        du.prototype.parseInit = du.prototype.parseInit;
        Ye['application/mp4; codecs="stpp"'] = function () {
            return new du
        };
        Ye['application/mp4; codecs="stpp.ttml.im1t"'] = function () {
            return new du
        };
        Ye['application/mp4; codecs="stpp.TTML.im1t"'] = function () {
            return new du
        };

        function eu() {}
        eu.prototype.parseInit = function () {};
        eu.prototype.parseMedia = function (a, b) {
            var c = wb(a);
            c = c.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
            var d = c.split(/\n{2,}/m);
            if (!/^WEBVTT($|[ \t\n])/m.test(d[0])) throw new O(2, 2, 2E3);
            c = b.periodStart;
            if (d[0].includes("X-TIMESTAMP-MAP")) {
                var e = d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),
                    f = d[0].match(/MPEGTS:(\d+)/m);
                if (e && f) {
                    c = fu(new Ip(e[1]));
                    if (null == c) throw new O(2, 2, 2E3);
                    f = Number(f[1]);
                    for (e = b.segmentStart; 95443.7176888889 <= e;) e -= 95443.7176888889, f += 8589934592;
                    c = b.periodStart + f / 9E4 - c
                }
            }
            f = [];
            e = t(d[0].split("\n"));
            for (var g = e.next(); !g.done; g = e.next())
                if (g = g.value, /^Region:/.test(g)) {
                    g = new Ip(g);
                    var h = new Bc;
                    Lp(g);
                    Jp(g);
                    for (var k = Lp(g); k;) {
                        var l = h,
                            m = k;
                        (k = /^id=(.*)$/.exec(m)) ? l.id = k[1]: (k = /^width=(\d{1,2}|100)%$/.exec(m)) ? l.width = Number(k[1]) : (k = /^lines=(\d+)$/.exec(m)) ? (l.height = Number(k[1]), l.heightUnits = 2) : (k = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m)) ? (l.regionAnchorX = Number(k[1]), l.regionAnchorY = Number(k[2])) : (k = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(m)) ?
                            (l.viewportAnchorX = Number(k[1]), l.viewportAnchorY = Number(k[2])) : /^scroll=up$/.exec(m) && (l.scroll = "up");
                        Jp(g);
                        k = Lp(g)
                    }
                    f.push(h)
                } e = new Map;
            gu(e);
            g = [];
            d = t(d.slice(1));
            for (h = d.next(); !h.done; h = d.next()) {
                h = h.value.split("\n");
                if ((1 != h.length || h[0]) && !/^NOTE($|[ \t])/.test(h[0]) && "STYLE" == h[0] && h[1].includes("::cue")) {
                    l = "global";
                    (k = h[1].match(/\((.*)\)/)) && (l = k.pop());
                    k = h.slice(2, -1);
                    h[1].includes("}") && (m = /\{(.*?)\}/.exec(h[1])) && (k = m[1].split(";"));
                    m = new zc(0, 0, "");
                    for (var n = !1, p = 0; p < k.length; p++) {
                        var r =
                            /^\s*([^:]+):\s*(.*)/.exec(k[p]);
                        if (r) {
                            var u = r[2].trim().replace(";", "");
                            switch (r[1].trim()) {
                            case "background-color":
                                n = !0;
                                m.backgroundColor = u;
                                break;
                            case "color":
                                n = !0;
                                m.color = u;
                                break;
                            case "font-family":
                                n = !0;
                                m.fontFamily = u;
                                break;
                            case "font-size":
                                n = !0;
                                m.fontSize = u;
                                break;
                            case "font-weight":
                                700 <= parseInt(u, 10) && (n = !0, m.fontWeight = 700);
                                break;
                            case "font-style":
                                switch (u) {
                                case "normal":
                                    n = !0;
                                    m.fontStyle = Kc;
                                    break;
                                case "italic":
                                    n = !0;
                                    m.fontStyle = "italic";
                                    break;
                                case "oblique":
                                    n = !0, m.fontStyle = "oblique"
                                }
                                break;
                            case "opacity":
                                n = !0;
                                m.opacity = parseFloat(u);
                                break;
                            case "white-space":
                                n = !0, m.wrapLine = "noWrap" != u
                            }
                        }
                    }
                    n && e.set(l, m)
                }
                p = c;
                if (1 == h.length && !h[0] || /^NOTE($|[ \t])/.test(h[0]) || "STYLE" == h[0]) h = null;
                else {
                    l = null;
                    h[0].includes("-->") || (l = h[0], h.splice(0, 1));
                    k = new Ip(h[0]);
                    m = fu(k);
                    r = Kp(k, /[ \t]+--\x3e[ \t]+/g);
                    n = fu(k);
                    if (null == m || null == r || null == n) throw new O(2, 2, 2001, "Could not parse cue time range in WebVTT");
                    m += p;
                    n += p;
                    p = h.slice(1).join("\n").trim();
                    e.has("global") ? (h = e.get("global").clone(), h.startTime = m, h.endTime = n, h.payload =
                        "") : h = new zc(m, n, "");
                    hu(p, h, e);
                    Jp(k);
                    for (m = Lp(k); m;) iu(h, m, f), Jp(k), m = Lp(k);
                    null != l && (h.id = l)
                }
                h && g.push(h)
            }
            return g
        };

        function gu(a) {
            for (var b = t(Object.entries(Pc)), c = b.next(); !c.done; c = b.next()) {
                var d = t(c.value);
                c = d.next().value;
                d = d.next().value;
                var e = new zc(0, 0, "");
                e.color = d;
                a.set(c, e)
            }
            b = t(Object.entries(Qc));
            for (c = b.next(); !c.done; c = b.next()) d = t(c.value), c = d.next().value, d = d.next().value, e = new zc(0, 0, ""), e.backgroundColor = d, a.set(c, e)
        }

        function hu(a, b, c) {
            0 === c.size && gu(c);
            a: {
                var d = a;a = [];
                for (var e = -1, f = "", g = 0; g < d.length; g++)
                    if ("/" === d[g]) {
                        var h = d.indexOf(">", g);
                        if (h <= g) {
                            a = d;
                            break a
                        }
                        h = d.substring(g + 1, h);
                        var k = a.pop();
                        if (k === h) f += "/" + h + ">";
                        else {
                            if (!k.startsWith("c.") || "c" !== h) {
                                a = d;
                                break a
                            }
                            f += "/" + k + ">"
                        }
                        g += h.length + 1
                    } else "<" === d[g] ? e = g + 1 : ">" === d[g] && 0 < e && (a.push(d.substr(e, g - e)), e = -1), f += d[g];a = f
            }
            if (e = Ln("<span>" + a + "</span>", "span")) {
                d = [];
                e = e.childNodes;
                if (1 == e.length && (f = e[0], f.nodeType == Node.TEXT_NODE || f.nodeType == Node.CDATA_SECTION_NODE)) {
                    b.payload =
                        a;
                    return
                }
                a = t(e);
                for (e = a.next(); !e.done; e = a.next()) ju(e.value, b, d, c);
                b.nestedCues = d
            } else b.payload = a
        }

        function ku(a, b) {
            return a && 0 < a.length ? a : b
        }

        function ju(a, b, c, d) {
            var e = b.clone();
            if (a.nodeType === Node.ELEMENT_NODE && a.nodeName)
                for (var f = t(a.nodeName.split(/[ .]+/)), g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    if (d.has(g)) {
                        var h = d.get(g);
                        h && (e.backgroundColor = ku(h.backgroundColor, e.backgroundColor), e.color = ku(h.color, e.color), e.fontFamily = ku(h.fontFamily, e.fontFamily), e.fontSize = ku(h.fontSize, e.fontSize), e.fontWeight = h.fontWeight, e.fontStyle = h.fontStyle, e.opacity = h.opacity, e.wrapLine = h.wrapLine)
                    }
                    switch (g) {
                    case "b":
                        e.fontWeight = 700;
                        break;
                    case "i":
                        e.fontStyle =
                            "italic";
                        break;
                    case "u":
                        e.textDecoration.push("underline")
                    }
                }
            if (Bn(a))
                for (f = !0, d = t(a.textContent.split("\n")), a = d.next(); !a.done; a = d.next()) a = a.value, f || (f = b.clone(), f.lineBreak = !0, c.push(f)), 0 < a.length && (f = e.clone(), f.payload = a, c.push(f)), f = !1;
            else
                for (b = t(a.childNodes), a = b.next(); !a.done; a = b.next()) ju(a.value, e, c, d)
        }

        function iu(a, b, c) {
            var d;
            if (d = /^align:(start|middle|center|end|left|right)$/.exec(b)) b = d[1], "middle" == b ? a.textAlign = Ec : a.textAlign = Mc[b.toUpperCase()];
            else if (d = /^vertical:(lr|rl)$/.exec(b)) a.writingMode = "lr" == d[1] ? "vertical-lr" : "vertical-rl";
            else if (d = /^size:([\d.]+)%$/.exec(b)) a.size = Number(d[1]);
            else if (d = /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) a.position = Number(d[1]), d[2] && (b = d[2], a.positionAlign = "line-left" == b || "start" == b ? "line-left" : "line-right" == b || "end" ==
                b ? "line-right" : "center");
            else if (d = /^region:(.*)$/.exec(b)) {
                if (b = lu(c, d[1])) a.region = b
            } else if (c = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = 1, a.line = Number(c[1]), c[2] && (a.lineAlign = Oc[c[2].toUpperCase()]);
            else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.lineInterpretation = Gc, a.line = Number(c[1]), c[2] && (a.lineAlign = Oc[c[2].toUpperCase()])
        }

        function lu(a, b) {
            var c = a.filter(function (d) {
                return d.id == b
            });
            return c.length ? c[0] : null
        }

        function fu(a) {
            a = Kp(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
            if (null == a) return null;
            var b = Number(a[2]),
                c = Number(a[3]);
            return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
        }
        L("shaka.text.VttTextParser", eu);
        eu.prototype.parseMedia = eu.prototype.parseMedia;
        eu.prototype.parseInit = eu.prototype.parseInit;
        Ye["text/vtt"] = function () {
            return new eu
        };
        Ye['text/vtt; codecs="vtt"'] = function () {
            return new eu
        };
        Ye['text/vtt; codecs="wvtt"'] = function () {
            return new eu
        };

        function mu() {
            this.g = null
        }
        mu.prototype.parseInit = function (a) {
            var b = this,
                c = !1;
            (new Qb).box("moov", Ub).box("trak", Ub).box("mdia", Ub).U("mdhd", function (d) {
                d = ce(d.reader, d.version);
                b.g = d.timescale
            }).box("minf", Ub).box("stbl", Ub).U("stsd", Wb).box("wvtt", function () {
                c = !0
            }).parse(a);
            if (!this.g) throw new O(2, 2, 2008);
            if (!c) throw new O(2, 2, 2008);
        };
        mu.prototype.parseMedia = function (a, b) {
            if (!this.g) throw new O(2, 2, 2008);
            var c = 0,
                d = [],
                e, f = [],
                g = !1,
                h = !1,
                k = !1,
                l = null;
            (new Qb).box("moof", Ub).box("traf", Ub).U("tfdt", function (A) {
                g = !0;
                c = be(A.reader, A.version).bd
            }).U("tfhd", function (A) {
                l = ae(A.reader, A.flags).Ud
            }).U("trun", function (A) {
                h = !0;
                d = de(A.reader, A.version, A.flags).ke
            }).box("mdat", Xb(function (A) {
                k = !0;
                e = A
            })).parse(a, !1);
            if (!k && !g && !h) throw new O(2, 2, 2008);
            for (var m = c, n = new Db(e, 0), p = t(d), r = p.next(); !r.done; r = p.next()) {
                r = r.value;
                var u = r.Ed || l,
                    w = r.Hc ?
                    c + r.Hc : m;
                m = w + (u || 0);
                var x = 0;
                do {
                    var y = n.M();
                    x += y;
                    var D = n.M(),
                        C = null;
                    "vttc" == Yb(D) ? 8 < y && (C = n.Za(y - 8)) : n.skip(y - 8);
                    u && C && (y = nu(C, b.periodStart + w / this.g, b.periodStart + m / this.g), f.push(y))
                } while (r.sampleSize && x < r.sampleSize)
            }
            return f.filter(Nb)
        };

        function nu(a, b, c) {
            var d, e, f;
            (new Qb).box("payl", Xb(function (g) {
                d = wb(g)
            })).box("iden", Xb(function (g) {
                e = wb(g)
            })).box("sttg", Xb(function (g) {
                f = wb(g)
            })).parse(a);
            return d ? ou(d, e, f, b, c) : null
        }

        function ou(a, b, c, d, e) {
            d = new zc(d, e, "");
            hu(a, d, new Map);
            b && (d.id = b);
            if (c)
                for (a = new Ip(c), b = Lp(a); b;) iu(d, b, []), Jp(a), b = Lp(a);
            return d
        }
        L("shaka.text.Mp4VttParser", mu);
        mu.prototype.parseMedia = mu.prototype.parseMedia;
        mu.prototype.parseInit = mu.prototype.parseInit;
        Ye['application/mp4; codecs="wvtt"'] = function () {
            return new mu
        };

        function pu() {}
        pu.prototype.parseInit = function () {};
        pu.prototype.parseMedia = function (a) {
            var b = wb(a).replace(/\r+/g, "");
            b = b.trim();
            a = [];
            if ("" == b) return a;
            b = t(b.split("\n\n"));
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value.split("\n");
                var d = new Ip(c[0]),
                    e = qu(d),
                    f = Kp(d, /,/g);
                d = qu(d);
                if (null == e || null == f || null == d) throw new O(2, 2, 2001, "Could not parse cue time range in SubViewer");
                a.push(new zc(e, d, c.slice(1).join("\n").trim()))
            }
            return a
        };

        function qu(a) {
            a = Kp(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{2,3})/g);
            if (null == a) return null;
            var b = Number(a[2]),
                c = Number(a[3]);
            return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
        }
        L("shaka.text.SbvTextParser", pu);
        pu.prototype.parseMedia = pu.prototype.parseMedia;
        pu.prototype.parseInit = pu.prototype.parseInit;
        Ye["text/x-subviewer"] = function () {
            return new pu
        };

        function ru() {
            this.s = new eu
        }
        ru.prototype.parseInit = function () {};
        ru.prototype.parseMedia = function (a, b) {
            var c = wb(a);
            c = su(c);
            c = qb(Ab(c));
            return this.s.parseMedia(c, b)
        };

        function su(a) {
            var b = "WEBVTT\n\n";
            if ("" == a) return b;
            a = a.replace(/\r+/g, "");
            a = a.trim();
            a = t(a.split("\n\n"));
            for (var c = a.next(); !c.done; c = a.next()) c = c.value.split(/\n/), c[0].match(/\d+/) && c.shift(), c[0] = c[0].replace(/,/g, "."), b += c.join("\n") + "\n\n";
            return b
        }
        L("shaka.text.SrtTextParser", ru);
        ru.srt2webvtt = su;
        ru.prototype.parseMedia = ru.prototype.parseMedia;
        ru.prototype.parseInit = ru.prototype.parseInit;
        Ye["text/srt"] = function () {
            return new ru
        };

        function tu() {}
        tu.prototype.parseInit = function () {};
        tu.prototype.parseMedia = function (a) {
            var b = "",
                c = "";
            a = wb(a).split(/\r?\n\s*\r?\n/);
            a = t(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = uu.exec(d.value);
                e && (d = e[1], e = e[2], "V4 Styles" == d || "V4+ Styles" == d ? b = e : "Events" == d && (c = e))
            }
            a = [];
            d = null;
            b = t(b.split(/\r?\n/));
            for (var f = b.next(); !f.done; f = b.next())
                if (e = f.value, !/^\s*;/.test(e) && (f = vu.exec(e)))
                    if (e = f[1].trim(), f = f[2].trim(), "Format" == e) d = f.split(wu);
                    else if ("Style" == e) {
                e = f.split(wu);
                f = {};
                for (var g = 0; g < d.length && g < e.length; g++) f[d[g]] = e[g];
                a.push(f)
            }
            d = [];
            b = null;
            e = {};
            c = t(c.split(/\r?\n/));
            for (f = c.next(); !f.done; e = {
                    Xc: e.Xc
                }, f = c.next())
                if (f = f.value, !/^\s*;/.test(f) && (g = vu.exec(f)))
                    if (f = g[1].trim(), g = g[2].trim(), "Format" == f) b = g.split(wu);
                    else if ("Dialogue" == f) {
                g = g.split(wu);
                f = {};
                for (var h = 0; h < b.length && h < g.length; h++) f[b[h]] = g[h];
                h = xu(f.Start);
                var k = xu(f.End);
                g = new zc(h, k, g.slice(b.length - 1).join(",").replace(/\\N/g, "\n").replace(/\{[^}]+\}/g, ""));
                e.Xc = f.Style;
                (f = a.find(function (l) {
                    return function (m) {
                        return m.Name == l.Xc
                    }
                }(e))) && yu(g, f);
                d.push(g)
            }
            return d
        };

        function yu(a, b) {
            var c = b.Fontname;
            c && (a.fontFamily = c);
            if (c = b.Fontsize) a.fontSize = c + "px";
            if (c = b.PrimaryColour)
                if (c = zu(c)) a.color = c;
            if (c = b.BackColour)
                if (c = zu(c)) a.backgroundColor = c;
            b.Bold && (a.fontWeight = 700);
            b.Italic && (a.fontStyle = "italic");
            b.Underline && a.textDecoration.push("underline");
            if (c = b.Spacing) a.letterSpacing = c + "px";
            if (c = b.Alignment) switch (parseInt(c, 10)) {
            case 1:
                a.displayAlign = Ic;
                a.textAlign = "start";
                break;
            case 2:
                a.displayAlign = Ic;
                a.textAlign = Ec;
                break;
            case 3:
                a.displayAlign = Ic;
                a.textAlign = "end";
                break;
            case 5:
                a.displayAlign = "before";
                a.textAlign = "start";
                break;
            case 6:
                a.displayAlign = "before";
                a.textAlign = Ec;
                break;
            case 7:
                a.displayAlign = "before";
                a.textAlign = "end";
                break;
            case 9:
                a.displayAlign = "center";
                a.textAlign = "start";
                break;
            case 10:
                a.displayAlign = "center";
                a.textAlign = Ec;
                break;
            case 11:
                a.displayAlign = "center", a.textAlign = "end"
            }
            if (c = b.AlphaLevel) a.opacity = parseFloat(c)
        }

        function zu(a) {
            a = parseInt(a.replace("&H", ""), 16);
            return 0 <= a ? "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255 ^ 255) / 255 + ")" : null
        }

        function xu(a) {
            a = Au.exec(a);
            return 3600 * (a[1] ? parseInt(a[1].replace(":", ""), 10) : 0) + 60 * parseInt(a[2], 10) + parseFloat(a[3])
        }
        L("shaka.text.SsaTextParser", tu);
        tu.prototype.parseMedia = tu.prototype.parseMedia;
        tu.prototype.parseInit = tu.prototype.parseInit;
        var uu = /^\s*\[([^\]]+)\]\r?\n([\s\S]*)/,
            vu = /^\s*([^:]+):\s*(.*)/,
            wu = /\s*,\s*/,
            Au = /^(\d+:)?(\d{1,2}):(\d{1,2}(?:[.]\d{1,3})?)?$/;
        Ye["text/x-ssa"] = function () {
            return new tu
        };

        function Bu() {}
        var Cu;

        function Du() {
            Cu ? console.debug("EmeEncryptionSchemePolyfill: Already installed.") : navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration ? (Cu = navigator.requestMediaKeySystemAccess, console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.requestMediaKeySystemAccess = Eu) : console.debug("EmeEncryptionSchemePolyfill: EME not found")
        }

        function Eu(a, b) {
            var c = this,
                d;
            return K(function (e) {
                if (1 == e.g) return console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess'), v(e, Cu.call(c, a, b), 2);
                d = e.h;
                if (Fu(d)) return console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.requestMediaKeySystemAccess = Cu, e["return"](d);
                console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
                navigator.requestMediaKeySystemAccess = Gu;
                return e["return"](Gu.call(c,
                    a, b))
            })
        }

        function Gu(a, b) {
            var c = this,
                d, e, f, g, h, k, l, m, n, p;
            return K(function (r) {
                if (1 == r.g) {
                    console.assert(c == navigator, 'bad "this" for requestMediaKeySystemAccess');
                    d = Hu(a);
                    e = [];
                    f = t(b);
                    for (g = f.next(); !g.done; g = f.next()) h = g.value, k = Iu(h.videoCapabilities, d), l = Iu(h.audioCapabilities, d), h.videoCapabilities && h.videoCapabilities.length && !k.length || h.audioCapabilities && h.audioCapabilities.length && !l.length || (m = Object.assign({}, h), m.videoCapabilities = k, m.audioCapabilities = l, e.push(m));
                    if (!e.length) throw n = Error("Unsupported keySystem or supportedConfigurations."),
                        n.name = "NotSupportedError", n.code = DOMException.NOT_SUPPORTED_ERR, n;
                    return v(r, Cu.call(c, a, e), 2)
                }
                p = r.h;
                return r["return"](new Ju(p, d))
            })
        }

        function Iu(a, b) {
            return a ? a.filter(function (c) {
                return !c.encryptionScheme || c.encryptionScheme == b
            }) : a
        }
        L("EmeEncryptionSchemePolyfill", Bu);
        Bu.install = Du;

        function Ku() {}
        var Lu;

        function Mu() {
            Lu ? console.debug("McEncryptionSchemePolyfill: Already installed.") : navigator.mediaCapabilities ? (Lu = navigator.mediaCapabilities.decodingInfo, console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."), navigator.mediaCapabilities.decodingInfo = Nu) : console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found")
        }

        function Nu(a) {
            var b = this,
                c, d;
            return K(function (e) {
                if (1 == e.g) return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), v(e, Lu.call(b, a), 2);
                c = e.h;
                if (!a.keySystemConfiguration) return e["return"](c);
                if ((d = c.keySystemAccess) && Fu(d)) return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."), navigator.mediaCapabilities.decodingInfo = Lu, e["return"](c);
                console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
                navigator.mediaCapabilities.decodingInfo = Ou;
                return e["return"](Ou.call(b, a))
            })
        }

        function Ou(a) {
            var b = this,
                c, d, e, f, g, h, k, l, m;
            return K(function (n) {
                switch (n.g) {
                case 1:
                    return console.assert(b == navigator.mediaCapabilities, 'bad "this" for decodingInfo'), c = null, a.keySystemConfiguration && (d = a.keySystemConfiguration, e = d.keySystem, f = d.audio && d.audio.encryptionScheme, g = d.video && d.video.encryptionScheme, c = Hu(e), h = {
                        powerEfficient: !1,
                        smooth: !1,
                        supported: !1,
                        keySystemAccess: null,
                        configuration: a
                    }, f && f != c || g && g != c) ? n["return"](h) : v(n, Lu.call(b, a), 2);
                case 2:
                    k = n.h;
                    if (k.keySystemAccess) {
                        k.keySystemAccess =
                            new Ju(k.keySystemAccess, c);
                        n.v(3);
                        break
                    }
                    if (!a.keySystemConfiguration) {
                        n.v(3);
                        break
                    }
                    var p = a.keySystemConfiguration,
                        r = [],
                        u = [];
                    p.audio && r.push({
                        robustness: p.audio.robustness || "",
                        contentType: a.audio.contentType
                    });
                    p.video && u.push({
                        robustness: p.video.robustness || "",
                        contentType: a.video.contentType
                    });
                    p = {
                        initDataTypes: p.initDataType ? [p.initDataType] : [],
                        distinctiveIdentifier: p.distinctiveIdentifier,
                        persistentState: p.persistentState,
                        sessionTypes: p.sessionTypes
                    };
                    r.length && (p.audioCapabilities = r);
                    u.length && (p.videoCapabilities =
                        u);
                    l = p;
                    m = k;
                    return v(n, navigator.requestMediaKeySystemAccess(a.keySystemConfiguration.keySystem, [l]), 5);
                case 5:
                    m.keySystemAccess = n.h;
                case 3:
                    return n["return"](k)
                }
            })
        }
        L("McEncryptionSchemePolyfill", Ku);
        Ku.install = Mu;

        function Ju(a, b) {
            this.h = a;
            this.g = b;
            this.keySystem = a.keySystem
        }
        Ju.prototype.getConfiguration = function () {
            var a = this.h.getConfiguration();
            if (a.videoCapabilities)
                for (var b = t(a.videoCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.g;
            if (a.audioCapabilities)
                for (b = t(a.audioCapabilities), c = b.next(); !c.done; c = b.next()) c.value.encryptionScheme = this.g;
            return a
        };
        Ju.prototype.createMediaKeys = function () {
            return this.h.createMediaKeys()
        };

        function Hu(a) {
            if (a.startsWith("com.widevine") || a.startsWith("com.microsoft") || a.startsWith("com.adobe") || a.startsWith("org.w3")) return "cenc";
            if (a.startsWith("com.apple")) return "cbcs-1-9";
            console.warn("EmeEncryptionSchemePolyfill: Unknown key system:", a, "Please contribute!");
            return null
        }

        function Fu(a) {
            a = a.getConfiguration();
            var b = a.audioCapabilities && a.audioCapabilities[0];
            return (a = a.videoCapabilities && a.videoCapabilities[0] || b) && void 0 !== a.encryptionScheme ? !0 : !1
        }

        function Pu() {}

        function ys() {
            Du();
            Mu()
        }
        L("EncryptionSchemePolyfills", Pu);
        Pu.install = ys;
        "undefined" !== typeof module && module.exports && (module.exports = Pu);
    }).call(exportTo, innerGlobal, innerGlobal, undefined);
    if (typeof exports != "undefined")
        for (var k in exportTo.shaka) exports[k] = exportTo.shaka[k];
    else if (typeof define == "function" && define.amd) define(function () {
        return exportTo.shaka
    });
    else innerGlobal.shaka = exportTo.shaka
})();