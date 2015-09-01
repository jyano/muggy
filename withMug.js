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
                J.TR(mug, ct)
                J.RT(b, ct)
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
    qu= new cjs.LoadQueue().complete(onMug).manifest([{id:"mug", src:"/myMug" }  ])
    cont= cjs.container()
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
        cont.A( cont.mug = cjs.bm(mug))
    }
    return cont
}