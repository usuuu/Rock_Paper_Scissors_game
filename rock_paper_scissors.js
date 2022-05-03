function computerPlay(){
    const threeOptions = ["Rock", "Paper", "Scissors"];
    random_number = Math.floor(Math.random()*threeOptions.length);
    return threeOptions[random_number]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == "rock" &&  computerSelection == "scissors" || playerSelection == "paper" &&  computerSelection == "rock" || playerSelection == "scissors" &&  computerSelection == "paper"){  
        
        return "Player choose: " + playerSelection +  "\nComputer choose: " + computerSelection + "\n"+ playerWins

    }
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" &&  computerSelection == "scissors" || playerSelection == "scissors" &&  computerSelection == "rock"){ 
        return "Player choose: " + playerSelection +  "\nComputer choose: " + computerSelection + "\n"+ "Computer wins!!"
    }
    else{

        return "Player choose: " + playerSelection +  "\nComputer choose: " + computerSelection + "\n"+ "It's a draw!"
    }
  }
  
function game(){
    let winner = "";
    let playerScore = 0;
    let ComputerScore = 0;


    for (let i = 0; i < 5; i++) {

        const computerSelection = computerPlay();
        const playerSelection = prompt("Type Rock, paper or Scissors");
        let result = playRound(playerSelection,computerSelection);
        console.log(result)
        if (result.match(playerWins)){
            playerScore += 1; 
        }
        else if(result.match("Computer wins")){
            ComputerScore += 1;
        }
       
     }
     if (playerScore>ComputerScore){
        winner = "The winner is you with " + playerScore + " points";
     }
     else if (ComputerScore>playerScore){
        winner = "The winner is you with " + ComputerScore + " points";
     }
     else{
        winner = "It's a draw!";

     }
     return winner 
}

const playerWins = "Congratulations you won!"

console.log(game());