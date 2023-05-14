const myPhoto = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          myPhoto.width = 300;
          const value = +counter.textContent;
      	  counter.textContent = value + 1;
          break;      
        case 'mouseup':
          myPhoto.width = 200;         
          break;
      }
    }

  }

  let menu = new Menu();
  myPhoto.addEventListener('mousedown', menu);
  myPhoto.addEventListener('mouseup', menu);
