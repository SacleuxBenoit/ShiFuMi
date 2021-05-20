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

// function 

function rock(){
    result.textContent = "rock";
}

function paper(){
    result.textContent = "paper";
}

function scissors(){
    result.textContent = "scissors";
}

function disableButton(){
    playerRock.disabled = 'true';
    playerPaper.disabled = 'true';
    playerScissors.disabled = 'true';

    botRock.disabled = 'true';
    botPaper.disabled = 'true';
    botScissors.disabled = 'true';
}