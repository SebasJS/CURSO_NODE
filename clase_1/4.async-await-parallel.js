const { readFile } = require('node:fs/promises')

Promise.all([
  readFile('./texto.txt', 'utf-8'),
  readFile('./texto2.txt', 'utf-8')
]).then(([text, secondText]) =>{
  console.log(text)
  console.log(secondText)
})