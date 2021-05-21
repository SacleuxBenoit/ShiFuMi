let player = document.getElementById('player');
let bot = document.getElementById('bot');
let result = document.getElementById('result');


// get Button player

let playerRock = document.getElementById('playerRock');
let playerPaper = document.getElementById('playerPaper');
let playerScissors = document.getElementById('playerScissors');

// get Button bot

let botRock = document.getElementById('botRock');
let botPaper = document.getElementById('botPaper');
let botScissors = document.getElementById('botScissors');

// function button

function rock(){
    result.textContent = "rock";
    botChoice();
}

function paper(){
    result.textContent = "paper";
    botChoice();
}

function scissors(){
    result.textContent = "scissors";
    botChoice();
}

// function bot

function botChoice(){
    let choice = ['rock', 'paper', 'scissors'];

    let randomChoice = Math.floor(Math.random() * choice.length);
    console.log(randomChoice, choice[randomChoice]);

    // verify choice of the user, then display the result
    if(result.textContent == 'rock'){
        switch(choice[randomChoice]){

            case 'rock':
                console.log('equal');
            break;
    
            case 'paper':
                console.log('lose');
            break;
    
            case 'scissors':
                console.log('win');
            break;
        }
    }
    else if(result.textContent == 'paper'){
        switch(choice[randomChoice]){

            case 'rock':
                console.log('win');
            break;
    
            case 'paper':
                console.log('equal');
            break;
    
            case 'scissors':
                console.log('lose');
            break;
        }
    }
    else if(result.textContent == 'scissors'){
        switch(choice[randomChoice]){

            case 'rock':
                console.log('lose');
            break;
    
            case 'paper':
                console.log('win');
            break;
    
            case 'scissors':
                console.log('equal');
            break;
        }
    }

}

// else

function disableButton(){
    playerRock.disabled = 'true';
    playerPaper.disabled = 'true';
    playerScissors.disabled = 'true';

    botRock.disabled = 'true';
    botPaper.disabled = 'true';
    botScissors.disabled = 'true';
}