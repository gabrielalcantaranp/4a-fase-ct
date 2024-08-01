package com.main;

public class Estudante extends Pessoa {

    private String matricula;
    private String curso;

    public Estudante (String nome, int idade, String matricula, String curso) {
        
        super(nome,idade); 
        this.matricula = matricula;
        this.curso = curso;
        
    } //ISSO É UM CONSTRUTOR

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
    
}
