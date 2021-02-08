// OBJETO É UMA COLEÇÃO DE GRUPOS {} E VALORES.
const prod1 = {} // o uso das {} é para uso de um objeto e [] para array.
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90,
   }
'{ "nome": "Camisa Polo", "preço": 79.90 }' // método Json:  formato textual para comunicação entre sistemas, trocar dados. (JAVA SCRIPT OBJECT NOTATION)

console.log(prod2)

