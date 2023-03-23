// -----------------------------make arrow function-----------------------
window.onscroll = function(){
  console.log(window.screenY);
}
// -----------------------------change place of rate-----------------------

let skills = document.querySelector(".skills");
let place_spans = document.querySelectorAll(".rate span");
window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop) {
    place_spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
