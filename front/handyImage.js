$.tEl = function(a, b, c) {
    if (O(a)) {
        a = O(a.e) ? a.e : O(a.c) ? a.c : a
        a = $(a)[0]
        if (_.isElement(a)) {return a}}
}
img()
can()
ctx()
function img(){
    $.iI=function(i){
        if(O(i)){
            return S($(i)[0].src)
        }
    }
    $.i= $.img=function(srce, fn){
        _Img=function(){return new Image()}
        _$Img=function(){
            return $(_Img())}
        var g=G(arguments), o,i;
        $.im = function(img, func){
            i = $.img().src(img);
            func(i[0]);
            //s$(e).contains('data:')
            return i}
        o= F(g[0])? {fn:g[0]}: {src:g[0], fn:g[1]};
        i = $( new Image() );
        i.i=function(src){
            if(U(src)){return this[0].src}
            this.src($.src(src));
            return this
        }
        i.r=function(fn){
            this.load(function(e){
                fn(e, i)
            })
            return this
        }
        i.r(function(_i){i._=_i.target})
        if(o.fn){i.r(o.fn)} //i.l(function(e){o.fn($(e.target), e)})
        if(o.src){i.i(o.src)}
        //i.A()
        return i


    }
    $.fn.bg = $.fn.bgI = function (url) {//set background image
        this.bgI('url("' + $.src(url) + '")');
        return this
    }

    $.fn.background = function (bg) {
        if (U(bg)) {
            return this.css('background')
        }
        this.css('background', bg)
        return this
    }
    $.fn.backgroundPosition = function (bg) {
        if (U(bg)) {
            return this.css('backgroundPosition')
        }
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.bg=function(bg){
        if(U(bg)){return this.css('background')}
        this.css('background', bg)
        return this
    }
    $.fn.bgP=function(bg){
        if(U(bg)){return this.css('backgroundPosition')}
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.bg = $.fn.bgI = function (url) {//set background image
        this.bgI('url("' + _.src(url) + '")');
        return this
    }
    $.fn.bp = $.positionBackgroundImage = function (x, y) {
        var g = G(arguments), x = g[0], y = g[1];
        x = N(x) ? x : 0;
        y = N(y) ? y : 0;
        this.css({backgroundPos: x + 'px ' + y + 'px'});
        return this

    }

    $.src =    function f(e){
        if( e.image ){ e=e.image}
        if($.tCan(e) ){ e = $.tCan(e) }
        if( e.src ){ e = e.src}
        if( e.toDataURL ){  e= _.tDU(e) }
        return s$(e).contains('data:')?  e
            :  S(e) ? _.src(e)
            : 0
    }
    $.fn.src= function(a){
    if( U(a) ){return this.attr('src')}

    this.attr('src', $.src(a) )

    return this
}
}
function can(){
    $.tC= $.tCan = function (a) {
        if (_.isObject(a = $.tEl(a) || a)) {
            return a.canvas ? a.canvas :
                s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
        }
    }
    $.iC = $.isCan = function (can) {alert('$.iC $.isCan')
        if (O(can)) {return $(can)[0].constructor.name == "HTMLCanvasElement"}
    }
    $.fit = function (a, b, c) {
        return $.c(c || 'r', b || 700, b || 700).A().fit(a || 'me')

    }
    $.c=$.can=function(c, width, h, x,y){var g=G(arguments), o, el

        o = g.S_?
        {c: g.f, w: g.s, h: g.t, x:g[3], y:g[4]}:
        {w: g.f, h: g.s, x: g.t, y: g[3] }
        o.w = o.w|| 1200
        o.h = o.h|| 600
        o.c = o.c || 'x'
        el = $('<canvas>')
        el.attr({width: o.w, height: o.h})
        el.C(o.c)
        if(N(o.x)){ el.abs(o.x, o.y) }
        if(g.p){el.drag()}
        el.A().al(.8)
        return superCanvas(el)
        function superCanvas(el){
            el = $(el)

            //to be called internally by $.c //works on FIRST canvas in jquery obj
            el.canvas = el[0]

            el.context = el.canvas.getContext('2d')
            el.stage = new cjs.Stage(el.canvas) ///////////////////////////////

            _superCanvas(el)
            return el

            function _superCanvas(el){
                el.W = function (width) {
                    var args = G(arguments)
                    width = args[0]
                    if (U(width)) {
                        return this.attr('width')
                    }
                    if (args.N) {
                        var dataUrl = this.toDataURL()
                    }
                    this.attr('width', width)
                    if (args.N) {
                        this.fit(dataUrl)
                    }
                    return this
                }
                el.H = function (height) {
                    var args = G(arguments)
                    height = args[0]
                    if (U(height)) {
                        return this.attr('height')
                    }
                    if (args.N) {
                        var dataUrl = this.toDataURL()
                    }
                    this.attr('height', height)
                    if (args.N) {
                        this.fit(dataUrl)
                    }
                    return this
                }
                el.WH = function (w, h) {

                    if (U(w)) {
                        var width = this.W(),
                            height = this.H()
                        return {
                            width: width, w: width,
                            height: height, h: height
                        }
                    }

                    h = h || w

                    return this.W(w).H(h)
                }
                el.Z = function (d) {
                    d = d || 5;
                    return this.WH(d * 100, d * 100)
                }
                el.offsetLeft = el.l = function (theOffset) {

                    if (!theOffset) {

                        return offsetLeft(x.q)
                    }

                    return parseInt(theOffset - x.offsetLeft())
                };
                //  el.ox=function(){return x.q.q.offset().left}
                el.offsetTop = el.t = function (y) {
                    if (!y) {
                        return offsetTop(y.q)
                    }
                    ;
                    return parseInt(y - x.offsetTop())
                };
                //  el.oy=function(){return x.q.q.offset().top}
                el.copy = function () {
                    el.img.src(el.toDataURL())
                    return el
                }
                el.paste = function () {
                    var g = G(arguments)
                    if (g.N) {
                        el.clearRect()
                    }
                    if (g.p) {
                        el.fit(el.img)
                    }
                    else {
                        el.draw(el.img.src())
                    }
                }
                el.save = function () {
                    el.context.save()
                    return el
                }
                el.restore = function () {
                    el.context.restore()
                    return el
                }
                //dont mix up with element/jquery alpha
                //maybe opacity for element and alpha for canvas?
                el.globalAlpha = el.alpha = el.op = function (alpha) {
                    if (U(alpha)) {
                        return this.context.globalAlpha
                    }
                    this.context.globalAlpha = alpha

                    return this
                }
                el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
                    if (U(compOp)) {
                        return this.context.globalCompositeOperation
                    }
                    this.context.globalCompositeOperation = oO('g', compOp)
                    return this
                }
                //normal prop (as methods)
                el.lineWidth = function (w) {
                    if (U(w)) {
                        return el.context.lineWidth
                    }
                    el.context.lineWidth = w
                    return el
                }
                el.lineCap = function (w) {
                    if (U(w)) {
                        return el.context.lineCap
                    }
                    el.context.lineCap = w
                    return el
                }
                el.lineJoin = function (w) {
                    if (U(w)) {
                        return el.context.lineJoin
                    }
                    el.context.lineJoin = w
                    return el
                }
                el.URL = el.dataURL = el.toDataURL = function () {
                    return el.canvas.toDataURL()
                }
                //wap specific
                el.snap = function (func) {

                    pams = {

                        d: el.toDataURL(),

                        dats: el.dats

                    }

                    $.post('/img', pams, func)

                }
                el.img = $.img()
                el.img.src(el.toDataURL())
                el.dots = function () {

                    el.copy()
                    el.DOTS = []
                    el.dats = []

                    el.$(function (x, y) {

                        x = parseInt(x)
                        y = parseInt(y)

                        el.cir(x, y)

                        el.DOTS.push([x, y])
                        el.dats.push(x)
                        el.dats.push(y)
                        el.line(el.DOTS)

                    })


                    el.$$(function (X, Y) {
                        var du
                        //el.C('X')
                        el.off('click')
                        el.closePath()  //el.paste() // el.copy()  //el.save()
                        el.clear() //du = el.toDataURL()
                        el.clip()
                        el.paste() //el.fit(du)
                    })

                    return el
                }
                el.me = function me(n) {//randomly draw my face
                    var g = G(arguments), n = g[0] || 200
                    if (x.me.d) {
                        clearInterval(x.me.d);
                        x.me.d = false
                    }
                    else {
                        x.me.d = I(function () {
                            x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
                        }, n)
                    }
                    return x
                }
                el.me.shouldDrawMeId = false
                el.mugX = function (m) {
                    qP('/mug', {u: m}, function (m) {
                        x.fit(m)
                    })
                    return x
                }
                el.tick = function () {
                    var ctx = this.ctx()
                    ctx.tick.apply(ctx, arguments)
                    return this
                }
                el.URL = el.dataURL = el.toDataURL=function(){
                    return el.canvas.toDataURL()
                }



                superCanvasDraw(el)
                superCanvasGradient(el)
                superCanvasPixels(el)
                superCanvasText(el)
                superCanvasTransform(el)
                superCanvasPath(el)
                superCanvasEvents(el)
                superCanvasShadow(el)


                function superCanvasGradient(el) {
                    CanvasGradient.prototype.stop = function (num, col) {
                        var that = this

                        if (N(num)) {
                            this.addColorStop(num, oO('c', col))
                        }

                        if (A(num)) {
                            _.each(arguments, function (arg) {
                                that.stop(arg[0], arg[1])
                            })
                        }

                        return this
                    }
                    var addColorStop = function rc(gradient, stop, color) {

                        // pass only a gradient -> function with gradient curried
                        // add a color stop to a gradient

                        if (U(stop)) {
                            return _.partial(rc, gradient)
                        }

                        gradient.addColorStop(stop, oO('c', color))

                        return gradient
                    }
                    var SuperGradient = function (gradient) {
                        gradient.stop = function (stop, color) {
                            addColorStop(gradient, stop, color);
                            return gradient
                        }


                        gradient.stops = function (stopObject) {
                            _.e(stopObject,
                                function (v, k) {
                                    var o = S(v) ? {k: k, v: v} : {k: v, v: k}
                                    addColorStop(gradient, o.k, $r('c', o.v))
                                })
                        }
                        return gradient
                    }

                    el.linearGradient = el.lG = el.createLinearGradient = function (a, b, c, d) {
                        a = a || 0
                        b = b || 0
                        c = c || this.W()
                        d = d || this.H()
                        return SuperGradient(this.context.createLinearGradient(a, b, c, d))
                    }
                    el.linGradBlackToWhite = function () {
                        grd = this.linearGradient(0, 0, this.W(), 0)
                        grd.stop(0, "black").stop(1, "white")
                        this.fillStyle(grd)
                        this.fillRect()
                    }
                    el.linGradDiagnal = function (grd) {
                        grd = grd || this.lG()
                        grd.stop(0, 'r')
                        grd.stop(.1, 'r')
                        grd.stop(.15, 'b')
                        grd.stop(.2, 'r')
                        grd.stop(.5, 'y')
                        grd.stop(1, 'b')
                        this.fillStyle(grd)
                        this.fillRect()
                        return this
                    }
                    el.radialGradient = el.rG = el.createRadialGradient = function rg() {
                        var g = G(arguments)
                        g[0] = g[0] || 200
                        g[1] = g[1] || 200
                        g[2] = g[2] || 100
                        g[3] = g[3] || 250
                        g[4] = g[4] || 250
                        g[5] = g[5] || 800
                        return this.context.createRadialGradient(g[0], g[1], g[2], g[3], g[4], g[5])
                    }
                    el.radGradSample = function () {

                        var grd = this.rG()

                        addColorStop(grd, 0, 'r')
                        addColorStop(grd, .15, 'b')
                        addColorStop(grd, .2, 'r')
                        addColorStop(grd, .5, 'y')
                        addColorStop(grd, 1, 'b')

                        this.fillStyle(grd)
                        this.fillRect()
                        return this
                    }
                    el.growingSun = function () {
                        var that = this

                        var a = 0,
                            b = 1000,
                            grd

                        var func = function () {

                            a += 1
                            b -= 2

                            grd = that.rG(200, 200, a, 290, 270, b)

                            grd.addColorStop(.1, 'Yellow')

                            grd.addColorStop(.3, 'Red')

                            grd.addColorStop(1, 'Violet')

                            //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )

                            that.fillStyle(grd)
                            that.fillRect()


                        }

                        setInterval(func, 100)

                    }
                    el.pattern = el.createPattern = function (im, pat) {
                        //im = im || $.img('me')[0]
                        var pattern = this.context.createPattern(im, pat || 'repeat')
                        return pattern
                    }
                    el.testPattern = function () {
                        var that = this
                        $.img('me', function (img) {
                            var pattern = that.pattern(img[0], 'repeat')
                            that.fillStyle(pattern).fillRect()
                        })


                    }
                }
                function superCanvasPixels(el) {
                    el.gD = el.getData = function (x, y, w, h) {
                        //historic.. dont delete ! data = x('G', X, Y, w, h).res


                        var g = G(arguments),

                            x = g[0] || 0,
                            y = g[1] || 0,
                            w = g[2] || this.W(),
                            h = g[3] || this.H(),

                            data = this.context.getImageData(x, y, w, h)

                        // data.h = data.height
                        // data.w = data.width
                        // data.d = data.data

                        return data
                    }
                    el.pD = el.putData = function (data, x, y) {
                        x = x || 0
                        y = y || 0
                        this.context.putImageData(data, x, y)
                        return this
                    }
                    el.gP = el.getPut = function (a, x, y) {
                        var g = G(arguments),

                            a = g[0],
                            x = g[1],
                            y = g[2],

                            data = this.gD.apply(this.context, a)
                        if (g.n) {
                            this.clear()
                        }
                        return x.pD(data, x, y)

                    }
                    el.pixelsNegative = function () {


                        var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
                            data = imgData.data


                        for (var i = 0; i < data.length; i += 4) {
                            data[i] = 255 - data[i];
                            data[i + 1] = 255 - data[i + 1]
                            data[i + 2] = 255 - data[i + 2]
                            data[i + 3] = 255
                        }

                        this.pD(imgData) //  this.pD(data,0,0)


                    }
                    el.pixelsInvert = function () {

                        var imgData = this.gD(),
                            data = imgData.data


                        for (var i = 0; i < data.length; i += 4) {
                            data[i] = 225 - data[i];
                            data[i + 1] = 225 - data[i + 1]
                            data[i + 2] = 225 - data[i + 2]

                        }

                        this.pD(imgData)


                    }
                    el.pixelsGrayscale = function () {

                        var imgData = this.gD(),
                            data = imgData.data


                        for (var i = 0; i < data.length; i += 4) {
                            var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                            data[i] = avg
                            data[i + 1] = avg
                            data[i + 2] = avg
                        }

                        this.pD(imgData) //  this.pD(data,0,0)


                    }
                    el.pixelsFade = function () {


                        var imgData = this.gD(),
                            data = imgData.data

                        for (var i = 7; i < _.size(data); i += 4) {
                            data[i] = 90
                        }

                        this.pD(imgData)

                        return el
                    }


                }
                function superCanvasTransform (el) {

//give scale cos(rads), skew:sin(rads)  ??
                    el.norm = function () {
                        el.context.scale(this.W() / 10, this.H() / 10)
                        return this
                    }


                    el.scale = el.sc = function (X, Y) {
                        var g = G(arguments),
                            X = g[0] || 1, Y = g[1] || X
                        x.x.scale(X, Y)
                    }
                    el.translate = el.tr = function (X, Y) {
                        var g = G(arguments),
                            X = g[0] || 1, Y = g[1] || X
                        x.x.translate(X, Y)
                    }
                    el.rotate = el.rt = function (r) {
                        var g = G(arguments),
                            r = g[0] || 1
                        //r=pi(-6)*r
                        //x.fr(0,0,1,1)
                        //x({f:$r('c')
                        x.x.rotate(r)
                    }
                    el.transform = el.tf = function rc(a, c, e, b, d, f) {
                        var g = G(arguments)
                        if (g.p) {
                            return rc(2, 0, 0, 2, 0, 0)
                        }
                        return x('t', a, c, e, b, d, f)
                    }
                    el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
                        var g = G(arguments)
                        if (g.p) {
                            return rc(2, 0, 0, 2, 0, 0)
                        }
                        return x('st', a, c, e, b, d, f)
                    }


                    return el
                }
                function superCanvasText(el) {

                    el.font = function (font) {
                        this.context.font = $l(HTML5.font(font))
                        return this
                    }

                    el.strokeText = function (t, X, Y) {
                        var g = G(arguments),
                            t = g[0],

                            X = g[1] || 100,
                            Y = g[2] || X

                        this.context.strokeText(t, X, Y)

                        return this
                    }
                    el.fillText = function (t, X, Y) {
                        var g = G(arguments),
                            t = g[0],
                            X = g[1] || 100,
                            Y = g[2] || X
                        if (g.p) {
                            this.tx(t, X, Y, '-')
                            this.tx(t, X, Y)
                        }
                        else this.context.fillText(t, X, Y)
                        return this
                    }
                    el.measureText = el.measure = function (t) {
                        return this.context.measureText(t)
                    }
                    el.textWidth = function (t) {
                        return parseInt(this.measureText(t).width)
                    }
                    el.centerHorizontalText = function (text, height) {

                        this.fillText(text,
                            this.W() / 2 - this.textWidth(text) / 2,
                            height
                        )

                        return this
                    }


                }
                function superCanvasDraw(el) {

                    //this just a simple proxy to drawImage // dont use?
                    el.drawImage = el.dI = function () {
                        var el = this, g = G(arguments)

                        g[1] = N(g[1]) ? g[1] : 0
                        g[2] = N(g[2]) ? g[2] : 0

                        $(el)[0].getContext('2d').drawImage.apply(
                            $(el)[0].getContext('2d'), g
                        )
                    }

                    //this will create the image (from string), and then draw it
                    el.draw = function () {
                        var el = this, g = G(arguments), i = g[0]
                        $.i(i, function (e, i) {

                            $l('draw')
                            ii = i
                            g[0] = i[0]
                            el.dI.apply(el, g)
                        })

                    }


                    el.fit = function f(i, x, y) {
                        var el = this

                        $l('fit: - el.W():' + el.W())
                        i = i || 'me'
                        x = x || 0
                        y = y || 0
                        el.draw(i, x, y, el.W(), el.H())
                        //el.draw(img, X, Y, el.width(), el.height())
                        return el
                    }


                    el.drawMug = el.me = function me(interval) {
                        //randomly draw my face

                        var that = this, g = G(arguments), args = g,

                            interval = args[0] || 200

                        if (that.drawMug.shouldDrawId) {

                            clearInterval(that.drawMug.shouldDrawId)

                            that.drawMug.shouldDrawId = false
                        }

                        else {

                            that.drawMug.shouldDrawId = setInterval(function () {

                                that.draw(window['mug'] || 'me', _.random(that.W() - 200), _.random(that.W() - 200))

                            }, interval)
                        }

                        return this
                    }
                    el.drawMug.shouldDrawId = false

                    el.fitMug = el.mug = function (user) {

                        var that = this

                        $.post('/mug', {u: user}, function (userMug) {
                            that.fit(userMug)
                        })

                        return this
                    }

                    el.crop = function rc(x1, y1, x2, y2) {

                        if (A(x1)) {

                            return rc(
                                x1[0], x1[1],
                                x1[2] - x1[0],
                                x1[3] - x1[1]
                            )
                        }

                        this.context.drawImage(x, x1, y1, x2, y2, 0, 0, this.W(), this.H())
                        return this
                    }


                    el.crop2 = function rc(x1, y1, x2, y2) {
                        if (A(x1)) {
                            return rc(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
                        }

                        return el.draw(
                            el.toDataURL(),
                            x1, y1, x2, y2,
                            0, 0, this.W(), this.H()
                        )

                    }


                    el.scaleImCen = function (img, s) {

                        var w = this.W(), h = this.H(), s = s || 1

                        this.draw(img,

                            w * s / -2 + w / 2,
                            h * s / -2 + h / 2//+ w/2
                            ,

                            w * s,
                            h * s)
                    }
                    el.scaleImCenSpiralMe = function () {
                        var scaleNum = 1,
                            that = this

                        _.times(100, function () {

                            that.scaleImCen('me', scaleNum)
                            scaleNum *= .9
                        })

                    }
                    el.scaleImCenSpiral = function () {

                        var scaleNum = 1,
                            that = this

                        _.times(100, function () {

                            that.scaleImCen('me', scaleNum)
                            scaleNum *= .9
                        })

                    }

                    el.dC = function f(i, x, y) {

                        var that = this

                        i = i || 'me'
                        x = x || 100
                        y = y || 100


                        if (U(x)) {//draw img in center of can
                            $.img(i, function (i) {
                                that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
                            })
                        }

                        else {//draw it by specifying location of its center
                            y = y || x
                            $.img(i, function (i) {
                                that.draw(i, x - i.W() / 2, y - i.H() / 2)
                            })
                        }

                        return this
                    }
                    //draw it where u say, but as if its reg point was its center
                    el.drawRegCenter = el.dC2 = function f(i, x, y) {
                        var that = this
                        $.img(i, function (i) {
                            that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
                        })
                        return this
                    }
                    el.Cd = function (a, x, y) {
                        var that = this

                        a = a || 'me'
                        x = x || 100
                        y = y || 100

                        $.img(a,

                            function (img) {

                                that.drawImage(
                                    img.src,
                                    x - img.W() / 2,
                                    y - img.H() / 2
                                )
                            })

                    }

                    return this
                }
                function superCanvasPath(el) {
                    el.s = el.ss = el.strokeColor = setStrokeColor = function (c) {
                        el.context.strokeStyle = oO('c', c)
                        return el
                    }
                    el.f = el.fs = el.fillColor = setFillColor = function (c) {
                        el.context.fillColor = oO('c', c)
                        return el
                    }
                    el.fillStyle = function (fs) {
                        if (U(fs)) {
                            return this.context.fillStyle
                        }
                        this.context.fillStyle = fs
                        return this

                    }
                    el.fsX = function (c, sc) {
                        var g = G(arguments)
                        if (O(c)) {
                            x.x.fillStyle = c;
                            return x
                        }
                        if (c = g.p ? $r('c', c) : Oo('c', c)) {
                            x({f: c})
                        }
                        if (D(sc)) {
                            x.ss(sc)
                        }
                        return x
                    }
                    el.sfl = function (c, f, s, l) {
                        x({f: f, s: s, w: l});
                        return x
                    }
                    el.fill = function () {
                        el.context.fill()
                        //el.stroke()
                        return el
                    }
                    el.stroke = function () {
                        el.context.stroke()
                        //el.stroke()
                        return el
                    }
                    el.closePath = function () {
                        el.context.closePath()
                        return el
                    }
                    el.beginPath = el.begin = function (x, y) {

                        el.context.beginPath()

                        if (N(x)) {
                            el.moveTo(x, y)
                        }

                        if (A(x)) {
                            el.moveTo(x[0], x[1])
                        }

                        return el
                    }
                    el.moveTo = function (x, y) {
                        el.context.moveTo(x, y)
                        return el
                    }
                    el.lineTo = function (x, y) {

                        if (A(x)) {

                            _.e(arguments,
                                function (x) {
                                    el.lineTo(x[0], x[1])
                                })
                        }

                        el.context.lineTo(x, y)
                        return el
                    }
                    el.clip = function () {
                        el.context.clip()
                        return el
                    }
                    el.fillRect = el.fr = function (a, b, c, d) {
                        a = a || 0
                        b = b || 0
                        c = c || el.W()
                        d = d || el.H()

                        el.context.fillRect(a, b, c, d)
                        return this
                    }


                    //clear screen [+ fill with color || run fx]

                    el.clear = el.clearRect = function (a, b, c, d) {
                        if (S(a)) {
                            el.fillStyle(a);
                            return el.fillRect()
                        }
                        a = a || 0
                        b = b || 0
                        c = c || el.W()
                        d = d || el.H()
                        el.context.clearRect(a, b, c, d)

                        // if(F(a)){a()}
                        return el
                    }

                    el.horizontalLine = el.lnh = function (X, Y, l) {
                        var g = G(arguments), X = g[0], Y = g[1], l = g[2],
                            X2 = g.p ? X + l : g.n ? X - l : l
                        return x.ln(X, Y, X2, Y)
                    }
                    el.verticalLine = el.lnv = function (X, Y, len) {

                        var g = G(arguments),

                            X = g[0],

                            Y = g[1],

                            len = g[2],

                            Y2 = g.p ? Y + len
                                : g.n ? Y - len
                                : len

                        return x.ln(X, Y, X, Y2)
                    }


                    //curves
                    el.arc = function (a, b, c, d, e, f, g) {
                        el.context.arc(a, b, c, d, e, f, g)
                        return el
                    }
                    el.arcTo = el.a2 = function a2(X) {
                        var g = G(arguments)

                        if (A(X)) {
                            return _a(a2(x), X)

                        }

                        this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)

                        this.stroke()
                        return this
                    }
                    el.bezierCurveTo = function (a, b, c, d, e, f, g) {
                        this.context.quadraticCurveTo(a, b, c, d, e, f, g)
                        return this
                    }
                    el.quadraticCurveTo = function (a, b, c, d, e, f, g) {


                        this.context.quadraticCurveTo(a, b, c, d, e, f, g)


                        return el
                    }
                    el.curveTo = function (a, b, c, d, e, f, g) {

                        if (N(e)) {
                            return this.bezierCurveTo(a, b, c, d, e, f)
                        }

                        else return this.quadraticCurveTo(a, b, c, d, e, f, g)


                    }

                    el.cir = function (X, Y, R, fs, ss) {
                        var g = G(arguments), X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1, fs = g[3], ss = g[4]

                        el.beginPath()
                        el.arc(X, Y, r, 0, 7, false)

                        el.fillColor(fs)
                        el.strokeColor(ss)
                        el.stroke().fill()

                        return el

                    }


                    //rect
                    el.fillRect = el.fr = function (a, b, c, d) {
                        a = a || 0
                        b = b || 0
                        c = c || this.W()
                        d = d || this.H()
                        this.context.fillRect(a, b, c, d)

                        return this
                    }
                    el.colorFillRect = el.cfr = function (a) {
                        var args = G(arguments)
                        this.save()
                        this.fillStyle = a
                        this.fillRect(0, 0, this.W(), this.H())
                        this.restore()
                        return this
                    }
                    el.roundRect = function (X, y, width, height, radius) {

                        el = this.context
                        el.beginPath()
                        el.moveTo(X + radius, y);
                        el.lineTo(X + width - radius, y);
                        el.quadraticCurveTo(X + width, y, X + width, y + radius);
                        el.lineTo(X + width, y + height - radius);
                        el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
                        el.lineTo(X + radius, y + height);
                        el.quadraticCurveTo(X, y + height, X, y + height - radius);
                        el.lineTo(X, y + radius);
                        el.quadraticCurveTo(X, y, X + radius, y);
                        el.closePath();

                        el.fill()
                        return el
                    }
                    el.roundRect.test = function () {
                        el.roundRect(100, 100, 200, 400, 20)
                    }


                    //draw line ( [x,y],[x,y] || x,y,x,y )
                    //draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
                    //fresh start
                    el.ln = el.line = function rc(p) {

                        var args = G(arguments), p = args[0]


                        if (N(args[0])) {
                            el.begin(args[0], args[1])
                            el.lineTo(args[2], args[3])
                            el.stroke()
                            return el
                        }


                        if (A(args[0]) && N(args[0][0])) {

                            el.begin(args.f)

                            _.e(args.r, function (p) {
                                el.lineTo(p[0], p[1])
                            })

                            el.stroke()
                            return el
                        }


                        if (AA(p)) {

                            _.e(args,
                                function (p) {

                                    el.line.apply(null, p)

                                })
                        }


                        el.stroke()
                        return el
                    }


                    el.fitEx = function () {
                        this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
                    }


                    el.sun = function (a, b, s) {
                        s = s || 1;

                        this.rG([[a || 0, b || a || 0],
                                s * 100, s * 500],

                            {'y': 0, 1: tCl('p', 0)},
                            600, 600)
                    }
                    el.ball = function (b) {
                        b = b || {}
                        var dir = b.d || false,
                            px = b.x || 100, py = b.y || 100, rad = b.r || 100,

                            per = b.p || Math.PI * 2,

                            ss = $r('c', b.s),
                            fs = $r('c', b.f),
                            lw = D(b.l) ? b.l : 4

                        return x.com(
                            'b', ['a', px, py, rad, 0, per, dir],
                            {f: fs, s: ss, w: lw}, 'f', 's')
                    }


                    el.pointInPath = el.pip = function (c, a, b) {
                        return this.context.isPointInPath(a, b)
                    }
                    el.paperBag = function (x, y, width, height, blowX, blowY) {

                        x = x || 100
                        y = y || 100
                        width = width || 100
                        height = height || 100
                        blowX = blowX || 100
                        blowY = blowY || 100
                        var lx, ly;
                        this.beginPath();
                        this.moveTo(x, y);
                        this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
                        this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
                        this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
                        this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);

                        return this
                    }

                    return el
                }
                function superCanvasEvents(el) {
                    el.$ = function (func) {
                        el.click(function (e) {

                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)

                        })
                    }
                    el.$$ = function (func) {

                        el.dblclick(function (e) {

                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)

                        })
                    }
                    el.over = el.MV = function (func) {

                        el.mouseover(function (e) {


                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)
                        })
                    }
                    el.out = el.MO = function (func) {

                        el.mouseout(function (e) {


                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)
                        })
                    }
                    el.enter = el.ME = function (func) {

                        el.mouseenter(function (e) {

                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)
                        })
                    }
                    el.leave = el.ML = function (func) {

                        el.mouseleave(function (e) {

                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)
                        })
                    }
                    el.up = el.MU = function (func) {

                        el.mouseup(function (e) {

                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)
                        })
                    }
                    el.move = el.MM = function (func) {

                        el.mousemove(function (e) {

                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)
                        })
                    }
                    el.down = el.MD = function (func) {

                        el.mousedown(function (e) {

                            func(e.pageX - $(this).offset().left,
                                e.pageY - $(this).offset().top)
                        })
                    }
                }
                function superCanvasShadow(el) {
                    el.shadowColor = function (color) {

                        if (U(color)) {
                            return this.context.shadowColor
                        }


                        this.context.shadowColor = oO('c', color)

                        return this
                    }
                    el.shadowBlur = function (blurNumber) {

                        if (U(blurNumber)) {
                            return this.context.shadowBlur
                        }

                        this.context.shadowBlur = blurNumber
                        return this
                    }
                    el.shadowOffsetX = function (offsetX) {
                        if (U(offsetX)) {
                            return this.context.shadowOffsetX
                        }
                        this.context.shadowOffsetX = offsetX
                        return this
                    }
                    el.shadowOffsetY = function (offsetY) {
                        if (U(offsetY)) {
                            return this.context.shadowOffsetY
                        }
                        this.context.shadowOffsetY = offsetY
                        return this
                    }
                    el.shadow = function (color, x, y, num) {

                        el.shadowColor(color)

                        el.shadowOffsetX(x).shadowOffsetY(y)

                        el.shadowBlur(num)

                        return el
                    }
                }
                return el
            }
        }

    }
    $.fn.Cv=$.fn.Can=function(){

        var c
        c=  $.c.apply($, G(arguments))
        this.A(c)
        return c
    }}
function ctx(){
    $.fn.ctx = function () {return this[0].getContext('2d')}
    x=ctx= CanvasRenderingContext2D.prototype
    xGr = CanvasGradient.prototype
    x.linGrad=function(a,b,c,d){
        return this.createLinearGradient(a,b,c,d)

    }
    x.radGrad=function(a,b,c,d,e,f){
        return this.createRadialGradient(a,b,c,d,e,f)

    }
    x.f =function(fs){

        this.fillStyle = fs
        return this}
    x.temp=function(func){var x=this

        func = _.bind(func, x)

        this.save()

        func()

        this.restore()

        return this}
    x.H=function(){
        return this.canvas.height
    }
    x.W=function(){
        return this.canvas.width
    }
    x.trans=function(){
        this.translate.apply(this, arguments)
        return this}
    x.Z=function(){
        this.scale.apply(this, arguments)
        return this}
    x.tick=function(func){var x=this

        cjs.tick(function(){

            x.temp(func)
        })


        return this}
    x.beg=function(){this.beginPath()
        return this
    }
    x.mt=function(x,y){this.moveTo(x,y);return this}
    x.lt=function(x,y){this.lineTo(x,y);return this}
    x.ss = function(c){ this.strokeStyle =  oO('c', c); return this}
    x.fs = function(c){  this.fillStyle =  oO('c', c); return this}
    x.drawPoly=function(vs,sc,hole,ox,oy){
        ox=N(ox)?ox:0; oy=N(oy)?oy:0

        var x=this,
            i

        x.beg().mt(vs[0][0]+ox, vs[0][1]+oy)

        for(i=1; i<vs.length; i++){
            x.lt(vs[i][0]+ox,
                vs[i][1]+oy)}

        x.lineWidth = 2

        x.ss(sc||'b').fs( (hole==true)?'w':'p' )
        x.closePath()
        x.stroke()
        x.fill()
        return this}
    x.drawPolys=function(poly,sc,ox,oy){var x=this
        //if more than one poly produced, use multiple color to display
        var num=poly.getNumInnerPoly()
        _.times(num, function(i){ if(i!=0){ sc=['red','green','blue','yellow'][i%num] }

            var p  = poly.getInnerPoly(i)

            x.drawPoly(p.verts(), sc, p.isHole(), ox, oy)

        })
        return this}
    x.S= function(){this.save();return this}
    x.R= function(){this.restore();return this}
    x.c= x.fs  =function(c,C,l){
        this.fillStyle = oO('c', c)
        if(C){this.C(C)}
        if(N(l)){this.l(l)}
        return this
    }
    x.C= x.ss =  function(){var g=G(arguments),o
        o= g.N_? {l: g.f}: {C: g.f, l: g.s}
        if(o.C){this.strokeStyle = oO('c', o.C)}
        if(N(o.l)){this.l(o.l)}
        return this
    }
    x.f= function(){
        var g=G(arguments)
        this.fill();
        if(g.p){this.s()}
        return this
    }
    x.s=  function(){this.stroke();return this}
    x.al= function(al){this.globalAlpha=al;return this}
    x.o= x.op = x.cO=function(o){this.globalCompositeOperation=o; return this}
    x.b=  function(){var g=G(arguments)
        this.beginPath()
        if(g.u){ return this }
        if(g.N_){
            this.mt(g.f, g.s)
            if(g.t){this.c(g.t,g[3],g[4])}
        }
        else { this.c.apply(this, g)  }
        return this
    }
    x.mt= function(){var x=this, g=G(arguments)
        if(g.A_){
            x.mt(g.f[0], g.f[1])
            g.eR(function(pt){ x.lt(pt[0], pt[1]) })
        }

        else {
            x.moveTo( N(g.f, 0), N(g.s,0) )

            if(N(g.t)){ x.lt(g.t,g[3]) }
        }

        return g.n? x.s(): g.p? x.f(): g.m? x.D(): x
    }
    x.a= function(){var g=G(arguments),x=this,
        o = N(g.s)? { x:g.f, y:g.s, r:g.t, rt1:  g[3], rt2:  g[4] }:
        {r: g.f}
        o.x=N(o.x, 0)
        o.y=N(o.y, 0)
        o.r  = N(o.r, 50)
        o.rt1=N(o.rt1, 0)
        o.rt2= N(o.rt2, 360)
        o.ccw = g.n? true : false
        this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
        return  g.n? x.s(): g.p? x.f(): g.m? x.D(): x
    }
    x.at= function(){var g=G(arguments),o
        o={x1: g.f,  y1: g.s, x2: g.t,  y2: g[3], r: g[4]}
        this.arcTo( o.x1, o.y1, o.x2, o.y2, o.r )
        return  g.n? x.s(): g.p? x.f(): g.m? x.D(): x
    }
    x.l=  x.lW=function(n){var g=G(arguments)
        if(g.N){ this.lineWidth = n; return this }
        return this.lt(g.f, g.s).s()
    }
    x.lC=  function(n){var g=G(arguments); if(g.N){ this.lineCap = n; return this }}
    x.lJ=  function(n){var g=G(arguments); if(g.N){ this.lineJoin = n; return this }}
    x.x= x.cp=function(){this.closePath();return this}
    x.cl=  function(){this.clip(); return this}
    x.qt=  function(){this.quadraticCurveTo(); return this}
    x.iP=  function(x,y){return this.isPointInPath(x,y)}
    x.fr= x.fR=function(x,y,w,h){var g=G(arguments),o
        o= N(g.t)?
        {x: g.f, y: g.s, w: g.t, h:g[3]}:
        {w:g.f, h:g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        this.fillRect(o.x, o.y, o.w, o.h)
        return this
    }
    x.sR=  x.sr=function(){}
    x.xR=  function(){this.clearRect();return this}
    x.r=  function(){}
    x.H=  function(){return this.canvas.height}
    x.W=  function(){return this.canvas.width}
    x.t= function(fn){var x=this; T.t(function(){x.temp(fn)}); return this}
    x.cv=  function(){return this.canvas}
    x._=  x.temp=function(fn){this.S(); _.b(fn,this)(); return this.R()}
    x.u=  function(){return  this.cv().toDataURL() }
    x.$=function(){return $(this.cv())}
    x.D=function(){return this.s().f()}
    x.lt= function(){var g=G(arguments),x=this
        if(g.A_ && A(g.f[0])){x.lt.apply(x, g.f)}
        else if(O(g.s)){g.e(function(pt){x.lt(pt[0], pt[1])})}
        else{x.lineTo(g.f, g.s)}
        return g.n? x.s(): g.p? x.f(): g.m? x.D(): x} //x.$=function(){return this.s().f() }
    comp=function(){
        x.Ds= x.dO=function(){this.o('destination-out'); return this}
        x.dS= x.dI=function(){return this.o('destination-in')}
        x.sD= x.sI=function(){this.o('source-in'); return this }
        x.Sd= x.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
        x.ds= x.dV= function(){ this.o('destination-over'); return this }
        x.SD= x.sT= x.sA= function(){ this.o('source-atop'); return this }
        x.DS= x.dT= x.dA= function(){ this.o('destination-atop'); return this }
        x.li=function(){ this.o('lighter'); return this }
        x.co=function(){ this.o('copy'); return this }
        x.xo=function(){ this.o('xor'); return this }
    }; comp()
    tran=function(){
        x.tl=  x.trans=function(tX,tY,rt,sX,sY){
            this.translate(tX,tY)
            if(N(rt)){this.rt(rt)}
            if(N(sX)){this.sc(sX,sY)}
            return this
        }
        x.sc= function(x,y){

            y=N(y,x)

            this.scale(x,y);
            return this

        }
        x.rt=function(n){this.rotate(M.tR(n)); return this}
        x.tf=function(){}
        x.sTf=function(){}
    }; tran()
    pix=function(){
        x.cD=function(){
            this.createImageData()
            return this }
        x.gD=function(){  var g=G(arguments), o, d
            o={ x: g.f, y: g.s, w: g.t, h:g[3] }
            o.x= N(o.x, 0)
            o.y = N(o.y, 0)
            o.w= N(o.w, this.W())
            o.h = N(o.h, this.H())
            d = this.getImageData(o.x, o.y, o.w, o.h)
            d.h = d.height
            d.w = d.width
            d.d = d.data
            return d
        }
        x.pD=function(d,x,y){
            this.putImageData(d,N(x,0),N(y,0))
            return this
        }
    }; pix()
    grad=function(){
        x.lg=function(){var ctx=this, g=G(arguments), o, gr
            o = g.O? g.f: N(g.t)? {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} : {x2: g.f, y2: g.s}
            o.x1 = N(o.x1, 0)
            o.y1 = N(o.y1, 0)
            o.x2 = N(o.x2, 0)
            o.y2 = N(o.y2, 0)

            gr= ctx.createLinearGradient(o.x1, o.y1, o.x2, o.y2)

            if(o.cS){
                gr.cS(o.cS)

                ctx.c(gr);return ctx
            }

            return gr
        }
        gr = CanvasGradient.prototype
        gr.cS= gr.s = gr.c= function(n, c){var g=G(arguments), gr=this
            if(g.O){_.e(g.f, function(n, c){ gr.cS(n,c)})}
            else { this.addColorStop(n, oO('c',c)) }
            return this
        }
        x.lf= x.lG= ctx.lGr= ctx.linGrad=function(a,b,c,d){return this.createLinearGradient(a,b,c,d)}
        x.rf= x.rG= ctx.rGr= ctx.radGrad=function(a,b,c,d,e,f){return this.createRadialGradient(a,b,c,d,e,f)}
        x.pt= x.Pt=function(){return this.createPattern()}
    }; grad()
    draw=function(){
        x._d=function(i){
            var  g=G(arguments),o
            if(g.S_  && g.f.length < 10000 ){g[0] = Q.i(g[0])}

            if(g[0]==this){ g[0] = g[0].cv()  }
            g[1] = N(g[1],0)
            g[2] = N(g[2],0)

            this.drawImage.apply(this, g)
            return this}
        x.d=function(i,x,y){var g=G(arguments),o

            o = {i: g.f, x: g.s, y: g.t }


            o.x=N(o.x,0)
            o.y=N(o.y,0)
            if(O(o.i)){
                this.drawImage( $(o.i)[0], o.x, o.y)
                return this
            }

            if(S(o.i)){o.i = Q.i(o.i)}

            if(o.i.width){
                o.x =  o.x - o.i.width/2
                o.y =  o.y - o.i.height/2
            }
            this._d(o.i, o.x, o.y)
        }
        x.scICen=function(i, s, x, y ){
            if(S(i) && i.length < 100){i = Q.i(i)}
            x=N(x,0)
            y=N(y,0)
            var  w= this.W(), h= this.H(),
                s= s||1
            this.d(i,
                w*s/-2+w/2, h*s/-2+h/2, w*s, h*s
            )
        }
        x.scaleImCenSpiralMe=function(){
            var scaleNum = 1,
                that =this
            _.t(100, function(){

                that.scaleImCen('me', scaleNum)
                scaleNum *= .9
            })
        }
        x.scaleImCenSpiral=function(){
            var scaleNum = 1, that =this
            _.t(100, function(){
                that.scaleImCen('me', scaleNum)
                scaleNum *= .9
            })

        }
        x.dC=function f(i,x,y){

            var that = this

            i = i||'me'
            x= x||100
            y=y||100


            if(U(x)){//draw img in center of can
                $.img(i,function(i){
                    that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})}

            else {//draw it by specifying location of its center
                y=y||x
                $.i(i, function (i) {
                    that.dr(i, x - i.W() / 2, y - i.H() / 2)})}

            return this} //draw it where u say, but as if its reg point was its center
        x.drawRegCenter=  function f(i,x,y){var that =this

            $.i(i,function(i){
                that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})
            return this}
        x.Cd=function(i, x,y){var ctx = this
            x= N(x,100)
            y= N(y,100)
            i = Q.i(i || 'me')
            ctx.d( i, x- i.W()/2, y-i.H()/2)
            return ctx
        }
        x.fit=function f(i, x,y) {
            i= i || 'me'
            x = N(x,0)
            y = N(y,0)
            this.d(i, x, y, this.W(), this.H())
            return cv
        }
        x.cr=function (x1,y1,x2,y2){var cv=this, ctx=cv.ctx(),i
            i= this.u()
            if(A(x1)){
                return this.crop(
                    x1[0], x1[1], x1[2]-x1[0], x1[3]-x1[1]
                )
            }
            this.d(i, x1, y1, x2,y2, 0,0, cv.W(), cv.H())
            return cv
        }
    };draw()
    ctxText()
    function ctxText() {
        x.F = function () {
            var g = G(arguments), o
            o = {f: g.f}
            if (g.N_) {
                o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
            }
            this.font = o.f
            return this
        }
        x.ft = x.fT = function (x, y, t) {
            var g = G(arguments)

            if (g.N_) {
                this.fillText(g.t, g.f, g.s)
            }

            else {
                this.fillText(g.t, x.W() / 2, 200)
            }
        }
        x.mL = function () {
        } //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
        x.T = function () {
            var g = G(arguments), x = this, o, t
            o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
                S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
                    g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
                        S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
                        {t: g.f, x: g.s, y: g.t}
            o.x = N(o.x, x.W() / 2)
            o.y = N(o.y, 200)
            if (o.c) {
                x.c(o.c, o.c)
            }
            if (o.f) {
                g.n ? x.F(o.f, '-') : x.F(o.f)
            }
            x.fillText(o.t, o.x, o.y)
            return x
        }
        x.tA = function () {
        }
        x.tB = x.Bl = function () {
        }
        x.sT = function () {
        }
        x.mT = function () {
        }
    }
}