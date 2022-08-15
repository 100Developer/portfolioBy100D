//홈페이지제작
jssor_slider4_init = function () {
     var options = {
         $AutoPlay: 1,
         $Idle: 4000,
         $SlideDuration: 500,
         $DragOrientation: 3,
         $UISearchMode: 0,
         $ThumbnailNavigatorOptions: {
             $Class: $JssorThumbnailNavigator$,
             $ChanceToShow: 2,
             $Loop: 1,
             $SpacingX: 3,
             $SpacingY: 3,
             $ArrowNavigatorOptions: {
                 $Class: $JssorArrowNavigator$,
                 $ChanceToShow: 2,
                 $Steps: 1
             }
         }
         
     };

     var jssor_slider4 = new $JssorSlider$('slider4_container', options);

     /*#region responsive code begin*/
     //you can remove responsive code if you don't want the slider scales while window resizing
     function ScaleSlider() {
         var parentWidth = jssor_slider4.$Elmt.parentNode.clientWidth;
         if (parentWidth)
             jssor_slider4.$ScaleWidth(Math.min(parentWidth, 690));
         else
             $Jssor$.$Delay(ScaleSlider, 30);
     }

     ScaleSlider();
     $Jssor$.$AddEvent(window, "load", ScaleSlider);
     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
     /*#endregion responsive code end*/
 };

jssor_slider4_init();

//컨설팅
jssor_slider5_init = function () {
     var options = {
         $AutoPlay: 1,
         $Idle: 4000,
         $SlideDuration: 500,
         $DragOrientation: 3,
         $UISearchMode: 0,
         $ThumbnailNavigatorOptions: {
             $Class: $JssorThumbnailNavigator$,
             $ChanceToShow: 2,
             $Loop: 1,
             $SpacingX: 3,
             $SpacingY: 3,
             $ArrowNavigatorOptions: {
                 $Class: $JssorArrowNavigator$,
                 $ChanceToShow: 2,
                 $Steps: 6
             }
         }
     };

     var jssor_slider5 = new $JssorSlider$('slider5_container', options);

     /*#region responsive code begin*/
     //you can remove responsive code if you don't want the slider scales while window resizing
     function ScaleSlider() {
         var parentWidth = jssor_slider5.$Elmt.parentNode.clientWidth;
         if (parentWidth)
             jssor_slider5.$ScaleWidth(Math.min(parentWidth, 720));
         else
             $Jssor$.$Delay(ScaleSlider, 30);
     }

     ScaleSlider();
     $Jssor$.$AddEvent(window, "load", ScaleSlider);

     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
     /*#endregion responsive code end*/
 };

jssor_slider5_init();

//온라인교육
jssor_slider6_init = function () {
     var options = {
         $AutoPlay: 1,
         $Idle: 4000,
         $SlideDuration: 500,
         $DragOrientation: 3,
         $UISearchMode: 0,
         $ThumbnailNavigatorOptions: {
             $Class: $JssorThumbnailNavigator$,
             $ChanceToShow: 2,
             $Loop: 1,
             $SpacingX: 3,
             $SpacingY: 3,
             $ArrowNavigatorOptions: {
                 $Class: $JssorArrowNavigator$,
                 $ChanceToShow: 2,
                 $Steps: 6
             }
         }
     };

     var jssor_slider6 = new $JssorSlider$('slider6_container', options);

     /*#region responsive code begin*/
     //you can remove responsive code if you don't want the slider scales while window resizing
     function ScaleSlider() {
         var parentWidth = jssor_slider6.$Elmt.parentNode.clientWidth;
         if (parentWidth)
             jssor_slider6.$ScaleWidth(Math.min(parentWidth, 720));
         else
             $Jssor$.$Delay(ScaleSlider, 30);
     }

     ScaleSlider();
     $Jssor$.$AddEvent(window, "load", ScaleSlider);

     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
     /*#endregion responsive code end*/
 };

jssor_slider6_init();