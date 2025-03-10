class JuegoDados {
    cantidadJugadas: number;
    jugador1: Jugador;
    jugador2: Jugador;
    dado1: Dado;
    dado2: Dado;

    constructor(nombreJugador1: string, nombreJugador2: string) {
        this.jugador1 = new Jugador(nombreJugador1);
        this.jugador2 = new Jugador(nombreJugador2);
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.cantidadJugadas = 5;
    }

    iniciarJuego(): void {
        for (let i = 0; i < this.cantidadJugadas; i++) {
            let jugada = new Jugada();
            jugada.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
        }
        this.determinaVencedor();
    }

    determinaVencedor(): void {
        if (this.jugador1.puntoGanado > this.jugador2.puntoGanado) 
            console.log(`El ganador es: ${this.jugador1.nombre}`);
        else if (this.jugador2.puntoGanado > this.jugador1.puntoGanado) 
            console.log(`El ganador es: ${this.jugador2.nombre}`);
        else 
            console.log("¡Empate!");
    }
}
