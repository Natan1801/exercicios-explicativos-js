//============================
// Array - Métodos
//============================

//----Criando o array-----
let jogadoresFlamengo = ['Bruno Henrique', 'Arrascaeta', 'Luiz Araujo', 'Rossi']

//Método push()
//Adicionando um novo elemento no final do array
jogadoresFlamengo.push('Leo Pereira')
console.log(jogadoresFlamengo)

//Método sort()
//Altera e ordena o array original
jogadoresFlamengo.sort() 
console.log(jogadoresFlamengo)

//Método delete
//Exclui os elementos específicos no array (índice 2: Luiz Araujo)
//Obs: O método delete deixa uma mensagem de exclusão no lugar do elemento excluído, ou seja, o índice permanece, mas o valor é removido, ficando "vazio". Por isso, não é recomendado usar delete em arrays.
delete jogadoresFlamengo[2] 
console.log(jogadoresFlamengo)

//Método splice()
//Ela serve para adicionar elementos e serve como para excluir elementos do array
jogadoresFlamengo.splice(2, 1, 'Erick Pulgar')
console.log(jogadoresFlamengo)

//Método pop()
//Remove o último elemento do array
jogadoresFlamengo.pop() 
//Rossi
console.log(jogadoresFlamengo)

//Método shift()
//Remove o primeiro elemento do array
jogadoresFlamengo.shift()
//Arrascaeta
console.log(jogadoresFlamengo)

//Método unshift()
//Adiciona um elemento no início do array
jogadoresFlamengo.unshift('Léo Ortiz')
console.log(jogadoresFlamengo)

//Método slice()
//Ele cria um novo array a partir de do índece especificado
let novosJogadores = jogadoresFlamengo.slice(0, 3)
console.log(novosJogadores)