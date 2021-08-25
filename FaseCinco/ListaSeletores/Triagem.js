// 8 - A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.


const prompt = require("prompt-sync")();

var paciente = prompt("Nome do paciente: ");

var vacinado = prompt("Está vacinado? 'ok' ou 'n ok'?");

var infeccao = vacinado != "ok";

if(vacinado == "ok"){

    console.log("[Triagem]");
    console.log("Sujeito à infecção? " + infeccao);

}else{
    console.log("[Triagem]");
    console.log("Sujeito à infecção? " + infeccao);
}


