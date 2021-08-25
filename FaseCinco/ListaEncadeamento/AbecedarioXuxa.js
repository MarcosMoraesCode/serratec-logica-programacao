/* 10 - “No abecedário da Xuxa, vamos aprender!” Lembra da música? Então, crie um programa que recebe uma letra maiúscula e canta sua “definição musical”. */

const prompt = require("prompt-sync")();

var resposta = prompt("Abecedário da Xuxa, 'canta' a letra ai: ");


switch(resposta){
    case'A':
        console.log("amor"); break;
    case'B':
        console.log("baixinho"); break;
    case'C':
        console.log("coração"); break;
    case'D':
        console.log("docinho"); break;
    case'E':
        console.log("escola"); break;
    case'F':
        console.log("feijão"); break;
    case'G':
        console.log("gente"); break;
    case'H':
        console.log("humano"); break;
    case'I':
        console.log("igualdade"); break;
    case'J':
        console.log("juventude"); break;
    case'L':
        console.log("liberdade"); break;
    case'M':
        console.log("molecagem"); break;
    case'N':
        console.log("natureza"); break;
    case'O':
        console.log("obrigado"); break;
    case'P':
        console.log("proteção"); break;
    case'Q':
        console.log("quero-quero"); break;
    case'R':
        console.log("riacho"); break;
    case'S':
        console.log("saudade"); break;
    case'T':
        console.log("terra");
    case'U':
        console.log("universo");
    case'V':
        console.log("vitória");
    case'X':
        console.log("Xuxa"); break;
    case'Z':
        console.log("Zum-zum-zum-zum-zum"); break;
    default:
        console.log("É pra por uma letra maíscula colega!"); break;
}