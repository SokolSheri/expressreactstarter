const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./apiRoutes"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
