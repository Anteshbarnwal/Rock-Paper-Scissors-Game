let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choises = document.querySelectorAll(".choise");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoise = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        userScorePara.style.color = "green";
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "rgb(3, 119, 13)";
        msg.style.color = "red";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        compScorePara.style.color = "red";
        msg.innerText = "You Lost";
        msg.style.backgroundColor = "red";
        msg.style.color = "yellow";
    }
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "red";
}

const playGame = (userChoise) => {
    const compChoise = genCompChoise();
    console.log(compChoise);
    if(userChoise === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoise === "rock") {
            userWin = compChoise === "paper" ? false : true;
        } else if (userChoise === "paper") {
            userWin = compChoise === "scissors" ? false : true;
        } else {
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        console.log(userChoise);
        playGame(userChoise);
    })
})