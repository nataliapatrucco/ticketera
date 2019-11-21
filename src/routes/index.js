const router = require("express").Router();
const tagsRouter = require("./tags");
const ticketRouter = require("../routes/ticket");
const user = require("./user");

router.use("/user", user);

router.use("/ticket", ticketRouter);
router.use("/tags", tagsRouter);

module.exports = router;
