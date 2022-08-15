// tabmenu - 강사 업무 지원 기능
$(document).on("click", ".tab_01 .t_menu li", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".tab_01 .t_menu li").removeClass("active");
		$(".tab_01 .t_con_wrap li").removeClass("active");

		$(this).addClass("active");
		$(".tab_01 .t_con_wrap").find("li:eq(" + numberIndex + ")").addClass("active");		
	}
});


//tabmenu - 학사행정 업무 기준 시스템 사용
$(document).on("click", ".tab_02 .t_menu li", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".tab_02 .t_menu li").removeClass("active");
		$(".tab_02 .t_con_wrap li").removeClass("active");

		$(this).addClass("active");
		$(".tab_02 .t_con_wrap").find("li:eq(" + numberIndex + ")").addClass("active");		
	}
});

// modal
$(".mo_btn1").click(function(e) {
  $(".tab_modal1").addClass("active");
  e.preventDefault();
});

$(".tab_modal1").click(function(e) {
  $(".tab_modal1").removeClass("active");
  e.preventDefault();
});

$(".mo_btn2").click(function(e) {
  $(".tab_modal2").addClass("active");
  e.preventDefault();
});

$(".tab_modal2").click(function(e) {
  $(".tab_modal2").removeClass("active");
  e.preventDefault();
});

$(".mo_btn5").click(function(e) {
  $(".tab_modal5").addClass("active");
  e.preventDefault();
});

$(".tab_modal5").click(function(e) {
  $(".tab_modal5").removeClass("active");
  e.preventDefault();
});

$(".mo_btn6").click(function(e) {
  $(".tab_modal6").addClass("active");
  e.preventDefault();
});

$(".tab_modal6").click(function(e) {
  $(".tab_modal6").removeClass("active");
  e.preventDefault();
});


// 3D slider
"use strict";

$(function () {
    
    var interval;
    var timeSpeed = 4000;
    var amount_li = $(".slides").find("li");
    var leng = 1;
    var dragStart;
    var dragEnd;
    
    function startSlider() {
        interval = setInterval(function () {
            //console.log(leng);
            if(leng++ === amount_li.length) leng = 1;
            
            $("#range").val(leng);
            
            $(".slides li:first").before($(".slides li:last")); 
        }, timeSpeed);
    }
    
    function pauseSlider() {
        clearInterval(interval);
    }
    
    startSlider();
    
    function reset_slide() {
        pauseSlider();
        startSlider();
    }
    
    
    $(".slides li").on("dragstart", function( event ) {
        dragStart = event.pageX;
    });
    
    $(".slides li").on("dragend", function( event ) {
        dragEnd = event.pageX;
        if(dragStart > dragEnd) {
            $(".slides li:last").after($(".slides li:first"));
            if(leng-- === 1) leng = amount_li.length;
            $("#range").val(leng);
        }
        else {
            $(".slides li:first").before($(".slides li:last")); 
            if(leng++ === amount_li.length) leng = 1;
            $("#range").val(leng);
        }
        reset_slide();
    });
    
    
    
    $(".btn-left").on("click", function() {
        $(".slides li:last").after($(".slides li:first"));
        if(leng-- === 1) leng = amount_li.length;
        $("#range").val(leng);
        
        reset_slide();
    });
    
    $(".btn-right").on("click", function() {
        $(".slides li:first").before($(".slides li:last")); 
        if(leng++ === amount_li.length) leng = 1;
        $("#range").val(leng);
        
        reset_slide();
    });
    
    $(".slides li").on("click", function() {
       console.log($(this));
    });
});