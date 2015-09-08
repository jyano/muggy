$.hd=function(){var g=G(arguments),hd
    hd =  $('head')
    if(g.n){return $.hd("link[rel='stylesheet']:last")}
    g.e(function(g){
        if(O(g)){g.p? hd.after(g): hd.A(g)}
        else if(S(g)){return hd.find(g)}})
    return hd
}
$.hdS= function(css){ var lastLink
    lastLink= $.hd().find("link[rel='stylesheet']:last")
    if(lastLink[0]){
        lastLink.after($(css))}
    else {
        $.hd().A($(css))}
    return $
}
_.$Id=function(str){
    str = str.replace('$', '#')
    str = str.replace('_', '.')
    return str
}
rulez()
function rulez(){
    $CSS = function $CSS(rusOb) {
        var g = G(arguments), rus = '\n\n', sty
        if (g.u) {
            return $l($('style').oh())
        }
        _.e(rusOb, function (decs, sel) {
            rus += $CSS.rule(sel, decs, rusOb) + '\n'
        })
        rus += '\n'
        $.hd($CSS.sty(rus))
        return rus
    }
    $CSS.sel = function (sel) {
        sel = _.$Id(sel)
        if (sel == 'bd') {
            sel = 'body'
        }
        if (sel == 'bt') {
            sel = 'button'
        }
        if (sel == 'sc') {
            sel = 'section'
        }
        if (sel == 'nv') {
            sel = 'nav'
        }
        if (sel == 'd') {
            sel = 'div'
        }
        if (sel == 'i') {
            sel = 'img'
        }
        if (sel == 'ip') {
            sel = 'input'
        }
        return sel
    }
    $CSS.blk = function (cont) {
        return '{' + cont + '}'
    }
    $CSS.decBlk = function (decs, rusOb) {
        var decBlk

        //for @media
        if (S(decs)) {
            return decs
        }

        decBlk = ' '

        _.e($CSS.decs(decs, rusOb), function (v, pop) {
            decBlk += $CSS.dec(pop, v)
        })

        return $CSS.blk(decBlk)

    }
    $CSS.dec = function (pop, v) {
        return pop + ':' + v + '; '
    }
    $CSS.sty = function (rus) {
        var sty = $El('style');
        sty.type = 'text/css';
        if (rus) {
            sty.innerHTML = rus
        }
        return sty
    }
    $CSS.decs = function (decs, rusOb) {
        var DECS = {}

        if (decs.ex) {

            if (rusOb && rusOb[decs.ex]) {

                _.x(decs, rusOb[decs.ex])
            }


            else {
                _.x(decs,
                    //tries to extend from one of its own first
                    //then goes to global ($CSS.ex)
                    $CSS.ex[decs.ex])
            }


        }


        if (decs.mx) {
            _.e(decs.mx, function (v, k) {
                $CSS.mx[k].apply(decs, v)
            })
        }

        _.e(decs, function (v, k) {
            if (k !== 'mx' && k !== 'ex') {
                DECS[oO('s', k)] = A(v) ? $CSS.fn[k].apply(null, v) :
                    N(v) ? String(v) + 'px' :
                        oO(k, v, 'R')
            }
        })

        return DECS
    }
    $CSS.rule = function (sel, decs, rusOb) {
        return $CSS.sel(sel) + ' ' + $CSS.decBlk(decs, rusOb)
    }
    $CSS.rules = function (ob) {
        var g = G(arguments), rus = '', str = '',

            ruls

        g = g.A ? g = g.f : g.u ? {} : g

        ruls = g.S_ ? g : _.m(ob, function (v, k) {
            if (A(v)) {
                v = $CSS.blk($CSS.dec(v[0], v[1]))
            }

            else if (O(v)) {
                v = $CSS.decs(v)
                _.e(v, function (v, k) {
                    str += $CSS.dec(k, v)
                });
                v = $CSS.blk(str)
            }


            return $CSS.rule(k, v)
        })

        _.e(ruls, function (ru) {
            rus += ru
        })
        rus = $CSS.blk(rus)
        return rus
    }
    $CSS.fn = function () {
    }
    $CSS.mx = function () {
    }
    $CSS.ex = function () {
    }
// this lets you associate a selector with a bunch
// of declarations at once, and you can add more, too
    $CSS.ex.icon={
        transition:'background-color ease .2s',
        margin: '0 .5em'
    }
//value-helpers
//this lets you write/call functions that
//produce a complicated value to a
//particular property,
// so you don't have to write out
// the full location of the function
// -helps with namespacing
    $CSS.fn.B = $CSS.bor= function(c){
        var  col = oO('c', c|| 'z')
        return '8px solid ' + col
    }
// these are functions that take pams
// and ctx-bound to the dec obj
// so its main use is to add decs directly on it
// but on function can add multiple decs
    $CSS.mx.size=function(w,h){
        this.width = w
        this.height = h || w
    }


}
$.fn.s= $.fn.css
$.fn.dp= $.fn.display=function(display){
    if(U(display)){return this.css('display')}
    this.css('display',display);return this
}
$.fn.float=function(float){
    if(U(float)){return this.css('float')}
    this.css('float',float);return this
}
$.fn.ov = $.fn.overflow=function(overflow){
    if(U(overflow)){return this.css('overflow')}
    this.css('overflow',overflow);return this
}
$.Ol=$.outline = function OL(){
    var g=G(arguments), o,ol
    o= g.N_? {w: g.f}:
        Oo('c',o)?    {c: g.f, w: g.s, s: g.t}: { w: g.f, s: g.s}


    /*
     if(S(g.f)){
     o= g.f.split(' ')
     ol= _.j([
     $r('c',o[0]),  oO('ow',o[1]||5) +'px',
     oO('os',o[2]||'-') ])
     $l(ol)
     return ol}
     ol=  _.j([
     $r('c',o.c),
     N(o.w)? o.w+'px'$r('ow',o.w),
     $r('os',o.s)
     ])*/


    $l( ol )
    return ol
}
$.fn.col = function(col){
    return this.css('color', oO('c', col))}
$.fn.C = function(col, c2){
    if(c2){return this.C(col).col(c2)}
    if(col=='*'){
        col = Yano.random() }
    return this.css('backgroundColor', oO('c', col))
}
$.fn.al= function(z){
    if(U(z)){return this.css('opacity')}
    this.css('opacity', z)
    return this
}
bor(); pad(); mar(); klas(); positioning(); wh(); loc(); txx()
function mar(){

    $.mar=function(){
        var g=G(arguments),o
        o= N(g[3])? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g[3]+'px':
            N(g.t)? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g.f+'px':
                N(g.s)? g.f+'px ' + g.s + 'px '+ g.s + 'px ' + g.f+'px':
                    N(g.f)?g.f+'px '+g.f+'px '+g.f+'px '+g.f+'px':
                        '10px 10px 10px 10px'
        return o
    }
    $.fn.mar = function (margin) {

        if (U(margin)) {
            return this.css('margin')
        }

        this.css('margin', margin);
        return this
    }
    $.fn.marBottom = function (margin) {

        if (U(margin)) {
            return this.css('marginBottom')
        }

        this.css('marginBottom', margin);
        return this
    }
    $.fn.marTop = function (margin) {

        if (U(margin)) {
            return this.css('marginTop')
        }

        this.css('marginTop', margin);
        return this
    }
    $.fn.marLeft = function (margin) {

        if (U(margin)) {
            return this.css('marginLeft')
        }

        this.css('marginLeft', margin);
        return this
    }
    $.fn.marRight = function (margin) {

        if (U(margin)) {
            return this.css('marginRight')
        }

        this.css('marginRight', margin);
        return this
    }
    $.fn.marHor = function (a) {
        return this.marLeft(a).marRight(a)
    }
    $.fn.marVer = function (a) {
        return this.marTop(a).marBottom(a)
    }
    $.fn.mar = function (margin) {

        if (U(margin)) {
            return this.css('margin')
        }

        this.css('margin', margin);
        return this
    }
    $.fn.mB = $.fn.marBottom = function (margin) {

        if (U(margin)) {
            return this.css('marginBottom')
        }

        this.css('marginBottom', margin);
        return this
    }
    $.fn.mT = $.fn.marTop = function (margin) {

        if (U(margin)) {
            return this.css('marginTop')
        }

        this.css('marginTop', margin);
        return this
    }
    $.fn.mL = $.fn.marLeft = function (margin) {

        if (U(margin)) {
            return this.css('marginLeft')
        }

        this.css('marginLeft', margin);
        return this
    }
    $.fn.mR = $.fn.marRight = function (margin) {

        if (U(margin)) {
            return this.css('marginRight')
        }

        this.css('marginRight', margin);
        return this
    }
    $.fn.mH = $.fn.marHor = function (a) {
        return this.marLeft(a).marRight(a)
    }
    $.fn.mV = $.fn.marVer = function (a) {
        return this.marTop(a).marBottom(a)
    }
}
function pad(){
    $.fn.pad=function(padding){
        if(U(padding)){return this.css('padding')}
        this.css('padding',padding);return this}
    $.fn.padTop=function(padding){
        if(U(padding)){return this.css('paddingTop')}
        this.css('paddingTop',padding);return this}
    $.fn.padBottom=function(padding){
        if(U(padding)){return this.css('paddingBottom')}
        this.css('paddingBottom',padding);return this}
    $.fn.padLeft=function(padding){
        if(U(padding)){return this.css('paddingLeft')}
        this.css('paddingLeft',padding);return this}
    $.fn.padRight=function(padding){
        if(U(padding)){return this.css('paddingRight')}
        this.css('paddingRight',padding);return this}
    $.fn.padHor=function(a){return this.padLeft(a).padRight(a)}
    $.fn.padVer=function(a){return this.padTop(a).padBottom(a)}
    $.fn.pad = function (padding) {
        if (U(padding)) {
            return this.css('padding')
        }
        this.css('padding', padding);
        return this
    }
    $.fn.pT = $.fn.padTop = function (padding) {
        if (U(padding)) {
            return this.css('paddingTop')
        }
        this.css('paddingTop', padding);
        return this
    }
    $.fn.pB = $.fn.padBottom = function (padding) {
        if (U(padding)) {
            return this.css('paddingBottom')
        }
        this.css('paddingBottom', padding);
        return this
    }
    $.fn.pL = $.fn.padLeft = function (padding) {
        if (U(padding)) {
            return this.css('paddingLeft')
        }
        this.css('paddingLeft', padding);
        return this
    }
    $.fn.pR = $.fn.padRight = function (padding) {
        if (U(padding)) {
            return this.css('paddingRight')
        }
        this.css('paddingRight', padding);
        return this
    }
    $.fn.pH = $.fn.padHor = function (a) {
        return this.padLeft(a).padRight(a)
    }
    $.fn.pV = $.fn.padVer = function (a) {
        return this.padTop(a).padBottom(a)
    }
}
function bor(){
    $.fn.borderStyle= function(style){

        this.css('border-style', style)

        return this}
    $.fn.borderColor=function(c){

        this.css('border-color', oO('c', c))

        return this}
    $.fn.borderWidth=function(w){

        this.css('border-width',w)

        return this}
    $.fn.bor=function(border){
        if(U(border)){return this.css('border')}
        this.css('border',border);return this}
    $.fn.bS = $.fn.borderStyle = function (style) {

        this.css('border-style', style)

        return this
    }
    $.fn.bdC = $.fn.borderColor = function (c) {

        this.css('border-color', oO('c', c))

        return this
    }
    $.fn.bW = $.fn.borderWidth = function (w) {

        this.css('border-width', w)

        return this
    }
    $.fn.bor = function (border) {
        if (U(border)) {
            return this.css('border')
        }
        this.css('border', border);
        return this
    }



}
function klas() {
    $.fn.K = function () {
        $.fn.addClass.apply(this, arguments);
        return this
    }
    $.fn.xK = $.fn.removeClass
}
function positioning() {
    $.fn.P = $.fn.p = function (pos, x, y) {
        var e = this, g = G(arguments)
        if (g.u) {
            return e.css('position')
        }
        e.css('position', oO('p', pos))
        if (N(g.s)) {
            e.X(g.s)
        }
        if (g.t) {
            e.Y(g.t)
        }
        return e
    }
    $.fn.ab = $.fn.abs = function (x, y) {
        var e = this
        return e.P('a', x, y)
    }
}
function wh() {
    $.fn.W = function (w) {
        return w ? this.width(w) : this.width()
    }
    $.fn.H = function (h) {
        return h ? this.height(h) : this.height()
    }
    $.fn.WH = function (w, h) {
        h = h || w;
        return this.W(w).H(h)
    }
    $.fn.MW = $.fn.maxW = function (a) {
        return this.css('max-width', a)
    }
    $.fn.mW = $.fn.minW = function (a) {
        return this.css('min-width', a)
    }
    $.fn.mH = $.fn.minH = function (a) {
        return this.css('min-height', a)
    }
    $.fn.maxH = function (a) {
        return this.css('max-height', a)
    }
}
function loc(){
    $.fn.zi=$.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}

    $.fn.X = function (l) {
    var q = this, g = G(arguments)
    if (N(l)) {

        q.css('left',

            g.p ? q.X() + l :
                l
        )

        return q
    }
    l = q.css('left')
    return l == 'auto' ? 'auto' : parseInt(l)

    /*
     $.fn.X = $.fn.left = function (left) {
     if (N(left)) {
     return this.css('left', left)
     }
     var left = this.css('left')
     if (left == 'auto') {
     return 'auto'
     }
     return parseInt(left)
     }
     */

}
$.fn.Y = $.fn.top= function (top) {

    if (N(top)) {
        return this.css('top', top)
    }
    var top = this.css('top')
    if (top == 'auto') {
        return 'auto'
    }
    return parseInt(top)

    /*
     $.fn.Y = $.fn.top = function (top) {
     if (N(top)) {
     return this.css('top', top)
     }
     var top = this.css('top')
     if (top == 'auto') {
     return 'auto'
     }
     return parseInt(top)
     }
     */
} //$.fn.t
$.fn.XY = function (x, y) {

    x = N(x) ? x : 0

    if (U(y)) {
        y = x
    }
    return this.X(x).Y(y)

    /*
     $.fn.XY = function (x, y) {
     x = N(x) ? x : 0
     if (U(y)) {
     y = x
     }
     return this.X(x).Y(y)
     }
     */
}
$.fn.L= $.fn.l = $.fn.left=function (l) {var q = this, g = G(arguments)
    if (N(l)) {
        q.css('left', l)
        return q}
    l = q.css('left')
    return l == 'auto' ? 'auto' : q.position().left
    function old(){

        $.fn.L = function (n) {
            if (U(n)) {return this.css('left')}
            this.css('left', n)
            return this
        }

    }
}
$.fn.R = $.fn.rit= function (right) {
    if (U(right)) {return this.css('right')}
    this.css('right', right)
    return this
}
$.fn.LR = function (l, r) {
    var q = this
    if (O(l)) {r = l.r;l = l.l}
    if (N(l)) {q.L(l)}
    if (N(r)) {q.R(r)}
    return q
}
$.fn.bot=$.fn.B =   function (bottom) {
    if (U(bottom)) {
        return this.css('bottom')
    }
    this.css('bottom', bottom)
    return this
}
    }
function txx() {
    $.fn.T0 = function () {
        var d = this,
            g = G(arguments)
        d.E()
        g.e(function (str) {
            d.A($.h3(str))
        })
        return d
    }
    $.fn.T = function () {
        var g = G(arguments)
        this.text.apply(this, g)
        return this
    }
    $.fn.fS = $.fn.fontSize = function (z) {
        this.css('font-size', z)
        return this
    }
    $.fn.tA = $.fn.textAlign = function (z) {
        this.css('text-align', z)
        return this
    }
    $.Fo = $.font = $f = function (a, b) {
        var g = G(arguments)

        if (O(a)) {

            return ss(
                oB(b), {fz: a || 50}
            )
        }


        a = N(a) ? _S(a) : U(a) ? '' : a;


        var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);

        _.e(a.split(' '), function (p) {
            if (M(p[0])) {
                p = p.split('/')
                Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
            }

            F = Oo('ff', p) || F
            W = Oo('fw', p) || W
            S = Oo('fs', p) || S

        })

        return [W, S, Z, F].join(' ')
    }
}
function alpha(){
    $.toColor = function(n1,n2,n3,n4){
        return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")" : $r('c', n1)
    }
}
function old() {
    $.fn.Z = function (w, h) {
        return this.W(w).H(h || w)
    }
    $.fn.oH = $.fn.outerHeight
}