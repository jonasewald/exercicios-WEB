const pilotos = ['Vettel',  'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último do array. 
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento na última posição do array.
console.log(pilotos)

pilotos.shift() // remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona o primeiro na lista
console.log(pilotos) 

// splice pode adicionar e remover elementos dentro de um array.

// adicionar:

pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionar no índice 2 Botta e Massa, não vai remover ninguém por isso o '0'.
console.log(pilotos)

// remover:

pilotos.splice(3, 1) // remover no índice 3 um elemento.
console.log(pilotos)

// Slice = pegar uma parte/pedaço de um array.

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array a partir do índice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pegando na lista a partir do índice 1 ao 4.
console.log(algunsPilotos2)