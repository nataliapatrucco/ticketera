const router = require("express").Router();
const tagsRouter = require("./tags");
const ticketRouter = require("../routes/ticket");

router.use("/ticket", ticketRouter);
router.use("/tags", tagsRouter);

module.exports = router;
