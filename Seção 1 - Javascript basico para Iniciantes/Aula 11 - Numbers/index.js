// Aula 11 - Mais sobre Numbers

let num1 = 1;
let num2 = 2.5;

console.log(typeof num1, typeof num2); 
// Note que um numero com ponto flutuante e um numero inteiro em Javascript, são considerados a mesma coisa que no caso os dois são Numbers.

/* 
Assim como as strings com numeros podem ser alteradas o seu tipo os numbers podem tambem mudar seu tipo para string, segue o exemplo:
*/

num1 = num1.toString();
console.log(typeof num1);

// A funçãop to fixed exibe o numero em ponto flutante, e o numero de casas desejadas depois da ",". A função não altera o valor real da variavel.

num2 = num2.toFixed(3);
console.log(num2);

// A função isInteger() retorna com um valor booleano (verdadeiro/false) para o sistema. 
console.log(Number.isInteger(num2));

// A função parseFloat transforma um numero inteiro para ponto flutuante. Lembre-se: existe um certa imprecisão para se calcular numeros inteiros com numeros de ponto flutuante por isso devemos converter os inteiros para esse tipo de calculo. Exemplo:

num1 = 0.7;
num2 = 0.1;
num1 += num2;

console.log(num1); // Temos imprecisão quando não alteramos o tipo de dado
num1 = parseFloat(num1.toFixed(2));
num1 += num2;
console.log(num1);
// A função parseInt(), altera o tipo de dados de numeros com ponto flutuantes para inteiros.

/* 
Outra maneira para se resolver o problema dos numeros com ponto flutuantes sem o uso das funções acima seria basicamente criando uma expressão algebrica como no Exemplo abaixo:
*/

let x = 0.7;
let y = 0.1;
x = ((x * 100) + (y * 100)) / 100; // Criando uma expressão a gente trabalha direto com numeros inteiros para depois tranforma-lo para ponto flutuante.
console.log(x);



// NOTA: Lembre-se sempre que o 'Motor' do javascript receber uma string, e nela existir apenas numeros e precisarmos usa-la para fazer calculos, ele sempre tentara fazer a conversar para Number automaticamente. Mas isso não é uma boa pratica. E se caso ela não receber um numero, não funcionará direito.


