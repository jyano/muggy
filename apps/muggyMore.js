INDEXX = function () {
    z()
    s = $.dragStage().bm('me', function (bm) {
        b = bm
        SL(b)

        _.t(10, function () {
            s.bm('guy', SL)
        })

        s.ch(b, 3)
    })
}
CARD = function () {

    var t = 100, d


    card = function (a, b) {
        d = $.dA('y', 300)//.cen()
        d.$$(function () {
            d.rm()
        })
        if (O(a)) {
            d.A($.h3(a.u || 'anon'), $.i(a.m || 'me'))
        }
        else {
            d.A($.h3(a || 'anon'), $.i(b || 'me'))
        }
        d.WH(200)
    }

    cards = function () {

        $.get('/users', function (u) {
            _.e(u, function (u) {
                $.P('/getImageById', u.m, function (mug) {
                    d = $.dA('r', '+').lt(t)
                    d.A($.h2(u.u), $.i(mug).WH(200, 300))
                    t += 20
                })
            })
        })
    }
}
SELECTED = function () {

    selected=function(bm){

        SL(bm)
        bm.$(function(){
            cjs.Tween.removeAllTweens()
            bitmap=bm
            cjs.scaleShake(bm.dO)
        })
    }

    TextAdder=function(stage){

        var f= $.f().a().C('x').P(10).W(300).dg()

        f.A(
            $.ip().id('text'),
            $.bt('for text',   function(){var  _text,theText,val = $l( $('#text').val()  )
                $('#text').val('')
                _t = $T(val,'w', 30, 100, 10)
                t=  $Ct().A( _t )
                t.dO = _t
                SL(t)
                st.A(t)
                selected(t)
            }))

        return f
    }
    TextAdder2=function(stage){

        var form= $.f().C('x').P(10).W(300).dg()

        form(

            $textInput().id('text'),

            $.bt(  'for text',   function(){
                var val = $l( $('#text').val()  )

                $('#text').val('')

                var theText= EaselText(val,'w', 30, 100, 10)
                SL(theText)


                stage.a( theText )


            }))

        return form }

    z()
    st = $.dragStage()
    st.bm('coin', function (bm) {
        coin = bm;
        SL(coin)
        selected(bm)

    })
    st.bm('sun', function (bm) {

        sun = bm;
        SL(bm)
        selected(bm)

    })
    TextAdder(st)
    st.bm('me', function (bm) {

        me = bitmap = bm
        SL(bm)
        bm.rgc('+')
        cjs.scaleShake(bm)
        //rotateShake(bm)
        selected(bm)
        st.bm('flame', function (bm) {
            flame = bm;
            SL(bm);
            selected(bm)
        })
        st.bm('guy', function (bm) {
            guy = bm;
            SL(bm);
            selected(bm)
        })

    })
    d = $.d('y', '+')
    loadImagesDiv = function () {
        d.E()
        $.eG('img', function (img) {
            d.A(
                $.imageSizeFuncCan(
                    img.d, 1, function () {
                        st.bm(img.d, function (bm) {
                            SL(bm.sXY(.4));
                            bm.rgc('+');
                            selected(bm)
                        })
                    })
            )
        })
    }

    loadImagesDiv()
    d = $.dA('y', 500).A(
        $.bt('freeze', cjs.Tween.removeAllTweens),
        $.bt('right', function () {
            bm.x(bm.x() + 10)
        }),
        $.bt('left', function () {
            bm.x(bm.x() - 10)
        }),
        $.bt('up', function () {
            bm.y(bm.y() - 10)
        }),
        $.bt('down', function () {
            bm.y(bm.y() + 10)
        }),
        $.br(),
        //fix
        $.bt('bigger', function () {
            bm.sXY(1.1, '*')
        }),
        $.bt('smaller', function () {
            bm.sXY(.9, '*')
        }),
        //
        $.bt('wider', function () {
            bm.sx(bm.sx() * 1.1)
        }),
        $.bt('thinner', function () {
            bm.sx(bm.sx() * .9)
        }),
        $.bt('taller', function () {
            bm.sy(bm.sy() * 1.1)
        }),
        $.bt('shorter', function () {
            bm.sy(bm.sy() * .9)
        }), $.br(),
        $.bt('CW', function () {
            bm.rt(bm.rt() + 10)
        }),
        $.bt('CCW', function () {
            bm.rt(bm.rt() - 10)
        }),
        $.br(),

        $.bt('get index', function () {

            pop('index: ' + st.ix(bm))

        }),


        $.bt('set index to 3', function () {

            st.ix(bm, 3)
            pop('index: ' + st.ix(bm))

        }),


        $.bt('z-up', function () {

            st.ix(bm, st.ix(bm) + 1)

        }),

        $.bt('z-down', function () {
            st.ix(bm, st.ix(bm) - 1)
        }),

        $.bt('remove', function () {

            st.rm(bm)

        }),
        $.bt('clone', function () {
            st.A($Ct().A(bm.ob.clone()))
        }), $.br(),
        $.bt('save', function () {
            st.sv(function () {
                loadImagesDiv()
            })
        }),
        $.bt('paint', function () {
            stagePainter(st)
        }),
        $.bt('', function () {
        })
    )


}
TRANSFORM = function () {
    $.fm()

    s=$St()

    s.mug(function (b) {
        st = s
        b.XY(0, 0)
        b.rgc('+')
        TR(b)

        s.mug(function (b) {
            b.XY(50, 50).rgc('+');
            TR(b)
        })
        /*
         wMb(function (b) {
         b.XY(100, 100).rgc('+');
         TR(b)
         }, s)
         wMb(function (b) {
         b.XY(200, 200).rgc('+');
         TR(b)
         }, s)
         wMb(function (b) {
         b.XY(300, 300).rgc('+');
         TR(b)
         }, s)
         wMb(function (b) {
         b.XY(400, 400).rgc('+');
         TR(b)
         }, s)
         wMb(function (b) {
         b.XY(150, 150).rgc('+');
         TR(b)
         }, s)
         wMb(function (b) {
         b.XY(250, 250).rgc('+');
         TR(b)
         }, s)
         wMb(function (b) {
         b.XY(350, 350).rgc('+');
         TR(b)
         }, s)
         */

    }, '-')


    s1.A($.bt('rotate', function () {
            s.ch('-')
            s.mug( function (b) {s.M(50); //b=Do(bj(b))
                RT(b.XY(400))
                s.mug(function (b) {
                        b.XY(300).al(.5)
                        RT(b, '-')
                    }
                )
                s.mug(function (b) {
                    KK(b.XY(200).sXY(1.4), '+')
                })
                s.mug(function (b) {
                        KK(b.XY(100).sXY(.6))
                    }
                )
            })
        }), $.br(2),



        $.bt('skew', function () {

            s.ch('-')

            s.mug(function (b) {
                s.mug(function (b) {
                    SK(b.XY(300).rgc('+').sXY(1.5))
                    s.W(2000).H(2000)
                })
                //b.XY(500,400).rgc('+').sXY(1.5);RT(b);SK(b)
            })
        }), $.br(2),
        $.bt('register', function () {

            s.rm()

            s.mug(function (b) {
                TR(b);
                rg1(b);
                reggy(b)
            })

            s.mug(function (b) {
                TR(b);
                b.rgc();
                rg1(b);
                reggy(b)
            })
        }),
        $.br(2))
}
SHOWCASE = function () {
    $.fm()
    s2.A(
        $.sp('pics!').id('pics')
    )
    s2.A(x = $.c('y', 500, 500))
    //x.q.cen()
    $.eG('img', function (v) {
        $.c().fit(v.d, 1)

        x.X()
        url$ = v.d
        x.fit(v.d)

        $('#pics').A(x)

    })
    s2.A(
        $.br(2), $.lb('caption'),
        cap$ = $.ip().W(500)
    )
    s1($.br(2), $.lb('category'),
        cat$ = $.ip().W(200), $.br(2),
        $.bt('post', function () {
            o = {t: cat$.V(), c: cap$.V(), du: url$}
            $.P('pst', o, function () {
                $.pop('posted')
            })
        }), $.br(2),

        $.bt('make a showcase', function () {
        }), $.br(2),
        $.bt('submit to ranky', function () {
        }), $.br(2)
    )

}
CHAN = function () {
    $CHAN={}
    $.btEm = function (t, toEmit) {
        return $.bt(t, function () {
            k.em(toEmit || t)
        })
    } //a button that emits!
    $.dA().A(
        $.btEm('msg', 'chat'),
        $.bt('room', function () {
            Y.chan('chat', function () {
                $l('chat')
            }).on('al', pop)
        })
    )//.lt(300)
    k.on('newChat', function (d) {
        CH.bc(d.n + ': ' + d.m)
    })
    k.on('youChat', function (d) {
        CH.s(d.n + ': ' + d.m)
    })

}
POSTS = function () {
    $.fm()

    s1.A(
        dd = $.inputBox({
            boxTitle: 'new post',
            url: '/pst',
            btT: 'post',
            func: function () {
                Y.run('home')
            },
            inputType: 'textAndTextArea'
        }),


        $.h2('attach:'),


        $.bt('pic', function () {

            m = $.pop(ps = $.d().A($.h3('pic select')))
            $.getJSON('/img', function (pics) {

                _.e(pics, function (p) {
                    ps.A($.i(p.d).WH(40, 40).$(function () {
                        attached.E($.i(p.d).WH(20, 20))
                        m.modal('hide')
                    }))
                })
            })
        }),

        attached = $.d().A()
    )


    tab2 = [

        'buds',

        function () {
            TABS.E($.h1('bud posts'))
        }

    ]


    tab1 = ['all',

        function () {

            TABS.E($.h1('public posts'))

            $.eG('/psts',

                function (i) {

                    $.blp(i, TABS, '-')

                })

        }
    ]


    tab3 = $.tab('user', function () {
        u = $w['from'] || 'a'


        s1.E(
            $.sp('topics: '))

        TABS.E(
            $.h1('user ' + u + ' blog'))


        $.eG('/pstu', {u: u}, function (i) {
            $.blp(i, TABS, '+')
        })
    })


    tab4 = $.tab('topic', function () {
        TOPIC = $w['topic'] || 'fantasy'
        TABS.E(h1('posts on ' + TOPIC + ' topic'))
        $.eG('/pstt', {t: TOPIC}, function (i) {
            blp(i, TABS, '/')
        })
    })

    tab5 = ['yours',

        function () {

            TABS.E($.h1('your posts'))

            $.eG('/pst', function (i) {
                $.blp(i, TABS, '+')
            })

        }]


    s2.A(
        t = $.tabs(tab1, tab2, tab3, tab4, tab5))

    t.load()

}
PROFILE = function () {
    $.boot = function () {
        z();

        var r = $.R()
        _.e(arguments, function (g) {
            r.A(g)
        })
        return ct = $.Ct().A(r)
    }

    $.boot(
        $.h1('you got a profile?'),
        $.d().id('content'),
        f = $.f().C('r').WH(400).A(
            $.d().A(
                $.lb('about me'),
                $.ta().id('aboutMe')),
            $.d().A(
                $.lb('i enjoy'),
                $.ip().id('iEnjoy')),
            $.d().A(
                $.lb('i seek'),
                $.ip().id('iSeek')),
            $.sm('save profile'),
            $.bt('undo', function () {
                if (p) {
                    $('#aboutMe').val(p.aboutMe)
                    $('#iEnjoy').val(p.iEnjoy)
                    $('#iSeek').val(p.iSeek)
                }
            }),
            $.bt('clearr', function () {
                $('input').val('')
                $('#iEnjoy').val('')
                $('#iSeek').val('')
            })
        ))

    $.P('getMyProfile', function (pf) {


        if (pf) {
            $l('found profile -> _pf')
            _pf = pf
            $('#aboutMe').v(pf.aboutMe)
            $('#iEnjoy').v(pf.iEnjoy)
            $('#iSeek').v(pf.iSeek)
        }

        else {
            $l('no profile found')
        }

    })


    $('form').submit(function (e) {
        e.preventDefault()

        var data = {
            aboutMe: $('#aboutMe').v(),
            iEnjoy: $('#iEnjoy').v(),
            iSeek: $('#iSeek').v()
        }

        $.P('myprofile', data, function () {

            $l('P(mypf)')
            $.P('getMyProfile', function (pf) {
                _pf = pf
                $l('getMyProfile -> _pf')
            })
            $l('form data submited..')
        })

    })


}
USER = function (a) {
    $.fm()
    //problem: click on a user.. creates a NEW USER?

    if (U(username = _pam || a)) {
        $l('username undefined.  default to -> a');
        username = 'a'
    }


    $.G('user/' + username, function (u) {
        s1.A(
            $.h1(u.username),
            $.i(u.mug).WH(100),
            $.h4(u.status),
            statusSpan = $.sp(),
            i = $.i(),
            messageTextarea = $.ta().C('w', 'z')
            // $chatButton( _pam,  messageTextarea)
        )
    })

    tab1 = $.tab('profile', function () {
        TABS.E();
        $.pf(_pam, TABS)
    })

    tab2 = $.tab('pics', function () {
        TABS.E().A('hahaha')
        $.eG('images/' + _pam, function (i) {
            TABS.A($.i(i.d).WH(100))
        })
    })


    tab3 = $.tab('blog', function () {
        TABS.E()
        $.eG('/pstu', {u: username}, function (i) {
            $.blp(i, TABS, '+')
        })
    })


    /*
     tab4= $.tab('buds',function(){ TABS.E() })
     tab5= $.tab('groups',function(){ TABS.E() })


     tab6= $.tab('email', function(){
     //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
     from = _pam
     var messageTextarea = $.textarea()
     _$username = window['from'] || 'b'

     TABS.E()(
     $.h1('convo with '+u),
     $.h1('Messages'), $.br())
     $.eG('gMsgW', { u: _$username }, function( m ){var c
     c = $.c('X', 100)
     $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
     TABS.A(
     $.R().A(
     $.Cl(2,c),
     $.Cl(10,
     $.h6('from: ' + m.fr),
     $.h4($.dt( m.dt ).dt()).K('pull-right'),
     $.h5(m.m))
     ),
     $.hr()
     )})
     TABS.A(
     messageTextarea,
     $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
     })
     */
    tabs = $.tabs(tab1, tab2, tab3//,tab4,tab5,tab6

    )


    s2.A(tabs)

    tabs.load()

}
STATUS = function () {
    $.fm()

    s1.A(
        $.h1('status'),
        $.ip().id('statusInput'),
        $.bt('update', function () {
            $.P('status',
                {text: $('#statusInput').v()}, function () {
                    $l('status updated')
                })
        }))
}
MESSAGES = function () {
    $.fm()  //is TABS never set? -- its the content holder for the panes!!
    tab1 = ['received', function () {
        TABS.E($.h1('Messages'), $.br())
        $.eG('gMsg', function (m) {
            TABS.A(
                $.R().A(
                    //c1 = function(m){return cx().bc('-').Z(1).mug(m)}
                    $.Cl(2, $.c('X', 100, 100).mug(m.fr)),
                    $.Cl(10, $.bt(m.fr, function () {
                            from = m.fr;
                            tab3.load()
                        }),
                        $.h4(dtt(m.dt)).K('pull-right'),
                        $.h5(m.m))
                ),
                $.hr()
            )
        })
    }, '*']
    tab2 = ['sent', function () {
        TABS.E(
            $.h1('Messages'),
            $.br())

        $.eG('/MsgS', function (m) {
            mm = m;
            var ms = $('<textarea>'),
                c = $.c('X', 100, 100)
            $.P('mug', {u: m.to}, function (mug) {
                c.fit(mug)
            })
            TABS.A($.R().A($.Cl(2, c),
                $.Cl(10,
                    $.bt('to: ' + m.to, function () {
                        from = m.to;
                        tab3.load()
                    }),
                    $.h4(dt(m.dt).dt()).K('pull-right'),
                    $.h5(m.m)
                )), $.hr())
        })
    }]
    tab3 = $.tab('convo', function () {
        var ms = $.ip()
        u = window['from'] || 'b'
        TABS.E($.h1('convo with ' + u), $.h1('Messages'), $.br())

        $.eG('gMsgW', {u: u}, function (m) {

            var c = $.c('X', 100, 100)
            $.P('mug', {u: m.fr}, function (m) {
                c.fit(m)
            })
            TABS.A($.R().A(
                    $.Cl(2, c),
                    $.Cl(10,
                        $.h6('from: ' + m.fr),
                        $.h4(dt(m.dt).dt()).K('pull-right'),
                        $.h5(m.m))),
                $.hr()
            )
        })
        TABS.A(ms, $.bt('new message', function () {
            $.P('sMsg', {m: ms.V(), to: from})
        }), $.br(2))
    })
    tab4 = ['requests', function () {
        TABS.E($.h1('Buddy requests'), $.br())
        //buddy requests
        $.eG('gRq', function (msg) {
            TABS.A($.d().A(
                $.h6('from ' + msg.fr + ' on ' + msg.dt),
                $.h5(msg.m),
                $.bt('accept', function () {
                    $.P('yRq', {u: msg.fr})
                }),
                $.bt('deny'),
                $.hr()
            ))
        })
    }]
    s2.A(t = $.tabs(tab1, tab2, tab3, tab4))
    t.load()
}
SORTY = function () {
    $.fm()
    /*
     s1.A(
     $.h1('your sorts'),
     $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
     $.h4('recent: ')
     )
     */
    $.eG('/srt', function (t) {
        d1.A($.bt(t.t, function () {
            sorty(t.t)
        }), $.br(2))
    })
    s2.A($.i('me'))
}
MANIFEST = function () {
    s = cjs.S()


    Q(['me', 'guy'], function (q) {


        s.A(me = q.bm('me'))

        s.A(guy = q.bm('guy'))


        guy.drag()

    })


}
MUGTX = function () {
    z()
    $.h1('testing myMug ...').A()
    $.get('/myMug', function (data) {
        z()
        $.h1('in callback..').A()
        $.img(data).A().C('black').drag()
    })
}
MUGBYUNTX = function (username) {
    z()
    username = username || 'ss'
    $.h1('testing mugByUsername ...').A()
    $.get('/mugByUsername/' + username, function (data) {
        z()


        $.h1('in callback..').A()

        $.img(data).A().C('black').drag()

    })
}
DFMGTX = function () {
    z()
    $.i(defaultMug).A()
}
CHANGEMUGTX = function () {
    //it automatically changes your userMug to the defaultMug
    $.post('/changeMug', {url: defaultMug},
        function () {
            z()
            TWEEN()
        })
}
FMTX = FORMATTX = function () {
    z()
    $.fm()
    s1.A($.imgResponsive('chicks'))
    s2.A($.i('me'), $.i('guy'))
}
PROMOTE = function () {
    z()

    cjs.utils()

    function ClassA(name) {
        this.name = name
    }

    ClassA.prototype.greet = function () {
        return "Hello " + this.name
    } //a = new ClassA('john')

    function ClassB(name, punctuation) {

        this.ClassA_constructor(name)

        this.punctuation = punctuation
    }

    cjs.extend(ClassB, ClassA)


    ClassB.prototype.greet = function () {

        return this.ClassA_greet() + this.punctuation

    }

    cjs.promote(ClassB, "ClassA")

    b = new ClassB("World", "!?!")

    $l(b.greet())  // Hello World!?!


}
TWOSTAGES = function () {
    z()


    $.hdr().K("EaselJS").A(
        $.h1('nextStage'),
        $.p("This is an example")).A()


    c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
        .right(0).bor('1px solid grey').A() // background: 'none',

    c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
    $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()

    bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
    //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
    bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)


    topStage = stageSetup("canvasTwo", handleEvt)
        .N("topStage").eMO()
        .A(makeSquare(375, 30, "pink", handleEvt))
        .next(bottomStage)

    topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)


    function stageSetup(canvasName, handler) {
        s = stage = new cjs.Stage(canvasName).tick()
        //stage.addEventListener("stagemousemove", handler);	// too noisy
        _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
            s.on(ev, handler)
        })
        s.log = []
        return s
    }

    function makeSquare(x, y, color, handler) {
        var shape = cjs.shape().N('square').XY(x, y)
        shape.graphics.f(color).dr(0, 0, 135, 135)

        var cont = cjs.ct().N('container').A(shape)
        _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
            cont.on(ev, handler)
        })
        cont.cursor = "pointer"
        return cont
    }

    function handleEvt(evt) {
        var target = evt.target,
            stage = target.getStage(),
            log = stage.log

        log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
        + " y:" + evt.stageY.toFixed(0))

        while (log.length > 12) {
            log.shift()
        }

        stage.text.text = log.join("\n")
        if (evt.type == "mouseover") {
            target.alpha = 0.5
        }
        if (evt.type == "mouseout") {
            target.alpha = 1
        }
    }


}
TRANSF = function () {
    stage = St()

    degToRad = Math.PI / 180;


    //cjs.sharedCode()
    // cjs.utils()

    cjs.slider()


    stage.enableMouseOver();
    //cjs.Touch.enable(stage);
    stage.mouseMoveOutside = true;

    var img = new Image()
    img.onload = handleImageLoad;
    img.src = "/chicks.png";


    function handleImageLoad(evt) {

        var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;

        sliceWidth = imgWidth / sliceCount;
        sliceContainer = $Ct()
        sliceContainer.x = st.canvas.width / 2;

        for (var i = 0; i < sliceCount; i++) {
            var slice = $Bm(img)
            slice.sourceRect = new cjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
            slice.cache(0, 0, sliceWidth, imgHeight);
            slice.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix())];
            sliceContainer.A(slice);
        }

        slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
        slider.on("change", handleSliderChange, this);

        st.A(sliceContainer, slider);
        updateEffect(slider.value);
    }

    function handleSliderChange(evt) {
        updateEffect(evt.target.value);
    }

    function updateEffect(value) {
        var l = sliceContainer.getNumChildren();

        for (var i = 0; i < l; i++) {
            var slice = sliceContainer.getChildAt(i);
            slice.y = M.sin(value * degToRad) * -sliceWidth / 2;
            if (i % 2) {
                slice.skewY = value
            }
            else {
                slice.skewY = -value;
                slice.y -= sliceWidth * M.sin(slice.skewY * degToRad);
            }
            slice.x = sliceWidth * (i - l / 2) * M.cos(slice.skewY * degToRad);
            slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
            slice.ca()
        }

        st.u();
    }
}
DISTRACT = function () {
    z()



    $.d().A($.c(960, 400).id("testCanvas"))

    cjs.sharedCode()
    cjs.utils()
    cjs.slider()
    examples.showDistractor()
    st = new cjs.Stage("testCanvas")

}
//awesome:
WINDING = function () {
    cjs.Shape.prototype.same = function () {

        return $h(this)
    } //h.copy
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
    z()
    cjs.worldsMostInterestingShape = function () {
        var h = cjs.shape()
        h.graphics.f("pink").dr(20, 20, 450, 360)
            .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
            .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()

        return h
    }
    cjs.manifest(function (q) {
        $.hdr().A($.h1('grahics winding')).A()
        $.d().A($.c(960, 400)
            .id("testCanvas"))
        st = s = stage = $St(["testCanvas"])
        h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
        cjs.bm = function (img) {
            var g = G(arguments), img = g[0],
                bm = new cjs.Bitmap(img)
            if (g.N) {
                bm.rC()
            }
            return bm
        } //warning: can't yet change to $Bm!!
        bm = cjs.bm(q("chicks"), '-')
            .a2(s).X(470).drag()
        bm.mask = h.same().X(470)
    })

} //Uncaught TypeError: Cannot read property 'image' of undefined
POPSPIN = function () {
    z()
    angle = 0
    img = $.img('me', handleImageLoad)[0]
    function stop() {
        cjs.Ticker.removeEventListener("tick", tick)
    }

    function handleImageLoad() {
        canvas = $.c('p', 960, 400).id("testCanvas").A()
        stage = $St(canvas)
        stage.autoClear = true;

        bmp = new cjs.Bitmap(img)
            .rXY(img.width >> 1, img.height >> 1)
            .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
        stage.A(bmp).update();
        cjs.Ticker.timingMode = cjs.Ticker.RAF
        cjs.tick(tick)
    }

    function tick(event) {
        angle += 0.01
        var value = Math.sin(angle) * 360
        bmp.rt(value).sXY(value / 360)
        stage.update(event)
    }
}
