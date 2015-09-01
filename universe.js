$addGuy=function(un){
    $mug(un, function(bm){


        //add a new guyOb to $GUYS array, and add guy's bitmap to universe

        bm = new cjs.Bitmap(bm)
        $GUYS.push( userOb= {
            un: un,
            bm: bm
        })

        uni.A(bm)

        bm.rC()
            .XY(600)
            .sXY(.4)
        // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })


    })
}
 $getGuy=function(un){
//get a guy from your OWN array ($GUYS)


//get guy object by username or user.username
// guy object has {user/username, x, y}
// -- so this finds a guy in Y.GUYS  array
// or returns false if he aint there
    var targetGuy
    //can pass the string or also an ob with 'un' property
    if( O(un) ){ un = un.un }
    _.e($GUYS, function(guy){
        if(un == guy.un){
            targetGuy = guy}
    })
    return targetGuy || false
}




$sendMyUpdate=  function(){

    $myLoc=  function(){
        if( window['yourBm']){if(_test){$l(yourBm.x + ', ' + yourBm.y)}
            return {
                un: _username, x: yourBm.x, y: yourBm.y
            }}
    }  

    k.em('myUpdate', $myLoc())
}


$updateGuyForMe=  function(userOb){var guy
    if(!userOb){return}
    guy = $getGuy(userOb.un)
    if(guy){
        if(guy.un == _username){return}
        if(guy.bm){ guy.bm.XY( userOb.x, userOb.y )}

    }


}
$Uni=  $UNI= startUniverse = function(un){
    var guy; $l('startUniverse with: '+  un)
    if( !window['uni'] ){$l('no uni  -- calling UNIVERSE()');
        UNIVERSE() }
    else {$l('uni found. no need to call UNIVERSE')}
    guy = $getGuy( un )
    if( guy ){
        $l('we already have guy: ' + guy )
    }
    else { $l('no guy'); $mug(un, function(mug){
        $Bm( mug,  function( bm ){
            $addGuyToMe(un, bm)})})}}
$mug=  function(un, fn){
    $.g('/mugByUsername/'+un,  function(mug){
        if(mug){
            fn(mug)
        }
    })
}

$GUYS=  []
$Bub = function (t, x, y) {
    var g = G(arguments), ct = $Ct()
    text = g[0] || 'hi!'
    x = g[1] || yourBm.x
    y = g[2] || yourBm.y
    uni.A(ct)
    ct.cir('w', 120, x - 250, y - 250, 50)
        .cir('b', 30, x - 120, y - 120, 30)
        .cir('g', 20, x - 80, y - 80)
        .text(t, "20px Arial", "blue", x - 300, y - 300)
    $Tw(ct, [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000])
    _.in(10, function () {ct.rm()})
    if (g.p) {k.emit('bub', {t: t, x: x, y: y, u: _username})}
    return ct
}

// *** fix gx.cir and h.cir !!!! ***
k.on('bub', function(bub){var guy


    if( guy = $getGuy(bub.u) ){

      $Bub(bub.t, bub.x, bub.y)
    }

})


k.on('updateGuy', function(guy){

    $updateGuyForMe(guy)

})


$invite = function (toWho) {



    k.em('sendInvite', {
        from: _username,
        toWho: toWho
    })
}


k.on('inviteAccepted', function (invite) {


        if (_username == invite.toWho) {$addGuy(invite.from)

        }


    })


k.on('someSentYouAnInvite', function (invite){
    $l('someSentYouAnInvite: ')
    $d(invite)
    if (_username == invite.toWho) {
        $mug(invite.from, function (mug) {
            popIv = $.pop($.d().A(
                $.i(mug).WH(200, 200),
                $.h1('chat with ' + invite.from + '?'),
                $.bt('ya', function () {
                    popIv.modal('hide')
                    $addGuy(invite.from)
                    k.emit('acceptInvite', {from: _username, toWho: invite.from})
                }),





                $.bt('na', function () {
                    popIv.modal('hide')
                })))


        })
    }


})




UNIVERSE=function(){z()

    uni = $St(1000, 800)
    uni.bgI('/beach.jpg')
    uni.mug(function(b){if(O(b)){yourBm=    b.dg().rC().XY(600).sXY(.4)}


       $GUYS.push({

            un :_username,
            bm : yourBm
        }) //b.$$( function(){ b.rm(); k.emit('X', _username)})

        page =  $.d('b', 1000, 'auto').A($.br(3))
        page.A(
            chatMessageInputTextBox = $.ip('...', 'tx').id('textinput'),
            chatSendButton = $.bt('send', function(){
                $Bub( $('#textinput').V(), '+')})
        )
        n=0

        $.eG('users', function(user){
            if(user.mug ){
                var mugInviteBt=$.i(user.mug).WH(100)
                mugInviteBt.$(function(){$invite( user.un )})
                page.A(mugInviteBt)
            }
        })

         _.ev(.1, $sendMyUpdate)

    })

}


old=function(){
//alert
    Y.bId = Y.mById = fetchMugByMugId = function (user, fn) {
        alert('Y.bId')
        $.po('getimagebyid', user.m, fn)
    }
    Y.bM = Y.mByM = fetchMugByUserModel = function (user, fn) {
        alert('Y.bId')
        $.g('mug/' + user.m, fn)
    }
}
_test=false