/*
 * Title : Uptime monitoring API
 * Description : A restful API for monitoring up and down time of user defined links
 * Author : Adir
 * Date : 25/11/22

*/

// Dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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

app.handleReqRes = (req, res) => {
  //handle request
  // get parsed path
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  // get methods
  const methods = req.method.toLowerCase();
  // headers, meta data
  const headers = req.headers;
  //Queries
  const queryStringObject = parsedUrl.query;

  //get data from body
  const decoder = new StringDecoder();
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
  });

  //handle response
  res.end("Hello api");
};

// start the server
app.createServer();
