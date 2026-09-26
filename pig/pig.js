'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceimg = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const exit= document.querySelector(".btn--exit")
let sum = 0;
let activeplayer = 0;
let score = [0, 0];
let playing = true;
//////////////////////////
score0El.textContent = 0;
score1El.textContent = 0;
diceimg.classList.add('hidden');
const selector = function () {
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  sum = 0;
  activeplayer = activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//////////////////////
btnroll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceimg.classList.remove('hidden');
    diceimg.src = `dice-${dice}.png`;
    if (dice !== 1) {
      sum += dice;
      document.querySelector(`#current--${activeplayer}`).textContent = sum;
    } else {
      selector();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += sum;
    document.querySelector(`#score--${activeplayer}`).textContent =
      score[activeplayer];

    if (score[activeplayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');

      diceimg.classList.add('hidden');
    }

    selector();
  }
});
btnnew.addEventListener('click', function () {
  score = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  activeplayer = 0;
  playing = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  current0.textContent = 0;
  current1.textContent = 0;

  diceimg.classList.remove('hidden');
});
exit.addEventListener("click", function () {
    window.location.href = "index.html#games";
});
