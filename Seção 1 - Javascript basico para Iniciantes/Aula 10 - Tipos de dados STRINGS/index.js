// Aula 10 - Tipos de dados STRINGS


let string = 'Um texto'; // Strings podem ser criadas com aspas 'Simples', aspas "Duplas", e com `Crases` (Crases são muito usadas em templates Strings ${Crases}, sendo hoje o modelo mais moderno usado para trabalhar com strings);


// Toda string contem um indice, oque quer dizer que para cada caractere que contem dentro de um texto existe uma posição no indice. Exemplo:

// Indice     1234567
const nome = "Matheus";

// A função charAt() captura o caractere na posição desejada
console.log(nome.charAt(0));

// A função concat() concatena uma nova String ao texto, mas sem reatribuir o valor inicial para a mesma.
console.log(nome.concat(' F. Lunkes'));

// A função indexOf ela verifica em qual indice dentro da string está a palavra, caso não a encontre retorna -1 (podemos tambem dizer em qual indice gostariamos que começassem a verificação);
console.log(nome.indexOf("Math", 1));

// A função lastIndexOf é semelhante a função indexOf apenas começando de trás para frente sua verificação
console.log(nome.lastIndexOf("Math", 0));

// A função search busca dentro da string o indice de uma expressão regular.
console.log(nome.search(/s/));

// A função replace substitui uma palavra por outra (Aceita expressões regulares).
console.log(nome.replace("Matheus", "Lunkes"));

// .length é um atributo da propria string, cujo qual indica quantos indices a mesma possui.
console.log(nome.length);

// A função slice extrai por meio de dois indices (Inicio - Fim) parte da string desejada.
console.log(nome.slice(0, 4));

// A função split divide em um indice de um array para cada palavra solicitada retirando o caracter desejado.
console.log(nome.split('t'));

// A função toUpperCase transforma toda string em maiusculo
console.log(nome.toUpperCase());

// A função toUpperCase transforma toda string em minusculo
console.log(nome.toLowerCase());