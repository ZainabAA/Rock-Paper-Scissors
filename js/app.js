const  OPTIONS = ['rock', 'paper', 'scissors'];


let trackComputer = 0;
let trackPlayer = 0;
let trackRound = 1;

let leftHand = document.querySelectorAll('.hand-display-left').item(0);
let rightHand = document.querySelectorAll('.hand-display-right').item(0);

let choices = document.querySelectorAll('.player-choice');
let playerResult = document.querySelector('.dynamic-result-player');
let computerResult = document.querySelector('.dynamic-result-computer');


playerResult.textContent = ''+trackPlayer;
computerResult.textContent = ''+trackComputer;

function computerPlay(){
    let i = Math.floor(Math.random() * 4);
    return OPTIONS[i];
}

function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    trackRound++;

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

    document.querySelector('.hand-display-left').setAttribute('src', `img/${player}-left.png`);
    if(player == 'scissors'){
        leftHand.style.transform = 'scaleX(-1)';
    }
    else{
        leftHand.style.transform = 'scaleX(1)';
    }
    playerResult.textContent = ''+trackPlayer;
    computerResult.textContent = ''+trackComputer;

    leftHand.classList.remove('left-anim');
    rightHand.classList.remove('right-anim');

}

function handAnimate(){
    document.querySelector('.hand-display-left').setAttribute('src', `img/rock-left.png`);
    document.querySelector('.hand-display-right').setAttribute('src', `img/rock-left.png`);

    leftHand.classList.toggle('left-anim');
    rightHand.classList.toggle('right-anim');
}

choices.forEach(choice => {
    choice.addEventListener('click', ()=>{
        document.querySelector('.round').textContent = 'Round '+trackRound;
        setTimeout(()=>{game(choice.classList[1])}, 2000);
        handAnimate();
    })
})