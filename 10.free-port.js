//aplicacion que nos dara el puerto disponible

//net es otro protocolo de comunicación con http

const net = require("node:net");

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();

      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", (err) => {
      if (err === "EADDRINUSE") {
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { findAvailablePort };
