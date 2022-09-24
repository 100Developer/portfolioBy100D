$(document).ready(function () {
  var ww = $(window).width();
  //Header
  //스크롤이 움직였을때 header 배경 나타나기

  $(window).scroll(function () {
    var sc = $(window).scrollTop();

    if (sc == 0) {
      $('header.cf').css({
        background: 'transparent',
        boxShadow: '0 10px 10px 5px rgba(0,0,0,0)',
      });

      $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
      $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
      $('header ul.in_nav_login li a').css({
        borderColor: '#fff',
        color: '#fff',
      });
      $('div.btn_nav').css('background', 'transparent');

      //header 마우스 오버시
      $('header.cf').hover(
        function () {
          $('header.cf').css({
            background: '#fff',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          });
          $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
          $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
          $('header ul.in_nav_login li a').css({
            borderColor: '#000',
            color: '#000',
          });
          $('div.btn_nav').css('background', '#00230e5');
        },
        function () {
          $('header.cf').css({
            background: 'transparent',
            boxShadow: '0 10px 10px 5px rgba(0,0,0,0)',
          });

          $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
          $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
          $('header ul.in_nav_login li a').css({
            borderColor: '#fff',
            color: '#fff',
          });
          $('div.btn_nav').css('background', 'transparent');
        }
      );
    } else if (sc > 0) {
      $('header.cf').css({
        background: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      });
      $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
      $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
      $('header ul.in_nav_login li a').css({
        borderColor: '#000',
        color: '#000',
      });
      $('div.btn_nav').css('background', '#0230e5');
      //header 마우스 오버시
      $('header.cf').hover(function () {
        $('header.cf').css({
          background: '#fff',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        });
        $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
        $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
        $('header ul.in_nav_login li a').css({
          borderColor: '#000',
          color: '#000',
        });
        $('div.btn_nav').css('background', '#0230e5');
      });
    }
  }); //scroll_end

  //header 변경 스타일
  function header_2() {
    $('header.cf').css({
      background: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    });
    $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
    $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
    $('header ul.in_nav_login li a').css({
      borderColor: '#000',
      color: '#000',
    });
    $('div.btn_nav').css('background', '#0230e5');
  }

  $('header.cf').hover(
    function () {
      header_2();
      $('header.cf').css({
        background: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      });
      $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
      $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
      $('header ul.in_nav_login li a').css({
        borderColor: '#000',
        color: '#000',
      });
      $('div.btn_nav').css('background', '#0230e5');
    },
    function () {
      $('header.cf').css({
        background: 'transparent',
        boxShadow: '0 10px 10px 5px rgba(0,0,0,0)',
      });

      $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
      $('nav.nav01 ul.menu li a.menu_tit').css('color', '#fff');
      $('header ul.in_nav_login li a').css({
        borderColor: '#fff',
        color: '#fff',
      });
      $('div.btn_nav').css('background', 'transparent');
    }
  );

  //product
  //scrollout
  ScrollOut({
    targets:
      'section.product div.product_content h2.pro_tit,section.product div.product_content p.pro_text,section.product div.product_content ul.item_wrap li.item',
    threshold: 0.5,
    once: false,
  });

  //제품/기능에 마우스 오버했을때
  $('section div.container ul.item_wrap li.item').hover(
    function () {
      $('section div.container ul.item_wrap li.item div.item_area span.more', this).animate(
        {
          backgroundColor: '#8833e3',
          color: '#fff',
        },
        100
      );
    },
    function () {
      $('section div.container ul.item_wrap li.item div.item_area span.more', this).animate(
        {
          backgroundColor: '#fff',
          color: '#8833e3',
        },
        100
      );
    }
  );

  //partner
  //scrollout
  ScrollOut({
    targets: 'section div.partner_content h2.par_tit,section div.partner_content p.par_text',
    threshold: 0.5,
    once: false,
  });

  //웹클리닉 배너
  //scrollout
  ScrollOut({
    targets: 'section.clinic div.clinic_content h2.title,section.clinic div.clinic_content p.text,section.clinic div.clinic_content div.btn_c a.try',
    threshold: 0.5,
    once: false,
  });

  //웹클리닉 버튼 마우스 오버했을때
  $('.clinic_content .try').hover(
    function () {
      $('.clinic .clinic_bg').css({
        transform: 'scale(1.2)',
      });
      $('.clinic_content .try>a').css({
        color: '#000',
      });
    },
    function () {
      $('.clinic .clinic_bg').css({
        transform: 'scale(1.0)',
      });
      $('.clinic_content .try>a').css({
        color: '#767676',
      });
    }
  );

  //System
  //scrollout
  ScrollOut({
    targets: 'section.system div.system_content h2.sys_tit,section.system div.system_content p.sys_text,section.system div.tab_con',
    threshold: 0.5,
    once: false,
  });

  //service
  //scrollout
  ScrollOut({
    targets: 'section.service div.service_content h2.ser_tit,section.service div.service_content p.ser_text',
    threshold: 0.5,
    once: false,
  });
  var ww = $('section.service').width();
  $('section.service div.service_content div#tab1_con').css({
    minWidth: ww,
  });

  //homepage
  ScrollOut({
    targets: 'section.homepage div.homepage_content ul.item_wrap li.item',
    threshold: 0.5,
    once: false,
  });

  //scrollout
  ScrollOut({
    targets:
      'section.b_product div.b_product_content div.b_product_wrap h2.b_pro_tit,section.b_product div.b_product_content div.b_product_wrap p.b_pro_text,section.b_product div.b_product_wrap a',
    threshold: 0.5,
    once: false,
  });

  $(window).resize(function () {
    var sw = $('section.service').width();
    $('section.service div.service_content div#tab1_con').css({
      minWidth: sw,
    });
  }); //resize_end*/
}); //end

//product
//scrollout
ScrollOut({
  targets:
    'section.product div.product_content h2.pro_tit,section.product div.product_content p.pro_text,section.product div.product_content ul.item_wrap li.item',
  threshold: 0.5,
  once: false,
});
