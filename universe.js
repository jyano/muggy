$mug=  function(un, fn){$.g('/mugByUsername/'+un,  function(mug){if(mug){fn(mug)}})}

UNIVERSE=function(){z(); $GUYS=  []


    k.on('bub', function(bub){var guy;
        if( guy = $getGuy(bub.u) ){$Bub(bub.t, bub.x, bub.y)}})
    k.on('updateGuy', function(userOb){
        var guy; if(!userOb){return}
            guy = $getGuy(userOb.un); if(guy){if(guy.un == _username){return}
                if(guy.bm){ guy.bm.XY( userOb.x, userOb.y )}}
    })


    k.on('inviteAccepted', function (invite) {

        if (_username == invite.toWho) {
            $addGuy(invite.from)}
    })


    k.on('someSentYouAnInvite', function (invite){if (_username == invite.toWho){
        $mug(invite.from, function (mug) {popIv = $.pop($.d().A(
            $.i(mug).WH(200, 200), $.h1('chat with ' + invite.from + '?'),

            $.bt('ya', function () {popIv.modal('hide')
                $addGuy(invite.from)

                k.emit('acceptInvite', {from: _username, toWho: invite.from})}),
            $.bt('na', function () {popIv.modal('hide')         })))     })}})

    uni = $St(1000, 800); uni.bgI('/beach.jpg')

    uni.mug(function(b){
        if(O(b)){yourBm=    b.dg().rC().XY(600).sXY(.4)}
        $GUYS.push({un :_username, bm : yourBm})
        b.$$( function(){ b.rm(); k.emit('X', _username)})

        page =  $.d('b', 1000, 'auto').A($.br(3))
        page.A(chatMessageInputTextBox = $.ip('...', 'tx').id('textinput'),
            chatSendButton = $.bt('send', function(){
            $Bub( $('#textinput').V(), '+')}))

        n=0;
        $.eG('users', function(user){

            if(user.mug ){

            var mugInviteBt=$.i(user.mug).WH(100)
                mugInviteBt.$(function(){


                        k.em('sendInvite', {from: _username, toWho: user.un })





                });
                page.A(mugInviteBt)
            }
        })

        _.ev(.1,
           function(){k.em('myUpdate', {un: _username, x: yourBm.x, y: yourBm.y})}
        )

    })


}


$addGuy=function(un){$mug(un, function(bm){bm = new cjs.Bitmap(bm)
    uni.A(bm); $GUYS.push(  {un: un, bm: bm.rC().XY(600).sXY(.4)}) // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
})}
$getGuy=function(un){ var targetGuy=false //  finds a guy({un, bm}) in $GUYS array from a un ( rets false if he aint there) //alpha: can accept ob received on guyUpdates ({un, x, y})//can pass the string or also an ob with 'un' property
    if( O(un) ){un = un.un }; _.e($GUYS, function(guy){if(un == guy.un){targetGuy = guy}})
    return targetGuy}
$Bub = function (t, x, y) {var g = G(arguments), ct = $Ct()
    text = g[0] || 'hi!'; x = g[1] || yourBm.x; y = g[2] || yourBm.y
    uni.A(ct); ct.cir('w', 120, x - 250, y - 250, 50).cir('b', 30, x - 120, y - 120, 30).cir('g', 20, x - 80, y - 80).text(t, "20px Arial", "blue", x - 300, y - 300)
    $Tw(ct, [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000])
    _.in(10, function () {ct.rm()})
    if (g.p) {k.emit('bub', {t: t, x: x, y: y, u: _username})}
    return ct}
