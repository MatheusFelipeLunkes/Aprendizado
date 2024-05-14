// Aula 12 - Objeto Math

/*
O Objeto Math nada mais é que um metodo com funções pre definidas para trabalharmos com nossos Numbers. 
 */

let num1 = 9.54;
let num2 = Math.floor(num1); // Math.floor() arredonda o numero para baixo
console.log(num2);

num2 = Math.ceil(num1); // Mathe.ceil() arredonda o numero para cima
console.log(num2);

let num3 = Math.round(num1); // A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
console.log(num3);

console.log(Math.max(num1, num2)); // A função Math.max() exibe qual o maior numero passado como parametro.


console.log(Math.random()); // A função Math.random() cria um numero aleatorio;

const numAleatorio = Math.random((10 - 5) + 5); 
console.log(numAleatorio.toFixed(2)); // Podemos criar expressões dentro do objeto Math.random() para definir o Range dos nossos numeros.

console.log(Math.pow(2, 10)); // A função Math.pow() faz a potenciação do numero.

// CUIDADO: toda divisão em javascript por ZERO retorna o valor INFINITY e ainda retorna como boolean(verdadeiro) para o sistema.

console.log(100/ 0);

