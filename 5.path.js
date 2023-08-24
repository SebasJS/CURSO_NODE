const path = require("node:path");

//Barra separadora de carpetas en SO
console.log(path.sep);

//unir rutas con path.join
const filePath = path.join("content", "subfolfer", "test.txt");
console.log(filePath);

//Traer nombre del fichero
const base = path.basename("/tmp/secret/textSecret.txt");
console.log(base);

//Nombre de fichero sin extension
const filename = path.basename("/tmp/secret/textSecret.txt", ".txt");
console.log(filename);

//Extension del fichero
const extension = path.extname("/img/image.jpg");

console.log(extension);
