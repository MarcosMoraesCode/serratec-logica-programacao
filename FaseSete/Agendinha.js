/*A agendinha de contatos agora pode armazenar até 10 nomes e números de telefone, porém o usuário é quem escolhe em qual posição quer guardar o contato. Caso a posição já esteja ocupada, ele será questionado se quer ou não substituir. Todos os contatos continuam sendo exibidos ao final. Mas as posições ainda não utilizadas aparecem com o texto <vazio>.*/

const prompt = require("prompt-sync")();

console.log("============== Agenda ============== ");


var agenda = [];
var numero = [];
var remover = "n";
var resposta = "";

for(i = 0; i<10; i++){

    agenda[i] = "<vazio>"
    numero[i] = "<vazio>"
}

do{

    var posicao = prompt("Em qual posição deseja registrar o número? ");

    if(posicao>0 && posicao<=10){

        for(i = 0; i<10; i++){

            if(posicao == i + 1){
                if(agenda[i] == "<vazio>"){
                    agenda[i] = prompt("Digite o nome do contato: ");
                    console.log("");
                    numero[i] = prompt("Digite o número do contato: ");
                }else{
                    console.log("Já existe um contato registrado nesta posição");
                    remover = prompt("Deseja remover o contato existente? 's' ou 'n' ");
                    if(remover == "s"){
                        agenda[i] = "<vazio>";
                        numero[i] = "<vazio>";}
                }
            }
            
        }
    }else
        console.log("Digite uma posição válida de 1 a 10.");

resposta = prompt("Deseja adicionar outro contato? 's' ou 'n'? ");

}while(resposta == "s");


console.log("\n========== Lista atual ==========");

for(i = 0; i<10; i++){
    console.log("Nome do contato: " + agenda[i] + " número: " + numero[i]);
}