const moment = require("moment");
const http = require("http");
const port = 8080;
const date = moment().format("DD / MM / YYYY");
console.log(date);
const future = moment().add(3, "days");
console.log(future.format("DD / MM / YYYY"));
function logger(req) {
  console.log(`${new Date()} - ${req.url} : ${req.method}`);
}
function getMovies(req, res) {
  const json = {
    id: 110,
    name: "The Matrix",
  };
  return json;
}
function getSports(req, res) {
  const json = {
    id: 200,
    sports: "football",
  };
  return json;
}

function newPage(req, res) {
  const json = {
    name: "hedge",
    id: 1010,
  };
  return json;
}

http
  .createServer(function (req, res) {
    logger(req);
    const html = "<h1>Hey Guys</h1>";
    const json = {
      name: "hedge",
      id: 1010,
    };
    //res.setHeader("content-type", "text/html");
    //res.write(html);
    res.setHeader("content-type", "application/json");
    let result = {};
    if (req.url == "/movies") {
      result = getMovies();
    } else if (req.url == "/sports") {
      result = getSports();
    } else if (req.url == "/") {
      result = newPage();
    }
    //res.write(JSON.stringify(json));
    res.write(JSON.stringify(result));
    res.end();
  })
  .listen(port);
