package com.calculadora;
import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {
        int x, y;
        String sX, sY;

        sX = JOptionPane.showInputDialog(null,"Digite o primeiro número: ", "Primeiro número", JOptionPane.QUESTION_MESSAGE);
        x = Integer.parseInt(sX);

        sY = JOptionPane.showInputDialog(null,"Digite o segundo número: ", "Segundo número", JOptionPane.QUESTION_MESSAGE);
        y = Integer.parseInt(sY);

        Calculadora calc = new Calculadora();

        JOptionPane.showMessageDialog(null,"somar: " + calc.somar(x, y));
        JOptionPane.showMessageDialog(null, "subtrari: " + calc.subtrair(x, y));
        JOptionPane.showMessageDialog(null, "Multiplicar: " + calc.multiplicar(x, y));
        JOptionPane.showMessageDialog(null, "Dividir: " + calc.dividir(x, y));
        System.exit(0);


    }
}