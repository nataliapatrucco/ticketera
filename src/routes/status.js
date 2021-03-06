const router = require("express").Router();
const { isLoggedIn, isAdmin } = require("./middlewares");
const { setStatus } = require("../resolvers/status-Resolvers");

router.put("/:id", isLoggedIn, setStatus);

module.exports = router;
