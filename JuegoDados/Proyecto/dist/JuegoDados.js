/*
Author: Gutiérrez Pérez Claudio Habraham
Date: 07/03/2025
*/

class JuegoDados {
    constructor(jugadores) {
        this.jugadores = jugadores;
        this.dados = [new Dado(), new Dado()];
        this.cantidadJugadas = 5;
    }

    iniciarJuego() {
        for (let i = 0; i < this.cantidadJugadas; i++) {
            let jugada = new Jugada();
            jugada.iniciarJugada(this.jugadores, this.dados);
        }
        this.determinaVencedor();
    }

    determinaVencedor() {
        let ganador = this.jugadores.reduce((prev, curr) => 
            (curr.puntoGanado > prev.puntoGanado ? curr : prev));

        let mensaje = ganador.puntoGanado > 0 ? `El ganador es: ${ganador.nombre}` : "¡Empate!";
        document.getElementById("winnerMessage").innerText = mensaje;
        document.getElementById("winnerMessage").style.display = "block";
    }
}
