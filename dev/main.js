document.body.classList.add("loading");

document.addEventListener('DOMContentLoaded', function() {

  /**
   * Resize Browser Window
   */

  window.addEventListener('resize', () => {
    document.querySelectorAll('.opened')
      .forEach(el => {
        el.classList.remove('opened')
      });
  });

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
    const mainContainer = document.querySelector(".page__main");

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

      // Відключення автоініціалізації
      init: false,

      // Події
      on: {
        // Подія ініціалізації
        init: function() {
          document.body.classList.remove("loading");
          setScrollType();
          mainContainer.classList.add("loaded");
        },

        slideChangeTransitionEnd: function() {
          document.body.classList.remove("scroll");
        },

        // Подія зміни слайда
        slideChange: function() {
          document.body.classList.add("scroll");
        },

        // Зміна розміру вікна браузера
        resize: function() {
          setScrollType();
        }
      },
    });

    function setScrollType() {
      if (mainContainer.classList.contains("free")) {
        mainContainer.classList.remove("free");
        pageSlider.params.freeMode = false;
      }

      for (let i = 0; i < pageSlider.slides.length; i++) {
        const itemSlide = pageSlider.slides[i];
        const itemSlideContent = itemSlide.querySelector(".section__content");

        if (itemSlideContent) {
          const itemSlideContentHeight = itemSlideContent.offsetHeight;

          if (itemSlideContentHeight > window.innerHeight) {
            mainContainer.classList.add("free");
            pageSlider.params.freeMode = true;
            break;
          }
        }
      }
    }

    const btnScrollDown = document.querySelector("[data-scroll-down]");

    btnScrollDown.addEventListener("click", () => {
      pageSlider.slideTo(4);
    });

    pageSlider.init();
  })();

  /*********************************
  * Welcome slider
  *********************************/
  (function() {
    new Swiper("[data-welcome-swiper]", {
      // Кількість слайдів для показу
      slidesPerView: 1,

      autoplay: {
        delay: 5000,
      },

      // Швидкість
      speed: 800,

      loop: true,

      // Навігація
      // Булети, поточне положення, прогресбар
      pagination: {
        el: ".swiper__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "swiper__bullet",
        "bulletActiveClass": "swiper__bullet--active"
      },

      navigation: {
        prevEl: '.swiper__button-prev',
        nextEl: '.swiper__button-next',
      },
    });
  })();
});