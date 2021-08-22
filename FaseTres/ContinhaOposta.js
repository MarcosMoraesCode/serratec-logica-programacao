/// 15 - A “continha oposta” lê um número e mostra seu valor negativo.

const prompt = require('prompt-sync')();

var resposta = prompt("Olá, me diga um número e direi seu valor negativo!");

var oposto = "-" + resposta;

console.log(oposto);
