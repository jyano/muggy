st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype
st = cjs.Stage.prototype
h =  cjs.Shape.prototype
ct = cjs.Container.prototype
i = cjs.DisplayObject.prototype



ct.h =   function (x, y, c, C, l, opt) {var ct = this,
        h = cjs.h(x, y, c, C, l, opt).a2(ct)
    return h.drag()
}
$Bm = function (i) {  var bm
    if (O(i)) {
        if ($.iI(i)) {
            i = $(i)[0]
            _i = i
            bm = new cjs.Bitmap(i)
            return bm
        }
        bm = $Bm(i.i)
        if (i.al) {
            bm.al(i.al)
        }
        if (i.fl) {
            bm.fl(i.fl)
        }
        if (i.aF2) {
            bm.aF2(i.aF2)
        }
        return bm

    }
}
$St = function (a, b, c, d, e) {
    var g = G(arguments), st
    st = A(g[0]) ? new cjs.Stage(g[0][0]) :
        O(g[0]) ? new cjs.Stage($(g[0])[0]) :
            new cjs.Stage($.c(g[0], g[1], g[2], g[3], g[4]) [0])
    st.c = st.can = $(st.canvas)
    if (g.p) {
        st.can.dg()
    }
    if (!g.n) {

        st.can.A()
    }
    return st.t()
}
h.ss = h.l = function (a) {var h = this, gx = h.graphics, g, o
    if (S(a)) {
        this.C(a)
        return this.ss.apply(this, _.rest(arguments))
    }
    g = G(arguments)
    o = {
        l: g[0],
        caps: g[1],
        jts: g[2],
        mit: g[3],
        ignSc: false
    }
    o.l = N(o.l) ? o.l : 4
    if (o.caps == 'r') {
        o.caps = 'round'
    }
    if (o.caps == 's') {
        o.caps = 'square'
    }
    if (o.caps == 'b') {
        o.caps = 'butt'
    }
    if (o.mit == 'r') {
        o.mit = 'round'
    }
    if (o.mit == 'm') {
        o.mit = 'miter'
    }
    if (o.mit == 'b') {
        o.mit = 'bevel'
    }
    o.jts = o.jts || 0
    if (U(o.mit)) {
        o.mit = 100
    }
    if (g.n) {
        o.ignSc = true
    }
    gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)
    return h

    old=function(){
        h.l = h.ss = function (l, b, c) {var h = this, gx = h.graphics;
            gx.ss(l || 1, b, c)
            return h
        }
    }
}
ct.bm = function () {

    var ct = this, g = G(arguments), o, bmp

    o = N(g.s) ?
    {i: g.f, sc: g.s, fn: g.t} :
    {i: g.f, fn: g.s}
    o.sc = N(o.sc) ? o.sc : 1

    if (_.iDU(o.i)) {
        o.i = $.i(o.i)
    }


    if (O(o.i)) {
        bmp = $Bm(o.i).a2(ct)
        if (o.fn) {
            o.fn(bmp)
        }
        return ct
    }
    $.i(o.i, function (e, i) {
        bmp = $Bm(i)
        bmp.a2(ct)
        bmp.rC()
        bmp.sXY(o.sc).a2(ct)
        //bm.XY( that.W()/2, that.H()/2 )
        // works with stage i guess.. but fucks with 'container' - cant check bounds
        if (g.n) {
            bmp.XY(-1000)
        }
        if (o.fn) {
            o.fn(bmp)
        }
    })
    return ct

}
ct.cir = function (c, r, x, y) {
    var ct = this
    return cjs.cir(c, r, x, y)
        .a2(ct)
    //ct.cir = function (x, y, r, c, C, l, opt) {return this.h(x, y, c, C, l, opt).dc(r)}
}
cjs.cir=  function (c, r, x, y) {
    if (!S(c)) {y = x;x = r;r = c;c = 'y'}
    y = N(y,0)
    x = N(x,0)
    r =  N(r, 50)

    return $h().c(c).dc(x, y, r)

}
h.col = h.fs = function () {
    this.graphics.fs.apply(
        this.graphics, arguments)
    return this
}
h.sC = function () {
    this.graphics.sC.apply(this.graphics, arguments)
    return this
}
h.C = h.s = function (a, b, c, d, e, f) {
    var h = this, gx = h.graphics
    if (N(a)) {
        gx.s((a > 0 && a < 1) ? cjs.rgb(0, 0, 0, a) : cjs.rgb(a, b, c, d))
    }
    else if (S(a)) {

        gx.s(oO('c', a))


    }

    else {
        gx.s(a, b, c, d, e)
    }
    return h
}
h.c = h.f = function (a, b, c, d, e) {
    var h = this, gx = h.graphics

    if (N(a)) {


        gx.f((a > 0 && a < 1) ? cjs.rgb(0, 0, 0, a) : cjs.rgb(a, b, c, d))
    }

    else if (S(a)) {

        gx.f(oO('c', a))

    }

    else {
        gx.f(a, b, c, d, e)
    }

    return h
}
h.cir =  function (x, y, r, c, C, l) {//= h.circle
    var h = this, gx = h.graphics,
        g = G(arguments), o   //h.ef().es()

    if (O(g[0]) && A(g[1])) {

        _.e(g[1], function (c) {

            h.cir(_.extend(c, g[0]))

        })
        return h
    }

    o = O(g[0]) ? g[0]
        : N(g[2]) ? {x: g[0], y: g[1], r: g[2], c: g[3], C: g[4], l: g[5]}
        : N(g[1]) ? {x: g[0], y: g[1], r: 50, c: g[2], C: g[3], l: g[4]}
        : {x: 0, y: 0, r: g[0], c: g[1], C: g[2], l: g[3]}

    o.x = _.tN(o.x);
    o.y = _.tN(o.y);
    o.r = _.tN(o.r, 50)
    o.c = o.c || 'z';
    o.C = o.C || 'w'
    if (N(o.bf)) {
        o.bm = 'me'
    }

    h.c(o)
    if (o.bf) {
        h.bf('me', function () {
            h.dc(o)
        })
    } else {
        h.dc(o)
    }
    return h
} //h.circle=function(o){var h=this; h.c(o).dc(o); return h}
h.rec = h.rect = function (c, C, x, y, w, H, l) {
    var h = this, g = G(arguments)//h.rexx=
    o = O(c) ? c :
        S(C) ? {c: c, C: C, x: x, y: y, w: w, h: H, l: l} :
            S(c) ? {c: c, x: C, y: x, w: y, h: w, l: H} :
            {x: c, y: C, w: x, h: y, c: w, C: H}
    h.c(o)
    if (o.i) {
        h.bmF(o.i, fun);
        return
    }
    if (o.lf) {
        h.lf({
            c: o.c || 'z', C: o.C || 'w', s: 0, S: 1,
            x: o.x - o.w / 2,
            y: o.y - o.h / 2,
            X: o.x - o.w / 2,
            Y: o.y + o.h / 2
        })
    }
    h.dr2(o)
    return h
    function fun() {
        h.dr2(o)

        //   h.mt(  [o.x-o.w/2, o.y+o.h/2],   [o.x-o.w/2, o.y-o.h/2],    [o.x+o.w/2, o.y-o.h/2],  [o.x+o.w/2, o.y+o.h/2])
    }
}
q.fileload = function (func) {
    this.addEventListener("fileload", func)
    return this
}
q.complete = function (func) {
    this.addEventListener("complete", func)
    return this
}
q.manifest = function (manifest) {
    this.loadManifest(manifest)
    return this
}
q.mf = function () {
    this.loadManifest(cjs.mf.apply(null, arguments))
    return this

}
q.bm = function (img) {

    img = this.getResult(img)
    return $Bm(img)
}
cjs.handleFileLoad = function (e) {
    alert('cjs.handleFileLoad')
    if (e.item.type == "image") {
        images[e.item.id] = e.result
    }
}
cjs.mf =  function (a) {

    var g = G(arguments), mf = []
    _.e(g, function (v) {
        mf.push({src: _.src(v), id: v})
    })
    return mf
}//used
Q = function (imgs, func) {var q = cjs.lq()
    mf = []
    _.e(imgs, function (v) {
        mf.push({

            src: _.src(v),
            id: v

        })
    })
    q.manifest(mf)
    q.complete(function () {
        func(q)
    })

}




