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
i.rZero = function (a) {
    var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
    if (g.p) {
        i.rX(0, '+').rY(0, '+')
    }//i.X(a, i.regX()-a, '+')
    else {
        i.rXY(0, 0)
    }
    return i
}//
i.RT = function () {var i = this;
    RT(i);
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
$.fn.T = function () {alert('$.fn.T')
    var d = this, g = G(arguments)
    d.E()
    g.e(function (str) {
        d.A($.h3(str))
    })
    return d
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


//////////////////////////////////////////////


tw = cjs.Tween.prototype
cjs.Tw=cjs.Tween
cjs.Tw.g=cjs.Tw.get
cjs.ww =ww=function(o){var w={}
    if(N(o.x)){w.x=o.x}
    if(N(o.y)){w.y=o.y}
    if(N(o.xy)){w.x=w.y=o.xy}
    if(N(o.sx)){w.scaleX=o.sx}
    if(N(o.sy)){w.scaleY=o.sy}
    if(N(o.sxy)){w.scaleX=w.scaleY=o.sxy}
    if(N(o.s)){w.scaleX=w.scaleY=o.s}
    if(N(o.kx)){w.skewX=o.kx}
    if(N(o.ky)){w.skewY=o.ky}
    if(N(o.kxy)){w.skewX=w.skewY=o.kxy}
    if(N(o.k)){w.skewX=w.skewY=o.k}
    if(N(o.r)){w.rotation=o.r}
    if(N(o.a)){w.alpha=o.a}
    if(N(o.rx)){w.regX=o.rx}
    if(N(o.ry)){w.regY=o.ry}
    if(N(o.rxy)){w.regX=w.regY=o.rxy}
    if(N(o.gy)){w.regY=o.ry}
    if(N(o.gxy)){w.regX=w.regY=o.rxy}
    if(N(o.g)){w.regX=w.regY=o.g}
    if(o.v==0){w.visible=false}
    if(o.v==1){w.visible=true}
    return w}
$Tw= function(){var g=G(arguments), i = tweenGet(g.f)//; if( U(g.s) ){alert('$Tw'); return i }//

    _.e(g.r, function(b){


        if( A(b) ){
            i = b[2]?  ease(i,b):
                !b[1]?  i.tick(g.f[0]):
                    O(b[1])?  i.set( ww(b[0]), b[1]):
                        i.to( ww(b[0]), b[1])
        }
        else if( F(b)  ){ i = i.call(b, []) }
        else if(N(b)){i=  wait(i,b)}
        else if( O(b) && b.length == 1 ){i = frame(i,b)}
        else { i = i.to( ww(b) )  }


        function ease(i,b){return  i.to( ww(b[0]), b[1], cjs.ease(b[2]) )}
        function frame(i, frame){return frame.p?  i.play( frame.p ): frame.s?  i.stop( frame.s ):i}
        function wait(i, time){ return time < 0? i.wait(time * -1, true):i.wait(time) }




    })


    return Tw( i )
    $TwWithComments= function(a,b){var g=G(arguments), i = g.f, op= g.s

        if( U(g.s) ){
            return tweenGet(g.f )
        }

        //first arg passed to twg, and then rest of args are 'to' pams

        i = tweenGet(g.f)

        _.e(g.r, function(b){
            //can pass obj, time ,ease
            if( A(b) ){

                if( b[2] ){

                    i = i.to( ww(b[0]), b[1],cjs.ease(b[2]))

                } //can pass obj, time


                else if(b[1]){

                    //can set pops to another obj??
                    if( O(b[1]) ){

                        i = i.set( ww(b[0]),  b[1]   )
                    }
                    else{
                        i = i.to( ww(b[0]), b[1]) }
                }



                else{ i = i.tick(a[0]) } }
            //can pass a function and it will run when it's its turn

            else if( F(b)  ){ i = i.call(b, []) } //make it wait, optionally pass in true! ?

            else if(   N( b )){

                if(b<0){
                    // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                    i=i.wait(b * -1, true) }

                else{i= i.wait(b) }
            } //for playing/stopping?

            else if( O(b) && b.length == 1 ){

                if( b.p ){ i = i.play( b.p )}

                else if( b.s ){   i = i.stop( b.s )}}
            else { i = i.to( ww(b) )  }
        })

        return Tw( i )
    }
    function tweenGet(){
        //this returns tween-get on a display obj
        // you can optionally pass an array (i, op1, op2..)
        var g=G(arguments),o= g.A? {i: g.f[0], op: g.r}: {i: g.f}
        return cjs.Tw.g(o.i, o.op? _ops(o.op): null )
        function _ops(){var g=G(arguments), o={}, ops= g.A? g.f: g
            _.e(ops, function(op){

                if( op=='l' ){ o.loop = true }
                if( op=='t' ){ o.useTicks = true }
                if( op=='i' ){ o.ignoreGlobalPause = true }
                if( op=='o' ){ o.override = true }
                if( op=='p' ){ o.paused = true }
                if( N(op) ){ o.position = op}
                if( F(op) ){ o.onChange = op }

            })
            return o
        }




    }
}


function Tw(tween){
    var g=G(arguments),
        w=tween //w.target //use when returned // w.play  = w.P=w.p=function(){ w.setPaused(false);return w} // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w} //use in queue
    w.then=function(tweens, a, b){ return this.to( ww(tweens),a,b ) }
    w.pos = w.ps=function(a,b){


        //get or set position of tween (in time in ms)// see w.dr


        if( U(a) ){return w.position}

        if(b=='n'){b=cjs.Tw.NONE}//0

        if(b=='l'){b=cjs.Tw.LOOP}//1 default

        if(b=='r'){b=cjs.Tw.REVERSE}//2

        w.setPosition( a, acm(b) )



        //default is loop, can use r|n
        return w} //total time duration
    w.dur =w.dr= function(a){
        //get time of tween in ms
        //duration:read only
        if(U(a)){return w.duration}}
    w.tk=function(a){w.tick(a); return w }
    w.ignore = w.iGP=function(a){
        if(U(a)){return w.ignoreGlobalPause}
        w.ignoreGlobalPause=a;return w}
    w.setLoop = w.lp=function(a){if(U(a)){return w.loop}
        w.loop=a;  return w} //w.psv=function(){ return w.passive} //Read-only. Indicates the tween's current position is within a passive wait.
    w.Plugin =function(a,b){

        var g=G(arguments),a=g[0],b=g[1]

        if(U(a)){ return g.p? w.pluginData.data: w.pluginData}

        if(U(b)){ w.pluginData=a;return w}
        w.pluginData[a]=b
        return w }
    return w
}



proto()


function proto(){

    tw.toggle = function () {

        var isPaused = this._paused

        if (isPaused) {
            this.setPaused(false)
        }

        else {
            this.setPaused(true)
        }

        return this

    }

    i=cjs.DisplayObject.prototype
    i.tw =  function () {
        var g = G(arguments), tw
        g.unshift(this)
        return _tw = tw = cjs.Tw.apply(null, g)
    }
    i.twL = function () {
        var g = G(arguments), tw
        g.unshift([this, 'l'])
        return tw = _tw = J.tween.apply(null, g)

    }
    i.sp = i.spin = function () {
        this.twL([{r: 360}, 4000]);
        return this
    }


}
cjs.Ea=cjs.Ease
cjs.ease = function(e){return cjs.Ease[oO('E', e)]} //Ea =

spr()
movie()
function movie() {

    cjs.tl=function(args){var tl = new cjs.Timeline()
        if(A(args)){

            tl.add(args)
        }
        return tl}
    cjs.mc=function(a,b,c,d){
        var mc = new cjs.MovieClip(a,b,c,d)
        return mc}

    mcPt()
    tlPt()
    function tlPt() {
        tl = cjs.Timeline.prototype
        tl.remove = tl.rm = function (a) {
            this.removeTween(a);
            return this
        }
        tl.currentLabel = tl.cL = function () {
            return this.getCurrentLabel()
        }
        tl.labels = tl.lb = function (a) {
            var t = this;
            if (U(a)) {
                return this.getLabels()
            }
            if (O(a)) {
                this.setLabels(a);
                return this
            }
            if (N(a) || S(a)) {
                return resolve(a)
            }
            return this
        }
        tl.add = function (tw) {
            var that = this

            this.addTween.apply(this, arguments)

            return this
        }
    }

    function mcPt() {
        mc = cjs.MovieClip.prototype
        mc.play = mc.p = function (a, b) {
            if (this.setPaused) {
                this.setPaused(false)
            } else {
                this.play()
            }
            if (D(b)) {

                if (this.gotoAndPlay) {
                    this.gotoAndPlay(a)
                }

                if (this.setPosition) {
                    this.setPosition(a, b)
                }

                return this
            }
        }
        mc.stop = mc.s = function (a, b) {


            if (D(b)) {

                if (this.gotoAndStop) {
                    this.gotoAndStop(a)
                }

                if (this.setPosition) {
                    this.setPosition(a, b)
                }

                return this
            }
        }
        mc.lb = function () {
            return this.getLabels()
        }
        mc.cL = function () {
            return this.getCurrentLabel()
        }
        mc.start = mc.startPos = mc.sP = function (a) {
            if (U(a)) {
                return this.startPosition
            }
            ;
            this.startPosition = a;
            return this
        }
        mc.mo = function (a) {
            if (U(a)) {
                return this.mode
            }
            this.mode = a;
            return tthis
        }
        mc.lp = function (a) { //loop
            if (U(a)) {
                return this.loop
            }
            this.loop = a
            return this
        }
        mc.auto = mc.aR = function (auto) {
            if (U(auto)) {
                return this.autoReset
            }
            this.autoReset = auto
            return this
        }
        mc.actions = mc.aE = function (enabled) {

            if (U(enabled)) {
                return this.actionsEnabled
            }

            this.actionsEnabled = enabled

            return this
        }
        mc.tl = function () {
            this.timeline.addTween.apply(this.timeline, arguments)

            return this
        }
    }
}



    cjs.scaleX = cX = function (a, b) {
        if (U(b)) {
            return a.scaleX
        }
        a.scaleX = b
        return a
    }
    cjs.scaleY = cY = function (a, b) {
        if (U(b)) {
            return a.scaleY
        }
        a.scaleY = b
        return a
    }
    cjs.scaleXY = cXY = function (a, x, y) {
        y = N(y) ? y : x
        cX(a, x)
        cY(a, y)
        return a
    }
    cjs.scaleXY = sxy = function xy(o, x, y) {
        o.scaleX = x;
        o.scaleY = y || x;
        return o
    }
    cjs.skewX = kX = function (a, b) {
        if (U(b)) {
            return a.skewX
        }
        a.skewX = b
        return a
    }
    cjs.skewY = kY = function (a, b) {
        if (U(b)) {
            return a.skewY
        }
        a.skewY = b
        return a
    }
    cjs.skewXY = kXY = function (a, x, y) {
        y = N(y) ? y : x
        kX(a, x)
        kY(a, y)
        return a
    }
    cjs.rY = cjs.regY = gY = function (a, b) {
        if (U(b)) {
            return a.regY
        }
        a.regY = b
        return a
    }
    cjs.rX = cjs.regX = gX = function (a, b) {
        if (U(b)) {
            return a.regX
        }
        a.regX = b
        return a
    }
    cjs.rxy = cjs.rXY = cjs.regXY = gXY = function (a, x, y) {
        y = N(y) ? y : x
        cjs.regX(a, x)
        cjs.regY(a, y)
        return a
    }
//rX =function(a){return a.rawX}
//rY =function(a){return a.rawY}
//bj=function(a){if(O(a)){   return O(a.ob)?a.ob:a   }}//return a??
    cjs.SL = cjs.bindSlide = SL = function (b, b2) {

        var g = G(arguments),

            b = g[0], b2 = g[1] || b

        return b.on('mousedown',

            function (e) {
                var bx = b2.x - e.rawX, by = b2.y - e.rawY

                b.on('pressmove', function (e) {

                    if (!g.p) {
                        b2.x = bx + e.rawX
                    }
                    if (!g.n) {
                        b2.y = by + e.rawY
                    }
                })
            }
        )

    }









    cjs.LS = cjs.bindReverseSlide = LS = function (b, b2) {
        var g = G(arguments),
            b = g[0],

            b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b

        return b.on(d, function (e) {
            var bx = b2.x + e.rawX, by = b2.y + e.rawY

            b.on(pm, function (e) {

                if (g.P) {
                    b2.x = bx - e.rawX
                }
                if (g.N) {
                    b2.y = by - e.rawY
                }

            })
        })
    }

    cjs.RT = cjs.bindRotate = RT = function (b, b2) {
        //b = what the control is
        //b2 what it should control (default = itself!)
        //if(g.p){  //b.rgc( '+' )   }

        var g = G(arguments), b = g[0], b2 = g[1] || b

        return b.on('mousedown', function (e) {
            var X = e.rawX, Y = e.rawY, r = b2.rotation
            b.on('pressmove', function (e) {
                b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
            })
        })
    }
    cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)


        var g = G(arguments), b = g[0], b2 = g[1] || b


        if (g.p) {  // b.rgc( '+' )
        }

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )


                })
            })

    }
    cjs.SC = cjs.bindScale = SC = function (b, b2) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'), pm = oE('pm'), b2 = b2 || b,
            cp = function (n) {
                return n < .2 ? .2 : n > 2 ? 2 : n
            }

        return b.on(d,

            function (e) {
                var X = e.rawX, Y = e.rawY,
                    sx = b2.scaleX,
                    sy = b2.scaleY

                b.on(pm,

                    function (e) {
                        if (g.n) {
                            b2.sXY(cp(sx + (
                                (e.rawX - X) / 200)),
                                cp(sy - ((e.rawX - X) / 200))
                            )

                        }

                        else if (g.p) {
                            cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                            cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
                        }

                        else {
                            b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
                        }
                    })
            }
        )
    }
    cjs.SK = cjs.bindSkew = SK = function (b) {
        var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b

        return b.on(d,
            function (e) {
                var X = e.rawX, Y = e.rawY
                b.on(pm, function (e) {


                    b2.kXY(
                        (e.rawY - Y) * .5, (e.rawX - X) * .5
                    )

                })
            })
    }
    cjs.TR = cjs.bindTransform = TR = function TR(b, b2, m) {
        var g = G(arguments),
            b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
        if (m == 'SL') {
            cjs.SL(b, b2);
            m = 'SC'
        }
        else if (m == 'SC') {
            cjs.SC(b, b2);
            m = 'RT'
        }
        else if (m == 'RT') {
            cjs.RT(b, b2);
            m = 'SL'
        }
        return b.on('pressup', function (e) {
            b.removeAllEventListeners();
            TR(b, b2, m)
        })
    }


    cjs.reggy = reggy = function (o, s) {

        s = s || o.parent

        s.bm('me', function (b) {

            b.W(40).H(40)

            I(function () {
                b.XY(o.x + o.regX, o.y + o.regY)
            }, 100)

        })


    }
    cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {

        var g = G(arguments), b = g[0], b2 = g[1] || b
        cjs.SL(b);
        cjs.RT(b, b2)
        if (g.p) {

            b.rgc('+')
        }

        if (g.N) {
            //    reggy(b,b2)
        }
    }
    cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d = oE('d'),
            pm = oE('pm'),
            b2 = b2 || b,
            m = g[2] || 'RT'


        //if(g.p){var s=St('y',1000)
        //    _t(b||5,function(i){s.a().bm(
        //        function(bm){bm.xy(i*50);TR(bm)})});return s}

        if (m == 'RT') {
            RT(b, b2);
            m = 'SK'
        }

        else if (m == 'SK') {
            SK(b, b2);
            m = 'RT'
        }

        return b.on(oE('pu'),
            function (e) {
                Do(b).O();
                RK(b, b2, m)
            })
    }
    testImgRegCenter = function () {
        mockStage()
        s.bm('me', function (bm) {
            b1 = bm
            bm.spin().drag()
        })

        s.bm('me', function (bm) {
            b2 = bm
            bm.sXY(0.5, 0.3).spin().drag()
        })

        s.A(c = cjs.circle(4).XY(200))

    }


    cjs.rtSh = cjs.rotateShake = function (bm) {
        $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
    }
    cjs.scSh = cjs.scaleShake = function (bm) {
        $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])

    }


function spr(){
    cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)}

    cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

        if(spriteSheet.images){

            spriteSheet=cjs.parseZoe(spriteSheet)
            spriteSheet=new cjs.SpriteSheet(spriteSheet)
        }


        return new cjs.Sprite( spriteSheet )

    }
    cjs.sprite100 = function(a){

        var spr = cjs.sprite(a)
        spr.rXY(50)
            .opacity(.8)
        return spr}
    cjs.parseZoe=function(sprObj){


        //fix source (needs a '/')
        sprObj.images[ 0 ] = S.eL( sprObj.images[0] )

        //set next to false, on all anims
        //_.e(sprObj.animations, function(anim){anim.next = false})


        //to do: parse it! (get rid of unnecessary json strings in keys)


        return sprObj}

    cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function(mc){

        ssb = new createjs.SpriteSheetBuilder()
        if(mc){ssb.A(mc)}

        return ssb}


    protos()
    function protos(){

        sprShPt()
        builderPt()

        s = cjs.Sprite.prototype
        s.p = function (what) {
            if (U(what)) {
                this.play()
            }
            else {
                this.gotoAndPlay(what)
            }
            return this
        }
        s.s = s.P = function (what) {
            if (U(what)) {
                this.stop()
            }
            else {
                this.gotoAndStop(what)
            }
            ;
            return this
        }
        s.skip = s.adv = function (num) {
            this.advance(num);
            return this
        }
        s.cA = s.cAn = s.currAnim = function () {
            return this.currentAnimation
        }
        s.cAF = currAnimFrame = function () {
            return this.currentAnimationFrame
        }
        s.cF = s.cFr = s.currFrame = function () {
            return this.currentFrame
        }
        s.fR = s.rate = function (rate) {
            if (U(rate)) {
                return this.framerate
            }
            this.framerate = rate
            return this
        }
        s.end = function (func) {
            func = func || function () {
                n = N(window['n']) ? n : 0
                $l('frame! ' + n++)
            }
            this.on('animationend', func)
            return this
        }

        function sprShPt() {
            ss = cjs.SpriteSheet.prototype
            ss.addFlipped = function (a, b, c) {
                cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
                return this
            }
        }
        function builderPt(){
            b = cjs.SpriteSheetBuilder.prototype
            b.Z = function (sc) {

                if (U(sc)) {
                    return this.scale
                }
                this.scale = sc;
                return this
            }
            b.maxW = function (sc) {
                if (U(sc)) {
                    return this.maxWidth
                }
                this.maxWidth = sc;
                return this
            }
            b.A = function (mc) {
                this.addMovieClip(mc)
                return this
            }
            b.complete = function (func) {
                this.on("complete", func)
                return this
            }
            b.async = function (funcNum, num) {
                if (F(funcNum)) {
                    this.complete(funcNum)
                    this.buildAsync(num)
                }

                else {
                    this.buildAsync(funcNum)
                }


                return this
            }
        }
    }




}
ob= cjs.DisplayObject.prototype
ob.grow = function(){ this.tw( [{sxy:10},10000]); return this }
ob.RT = function(){RT(this);return this}
ob.TR = function(){TR(this);return this}
ob.dg=ob.drag=ob.SL = function(){
    SL(this);
    return this
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