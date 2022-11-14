"use strict";

let btnRef = document.querySelectorAll(".option");
let restartBtn = document.getElementById("restart");
let message = document.getElementById("message");

//POPUP PAGE
let popup = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let back = document.getElementById("back");
let mainPage = document.querySelector(".wrapper");

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

//FUNCTION TO SWITCH SCREENS
let switchScreen = () => {
  popup.classList.toggle("hide");
};

//Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //enable popup
  switchScreen();
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  // switchScreen();
};

//This function will be excuted when a player wins
let winFunction = (arg) => {
  disableButtons();
  message.textContent = `Player ${arg} won`;
};

// Function for draw
const drawFunction = () => {
  disableButtons();
  message.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//NEW GAME BUTTON
newGameBtn.addEventListener("click", function () {
  switchScreen();
  count = 0;
  enableButtons();
  console.log("clicked");
});

//RESTART BUTTON
restartBtn.addEventListener("click", function () {
  count = 0;
  enableButtons();
});

//BACK BUTTON
back.addEventListener("click", function () {
  switchScreen();
});

//Win logic
const winChecker = () => {
  //Loop through all the win pattern
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //Check if element are filled
    //If 3 empty elements are the same and would give as should
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have the same value to winFunction
        winFunction(element1);
      }
    }
  }
};

//Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display O
      element.innerText = "O";
      element.disabled = true;
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //check for win on every click
    winChecker();
  });
});

//Enable Buttons and disable popup on page load
window.onload = enableButtons;
