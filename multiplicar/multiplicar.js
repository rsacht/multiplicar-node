
const fs = require('fs');
const colors = require('colors');

let listarTabela = (base, limite=10) =>{

    console.log(`==================`.green);
    console.log(`== Tabuada do ${base} ==`.red);
    console.log(`==================`.green);
    for(let i=1; i<= limite; i++){
        console.log(`${base}*${i} = ${base*i}`);
    }

}

let criarArquivo = (base, limite=10) =>{
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`o valor introduzido ${base} não é um número `);
            return;
        }

        let data ='';

        for(let i=1; i<= limite; i++){
            data += `${base}*${i} = ${base*i}\n`;
        }
        fs.writeFile(`tabelas/tabela-${base}-ao-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabela-${base}-ao-${limite}.txt`);
        });
    });
}

module.exports ={
    criarArquivo,
    listarTabela
}


// fs.writeFile('tabela-2.txt', 'Olá Mundo!', (err) => {
//     if (err) throw err;
//     console.log('O arquivo tabela-2.txt foi criado!');
//   });

// fs.writeFile('tabela-2.txt', data, (err) => {
//     if (err) throw err;
//     console.log('O arquivo tabela-2.txt foi criado!');
//   });

// //Criando o nome do arquivo dinamicamente com o número da base
// fs.writeFile(`tabela-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`O arquivo tabela-${base}.txt foi criado!`);
//   });

  //Criando o nome do arquivo dinamicamente com o número da base
  // em uma pasta específica
