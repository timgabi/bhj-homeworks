'use strict';
const menu__link = document.querySelectorAll('.menu__link');
const menu = document.querySelectorAll('.menu_sub');

   for (let i = 0; i < menu__link.length; i++) {
      menu__link[i].onclick = function (evt) {        
         if (menu__link.closest = menu) {
            for (let i = 0; i < menu.length; i++) {
               evt.preventDefault();
               menu[i].classList.toggle('menu_active');
            };
         };
      };
   };
