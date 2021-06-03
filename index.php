<?php
include('./login_database.php');
include('./database/connection_database.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/style_game.css">
    <title>SHIFUMI - game</title>
</head>
<body>

    <div id="player">
        <p id="choicePlayerImages">PlacerHolder image</p>
        
        <p>
            <button onclick="rock()" id="playerRock">rock</button>
            <button onclick="paper()" id="playerPaper">paper</button>
            <button onclick="scissors()" id="playerScissors">scissors</button>
        </p>

        <p id="paragraphLifePlayer">
            life : 3
        </p>
    </div>

    <div id="bot">
        <p id="choiceBotImages">PlacerHolder image</p>
        
        <p>
            <button id="botRock" disabled>rock</button>
            <button id="botPaper" disabled>paper</button>
            <button id="botScissors" disabled>scissors</button>
        </p>

        <p id="paragraphLifeBot">
            life : 3
        </p>
    </div>

    <div id="result"></div>

    <div id="divButtonPlayAgain">
        <button id="buttonPlayAgain" onclick="buttonReset()">Play again</button>
    </div>

    <script src="./js/script.js"></script>
</body>
</html>