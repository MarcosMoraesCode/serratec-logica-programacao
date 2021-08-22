// 17- Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.

const prompt = require('prompt-sync')();

var num1 = prompt("Digite o primeiro número:");

var num2 = prompt("Digite o segundo número");

console.log("Abaixo se encontram as operações de soma, subtração, multiplicação e divisão respectivamente");
console.log(num1 + " + " + num2 + "\n");
console.log(num1 + " - " + num2 + "\n");
console.log(num1 + " * " + num2 + "\n");
console.log(num1 + " / " + num2 + "\n");

