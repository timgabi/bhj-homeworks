'use strict';
const menuSub = document.querySelectorAll('.menu_sub');

menuSub.forEach(function(e) {
   let link = e.previousElementSibling;
   link.onclick = function(event) {
      event.preventDefault();
      e.classList.toggle('menu_active');
   }
})