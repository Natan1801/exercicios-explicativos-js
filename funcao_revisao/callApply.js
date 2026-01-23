//==============================================
//Call, Apply e Get(Exercício explicativo) call e apply são métodos que permitem definir o valor de this em uma função de forma explícita. Enquanto o get é uma forma de definir um método que retorna um valor calculado com base nas propriedades do objeto.
//==============================================

//Definindo o get
function getPreco(imposto = 0, moeda = 'R$'){
   return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

//Definindo o objeto produto que irá utilizar o getPreco
const produto = {
    nome: 'notebook',
    preco: 100,
    desconto: 0.15,
    getPreco
}
//Usando o getPreco normalmente com o objeto produto
global.preco = 20
global.desconto = 0.2
console.log(getPreco())// Resultado: R$ 16 (pois this aponta para o objeto global)

//Usando o getPreco com o objeto produto
const carro = {preco: 50000, desconto: 0.20}

//Chamando o getPreco com call e apply, definindo o this como o objeto carro
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
//Resultado em todas as chamadas com call e appy