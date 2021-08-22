// Desafio - A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.

const prompt = require("prompt-sync")();

var dia = prompt('Que dia do mês é hoje?: ');

var cpf = prompt("Digite seu CPF, após o hífen: "); 

resposta = dia%2 == cpf%2;

console.log('Autorizado a entrar na loja? ', resposta);


