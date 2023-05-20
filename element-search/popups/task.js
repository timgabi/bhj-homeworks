const showSuccess = document.querySelector('.show-success');  
const modalWindow = document.getElementById('modal_main');  
const modalSuccess = document.getElementById ('modal_success');  
const btnSuccess = document.querySelector('.btn_success');

window.onload = function () {
    modalWindow.classList.add('modal_active'); 
};

showSuccess.onclick = function (evt) {
  evt.preventDefault();
  modalWindow.classList.toggle('modal_active');
  modalSuccess.classList.toggle('modal_active');
};

btnSuccess.onclick = function (evt) {
  evt.preventDefault();
  modalSuccess.classList.toggle('modal_active');
  modalWindow.classList.toggle('modal_active');
};

const modalClose = document.querySelectorAll('div.modal__close');
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function (evt) {
        evt.preventDefault();
        modalWindow.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
};