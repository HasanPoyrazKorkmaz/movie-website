const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const withRatio = Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = movieList[i].querySelectorAll("img").length;

  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - withRatio) >= 0) {
      var style = window.getComputedStyle(movieList[i]);
      var matrix = new WebKitCSSMatrix(style.transform);
      console.log("translateX: ", matrix.m41);

      movieList[i].style.transform = `translateX(${matrix.m41 - 300}px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/*! dark mode */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title.active"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
