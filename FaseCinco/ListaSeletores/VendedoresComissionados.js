// 11 - Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.


var prompt = require("prompt-sync")();

var vendas = prompt("Valor vendido no mês: ");

vendas = parseFloat(vendas);

var bonus = 0;

if(vendas>5000)
    bonus = (vendas - 5000)*0.09

var comissao = vendas*0.05;

console.log("Sua comissão: " + comissao);
console.log("Valor adicional: " + bonus);

