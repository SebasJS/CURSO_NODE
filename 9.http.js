const http = require("node:http");
const { findAvailablePort } = require("./10.free-port");
const desiredPort = process.env.PORT ?? 3000;

//Un Servidor solo puede hacer dos cosas Recibir una petición o devolver una respuesta

const server = http.createServer((req, res) => {
  console.log("request recibido");
  res.end("Se envio respuesta");
});

//Para escuchar el servidor

/*
server.listen(3000, () => {
  console.log("Se esta escuchando en puesto 3000");
});
*/

// si utilizamos el puerto 0 nos buscara el primer puerto que este disponible

/*
server.listen(0, () => {
  console.log(
    `Escuchando el servidor en el puerto http://localhost:${
      server.address().port
    }`
  );
});
*/

//Utilizamos la funcion creadad en 10.free-port.js

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
  });
});
