let array
console.log('a. ', array)
/* 
No A exibira undefined porque a array nao esta definida 
sem receber nem um valor
*/

array = null
console.log('b. ', array)
/* 
No B exibira null por que array 
esta recebendo null
*/


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
/*
No C irá exibir o tamano da array
que é 11 indices
*/

let i = 0
console.log('d. ', array[i])
/*
No D irá exibir o primeiro indice da array 3
*/

array[i+1] = 19
console.log('e. ', array)
/*
No E irá introduzir um numero no segundo
indice da array o valor 19 retirando o segundo que
éra 4
*/

const valor = array[i+6]
console.log('f. ', valor)
/*
No F irá exibir o setimo indice da array que é 9
*/

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
/*
Aqui esta colocando minha frase em caixa alta tudo maiusculo
e trocando a letra A por I e o tamanho da frase que escrevi
o valor se digitar Subi num ônibus em Marrocos é 27 characteres
os espaços contaum
*/


// Exercícios de escrita 1
const nomeUsuario = prompt("Digite seu nome")
const emailUsuario = prompt("Digite seu email")

const emailNovo = emailUsuario.trim()

console.log(`O e-mail ${emailNovo} foi cadastrado com 
sucesso. Seja bem-vindo(a) ${nomeUsuario}`)
//

//Exercícios de escrita 2
const array = ["arroz", "feijão","pizza","hamburger","batata frita"]

console.log(array)


console.log("Essas são as minhas comidas preferidas",
array[0],
array[1])

const comida = prompt("Digite sua comida favorita")
array[1] = comida
console.log(array)


const array = ["arroz", "feijão","pizza","hamburger","batata frita"]

console.log(array)


console.log("Essas são as minhas comidas preferidas",
array[0],
array[1])

const comida = prompt("Digite sua comida favorita")
array[1] = comida
console.log(array)
//

//Exercícios de escrita 3

const listaDeTarefas = []

const primeiraTarefa = prompt("Digite a primeira tarefa")
const segundaTarefa = prompt("Digite a segunda tarefa")
const terceiraTarefa = prompt("Digite a terceira tarefa")
listaDeTarefas[0]= primeiraTarefa
listaDeTarefas[1]= segundaTarefa
listaDeTarefas[2]= terceiraTarefa

console.log(listaDeTarefas)

const tarefa = prompt("Tarefa realizada")
let i = Number(tarefa)
listaDeTarefas.splice(i-1)
console.log(listaDeTarefas)