let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! para fazer não true ou não false. Descobrindo se um valor é ou não false.

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa' || '')) // '||' significa 'ou'.

let nome = 'Pedro'
console.log(nome || 'Desconhecido')




// sempre priorizar constantes ao invés de variáveis!!