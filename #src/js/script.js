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
            menuToggle.classList.add('menu-icon-active');
            menu.classList.add('menu--active');
          }else if(elem.target.closest('li>a') || !elem.target.closest('.menu')){
            menuToggle.classList.remove('menu-icon-active');
            menu.classList.remove('menu--active');
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

//карточки
const sort = () =>{
  const sortPrice = document.querySelector('.price'),
        arrow = document.querySelectorAll('.arrow');

  arrow.forEach((elem) =>{
    sortPrice.addEventListener('click', (event)=>{
      if(event.target.closest('.price')){
        elem.classList.toggle('arrowActive')
      }
    });
  });

  let bool = true;
  sortPrice.addEventListener('click', () => {
    if (bool) {
        sort('up');
        bool = false;
    }
  });

  function sort(param){
    let cards = document.querySelector('.cards');
    for (let i = 0; i < cards.children.length; i++) {
      for (let j = i; j < cards.children.length; j++) {
        if (param === 'up' && +cards.children[i].getAttribute('data-price') > +cards.children[j].getAttribute('data-price')) {
          let replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
          inserAfter(replacedNode, cards.children[i]);
        }
      }
    }
  }
  function inserAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

};
sort()

//валидация e-mail
const validateEmail = () =>{
  const input = document.querySelector('input');

  input.addEventListener('input', (e) =>{
    let target = e.target;
      if(target.matches('#footer-user-email')){
        target.value = target.value.replace(/\s/g, ''); // убираем пробелы
      }
  });
}
validateEmail();
});