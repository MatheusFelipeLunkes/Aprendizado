//Aula 4 - Exercicio com const e let

// Crie a frase abaixo usando variaveis como: nome, sobrenome, idade, peso altura, e calcule seu IMC e seu Ano de nascimento:

// "Matheus Lunkes tem 25 anos, pesa 110 kg tem 1.81 de altura e seu IMC é de 33.576508653582. Matheus nasceu em 1999."

const nome = "Matheus";
const sobrenome = "Lunkes";
const idade = 25;
const peso = 110;
const altura = 1.81;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

// UTILIZANDO TEMPLATE STRINGS para concatenar strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}.`);