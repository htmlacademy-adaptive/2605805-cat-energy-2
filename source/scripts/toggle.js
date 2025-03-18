'use strict';

(function () {

  // Mobile menu

  var nav = document.querySelector('.header__wrapper');
  var burger = nav.querySelector('.header__burger');
  var docWidth = document.body.clientWidth;
  var tabletWidth = 768;


  nav.classList.remove('header__wrapper--nojs');

  function burgerClickHandler() {
    nav.classList.toggle('header__wrapper--show');
  }

  burger.addEventListener('click', burgerClickHandler);

  // Progress block

  var progress = document.querySelector('.demo__progress');

  if (progress) {
    var imgBefore = progress.querySelector('.demo__illustration--before');
    var imgAfter = progress.querySelector('.demo__illustration--after');
    var switcher = progress.querySelector('.demo__image-switcher');
    function updateView(value) {
      imgBefore.style.width = value + '%';
      imgAfter.style.width = (100 - value) + '%';
      switcher.style.left = value + '%';
    }

    let isDragging = false;

    switcher.addEventListener('mousedown', function (event) {
      isDragging = true;
      document.body.style.userSelect = 'none'; // Отключаем выделение текста
    });

    document.addEventListener('mouseup', function () {
      isDragging = false;
      document.body.style.userSelect = ''; // Включаем обратно
    });

    document.addEventListener('mousemove', function (event) {
      if (isDragging) {
        let rect = progress.querySelector('.demo__image-wrapper').getBoundingClientRect();
        let pos = ((event.clientX - rect.left) / rect.width) * 100;
        pos = Math.max(0, Math.min(100, pos)); // Ограничиваем в пределах 0–100%
        updateView(pos);
      }
    });
  }



})();

