 //



old=function() {

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



    i.rZero=   function(a){alert('i.rZero')
        var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
        if (g.p) {i.rX(0,'+').rY(0,'+')}
        else {i.rXY(0,0)}
        return i
//i.X(a, i.regX()-a, '+')
    }


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

