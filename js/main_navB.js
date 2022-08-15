// hamburger
(function() {
  
  var Menu = (function() {
    var burger = document.querySelector(".btn_nav");
    var menu = document.querySelector(".in_menu");
    var menuList = document.querySelector(".menu_list");
    var brand = document.querySelector(".menu_con");
    var menuItems = document.querySelectorAll(".item");
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add("in_menu_active");
        menuList.classList.add("menu_list_active");
        brand.classList.add("menu_con_active");
        burger.classList.add("btn_nav_close");
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add("item_active");
        }
        
        active = true;
      } else {
        menu.classList.remove("in_menu_active");
        menuList.classList.remove("menu_list_active");
        brand.classList.remove("menu_con_active");
        burger.classList.remove("btn_nav_close");
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove("item_active");
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      burger.addEventListener("click", toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
  
}());