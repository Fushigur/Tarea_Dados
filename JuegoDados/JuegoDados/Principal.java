public class Principal {
    public static void main(String[] args) {

        if (args.length != 2) {
            System.out.println("Debes enviar 2 nombres para los jugadores");
            System.exit(1);
        }

        System.out.println("Primer Jugador: " + args[0]); 
        System.out.println("Segundo Jugador: " + args[1]); 

        //leer nombres de jugadores desde el teclado
        JuegoDados juego = new JuegoDados(args[0], args[1]);

        juego.iniciarJuego();

        /*
        while (juego.vencedor != null){

            juego.iniciarJuego();
        }
        */

        if (juego.vencedor == null)
            System.out.println("Empate. No hay un vencedor ");
        else
            System.out.println("El vencedor es: " + juego.vencedor.nombre);
    }
}