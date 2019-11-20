const { Tag } = require("../db/models/");

allTags = function(req, res) {
  Tag.findAll({ order: [["createdAt", "DESC"]] }).then(tags => res.send(tags));
};

createTags = function(req, res) {
  Tag.create(req.body).then(tag => res.send(tag));
};

updateTags = function(req, res) {
  Tag.findByPk(req.params.id)
    .then(tag => tag.update(req.body))
    .then(() =>
      Tag.findAll({ order: [["createdAt", "DESC"]] }).then(tags =>
        res.send(tags)
      )
    );
};

deleteTags = function(req, res) {
  Tag.findByPk(req.params.id)
    .then(tag => tag.destroy())
    .then(() =>
      Tag.findAll({ order: [["createdAt", "DESC"]] }).then(tags =>
        res.send(tags)
      )
    );
};

filterTags = function(req, res) {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        all: true
      }
    ]
  }).then(tag => res.send(tag));
};

module.exports = {
  allTags,
  createTags,
  updateTags,
  deleteTags,
  filterTags
};
