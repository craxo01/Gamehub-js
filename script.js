"use strict";
import { shima, navhover } from "./navhover.js";
import { slidercalc, activateDot } from "./slider.js";
const nav = document.querySelector(".nav");
const nav__link = document.querySelectorAll(".nav_link");
const div_slide = document.querySelector(".div-slide");
const slide = document.querySelectorAll(".slide");
const btnleft = document.querySelector(".slider-button-left");
const btnright = document.querySelector(".slider-button-right");
const containerdots = document.querySelector(".dots");
const section_cart = document.querySelector(".flex-cart");
const section_data = document.querySelector(".section-data");
const close_data = document.querySelector(".close-data");
const general = document.querySelectorAll(".general");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
let current = 0;
const creatdot = function () {
  slide.forEach(function (_, i) {
    containerdots.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`,
    );
  });
};
creatdot();
navhover(nav, "nav_link", nav__link);
const maxslide = slide.length;
slidercalc(slide, btnright, btnleft, maxslide, containerdots);
/////////////////////////////
section_cart.addEventListener("click", function (e) {
  if (e.target.classList.contains("div-left-end-cart")) {
    current = Number(e.target.dataset.slide);
    section_data.style.display = "flex";
    document.querySelector(`.section-data-${current}`).style.display = "flex";
    overlay.classList.remove("hidden");
  }
});
const close_mode = function () {
  section_data.style.display = "none";
  general.forEach(function (params) {
    params.style.display = "none";
  });
  overlay.classList.add("hidden");
};
close_data.addEventListener("click", close_mode);
overlay.addEventListener("click", close_mode);
