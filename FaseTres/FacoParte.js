// 18 - O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade. O resultado apresentado na tela será: “Teresópolis tem x anos. Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão.

var prompt = require('prompt-sync')();

var idadeTeresopolis = 130;
var minhaIdade = 25;
var antesDeMim = idadeTeresopolis - minhaIdade;

console.log("Teresópolis tem " + idadeTeresopolis + " anos. Desses, foram " + antesDeMim + " antes de mim. Mas nos últimos " + minhaIdade + " anos ela conta comigo!");



