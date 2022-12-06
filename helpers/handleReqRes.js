/*
 * Title : Handle Request Response
 * Description :Handle Request Response
 * Author : Adir
 * Date : 25/11/22

*/

//dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");

//Module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
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

module.exports = handler;
