$.imageSizeFuncCan = function(image, size, func){//xc=
    var x = $.c(100, 100).C('X')
    if(image){ x.fit(image) }
    //if(size){  x.Z(size) }
    if(func){  x.click(func) }
    return x
}

//can.ln(tictactoe)
    tictactoe = [
        [[200, 0], [200, 600]],
        [[400, 0], [400, 600]],
        [[0, 200], [600, 200]],
        [[0, 400], [600, 400]]
    ]
    sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
    sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]


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
    $.joystick = function () {
        $('#left').on('mousedown mouseover touchenter', function (e) {
            cjs.Keys.left = true;
            e.preventDefault()
        })
        $('#left').on('mouseup mouseout touchleave', function () {
            cjs.Keys.left = false
        })
        $('#jump').on('mousedown mouseover touchenter', function () {
            cjs.Keys.up = true
        })
        $('#jump').on('mouseup mouseout touchleave', function () {
            cjs.Keys.up = false
        })
        $('#right').on('mousedown mouseover touchenter', function () {
            cjs.Keys.right = true
        })
        $('#right').on('mouseup mouseout touchleave', function () {
            cjs.Keys.right = false
        })
    }
    testHideOnKeyDown = function () {
        z()
        c = $.canvas('r', 500).A()
        c.hideOnKeyDown()
    }
}