const router = require("express").Router();
const tagsRouter = require("./tags");
const ticketRouter = require("./ticket");
const user = require("./user");
const statusRouter = require("./status");

router.use("/user", user);
router.use("/ticket", ticketRouter);
router.use("/tags", tagsRouter);
router.use("/status", statusRouter);

module.exports = router;
