const router = require("express").Router();
const {
  allTags,
  createTags,
  updateTags,
  deleteTags,
  filterTags
} = require("../resolvers/tags-resolvers");

router
  .get("/", allTags)
  .get("/:id", filterTags)
  .post("/", createTags)
  .put("/:id", updateTags)
  .delete("/:id", deleteTags);

module.exports = router;
