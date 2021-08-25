/* No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha. */

const prompt = require("prompt-sync")();

console.log("Complementos disponíveis: \nQueijo, Bacon,  Alface,  Tomate,  Picles");

var complemento1 = prompt("Qual o primeiro complemento? ");
var complemento2 = prompt("Qual o segundo complemento? ");

var molho = "";

if(((complemento1 == "Queijo") || (complemento1 == "Bacon")) && ((complemento2 == "Queijo")||(complemento2 == "Bacon")))    
    console.log("[Cozinha] \nLanche com Queijo e Bacon!");
else {
    molho = prompt("Deseja molho? 's' ou 'n'? ");
    console.log("[Cozinha] \nLanche com " + complemento1 +" e " + complemento2 + ".");
}
if(molho == "s")
    console.log("Com molho!");
else
    console.log("Sem molho!");


