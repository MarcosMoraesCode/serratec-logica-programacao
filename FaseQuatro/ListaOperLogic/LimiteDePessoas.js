// 12 - O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.

var prompt = require('prompt-sync')();

var qttd = prompt("Quantas pessoas tem na loja?");

var limite = 50;

var permissao = qttd<50;

console.log("O cliente pode entrar na loja? " + permissao);