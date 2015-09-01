J = cjs
T = T$ = cjs.Ticker
cjs.t = cjs.tick = function (fn) {
    fn();
    J.Ticker.on('tick', fn)
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


    return cjs.bm(img)
}
cjs.manifest = function (func) {
    var q = cjs.loadQueue()

    q.complete(
        function () {

            func(function (getResult) {
                return q.getResult(getResult)
            })
        })

        .manifest([{
            id: "chicks", src: "/chicks.png"
        },
            {id: "me", src: "/me.png"},
            {id: "guy", src: "/guy.png"},
            {id: "sun", src: "/sun.png"}])
}
cjs.handleFileLoad = function (e) {
    if (e.item.type == "image") {
        images[e.item.id] = e.result
    }
}
cjs.mf = cjs.manifest = function (a) {
    var g = G(arguments), mf = []
    _.e(g, function (v) {
        mf.push({src: _.src(v), id: v})
    })
    return mf
}
cjs.makeManifest = cjs.makeMan = function (a) {
    return cjs.manifest.apply(null, _.m(a.images, function (i) {
            return Graphics.fromSource(i)
        })
    )
}
Q = function (imgs, func) {

    var q = cjs.lq()
    mf = []
    _.each(imgs, function (v) {

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

$Ct=function(){return new cjs.Container()}
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
$T=function(a,f,c,x,y){
    var t

    if(N(f)){
        f  = String(f) + "px Arial"


    }
    if(S(c)){c=oO('c', c)}

    t= new cjs.Text(a,f,c)

    if(O(x)){

        if(F(x.cen)){
            x= x.cen()
        }
        y= x.y
        x= x.x
    }

    if(N(x)){t.X(x)}
    if(N(y)){t.Y(y)}


    return t
}
$St = function (a, b, c, d, e) {
    var g = G(arguments), st
    st = A(g[0]) ? new J.Stage(g[0][0]) :
        O(g[0]) ? new J.Stage($(g[0])[0]) :
            new J.Stage($.c(g[0], g[1], g[2], g[3], g[4]) [0])
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
    h = $H(0, 0).a2(s)
    if (g.p) {
        SL(h)
    }
    return s
}

cjs.iDO=  function(ob){ return O(ob)  &&  F(ob.getStage) } //cjs.iDO= function (a) {return O(a) && O(a.parent)}//=iDo
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
cjs.isText=function(t){
    if(O(t)){
        return (  t.textBaseline   )
    }
}
cjs.T=cjs.text = function(text, font, color,  x, y){

    x=N(x)?x:600
    y=N(y)?y:100

//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }

    if(N(font)){ font = font + 'px Arial' }
    font = font || '50px Arial'
    color = color||'y'

    textOb =   new createjs.Text(  text,  font,  oO('c',color)  )
    textOb.regX = textOb.W()/2
    textOb.XY(x, y)


    return textOb}
cjs.niceText=function(text,x,y){

    var t= cjs.text(text, 'yellow', '40px Arial')

    if(N(x)){t.XY(x,y)}
    return t.drag()
}

h =  cjs.Shape.prototype
ct = cjs.Container.prototype
gx = cjs.Graphics.prototype
st = s = p = cjs.Stage.prototype
ob =  cjs.DisplayObject.prototype

ob.CURSOR= ob.cu= ob.bM=function(cu){var ob=this, st=ob.st()
    CUob= {
        d:'default', n:'none', h:'help',
        p:'pointer',  ch:'crosshair',
        P:'progress', w:'wait',
        t:'text',
        m:'move', g:'grab',  c:'copy',
        cm:'context-menu',
        C:'cell',
        N:'not-allowed', v:'not-allowed',
        z:'zoom-in'
    }

    if(U(cu)){st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})}
    else if(S(cu)){ ob.cursor= CUob[cu]? CUob[cu] : cu  }
    return ob
}
ob.bM=function(){var ob=this, st=ob.st()
    st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})
    return ob
}
ob.ca= function(){var ob=this, st=ob.st(), g=G(arguments), o, op, i

    if(O(ob.image && !g.n && !g.p)){ob.cache($(ob.image)[0])}

    if(ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)){
        op=g[0];ob.updateCache(op);return ob
    }
    o = O(g[0])? {i: g[0], x:g[1], y:[2]}: N(g[2])? {x:g[0], y:g[1], w:g[2],h:g[3] }: N(g[1])? {w:g[0], h:g[1]}: {}
    if(O(o.i)){ o.i = o.i.image? o.i.image:$(o.i)[0];
        if (!g.n) {
            if(ob.image){ob= ob.image}
            ob=$(ob)[0]
            ob.cache(0, 0, ob.width, ob.height)}
    }
    o.x = N(o.x)? o.x:0; o.y = N(o.y)? o.y:0
    o.w = N(o.w)? o.w : O(o.i)? o.i.width: N(o.h)? o.h : st? st.W():0
    o.h = N(o.h)? o.h : O(o.i)? o.i.height: st? st.H(): 0
    ob.cache(o.x, o.y, o.w, o.h )
    return ob
}
ob.fl=function(){var ob=this,g=G(arguments),i
    if(A(g[0])){return ob.fl.apply(ob,g[0])}
    ob.filters=ob.filters||[]
    _.e(g, function(fl){ob.filters.push(fl)})
    if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
    return ob
}
ob.fl2=function(){var ob=this,g=G(arguments)
    ob.filters=[]
    ob.filters=ob.filters||[]
    _.e(g, function(fl){
        ob.filters.push(fl)
    })
    if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
    return ob
}
ob.aF=function(h){var ob=this
    ob.fl( $AF( h ) )
    return ob
}
ob.aF2=function(h){var ob=this
    this.fl2( $AF( h ) )
    return ob
}
ob.hel=function(a,b){return ob.hasEventListener(oO('e',a))}
ob.o=function(a,b,c,d,e){
    if(!Oo('e',a)){return o.o('$',a,b,c,d)}
    var f=ob.on(oE(a),
        b.handleEvent?b:b.ob?b.ob:b.st?b.st
            :function(e,data){b(o,sJE(e),e)},c,d,o,e)
    return function(){o.O(a,f)
        return _p(o.o,a,b,c,d,e)}}
ob.e=function(a,b,c){ob.dispatchEvent(a,b,c);return a}
ob.O=function(t,f){var g=G(arguments), t=g[0], f=g[1]

    $l('O')

    if(F(t)){$l('F(t)')
        return o.O('$',t)}

    t=oE(t)

    if(F(f)){$l('F(f)')

        if(g.p){ob.removeEventListener(t,f,true) }
        else if(g.n){ ob.removeEventListener(t,f,false) }
        else {$l('removing: ' + t + ' '+ _S(f))

            ob.removeEventListener(t,f)}}

    else {$l('!F(f)')
        if(S(t)){ob.removeAllEventListeners(t)}
        else{ob.removeAllEventListeners()}
    }
    return o} //ob.wt=function(type){return o.willTrigger(type)}
ob.W=function(a){
    if(U(a)){ return this.getBounds().width * this.scaleX  }
    this.sX(  this.scaleX * a / this.W() )
    return this}
ob.H=function(a){

    if(U(a)){ return this.getBounds().height * this.scaleY  }

    this.sY( this.scaleY * a / this.H() )

    return this

}
ob.WH=function(w,h){return this.W(w).H(h||w)}
ob.W = function (a) {
    var i = this
    if (U(a)) {
        var b = i.getBounds()
        if (b) {return b.width * i.scaleX}
        return null
    }
    i.sX(i.scaleX * a / i.W())
    return i
}
ob.H = function (a) {
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
ob.WH = function (w, h) {
    return this.W(w).H(h || w)
}
ob.X=function(x,duration){//can add easing :)


    var g=G(arguments)

    if(U(x)){return this.x}

    if(g.p){
        x = this.x+x }
    else if(g.n){$l('n')
        x=this.x-x}
    else if(g.m){$l('m')
        x=this.x*x}
    else if(g.d){$l('d')
        x=this.x/x}


    if(N(duration)){
        tw([this], [{x:x}, duration ])
    }

    else{this.x=x}
    return this}
ob.Y=function(y,duration){//make same same x
    var g=G(arguments)
    if(U(y)){return this.y}
    if(g.p){
        y = this.y+y }
    else if(g.n){
        y=this.y-y}
    else if(g.m){
        y=this.y*y}
    else if(g.d){
        y=this.y/y}


    if(N(duration)){
        tw([this], [{y:y}, duration ])
    }

    else{this.y=y}
    return this}
ob.tickX=function(func){var ob=this

    cjs.tick(function(){ob.X( func() )})

    return this}
ob.tickY=function(func){var ob=this

    cjs.tick(function(){ob.Y(
        func()
    )})

    return this}
ob.xy=ob.XY=function(x,y){
    if(U(x)){return {x:this.x, y:this.y}}

    if(O(x)){
        y= x.y
        x= x.x
    }

    if(U(y)){y=x}
    return this.X(x).Y(y)
}
ob.sx=ob.sX=function(scaleX){this.scaleX=scaleX;return this}
ob.sy=ob.sY=function(scaleY){
    this.scaleY=scaleY;return this}
ob.sxy=ob.sXY=function(x,y){if(U(y)){y=x};  return this.sX(x).sY(y)}
ob.rx=ob.rX=function(regX){


    var g=G(arguments), regX=g[0]

    if(U(regX)){return this.regX}

    //if(g.p){this.rX( this.regX + regX  )}

    this.regX=regX;
    return this}
ob.ry=ob.rY=function(regY){var g=G(arguments),regY=g[0]

    //if(g.p){this.Y( this.y + (regY - this.regY)  )}
    if(U(regY)){return this.regY}
    this.regY=regY;return this
}
ob.rxy=ob.rXY=function(x,y){y=N(y)?y:x
    return this.rX(x).rY(y)}
ob.kx=ob.kX=function(skewX){
    if(U(skewX)){return this.skewX}
    this.skewX=skewX;return this
}
ob.ky=ob.kY=function(skewY){
    if(U(skewY)){return this.skewY}
    this.skewY=skewY;return this
}
ob.kxy=ob.kXY=function(x,y){

    y=N(y)?y:x

    return this.kX(x).kY(y)}
ob.rt= ob.rot=function(rotation){
    var args=G(arguments);
    rotation = args[0]

    if( args.p ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation + rotation )  }
    if( args.n ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation - rotation )  }

    if(U(rotation)){return this.rotation}
    this.rotation = rotation
    return this}
ob.st=  function(){
    if(this.getStage){
        return this.getStage()
    }
    return this.stage
}
ob.blSt= ob.belowStg = function(){return this.y > this.stg().H()}
ob.hd= ob.hide=function(){this.visible = false;return this}
ob.P=function(){return this.parent}
ob.$ = ob.click=function(func){return this.on('click', func)}
ob.$$= function(a,b,c,d,e){return this.on('dblclick', a,b,c,d,e)}
ob.rm = function(){this.P().removeChild(this); return this}
ob.al= function(alpha){
    if(U(alpha)){return this.alpha}
    this.alpha=alpha;return this}
ob.n= function(name){
    if(U(name)){return this.name}
    this.name=name;return this}
ob.rgc=function(){var g=G(arguments),

    x=this.W()/2,
    y=this.H()/2

    if(g[0]===0){
        if(g.p){this.rXY(0,0,'+')}
        else{this.rXY(0,0)}
    }

    else{
        if(g.p){this.rXY(x,y,'+')}
        else{this.rXY(x,y)
        }}

    return this}
ob.gTL=function(x,y){

    if(O(x)){y= x.y;x= x.x}

    return this.globalToLocal(x, y)

}
ob.bounds=function(a,b,c,d) {
    this.nominalBounds = new cjs.Rectangle(a,b,c,d)
    return this}
ob.tf=function(pam){
    if( O(pam) && F(pam.getTransform) ){pam = pam.getTransform()}
    if(A(pam)){this.setTransform.apply(this, pam)
        return this}
    this.setTransform.apply(this,  G(arguments))
    return this
}
ob.rZero=function(a){
    var g=G(arguments), x=this.W()/2, y=this.H()/2
    alert('rZero')
    if(g.p){this.rX( 0, '+')
        //this.X(a, this.regX()-a, '+')
        this.rY( 0, '+')}
    else {this.rXY( 0 , 0 )   }
    return this}
ob.rC= ob.rCenter=function(){
    var g=G(arguments), x=this.W()/2, y=this.H()/2
    if(g.p){this.rX( x,  '+' ); this.rY( y,  '+' )}
    else {this.rXY( x ,y )}
    if(N(g[0])){this.X(g[0]); if(N(g[1])){this.Y(g[1])}}
    return this
}
ob.tw= ob.tween = function(){var g = G(arguments), tw
    g.unshift(this)
    return _tw = tw  = J.tween.apply(null, g)
}
ob.twL=   function(){  var g = G(arguments),tw
    g.unshift([this, 'l'])
    return tw= _tw  =J.tween.apply(null, g)

}
ob.flash = function(){var ob=this
    ob.al(0)
    $.in(.4, function(){ob.al(1)} )
    return ob}
ob.sp= ob.spin = function(){this.twL([{r:360}, 4000]); return this}
ob.d= ob.dot=function(){this.st().dot(this.X(), this.Y()); return this}
ob.uM=ob.underMouse = function( ){
    var ob=this, st=ob.stage


    if(st && st.mouseInBounds){
        return ob.tx(ob.gTL(st.m().x, st.m().y))
    }


}
ob.tx=ob.test=function(x,y){var ob=this
    if(J.isDisplayOb(x)){return ob.tx(this.gTL(x))}
    if(O(x)){y= x.y;x= x.x}
    return this.hitTest(  x,y    )
}
ob.cx=ob.cX=ob.centerX= function(a){
    if(U(a)){return this.x + this.W()/2 }
    return this.X( a- this.W()/2)
}
ob.cy=ob.cY = ob.centerY= function(a){
    if(U(a)){return this.y + this.H()/2 }
    return this.Y( a- this.H()/2)
}
ob.toFront = function(){var ob=this
    numChildren = this.parent.children.length
    this.P().setChildIndex(this,numChildren-1)
    return this
}
ob.bindBody=function(body){var ob=this,b=body
    J.tick(function(){  b.XY(ob.X(),ob.Y()).rT( ob.rT() )})
    return ob}
ob.getTransform=function(){var ob=this
    return [
        ob.x,ob.y,ob.scaleX,ob.scaleY,
        ob.rotation,ob.skewX,ob.skewY,
        ob.regX,ob.regY
    ]
}
ob.a2=function(toWhat,x,y){
    toWhat.A( this )
    if(N(x)){this.X(x)}
    if(N(y)){this.Y(y)}
    return this}
ob.shad = function(color, x,y,blur){
    var shadow = cjs.shad(color, x,y,blur)
    this.shadow = shadow
    return this
}
ob.p= ob.go= ob.startMoving=function(x,y){

    if(x){this.vX(x)}
    if(y){this.vY(y)}

    var ob=this

    cjs.Ticker.on('tick', function(){
        ob.X(  ob.X() + (ob.vx ||0)  )
        ob.Y(  ob.Y() + (ob.vy ||0)  )
    })

    return this
}
ob.wrx=ob.warpX=function(low,high,cush){var ob = this,
    warp = M.warp(low,high,cush)
    cjs.tick(function(){ob.x =warp(ob.x)})

    return ob
}
ob.wry=ob.warpY=function(low,high,cush){var ob = this,
    warp = Math.warp(low,high,cush)
    cjs.tick(function(){ob.y =warp(ob.y)})
    return this}
ob.wr= ob.warp=function(n){n=n||0
    var stage = this.getStage()
    this.warpX(0, stage.W(), n)
    this.warpY(0, stage.H(), n)
    return this}
ob.u=function(){this.update();return this}

ct.ct = function (x, y) {var ct = this, g = G(arguments), x = g[0], y = g[1]
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
ct.poly = function () {
    var ct = this // ?

    var h = ct.shape()
    h.poly.apply(h, arguments)
    return h
}
ct.t = ct.tick = function () {
    T.on('tick', this);
    return this
}
ct.A = function () {var ct = this, g = G(arguments), $b = $('body')
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
ct.h = ct.shape = function (x, y, c, C, l, opt) {
    var ct = this,


        h = cjs.h(x, y, c, C, l, opt).a2(ct)

    return h.drag()
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
        .rot(o.a)
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
        h.bm('me', function () {
            h.dr2(o.w, o.h)
        })
    }
    else {
        h.dr2(o.w, o.h)
    }
    return ct2
}
ct.T= ct.Tx = ct.text = function (t, f, c, x, y) {var ct = this, o, cX


    st=this.getStage()
    cX = st.cen().x

    o = (N(x) && U(y)) ? {y: x, x: cX} :
        U(x) ? {x: cX, y: 100} :
        {t: t, f: f, c: c, x: x, y: y}

    var t= cjs.T(o.t, o.f, o.c, o.x, o.y)

    ct.A(t)

    return t
}
ct.cen = function () {
    return V(this.W() / 2, this.H() / 2)
}
ct.bm= function () {

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
        if (o.fn) {o.fn(bmp)}
        return ct}
    $.i(o.i, function (e, i) {bmp = $Bm(i)
        bmp.a2(ct)
        bmp.rC()
        bmp.sXY(o.sc).a2(ct)
        //bm.XY( that.W()/2, that.H()/2 )
        // works with stage i guess.. but fucks with 'container' - cant check bounds
        if (g.n) {bmp.XY(-1000)}
        if (o.fn) {o.fn(bmp)}
    })
    return ct

    old=function(){
        ct.bm = function () {
            alert('ct.bm')
            var ct = this, g = G(arguments), o, bmp
            o = N(g[1]) ? {i: g[0], sc: g[1], fn: g[2]} : {i: g[0], fn: g[1]}
            o.sc = N(o.sc) ? o.sc : 1


            /*

             if (J.iDU(o.i)) {
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
ct.cir = function (x, y, r, c) {
    this.A(cjs.cir(x, y, r, c));
    return this
}
ct.cir = function (x, y, r, c, C, l, opt) {
    var ct = this
    return ct.h(x, y, c, C, l, opt).dc(r)
}
ct.circ = function (c, r, x, y) {
    var ct = this

    return cjs.cir(c, r, x, y).a2(ct)
}



st.W = function (a) {
    if (U(a)) {
        return this.canvas.width
    }
    ;
    this.canvas.width = a;
    return this
}
st.H = function (a) {
    if (U(a)) {
        return this.canvas.height
    }
    ;
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
st.N = st.next = function (next) {
    if (U(next)) {
        return this.nextStage
    }
    ;
    this.nextStage = next;
    return this
}
st.MD=function(fn){ return this.on( 'stagemousedown' ,fn)}
st.MM=function(fn){return this.on( 'stagemousemove' ,fn)}
st.MU=function(fn){ return this.on( 'stagemouseup' ,fn)}
st.mO=function(){var g=G(arguments),st=this
    if(U(g[0]) || g[0]){st.enableMouseOver(N(g[0])?g[0]:true)}
    else {st.enableMouseOver(false)  }
    return st}
st.eMO=function(data){this.enableMouseOver(data); return this}
st.m=function(ob){var st=this
    if(U(ob)){return J.Pt(st.mouseX, st.mouseY)}
    if(O(ob)){if(ob.d){st.MD(ob.d)}; if(ob.u){st.MU(ob.u)}; if(ob.m){st.MM(ob.m)}}
    return st}
st.mx= st.mX=function(){return this.m().x}
st.my= st.mY=function(){return this.m().y}

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



$H = function (a, b, c) {
    return new cjs.Shape(a, b, c)
}
$Gx = function () {
    return new cjs.Graphics
}
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
oDef = function(o){o=o||{}
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    return o
}
$h = cjs.h = cjs.shape = cjs.shp = function (x, y, c, C, l) {
    var g = G(arguments),
        x = g[0],
        y = g[1],
        c = g[2],
        C = g[3],
        l = g[4],
        h

    if (cjs.isShape(x)) {
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
h.ss = function (a) {
    var h = this, gx = h.graphics, g, o


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
}
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {h.l(l)}
    return h

}
h.C = h.s = function (a, b, c, d, e, f) {
    var h = this, gx = h.graphics
    if (N(a)) {
        gx.s((a > 0 && a < 1) ? J.rgb(0, 0, 0, a) : J.rgb(a, b, c, d))
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


        gx.f((a > 0 && a < 1) ? J.rgb(0, 0, 0, a) : J.rgb(a, b, c, d))
    }

    else if (S(a)) {

        gx.f(oO('c', a))

    }

    else {
        gx.f(a, b, c, d, e)
    }

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


h.l = h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)
    return h
}
h.cC = h.cc = function () {return this.cacheCanvas}
grad()
line()
curves()
rec()
pol()
function grad() {
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
function line(){
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
    h.mt = function (x, y) {//h.pol=
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
    h.mt = function (a, b, c, d, e) {
        var h = this, gx = h.graphics, v

        if (O(a)) {
            v = V(a)
            gx.mt(v.x, v.y)

        }
        else {
            gx.mt(a, b, c, d, e)
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
    h.lt = function (a, b, c, d, e) {
        var h = this, gx = h.graphics, v

        if (O(a)) {
            v = V(a)
            gx.lt(v.x, v.y)

        }
        else {
            gx.lt(a, b, c, d, e)
        }

        return h
    }
}
function curves() {
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

}
function rec() {

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
}
function pol(){
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
        o.p = cjs.cap(o.p, 0, .99)

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
}
