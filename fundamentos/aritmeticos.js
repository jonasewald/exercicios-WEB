// Operadores Aritmético são operadores binários, operam em cima de dois operandos.
const [a, b, c, d] =[3, 5, 1, 15] // usando operador Destructuring.

const soma = a + b + c + d
const subtração = d - b
const multiplicação = a * b
const divisão = d / a
const módulo = a % 2 // resto da divisão para saber se é par ou ímpar.

console.log(soma, subtração, multiplicação, divisão, módulo)
// sendo unários basta adicionar a operação antes. Exemplo: -divisão.
console.log(soma, subtração, multiplicação, -divisão, módulo)
//Observa que o resultado virou negativo por se tornar unário.