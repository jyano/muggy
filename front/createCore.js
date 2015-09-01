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
st = cjs.Stage.prototype
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


i.rX = function () {var i = this, g = G(arguments), rX = g[0]
    if (U(rX)) {
        return i.regX
    }
    i.regX = g.p ? i.regX + rX : rX
    return i
}
i.rY = function () {
    var i = this, g = G(arguments), rY = g[0]
    if (g.p) {
        i.Y(i.y + (rY - i.regY))
    }
    if (U(rY)) {
        return i.regY
    }
    i.regY = rY
    return i
}
i.rXY = function () {
    var i = this, g = G(arguments),
        x =  N(g.g,0), y =  N(g.s, x)
    return i.rX(x).rY(y)
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
i.rC= function(){
    var i=this,g=G(arguments), x, y,hW,hH
    x=i.W()/2
    hW=x
    y=i.H()/2
    hH=y
    return (g.p)? i.rX(hW,'+').rY(hH,'+'): i.rXY(hW,hH)
}
i.rgc=    function(){
    var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
    return (g[0]===0)?
        i.rXY(0,0,(g.p?'+': null))
        : i.rXY(x,y,(g.p?'+': null))
}
i.bd= i.bounds=function(a,b,c,d){var i=this
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