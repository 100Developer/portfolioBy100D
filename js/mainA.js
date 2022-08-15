$(document).ready(function () {

    

    //Header
    //menu_swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },
        direction: 'horizontal',
        slidesPerView: 3,
        mousewheel: true,
        parallax: true,
        speed: 600,
        // Responsive breakpoints
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 160
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 140
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 45
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 45
            }


        }



    });

    //스크롤이 움직였을때 header 배경 나타나기
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        var ww = $(window).width();

        if (sc == 0) {

            //quick menu 위치
            $('div.quick').css({
                display: 'none'
            });
            $('div.quick').removeClass('menu--open');
            $('div.quick').addClass('menu--closed');



            //header
            $('header.cf').css({
                background: 'rgba(0,0,0,0.3)',
                boxShadow: '0 10px 10px 5px rgba(0,0,0,0)'
            });

            $('header > div.logo a').css('background-image', 'url(' + '../img/logo_w.png' + ')');
            $('nav.nav01 ul.menu li a.menu_tit').css('color', '#fff');
			$('header ul.in_nav_login li a').css({
                borderColor: '#fff',
                color: '#fff'
            });
            $('div.btn_nav div.line').css('background', '#fff');

            //header 마우스 오버시
            $('header.cf').hover(function () {
                $('header.cf').css({
                    background: 'rgba(255,255,255)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                });
                $('header > div.logo a').css('background-image', 'url(' + '../img/logo_b.png' + ')');
                $('nav.nav01 ul.menu li a.menu_tit').css('color', '#000');
                $('header ul.in_nav_login li a').css({
                    borderColor: '#000',
                    color: '#000'
                });
                $('div.btn_nav div.line').css('background', '#000');
            }, function () {
                $('header.cf').css({
                    background: 'rgba(0,0,0,0.3)',
                    boxShadow: '0 10px 10px 5px rgba(0,0,0,0)'
                });

                $('header > div.logo a').css('background-image', 'url(' + '../img/logo_w.png' + ')');
                $('nav.nav01 ul.menu li a.menu_tit').css('color', '#fff');
                $('header ul.in_nav_login li a').css({
                    borderColor: '#fff',
                    color: '#fff'
                });
                $('div.btn_nav div.line').css('background', '#fff');

            });

        } else if (sc > 0) {
            //quick menu 위치
            if (ww > 1024) {
                $('div.quick').css('display', 'block');
                $('div.quick').animate({
                    opacity: '1'
                }, 1000, 'linear');
                $('div.quick').css('top', '50%');
            }


            //header
            $('header.cf').css({
                background: '#fff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            });
            $('header > div.logo a').css('background-image', 'url(' + '../img/logo_b.png' + ')');
            $('nav.nav01 ul.menu li a.menu_tit').css('color', '#000');
            $('header ul.in_nav_login li a').css({
                borderColor: '#000',
                color: '#000'
            });
            $('div.btn_nav div.line').css('background', '#000');
            //header 마우스 오버시
            $('header.cf').hover(function () {
                $('header.cf').css({
                    background: '#fff',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                });
                $('header > div.logo a').css('background-image', 'url(' + '../img/logo_b.png' + ')');
                $('nav.nav01 ul.menu li a.menu_tit').css('color', '#000');
                $('header ul.in_nav_login li a').css({
                borderColor: '#000',
                color: '#000'
            });
                $('div.btn_nav div.line').css('background', '#000');
            });

        }

    }); //scroll_end

    //header 변경 스타일
    function header_2() {
        $('header.cf').css({
            background: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        });
        $('header > div.logo a').css('background-image', 'url(' + '../img/logo_b.png' + ')');
        $('nav.nav01 ul.menu li a.menu_tit').css('color', '#000');
         $('header ul.in_nav_login li a').css({
            borderColor: '#000',
            color: '#000'
        });
        $('div.btn_nav div.line').css('background', '#000');
    }


    $('header.cf').hover(function () {
        header_2();
        $('header.cf').css({
            background: 'rgba(255,255,255)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        });
        $('header > div.logo a').css('background-image', 'url(' + '../img/logo_b.png' + ')');
        $('nav.nav01 ul.menu li a.menu_tit').css('color', '#000');
         $('header ul.in_nav_login li a').css({
            borderColor: '#000',
            color: '#000'
        });
        $('div.btn_nav div.line').css('background', '#000');
    }, function () {
        $('header.cf').css({
            background: 'rgba(0,0,0,0.3)',
            boxShadow: '0 10px 10px 5px rgba(0,0,0,0)'
        });

        $('header > div.logo a').css('background-image', 'url(' + '../img/logo_w.png' + ')');
        $('nav.nav01 ul.menu li a.menu_tit').css('color', '#fff');
        $('header ul.in_nav_login li a').css({
            borderColor: '#fff',
            color: '#fff'
        });
        $('div.btn_nav div.line').css('background', '#fff');

    });



    //product
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
    });


    //슬라이드
    $('.slider-for').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        customPaging: function (slick, index) {
            return '<a>' + '0' + (index + 1) + '</a>';
        },
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1440,
                settings: {

                    slidesToShow: 3
                }
    },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    focusOnSelect: true
                }
    },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    focusOnSelect: true
                }
    }

  ]

    });

    //현재슬라이드일때 화살표 활성화
    $('div.slick-demo').hover(function () {
        var $this = $(this);

        $this.find('section.product div.container div.r_pro span.the-arrow').addClass('arrow_on');
        $this.find('.the-arrow.-left >.shaft').addClass('left_on');
        $this.find('.the-arrow.-right >.shaft').addClass('right_on');
        $this.find('.the-arrow > .shaft').addClass('shaft_on');
        $this.find('a').css({
            color: '#b333e3'
        });
    }, function () {
        var $this = $(this);

        $this.find('section.product div.container div.r_pro span.the-arrow').removeClass('arrow_on');
        $this.find('.the-arrow.-left >.shaft').removeClass('left_on');
        $this.find('.the-arrow.-right >.shaft').removeClass('right_on');
        $this.find('.the-arrow > .shaft').removeClass('shaft_on');
        $this.find('a').css({
            color: '#ababab'
        });
    });



    //contact
    //scrollout
    ScrollOut({
        targets: "section.contact div.contact_content div.t_contact div.t_info,section.contact div.container div.t_contact div.btn_n",
        threshold: 0.5,
        once: false
    });


    //service
    ScrollOut({
        targets: "section.service div.container h2.title,section div.container ul.item_wrap01 li.item",
        threshold: 0.5,
        once: false
    });

    //tabcon-01 scrollout 활성화
    var el2 = document.querySelector("section.service div.service_content div#tabcon-01>div.video");
    el2.setAttribute('data-scroll', '');

    ScrollOut({
        onShown: function (el2) {
            // remove the class
            el2.classList.remove("animated", "slideInUp");

            // force reflow
            void el2.offsetWidth;

            // re-add the animated cl
            el2.classList.add("animated", "slideInUp");
        }
    });

    var el3 = document.querySelector("section.service div.service_content ul.item_wrap li.item");
    el3.setAttribute('data-scroll', '');

    ScrollOut({
        onShown: function (el3) {
            // remove the class
            el3.classList.remove("animated", "slideInDown");

            // force reflow
            void el3.offsetWidth;

            // re-add the animated cl
            el3.classList.add("animated", "slideInDown");
        }
    });


    //tabcon-01 클릭시 content scrollout 비활성화
    $('section.service div.container div.tabmenu-wrap div.tab-nav span.nav').click(function () {
        var el2 = document.querySelector("section.service div.service_content div#tabcon-01>div.video");
        el2.setAttribute('data-scroll', '');
        ScrollOut({
            onShown: function (el2) {
                // remove the class
                el2.classList.remove("animated");
            },
            onChange: function (el2) {
                // remove the class
                el2.classList.remove("slideInDown");
            }
        });

        var el3 = document.querySelector("section.service div.service_content ul.item_wrap li.item");
        el3.setAttribute('data-scroll', '');
        ScrollOut({
            onShown: function (el3) {
                // remove the class
                el3.classList.remove("animated");
            },
            onChange: function (el2) {
                // remove the class
                el3.classList.add("slideInDown");
            }
        });
    });



    //homepage
    ScrollOut({
        targets: "section.homepage div.homepage_content h2.title,section.homepage div.homepage_content div.video,section.homepage div.homepage_content ul.item_wrap li.item",
        once: false
    });



    //제작사례
    //scrollout
    ScrollOut({
        targets: "section.example div.container h2.title,section.example div.container div.tabmenu-wrap div.tab-con div.con-box div.scroll",
        threshold: 0.5,
        once: false
    });

    //tabcontent
    $(function () {
        var ww = $(window).width();

        if (ww >= 1024) {
            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo").slice(0, 6).show();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo").slice(0, 6).show();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo").slice(0, 6).show();
        } else if (ww < 1024 && ww >= 600) {
            $("section.example div.container div.tabmenu-wrap div.tab-con div.demo").slice(0, 6).hide();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo").slice(0, 4).show();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo").slice(0, 4).show();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo").slice(0, 4).show();
        } else if (ww < 600) {
            $("section.example div.container div.tabmenu-wrap div.tab-con div.demo").slice(0, 6).hide();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo").slice(0, 2).show();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo").slice(0, 2).show();

            $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo").slice(0, 2).show();
        }

        //tabcon-05 더보기 
        $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
            e.preventDefault();
            if (ww >= 1280) {
                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo:hidden").slice(0, 3).slideDown();
            }


            if ($("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo:hidden").length == 0) {
                $("#load").fadeOut('slow');

            }
            $('html,body').animate({
                scrollTop: $(this).offset().top - 600
            }, 300);


        });

        //tabcon-06 더보기 
        $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
            e.preventDefault();
            if (ww >= 1280) {
                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo:hidden").slice(0, 3).slideDown();
            }
            if ($("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top - 600
            }, 300);


        });

        //tabcon-07 더보기 
        $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
            e.preventDefault();
            if (ww >= 1280) {
                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo:hidden").slice(0, 3).slideDown();
            }

            if ($("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top - 600
            }, 300);
        });
    });


    //clinic
    //clinic scrollout
    ScrollOut({
        targets: "section.clinic div.clinic_content h2.title,section.clinic div.clinic_content p.text,section.clinic div.clinic_content div.btn_n a",
        threshold: 0.5,
        once: false
    });
    $("section.clinic div.clinic_content div.btn_n a").hover(function () {
        $('section.clinic div.clinic_bg').css({
            transform: 'scale(1.2)'
        });
    }, function () {
        $('section.clinic div.clinic_bg').css({
            transform: 'scale(1.0)'
        });
    });


    //data
    //data scrollout
    ScrollOut({
        targets: "section.data div.data_content ul",
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

    var el2 = document.querySelector("section.data div.data_content>ul");
    el2.setAttribute('data-scroll', '');

    ScrollOut({
        onShown: function (el2) {
            // remove the class
            count();


        }
    });


    $(window).resize(function () {
        //tabcontent
        $(function () {
            var ww = $(window).width();

            if (ww >= 1024) {
                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo").slice(0, 6).show();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo").slice(0, 6).show();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo").slice(0, 6).show();
            } else if (ww < 1024 && ww >= 600) {
                $("section.example div.container div.tabmenu-wrap div.tab-con div.demo").slice(0, 6).hide();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo").slice(0, 4).show();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo").slice(0, 4).show();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo").slice(0, 4).show();
            } else if (ww < 600) {
                $("section.example div.container div.tabmenu-wrap div.tab-con div.demo").slice(0, 6).hide();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo").slice(0, 2).show();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo").slice(0, 2).show();

                $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo").slice(0, 2).show();
            }

            //tabcon-05 더보기 
            $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
                e.preventDefault();
                if (ww >= 1280) {
                    $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-05 div.demo:hidden").slice(0, 3).slideDown();
                }




            });

            //tabcon-06 더보기 
            $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
                e.preventDefault();
                if (ww >= 1280) {
                    $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-06 div.demo:hidden").slice(0, 3).slideDown();
                }


            });

            //tabcon-07 더보기 
            $("section.example div.container div.tabmenu-wrap div.tab-con div.btn a.loadMore").on('click', function (e) {
                e.preventDefault();
                if (ww >= 1280) {
                    $("section.example div.container div.tabmenu-wrap div.tab-con div#tabcon-07 div.demo:hidden").slice(0, 3).slideDown();
                }


            });
        });

    }); //resize_end


}); //end
