
const http = require("node:http");
const { server: wisp } = require("@mercuryworkshop/wisp-js/server");

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Wisp server is running!");
});

server.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Wisp server listening on port ${PORT}`);
});
