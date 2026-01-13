//==================
// Método filter()
//==================

//Criando listas de produtos, preços e fragilidade
let produtos = [
  {nome: 'Prato de vidro', preco: 10.00, fragil: true},
  {nome: 'Copo metálico', preco: 40.00, fragil: false},
  {nome: 'Caderno', preco: 20.00, fragil: true},
  {nome: 'Lápis', preco: 2.00, fragil: false},
  {nome: 'Fones de Ouvido', preco: 60.00, fragil: true},
]

//Filtrando os produtos que são frágeis
const produtosFrageis = produtos.filter(function(f){
  return f.fragil
})
console.log(produtosFrageis)

//Filtrando apenas produtos com preço menor que 30
const produtosBaratos = produtos.filter(function(m){
  return m.preco < 30
})
console.log(precoMenores)
