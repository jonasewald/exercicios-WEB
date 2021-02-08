// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 6,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 2000
    }
}

const { nome, idade} = pessoa  // descontrução.. usando {} para retirar apenas os dados necessários dentro do Objeto.
console.log(nome, idade)

// podendo usar dessa maneira tbm.

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { endereço: {logradouro, numero}} = pessoa
console.log(logradouro,numero)