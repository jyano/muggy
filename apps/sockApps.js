$addGuy=function(un){
    $mug(un, function(bm){
        bm = new cjs.Bitmap(bm)
        uni.A(bm);
        $GUYS.push({

            un: un,

            bm: bm.rC().XY(600).sXY(.4)
        }) // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
    })
}


$getGuy=function(un){

    var targetGuy=false //  finds a guy({un, bm}) in $GUYS array from a un ( rets false if he aint there) //alpha: can accept ob received on guyUpdates ({un, x, y})//can pass the string or also an ob with 'un' property
    if( O(un) ){un = un.un }

    _.e($GUYS, function(guy){
        if(un == guy.un){targetGuy = guy}})
    return targetGuy
}

$getGuyNotMe=function(un){
    var guy = $getGuy(un )
  if(guy &&  guy.un!=_username){return guy}
}

$Bub = function (t, x, y) {
    var g = G(arguments), ct = $Ct()
    text = g[0] || 'hi!';
    x = g[1] || yourBm.x;
    y = g[2] || yourBm.y

    uni.A(ct);
    ct.cir('w', 120, x - 250, y - 250, 50).cir('b', 30, x - 120, y - 120, 30).cir('g', 20, x - 80, y - 80).text(t, "20px Arial", "blue", x - 300, y - 300)
    $Tw(ct, [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000])
    _.in(10, function () {ct.rm()})
    if (g.p) {
        k.emit('bub', {
            t: t,
            x: x,
            y: y,
            u: _username
        })
    }
    return ct
}

UNIVERSE=function(){
    z();n=0;$GUYS=[]

    k.on('bub', function(bub){var guy; if(guy = $getGuy(bub.u)){
        $Bub(bub.t, bub.x, bub.y)}})

    k.on('updateGuy', function(user) {var guy
        if (user && (guy = $getGuyNotMe(user.un))){
            guy.bm.XY(user.x, user.y)}})
    k.on('inviteAccepted', function (invite) {
        if(_username == invite.from){$addGuy(invite.toWho)}})


    k.on('newInvite', function (d){var popD, pop,title, ya,na; if (_username != d.toWho){return}
        title=$.h1('chat with ' + d.from + '?')
        ya= $.bt('ya', function () {
            pop.modal('hide')
            $addGuy(d.from)
            k.emit('acceptInvite', {from: d.from, toWho: _username})})
        na= $.bt('na', function () {pop.modal('hide')})
        popD=  $.d()
        pop = $.pop(popD)
        $mug(d.from, function (mug) {
            popD.A($.i(mug).WH(200, 200), title, ya, na)})})


    uni = $St(1000, 800);

    uni.bgI(
        R(2)? '/beach.jpg':
            R(4)? '/space.jpg':
                '/chicks.png'
    )
    
    uni.mug(function(b){if(O(b)){yourBm=    b.dg().rC().XY(600).sXY(.4)}
        $GUYS.push({un :_username, bm : yourBm})
        b.$$( function(){ b.rm(); k.emit('X', _username)})
        page =  $.d('b', 1000, 'auto').A($.br(3))
        page.A(chatMessageInputTextBox = $.ip('...', 'tx').id('textinput'),
            chatSendButton = $.bt('send', function(){$Bub( $('#textinput').V(), '+')}))
        $.eG('users', function(user){if(user.mug ){var mugInviteBt=$.i(user.mug).WH(100)
            mugInviteBt.$(function(){k.em('sendInvite', {from: _username, toWho: user.un })});
            page.A(mugInviteBt)}})
        _.ev(.1, function(){k.em('myUpdate', {un: _username, x: yourBm.x, y: yourBm.y})})})
}

CHAT=function(){
    $CHATS = {}
    k.on('ChatRmMs', function (d) {if ($CHATS[d.rm]) {$CHATS[d.rm].write(d.un + ': ' + d.ms)}})
    k.on('rmUd', function (d) {if ($CHATS[d.rm]) {$CHATS[d.rm].updateUsersDiv(d.users)}})
    chatMenu$= $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)
    chatMenu$.A($.ChatBt('general'), $.ChatBt('fun'), $.ChatBt('sexy'),
        inputMs = $.ip().K('form-control'),
        $.bt('private room', function(){ $.chat(inputMs.v()) }).mar(40))
}



