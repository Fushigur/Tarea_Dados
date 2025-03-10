// Ejecutar el juego
/*
Author: Gutierrez Perez Claudio Habraham
Date:08/03/2025
*/

window.onload = function () {
    document.getElementById("rollButton").style.display = "none";
    document.getElementById("resetButton").style.display = "none";
};

window.players = [];
window.round = 0;
window.lastIndex = [];
window.gameOver = false;

window.iniciarJuego = function () {
    console.log("Iniciando el juego...");

    let numPlayers = parseInt(document.getElementById("numPlayers").value);
    window.players = [];
    window.lastIndex = new Array(numPlayers).fill(-1);
    window.round = 0;
    window.gameOver = false;

    if (isNaN(numPlayers) || numPlayers < 1) {
        alert("Debes seleccionar al menos 1 jugador.");
        return;
    }

    let gameContainer = document.getElementById("gameContainer");
    gameContainer.innerHTML = "";

    for (let i = 0; i < numPlayers; i++) {
        let player = {
            name: `Jugador ${i + 1}`,
            rolls: [],
            points: 0 
        };
        window.players.push(player);

        let playerContainer = document.createElement("div");
        playerContainer.classList.add("player-container");

        let playerLabel = document.createElement("h3");
        playerLabel.innerText = player.name;

        let scene = document.createElement("div");
        scene.classList.add("scene");

        let cube = document.createElement("div");
        cube.classList.add("cube");
        cube.id = `cube${i}`;

        const faces = ["1", "6", "3", "4", "5", "2"];
        const faceClasses = ["front", "back", "right", "left", "top", "bottom"];
        for (let j = 0; j < faces.length; j++) {
            let face = document.createElement("div");
            face.classList.add("face", faceClasses[j]);
            face.innerText = faces[j];
            cube.appendChild(face);
        }

        scene.appendChild(cube);
        playerContainer.appendChild(playerLabel);
        playerContainer.appendChild(scene);
        gameContainer.appendChild(playerContainer);
    }

    document.getElementById("rollButton").style.display = "block";
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("winnerMessage").style.display = "none";
    updateScoreTable();
};



window.rollDice = function () {
    if (window.gameOver) return; // No permite jugar si ya hay un ganador

    window.round++;
    let historyTable = document.getElementById("historyTable").querySelector("tbody");

    let rotations = [
        [0, 0, 1],     // 1 arriba
        [0, 180, 6],   // 6 arriba
        [0, -90, 3],   // 3 arriba
        [0, 90, 4],    // 4 arriba
        [-90, 0, 5],   // 5 arriba
        [90, 0, 2]     // 2 arriba
    ];

    let maxPoints = 5;
    let winners = [];

    window.players.forEach((player, index) => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * rotations.length);
        } while (newIndex === window.lastIndex[index]);

        window.lastIndex[index] = newIndex;

        let [x, y, result] = rotations[newIndex];

        let extraX = x + 360;
        let extraY = y + 360;

        let cube = document.getElementById(`cube${index}`);
        cube.style.transform = `rotateX(${extraX}deg) rotateY(${extraY}deg)`;

        setTimeout(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
        }, 500);

        player.rolls.push(result);

        // Si saca un 6, incrementar sus puntos
        if (result === 6) {
            player.points++;
        }

        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${player.name}</td><td>${window.round}</td><td>${result}</td>`;
        historyTable.appendChild(newRow);
    });

    updateScoreTable();

    // Verificar si hay ganadores
    window.players.forEach(player => {
        if (player.points >= maxPoints) {
            winners.push(player.name);
        }
    });

    if (winners.length > 0) {
        window.gameOver = true;
        document.getElementById("rollButton").disabled = true;

        if (winners.length === 1) {
            document.getElementById("winnerMessage").innerText = `🎉 El ganador es: ${winners[0]} 🎉`;
        } else {
            document.getElementById("winnerMessage").innerText = `🤝 Empate entre: ${winners.join(", ")} 🤝`;
        }

        document.getElementById("winnerMessage").style.display = "block";
    }
};

window.updateScoreTable = function () {
    let scoreTable = document.getElementById("scoreTable").querySelector("tbody");
    scoreTable.innerHTML = "";

    window.players.forEach(player => {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${player.name}</td><td>${player.points}</td>`;
        scoreTable.appendChild(newRow);
    });
};

window.resetGame = function () {
    document.getElementById("gameContainer").innerHTML = ""; // Borra los dados
    document.getElementById("historyTable").querySelector("tbody").innerHTML = ""; // Borra el historial
    document.getElementById("scoreTable").querySelector("tbody").innerHTML = ""; // Borra los puntajes
    document.getElementById("winnerMessage").style.display = "none"; // Oculta el mensaje de ganador
    document.getElementById("rollButton").style.display = "none"; // Oculta el botón de lanzar
    document.getElementById("resetButton").style.display = "none"; // Oculta el botón de reinicio
    document.getElementById("rollButton").disabled = false;
    window.players = [];
    window.round = 0;
    window.gameOver = false;
};
