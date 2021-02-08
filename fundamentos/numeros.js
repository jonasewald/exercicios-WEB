const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // para saber so o número é inteiro.
console.log(Number.isInteger(peso2))

const avaliação1 = 9.871
const avaliação2 = 6.871

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // para imprimir no console qntidade de casas decimais.
console.log(media.toString(2)) // para imprimir em modo binário.
console.log(typeof media) // para ver o tipo do dado. No caso number, por ser valor numérico.
console.log(typeof Number) // para o tipo da função. Number com 'N' maiúsculo, significa uma função.
