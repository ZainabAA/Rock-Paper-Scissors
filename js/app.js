const  OPTIONS = ['rock', 'paper', 'scissors']
function computerPlay(){
    let i = Math.floor(Math.random() * 4);
    return OPTIONS[i];
}

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection){
        case 'rock':
            if(computerSelection == 'paper'){
                return "You Lose! Paper beats Rock";
            }
            else if(computerSelection == 'scissors'){
                return "You Win! Rock beats Scissors";
            }
            else{
                return "Tie!";
            }
            break;
        case 'paper':
            if(computerSelection == 'scissors'){
                return "You Lose! Scissors beats Paper";
            }
            else if(computerSelection == 'rock'){
                return "You Win! Paper beats Rock";
            }
            else{
                return "Tie!";
            }
            break;
        case 'scissors':
                if(computerSelection == 'rock'){
                    return "You Lose! Rock beats Scissors";
                }
                else if(computerSelection == 'Paper'){
                    return "You Win! Scissors beats Paper";
                }
                else{
                    return "Tie!";
                }
                break;
    }
}

function game(){
    for(let i=0; i<5; i++){
        computer = computerPlay();
        // player = window.prompt('Choose Rock, Paper or Scissors: ');
        console.log(round(player, computer));
    }
}

game();