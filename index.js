/*
 * Title : Uptime monitoring API
 * Description : A restful API for monitoring up and down time of user defined links
 * Author : Adir
 * Date : 25/11/22

*/

// Dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// App object - Module scaffolding
const app = {};

// Configuration

app.config = {
  port: 5000,
};

// Create a server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening on port ${app.config.port}`);
  });
};

//handle request response

app.handleReqRes = handleReqRes;

// start the server
app.createServer();
