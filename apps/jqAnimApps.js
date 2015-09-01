
HOVERBOX = function () {
    z();
    d = $.d('o', 500, 500, '+').id('test')
    y = $.c('p', 400).K('box').hd();
    d.A(y);
    $('#test').hover(function () {
        $('.box').stop().fadeTo(200, 1)
    }, function () {
        $('.box').stop().fadeTo(200, 0)
    })
}
COOLSEL = function () {
    $.x()
    // rather than worry about synchronization between each panel
    //we will take last li in ul.k(panels) and position it to top right
    //of ul - this way,  when he sum width of all the panels occasionally
    //adds to greater than 100 percent of the ul as they animate..
    //the last li never breaks to the next line
    var s = 200;
    d = $.dK('container').A(
        $.dK('panels').A($.sp('1'),
            $.sp('2'), $.sp('3'), $.sp('4'),
            $.sp('5')),
        $.dK('panels').A($.sp('A'),
            $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
    );
    $('span').css({width: '100px', fontSize: '40px'});
    if ($('div.panels').length) {
        $('div.panels span:last-child').K('last');
        $('div.panels span').hover(
            function () {
                $(this).stop().animate({width: '110px', fontSize: '50px'}, s)
                    .siblings('span').stop().animate({width: '90px', fontSize: '30px'})
            },
            function () {
                $(this).stop().animate({width: '90px', fontSize: '30px'})
            })
    }
}
FLASH = function () {
    z();
    timeline = $.dA('+').WH('auto');
    timeline.A($.c('b', 500, 500), $.br());
    _.t(24, function (x) {
        timeline.A(
            $.d('r', 100, 100).css({display: 'inline-block'}).H((x * 10) + 100)
        )
    })
}
COOLSEL = function () {
    $.x()
    // rather than worry about synchronization between each panel
    //we will take last li in ul.k(panels) and position it to top right
    //of ul - this way,  when he sum width of all the panels occasionally
    //adds to greater than 100 percent of the ul as they animate..
    //the last li never breaks to the next line
    $.coolSelector = function () {


        var s = 200
        d = $.dK('container').A(
            $.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
            $.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
        ).A()
        $('span').css({width: '100px', fontSize: '40px'})
        if ($('div.panels').length) {
            $('div.panels span:last-child').K('last')
            $('div.panels span').hv(
                function () {
                    $(this).st().an({width: '110px', fontSize: '50px'}, s)
                        .sib('span').st().an({width: '90px', fontSize: '30px'})
                },
                function () {
                    $(this).st().an({width: '90px', fontSize: '30px'})
                })
        }

    }

    $.coolSelector()

}
BORDERS = function () {
    z();


    change = function () {
        var img

        $.fn.J= $.fn.animate

        img = $.i('me').WH(100).A()


        img.C('g').bS('dashed') //.bW(20)
            .J({"border-top-width": 10}, 1000)
            .J({"border-bottom-width": 10}, 1000)
            .J({"border-left-width": 10}, 1000)
            .J({"border-right-width": 10}, 1000)
            .J({"padding-top": 10}, 1000)
            .J({"padding-bottom": 10}, 1000)
            .J({"padding-left": 10}, 1000)
            .J({"padding-right": 10}, 1000)
            .J({"margin-top": 10}, 1000)
            .J({"margin-bottom": 10}, 1000)
            .J({"margin-left": 10}, 1000)
            .J({"margin-right": 10}, 1000)
            .J({"margin-top": 0}, 1000)
            .J({"margin-bottom": 0}, 1000)
            .J({"margin-left": 0}, 1000)
            .J({"margin-right": 0}, 1000)
            .J({"padding-top": 0}, 1000)
            .J({"padding-bottom": 0}, 1000)
            .J({"padding-left": 0}, 1000)
            .J({"padding-right": 0}, 1000)
            .J({"border-top-width": 0}, 1000)
            .J({"border-bottom-width": 0}, 1000)
            .J({"border-left-width": 0}, 1000)
            .J({"border-right-width": 0}, 1000)
    }
    $.$$(function () {
        z();
        _.t(10, change)
    })
    _.t(10, change)
}
ANL = function () {
    $.fn.anL = function () {
        var q = this
        this.sh("slow")
        this.an({"marginLeft": "300px"}, 2000)
            .an({"marginLeft": "0px"}, 2000)
        this.hd("slow", function () {
            q.anL()
        })
    }

    $.d('b', 100, 300).anL()
}
HVBX = function () {
    $.x()

    $.hvBx = $.hoverBox = function () {
        z()
        d = $.d('o', 500, 500, '+').id('test')
        y = $.c('p', 400).K('box').hd()
        d.A(y)
        $('#test').hv(function () {
                $('.box').st().f2(200, 1)
            },
            function () {
                $('.box').stop().f2(200, 0)
            })
    }

    $.hvBx()
}
NOTANIM = function () {
    $.x()
    var s = 1000, m = function (n) {
            return {marginLeft: n}
        },
        n = 0;
    d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
    d2 = $.d().id('debug');
    $('#test').$(function () {
        $.notAn($('.box')).an({marginLeft: -10}, s,
            function () {
                $('#debug').A($.p('start..' + n++))
            })
            .an({marginLeft: 10}, s)
            .an({marginLeft: -10}, s)
            .an({marginLeft: 10}, s)
            .an({marginLeft: -10}, s)
            .an({marginLeft: -10}, s)
            .an({marginLeft: 0}, s,
            function () {
                $('#debug').A($.p('fin'))
            })
    })
    NOTAN = function () {
        $.x()
        var s = 1000,
            m = function (n) {
                return {marginLeft: n}
            },
            n = 0
        d = $.dI('test').A(y = $.c('x', 40).K('box'))
        d2 = $.dI('debug')
        $('#test').$(function () {
            notAnim($('.box')).an({marginLeft: -10}, s,
                function () {
                    $('#debug').A($.p('start..' + n++))
                })
                .an({marginLeft: 10}, s).an({marginLeft: -10}, s)
                .an({marginLeft: 10}, s).an({marginLeft: -10}, s)
                .an({marginLeft: -10}, s).an({marginLeft: 0}, s,
                function () {
                    $('#debug').A($.p('fin'))
                })
        })
    }
}
FRIDGEMAG = function () {
    z();
    word = function (text, c1, c2) {
        var s = $.sp(text).C(c1, c2).A().drag()

        return s
    }

    w = word('hello', 'b', 'g');
    word('sicko', 'g', 'b');
    word('why, i oughta..', 'p', 'x');
    word('it was raining..', 'j', 'k');
    word('who ya gonna call?', 'h', 'i');
    word('dag nabit!', 'f', 'g');
    word('i like', 'd', 'e');
    word('tomorrow', 'a', 'c');
    word('me', 'r', 'b')
}
TXCAN = function () {
    z();
    c = $.c('o', 500, 500);
    //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
    // c.roundRect(100,50,100,100,50).stroke()//.fill()
    //c.line(10,10,50,500).stroke()
    c.line([
        [[100, 100], [200, 200], [140, 900]]
        // ,  [[150,150],[250,250], [20,300]]
    ]).stroke();
    //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
    //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
}
