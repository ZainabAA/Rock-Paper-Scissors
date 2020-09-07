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
                trackComputer++;
                return "You Lose! Paper beats Rock";
            }
            else if(computerSelection == 'scissors'){
                trackPlayer++;
                return "You Win! Rock beats Scissors";
            }
            else{
                return "Tie!";
            }
            break;
        case 'paper':
            if(computerSelection == 'scissors'){
                trackComputer++;
                return "You Lose! Scissors beats Paper";
            }
            else if(computerSelection == 'rock'){
                trackPlayer++;
                return "You Win! Paper beats Rock";
            }
            else{
                return "Tie!";
            }
            break;
        case 'scissors':
                if(computerSelection == 'rock'){
                    trackComputer++;
                    return "You Lose! Rock beats Scissors";
                }
                else if(computerSelection == 'Paper'){
                    trackPlayer++;
                    return "You Win! Scissors beats Paper";
                }
                else{
                    return "Tie!";
                }
                break;
        default:
            return 'blank';
    }
}

function game(player){
    computer = computerPlay();
    document.querySelector('.dynamic-text').textContent=round(player, computer);
    
    playerResult.textContent = ''+trackPlayer;
    computerResult.textContent = ''+trackComputer;

}

let trackComputer = 0;
let trackPlayer = 0;

let choices = document.querySelectorAll('.player-choice');
let playerResult = document.querySelector('.dynamic-result-player');
let computerResult = document.querySelector('.dynamic-result-computer');

playerResult.textContent = ''+trackPlayer;
computerResult.textContent = ''+trackComputer;

choices.forEach(choice => {
    choice.addEventListener('click', ()=>{
        
        game(choice.classList[1]);
    })
})