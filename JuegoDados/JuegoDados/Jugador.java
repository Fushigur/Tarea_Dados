public class Jugador {

    public String nombre;
    public byte puntoGanado;

    /**
     *
     * @param dado1 Primer dado a lanzar
     * @param dado2 Segundo dado a lanzar
     * @return Devuelve la suma de los puntos obtenidos en ambos dados
     */
    public byte lanzaDados(Dado dado1, Dado dado2){
        dado1.lanzar();
        dado2.lanzar();

        //retornar los puntos que cayeron en los dados
        return (byte) (dado1.puntos + dado2.puntos);
    }
}
