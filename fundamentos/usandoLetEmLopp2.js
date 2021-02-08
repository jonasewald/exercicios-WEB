const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// usando Let, é possível alterar a função por fora.
funcs[2] ()
funcs[8] ()
funcs[6] ()