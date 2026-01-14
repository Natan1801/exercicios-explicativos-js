//==========================================================
//Arrow Function2: utilização do this (exercício explicativo)
//==========================================================

//Função tradicional
const pessoa = {
  nome: 'Peter',
  idade: 16,
  apresentar: function(){
    return "Meu nome é " + this.nome + " e tenho " + this.idade + " anos."
  }

}
console.log(pessoa.apresentar())//"Meu nome é Peter e tenho 16 anos."

//Arrow Function(obs: o this não funciona como esperado, pois o this não aponta para o objeto pessoa)
const pessoaArrow = {
  nome: 'Mary',
  idade: 16,
  apresentar: () => {
    return "Meu nome é " + this.nome + " e tenho " + this.idade + " anos."
  }
}
console.log(pessoaArrow.apresentar())//"Meu nome é undefined e tenho undefined anos."