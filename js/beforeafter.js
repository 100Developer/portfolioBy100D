(function($) {
  $(function() {
    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    $('.before-after').each(function() {
      var $container = $(this),
          $before = $container.find('.before'),
          $after = $container.find('.after'),
          $handle = $container.find('.handle');
      
      var maxX = $container.outerWidth(),
          offsetX = $container.offset().left,
          startX = 0;
      
      var touchstart, touchmove, touchend;
      var mousemove = function(e) {
        e.preventDefault();
        var curX = e.clientX - offsetX,
            diff = startX - curX,
            curPos = (curX / maxX) * 100;
        if ( curPos > 100 ) {
          curPos = 100;
        }
        if ( curPos < 0 ) {
          curPos = 0;
        }
        $before.css({right: (100 - curPos) + "%"});
        $handle.css({left: curPos+"%"});
      };
      var mouseup = function(e) {
        e.preventDefault();
        if ( supportsTouch ) {
          $(document).off('touchmove', touchmove);
          $(document).off('touchend', touchend);
        } else {
          $(document).off('mousemove', mousemove);
          $(document).off('mouseup', mouseup);
        }
      };
      var mousedown = function(e) {
        e.preventDefault();
        startX = e.clientX - offsetX;
        if ( supportsTouch ) {
          $(document).on('touchmove', touchmove);
          $(document).on('touchend', touchend);
        } else {
          $(document).on('mousemove', mousemove);
          $(document).on('mouseup', mouseup);
        }
      };
      
      touchstart = function(e) {
        console.log(e);
        mousedown({preventDefault: e.preventDefault, clientX: e.originalEvent.changedTouches[0].pageX});
      };
      touchmove = function(e) {
        mousemove({preventDefault: e.preventDefault, clientX: e.originalEvent.changedTouches[0].pageX});
      };
      touchend = function(e) {
        mouseup({preventDefault: e.preventDefault, clientX: e.originalEvent.changedTouches[0].pageX});
      };
      if ( supportsTouch ) {
        $handle.on('touchstart', touchstart);
      } else {
        $handle.on('mousedown', mousedown);
      }
    });
  });
})(jQuery);