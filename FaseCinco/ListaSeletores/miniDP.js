/*O “mini DP” aumentou seus cálculos. Agora, considere a jornada de trabalho semanal de um funcionário, que é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Considerando que o mês possui 4 semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.
Salário base (valor da hora * horas normais)
Valor de horas extras
Valor do desconto para o INSS
Salário líquido (Salário base + horas extras – desconto INSS)
Imprimir na tela o contracheque do funcionário. */

const prompt = require("prompt-sync")();

var valorHora = prompt("Qual o seu valor hora? ");
valorHora = parseFloat(valorHora);

var qtdHora = prompt("Trabalhou quantas horas?");
qtdHora = parseInt(qtdHora);

salarioBase = valorHora*40;

var precoExtra = (qtdHora-40)*valorHora*1.5;
var descontoI = salarioBase*0.05;
var salarioLiquido = 0;

//Considerando salário base mínimo baseado em 40 horas semanais.
if(qtdHora>40){
    salarioLiquido = (salarioBase + precoExtra - descontoI);
    console.log("O seu contracheque é de : " + salarioLiquido);
}
else{
    salarioLiquido = (salarioBase - descontoI);
    console.log("O seu contracheque é de :" + salarioLiquido);
}





