'use strict';

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const timeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const dueDate = 1625097599999;

updateTime();

function updateTime() {
  const timeNow = Date.now();
  timeLeft.seconds = formatNum(((dueDate - timeNow) / 1000) % 60);
  timeLeft.minutes = formatNum(((dueDate - timeNow) / (1000 * 60)) % 60);
  timeLeft.hours = formatNum(((dueDate - timeNow) / (1000 * 60 * 60)) % 60);
  timeLeft.days = formatNum((dueDate - timeNow) / (1000 * 60 * 60 * 24));
  displayTime(timeLeft);
  setTimeout(updateTime, 1000);
}

function formatNum(num) {
  num = Math.trunc(num);
  num = num < 10 ? '0' + num : num;
  return num;
}

function displayTime(obj) {
  days.textContent = obj.days;
  hours.textContent = obj.hours;
  minutes.textContent = obj.minutes;
  seconds.textContent = obj.seconds;
}
