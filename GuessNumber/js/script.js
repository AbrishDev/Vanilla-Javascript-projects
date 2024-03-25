"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "no number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You're correct";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
