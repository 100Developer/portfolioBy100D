//partner
//logo슬라이드
$('.slider-logo').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                swipe: true
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                swipe: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                swipe: true
            }
        }]
});
//초기화
$('.slider-logo').slick('setPosition');


//clinic
$('.bubble').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
});

//system
//상담관리시스템
$('.slider-sys1').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                swipe: true
            }
        }, {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                swipe: true
            }
        }

                ]
});

//학사시스템
$('.slider-sys2').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }, {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            swipe: true
        }
        }, {
        breakpoint: 601,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: true
        }
        }]
});
//안전관리시스템
$('.slider-sys3').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }, {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            swipe: true
        }
        }, {
        breakpoint: 601,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: true
        }
        }]
});

//service
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider-nav',
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: true,
            centerMode: true,
            centerPadding: '3rem',
            swipe: true,
            swipeToSlide: true
        }
        }
			]
});

$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }]
});

// Manually refresh positioning of slick
$('#tab1').click(function () {
    $('.slider-for,.slider-nav').slick('setPosition');
});

$('#tab').click(function () {
    $('.slider-sys1,.slider-sys2,.slider-sys3').slick('setPosition');
});
