const http = require("http");
const { App } = require("./app");
const server = http.createServer(App);
let count = 1;
let port = process.env.PORT || 8080;
server.on("error", error => console.log(error));

server.listen(port, () => console.log(`Server running on ${port}`));

server.on("connection", connect => {
  let time = new Date().getTime();
  console.log(
    `>>>> Count Connection: ${count++} at ${new Date().toLocaleString()}`
  );
  //    console.log(new Date(time).toLocaleString());
});
