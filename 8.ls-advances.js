const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

fs.readdir(folder)
  .then( files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch( err => {
    if(err) {
      console.error('Erro al leer el directorio', err);
      return;
    }
  })

