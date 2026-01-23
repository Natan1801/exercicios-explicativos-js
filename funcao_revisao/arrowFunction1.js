//=====================================================================================
//Arrow Function(Análise explicativa)
// Criada em 2015 no ES6, é uma forma cura e dinâmica de escrever funções em JavaScript.
//=====================================================================================

//Função tradicional
function somar(a, b){
  return a + b
}
console.log(somar(2,3)) //5

//Arrow Function
const somaArrow = (a, b) => {
    return a + b
}
console.log(somaArrow(2,8))//10

//Arrow Function - forma reduzida
const somaReduzida = (a, b) => a + b
console.log(somaReduzida(5,7))//12

//Arrow Function - com um único parâmetro
const dobro = a => a * 2
console.log(dobro(2))//4

//Arrow Function - sem parâmetros
const saudacao = () => 'Okay, google!'
