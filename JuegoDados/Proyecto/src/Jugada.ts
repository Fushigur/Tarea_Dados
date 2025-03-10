class Jugada {
    iniciarJugada(jugador1: Jugador, jugador2: Jugador, dado1: Dado, dado2: Dado): void {
        let puntosJ1 = this.turnarJugador(jugador1, dado1, dado2);
        let puntosJ2 = this.turnarJugador(jugador2, dado1, dado2);
        this.determinarGanador(jugador1, puntosJ1, jugador2, puntosJ2);
    }

    turnarJugador(jugadorEnTurno: Jugador, dado1: Dado, dado2: Dado): number {
        return jugadorEnTurno.lanzaDados(dado1, dado2);
    }

    determinarGanador(j1: Jugador, pJ1: number, j2: Jugador, pJ2: number): void {
        if (pJ1 > pJ2) j1.puntoGanado++;
        else if (pJ2 > pJ1) j2.puntoGanado++;
    }
}
