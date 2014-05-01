;(function(){
var g, aa = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
function da(a) {
  return "function" == m(a);
}
function ea(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ia(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function ja(a, b, c) {
  ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
  return ja.apply(null, arguments);
}
function ka(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Xc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.gc = function(a, c, f) {
    var h = Array.prototype.slice.call(arguments, 2);
    b.prototype[c].apply(a, h);
  };
}
;function la(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
}
;function ma(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ma);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
ka(ma, Error);
ma.prototype.name = "CustomError";
var na = Array.prototype, oa = na.some ? function(a, b, c) {
  return na.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ba(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
function qa(a, b) {
  a.sort(b || ra);
}
function sa(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || ra;
  qa(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function ra(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function ta(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ua(a, b) {
  null != a && this.append.apply(this, arguments);
}
ua.prototype.Ba = "";
ua.prototype.append = function(a, b, c) {
  this.Ba += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ba += arguments[d];
    }
  }
  return this;
};
ua.prototype.toString = function() {
  return this.Ba;
};
var va, wa = null;
function xa() {
  return new p(null, 5, [ya, !0, za, !0, Ba, !1, Ca, !1, Da, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function Ea(a) {
  return null == a;
}
function s(a) {
  return r(a) ? !1 : !0;
}
function t(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : v ? !1 : null;
}
function Fa(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = Fa(b), c = r(r(c) ? c.Na : c) ? c.Ma : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ga(a) {
  var b = a.Ma;
  return r(b) ? b : "" + y(a);
}
function Ha(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ja = function() {
  function a(a, b) {
    return Ia.b ? Ia.b(function(a, b) {
      a.push(b);
      return a;
    }, [], b) : Ia.call(null, function(a, b) {
      a.push(b);
      return a;
    }, [], b);
  }
  function b(a) {
    return c.a(null, a);
  }
  var c = null, c = function(d, c) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, 0, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), Ka = {}, La = {};
function Ma(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = Ma[m(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Na(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = Na[m(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = Pa[m(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Qa = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.fa : a) {
      return a.fa(a, b, c);
    }
    var h;
    h = z[m(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = z[m(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Sa = {};
function A(a) {
  if (a ? a.M : a) {
    return a.M(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ta = {}, Ua = {}, Va = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var h;
    h = Va[m(null == a ? null : a)];
    if (!h && (h = Va._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = Va[m(null == a ? null : a)];
    if (!c && (c = Va._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Wa(a, b, c) {
  if (a ? a.Ja : a) {
    return a.Ja(a, b, c);
  }
  var d;
  d = Wa[m(null == a ? null : a)];
  if (!d && (d = Wa._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Xa = {};
function Ya(a, b) {
  if (a ? a.Db : a) {
    return a.Db(a, b);
  }
  var c;
  c = Ya[m(null == a ? null : a)];
  if (!c && (c = Ya._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Za = {};
function $a(a) {
  if (a ? a.Eb : a) {
    return a.Eb();
  }
  var b;
  b = $a[m(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function ab(a) {
  if (a ? a.Qb : a) {
    return a.Qb();
  }
  var b;
  b = ab[m(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
function bb(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = bb[m(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw w("IStack.-peek", a);
  }
  return b.call(null, a);
}
function cb(a) {
  if (a ? a.Ea : a) {
    return a.Ea(a);
  }
  var b;
  b = cb[m(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw w("IStack.-pop", a);
  }
  return b.call(null, a);
}
var db = {};
function eb(a, b, c) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b, c);
  }
  var d;
  d = eb[m(null == a ? null : a)];
  if (!d && (d = eb._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function fb(a) {
  if (a ? a.pb : a) {
    return a.pb(a);
  }
  var b;
  b = fb[m(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var gb = {};
function hb(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = hb[m(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var ib = {};
function jb(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = jb[m(null == a ? null : a)];
  if (!c && (c = jb._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var kb = {}, lb = function() {
  function a(a, b, c) {
    if (a ? a.S : a) {
      return a.S(a, b, c);
    }
    var h;
    h = lb[m(null == a ? null : a)];
    if (!h && (h = lb._, !h)) {
      throw w("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.R : a) {
      return a.R(a, b);
    }
    var c;
    c = lb[m(null == a ? null : a)];
    if (!c && (c = lb._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function mb(a, b) {
  if (a ? a.u : a) {
    return a.u(a, b);
  }
  var c;
  c = mb[m(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function nb(a) {
  if (a ? a.B : a) {
    return a.B(a);
  }
  var b;
  b = nb[m(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a);
}
var ob = {};
function pb(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = pb[m(null == a ? null : a)];
  if (!b && (b = pb._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var qb = {}, rb = {};
function C(a, b) {
  if (a ? a.Vb : a) {
    return a.Vb(0, b);
  }
  var c;
  c = C[m(null == a ? null : a)];
  if (!c && (c = C._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var sb = {};
function tb(a, b, c) {
  if (a ? a.s : a) {
    return a.s(a, b, c);
  }
  var d;
  d = tb[m(null == a ? null : a)];
  if (!d && (d = tb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function ub(a, b, c) {
  if (a ? a.Ub : a) {
    return a.Ub(0, b, c);
  }
  var d;
  d = ub[m(null == a ? null : a)];
  if (!d && (d = ub._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function vb(a, b, c) {
  if (a ? a.Tb : a) {
    return a.Tb(0, b, c);
  }
  var d;
  d = vb[m(null == a ? null : a)];
  if (!d && (d = vb._, !d)) {
    throw w("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function wb(a) {
  if (a ? a.Wa : a) {
    return a.Wa(a);
  }
  var b;
  b = wb[m(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function xb(a, b) {
  if (a ? a.Xa : a) {
    return a.Xa(a, b);
  }
  var c;
  c = xb[m(null == a ? null : a)];
  if (!c && (c = xb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function yb(a) {
  if (a ? a.Ya : a) {
    return a.Ya(a);
  }
  var b;
  b = yb[m(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function zb(a, b, c) {
  if (a ? a.La : a) {
    return a.La(a, b, c);
  }
  var d;
  d = zb[m(null == a ? null : a)];
  if (!d && (d = zb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Ab(a, b, c) {
  if (a ? a.Sb : a) {
    return a.Sb(0, b, c);
  }
  var d;
  d = Ab[m(null == a ? null : a)];
  if (!d && (d = Ab._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Bb(a) {
  if (a ? a.Ob : a) {
    return a.Ob();
  }
  var b;
  b = Bb[m(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Cb(a) {
  if (a ? a.nb : a) {
    return a.nb(a);
  }
  var b;
  b = Cb[m(null == a ? null : a)];
  if (!b && (b = Cb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Db(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = Db[m(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Eb(a) {
  if (a ? a.mb : a) {
    return a.mb(a);
  }
  var b;
  b = Eb[m(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Fb(a) {
  this.Ic = a;
  this.n = 0;
  this.g = 1073741824;
}
Fb.prototype.Vb = function(a, b) {
  return this.Ic.append(b);
};
function Gb(a) {
  var b = new ua;
  a.s(null, new Fb(b), xa());
  return "" + y(b);
}
function Hb(a, b) {
  if (r(D.a ? D.a(a, b) : D.call(null, a, b))) {
    return 0;
  }
  var c = s(a.N);
  if (r(c ? b.N : c)) {
    return-1;
  }
  if (r(a.N)) {
    if (s(b.N)) {
      return 1;
    }
    c = Ib.a ? Ib.a(a.N, b.N) : Ib.call(null, a.N, b.N);
    return 0 === c ? Ib.a ? Ib.a(a.name, b.name) : Ib.call(null, a.name, b.name) : c;
  }
  return Jb ? Ib.a ? Ib.a(a.name, b.name) : Ib.call(null, a.name, b.name) : null;
}
function E(a, b, c, d, e) {
  this.N = a;
  this.name = b;
  this.ua = c;
  this.wa = d;
  this.da = e;
  this.g = 2154168321;
  this.n = 4096;
}
g = E.prototype;
g.s = function(a, b) {
  return C(b, this.ua);
};
g.B = function() {
  var a = this.wa;
  return null != a ? a : this.wa = a = Kb.a ? Kb.a(F.d ? F.d(this.N) : F.call(null, this.N), F.d ? F.d(this.name) : F.call(null, this.name)) : Kb.call(null, F.d ? F.d(this.N) : F.call(null, this.N), F.d ? F.d(this.name) : F.call(null, this.name));
};
g.D = function(a, b) {
  return new E(this.N, this.name, this.ua, this.wa, b);
};
g.C = function() {
  return this.da;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Va.b(c, this, null);
      case 3:
        return Va.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ha(b)));
};
g.d = function(a) {
  return Va.b(a, this, null);
};
g.a = function(a, b) {
  return Va.b(a, this, b);
};
g.u = function(a, b) {
  return b instanceof E ? this.ua === b.ua : !1;
};
g.toString = function() {
  return this.ua;
};
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.Sc)) {
    return a.F(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Lb(a, 0);
  }
  if (t(ob, a)) {
    return pb(a);
  }
  if (v) {
    throw Error([y(a), y("is not ISeqable")].join(""));
  }
  return null;
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Ka)) {
    return a.M(null);
  }
  a = H(a);
  return null == a ? null : A(a);
}
function J(a) {
  return null != a ? a && (a.g & 64 || a.Ka) ? a.T(null) : (a = H(a)) ? B(a) : M : M;
}
function N(a) {
  return null == a ? null : a && (a.g & 128 || a.Rb) ? a.$(null) : H(J(a));
}
var D = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || mb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (N(e)) {
            a = d, d = I(e), e = N(e);
          } else {
            return b.a(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
La["null"] = !0;
Ma["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
mb.number = function(a, b) {
  return a === b;
};
gb["function"] = !0;
hb["function"] = function() {
  return null;
};
Ka["function"] = !0;
nb._ = function(a) {
  return a[fa] || (a[fa] = ++ga);
};
var Mb = function() {
  function a(a, b, c, d) {
    for (var l = Ma(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Ma(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Ma(a);
    if (0 === c) {
      return b.o ? b.o() : b.call(null);
    }
    for (var d = z.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.j = a;
  return d;
}(), Nb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.o ? b.o() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.j = a;
  return d;
}();
function Ob(a) {
  return a ? a.g & 2 || a.kc ? !0 : a.g ? !1 : t(La, a) : t(La, a);
}
function Pb(a) {
  return a ? a.g & 16 || a.Pb ? !0 : a.g ? !1 : t(Qa, a) : t(Qa, a);
}
function Lb(a, b) {
  this.c = a;
  this.m = b;
  this.g = 166199550;
  this.n = 8192;
}
g = Lb.prototype;
g.B = function() {
  return Qb.d ? Qb.d(this) : Qb.call(null, this);
};
g.$ = function() {
  return this.m + 1 < this.c.length ? new Lb(this.c, this.m + 1) : null;
};
g.H = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return Nb.j(this.c, b, this.c[this.m], this.m + 1);
};
g.S = function(a, b, c) {
  return Nb.j(this.c, b, c, this.m);
};
g.F = function() {
  return this;
};
g.K = function() {
  return this.c.length - this.m;
};
g.M = function() {
  return this.c[this.m];
};
g.T = function() {
  return this.m + 1 < this.c.length ? new Lb(this.c, this.m + 1) : M;
};
g.u = function(a, b) {
  return Rb.a ? Rb.a(this, b) : Rb.call(null, this, b);
};
g.J = function(a, b) {
  var c = b + this.m;
  return c < this.c.length ? this.c[c] : null;
};
g.fa = function(a, b, c) {
  a = b + this.m;
  return a < this.c.length ? this.c[a] : c;
};
g.I = function() {
  return M;
};
var Sb = function() {
  function a(a, b) {
    return b < a.length ? new Lb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), O = function() {
  function a(a, b) {
    return Sb.a(a, b);
  }
  function b(a) {
    return Sb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function Tb(a) {
  for (;;) {
    var b = N(a);
    if (null != b) {
      a = b;
    } else {
      return I(a);
    }
  }
}
mb._ = function(a, b) {
  return a === b;
};
var Ub = function() {
  function a(a, b) {
    return null != a ? Pa(a, b) : Pa(M, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = I(e), e = N(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.kc)) {
      a = a.K(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (t(La, a)) {
            a = Ma(a);
          } else {
            if (v) {
              a: {
                a = H(a);
                for (var b = 0;;) {
                  if (Ob(a)) {
                    a = b + Ma(a);
                    break a;
                  }
                  a = N(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Vb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return H(a) ? I(a) : c;
      }
      if (Pb(a)) {
        return z.b(a, b, c);
      }
      if (H(a)) {
        a = N(a), b -= 1;
      } else {
        return v ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (H(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (Pb(a)) {
        return z.a(a, b);
      }
      if (H(a)) {
        var c = N(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (v) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.g & 16 || a.Pb)) {
      return a.fa(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (t(Qa, a)) {
      return z.a(a, b);
    }
    if (a ? a.g & 64 || a.Ka || (a.g ? 0 : t(Sa, a)) : t(Sa, a)) {
      return Vb.b(a, b, c);
    }
    if (v) {
      throw Error([y("nth not supported on this type "), y(Ga(Fa(a)))].join(""));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.g & 16 || a.Pb)) {
      return a.J(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (t(Qa, a)) {
      return z.a(a, b);
    }
    if (a ? a.g & 64 || a.Ka || (a.g ? 0 : t(Sa, a)) : t(Sa, a)) {
      return Vb.a(a, b);
    }
    if (v) {
      throw Error([y("nth not supported on this type "), y(Ga(Fa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.nc) ? a.Q(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : t(Ua, a) ? Va.b(a, b, c) : v ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.nc) ? a.P(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : t(Ua, a) ? Va.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), T = function() {
  function a(a, b, c) {
    return null != a ? Wa(a, b, c) : Wb.a ? Wb.a([b], [c]) : Wb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), r(l)) {
          d = I(l), e = I(N(l)), l = N(N(l));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}(), Xb = function() {
  function a(a, b) {
    return null == a ? null : Ya(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (r(e)) {
          d = I(e), e = N(e);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.d = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Yb(a) {
  var b = da(a);
  return b ? b : a ? r(r(null) ? null : a.jc) ? !0 : a.Xb ? !1 : t(Ka, a) : t(Ka, a);
}
var $b = function Zb(b, c) {
  return Yb(b) && !(b ? b.g & 262144 || b.Vc || (b.g ? 0 : t(ib, b)) : t(ib, b)) ? Zb(function() {
    "undefined" === typeof va && (va = function(b, c, f, h) {
      this.i = b;
      this.Qa = c;
      this.Lc = f;
      this.Gc = h;
      this.n = 0;
      this.g = 393217;
    }, va.Na = !0, va.Ma = "cljs.core/t9618", va.Za = function(b, c) {
      return C(c, "cljs.core/t9618");
    }, va.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return U.a ? U.a(b.Qa, d) : U.call(null, b.Qa, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = I(b);
        b = J(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), va.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(Ha(c)));
    }, va.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = O(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return U.a ? U.a(self__.Qa, b) : U.call(null, self__.Qa, b);
      }
      b.l = 0;
      b.h = function(b) {
        b = H(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), va.prototype.jc = !0, va.prototype.C = function() {
      return this.Gc;
    }, va.prototype.D = function(b, c) {
      return new va(this.i, this.Qa, this.Lc, c);
    });
    return new va(c, b, Zb, null);
  }(), c) : null == b ? null : jb(b, c);
};
function ac(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.pc || (a.g ? 0 : t(gb, a)) : t(gb, a) : b) ? hb(a) : null;
}
var bc = {}, cc = 0;
function F(a) {
  if (a && (a.g & 4194304 || a.Pc)) {
    a = a.B(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < cc && (bc = {}, cc = 0);
            var b = bc[a];
            "number" !== typeof b && (b = la(a), bc[a] = b, cc += 1);
            a = b;
          } else {
            a = null == a ? 0 : v ? nb(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function dc(a) {
  return a ? a.g & 16777216 || a.Tc ? !0 : a.g ? !1 : t(qb, a) : t(qb, a);
}
function ec(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.Rc ? !0 : a.g ? !1 : t(Xa, a) : t(Xa, a);
}
function fc(a) {
  return a ? a.g & 16384 || a.Uc ? !0 : a.g ? !1 : t(db, a) : t(db, a);
}
function gc(a) {
  return a ? a.n & 512 || a.Mc ? !0 : !1 : !1;
}
function hc(a) {
  var b = [];
  ta(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function ic(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function jc(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Ka ? !0 : a.g ? !1 : t(Sa, a) : t(Sa, a);
}
function kc(a) {
  return r(a) ? !0 : !1;
}
function Ib(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Fa(a) === Fa(b)) {
    return a && (a.n & 2048 || a.Ua) ? a.Va(null, b) : ra(a, b);
  }
  if (v) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var lc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Ib(R.a(a, h), R.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Q(a), h = Q(b);
    return f < h ? -1 : f > h ? 1 : v ? c.j(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c;
}();
function mc(a) {
  return D.a(a, Ib) ? Ib : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : r(d) ? -1 : r(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var oc = function() {
  function a(a, b) {
    if (H(b)) {
      var c = nc.d ? nc.d(b) : nc.call(null, b);
      sa(c, mc(a));
      return H(c);
    }
    return M;
  }
  function b(a) {
    return c.a(Ib, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), pc = function() {
  function a(a, b, c) {
    return oc.a(function(c, f) {
      return mc(b).call(null, a.d ? a.d(c) : a.call(null, c), a.d ? a.d(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.b(a, Ib, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), qc = function() {
  function a(a, b, c) {
    for (c = H(c);;) {
      if (c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = N(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? Ia.b ? Ia.b(a, I(c), N(c)) : Ia.call(null, a, I(c), N(c)) : a.o ? a.o() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Ia = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.rc) ? c.S(null, a, b) : c instanceof Array ? Nb.b(c, a, b) : "string" === typeof c ? Nb.b(c, a, b) : t(kb, c) ? lb.b(c, a, b) : v ? qc.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.rc) ? b.R(null, a) : b instanceof Array ? Nb.a(b, a) : "string" === typeof b ? Nb.a(b, a) : t(kb, b) ? lb.a(b, a) : v ? qc.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function rc(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
}
var sc = function() {
  function a(a) {
    return a * c.o();
  }
  function b() {
    return Math.random.o ? Math.random.o() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.d = a;
  return c;
}();
function tc(a) {
  return rc(sc.d(a));
}
function uc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function vc(a) {
  var b = 1;
  for (a = H(a);;) {
    if (a && 0 < b) {
      b -= 1, a = N(a);
    } else {
      return a;
    }
  }
}
var y = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ua(b.d(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.d(I(l))), l = N(l);
        } else {
          return e.toString();
        }
      }
    }
    a.l = 1;
    a.h = function(a) {
      var b = I(a);
      a = J(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.o = function() {
    return "";
  };
  b.d = a;
  b.e = c.e;
  return b;
}(), xc = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c);
  };
  a.b = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Rb(a, b) {
  return kc(dc(b) ? function() {
    for (var c = H(a), d = H(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (D.a(I(c), I(d))) {
        c = N(c), d = N(d);
      } else {
        return v ? !1 : null;
      }
    }
  }() : null);
}
function Kb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Qb(a) {
  if (H(a)) {
    var b = F(I(a));
    for (a = N(a);;) {
      if (null == a) {
        return b;
      }
      b = Kb(b, F(I(a)));
      a = N(a);
    }
  } else {
    return 0;
  }
}
function yc(a) {
  var b = 0;
  for (a = H(a);;) {
    if (a) {
      var c = I(a), b = (b + (F(zc.d ? zc.d(c) : zc.call(null, c)) ^ F(Ac.d ? Ac.d(c) : Ac.call(null, c)))) % 4503599627370496;
      a = N(a);
    } else {
      return b;
    }
  }
}
function Bc(a, b, c, d, e) {
  this.i = a;
  this.Ha = b;
  this.qa = c;
  this.count = d;
  this.k = e;
  this.g = 65937646;
  this.n = 8192;
}
g = Bc.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.$ = function() {
  return 1 === this.count ? null : this.qa;
};
g.H = function(a, b) {
  return new Bc(this.i, b, this, this.count + 1, null);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  return this;
};
g.K = function() {
  return this.count;
};
g.Da = function() {
  return this.Ha;
};
g.Ea = function() {
  return B(this);
};
g.M = function() {
  return this.Ha;
};
g.T = function() {
  return 1 === this.count ? M : this.qa;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new Bc(b, this.Ha, this.qa, this.count, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return M;
};
function Cc(a) {
  this.i = a;
  this.g = 65937614;
  this.n = 8192;
}
g = Cc.prototype;
g.B = function() {
  return 0;
};
g.$ = function() {
  return null;
};
g.H = function(a, b) {
  return new Bc(this.i, b, null, 1, null);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  return null;
};
g.K = function() {
  return 0;
};
g.Da = function() {
  return null;
};
g.Ea = function() {
  throw Error("Can't pop empty list");
};
g.M = function() {
  return null;
};
g.T = function() {
  return M;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new Cc(b);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return this;
};
var M = new Cc(null), Dc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Lb && 0 === a.m) {
      b = a.c;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.M(null)), a = a.$(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = M;;) {
      if (0 < a) {
        var f = a - 1, e = e.H(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ec(a, b, c, d) {
  this.i = a;
  this.Ha = b;
  this.qa = c;
  this.k = d;
  this.g = 65929452;
  this.n = 8192;
}
g = Ec.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.$ = function() {
  return null == this.qa ? null : H(this.qa);
};
g.H = function(a, b) {
  return new Ec(null, b, this, this.k);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  return this;
};
g.M = function() {
  return this.Ha;
};
g.T = function() {
  return null == this.qa ? M : this.qa;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new Ec(b, this.Ha, this.qa, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return $b(M, this.i);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Ka)) ? new Ec(null, a, b, null) : new Ec(null, a, H(b), null);
}
function V(a, b, c, d) {
  this.N = a;
  this.name = b;
  this.sa = c;
  this.wa = d;
  this.g = 2153775105;
  this.n = 4096;
}
g = V.prototype;
g.s = function(a, b) {
  return C(b, [y(":"), y(this.sa)].join(""));
};
g.B = function() {
  null == this.wa && (this.wa = Kb(F(this.N), F(this.name)) + 2654435769);
  return this.wa;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return S.a(c, this);
      case 3:
        return S.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ha(b)));
};
g.d = function(a) {
  return S.a(a, this);
};
g.a = function(a, b) {
  return S.b(a, this, b);
};
g.u = function(a, b) {
  return b instanceof V ? this.sa === b.sa : !1;
};
g.toString = function() {
  return[y(":"), y(this.sa)].join("");
};
function Fc(a, b) {
  return a === b ? !0 : a instanceof V && b instanceof V ? a.sa === b.sa : !1;
}
var Hc = function() {
  function a(a, b) {
    return new V(a, b, [y(r(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof V) {
      return a;
    }
    if (a instanceof E) {
      var b;
      if (a && (a.n & 4096 || a.qc)) {
        b = a.N;
      } else {
        throw Error([y("Doesn't support namespace: "), y(a)].join(""));
      }
      return new V(b, Gc.d ? Gc.d(a) : Gc.call(null, a), a.ua, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new V(b[0], b[1], a, null) : new V(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function W(a, b, c, d) {
  this.i = a;
  this.ra = b;
  this.t = c;
  this.k = d;
  this.n = 0;
  this.g = 32374988;
}
g = W.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.$ = function() {
  pb(this);
  return null == this.t ? null : N(this.t);
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
function Ic(a) {
  null != a.ra && (a.t = a.ra.o ? a.ra.o() : a.ra.call(null), a.ra = null);
  return a.t;
}
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  Ic(this);
  if (null == this.t) {
    return null;
  }
  for (var a = this.t;;) {
    if (a instanceof W) {
      a = Ic(a);
    } else {
      return this.t = a, H(this.t);
    }
  }
};
g.M = function() {
  pb(this);
  return null == this.t ? null : I(this.t);
};
g.T = function() {
  pb(this);
  return null != this.t ? J(this.t) : M;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new W(b, this.ra, this.t, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return $b(M, this.i);
};
function Jc(a, b) {
  this.O = a;
  this.end = b;
  this.n = 0;
  this.g = 2;
}
Jc.prototype.K = function() {
  return this.end;
};
Jc.prototype.add = function(a) {
  this.O[this.end] = a;
  return this.end += 1;
};
Jc.prototype.la = function() {
  var a = new Kc(this.O, 0, this.end);
  this.O = null;
  return a;
};
function Kc(a, b, c) {
  this.c = a;
  this.w = b;
  this.end = c;
  this.n = 0;
  this.g = 524306;
}
g = Kc.prototype;
g.R = function(a, b) {
  return Nb.j(this.c, b, this.c[this.w], this.w + 1);
};
g.S = function(a, b, c) {
  return Nb.j(this.c, b, c, this.w);
};
g.Ob = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Kc(this.c, this.w + 1, this.end);
};
g.J = function(a, b) {
  return this.c[this.w + b];
};
g.fa = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.c[this.w + b] : c;
};
g.K = function() {
  return this.end - this.w;
};
var Lc = function() {
  function a(a, b, c) {
    return new Kc(a, b, c);
  }
  function b(a, b) {
    return new Kc(a, b, a.length);
  }
  function c(a) {
    return new Kc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Mc(a, b, c, d) {
  this.la = a;
  this.ma = b;
  this.i = c;
  this.k = d;
  this.g = 31850732;
  this.n = 1536;
}
g = Mc.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.$ = function() {
  if (1 < Ma(this.la)) {
    return new Mc(Bb(this.la), this.ma, this.i, null);
  }
  var a = pb(this.ma);
  return null == a ? null : a;
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
g.F = function() {
  return this;
};
g.M = function() {
  return z.a(this.la, 0);
};
g.T = function() {
  return 1 < Ma(this.la) ? new Mc(Bb(this.la), this.ma, this.i, null) : null == this.ma ? M : this.ma;
};
g.mb = function() {
  return null == this.ma ? null : this.ma;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new Mc(this.la, this.ma, b, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return $b(M, this.i);
};
g.nb = function() {
  return this.la;
};
g.ob = function() {
  return null == this.ma ? M : this.ma;
};
function Nc(a, b) {
  return 0 === Ma(a) ? b : new Mc(a, b, null, null);
}
function nc(a) {
  for (var b = [];;) {
    if (H(a)) {
      b.push(I(a)), a = N(a);
    } else {
      return b;
    }
  }
}
function Oc(a, b) {
  if (Ob(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && H(c)) {
      c = N(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Qc = function Pc(b) {
  return null == b ? null : null == N(b) ? H(I(b)) : v ? P(I(b), Pc(N(b))) : null;
}, Rc = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = H(a);
      return c ? gc(c) ? Nc(Cb(c), d.a(Db(c), b)) : P(I(c), d.a(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new W(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new W(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function u(a, b) {
        return new W(null, function() {
          var c = H(a);
          return c ? gc(c) ? Nc(Cb(c), u(Db(c), b)) : P(I(c), u(J(c), b)) : r(b) ? u(I(b), N(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.h = e.h;
  d.o = c;
  d.d = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Sc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var u = null;
      4 < arguments.length && (u = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, u);
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, Qc(f)))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var q = I(a);
      a = J(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return P(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.e(c, f, h, k, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.h = d.h;
  c.d = function(a) {
    return H(a);
  };
  c.a = function(a, b) {
    return P(a, b);
  };
  c.b = b;
  c.j = a;
  c.e = d.e;
  return c;
}(), Tc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = zb(a, c, d), r(k)) {
          c = I(k), d = I(N(k)), k = N(N(k));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var h = I(a);
      a = N(a);
      var k = I(a);
      a = J(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return zb(a, d, e);
      default:
        return b.e(a, d, e, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 3;
  a.h = b.h;
  a.b = function(a, b, e) {
    return zb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function Uc(a, b, c) {
  var d = H(c);
  if (0 === b) {
    return a.o ? a.o() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = A(e), f = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(f), h = B(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(h), k = B(h);
  if (4 === b) {
    return a.j ? a.j(c, d, e, f) : a.j ? a.j(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = A(k), l = B(k);
  if (5 === b) {
    return a.v ? a.v(c, d, e, f, h) : a.v ? a.v(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = A(l), n = B(l);
  if (6 === b) {
    return a.ea ? a.ea(c, d, e, f, h, k) : a.ea ? a.ea(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = A(n), q = B(n);
  if (7 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l) : a.Ca ? a.Ca(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var n = A(q), u = B(q);
  if (8 === b) {
    return a.Bb ? a.Bb(c, d, e, f, h, k, l, n) : a.Bb ? a.Bb(c, d, e, f, h, k, l, n) : a.call(null, c, d, e, f, h, k, l, n);
  }
  var q = A(u), x = B(u);
  if (9 === b) {
    return a.Cb ? a.Cb(c, d, e, f, h, k, l, n, q) : a.Cb ? a.Cb(c, d, e, f, h, k, l, n, q) : a.call(null, c, d, e, f, h, k, l, n, q);
  }
  var u = A(x), K = B(x);
  if (10 === b) {
    return a.qb ? a.qb(c, d, e, f, h, k, l, n, q, u) : a.qb ? a.qb(c, d, e, f, h, k, l, n, q, u) : a.call(null, c, d, e, f, h, k, l, n, q, u);
  }
  var x = A(K), G = B(K);
  if (11 === b) {
    return a.rb ? a.rb(c, d, e, f, h, k, l, n, q, u, x) : a.rb ? a.rb(c, d, e, f, h, k, l, n, q, u, x) : a.call(null, c, d, e, f, h, k, l, n, q, u, x);
  }
  var K = A(G), L = B(G);
  if (12 === b) {
    return a.sb ? a.sb(c, d, e, f, h, k, l, n, q, u, x, K) : a.sb ? a.sb(c, d, e, f, h, k, l, n, q, u, x, K) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K);
  }
  var G = A(L), Y = B(L);
  if (13 === b) {
    return a.tb ? a.tb(c, d, e, f, h, k, l, n, q, u, x, K, G) : a.tb ? a.tb(c, d, e, f, h, k, l, n, q, u, x, K, G) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G);
  }
  var L = A(Y), ca = B(Y);
  if (14 === b) {
    return a.ub ? a.ub(c, d, e, f, h, k, l, n, q, u, x, K, G, L) : a.ub ? a.ub(c, d, e, f, h, k, l, n, q, u, x, K, G, L) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G, L);
  }
  var Y = A(ca), pa = B(ca);
  if (15 === b) {
    return a.vb ? a.vb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y) : a.vb ? a.vb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y);
  }
  var ca = A(pa), Aa = B(pa);
  if (16 === b) {
    return a.wb ? a.wb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca) : a.wb ? a.wb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca);
  }
  var pa = A(Aa), Ra = B(Aa);
  if (17 === b) {
    return a.xb ? a.xb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa) : a.xb ? a.xb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa);
  }
  var Aa = A(Ra), wc = B(Ra);
  if (18 === b) {
    return a.yb ? a.yb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa) : a.yb ? a.yb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa);
  }
  Ra = A(wc);
  wc = B(wc);
  if (19 === b) {
    return a.zb ? a.zb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa, Ra) : a.zb ? a.zb(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa, Ra) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa, Ra);
  }
  var Rd = A(wc);
  B(wc);
  if (20 === b) {
    return a.Ab ? a.Ab(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa, Ra, Rd) : a.Ab ? a.Ab(c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa, Ra, Rd) : a.call(null, c, d, e, f, h, k, l, n, q, u, x, K, G, L, Y, ca, pa, Aa, Ra, Rd);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var U = function() {
  function a(a, b, c, d, e) {
    b = Sc.j(b, c, d, e);
    c = a.l;
    return a.h ? (d = Oc(b, c + 1), d <= c ? Uc(a, d, b) : a.h(b)) : a.apply(a, nc(b));
  }
  function b(a, b, c, d) {
    b = Sc.b(b, c, d);
    c = a.l;
    return a.h ? (d = Oc(b, c + 1), d <= c ? Uc(a, d, b) : a.h(b)) : a.apply(a, nc(b));
  }
  function c(a, b, c) {
    b = Sc.a(b, c);
    c = a.l;
    if (a.h) {
      var d = Oc(b, c + 1);
      return d <= c ? Uc(a, d, b) : a.h(b);
    }
    return a.apply(a, nc(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = Oc(b, c + 1);
      return d <= c ? Uc(a, d, b) : a.h(b);
    }
    return a.apply(a, nc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, K) {
      var G = null;
      5 < arguments.length && (G = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, G);
    }
    function b(a, c, d, e, f, h) {
      c = P(c, P(d, P(e, P(f, Qc(h)))));
      d = a.l;
      return a.h ? (e = Oc(c, d + 1), e <= d ? Uc(a, e, c) : a.h(c)) : a.apply(a, nc(c));
    }
    a.l = 5;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = N(a);
      var h = I(a);
      a = J(a);
      return b(c, d, e, f, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, q, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, q);
      default:
        return f.e(e, k, l, n, q, O(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.h = f.h;
  e.a = d;
  e.b = c;
  e.j = b;
  e.v = a;
  e.e = f.e;
  return e;
}();
function Vc(a, b) {
  for (;;) {
    if (null == H(b)) {
      return!0;
    }
    if (r(a.d ? a.d(I(b)) : a.call(null, I(b)))) {
      var c = a, d = N(b);
      a = c;
      b = d;
    } else {
      return v ? !1 : null;
    }
  }
}
function Wc(a, b) {
  for (;;) {
    if (H(b)) {
      var c = a.d ? a.d(I(b)) : a.call(null, I(b));
      if (r(c)) {
        return c;
      }
      var c = a, d = N(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Xc(a) {
  return a;
}
function Yc(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return s(U.j(a, b, d, e));
      }
      b.l = 2;
      b.h = function(a) {
        var b = I(a);
        a = N(a);
        var d = I(a);
        a = J(a);
        return c(b, d, a);
      };
      b.e = c;
      return b;
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return s(a.o ? a.o() : a.call(null));
        case 1:
          return s(a.d ? a.d(b) : a.call(null, b));
        case 2:
          return s(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, O(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.l = 2;
    b.h = c.h;
    return b;
  }();
}
var Zc = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return q.call(this, b);
      }
      function q(e) {
        return U.v(a, b, c, d, e);
      }
      e.l = 0;
      e.h = function(a) {
        a = H(a);
        return q(a);
      };
      e.e = q;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return U.j(a, b, c, d);
      }
      d.l = 0;
      d.h = function(a) {
        a = H(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return U.b(a, b, c);
      }
      c.l = 0;
      c.h = function(a) {
        a = H(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, u) {
      var x = null;
      4 < arguments.length && (x = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return U.v(a, c, d, e, Rc.a(f, b));
        }
        b.l = 0;
        b.h = function(a) {
          a = H(a);
          return h(a);
        };
        b.e = h;
        return b;
      }();
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.d = function(a) {
    return a;
  };
  d.a = c;
  d.b = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), $c = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var n = H(b), q = H(c), u = H(e);
      return n && q && u ? P(a.b ? a.b(I(n), I(q), I(u)) : a.call(null, I(n), I(q), I(u)), d.j(a, J(n), J(q), J(u))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = H(b), n = H(c);
      return e && n ? P(a.a ? a.a(I(e), I(n)) : a.call(null, I(e), I(n)), d.b(a, J(e), J(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new W(null, function() {
      var c = H(b);
      if (c) {
        if (gc(c)) {
          for (var e = Cb(c), n = Q(e), q = new Jc(Array(n), 0), u = 0;;) {
            if (u < n) {
              var x = a.d ? a.d(z.a(e, u)) : a.call(null, z.a(e, u));
              q.add(x);
              u += 1;
            } else {
              break;
            }
          }
          return Nc(q.la(), d.a(a, Db(c)));
        }
        return P(a.d ? a.d(I(c)) : a.call(null, I(c)), d.a(a, J(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, u) {
      var x = null;
      4 < arguments.length && (x = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, e, f, h) {
      var x = function G(a) {
        return new W(null, function() {
          var b = d.a(H, a);
          return Vc(Xc, b) ? P(d.a(I, b), G(d.a(J, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return U.a(a, b);
        };
      }(x), x(Ub.e(h, f, O([e, c], 0))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), bd = function ad(b, c) {
  return new W(null, function() {
    if (0 < b) {
      var d = H(c);
      return d ? P(I(d), ad(b - 1, J(d))) : null;
    }
    return null;
  }, null, null);
};
function cd(a) {
  return new W(null, function(b) {
    return function() {
      return b(1, a);
    };
  }(function(a, c) {
    for (;;) {
      var d = H(c);
      if (0 < a && d) {
        var e = a - 1, d = J(d);
        a = e;
        c = d;
      } else {
        return d;
      }
    }
  }), null, null);
}
var dd = function() {
  function a(a, b) {
    return bd(a, c.d(b));
  }
  function b(a) {
    return new W(null, function() {
      return P(a, c.d(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), ed = function() {
  function a(a, c) {
    return new W(null, function() {
      var f = H(a), h = H(c);
      return f && h ? P(I(f), P(I(h), b.a(J(f), J(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new W(null, function() {
        var c = $c.a(H, Ub.e(e, d, O([a], 0)));
        return Vc(Xc, c) ? Rc.a($c.a(I, c), U.a(b, $c.a(J, c))) : null;
      }, null, null);
    }
    a.l = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function fd(a) {
  return function c(a, e) {
    return new W(null, function() {
      var f = H(a);
      return f ? P(I(f), c(J(f), e)) : H(e) ? c(I(e), J(e)) : null;
    }, null, null);
  }(null, a);
}
var gd = function() {
  function a(a, b) {
    return fd($c.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return fd(U.j($c, a, c, d));
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}(), id = function hd(b, c) {
  return new W(null, function() {
    var d = H(c);
    if (d) {
      if (gc(d)) {
        for (var e = Cb(d), f = Q(e), h = new Jc(Array(f), 0), k = 0;;) {
          if (k < f) {
            if (r(b.d ? b.d(z.a(e, k)) : b.call(null, z.a(e, k)))) {
              var l = z.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Nc(h.la(), hd(b, Db(d)));
      }
      e = I(d);
      d = J(d);
      return r(b.d ? b.d(e) : b.call(null, e)) ? P(e, hd(b, d)) : hd(b, d);
    }
    return null;
  }, null, null);
};
function jd(a, b) {
  return id(Yc(a), b);
}
function kd(a) {
  return function c(a) {
    return new W(null, function() {
      return P(a, r(dc.d ? dc.d(a) : dc.call(null, a)) ? gd.a(c, H.d ? H.d(a) : H.call(null, a)) : null);
    }, null, null);
  }(a);
}
function ld(a) {
  return id(function(a) {
    return!dc(a);
  }, J(kd(a)));
}
function md(a, b) {
  var c;
  null != a ? a && (a.n & 4 || a.Oc) ? (c = Ia.b(xb, wb(a), b), c = yb(c)) : c = Ia.b(Pa, a, b) : c = Ia.b(Ub, M, b);
  return c;
}
var nd = function() {
  function a(a, b, c, d, f, u) {
    var x = R.b(b, 0, null);
    return(b = vc(b)) ? T.b(a, x, e.ea(S.a(a, x), b, c, d, f, u)) : T.b(a, x, c.j ? c.j(S.a(a, x), d, f, u) : c.call(null, S.a(a, x), d, f, u));
  }
  function b(a, b, c, d, f) {
    var u = R.b(b, 0, null);
    return(b = vc(b)) ? T.b(a, u, e.v(S.a(a, u), b, c, d, f)) : T.b(a, u, c.b ? c.b(S.a(a, u), d, f) : c.call(null, S.a(a, u), d, f));
  }
  function c(a, b, c, d) {
    var f = R.b(b, 0, null);
    return(b = vc(b)) ? T.b(a, f, e.j(S.a(a, f), b, c, d)) : T.b(a, f, c.a ? c.a(S.a(a, f), d) : c.call(null, S.a(a, f), d));
  }
  function d(a, b, c) {
    var d = R.b(b, 0, null);
    return(b = vc(b)) ? T.b(a, d, e.b(S.a(a, d), b, c)) : T.b(a, d, c.d ? c.d(S.a(a, d)) : c.call(null, S.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, K, G) {
      var L = null;
      6 < arguments.length && (L = O(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, h, K, L);
    }
    function b(a, c, d, f, h, k, G) {
      var L = R.b(c, 0, null);
      return(c = vc(c)) ? T.b(a, L, U.e(e, S.a(a, L), c, d, f, O([h, k, G], 0))) : T.b(a, L, U.e(d, S.a(a, L), f, h, k, O([G], 0)));
    }
    a.l = 6;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = N(a);
      var h = I(a);
      a = N(a);
      var G = I(a);
      a = J(a);
      return b(c, d, e, f, h, G, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, q, u, x) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, n);
      case 5:
        return b.call(this, e, k, l, n, q);
      case 6:
        return a.call(this, e, k, l, n, q, u);
      default:
        return f.e(e, k, l, n, q, u, O(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 6;
  e.h = f.h;
  e.b = d;
  e.j = c;
  e.v = b;
  e.ea = a;
  e.e = f.e;
  return e;
}();
function od(a, b) {
  this.q = a;
  this.c = b;
}
function pd(a) {
  return new od(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function qd(a) {
  return new od(a.q, Ha(a.c));
}
function rd(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function sd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = pd(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var ud = function td(b, c, d, e) {
  var f = qd(d), h = b.f - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? td(b, c - 5, d, e) : sd(null, c - 5, e), f.c[h] = b);
  return f;
};
function vd(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function wd(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.c[0];
    } else {
      return b.c;
    }
  }
}
function xd(a, b) {
  if (b >= rd(a)) {
    return a.p;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function yd(a, b) {
  return 0 <= b && b < a.f ? xd(a, b) : vd(b, a.f);
}
var Ad = function zd(b, c, d, e, f) {
  var h = qd(d);
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = zd(b, c - 5, d.c[k], e, f);
    h.c[k] = b;
  }
  return h;
}, Cd = function Bd(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = Bd(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = qd(d);
    d.c[e] = b;
    return d;
  }
  return 0 === e ? null : v ? (d = qd(d), d.c[e] = null, d) : null;
};
function X(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.p = e;
  this.k = f;
  this.n = 8196;
  this.g = 167668511;
}
g = X.prototype;
g.Wa = function() {
  return new Dd(this.f, this.shift, Ed.d ? Ed.d(this.root) : Ed.call(null, this.root), Fd.d ? Fd.d(this.p) : Fd.call(null, this.p));
};
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.P = function(a, b) {
  return Va.b(this, b, null);
};
g.Q = function(a, b, c) {
  return "number" === typeof b ? z.b(this, b, c) : c;
};
g.Ja = function(a, b, c) {
  if ("number" === typeof b) {
    return eb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ha(b)));
};
g.d = function(a) {
  return this.J(null, a);
};
g.a = function(a, b) {
  return this.fa(null, a, b);
};
g.H = function(a, b) {
  if (32 > this.f - rd(this)) {
    for (var c = this.p.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.p[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.i, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = pd(null), d.c[0] = this.root, e = sd(null, this.shift, new od(null, this.p)), d.c[1] = e) : d = ud(this, this.shift, this.root, new od(null, this.p));
  return new X(this.i, this.f + 1, c, d, [b], null);
};
g.Eb = function() {
  return z.a(this, 0);
};
g.Qb = function() {
  return z.a(this, 1);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return Mb.a(this, b);
};
g.S = function(a, b, c) {
  return Mb.b(this, b, c);
};
g.F = function() {
  return 0 === this.f ? null : 32 >= this.f ? new Lb(this.p, 0) : v ? Gd.j ? Gd.j(this, wd(this), 0, 0) : Gd.call(null, this, wd(this), 0, 0) : null;
};
g.K = function() {
  return this.f;
};
g.Da = function() {
  return 0 < this.f ? z.a(this, this.f - 1) : null;
};
g.Ea = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return jb(Hd, this.i);
  }
  if (1 < this.f - rd(this)) {
    return new X(this.i, this.f - 1, this.shift, this.root, this.p.slice(0, -1), null);
  }
  if (v) {
    var a = xd(this, this.f - 2), b = Cd(this, this.shift, this.root), b = null == b ? Z : b, c = this.f - 1;
    return 5 < this.shift && null == b.c[1] ? new X(this.i, c, this.shift - 5, b.c[0], a, null) : new X(this.i, c, this.shift, b, a, null);
  }
  return null;
};
g.Fb = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return rd(this) <= b ? (a = Ha(this.p), a[b & 31] = c, new X(this.i, this.f, this.shift, this.root, a, null)) : new X(this.i, this.f, this.shift, Ad(this, this.shift, this.root, b, c), this.p, null);
  }
  if (b === this.f) {
    return Pa(this, c);
  }
  if (v) {
    throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.f), y("]")].join(""));
  }
  return null;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new X(b, this.f, this.shift, this.root, this.p, this.k);
};
g.C = function() {
  return this.i;
};
g.J = function(a, b) {
  return yd(this, b)[b & 31];
};
g.fa = function(a, b, c) {
  return 0 <= b && b < this.f ? xd(this, b)[b & 31] : c;
};
g.I = function() {
  return $b(Hd, this.i);
};
var Z = new od(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Hd = new X(null, 0, 5, Z, [], 0);
function Id(a) {
  return yb(Ia.b(xb, wb(Hd), a));
}
function Jd(a, b, c, d, e, f) {
  this.A = a;
  this.ba = b;
  this.m = c;
  this.w = d;
  this.i = e;
  this.k = f;
  this.g = 32243948;
  this.n = 1536;
}
g = Jd.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.$ = function() {
  if (this.w + 1 < this.ba.length) {
    var a = Gd.j ? Gd.j(this.A, this.ba, this.m, this.w + 1) : Gd.call(null, this.A, this.ba, this.m, this.w + 1);
    return null == a ? null : a;
  }
  return Eb(this);
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return Mb.a(Kd.b ? Kd.b(this.A, this.m + this.w, Q(this.A)) : Kd.call(null, this.A, this.m + this.w, Q(this.A)), b);
};
g.S = function(a, b, c) {
  return Mb.b(Kd.b ? Kd.b(this.A, this.m + this.w, Q(this.A)) : Kd.call(null, this.A, this.m + this.w, Q(this.A)), b, c);
};
g.F = function() {
  return this;
};
g.M = function() {
  return this.ba[this.w];
};
g.T = function() {
  if (this.w + 1 < this.ba.length) {
    var a = Gd.j ? Gd.j(this.A, this.ba, this.m, this.w + 1) : Gd.call(null, this.A, this.ba, this.m, this.w + 1);
    return null == a ? M : a;
  }
  return Db(this);
};
g.mb = function() {
  var a = this.m + this.ba.length;
  return a < Ma(this.A) ? Gd.j ? Gd.j(this.A, xd(this.A, a), a, 0) : Gd.call(null, this.A, xd(this.A, a), a, 0) : null;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return Gd.v ? Gd.v(this.A, this.ba, this.m, this.w, b) : Gd.call(null, this.A, this.ba, this.m, this.w, b);
};
g.I = function() {
  return $b(Hd, this.i);
};
g.nb = function() {
  return Lc.a(this.ba, this.w);
};
g.ob = function() {
  var a = this.m + this.ba.length;
  return a < Ma(this.A) ? Gd.j ? Gd.j(this.A, xd(this.A, a), a, 0) : Gd.call(null, this.A, xd(this.A, a), a, 0) : M;
};
var Gd = function() {
  function a(a, b, c, d, l) {
    return new Jd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Jd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Jd(a, yd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.j = b;
  d.v = a;
  return d;
}();
function Ld(a, b, c, d, e) {
  this.i = a;
  this.Y = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.g = 166617887;
  this.n = 8192;
}
g = Ld.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.P = function(a, b) {
  return Va.b(this, b, null);
};
g.Q = function(a, b, c) {
  return "number" === typeof b ? z.b(this, b, c) : c;
};
g.Ja = function(a, b, c) {
  if ("number" === typeof b) {
    return eb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ha(b)));
};
g.d = function(a) {
  return this.J(null, a);
};
g.a = function(a, b) {
  return this.fa(null, a, b);
};
g.H = function(a, b) {
  return Md.v ? Md.v(this.i, eb(this.Y, this.end, b), this.start, this.end + 1, null) : Md.call(null, this.i, eb(this.Y, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return Mb.a(this, b);
};
g.S = function(a, b, c) {
  return Mb.b(this, b, c);
};
g.F = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(z.a(a.Y, e), new W(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.K = function() {
  return this.end - this.start;
};
g.Da = function() {
  return z.a(this.Y, this.end - 1);
};
g.Ea = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Md.v ? Md.v(this.i, this.Y, this.start, this.end - 1, null) : Md.call(null, this.i, this.Y, this.start, this.end - 1, null);
};
g.Fb = function(a, b, c) {
  var d = this, e = d.start + b;
  return Md.v ? Md.v(d.i, T.b(d.Y, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Md.call(null, d.i, T.b(d.Y, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return Md.v ? Md.v(b, this.Y, this.start, this.end, this.k) : Md.call(null, b, this.Y, this.start, this.end, this.k);
};
g.C = function() {
  return this.i;
};
g.J = function(a, b) {
  return 0 > b || this.end <= this.start + b ? vd(b, this.end - this.start) : z.a(this.Y, this.start + b);
};
g.fa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.b(this.Y, this.start + b, c);
};
g.I = function() {
  return $b(Hd, this.i);
};
function Md(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ld) {
      c = b.start + c, d = b.start + d, b = b.Y;
    } else {
      var f = Q(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Ld(a, b, c, d, e);
    }
  }
}
var Kd = function() {
  function a(a, b, c) {
    return Md(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, Q(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Ed(a) {
  return new od({}, Ha(a.c));
}
function Fd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  ic(a, 0, b, 0, a.length);
  return b;
}
var Od = function Nd(b, c, d, e) {
  d = b.root.q === d.q ? d : new od(b.root.q, Ha(d.c));
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    b = null != h ? Nd(b, c - 5, h, e) : sd(b.root.q, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Dd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.p = d;
  this.g = 275;
  this.n = 88;
}
g = Dd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ha(b)));
};
g.d = function(a) {
  return this.P(null, a);
};
g.a = function(a, b) {
  return this.Q(null, a, b);
};
g.P = function(a, b) {
  return Va.b(this, b, null);
};
g.Q = function(a, b, c) {
  return "number" === typeof b ? z.b(this, b, c) : c;
};
g.J = function(a, b) {
  if (this.root.q) {
    return yd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.fa = function(a, b, c) {
  return 0 <= b && b < this.f ? z.a(this, b) : c;
};
g.K = function() {
  if (this.root.q) {
    return this.f;
  }
  throw Error("count after persistent!");
};
g.Sb = function(a, b, c) {
  var d = this;
  if (d.root.q) {
    if (0 <= b && b < d.f) {
      return rd(this) <= b ? d.p[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = d.root.q === k.q ? k : new od(d.root.q, Ha(k.c));
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var n = b >>> a & 31, q = f(a - 5, l.c[n]);
            l.c[n] = q;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return xb(this, c);
    }
    if (v) {
      throw Error([y("Index "), y(b), y(" out of bounds for TransientVector of length"), y(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.La = function(a, b, c) {
  if ("number" === typeof b) {
    return Ab(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Xa = function(a, b) {
  if (this.root.q) {
    if (32 > this.f - rd(this)) {
      this.p[this.f & 31] = b;
    } else {
      var c = new od(this.root.q, this.p), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.p = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = sd(this.root.q, this.shift, c);
        this.root = new od(this.root.q, d);
        this.shift = e;
      } else {
        this.root = Od(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Ya = function() {
  if (this.root.q) {
    this.root.q = null;
    var a = this.f - rd(this), b = Array(a);
    ic(this.p, 0, b, 0, a);
    return new X(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Pd(a, b, c, d) {
  this.i = a;
  this.V = b;
  this.na = c;
  this.k = d;
  this.n = 0;
  this.g = 31850572;
}
g = Pd.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
g.F = function() {
  return this;
};
g.M = function() {
  return I(this.V);
};
g.T = function() {
  var a = N(this.V);
  return a ? new Pd(this.i, a, this.na, null) : null == this.na ? Na(this) : new Pd(this.i, this.na, null, null);
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new Pd(b, this.V, this.na, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return $b(M, this.i);
};
function Qd(a, b, c, d, e) {
  this.i = a;
  this.count = b;
  this.V = c;
  this.na = d;
  this.k = e;
  this.g = 31858766;
  this.n = 8192;
}
g = Qd.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.H = function(a, b) {
  var c;
  r(this.V) ? (c = this.na, c = new Qd(this.i, this.count + 1, this.V, Ub.a(r(c) ? c : Hd, b), null)) : c = new Qd(this.i, this.count + 1, Ub.a(this.V, b), Hd, null);
  return c;
};
g.toString = function() {
  return Gb(this);
};
g.F = function() {
  var a = H(this.na), b = this.V;
  return r(r(b) ? b : a) ? new Pd(null, this.V, H(a), null) : null;
};
g.K = function() {
  return this.count;
};
g.Da = function() {
  return I(this.V);
};
g.Ea = function() {
  if (r(this.V)) {
    var a = N(this.V);
    return a ? new Qd(this.i, this.count - 1, a, this.na, null) : new Qd(this.i, this.count - 1, H(this.na), Hd, null);
  }
  return this;
};
g.M = function() {
  return I(this.V);
};
g.T = function() {
  return J(H(this));
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new Qd(b, this.count, this.V, this.na, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return Sd;
};
var Sd = new Qd(null, 0, null, Hd, 0);
function Td() {
  this.n = 0;
  this.g = 2097152;
}
Td.prototype.u = function() {
  return!1;
};
var Ud = new Td;
function Vd(a, b) {
  return kc(ec(b) ? Q(a) === Q(b) ? Vc(Xc, $c.a(function(a) {
    return D.a(S.b(b, I(a), Ud), I(N(a)));
  }, a)) : null : null);
}
function Wd(a, b) {
  var c = a.c;
  if (b instanceof V) {
    a: {
      for (var d = c.length, e = b.sa, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof V && e === h.sa) {
          c = f;
          break a;
        }
        if (v) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ba(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (v) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof E) {
        a: {
          d = c.length;
          e = b.ua;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof E && e === h.ua) {
              c = f;
              break a;
            }
            if (v) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (v) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (v) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (D.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (v) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Xd(a, b, c) {
  this.c = a;
  this.m = b;
  this.da = c;
  this.n = 0;
  this.g = 32374990;
}
g = Xd.prototype;
g.B = function() {
  return Qb(this);
};
g.$ = function() {
  return this.m < this.c.length - 2 ? new Xd(this.c, this.m + 2, this.da) : null;
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  return this;
};
g.K = function() {
  return(this.c.length - this.m) / 2;
};
g.M = function() {
  return new X(null, 2, 5, Z, [this.c[this.m], this.c[this.m + 1]], null);
};
g.T = function() {
  return this.m < this.c.length - 2 ? new Xd(this.c, this.m + 2, this.da) : M;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new Xd(this.c, this.m, b);
};
g.C = function() {
  return this.da;
};
g.I = function() {
  return $b(M, this.da);
};
function p(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.c = c;
  this.k = d;
  this.n = 8196;
  this.g = 16123663;
}
g = p.prototype;
g.Wa = function() {
  return new Yd({}, this.c.length, Ha(this.c));
};
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = yc(this);
};
g.P = function(a, b) {
  return Va.b(this, b, null);
};
g.Q = function(a, b, c) {
  a = Wd(this, b);
  return-1 === a ? c : this.c[a + 1];
};
g.Ja = function(a, b, c) {
  a = Wd(this, b);
  if (-1 === a) {
    if (this.f < Zd) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new p(this.i, this.f + 1, e, null);
    }
    return jb(Wa(md($d, this), b, c), this.i);
  }
  return c === this.c[a + 1] ? this : v ? (b = Ha(this.c), b[a + 1] = c, new p(this.i, this.f, b, null)) : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ha(b)));
};
g.d = function(a) {
  return this.P(null, a);
};
g.a = function(a, b) {
  return this.Q(null, a, b);
};
g.H = function(a, b) {
  return fc(b) ? Wa(this, z.a(b, 0), z.a(b, 1)) : Ia.b(Pa, this, b);
};
g.toString = function() {
  return Gb(this);
};
g.F = function() {
  return 0 <= this.c.length - 2 ? new Xd(this.c, 0, null) : null;
};
g.K = function() {
  return this.f;
};
g.u = function(a, b) {
  return Vd(this, b);
};
g.D = function(a, b) {
  return new p(b, this.f, this.c, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return jb(ae, this.i);
};
g.Db = function(a, b) {
  if (0 <= Wd(this, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return Na(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new p(this.i, this.f - 1, d, null);
      }
      if (D.a(b, this.c[e])) {
        e += 2;
      } else {
        if (v) {
          d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var ae = new p(null, 0, [], null), Zd = 8;
function Yd(a, b, c) {
  this.Fa = a;
  this.pa = b;
  this.c = c;
  this.n = 56;
  this.g = 258;
}
g = Yd.prototype;
g.La = function(a, b, c) {
  if (r(this.Fa)) {
    a = Wd(this, b);
    if (-1 === a) {
      return this.pa + 2 <= 2 * Zd ? (this.pa += 2, this.c.push(b), this.c.push(c), this) : Tc.b(be.a ? be.a(this.pa, this.c) : be.call(null, this.pa, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Xa = function(a, b) {
  if (r(this.Fa)) {
    if (b ? b.g & 2048 || b.oc || (b.g ? 0 : t(Za, b)) : t(Za, b)) {
      return zb(this, zc.d ? zc.d(b) : zc.call(null, b), Ac.d ? Ac.d(b) : Ac.call(null, b));
    }
    for (var c = H(b), d = this;;) {
      var e = I(c);
      if (r(e)) {
        c = N(c), d = zb(d, zc.d ? zc.d(e) : zc.call(null, e), Ac.d ? Ac.d(e) : Ac.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Ya = function() {
  if (r(this.Fa)) {
    return this.Fa = !1, new p(null, rc((this.pa - this.pa % 2) / 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.P = function(a, b) {
  return Va.b(this, b, null);
};
g.Q = function(a, b, c) {
  if (r(this.Fa)) {
    return a = Wd(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.K = function() {
  if (r(this.Fa)) {
    return rc((this.pa - this.pa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function be(a, b) {
  for (var c = wb($d), d = 0;;) {
    if (d < a) {
      c = Tc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ce() {
  this.G = !1;
}
function de(a, b) {
  return a === b ? !0 : Fc(a, b) ? !0 : v ? D.a(a, b) : null;
}
var ee = function() {
  function a(a, b, c, h, k) {
    a = Ha(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = Ha(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.v = a;
  return c;
}();
function fe(a, b) {
  var c = Array(a.length - 2);
  ic(a, 0, c, 0, 2 * b);
  ic(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var ge = function() {
  function a(a, b, c, h, k, l) {
    a = a.Ga(b);
    a.c[c] = h;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Ga(b);
    a.c[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.ea = a;
  return c;
}();
function he(a, b, c) {
  this.q = a;
  this.r = b;
  this.c = c;
}
g = he.prototype;
g.ia = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = uc(this.r & h - 1);
  if (0 === (this.r & h)) {
    var l = uc(this.r);
    if (2 * l < this.c.length) {
      a = this.Ga(a);
      b = a.c;
      f.G = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.r |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = ie.ia(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.r >>> d & 1) && (k[d] = null != this.c[e] ? ie.ia(a, b + 5, F(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new je(a, l + 1, k);
    }
    return v ? (b = Array(2 * (l + 4)), ic(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, ic(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.G = !0, a = this.Ga(a), a.c = b, a.r |= h, a) : null;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  return null == l ? (l = h.ia(a, b + 5, c, d, e, f), l === h ? this : ge.j(this, a, 2 * k + 1, l)) : de(d, l) ? e === h ? this : ge.j(this, a, 2 * k + 1, e) : v ? (f.G = !0, ge.ea(this, a, 2 * k, null, 2 * k + 1, ke.Ca ? ke.Ca(a, b + 5, l, h, c, d, e) : ke.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.Oa = function() {
  return le.d ? le.d(this.c) : le.call(null, this.c);
};
g.Ga = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = uc(this.r), c = Array(0 > b ? 4 : 2 * (b + 1));
  ic(this.c, 0, c, 0, 2 * b);
  return new he(a, this.r, c);
};
g.Pa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.r & d)) {
    return this;
  }
  var e = uc(this.r & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.Pa(a + 5, b, c), a === h ? this : null != a ? new he(null, this.r, ee.b(this.c, 2 * e + 1, a)) : this.r === d ? null : v ? new he(null, this.r ^ d, fe(this.c, e)) : null) : de(c, f) ? new he(null, this.r ^ d, fe(this.c, e)) : v ? this : null;
};
g.ha = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = uc(this.r & f - 1);
  if (0 === (this.r & f)) {
    var k = uc(this.r);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ie.ha(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.r >>> c & 1) && (h[c] = null != this.c[d] ? ie.ha(a + 5, F(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new je(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    ic(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    ic(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.G = !0;
    return new he(null, this.r | f, a);
  }
  k = this.c[2 * h];
  f = this.c[2 * h + 1];
  return null == k ? (k = f.ha(a + 5, b, c, d, e), k === f ? this : new he(null, this.r, ee.b(this.c, 2 * h + 1, k))) : de(c, k) ? d === f ? this : new he(null, this.r, ee.b(this.c, 2 * h + 1, d)) : v ? (e.G = !0, new he(null, this.r, ee.v(this.c, 2 * h, null, 2 * h + 1, ke.ea ? ke.ea(a + 5, k, f, b, c, d) : ke.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.r & e)) {
    return d;
  }
  var f = uc(this.r & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.za(a + 5, b, c, d) : de(c, e) ? f : v ? d : null;
};
var ie = new he(null, 0, []);
function je(a, b, c) {
  this.q = a;
  this.f = b;
  this.c = c;
}
g = je.prototype;
g.ia = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = ge.j(this, a, h, ie.ia(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.ia(a, b + 5, c, d, e, f);
  return b === k ? this : ge.j(this, a, h, b);
};
g.Oa = function() {
  return me.d ? me.d(this.c) : me.call(null, this.c);
};
g.Ga = function(a) {
  return a === this.q ? this : new je(a, this.f, Ha(this.c));
};
g.Pa = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.Pa(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.c;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new he(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new je(null, this.f - 1, ee.b(this.c, d, a));
        }
      } else {
        d = v ? new je(null, this.f, ee.b(this.c, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
g.ha = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new je(null, this.f + 1, ee.b(this.c, f, ie.ha(a + 5, b, c, d, e)));
  }
  a = h.ha(a + 5, b, c, d, e);
  return a === h ? this : new je(null, this.f, ee.b(this.c, f, a));
};
g.za = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.za(a + 5, b, c, d) : d;
};
function ne(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (de(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function oe(a, b, c, d) {
  this.q = a;
  this.oa = b;
  this.f = c;
  this.c = d;
}
g = oe.prototype;
g.ia = function(a, b, c, d, e, f) {
  if (c === this.oa) {
    b = ne(this.c, this.f, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.f) {
        return a = ge.ea(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.G = !0, a.f += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      ic(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.G = !0;
      f = this.f + 1;
      a === this.q ? (this.c = b, this.f = f, a = this) : a = new oe(this.q, this.oa, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : ge.j(this, a, b + 1, e);
  }
  return(new he(a, 1 << (this.oa >>> b & 31), [null, this, null, null])).ia(a, b, c, d, e, f);
};
g.Oa = function() {
  return le.d ? le.d(this.c) : le.call(null, this.c);
};
g.Ga = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  ic(this.c, 0, b, 0, 2 * this.f);
  return new oe(a, this.oa, this.f, b);
};
g.Pa = function(a, b, c) {
  a = ne(this.c, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : v ? new oe(null, this.oa, this.f - 1, fe(this.c, rc((a - a % 2) / 2))) : null;
};
g.ha = function(a, b, c, d, e) {
  return b === this.oa ? (a = ne(this.c, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), ic(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.G = !0, new oe(null, this.oa, this.f + 1, b)) : D.a(this.c[a], d) ? this : new oe(null, this.oa, this.f, ee.b(this.c, a + 1, d))) : (new he(null, 1 << (this.oa >>> a & 31), [null, this])).ha(a, b, c, d, e);
};
g.za = function(a, b, c, d) {
  a = ne(this.c, this.f, c);
  return 0 > a ? d : de(c, this.c[a]) ? this.c[a + 1] : v ? d : null;
};
var ke = function() {
  function a(a, b, c, h, k, l, n) {
    var q = F(c);
    if (q === k) {
      return new oe(null, q, 2, [c, h, l, n]);
    }
    var u = new ce;
    return ie.ia(a, b, q, c, h, u).ia(a, b, k, l, n, u);
  }
  function b(a, b, c, h, k, l) {
    var n = F(b);
    if (n === h) {
      return new oe(null, n, 2, [b, c, k, l]);
    }
    var q = new ce;
    return ie.ha(a, n, b, c, q).ha(a, h, k, l, q);
  }
  var c = null, c = function(c, e, f, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ea = b;
  c.Ca = a;
  return c;
}();
function pe(a, b, c, d, e) {
  this.i = a;
  this.ja = b;
  this.m = c;
  this.t = d;
  this.k = e;
  this.n = 0;
  this.g = 32374860;
}
g = pe.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  return this;
};
g.M = function() {
  return null == this.t ? new X(null, 2, 5, Z, [this.ja[this.m], this.ja[this.m + 1]], null) : I(this.t);
};
g.T = function() {
  return null == this.t ? le.b ? le.b(this.ja, this.m + 2, null) : le.call(null, this.ja, this.m + 2, null) : le.b ? le.b(this.ja, this.m, N(this.t)) : le.call(null, this.ja, this.m, N(this.t));
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new pe(b, this.ja, this.m, this.t, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return $b(M, this.i);
};
var le = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new pe(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.Oa(), r(h))) {
            return new pe(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new pe(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.b = a;
  return c;
}();
function qe(a, b, c, d, e) {
  this.i = a;
  this.ja = b;
  this.m = c;
  this.t = d;
  this.k = e;
  this.n = 0;
  this.g = 32374860;
}
g = qe.prototype;
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  return this;
};
g.M = function() {
  return I(this.t);
};
g.T = function() {
  return me.j ? me.j(null, this.ja, this.m, N(this.t)) : me.call(null, null, this.ja, this.m, N(this.t));
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new qe(b, this.ja, this.m, this.t, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return $b(M, this.i);
};
var me = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.Oa(), r(k))) {
            return new qe(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new qe(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.j(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.j = a;
  return c;
}();
function re(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.U = d;
  this.W = e;
  this.k = f;
  this.n = 8196;
  this.g = 16123663;
}
g = re.prototype;
g.Wa = function() {
  return new se({}, this.root, this.f, this.U, this.W);
};
g.B = function() {
  var a = this.k;
  return null != a ? a : this.k = a = yc(this);
};
g.P = function(a, b) {
  return Va.b(this, b, null);
};
g.Q = function(a, b, c) {
  return null == b ? this.U ? this.W : c : null == this.root ? c : v ? this.root.za(0, F(b), b, c) : null;
};
g.Ja = function(a, b, c) {
  if (null == b) {
    return this.U && c === this.W ? this : new re(this.i, this.U ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new ce;
  b = (null == this.root ? ie : this.root).ha(0, F(b), b, c, a);
  return b === this.root ? this : new re(this.i, a.G ? this.f + 1 : this.f, b, this.U, this.W, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ha(b)));
};
g.d = function(a) {
  return this.P(null, a);
};
g.a = function(a, b) {
  return this.Q(null, a, b);
};
g.H = function(a, b) {
  return fc(b) ? Wa(this, z.a(b, 0), z.a(b, 1)) : Ia.b(Pa, this, b);
};
g.toString = function() {
  return Gb(this);
};
g.F = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Oa() : null;
    return this.U ? P(new X(null, 2, 5, Z, [null, this.W], null), a) : a;
  }
  return null;
};
g.K = function() {
  return this.f;
};
g.u = function(a, b) {
  return Vd(this, b);
};
g.D = function(a, b) {
  return new re(b, this.f, this.root, this.U, this.W, this.k);
};
g.C = function() {
  return this.i;
};
g.I = function() {
  return jb($d, this.i);
};
g.Db = function(a, b) {
  if (null == b) {
    return this.U ? new re(this.i, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (v) {
    var c = this.root.Pa(0, F(b), b);
    return c === this.root ? this : new re(this.i, this.f - 1, c, this.U, this.W, null);
  }
  return null;
};
var $d = new re(null, 0, null, !1, null, 0);
function Wb(a, b) {
  for (var c = a.length, d = 0, e = wb($d);;) {
    if (d < c) {
      var f = d + 1, e = e.La(null, a[d], b[d]), d = f
    } else {
      return yb(e);
    }
  }
}
function se(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.U = d;
  this.W = e;
  this.n = 56;
  this.g = 258;
}
g = se.prototype;
g.La = function(a, b, c) {
  return te(this, b, c);
};
g.Xa = function(a, b) {
  var c;
  a: {
    if (this.q) {
      if (b ? b.g & 2048 || b.oc || (b.g ? 0 : t(Za, b)) : t(Za, b)) {
        c = te(this, zc.d ? zc.d(b) : zc.call(null, b), Ac.d ? Ac.d(b) : Ac.call(null, b));
        break a;
      }
      c = H(b);
      for (var d = this;;) {
        var e = I(c);
        if (r(e)) {
          c = N(c), d = te(d, zc.d ? zc.d(e) : zc.call(null, e), Ac.d ? Ac.d(e) : Ac.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.Ya = function() {
  var a;
  if (this.q) {
    this.q = null, a = new re(null, this.count, this.root, this.U, this.W, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.P = function(a, b) {
  return null == b ? this.U ? this.W : null : null == this.root ? null : this.root.za(0, F(b), b);
};
g.Q = function(a, b, c) {
  return null == b ? this.U ? this.W : c : null == this.root ? c : this.root.za(0, F(b), b, c);
};
g.K = function() {
  if (this.q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function te(a, b, c) {
  if (a.q) {
    if (null == b) {
      a.W !== c && (a.W = c), a.U || (a.count += 1, a.U = !0);
    } else {
      var d = new ce;
      b = (null == a.root ? ie : a.root).ia(a.q, 0, F(b), b, c, d);
      b !== a.root && (a.root = b);
      d.G && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var ue = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H(a);
    for (var b = wb($d);;) {
      if (a) {
        var e = N(N(a)), b = Tc.b(b, I(a), I(N(a)));
        a = e;
      } else {
        return yb(b);
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ve(a, b) {
  this.ta = a;
  this.da = b;
  this.n = 0;
  this.g = 32374988;
}
g = ve.prototype;
g.B = function() {
  return Qb(this);
};
g.$ = function() {
  var a = this.ta, a = (a ? a.g & 128 || a.Rb || (a.g ? 0 : t(Ta, a)) : t(Ta, a)) ? this.ta.$(null) : N(this.ta);
  return null == a ? null : new ve(a, this.da);
};
g.H = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return Gb(this);
};
g.R = function(a, b) {
  return qc.a(b, this);
};
g.S = function(a, b, c) {
  return qc.b(b, c, this);
};
g.F = function() {
  return this;
};
g.M = function() {
  return this.ta.M(null).Eb();
};
g.T = function() {
  var a = this.ta, a = (a ? a.g & 128 || a.Rb || (a.g ? 0 : t(Ta, a)) : t(Ta, a)) ? this.ta.$(null) : N(this.ta);
  return null != a ? new ve(a, this.da) : M;
};
g.u = function(a, b) {
  return Rb(this, b);
};
g.D = function(a, b) {
  return new ve(this.ta, b);
};
g.C = function() {
  return this.da;
};
g.I = function() {
  return $b(M, this.da);
};
function we(a) {
  return(a = H(a)) ? new ve(a, null) : null;
}
function zc(a) {
  return $a(a);
}
function Ac(a) {
  return ab(a);
}
var xe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return r(Wc(Xc, a)) ? Ia.a(function(a, b) {
      return Ub.a(r(a) ? a : ae, b);
    }, a) : null;
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Gc(a) {
  if (a && (a.n & 4096 || a.qc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
function ye(a, b) {
  var c = a.exec(b);
  return D.a(I(c), b) ? 1 === Q(c) ? I(c) : Id(c) : null;
}
function ze(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === Q(c) ? I(c) : Id(c);
}
function Ae(a) {
  a = ze(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  R.b(a, 0, null);
  R.b(a, 1, null);
  R.b(a, 2, null);
}
function Be(a, b, c, d, e, f, h) {
  var k = wa;
  try {
    wa = null == wa ? null : wa - 1;
    if (null != wa && 0 > wa) {
      return C(a, "#");
    }
    C(a, c);
    H(h) && (b.b ? b.b(I(h), a, f) : b.call(null, I(h), a, f));
    for (var l = N(h), n = Da.d(f);l && (null == n || 0 !== n);) {
      C(a, d);
      b.b ? b.b(I(l), a, f) : b.call(null, I(l), a, f);
      var q = N(l);
      c = n - 1;
      l = q;
      n = c;
    }
    r(Da.d(f)) && (C(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return C(a, e);
  } finally {
    wa = k;
  }
}
var Ce = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = H(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.J(null, k);
        C(a, l);
        k += 1;
      } else {
        if (e = H(e)) {
          f = e, gc(f) ? (e = Cb(f), h = Db(f), f = e, l = Q(e), e = h, h = l) : (l = I(f), C(a, l), e = N(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.l = 1;
  a.h = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), De = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Ee(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return De[a];
  })), y('"')].join("");
}
var $ = function Fe(b, c, d) {
  if (null == b) {
    return C(c, "nil");
  }
  if (void 0 === b) {
    return C(c, "#\x3cundefined\x3e");
  }
  if (v) {
    r(function() {
      var c = S.a(d, Ba);
      return r(c) ? (c = b ? b.g & 131072 || b.pc ? !0 : b.g ? !1 : t(gb, b) : t(gb, b)) ? ac(b) : c : c;
    }()) && (C(c, "^"), Fe(ac(b), c, d), C(c, " "));
    if (null == b) {
      return C(c, "nil");
    }
    if (b.Na) {
      return b.Za(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.L)) {
      return b.s(null, c, d);
    }
    if (Fa(b) === Boolean || "number" === typeof b) {
      return C(c, "" + y(b));
    }
    if (null != b && b.constructor === Object) {
      return C(c, "#js "), Ge.j ? Ge.j($c.a(function(c) {
        return new X(null, 2, 5, Z, [Hc.d(c), b[c]], null);
      }, hc(b)), Fe, c, d) : Ge.call(null, $c.a(function(c) {
        return new X(null, 2, 5, Z, [Hc.d(c), b[c]], null);
      }, hc(b)), Fe, c, d);
    }
    if (b instanceof Array) {
      return Be(c, Fe, "#js [", " ", "]", d, b);
    }
    if (ba(b)) {
      return r(za.d(d)) ? C(c, Ee(b)) : C(c, b);
    }
    if (Yb(b)) {
      return Ce.e(c, O(["#\x3c", "" + y(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + y(b);;) {
          if (Q(d) < c) {
            d = [y("0"), y(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Ce.e(c, O(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Ce.e(c, O(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.L || (b.g ? 0 : t(sb, b)) : t(sb, b)) ? tb(b, c, d) : v ? Ce.e(c, O(["#\x3c", "" + y(b), "\x3e"], 0)) : null;
  }
  return null;
}, He = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || s(H(a))) {
      b = "";
    } else {
      b = y;
      var e = xa(), f = new ua;
      a: {
        var h = new Fb(f);
        $(I(a), h, e);
        a = H(N(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = k.J(null, n);
            C(h, " ");
            $(q, h, e);
            n += 1;
          } else {
            if (a = H(a)) {
              k = a, gc(k) ? (a = Cb(k), l = Db(k), k = a, q = Q(a), a = l, l = q) : (q = I(k), C(h, " "), $(q, h, e), a = N(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ge(a, b, c, d) {
  return Be(c, function(a, c, d) {
    b.b ? b.b($a(a), c, d) : b.call(null, $a(a), c, d);
    C(c, " ");
    return b.b ? b.b(ab(a), c, d) : b.call(null, ab(a), c, d);
  }, "{", ", ", "}", d, H(a));
}
ve.prototype.L = !0;
ve.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
Lb.prototype.L = !0;
Lb.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
Ld.prototype.L = !0;
Ld.prototype.s = function(a, b, c) {
  return Be(b, $, "[", " ", "]", c, this);
};
Mc.prototype.L = !0;
Mc.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
p.prototype.L = !0;
p.prototype.s = function(a, b, c) {
  return Ge(this, $, b, c);
};
Qd.prototype.L = !0;
Qd.prototype.s = function(a, b, c) {
  return Be(b, $, "#queue [", " ", "]", c, H(this));
};
W.prototype.L = !0;
W.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
pe.prototype.L = !0;
pe.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
Jd.prototype.L = !0;
Jd.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
re.prototype.L = !0;
re.prototype.s = function(a, b, c) {
  return Ge(this, $, b, c);
};
X.prototype.L = !0;
X.prototype.s = function(a, b, c) {
  return Be(b, $, "[", " ", "]", c, this);
};
Bc.prototype.L = !0;
Bc.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
Xd.prototype.L = !0;
Xd.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
Cc.prototype.L = !0;
Cc.prototype.s = function(a, b) {
  return C(b, "()");
};
Ec.prototype.L = !0;
Ec.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
qe.prototype.L = !0;
qe.prototype.s = function(a, b, c) {
  return Be(b, $, "(", " ", ")", c, this);
};
X.prototype.Ua = !0;
X.prototype.Va = function(a, b) {
  return lc.a(this, b);
};
Ld.prototype.Ua = !0;
Ld.prototype.Va = function(a, b) {
  return lc.a(this, b);
};
V.prototype.Ua = !0;
V.prototype.Va = function(a, b) {
  return Hb(this, b);
};
E.prototype.Ua = !0;
E.prototype.Va = function(a, b) {
  return Hb(this, b);
};
function Ie(a, b) {
  if (a ? a.sc : a) {
    return a.sc(a, b);
  }
  var c;
  c = Ie[m(null == a ? null : a)];
  if (!c && (c = Ie._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Je = function() {
  function a(a, b, c, d, e) {
    if (a ? a.wc : a) {
      return a.wc(a, b, c, d, e);
    }
    var q;
    q = Je[m(null == a ? null : a)];
    if (!q && (q = Je._, !q)) {
      throw w("ISwap.-swap!", a);
    }
    return q.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.vc : a) {
      return a.vc(a, b, c, d);
    }
    var e;
    e = Je[m(null == a ? null : a)];
    if (!e && (e = Je._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.uc : a) {
      return a.uc(a, b, c);
    }
    var d;
    d = Je[m(null == a ? null : a)];
    if (!d && (d = Je._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.tc : a) {
      return a.tc(a, b);
    }
    var c;
    c = Je[m(null == a ? null : a)];
    if (!c && (c = Je._, !c)) {
      throw w("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.b = c;
  e.j = b;
  e.v = a;
  return e;
}();
function Ke(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Kc = c;
  this.jb = d;
  this.g = 2153938944;
  this.n = 16386;
}
g = Ke.prototype;
g.B = function() {
  return this[fa] || (this[fa] = ++ga);
};
g.Ub = function(a, b, c) {
  a = H(this.jb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.J(null, f), k = R.b(h, 0, null), h = R.b(h, 1, null);
      h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = H(a)) {
        gc(a) ? (d = Cb(a), a = Db(a), k = d, e = Q(d), d = k) : (d = I(a), k = R.b(d, 0, null), h = R.b(d, 1, null), h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c), a = N(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.Tb = function(a, b, c) {
  return this.jb = T.b(this.jb, b, c);
};
g.s = function(a, b, c) {
  C(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return C(b, "\x3e");
};
g.C = function() {
  return this.i;
};
g.pb = function() {
  return this.state;
};
g.u = function(a, b) {
  return this === b;
};
var Me = function() {
  function a(a) {
    return new Ke(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = jc(c) ? U.a(ue, c) : c, e = S.a(d, Le), d = S.a(d, Ba);
      return new Ke(a, d, e, null);
    }
    a.l = 1;
    a.h = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.d = a;
  b.e = c.e;
  return b;
}();
function Ne(a, b) {
  if (a instanceof Ke) {
    var c = a.Kc;
    if (null != c && !r(c.d ? c.d(b) : c.call(null, b))) {
      throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(He.e(O([Dc(new E(null, "validate", "validate", 1233162959, null), new E(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.jb && ub(a, c, b);
    return b;
  }
  return Ie(a, b);
}
var Oe = function() {
  function a(a, b, c, d) {
    return a instanceof Ke ? Ne(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d)) : Je.j(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Ke ? Ne(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : Je.b(a, b, c);
  }
  function c(a, b) {
    return a instanceof Ke ? Ne(a, b.d ? b.d(a.state) : b.call(null, a.state)) : Je.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, u) {
      var x = null;
      4 < arguments.length && (x = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x);
    }
    function b(a, c, d, e, f) {
      return a instanceof Ke ? Ne(a, U.v(c, a.state, d, e, f)) : Je.v(a, c, d, e, f);
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = J(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), Pe = {};
function Qe(a) {
  if (a ? a.mc : a) {
    return a.mc(a);
  }
  var b;
  b = Qe[m(null == a ? null : a)];
  if (!b && (b = Qe._, !b)) {
    throw w("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function Re(a) {
  return(a ? r(r(null) ? null : a.lc) || (a.Xb ? 0 : t(Pe, a)) : t(Pe, a)) ? Qe(a) : "string" === typeof a || "number" === typeof a || a instanceof V || a instanceof E ? Se.d ? Se.d(a) : Se.call(null, a) : He.e(O([a], 0));
}
var Se = function Te(b) {
  if (null == b) {
    return null;
  }
  if (b ? r(r(null) ? null : b.lc) || (b.Xb ? 0 : t(Pe, b)) : t(Pe, b)) {
    return Qe(b);
  }
  if (b instanceof V) {
    return Gc(b);
  }
  if (b instanceof E) {
    return "" + y(b);
  }
  if (ec(b)) {
    var c = {};
    b = H(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.J(null, f), k = R.b(h, 0, null), h = R.b(h, 1, null);
        c[Re(k)] = Te(h);
        f += 1;
      } else {
        if (b = H(b)) {
          gc(b) ? (e = Cb(b), b = Db(b), d = e, e = Q(e)) : (e = I(b), d = R.b(e, 0, null), e = R.b(e, 1, null), c[Re(d)] = Te(e), b = N(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.g & 8 || b.Nc || (b.g ? 0 : t(Oa, b)) : t(Oa, b)) {
    c = [];
    b = H($c.a(Te, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.J(null, f), c.push(k), f += 1;
      } else {
        if (b = H(b)) {
          d = b, gc(d) ? (b = Cb(d), f = Db(d), d = b, e = Q(b), b = f) : (b = I(d), c.push(b), b = N(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return v ? b : null;
}, sc = function() {
  function a(a) {
    return(Math.random.o ? Math.random.o() : Math.random.call(null)) * a;
  }
  function b() {
    return c.d(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.d = a;
  return c;
}(), tc = function(a) {
  return Math.floor.d ? Math.floor.d((Math.random.o ? Math.random.o() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.o ? Math.random.o() : Math.random.call(null)) * a);
};
function Ue(a) {
  this.ib = a;
  this.n = 0;
  this.g = 2153775104;
}
Ue.prototype.B = function() {
  return la(He.e(O([this], 0)));
};
Ue.prototype.s = function(a, b) {
  return C(b, [y('#uuid "'), y(this.ib), y('"')].join(""));
};
Ue.prototype.u = function(a, b) {
  return b instanceof Ue && this.ib === b.ib;
};
Ue.prototype.toString = function() {
  return this.ib;
};
function Ve(a, b) {
  this.message = a;
  this.data = b;
}
Ve.prototype = Error();
Ve.prototype.constructor = Ve;
var We = function() {
  function a(a, b) {
    return new Ve(a, b);
  }
  function b(a, b) {
    return new Ve(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
var Ca = new V(null, "dup", "dup"), Xe = new V(null, "cur-x", "cur-x"), Ye = new V(null, "div.pillars", "div.pillars"), Jb = new V(null, "default", "default"), Ze = new V(null, "flappy-y", "flappy-y"), $e = new V(null, "recur", "recur"), af = new V(null, "renderer", "renderer"), bf = new V(null, "initial-vel", "initial-vel"), cf = new V(null, "finally-block", "finally-block"), df = new V(null, "catch-block", "catch-block"), ef = new V(null, "flappy-start-time", "flappy-start-time"), ff = new V(null, 
"gap-top", "gap-top"), gf = new V(null, "content", "content"), hf = new V(null, "score", "score"), jf = new V(null, "pillar-list", "pillar-list"), kf = new V(null, "timer-running", "timer-running"), ya = new V(null, "flush-on-newline", "flush-on-newline"), lf = new V(null, "style", "style"), mf = new V(null, "catch-exception", "catch-exception"), nf = new V(null, "jump-count", "jump-count"), of = new V(null, "continue-block", "continue-block"), pf = new V(null, "border-pos", "border-pos"), qf = new V(null, 
"prev", "prev"), rf = new V(null, "start-time", "start-time"), sf = new V(null, "upper-height", "upper-height"), tf = new V(null, "pos-x", "pos-x"), uf = new V(null, "a.start-button", "a.start-button"), vf = new V(null, "onClick", "onClick"), Da = new V(null, "print-length", "print-length"), wf = new V(null, "left", "left"), xf = new V(null, "cur-time", "cur-time"), v = new V(null, "else", "else"), za = new V(null, "readably", "readably"), Le = new V(null, "validator", "validator"), Ba = new V(null, 
"meta", "meta"), yf = new V(null, "time-delta", "time-delta"), zf = new V(null, "div.pillar.pillar-lower", "div.pillar.pillar-lower"), Af = new V(null, "span", "span"), Bf = new V(null, "className", "className"), Cf = new V(null, "id", "id"), Df = new V(null, "div.pillar.pillar-upper", "div.pillar.pillar-upper"), Ef = new V(null, "height", "height"), Ff = new V(null, "tag", "tag"), Gf = new V(null, "lower-height", "lower-height");
var Hf = function() {
  function a(a, b) {
    return U.a(y, cd(ed.a(dd.d(a), b)));
  }
  function b(a) {
    return U.a(y, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function If(a, b) {
  if (0 >= b || b >= 2 + Q(a)) {
    return Ub.a(Id(P("", $c.a(y, H(a)))), "");
  }
  if (r(D.a ? D.a(1, b) : D.call(null, 1, b))) {
    return new X(null, 1, 5, Z, [a], null);
  }
  if (r(D.a ? D.a(2, b) : D.call(null, 2, b))) {
    return new X(null, 2, 5, Z, ["", a], null);
  }
  var c = b - 2;
  return Ub.a(Id(P("", Kd.b(Id($c.a(y, H(a))), 0, c))), xc.a(a, c));
}
var Jf = function() {
  function a(a, b, c) {
    if (D.a("" + y(b), "/(?:)/")) {
      b = If(a, c);
    } else {
      if (1 > c) {
        b = Id(("" + y(a)).split(b));
      } else {
        a: {
          for (var h = c, k = Hd;;) {
            if (D.a(h, 1)) {
              b = Ub.a(k, a);
              break a;
            }
            var l = ze(b, a);
            if (r(l)) {
              var n = l, l = a.indexOf(n), n = a.substring(l + Q(n)), h = h - 1, k = Ub.a(k, a.substring(0, l));
              a = n;
            } else {
              b = Ub.a(k, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (D.a(0, c)) {
      a: {
        for (c = b;;) {
          if (D.a("", null == c ? null : bb(c))) {
            c = null == c ? null : cb(c);
          } else {
            break a;
          }
        }
        c = void 0;
      }
    } else {
      c = b;
    }
    return c;
  }
  function b(a, b) {
    return c.b(a, b, 0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
var Kf, Lf, Mf, Nf;
function Of() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
Nf = Mf = Lf = Kf = !1;
var Pf;
if (Pf = Of()) {
  var Qf = aa.navigator;
  Kf = 0 == Pf.lastIndexOf("Opera", 0);
  Lf = !Kf && (-1 != Pf.indexOf("MSIE") || -1 != Pf.indexOf("Trident"));
  Mf = !Kf && -1 != Pf.indexOf("WebKit");
  Nf = !Kf && !Mf && !Lf && "Gecko" == Qf.product;
}
var Rf = Lf, Sf = Nf, Tf = Mf;
function Uf() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Vf;
a: {
  var Wf = "", Xf;
  if (Kf && aa.opera) {
    var Yf = aa.opera.version, Wf = "function" == typeof Yf ? Yf() : Yf
  } else {
    if (Sf ? Xf = /rv\:([^\);]+)(\)|;)/ : Rf ? Xf = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Tf && (Xf = /WebKit\/(\S+)/), Xf) {
      var Zf = Xf.exec(Of()), Wf = Zf ? Zf[1] : ""
    }
  }
  if (Rf) {
    var $f = Uf();
    if ($f > parseFloat(Wf)) {
      Vf = String($f);
      break a;
    }
  }
  Vf = Wf;
}
var ag = {};
function bg(a) {
  if (!ag[a]) {
    for (var b = 0, c = String(Vf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = l.exec(h) || ["", "", ""], u = n.exec(k) || ["", "", ""];
        if (0 == q[0].length && 0 == u[0].length) {
          break;
        }
        b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == u[2].length) ? -1 : (0 == q[2].length) > (0 == u[2].length) ? 1 : 0) || (q[2] < u[2] ? -1 : q[2] > u[2] ? 1 : 0);
      } while (0 == b);
    }
    ag[a] = 0 <= b;
  }
}
var cg = aa.document, dg = cg && Rf ? Uf() || ("CSS1Compat" == cg.compatMode ? parseInt(Vf, 10) : 5) : void 0;
var eg = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function fg(a) {
  return Ia.b(function(a, c) {
    var d = S.a(a, c);
    return r(d) ? a : Xb.a(a, c);
  }, a, we(a));
}
var gg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Id(jd(Ea, gd.a(function(a) {
      return(a ? a.g & 33554432 || a.Qc || (a.g ? 0 : t(rb, a)) : t(rb, a)) ? new X(null, 1, 5, Z, [a], null) : fc(a) ? a : v ? new X(null, 1, 5, Z, [a], null) : null;
    }, $c.a(Bf, a))));
    a = U.a(xe, a);
    return null == b || s(H(b)) ? a : T.b(a, Bf, b);
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function hg(a) {
  if (a ? a.Aa : a) {
    return a.Aa(a);
  }
  var b;
  b = hg[m(null == a ? null : a)];
  if (!b && (b = hg._, !b)) {
    throw w("HtmlRenderer.render-html", a);
  }
  return b.call(null, a);
}
function ig(a) {
  a = Se(a);
  var b = Hf.a(" ", ld(H(a.className)));
  s(/^[\s\xa0]*$/.test(null == b ? "" : String(b))) && (a.className = b);
  return a;
}
function jg(a) {
  return Ja.d($c.a(hg, a));
}
hg["null"] = function() {
  return null;
};
hg._ = function(a) {
  return a;
};
X.prototype.Aa = function() {
  var a, b = R.b(this, 0, null), c = vc(this);
  if (!(b instanceof V || b instanceof E || "string" === typeof b)) {
    throw We.a([y(b), y(" is not a valid element name.")].join(""), new p(null, 2, [Ff, b, gf, c], null));
  }
  var d = ye(eg, Gc(b));
  R.b(d, 0, null);
  b = R.b(d, 1, null);
  a = R.b(d, 2, null);
  d = R.b(d, 3, null);
  a = new p(null, 2, [Cf, a, Bf, r(d) ? Jf.a(d, /\./) : null], null);
  d = I(c);
  a = ec(d) ? new X(null, 3, 5, Z, [b, fg(gg.e(O([a, d], 0))), N(c)], null) : new X(null, 3, 5, Z, [b, fg(a), c], null);
  b = R.b(a, 0, null);
  c = R.b(a, 1, null);
  a = R.b(a, 2, null);
  b = React.va[Gc(b)];
  return r(a) ? b.a ? b.a(ig(c), hg(a)) : b.call(null, ig(c), hg(a)) : b.d ? b.d(ig(c)) : b.call(null, ig(c));
};
Lb.prototype.Aa = function() {
  return jg(this);
};
Bc.prototype.Aa = function() {
  return jg(this);
};
W.prototype.Aa = function() {
  return jg(this);
};
Jd.prototype.Aa = function() {
  return jg(this);
};
Ec.prototype.Aa = function() {
  return jg(this);
};
var kg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(U.a(y, b));
  }
  a.l = 1;
  a.h = function(a) {
    I(a);
    a = J(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
Ae("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
Ae("([-+]?[0-9]+)/([0-9]+)");
Ae("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
Ae("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
Ae("[0-9A-Fa-f]{2}");
Ae("[0-9A-Fa-f]{4}");
function lg(a) {
  if (D.a(3, Q(a))) {
    return a;
  }
  if (3 < Q(a)) {
    return xc.b(a, 0, 3);
  }
  if (v) {
    for (a = new ua(a);;) {
      if (3 > a.Ba.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var mg = function(a, b) {
  return function(c, d) {
    return S.a(r(d) ? b : a, c);
  };
}(new X(null, 13, 5, Z, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), new X(null, 13, 5, Z, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null)), ng = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function og(a) {
  a = parseInt(a, 10);
  return s(isNaN(a)) ? a : null;
}
function pg(a, b, c, d) {
  a <= b && b <= c || kg.e(null, O([[y(d), y(" Failed:  "), y(a), y("\x3c\x3d"), y(b), y("\x3c\x3d"), y(c)].join("")], 0));
  return b;
}
function qg(a) {
  var b = ye(ng, a);
  R.b(b, 0, null);
  var c = R.b(b, 1, null), d = R.b(b, 2, null), e = R.b(b, 3, null), f = R.b(b, 4, null), h = R.b(b, 5, null), k = R.b(b, 6, null), l = R.b(b, 7, null), n = R.b(b, 8, null), q = R.b(b, 9, null), u = R.b(b, 10, null);
  if (s(b)) {
    return kg.e(null, O([[y("Unrecognized date/time syntax: "), y(a)].join("")], 0));
  }
  a = og(c);
  var b = function() {
    var a = og(d);
    return r(a) ? a : 1;
  }(), c = function() {
    var a = og(e);
    return r(a) ? a : 1;
  }(), x = function() {
    var a = og(f);
    return r(a) ? a : 0;
  }(), K = function() {
    var a = og(h);
    return r(a) ? a : 0;
  }(), G = function() {
    var a = og(k);
    return r(a) ? a : 0;
  }(), L = function() {
    var a = og(lg(l));
    return r(a) ? a : 0;
  }(), n = (D.a(n, "-") ? -1 : 1) * (60 * function() {
    var a = og(q);
    return r(a) ? a : 0;
  }() + function() {
    var a = og(u);
    return r(a) ? a : 0;
  }());
  return new X(null, 8, 5, Z, [a, pg(1, b, 12, "timestamp month field must be in range 1..12"), pg(1, c, mg.a ? mg.a(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : mg.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), pg(0, x, 23, "timestamp hour field must be in range 0..23"), pg(0, K, 59, "timestamp minute field must be in range 0..59"), pg(0, 
  G, D.a(K, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), pg(0, L, 999, "timestamp millisecond field must be in range 0..999"), n], null);
}
Me.d(new p(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = qg(a), r(b)) {
      a = R.b(b, 0, null);
      var c = R.b(b, 1, null), d = R.b(b, 2, null), e = R.b(b, 3, null), f = R.b(b, 4, null), h = R.b(b, 5, null), k = R.b(b, 6, null);
      b = R.b(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, h, k) - 6E4 * b);
    } else {
      b = kg.e(null, O([[y("Unrecognized date/time syntax: "), y(a)].join("")], 0));
    }
  } else {
    b = kg.e(null, O(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Ue(a) : kg.e(null, O(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return fc(a) ? md(Sd, a) : kg.e(null, O(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (fc(a)) {
    var b = [];
    a = H(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.J(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = H(a)) {
          c = a, gc(c) ? (a = Cb(c), e = Db(c), c = a, d = Q(a), a = e) : (a = I(c), b.push(a), a = N(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (ec(a)) {
    b = {};
    a = H(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.J(null, e), f = R.b(h, 0, null), h = R.b(h, 1, null);
        b[Gc(f)] = h;
        e += 1;
      } else {
        if (a = H(a)) {
          gc(a) ? (d = Cb(a), a = Db(a), c = d, d = Q(d)) : (d = I(a), c = R.b(d, 0, null), d = R.b(d, 1, null), b[Gc(c)] = d, a = N(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return v ? kg.e(null, O([[y("JS literal expects a vector or map containing "), y("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null));
Me.d(null);
function rg(a) {
  a.prototype.then = a.prototype.Sa;
  a.prototype.$goog_Thenable = !0;
}
function sg(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
}
;function tg(a) {
  da(aa.setImmediate) ? aa.setImmediate(a) : (ug || (ug = vg()), ug(a));
}
var ug;
function vg() {
  var a = aa.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = ja(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Nb;
      c.Nb = null;
      a();
    };
    return function(a) {
      d.next = {Nb:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    aa.setTimeout(a, 0);
  };
}
;function wg(a) {
  tg(function() {
    throw a;
  });
}
function xg(a, b) {
  yg || (tg(zg), yg = !0);
  Ag.push(new Bg(a, b));
}
var yg = !1, Ag = [];
function zg() {
  for (;Ag.length;) {
    var a = Ag;
    Ag = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.ra.call(c.scope);
      } catch (d) {
        wg(d);
      }
    }
  }
  yg = !1;
}
function Bg(a, b) {
  this.ra = a;
  this.scope = b;
}
;function Cg(a, b) {
  this.X = Dg;
  this.ka = void 0;
  this.Z = this.ca = null;
  this.cb = this.Jb = !1;
  this.Mb = [];
  Eg(this, Error("created"));
  this.Zb = 0;
  try {
    var c = this;
    a.call(b, function(a) {
      Fg(c, Gg, a);
    }, function(a) {
      Fg(c, Hg, a);
    });
  } catch (d) {
    Fg(this, Hg, d);
  }
}
var Dg = 0, Gg = 2, Hg = 3;
Cg.prototype.Sa = function(a, b, c) {
  Eg(this, Error("then"));
  return Ig(this, da(a) ? a : null, da(b) ? b : null, c);
};
rg(Cg);
Cg.prototype.cancel = function(a) {
  this.X == Dg && xg(function() {
    var b = new Jg(a);
    Kg(this, b);
  }, this);
};
function Kg(a, b) {
  if (a.X == Dg) {
    if (a.ca) {
      var c = a.ca;
      if (c.Z) {
        for (var d = 0, e = -1, f = 0, h;h = c.Z[f];f++) {
          if (h = h.Ta) {
            if (d++, h == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.X == Dg && 1 == d ? Kg(c, b) : (d = c.Z.splice(e, 1)[0], Lg(c, d, Hg, b)));
      }
    } else {
      Fg(a, Hg, b);
    }
  }
}
function Mg(a, b) {
  a.Z && a.Z.length || a.X != Gg && a.X != Hg || Ng(a);
  a.Z || (a.Z = []);
  a.Z.push(b);
}
function Ig(a, b, c, d) {
  var e = {Ta:null, cc:null, dc:null};
  e.Ta = new Cg(function(a, h) {
    e.cc = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (n) {
        h(n);
      }
    } : a;
    e.dc = c ? function(b) {
      try {
        var e = c.call(d, b);
        void 0 === e && b instanceof Jg ? h(b) : a(e);
      } catch (n) {
        h(n);
      }
    } : h;
  });
  e.Ta.ca = a;
  Mg(a, e);
  return e.Ta;
}
Cg.prototype.ec = function(a) {
  this.X = Dg;
  Fg(this, Gg, a);
};
Cg.prototype.fc = function(a) {
  this.X = Dg;
  Fg(this, Hg, a);
};
function Fg(a, b, c) {
  if (a.X == Dg) {
    if (a == c) {
      b = Hg, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (sg(c)) {
        a.X = 1;
        c.Sa(a.ec, a.fc, a);
        return;
      }
      if (ea(c)) {
        try {
          var d = c.then;
          if (da(d)) {
            Og(a, c, d);
            return;
          }
        } catch (e) {
          b = Hg, c = e;
        }
      }
    }
    a.ka = c;
    a.X = b;
    Ng(a);
    b != Hg || c instanceof Jg || Pg(a, c);
  }
}
function Og(a, b, c) {
  function d(b) {
    f || (f = !0, a.fc(b));
  }
  function e(b) {
    f || (f = !0, a.ec(b));
  }
  a.X = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
}
function Ng(a) {
  a.Jb || (a.Jb = !0, xg(a.Bc, a));
}
Cg.prototype.Bc = function() {
  for (;this.Z && this.Z.length;) {
    var a = this.Z;
    this.Z = [];
    for (var b = 0;b < a.length;b++) {
      this.Zb++, Lg(this, a[b], this.X, this.ka);
    }
  }
  this.Jb = !1;
};
function Lg(a, b, c, d) {
  if (c == Gg) {
    b.cc(d);
  } else {
    for (;a && a.cb;a = a.ca) {
      a.cb = !1;
    }
    b.dc(d);
  }
}
function Eg(a, b) {
  if (ba(b.stack)) {
    var c = b.stack.split("\n", 4)[3], d = b.message, d = d + Array(11 - d.length).join(" ");
    a.Mb.push(d + c);
  }
}
function Pg(a, b) {
  a.cb = !0;
  xg(function() {
    if (a.cb) {
      if (b && ba(b.stack) && a.Mb.length) {
        for (var c = ["Promise trace:"], d = a;d;d = d.ca) {
          for (var e = a.Zb;0 <= e;e--) {
            c.push(d.Mb[e]);
          }
          c.push("Value: [" + (d.X == Hg ? "REJECTED" : "FULFILLED") + "] \x3c" + String(d.ka) + "\x3e");
        }
        b.stack += "\n\n" + c.join("\n");
      }
      Qg.call(null, b);
    }
  });
}
var Qg = wg;
function Jg(a) {
  Jg.gc(this, "constructor", a);
}
ka(Jg, ma);
Jg.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Rg(a, b) {
  this.gb = [];
  this.bc = a;
  this.$b = b || null;
  this.Ia = this.xa = !1;
  this.ka = void 0;
  this.Lb = this.hc = this.kb = !1;
  this.hb = 0;
  this.ca = null;
  this.lb = 0;
  this.Ib = null;
  if (Error.captureStackTrace) {
    var c = {stack:""};
    Error.captureStackTrace(c, Rg);
    "string" == typeof c.stack && (this.Ib = c.stack.replace(/^[^\n]*\n/, ""));
  }
}
Rg.prototype.cancel = function(a) {
  if (this.xa) {
    this.ka instanceof Rg && this.ka.cancel();
  } else {
    if (this.ca) {
      var b = this.ca;
      delete this.ca;
      a ? b.cancel(a) : (b.lb--, 0 >= b.lb && b.cancel());
    }
    this.bc ? this.bc.call(this.$b, this) : this.Lb = !0;
    if (!this.xa) {
      a = new Sg;
      if (this.xa) {
        if (!this.Lb) {
          throw new Tg;
        }
        this.Lb = !1;
      }
      Ug(this, a);
      this.xa = !0;
      this.ka = a;
      this.Ia = !0;
      Vg(this);
    }
  }
};
Rg.prototype.Yb = function(a, b) {
  this.kb = !1;
  this.xa = !0;
  this.ka = b;
  this.Ia = !a;
  Vg(this);
};
function Ug(a, b) {
  a.Ib && ea(b) && b.stack && /^[^\n]+(\n   [^\n]+)+/.test(b.stack) && (b.stack = b.stack + "\nDEFERRED OPERATION:\n" + a.Ib);
}
function Wg(a, b, c) {
  a.gb.push([b, c, void 0]);
  a.xa && Vg(a);
}
Rg.prototype.Sa = function(a, b, c) {
  var d, e, f = new Cg(function(a, b) {
    d = a;
    e = b;
  });
  Wg(this, d, function(a) {
    a instanceof Sg ? f.cancel() : e(a);
  });
  return f.Sa(a, b, c);
};
rg(Rg);
function Xg(a) {
  return oa(a.gb, function(a) {
    return da(a[1]);
  });
}
function Vg(a) {
  if (a.hb && a.xa && Xg(a)) {
    var b = a.hb, c = Yg[b];
    c && (aa.clearTimeout(c.eb), delete Yg[b]);
    a.hb = 0;
  }
  a.ca && (a.ca.lb--, delete a.ca);
  for (var b = a.ka, d = c = !1;a.gb.length && !a.kb;) {
    var e = a.gb.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.Ia ? h : f) {
      try {
        var k = f.call(e || a.$b, b);
        void 0 !== k && (a.Ia = a.Ia && (k == b || k instanceof Error), a.ka = b = k);
        sg(b) && (d = !0, a.kb = !0);
      } catch (l) {
        b = l, a.Ia = !0, Ug(a, b), Xg(a) || (c = !0);
      }
    }
  }
  a.ka = b;
  d && (k = ja(a.Yb, a, !0), d = ja(a.Yb, a, !1), b instanceof Rg ? (Wg(b, k, d), b.hc = !0) : b.Sa(k, d));
  c && (b = new Zg(b), Yg[b.eb] = b, a.hb = b.eb);
}
function Tg() {
  ma.call(this);
}
ka(Tg, ma);
Tg.prototype.message = "Deferred has already fired";
Tg.prototype.name = "AlreadyCalledError";
function Sg() {
  ma.call(this);
}
ka(Sg, ma);
Sg.prototype.message = "Deferred was canceled";
Sg.prototype.name = "CanceledError";
function Zg(a) {
  this.eb = aa.setTimeout(ja(this.Jc, this), 0);
  this.Ac = a;
}
Zg.prototype.Jc = function() {
  delete Yg[this.eb];
  throw this.Ac;
};
var Yg = {};
if (Sf || Rf) {
  var $g;
  if ($g = Rf) {
    $g = Rf && 9 <= dg;
  }
  $g || Sf && bg("1.9.1");
}
Rf && bg("9");
var ah;
function bh(a) {
  if (a ? a.Wb : a) {
    return!0;
  }
  var b;
  b = bh[m(null == a ? null : a)];
  if (!b && (b = bh._, !b)) {
    throw w("Handler.active?", a);
  }
  return b.call(null, a);
}
function ch(a) {
  if (a ? a.Gb : a) {
    return a.Gb();
  }
  var b;
  b = ch[m(null == a ? null : a)];
  if (!b && (b = ch._, !b)) {
    throw w("Buffer.full?", a);
  }
  return b.call(null, a);
}
;var dh, fh = function eh(b) {
  "undefined" === typeof dh && (dh = function(b, d, e) {
    this.ga = b;
    this.Kb = d;
    this.Fc = e;
    this.n = 0;
    this.g = 393216;
  }, dh.Na = !0, dh.Ma = "cljs.core.async.impl.ioc-helpers/t13287", dh.Za = function(b, d) {
    return C(d, "cljs.core.async.impl.ioc-helpers/t13287");
  }, dh.prototype.Wb = function() {
    return!0;
  }, dh.prototype.C = function() {
    return this.Fc;
  }, dh.prototype.D = function(b, d) {
    return new dh(this.ga, this.Kb, d);
  });
  return new dh(b, eh, null);
};
function gh(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].Hb(), b;
    }
    if (v) {
      throw b;
    }
    return null;
  }
}
function hh(a, b) {
  var c = b.yc(fh(function(b) {
    a[2] = b;
    a[1] = 5;
    return gh(a);
  }));
  return r(c) ? (a[2] = fb(c), a[1] = 5, $e) : null;
}
function ih(a, b) {
  var c = a[6];
  null != b && c.zc(b, fh(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Hb();
  return c;
}
function jh(a) {
  for (;;) {
    var b = a[4], c = df.d(b), d = mf.d(b), e = a[5];
    if (r(function() {
      var a = e;
      return r(a) ? s(b) : a;
    }())) {
      throw e;
    }
    if (r(function() {
      var a = e;
      return r(a) ? (a = c, r(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = T.e(b, df, null, O([mf, null], 0));
      break;
    }
    if (r(function() {
      var a = e;
      return r(a) ? s(c) && s(cf.d(b)) : a;
    }())) {
      a[4] = qf.d(b);
    } else {
      if (r(function() {
        var a = e;
        return r(a) ? (a = s(c)) ? cf.d(b) : a : a;
      }())) {
        a[1] = cf.d(b);
        a[4] = T.b(b, cf, null);
        break;
      }
      if (r(function() {
        var a = s(e);
        return a ? cf.d(b) : a;
      }())) {
        a[1] = cf.d(b);
        a[4] = T.b(b, cf, null);
        break;
      }
      if (s(e) && s(cf.d(b))) {
        a[1] = of.d(b);
        a[4] = qf.d(b);
        break;
      }
      if (v) {
        throw Error([y("Assert failed: "), y("No matching clause"), y("\n"), y(He.e(O([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;function kh(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function lh(a, b, c, d) {
  this.head = a;
  this.p = b;
  this.length = c;
  this.c = d;
}
lh.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.p];
  this.c[this.p] = null;
  this.p = (this.p + 1) % this.c.length;
  this.length -= 1;
  return a;
};
lh.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function mh(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
lh.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.p < this.head ? (kh(this.c, this.p, a, 0, this.length), this.p = 0, this.head = this.length, this.c = a) : this.p > this.head ? (kh(this.c, this.p, a, 0, this.c.length - this.p), kh(this.c, 0, a, this.c.length - this.p, this.head), this.p = 0, this.head = this.length, this.c = a) : this.p === this.head ? (this.head = this.p = 0, this.c = a) : null;
};
function nh(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.d ? b.d(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function oh(a) {
  if (!(0 < a)) {
    throw Error([y("Assert failed: "), y("Can't create a ring buffer of size 0"), y("\n"), y(He.e(O([Dc(new E(null, "\x3e", "\x3e", -1640531465, null), new E(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new lh(0, 0, 0, Array(a));
}
function ph(a, b) {
  this.O = a;
  this.Hc = b;
  this.n = 0;
  this.g = 2;
}
ph.prototype.K = function() {
  return this.O.length;
};
ph.prototype.Gb = function() {
  return this.O.length === this.Hc;
};
ph.prototype.xc = function() {
  return this.O.pop();
};
function qh(a, b) {
  if (!s(ch(a))) {
    throw Error([y("Assert failed: "), y("Can't add to a full buffer"), y("\n"), y(He.e(O([Dc(new E(null, "not", "not", -1640422260, null), Dc(new E("impl", "full?", "impl/full?", -1337857039, null), new E(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.O.unshift(b);
}
;var rh = null, sh = oh(32), th = !1, uh = !1;
function vh() {
  th = !0;
  uh = !1;
  for (var a = 0;;) {
    var b = sh.pop();
    if (null != b && (b.o ? b.o() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  th = !1;
  return 0 < sh.length ? wh.o ? wh.o() : wh.call(null) : null;
}
"undefined" !== typeof MessageChannel && (rh = new MessageChannel, rh.port1.onmessage = function() {
  return vh();
});
function wh() {
  var a = uh;
  if (r(a ? th : a)) {
    return null;
  }
  uh = !0;
  return "undefined" !== typeof MessageChannel ? rh.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(vh) : v ? setTimeout(vh, 0) : null;
}
function xh(a) {
  mh(sh, a);
  wh();
}
;var yh, Ah = function zh(b) {
  "undefined" === typeof yh && (yh = function(b, d, e) {
    this.G = b;
    this.ic = d;
    this.Ec = e;
    this.n = 0;
    this.g = 425984;
  }, yh.Na = !0, yh.Ma = "cljs.core.async.impl.channels/t13276", yh.Za = function(b, d) {
    return C(d, "cljs.core.async.impl.channels/t13276");
  }, yh.prototype.pb = function() {
    return this.G;
  }, yh.prototype.C = function() {
    return this.Ec;
  }, yh.prototype.D = function(b, d) {
    return new yh(this.G, this.ic, d);
  });
  return new yh(b, zh, null);
};
function Bh(a, b) {
  this.ac = a;
  this.G = b;
}
function Ch(a) {
  return bh(a.ac);
}
function Dh(a, b, c, d, e, f) {
  this.Ra = a;
  this.ab = b;
  this.fb = c;
  this.$a = d;
  this.O = e;
  this.closed = f;
}
Dh.prototype.Hb = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.Ra.pop();
      if (null != a) {
        xh(function(a) {
          return function() {
            return a.d ? a.d(null) : a.call(null, null);
          };
        }(a.ga, a, this));
      } else {
        break;
      }
    }
  }
  return null;
};
Dh.prototype.yc = function(a) {
  if (null != this.O && 0 < Q(this.O)) {
    return a = a.ga, Ah(this.O.xc());
  }
  for (;;) {
    var b = this.fb.pop();
    if (null != b) {
      var c = b.ac, d = b.G, e = c.ga;
      a = a.ga;
      xh(function(a) {
        return function() {
          return a.d ? a.d(!0) : a.call(null, !0);
        };
      }(e, a, c, d, b, this));
      return Ah(d);
    }
    if (this.closed) {
      return a = a.ga, Ah(null);
    }
    64 < this.ab ? (this.ab = 0, nh(this.Ra, bh)) : this.ab += 1;
    if (!(1024 > this.Ra.length)) {
      throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending takes are allowed on a single channel.")].join("")), y("\n"), y(He.e(O([Dc(new E(null, "\x3c", "\x3c", -1640531467, null), Dc(new E(null, ".-length", ".-length", 1395928862, null), new E(null, "takes", "takes", -1530407291, null)), new E("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    mh(this.Ra, a);
    return null;
  }
};
Dh.prototype.zc = function(a, b) {
  if (null == a) {
    throw Error([y("Assert failed: "), y("Can't put nil in on a channel"), y("\n"), y(He.e(O([Dc(new E(null, "not", "not", -1640422260, null), Dc(new E(null, "nil?", "nil?", -1637150201, null), new E(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  var c = this.closed;
  if (c) {
    Ah(!c);
  } else {
    for (;;) {
      var d = this.Ra.pop();
      if (null != d) {
        var e = b.ga;
        xh(function(b) {
          return function() {
            return b.d ? b.d(a) : b.call(null, a);
          };
        }(d.ga, e, d, c, this));
      } else {
        if (null == this.O || this.O.Gb()) {
          64 < this.$a ? (this.$a = 0, nh(this.fb, Ch)) : this.$a += 1;
          if (!(1024 > this.fb.length)) {
            throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending puts are allowed on a single channel."), y(" Consider using a windowed buffer.")].join("")), y("\n"), y(He.e(O([Dc(new E(null, "\x3c", "\x3c", -1640531467, null), Dc(new E(null, ".-length", ".-length", 1395928862, null), new E(null, "puts", "puts", -1637078787, null)), new E("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
          }
          mh(this.fb, new Bh(b, a));
          break;
        }
        e = b.ga;
        qh(this.O, a);
      }
      Ah(!0);
      break;
    }
  }
};
function Eh(a) {
  return new Dh(oh(32), 0, oh(32), 0, a, !1);
}
;var Fh = function() {
  function a(a) {
    for (;;) {
      if (0.5 > Math.random() && 15 > a) {
        a += 1;
      } else {
        return a;
      }
    }
  }
  function b() {
    return c.d(0);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.d = a;
  return c;
}();
function Gh(a, b, c) {
  this.key = a;
  this.G = b;
  this.forward = c;
  this.n = 0;
  this.g = 2155872256;
}
Gh.prototype.s = function(a, b, c) {
  return Be(b, $, "[", " ", "]", c, this);
};
Gh.prototype.F = function() {
  return Pa(Pa(M, this.G), this.key);
};
var Hh = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var h = 0;;) {
      if (h < c.length) {
        c[h] = null, h += 1;
      } else {
        break;
      }
    }
    return new Gh(a, b, c);
  }
  function b(a) {
    return c.b(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.b = a;
  return c;
}(), Ih = function() {
  function a(a, b, c, h) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var k = a.forward[c];
          if (r(k)) {
            if (k.key < b) {
              a = k;
            } else {
              break a;
            }
          } else {
            break a;
          }
        }
        a = void 0;
      }
      null != h && (h[c] = a);
      c -= 1;
    }
  }
  function b(a, b, f) {
    return c.j(a, b, f, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.j = a;
  return c;
}();
function Jh(a, b) {
  this.ya = a;
  this.aa = b;
  this.n = 0;
  this.g = 2155872256;
}
Jh.prototype.s = function(a, b, c) {
  return Be(b, function() {
    return function(a) {
      return Be(b, $, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
Jh.prototype.F = function() {
  return function(a) {
    return function c(d) {
      return new W(null, function() {
        return function() {
          return null == d ? null : P(new X(null, 2, 5, Z, [d.key, d.G], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.ya.forward[0]);
};
Jh.prototype.put = function(a, b) {
  var c = Array(15), d = Ih.j(this.ya, a, this.aa, c).forward[0];
  if (null != d && d.key === a) {
    return d.G = b;
  }
  d = Fh.o();
  if (d > this.aa) {
    for (var e = this.aa + 1;;) {
      if (e <= d + 1) {
        c[e] = this.ya, e += 1;
      } else {
        break;
      }
    }
    this.aa = d;
  }
  for (d = Hh.b(a, b, Array(d));;) {
    return 0 <= this.aa ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
Jh.prototype.remove = function(a) {
  var b = Array(15), c = Ih.j(this.ya, a, this.aa, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.aa) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.aa && null == this.ya.forward[this.aa]) {
        this.aa -= 1;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function Kh(a) {
  for (var b = Lh, c = b.ya, d = b.aa;;) {
    if (0 > d) {
      return c === b.ya ? null : c;
    }
    var e;
    a: {
      for (e = c;;) {
        e = e.forward[d];
        if (null == e) {
          e = null;
          break a;
        }
        if (e.key >= a) {
          break a;
        }
      }
      e = void 0;
    }
    null != e ? (d -= 1, c = e) : d -= 1;
  }
}
var Lh = new Jh(Hh.d(0), 0);
function Mh() {
  var a = (new Date).valueOf() + 30, b = Kh(a), c = r(r(b) ? b.key < a + 10 : b) ? b.G : null;
  if (r(c)) {
    return c;
  }
  var d = Eh(null);
  Lh.put(a, d);
  setTimeout(function(a, b, c) {
    return function() {
      Lh.remove(c);
      return a.Hb();
    };
  }(d, c, a, b), 30);
  return d;
}
;var Nh = function() {
  function a(a) {
    a = D.a(a, 0) ? null : a;
    return Eh("number" === typeof a ? new ph(oh(a), a) : a);
  }
  function b() {
    return c.d(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.d = a;
  return c;
}();
(function Oh(b) {
  "undefined" === typeof ah && (ah = function(b, d, e) {
    this.ga = b;
    this.Kb = d;
    this.Dc = e;
    this.n = 0;
    this.g = 393216;
  }, ah.Na = !0, ah.Ma = "cljs.core.async/t10605", ah.Za = function(b, d) {
    return C(d, "cljs.core.async/t10605");
  }, ah.prototype.Wb = function() {
    return!0;
  }, ah.prototype.C = function() {
    return this.Dc;
  }, ah.prototype.D = function(b, d) {
    return new ah(this.ga, this.Kb, d);
  });
  return new ah(b, Oh, null);
})(function() {
  return null;
});
var Ph = aa.navigator ? aa.navigator.userAgent : "";
function Qh(a) {
  return-1 != Ph.indexOf(a);
}
;var Rh = {}, Sh = !(Qh("iPad") || Qh("Android") && !Qh("Mobile") || Qh("Silk")) && (Qh("iPod") || Qh("iPhone") || Qh("Android")), Th = new p(null, 7, [kf, !1, nf, 0, bf, 0, rf, 0, ef, 0, Ze, 312, jf, new X(null, 1, 5, Z, [new p(null, 4, [rf, 0, tf, 900, Xe, 900, ff, 200], null)], null)], null);
function Uh(a, b) {
  return T.e(nd.b(Th, new X(null, 1, 5, Z, [jf], null), function(a) {
    return $c.a(function(a) {
      return T.b(a, rf, b);
    }, a);
  }), rf, b, O([ef, b, kf, !0], 0));
}
if (!r(Rh.hasOwnProperty("flap_state"))) {
  var Vh = Me.d(Th)
}
function Wh(a, b) {
  var c = jc(b) ? U.a(ue, b) : b, d = S.a(c, rf), c = S.a(c, tf);
  return Math.floor(c + -0.15 * (a - d));
}
function Xh(a) {
  var b = jc(a) ? U.a(ue, a) : a, c = S.a(b, jf);
  return r(Wc(function(a, b, c) {
    return function(a) {
      var b;
      b = jc(a) ? U.a(ue, a) : a;
      b = S.a(b, Xe);
      if (b = 269 >= b && 212 < b + 86) {
        b = jc(c) ? U.a(ue, c) : c, b = S.a(b, Ze), a = jc(a) ? U.a(ue, a) : a, a = S.a(a, ff), b = !(a < b && a + 158 > b + 41);
      }
      (a = b) || (a = jc(c) ? U.a(ue, c) : c, a = 520 <= S.a(a, Ze));
      return a;
    };
  }(a, b, b, c), c)) ? T.b(b, kf, !1) : b;
}
function Yh(a, b) {
  return new p(null, 4, [rf, a, tf, b, Xe, b, ff, 60 + tc(283)], null);
}
function Zh(a) {
  var b = jc(a) ? U.a(ue, a) : a, c = S.a(b, xf), d = S.a(b, jf), e = $c.a(function(a, b, c, d) {
    return function(a) {
      return T.b(a, Xe, Wh(d, a));
    };
  }(a, b, b, c, d), d);
  a = pc.a(Xe, id(function() {
    return function(a) {
      return-86 < Xe.d(a);
    };
  }(e, a, b, b, c, d), e));
  return T.b(b, jf, 3 > Q(a) ? Ub.a(a, Yh(c, 324 + Xe.d(Tb(a)))) : a);
}
function $h(a, b) {
  var c;
  c = T.e(b, xf, a, O([yf, a - ef.d(b)], 0));
  c = jc(c) ? U.a(ue, c) : c;
  var d = S.a(c, nf), e = S.a(c, Ze), f = S.a(c, bf), h = S.a(c, yf);
  0 < d ? (d = e - (f - 0.05 * h), c = T.b(c, Ze, 520 < d ? 520 : d)) : c = T.b(c, Ze, 312 + 30 * Math.sin(yf.d(c) / 300));
  c = Xh(Zh(c));
  c = jc(c) ? U.a(ue, c) : c;
  d = S.a(c, rf);
  e = S.a(c, xf);
  d = Math.abs(Math.floor((-0.15 * (e - d) - 544) / 324)) - 4;
  return T.b(c, hf, 0 > d ? 0 : d);
}
function ai(a) {
  a = jc(a) ? U.a(ue, a) : a;
  var b = S.a(a, nf), c = S.a(a, xf);
  return T.e(a, nf, b + 1, O([ef, c, bf, 19], 0));
}
function bi(a, b) {
  var c = jc(a) ? U.a(ue, a) : a;
  S.a(c, xf);
  var c = jc(b) ? U.a(ue, b) : b, d = S.a(c, ff);
  return T.e(c, sf, d, O([Gf, 561 - d - 158], 0));
}
function ci(a) {
  return nd.b(a, new X(null, 1, 5, Z, [jf], null), function(b) {
    return $c.a(Zc.a(bi, a), b);
  });
}
function di(a) {
  return[y(a), y("px")].join("");
}
function ei(a) {
  var b = jc(a) ? U.a(ue, a) : a;
  a = S.a(b, Gf);
  var c = S.a(b, sf);
  S.a(b, tf);
  b = S.a(b, Xe);
  return new X(null, 3, 5, Z, [Ye, new X(null, 2, 5, Z, [Df, new p(null, 1, [lf, new p(null, 2, [wf, di(b), Ef, c], null)], null)], null), new X(null, 2, 5, Z, [zf, new p(null, 1, [lf, new p(null, 2, [wf, di(b), Ef, a], null)], null)], null)], null);
}
var gi = function fi(b) {
  b = Oe.a(Vh, Zc.a($h, b));
  if (r(kf.d(b))) {
    var c = Nh.d(1);
    xh(function(b, c) {
      return function() {
        var f = function() {
          return function(b) {
            return function() {
              function c(d) {
                for (;;) {
                  var e = function() {
                    try {
                      for (;;) {
                        var c = b(d);
                        if (!Fc(c, $e)) {
                          return c;
                        }
                      }
                    } catch (e) {
                      if (e instanceof Object) {
                        return d[5] = e, jh(d), $e;
                      }
                      if (v) {
                        throw e;
                      }
                      return null;
                    }
                  }();
                  if (!Fc(e, $e)) {
                    return e;
                  }
                }
              }
              function d() {
                var b = [null, null, null, null, null, null, null, null];
                b[0] = e;
                b[1] = 1;
                return b;
              }
              var e = null, e = function(b) {
                switch(arguments.length) {
                  case 0:
                    return d.call(this);
                  case 1:
                    return c.call(this, b);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              e.o = d;
              e.d = c;
              return e;
            }();
          }(function() {
            return function(b) {
              var c = b[1];
              if (5 === c) {
                return c = b, c[2] = b[2], c[1] = 4, $e;
              }
              if (4 === c) {
                var c = b[2], d = window.requestAnimationFrame(fi);
                b[7] = c;
                return ih(b, d);
              }
              return 3 === c ? (c = Mh(), hh(b, c)) : 2 === c ? (b[2] = null, b[1] = 4, $e) : 1 === c ? (b[1] = r(Sh) ? 2 : 3, $e) : null;
            };
          }(b, c), b, c);
        }(), h = function() {
          var c = f.o ? f.o() : f.call(null);
          c[6] = b;
          return c;
        }();
        return gh(h);
      };
    }(c, b));
    return c;
  }
  return null;
};
function hi() {
  return window.requestAnimationFrame(function(a) {
    Ne(Vh, Uh(fb(Vh), a));
    return gi(a);
  });
}
function ii(a) {
  var b = jc(a) ? U.a(ue, a) : a, c = S.a(b, jf), d = S.a(b, Ze), e = S.a(b, pf), f = S.a(b, kf), h = S.a(b, nf), k = S.a(b, xf), l = S.a(b, hf);
  return React.va.bb({onMouseDown:function(a, b, c, d, e, f) {
    return function(a) {
      return r(f) ? Oe.a(Vh, ai) : a.preventDefault();
    };
  }(a, b, c, d, e, f, h, k, l), className:"board"}, ec(l) ? React.va.Cc(ig(gg.e(O([new p(null, 1, [Bf, new X(null, 1, 5, Z, ["score"], null)], null), l], 0))), null) : React.va.Cc({className:"score"}, hg(l)), hg(s(f) ? new X(null, 3, 5, Z, [uf, new p(null, 1, [vf, hi], null), 0 < h ? "RESTART" : "START"], null) : new X(null, 1, 5, Z, [Af], null)), function() {
    var a = $c.a(ei, c);
    return ec(a) ? React.va.bb(ig(gg.e(O([ae, a], 0))), null) : React.va.bb({}, hg(a));
  }(), React.va.bb({style:{top:di(d)}, className:"flappy"}), React.va.bb({style:{"background-position-x":di(e)}, className:"scrolling-border"}));
}
var ji = function(a) {
  return function(b) {
    return React.Wc(ii(b), a);
  };
}(document.getElementById("board-area"));
vb(Vh, af, function(a, b, c, d) {
  a = jc(d) ? U.a(ue, d) : d;
  b = S.a(a, xf);
  a = T.b(a, pf, (Math.floor(0 + -0.15 * b) % 23 + 23) % 23);
  return ji(ci(a));
});
r(Sh) && !r(Rh.hasOwnProperty("touch_listener")) && document.getElementById("board-area").addEventListener("touchstart", function(a) {
  return r(kf.d(fb(Vh))) ? (a.preventDefault(), Oe.a(Vh, ai)) : hi();
});
Ne(Vh, fb(Vh));

})();
