$(document).ready(function () {
    //data
    //data scrollout
    ScrollOut({
        targets: "section.sub_data div.data_content ul",
        threshold: 0.5,
        once: false
    });

    //number 카운터
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof (settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof (settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0, // the number the element should start at
            to: 0, // the number the element should end at
            speed: 1000, // how long it should take to count between the target numbers
            refreshInterval: 100, // how often the element should be updated
            decimals: 0, // the number of decimal places to show
            formatter: formatter, // handler for formatting the value before rendering
            onUpdate: null, // callback method for every time the element is updated
            onComplete: null // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    function count() {
        // custom formatting example
        $('.count-number').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });

        // start all the timers
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    }
    count();

    var el2 = document.querySelector("section.sub_data div.data_content>ul");
    el2.setAttribute('data-scroll', '');

    ScrollOut({
        onShown: function (el2) {
            // remove the class
            count();


        }
    });
    
    
    
    

    //tab menu
    $('.tabmenu-wrap .tab-nav').find('a').on('click', function (e) {
        var $this = $(this);
        var $all_tab_nav = $this.parents('.tab-nav').find('.nav');
        var $tab_contents = $this.parents('.tabmenu-wrap').find('.con-box');
        var id = $this.attr('href');

        e.preventDefault();
        $all_tab_nav.removeClass('on');
        $this.parent().addClass('on');
        $tab_contents.hide();
        $(id).fadeIn('slow');
        $('section.contents07 div.con_07 div.con div.tabmenu-wrap div.in_tab_con').css({
            display: 'none'
        });
    });


    //tabcon 숨김내용
    $('.tab-con .demo').find('a').on('click', function (e) {
        var $this = $(this);
        var $in_tab_contents = $this.parents('.tabmenu-wrap').find('.in_tab_con');
        var id = $this.attr('href');

        e.preventDefault();
        $in_tab_contents.hide();
        $(id).slideToggle('slow');
        $('html,body').animate({
            scrollTop: $(this).offset().top 
        }, 700);
        $('section.contents07 div.con_07 div.con div.tabmenu-wrap div.in_tab_con ul.in_tab_text').fadeIn(700);
    });

    //tabcontent

    var ww = $(window).width();

    if (ww >= 1024) {
        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo").slice(0, 3).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo").slice(0, 3).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo").slice(0, 3).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo").slice(0, 3).show();


    } else if (ww < 1024 && ww >= 600) {
        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div.con-box div.demo").slice(0, 6).hide();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo").slice(0, 2).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo").slice(0, 2).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo").slice(0, 2).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo").slice(0, 2).show();


    } else if (ww < 600) {
        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div.con-box div.demo").slice(0, 6).hide();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo").slice(0, 1).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo").slice(0, 1).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo").slice(0, 1).show();

        $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo").slice(0, 1).show();


    }

    //tabcon-01 더보기 
    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
        e.preventDefault();
        if (ww >= 1024) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo:hidden").slice(0, 3).slideDown();
           
        } else if (ww < 1024 && ww >= 600) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo:hidden").slice(0, 2).slideDown();

            /*세부내용위치*/
            $('#in_tab_con_01,#in_tab_con_02').insertAfter('#demo_04');
            $('#in_tab_con_03,#in_tab_con_04').insertAfter('#demo_06');
            $('#in_tab_con_05,#in_tab_con_06').insertAfter('#demo_08');
            $('#in_tab_con_07,#in_tab_con_08').insertAfter('#demo_08');
            $('#in_tab_con_09').insertAfter('#demo_09');

        } else if (ww < 600) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo:hidden").slice(0, 1).slideDown();

            /*세부내용위치*/
            $('#in_tab_con_01').insertAfter('#demo_01');
            $('#in_tab_con_02').insertAfter('#demo_02');
            $('#in_tab_con_03').insertAfter('#demo_03');
            $('#in_tab_con_04').insertAfter('#demo_04');
            $('#in_tab_con_05').insertAfter('#demo_05');
            $('#in_tab_con_06').insertAfter('#demo_06');
            $('#in_tab_con_07').insertAfter('#demo_07');
            $('#in_tab_con_08').insertAfter('#demo_08');
            $('#in_tab_con_09').insertAfter('#demo_09');
        }
        if ($("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
         $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 300);

    });

    //tabcon-02 더보기 
    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
        e.preventDefault();
        if (ww >= 1024) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo:hidden").slice(0, 3).slideDown();
            
        } else if (ww < 1024 && ww >= 600) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo:hidden").slice(0, 2).slideDown();

            /*세부내용위치*/
            $('#in_tab_con_10,#in_tab_con_11').insertAfter('#demo_11');
            $('#in_tab_con_12').insertAfter('#demo_12');
        } else if (ww < 600) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo:hidden").slice(0, 1).slideDown();

            /*세부내용위치*/
            $('#in_tab_con_10').insertAfter('#demo_10');
            $('#in_tab_con_11').insertAfter('#demo_11');
            $('#in_tab_con_12').insertAfter('#demo_12');
        }
        if ($("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 300);
    });

    //tabcon-03 더보기 
    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
        e.preventDefault();
        if (ww >= 1024) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo:hidden").slice(0, 3).slideDown();
            
        } else if (ww < 1024 && ww >= 600) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo:hidden").slice(0, 2).slideDown();

            /*세부내용위치*/
            $('#in_tab_con_13,#in_tab_con_14').insertAfter('#demo_14');
            $('#in_tab_con_15,#in_tab_con_16').insertAfter('#demo_16');
            $('#in_tab_con_17,#in_tab_con_18').insertAfter('#demo_18');
            $('#in_tab_con_19,#in_tab_con_20').insertAfter('#demo_20');
            $('#in_tab_con_21,#in_tab_con_22').insertAfter('#demo_22');
            $('#in_tab_con_23,#in_tab_con_24').insertAfter('#demo_24');

        } else if (ww < 600) {
            $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo:hidden").slice(0, 1).slideDown();

            /*세부내용위치*/
            $('#in_tab_con_13').insertAfter('#demo_13');
            $('#in_tab_con_14').insertAfter('#demo_14');
            $('#in_tab_con_15').insertAfter('#demo_15');
            $('#in_tab_con_16').insertAfter('#demo_16');
            $('#in_tab_con_17').insertAfter('#demo_17');
            $('#in_tab_con_18').insertAfter('#demo_18');
            $('#in_tab_con_19').insertAfter('#demo_19');
            $('#in_tab_con_20').insertAfter('#demo_20');
            $('#in_tab_con_21').insertAfter('#demo_21');
            $('#in_tab_con_22').insertAfter('#demo_22');
            $('#in_tab_con_23').insertAfter('#demo_23');
            $('#in_tab_con_24').insertAfter('#demo_24');
        }
        if ($("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 300);
    });

    //resize 시작
    $(window).resize(function () {
        //tabcontent
        $(function () {
            var ww = $(window).width();

            if (ww >= 1024) {
                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo").slice(0, 3).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo").slice(0, 3).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo").slice(0, 3).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo").slice(0, 3).show();

            } else if (ww < 1024 && ww >= 600) {
                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div.con-box div.demo").slice(0, 6).hide();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo").slice(0, 2).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo").slice(0, 2).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo").slice(0, 2).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo").slice(0, 2).show();
            } else if (ww < 600) {
                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div.con-box div.demo").slice(0, 6).hide();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo").slice(0, 1).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo").slice(0, 1).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo").slice(0, 1).show();

                $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo").slice(0, 1).show();
            }

            //tabcon-05 더보기 
            $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
                e.preventDefault();
                if (ww >= 1024) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo:hidden").slice(0, 3).slideDown();
                } else if (ww < 1024 && ww >= 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo:hidden").slice(0, 2).slideDown();
                } else if (ww < 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-01 div.demo:hidden").slice(0, 1).slideDown();
                }




            });

            //tabcon-06 더보기 
            $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
                e.preventDefault();
                if (ww >= 1024) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo:hidden").slice(0, 3).slideDown();
                } else if (ww < 1024 && ww >= 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo:hidden").slice(0, 2).slideDown();
                } else if (ww < 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-02 div.demo:hidden").slice(0, 1).slideDown();
                }


            });

            //tabcon-07 더보기 
            $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
                e.preventDefault();
                if (ww >= 1024) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo:hidden").slice(0, 3).slideDown();
                } else if (ww < 1024 && ww >= 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo:hidden").slice(0, 2).slideDown();
                } else if (ww < 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-03 div.demo:hidden").slice(0, 1).slideDown();
                }


            });

            //tabcon-04 더보기 
            $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
                e.preventDefault();
                if (ww >= 1024) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo:hidden").slice(0, 3).slideDown();
                } else if (ww < 1024 && ww >= 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo:hidden").slice(0, 2).slideDown();
                } else if (ww < 600) {
                    $("section.contents07 div.con_07 div.con div.tabmenu-wrap div.tab-con div#tabcon-04 div.demo:hidden").slice(0, 1).slideDown();
                }


            });
        });

    }); //resize_end





}); //end

