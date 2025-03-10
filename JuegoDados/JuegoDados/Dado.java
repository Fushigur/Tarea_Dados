public class Dado {
    public byte puntos;

    /**
     * Este método simula el lanzamiento de un dado, mediante la función random
     * y asignando el valor al atributo puntos
     */
    public void lanzar(){
        //Simular el lanzamiento
        this.puntos = (byte) (Math.random() * (7 - 1));
    }
}
