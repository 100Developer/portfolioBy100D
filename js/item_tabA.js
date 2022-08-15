 $(document).ready(function () {
     /*tabcon-01*/
     /*tabcon-01 item 활성화*/
     $('section.service div.container div.tabmenu-wrap div.tab-con div#tabcon-01').on("click", ".tab-a", function () {
         $(".tab-a").removeClass('nohover1');
         $(".tab-a").removeClass('active-a1');
         $(this).parent().find(".tab-a").addClass('active-a1');
         $(this).parent().find(".tab-a").addClass('nohover1');
     });


     /*tabcon-02*/
     /*tabcon-02 item 활성화*/
     $('section.service div.container div.tabmenu-wrap div.tab-con div#tabcon-02').on("click", ".tab-a", function () {
         $(".tab-a").removeClass('nohover2');
         $(".tab-a").removeClass('active-a2');
         $(this).parent().find(".tab-a").addClass('active-a2');
         $(this).parent().find(".tab-a").addClass('nohover2');
     });


     /*tabcon-03*/ 
     /*tabcon-03 item 활성화*/
     $('section.service div.container div.tabmenu-wrap div.tab-con div#tabcon-03').on("click", ".tab-a", function () {
         $(".tab-a").removeClass('nohover3');
         $(".tab-a").removeClass('active-a3');
         $(this).parent().find(".tab-a").addClass('active-a3');
         $(this).parent().find(".tab-a").addClass('nohover3');
     });


     /*tabcon-04*/ 
     /*tabcon-04 item 활성화*/
     $('section.service div.container div.tabmenu-wrap div.tab-con div#tabcon-04').on("click", ".tab-a", function () {
         $(".tab-a").removeClass('nohover4');
         $(".tab-a").removeClass('active-a4');
         $(this).parent().find(".tab-a").addClass('active-a4');
         $(this).parent().find(".tab-a").addClass('nohover4');
     });


     /*homepage*/
     /*homepage item 활성화*/
     $('section.homepage div.container div.in_content div.in_tab div.tab-menu ul.item_wrap li.item').on("click", ".tab-a", function () {
         $(".tab-a").removeClass('active-a5');
         $(".tab-a").removeClass('nohover5');
         $(this).parent().find(".tab-a").addClass('active-a5');
         $(this).parent().find(".tab-a").addClass('nohover5');
     });




 });
