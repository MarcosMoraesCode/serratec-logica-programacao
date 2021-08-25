/* 6 - O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.*/


const prompt = require("prompt-sync")();

var qtdvezes = prompt("Qual é a sua visita? Em números: ");
qtdvezes = parseInt(qtdvezes);

if(qtdvezes>1){

    if(qtdvezes==2)
        console.log("Você já nos visitou duas vezes.");
    else 
        console.log("Você já nos visitou " + qtdvezes + " vezes." );
}
else
    console.log("Você já nos visitou uma vez.");

