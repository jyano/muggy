 __ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'




    _.ks = _.keys;

    _.ixv = function (a, b) {
        return U(b) ? _.invert(a)
            : _a(_.intersection, arguments)
    }
    _.bn = function (a, b, c) {
        return F(a) ? _.bind(a, b, c) : _.bindAll(a, b, c)
    }
    _.fl = _.F = function (a) {
        if (A(a)) {
            return _.flatten(a)
        }
    }

    _.rng = function (a, b) {
        var g = G(arguments);
        return N(b) ? _.range(a, b) : g.p ? _.range(1, (a || 10) + 1) : _.range(a)
    }
    _.ey = function (a, b, c) {
        return _.every(a, b, c)
    }
    // _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}

    _.rng = function (a, b) {
        var g = G(arguments);
        return N(b) ? _.range(a, b) :
            g.p ? _.range(1, (a || 10) + 1) :
                _.range(a)}

    _.ht = function (a, b, c) {
        if (O(a)) {
            if (U(b)) {
                return a.height ? (F(a.height) ? a.height() : a.height) :
                    _.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
            }
            if (N(b)) {
                if (F(a.height)) {
                    a.height(b);
                    return a
                }
                if (N(a.height)) {
                    a.height = b;
                    return a
                }
                if (F(a.h)) {
                    a.h(b);
                    return a
                }
                if (N(a.h)) {
                    a.h = b;
                    return a
                }
            }


        }
    }

    _.plOb = function (a) {
        return O(a) && !_.isFunction(a) && !A(a) && !(E(a))
    }
    _.px = function (a) {
        return _.nN(a) ? a + 'px' : a
    }
    _.fA = function (a) {
        return function () {
            alert(a)
        }
    }
    _.fL = function (a) {
        return function () {
            $l(a)
        }
    }
