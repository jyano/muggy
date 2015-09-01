//css
    EXT=function(){$.x('x','ext')
        $CSS({
            d: {
                ex:'icon',
                C:'y',c:'o', mx:{  size:[250] }
            }
        })
        $.d(['hello'])
        $CSS()
    }
    BORD=function(){

        $.x('x', 'bordered')

        $CSS({

            _bordered: {
                'border-top': 'dotted 1px black',
                'border-bottom': 'solid 2px black'
            },
            //And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:
            '#menu a': {
                ex: '_bordered',
                c:'r'
            },

            '.post a': {
                c:'r',
                ex: '_bordered'
            }

        })
       // $CSS()


    }
    SIZE=function(){
        $.x('x','size')

        $CSS({

            d: { C:'z',c:'w',
                mx:{

                    size:[1250]
                }
            }

        })

        $.d(['hello'])
        $CSS()
    }


//can

    TXTT=function(){$.C()
        x.b('b','g',30)
        x.T(100,'Jason Yanofski', 10, 150)
        x.lg({x1:0,y1:0,x2:x.W(),y1:0,cS:{m:0,b:.5,r:1}})
        x.T('Jason Yanofski',10, 290, '-')}
    TESTGRAD=function(){$.C(); x= c.ctx()


        x.lg(
            {cS:{r:0, r:.1, b:.15, r:.2, y:.5, b:1},
                x1: 50, x2:500, y2:100}).fr(0,0,300)

        x.lg({cS:{o:.2, r:.6, g:.8} , x1:50,x2: 500, y2:100}).fr(300,0,300)


        //black to white
        // x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()

    }
    LINRAD=function(){$.C()
        x= c.ctx()
        x.lg({x1:50,  y1:500, y2: 100, cS: {o:.2, r:.6, g:.8} })
        x.fr(0,0,100,100)
    }
    GLOBALCOMP=function(){Q(function(){$.C()

        x.d('me', 100, 100)

        x.d('me', 200, 100)
        x.d('me', 300, 100)

        x.d('me', 400, 100)
        x.d('me', 500, 100)

        x.d('me', 150,150) //  x.sO(); x.dO()

        x.xo()

        c.$(function(){var g=G(arguments), o
            o = {x: g.f, y: g.s}
            x.d('guy', o.x, o.y)
        })



    })}
