/*
Author: Gutiérrez Pérez Claudio Habraham
Date: 07/03/2025
*/
class Jugada {
    iniciarJugada(jugadores, dados) {
        let puntajes = jugadores.map(jugador => this.turnarJugador(jugador, dados));
        this.determinarGanador(jugadores, puntajes);
    }

    turnarJugador(jugador, dados) {
        return jugador.lanzaDados(dados[0], dados[1]);
    }

    determinarGanador(jugadores, puntajes) {
        let maxPuntos = Math.max(...puntajes);
        let ganadores = jugadores.filter((_, index) => puntajes[index] === maxPuntos);
        
        ganadores.forEach(g => g.puntoGanado++);
    }
}
