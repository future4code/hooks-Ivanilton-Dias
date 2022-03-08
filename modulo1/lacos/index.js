//Exercícios de interpretação de código

//1 O for ira correr de 0 até 4 e somar todos os numeros dando valor 10

//2 a= O console irá imprimir todos os valores maiores que 18 da array
//2 b= Criar uma variavel e receber os valores passando a array[numeros]

//3 Ira imprimir asteriscos se digitar 4 ira mostrar 5 linhas uma com 0 uma com 1 e outra com 2 e assim sucessivamente

//Exercícios de escrita de código
//1
/*
const num = prompt("Quantos bichinos você tem?")
const array = []

if(num == 0){

    console.log("Que pena você pode adotar um..")

}else{

for( let i = 1; i <= num; i++){

    const nomes = prompt("Qual o nome dos bichos?")
    array[i] = nomes


}

console.log(array)

}
*/

//2 a=
/*
const original = [2,8,11,15,28,39,48,54]

for( let i = 0; i < original.length; i++){


console.log(original[i])


}
*/

//2 b=
/*
const original = [2,8,11,15,28,39,48,54]

for( let i = 0; i < original.length; i++){


    console.log(original[i]/10)
    
    
    }

*/

//2  c=
/*
const original = [2,8,11,15,28,39,48,54]
const pares = []

for( let i = 0; i < original.length; i++){

let num = original[i]
let valor = num%2

if(valor == 0){

pares[i]=num


}
    
    
    }

    console.log(pares)
    */

//2 d=
/*
const original = [2,8,11,15,28,39,48,54]
const strings = []

for( let i = 0; i < original.length; i++){


    strings[i]= `O elemento do índex ${i} é: ${original[i]}`

    
    
    }

    console.log(strings)

*/

//2 e= Escreva um programa que imprima no console o maior e o menor números contidos no array original

/*
const original = [0,2,8,11,15,28,39,48,54]


function maiorNumero(array){

let maior = 0
let menor = 0

for( let i = 0; i < original.length; i++){

    

    if(maior < original[i]){


        maior = original[i]

    }else if(maior > original[i]){

      menor = original[i]

    }


    }

    return `O maiór numero é ${maior} e o menór é ${menor}`

}

console.log(maiorNumero(original))

*/