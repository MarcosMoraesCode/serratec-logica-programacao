// 26 - O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.

var prompt = require('prompt-sync')();

console.log("Bem vindo ao programa de fidelidade, aqui você vê quantos pontos você tem! \n");

var cupons = prompt("Quantos cupons você possui?");

cupons = cupons*3;

console.log("De acordo com seus cupons, você possui " + cupons + " pontos no programa de fidelidade!");