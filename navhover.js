"use strict";

const navhover = function (params1, params2, params3) {
  params1.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains(`${params2}`)) {
      e.target.classList.add("hover");
    }
  });
  params1.addEventListener("mouseout", function (e) {
    params3.forEach((element) => {
      element.classList.remove("hover");
    });
  });
};
const shima = function (params) {
  console.log(params);
};
export { shima, navhover };
