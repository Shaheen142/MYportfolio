userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");
const masg = document.querySelector("#msg");

const username = localStorage.getItem("username");
masg.textContent = `${username}! play your move `;

const gencompChoice = () => {
  let option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  masg.innerText = "Game was draw / Play again";
  masg.style.background = "#1d2239";
};

const showWiner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("you win");
    masg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    masg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    masg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;

    masg.style.backgroundColor = "red";
  }
};

playGame = (userChoice) => {
  //console.log("userChoice =", userChoice);

  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == !"paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWiner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});

function changeMode() {
  let body = document.querySelector("body");
  body.classList.toggle("mode");
  let btn = document.querySelector("#btn");
  let text = btn.innerText;
  btn.innerText = text == "Dark Mode" ? "Light Mode" : "Dark Mode";
}
document.querySelector("#reset").addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  const username = localStorage.getItem("username");
  masg.innerText = `Play your move! ${username}`;
  masg.style.backgroundColor = "#1d2239";
});

// Redirect to game.html after successful login
