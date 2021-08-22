/* 10 -Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
x - y M a
x - y * a M c mod y
y <> c
x * y <> c
c mod y mi y mod c
a m b
z / a + x * y - 5 MI b
c * z + 2 ig a * x + y
c ig z + b
y * 2 <> 7 - b */

var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;

var operacao1 = (x - y) > a;
console.log(operacao1);

var operacao2 = (x - (y * a)) > (c % y);
console.log(operacao2);

var operacao3 = y != c;
console.log(operacao3);

var operacao4 = (x * y) != c;
console.log(operacao4);

var operacao5 = (c % y) <= (y % c);
console.log(operacao5);

var operacao6 = a < b;
console.log(operacao6);

var operacao7 = (z / a) + x * (y - 5) >= b; 
console.log(operacao7);

var operacao8 = c*z + 2 == a*x + y;
console.log(operacao8);

var operacao9 = c == z+b;
console.log(operacao9);

var operacao10 = y*2 != 7 -b;
console.log(operacao10);