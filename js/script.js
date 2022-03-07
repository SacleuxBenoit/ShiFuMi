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

// get score player && bot

let paragraphScorePlayer = document.getElementById('paragraphScorePlayer');
let paragraphScoreBot = document.getElementById('paragraphScoreBot');

// init score of player && bot

let scorePlayer = 0;
let scoreBot = 0;

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
                result.textContent = 'Player lost this round';
                scoreBot += 1;
                paragraphScoreBot.textContent = 'score : ' + scoreBot;
            break;
    
            case 'scissors':
                result.textContent = 'Player won this round';
                scorePlayer += 1;
                paragraphScorePlayer.textContent = 'score : ' + scorePlayer;
            break;
        }
    }
    else if(result.textContent == 'paper'){
        switch(choice[randomChoice]){

            case 'rock':
                result.textContent = 'Player won this round';
                scorePlayer += 1;
                paragraphScorePlayer.textContent = 'score : ' + scorePlayer;
            break;
    
            case 'paper':
                result.textContent = "it's a tie !"
            break;
    
            case 'scissors':
                result.textContent = 'Player lost this round';
                scoreBot += 1;
                paragraphScoreBot.textContent = 'score : ' + scoreBot;
            break;
        }
    }
    else if(result.textContent == 'scissors'){
        switch(choice[randomChoice]){

            case 'rock':
                result.textContent = 'Player lost this round';
                scoreBot += 1;
                paragraphScoreBot.textContent = 'score : ' + scoreBot;
            break;
    
            case 'paper':
                result.textContent = 'Player won this round';
                scorePlayer += 1
                paragraphScorePlayer.textContent = 'score : ' + scorePlayer;
            break;
    
            case 'scissors':
                result.textContent = "it's a tie !"
            break;
        }
    }

    verifyLifePlayer();
    verifyLifeBot()
}

function verifyLifePlayer(){
    if(lifePlayer == 0){
        disableButtonPlayer();
        result.textContent = "winner is : Bot"
    }
}

function verifyLifeBot(){
    if(lifeBot == 0){
        disableButtonPlayer();
        result.textContent = "winner is : Player"
    }
}

function disableButtonPlayer(){
    playerRock.disabled = "true";
    playerPaper.disabled = "true";
    playerScissors.disabled = "true";
}

function buttonReset(){
    scorePlayer = 0;
    scoreBot = 0;

    paragraphScorePlayer.textContent = 'score : ' + scorePlayer;
    paragraphScoreBot.textContent = 'score : ' + scoreBot;
    result.textContent = " ";
    choicePlayerImages.textContent = "PlacerHolder image";
    choiceBotImages.textContent = "PlacerHolder image";
}