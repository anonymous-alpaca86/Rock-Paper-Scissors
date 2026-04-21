function getComputerChoice(){
    let choice=Math.random();
    if (choice<0.34) return "rock";
    else if (choice<=0.67) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice=prompt("Enter your choice: rock, paper or scissors");
    choice=choice.toLowerCase();
    if (choice==="rock" || choice==="paper" || choice==="scissors") return choice;
    else {
        alert("Invalid choice, try again.");
        return getHumanChoice();
    }
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
if(humanChoice===computerChoice) alert("It's a tie!");
else if(humanChoice==="rock"&&computerChoice==="paper"){
    alert("You lost! Paper beats Rock.");
    computerScore++;
}
else if(humanChoice==="paper"&&computerChoice==="scissors"){
    alert("You lost! Scissors beats Paper.");
    computerScore++;
}else if(humanChoice==="scissors"&&computerChoice==="rock"){
    alert("You lost! Rock beats Scissors.");
    computerScore++;
}
else if(humanChoice==="rock"&&computerChoice==="scissors"){
    alert("You won! Rock beats Scissors.");
    humanScore++;
}else if(humanChoice==="paper"&&computerChoice==="rock"){
    alert("You won! Paper beats Rock.");
    humanScore++;
}else if(humanChoice==="scissors"&&computerChoice==="paper"){
    alert("You won! Scissors beats Paper.");
    humanScore++;
}

}

function playGame(){
    for(let i=1;i<=5;i++){
        let human=getHumanChoice();
        let computer=getComputerChoice();
        playRound(human,computer);
    }
    if(humanScore>computerScore) return `You won ${humanScore}:${computerScore}`;
    else if(humanScore===computerScore) return "It's a tie";
    else return `You lost ${humanScore}:${computerScore}`;
}
