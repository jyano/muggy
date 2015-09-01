cjs = createjs
T = cjs.Ticker
cjs.t = cjs.tick = function (fn) {var g=G(arguments)
    if(!g.n){fn()};
    T.on('tick', fn)
}
ctnr()
shape()
dispOb()
function ctnr(){
    cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
        return O(ct) && ct.addContainer
    }
    $Ct = function () {
        return new cjs.Container()
    }
    ct = cjs.Container.prototype
    ct.ct = function (x, y) {
        var ct = this, g = G(arguments), x = g[0], y = g[1]
        nCt = $Ct().a2(ct)
        if (N(g[0])) {
            nCt.XY(g[0], g[1])
        }
        if (F(g[0])) {
            g[0](nCt, ct)
        }
        if (g.p) {
            nCt.SL()
        }
        return nCt
    }
    ct.A = function () {
        var ct = this, g = G(arguments), $b = $('body')
        if (U(g[0]) && ct.st()) {
            $b.A(
                ct.st().canvas
            )
        }
        else if (N(g[0])) {
            $b.A(ct.st().canvas).abs(g[0], g[1])
        }
        else {
            _.e(g, function (g) {
                ct.addChild(g)
            })
        }
        return ct
    }

    ct.ch = ct.e = ct.each = function (func) {
        var children = []
        _.e(this.children, function (child) {
            children.push(child)
        })
        _.e(children,
            function (child) {
                func(child)
            }
        )
        return this
    }
    ct.ch=   ct.e=   ct.ix= ct.sChI=  ct.sChI= function(fn,n){
        var ct=this,CH
        if(N(n)){ct.setChildIndex(fn,n); return ct}
        CH=[]
        _.e(ct.children, function(ch){ CH.push(ch)})
        if(U(fn)){return CH}
        _.e(CH, function(ch){
            fn(ch)
        })
        return ct
    }

    ct.h = ct.shape = function (x, y, c, C, l, opt) {
        var ct = this,


            h = cjs.h(x, y, c, C, l, opt).a2(ct)

        return h.drag()
    }
    ct.t = ct.tick = function () {
        T.on('tick', this);
        return this
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
    St = function () {
        z()
        var g = G(arguments)
        st = s = $St(g[0] || 'p', 1200, 600)
        h = $h(0, 0).a2(s)
        if (g.p) {
            SL(h)
        }
        return s
    }
    st = cjs.Stage.prototype
    st.N = st.next = function (next) {
        if (U(next)) {
            return this.nextStage
        }
        ;
        this.nextStage = next;
        return this
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
}

function shape(){

    cjs.iH = function (h) {return O(h) && h.graphics}
    $H = function (a, b, c) {return new cjs.Shape(a, b, c)}
    $h = cjs.h = cjs.shape = cjs.shp = function (x, y, c, C, l) {
        var g = G(arguments),
            x = g[0],
            y = g[1],
            c = g[2],
            C = g[3],
            l = g[4],
            h

        if (cjs.iH(x)) {
            return new cjs.Shape(x.graphics)
        }

        h = new cjs.Shape()

        if (S(x)) {
            h.c(x, y, c)
        }

        else {

            if (N(x)) {
                h.X(x)
            }
            if (N(y)) {
                h.Y(y)
            }

            if (S(c)) {
                h.c(c, C, l)
            }


            else if (N(c)) {
                h.l(c)
            }
        }
        //if(g.N){h.drag()}
        return h
    }
    $Gx = function () {
        return new cjs.Graphics
    }
    gx = cjs.Graphics.prototype
    h =  cjs.Shape.prototype
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
    h.mt = function () {//h.pol=
        var h = this,
            gx = h.graphics,
            g = arguments, x = g[0], y = g[1], v
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
    h.dl = h.line = function () {
        var g = G(arguments), o
        o = N(g[0]) ? {x1: g[0], y1: g[1], x2: g[2], y2: g[3]} :
        {x1: g[0].x, y1: g[0].y, x2: g[1].x, y2: g[1].y}
        this.mt(o.x1, o.y1).lt(o.x2, o.y2)
        return this
    }



    cjs.iT=function(t){
        if(O(t)){
            return (  t.textBaseline   )
        }
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

    /*

    linGr(); radGr()
    function linGr() {
        h.lg = function me() {
            var h = this, gx = h.graphics, g = G(arguments), o
            if (A(g[0])) {
                return me.apply(null, g[0])
            }
            o = O(g[0]) ? g[0]
                : _.extend({c1: g[0], c2: g[1]},
                N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                    : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                    : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})

            o.c1 = oO('c', o.c1 || 'z');
            o.c2 = oO('c', o.c2 || 'w')
            o.s1 = _.tN(o.s1);
            o.s2 = _.tN(o.s2, 1)
            o.x1 = _.tN(o.x1);
            o.y1 = _.tN(o.y1)
            o.x2 = _.tN(o.x2);
            o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
            return o
        }
        h.lf = function me() {
            var h = this, gx = h.graphics, g = G(arguments), o

            if (A(g[0])) {
                return me.apply(h, g[0])
            }

            o = h.lg.apply(h, g)

            gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)

            return h
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
    }
    function radGr() {
        h.rg = function (o) {
            var h = this, gx = h.graphics, g = G(arguments), o
            if (A(g[0]) && A(g[1])) {
                $l('AA')
                h.graphics.rf(
                    [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7])
                return h
            }
            o = O(g[0]) ? g[0] :
                S(g[1]) ? _.extend({c1: g[0], c2: g[1]},
                    N(g[7]) ? {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                        : N(g[5]) ? {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                        : N(g[4]) ? {x2: g[2], r1: g[3], r2: g[4]}
                        : N(g[3]) ? {r1: g[2], r2: g[3]} : {r2: g[2]})
                    : S(g[0]) ? {c2: g[0]} : {}
            b2d.grad(o)
            o.x2 = _.tN(o.x2, o.x1)
            o.y2 = _.tN(o.y2, o.y1)
            o.r1 = _.tN(o.r1, 1);
            o.r2 = _.tN(o.r2, 100)
            return o

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
    }
*/

    h.lg = function self() {
        var g = G(arguments), o//h=this, gx=h.graphics,
        if (g.A) {
            return self.apply(null, g.f)
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
    h.lf = function () {
    var h = this, gx = h.graphics, g = G(arguments), o

        o = h.lg(g)

        gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)

        return h
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


}
function dispOb(){
    cjs.iDO= function(i){return O(i)&&F(i.getStage)}
    i = cjs.DisplayObject.prototype
    i.St = i.S = i.st = function () {
        return this.getStage()
    }
    i.P = function () {
        return this.parent
    }
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
    i.rC= function(){
        var i=this,g=G(arguments), x, y,hW,hH
        x=i.W()/2
        hW=x
        y=i.H()/2
        hH=y
        return (g.p)? i.rX(hW,'+').rY(hH,'+'): i.rXY(hW,hH)
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
    i.al = function (al) {
        var i = this
        if (U(al)) {return i.alpha}
        i.alpha = al;
        return i
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
    i.gTL = function (x, y) {
        alert('i.gTL')

        if (O(x)) {
            y = x.y;
            x = x.x
        }

        return this.globalToLocal(x, y)

    }
    i.u = function () {this.update();return this}
    i.n = function (name) {
        alert('i.n')
        if (U(name)) {
            return this.name
        }
        this.name = name;
        return this
    }
    i.uM =  function () {
        var ob = this, st = ob.stage


        if (st && st.mouseInBounds) {
            return ob.tx(ob.gTL(st.m().x, st.m().y))
        }


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
i.rgc=    function(){
    var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
    return (g[0]===0)?
        i.rXY(0,0,(g.p?'+': null))
        : i.rXY(x,y,(g.p?'+': null))
}