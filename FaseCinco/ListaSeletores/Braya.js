// 12 - Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.

var prompt = require("prompt-sync")();

var temSol = prompt("Tem sol? 's' ou 'n'?");

if(temSol == "s")
    console.log("Manhã: Ir à praia. \nAlmoço: Levar um lanche.");
else
    console.log("Manhã: Estudar. \nAlmoço: Feijoada.");

//Acredito que o ato de assistir TV independe da previsão do tempo, pelo enunciado.
console.log("Após almoço: Assistir Tv e tirar um cochilo.");

