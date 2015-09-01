
    QUU = function () {
        $.x('x', 'quu')


        //  Qu   allow series fns to be execd asynch on an el
        //  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
        //
        // which levgs qus to build up   series of steps
        // that will transtn  1+ CSS vals thru/out the dur
        //  can pass a cb fn to  .an()  to exec on done

        x = $('.x')


        x.an({height: 20}, "slow",
            function () {
                $("#title").html("in cb")
            })
        //   *Ques As Cbs
        // Instead of passing a cb as an argument,
        // we can add another function to the queue
        // that will act as our cb
        // This will execute
        // after all of the steps in the
        // anim  have completed.

        x.an(
            {height: 20},
            "slow").qu(function () {
                $("#title").h("in anim")
                $(this).dq()
            })
            //  tells jQ  to continto N-item in  que

            //    queued fn will exec   after the anim
            //  jQuery does not have any insight into
            // how the queue items function,
            // so we need to call .dequeue(),
            // which tells jQuery when to move to the n item in the queue.

            //  Another way of dequeuing
            // is by calling the fn that is passed to your cb
            // That fn will auto  call .dq() for you

            .qu(function (n) {
                $l("I fired!");
                n()
            })
        //  *Custom Queues
        // Up to this point all of our anim
        // and qu   ex  have been using the def qu  n  which is fx.
        // Elements can have multiple queues
        // attached to them,
        // and we can give each of these qusa dif  name.
        // We can specify a custom queue name as
        // the 1st arg  to the .qu() method.


        x.qu('an', function (n) {
            $l("Step 1");
            n()
        }).qu('an', function (n) {
            $l("Step 2");
            n()
        }).dq('an');
        //  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.

        //   Clearing The Que
        //  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.


        x.qu('an', function (n) {
            $l("nev log (qu clrd)");
            n()
        })
            .clrQ('an').dq('an')


        //   In this example, nothing will happen as we removed everything from the steps queue.

        //   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.


        //  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.


        x.qu(
            'an',

            function (n) {
                $l("nev fire (qu replaced)");
                n()
            })

            .qu(
            'an', [
                function (n) {
                    $l("fired!");
                    n()
                }
            ]).dq('an')


        //
        // You can also call .queue() without passing it functions, which will return the queue of that element as an array.

        x.qu('an', function (n) {
            $l("fired!");
            n()
        })

        $l(x.qu('an'))

        x.du('an') //?

    }



    JQANIMZ = function () {
        $.x('s', 'jqanim')


        /*
         setBackgroundImage = q.bi = function(url){//set background image
         var toUrl =function(url){
         return 'url("'+ src(url) +'")'}
         q.backgroundImage(toUrl(url))
         return q}

         bp=q.positionBackgroundImage=function(x,y){
         var g=G(arguments),x=g[0],y=g[1]
         x=N(x)?x:0
         y=N(y)?y:0
         q.css({backgroundPos:x+'px '+y+'px'})
         return q}
         fr=q.stFr=function(n,w){
         if(O(n)){q.bp(n.n,n.w)}
         else{q.bp(n*w)}
         return q}

         anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
         $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}

         a= $.dA().bgImg('chicks').anf()

         */
    }


    TXPLUG = function () {
        z();
        d = $.d('r', 100).A('abc');
        e = $.d(100).col('r').A('abc');
        f = $.d('r', 100).col('b').A('abc');
        g = $.d('b', 500, 500)
    }
    COLANIM = function () {
        $.x()
        $CSS({
            $el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
        })
        $.d(['color anims']).id('el')
        $.bt('anim cols').id('tog')
        $('#tog').$(function () {
            $("#el").an({c: 'g', C: "rgb(20,20,20)"})
        })


        /*
         Color Animation
         jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.

         The following properties are supported:

         backgroundColor
         borderBottomColor
         borderLeftColor
         borderRightColor
         borderTopColor
         color
         columnRuleColor
         outlineColor
         textDecorationColor
         textEmphasisColor
         Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.

         Class Animations
         While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.

         link
         */
    }
    ANF = function () {
        z()

        a = $.dA().bgI('chicks').anf()
        anim = function (o) {
            o = o || {};
            return {
                u: o.u || 'chicks',
                n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
            }
        }
        an = function (q, a) {
            if (q.han) {
                _.cI(q.han)
            }
            if (a.u) {
                q.bi(a.u)
            }
            if (a.n > 1) {
                q.han = _.sI(function () {
                    a.c++;
                    if (!a.l && a.c > a.n) {
                        _.cI(q.han);
                        q.han = false
                    }
                    else {
                        a.c %= a.n
                    }
                    q.sFr(a)
                }, a.r)
            }
        }
    }//call stack

    FALLING = function () {
        z();
        //this goes in css
        $header2 = $.sp('hello').A();
        $header2.lettering(); // wrap <span class="charx"/ > around each character within header
        $spans = $header2.fi('span');
        delay = 0;
        $header2.$(function () {
            $spans.e(function () {
                $(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
                delay += 0.1
            });
            $header2.K('dropped'); // Add "dropped" class to header to apply transition
            setTimeout(function () { // reset header code
                $spans.e(function () {
                    $(this).css({transitionDelay: '0ms'})
                });
                // set transition delay to 0 so when 'dropped' class is removed,
                // letter appears instantly
                $header2.removeClass('dropped'); // remove class at the "end" to reset header.
                delay = 0
            }, 1800); // 1800 is just rough estimate of time transition will finish, not the best way
        })

    }
    anim = function (o) {
        o = o || {}
        alert('anim')
        return {u: o.u || 'chicks', n: o.n ||
        1, w: o.w || 64, r: o.r || 60, c: o.c ||
        0, l: o.l || false}
    }
    an = function (q, a) {
        alert('an')
        if (q.han) {
            _.xI(q.han)
        }
        if (a.u) {
            q.bi(a.u)
        }
        if (a.n > 1) {
            q.han = _.sI(function () {
                a.c++
                if (!a.l && a.c > a.n) {
                    _.xI(q.han);
                    q.han = false
                }
                else {
                    a.c %= a.n
                }
                q.sFr(a)
            }, a.r)
        }
    }


