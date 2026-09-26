"use strict";
const body = document.querySelector("body");
const container = document.querySelector(".container");
const level = document.querySelector(".level");
const number = document.querySelector(".number");
const header_text = document.querySelector("h1");
const turn = document.querySelector(".turn");
const game_container = document.querySelector(".game-container");
const first_number = document.querySelector(".firstnumber");
const second_number = document.querySelector(".secondnumber");
const org_number = document.querySelector(".org-number");
const bingo = document.querySelector(".bingo");
const timer1 = document.querySelector(".timer1");
const timer2 = document.querySelector(".timer2");
const back1 = document.querySelector(".back1");
const back2 = document.querySelector(".back2");
const again = document.querySelector(".again");
const nameplayer1 = document.querySelector(".name1");
const nameplayer2 = document.querySelector(".name2");
const exit = document.querySelector(".exit");
let levels;
let numbers;
let turns;
let proe;
let proo;
let kar = true;
let rak = true;
let index = 0;
let finish = 0;
let w1;
let w2;
let leveltime = 0;
////////////////////////////////////

container.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("item")) {
    const link = e.target;
    const sibil = document.querySelectorAll(".item");
    sibil.forEach((element) => {
      element.style.opacity = 0.5;
    });
    e.target.style.opacity = 1;
  }
});
container.addEventListener("mouseout", function (e) {
  const sibil = document.querySelectorAll(".item");
  sibil.forEach((element) => {
    element.style.opacity = 1;
  });
});
level.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    levels = e.target.textContent;
    if (levels === "Easy") {
      leveltime = 10;
      timer1.textContent = `timer : ${leveltime}`;
      timer2.textContent = `timer : ${leveltime}`;
    }
    if (levels === "Normal") {
      leveltime = 7;
      timer1.textContent = `timer : ${leveltime}`;
      timer2.textContent = `timer : ${leveltime}`;
    }
    if (levels === "Hard") {
      leveltime = 5;
      timer1.textContent = `timer : ${leveltime}`;
      timer2.textContent = `timer : ${leveltime}`;
    }
    console.log(levels);
    header_text.textContent = "please chose your period of numbers";
    level.style.opacity = "0";
    level.style.visibility = "hidden";
    number.style.visibility = "visible";
    number.style.opacity = "100";
  }
});
number.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    numbers = Number(e.target.textContent);
    console.log(typeof numbers);
    header_text.textContent = "who should start ?";
    number.style.visibility = "hidden";
    number.style.opacity = "0";
    turn.style.visibility = "visible";
    turn.style.opacity = "100";
  }
});
turn.addEventListener("click", function (e) {
  if (e.target.classList.contains("item")) {
    turns = e.target.textContent;
    console.log(turns);
    w1 = calceven(levels, numbers);
    w2 = calcodd(levels, numbers);
    shima();
    header_text.textContent = "Play a Game";
    turn.style.visibility = "hidden";
    turn.style.opacity = "0";
    game_container.style.visibility = "visible";
    game_container.style.opacity = "100";
  }
});
////////////////////////////////////////
const even_wrong_numberA = function (params) {
  let first = Math.floor(Math.random() * (params * 0.5)) + 1;
  if (first % 2 !== 0) first++;
  return first;
};
const even_wrong_numberB = function (params) {
  let second =
    Math.floor(Math.random() * (params * 0.3 + 1)) + Math.floor(params * 0.5);
  if (second % 2 !== 0) second++;
  return second;
};
const even_wrong_numberC = function (params) {
  let third =
    Math.floor(Math.random() * (params * 0.2 + 1)) + Math.floor(params * 0.8);
  if (third % 2 !== 0) third--;
  return third;
};
const odd_wrong_numberA = function (params) {
  let first = Math.floor(Math.random() * (params * 0.5)) + 1;
  if (first % 2 === 0) first++;
  return first;
};
const odd_wrong_numberB = function (params) {
  let second =
    Math.floor(Math.random() * (params * 0.3 + 1)) + Math.floor(params * 0.5);
  if (second % 2 === 0) second++;
  return second;
};
const odd_wrong_numberC = function (params) {
  let third =
    Math.floor(Math.random() * (params * 0.2 + 1)) + Math.floor(params * 0.8);
  if (third % 2 === 0) third--;
  return third;
};

//////////////////////
const calceven = function (e, p) {
  if (e === "Easy") {
    proe = even_wrong_numberA(p);
    return proe;
  }
  if (e === "Normal") {
    proe = even_wrong_numberB(p);
    return proe;
  }
  if (e === "Hard") {
    proe = even_wrong_numberC(p);
    return proe;
  }
};
const calcodd = function (e, p) {
  if (e === "Easy") {
    proo = odd_wrong_numberA(p);
    return proo;
  }
  if (e === "Normal") {
    proo = odd_wrong_numberB(p);
    return proo;
  }
  if (e === "Hard") {
    proo = odd_wrong_numberC(p);
    return proo;
  }
};

/////////////////////////////////
let interavl;
let time;
const meraj = function (e) {
  interavl = setInterval(function () {
    e.textContent = `timer : ${time}`;
    time--;
    e.textContent = `timer : ${time}`;
    if (time === 0) {
      clearInterval(interavl);
      header_text.textContent = "You lost";
      body.style.backgroundImage =
        "linear-gradient(to right, rgb(173, 0, 0), rgb(194, 7, 7))";
      second_number.textContent = "you lost";
      clearInterval(interavl);
      return (finish = 1);
    }
  }, 1000);
};
////////////////////////////
const random_time = function () {
  return Math.trunc(Math.random() * 4) + 1;
};
const num = function () {
  if (kar || (!rak && finish === 0)) {
    time = leveltime;
    meraj(timer1);
    back1.classList.add("switch");
    setTimeout(
      function () {
        index++;
        if (index === w2 || index === w1) {
          first_number.textContent = "Im lost";
          header_text.textContent = "You win";
          body.style.backgroundImage =
            "linear-gradient(to right, rgb(0, 173, 29), rgb(7, 194, 38))";
          clearInterval(interavl);
          return (finish = 1);
        }
        if (index % 7 === 0 || index % 10 === 7) {
          first_number.textContent = "bingo";
        } else {
          first_number.textContent = index;
        }
        kar = false;
        rak = true;
        org_number.textContent = index + 1;
        clearInterval(interavl);
        time = leveltime;
        back1.classList.remove("switch");
        back2.classList.add("switch");
        meraj(timer2);
        timer1.textContent = `timer : ${leveltime}`;
      },
      Number(`${random_time()}000`),
    );
  }
};
//////////////////////////////////////////
const calcgamenumber = function () {
  index++;
  second_number.textContent = org_number.textContent;
  if (
    (index % 7 === 0 || index % 10 === 7) &&
    second_number.textContent !== "bingo"
  ) {
    second_number.textContent = "you lost";
    header_text.textContent = "You lost";
    body.style.backgroundImage =
      "linear-gradient(to right, rgb(173, 0, 0), rgb(194, 7, 7))";
    clearInterval(interavl);
    return (finish = 1);
  }
  back2.classList.remove("switch");
  clearInterval(interavl);
  timer2.textContent = `timer : ${leveltime}`;
  kar = true;
  rak = false;
  num();
};
const calcgamebingo = function () {
  index++;
  second_number.textContent = bingo.textContent;
  if (
    index % 7 !== 0 &&
    index % 10 !== 7 &&
    second_number.textContent === "bingo"
  ) {
    second_number.textContent = "you lost";
    header_text.textContent = "You lost";
    body.style.backgroundImage =
      "linear-gradient(to right, rgb(173, 0, 0), rgb(194, 7, 7))";
    clearInterval(interavl);

    return (finish = 1);
  }
  back2.classList.remove("switch");
  clearInterval(interavl);
  timer2.textContent = `timer : ${leveltime}`;
  kar = true;
  rak = false;
  num();
};
///////////////////////////////////////////////
const shima = function () {
  if (turns === "You") {
    nameplayer1.textContent = "Player 1";
    nameplayer2.textContent = "Player 2";
    num();
    org_number.addEventListener("click", function () {
      if (index < numbers && finish === 0) {
        if (!kar) {
          calcgamenumber();
        }
      }
    });
    bingo.addEventListener("click", function () {
      if (index < numbers && finish === 0) {
        if (!kar) {
          calcgamebingo();
        }
      }
    });
  }
  if (turns === "Me") {
    time = leveltime;
    nameplayer1.textContent = "Player 2";
    nameplayer2.textContent = "Player 1";
    org_number.textContent = 1;
    meraj(timer2);
    back2.classList.add("switch");
    org_number.addEventListener("click", function () {
      if (index < numbers && finish === 0) {
        if (rak) {
          calcgamenumber();
        }
      }
    });
  }
  bingo.addEventListener("click", function () {
    if (index < numbers && finish === 0) {
      if (rak) {
        calcgamebingo();
      }
    }
  });
};

again.addEventListener("click", function () {
  location.reload();
});
exit.addEventListener("click", function () {
  window.location.href = "index.html#games";
});
