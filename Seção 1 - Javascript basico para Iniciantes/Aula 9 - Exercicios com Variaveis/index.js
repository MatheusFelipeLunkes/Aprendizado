// Aula 9 - Exercicio com Variaveis
/*
    Dadas as variaveis varA = 'A', varB = 'B', varC = 'C'. Você deve imprimir a seguinte ordem  B C A, usando reatribuição de variaveis.
*/

let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

let varTemp = varA; // Criando variavel temporaria para não perder o valor original antes de atribui-la.

varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);

