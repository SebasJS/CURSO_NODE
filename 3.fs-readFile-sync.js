const fs = require('node:fs')

console.log('Leyendo el primer archivo');
const text = fs.readFileSync('texto.txt', 'utf-8')
console.log(text);

console.log('Aqui se ejecuta un proceso x');

console.log('Leyendo el segundo archivo');
fs.readFileSync('texto2.txt', 'utf-8')
console.log(text);
