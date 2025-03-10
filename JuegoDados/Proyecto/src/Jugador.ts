class Jugador {
    nombre: string;
    puntoGanado: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.puntoGanado = 0;
    }

    lanzaDados(dado1: Dado, dado2: Dado): number {
        dado1.lanzar();
        dado2.lanzar();
        return dado1.puntos + dado2.puntos;
    }
}
