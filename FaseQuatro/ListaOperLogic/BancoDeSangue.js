// 17 - Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.

var prompt = require('prompt-sync')();

console.log("=====Banco de Sangue=====");
console.log("Digite 'Sim' ou 'Nao' para as opções a seguir: \n");

var idade = prompt("Você tem menos de 16 anos ou mais de 69?");
var peso = prompt("Pesa menos de 50Kg? ");
var hepatite = prompt("Portador de Hepatide: ");
var malaria = prompt("Já teve malária? ");
var doacaoRecente = prompt("Fez doação recente? ");

var podeDoar = (idade != "Sim") && (peso != "Sim") && (hepatite == "Nao") && (malaria == "Nao") && (doacaoRecente != "Sim");

console.log("Pode doar sangue? ", podeDoar);

