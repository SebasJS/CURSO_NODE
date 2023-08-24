// Si queremos utilizar async en Common JS, se puede hacer con una funcion auto invocada

const { readFile } = require('node:fs/promises')

//IIFE inmediatly Invoked Funtion Expression
// Se pone ; al principio porque si no se pone se toma como argumento de la constante anterior const { readFile }
/*
;(
    async () => {
      console.log('Leyendo el primer archivo');
      const text = await readFile('texto.txt', 'utf-8')
      console.log(text);

      console.log('Aqui se ejecuta un proceso x');

      console.log('Leyendo el segundo archivo');
      const text2 = await readFile('texto2.txt', 'utf-8')
      console.log(text2);
    }
  )()
*/
async function init() {
  console.log('Leyendo el primer archivo');
  const text = await readFile('texto.txt', 'utf-8')
  console.log(text);

  console.log('Aqui se ejecuta un proceso x');

  console.log('Leyendo el segundo archivo');
  const text2 = await readFile('texto2.txt', 'utf-8')
  console.log(text2);    
}

init()
