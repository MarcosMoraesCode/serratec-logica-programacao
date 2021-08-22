// 21- O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.

var prompt = require('prompt-sync')();

var numeroDito = prompt("Digite um número");

var quadrado = numeroDito**2;

console.log("O quadrado de " + numeroDito + " é " + quadrado);