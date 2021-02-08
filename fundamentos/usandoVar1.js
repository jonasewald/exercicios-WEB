{
    {
        {
            {
                var sera = 'Será???' 
                console.log(sera)              
            }
        }
    }
}
// Criando uma variável fora de uma função, ela fica visível para imprimir dentro e fora de um bloco de código.
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
// Criando uma variável dentro do escopo de uma Function, ela é apenas visto dentro da Function.
//teste()
//console.log(local)