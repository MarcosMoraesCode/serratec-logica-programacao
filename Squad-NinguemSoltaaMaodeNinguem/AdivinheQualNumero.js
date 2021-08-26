/*
* Serratec
* Lógica de programação - Prof. Zepa
* Atividade: Elicitação de Requisitos
* Squad: <NinguemSoltaaMaodeNinguem>
* Autor: <Angelita>
* Data: <22/08/2021>
* Descrição: <"UM DESAFIO" : Tente adivinhar qual o numero que eu to pensando? Você tem três chance para acertar, (de 0 - 20). Se a pessoa acertar "Parabéns! Você é esperto. Se a pessoa errar " Pode tentar outra vez, você tem mais n chance!  Se não acertar, o programa fala o numero que ele tava pensando e diz, "Haha o numero é tal, Você Perdeu!>
*/


const prompt = require("prompt-sync")();

var meuNumero =  Math.round(Math.random()*20);

var tentativa = 1;

console.log("Olá! Será que você consegue adivinhar o numero de 0 a 20 que estou pensando? Você tem 3 tentativas!\n");

do{
  var numero = prompt("E ai? Qual é o numero?!");

  console.log("");
              
  var incorreto = (numero != meuNumero);

  var repetir = incorreto && tentativa <=2; 

  if(incorreto){
      console.log("Errrrrrrou! Hahahahahah");
      tentativa++;
  }
  else
      console.log("Parabéns, você é muito inteligente!! Acertou!!");
}
while(repetir);

if(incorreto)
  console.log("Não foi dessa vez! O número era " + meuNumero + "!");

