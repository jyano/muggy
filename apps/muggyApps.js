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
    shape = new cjs.Shape()
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

    div = $.dK('controls')

    div.a2($('body'))

    colorPicker = $(' <input   type="color">')

    div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))

    colorPicker.on('input', function () {

        _paintColor = $l(colorPicker.val())
        graphics.beginStroke(_paintColor)
    })

    span=$('.controls span')
        if(span && F(span.$$)){span.$$(function () {
            graphics.setStrokeStyle(parseInt($(this).T()))
         })}
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
CUTOUTS=function(){
    $.bX=$.btX=function(){var g=G(arguments), o={url: g.f, data: g.s}
        return $.bt('X', function (){var bt=this
            $.aj({type: 'DELETE',
                url: o.url,
                data: o.data,
                success: function(){rmParOf(bt)
                    function rmParOf(bt){$(bt).pa().rm()}}})})}
    $.fm(); section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
    y = 80
    $.eJ('/img', function(img){var i
        i = $.i(img.d)
        i.WH(100,100)
        i.$(function(){ $.po('/changeMug', {url: img.d}, function(){ i.selPic() }) })
        $.dA('b',100, 100, '+').left(y).top(200).K('pic').A(i,  $.btX('/img', img) )
        y += 220
    })
}
TWEEN=function(a){


    st=$St(500,500)




    st.mug(function(bm){

        b = bm

        TR(bm)


        $Tw(

            [ bm, 'l' ],

            { x:0, sxy:.7, r:0 },

            [ {x:300,sxy:2.3,r:0}, 1000 ],

            [ {x:0,sxy:.7,r:-30,a:.5}, 3000 ]
        )


    })




    st.mug(function(bm){

        bm.TR()
        $Tw([bm,'l'],
            {x:0,sxy:.7,r:-2},
            [{x:300,sxy:2.3,r:0,a:.2,kx:60},3000],
            [{x:320,a:1,sxy:2,r:-1},1000],
            [{rx:100},1000],
            [{ry:100},1000],
            [{r:50,x:1400,y:300},3000],
            [{r:200,x:1000,y:200,sxy:1},3000],
            [{r:100,x:300, ky:-100},1000],
            [{rx:30,ry:30, r:150,x:500 },2000],
            [{rx:20,ry:50,r:100,x:500,kx:300 },2000],
            [{kxy:0,x:320,y:0,rxy:0,sxy:2,r:-1},3000])



    })




}
BOD=function(){z()
    s = $St(800, 800).A(
        b1=Bod1(),
        b2=Bod2().XY(300),
        cyc=Cycle( 500) ,
        f = Flame( 200)
    )


    function Cycle(x,y,rt){


        ct= $Ct().mug(function(mug){mug.sXY(.4)
            ct.bm('uni', function(b){
                b.sX(-.8).XY(-20,200).rXY(240,80)
                b.n('uni')
                cjs.TR(mug, ct)
                cjs.RT(b, ct)
            })})

        if(N(x)){ct.X(x)}
        if(N(y)){ct.Y(y)}
        if(N(rt)){ct.rt(rt)}
        return ct
    }
    function Flame(x,y){var c
        c= $Ct().dg()
        c.bm('flame', function(b){
            tweens.shakeY(b)
            c.mug(function(b){
                b.rC()
                tweens.shakeX( tweens.rott(b) )
                c.bm('flame', tweens.shakeX)
            })

            c.$$(function(){
                c.bm('flame', function(b){tweens.prod1(b.sXY(.2))})
                c.bm('flame', function(b){tweens.prod2(b.sXY(.2))})
            })
        })
        if(N(x)){c.X(x)}
        if(N(y)){c.Y(y)}
        return c}
    function Bod1(){

        var  outerCont = $Ct().dg()

        var  innerCont= $Ct()


        outerCont.A( innerCont )

        outerCont.mug(

            function(m){
                m.sXY(.4)

                cjs.bindSlide(m, outerCont)


                outerCont.bm('arm', function(b){
                    b.name = 'arm'
                    b.sX(-.8).XY(140,100).rXY(200,80)
                    cjs.bindRotate(b)
                    b.$$(function(){  tweens.rpunch(b)  })
                })


                innerCont.XY(40, 120).rXY(40, 100)
                innerCont.bm('uparm', function(b){
                    b.sX(.8).XY(80,180).rXY(200, 80)
                    cjs.bindRotate(b, innerCont)
                })
                innerCont.bm('forearm',  function(b){
                    b.name='lf'
                    b.XY(-100,140).sX(.8).rXY(20,120)
                    cjs.bindRotate(b)
                    innerCont.$$(  function(){tweens.lpunch(b)})
                })})

        return b=outerCont



    }
    function Bod2(x,y){

        var c1=$Ct(), cL=$Ct()

        c1.mug(function(m){   SL(m.sXY(.4), c1) })

        c1.bm('arm',function(b){  b.sX(-.8).X(140).Y(100).rX(200).rY(80)
            RT(b); b.$$( function(){tweens.rpunch(b)})})

        cL.bm('uparm', function(b){
            RT(b, cL)
            b.sX(.8).XY(80,180).rXY(200,80)
            cL.$$(function(){tweens.lpunch(cL)})
            cL.XY(140,100).rXY(100, 100)})
        cL.bm('forearm', function(b){ b.name = ('lf')
            b.sX(.8).XY(-100, 140).rXY(20,120)
            RT(b)})
        return c1.A(cL)
    }

}
SUIT=function(st){
    alert('mugCont')
    qu= new cjs.LoadQueue().complete(onMug)
        .manifest([{id:"mug", src:"/myMug" }  ])

    cont= $Ct()
    cont.flame=function(){
        cont.desuit()
        cont.A(

            cont.suit = cjs.container().bm('flame', function(flame){  })
        )
    }
    cont.uni=function(){
        cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('uni', function(uni){
                uni.x(200).y(200)
                cont.mug.sxy(.2).x(300)

            }))}
    cont.guy=function(){cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('guy', function(guy){

                guy.spin()
                cont.spin()

            })
        )}
    cont.desuit=function(){
        cont.mug.sXY(1).XY(200)
        if(cont.suit){
            cont.suit.remove()
            cont.suit=null
        }
    }
    function onMug(){
        mug = qu.getResult("mug")
        // cont.bData( mug )//.rgc('+')
        cont.A( cont.mug = $Bm(mug))
    }
    return cont
}

SPACE = function () {
    St().bgI('/space.jpg').mug(function (m) {
        m.sXY(.2).dg().RT().SL()
    })
}
SOLAR = function () {

    i =  cjs.DisplayObject.prototype
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


    i.go = i.startMoving = function (x, y) {

        if (x) {
            this.vX(x)
        }
        if (y) {
            this.vY(y)
        }
        var ob = this
        T.on('tick', function () {
            ob.X(ob.X() + (ob.vx || 0))
            ob.Y(ob.Y() + (ob.vy || 0))
        })
        return this


    }
    cjs.bulletHit = function (bu, inWhat) { //used in solar
        var res

        res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

        if (res == true) {
            $l('hit!')
        }

        return res
    }
    i.bounce = function (n) {
        n = N(n) ? n : 0
        var ob = this, st = this.st(), h = st.H(), w = st.W()
        cjs.tick(
            function () {
                var x = ob.x, y = ob.y
                if (x > w - ob.W() - n || x < (n )) {
                    ob.vX('-')
                }
                if (y > h - ob.H() - n || y < (n )) {
                    ob.vY('-')
                }
            })
        return st
    }
    i.vX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.vY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.vXY = function (x, y) {return this.vX(x).vY(y)}

    z();
    st = $St(1000, 500).bgI('/space.jpg')

    st.bm('guy', function (bm) {
        guy = bm
        bm.dg()
        bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
        bm.startMoving()
        bm.warp()
        st.bm('sun', 0.2, function (bm) {
            sun = bm
            bm.dg()

            bm.startMoving(4, 10)
            bm.warp()
            _.ev(.1, function () {
                if (cjs.bulletHit(sun, guy)) {
                    sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
                    sun.vx += .2;
                    sun.vy += .2
                }
            })
        })
    })

    st.mug(0.4, function (bm) {
        bm.X(400).dg().bounce(0)
        bm.startMoving(10, 10)
    })


}
HIT = function () {
    St()

    st.mug(function (mug) {
        mug.dg()

        st.bm('flame', function (flame) {
            b = flame
            b.dg()

            b.sXY(.1)
                .rXY(flame.getBounds().width / 2, 500).XY(400, 400)

            //st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
            st.MD(function (e) {
                localCoords = mug.globalToLocal(e.rawX, e.rawY)
                hit = mug.hitTest(localCoords.x, localCoords.y)
                if ($l(hit)) {
                    $l('hit');
                    st.bgC('red')
                } //;$l( e.X+ ' '+ e.Y )
                else {
                    $l('no hit');
                    st.bgC('yellow')
                }
            })

            st.MM(function (e) {
                localCoords = mug.globalToLocal(b.x, b.y)
                hit = mug.hitTest(localCoords.x, localCoords.y)
                if (hit) {  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
                    st.bgC('red')
                }
                else {
                    $l('NO HIT');
                    st.bgC('yellow')
                }
            })
        })
    })
}
UNIVERSE = function () {

    $addGuy = function (un) {
        $mug(un, function (bm) {
            bm = new cjs.Bitmap(bm)
            uni.A(bm);
            $GUYS.push({

                un: un,

                bm: bm.rC().XY(600).sXY(.4)
            }) // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
        })
    }


    $getGuy = function (un) {

        var targetGuy = false //  finds a guy({un, bm}) in $GUYS array from a un ( rets false if he aint there) //alpha: can accept ob received on guyUpdates ({un, x, y})//can pass the string or also an ob with 'un' property
        if (O(un)) {
            un = un.un
        }

        _.e($GUYS, function (guy) {
            if (un == guy.un) {
                targetGuy = guy
            }
        })
        return targetGuy
    }

    $getGuyNotMe = function (un) {
        var guy = $getGuy(un)
        if (guy && guy.un != _username) {
            return guy
        }
    }

    $Bub = function (t, x, y) {
        var g = G(arguments), ct = $Ct()
        text = g[0] || 'hi!';
        x = g[1] || yourBm.x;
        y = g[2] || yourBm.y

        uni.A(ct);
        ct.cir('w', 120, x - 250, y - 250, 50).cir('b', 30, x - 120, y - 120, 30).cir('g', 20, x - 80, y - 80).text(t, "20px Arial", "blue", x - 300, y - 300)
        $Tw(ct, [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000])
        _.in(10, function () {
            ct.rm()
        })
        if (g.p) {
            k.emit('bub', {
                t: t,
                x: x,
                y: y,
                u: _username
            })
        }
        return ct
    }


    z();
    n = 0;
    $GUYS = []

    k.on('bub', function (bub) {
        var guy;
        if (guy = $getGuy(bub.u)) {
            $Bub(bub.t, bub.x, bub.y)
        }
    })

    k.on('updateGuy', function (user) {
        var guy
        if (user && (guy = $getGuyNotMe(user.un))) {
            guy.bm.XY(user.x, user.y)
        }
    })
    k.on('inviteAccepted', function (invite) {
        if (_username == invite.from) {
            $addGuy(invite.toWho)
        }
    })


    k.on('newInvite', function (d) {
        var popD, pop, title, ya, na;
        if (_username != d.toWho) {
            return
        }
        title = $.h1('chat with ' + d.from + '?')
        ya = $.bt('ya', function () {
            pop.modal('hide')
            $addGuy(d.from)
            k.emit('acceptInvite', {from: d.from, toWho: _username})
        })
        na = $.bt('na', function () {
            pop.modal('hide')
        })
        popD = $.d()
        pop = $.pop(popD)
        $mug(d.from, function (mug) {
            popD.A($.i(mug).WH(200, 200), title, ya, na)
        })
    })


    uni = $St(1000, 800);

    uni.bgI(
        R(2) ? '/beach.jpg' :
            R(4) ? '/space.jpg' :
                '/chicks.png'
    )

    uni.mug(function (b) {
        if (O(b)) {
            yourBm = b.dg().rC().XY(600).sXY(.4)
        }
        $GUYS.push({un: _username, bm: yourBm})
        b.$$(function () {
            b.rm();
            k.emit('X', _username)
        })
        page = $.d('b', 1000, 'auto').A($.br(3))
        page.A(chatMessageInputTextBox = $.ip('...', 'tx').id('textinput'),
            chatSendButton = $.bt('send', function () {
                $Bub($('#textinput').V(), '+')
            }))
        $.eG('users', function (user) {
            if (user.mug) {
                var mugInviteBt = $.i(user.mug).WH(100)
                mugInviteBt.$(function () {
                    k.em('sendInvite', {from: _username, toWho: user.un})
                });
                page.A(mugInviteBt)
            }
        })
        _.ev(.1, function () {
            k.em('myUpdate', {un: _username, x: yourBm.x, y: yourBm.y})
        })
    })
}
CHAT = function () {

    $CHATS = {}
    k.on('ChatRmMs', function (d) {
        if ($CHATS[d.rm]) {
            $CHATS[d.rm].write(d.un + ': ' + d.ms)
        }
    })
    k.on('rmUd', function (d) {
        if ($CHATS[d.rm]) {
            $CHATS[d.rm].updateUsersDiv(d.users)
        }
    })
    chatMenu$ = $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)
    chatMenu$.A($.ChatBt('general'), $.ChatBt('fun'), $.ChatBt('sexy'),
        inputMs = $.ip().K('form-control'),
        $.bt('private room', function () {
            $.chat(inputMs.v())
        }).mar(40))
}
USERS = function () {

    d = $.Ct().A(
        $.R(),
        $.h1('users'),
        $.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
    ).C('r')


    //i = 0

    $.G('users', function (u) {
        d.E();
        _.e(u, function (u) { //$l(u.username + '-' + i++)

            d.A(
                $.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
            )

        })
    })

}
PACK = function(){

    stage = $St(800)

    //stage.op(.7)

    sprite = $sprite(Pack).XY( 200, 260 ).sXY(1.2).drag()


    stage.A(sprite)

    //.rgc()
    sprite.framerate=6

    sprite.play()


}
SPRITE=function(sprite){

    sprite = $sprite( sprite || SS ).XY(10).dg()

    stage = $St('o', 400 )
        .dg()//.op(.7),
    stage.A( sprite )


    controls={
        jump:function(){ sprite.gotoAndPlay('jump') },
        explode:function(){ sprite.gotoAndPlay('explode') },
        spin:function(){ sprite.gotoAndPlay('spin') },
        stop:function(){ sprite.stop() },
        play:function(){ sprite.play() } }

    $.d('y',460, 89).css({
        position:'absolute',
        top: 200, left: 300,
        padding:20, opacity:.9
    }).dg().A(
        $.sp(' '),
        $.bt('spin',function(){    controls.spin() }), $.sp(' '),
        $.bt('jump',function(){    controls.jump() }), $.sp(' '),
        $.bt('explode',function(){   controls.explode()  }), $.sp(' '),
        $.bt('play',function(){   controls.play()  }), $.sp(' '),
        $.bt('stop',function(){   controls.stop()  }), $.sp(' '),
        $.bt('meta', function(){ SPRITE() })

    )

    s = sprite
    return  controls}
