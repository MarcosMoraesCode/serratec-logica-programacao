// 11 - No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 

const prompt = require('prompt-sync')();

var idade = prompt("Digite aqui sua idade:");

var resposta = idade >= 16;

console.log("Sua idade é ", + idade + ", você pode votar? " + resposta);

