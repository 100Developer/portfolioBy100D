var $scrolled = false;
$('.js-animate-on-scroll').bind('showelement hideelement');
$(window).on('scroll', function() {
  var y = $(document).scrollTop();
  var eventh;
  
  if (y > 150) {
    $('.ft').html('reached');
    eventh = 'showelement';
  } else {
    $('.ft').html('nope');
    eventh = 'hideelement';
  }
  
  $('.js-animate-on-scroll').trigger(eventh);
});

$('.js-animate-on-scroll')
  .on('showelement', function() {
    if(!$(this).is(':visible')) {
      $(this).velocity('stop');
  		$(this).velocity('fadeIn');	
    }
	})
  .on('hideelement', function() {
    if($(this).is(':visible')) {
      $(this).velocity('stop');
  		$(this).velocity('fadeOut');	
    }
});
