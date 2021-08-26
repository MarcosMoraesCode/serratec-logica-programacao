/*
* Serratec
* Lógica de programação - Prof. Zepa
* Atividade: Elicitação de Requisitos
* Squad: <NinguemSoltaaMaodeNinguem>
* Autor: <Marcos Moraes>
* Data: <23/08/2021>
* Descrição: <Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito, bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso, avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto válido.
Dica: Use paçoca como "pacoca" e café como "cafe".>
*/


const prompt = require("prompt-sync")();


function temEstoque(B){

  return (B == "bala") || (B == "pirulito") || (B == "bombom") || (B == "jujuba");
}

function naoTemEstoque(B){

  return (B == "cafe") || (B == "pacoca");
}

console.log("Zepa: Olá pessoa bonita! \nSeja bem-vinda a minha barraquinha!");

var item = prompt('Zepa: Eu vendo "cafe", bala, pirulito, bombom, "pacoca" e jujuba, o que deseja comprar?');

do{
  
var condicao = temEstoque(item);

var vicio = naoTemEstoque(item);

var itemValido = condicao || vicio;

  if(itemValido){  

    if (condicao)
      console.log("Zepa: Obrigado por comprar " + item + " comigo! Tenha uma boa semana!");
    else 
      console.log("Zepa: Tudo bem, eu confesso! Sou viciado em " + item + ". Não resisti e acabei com o  estoque!");
  }
  else{    
    console.log("Desculpe, mas não vendo " + item + ". Isso vou ficar te devendo...");
    item = prompt('Zepa: Mas você pode escolher entre "cafe", bala, pirulito, bombom ou "pacoca": ');
  }
}
while(!itemValido);
