//===================
//Método concat()
//===================

//Criando dois arrays
let numerosImpares = [1, 3, 5, 7]
let numerosPares = [2, 4, 6, 8]

//Concatenando os dois arrays (Obs: O Método concat() não altera os arrays originais, somente junta os arrays)
let resultadoFinal = numerosImpares.concat(numerosPares)
//[1, 3, 5, 7, 2, 4, 6, 8]
console.log(resultadoFinal)