'use strict';

$(function () {
    
    var interval;
    var timeSpeed = 4000;
    var amount_li = $("#slides").find("li");
    var leng = 1;
    var dragStart;
    var dragEnd;
    
    function startSlider() {
        interval = setInterval(function () {
            //console.log(leng);
            if(leng++ === amount_li.length) leng = 1;
            
            $("#range").val(leng);
            
            $('#slides li:first').before($('#slides li:last')); 
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
    
    
    $('#slides li').on('dragstart', function( event ) {
        dragStart = event.pageX;
    });
    
    $('#slides li').on('dragend', function( event ) {
        dragEnd = event.pageX;
        if(dragStart > dragEnd) {
            $('#slides li:last').after($('#slides li:first'));
            if(leng-- === 1) leng = amount_li.length;
            $("#range").val(leng);
        }
        else {
            $('#slides li:first').before($('#slides li:last')); 
            if(leng++ === amount_li.length) leng = 1;
            $("#range").val(leng);
        }
        reset_slide();
    });
    
    
    
    $('.btn-left').on('click', function() {
        $('#slides li:last').after($('#slides li:first'));
        if(leng-- === 1) leng = amount_li.length;
        $("#range").val(leng);
        
        reset_slide();
    });
    
    $('.btn-right').on('click', function() {
        $('#slides li:first').before($('#slides li:last')); 
        if(leng++ === amount_li.length) leng = 1;
        $("#range").val(leng);
        
        reset_slide();
    });
    
    $('#slides li').on('click', function() {
       console.log($(this));
    });

    $("#range").attr("min", 1).attr("max", amount_li.length);
    
    $("#range").on('mousedown', function() {
        $("#range").on('input', function() {
            $('#slides li:last').after($('#slides li:first'));
            leng = $(this).val();
            reset_slide();
        });
    });
});