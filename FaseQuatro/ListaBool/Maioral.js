// Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.

var prompt = require('prompt-sync')();

var amigo1 = prompt("Numero do amigo 1:  ");
var amigo2 = prompt("Numero do amigo 2:  ");


console.log(amigo1);
console.log(amigo2);
console.log("Amigo1 venceu?", amigo1>amigo2);
console.log("Amigo2 venceu?", amigo2>amigo1);
console.log("Houve empate?", amigo1 == amigo2);

