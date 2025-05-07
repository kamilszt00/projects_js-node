let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10)

function compareGuesses(user,computer,secret) {
        console.log(secret)
        return (Math.abs(secret-user)) <= (Math.abs(secret-computer)) ? true : false;
}

const updateScore = (win) => {
    if (win.toLowerCase() === 'human') {
        humanScore ++;
        console.log(humanScore)
    } else if (win.toLowerCase() === 'computer') {
        computerScore ++;
    }

}

const advanceRound = () => currentRoundNumber ++;