st = cjs.Stage.prototype
ct = cjs.Container.prototype
ct.poly = function () {
    var ct = this // ?
    var h = ct.shape()
    h.poly.apply(h, arguments)
    return h
}
ct.bgI = ct.bg = function (i) {
    var ct = this;
    ct.bm(i, function (b) {
        ct.setChildIndex(b, 0)
    });
    return ct
}
ct.C = ct.bgC = function (c) {
    $(this.canvas).C(c);
    return this
}
h.bf= function(){var h=this, gx=h.graphics, g=G(arguments), tf
    if(!F(Q)){

        if(A(g.s)){g.s = cjs.m2d.apply(cjs, g.s)}
        tf = g.s || cjs.m2d(R(500),R(300))

        if(S(g.f)){
            gx.bf( Q.i(g.f), null, tf )
        }

        else if(O(g.f)){
            gx.bf(g.f, null, tf )
        }

        return h
    }
    if(S(g.f)){
        $.i(g.f, function(i){
            gx.bf(i[0])
            if(F(g.s)){ g.s(h) }
        })
    }
    else if(g.O_ && A(g.f.hs)){
        $.i(g.f.i|| 'me', function(i){
            gx.bf(i[0])
            if(F(g.s)){ _.e(g.f.hs, g.s) }
        })
    }
    else { gx.bf(g.f, null, g.s) }
    //h.ef()
    return h
}
ct.rec = function (c, W, H, x, y, a) {
    var ct = this, ct2, h,
        o = O(c) ? c :
            S(c) ? {c: c, w: W, h: H, x: x, y: y, a: a} :
                N(c) ? {w: c, h: W, x: H, y: x, a: y}
                    : {}


    oDef(o)

    ct2 = ct.ct()

    h = ct2.h()
        .XY(o.x, o.y)
        .rt(o.a)
        .c(o.c, o.C, o.l)


    if (N(o.o)) {

        //$l('op: '+ o.o)
        h.opacity(o.o)
    }

    if (o.rg) {
        h.rg(o.c, o.C)
    }
    if (o.lg) {
        h.lg(o.c, o.C)
    }
    if (o.bm) {
        h.bf('me', function () {
            h.dr2(o.w, o.h)
        })
    }
    else {
        h.dr2(o.w, o.h)
    }
    return ct2
}

ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
    var ct = this, o, cX


    st = this.getStage()
    cX = st.cen().x

    o = (N(x) && U(y)) ? {y: x, x: cX} :
        U(x) ? {x: cX, y: 100} :
        {t: t, f: f, c: c, x: x, y: y}

    var t = cjs.T(o.t, o.f, o.c, o.x, o.y)

    ct.A(t)

    return t
}
ct.cen = function () {
    return V(this.W() / 2, this.H() / 2)
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

    old = function () {
        ct.bm = function () {
            alert('ct.bm')
            var ct = this, g = G(arguments), o, bmp
            o = N(g[1]) ? {i: g[0], sc: g[1], fn: g[2]} : {i: g[0], fn: g[1]}
            o.sc = N(o.sc) ? o.sc : 1


            /*

             if (cjs.iDU(o.i)) {
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
             */

            return ct
        }

    }
}
ct.xCh = ct.removeAll = function () {
    this.e(function (ch) {
        ch.rm()
    });
    return this
}
ct.auCl = ct.noAutoClear = function () {
    this.autoClear = false
    return this
}
ct.clr = function () {
    var ct = this, arr = [];
    ct.ch(function (ch) {
        ch.rm()
    });
    return ct
}


ct.cir = function (x, y, r, c, C, l, opt) {
   alert('cir')
    return this.h(x, y, c, C, l, opt).dc(r)
}

ct.circ = function (c, r, x, y) {
    var ct = this
    return cjs.cir(c, r, x, y).a2(ct)
}


st.hW = function () {
    return this.W() / 2
}
st.hH = function () {
    return this.H() / 2
}
st.ab = st.abs = function (x, y) {
    this.can.abs(x, y);
    return this
}
st.Bm = function (i) {
    return $Bm(i).a2(this)
}
st.mO = function () {
    var g = G(arguments), st = this
    if (U(g[0]) || g[0]) {
        st.enableMouseOver(N(g[0]) ? g[0] : true)
    }
    else {
        st.enableMouseOver(false)
    }
    return st
}
st.eMO = function (data) {
    this.enableMouseOver(data);
    return this
}
st.m = function (ob) {
    //uses Point
    var st = this
    if (U(ob)) {
        return cjs.P(st.mouseX, st.mouseY)
    }
    if (O(ob)) {
        if (ob.d) {
            st.MD(ob.d)
        }
        ;
        if (ob.u) {
            st.MU(ob.u)
        }
        ;
        if (ob.m) {
            st.MM(ob.m)
        }
    }
    return st
}
st.mx = st.mX = function () {
    return this.m().x
}
st.my = st.mY = function () {
    return this.m().y
}


$Bm = function (i) {
    if (O(i)) {

        var bm


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
$T = function (a, f, c, x, y) {
    var t

    if (N(f)) {
        f = String(f) + "px Arial"


    }
    if (S(c)) {
        c = oO('c', c)
    }

    t = new cjs.Text(a, f, c)

    if (O(x)) {

        if (F(x.cen)) {
            x = x.cen()
        }
        y = x.y
        x = x.x
    }

    if (N(x)) {
        t.X(x)
    }
    if (N(y)) {
        t.Y(y)
    }


    return t
}
cjs.rmOb = function (ob) {
    alert('cjs.rmOb')
    if (cjs.iDO(ob)) {
        ob.rm()
    }
}
cjs.shad = function (color, x, y, blur) {
    if (color == '-') {
        return new cjs.Shadow(null, 0, 0, 0)
    }
    color = S(color) ? color : 'a'
    blur = N(blur) ? blur : 10
    x = N(x) ? x : 0
    y = N(y) ? y : 0
    var shad = new cjs.Shadow(oO('c', color), x, y, blur)
    return shad
}// = cjs.shadow
cjs.T = cjs.text = function (text, font, color, x, y) {

    x = N(x) ? x : 600
    y = N(y) ? y : 100

//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }

    if (N(font)) {
        font = font + 'px Arial'
    }
    font = font || '50px Arial'
    color = color || 'y'

    textOb = new createjs.Text(text, font, oO('c', color))
    textOb.regX = textOb.W() / 2
    textOb.XY(x, y)


    return textOb
}

cjs.loadQueue = cjs.lq = function (mf, func) {

    var q = new cjs.LoadQueue(true)

    if (A(mf)) {
        q.loadManifest(cjs.mf.apply(null, mf))
    }

    if (F(func)) {
        q.complete(function () {
            func(function (img) {
                return q.getResult(img)
            })
        })
    }
    return q
}
q = cjs.LoadQueue.prototype

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

function probUnused() {
    cjs.makeManifest = cjs.makeMan = function (a) {
        alert('cjs.makeMan')
        return cjs.manifest.apply(null, _.m(a.images, function (i) {
                return Graphics.fromSource(i)
            })
        )
    }
}
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


//shape
cjs.circ = cjs.circle = function (r, c) {
    if (!N(r)) {
        c = r;
        r = 8
    }
    c = oO('c', c || 'z')
    return cjs.h().c(c).dc(r)
}
cjs.cir = function (c, r, x, y) {
    if (!S(c)) {
        y = x;
        x = r;
        r = c;
        c = 'y'
    }
    y = _.tN(y)
    x = _.tN(x)
    r = _.tN(r, 50)
    return cjs.h().c(c).dc(x, y, r)
}
cjs.diamond = function self(width, height, fc, sc) {

    fc = fc || 'green'
    sc = sc || 'white'

    width = width || 100
    height = height || width
    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth, 0).lt(0, halfheight)
        .lt(halfwidth, 0).lt(0, -halfheight)

    return h
}
oDef = function (o) {
    o = o || {}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.a = N(o.a, 0)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.w = N(o.w, 50)
    o.h = N(o.h, 50)
    return o
}
h.z = h.clr = function () {
    this.graphics.clear();
    return this
}
gx.fC = gx.fs = function (c, C, l) {
    var gx = this
    gx.f(oO('c', c || 'z'))
    gx.s(oO('c', C || null))
    gx.ss(N(l) ? l : 2)
    return gx
}
h.col = h.fs = function () {
    this.graphics.fs.apply(
        this.graphics, arguments)
    return this
}
gx.sC = function (s, w) {
    var gx = this

    w = N(w) ? w : 2

    s = O(s) ? s : oO('c', s || null)

    gx.s(s)

    gx.ss(w)

    return gx
}
h.sC = function () {
    this.graphics.sC.apply(this.graphics, arguments)
    return this
}


h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {
        h.l(l)
    }
    return h

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
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics,
        g = _.toArray(arguments), o

    o = O(g[0]) ? g[0] :
        g[0] == '*' ? {c: '*'} :
            g[0] == '**' ? {c: '**'} :
                g[0] == '*' ? {c: '***'} :
                    U(g[0]) ? {c: 'z', C: 'w', l: 6} :
                        N(g[1]) ? {c: g[0], l: g[1]} :
                            N(g[0]) ? {l: g[0], C: g[1]} ://?
                            {c: g[0], C: g[1], l: g[2]}


    if (A(o.c)) {
        if (N(o.c[1])) {
            o.l = o.c[1];
            o.c = o.c[0]
        }
        else if (N(o.c[0])) {
            o.l = o.c[0];
            o.C = o.c[1]
        }
        else {
            o.l = o.c[2];
            o.C = o.c[1];
            o.c = o.c[0]
        }
    }
    if (A(o.C)) {
        o.l = o.C[1];
        o.C = o.C[0]
    }

    if (o.c == 0) {
        gx.f(null);
        o.c = 'X'
    }
    if (o.C == 0) {
        gx.s(null);
        o.C = 'X'
    }
    if (o.c == 00) {
        gx.f(null);
        gx.s(null);
        o.c = 'X';
        o.C = 'X'
    }
    if (o.c == '*') {
        o.c = $r()
    }
    if (o.C == '*') {
        o.C = $r()
    }
    if (o.c == '**') {
        o.c = $r();
        o.C = $r()
    }
    if (o.c == '***') {
        $l('***')

        o.c = $r();
        o.C = $r();
        o.l = R(20)
    }
    if (S(o.c)) {
        gx.f(oO('c', o.c))
    }
    if (S(o.C)) {
        gx.s(oO('c', o.C))
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (o.lf) {
        o.lf = O(o.lf) ? o.lf : {}
        if (o.r) {
            o.r = _.tN(o.r)//?
            o.x = _.tN(o.x)
            o.y = _.tN(o.y)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : _.tN(o.lf.x1) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : _.tN(o.lf.y1) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : _.tN(o.lf.x2) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : _.tN(o.lf.y2) + o.y + o.r
        }
        /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */
        h.lf(o.lf)
    }
    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}

        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y

            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20

            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }

        h.rf(o.rf)
    }
    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }
    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }


    if (o.bs) {
        h.bs(o.bs)
    }

    if (o.bf) {
        h.bf(o.bf)
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
h.bmCir = function (o) {
    var h = this
    o = o || {}
    o.i = o.i || 'me'
    o.circs = o.circs || []
    $.img(o.i, function (i) {
        i = i[0]
        _.each(o.circs, function (c) {
            h.bf(i)
            h.dc(c)
            h.ef()
        })
    })
    return h
}
h.bmV = function (o) {
    var h = this
    o = o || {}
    o.i = o.i || 'me'

    $.img(o.i, function (i) {
        i = i[0]
        _.e(o.v, function (v) {

            h.bf(i)
            h.lt(v)
            h.ef().cp()

        })
    })

    return h
}

h.rc = h.roundRectComplex = function () {
    var h = this, gx = h.graphics
    gx.drawRoundRectComplex.apply(gx, arguments)
    return h
}
h.cir = h.circ = function (x, y, r, c, C, l) {//= h.circle
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
h.dc = function (x, y, r) {
    var h = this, gx = h.graphics,
        g = G(arguments), o


    if (A(g[0]) && O(g[1])) {
        _.e(g, function (c) {
            h.dc(c)
        });
        return h
    }

    if (A(g[0])) {
        return h.dc.apply(h, g[0])
    }

    o = O(g[0]) ? g[0] :
        N(g[2]) ? {x: g[0], y: g[1], r: g[2]} :
            N(g[0]) ? {r: g[0]} : {}

    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.r = _.tN(o.r, 100)

    //h.mt(o.x, o.y).cp()

    gx.dc(o.x, o.y, o.r)
    h.C()
    return h

}
h.dc = function (x, y, r) {
    var h = this, gx = h.graphics


    if (U(y)) {
        gx.dc(0, 0, x)
    }
    else {
        gx.dc(x, y, r)
    }
    return h
}
h.de = h.ell = function () {
    var h = this,
        gx = h.graphics,
        g = G(arguments),
        o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
            N(g[0]) ? {w: g[0], h: g[1]} :
                O(g[0]) ? g[0] : {}
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, o.w)
    gx.drawEllipse(o.x, o.y, o.w, o.h)
    return h
}
h.de2 = function (x, y, W, H, r) {
    var h = this
    h.de(-W / 2 + x, -H / 2 + y, W, H, r)
    return h
}
h.rr = function () {
    var h = this,
        gx = h.graphics,
        g = G(arguments),

        o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
            N(g[1]) ? {w: g[0], r: g[1]} :
                N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                    O(g[0]) ? g[0] : {}


    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, o.w)

    gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
    return h
}
h.rr2 = function (x, y, W, H, r) {
    var h = this
    h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
    return h
}
h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    h.bezierCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    h.quadraticCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h.arc = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    /*
     Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
     For example, to draw a full circle with a radius of 20 centered at (100, 100):
     arc(100, 100, 20, 0, Math.PI*2)
     */

    h.arc(x, y, r, startA, endA, aCW)

    return h
}
h.arc2 = function (x, y, X, Y, r) {
    var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
    gx.arcTo(x, y, X, Y, r)
    return h
}
h.qt = function (a, b, c, d, e, f) {
    var h = this, gx = h.graphics

    if (O(a)) {
        a = V(a)
        b = V(b)

        gx.qt(a.x, a.y, b.x, b.y)
    }


    else {
        gx.qt(a, b, c, d, e, f)
    }
    return h
}
h.cur = function (a, b, c, d, e, f, g, h) {

    if (O(a)) {
        return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
    }
    return this.mt(a, b).qt(c, d, e, f, g, h)
}

h.dr = function () {
    var h = this,
        gx = h.graphics,
        g = G(arguments),
        o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
            N(g[0]) ? {w: g[0], h: g[1]} :
                O(g[0]) ? g[0] : {}


    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 100)
    o.h = _.tN(o.h, o.w)

    gx.dr(o.x, o.y, o.w, o.h)
    return h

}
h.dr2 = function (x, y, W, H) {
    var h = this, g = G(arguments), o

    if (O(g[0]) && O(g[1])) {
        _.e(g, function (r) {
            h.dr2(r)
        })
        return h
    }

    o = O(g[0]) ? g[0] :
        U(g[2]) ? {w: g[0], h: g[1]} :
        {x: g[0], y: g[1], w: g[2], h: g[3]}
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.w = _.tN(o.w, 50)
    o.h = _.tN(o.h, o.w)
    h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
    return h
}
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

gx.poly = function (verts, f, s, width) {
    var that = this
    //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
    if (N(verts[0])) {

        _.each(arguments, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    else {
        this.fs(f, s, width)
        _.each(verts, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    return this
}
h.poly = function (V, c, C, l) {

//*** this is s.poly.. not h.poly !
    var h = this, g = G(arguments),
        o = A(g[0]) ? {v: g[0], c: g[1], C: g[2], l: g[3]}//array must come first b/c its an obj
            : O(g[0]) ? g[0] : {}
    //?
    oDef(o);
    h.ef().es() // ???
    //?
    h.c(o)
    if (o.bf) {
        h.bf('me', function () {
            h.lt(o.v).cp()
        })
    }
    else {
        h.lt(o.v).cp()
    }
    return h
}
h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
    var h = this, gx = h.graphics,

        g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
    o = N(g[3]) ? {
        x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
    } :

        N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

            O(g[0]) ? g[0] : {}

    o.a = _.tN(o.a)
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.p = _.cap(o.p, 0, .99)

    gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
    return h
}
h.drawPolygons = function (paths, C, c) {
    var h = this
    h.C(C)
    if (c) {
        h.c(c)
    }
    _.each(paths, function (p) {
        h.drawPolygon(p)
    })
    return h
}

text()
function text() {
    t = cjs.Text.prototype
    t.lineH = t.lH = function (lH) {


        if (U(lH)) {
            return this.lineHeight
        }

        this.lineHeight = lH
        return this


    }
    t.lineW = t.lW = function (lW) {


        if (U(lW)) {
            return this.lineWidth
        }

        this.lineWidth = lW
        return this
    }
    t.lWH = function (w, h) {
        if (U(h)) {
            h = w
        }
        ;
        return this.lW(w).lH(h)
    }
    t.align = t.textA = t.tA = function (textAlign) {


        if (U(textAlign)) {
            return this.textAlign
        }

        this.textAlign = textAlign
        return this


    }
    t.baseline = t.textB = t.tB = function (textBaseline) {


        if (U(textBaseline)) {
            return this.textBaseline
        }

        this.textBaseline = textBaseline
        return this
    }
    t.T = function (text) {


        if (U(text)) {
            return this.text
        }

        this.text = text
        return this
    }
    t.outL = t.oL = function (outline) {


        if (U(outline)) {
            return this.outline
        }

        this.outline = outline
        return this
    }
    t.F = t.fo = function (font) {


        if (U(font)) {
            return this.font
        }

        if (N(font)) {
            font = font + 'px Arial'
        }


        this.font = font
        return this
    }
    t.C = t.col = function (color) {


        if (U(color)) {
            return this.color
        }

        this.color = oO('c', color)

        return this
    }
}
st.du = function () {
    alert('st.du')
    return this.canvas.toDataURL()
}
ct.mc = function () {
    return cjs.mc.apply(null, arguments)
        .a2(this)
}
st.trDr = function () {

    var st = this
    st._md = 0
    st.MD(function () {
        st._md = 1
    })
    st.MU(function () {
        st._md = 0
    })
    return this
}
ct.st = function(){
    alert('ct.st')
    return this.getStage() }//ct.st = function () {return this.stage}

cjs.niceText=function(text,x,y){

    var t= cjs.text(text, 'yellow', '40px Arial')

    if(N(x)){t.XY(x,y)}
    return t.drag()
}

i.in = i.within = i.inStage = function () {
    var ob = this,
        st = ob.st(),
        g = G(arguments),
        x = ob.x,
        y = ob.y,
        w = st.W() - 100,
        h = st.H() - 100,

        inn = x > 0 && x < w && y > 0 && y < h

    if (g.n) {
        if (!inn) {
            ob.rm()
        }
    }

    return inn
}