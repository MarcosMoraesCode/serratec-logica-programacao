// 27 - O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.

var prompt = require('prompt-sync')();

var vasilhame = prompt("Quantos mililitros o seu vasilhame possui?");

var qtddGel = vasilhame*0.3;

var qttdAlcool = vasilhame*0.7;

console.log("O seu vasilhame possui " + vasilhame + " mililitros. Portanto a quantidade em mililitros de Gel deve ser: " + qtddGel + " mililitros. E de alcool, " + qttdAlcool + " mililitros.");