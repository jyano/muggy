
    $.dCt = $.ctD = function () {
        var g = G(arguments), //makes auto top-spacing (for navbar not to block)
            d = $.dK('container')
        if (!g.n) {
            d.A($.br(4))
        }
        _.e(g, function (v) {
            d.A(v)
        })
        return d
    }
    $.fm = $.format = function () {
        $l('in fm')
        section1 = s1 = $.sp()
        section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))

    };
    $.dragFrame = function (ob) {
        var oD = $.d('r', '+').pad(10)
        inD = $.d('y').md(function (e) {
            e.stopPropagation()
        })
        oD.A(inD)
        return inD.A(ob)
    }
    $.dragFrame = function (div) {

        var outerDiv = $.div('r').drag().pad(20).A()

        div = div || $.div('y', 50, 50).mar(20)

        div.on('mousedown', function (e) {
            e.stopPropagation()
        })

        outerDiv.A(div)

        return outerDiv
    }
    $.dragStage = function (x, y) {


        c = $.c('g', 400)

        s = $St(c[0])

        $.dragFrame(c).A()

        return s
    }
    $.iD= $.imgDiv=function(st){
        d = $.d('y','+')
        $.eGj('img',  function(i){d.A($.c(100, 100).fit(i.d)
            .$(function () {
                st.bm(i.d, function (bm) {
                    bm.sXY(.4).dg() } )
            }))})
    }
    $.msg= $.messageDiv = function(t){

        return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
            .fS(20).T(t||'msgText')

    }

    $.pop=function(message, o){

        if( S(o) ){ return $.pop(o, { title: message } )    }

        o = O(o)? o : {}
        message = message || 'pop pop'
        mB = $.modalBody().A( $.h2( message ) )
        m =  $.modalFade().A($.modalDialog().A($.modalContent().A( mB)))

        if(!o.hd){ m.modal() }

        if(o.tt){mB.pp($.h1(o.titC).col(o.titC||'z'),
            $.hr().C( o.headerC||'z'  ).css('height', 2))}

        if(o.bt ){ mB.A( $.bt( o.bt )  )}

        if(o.dg ){  m.dg() }

        if(o.al ){ m.al( o.al ) }

        //text color of the MESSAGE
        if(o.col){  m.col( o.col)}
        //color of background of modal itself
        if(o.C){
            //flash like crazy
            if( o.C == '*' ){_.ev(.1, function(){ mB.C( $r() ) }) }
            else { mB.C( o.C ) }
        }
        //this color takes over the whole screen!
        //this is the background color of the hiding body
        if(o.c) {  m.C( o.c)  }
        return m

    }
    $.floatIp=function(t, fn){var g=G(arguments),f
        f=$.f().K('text-center').C('o').fS(20).dg().minW(200 )
            .A(
            $.sm(t), $.ip())

        if( F(fn) ){ f.sm(fn) }
        return f

    }
    $.eD= $.editDiv=function(words){//$.dE
        canMove=true
        changeLocation=true
        inputMove=true
        mouse = 'up'

        ta =  $.ta().mar(4)
        sp=    $.sp().C('z')
        fn=    function () { sp.T( ta.v() ) }
        d=  $.dA('+').C('n', 'y').pad(8)
        d.zIndex(0)

        xBt=  $.bt('', function(){d.rm()}).WH(4).C('red')


        d.md(function(){inputMove = false; mouse='div' })
        d.mu(function(){mouse='up'})
        d.md(function(){
            $.editDiv.TOP++
            $(this).zIndex( $.editDiv.TOP  )
        })
        ta.md(function(e){
            $.editDiv.TOP++
            $(this).parent().zIndex(  $.editDiv.TOP  )
            location={top: d.Y(), left: d.X()}
            inputMove = true
            mouse='input'
            e.stopPropagation()})

        ta.mm(function(e){if(inputMove){e.stopPropagation(); d.XY(location.left, location.top)}})

        if(U(words)) {return d.A( xBt, $.br(), sp.hd(), ta,

            $.d('y',16, 12).tA('c').mar('0 auto').$(function(){
                $(this).pa().free()
            })

        ).$$(function(e){e.stopPropagation()
                sp.T(ip.v())
                xBt.gg();ip.gg(); sp.gg()
            })
        }

        else {
            ip.v(words)
            sp.T( ta.v() )


            return d.$$(function(e){e.stopPropagation()
                sp.T( ta.v() )
                xBt.gg();
                ip.gg(); sp.gg()
            }).A( xBt, $.br(), sp, ip.hd() )

        }
    }; $.editDiv.TOP=0
    $.dE2=  $.editDiv2=function(a){
        var d= $.editDiv(a), range= $.range()
        range.md(function(e){e.stopPropagation()})

        range.on('input', function(){
            d.fi( $('span')).fS( $(this).v()  )
            d.fi( $('textarea')).fS( $(this).v()  )
        })
        d.pp( range  )
        return d
    }; testEditDiv=function(){z()
        $.dE()
        $.editDiv()
        $.editDiv()
        $.editDiv()
        //$.editDiv2().A()

    }
    $.ipB= $.inputBox=function(ob){  ob = ob||{}

        var d,ip, fn      = ob.func, url   = ob.url || '/',
            tt   = ob.boxTitle,
            inputType  = ob.inputType||'text',
            defaults   = ob.defaults||{},
            t = ob.btT || 'submit', taI

        d = $.d().WH('auto').pad(10)

        if(tt){ d.A(   $.h1(tt)   )  }

        if(inputType == 'text'){

            d.A( ip = $.ip().K('form-control')).A(
                $.bt(t, function(){$.post(url, _.df( dataValue(ip), defaults), fn)
                })
            )
        }

        if(inputType == 'textArea') {d.A(taI= $.ta().K('form-control'),  $.bt(t, function () {$.post(url, _.df(dataValue(theTextAreaInput),defaults), fn)}))}
        if(inputType == 'textAndTextArea') {
            d.A(
                ip=  $.ip().K('form-control'),
                taI= $.ta().K('form-control'),
                $.bt(t, function () {$.post(url, _.df(dataValue(ip,taI), defaults), fn)}))}
        return d} //pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?

    Y = function self(page){

        self.render(page)
        return self
    }
    Y.render = function(page){
        $l('in render')
        if(Y[page]){
            $l('found page: '+ page)
            return Y[page]() || true
        }
    }
    Y.run = function(app){
        app = app.toUpperCase()
        if(app = Y[app] || window[app]){
            app();
            return true
        }
    }
    Y.to=  Y.load =  function(a){  window.location = '/wap/' + a }
    Y.GuestPage =  function(){

        z('r')

        ct = $.dC()
            .dg().C('g').al(.9).top(100).left(100)

        jb =  $.J('a graphics-based real-time social gaming creativity web app', $.br())

        jb.A(

            $.btL('log in', function(){
                f = $.f().C('green').pad(4)
                f.A(
                    $.fG().A($.lb('username: ','username'),
                        $.ip('username')),
                    $.fG().A($.lb('password: ', 'password'),
                        $.pw('password')),

                    $.sm('log in') )

                f.submit(function(e){
                    e.preventDefault()

                    fData=  f.serializeJSON()

                    $.post('/login',fData,   function( un ){
                        u=un
                        $l('check u!')
                        if(un==='guest'){$('.modal').modal('toggle'); $.pop('try again.. idiot') }
                        else {Y('HomePage'); $.pop( 'welcome '+ un + '!' )}
                    })
                })

                $.pop( f ).dg()
            }).C('z','w'), $.sp(' - '),
            $.btL('sign up',  function(){
                usernameInput= $.dK('form-group').fS(20).name('username').A($.lb('username: ','username'), $.ip().K('form-control').id('uname') )
                passwordInput= $.dK('form-group').A($.lb('password: ','password'), $.pw().id('password')).fS(20).n('password')
                submit= $.bt('sign up').ty('submit').fS(16)

                f= $.f().C('o').pad(4).A(usernameInput,  passwordInput, submit).submit(function(e){ e.preventDefault()
                    $.P('user', {username: username=usernameInput.find('input').val(), password: password = passwordInput.find('input').val()},
                        function(username){
                            if(username==='guest'){$('.modal').modal('toggle'); $.pop('try again.. idiot')}
                            else {Y('HomePage'); $.pop( 'welcome ' + username + '!' )}}) })
                $.pop( f ).dg()
            }).C('w','z'),$.sp(' - '),
            $.btL('guest', function(){}).C('a','y')
        )

        ct.A(

            $.dH().h1('jy presents..'),

            jb

        )


        function verify(){return {
            username:  username.find('input').val(),
            password:  password.find('input').val()} }

    }
    Y.HomePage =  function(){
        z()


        Y.nav()

        Y.run( wappyApp )


        //update username on screen
        $.Gj('loggedIn', function(uN){$('#uname').text( _username  = $l(uN))})
    }
    Y.logOut = function(){$.Gj('logOut', function(){ Y('GuestPage') })}
    Y.clr=  function(){z(); Y.nav()}
    Y.nav=   function(){

        navbarCollapse = $.nbC().A($.n(

                // $.dd('stuff', ['tangle', 'corners', 'grid' , 'fullcan' , 'solar',  'ship',  'connect','matrix', 'iso' ]),

                $.dd('make',['upload', 'uploads', 'cutouts', 'edit', 'avatar']),
                $.dd('draw',['paint', 'filters','sprite', 'pack', 'showcase']),
                $.dd('play',['bod',    'tween', 'space', 'hit','solar']),

                $.dd('talk',[  'chat', 'universe', 'post']),
                $.dd('social',['users', 'profiles', 'posts' ])


                //$.dd('mvc',['sorty', 'object', 'ranky',   'dirt','knocks',  'site'])
            ),



            $.nR(
                $.dd('account',[ 'status', 'profile', 'messages' ]),
                $.liA('logged: '+ _username),
                $.liA('logout', Y.logOut)
            )

        )


        $.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))

    }//=Y.n
    Y.uPop=function(i,  size){

        i= (O(i) && F(i.u)) ? i.u() : i

        size=size||300

        return $.c().WH(size, size).fit(i)
    }
    Y.dUD=function(d,n){
        $.P('getImageById', {data: d},  function(u){upop(u,n)})} //sk-send du of your (first) can-el
    Y.dU=function(){var u

        c =$.c().fit('me')

        u=c.toDataURL()

        k.emit('du',u);

        return u
    }



    Y.IMS={}
    Y.chan=  function(chan, fn){

        alert('Y.chan')
        chan= io.connect('http://localhost/'+ chan)

        if(fn){

            chan.on('connect',fn)
        }

        return chan
    }
    Y.popUser = Y.uPop=function (un) {
        if(un){
            $.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
                $.w($.d().A( $.br(), $.hr(),
                    $.h3('User: ' + un), $.br(),
                    $.c(300).fit(mug),
                    d= $.d(),
                    msg = $.ta().C('w', 'z'),
                    $.btMail(msg, un),
                    $.btCh(un, msg),
                    $.bt('fullPf', function () {Y.loc( '/wap/profiles/' + un )})))
                $.sts(un, d)
                $.pf(un, d)
            })
        }
        else {$('.pop').$(function(){k.em( 'pop', {t: $('.pt').v, b: $('.pb').v})})}
    }

