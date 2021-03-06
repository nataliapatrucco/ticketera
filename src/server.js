const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/index");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const socket = require("./socket/index");
var cors = require("cors");
const { Ticket } = require("./db/models");

app.use(
  cors({
    origin: "*"
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({ secret: "cualquierCosa", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
db.sync({ force: false }).then(() => {
  const PORT = process.env.PORT || 3000;
  const http = app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}!`);
  });
  socket.connect(http);
});
app.use("/api", require("./routes"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

module.exports = app;
