/*
Author: Gutiérrez Pérez Claudio Habraham
Date: 07/03/2025
*/
class Dado {
    puntos: number;

    constructor() {
        this.puntos = 0;
    }

    lanzar(): void {
        this.puntos = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
    }
}
