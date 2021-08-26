/*
* Serratec
* Lógica de programação - Prof. Zepa
* Atividade: Elicitação de Requisitos
* Squad: <NinguemSoltaaMaodeNinguem>
* Autor: <Raquel>
* Data: <23/08/2021>
* Descrição: <E então um milagre aconteceu e em uma linda sexta-feira, o nosso bebê nasceu.
Uau! Que incrível, nossa família cresceu! Somos papais de primeira viagem!
Mas espera um pouco aí, o que eu faço agora? Que choro é esse?
O que ela está fazendo?
Será que é: fome, sono, desconforto ou dor?
Você consegue me ajudar? Socorro!!"

Crie um programa que ajude esses papais de primeira viagem a identificar o que o bebê precisa através do seu choro. Caso o bebê tenha um choro diferente dos especificados, diga que o choro não foi reconhecido e que os papais precisam levar o bebê ao médico. 

Dica:
Choro de desconforto = "Éh" -> Verificar a fralda, frio ou calor.
Choro de fome = "Néh" ou "Nhé" -> Mamadeira ou Amamentar
Choro de sono = "Own" ou "Au ou "Ai" -> Colocar para dormir 
Choro de dor = "Unhé" + careta -> Pediatra e medicação>
*/



const prompt = require("prompt-sync")();

console.log("Calma papais! O guru dos choros infantis irá te guiar! \n Me conte mais sobre o choro do seu bebê!");

do{

  var resposta = prompt('Digite o número da opção: 1-"Eh" 2-"Neh" ou "Nhe" 3-"Own" ou "Au" ou "Ai" 4-"Unhe" e "Careta"');
  var solucionado = "";

    switch (resposta) {

      case '1':
        console.log("Xii. O bebe está desconfortável! Verifique a fralda, ou se está muito quente ou frio!");
        solucionado = "Sim";
        break;
      case '2':
        console.log("Ah! Essa eu sei! O seu bebê está com fome! Precisa ser amamentado, ou dê uma mamadeira!");
        solucionado = "Sim";
        break;
      case '3':
       console.log("Hmm! Seu nenem está irritado, ele está precisando dormir!");
        solucionado = "Sim";
        break;
      case '4':
        console.log("Pais, o guru recomenda que consultem logo um pediatra, seu bebe precisa de ajuda humana!");
        solucionado = "Sim";
        break;
      default:
        console.log("Isso não me parece um choro, se esforce mais para traduzir o choro do bebê!");
        solucionado = "Não";
    }
} 
while(solucionado == "Não");