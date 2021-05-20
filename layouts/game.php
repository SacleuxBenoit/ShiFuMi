<?php
include('../login_database.php');
include('../database/connection_database.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style_game.css">
    <title>SHIFUMI - game</title>
</head>
<body>

    <div id="player">
        <p>PlacerHolder image</p>
        
        <p>
            <button onclick="rock()">rock</button>
            <button onclick="paper()">paper</button>
            <button onclick="scissors()">scissors</button>
        </p>
    </div>

    <div id="bot">
        <p>PlacerHolder image</p>
        
        <p>
            <button>rock</button>
            <button>paper</button>
            <button>scissors</button>
        </p>
    </div>

    <div id="result"></div>

    <script src="../js/script.js"></script>
</body>
</html>