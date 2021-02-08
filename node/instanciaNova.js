// uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {           // INC = Incremento
            this.valor++
        }
    }
}
