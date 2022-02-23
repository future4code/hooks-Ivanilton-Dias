//Exercicios interpretacao de codigo 
//a
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])// aqui irá imprimir o primeiro elemento do array elenco (Matheus Nachtergaele)
console.log(filme.elenco[filme.elenco.length - 1])//aqui irá imprimir o ultimo elemento do array(Virginia Cavendish)
console.log(filme.transmissoesHoje[2])//aqui irá imprimir o ultimo objeto do array transmissoesHoje
*/

//2 a

/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//aqui ira imprimir apenas o objeto cachorro
console.log(gato)//aqui ira imprimir o objeto cachorro e mudara o nome para juba
console.log(tartaruga)//aqui ira imprimir o objeto chachorro e mudara as letras a para o no nome ficara jubo
*/
//b os tres pontos antes do objeto tras o objeto chamado junto com o novo objeto

//3 
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a o primeiro console ira imprimir false
//b ira imprimir undefined por que nao foi atribuido valor para altura
*/

//Exercícios de escrita de código
//1
//a
/*
const pessoa = {
    nome: "Ivanilton", 
    apelidos: ["Zoreia", "Tom", "Muchinho"]
 }

 function PessoaObjeto(pessoa){

    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
 }

 console.log(PessoaObjeto(pessoa))
*/
 //b
/*
 const pessoa = {
    nome: "Ivanilton", 
    apelidos: ["Zoreia", "Tom", "Muchinho"]
 }

 const novoObjeto = {
        ...pessoa,
        apelidos: ["Muchinho", "Tom", "Zoreia"]
    }

 function PessoaObjeto(pessoa){
      
    
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
 }

 console.log(PessoaObjeto(novoObjeto))
*/

//2 a
/*
const pessoa = {
	nome: "Ivanilton", 
    idade: 34, 
	profissao: "Progamador"
}

const array = []

function pessoaObjeto(pessoa){

   const array =  [pessoa.nome,pessoa.nome.length, pessoa.idade, 
    pessoa.profissao, pessoa.profissao.length]

   console.log(array)

}

pessoaObjeto(pessoa)
 */

//3
/*
const carrinho = []

const frutas1 = {

nome: "banana",
disponibilidade:true,


}

const frutas2 = {

    nome: "abacaxi",
    disponibilidade:true
    
}

const frutas3 = {
        
    nome: "maça",
    disponibilidade:true
        
}



function minhaFuncao(frutas){

    carrinho.push(frutas1)
    carrinho.push(frutas2)
    carrinho.push(frutas3)

    console.log(carrinho)

}

    minhaFuncao(frutas1,frutas2,frutas3)

    */