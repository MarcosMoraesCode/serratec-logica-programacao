/* 11-  Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares). */

const prompt = require("prompt-sync")();

var numeroDesejado = prompt("Até que número deseja contar? Digite um número valido (ex:65) ");

var parOuImpar = prompt("Você quer saber os pares, ou os impares?" );

var vaiGirando = 1;

do{ 
    
            
    switch(parOuImpar){

        case 'pares':
            if(vaiGirando%2 == 0){
                console.log(vaiGirando + " é par.");
            }
            vaiGirando = vaiGirando +1;
            break;
        case 'impares':
            if(vaiGirando%2 != 0){
                console.log(vaiGirando + " é impar.");
            }
            vaiGirando = vaiGirando +1;
            break;
        default:
            parOuImpar = prompt("Escreva se você quer saber os números pares ou impares: ");
    }

}while(vaiGirando<numeroDesejado);

console.log("Esses são todos nos numeros " + parOuImpar + " até " + numeroDesejado);