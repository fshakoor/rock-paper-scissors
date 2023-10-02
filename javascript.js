let choices = ['Rock','Paper','Scissors'];
let playerCount = 0;
let computerCount = 0;
const bodySelect = document.querySelector('body');
const display = document.createElement('div');
bodySelect.appendChild(display)
const displayedText = document.createElement('p')
display.appendChild(displayedText)
const rockButton = document.querySelector('#rock-button')
const paperButton = document.querySelector('#paper-button')
const scissorsButton = document.querySelector('#scissors-button')

function computerChoice(choices) {
    let index = Math.floor(Math.random()*choices.length);
    let choice = choices[index];
    return choice;
};

function playRound(choices,choice) {
    let playerChoice = choice;
    let computersChoice = computerChoice(choices);
    // wins
    if (playerChoice === 'rock' && computersChoice === 'Scissors') {
        return 'pwin';
    } else if (playerChoice === 'paper' && computersChoice === 'Rock') {
        return 'pwin';
    } else if (playerChoice === 'scissors' && computersChoice == 'Paper') {
        return 'pwin';
    };
    // losses
    if (playerChoice === 'scissors' && computersChoice === 'Rock') {
        return 'plose';
    } else if (playerChoice === 'rock' && computersChoice === 'Paper') {
        return 'plose';
    } else if (playerChoice === 'paper' && computersChoice == 'Scissors') {
        return 'plose';
    };
    // draws
    if (playerChoice === 'scissors' && computersChoice === 'Scissors') {
        return 'pdraw';
    } else if (playerChoice === 'rock' && computersChoice === 'Rock') {
        return 'pdraw';
    } else if (playerChoice === 'paper' && computersChoice == 'Paper') {
        return 'pdraw';
    };
};

function checkWin(play) {
    if (play === 'pwin') {
        playerCount++
        return ('Player wins this round! Current score: ' + playerCount+'-'+computerCount + '.')
    }
    else if (play === 'plose') {
        computerCount++
        return 'Player loses this round. Current score: ' + playerCount+'-'+computerCount + '.'
    }
    else if (play === 'pdraw') {
        playerCount += 0; computerCount += 0;
        return 'Draw! Current score: ' + playerCount+'-'+computerCount + '.'
    }
};

rockButton.addEventListener('click', () => {
    display.classList.add('display');
    displayedText.classList.add('display');
    let play = playRound(choices,'rock');
    let result = checkWin(play);
    if (playerCount < 5 && computerCount < 5) {displayedText.textContent = result}
    if (playerCount == 5 && computerCount < 5 || playerCount < 5 && computerCount == 5) {
        if (playerCount > computerCount) {displayedText.textContent = 'You win! Final score is ' + playerCount + ' - ' + computerCount + '.'}
        else {displayedText.textContent = 'You lose. Final score is ' + playerCount + ' - ' + computerCount + '.'}
    }
  });


paperButton.addEventListener('click', () => {
    display.classList.add('display');
    let play = playRound(choices,'paper');
    let result = checkWin(play);
    if (playerCount < 5 && computerCount < 5) {displayedText.textContent = result}
    if (playerCount == 5 && computerCount < 5 || playerCount < 5 && computerCount == 5) {
        if (playerCount > computerCount) {displayedText.textContent = 'You win! Final score is ' + playerCount + ' - ' + computerCount + '.'}
        else {displayedText.textContent = 'You lose. Final score is ' + playerCount + ' - ' + computerCount + '.'}
    }
  });

scissorsButton.addEventListener('click', () => {
    display.classList.add('display');
    let play = playRound(choices,'scissors');
    let result = checkWin(play);
    if (playerCount < 5 && computerCount < 5) {displayedText.textContent = result}
    if (playerCount == 5 && computerCount < 5 || playerCount < 5 && computerCount == 5) {
        if (playerCount > computerCount) {displayedText.textContent = 'You win! Final score is ' + playerCount + ' - ' + computerCount + '.'}
        else {displayedText.textContent = 'You lose. Final score is ' + playerCount + ' - ' + computerCount + '.'}
    }
  });

  // if player score or computer score = 5, 