// 13 - Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

var prompt = require('prompt-sync')();

var temperatura = prompt ("Insira a temperatura aqui: ");

var mascara = prompt ('O sujeito está usando máscara? "S" ou "N": ');

var permissao = (mascara == "S") && (temperatura <= 37.5);

console.log("O cliente pode entrar na loja? ", permissao); 