// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qaualquer', preço: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descrição = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal (selar)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não vai conseguir adicionar pois está selado.
delete pessoa.nome         //  "     "     "      "
pessoa.idade = 29 // consegue alterar valor já informado.
console.log(pessoa)

// Object.freeze = selado + valores constantes