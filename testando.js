//variaveis
var carro = 'ford'
let ano = 2011
console.log('objeto: '+carro + ' ano: '+ano)

const c = 'modelo unico'
//constante não pode ser alterada

//numeros quebrados e sua apresentação, usamos o tofixed(x) para especificar quantas caasas apos a virgula, o x no paramentro seria essa quantidade de casas
//exemplo
let peso = 79

var dividir = peso / 3

console.log(dividir.toFixed(2))

console.log('sem formatacao '+dividir)

console.clear()
//biblioteca math

console.log(Math.pow(2, 4))

//trabahando com Strings
 const nome= 'matheus de sousa pinho'

 console.log(nome.charAt(4))// pega a posição da letra na string

 //criando substrings
 console.log(nome.substring(1,6))

 //concatenando strings
 console.log('Nome: '.concat(nome))

 //temos a função replace onde podemos substituis um caracter
 console.log( nome.replace(0, 'A'))

 //SPLIT - separacao de uma string em arry
 console.log(nome.split(' '))
 nomes = nome.split(' ')
 console.log(nomes[2])

 //template string

 //booleanos

 let isAtivo = true

 console.log(typeof(isAtivo))

 console.log('------------------------------------------------------------')

{
  //Arrays com impressão multipla
    let Alunos = [  'pedro', 'tiago', 'carlos', 'felipes']
    let tamanho =  Alunos.length
    let j = 1
    for(let i = 0; i< tamanho; i++){
        console.log('Id: '+ j+ ' nome: '+Alunos[i])
        j++
    }  
} 
{
    //objetos
    const alunos = [{name:'pedro', nota:2.8, idade : 15 }, {name:'Kaio', nota:8.0, idade : 14}, {name:'Julia', nota:9.8, idade : 15}]
    let tamanho =  alunos.length
    console.log(alunos)
    let j = 1
    function imprimir(){
      for(let i = 0; i< tamanho; i++){

        console.log('dados do aluno Nº '+ j)
        let obje = alunos[i]
        console.log('nome: ' + obje['name'])
        console.log('idade: ' + obje['idade'])
        console.log('Nota: ' + obje['nota'])
        if(obje['nota']<5.0){
            console.log('Resultado final: Aluno esta REPROVADO pois tirou apenas ' + obje['nota']+' e a nota para aprovacao e minimo 5.0')

        }else{
            console.log('Resultado final: Aluno esta APROVADO com a nota ' + obje['nota']+' pois tirou mais que 5.0')

        }
        console.log('---------------------------------------')
        j++
    }   
    }
    imprimir()
     
}