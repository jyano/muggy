$.fn.dots = function () {
    var el=this

    el.copy()

    el.DOTS = []
    el.dats = []

    el.$(function (x, y) {
        x = parseInt(x)
        y = parseInt(y)
        el.cir(x, y)
        el.DOTS.push([x, y])
        el.dats.push(x);  el.dats.push(y) //vestige from phaser physics?
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
$.fn.snap = function (fn) {
    $.po('/img', {
        d: this.canvas.toDataURL(),
        dats: this.dats //vestige from phaser physics?
    }, fn)
}


$.cut = function(m) {z();  m=m|| 'me'
    $('body').A(
        $.bt('save sprite', function () {
            c.snap(CUTOUTS)//; EDIT()
        }), $.br(2),
        $.bt('start cut', function () {c.dots() }), $.br(2),
        $.bt('restart cut', function () {$.cut(m)}),  $.br(2),
        c= $.c('r', 500, 500).A().fit(m  ))
} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),


$.picDiv = function (top) {$l('in picDiv')
    return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
        .pad(25)}

$.pic = function(pic){
    return $.i(pic._id + pic.ext).WH(120, 120)
        .$(function(){
            $.cut(pic._id + pic.ext) }) }


UPLOAD=function(){
    f =  $.f().attr({
        method:'post',
        enctype: 'multipart/form-data',
        action: '/pic'
    }).C('o').A($.fU(''),
        $.sm().val('ok').K("show"))
    $.pop(f, {title: 'upload a new pic'} ).dg()
}
UPLOADS=function(){


    $.fm()
    y = 80
    n=0
    $.eG('myPics',  function(p){
        $l('pic: ' + n++)
        $.picDiv(y).A(

            UpPic(p)

        )
        y+= 220
    })


    function UpPic(p){return $.sp().A(

        $.pic(p),
        $.delBt('/pic', p)

    )}

    /*
     $.G('myPics',  function(p){_.e(p, function(p){

     $l('pic: ' + n++)
     $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
     y+= 220
     })

     })*/
}



EDIT = function () {

    st = $St('z', 400)

    ct = $.Ct().A(d = $.d(), st.canvas)

    $.eJ('/img', function (i) {


        c = d.Can('o', 40, 40)
        c.fit(i.d)
        c.$(function () {
            st.bm(i.d, function (bm) {
                bm.rC(200, 200).TR()
            })
        })
        c.mar(20).C('r')

        // d.A($.btX('/img', i, '-'))

    })


    $.$$(function () {
        $.po('/img', {d: st.du()}, $.rl)
    })
    d.C('b').al(.6).W(400).H(100)
    d.ov('scroll').css('overlflow-y', 'auto')

}
EDIT0 = function () {

    st = St(800)

    var imgHolder = $.d()

    CT(imgHolder, st).o('$$', sav(st, 'edit'))

    eaI(function (img) {

        imgHolder(
            $imageSizeFuncCan(
                img.d, 1, function () {
                    st.bm(img.d,

                        function (bm) {
                            //bm.rgc('+');
                            TR(bm);

                        }, '+')
                }
            )
        )

    })

    return st
}
EDIT1 = function () {

    st = St(800)

    var imgHolder = $.d()

    container = CT(imgHolder, st)

    container.o('$$', sav(st, 'edit'))

    eaI(function (img) {

        imgHolder.A(
            $.c('X', 100, 100).fit(img.d).click(function () {


                st.bm(img.d,

                    function (bm) {
                        bm.rCenter('+');
                        TR(bm)
                    })
            })
        )

    })

    return st
}
PROPBOX = function () {
    var imagesDiv = $.d()
    dA = $.dA('y', 200)($.sp('prop box'), $.hr(), $.sp('selected cutout:'))
    st = SuperStage(800)
    littleStage = SuperStage(80)
    dA(littleStage)
    CT(imagesDiv, st).o('$$', sav(st, 'edit'))
    eaI(function (image) {

        imagesDiv(
            xc(image.d, 1,

                function () {
                    st.bm(
                        image.d,

                        function (bm) {

                            TR(bm)


                            ///hmmm only clicks once?
                            //does this relate to the draggable st problem?
                            bm.$(function () {
                                $l('new selection')
                                b = bm
                                littleStage.ch('-')
                                clone = Do(bm.ob.clone())
                                littleStage.a(clone)

                                clone.xy(50).sxy(.1)
                            })


                        }


                        , '+')
                })
        )
    })

    return st
}
AVATAR = function () {
    z()
    //the challenge here is to make the st draggable but still usable, by dragging it by a wrapper div
    //  s=St(400)
    st = $.dragStage().t()
    //d = qq( st.ob.canvas )
    //d2=$.d().drg().w(500).h(500).c('o')
    //CT(d, st).o('$$',  sav(st,'avatar') )
    st.$$(function () {
        st.snap('avatar')
    })
    d = $.d('x', '+')
    $.Gj('img', function (i) {
        _.e(i, function (img) {
            d.A($.c(100, 100).A().fit(img.d).$(function () {
                st.bm(img.d, TR, '+')
            }))
        })
    })
    //d2( st )
}

PAINT = function () {
    _paintColor = 'blue'
    _paintSize = 10
    canvas = $.c('r', 400, 400).A().P('a', 100, 50)
    st = canvas.stage.tick()
    shape = new createjs.Shape()
    st.mug(function (mug) {
        mug.sXY(.4)
        st.A(shape)
    })
    graphics = shape.graphics
    graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
        .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
    st.on('stagemousedown', function (e) {
        graphics.beginStroke(_paintColor)
        st.on('stagemousemove', function (e) {
            graphics.lineTo(e.stageX, e.stageY)
        })
    })
    st.on('stagemouseup', function () {
        st.removeAllEventListeners('stagemousemove')
    })
    div = $.dK('controls').a2($('body'))
    colorPicker = $(' <input   type="color">')
    div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
    colorPicker.on('input', function () {
        $l('input ')
        _paintColor = $l(colorPicker.val())
        graphics.beginStroke(_paintColor)
    })
    $('.controls span').$$(function () {
        graphics.setStrokeStyle(parseInt($(this).T()))
    })
}
EDITOR = function () {
    z()
    var r = '#0FF', size = 2, oX = 0, oY = 0, shape,
        st = $.dragStage(),
        imgHolder = $.d('y', '+')
    $.eG('img', function (i) {
        imgHolder($.imgSizeFnCan(
            i.d, 1, function () {
                st.bm(i.d, function (bm) {
                    SL(bm.sxy(.4))
                }, '+')
            }))
    })
    TextAdder2(st)
}