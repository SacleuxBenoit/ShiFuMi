let player = document.getElementById('player');
let bot = document.getElementById('bot');
let result = document.getElementById('result');
let displayCurrentStrike = document.getElementById('displayCurrentStrike');
let displayBestStrike = document.getElementById('displayBestStrike');

let choicePlayerImages = document.getElementById('choicePlayerImages');
let choiceBotImages = document.getElementById('choiceBotImages');

// get Button player

let playerRock = document.getElementById('playerRock');
let playerPaper = document.getElementById('playerPaper');
let playerScissors = document.getElementById('playerScissors');

// get score player && bot

let paragraphtotalScore = document.getElementById('paragraphtotalScore');
let paragraphScoreBot = document.getElementById('paragraphScoreBot');

// init score of player && bot

let totalScore = 0;
let scoreBot = 0;
let winStrike = 0;
let bestStrike = 0;

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
                result.textContent = "it's a tie !";
                winStrike = 0;
                displayCurrentStrike.textContent = "current strike : " + winStrike
            break;
    
            case 'paper':
                result.textContent = 'Player lost this round';
                scoreBot += 1;
                winStrike = 0;
                displayCurrentStrike.textContent = "current strike : " + winStrike
                paragraphScoreBot.textContent = 'score : ' + scoreBot;
            break;
    
            case 'scissors':
                result.textContent = 'Player won this round';
                totalScore += 1;
                winStrike += 1;
                verifyBestStrike();
                displayCurrentStrike.textContent = "current strike : " + winStrike
                paragraphtotalScore.textContent = 'score : ' + totalScore;
            break;
        }
    }
    else if(result.textContent == 'paper'){
        switch(choice[randomChoice]){
            case 'rock':
                result.textContent = 'Player won this round';
                totalScore += 1;
                winStrike +=1;
                verifyBestStrike();
                displayCurrentStrike.textContent = "current strike : " + winStrike
                paragraphtotalScore.textContent = 'score : ' + totalScore;
            break;
    
            case 'paper':
                winStrike = 0;
                displayCurrentStrike.textContent = "current strike : " + winStrike;
                result.textContent = "it's a tie !"
            break;
    
            case 'scissors':
                result.textContent = 'Player lost this round';
                scoreBot += 1;
                winStrike = 0;
                displayCurrentStrike.textContent = "current strike : " + winStrike
                paragraphScoreBot.textContent = 'score : ' + scoreBot;
            break;
        }
    }
    else if(result.textContent == 'scissors'){
        switch(choice[randomChoice]){

            case 'rock':
                result.textContent = 'Player lost this round';
                scoreBot += 1;
                winStrike = 0;
                displayCurrentStrike.textContent = "current strike : " + winStrike
                paragraphScoreBot.textContent = 'score : ' + scoreBot;
            break;
    
            case 'paper':
                result.textContent = 'Player won this round';
                totalScore += 1;
                winStrike +=1;
                verifyBestStrike();
                displayCurrentStrike.textContent = "current strike : " + winStrike
                paragraphtotalScore.textContent = 'score : ' + totalScore;
            break;
    
            case 'scissors':
                result.textContent = "it's a tie !"
                winStrike = 0;
                displayCurrentStrike.textContent = "current strike : " + winStrike
            break;
        }
    }
}

function disableButtonPlayer(){
    playerRock.disabled = "true";
    playerPaper.disabled = "true";
    playerScissors.disabled = "true";
}

function buttonReset(){
    totalScore = 0;
    scoreBot = 0;
    winStrike = 0;

    paragraphtotalScore.textContent = 'score : ' + totalScore;
    paragraphScoreBot.textContent = 'score : ' + scoreBot;
    result.textContent = " ";
    choicePlayerImages.textContent = "PlacerHolder image";
    choiceBotImages.textContent = "PlacerHolder image";
    displayCurrentStrike.textContent = "current strike : " + winStrike
}

function verifyBestStrike(){
    if(winStrike > bestStrike){
        bestStrike +=1;
        displayBestStrike.textContent = "Best strike : " + bestStrike;
    }
}