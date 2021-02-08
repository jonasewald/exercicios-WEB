function tratarErroELançar(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELançar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)