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
    nextEl: ".reviews-button__right",
    prevEl: ".reviews-button__left",
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
