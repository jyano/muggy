$.chat = function (n, c, id) {
    var wd
    n = n || 'chatbox' //default chatRm
    if ($CHATS[n]) {
        $l('already in this room');
        return
    } //singleton!
    k.em('jRm', n) //join the room (sign up to receive messages.. and i guess to also send them)
    _.ev(.5, function () {
        k.em('rmUd', n)
    }) //repeatedly request updates for yourself (so you have a users list)
    $.chatEl = function (n, id, c) {
        var wd = $.w('chatroom: ' + n).id(id).css({'min-width': 600, 'min-height': 400}).C(c || $r())
        wd.messages = $.d().id('cbi').C('u').ov('auto')
        wd.input = $.ip().K('form-control')

        wd.usersDiv = $.d().A($.i('me').A())
        wd.mainPanel = $.Cl(8, wd.messages, wd.input,
            $.bt('send', function () {
                k.em('ChatRmMs', {rm: n, ms: wd.input.V(), un: '_username'})
            }) ,
            $.bt('pop', function () {k.emit('p', ip.V(), n)}),
            $.bt('pic', function () {$.pop('pic select')})
        )
        wd.usersPanel = $.Cl(4, $.h3('users:'), wd.usersDiv)
        wd.A($.R().A(wd.mainPanel, wd.usersPanel))
        return wd
    }
    wd = $.chatEl(n, id || 'cbo', c || 'o')
    $CHATS[n] = {
        wd: wd,
        updateUsersDiv: function (users) {
            wd.usersDiv.E()
            _.e(users, function (un) {
                wd.usersDiv.A($.h5(un).$(function () {
                    $.popUser(un)
                }))
            })
        },
        toggle: function () {
            this.wd.toggle();
            return wd
        },
        write: function (m) {
            wd.messages.A($.h5(m).col('w'))
        },
        writeBlack: function (m) {
            wd.messages.A($.h5(m).col('x'))
        }
    }
}
$.ChatBt = function (n) {
    return $.bt(n, function () {
        $.chat(n)
    }).mar(40)
}
CHAT=function(){$CHATS = {}
    k.on('ChatRmMs', function (d) {         if ($CHATS[d.rm]) {$CHATS[d.rm].write(d.un + ': ' + d.ms)}})
    k.on('rmUd', function (d) {if ($CHATS[d.rm]) {$CHATS[d.rm].updateUsersDiv(d.users)}})
    chatMenu$= $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)
    chatMenu$.A($.ChatBt('general'),
        $.ChatBt('fun'),
        $.ChatBt('sexy'),
        inputMs = $.ip().K('form-control'),
        $.bt('private room', function(){ $.chat(inputMs.v()) }).mar(40))
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
UNIVERSE=function(){z(); $GUYS=  []
    k.on('bub', function(bub){var guy;
        if( guy = $getGuy(bub.u) ){$Bub(bub.t, bub.x, bub.y)}})
    k.on('updateGuy', function(userOb){var guy; if(!userOb){return}
        if(guy= $getGuy(userOb.un)){
            if(guy.un == _username){return}
            if(guy.bm){ guy.bm.XY( userOb.x, userOb.y )}
        }})
    k.on('inviteAccepted', function (invite) {
        if (_username == invite.toWho) {$addGuy(invite.from)}})
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
            chatSendButton = $.bt('send', function(){$Bub( $('#textinput').V(), '+')}))
        n=0;
        $.eG('users', function(user){if(user.mug ){var mugInviteBt=$.i(user.mug).WH(100)
            mugInviteBt.$(function(){k.em('sendInvite', {from: _username, toWho: user.un })});
            page.A(mugInviteBt)}})
        _.ev(.1, function(){k.em('myUpdate', {un: _username, x: yourBm.x, y: yourBm.y})})})
}