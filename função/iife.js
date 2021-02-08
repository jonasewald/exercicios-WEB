// IIFE -> Immediately Invoked Function Expression

// Modelo de função anônima, qndo a função é inserida dentro dos "()".

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!') // foge do escopo global
})()