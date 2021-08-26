/*
* Serratec
* Lógica de programação - Prof. Zepa
* Atividade: Elicitação de Requisitos
* Squad: <NinguemSoltaaMaodeNinguem>
* Autor: <Pedro Coelho>
* Data: <dd/mês/yyyy>
* Descrição: <Implemente um programa que receba do usuário o valor do salário bruto de um
funcionário e imprima o valor com descontos de INSS, FGTS e Plano de Saúde. O programa
deve utilizar uma função para calcular cada um dos descontos, sendo que estas funções
devem receber o valor do salário bruto e retornar o valor a ser descontado. Os valores
descontados devem ser:
 INSS: 10% do valor bruto
 FGTS: 8%
 Plano de Saúde: R$100,00

 O programa deve informar um salário com valor igual ou acima do salário mínimo.
 Se for informado um salário menor, informar que está errado. (1100 reais)>
*/


const prompt = require("prompt-sync")();

function desconto(B){

    return (B*0.1 + B*0.08 + 100);
}

var valorDescontado = "";
var tentarNovamente = "";

do{

    var salario = prompt("Insira aqui seu salário bruto e descubra quanto será descontado: ");

    if(salario>=1100){
        valorDescontado = desconto(salario);
        console.log("O valor que você deve descontar do seu salário bruto é: ", valorDescontado);
    }else{
        console.log("O salário digitado é menor que um salário mínimo, não é possível descontar.\n");
    }

  tentarNovamente = prompt('Deseja inserir outro salário? "Sim" ou "Nao"? Atenção a escrita!');
}
while(tentarNovamente != "Nao");

console.log("Obrigado por utilizar o programa, até a próxima! ");



