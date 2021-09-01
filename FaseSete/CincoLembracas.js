/*O programa “cinco lembranças” vai ler quantos números o usuário quiser lançar. Após as leituras, serão apresentados na tela os cinco últimos números digitados. A entrada termina com o número zero (que não será lembrado).*/

const prompt = require("prompt-sync")();

i = 0;
j = 0;
var infinito = [];
var vetorResposta = [];

console.log("Enquanto você não digitar 0, eu vou ler todos os números.");

resposta = 1;

do{


    resposta = prompt("Digite o número: ");

    if(resposta != 0){
        infinito [i] = resposta;
        i++;
    }

}while(resposta != 0);

for(i = infinito.length -1; i >= infinito.length -5; i--){

    vetorResposta[j] = infinito[i];
    j++;

}

for(j = 0; j<vetorResposta.length;j++){

    console.log(vetorResposta[j]);
}

