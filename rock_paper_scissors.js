
const playerWins = "Congratulations you won!"
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0; 

const container = document.querySelector('#result');

const new_div = document.createElement('div');
new_div.classList.add('new_div');
container.appendChild(new_div); 

const cScore = document.querySelector('#computers_score');
const comp_Score = document.createElement('p');
comp_Score.classList.add('comp_Score');

comp_Score.textContent = computerScore;

cScore.appendChild(comp_Score); 

const pScore = document.querySelector('#players_score');

const play_Score = document.createElement('p');

play_Score.classList.add('play_Score');

play_Score.textContent = playerScore;

pScore.appendChild(play_Score); 


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    
    new_div.textContent = playRound(button.id,computerPlay());
   });
});

function computerPlay(){
    const threeOptions = ["Rock", "Paper", "Scissors"];
    random_number = Math.floor(Math.random()*threeOptions.length);
    return threeOptions[random_number]
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    if(playerScore == 5)
    {
        playerScore = 0;
        computerScore = 0;
        return "You won!";
        
    }
    else if(computerScore == 5){
        
        computerScore = 0;
        playerScore = 0;
        return "Computer wins!";
        
    }
    else{

        if(playerSelection == "Rock" &&  computerSelection == "scissors" || playerSelection == "Paper" &&  computerSelection == "rock" || playerSelection == "Scissors" &&  computerSelection == "paper"){  
            playerScore = playerScore+1;
            play_Score.textContent = playerScore;
            pScore.appendChild(play_Score); 
            return "Player choose: " + playerSelection +  "\nComputer choose: " + computerSelection + "\n"+ playerWins 
        }
        else if(playerSelection == "Rock" && computerSelection == "paper" || playerSelection == "Paper" &&  computerSelection == "scissors" || playerSelection == "Scissors" &&  computerSelection == "rock"){ 
            computerScore = computerScore+1;
            comp_Score.textContent = computerScore;
            
            return "Player choose: " + playerSelection +  "\nComputer choose: " + computerSelection + "\n"+ "Computer wins!!"
        }
        else{

            return "Player choose: " + playerSelection +  "\nComputer choose: " + computerSelection + "\n"+ "It's a draw!"
        }
        
    }
}  
