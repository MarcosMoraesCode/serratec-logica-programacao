// 15 - O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles ou escaleno.

const prompt = require("prompt-sync")();

var angulo1 = prompt("Digite o primeiro angulo: ");
angulo1 = parseFloat(angulo1);
var angulo2 = prompt("Digite o segundo angulo: ");
angulo2 = parseFloat(angulo2);
var angulo3 = prompt("Digite o terceiro angulo: ");
angulo3 = parseFloat(angulo3);

var tem180 = (angulo3 + angulo2 + angulo1) == 180;

if(tem180){
    if(angulo1 == angulo2 && angulo2 == angulo3)
        console.log("O seu triangulo é equilátero.");
    else if((angulo1 == angulo2 && angulo2 != angulo3) || (angulo1 == angulo3 && angulo2 != angulo3) || (angulo2 == angulo3 && angulo1 != angulo3))
        console.log("O seu triangulo é isóceles.");
    else 
        console.log("O seu triangulo é escaleno.");
}
else
    console.log("Os seus angulos não formam um triangulo.");