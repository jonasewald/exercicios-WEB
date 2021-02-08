// v e v -> v
// v e f -> f
// f e ? -> f

// v ou ? -> v
// f ou v -> v
// f ou f -> f

// v xor v -> f  // XOR 'ou' exclusivo
// v xor f -> v
// f xor v -> v
// f xor f -> f

// !v -> f // '!' Negação lógica em JS
// !f -> v

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // "||" significa ou.
    const comprarTv50 = trabalho1 && trabalho2 // "&&" significa e.
    //const comprarTv32 = !!(trabalho1 ^ trabalho) // Ou exclusivo.
    const comprarTv32 = trabalho1 != trabalho2 // nesse caso simula o ou exclusivo optando por "!=" que seria diferente.
    const manterSaudável = !comprarSorvete // operador unário

    return  { comprarSorvete, comprarTv50, comprarTv32, manterSaudável}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

