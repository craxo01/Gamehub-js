"use strict";
let timer;
let currentslide = 0;

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
////////////////////////////
const slidercalc = function (params1, params2, params3, params4, params5) {
  const maxslide = params4;
  function shima() {
    timer = setTimeout(function (e) {
      slideright(currentslide);
      shima();
    }, 4000);
  }
  const slidecalc = function (params) {
    params1.forEach(function (mov, i) {
      mov.style.transform = `translateX(${100 * (i - params)}%)`;
    });
    activateDot(params);
  };
  shima();
  slidecalc(0);
  params5.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      currentslide = Number(e.target.dataset.slide);
      slidecalc(currentslide);
      activateDot(currentslide);
      clearTimeout(timer);
      shima();
    }
  });
  const slideright = function () {
    if (currentslide === maxslide - 1) {
      currentslide = 0;
    } else {
      currentslide++;
    }
    slidecalc(currentslide);
  };
  const slideleft = function () {
    if (currentslide === 0) {
      currentslide = maxslide - 1;
    } else {
      currentslide--;
    }
    slidecalc(currentslide);
  };
  params2.addEventListener("click", function () {
    slideright();
    clearTimeout(timer);
    shima();
  });
  params3.addEventListener("click", function () {
    slideleft();
    clearTimeout(timer);
    shima();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      slideright();
      clearTimeout(timer);
      shima();
    }
    if (e.key === "ArrowLeft") {
      slideleft();
      clearTimeout(timer);
      shima();
    }
  });
};
export { slidercalc, activateDot };
