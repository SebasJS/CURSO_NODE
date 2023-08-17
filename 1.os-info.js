const os = require("node:os")

console.log('informacion del sistema operativo')
console.log('__________________________________')

console.log('Nombre del O.S: ', os.platform())
console.log('Version del O.S: ', os.release())
console.log('Arquitectura del O.S: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total: ', os.totalmem() / 1024 / 1024)
console.log('Horas encendido el PC: ', os.uptime() / 60 / 60)