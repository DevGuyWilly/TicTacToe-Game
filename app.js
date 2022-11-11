"use strict";

let btnRef = document.querySelectorAll(".option");
let restartBtn = document.getElementById("restart");
let message = document.getElementById("message");
//POPUP PAGE
let popupHide = document.querySelector(".hide");
let newGameBtn = document.getElementById("new-game");

newGameBtn.addEventListener("click", function () {
  popupHide.style.display = "none";
  pop;
  console.log("Clicked");
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
