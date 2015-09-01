$CHATS = {}//create/empty chat ob to  hold your chats, ex:  sexy: chatControllerOb,  fun: chatControllerOb  (controllerOb defined by $.chat)
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
CHAT=function(){
    k.on('ChatRmMs', function (d) {
            if ($CHATS[d.rm]) {
                $CHATS[d.rm].write(d.un + ': ' + d.ms)
            }
        })
    k.on('rmUd', function (d) {
            if ($CHATS[d.rm]) {
                $CHATS[d.rm].updateUsersDiv(d.users)
            }
        })

    chatMenu$= $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)
    chatMenu$.A(
            $.ChatBt('general'),
            $.ChatBt('fun'),
            $.ChatBt('sexy'),
            inputMs = $.ip().K('form-control'),
            $.bt('private room', function(){ $.chat(inputMs.v()) }).mar(40)
        )
}

