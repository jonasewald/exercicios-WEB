const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// Var não tendo escopo de função, não consegue alterar qlq função de fora do laço.
funcs[2] ()
funcs[8] ()