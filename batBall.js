let choice = ["Bat", "Ball", "Stump"];
let stringToStrore = "";
let computerMove;
let scoreStr = localStorage.getItem("Score");
let maintainScore = scoreStr
  ? JSON.parse(scoreStr)
  : {
      tie: 0,
      won: 0,
      lose: 0,
    };

// Bat button execution
function batExecution() {
  stringToStrore = "Bat";
  computerMove = choice[Math.floor(Math.random() * choice.length)];
  document.querySelector(
    "#user"
  ).innerHTML = `User choice is ${stringToStrore} `;
  document.querySelector(
    "#computer"
  ).innerHTML = `Computer choice is ${computerMove} `;
  result(computerMove, stringToStrore);
}

// Ball Button execution
function ballExecution() {
  stringToStrore = "Ball";
  computerMove = choice[Math.floor(Math.random() * choice.length)];

  document.querySelector(
    "#user"
  ).innerHTML = `User choice is ${stringToStrore} `;
  document.querySelector(
    "#computer"
  ).innerHTML = `Computer choice is ${computerMove} `;
  result(computerMove, stringToStrore); // when you call the function then function contains 'Arguments'
}

// Stump button execution
function stumpExecution() {
  stringToStrore = "Stump";
  computerMove = choice[Math.floor(Math.random() * choice.length)];

  document.querySelector(
    "#user"
  ).innerHTML = `User choice is ${stringToStrore} `;
  document.querySelector(
    "#computer"
  ).innerHTML = `Computer choice is ${computerMove} `;
  result(computerMove, stringToStrore);
}

// when you define the function then function contains 'Parameters'
function result(computerChoice, userMove) {
  if (userMove === "Bat") {
    if (computerChoice == "Ball") {
      let changeColor = document.querySelector("#result");
      changeColor.style.color = "green";
      document.querySelector("#result").innerHTML = "You Won !";
      maintainScore.won++;
    } else if (computerChoice == "Bat") {
      document.querySelector("#result").innerHTML = "Tie !";
      maintainScore.tie++;
    } else {
      let changeColor = document.querySelector("#result");
      changeColor.style.color = "red";
      document.querySelector("#result").innerHTML = "You Loose !";
      maintainScore.lose++;
    }
  } else if (userMove === "Ball") {
    if (computerChoice == "Ball") {
      document.querySelector("#result").innerHTML = "Tie !";
      maintainScore.tie++;
    } else if (computerChoice == "Bat") {
      let changeColor = document.querySelector("#result");
      changeColor.style.color = "red";
      document.querySelector("#result").innerHTML = "You Loose !";
      maintainScore.lose++;
    } else {
      let changeColor = document.querySelector("#result");
      changeColor.style.color = "green";
      document.querySelector("#result").innerHTML = "You Won !";
      maintainScore.won++;
    }
  } else {
    if (computerChoice == "Ball") {
      let changeColor = document.querySelector("#result");
      changeColor.style.color = "red";
      document.querySelector("#result").innerHTML = "You Loose !";
      maintainScore.lose++;
    } else if (computerChoice == "Bat") {
      let changeColor = document.querySelector("#result");
      changeColor.style.color = "green";
      document.querySelector("#result").innerHTML = "You Won !";
      maintainScore.won++;
    } else {
      document.querySelector("#result").innerHTML = "Tie !";
      maintainScore.tie++;
    }
  }
}
// Getting overall resutl
function getResult() {
  localStorage.setItem("Score", JSON.stringify(maintainScore));
  let res = document.querySelector("#table");
  res.style.display = "block";
  let win = document.querySelector("#win");
  win.innerHTML = maintainScore.won;
  let lose = document.querySelector("#lose");
  lose.innerHTML = maintainScore.lose;
  let tie = document.querySelector("#tie");
  tie.innerHTML = maintainScore.tie;
  let total = document.querySelector("#total");
  total.innerHTML = maintainScore.won + maintainScore.tie + maintainScore.lose;

  let hide = document.querySelector("#button-hide");
  hide.style.display = "none";
  let hide2 = document.querySelector(".result-user");
  hide2.style.display = "none";
  let hide3 = document.querySelector("#play");
  hide3.style.display = "block";
}
// restart game
function playAgain() {
  localStorage.clear();
  maintainScore = {
    tie: 0,
    won: 0,
    lose: 0,
  };
  let hide = document.querySelector("#button-hide");
  hide.style.display = "block";
  let hide2 = document.querySelector(".result-user");
  hide2.style.display = "block";
  let res = document.querySelector("#table");
  res.style.display = "none";
  // maintainScore.won = 0;
  // maintainScore.tie = 0;
  // maintainScore.lose = 0;
  let hide3 = document.querySelector("#play");
  hide3.style.display = "none";

  document.querySelector("#user").innerHTML = ``;
  document.querySelector("#computer").innerHTML = ``;
  document.querySelector("#result").innerHTML = "";
}
