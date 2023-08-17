const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo');
fs.readFile('texto.txt', 'utf-8')
  .then( text => {
    console.log(text);
  })

console.log('Aqui se ejecuta un proceso x');

console.log('Leyendo el segundo archivo');
fs.readFile('texto2.txt', 'utf-8')
  .then(text => {
    console.log(text);
  })
