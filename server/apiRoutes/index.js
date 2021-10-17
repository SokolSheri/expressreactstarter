const router = require("express").Router();

router.get("/", async function (req, res, next) {
  try {
    res.send("hi");
  } catch (error) {
    console.log(error);
  }
});

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
