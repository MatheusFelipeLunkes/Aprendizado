// Aula 6 - Tipos de dados Primitivos
/*
Quais são os tipos de dados primitivos?
São eles: Strings, Numbers, Null, Booleans, Undefined e os Symbols
Strings = 'Texto'
Numbers = Numeros
Undefined = Indefinido
Null = Nulo
Booleans = Verdadeiro/Falso
*/

const name = 'Matheus'; // String
const lastName = "Lunkes"; // String
const dog = `Maçã`; // String
console.log(typeof name, typeof lastName, typeof dog);

const number = 10; // Number
const numberFloat = 10.25 // Number com ponto flutuante, mas para a linguagem entende apenas como Number;
console.log(typeof number,  typeof numberFloat);

let carName; // undefined não aponta para nenhum local da memoria, mas a propria linguagem seta o valor para Undefined quando não atribuimos valor a ela;
console.log(typeof carName);

let car = null; // Null não aponta para nenhum local da memoria;
console.log(typeof car);

const booleans = true; // Boolean, servem  apenas para verdadeiro ou falso geralmente para checagem logica. 
console.log(typeof booleans);

