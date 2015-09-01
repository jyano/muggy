$.fG1= function(a){
    alert('$.fG1!')
//"<div class="form-group"></div>"
    return _a($.dK('form-group'),  G(arguments))
}
$.Ct = $.dCt= $.dC=  $.container =function(){

    $l('in $.dC')

    return $.dK('container')
}//fixed width
$.dCF= $.containerFluid =function(){

    return $.dK('container-fluid')

}//full width
$.gl=  function(){var g=G(arguments),str,sp

    sp= $.sp().K('glyphicon').K('glyphicon-'+oO('gl',g[0]))
    if(O(g[1])){sp.A(g[1])}
    if(S(g[1])){sp.A(g[1]) }

    if(g.n){
        sp.pp(
            $.sp().T('-')
        )
    }
    return sp
    //not used
    function gl(glyph, a){return $.sp(a).K("glyphicon glyphicon-" + glyph)}
}
$.boot = function(){z();

    var r = $.R()
    _.e(arguments, function(g){r.A(g) })
    return  ct = $.Ct().A(r)
}
$.W= $.well = function(){
    var d = $.dK('well')

    _.e(arguments, function(arg){
        d.A(arg)
    })

    return d
}
$.dH= $.headerDiv=function(){
    var div= $.dK('header')
        .K('text-center').id('header')
        .css('margin-bottom-width', 40).C('y')
    return div
}
$.Jb=$.J= $.jumbo =  function( ){

    var d = $.dK('jumbotron').K('text-center').id('jumbo')

    _.e(arguments, function(g){
        if(S(g)){g = $.h1(g)}
        d.A( g )
    })
    return d}
$.cp= $.caption = function(cap){return $.dK("caption").A($.h4(cap))}
$.wrap=function(i){
    if(S(i)){i = $.i(i)}
    return $.dK("col-xs-4 col-sm-3 col-md-2 col-lg-1").A(
        $.a('').K('thumbnail').A(i, 'hi')
    )
}
$.iconBar = function () {
    return $.sp().K("icon-bar")
}
$.caret = function () {
    return $.sp().K("caret")
}
$.fn.gg = $.fn.toggle = function (a) {
    return this.attr("data-toggle", a)
}
$.fn.tg = $.fn.target = function (a) {
    return this.attr("data-target", a)
}

//modal
$.mF= $.modalFooter=function(){var d= $.dK('modal-footer')
    _.e( arguments, function(g){d.A(g)})
    return d}
$.mB= $.modalBody =   function(){
    var d = $.dK('modal-body')
    _.e( arguments, function(g){d.A(g)})
    return d}
$.mH= $.modalHeader =   function(){
    var d = $.dK('modal-header')
    _.e( arguments, function(g){d.A(g)})
    return d}
$.mC= $.modalContent = function(){
    var d= $.dK('modal-content')
    _.e(arguments, function(g){ d.A(g)})

    return d}
$.mD= $.modalDialog=function(){
    var d= $.dK('modal-dialog')
    _.e(arguments,function(g){d.A(g)});
    return d}
$.mF= $.modalFade  = function(){
    var d= $.dK('modal fade')
    _.e(arguments, function(g){d.A(g)});
    return d}
$.m= $.modal=function(a,b, contents){

    var footer= $.modalFooter(

        $.bt('close').attr({  type:'submit',  'data-dismiss':'modal'  })

    )

    if(contents){ footer.A(contents) }

    return $.modalForm(
        $.modalDialog(
            $.modalContent(
                $.modalHeader(
                    $.bt('ooo').K('close')
                        .attr({'data-dismiss':'modal'}),
                    $.h4(a).K('modal-title')   ),
                $.modalBody(b),
                footer
            ))
    )}


//img
$.iR= $.imgResponsive=function(s,f){return $.img(s,f).K('img-responsive')}
$.iCir= $.imgCircle=function(s,f){
    return $.img(s,f).K('img-circle')
}
$.iRo= $.imgRounded=function(s,f){
    return $.img(s,f).K('img-rounded')
}
$.iTh= $.imgThumbnail=function(s,f){return $.img(s,f).K('img-thumbnail')}


//nav
$.dropDown=function(a,f){   var l = $('<a>').id(a).A(a);
    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )}
    return  l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' })}
$.active=function(a,f){   var l = $('<a>').id(a).A(a);
    if(F(f)){  l.$(f)  } else {  l.href( f|| '#' )}
    return l.K('active')
}
$.sNR= $.nSR=   function(){
    return $.f().K("navbar-form navbar-right").A(
        $.dK('form-group').A($('<input>').K('form-control').attr('placeholder','search')),
        $.submitButton().A( $.gl('search')))
}
$.ddT=   function(a){return $.a( a ).K("dropdown-toggle").toggle("dropdown").A($.caret())}
$.ddM= function(){var menu
    menu= $.ul().K("dropdown-menu")
    _.e(arguments, function(g){menu.A( $.liA(g,function(){
        window.location='/wap/'+g
    }))})
    return menu
}
$.dd= function(a,b){return  $.li().K("dropdown").A($.ddT(a), $.ddM.apply($, b) )}
$.n=  function(){var g=G(arguments), n
    n = $.ul().K("nav navbar-nav")
    _.e(g, function(g){ n.A( g ) })
    return n
}
$.nR=  function(){var g=G(arguments),n
    n= $.ul().K("nav navbar-nav navbar-right")
    _.e(g, function(g){ n.A( g ) })
    return n
}
$.nb=  function(){return $.dK("navbar navbar-default").A($.dK("container-fluid"))}
$.nbH=function(brand, link){return $.dK("navbar-header").A(

    $.bt().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(
        $.sp("Toggle navigation").K("sr-only"),
        $.iconBar(),$.iconBar(),$.iconBar()
    ),

    $.a(brand).K("navbar-brand").$( function(){  $.l(link)  })
)}
$.nbC=  function(){return $.dK("navbar-collapse collapse")}


//nails
$.aTn = $.thumbA = $.thumbnailClick = function (i, fn) {
    var a
    fn = fn || function () {
        alert('you clicked a thumbnail')
        i = this
    }
    a = $.a('', fn).K('thumbnail')
    a.A($.i(i))
    return a

    // all thumbnails must be within a col
// can be a class on an anchor
// or can be on a div (for more control)
}
$.dTn = $.thumbD = $.thumbnailDiv = function (a) {

    var div = $.dK('thumbnail')

    _.e(arguments,

        function (arg) {

            div.A(arg
                //  S(arg)? $.img(arg): arg
            )

        })

    return div
}
$.colThumbA = function (clas, img, func) {
    return $.dK(clas).A(
        $.thumbA(img, func)
    )
}
$.tn = $.thumbnail = function (a) {

    var div = $.dK('thumbnail')

    _.e(arguments,

        function (arg) {

            div.A(S(arg) ? $.img(arg) : arg)

        })


    return div

}
$.tnR = $.thumbnailRow = function (g) {
    z()

    var theRow = $.row()

    _.e(G(arguments),
        function (a) {
            theRow.A($.thumbnail(a))
        })

    return theRow.A()
}
$.tnT = $.thumbnailTimes = function (num) {
    var arr = []
    _.times(num || 20,
        function () {
            arr.push('me')
        })
    _a(thumbnail, arr)
}
//tab
$.showTab = function (id) {
    $('#' + id).tab('show')
} //necessary?
$.tab = function (t, lookFor) {
    var g = G(arguments)
    if (F(lookFor)) {
        var tabT = g[0], fn = g[1],
            load = function (e) {
                $('#' + tabT).tab('show');
                fn()
            }
        li = $.li().A($.a(tabT, load))
        li.load = load
        if (g.m) {
            li.K('active')
        }
        return li
    }
    return $.li().A($.a(t, '#' + lookFor)
        .attr({'data-toggle': 'tab'}))
}
$.navTabs = function () {
    var tabs, g = G(arguments)

    tabs = $.ul().K("nav nav-tabs")
    _.e(g, function (g) {
        tabs.A(g)
    })
    return tabs
}
$.tabPane = function (id) {
    var g = G(arguments),
        pane = $.dK("tab-pane fade").id(args[0])
    if (g.p) {
        pane.K('active in')
    }

    return pane
}
$.tabContent = function () {
    var g = G(arguments), d = $.dK("tab-content")
    _.e(g, function (g) {
        d.A(g)
    })
    return d
}
$.tabs = function () {
    var g = G(arguments)

//can pass in a $.tab() -> 'tab'
    //OR can pass in an array, and then $.tab will be called for it, and pass in the pams


    tabsWrapper = $.div('X').WH('auto').A(
        tabBar = $.ul().K("nav nav-tabs"),

        panel = TABS = $.sp()
    )

    _.e(g,
        function (tab) {
            if (A(tab)) {
                tab = $.tab(tab[0], tab[1])
            }
            tabBar.A(tab)
        })

    tabsWrapper.load = function () {
        tabBar.ch().first().first().$()
        return tabsWrapper
    }
    return tabsWrapper
}
//pil
$.pil = function (o) {
    var g = G(arguments), p

    p = $.ul().K('n np').C('y')


    if (O(o)) {

        _.e(o, function (v, k) {

            var l = A(k) ? lik(k[0], '+') : lik(k)

            l.o('$', v);
            p(l)
        })
    }

    else {
        _.e(g, function (v) {
            if (A(v)) {
                p(lik(v[0], '+'))
            } else {
                p.A(lik(v))
            }
        })
    }
    return p

}
$.pill = function (name, func) {

    var a = $.a(name, func).attr({'data-toggle': 'pill', href: '#' + name})

    return $.li().A(a)
}
$.navPills = function () {
    return $.ul().K('nav nav-pills')
}
$.pillPane =  function (id) {

    var d = $.dK('pill-pane fade').id(id).attr('role', 'pillpanel')

    return d
}
$.pillContent = function () {

    var div = $.dK("pill-content")

    _.e(arguments,
        function (arg) {

            div.A(arg)
        })


    return div
}
LoginPill = function () {
    $.pil({'log in': lI, 'log out': lO}).pp()
}
$.dF = $.Ft = $.footer = FT = function () {

    var args = G(arguments),

        d = $.dK('footer')


    _.e(args, function (arg) {

        d(
            S(arg) ? pg(arg) : arg
        )
    })

    if (args.p) {
        d.cen()
    }
    return d.id('footer')

}

// -rows must be placed within a .container(-fluid) for proper alignment and padding
// -only columns may be immediate children of rows
// -Columns create gutters (gaps between column content) via padding.
//   That padding is offset in rows for the first and last column via negative margin on .rows
$.R = $.row = function (n) {

    var div = $.d().addClass('row');

    _.e(G(arguments), function (arg) {
        div.A(arg)
    });

    return div
} //pass in size, and then args(contents) as a list (or as an array)
$.col = function () {
    var args = G(arguments),

        div = $.dK('m' + args[0]),

        iter = A(args[1]) ? args[1] : args.r;

    _.e(iter, function (v) {
        div.A(v)
    });

    return div
}
$.R = $.row = function (n) {
    var d = $.dK('row')
    _.e(arguments,
        function (arg) {
            d.A(arg)
        })
    return d
}//pass in size, and then args(contents) as a list (or as an array)
$.Cl = $.col = function () {
    var args = G(arguments),

        d = $.dK('col-md-' + args[0]),
        iter = A(args[1]) ? args[1] : args.r
    _.e(iter, function (v) {
        d.A(v)
    })
    return d
}
$.row2 = function (a, b) {
    return $.row(
        $.col(6, a),
        $.col(6, b)
    )
}
$.row3 = function (a, b, c) {
    return $.row(
        $.col(4, a),
        $.col(4, b),
        $.col(4, c)
    )
}
$.row4 = function (a, b, c, d) {
    return $.row(
        $.col(3, a),
        $.col(3, b),
        $.col(3, c),
        $.col(3, d))
}
$.row84 = function (a, b) {
    return $.row($.col(8, a), $.col(4, b))
}
$.row48 = function (a, b) {
    return $.row($.col(4, a), $.col(8, b))
}//
$.row39 = function (a, b) {
    return $.row($.col(3, a), $.col(9, b))
}//
$.row210 = function (a, b) {
    return $.row($.col(2, a), $.col(10, b))
}//
$.row111 = function (a, b) {
    return $.row($.col(1, a), $.col(11, b))
}//row48([4],[ 8 ]) //row39([3],[ 9 ])
$.push4 = function (a) {
    return $.row48([], a)
}
$.push3 = function (a) {
    return $.row39([], a)
}
$.push2 = function (a) {
    return $.row210([], a)
}
$.push1 = function (a) {
    return $.row111([], a)
}
$.row93 = function (a, b) {
    return $.row($.col(9, a), $.col(3, b))
}
$.row363 = function (a, b, c) {
    return $.row(
        $.col(3, a),
        $.col(6, b),
        $.col(3, c)
    )
}
$.ROW = function (a, b, c, d) {var g = G(arguments), z = g.z
    if (z == 1) {
        return $.row($.col(12, a))
    }
    if (z == 2) {
        return g.p ? $.row93(a, b)
            : g.n ? $.row39(a, b)
            : $.row2(a, b)
    }
    if (z == 3) {
        return g.n ? $.row363(a, b, c) : $.row3(a, b, c)
    }
    if (z == 4) {
        return $.row4(a, b, c, d)
    }}