const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// leitura sincrono..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// leitura assincrono..
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = conteudo
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})