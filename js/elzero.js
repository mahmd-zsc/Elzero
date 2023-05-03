// -----------------------------make arrow function-----------------------

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
let arrow = document.querySelector(".arrow");
console.log(arrow);
window.onscroll = function () {
  if (window.scrollY >= 500) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};

arrow.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};