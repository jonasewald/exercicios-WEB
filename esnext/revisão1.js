// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = "Jonas"
console.log(l, e, tras)

//const [x, y] = [1, 2]
//console.log(x, y)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome)