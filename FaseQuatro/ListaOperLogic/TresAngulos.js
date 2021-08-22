// 15 - O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.

var prompt = require('prompt-sync')();

var angulo1 = prompt("Insira o primeiro angulo: ");
var angulo2 = prompt("Insira o segundo angulo: ");
var angulo3 = prompt("Insira o terceiro angulo: ");

var soma = angulo1*1 + angulo2*1 + angulo3*1;

var triangulo = (soma == 180);

console.log("O seu triangulo é válido? " + triangulo);