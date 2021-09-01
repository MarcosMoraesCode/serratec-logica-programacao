/* O programa “Compromissos” gerencia a sua agenda do mês. Cada dia só comporta um compromisso. Você pode digitar um compromisso, informando o dia e a descrição, e consultar se existe algum apontamento para determinado dia.
Dicas: Escolha o mês que desejar, ou considere 30 dias. Você pode definir como critério de saída do programa a digitação do dia zero. Em JS, um array não inicializado possui undefined em todas as posições. */

const prompt = require("prompt-sync")(); 

var agenda = [];

var dia = -1;

    console.log("Agende seus compromissos!")

    for (i = 0; i<= 30; i++){
        agenda [i] = -1;
    }     

do{


    

    dia = prompt("Qual dia do mês")


    for (i = 0; i<= 30; i++){

        if(dia == (i + 1)){
            if(agenda[i] == -1){
                agenda[i] = prompt("Qual é o seu compromisso?");
                console.log("Compromisso anotado");
            }else    
                console.log("Você já tem um compromisso neste dia, ele é: " + agenda[i]);
        }
    }   
    
    var resposta = 0;
    resposta = prompt("Deseja agendar mais algum compromisso? Digite 's', caso contrário, digite 0.");

}while(resposta != 0)

    console.log("\n Todos os compromissos foram registrados.");
    dia = prompt("Deseja conferir algum dia? Qual? ");

    
    for (i = 0; i<= 30; i++){
        
        if(dia == i+1)
            if(i + 1 == dia && agenda[i] != -1)
                console.log("Seu compromisso é: " + agenda[i]);
            else
                console.log("Você não possui nada marcado para dia " + dia);
    }     
