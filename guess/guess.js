'use strict';
const cheak = document.querySelector('.cheak');
const qustion = document.querySelector('.orgnumber');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const text = document.querySelector('.text');
const input = document.querySelector('.input');
////////////////////////////////////////////
let dice = Math.trunc(Math.random() * 100) + 1;
let kingscore = 20;
let kinghighscore = 0;

cheak.addEventListener('click', function () {
  if (Number(input.value) === dice) {
    text.textContent = 'win';
    qustion.textContent = dice;
    document.querySelector('body').style.backgroundColor = 'green';
    qustion.style.width = '250px';
    qustion.style.left = '90vh';
    score.textContent = kingscore;
    if (kingscore > kinghighscore) {
      kinghighscore = kingscore;
      highscore.textContent = kinghighscore;
    }
  } else if (input.value === '') {
    text.textContent = 'No Number';
    kingscore = 20;
  } else if (Number(input.value) > dice && kingscore !== 0) {
    text.textContent = 'higher';
    kingscore--;
    score.textContent = kingscore;
  } else if (Number(input.value) < dice && kingscore !== 0) {
    text.textContent = 'lower';
    kingscore--;
    score.textContent = kingscore;
  } else if (kingscore === 0) {
    text.textContent = 'lost';
    document.querySelector('body').style.backgroundColor = 'red';
    kingscore = 0;
  }
});
again.addEventListener('click', function () {
  input.value = '';
  qustion.textContent = '?';
  dice = Math.trunc(Math.random() * 100) + 1;
  text.textContent = 'Start guessing...';
  kingscore = 20;
  score.textContent = '20';
  document.querySelector('body').style.backgroundColor = 'rgb(27, 27, 27)';
  qustion.style.width = '150px';
  qustion.style.left = '98vh';
});
const exit = document.querySelector(".exit");

exit.addEventListener("click", function () {
    window.location.href = "index.html#games";
});