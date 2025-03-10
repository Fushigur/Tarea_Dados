public class JuegoDados {
    int cantidadJugadas;
    Jugador jugador1;
    Jugador jugador2;
    int marcadorJugador1;
    int marcadorJugador2;
    Dado dado1;
    Dado dado2;
    Jugador vencedor;
    private boolean bandJugador;  //true = Jugador1, false = Jugador2

    public JuegoDados(String nombreJugador1, String nombreJugador2){
        this.jugador1 = new Jugador();
        this.jugador1.nombre = nombreJugador1;
        this.jugador2 = new Jugador();
        this.jugador2.nombre = nombreJugador2;
    }

    public void elegirPrimerLanzador(){
        if ((byte) (Math.random() * (3 - 1)) == 1) {
            this.bandJugador = true;
        }
        else {
            this.bandJugador = false;
        }
    }

    public void iniciarJugada(){
        Jugada jugadaActual = new Jugada();

        if (this.bandJugador) {
            jugadaActual.iniciarJugada(this.jugador1, this.jugador2,
                    this.dado1, this.dado2);
        }
        else {
            jugadaActual.iniciarJugada(this.jugador2, this.jugador1,
                    this.dado1, this.dado2);
        }

        this.marcadorJugador1 = this.marcadorJugador1 + this.jugador1.puntoGanado;
        this.marcadorJugador2 = this.marcadorJugador2 + this.jugador2.puntoGanado;
    }

    public void iniciarJuego(){
        //Crear dados, inicializar variables
        this.dado1 = new Dado();
        this.dado2 = new Dado();

        this.cantidadJugadas = 0;
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;

        elegirPrimerLanzador();

        //Ciclo infinito de juego
        do {
            iniciarJugada();

            this.cantidadJugadas++;

            System.out.println("Num. jugada: " + this.cantidadJugadas
                    + " puntaje jugador 1 = " + this.marcadorJugador1
                    + " puntaje jugador 2 = " + this.marcadorJugador2);



        } while( (this.marcadorJugador1 != 5) && (this.marcadorJugador2 != 5) );

        //Determina ganador
        this.vencedor = determinarVencedor();
    }

    public Jugador determinarVencedor(){
        //caso empate
        if ((this.marcadorJugador1 == 5) && (this.marcadorJugador2 == 5))
            return null;

        //ganó el jugador 1
        if (this.marcadorJugador1 == 5) {
                return jugador1;
            }
            else { //ganó el jugador 1
                if (this.marcadorJugador2 == 5) {
                    return jugador2;
                }
            }
        return null;
    }

}
