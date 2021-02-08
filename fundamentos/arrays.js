const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// Array é uma estrutura heterogênea, aceita multivalores, indexada.
valores[4] = 10
console.log(valores)
console.log(valores.length)
// em Array no JS valores é do object.
valores.push({id: 3}, false, null, 'teste') // função push, para adicionar novos elementos numa Array.
console.log(valores)

console.log(valores.pop()) // função POP, retira a último valor de uma array.
delete valores[0] // função delete outra maneira de excluir um elemento de uma array.
console.log(valores)

console.log(typeof valores) // função para imprimir o tipo do objeto.

// OBSERVAÇÃO: MELHOR TER UM TIPO DE DADO EM CADA ARRAY E NÃO MISTURAR ELEMENTOS NUMA ARRAY.