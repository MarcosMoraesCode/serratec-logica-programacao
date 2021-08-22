// 14 - O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.

var prompt = require('prompt-sync')();

var grauCelsius = prompt("Qual é a temperatura em graus Celsius?");

var grauFahrenheit = (grauCelsius*1.8) + 32;

console.log("A temperatura em Fahrenheit é: " + grauFahrenheit + "°F");

