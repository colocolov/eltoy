// popup окна
$(document).ready(function () {
  $(".works__photo-link").magnificPopup({ type: "image" });
});
//-----

// фильтр трендов
let articles = document.querySelectorAll(".works__photo");
// console.log(articles);
function doAction(value) {
  let types = document.querySelectorAll(".works__type");
  for (let type of types) {
    if (value == type.value) {
      type.classList.add("works__type_active");
    } else {
      type.classList.remove("works__type_active");
    }
  }
  for (let article of articles) {
    if (value !== "all") {
      // console.log(value);
      // console.log(article.dataset.category);
      //цикл if
      if (article.dataset.category !== value) {
        article.classList.add("works__hide");
      } else {
        article.classList.remove("works__hide");
      } //цикл if
    } else {
      article.classList.remove("works__hide");
    }
  }
}
//-----
