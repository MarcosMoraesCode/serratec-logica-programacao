/* 9 - No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.*/

const prompt = require("prompt-sync")();

var numero = 0;

var carta = "";

do{ 

 carta = prompt("Qual carta você escolhe? ");
 switch(carta){

    case '2':
        numero = numero + 2; 
        break;
    case '3':
        numero = numero + 3;
        break;
    case '4':
        numero = numero + 4;
        break;
    case '5':
        numero = numero + 5;
        break;
    case '6':
        numero = numero + 6;
        break;
    case '7':
        numero = numero + 7;
        break;
    case '8':
        numero = numero + 8;
        break;
    case '9':
        numero = numero + 9;
        break;
    case '10':
        numero = numero + 10;
        break;
    case 'J':
        numero = numero + 11;
        break;
    case 'Q':
        numero = numero + 12;
        break;   
    case 'K':
        numero = numero + 13;
        break;
    default:
        console.log("Valor inválido");
 }
 var resposta = prompt("Deseja jogar pedir mais uma carta? Sim ou Nao?");

      
} while( (resposta == "Sim") && (numero<21) )

if(numero == 21)
    console.log("Parabéns, você ganhou! ");
else
    console.log("Você perdeu, sua soma deu: " + numero + ".");



