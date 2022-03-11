/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    //EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

    //const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    //console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    //console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)


    const retorno = confirm('Bem-vindo ao jogo BlackJack! \n Deseja iniciar uma partida?')

  


if(retorno == true){//Primeiro if distribui as cartas



    const arrayUsuario = []
    const arrayUsuarioValor = []

    const arrayComputador = []
    const arrayComputadorValor = []


    function somarUsuario(array) {// funcao para somar o valor de usuario pela array
      let soma = 0
      for(let i in arrayUsuarioValor) {
        soma += arrayUsuarioValor[i]
      }
      return soma
    }

    function somarComputador(array) {// funcao para somar o valor de computador pela array
      let soma = 0
      for(let i in arrayComputadorValor) {
        soma += arrayComputadorValor[i]
      }
      return soma
    }

  function compraCartaUsuario(array){

    const usuario = comprarCarta()
    arrayUsuario.push(usuario.texto)
    arrayUsuarioValor.push(usuario.valor)


    return array

  }

  function compraCartaComputador(array){

    const computador = comprarCarta()
    arrayComputador.push(computador.texto)
    arrayComputadorValor.push(computador.valor)


    return array

  }
   

  compraCartaUsuario(arrayUsuario)
  compraCartaUsuario(arrayUsuario)

  compraCartaComputador(arrayComputador)
  compraCartaComputador(arrayComputador)

  valorUsuario = somarUsuario(arrayUsuarioValor)
  valorComputador =somarComputador(arrayComputadorValor)


  if(valorUsuario ==22){

    arrayUsuario = []
    arrayUsuarioValor= []

    alert('Usuario recebeu dois ases, reiniciando partida!!')

    compraCartaUsuario(arrayUsuario)
    compraCartaUsuario(arrayUsuarioValor)

  }else if(valorComputador == 22){


    arrayComputador = []
    arrayComputadorValor= []

    alert('Computador recebeu dois ases, reiniciando partida!!')

    compraCartaComputador(arrayComputador)
    compraCartaComputador(arrayComputadorValor)


  }else{

    const retorno1 = confirm('Suas cartas são: '+arrayUsuario+
    '  \nA carta revelada do computador é: '+arrayComputador[0]+' \n Deseja comprar outra carta?')

    

    let valorUsuario = somarUsuario(arrayUsuarioValor)
    let valorComputador =somarComputador(arrayComputadorValor)

if(retorno1 == true){



  compraCartaUsuario(arrayUsuario)
  let valorUsuario = somarUsuario(arrayUsuarioValor)
  let valorComputador =somarComputador(arrayComputadorValor)

  if(valorUsuario > 21 && valorComputador <=21){

alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
'\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
'\n Computador Venceu!!!')


  }else{



    const retorno2 = confirm('Suas cartas são: '+arrayUsuario+
    ' \n A carta revelada do computador é: '+arrayComputador[0]+' \n Deseja comprar outra carta?')

    if(retorno2 == true){

  compraCartaUsuario(arrayUsuario)
  let valorUsuario = somarUsuario(arrayUsuarioValor)
  let valorComputador =somarComputador(arrayComputadorValor)

      if(valorUsuario >21 && valorComputador <21){


        alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Computador Venceu!!!')


      }else{

        const retorno3 = confirm('Suas cartas são: '+arrayUsuario+
        ' \n A carta revelada do computador é: '+arrayComputador[0]+' \n Deseja comprar outra carta?')


        if(retorno3 == true){

        compraCartaUsuario(arrayUsuario)
        let valorUsuario = somarUsuario(arrayUsuarioValor)
        let valorComputador =somarComputador(arrayComputadorValor)

          if(valorUsuario >21 && valorComputador <= 21){

          alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Computador Venceu!!!')

          }

        }else{


compraCartaComputador(arrayComputador)
let valorUsuario = somarUsuario(arrayUsuarioValor)
let valorComputador =somarComputador(arrayComputadorValor)

if(valorComputador > 21){


  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Usuario Venceu!!!')


}else if(valorComputador <21){


if(valorComputador > valorUsuario){


  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Computador Venceu!!!')

}else if(valorComputador<valorUsuario){

  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Usuario Venceu!!!')


}else{

  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Deu Empate!!!')

}


}


        }//retorno3


      }

    }else{

      compraCartaComputador(arrayComputador)
let valorUsuario = somarUsuario(arrayUsuarioValor)
let valorComputador =somarComputador(arrayComputadorValor)

if(valorComputador >21){


  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Usuario Venceu!!!')


}else if(valorComputador <21){


if(valorComputador > valorUsuario){


  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Computador Venceu!!!')

}else if(valorComputador<valorUsuario){

  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Usuario Venceu!!!')


}else{

  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Deu Empate!!!')

}


}

    }//retorno2


  }

}else{

compraCartaComputador(arrayComputador)
let valorUsuario = somarUsuario(arrayUsuarioValor)
let valorComputador =somarComputador(arrayComputadorValor)

if(valorComputador >21){


  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Usuario Venceu!!!')


}else if(valorComputador <21){


if(valorComputador > valorUsuario){


  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Computador Venceu!!!')

}else if(valorComputador<valorUsuario){

  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Usuario Venceu!!!')


}else{

  alert('Cartas Usuario: '+arrayUsuario+' Pontuação: '+valorUsuario+
        '\n Cartas Computador: '+arrayComputador+' Pontuação: '+valorComputador+
        '\n Deu Empate!!!')

}


}


}//retorno1
  }

}else{// primeiro else distribiu as cartas, se não aceitar o confirm cai aqui

   alert('O jogo acabou!!')

}



  


