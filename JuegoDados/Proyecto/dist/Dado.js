/*
Author: Gutiérrez Pérez Claudio Habraham
Date: 07/03/2025
*/
var Dado = /** @class */ (function () {
    function Dado() {
        this.puntos = 0;
    }
    Dado.prototype.lanzar = function () {
        this.puntos = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
    };
    return Dado;
}());
