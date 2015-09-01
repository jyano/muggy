
    LETTERINGPLUG = function () {
        function injector(t, splitter, klass, after) {
            var text = t.text()
                , a = text.split(splitter)
                , inject = '';
            if (a.length) {
                $(a).each(function (i, item) {
                    inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
                });
                t.attr('aria-label', text)
                    .empty()
                    .append(inject)

            }
        }

        var methods = {
            init: function () {

                return this.each(function () {
                    injector($(this), '', 'char', '');
                });

            },

            words: function () {

                return this.each(function () {
                    injector($(this), ' ', 'word', ' ');
                });

            },

            lines: function () {

                return this.each(function () {
                    var r = "eefec303079ad17405c889e092e105b0";
                    // Because it's hard to split a <br/> tag consistently across browsers,
                    // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                    // (of the word "split").  If you're trying to use this plugin on that
                    // md5 hash string, it will fail because you're being ridiculous.
                    injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
                });

            }
        };
        $.fn.lettering = function (method) {
            // Method calling logic
            if (method && methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else if (method === 'letters' || !method) {
                return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
            }
            $.error('Method ' + method + ' does not exist on jQuery.lettering');
            return this;
        };
    };
    LETTERINGPLUG()

    LETTERING = function () {
        $.x()

        sp = $.sp('hello').A()
        sp.lettering(); // wrap <span class="charx"/ > around each character within header
        $spans = sp.fi('span')
        $('.dropped span')
            .css({

                transition: 'all 0.3s ease-in'
            })


    }
    LETTERING = function () {
        z()


        span = $.sp('hello').A()
        span.lettering() // wrap <span class="charx"/ > around each character within header
        $spans = span.find('span')
        $('.dropped span').css({transition: 'all 0.3s ease-in'})


    }
    FALLING = function () {
        z()
        //this goes in css
        $header2 = $.sp('hello').A()
        $header2.lettering() // wrap <span class="charx"/ > around each character within header

        $spans = $header2.find('span')

        delay = 0

        $header2.on('click', function () {


            $spans.each(function () {
                $(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character

                delay += 0.1
            })


            $header2.K('dropped') // Add "dropped" class to header to apply transition

            setTimeout(function () { // reset header code

                $spans.each(
                    function () {

                        $(this).css({
                            transitionDelay: '0ms'
                        })

                    })


                // set transition delay to 0 so when 'dropped' class is removed,
                // letter appears instantly

                $header2.removeClass('dropped') // remove class at the "end" to reset header.

                delay = 0

            }, 1800) // 1800 is just rough estimate of time transition will finish, not the best way

        })

    }
