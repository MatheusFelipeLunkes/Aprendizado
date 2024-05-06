// Exercicio Aula 8 - Crie um programa que peça para o usuario digitar doi numeros, você deve fazer as 4 operações, Soma, Subtração, Multiplicação e Divisão e exibi-las na tela.

const num1 = Number(prompt("Digite um Número:"));
const num2 = Number(prompt("Digite um Número:"));

const sum = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;

alert(
`A soma dos doi numeros é: ${sum} 
A subtração dos doi numeros é: ${sub}
A multiplicação dos dois numeros é: ${mult} 
A divisão dos doi numeros é: ${div} `
);