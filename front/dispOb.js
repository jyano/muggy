 //
i.rZero=   function(a){alert('i.rZero')
    var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
    if (g.p) {i.rX(0,'+').rY(0,'+')}
    else {i.rXY(0,0)}
    return i
//i.X(a, i.regX()-a, '+')
}

i.shad = function (color, x, y, blur) {
    var shadow = cjs.shad(color, x, y, blur)
    this.shadow = shadow
    return this
}
i.bd= i.bounds=function(a,b,c,d){var i=this
    this.nominalBounds = new cjs.Rectangle(a,b,c,d)
    return this
}////?????:
i.toFront = function () {alert('i.toFront')
    numChildren = this.parent.children.length
    this.P().setChildIndex(this, numChildren - 1)
    return this
}
i.RT = function(){var i=this; RT(i);return i}
i.belowStg = function () {alert('i.belowStg')
    return this.y > this.stg().H()
} //=ob.blSt



i.tf = function (pam) {alert('i.tf')
    if (O(pam) && F(pam.getTransform)) {
        pam = pam.getTransform()
    }
    if (A(pam)) {
        this.setTransform.apply(this, pam)
        return this
    }
    this.setTransform.apply(this, G(arguments))
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
i.bindBody = function (body) {
    alert('i.bindBody')
    var ob = this,
        b = body
    cjs.tick(function () {
        b.XY(ob.X(), ob.Y()).rt(ob.rt())
    })
    return ob
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

i.warpX = function (low, high, cush) {
    var ob = this,
        warp = M.warp(low, high, cush)
    cjs.tick(function () {
        ob.x = warp(ob.x)
    })

    return ob
}//wrx
i.warpY = function (low, high, cush) {
    var ob = this,
        warp = Math.warp(low, high, cush)
    cjs.tick(function () {
        ob.y = warp(ob.y)
    })
    return this
}//wry
i.warp = function (n) {
    n = n || 0
    var stage = this.getStage()
    this.warpX(0, stage.W(), n)
    this.warpY(0, stage.H(), n)
    return this
}//wr

function comp(){

    i.o=function(o){this.compositeOperation = o;return this}
    i.Ds= i.dO=function(){this.o('destination-out'); return this}
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
old=function() {
//ob.hel = function (a, b) {return ob.hasEventListener(oO('e', a))}
    i.tx = ob.test = function (x, y) {
        var ob = this
        if (J.isDisplayOb(x)) {
            return ob.tx(this.gTL(x))
        }
        if (O(x)) {
            y = x.y;
            x = x.x
        }
        return this.hitTest(x, y)
    }
    i.o = function (a, b, c, d, e) {
        alert('i.o')
        if (!Oo('e', a)) {
            return o.o('$', a, b, c, d)
        }
        var f = ob.on(oE(a),
            b.handleEvent ? b : b.ob ? b.ob : b.st ? b.st
                : function (e, data) {
                b(o, sJE(e), e)
            }, c, d, o, e)
        return function () {
            o.O(a, f)
            return _p(o.o, a, b, c, d, e)
        }
    }
    i.e = function (a, b, c) {
        alert('i.e')
        ob.dispatchEvent(a, b, c);
        return a
    }
    i.O = function (t, f) {
        alert('i.O')
        var g = G(arguments), t = g[0], f = g[1]


        if (F(t)) {
            $l('F(t)')
            return o.O('$', t)
        }

        t = oE(t)

        if (F(f)) {
            $l('F(f)')

            if (g.p) {
                ob.removeEventListener(t, f, true)
            }
            else if (g.n) {
                ob.removeEventListener(t, f, false)
            }
            else {
                $l('removing: ' + t + ' ' + _S(f))

                ob.removeEventListener(t, f)
            }
        }

        else {
            $l('!F(f)')
            if (S(t)) {
                ob.removeAllEventListeners(t)
            }
            else {
                ob.removeAllEventListeners()
            }
        }
        return o
    } //ob.wt=function(type){return o.willTrigger(type)}

}

