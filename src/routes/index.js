const express = require("express");
const router = express.Router();
const ticketRouter = require("../routes/ticket");

router.use("/ticket", ticketRouter);

module.exports = router;
