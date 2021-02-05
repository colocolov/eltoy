// popup окна
$(document).ready(function () {
  $(".works__photo-link").magnificPopup({ type: "image" });
  $(".consist__video").magnificPopup({ type: "video" });
});
//-----

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

// фильтр последних работ
let articles = document.querySelectorAll(".consist__info");
// console.log(articles);
function doAction2(value) {
  let tipes = document.querySelectorAll(".consist__type");
  for (let tipe of tipes) {
    if (value == tipe.value) {
      tipe.classList.add("consist__type_active");
    } else {
      tipe.classList.remove("consist__type_active");
    }
  }
  for (let article of articles) {
    if (value !== "all") {
      // console.log(value);
      // console.log(article.dataset.category);
      //цикл if
      if (article.dataset.category !== value) {
        article.classList.add("consist__hide");
      } else {
        article.classList.remove("consist__hide");
      } //цикл if
    } else {
      article.classList.remove("consist__hide");
    }
  }
}
//-----
