/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.baanco;

import java.util.Scanner;

public class Baanco {
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("----BANCO NOSSA ALEGRIA------");
        System.out.println("dIGITE SEU NOME:");
        String Nome = scan.nextLine();
        System.out.println("Digite o numero da sua conta:");
        int Numero = scan.nextInt();
        System.out.println("Digite a agencia da sua conta:");
        int Agencia = scan.nextInt();
        System.out.println("digite o Saldo para deposito:");
        float saldo = scan.nextFloat();
        System.out.println("----BANCO NOSSA ALEGRIA------");
        System.out.println("Dados bancarios;");
        System.out.println("               Tipo de dado ");
        System.out.println("Nome: " +Nome);
        System.out.println("Numero agencia: " +Agencia);
        System.out.println("Numero Conta: " +Numero);
        System.out.println("saldo: " +saldo);
       
        
    }
}
