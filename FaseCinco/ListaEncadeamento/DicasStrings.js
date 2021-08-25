

var texto = "uma string é um vetor!";

var trecho = texto[0];

console.log(trecho);

var tamanho = texto.length;
console.log("tamanho " + tamanho);


//Não é de quatro a 6, é 6 caracteres a partir do 4.
trecho = texto.substr(4, 6);
console.log(trecho);

var posicao = texto.indexOf("");
console.log("posição do primeiro espaço é " + posicao);

trecho = texto.toUpperCase();
console.log("tudo em maísculas: " + trecho);

trecho = texto.toLowerCase();
console.log("tudo em mínusculas: " + trecho);

function substituir(texto, antigo, novo);