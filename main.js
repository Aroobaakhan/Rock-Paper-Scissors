let userScore = 0;
let guestScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const guestScorePara = document.querySelector("#guest-score");



const genGuestChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw! Try again";
    msg.style.backgroundColor = "green";
};

const showWinner = (userWin, userChoice, guestChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${guestChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        guestScore++;
        guestScorePara.innerText = guestScore;
        msg.innerText = `You lose. ${guestChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.height = 40;
    }
}    


const playGame = (userChoice) => {
    const guestChoice = genGuestChoice();



    if (userChoice === guestChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = guestChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = guestChoice === "scissor" ? false : true;
        } else {
            userWin = guestChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, guestChoice);
    }
};




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
      playGame(userChoice);
    });
});    