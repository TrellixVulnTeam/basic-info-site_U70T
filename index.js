// Express version
const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./public/about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./public/about.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});

// Node version
/* const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // we can also pass the content is res.end() instead of res.write()
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    // we can also pass the content is res.end() instead of res.write()
    res.write("<h1>About page</h1>");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    // we can also pass the content is res.end() instead of res.write()
    res.write("<h1>Contact page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 Page not Found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Listening to port 8080");
});
 */
