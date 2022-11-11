"use strict";

let btnRef = document.querySelectorAll(".option");
let restartBtn = document.getElementById("restart");
let message = document.getElementById("message");

//POPUP PAGE
let popup = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let back = document.getElementById("back");
let mainPage = document.querySelector(".wrapper");

newGameBtn.addEventListener("click", function () {
  popup.classList.add("hide");
});

back.addEventListener("click", function () {
  mainPage.classList.add("hide");
  // popup.classList.remove("hide");
});

//WINNING PATTERN ARRAY
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

//PLAYER 'X' PLAY FIRST
let xTurn = true;
let count = 0;
