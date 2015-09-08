_.th= _.throttle
cjs = createjs; T = cjs.Ticker
T.p = function () {
    T.setPaused(false);
    return T
}
T.P = T.s = function () {
    T.setPaused(true);
    return T
}
T.$ = function () {
    T.setPaused(T.getPaused() == false ? true : false)
    return T
}
T.t = cjs.t = cjs.tick=function (fn) {
    var g = G(arguments)
    if (g.F_) {
        if (!g.n) {
            fn()
        }
        return T.on('tick', fn) // T.addEventListener? return T?
    }
    return g.n ? T.t('+') - T.t() :
        Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
}
T.i = function () {
    //indicates the target time (in ms) between ticks
    //default is 50 (20 fps)
    //Note: actual time between ticks may be more than specified,
    //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
    return T.interval
}
T.f = function (numTicks) {
    var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
    if (N(numTicks)) {
        T.setFPS(numTicks);
        return T
    }
    return g.n ?
        T.getFPS() :
        T.getMeasuredFPS() //returns *ACTUAL* frames
    // / ticks per second//
    // Depending on performance,
    // this may differ from the target frames per second.
}
T.e = function (runTimePropReturnedInsteadOfTime) {
    //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
    T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m = function (ticks) {
    return T.getMeasuredTickTime(ticks)
} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.

h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
i = cjs.DisplayObject.prototype
s=st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype

ct.t = ct.oT = function (fn) {
    var g = G(arguments)
    if (F(fn)) {
        if (!g.n) {
            fn()
        }
        ;
        return this.on('tick', fn)
    }
    else {
        T.on('tick', this);
        return this
    }
}
ct.xT = function (fn) {
    this.off('tick', fn)
    return this
}
cjs.xL = T.s = function () {
    T.removeAllEventListeners()
}

$Ct = function (a) {
    return new cjs.Container(a)
}
cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
}
cjs.m2d = function (a, b, c, d, e, f) {
    if (U(c)) {return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))}
    return new cjs.Matrix2D(N(a, 1), N(b, 0), N(c, 0), N(d, 1), N(e, 0), N(f, 0))}
cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}
ct.A = function () {var ct = this, g = G(arguments), $b = $('body')
    if (g.u && ct.St()) {
        $b.A(
            ct.St().canvas
        )
    }
    else if (g.N_) {
        $b.A( ct.St().canvas ).abs(g.f, g.s)
    }

    else {
        _.e(g, function (g) {
            ct.addChild(g)
        })
    }
    return ct
}

cjs.iDO= function(i){return O(i)&&F(i.getStage)} //cjs.isOb = function (s) {return O(s) && s.parent}
ct.u = function () {
    this.update();
    return this
}
st.du = function () {
    alert('st.du')
    return this.canvas.toDataURL()
}
ct.st = ct.St= ct.S= function(){
    return this.getStage()
}//ct.st = function () {return this.stage}


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

i.St = i.S = i.st = function () {return this.getStage()}
i.P = function () {return this.parent}
i.X = function (x, dur) {
    var i = this,
        g = G(arguments)
    if (U(x)) {return i.x}
    i.x = g.p ? i.x + x
        : g.n ? i.x - x
        : g.m ? i.x * x
        : g.d ? i.x / x
        : x
    return i
    //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
}
i.Y = function (y, dur) {
    var i = this, g = G(arguments)
    if (U(y)) {return this.y}
    if (g.p) {y = this.y + y}
    else if (g.n) {y = this.y - y}
    else if (g.m) {y = this.y * y}
    else if (g.d) {y = this.y / y}
    if (N(dur)) {tw([this], [{y: y}, duration])}
    else {this.y = y}
    return this
}
i.XY = function (x, y) {
    var i = this, g = G(arguments), v
    if (g.u) {return {x: i.x, y: i.y}}
    v = V(g.f, g.s)
    x = v.x
    y = N(v.y, v.x)
    return i.X(x).Y(y)
}
i.W= function (a) {var i = this
    if (U(a)) {
        var b = i.getBounds()

        if (b) {return b.width * i.scaleX}
        return null
    }

    i.sX(i.scaleX * a / i.W())
    return i
}
i.H = function (a) {
    var i = this

    if (U(a)) {

        var b = i.getBounds()
        if (b) {
            return b.height * i.scaleY
        }
        return null
    }

    this.sY(this.scaleY * a / this.H())
    return this
}
i.WH = function (w, h) {
    var i = this
    return this.W(w).H(h || w)
}
i.sX = function (n) {
    var i = this
    if (U(n)) {return i.scaleX}
    i.scaleX = n
    return i
}
i.sY = function (n) {
    var i = this
    if (U(n)) {
        return i.scaleY
    }
    i.scaleY = n
    return i
}
i.sXY = function (x, y) {var i = this, g = G(arguments), v
    if (g.u) {return {x: i.sX(), y: i.sY()}}
    v = V(g.f, g.s)
    x = N(v.x, 0)
    y = N(v.y, v.x)
    return i.sX(x).sY(y)
}



i.kX = function (skewX) {
    if (U(skewX)) {
        return this.skewX
    }
    this.skewX = skewX;
    return this
}
i.kY = function (skewY) {
    if (U(skewY)) {
        return this.skewY
    }
    this.skewY = skewY;
    return this
}
i.kXY = function (x, y) {
    y = N(y) ? y : x
    return this.kX(x).kY(y)
}

i.rt = function () {
    var i = this, g = G(arguments), rt = g.f

    if (g.p) {
        return i.rt(i.rotation + N(g.f, 1))}
    if (g.n) {
        return i.rt(i.rotation - N(g.f, 1))}
    if (U(rt)) {
        return i.rotation
    }
    i.rotation = rt
    return i
}
i.al = function (al) {
    var i = this
    if (U(al)) {return i.alpha}
    i.alpha = al;
    return i
}
i.a2 = function (ct, x, y) {
    ct.A(this)
    if (N(x)) {
        this.X(x)
    }
    if (N(y)) {
        this.Y(y)
    }
    return this
}
i.of = function (k) {
    this._K = this._K || []
    return !k || this == k || _.ct(this._K, k)
}
i.K = function () {
    var i = this, g = G(arguments)
    this._K = this._K || []

    if (g.u) {
        return this._K.join(' ')
    }

    if (g.O) {
        this._K(g.f.k);
        return this
    }


    _.eW(g.f, function (k) {


        if (!i.of(k)) {
            i._K.push(k)
        }


    })

    return this
}//i.of=function(k){return this.K()==k || this.K()==''}
i.dg = i.drag = function () {
    var i = this;
    SL(i);
    return i
} // ~ scroll
i.$ = function (fn) {
    return this.on('click', fn)
}
i.$$ = function (fn,a,b,c) {
    return this.on('dblclick', fn,a,b,c)
}
i.rm = function () {
    var i = this
    if(O(i) && O(i.parent) ){
        i.parent.removeChild(i)
    }
    return i
}// i.xx
i.hd =  function () {
    this.visible = false;
    return this
}//hide


i.cX=  function(a){var i=this
    if(U(a)){return i.x + i.W()/2 }
    return i.X( a- i.W()/2)
}
i.cY =   function(a){
    var i=this,
        hH=i.H()/2
    return U(a)? i.y+hH:i.Y(a-hH)
}
ct.cX = function () {
    return this.St().cen().x
}
ct.cY = function () {
    return this.St().cen().y
}

i.bd= i.bounds=function(a,b,c,d){var i=this
    alert('i.bd')
    this.nominalBounds = new cjs.Rectangle(a,b,c,d)
    return this
}////?????:
i.hT = i.test = function (x, y) {
    var i = this
    if (cjs.iDO(x)) {
        return i.hT(i.gTL(x))
    }
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.hitTest(x, y)
}
i.gL = i.gTL = function (x, y) {
    var i = this
    if (O(x)) {
        y = x.y;
        x = x.x
    }
    return i.globalToLocal(x, y)
}
i.uM =  function () {
    var i = this,
        s = i.St()
    if (s.mouseInBounds) {
        var pt = i.gTL(s.mouseX, s.mouseY)
        return i.hT(pt)
    }
}
i.bB = i.bindBody = function (b) {
    var i = this
    cjs.t(function () {
        b.X(i.X())
        b.Y(i.Y())
        b.rt(i.rt())
    })
    return i
}
i.sib = function () {
    return this.P().ch()
}



i.toFront = function () {
    return this.ix(this.sib().length - 1)
}
i.belowStg = function () {return this.y > this.St().H()}
i.tf = function () {var i = this, g = G(arguments)
    if (g.u) {
        return [
            i.x,
            i.y,
            i.scaleX,
            i.scaleY,
            i.rotation,
            i.skewX,
            i.skewY,
            i.regX,
            i.regY
        ]
    }

    if (O(g[0]) && F(g[0].getTransform)) {
        g[0] = g[0].getTransform()
    }
    i.setTransform.apply(i, A(g[0]) ? g[0] : g)
    return i
}
i.tickX = function (fn) {
    var i = this
    cjs.t(function () {i.X(fn())})
    return i
}
i.tickY = function (fn) {
    var i = this
    cjs.t(function () {
        i.Y(fn())
    })
    return i
}
ct.ch = ct.e = ct.ix  =function (fn, n) {
    var ct = this, CH
    if (N(n)) {
        ct.setChildIndex(fn, n);
        return ct
    }
    CH = []
    _.e(ct.children, function (ch) {
        CH.push(ch)
    })
    if (U(fn)) {
        return CH
    }
    _.e(CH, function (ch) {
        fn(ch)
    })
    return ct

    old=function(){
        i.ix = function (n) {var i = this, g = G(arguments)
            if (g.u) {return}
            i.P().setChildIndex(i, n)
            return i
        }

    }
}
h.lf = function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = cjs.lg(g)
    gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}
h.rg = function (o) {
    var h = this, g = G(arguments),
        gx = h.graphics,
        o


    if (A(g[0]) && A(g[1])) {

        gx.rf(
            [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
        )
        return h
    }


    o = O(g[0]) ? g[0] :


        S(g[1]) ? _.x({c1: g[0], c2: g[1]},
            N(g[7]) ?
            {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                : N(g[5]) ?
            {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                : N(g[4]) ?
            {x2: g[2], r1: g[3], r2: g[4]}
                : N(g[3]) ?
            {r1: g[2], r2: g[3]}
                :
            {r2: g[2]})

            : S(g[0]) ?
        {c2: g[0]}
            : {}

    $df.grad(o)

    o.x2 = N(o.x2, o.x1)
    o.y2 = N(o.y2, o.y1)
    o.r1 = N(o.r1, 1);
    o.r2 = N(o.r2, 100)

    return o
}
h.ls = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.lg.apply(h, g)
    gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}
h.rf = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }

    o = h.rg.apply(h, g)

    gx.rf(
        [o.c1, o.c2],
        [o.s1, o.s2],
        o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h


}
h.rs = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.rg.apply(h, g)
    gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h
}
cjs.lg=h.lg = function () {
    var g = G(arguments), o//h=this, gx=h.graphics,

    if (g.A) {
        return cjs.lg.apply(null, g.f)
    }
    o = g.O ? g.f :
        _.x({c1: g.f, c2: g.s},
            N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
    o.c1 = oO('c', o.c1 || 'z');
    o.c2 = oO('c', o.c2 || 'w')
    o.s1 = N(o.s1, 0);
    o.s2 = N(o.s2, 1)
    o.x1 = N(o.x1, 0);
    o.y1 = N(o.y1, 0)
    o.x2 = N(o.x2, 0)
    o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
    return o
}



cjs.diamond=cjs.dia = function self(width, height, fc, sc) {
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




h.rc = h.roundRectComplex = function () {
    var h = this, gx = h.graphics
    gx.drawRoundRectComplex.apply(gx, arguments)
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
i.warpX = function (lo, hi, cush) {alert('i.warpX')
    var i = this,
        wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.x = wrp(i.x)
    })
    return i
}
i.warpY = function (lo, hi, cush) {alert('i.warpY')
    var i = this, wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.y = wrp(i.y)
    })
    return i
}
i.warp = function (n) {
    var i = this, s = i.S(), n = n || 0
    i.warpX(0, s.W(), n)
    i.warpY(0, s.H(), n)
    return i
}
i.within = i.inStage = function () {
    var i = this, g = G(arguments), s = i.S(), wthnS

    wthnS = i.x > 0 && i.y > 0

    && i.x < (s.W() - 100) && i.y < ( s.H() - 100 )

    if (g.n && !wthnS) {
        s.rm()
    }

    return wthnS
}
h.bs = function (i) {
    var h = this;
    h.graphics.bs(i);
    return h
}
h.ef = function () {
    var h = this, gx = h.graphics
    gx.f()
    return h
}
h.es = function () {
    var h = this, gx = h.graphics
    gx.es()
    return h
}
h.cp = function () {
    this.graphics.cp();
    return this
}
$Gx=cjs.Gx = cjs.gx = function (a) {return new cjs.Graphics(a)}
cjs.iH = function (h) {return O(h) && h.graphics}
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
gx.fC = gx.fs = function (c, C, l) {
    var gx = this
    gx.f(oO('c', c || 'z'))
    gx.s(oO('c', C || null))
    gx.ss(N(l) ? l : 2)
    return gx
}
gx.sC = function (s, w) {
    var gx = this
    w = N(w) ? w : 2
    s = O(s) ? s : oO('c', s || null)
    gx.s(s)
    gx.ss(w)
    return gx
}
h.z = h.clr = function () {
    this.graphics.clear();
    return this
}
st.ab = st.abs = function (x, y) {
    this.can.abs(x, y);
    return this
}
_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
h.same = function () {return $h(this)} // h.copy=
St = function () {z(); var g = G(arguments)
    st = s = $St(g[0] || 'p', 1200, 600)
    h = $h(0, 0).a2(s)
    if (g.p) {
        SL(h)
    }
    return s
}
h.lt = function (x, y) {
    var h = this, gx = h.graphics, v
    if (A(x) && O(x[0])) {
        return h.lt.apply(h, x)
    }
    if (N(x)) {
        gx.lt(x, y);
        return h
    }
    _.e(arguments, function (v) {
        v = V(v)
        h.lt(v.x, v.y)
    })
    return h
}
h.mt = function (x, y) {
    var h = this,
        gx = h.graphics, g = arguments, x = g[0], y = g[1], v
    if (A(g[0]) && O(g[0][0])) {
        _.e(g, function (v) {
            h.mt.apply(h, v)
        });
        return h
    }
    if (N(x)) {
        v = V(x, y);
        gx.mt(v.x, v.y)
    }
    else {
        v = V(_.f(g))
        h.mt(v.x, v.y)
        _.e(_.r(g), function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
    }
    return h
}
ct.cen = ct.pt = function () {
    return V(this.W() / 2, this.H() / 2)
}
ct.bgI = ct.bg= function (i) {
    var ct = this
    ct.bm(i, function (b) {
        ct.ch(b, 0)
    })
    return ct

}
ct.eMO = function (en) {
    this.enableMouseOver(en ? true : false);
    return this
}
ct.mc = function (x, y) {
    var ct = this, g = G(arguments), mc
    mc = cjs.MovieClip.apply(cjs, g)
    this.A(mc).XY(N(x, 100), N(y, 100))
    return mc
}
ct.Cv = function () {return this.St().canvas}
ct.chalk = function () {
    var ct = this, g = G(arguments),
        h = 0
    g.e(function (t) {
        ct.T(t, 26, 'w', 475, h += 35)
    })
    return this
}


ct.T =  ct.Tx = function () {
    var ct = this, g = G(arguments), o, t
    o = g.O ? g.f :

        g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
            N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
                _.x({t: g.f, f: g.s, c: g.t},
                    N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
                    {y: g[3]})
    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = oO('c', o.c || 'y')
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.t = String(o.t)
    t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
    if (g.n) {
        t.regX = t.W() / 2
    }
    t.bl('middle')
    if (g.p) {
        t.bl('alphabetic')
    }
    if (!g.n) {
        t.rX(t.mW() / 2)
    }
    return t
    //o.x = N(o.x, this.St().cen().x)
    /* if(g.p){
     tO = cjs.T(g.f, 'y', '40px Arial')
     if(N(g[3])){ tO.XY(g[3], g[4]) }
     return tO
     }*/



}




comp()
function comp(){


    i.o=function(o){this.compositeOperation = o;return this}
    i.Ds= i.dO=function(){
        this.o('destination-out'); return this}
    i.dS= i.dI=function(){return this.o('destination-in')}
    i.sD= i.sI=function(){this.o('source-in'); return this }
    i.Sd= i.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    i.ds= i.dV= function(){ this.o('destination-over'); return this }
    i.SD= i.sT= i.sA= function(){ this.o('source-atop'); return this }
    i.DS= i.dT= i.dA= function(){ this.o('destination-atop'); return this }
    i.li=function(){ this.o('lighter'); return this }
    i.co=function(){ this.o('copy'); return this }
    i.xo=function(){ this.o('xor'); return this }
}
i.n= function (name) {

    if (U(name)) {
        return this.name
    }
    this.name = name;
    return this
}

i.cu=i.bM=function (cu) {
    alert('i.cu i.bM')
    var ob = this,
        st = ob.st()
    CUob = {
        d: 'default', n: 'none', h: 'help',
        p: 'pointer', ch: 'crosshair',
        P: 'progress', w: 'wait',
        t: 'text',
        m: 'move', g: 'grab', c: 'copy',
        cm: 'context-menu',
        C: 'cell',
        N: 'not-allowed', v: 'not-allowed',
        z: 'zoom-in'
    }
    if (U(cu)) {
        st.MM(function () {
            ob.x = st.m().x;
            ob.y = st.m().y
        })
    }
    else if (S(cu)) {
        ob.cursor = CUob[cu] ? CUob[cu] : cu
    }
    return ob
}

st.MD = function (fn) {
    return this.on('stagemousedown', fn)
}
st.MM = function (fn) {
    return this.on('stagemousemove', fn)
}
st.MU = function (fn) {
    return this.on('stagemouseup', fn)
}
st.W = function (a) {
    if (U(a)) {
        return this.canvas.width
    }
    this.canvas.width = a;
    return this}
st.H = function (a) {
    if (U(a)) {
        return this.canvas.height
    }
    this.canvas.height = a;
    return this
}

st.WH = function (w, h) {
    var st = this;
    if (U(w)) {
        return V(st.W(), st.H())
    }
    if (N(w)) {
        st.W(w)
    }
    if (N(h)) {
        st.H(h)
    }
    ;
    return st
}
st.N = st.next = function (next) {
    if (U(next)) {
        return this.nextStage
    }
    ;
    this.nextStage = next;
    return this
}

cjs.rgb=function(r,g,b,a){

    var str
    a = N(a)? a: 1
    str = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
    return str
}
P = cjs.P = $Pt = cjs.Pt = function (x, y) {

    if (U(x)) {
        return new C$.Point}
    if (O(x) && O(y)) {
        return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
    }
    if (O(x)) {
        return new cjs.Point(
            x.mx(),
            x.my()
        )
    }
    return new cjs.Point(x, y)
}


$sw= cjs.sw= cjs.stopWatch=function(){
    _$t=  function(){return new Date().getTime()}


    var t= _$t()
    return function self(){var g=G(arguments),
        d=$t()-t
        if(g.d){t=$t()}
        if(g.n){var f= _.cap(
            (self('/')-500)/20,
            0,
            100
        )
            return f
        }
        return d}

}
$.joystick  =function(){
    $('#left').on('mousedown mouseover touchenter', function(e){cjs.Keys.left = true ;e.preventDefault()})
    $('#left').on('mouseup mouseout touchleave', function(){cjs.Keys.left = false})
    $('#jump').on('mousedown mouseover touchenter', function(){  cjs.Keys.up = true   })
    $('#jump').on('mouseup mouseout touchleave', function(){  cjs.Keys.up = false  })
    $('#right').on('mousedown mouseover touchenter', function(){ cjs.Keys.right = true})
    $('#right').on('mouseup mouseout touchleave', function(){cjs.Keys.right = false })}



cjs.rmOb = function (s) {if (cjs.iDO(s)) {
    s.rm()
}

}



ct.noAuCl = function () {
    this.autoClear = false;
    return this
}
ct.au = function (au) {
    this.autoClear = au ? true : false;
    return this
}
ct.clr =   ct.E = function () {
    return this.e(function (i) {i.rm()
    })
}
ct.N = function (n) {
    var s = this;
    if (U(n)) {return s.nextStage}
    s.nextStage = n;
    return s
}
ct.C = ct.backgroundColor = function (c) {
    var ct = this
    $(ct.canvas).C(c)
    return ct
}

cjs.bindSlide = SL = function () {
    var g = G(arguments),
        b = g[0],
        b2 = g[1] || b

    return b.on('mousedown',
        function (e) {
            var bx = b2.x - e.rawX,
                by = b2.y - e.rawY
            b.on('pressmove', function (e) {

                if (g.P) {
                    b2.x = bx + e.rawX
                }

                //if (g.N) {
                b2.y = by + e.rawY
                //}
            })

        })
}

i.dot = function () {
    var i = this
    i.getStage().dot(i.X(), i.Y())
    return i
}
i.flash = function () {
    var i = this
    i.opacity(0)
    $.in(.3, function () {
        i.opacity(1)
    })
    return i
}

ct.d = ct.dot = function (c, x, y) {
    var ct = this, o, d, tw, g = G(arguments)

    if (b2d.isGPoly(g.f)) {

        _.e(g.f.vs(), function (v) {
            ct.dot(V(v))
        })

        return this
    }


    if (g.A) {

        _.e(c, function (G) {
            if (A(G)) {
                ct.dot.apply(ct, G)
            }
            else {
                ct.dot(G)
            }
        })

        return this
    }


    o = g.S_ ? (

        b2d.iB(g.s) ? {c: g.f, x: g.s.sX, y: g.s.sY} :

            O(g.s) ? {c: g.f, x: g.s.x, y: g.s.y} :
            {c: g.f, x: g.s, y: g.t}

    ) :
        b2d.iB(g.f) ? {x: g.f.sX, y: g.f.sY} :
            g.O_ ? {x: g.f.x, y: g.f.y} :
            {x: g.f, y: g.s}


    o.x = N(o.x, ct.W() / 2)
    o.y = N(o.y, ct.H() / 2)
    o.c = o.c || 'y'
    d = this.h(o.x, o.y).cir(8, o.c, 'z', 2).al(.7).drag()
    tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
    d.$$(function () {
        tw.$()
    })
    return d.K('dev dot')
}



t.lW = _.gS('linewidth')
t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
t.lWH = function (w, h) {
    return this.lW(w).lH(N(h, w))
}
t.tA = _.gS('textAlign')
t.bl = function (bl) {
    var g = G(arguments)
    if (g.p) {
        bl = 'bottom'
    }
    if (g.n) {
        bl = 'top'
    }
    if (bl === '') {
        bl = 'middle'
    }
    if (U(bl)) {
        return this.textBaseline
    }
    this.textBaseline = bl
    return this
}
t.T = function (tS) {
    if (U(tS)) {
        return this._tS
    }
    this._tS = tS
    return this
}
t.ol = _.gS(t, 'outline')
t.F = t.fo = function (f) {
    if (U(f)) {
        return this.font
    }
    this.font = N(f) ? f + 'px Arial' : f
    return this
}
t.C = function (cS) {
    if (U(cS)) {
        return this.color
    }
    this.color = oO('c', cS)
    return this
}
t.mW = function () {
    return this.getMeasuredWidth()
}
//text

$T = function (a, b, c, d, e) {
    var g = G(arguments), o, t
    return new cjs.Text(a, b, c, d, e)

    o = g.O ? g.f :

    {t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}

    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = o.c || 'y'
    o.x = N(o.x, 600)
    o.y = N(o.y, 100)
    t = new cjs.Text(o.t, o.f, o.c)
    t.XY(o.x, o.y).drag()

    if (g.n) {
        t.regX = t.W() / 2
    }
    if (g.p) {
        t.bl('alphabetic')
    }

    return t.bl('middle')

}

s.cannonBall=function(x,y){var s=this,h
    h=s.h(x,y)
    h.rf('a', 'z',18 ).dc(18).ef()
    return h}
s.basketBall=function(x,y){var s=this
    return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
}
s.beachBall=function(x,y){var s=this
    return s.h(x,y)
        .rf('b','r',18).dc(18).ef()
}
s.snowBall=function(x,y){var s=this
    return s.h(x,y).rf('a','w',18).dc(18).ef()
}
$.fn.hideOnKeyDown = function(a){
    var that = this
    $('body').keydown(function(ev){e=ev
        $l(e.which)
        if(e.which == 40){ that.hide()  }
        if(e.which == 38){ that.show()  }
    })
}
drag = drg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){

        var offset = $(this).offset(),

            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top

        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}
$.fn.toR = $.fn.moveRight=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) + num)
    return this}
$.fn.toL = $.fn.moveLeft=function(num){
    num=num||20
    if(this.left()=='auto'){this.left(0)}
    this.left( parseInt(this.left()) - num)
    return this}
$.fn.toU =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  - num  )
    return this}
$.fn.toD =$.fn.moveDown=function(num){num=num||20
    if(this.top()=='auto'){this.top(0)}
    this.top( this.top()  + num  )
    return this}
drawHalf=function(c,i){c.dI(i, -i.width/2, -i.h/2)}


h.dl = h.line = function () {
    var g = G(arguments), o
    o = N(g[0]) ? {x1: g[0], y1: g[1], x2: g[2], y2: g[3]} :
    {x1: g[0].x, y1: g[0].y, x2: g[1].x, y2: g[1].y}
    this.mt(o.x1, o.y1).lt(o.x2, o.y2)
    return this
}


i.shad = function (color, x, y, blur) {
    var shadow = cjs.shad(color, x, y, blur)
    this.shadow = shadow
    return this
}
i.getTransform = function () {
    alert('i.getTransform')
    var ob = this
    return [
        ob.x, ob.y, ob.scaleX, ob.scaleY,
        ob.rotation, ob.skewX, ob.skewY,
        ob.regX, ob.regY
    ]
}
i.cC = i.cc = function () {
    return this.cacheCanvas
}
i.ca = function () {
    var ob = this,
        st = ob.St(),
        g = G(arguments), o, op, i

    if (O(ob.image && !g.n && !g.p)) {
        ob.cache( $(ob.image)[0] )
    }
    if (ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)) {
        op = g[0];
        ob.updateCache(op);
        return ob
    }
    o = O(g[0]) ? {i: g[0], x: g[1], y: [2]} : N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} : N(g[1]) ? {
        w: g[0],
        h: g[1]
    } : {}
    if (O(o.i)) {
        o.i = o.i.image ? o.i.image : $(o.i)[0];
        if (!g.n) {
            if (ob.image) {
                ob = ob.image
            }
            ob = $(ob)[0]
            ob.cache(0, 0, ob.width, ob.height)
        }
    }
    o.x = N(o.x) ? o.x : 0;
    o.y = N(o.y) ? o.y : 0
    o.w = N(o.w) ? o.w : O(o.i) ? o.i.width : N(o.h) ? o.h : st ? st.W() : 0
    o.h = N(o.h) ? o.h : O(o.i) ? o.i.height : st ? st.H() : 0
    ob.cache(o.x, o.y, o.w, o.h)
    return ob
}
i.RT = function(){var i=this; RT(i);return i}
$df =  {
    bsDF:  function (o) {
        o = o || {}
        o.x = N(o.x, 0);
        o.y = N(o.y, 0);
        o.rt = N(o.rt, 0);
        o.al = N(o.al, 1)
        return o
    },
    xyr:  function (o) {
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.r = N(o.r, 0)
        return o
    },
    im:  function (o) {o.i = o.i || 'me'; o.al = N(o.al, 1)},
    sc:  function (o) {
        o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
        if (!A(o.sc)) {
            o.sc = [o.sc, o.sc]
        }
        ;
        return o
    },
    b: function () {
        var g = G(arguments), o
        o = g.A ? {hs: g.f} : g.f || {}
        o.hs = o.hs || []
        o.i = o.i || 'me'
        return o
    },
    h: function (o) {
        o = o || {}
        if (U(o.v)) {
            o.v = [[-100, 50], [0, -50], [100, 0]]
        }
        //o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
        o.c = o.c || 'p'
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = N(o.r, 40)
        o.w = N(o.w, 50)
        o.h = N(o.h, o.w || 100)
        o.d = N(o.d, 0.5)
        o.b = N(o.b, 0.5)
        o.f = N(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = N(o.o, 1)
        o.q = D(q) ? o.q : true
        return o
    },
    rec : function (o) {
        o.al = N(o.al, 1)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        return o
    },
    cov : function (x, y, c, C, l, l2) {

        alert('b2d.cov')
        var g = G(arguments), x = g[0], y = g[1], c = g[2], C = g[3], l = g[4], l2 = g[5],

            o = N(c) ? {x: x, y: y, a: c, c: C, C: l, l: l2}
                : N(x) ? {x: x, y: y, c: c, C: C, l: l}
                : x,
            h = new cjs.Shape()

        df.oDef(o)

        h.XY(o.x, o.y).rot(o.a).c(o.c, o.C, o.l)

        if (o.d) {
            h.drag()
        }

        return h
    },
    oDef : function (o) {
        o = o || {}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        o.r = N(o.r, 50)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        return o
    },
    grad : function (o) {

        o = o || {}
        o.c1 = oO('c', o.c1 || 'z')
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1)
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1)
        o.y1 = N(o.y1)
        return o
    }
}

ct.xCh = ct.removeAll = function () {
    this.e(function (ch) {
        ch.rm()
    });
    return this
}



st.hW = function () {
    return this.W() / 2
}
st.hH = function () {
    return this.H() / 2
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
h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    h.quadraticCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h.cur = function (a, b, c, d, e, f, g, h) {

    if (O(a)) {
        return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
    }
    return this.mt(a, b).qt(c, d, e, f, g, h)
}


ct.poly = function () {
    var ct = this // ?
    var h = ct.shape()
    h.poly.apply(h, arguments)
    return h
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



cjs.T = cjs.Tx = function (text, font, color, x, y) {
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
st.trDr = function (){
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
cjs.niceText=function(text,x,y){

    var t= cjs.text(text, 'yellow', '40px Arial')

    if(N(x)){t.XY(x,y)}
    return t.drag()
}
h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
    var h = this, gx = h.graphics,

        g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

    o = N(g[3]) ? {
        x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]} :

        N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

            O(g[0]) ? g[0] : {}

    o.a = _.tN(o.a)
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.p = cjs.cap(o.p, 0, .99)

    gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
    return h
}
h.qt=    function (x, y, r, startA, endA, aCW) {
    var h = this, gx = h.graphics
    gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
    return h
}
h._dc=function(o){
    var h=this,gx=h.graphics,g=G(arguments)
    gx.dc(N(o.x,0),N(o.y,0),N(o.r,50))
    return h
}
h.cirs=function(g){
    var h=this
    g.e(function(c){h.dc(c)}); return this
}

$Cir=   function(){var g = G(arguments), o
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y).dc(o.r)

}

h.bC = function (o) {
    var h = this;
    return h.bf(o, function (h1) {
        h.dc(h1)
    })
}//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.bR = h.bfR = h.bmR = function (o){
    var h = this;
    if (F(Q)) {
        h.bf(o, function (h1) {
            h.rec(h1)

        })

        return h
    }
    /*

     h.bmR1= function(o){var h=this;
     o=df.b(o)
     $.i(o.i,
     function(i){_.e(o.hs,
     function(g){
     h.bf(i[0])
     h.rec(g)
     h.ef() })
     })
     return
     }
     */
    h.bf(o.bf)
    h.rec(o.hs)
    _.e(o.hs, function (r){
        w.rec(r.w, r.h)
    })
    return h
}

ct.Ct = function () {
    this.ct.apply(this, arguments)
    return this
}
ct.Bm = function () {
    this.bm.apply(this, arguments)
    return this
}

ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
    var b, g = G(arguments)
    b = Q.b(name)
        .XY(N(x, 0), N(y, 0))
        .sXY(N(sX, 1), N(sY, sX || 1))
        .rt(N(rt, 0))
    if (!g.n) {
        b.rC()
    }
    ;
    if (g.p) {
        b.drag()
    }
    ;
    this.A(b);
    return b
}
h.bV = function (o) {
    var h = this, g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    if (F(Q)) {
        $.i(o.i, function (i) {
            h.bf(i[0])
            _.e(o.v, function (v) {
                h.lt(v)
            })//
            h.cp()
            h.ef()
        })
        return h
    }
    h.bf(o.i)
    _.e(o.v, function (v) {
        h.lt(v)
    })

    return h

}




h.bf = function (i, fn, c) {
    var h = this, gx = h.graphics


    if (S(i)) {

        $.img(i, function (i) {
            gx.bf(i[0])
            if (F(fn)) {
                fn(i[0])
            }
        })
    }


    else {

        if (O(fn)) {
            gx.bf(i, null, fn)
        } else {
            gx.bf(i, fn, c)
        }
    }


    return h
}
ct.C = ct.bgC = function (c) {
    $(this.canvas).C(c);
    return this
}
h.bf = function () {var h = this, gx = h.graphics, g = G(arguments),

    tf

    if (!F(Q)) {
        $l('!F(Q)')

        if (A(g.s)) {
            g.s = cjs.m2d.apply(cjs, g.s)}

        tf = g.s || cjs.m2d(R(500), R(300))

        if (S(g.f)) {gx.bf(Q.i(g.f), null, tf)}
        else if (O(g.f)) {gx.bf(g.f, null, tf)}
        return h
    }

    if (g.S_){

        $l('yes F(Q)')

        $.i(g.f, function (i) {

            gx.bf(i[0])

            if (F(g.s)) { g.s(h) }
        })
    }

    else if (g.O_ && A(g.f.hs)) {
        $l('g.O_ && A(g.f.hs)')
        $.i(g.f.i || 'me', function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                _.e(g.f.hs, g.s)
            }
        })
    }

    else {$l('..else')
        gx.bf(g.f, null, g.s)
    }
    //h.ef()
    return h
}  // BITMAP FILL  !!!!!!

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
h.dr2 = function (x, y, W, H) {var h = this, g = G(arguments), o

    if(g.OO_){g.e(function(g){h.dr2(g)});return h}

    o=g.O?g.f:
        U(g.t)? {w: g.f, h: g.s} :
        {x: g.f, y: g.s, w: g.t, h: g[3]}

    o.x = N(o.x,0)
    o.y = N(o.y,0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
    return h

}

ct.ct = function (x, y) {
    var ct = this,
        g = G(arguments), ct1 = $Ct()
    o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
    ct.A(ct1)
    if (o.fn) {
        o.fn(ct1, ct)
    }
    else if (N(o.x)) {
        ct1.XY(o.x, o.y)
    }
    if (g.p) {
        cjs.bindSlide(ct1)
    }
    return ct1
}


$H = $h = function () {
    var g = G(arguments),
        h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
        o = g.O ? g.f :
            g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
            {x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
                // 'c-C-l' pattern
                N(g.s) ? {C: g.f, l: g.s} :
                {c: g.f, C: g.s, l: g.t}
    h.XY(N(o.x, 0), N(o.y, 0))
    h.c(o.c || 'z', o.C || 'w', o.l || 8)
    if (o.C) {
        h.C(o.C)
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (g.p) {
        h.dg()
    }
    return h
}
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
}
h.col = h.fs = function () {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.fs.apply(gx, g)
    return h
}
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics, g = G(arguments), o

    o = g.O ? g.f : g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
        g.u ? {c: 'z', C: 'w', l: 6} :
            // 'c-C-l'
            N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} : {c: g.f, C: g.s, l: g.t}

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
            o.r = N(o.r, 0)
            o.x = N(o.x, 0)
            o.y = N(o.y, 0)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
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
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {
        h.l(l)
    }
    return h
}
h.l = h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)
    return h

}
h.dc= function(x,y,r){
    var h=this,gx=h.graphics,g=G(arguments),o
    h.cp()
    if(g.A){return $a(h,'dc',g.f)}
    if(g.OO_){return h.cirs(g)}
    o = g.O?g.f: g.$?{r:g.f}: {x:g.f,y:g.s,r:g.t}
    return h._dc(o)
}
h.dr = function () {var h = this, gx = h.graphics, g = G(arguments),
    o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 100);
    o.h = N(o.h, o.w)
    gx.dr(o.x, o.y, o.w, o.h)
    return h
}


ct.rec = function () {
    var ct = this, g = G(arguments), o, ct2, h
    if (g.OO_) {
        g.e(this, 'rec');
        return this
    } //it doesnt know that's this! (scope talk)
    o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
        g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
    o.al = N(o.al, 1)
    o.rt = N(o.rt, 0)
    o.c = o.c || 'z';
    o.C = o.C || 'w'
    ct2 = ct.ct();
    h = ct2.h(o.x, o.y);
    h.rt(o.rt);
    h.c(o).al(o.al)
    if (o.lf) {
        h.lf(o)
    } else if (o.rf) {
        h.rf(o)
    }
    if (o.bm) {
        h.bR({i: 'me', hs: [o]})
    }
    else {
        h.rec(o.w, o.h)
    }
    if (g.p) {
        ct.drag()
    }
    return ct2
}

ct.pol = function () {
    var ct = this, g = G(arguments), p,

        h = ct.h()

    if (N(g.f)) {
        h.XY(
            g.shift(),
            g.shift())
    }
    p = $a(h, 'pol', g)
    if (g.p) {
        p.drag()
    }
    return p
}
h.pol = function (V, c, C, l) {
    var h = this, g = G(arguments), o

    //array must come first b/c its an obj
    o = A(g.f) ?
    {v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
    $df.oDef(o)
    h.ef().es()
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

KEYOB = {
    up: 38, u: 38,
    down: 40, d: 40,
    left: 37, l: 37,
    right: 39, r: 39,
    space: 32, s: 32,
    enter: 13, e: 13
}

$.k = $.key = $.keyDown = $.kD = kD = function self(key, fn) {

    if (O(key)) {
        _.e(key, function (fn, k) {
            if (s$(k).isUpper()) {
                $.kU(k.toLowerCase(), fn)
            }
            else {
                $.k(k, fn)
            }
        })
        return
    }

    if (KEYOB[key]) {
        key = KEYOB[key]
    }


    $('body').on('keydown', function (e) {

        if (e.which == key) {
            fn(e, cjs.Keys)
        }
    })

}
$.keyUp = $.kU = kU = function (key, funk) {
    keyObj = {
        up: 38, u: 38,
        down: 40, d: 40,
        left: 37, l: 37,
        right: 39, r: 39,
        space: 32, s: 32,
        enter: 13, e: 13
    }
    if (keyObj[key]) {
        key = keyObj[key]
    }
    $('body').on('keyup', function (e) {

        if (e.which == key) {
            funk(e, cjs.Keys)
        }
    })
}
cjs.Keys = function (o) {

    if (O(o)) {

        if (F(o.u)) {
            cjs.tick(function () {
                if (cjs.Keys.u) {
                    o.u(cjs.Keys.u)
                }
            })
        }

        if (F(o.d)) {
            cjs.tick(function () {
                if (cjs.Keys.d) {
                    o.d(cjs.Keys.d)
                }
            })
        }

        if (F(o.l)) {
            cjs.tick(function () {
                if (cjs.Keys.l) {
                    o.l(cjs.Keys.l)
                }
            })
        }

        if (F(o.r)) {
            cjs.tick(function () {
                if (cjs.Keys.r) {
                    o.r(cjs.Keys.r)
                }
            })
        }

    }
}
cjs.watchKeys = function () {
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
    })


    $.kU('l', function () {
        if ($.test) {
            $l('left lifted')
        }
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r', function () {
        if ($.test) {
            $l('right pressed')
        }
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'
    })
    $.kU('r', function () {
        if ($.test) {
            $l('right lifted')
        }
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u', function () {
        if ($.test) {
            $l('up pressed')
        }
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u', function () {
        if ($.test) {
            $l('up lifted')
        }
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d', function () {
        if ($.test) {
            $l('down pressed')
        }
        cjs.Keys.d = cjs.Keys.down = true
    })


    $.kU('d', function () {
        if ($.test) {
            $l('down lifted')
        }
        cjs.Keys.d = cjs.Keys.down = false
    })
}
K = function (k, fn) {
    var g = G(arguments), o, key
    if (g.u) {
        if (K._loaded) {
            return
        }
        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
            K.l = 1;
            K.L = 0
        })
        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = false
            K.l = 0;
            K.L = 1
        })
        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            K.r = cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
            K.r = 1;
            K.R = 0
        })
        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
            K.r = 0;
            K.R = 1
        })
        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
            K.u = 1;
            K.U = 0
        })
        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
            K.u = 0;
            K.U = 1
        })
        $.kD('d', function () {
            if ($.test) {
                $l('down pressed')
            }
            cjs.Keys.d = cjs.Keys.down = true
            K.d = 1;
            K.D = 0
        })
        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
            K.d = 0;
            K.D = 1
        })
        K._loaded = 1
        return
    }
    if (O(k)) {
        if (g.p) {
            if (F(k.u)) {
                z(function () {
                    if (K.u) {
                        k.u(K.u)
                    }
                })
            }
            if (F(k.d)) {
                z(function () {
                    if (K.d) {
                        k.d(K.d)
                    }
                })
            }
            if (F(k.l)) {
                z(function () {
                    if (K.l) {
                        k.l(K.l)
                    }
                })
            }
            if (F(k.r)) {
                z(function () {
                    if (K.r) {
                        k.r(K.r)
                    }
                })
            }
        }
        else {
            _.e(k, function (fn, k) {
                K(k, fn)
            })
        }
        return
    }
    o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
    if (g.p) {
        return z(function () {
            if (K[k]) {
                fn()
            }
        })
    }
    key = Key(o.k)
    return $('body').on(o.on, function (e) {
        if (e.which == key) {
            fn(e)
        }
    })

    function Key(k) {
        var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
        return ob[k] ? ob[k] : k
    }

}
$.space = function (fn) {
    return $.kD('space', fn)
}
ct.W = function (w) {
    var can = this.St().canvas
    if (U(w)) {
        return can.width
    }
    can.width = w
    return this
}


ct.H = function (w) {
    var can = this.getStage().canvas
    if (U(w)) {return can.height}
    can.height = w
    return this
}

h.rec = function () {var h = this, g = G(arguments), o
    if (g.OO_) {g.e(function (g) {h.rec(g)}); return h }

    o = g.O ? g.f :
        S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
            g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                N(g.t) ?
                {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
                {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}


    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w)
    if (o.i) {
        h.bf(o.i, function () {o.i = null; h.rec(o)})
        return h
    }
    if (o.c) {h.c(o)}
    if(o.lf){
        h.lf({
            c1: o.c1 || 'z', c2: o.c2 || 'w',
            s1: 0, s2: 1,
            x: o.x - o.w / 2, y: o.y - o.h / 2,
            x2: o.x - o.w / 2, y2: o.y + o.h / 2
        })
    }
    h.dr(-o.w/2+o.x, -o.h/2+o.y, o.w, o.h)
    return h

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

h.cir= function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f :
        N(g.t) ?  {x:g.f,y:g.s,r:g.t, c: g[3], C: g[4], l: g[5]} :
            N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]}:
                {c:g.f,C:g.s,l:g.t}
    h.c(o)
    if(o.bf){
        if(N(o.bf)){o.bm = 'me'}

        if(F(Q)){ //async
            h.bf(o.bf, function(){
                h.dc(o)
            })
        }
        else { //sync
            o.tf = o.tf || null;
            h.bf(o.bf, o.tf).dc(o)
        }
    }

    else {h.dc(o)}
    h.alpha = N(o.al, 1)
    return h

}

ct.cir = function (c, r, x, y) {
    var g = G(arguments)
    return $Cir(c, r, x, y)
        .a2(this)
}

$Bm=  function(bm){var g=G(arguments)
    bm=  new cjs.Bitmap(bm)
    if(g.p){ bm.drag() }
    return bm
}


$St = function(){var st, g = G(arguments), cv
    st = St(cv = g.A ? canById(g.f) : O(g.f) ? canEl(g.f) : newCan(g))
    st.cv = st.c = st.can = $(st.canvas)
    st.cv0 = st.cv[0]
    st.xc = st.cv0.getContext('2d')
    st.A(); if (g.p) {st.t()}//.t()
    function canById(a){return a[0]}
    function canEl(a){
        //can pass it a canvas OR a $canvas object
        return $(a)[0]}
    function newCan(g){
        return  $.c(g.f || 'p', g.s || 1200, g.t || 600, g[3], g[4])[0]}
    return st
    function St(cv){
        var s= new cjs.Stage(cv)
        return s
    }
}

$df =  {
    bsDF:  function (o) {
        o = o || {}
        o.x = N(o.x, 0);
        o.y = N(o.y, 0);
        o.rt = N(o.rt, 0);
        o.al = N(o.al, 1)
        return o
    },
    xyr:  function (o) {
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.r = N(o.r, 0)
        return o
    },
    im:  function (o) {o.i = o.i || 'me'; o.al = N(o.al, 1)},
    sc:  function (o) {
        o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));
        if (!A(o.sc)) {
            o.sc = [o.sc, o.sc]
        }
        ;
        return o
    },
    b: function () {
        var g = G(arguments), o
        o = g.A ? {hs: g.f} : g.f || {}
        o.hs = o.hs || []
        o.i = o.i || 'me'
        return o
    },
    h: function (o) {
        o = o || {}
        if (U(o.v)) {
            o.v = [[-100, 50], [0, -50], [100, 0]]
        }
        //o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
        o.c = o.c || 'p'
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = N(o.r, 40)
        o.w = N(o.w, 50)
        o.h = N(o.h, o.w || 100)
        o.d = N(o.d, 0.5)
        o.b = N(o.b, 0.5)
        o.f = N(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = N(o.o, 1)
        o.q = D(q) ? o.q : true
        return o
    },
    rec : function (o) {
        o.al = N(o.al, 1)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        return o
    },
    cov : function (x, y, c, C, l, l2) {

        alert('b2d.cov')
        var g = G(arguments), x = g[0], y = g[1], c = g[2], C = g[3], l = g[4], l2 = g[5],

            o = N(c) ? {x: x, y: y, a: c, c: C, C: l, l: l2}
                : N(x) ? {x: x, y: y, c: c, C: C, l: l}
                : x,
            h = new cjs.Shape()

        df.oDef(o)

        h.XY(o.x, o.y).rot(o.a).c(o.c, o.C, o.l)

        if (o.d) {
            h.drag()
        }

        return h
    },
    oDef : function (o) {
        o = o || {}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.a = N(o.a, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, 50)
        o.r = N(o.r, 50)
        o.c = o.c || 'z'
        o.C = o.C || 'w'
        return o
    },
    grad : function (o) {

        o = o || {}
        o.c1 = oO('c', o.c1 || 'z')
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1)
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1)
        o.y1 = N(o.y1)
        return o
    }
}



turtle2 = [['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]],  ['yellow',[-60, -30], [-50,-60], [-20,-45], [-15,-35] ], ['yellow', [-50,10],[-50,-10],[-40,-10],[-40,10]], ['yellow', [-10,10],[-10,-10],[0,-10],[0,10]]]

dick = [
    [50, 300, 0, -100],
    [50, 100, 150],
    [50, -100, 150]
]
guyInBed = [
    [30],
    [20, 30, 30],
    [100, 30]
]

cjs.somePolyFixt = [
    [
        [-100, 0], [0, -100],
        [100, 0], [60, 50]]]
cjs.compoundShape = [
    [50, 10],
    [60, 30, 0, 0, 40],
    [120, 30, 0, 0, 29],
    [60, 10, 0, 50, 60],
    [84, 10, 15, 80, -120]
]
cjs.compoundShape2 = [
    [50, 10],
    [20, 20],
    [20, 10, 0, 0, 10],
    [40, 10, 50, 0, 45],
    [84, 10, 15, 80, -120],
    [60, 10, 0, 50, 60 ]
]
cjs.compoundStar = [
    [10, 10],
    [20],
    [4, 80, 10, 30, 135],
    [4, 80, 0, 0, 45],
    [4, 80, 100, 0, 90],
    [4, 80, 0, 0, 180]
]

//////////////////////////////////////////////

v1 =   [[-100, 0], [0, -100], [100, -50], [0, -50]]

turtle = [
    ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

    ,  ['yellow',[10,-10],[20,-30],[50,-15], [45,-5]]

    , ['yellow',

        [-50,10],[-50,-10],[-40,-10],[-40,10]
    ]

    , ['yellow',

        [-10,10],[-10,-10],[0,-10],[0,10]
    ]
]


pin = [
    ['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
    ['w', 8, 0, -75],
    ['w', 8, -20, 20],
    ['w', 8, 20, 20]
]