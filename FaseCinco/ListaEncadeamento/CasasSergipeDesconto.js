/* 13- O vendedor das Casas Sergipe não pode perder negócio. Por isso, após o item, o sistema pergunta se deseja “Exibir preço com desconto”, que deve abater 5% no valor do produto. */

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
        console.log("A vista: R$ 95,00 ");
        break;        
    case '002':
        console.log("Cadeira luxo - R$ 200,00");
        console.log("A vista: R$ 190,00");
        break;
    case '003':
        console.log("Mesa simples - R$ 450,00");
        console.log("A vista: R$ 427.50");
        break;
    case '004':
        console.log("Mesa luxo - R$ 900,00");
        console.log("A vista: R$ 845,00");
        break;
    case '005':
        console.log("Cama - R$ 1500,00");
        console.log("A vista: R$ 1425,00");
        break;
    default:
        console.log("Código inválido, atenção a digitação!");
}