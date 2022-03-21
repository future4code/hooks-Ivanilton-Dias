// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


//const array = [3,2,1,4,7]
// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    const meuArrayInvertido = array.slice(0).reverse();

    return meuArrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

  array.sort((a,b)=>a-b);

  return array
   
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  

    function buscarPares(value){

        if(value % 2 == 0){
            return value
        }
    }
 
    return array.filter(buscarPares);

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

const arrayPares = []
const arrayElevado = []
let j = 0
    for(let i =0; i < array.length; i++){
          if(array[i] % 2 == 0){

    arrayPares[j]= array[i]

    j++

    }

 }

 for(let i =0; i < arrayPares.length; i++){

    arrayElevado[i]= arrayPares[i]**2

 }

return arrayElevado
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
    return Math.max.apply(null, array);


}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

let maiorNumero
let menorNumero

if(num1>num2){

    maiorNumero = num1
    menorNumero = num2

}else{

    maiorNumero = num2
    menorNumero = num1

}

const ehDivisivel =maiorNumero%menorNumero === 0
const diferenca = maiorNumero - menorNumero

return {

    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: ehDivisivel,
    diferenca: diferenca

}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let numerosPares = [];
    for (let i = 0;  numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares;
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {


    if(ladoA == ladoB && ladoA == ladoC){


        return "Equilátero"

    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){

        return "Isósceles"

    }else{

        return "Escaleno"

    }

       


    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

const arrayMaiorMenor = []

const arr = array.sort((a,b)=>{
if(a>b)return 1
if(a<b)return-1

return 0

})

arrayMaiorMenor.push(arr[arr.length - 2])
arrayMaiorMenor.push(arr[1])

return arrayMaiorMenor

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
const assistir =  `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

    
    return assistir
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
   
    const novoObjeto = {
        ...pessoa,
        nome:"ANÔNIMO"
    }

    return novoObjeto

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   

const pessoa = pessoas.filter((item,index,array)=>{


    return item.altura >= 1.5 && 
    item.idade > 14 && 
    item.idade < 60


})

return pessoa



}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

  const pessoa = pessoas.filter((item,index,array)=>{

    return item.idade < 15 || 
    item.idade > 60 || 
    item.altura < 1.5
   

})

return pessoa
   

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    let soma = 0;
    let novoSaldo = 0;

    for(let i = 0; i < contas.length; i++){

        for(let compras = 0; compras < contas[i].compras.length; compras++){


            soma+= contas[i].compras[compras];
            novoSaldo = contas[i].saldoTotal - soma
            contas[i].saldoTotal = novoSaldo
            soma = 0;
        }


        contas[i].compras = []

    }

return contas;

    

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    consultas.sort(function(a,b) {
        if(a.nome < b.nome) return -1;
        if(a.nome > b.nome) return 1;
        return 0;
    });

 return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   

   
}