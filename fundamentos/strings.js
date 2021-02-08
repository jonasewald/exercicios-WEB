const escola = "Cod3r"

// STRING :  UMA CADEIA DE CARACTERES DELIMITADAS POR '' OU "" OU `´. (CRASE).

console.log(escola.charAt(4)) // para buscar no caractere posição 4 da palavra. Iniciando sempre a primeira letra com numeral 0.
console.log(escola.charCodeAt(3)) // função para imprimir código do CARACTERE na tabela UniCode.
console.log(escola.indexOf('3')) // função para imprimir apenas o caractere posição 3.

console.log(escola.substring(1)) // função para imprimir caractere a partir da posição 1.
console.log(escola.substring(0, 3)) // função para imprimir caractere posição 0 à 3.

console.log('Escola '.concat(escola).concat("!")) // função concatenando unir uma cadeia de caracteres/strings.
console.log('Escola ' + escola + "!") // ou podendo usar dessa maneira também a função concatenar.
console.log(escola.replace(3, 'e')) // função replace para substituir caractere posição 3 pelo 'e'.

console.log('Ana,Maria,Pedro'.split(',')) // função split para converter string em array, um agrupador de valor. Por exemplo usando um separador','. Colocando ',' e gerar um array de 3 elementos.