//16 - O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.

var prompt = require('prompt-sync')();

var mes = prompt("Mês do seu nascimento: ");

var dia = prompt("Dia do aniversário: ");

var diasJan = (mes == 1) && (dia >= 21);
var diasFev = (mes == 2) && (dia <=18);

var inteligente = (diasFev == true) || (diasJan == true);

console.log("Você é inteligente? " + inteligente);


