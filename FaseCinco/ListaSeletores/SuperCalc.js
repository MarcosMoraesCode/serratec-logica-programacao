// 14 - A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, e depois realiza a operação. Considere as entradas na ordem: primeiro número, sinal (+, -, * ou /) e segundo número.

const prompt = require("prompt-sync")();

var num1 = prompt("Digite o primeiro número: ");

num1 = parseFloat(num1);

var operacao = prompt("Digite a operação desejada: + , -, * ou / ");

var num2 = prompt("Digite o segundo número: ");

num2 = parseFloat(num2);

var soma = num1+num2;
var subtracao = num1-num2;
var multiplicacao = num1*num2;
var divisao = num1/num2;

if(operacao == "+")
    console.log("Resposta: " + soma);
else if(operacao == "-")
    console.log("Resposta: " + subtracao);
else if(operacao == "*")
    console.log("Resposta: " + multiplicacao);
else if(operacao == "/")
    console.log("Resposta " + divisao)
else
    console.log("Operação Inválida. ");
    