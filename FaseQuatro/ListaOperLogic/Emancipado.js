// 14 - É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.

var prompt = require('prompt-sync')();

var genero = prompt('Insira seu genero, "Masculino" ou "Feminino": ');

var anoAtual = 2021;

var nascimento = prompt("Digite o ano de seu nascimento: ");

var emancipado = ((anoAtual - nascimento) >= 21 ) || (((anoAtual - nascimento) >= 18 )&& genero == "Masculino");

console.log("Você é emancipado? " + emancipado);


