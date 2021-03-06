$(document).ready(function () {
  // popup окно
  $(".works__photo-link").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img") ? openerElement : openerElement.find("img");
      },
    },
  });
  $(".consist__video").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: function (url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
      },
    },
  });
  //-----

  // табы для состава
  $("ul.consist__caption").on("click", "li:not(.consist__type_active)", function () {
    $(this)
      .addClass("consist__type_active")
      .siblings()
      .removeClass("consist__type_active")
      .closest("div.consist__first")
      .find("div.consist__info")
      .removeClass("consist__info-active")
      .eq($(this).index())
      .addClass("consist__info-active");
  });
  // -----

  // faq accordeon
  $(".faq__title").on("click", function () {
    $(".faq__item").removeClass("faq__active");
    $(this).parent().addClass("faq__active");
  });
  // -----

  //валидация
  $(".contacts__button-phone").mask("+373 (00) 000-000");

  // $(".contacts__form").validate({
  //   errorClass: "invalid",
  //   rules: {
  //     phone: {
  //       required: true,
  //       minlength: 17,
  //       maxlength: 17,
  //     },
  //   },
  //   messages: {
  //     phone: {
  //       required: "Введите номер телефона",
  //       minlength: jQuery.validator.format("Требуется минимум 8 цифр!"),
  //     },
  //   },
  // });
  // -----

  //scroll up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1100) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();
    }
  });
  // -----
});

// фильтр последних работ
let works = document.querySelectorAll(".works__photo");
// console.log(works);
function doAction(value) {
  let types = document.querySelectorAll(".works__type");
  for (let type of types) {
    if (value == type.value) {
      type.classList.add("works__type_active");
    } else {
      type.classList.remove("works__type_active");
    }
  }
  for (let work of works) {
    if (value !== "all") {
      // console.log(value);
      // console.log(work.dataset.category);
      //цикл if
      if (work.dataset.category !== value) {
        work.classList.add("works__hide");
      } else {
        work.classList.remove("works__hide");
      } //цикл if
    } else {
      work.classList.remove("works__hide");
    }
  }
}
//-----

// слайдер отзывов
var reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  autoplay: {
    delay: 7000,
  },
  navigation: {
    nextEl: ".reviews-button--right",
    prevEl: ".reviews-button--left",
    clickable: true,
  },
  // отключение прокрутки при наведении мыши
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});
//-----

//мобильное меню
const iconMenu = document.querySelector(".navbar__icon");
const menuBody = document.querySelector(".navbar__menu");
const menuLink = $(".navbar__link");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

menuLink.on("click", closeMenu);
function closeMenu(event) { // закрытие при клике
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}
//-----