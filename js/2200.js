// tabmenu
$(document).on("click", ".tab_wrap .t_menu li", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".tab_wrap .t_menu li").removeClass("active");
		$(".tab_wrap .t_con_wrap li").removeClass("active");

		$(this).addClass("active");
		$(".tab_wrap .t_con_wrap").find("li:eq(" + numberIndex + ")").addClass("active");		
	}
});

$(document).on("click", ".tab_wrap2 .t_menu li", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".tab_wrap2 .t_menu li").removeClass("active");
		$(".tab_wrap2 .t_con_wrap li").removeClass("active");

		$(this).addClass("active");
		$(".tab_wrap2 .t_con_wrap").find("li:eq(" + numberIndex + ")").addClass("active");		
	}
});

$(document).on("click", ".tab_wrap3 .t_menu li", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".tab_wrap3 .t_menu li").removeClass("active");
		$(".tab_wrap3 .t_con_wrap li").removeClass("active");

		$(this).addClass("active");
		$(".tab_wrap3 .t_con_wrap").find("li:eq(" + numberIndex + ")").addClass("active");		
	}
});