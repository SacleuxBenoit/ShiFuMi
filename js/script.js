let player = document.getElementById('player');
let bot = document.getElementById('bot');
let result = document.getElementById('result');

let choicePlayerImages = document.getElementById('choicePlayerImages');
let choiceBotImages = document.getElementById('choiceBotImages');

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
    choicePlayerImages.textContent = "rock";
    botChoice();
}

function paper(){
    result.textContent = "paper";
    choicePlayerImages.textContent = "paper";
    botChoice();
}

function scissors(){
    result.textContent = "scissors";
    choicePlayerImages.textContent = "scissors";
    botChoice();
}

// function bot

function botChoice(){
    let choice = ['rock', 'paper', 'scissors'];

    let randomChoice = Math.floor(Math.random() * choice.length);
    console.log(randomChoice, choice[randomChoice]);

    // verify choice of the bot

    if(choice[randomChoice] == 'rock'){
        choiceBotImages.textContent = 'rock';
    }
    else if(choice[randomChoice] == 'paper'){
        choiceBotImages.textContent = 'paper';
    }
    else if(choice[randomChoice] == 'scissors'){
        choiceBotImages.textContent = 'scissors';
    }

    // verify choice of the user, then display the result
    if(result.textContent == 'rock'){
        switch(choice[randomChoice]){

            case 'rock':
                result.textContent = "it's a tie !"
            break;
    
            case 'paper':
                result.textContent = 'player lose';
            break;
    
            case 'scissors':
                result.textContent = 'player win';
            break;
        }
    }
    else if(result.textContent == 'paper'){
        switch(choice[randomChoice]){

            case 'rock':
                result.textContent = 'player win';
            break;
    
            case 'paper':
                result.textContent = "it's a tie !"
            break;
    
            case 'scissors':
                result.textContent = 'player lose';
            break;
        }
    }
    else if(result.textContent == 'scissors'){
        switch(choice[randomChoice]){

            case 'rock':
                result.textContent = 'player lose';
            break;
    
            case 'paper':
                result.textContent = 'player win';
            break;
    
            case 'scissors':
                result.textContent = "it's a tie !"
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