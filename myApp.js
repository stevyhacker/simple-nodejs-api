var express = require("express");
var app = express();

console.log("Hello World");

app.use(express.json());

function logDetails(req) {
  console.log(req.method + " " + req.path + " - " + req.ip);
}

let notes = [];
// let note = {
//   id: notes.length + 1,
//   title: "req.body.title",
//   description: "req.body.title"
// };

app.use("/", express.static(__dirname + "/public"));

app.use(function middleware(req, res, next) {
  logDetails(req);
  // Call the next function in line:
  next();
});
app.get("/", (req, res) => {
  res.send("Hello Express - Amplitudo Akademija");
  // var absolutePath = __dirname + "/views/index.html";
  // res.sendFile(absolutePath);
});

app.post("/api/note", (req, res) => {
  console.log(req.body);
  
  if (req.body.title.length > 2 && req.body.description.length > 2) {
    let note = {
      id: notes.length + 1,
      title: req.body.title,
      description: req.body.description
    };
    notes.push(note);
    res.json(note);
  } else {
    res.status(400).json({
      error: "Invalid note input title and description length."
    });
  }
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      message: "Hello json".toUpperCase()
    });
  } else {
    res.json({
      message: "Hello json"
    });
  }
});

app.get("/search", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      message: "Hello json".toUpperCase()
    });
  } else {
    res.json({
      message: "Hello json"
    });
  }
});

// --> 7)  Mount the Logger middleware here

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */

/** 2) A first working Express Server */

/** 3) Serve an HTML file */

/** 4) Serve static assets  */

/** 5) serve JSON on a specific route */

/** 6) Use the .env file to configure the app */

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

/** 9)  Get input from client - Route parameters */

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
