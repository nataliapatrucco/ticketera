const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/index");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({ secret: "cualquierCosa", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

db.sync(/*{force:true}*/).then(() =>
  app.listen(3007, function() {
    console.log("Example app listening on port 3000!");
  })
);
app.use("/api", require("./routes"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
