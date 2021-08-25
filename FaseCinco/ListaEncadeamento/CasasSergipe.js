/*A loja “Casas Sergipe” vende os seguintes itens:
001 Cadeira simples - R$ 100,00
002 Cadeira luxo - R$ 200,00
003 Mesa simples - R$ 450,00
004 Mesa luxo - R$ 900,00
005 Cama - R$ 1500,00
Quando o vendedor digitar o código do item, o sistema de vendas exibe o nome do produto e o valor de venda.*/

const prompt = require("prompt-sync")();

var codigo = prompt("Digite o código do produto: ");

switch(codigo){

    case '001':
        console.log("Cadeira simples - R$ 100,00");
        break;        
    case '002':
        console.log("Cadeira luxo - R$ 200,00");
        break;
    case '003':
        console.log("Mesa simples - R$ 450,00");
        break;
    case '004':
        console.log("Mesa luxo - R$ 900,00");
        break;
    case '005':
        console.log("Cama - R$ 1500,00");
        break;
    default:
        console.log("Código inválido, atenção a digitação!");
}
