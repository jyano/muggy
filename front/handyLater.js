alrr()
function alrr(){
    $.fn.os = function () {
        alert('fn.os')
        return this.offset()}
    $.fn.sz=function(sz){
        alert('fn.sz')
        return this.at('size', sz)}
    $.fn.fCt=function(str){
        alert('fCt')
        return  this.fi(":contains("+ str +")")
    }
    $.fn.getPosition = $.fn.getTotalOffset = function () {
        alert('$.fn.getPosition')
        var e = this, x = 0, y = 0
        while ($.tEl(e) && e.tagName) {

            y += e.offsetTop

            x += e.offsetLeft

            if (isBodyElement(e)) {
                e = 0
            }

            e = e.offsetParent || e
        }
        return {x: x, y: y}
    }//just gets the TOTAL offset of ANY element
    $.fn.osP=function(){
        alert('fn.osP')
        return this.offsetParent} // not a fn?
//$w=window; $$w=$(window)
}
function moreTran(){

    cjs.bindReverseSlide = LS = function (b, b2) {
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

    cjs.bindRotate = RT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)
        //if(g.p){  //b.rgc( '+' )   }

        var g = G(arguments), b = g[0], b2 = g[1] || b

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {
                    b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
                })
            })
    }

    cjs.bindRotate2 = RTT = function (b, b2) {


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

    cjs.bindRotate = RT = function (b, b2) {


        //b = what the control is
        //b2 what it should control (default = itself!)
        //if(g.p){  //b.rgc( '+' )   }

        var g = G(arguments), b = g[0], b2 = g[1] || b

        return b.on('mousedown',

            function (e) {

                var X = e.rawX, Y = e.rawY, r = b2.rotation

                b.on('pressmove', function (e) {


                    b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )


                })
            })

    }
    cjs.bindRotate2 = RTT = function (b, b2) {


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
    cjs.bindSkew = SK = function (b) {
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
    cjs.reggy = reggy = function (o, s) {

        s = s || o.parent

        s.bm('me', function (b) {

            b.W(40).H(40)

            I(function () {
                b.XY(o.x + o.regX, o.y + o.regY)
            }, 100)

        })


    }
    cjs.bindSlideAndRotate = KK = function (b, b2) {

        var g = G(arguments), b = g[0],
            b2 = g[1] || b
        cjs.bindSlide(b);
        cjs.bindRotate(b, b2)
        if (g.p) {

            b.rgc('+')
        }

        if (g.N) {
            //    reggy(b,b2)
        }
    }
    cjs.bindRotateThenSkew = RK = function (b, b2, m) {
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
    cjs.bindScale = SC = function (b, b2) {
        var g = G(arguments), b = g[0], b2 = g[1],
            d =oO('e','d'),
            pm = oO('e','pm'), b2 = b2 || b,

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
    cjs.bindTransform = TR = function TR(b, b2, m) {

        var g = G(arguments),
            b = g[0],
            b2 = g[1],

            b2 = b2 || b, m = g[2] || 'SL'

        if (m == 'SL') {
            cjs.bindSlide(b, b2);
            m = 'SC'
        }

        else if (m == 'SC') {
            cjs.bindScale(b, b2);
            m = 'RT'
        }

        else if (m == 'RT') {
            cjs.bindRotate(b, b2);
            m = 'SL'
        }

        return b.on('pressup', function (e) {

            b.removeAllEventListeners();

            TR(b, b2, m)

        })
    }

    cjs.LS = cjs.bindReverseSlide =  function (b, b2) {
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
    cjs.SK = cjs.bindSkew =  function (b) {
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
    cjs.KK = cjs.bindSlideAndRotate =   function (b, b2) {

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
    cjs.RK = cjs.bindRotateThenSkew =  function (b, b2, m) {
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

        return b.on(oE('pu'), function (e) {
            Do(b).O();
            RK(b, b2, m)
        })
    }
    cjs.rtSh = cjs.rotateShake = function (bm) {
        $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
    }
    cjs.scSh = cjs.scaleShake = function (bm) {
        $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])

    }
    old=function() {
        cjs.reggy = function (o, s) {
            s = s || o.parent
            s.bm('me', function (b) {
                b.W(40).H(40)
                I(function () {
                    b.XY(o.x + o.regX, o.y + o.regY)
                }, 100)

            })


        }
        cjs.rY =  function (a, b) {alert('cjs.rY')
            if (U(b)) {return a.regY}
            a.regY = b
            return a
        }
        cjs.rX =  function (a, b) {alert('cjs.rX')
            if (U(b)) {
                return a.regX
            }
            a.regX = b
            return a
        }


        cjs.rxy = cjs.rXY = cjs.regXY = gXY = function (a, x, y) {
            y = N(y) ? y : x
            cjs.rX(a, x)
            cjs.rY(a, y)
            return a
        }
//cX=cY=cXY=sxy=kX=kY=kXY=gY=gX=gX=function(){alert('createCoreTran')}

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
//alert
        testImgRegCenter = function () {alert('testImgRegCenter')
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
        i.rZero = function (a) {
            alert('i.rZero')
            var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
            if (g.p) {
                i.rX(0, '+').rY(0, '+')
            }//i.X(a, i.regX()-a, '+')
            else {
                i.rXY(0, 0)
            }
            return i
        }//

        i.rgc=    function(){alert('i.rgc')
            var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
            return (g[0]===0)?
                i.rXY(0,0,(g.p?'+': null))
                : i.rXY(x,y,(g.p?'+': null))
        }
    }
}
function imgLater(){
    //good for wappy
//gets rid of auto-scaling quirk/*     i.i=i.l=i.load(function(i){     i._ =i[0]     //i = $(i.target)     // img.W( img.W() )     // img.H( img.H() ) })*/
// $.im = function(img, func){i = $.img().src(img);func(i[0]);return i}//s$(e).contains('data:')

    //gets rid of auto-scaling quirk
    /*
     i.i=i.l=i.load(function(i){
     i._ =i[0]
     //i = $(i.target)
     // img.W( img.W() )
     // img.H( img.H() )
     })*/
    function old(){

        $.i = $.img = function(){var g=G(arguments),i=_$Img(),

            o= F(g.f)? {fn: g.f}: {sr: g.f, fn: g.s}

            i.i=function(sr){
                if(U(sr)){return this[0].src}
                this.src($src(sr));
                return this
            }
            i.r=function(fn){
                this.load(function(e){
                    fn(e, i)
                });
                return this
            };

            i.r(function(_i){i._=_i.target});

            if(o.fn){
                i.r(o.fn)
                i.load(function(ev){o.fn($(ev.target), ev)})

            }

            if(o.sr){

                i.src($src(o.sr))
                i.i(o.sr)
            }

            //i.A()
            return i
        }

        C = function (a) {

            if (_.isObject(a = E(a) || a)) {
                return a.canvas ? a.canvas :

                    s$(a.toString()).contains('Canvas')

                        ? Q(a)[0] : 0
            }
        }
        E = function E(a, b, c) {
            if (S(b)) {
                return s$(a).endsWith(b)
            }
            if (F(b)) {
                return _.every(a, b, c)
            }
            if (O(a)) {

                a = O(a.e) ? a.e
                    : O(a.c) ? a.c
                    : a

                a = $(a)[0]

                if (_.isElement(a)) {
                    return a
                }

            }
        }
        $.extension = _x = function (a, b) {
            //if(_.isString(a)){
            return s$(a).contains('.') ? a : s$(a).ensureRight(b || '.png').s
            //}
        }
        $.i=$.img= function(){var g=G(arguments), i= _$Img(),

            o= F(g.f)? {fn: g.f}: {sr: g.f, fn: g.s}
//i.l(function(e){o.fn($(e.target), e)})


            return i
        }
        //i.load(function(i){$(i.target)}) //var i = // i.W( i.W() ) // i.H( i.H() )//gets rid of auto-scaling quirk

    }
    alrt()
    function alrt(){
        $.C=function(){
            alert('$.C')
            z();
            c = $.c('y',900,500).A().drag()
            x = c.ctx()
        }
        _.px = function (a) {
            alert('_.px')
            return _.nN(a) ? a + 'px' : a
        }
        $.imageSizeFuncCan = function(image, size, func){
            alert('$.imageSizeFuncCan')
//xc=
            var x = $.c(100, 100).C('X')
            if(image){ x.fit(image) }
            //if(size){  x.Z(size) }
            if(func){  x.click(func) }
            return x
        }
        $.fn.cv=$.fn.can=function(){
            alert('$.fn.cv can')
            var c=  $.can.apply($, G(arguments))
            this.A(c)
            return this
        }
        $.i2 = $.img2 = function (img, func) {
            alert('$.i2 img2')
            i = $.img().src(img)

            func(i[0])

            //s$(e).contains('data:')
            return i
        }}
}
function htmlLater(){
    $t = function(a, b){if(b2d.test){
        var g=G(arguments), a=g[0], b=g[1],str
        if(D(b)){ str='||'
            _.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
            str += '|'}
        else {str = a.toString()}
        $l(str)}
        return a
    }
    ipsum()
    function ipsum(){

        $.ips=function(len){   len = len || 1;
            var str = '';
            _.t(len, function(){
                str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
            });
            return str}
        $.ipsP=function(len){return $.p().A($.ipsum(len) )}


        ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
        'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
        ips2 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
        'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
        'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
        'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
        'te feugait nulla facilisi.'

        ips3 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
        'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
        'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
        'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
        'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
        'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
        'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
        'ut laoreet dolore magna aliquam erat volutpat.'

        $.fn.ipsum=function(){    var that =this

            _.each(arguments, function(num){
                that.A( $.ipsum(num) )
            })

            return this}
        $.fn.ipsumP=function(){
            var that =this

            _.each(arguments, function(num){
                that.A( $.ipsumP(num) )
            })
            return this}
        $.fn.ips = $.fn.ipsum = function () {
            var that = this

            _.each(arguments, function (num) {
                that.A($.ipsum(num))
            })

            return this
        }
        $.fn.ipsumP = function () {
            var el = this

            _.e(arguments, function (num) {
                el.A($.ipsumP(num))
            })
            return el
        }

    }

}