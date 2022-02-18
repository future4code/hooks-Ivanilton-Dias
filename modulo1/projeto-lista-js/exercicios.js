// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const base = prompt("digite a base")
  const altura = prompt("digite a altura")

  console.log(base*altura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const nascimento = prompt("Digite seu ano de nascimento")
  const anoAtual = prompt("Digite o ano atual")

  let idade = nascimento - anoAtual
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

 let imc = peso/(altura*altura)
 return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)



}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor")
  const cor2 = prompt("Digite sua segunda cor")
  const cor3 = prompt("Digite sua terceira cor")

  const array =[]
  array[0]=cor1
  array[1]=cor2
  array[2]=cor3
  
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

const stringNova = string.toUpperCase()

return stringNova

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui



return custo/valorIngresso


}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui


  let string = string1.length === string2.length

  return string

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array.shift()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

return array.pop()


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
/*
const primeiroELemento = array.shift()
const ultimoElemento = array.pop()
const i = array.length
array[0] = ultimoElemento
array[i] = primeiroELemento


array.push(array. splice(0,1)[0])
return array
*/
}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const stringNova1 = string1.toUpperCase()
  const stringNova2 = string2.toUpperCase()

  let resultado = null

  if(stringNova1==stringNova2)

   resultado = true

   else

   resultado = false

   return resultado

}



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Qual o ano de Nascimento?")
  const anoRgEmissao = prompt("Qual o ano da emissao do RG?")



let idade = Number(anoAtual - anoNascimento)
let anoRG = Number(anoAtual - anoRgEmissao)

let resultado = false

if(idade <= 20 && anoRG >=5)

resultado = true

else if(idade>20 && idade <=50 && anoRG >=10)

resultado = true

else if(idade>50 && anoRG>15)

resultado = true




console.log(resultado)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idadeMaior = prompt("Tem mais de 18?")
  const ensinoMedio = prompt("Tem ensino médio completo?")
  const disponibilidade = prompt("Tem disponibilidade de horario?")

  let resultado = null

if(idadeMaior == "sim" && ensinoMedio == "sim" && disponibilidade == "sim")

  resultado = true

else

  resultado = false

  console.log(resultado)

}