const router = require("express").Router();
const { isLoggedIn, isAdmin } = require("./middlewares");
const {
  allTags,
  createTags,
  updateTags,
  deleteTags,
  filterTags
} = require("../resolvers/tags-resolvers");

router;
const { isLoggedIn, isAdmin } = require("./middlewares")
  .get("/", isLoggedIn, allTags)
  .get("/:id", filterTags)
  .post("/", isAdmin, createTags)
  .put("/:id", isAdmin, updateTags)
  .delete("/:id", isAdmin, deleteTags);

module.exports = router;
