

CIRS = function () {
    W(10).Y()
    w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})

    w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})


    w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
        .cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
        .cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})


    w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
        l: 20,
        C: 0,
        ls: 1
    }).dc([50], [200, 0, 100], [100, 100, 100])

}
RADIALGRADCIRC=function(){s=$St()





    x1=0
    y1=0
    r1=10
    x2=0
    y2=0
    r2=100


    h=cjs.shape(10, 10).a2(s).drag()


    change= function(){

        //  h.remove()

        // h=cjs.shape(10, 10).a2(s).drag()

        h.rf( 'b', "o",  x1,
            y1,
            r1,
            x2,
            y2,
            r2     )


            .dc(0, 0,100)
            .ef()
        // x--

        // r1++
        // r2++
    }

    setInterval(change, 1000)

    change()
    n = nip()
    //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}