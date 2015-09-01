ANob = {
    B: 'bottom', L: 'left', R: 'right', T: 'top',
    b: 'borderWidth', bb: 'borderBottomWidth',
    bl: 'borderLeftWidth', br: 'borderRightWidth',
    bt: 'borderTopWidth', bs: 'borderSpacing',
    C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
    mh: 'minHeight', mw: 'minWidth',
    i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
    m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
    mt: 'marginTop', o: ' outlineWidth',
    p: ' padding', pb: 'paddingBottom',
    pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
    ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'

}
$.fn.st = $.fn.stop
$.fn.f2 = $.fn.fadeTo
$.fn.bgImg = $.backgroundImage
$.fn.gFr = $.fn.getFrame
$.fn.sFr = $.fn.setFrame
$.fn.anFr = $.fn.animateFrames
$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
$.fn.qu = $.fn.queue
$.fn.dq = $.fn.dqu = $.fn.dequeue
$.fn.an = $.fn.a = function (a, b, c, d) {
    var g = G(arguments), o
    o = g.f

    var q = this
    if (O(a)) {
        if (a.c) {
            a.color = oO('c', a.c)
        }
        if (a.C) {
            a.backgroundColor = oO('c', a.C)
        }
    }
    q.animate(a, b, c, d)
    return q


    if (o.C) {//$l(o.C+'-->');
        o.C = oO('c', o.C);
        //$l(o.C)
    }
    _.e(o, function (v, k) {
        if (ANob[k]) {
            o[ANob[k]] = v
        }
    })
    if (N(g.s)) {
        g.s *= 1000
    }
    _p = o
    this.an(o, g.s, g.t, g[3], g[4])
    return this

    $.an = $.j = function () {
        var bd = $.bd();
        return bd.j.apply(bd, G(arguments))
    }

}
$.aF = $.anFr = $.anf = function (n, w) {
    var c = 0;
    n = n || 10;
    w = w || 20;
    $.ev(function () {
        q.sFr(c, w)
        c = (c + 1) % n
    })
}
$.notAn = function (a) { // sel
    return a.filter(':not(:animated)')
}
