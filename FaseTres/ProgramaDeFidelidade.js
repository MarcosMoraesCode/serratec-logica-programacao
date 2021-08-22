// 25- O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.

var prompt = require('prompt-sync')();

console.log("Bem vindo ao programa de fidelidade, aqui você vê quantos pontos você tem! \n");

var cupons = prompt("Quantos cupons você possui?");

console.log("De acordo com seus cupons, você possui " + cupons + " pontos no programa de fidelidade!");

