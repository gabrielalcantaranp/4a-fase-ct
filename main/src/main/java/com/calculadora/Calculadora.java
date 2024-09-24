package com.calculadora;

public class Calculadora {

    private int resultado =0;

    public double somar (int n1, int n2){
        resultado = n1 + n2;
        return resultado;
    }

    public double subtrair (int n1, int n2) {
        resultado = n1 - n2;
        return resultado;
    }

    public double multiplicar (int n1, int n2) {
        resultado = n1 * n2;
        return resultado;
    }

    public double dividir (int n1, int n2) {
        resultado = n1/n2;
        return resultado;
    }

}
