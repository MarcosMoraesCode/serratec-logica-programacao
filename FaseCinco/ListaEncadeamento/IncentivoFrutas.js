/* 11 - No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita, e receberá alguma informação singular sobre ela. Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral. */

const prompt = require("prompt-sync")();

var nomeFruta = prompt('Dentre "Maca", "Manga", "Uva", "Banana", "Melancia" e "Mamao" ');

switch(nomeFruta){

    case 'Maca':
        console.log("A maça mais nutritiva é a maça argentina");
        break; 
    case 'Manga':
        console.log("Nunca alimente um cão com essa fruta!");
        break;
    case 'Uva':
        console.log("Responsável pela produção dos vinhos!");
        break;
    case 'Banana':
        console.log("Ótima para evitar caibras");
        break;
    case 'Melancia':
        console.log("Uma das frutas mais refrescantes no verão");
        break;
    case 'Mamao':
        console.log("Um mamao lava a outra");
        break;
    default:
        console.log("Atenção a escrita da fruta!");
}