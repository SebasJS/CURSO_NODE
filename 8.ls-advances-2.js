const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(`No se pudo leer el directorio ${folder}`)
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

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
  })

  const fileInfo = await Promise.all(filesPromises)

  fileInfo.forEach( info => {
    console.log(info);
  })
}

ls(folder)