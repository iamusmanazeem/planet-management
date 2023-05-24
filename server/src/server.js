const http = require("http");
const app = require("./app");
const PORT = process.env.port || 8000;

// const httpServer = http.createServer(app);

// httpServer.listen(PORT, () => {
//   console.log("server is listening on port", PORT);
// });

app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
 });