// const App = {
//   productModal: null,
//   testModal: null,
// };

document.addEventListener('DOMContentLoaded', function() {

  // AOS.init({
  //   delay: 300
  // });

  /**
   * Resize Browser Window
   */

  window.addEventListener('resize', () => {
    document.querySelectorAll('.opened')
      .forEach(el => {
        el.classList.remove('opened')
      });
  });

  /*******************************
   * Example
   ******************************/
  // (function() {
  //   const example = document.querySelector('.example');
  //
  //   if (!example) return;
  //   new Example(opt);
  // })();

  /***********************************
  * Language
  ***********************************/

  (function() {
    const btnsLang = document.querySelectorAll('[data-toggle-lang]');

    if (btnsLang.length === 0) return;

    new Language(btnsLang);
  })();

  /***********************************
  * Page Slider
  ***********************************/
  
  (function () {
    const pageSlider = new Swiper("[data-swiper]", {
      // Свої класи
      wrapperClass: "slider__wrapper",
      slideClass: "section",

      // Вертикальний слайдер
      direction: "vertical",

      // Кількість слайдів для показу
      slidesPerView: "auto",

      // Вмикаємо паралакс
      parallax: true,

      // Керування клавіатурою
      keyboard: {
        // Увімкнути/Вимкнути
        enable: true,
        // Увімкнути/Вимкнути
        // тільки коли слайдер
        // в межах в'юпорта
        onlyInViewport: true,
        // Увімкнути/Вимкнути
        // керування клавішами
        // pageUp, pageDown
        pageUpDown: true,
      },

      // Керування колесом миші
      mousewheel: {
        // Чутливість колеса миші
        sensitivity: 1,
        // Клас об'єкта на якому
        // буде відпрацьовувати прокрутка мишею
        // eventsTarget: ".image-slider"
      },

      // Відключення функціонала
      // якщо слайдів меньш ніж потрібно
      watchOverflow: true,

      // Швидкість
      speed: 800,

      // Оновить свайпер
      // при зміні елементів слайдера
      observer: true,

      // Оновить слайдер
      // при зміні батьківських
      // елментів слайдера
      observeParents: true,

      // Оновить слайдер
      // при зміні дочерніх
      // елементів слайда
      observeSlideChildren: true,

      // Навігація
      // Булети, поточне положення, прогресбар
      pagination: {
        el: ".slider__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "slider__bullet",
        "bulletActiveClass": "slider__bullet--active"
      },

      // Скрол
      scrollbar: {
        el: ".slider__scroll",
        dragClass: "slider__drag-scroll",
        // Можливість перетягувати скролл
        draggable: true,
      },
    });
  })();
});