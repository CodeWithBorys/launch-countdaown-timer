'use strict';

const days = document.querySelector('.days .card-face-front');
const hours = document.querySelector('.hours .card-face-front');
const minutes = document.querySelector('.minutes .card-face-front');
const seconds = document.querySelector('.seconds');
const card = document.querySelector('.card');

// .card-face-back

const timeLeftPrev = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const timeLeftCur = {
  days: 1,
  hours: 1,
  minutes: 1,
  seconds: 1,
};

const dueDate = 1625097599999;

updateTime();

function updateTime() {
  const timeNow = Date.now();
  const secondsCountCur = formatNum(((dueDate - timeNow) / 1000) % 60);
  const secondsCountPrev = formatNum(((dueDate - timeNow - 1000) / 1000) % 60);
  if (timeLeftCur.seconds !== secondsCountCur) {
    timeLeftPrev.seconds = secondsCountPrev;
    timeLeftCur.seconds = secondsCountCur;
    seconds.querySelector('.card').classList.add('flipped');
  } else {
    seconds.querySelector('.card').classList.remove('flipped');
  }
  timeLeftCur.minutes = formatNum(((dueDate - timeNow) / (1000 * 60)) % 60);
  timeLeftCur.hours = formatNum(((dueDate - timeNow) / (1000 * 60 * 60)) % 60);
  timeLeftCur.days = formatNum((dueDate - timeNow) / (1000 * 60 * 60 * 24));
  displayTimeCur(timeLeftCur);
  displayTimePrev(timeLeftPrev);
  setTimeout(updateTime, 1000);
}

function formatNum(num) {
  num = Math.trunc(num);
  num = num < 10 ? '0' + num : num;
  return num;
}

function displayTimeCur(obj) {
  days.textContent = obj.days;
  hours.textContent = obj.hours;
  minutes.textContent = obj.minutes;
  seconds.querySelector('.card-face-front').textContent = obj.seconds;
  seconds
    .querySelector('.digit')
    .setAttribute('data-digit-before', obj.seconds);
}

function displayTimePrev(obj) {
  // days.textContent = obj.days;
  // hours.textContent = obj.hours;
  // minutes.textContent = obj.minutes;
  seconds.querySelector('.card-face-back').textContent = obj.seconds;
  seconds.querySelector('.digit').setAttribute('data-digit-after', obj.seconds);
}
