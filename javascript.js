let choices = ['Rock','Paper','Scissors'];
let playerCount = 0;
let computerCount = 0;

function askInput() {
    let input = prompt('Choose rock, paper, or scissors. ');
    return input.toLowerCase();
};

function computerChoice(choices) {
    let index = Math.floor(Math.random()*choices.length);
    let choice = choices[index];
    return choice;
};

function playRound(choices) {
    let playerChoice = askInput();
    let computersChoice = computerChoice(choices);
    // wins
    if (playerChoice === 'rock' && computersChoice === 'Scissors') {
        console.log('You win! Rock beats scissors');
        return 'pwin';
    } else if (playerChoice === 'paper' && computersChoice === 'Rock') {
        console.log('You win! Paper beats rock!');
        return 'pwin';
    } else if (playerChoice === 'scissors' && computersChoice == 'Paper') {
        console.log('You win! Scissors beats paper!');
        return 'pwin';
    };
    // losses
    if (playerChoice === 'scissors' && computersChoice === 'Rock') {
        console.log('You lose! Rock beats scissors');
        return 'plose';
    } else if (playerChoice === 'rock' && computersChoice === 'Paper') {
        console.log('You lose! Paper beats rock!');
        return 'plose';
    } else if (playerChoice === 'paper' && computersChoice == 'Scissors') {
        console.log('You lose! Scissors beats paper!')
        return 'plose';
    };
    // draws
    if (playerChoice === 'scissors' && computersChoice === 'Scissors') {
        console.log('Draw! You both picked scissors.');
        return 'pdraw';
    } else if (playerChoice === 'rock' && computersChoice === 'Rock') {
        console.log('Draw! You both picked rock.');
        return 'pdraw';
    } else if (playerChoice === 'paper' && computersChoice == 'Paper') {
        console.log('Draw! You both picked paper.');
        return 'pdraw';
    };
};

function game(playerCount,computerCount) {
    for (let i = 0; i < 5; i++) {
        let play = playRound(choices);
        if (play === 'pwin') {playerCount++}
        else if (play === 'plose') {computerCount++}
        else if (play === 'pdraw') {playerCount += 0; computerCount += 0;}
        console.log("Score is " + playerCount + " for the user and " + computerCount + " for the computer.");
    };

    if (playerCount > computerCount) {console.log('Player wins! Score: ' + playerCount+'-'+computerCount + '.')}
    else if (playerCount < computerCount) {console.log('Player loses! Score: ' + playerCount+'-'+computerCount + '.')}
    else {console.log('Draw! Score: ' + playerCount+'-'+computerCount + '.')}
};

game(playerCount,computerCount);