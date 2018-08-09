//Refatorando Yargs

const opts ={
    base: {
        demand:true,
        alias: 'b'
      },
      limite:{
        alias: 'l',
        default:10
      }
}
const argv = require('yargs')
  .command('listar', 'Imprime no console a tabela de multiplicar', opts)
  .command('criar', 'Gera um arquivo com a tabela de multiplicar', opts)
  .help()
  .argv;

  module.exports ={
      argv
  }