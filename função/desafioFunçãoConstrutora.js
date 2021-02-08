// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
    
//     falar() {
//     console.log(`Meu nome é ${this.nome}`)
//     }
// }
//const p1 = new Pessoa('João')
//p1.falar()

// Usando a mesma forma como a de Classe, agora como na Função Construtora abaixo ( diferença )
function Pessoa(nome) {
    this.nome = nome
        
    this.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()