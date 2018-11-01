const http = require("http");
const { App } = require("./app");
const server = http.createServer(App);

let port = process.env.PORT || 8080;
server.on("error", (error) => console.log(error));
server.listen(port, () => console.log(`Server running on ${port}`));
