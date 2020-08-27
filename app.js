/*

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his CURRENT score
- BUT, if the player rolls a 1, all his CURRENT score gets lost. After that, it's the next player's turn
- The player can choose to 'ADD & PASS', which means that his CURRENT score gets added to his MAIN score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


alert(`GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game`);


function renamePlayer0() {
    'use strict';
    let player1 = prompt("Change PLAYER 1 name");
    player1 ? document.querySelector("#player-name-0").innerHTML = player1 : document.querySelector("#player-name-0").innerHTML = "PLAYER 1";
    return true;
}

function renamePlayer1() {
    let player2 = prompt("Change PLAYER 2 name");
    player2 ? document.querySelector("#player-name-1").innerHTML = player2 : document.querySelector("#player-name-1").innerHTML = "PLAYER 2";
    return true;
}

renamePlayer0();
renamePlayer1();

document.getElementById("btn-rename-0").addEventListener("click", renamePlayer0);
document.getElementById("btn-rename-1").addEventListener("click", renamePlayer1);

let mainScore = [0, 0],
    currentScore = 0,
    activePlayer = 0;

document.querySelector(".player-box-" + activePlayer).classList.add("active");

document.getElementById('btn-roll').addEventListener("click", () => {
    let point = Math.floor((Math.random() * 6)) + 1;
    document.getElementById("dice").src = "resources/dice-" + point + ".png";
    document.getElementById("dice").alt = point;
    if (point !== 1) {
        currentScore += point;
        document.getElementById("current-score-" + activePlayer).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById("current-score-" + activePlayer).textContent = currentScore;
        document.querySelector(".player-box-" + activePlayer).classList.remove("active");
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector(".player-box-" + activePlayer).classList.add("active");
    }
    if (mainScore[activePlayer] >= 100 || mainScore[activePlayer] + currentScore >= 100) {
        mainScore[activePlayer] += currentScore;
        document.getElementById("main-score-" + activePlayer).textContent = mainScore[activePlayer];
        document.querySelector(".player-box-" + activePlayer).classList.add("winner");
        document.getElementById('btn-roll').style.display = "none";
        document.getElementById('btn-add-pass').style.display = "none";
    }
});

document.getElementById('btn-add-pass').addEventListener("click", () => {
    document.getElementById("current-score-" + activePlayer).textContent = 0;
    if (activePlayer === 0) {
        mainScore[0] += currentScore;
        document.getElementById("main-score-0").textContent = mainScore[0];
        document.querySelector(".player-box-" + activePlayer).classList.remove("active");
        activePlayer = 1;
        document.querySelector(".player-box-" + activePlayer).classList.add("active");
    } else {
        mainScore[1] += currentScore;
        document.getElementById("main-score-1").textContent = mainScore[1];
        document.querySelector(".player-box-" + activePlayer).classList.remove("active");
        activePlayer = 0;
        document.querySelector(".player-box-" + activePlayer).classList.add("active");
    }
    currentScore = 0;
});

document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm(`This will reset the game to its default. 
Your score can not be recovered after resetting.
Are you sure you want to reset?`)) {
        mainScore = [0, 0], currentScore = 0, activePlayer = 0;
        document.querySelector(".player-box-0").classList.remove("winner");
        document.querySelector(".player-box-1").classList.remove("winner");
        document.getElementById('btn-roll').style.display = "block";
        document.getElementById('btn-add-pass').style.display = "block";
        document.querySelector(".player-box-0").classList.add("active");
        document.querySelector(".player-box-1").classList.remove("active");
        document.getElementById("current-score-0").textContent = "00";
        document.getElementById("current-score-1").textContent = "00";
        document.getElementById("main-score-0").textContent = "00";
        document.getElementById("main-score-1").textContent = "00";
    }
});
                                                                                /*
                                                                                Suvam Das
                                                                                suvamdas27@gmail.com
                                                                                https://www.instagram.com/mesuvam
                                                                                https://www.linkedin.com/in/suvam-das-81b3b2154/
                                                                                https://www.facebook.com/chondro.bindu.chand.1997/
                                                                                */