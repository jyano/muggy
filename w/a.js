dirs= [
    '/public/deps', '/public/deps/css',     '/public/deps/js',
    '/public/pics', '/public/graphics', '/public/uploads',
    '/public/deps/ui-images', // assets: where i can publically, statically fetch items from // css, fonts, js (bs, cjs, jq, string, us)
    '/../', '/../deps', '/../front', '/../front/handy', '/../apps'
]


require('./both');
http = require('http')
path = require('path')
fs = require('fs')
mongoose  =   require('mongoose')
express = require('express')
connectMongo = require('connect-mongo')
socketIO = require('socket.io')
sessionSocketIO   = require('session.socket.io')
require('./defaultMug')


mongoose.connect("mongodb://localhost/brain", function(){$l('mongo connected')})
$Md= md= $m =  models =  require('./models');

mongoStore = new(connectMongo(express))({db:'brain'})



e = E = $a = express()
$a.set('port', process.env.PORT||4000)
$a.set('view engine' ,'jade');
$a.set( 'views' , __dirname + '/../' )  //$l('env: ' + $a.get('env') )//$a.use( express.logger('dev') ) //if(a.get('env')=="development"){a.use(express.errorHandler())}
$a.use(express.bodyParser({
    uploadDir:__dirname+"/public/uploads",
    keepExtensions:true
}))
$a.use(cookieParser = express.cookieParser('xyz'))
$a.use(express.session({
    store: mongoStore,
    secret: 'xyz'
})); //$a.use( express.favicon() )


$Mw =  function(q,p,n){mW()

    //if user is logged in,
    //he will have a username set in their session

    //checks session to see if user is logged in
    var lI = q.ss.username? true: false

    //set lI status on req
    q.lI= q.loggedIn = lI

    //set it also on res.local
    p.lc.lI= p.lc.loggedIn = lI

    //set username itself also on req
    q.un= q.username = q.ss.username

    // $l('MAIN middleware says q.username = ' + q.username)

    n()

    function mW() {
        q.ss = q.session
        p.lc = p.locals
    }
}
$Mw.user =   function(q,p,n){

    if( q.loggedIn){
        $Md.user.findOne({
                username: q.username},
            function(z,u){
                if(z){n(z)}
                else if(u){
                    q.user = p.locals.user = u
                    q.username = p.locals.username = u.username
                    q.userId = p.locals.userId = u._id}
                n()
            })
    }

    else {
        // $l('middleware says NOT logged in :(')
        p.json('guest')
    }


} //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}
$Mw.Pics =    $Mw.P = function(q, p, n){


    $m.pic.find(


        {u: q.I },


        function(z, pics){

            var array =[]

            _.each(

                pics,

                function(pic){
                    array.push(
                        _S(pic._id)  +  pic.e
                    )  // $l(    )


                })

            p.locals.I = array
            n()
        })
}
$Mw.pic =     $Mw.p =  function(q,p,n){

    $Md.pic.findById(q.params.p,

        function(z,i){
            if(z){n(z)}
            p.locals.i =  '/'+i._id
            q.i=i
            n()
        })


}
$Mw.Books =   $Mw.B =function(q, p, n){

    Book.find({

            user: q.I
        },

        function(z,books){
            if(z){n(z)};
            if(!books){'no book!'}
            p.locals.books = books
            n()
        })

}
$Mw.book =  $Mw.book =function(q, p,n){



    $Md.book.findOne({

            u: q.I,

            title: q.p.t
        },


        function(z,book){ if(z){n(z)}

            p.locals.book = book

            if(q.params.n){

                var c = p.locals.n = book.c[n]
            }

            if(p.params.h){
                p.locals.h = c[n][h]
            }

            n()

        })
}
mw= $w = middleware =  $Mw
$a.use($Mw)


//routing
$a.get('/render/:page', function(q, p){
    p.render(q.params.page)

})
require( '../routes' )()
$a.use( $a.router )
_.e(dirs, function(dir){
    $a.use(
        express.static(
            path.join(__dirname, dir)
        )
    )
})


//httpserver
sv= httpServer = http.createServer($a)
httpServer.listen(80, function(){ $l('server listening on port 80') })

//sockets
io = socketIO.listen(httpServer)
io.set('log level', 1)
ssK= new sessionSocketIO(io, mongoStore, cookieParser)
KK = sockets =  io.sockets
US = []  //  array-hash: socketId, username
$idToName=function(name){var id
    id = _.invert(US)[name]
    return id
}
$nameToId=function(id){
    return US[id]
}
$in=  KK.rm = function (rm) {
    var rm = KK.in(rm)
    rm.em = rm.emit
    return rm
}
RMS = KK.manager.rooms //an array of rooms //they all start with a slash
$rm= RMS.rm = function (rm) {return KK.manager.rooms['/' + rm]}
$getRoomUserIds=function(rm){
    //$l('$getRoomUserIds')
    var ids= KK.manager.rooms['/'+rm]
    //console.dir(ids)
    return ids
}
$getRoomUsernames=function(rm){
    var ids,uns
    //$l('$getRoomUsernames')

    ids= $getRoomUserIds(rm)
    uns= _.m(ids, function(id){
        return US[id]
    })
    //console.dir(uns)
    return uns
}
KK.on('connection',  function(k){

    k.on('id', function(un){
        //k.em('l',  $l(k.id))  //server logs, client logs

        US[ k.id ] = un  //associate socketId with username

        //$l('US: ' + US +  US[ k.id ] ) //log USER and username

        //all users should emit this initially
        // to list its username with its id

    })


    k.on('jRm', function(rm){$l('joining room: ' + rm  )
        k.join( rm )

        k.emit( 'rmUd',  {rm: rm, US:   _.m(
            $getRoomUserIds(rm),
            function(un){
                return US[un]})

        })})
    k.on('rmUd', function(rm ){
        // $l('on rmUd')

        k.emit( 'rmUd',{  //$l('$RmUd')

                rm: rm,
                users: $getRoomUsernames(rm)
            }

            // console.log('ud: '); console.dir(ud)

        )
    })
    k.on('ChatRmMs', function (ms){
        $l('chatRmMs: '); console.dir(ms)
        KK.in(ms.rm).emit('ChatRmMs', ms)
    })


    k.on('myUpdate', function(ud){
        k.broadcast.emit('updateGuy', ud)
    })

    k.on('sendInvite', function(invite){

        k.broadcast.emit('newInvite', invite)
    })

    k.on('acceptInvite', function(invite){
        k.emit('inviteAccepted', invite)
        k.broadcast.emit('inviteAccepted', invite)
    })



    k.on('bub', function(tx){$l('new bub: '+ tx)
        k.broadcast.emit('bub', tx)
    })


    function socketGame() {

        Gs = [{m: 'guy', u: 'ii', x: 140, y: 140}, {m: 'chicks', u: 'jj', x: 140, y: 240}]
        Gs2 = [{n: 'c', x: 300, y: 200}, {n: 'c', x: 300, y: 200}]

        lLi = function (g) {
            if (g) {
                $l('in');
                return true
            } else {
                $l('-in')
            }
        }
        Guy = function (s) {
            return {n: s.u, m: s.m, x: _.r(0, 830), y: _.r(0, 300)}
        }
        snSM = function () {
            m.guy.find({}, function (z, m) {
                k.b.e('mU', m)
                k.e('mU', m)
            })
        }
        move = function (a, b, d) {
            if (d == 'u') {
                a.y -= b
            }
            ;
            if (d == 'd') {
                a.y += b
            }
            ;
            if (d == 'l') {
                a.x -= b
            }
            ;
            if (d == 'r') {
                a.x += b
            }
            ;
            return a
        }

        /*





         o('eG2',function(){
         m.guy.findOne(
         {n:s.u},function(z,g){if(!(g)){l('nP!:'+s.u+'!');
         m.guy.create(Guy(s),function(z,g){if(z){n(z)}
         k.b.e('nPlr',g)})}
         snSM()})})

         o('eG',function(){console.dir(s);
         if(!(_.where(Gs,{u:s.u})[0])){
         Gs.push({m:s.m, u:s.u,x:300,y:400});
         l('nP!:'+s.u+'!');
         k.e('mp',Gs, s.u);
         //k.e('you',s.u);
         }//k.b.e('nP',Gs);
         })

         o('act',function(a){$d(a)})

         o('mvG',function(d){
         //if(!lLi(gMp[n])){nGtSM(n)}
         m.guy.findOne({n:s.u},function(z,g){
         if(z){$d(z)}
         move(g,100,d)
         g.save(function(){snSM()})})})})}

         theMap=m.map.findOne({name:'gMp'},function(z,m){gMp=m.Gs;loadGame()}); // gMp=theMap.Gs;g.save(theMap)
         gMp.Gs.fred={x:3,y:3};gMp=m.map.findOne({n:'gMp'});gMp={m:{x:20,y:100},l:{x:20,y:130},c:{x:20,y:10}};

         */


        //io.KK.clients().forEach(function (k) {IO.getSession(k, function (z,ss) {   ss.j='hi';ss.save()})}) //so far we have access only to client KK
        //k.on('fc',function(d){move(fc,10,d);k.e('fc',fc);k.b.e('fc',fc)})
        //k.on('showMap',function(){k.e('map',[{name:'a',x:200,y:200}])})
        //k.on('warp',function(g){if(!(isGuyInMap(g))){gMp.push(g);k.e('map',gMp); k.b.e('map',gMp)} else{k.e('map',gMp)}})

        isGuyInMap = function (p) {
            _.e(gMp, function (g) {
                if (g.u == p.u) {
                    l('+map');
                    return g
                }
            });
            l('-m');
            return false
        }
        fc = {x: 100, y: 100}

        players = []

        function nGtSM(n) {
            gMp[n] = {x: _.r(0, 830), y: _.r(0, 300)}
        }
    }
    /*

     //client asks am I in this room
     in: function(d){var rm
     if(rm=RMS.rm(d)) {k.em('res', rm[ k.id ]? true: false ) }
     else  {$l('not room'); k.em('res', '-')}
     },



     r: function(data){//rooms?
     k.em('res',  data? room[data]  : RMS())
     },



     who: function(un){  //user


     $l(    US[ un ] )  },


     _l : function(){k.em('l', 'hahhahahahahahahahahha')},
     l: function(d){
     d=d||'ping';
     k.em('l', 'sent: '+$l(d))
     },
     p : function(d, rm){
     return D(rm)? KK.rm(rm).em('p', d) :
     k.bc.em('p', d)
     },
     em : function(a,b,c,d){ k.em(a,b,c,d)},
     bc : function(a,b,c,d){

     $l('TOLD TO BROADCAST: '+ a)

     k.bc.em(a,b,c,d)

     }





     ,


     fn:  function(fn,a,b,c){ global[fn](a,b,c)  },  //it calls itself
     upop: function(d,n){ k.bc.em('upop',d,n)},


     kk:  function(data){
     k.em('res',  KK.clients(''))
     },

     //chat: function(data){k.bc.e('newChat',   {    n: data.n,   m: data.m  });k.em('youChat', {  n: data.n,  m: data.m  });k.emit('chat', 'cool')},
     //red:function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog';KK.in(r).emit(e,d)},

     x:function(m){
     k.e.to('sex').emit('l',m||'sexy')
     KK.in('sex').emit('l',m||'sexy')
     },

     dpop:   function(data,n){  k.bc.e('dpop',data,n) },

     du : function(data){
     k.em('im', data)
     k.bc.e('im', data); $m.img.create({})
     },

     newImg :function(data){
     $l('-newImg')
     $m.img.create(data, function(z, i){  k.emit('newImgAck', i)   })
     },




     //social
     IM: function(message){
     //this is triggered within a chatroom
     // when someone clicks on a user and 'chats' them up
     //will need to update other parts to also activate this
     // (instant messages from other parts of the site)
     $l('sending private message..')
     KK.in(message.toWho)
     .emit('IM', message)
     }

     })

     io.of('/chat').on('connection', function(d){$l('new chatter')})
     */


})