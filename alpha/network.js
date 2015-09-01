
friends()
posts()
profile()
status()
mail()
function friends() {
    $.btBR = $buddyRequestButton = function (user) {
        return $.bt('buddy-request', function () {
            $.P('sRq', {to: user.u})
        })
    }
}
function posts() {
    $.btPo = function () {
        return $.bt('see posts', function () {
        })
    }
}
function profile() {
    $.pf = $.profile = function (username, div) {

//=makeProfile = prof


        // if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}

        answer = function (question, answer) {
            return $.d().A(
                $.h3(question),
                $.h4(answer)
            )
        }

        username = username || 'a'
        $.g('profile/' + username, function (d) {

            data = {
                aboutMe: d.aboutMe,
                iEnjoy: d.iEnjoy,
                iSeek: d.iSeek
            }

            if (O(d)) {
                div = div || $.dA('b', 300, 300).A().dg()
                div.A(
                    $.h4('about me'),
                    $.h5(d.aboutMe),
                    $.h4('i enjoy'),
                    $.h5(d.iEnjoy),
                    $.h4('i seek'),
                    $.h5(d.iSeek)
                )
            }
        })
    }
}
function status() {


    $.sts = $.status = showStatus = stat = function (user, div) {
        $.wStatus(user, function (sts) {
            $.d().A($.h3('STATUS: ' + sts))
        })
    }
}
function mail() {
    $.btMail = function (ms, user) {
        return $.bt('mail',
            function () {
                $.P('sMsg',
                    {m: ms.V(), to: user.u})
            })
    }
}