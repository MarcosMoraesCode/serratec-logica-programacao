// 9- Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

const prompt = require("prompt-sync")();

var diaDeHoje = prompt("Dia de hoje: ");

var numBoleto = prompt("Número do boleto: ");

diaDeHoje = parseInt(diaDeHoje);

var pagamento = diaDeHoje + 1;

var desconto = (pagamento>=10) && (pagamento<=13);

if(desconto){
    console.log("Dia de pagamento " + pagamento);
    console.log("Desconto na próxima mensalidade? " + desconto);
}
else{
    console.log("Dia de pagamento " + pagamento);
    console.log("Desconto na próxima mensalidade? " + desconto);
}
