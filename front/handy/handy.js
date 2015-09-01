$r = function (a, b) {
    a = a || 'c'; //cannot be 'color' ?? only abr??
    var values = _.values(oO(a))
    return Oo(a, b) || values[_.random(_.size(values) - 1)]
}

//for cssRule
_.$Id=function(str){
    str = str.replace('$', '#')
    str = str.replace('_', '.')
    return str
}
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
$.fn.fCt=function(str){
    alert('fCt')
    return  this.fi(":contains("+ str +")")
}
$.mar=function(){
    var g=G(arguments),o
    o= N(g[3])? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g[3]+'px':
        N(g.t)? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g.f+'px':
            N(g.s)? g.f+'px ' + g.s + 'px '+ g.s + 'px ' + g.f+'px':
                N(g.f)?g.f+'px '+g.f+'px '+g.f+'px '+g.f+'px':
                    '10px 10px 10px 10px'
    return o
}
$.Fo=$.font =$f= function(a,b){var g=G(arguments)

    if(O(a)){

        return ss(
            oB(b), { fz : a||50 }
        )
    }


    a=N(a)?_S(a):U(a)?'':a;


    var  F='fantasy',W='normal',S='normal',Z=px(100);

    _.e(a.split(' '),function(p){
        if(M(p[0])){p=p.split('/')
            Z=  p[0]+'px'+    p[1]?'/'+p[1]+'px' : ''}

        F=Oo('ff',p)||F
        W=Oo('fw',p)||W
        S=Oo('fs',p)||S

    })

    return [W,S,Z,F].join(' ')
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
$.delBt=function(url, data){var bt

    bt = $.bt('delete', function( el ){

        $.ajax({type: 'DELETE',
            data: data,
            url: url,
            success: function (){
                $(el.target).closest('div').rm() }})
    })


    return bt
}
$.fn.selPic=function() {
    $('.pic').e(function () {
        $(this).C('b')
    })
    this.parent().C('y')
}
$.fn.oh = function () {
    return this[0].outerHTML
}
$.fn.oH=$.fn.outerHeight
$.fn.oh=function(){
    return this[0].outerHTML
}
$.fn.ch = function () {
    return this.children()
}
$.fn.pa = $.fn.parent
$.fn.fi = $.fn.find
$.fn.sib = function () {
    var g = G(arguments);
    return this.sib.apply(this.g)
}
$.fn.hd= $.fn.hide
$.fn.sh= $.fn.show
$.fn.ap2=function(el){
    el.A(this)
    return this
}
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.rm=$.fn.xx=function(){var e=this
    e.remove()
    return e
}
$.fn.rm=function(){return this.remove()}
$.fn.rm=function(){return this.remove()}
$.fn.iA=$.fn.insertAfter
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.pp2=function(a){this.prependTo(a); return this}
$.fn.a2=function(a){a.A(this); return this}
$.fn.pp= $.fn.prepend
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.e = $.fn.each
$.fn.N= $.fn.next
$.fn.gg = $.fn.toggle
$.fn.h= $.fn.ht=$.fn.html
$.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
$.fn.K= function(){
    $.fn.addClass.apply(this, arguments); return this
}
$.fn.xK= $.fn.removeClass
$.fn.pp=function(a){ this.pp(a); return this}
$.fn.chk=function(){ this.at('checked', true) }
$.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}
$.fn.at= $.fn.attr
$.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}
$.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.ty= $.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.hf=$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href); return this
}
$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href);return this
}
$.fn.for = function (forWhat) {
    return this.attr('for', forWhat)
}
$.fn.placeholder = function (forWhat) {
    return this.attr('placeholder', forWhat)
}
$.fn.src = function (a) {


    if (U(a)) {
        return this.attr('src')
    }

    this.attr('src', $src(a))

    return this
}
$.fn.role = function (role) {
    if (U(role)) {
        return this.attr('role')
    }
    this.attr('role', role)
    return this

}
$.fn.src= function(a){
    if( U(a) ){return this.attr('src')}

    this.attr('src', $src(a) )

    return this
}
$.fn.role=function(role){
    if(U(role)){return this.attr('role')}
    this.attr('role', role)
    return this

}
$.fn.v = function(v){var g=G(arguments),v

    if(D(v)){
        this.val(v)

        return this
    }
    v=this.val()
    if(!g.p){this.val('')}
    return v

}
$.fn.Vx=function(){
    var val= this.val()
    this.val('')
    return val
}
$.fn.V=function(){
    var v=this.val()
    this.val('')
    return v
}
$.fn.T= function(){var g=G(arguments)
    this.text.apply(this,g)
    return this
}

$.$ = function (f) {
    return $(document).on('click', _v(f))

    /*
     $.$=function(){
     var b=$('html')
     b.click.apply(b, arguments)
     return $
     }*/
}
$.$$ = function (f) {
    return $(document).on('dblclick', _v(f))
//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
}
$.md = $.mousedown = function (fn) {
    $('body').on('mousedown', fn);
    return this
}
$.mu = $.mouseup = function (fn) {
    $('body').on('mouseup', fn);
    return this
}
$.mm = $.mousemove = function (fn) {
    $('body').on('mousemove', fn);
    return this
}
$.oMD = function (fn) {
    $.md(function (e) {
        fn(e.clientX, e.clientY, e)
    })
    return $
}
$.oMU = function (fn) {
    $.mu(function (e) {
        fn(e.clientX, e.clientY, e)
    });
    return $
}
$.oMM = function (fn) {
    $.mm(function (e) {
        fn(e.clientX, e.clientY, e)
    });
    return $
}
$.fn.m = function (o) {
    var e = this
    if (o.mD) {
        e.mD(o.mD)
    }
    if (o.mU) {
        e.mD(o.mU)
    }
    if (o.pM) {
        e.pM(o.pM)
    }
    return e
}
$.fn.$ = $.fn.click
$.fn.hv = $.fn.hover
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM = function (l) {
    var c = this
    c.pressmove(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pm = $.fn.pressmove = function (func) {
    var mouse_pressed
    this.mousedown(function () {
        mouse_pressed = true
    })
    this.mouseup(function () {
        mouse_pressed = false
    })


    this.mousemove(function (e) {


        if (mouse_pressed) {

            func(e)

        }

    })


    return this
}
$.fn.mp = $.fn.mousePoint = function (e, scale) {
    scale = N(scale) ? scale : 1
    return V(e.pageX / scale, e.pageY / scale)
}
$.fn.mU = function (l) {
    $l('mU')
    var c = this
    c.mouseup(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM = function (l) {
    var c = this
    c.pressmove(function (e) {
        l(e.clientX, e.clientY)
    })
    return c

}
$.fn.m = function (o) {
    $l('.m')
    var e = this
    if (o.mD) {
        e.mD(o.mD)
    }
    if (o.mU) {
        e.mD(o.mU)
    }
    if (o.pM) {
        e.pM(o.pM)
    }
    return e
}

KEYOB = keyObj = {

    up: 38, u: 38,
    down: 40, d: 40,
    left: 37, l: 37,
    right: 39, r: 39,
    space: 32, s: 32,
    enter: 13, e: 13
}
$.wh = function (a, b) {
    return D(b) ? a.which == b : a.which
}
$.k = $.key = $.kD = function self(k, fn) {

    if (O(k)) {
        _.e(k, function (fn, k) {
            if (s$(k).isUpper()) {
                $.kU(k.toLowerCase(), fn)
            }
            else {
                $.k(k, fn)
            }
        })
        return
    }

    if (KEYOB[k]) {
        k = KEYOB[k]
    }

    $('body').on('keydown', function (e) {
        if (e.which == k) {
            fn(e, $.K)
        }
    })

}
$.kU = function (k, fn) {

    if (keyObj[k]) {
        k = keyObj[k]
    }
    $('body').on('keyup', function (e) {
        if (e.which == k) {
            fn(e, $.K)
        }
    })
}
$.spc = function (fn) {
    return $.kD('space', fn)
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
$.fn.dg = function () {
    return this.drag()
}
$.fn.dg = function () {
    return this.drag()
}
$.fn.dg = $.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.dg = $.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}

$.XML = function () {
    return new XMLHttpRequest()
}
$.aj = function (ob) {
    return $.ajax(ob)
}
$.txG = function (url) {
    $.get('/' + url, function (aa) {
        a = aa
    })
}
$.G = $.g = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.G, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} :
    {p: g[0], d: g[1], fn: g[2]};
    $.get(S.eL(o.p), o.d || {},
        function (d) {
            o.fn = o.fn || function () {
                return 'boo ya!'
            };
            o.fn(d)
        })
}
$.eG = function () {
    var g = G(arguments), o;

    if (U(g[1])) {
        return _.p($.eG, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} :
    {p: g[0], d: g[1], fn: g[2]};

    $.G(o.p, o.d || {},
        function (dd) {
            _.e(dd, function (d) {
                o.fn(d)
            })
        });
    return $
}
$.Gj = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.Gj, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    o.fn = o.fn || function () {
        return 'boo ya!'
    };
    $.getJSON(
        S.eL(o.p),
        o.d || {},
        function (d) {
            o.fn(d)
        });
    return $
}
$.eJ = $.eGj = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.eJ, g[0])
    }
    o = F(g[1]) ?
    {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    $.Gj(o.p, o.d || {}, function (dd) {
        _.e(dd, function (d) {
            o.fn(d)
        })
    });
    return $
}
$.P = $.po = function () {
    var g = G(arguments), o;
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    o.d = U(o.d) ? {} : O(o.d) ? o.d : {data: o.d};
    o.fn = o.fn || function () {
        return 'boo ya!'
    };
    $.post(S.eL(o.p), o.d, function (d) {
        o.fn(o.d, o)
    });
    return $
}
$.eP = function () {
    var g = G(arguments);
    if (U(g[1])) {
        return _.p($.eP, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    $.P(o.u, o.d || {}, function (dd) {
        _.e(dd, function (d) {
            o.fn(d)
        })
    });
    return $
}



$.fn.ab = $.fn.abs = function (x, y) {
    this.P('a', x, y)
    return this
}
$.fn.mlt=function(m){
    return this.at('multiple', true)
}
rel();addRm();disp(); valu(); color(); klass(); outer(); style(); atts(); background(); text()
function rel() {
    $.fn.ch = function () {
        return this.children()
    }
    $.fn.pa = $.fn.parent
    $.fn.fi = $.fn.find
    $.fn.sib = function () {
        var g = G(arguments);
        return this.sib.apply(this.g)
    }
}
function text(){

    $.fn.T= function(){var g=G(arguments)
        this.text.apply(this,g)
        return this
    }
    $.fn.fS= function(z){ this.css('font-size', z)

        return this}
    $.fn.tA=  function(z){
        this.css('text-align', z)
        return this}

}
function addRm(){
    $.fn.ap2=function(el){
        el.A(this)
        return this
    }
    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}
    $.fn.rm=$.fn.xx=function(){var e=this
        e.remove()
        return e
    }
    $.fn.rm=function(){return this.remove()}

    $.fn.rm=function(){return this.remove()}
    $.fn.iA=$.fn.insertAfter

    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}
    $.fn.pp2=function(a){this.prependTo(a); return this}
    $.fn.a2=function(a){a.A(this); return this}
    $.fn.pp= $.fn.prepend

    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }
    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }

}
function color(){
    $.fn.al=function(al){return this.opacity(al)}

    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(c, c2){
        if(c2){return this.C(c).col(c2)}
        if(c=='*'){
            c = Yano.random()
            $l(c)
        }
        return this.css('backgroundColor', oO('c', c))
    }

    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(col, c2){
        if(c2){return this.C(col).col(c2)}

        if(col=='*'){
            $l(col)

            col = Yano.random() }

        return this.css('backgroundColor', oO('c', col))
    }
    $.fn.al= $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}
}
function klass(){
    $.fn.K= function(){
        $.fn.addClass.apply(this, arguments); return this
    }
    $.fn.xK= $.fn.removeClass
}
function valu(){
    $.fn.v = function(v){var g=G(arguments),v

        if(D(v)){
            this.val(v)

            return this
        }
        v=this.val()
        if(!g.p){this.val('')}
        return v

    }
    $.fn.Vx=function(){
        var val= this.val()
        this.val('')
        return val
    }
    $.fn.V=function(){
        var v=this.val()
        this.val('')
        return v
    }
}
function outer(){
    $.fn.e = $.fn.each
    $.fn.N= $.fn.next
    $.fn.tt=$.fn.tit= $.fn.title=function(t,c){var p
        p = $.p(t).fS(24).K('text-center').C('X', c||'z').mH(10).pH(30)
        this.A(p, $.hr().fS(10))
        return this
    }
    $.fn.gg = $.fn.toggle


    $.fn.h= $.fn.ht=$.fn.html

    $.fn.oh = function () {
        return this[0].outerHTML
    }
    $.fn.oH=$.fn.outerHeight
    $.fn.oh=function(){
        return this[0].outerHTML
    }


}
function disp() {

    $.fn.dp= $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }
    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.P1 = function (pos, x, y) {
        if (U(pos)) {
            return this.css('position')
        }
        this.css('position', oO('p', pos))

        if (N(x)) {
            this.X(x)
        }
        if (y) {
            this.Y(y)
        }
        return this
    }
    $.fn.P = function (pos, x, y) {
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
function style(){

    $.fn.ov = $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }
    $.fn.hd= $.fn.hide
    $.fn.sh= $.fn.show
    $.fn.s= $.fn.css
    $.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
    $.fn.fontSize=function(z){ this.css('font-size', z)

        return this}
    $.fn.textAlign=function(z){

        this.css('text-align', z)

        return this}

    $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}

    $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }

    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }

    $.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}
}
function atts() {
    $.fn.pp=function(a){ this.pp(a); return this}


    $.fn.chk=function(){ this.at('checked', true) }

    $.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}

    $.fn.at= $.fn.attr
    $.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}


    $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }
    $.fn.ty= $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }

    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
    $.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }

    $.fn.hf=$.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href); return this
    }
    $.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href);return this
    }


    $.fn.for = function (forWhat) {
        return this.attr('for', forWhat)
    }
    $.fn.placeholder = function (forWhat) {
        return this.attr('placeholder', forWhat)
    }
    $.fn.src = function (a) {


        if (U(a)) {
            return this.attr('src')
        }

        this.attr('src', $src(a))

        return this
    }
    $.fn.role = function (role) {
        if (U(role)) {
            return this.attr('role')
        }
        this.attr('role', role)
        return this

    }

    $.fn.src= function(a){
        if( U(a) ){return this.attr('src')}

        this.attr('src', $src(a) )

        return this
    }

    $.fn.role=function(role){
        if(U(role)){return this.attr('role')}
        this.attr('role', role)
        return this

    }

}
function background(){



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
        this.bgI('url("' + Y.src(url) + '")');
        return this
    }
    $.fn.bp = $.positionBackgroundImage = function (x, y) {
        var g = G(arguments), x = g[0], y = g[1];
        x = N(x) ? x : 0;
        y = N(y) ? y : 0;
        this.css({backgroundPos: x + 'px ' + y + 'px'});
        return this

    }

}
$.fn.p = $.fn.P = function (pos, x, y) {
    if (U(pos)) {
        return this.css('position')
    }
    this.css('position', oO('p', pos))
    if (N(x)) {
        this.X(x)
    }
    if (y) {
        this.Y(y)
    }
    return this
}
$.fn.os = function () {
    return this.offset()
}
$.fn.sz=function(sz){
    return this.at('size', sz)
}
$.fn.zi=$.fn.zIndex=function(z){
    if(U(z)){return this.css('z-index')}
    this.css('z-index',z);return this}
$.fn.getPosition = $.fn.getTotalOffset = function () {

    var e = this, x = 0, y = 0

    while (E(e) && e.tagName) {

        y += e.offsetTop

        x += e.offsetLeft

        if (isBodyElement(e)) {
            e = 0
        }

        e = e.offsetParent || e
    }

    return {x: x, y: y}


}//just gets the TOTAL offset of ANY element
$.fn.osP=function(){return this.offsetParent} // not a fn?
bor(); pad(); mar()
function mar(){
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
$.fn.ab = $.fn.abs = function (x, y) {
    var e = this

    return e.P('a', x, y)

}
$.fn.P = function (pos, x, y) {
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
$.fn.W=function(w){return w? this.width(w):this.width()}
$.fn.H=function(h){return h? this.height(h): this.height()}
$.fn.WH = function (w, h) {h = h || w; return this.W(w).H(h)}
//$.fn.Z = function (w, h) {return this.W(w).H(h || w)}
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
$.fn.l = $.fn.left=function (l) {var q = this, g = G(arguments)
    if (N(l)) {
        q.css('left', l)
        return q}
    l = q.css('left')
    return l == 'auto' ? 'auto' : q.position().left
}
$.fn.L = function (n) {
    if (U(n)) {return this.css('left')}
    this.css('left', n)
    return this
}
$.fn.rit= $.fn.R = function (right) {
    if (U(right)) {
        return this.css('right')
    }
    this.css('right', right)
    return this
}
$.fn.LR = function (l, r) {
    var q = this
    if (O(l)) {
        r = l.r;
        l = l.l
    }
    if (N(l)) {
        q.L(l)
    }
    if (N(r)) {
        q.R(r)
    }
    return q
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
$.fn.bot=$.fn.B =   function (bottom) {
    if (U(bottom)) {
        return this.css('bottom')
    }

    this.css('bottom', bottom)
    return this
}
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
$El=function(tag){
    if(tag){return document.createElement(tag)}

}

