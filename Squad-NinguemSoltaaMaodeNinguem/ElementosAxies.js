/*
* Serratec
* Lógica de programação - Prof. Zepa
* Atividade: Elicitação de Requisitos
* Squad: <NinguemSoltaaMaodeNinguem>
* Autor: <Rodrigo de Paula>
* Data: <23/08/2021>
* Descrição: <Cliente precisa de um programa para obter informações a respeito dos elementos dos seus Axies, informando qual elemento possui vantagem ou desvantagem sobre o outro.
Informações sobre os elementos dos axies :
("Beast", "Bug" e "Mech) < ("Aquatic", "Bird" e "Dawn") <("Reptile", "Plant" e "Dusk") < ("Beast", "Bug" e "Mech)>
*/

const prompt = require("prompt-sync")();

function elementosExistentes(B){

    return (B == "Beast") || (B == "Bug") || (B == "Mech") || (B == "Aquatic") || (B == "Bird") || (B == "Dawn") || (B == "Reptile") || (B == "Plant") || (B == "Dusk"); 
}

console.log("Saudações! Bem vindo(a) ao comparômetro de elementos Axie!\n");
var elemento = prompt("Qual é o elemento do seu Axie? ");

do{
    var elementoValido = ""; 

    if(elementosExistentes(elemento)){

        switch(elemento) {
            case 'Beast': 
            case 'Bug':
            case 'Mech':
                console.log("\nO elemento " + elemento + " é forte contra Reptile, Plant e Dusk!");
                console.log("Mas " + elemento + " é fraco contra Aquatic, Bird e Dawn!\n");
                elementoValido = "Sim";
                break;
            case 'Aquatic': 
            case 'Bird':
            case 'Dawn':
                console.log("\nO elemento " + elemento + " é forte contra Beast, Bug e Mech!");
                console.log("Mas " + elemento + " é fraco contra Reptille, Plant e Dusk!\n");
                elementoValido = "Sim";
                break;
            case 'Reptile': 
            case 'Plant':
            case 'Dusk':
                console.log("\nO elemento " + elemento + " é forte contra Aquatic, Bird e Dawn!");
                console.log("Mas " + elemento + " é fraco contra Beast, Bug e Mech!\n");
                elementoValido = "Sim";
                break;
            default:
                console.log("");
               
         }
    }
    else{
        console.log(elemento + " não é um elemento conhecido em Axie, confira se digitou corretamente!");
        elemento = prompt('Os elementos Axie são: "Beast", "Bug", "Mech", "Bird", "Down", "Reptile", "Plant" ou "Dusk":');
    }
}
while(elementoValido != "Sim")

console.log("Obrigado por usar o nosso comparômetro de Axies, até a próxima!");





 