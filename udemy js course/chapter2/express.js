// What is express?
// express.js is a Node.js framework. It is the most popular framework as of now (the most starred on NPM)

//Express is a web application framework that provides you with a simple API build websites, web apps and backends.

// API
// get = Read
// post = create data into the Server
// put = update the data
// delete = delete the data from the server

const express = require("express");

const app = express();

// The callback function has 2 parameters, request(req) and response(res).

// The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc.

// Similarly, the response object represents the HTTP response
// that the Express app sends when it receives an HTTP request.

app.get("/", (request, response) => {
  response.send("hello every one");
});
app.get("/about", (request, response) => {
  response.send("About Page");
});
app.get("/contact", (request, response) => {
  response.send("ContactUs Page");
});

app.listen(2000, () => {
  console.log("server working on 2000");
});
