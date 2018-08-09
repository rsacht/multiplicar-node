//const {criarArquivo} = require('./multiplicar/multiplicar');



//console.log(process);
//console.log(process.argv);

// let base = '1';
// let argv = process.argv;
// let parametro = argv[2];

// console.log(parametro);

//comando no terminal: node app --base=5
//Saída: --base=5
//Mas queremos apenas o número 5, então precisamos transformar em um array

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')

// console.log(base);

//Executa o comando no terminal: node app --base=5
//Saída: [ '--base', '5' ]
//Já temos o array, mas queremos pegar apenas o valor 5
//Então vamos pegar o elemento 1 do array:

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);

//Executa o comando no terminal: node app --base=5
//Saída: 5

//Agora você pode executar diretamente no pronpt de comando:
//Execute o comando no terminal: node app --base=6
//Saída: 6

//Execute o comando no terminal: node app --base=7
//Saída: 7

//Agora vamos criar o arquivo dinamicamente pelo terminal

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// criarArquivo(base)
//   .then(arquivo => console.log(`Arquivo criado: ${arquivo}`))
//   .catch(e => console.log(e));

//Execute o comando no terminal: node app --base=2
//Saída: Arquivo criado: tabela-2.txt
//Note no VS Code que os arquivos estão sendo criados pelo comando dado no terminal

//Agora vamos executar o comando sem nenhum argumento:
//Execute o comando no terminal: node app
//Saída: TypeError: Cannot read property 'split' of undefined

//Agora vamos executar o comando com letras em seu argumento:
//Execute o comando no terminal: node app --base=abc
//Saída: TypeError: o valor introduzido abc não é um número

//Agora vamos executar o comando com outro argumento no segundo parametro:
//Execute o comando no terminal: node app --até=20 --base=abc
//Saída: Arquivo criado: tabela-20.txt
//Note que o node considerou o segundo argumento como sendo a base

//Vamos executar o comando com outro argumento no segundo parametro:
//Execute o comando no terminal: node app -b=5
//Saída: Arquivo criado: tabela-5.txt
//Note que o node considerou o segundo argumento como sendo a base

//Precisamos definir os parametros para que os comandos executem 
//exatamente o que queremos

// const argv = require('yargs').argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// let argv2 = process.argv;

// console.log(argv);
// console.log(argv2);

//Vamos executar node app
//Saída: 
//{ _: [], '$0': 'app' }
//[ '/usr/local/bin/node',
//'/Users/conectago/code/node/03-bases-node/app' ]
//Note que a primeira linha é a saída de yargs e as demais do argv2
//Execute: node app listar --base 5
//Saída:
// { _: [ 'listar' ], base: 5, '$0': 'app' }
// [ '/usr/local/bin/node',
//   '/Users/conectago/code/node/03-bases-node/app',
//   'listar',
//   '--base',
//   '5' ]

//Vamos definir o comando
// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true
//     }
//   })
//   .argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// let argv2 = process.argv;

// console.log(argv);
// console.log(argv2);

//Vamos executar no terminal: node app listar
//Resposta: Falta argumento obrigatório: base
//Vamos especificar um aliás
// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     }
//   })
//   .argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// let argv2 = process.argv;

// console.log(argv);

//Executar o comando: node app listar -b 5
//Saída: { _: [ 'listar' ], b: 5, base: 5, '$0': 'app' }
//Se eu quero obter informações da base agora é só adicionar o base no console.log:

// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     }
//   })
//   .argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// let argv2 = process.argv;

// console.log(argv.base);

//Execute o comando:node app listar -b 5
//Saída: 5

//Execute o comando:node app listar --base 10
//Saída: 10

//Execute o comando:node app listar --limite=20 --base 50
//Saída: 50
// a posição do argumento não altera o resultado. Ele será executado
//seja qual for a posição

//VAMOS DEFINIR O LIMITE
// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     },
//     limite:{
//       alias: 'l',
//       default:10
//     }
//   })
//   .argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// let argv2 = process.argv;

// console.log('Limite',argv.limite);

//Execute o comando: node app listar --limite=20  --base 50
//Saída: Limite 20

//Como temos o valor default 10 quando executamos o comando
//sem definir o limite ele imprime o default
//Execute o comando: node app listar --base 50
//Saída: Limite 10

//VAMOS IMPRIMIR A MENSAGEM DO QUE FAZ O COMANDO

// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     },
//     limite:{
//       alias: 'l',
//       default:10
//     }
//   })
//   .help()
//   .argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// let argv2 = process.argv;

// console.log('Limite',argv.limite);

//Execute o comando: node app listar --help
//Saída:
// Imprime no console a tabela de multiplicar

// Opções:
//   --version     Exibe a versão                                        [booleano]
//   --help        Exibe ajuda                                           [booleano]
//   --base, -b                                                       [obrigatório]
//   --limite, -l                                                      [padrão: 10]

//VAMOS DEFINIR OS COMANDOS INDIVIDUALMENTE
// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     },
//     limite:{
//       alias: 'l',
//       default:10
//     }
//   })
//   .help()
//   .argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// console.log(argv);

//Execute o comando: node app criar --base 10
//saída: { _: [ 'criar' ], base: 10, '$0': 'app' }

//VAMOS SEPARAR AS FUNÇÕES DE CADA COMANDO
// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     },
//     limite:{
//       alias: 'l',
//       default:10
//     }
//   })
//   .help()
//   .argv;

// const {criarArquivo} = require('./multiplicar/multiplicar');

// let comando = argv._[0];

// switch (comando){
//   case 'listar':
//     console.log('Listar');
//     break;
//   case 'criar':
//     console.log('Criar');
//     break;
//   default:
//     console.log('Comando não reconhecido');
// }

//Execute o comando: node app criar --base 10
//Saída: criar
//Execute o comando: node app listar --base 10
//Saída: Listar
//Execute um comando desconhecido: node app comer --base 10
//Saída: Comando não reconhecido

//
// const argv = require('yargs')
//   .command('listar', 'Imprime no console a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     },
//     limite:{
//       alias: 'l',
//       default:10
//     }
//   })
//   .command('criar', 'Gera um arquivo com a tabela de multiplicar',{
//     base: {
//       demand:true,
//       alias: 'b'
//     },
//     limite:{
//       alias: 'l',
//       default:10
//     }
//   })
//   .help()
//   .argv;

// const {criarArquivo, listarTabela} = require('./multiplicar/multiplicar');

// let comando = argv._[0];

// switch (comando){
//   case 'listar':
//     listarTabela(argv.base, argv.limite);
//     break;
//   case 'criar':
//     criarArquivo(argv.base, argv.limite)
//       .then(arquivo => console.log(`Arquivo criado: ${arquivo}`))
//       .catch(e => console.log(e));
//     break;
//   default:
//     console.log('Comando não reconhecido');
// }

//Execute o comando: node app criar --base 10
//saída:Arquivo criado: tabela-10.txt

//Execute o comando: node app listar --limite 30 -b 3
// Saída:
// 3*1 = 3
// 3*2 = 6 ...
// 3*30 = 90

//Vamos listar com o limite em 3
//Execute o comando: node app listar --limite 3 -b 9
// Saída:
// 9*1 = 9
// 9*2 = 18
// 9*3 = 27

//Execute o comando: node app listar --limite 5 -b 3
//Saída: 
// 3*1 = 3
// 3*2 = 6
// 3*3 = 9
// 3*4 = 12
// 3*5 = 15

//Execute o comando: node app criar --limite 5 -b 3
//Saída: Arquivo criado: tabela-3-ao-5.txt

//Refatorando argv
//Chamando a função argv
// const argv = require('./config/yargs').argv;

// const {criarArquivo, listarTabela} = require('./multiplicar/multiplicar');

// let comando = argv._[0];

// switch (comando){
//   case 'listar':
//     listarTabela(argv.base, argv.limite);
//     break;
//   case 'criar':
//     criarArquivo(argv.base, argv.limite)
//       .then(arquivo => console.log(`Arquivo criado: ${arquivo}`))
//       .catch(e => console.log(e));
//     break;
//   default:
//     console.log('Comando não reconhecido');
// }

//Testando: node app criar --limite 5 -b 3
//Saída: Arquivo criado: tabela-3-ao-5.txt
//Testando: node app listar --limite 5 -b 3
//Saída: 
// 3*1 = 3
// 3*2 = 6
// 3*3 = 9
// 3*4 = 12
// 3*5 = 15

//Tudo funcionando normalmente!!!

//ADICIONANDO COR AO CONSOLE
//Instale o pacote colors: npm install colors --save
//Adicione uma constante require('colors'):

const argv = require('./config/yargs').argv;
const colors = require('colors');

const {criarArquivo, listarTabela} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando){
  case 'listar':
    listarTabela(argv.base, argv.limite);
    break;
  case 'criar':
    criarArquivo(argv.base, argv.limite)
      //Adicionamos a cor green, ou seja o arquivo será exibido em verde
      .then(arquivo => console.log(`Arquivo criado: ${arquivo.green}`))
      .catch(e => console.log(e));
    break;
  default:
    console.log('Comando não reconhecido');
}

//Listar as tabelas: node app listar --limite 5 -b 3
//Criar o arquivo
//Executar o comando: node app criar --limite 5 -b 3
// criarArquivo(base)
//   .then(arquivo => console.log(`Arquivo criado: ${arquivo}`))
//   .catch(e => console.log(e));

//let base = parametro.split('=')[1]




//console.log(multiplicar);
//console.log(module);

