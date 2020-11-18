window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
'use strict'
//Кнопка на вверх
const button = () =>{
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
};
button();

//Бургер-меню
const burger = () =>{
  const menuToggle = document.querySelector('#menu-togle'),
        menu = document.querySelector('.menu');
  
        document.addEventListener('click', (elem) =>{
          if(elem.target.closest('#menu-togle') ){
            menuToggle.classList.toggle('menu-icon-active');
            menu.classList.toggle('menu--active');
          }
          
        });    
};
burger();

//heart
const heart = () =>{
  const heartPush = document.querySelectorAll('.heart');

  heartPush.forEach((elem) =>{
    elem.addEventListener('click', (event)=>{
      if(event.target.matches('.heart')){
        elem.classList.toggle('heartActive')
      }
    });
  });
};
heart();

});