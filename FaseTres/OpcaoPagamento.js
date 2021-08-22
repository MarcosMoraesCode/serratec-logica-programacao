// 22 - Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.

var todosOsJogos = 345.00;

var videogame = 1545.00;

var opcao1 = (todosOsJogos+videogame)/3.00;

var opcao2 = (todosOsJogos+videogame)/5.00;

var opcao3 = ((todosOsJogos+videogame)*1.015)/10.00;

console.log("Para esse valor de compra temos as seguintes opções de parcelamento: \n");
console.log("Pagar 3 parcelas de " +opcao1+ ". ");
console.log("Pagar 5 parcelas de " +opcao2+ ". ");
console.log("Pagar 10 parcelas de " +opcao3+ ". ");