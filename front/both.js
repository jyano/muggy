s$=S
basix()
undrscr()
strJs()
math()
time()
function basix() {
    $A = Array;
    $B = Boolean;
    $N = Number;
    $O = Object;
    $F = Function;
    $S = String;
    J = $J = JSON
    U = function u(a, b) {

        if (_.isUndefined(b)) {
            return _.isUndefined(a)
        }

        // return  _.extend.apply(_.extend, arguments)
    }
    A = _.isArray
    B = _.isBoolean
    D = function (a, b, c) {
        return _.isUndefined(b) ? !_.isUndefined(a)
            : _.defaults.apply(_.defaults, arguments)
    }
    F = function f(a, b, c) {
        //if(_.isDefined(b)){return _.filter(a,b,c)}
        return _.isFunction(a)  // return a.prototype||true

    }
    N = function (n, n2) {
        if (U(n2)) {
            return _.isNumber(n)
        }
        return _.tN(n, n2)
    }//N = _.isNumber
    O = function (a, b) {

        if (_.isUndefined(b)) {
            return _.isObject(a)
        }
        if (_.isObject(a)) {
            // return  _.extend.apply(_.extend, arguments)
        }
    }
    I = function (f, i) {
        var g = G(arguments), clear


        if (F(g[0])) {
            f = g[0];
            i = g[1]
        }

        else {
            f = g[1];
            i = g[0]
        }

        i = !N(i) ? 1000 : i > 5 ? i : i * 1000


        if (g.N) {
            f()
        }

        clear = setInterval(f, i)

        return function () {
            clearInterval(clear)
        }

    }
    S = function (a) {
        return _.isString(a)
    }
    $l = function (a) {
        var g = G(arguments), v
        if (O(a) && N(a.x) && N(a.y)) {
            v = a.toFixed()
            $l(v.x + ' , ' + v.y)
            return a
        }
        _.e(g, function (a) {
            console.log(
                _.isFunction(a) ? a.toString()
                    : O(a) ? JSON.stringify(a)
                    : a
            )
        })
        return a

        $l = function (a) {
            var g = G(arguments), v
            if (O(a) && N(a.x) && N(a.y)) {
                v = a.toFixed()
                $l(v.x + ' , ' + v.y)
                return a
            }
            _.e(g, function (a) {
                console.log(
                    _.isFunction(a) ? a.toString()
                        : O(a) ? JSON.stringify(a)
                        : a
                )
            })
            return a
        }
    }
    G = function (arg, str) {
        var a, ag = _.tA(arguments), p, n, m, d, g
        //conflict with N(not neg) and N(g.$ && N(g.f) )
        if (S(ag[0])) {
            a = _.tA(ag[1])
            if (S(a[0])) {
                a[ag[0]] = a.shift()
            }
        }
        else {
            a = _.tA(ag[0])
        }
        if (_.l(a) == '+') {
            p = a.pop()
        }
        else if (_.l(a) == '-') {

            n = a.pop()
        }
        else if (_.l(a) == '*') {
            m = a.pop()
        }
        else if (_.l(a) == '/') {
            d = a.pop()
        }
        if (S(ag[1]) && S(_.l(a))) {
            a[ag[1]] = a.pop()
        }
        g = _.df(a, {
            z: a.length,
            f: _.f(a),
            s: a[1],
            t: a[2],
            l: _.l(a),
            r: _.r(a), i: _.i(a),
            p: p, P: !p, m: m, M: !m,
            d: d, D: !d, n: n, N: !n

        })
        g.u = U(g.f);
        g.U = !g.u
        g.L = g.length
        str = ''
        _.t(g.L, function () {
            str = str + '$'
        })
        g[str] = 1
        //g.N= g.$ && N(g.f);
        g.N = g.$ && N(g.f)
        g.N_ = N(g.f);
        g._N = N(g.l)
        g.$N = N(g.f)
        g.$_N = N(g.s)
        g.S = g.$ && S(g.f)
        g._S = S(g.l)
        g.$S = g.S_ = S(g.f)
        g.$_S = S(g.s)
        g.O = g.$ && O(g.f)
        g.O_ = O(g.f)
        g._O = O(g.l)

        g.A = g.$ && A(g.f)
        g.A_ = A(g.f);
        g._A = A(g.l)


        g.F = g.$ && F(g.f);
        g.F_ = F(g.f);
        g._F = F(g.l)
        g.SA = g.$$ && g.S_ && A(g.s)
        g.OO_ = O(g.f) && O(g.s)
        g.e = function (fn, str) {
            var g = this
            if (str) {
                g.e(function (g) {
                    fn[str](g)
                })
                return fn
            }

            _.e(g, fn)
            return g
        }
        g.e0 = function (fn) {
            _.e(this[0], fn)
        }

        g.e1 = function (fn) {
            _.e(this[1], fn)
        }

        g.eR = function (fn) {
            _.eR(this, fn)
        }

        g.eF = function (fn) {
            _.e(g.f, fn)
        }


        g.eS = function (fn) {
            this.e(function (k) {
                if (S(k)) {
                    fn(k)
                }
            })
        }
        g.G = function (a) {
            a = _.clone(a)
            if (g.n) {
                a.push('-')
            }
            else if (g.p) {
                a.push('+')
            }
            else if (g.d) {
                a.push('/')
            }
            else if (g.m) {
                a.push('*')
            }
            return a
        }
        g.g = g.G(g)
        g.a = g.ap = function () {
            var g = this, gg = G(arguments)

            //if(g.A){

            return gg.s ?
                $a(gg.s, gg.t, g.f) :
                $a(gg.f, g.f)
        }
        g.ush = function (d) {
            var g = this,
                res

            if (U(d)) {
                d = null
            }

            g.t = g.s
            g.s = g.f
            g.f = d
            res = g.unshift(d)


            return res
        }
        return _g = g
    }
    G._ = function () {
        g = G(arguments)
        $l(g.L + ' args')
    }
    z = function (fn) {
        var g = G(arguments)
        if (g.F_) {
            return T.t(fn)
        }
        $('body').empty()
    }
    $z = function (z) {
        console.error(z)
    }
    $d = function (o) {
        console.dir(o);
        return o
    }
    R = function (n, n2) {
        var num
        if (O(n)) {
            n = n.length
        }
        n = N(n) ? n : 1
        n2 = N(n2) ? n2 : 0
        num = (M.random() * n) + n2
        return M.floor(num)
    }
    M = Math
    V=function(x,y){
        return {x:x, y:y}
    }
    AA = function (a) {return A(a) && A(a[0])}
    $a = function (ob, met, arr) {
        var g = G(arguments)
        if (g.t) {
            return g.f[g.s].apply(g.f, g.t)
        }
        return g.f.apply(null, g.s)
    }
    _.gS = function (pop) {
//for gen
        var g = G(arguments), that = this
        return function (val) {
            if (U(val)) {
                return this[pop]
            }
            this[pop] = val
            return this
        }
    }
    _v = function (a) {
        return S(a) ? function () {
            Function(a)()
        } : F(a) ? a : F(a.value) ? a.value() : a.value
    }
}
function undrscr() {
    _.b = _.bind
    _.l = _.last;
    _.f = _.first;
    _.i = _.initial;
    _.r = _.rest
    _.e = _.each;
    _.eR=function(g,fn){_.e(_.r(g),fn)}
    _.m = _.map;
    _.t = _.times
    _.x = _.extend;
    _.p = _.partial;
    _.tA = function (a) {
        return O(a) ? _.toArray(a) : [a]
    }
    _.tp = _.template
    _.df = _.defaults
    _.th= _.throttle

    _.fW=_.findWhere
    _.wh=_.where
    _.rj=_.reject
    _.ic = _.include
        _.wo = _.without
        _.rs = _.result
        _.cp = _.compact
        _.rd = function r(a, b, c, d) {
            return F(b) && D(c) ? _.reduce(a, b, c) : _.reduceRight(a, c, b)
        }
        _.rp = function (a, b, c) {
            return a.replace(b || '#', c || '')
        }

}
function strJs(){
    chompEnsure()
    splt()
    imgUrl()

    function splt() {
        _.spl = function (a, b) {
            return String(a).split(b)
        }
        _.bf = function (a, b) {
            return a.split(b || '.')[0]
        } //before('.')
    }
    function chompEnsure() {
        _.left = function (a, b) {
            alert('_.left')
            var g = G(arguments)
            return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
                : s$(a).chompLeft(b).s) : 0
        }
        _.slash = function (str) {
            alert('_.slash')
            var hasSlash = str[0] == '/'
            return hasSlash ? str : '/' + str
        } //= _.ensureSlash
        S.cR = function (a, b) {
            return s$(a).chompRight(b).s
        }
        S.eR = function (a, b) {
            return s$(a).ensureRight(b).s
        }
        S.cL = function (a, b) {
            return s$(a).chompLeft(b).s
        }
        S.eL = function (a, b) {
            b = b || '/';
            return s$(a).ensureLeft(b).s
        }
        S.r = function (a, b) {
            var g = G(arguments)
            return g.n ? s$(a).chompRight(b).s :
                s$(a).ensureRight(b).s
        }

    }
    function imgUrl() {


        _.ext = S.ext = function (a, b) {
            if (S(a)) {
                return s$(a).contains('.') ? a :
                    s$(a).ensureRight(b || '.png').s
            }
        }
        _.crs =  function (a) {
            return a.split('/').pop().split('.png')[0]
        }//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'
        S.url = function (a) {
            return 'url("' + a + '")'
        }
        _.iDU = function (a) {
            return s$(a).contains('data:')
        }
        _.src=function(a){
            a = _.ext(a);return s$(a).startsWith('/')? a : '/'+ a
        }

    }
    _.fCC = function (a) {
        return String.fromCharCode(a)
    }
    _.tS = function (a) {return a.toString()}
    _.eW=function(a,b){return s$(a).endsWith(b) } //_.eW = function (a, b) {return l$(a, _z(b)) == b}
    _.j=function (a, b) {return (a || []).join(b || ' ')}
    S.tU = _.tUc = _.tU = _.tUC = function (a) {
        return S(a) ? a.toUpperCase() :
            A(a) ? _.m(a, function (a) {
                return S.tU(a)
            }) : a
    }
    S.iU = function (a) {
        if (S(a)) {
            return s$(a).isUpper()
        }
    }
    _.tLc = _.tL = _.tLC = function (a) {
        return a.toLowerCase()
    }
    S.url = function (a) {
        alert('S.url')
        return 'url("' + a + '")'}
    _.jS = function (a, b, c) {return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)}
    _.jP = function (a, b, c) {return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)}
}
function math() {
    M.tN = _.tN = function (what, aNum) {return N(what) ? what : aNum || 0}

    M.fl = M.floor
    M.c = M.cos;
    M.s = M.sin
    M.tD = M.toDegrees = tDeg = function (r) {
        return r * (180 / M.PI)
    }
    M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
        if (O(degs)) {
            degs = degs.rotation
        }
        return degs * M.PI / 180
    }
    M.av = M.avg = M.average = function self(a, b) {
        var g = G(arguments), z = _.size(g), n = 0;


        if (A(a)) {
            return _a(self, a)
        }

        if (O(a)) {

            return V(
                M.av(a.x, b.x),
                M.av(a.y, b.y)
            )

        }

        _.e(g, function (a) {
            n += a
        })
        return n / z
    }
    M.dst = M.distance = dst = function self(a, b) {


        M.xyz = xyz = function (a, b) {
            a = a || {};
            a.x = a.x || 0;
            a.y = a.y || 0;
            a.z = a.z || 0
            b = b || {};
            b.x = b.x || 0;
            b.y = b.y || 0;
            b.z = a.z || 0


            return sqr(a.x - b.x, a.y - b.y, a.z - b.z)

            function sqr(a, b) {
                var g = G(arguments)
                return M.sqrt(U(b) ? a
                    : sq.apply(this, g))
            }

            function sq(a) {
                var g = G(arguments), n = 0
                _.each(g, function (a) {
                    n += (a * a)
                })

                return n
            }
        }


        if (A(a) && U(b)) {
            return self(a[0], a[1])
        }


        if (U(b)) {
            return xyz(M.V({}), M.V(a))
        }


        return xyz(M.V(a), M.V(b))


    }
    M.lD = M.dist = M.lineDistance = function (p1, p2) {
        var xs = 0, ys = 0;

        p1 = V(p1)
        p2 = V(p2)
        xs = p2.x - p1.x;
        xs = xs * xs;

        ys = p2.y - p1.y;
        ys = ys * ys;

        return M.sqrt(xs + ys);
    }


    M.lC = M.lineCenter = function (x1, y1, x2, y2) {
        if (A(x1)) {

            if (N(x1[3])) {
                return center(x1[0], x1[2], x1[2], x1[3])
            }
            return center(x1[0], x1[1], y1[0], y1[1])
        }
        if (O(x1)) {
            return center(x1.x, x1.y, y1.x, y1.y)
        }
        return center(x1, y1, x2, y2)
        function center(x1, y1, x2, y2) {
            var x, y

            if (x1 > x2) {
                upperX = x1;
                lowerX = x2
            }
            else {
                upperX = x2;
                lowerX = x1
            }

            if (y1 > y2) {
                upperY = y1;
                lowerY = y2
            }
            else {
                upperY = y2;
                lowerY = y1
            }

            x = lowerX + (upperX - lowerX) / 2
            y = lowerY + (upperY - lowerY) / 2

            return V(x, y)
        }
    }
    M.pIC = M.pointInCircle = function (x, y, circle) {
        var withinX, withinY
        withinX = x < circle.x + circle.radius && x > circle.x - circle.radius
        withinY = y < circle.y + circle.radius && y > circle.y - circle.radius
        return withinX && withinY
    }//Y.pointInCircle = pntInCir =
    M.pIR = M.pointInRect = Math.pointInRectangle = function (x, y, rect) {
        var withinX, withinY
        var halfwidth = (rect.width || rect.w) / 2
        var halfheight = (rect.height || rect.h) / 2
        //assumes center
        withinX = x < rect.x + halfwidth && x > rect.x - halfwidth
        withinY = y < rect.y + halfheight && y > rect.y - halfheight
        return withinX && withinY
    }
    M.circlesOverlap = function (c1, c2) {
        alert('M.circlesOverlap')
        var sum, dist, rads
        sum = sqr(c1.x - c2.x) + sqr(c1.y - c2.y)
        dist = sqrt(sum)
        rads = c1.r + c2.r
        return rads < dist
    }
    M.warp = function (lowBound, highBound, cushion) {//wrp=
        cushion = cushion || 0
        return function (num) {
            return num < lowBound ? highBound - cushion
                : num > highBound ? lowBound + cushion
                : num
        }
    }
    M.u = _.upd = function (curr, update, g) {
        var res
        if (g.p) {
            res = curr + update
        }
        else if (g.n) {
            res = curr - update
        }
        else if (g.m) {
            res = curr * update
        }
        else if (g.d) {
            res = curr / update
        }
        else res = update
        return res
    }

    _.sz = _z = function z(a, b, c) {
        return U(b) ? _.size(a)
            : N(b) ? _z(a) == b
            : _z(a) == _z(b)
    }
    _.pI = M.pI = _.tI = function (a, b) {
        if (U(b)) {
            return parseInt(a)
        }
        return parseInt(_.tN(a, b))
//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}

    }
    _.adj = function (income, tax) {
//tax ~ deltaLimit ~ buffer
        var income = income || 0, tax = tax || 0
        if (income > 0) {
            return income > tax ? income - tax : 0
        }
        return -income > tax ? income + tax : 0
    }
    _.cap = function (n, m, M) {
        if (U(m)) {
            return n
        }
        if (A(m)) {
            M = m[1]
            m = m[0]
        }
        return n < m ? m
            : n > M ? M
            : n
    }
    R=function(n,n2){var num
        n=N(n)?n:1
        n2=N(n2)?n2:0
        return M.round((M.random()*n)+n2)
    }
}
function time() {
    $Dt = Date
    $Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
    $Dt.H = 3600000
    $Dt.U = $Dt.UTC// ?
// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
    $Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)
    $D = function () {
        var d = new $Dt() // new $Dt(a,b,c,d,e)
        d.s = d.getSeconds
        d.t = function (m) {  //time  num MSs af/bf 1/1/70
            d.sT = d.setTime
            d.gT = d.getTime
            if (U(m)) {
                return this.gT()
            }
            this.sT(m)
            return this
        }
        d.s = function (s) { //secs 0-59
            // $l('d.s')
            var d = this
            d.sS = d.setSeconds
            d.gS = d.getSeconds
            if (U(s)) {
                return d.gS()
            }
            d.sS(s)
            return d
        }
        d.h = function (m) {  //hour 0-23
            d.gH = d.getHours
            d.sH = d.setHours
            if (U(m)) {
                return this.gH()
            }
            this.sH(m)
            return this
        }
        d.d = d.getDay  // day of   week (from 0-6)
        d.D = function (d) {
            var d = this   //date  day of   month (from 1-31)
            d.gD = d.getDate //
            d.sD = d.setDate
            if (U(d)) {
                return this.gD()
            }
            this.sD(d)
            return this
        }
        d.M = function (m) {  //month 0-11
            d.sM = d.setMonth
            d.gM = d.getMonth
            if (U(m)) {
                return this.getMonth()
            }
            this.setMonth(m)
            return this
        }
        d.m = function (m) {//mins 0-59
            d.gMn = d.getMinutes
            d.sMn = d.setMinutes

            if (U(m)) {
                return this.gMn()
            }
            this.sMn(m)
            return this
        }
        d.ms = function (m) { //ms 0-999
            d.gMs = d.getMilliseconds
            d.sMs = d.setMilliseconds
            if (U(m)) {
                return this.gMs()
            }
            this.sMs(m)
            return this
        }
        d.y = function (y) { //fullYear (year Deprecated -> fullYear )
            d.sY = d.setFullYear   //Sets the year (four digits) of dtOb
            d.gY = d.getFullYear//    year (four digits)
            if (U(y)) {
                return this.gY()
            }
            this.sY(y)
            return this
        }
        //superParse(d)
        //superUTC(d)

        return d
    }
    $D.n = function (a) {
        return $Dt.n(a)
    }
    $D.p = function (a) {
        return $Dt.p(a)
    }
    $D.U = function (a) {
        return $Dt.U(a)
    }
    _.gT = function () {
        return $Dt().getTime()
        //return $D().getTime()
    }
    $now = function () {
        return {t: $D, df: $D.n()}
    }
    $n = function (plus) {//= $nowPlusWhat_InDateForm
        var dateNow
        if (U(plus)) {
            return $D.n()
        }
        //plus=plus||0
        dateNow = $D($D.n() + plus)
        return dateNow
    }
    _.fT = function (times, func) {
        var timeout
        if (N(times)) {
            return _.times(times, function (i) {
                func(i + 1)
            })
        }
        if (F(times)) {
            timeout = N(func) ? func : 100
            func = times
        }
        return setTimeout(func, timeout)
    }
    _.mo = function (n, fn) {
        return N(n) ?
            _.throttle(fn, n * 1000) : _.throttle(n, 1000)
    }
    _.sI = function (a, b) {
        return setInterval(a, b)
    }
    _.ev = function (n, fn) {
        setInterval(fn, n * 1000)
    }
    _.in1 = function (time) {
        time = ( N(time) ? time : 1) * 1000
        cjs.wait = true
        return setTimeout(function () {
            cjs.wait = false

        }, time)
    }//in1
    _.in = function (time, fn) {
        var g = G(arguments),
            o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
        o.s = N(o.s) ? o.s : 1
        o.fn = o.fn || function () {
        }
        return setTimeout(
            function () {

                if (g.m) {
                    $.c$()
                }
                o.fn()

            },
            o.s * 1000)
    }
    _.cI = _.xI = function (a, b) {
        clearInterval(a)
    }
    _.timeout = function (times, func) {
        alert('T')
        var timeout
        if (N(times)) {
            return _.t(times, function (i) {
                func(i + 1)
            })
        }
        if (F(times)) {
            timeout = N(func) ? func : 100;
            func = times
        }
        return setTimeout(func, timeout)
    }
    _.inx = function(){}
    _.evx=function(a){return a}}
