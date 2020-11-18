'use strict'
//Кнопка на вверх
const button = () =>{
  document.addEventListener('DOMContentLoaded', () => {
    let buttonUp = document.querySelector('#button-up');
    window.onscroll = () =>{
        if (window.pageYOffset > 580) {
          buttonUp.style.display = 'block'
        } else {
            buttonUp.style.display = 'none'
        }
    }
    // плавный скролл наверх 
    buttonUp.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
  });
};
button();

//Бургер-меню
const burger = () =>{
  const menuToggle = document.querySelector('#menu-togle'),
        menu = document.querySelector('.menu');
  
        document.addEventListener('click', (elem) =>{
          if(elem.target.closest('#menu-togle')){
            menuToggle.classList.toggle('menu-icon-active');
            menu.classList.toggle('mobile-nav--active');
            menu.style.display = 'block';
          }else if(elem.target.closest('li>a') || !elem.target.closest('menu')){
            menuToggle.classList.toggle('menu-icon-active');
            menu.classList.toggle('mobile-nav--active');
            menu.style.display = 'none';
          }
        });    
};
burger();