//===========================================================================
// CallBack é uma função passada como  argumento para outra função
// neste exemplo, a função forEach() recebe como parâmetro uma função anônima
//===========================================================================

//----Criando o array-----
let clientes = ['Diana', 'Bruce', 'Clark']

//Função que percorre o array(callBack)
function imprimirNoConsole(nomeClientes){
    nomeClientes.forEach(function(nome){ //Callback
        console.log(nome)
    })
}

//Chamando função 
imprimirNoConsole(clientes)