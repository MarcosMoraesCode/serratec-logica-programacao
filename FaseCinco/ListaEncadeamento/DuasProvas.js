/* 5 - Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10 */

const prompt = require("prompt-sync")();

var notaP1 = prompt("Nota da prova 1: ");
var notaP2 = prompt("Nota da prova 2: ");

notaP1 = parseInt(notaP1);
notaP2 = parseInt(notaP2);

var resultado = notaP1 + notaP2;

if (resultado> 4){

    if(resultado>8)
        console.log("Destaque! ");
    else if (resultado>6)
        console.log("Aprovado!");
    else if (resultado<=6)
        console.log("Recuperação!");
}
else
    console.log("Reprovado!");

