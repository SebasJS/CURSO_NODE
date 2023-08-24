const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors =  require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(picocolors.red(`No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePatch = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePatch)
    } catch {
      console.error(`No se puede leer el archivo ${filePatch}`)
      process.error(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${picocolors.bgBlue(fileType)} ${picocolors.green(file.padEnd(20))} ${picocolors.yellow(fileSize.toString().padStart(10))} ${picocolors.blue(fileModified)}`
  })

  const fileInfo = await Promise.all(filesPromises)

  fileInfo.forEach( info => {
    console.log(info);
  })
}

ls(folder)