/*Exercicio 1 
a)sera exibido o valor 10 e o valor 20
b)no console nao aparecera nada por que nao foi emprimido

*/

/*Exercicio 2
a)adiciona cenoura no texto e altera tudo para minusculo
b)
i. eu gosto de cenoura cenoura
ii.cenoura é bom pra vista cenoura
iii.cenouras crescem na terra cenoura

*/

//Exercicios escrita de codigo 1

//a

function imprimirInformacao(){

    console.log("Eu sou Ivanilton, tenho 34 anos, moro em Extrema MG e sou estudante")
}

//b



function pessoa(nome, idade, cidade, profissao){


   const resultado = console.log(`Meu nome é ${nome}, tenho ${idade} anos, 
   moro na cidade ${cidade} e minha profissao é ${profissao}`) 

}

pessoa("Ivanilton",34,"Extrema","Progamador")

//Exercicio 2
//a)

function soma(num1,num2){

return num1+num2

}
console.log(soma(5,4))

//b)

function boleano(num1,num2){

let bool = num1>=num2

return bool

}

console.log(boleano(2,5))

//c

function par(num){

let num1 = num%2

if(num1!=0)

      return false

else

      return true

}

//d

function stringNova(palavra){

    
    return palavra.toUpperCase()



}

console.log(stringNova("Ola hooks"))

console.log(par(3))

//Exercicio 3
//a

function soma(num1,num2){

    let soma = num1+num2
    return soma
}
function subtrair(num1,num2){
    let subtrair = num1-num2
    return subtrair
}
function multiplicar(num1,num2){
    let multiplica = num1*num2
    return multiplica
}
function dividir(num1,num2){
    let dividi = num1/num2
    return dividi
}

console.log(soma(4,7))
console.log(subtrair(10,7))
console.log(multiplicar(4,7))
console.log(dividir(20,5))