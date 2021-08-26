/*
* Serratec
* Lógica de programação - Prof. Zepa
* Atividade: Elicitação de Requisitos
* Squad: <NinguemSoltaaMaodeNinguem>
* Autor: <Adrian>
* Data: <23/08/2021>
* Descrição: <Um dia Adrian foi jogar D&D (Dungeons & Dragons) na casa de um amigo, mas adrian esqueceu seus dados, que são essenciais para o desenrolar do jogo. Adrian agora precisa criar um programa(DiceRoll) para rolar os dados do jogo, sendo eles "d4"(dado de quatro lados),"d6"(dado de seis lados),"d8"(dado de oito lados),"d10"(dado de dez lados),"d12"(dado de doze lados,"d20"(dado de vinte lados).logo  após o programa dar a resposta, o programa deve perguntar se ele quer rodar outro dado ou não. assim executando o código novamente >
*/




const prompt = require("prompt-sync")();

var resposta = "Sim";

var d4 = Math.round(Math.random()*3 + 1);

var d6 = Math.round(Math.random()*5 + 1);

var d8 = Math.round(Math.random()*7 + 1);

var d10 = Math.round(Math.random()*9 + 1);

var d12 = Math.round(Math.random()*11 + 1);

var d20 = Math.round(Math.random()*19 + 1);

var dadoEscolhido = prompt('Qual dado quer rolar? "d4", "d6", "d8", "d10", "d12" ou "d20"?');

do{

  switch(dadoEscolhido){

    case 'd4':
      console.log(Math.round(Math.random()*3 + 1), "\n");
      resposta = prompt('Deseja jogar novamente? Digite "Sim", se não quiser mais, só aperte "enter": ');
      break;
    case 'd6':
      console.log(Math.round(Math.random()*5 + 1), "\n");
      resposta = prompt('Deseja jogar novamente? Digite "Sim", se não quer mais, só aperte "enter": ');
      break;
    case 'd8':
      console.log(Math.round(Math.random()*7 + 1), "\n");
      resposta = prompt('Deseja jogar novamente? Digite "Sim", se não quer mais, só aperte "enter": ');
      break;   
    case 'd10':
      console.log(Math.round(Math.random()*9 + 1), "\n");
      resposta = prompt('Deseja jogar novamente? Digite "Sim", se não quer mais, só aperte "enter": ');
      break;
    case 'd12':
      console.log(Math.round(Math.random()*11 + 1), "\n");
      resposta = prompt('Deseja jogar novamente? Digite "Sim", se não quer mais, só aperte "enter": ');
      break;    
    case 'd20':
      console.log(Math.round(Math.random()*19 + 1), "\n");
      resposta = prompt('Deseja jogar novamente? Digite "Sim", se não quer mais, só aperte "enter": ');
      break;
    default:
      dadoEscolhido = prompt('Digite uma opção válida! Escolha entre: "d4", "d6", "d8", "d10", "d12" o "d20"');
      break;
    } 
}
while(resposta == "Sim");

console.log("Obrigado por jogar!");
