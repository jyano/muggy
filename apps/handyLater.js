






// jqui http://jsfiddle.net/ManojRK/pQ9rj/
// http://jsfiddle.net/rniemeyer/YNCTY/
// sass
// mixins: insert new css pos, and new rules
// extend: share pops/styles between selectors

//placeholders: help extend to gen more effient output


//less
//mixins: a way of  of including ("mixing in") a bunch of properties from one rule-set into another rule-set


function alpha() {
    function locatin() {
        loc = $w.location
        loc.h = loc.href
        loc.hn = loc.hostname
        loc.ha = loc.hashn
        loc.H = loc.host
        loc.p = loc.port
        loc.pn = loc.pathname
        loc.P = loc.protocol
        loc.s = loc.search
        loc.rl = loc.reload
        loc.H = loc.host
        loc.rp = loc.replace
        loc.a = loc.assign
        hst = $w.history
        hst.b = hst.back
        hst.f = hst.forward
        hst.g = hst.go
        hst.l = hst.length
        nvg = navigator
        nvg.o = nvg.onLine
        rl = function () {
            $w.location = $w.location
        }
        rL = function () {
            location.reload(true)
        }

    }
    function worker(){

        jsBlob=function(f){
            return new Blob(['('+f.toString()+')()'],{
                type:"text/javascript"})}
        wrk=function(a){
            cou=function(a){return $w.URL.createObjectURL(a)}
            a=cou(jsBlob(a))
            var g=G(arguments),
                w= g.p? new sharedWorker(a):
                    new Worker(a)
            w.t=w.terminate
            w.pm=w.postMessage
            w.m=function(f){w.onmessage=f}
            return w
        }
        work=function(){
            w=wrk(function(){postMessage('hi')})
            w.m(function(e){$l('Worker said: '+e.data)})
        }


    }
    function windows(){
        _.iWd=  function(a){//Wd=
            if(O(a)){if( s$(a).contains('Window') ||
                s$(a[0]).contains('Window')){
                return window}}
        }
        $.rl=$.reload=function(){window.location=window.location}
        wnd=function(a){
            var g=G(arguments),a=g[0]
            if(g.n){return a.close()}
            return $w.open()
        }
        makeAllExtLinksOpenInNewWindows=function(){
            $("a[href^='http://']").attr('target','_blank')}
        accessParentFrame=function(){
            frames[0].parent===$w}
        accessChildFrame=function(){
            frames[0].window.location.reload}
        accessTopFrame=function(){
            $w.frames[0].window.top===$w.top}
        accessFrameByName=function(f){$w.frames[f]===$w.frames[0].location.reload}
        open=function(c){$w.open(_S(c), 'new_window','width=310,height=30')}

    }

    $.l = function (link) {
        if (link) {
            window.location = link
        }
        return window
    }
    /*

     loc=$w.location
     loc.h=loc.href
     loc.hn=loc.hostname
     loc.ha=loc.hashn
     loc.H=loc.host
     loc.p=loc.port
     loc.pn=loc.pathname
     loc.P=loc.protocol
     loc.s=loc.search
     loc.rl=loc.reload
     loc.H=loc.host
     loc.rp=loc.replace
     loc.a=loc.assign


     hst=$w.history
     hst.b=hst.back
     hst.f=hst.forward
     hst.g=hst.go
     hst.l=hst.length

     nvg=navigator
     nvg.o=nvg.onLine

     rl=function(){$w.location=$w.location}
     rL=function(){location.reload(true)}




     scr=function(a){var s=screen

     if(a){return {w:s.width,       h:s.height,
     aw:s.availWidth,  ah:s.availHeight,
     at:s.availTop,    al:s.availLeft}}

     var o={w:W(),h:H()}

     o.c=o.w+', '+o.h,o.t='screen size: '+ o.c

     return o}
     */

    wnd = function (a) {
        var g = G(arguments), a = g[0]
        if (g.n) {
            return a.close()
        }
        return $w.open()
    }

    makeAllExtLinksOpenInNewWindows = function () {
        $("a[href^='http://']").attr('target', '_blank')
    }


    accessParentFrame = function () {
        frames[0].parent === $w
    }
    accessChildFrame = function () {
        frames[0].window.location.reload
    }
    accessTopFrame = function () {
        $w.frames[0].window.top === $w.top
    }
    accessFrameByName = function (f) {
        $w.frames[f] === $w.frames[0].location.reload
    }


    open = function (c) {
        $w.open(_S(c),
            'new_window', 'width=310,height=30')
    }


//workers
    jsBlob = function (f) {
        return new Blob(['(' + f.toString() + ')()'], {
            type: "text/javascript"
        })
    }
    wrk = function (a) {
        cou = function (a) {
            return $w.URL.createObjectURL(a)
        }

        a = cou(jsBlob(a))
        var g = G(arguments),
            w = g.P ? new Worker(a) : new sharedWorker(a)
        w.t = w.terminate
        w.pm = w.postMessage
        w.m = function (f) {
            w.onmessage = f
        }
        return w
    }
    work = function () {
        w = wrk(function () {
            postMessage('hi')
        })
        w.m(function (e) {
            $l('Worker said: ' + e.data)
        })
    }


    STORAGE = function () {
        z()

        saveFromLocStor = function () {
            i = ta().id('input')
            i.q.value = localStorage.getItem('myText') || ''
            i.o('u', function () {
                localStorage.setItem('mytext', i.value)
            }, false)
        }

        readDatFromOtherPageLoc = function () {
            //put windows side by side and watch one update the other
            i = qi('input')
            I(function () {

                i.q.value = localStorage.getItem('myText') || ''
            }, 50)
        }


        saveFromSesStor = function () {
            i = ta().id('input')
            i.q.value = sessionStorage.getItem('myText') || ''
            i.o('u', function () {
                sessionStorage.setItem('mytext', i.value)
            }, false)
        }


    }
    ssS = sessionStorage
    sR = function (a) {
        var i = ssS.getItem(a)
        ssS.removeItem(a)
        return i
    }
    sS = function (a, b) {
        ssS.setItem(a, b);
        return ssS
    }
    sG = function (a) {
        return ssS.getItem(a)
    }
    sL = function () {
        return ssS.length
    }
    sX = function () {
        ssS.clear();
        return ssS
    }
    lcS = localStorage
    lR = function (a) {
        var i = lcS.getItem(a)
        lcS.removeItem(a)
        return i
    }
    lS = function (a, b) {
        lcS.setItem(a, b);
        return lcS
    }
    lG = function (a) {
        return lcS.getItem(a)
    }
    lL = function () {
        return lcS.length
    }
    lX = function () {
        lcS.clear();
        return lcS
    }


}
function alph(){
    isWindow = function(a){alert('isWindow'); if(O(a)){
        if( s$(a).contains('Window') ||
            s$(a[0]).contains('Window')){
            return window}
    }}

    $.fn.in=function(num){
        var g=G(arguments)
        this.delay(num * 1000)
        return this
    }
}
old=function(){

    drag = drg = function (element) {
        var q = $b(qq(element).q).css({position: 'absolute'}).on('mousedown', function (e) {
            var offset = $(this).offset(),
                deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
            $('html').on('mousemove', function (e) {
                q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
            })
                .on('mouseup', function () {
                    $(this).off()
                })

        })

        touchDrg(element)
        return qq(element)

    }

}
old=function() {
    tf = function () {
        alert('tf')
        var g = G(arguments)
        t = n = 1
        $.in(1, function () {
            t = 0
        })

        $.ev(1, function () {
            if (t) {
                n = n + 1

                co()

            }

            else {
                $l(n)
            }
        })

    }

}

$.K = function (o) {
    alert('cjs.Keys')
    function oldFn() {
        if (!O(o)) {
            return
        }
        if (F(o.u)) {
            cjs.tick(function () {
                if (cjs.Keys.u) {
                    o.u(cjs.Keys.u)
                }
            })
        }
        if (F(o.d)) {
            cjs.tick(function () {
                if (cjs.Keys.d) {
                    o.d(cjs.Keys.d)
                }
            })
        }
        if (F(o.l)) {
            cjs.tick(function () {
                if (cjs.Keys.l) {
                    o.l(cjs.Keys.l)
                }
            })
        }
        if (F(o.r)) {
            cjs.tick(function () {
                if (cjs.Keys.r) {
                    o.r(cjs.Keys.r)
                }
            })
        }
    }
}