/*Primeira revisão de arrays (explicativa)

 Array é uma forma de estrutar e organizar diversos valores em uma única variável.


Declaração de um array (Observação: O índice inicial do array é [0])*/

let nomes = ['Jerferson', 'João', 'Maria']

//Acessando os valores do array
console.log(nomes)

//Acessando valores específicos dentro do array
console.log(nomes[0]) //Jerferson
console.log(nomes[1]) //João
console.log(nomes[2]) //Maria

//Mostrando a quantidade de elementos dentro do array
console.log(nomes.length) //3

//Caso não exista valores definidos no array
console.log(nomes[3]) //undefined