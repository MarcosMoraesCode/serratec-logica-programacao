// 19 - O sistema “Betmais” organiza as apostas de seus amigos. Você irá solicitar no grupo do Discord, ou whatsapp, que cada amigo lhe fale um número entre 1 e 10. Quando você receber todos os números, então irá criar uma variável e atribuir nela os valores, digitando na seguinte ordem: Os pares são somados, os ímpares subtraídos. O programa irá imprimir o resultado, para você repassar aos amigos.

var prompt = require('prompt-sync')();

var adrian = 8;
var rodrigo = 3;
var raquel = 2;
var angelita = 4;
var pedro = 5;

var betmais = adrian + raquel + angelita - rodrigo - pedro;

console.log(betmais);