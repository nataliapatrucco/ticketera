const express = require("express");
const path = require("path");
const multer = require("multer");

const router = express.Router();
const {
  addTag,
  removeTag,
  editComment,
  fetchTickets,
  fetchStatus,
  editTicket,
  createTicket,
  deleteTicket,
  addParticipant,
  removeParticipant,
  userTickets,
  fetchTicket,
  createImage,
  getDevpedia
} = require("../resolvers/ticket-Resolvers");

const { isLoggedIn, isAdmin, checkUser } = require("../routes/middlewares");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/uploaded-images"));
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  }
});

//const upload = multer({ storage: storage }).array("image", 2);
const upload = multer({ storage: storage });

// Traer todos los tickets
router.get("/", isLoggedIn, fetchTickets);

router.get("/search", isLoggedIn, getDevpedia);

// Crear un ticket
router.post("/", isLoggedIn, createTicket);

// Buscar los tickets por status
router.get("/status/:statusId", isLoggedIn, fetchStatus);

//Traer mis tickets
router.get("/userTickets", isLoggedIn, userTickets);

// Traer un ticket
router.get("/:slug", isLoggedIn, fetchTicket);

//Agregar participante
router.post("/participant", isLoggedIn, addParticipant);

//Eliminar participante
router.put("/participant", isLoggedIn, removeParticipant);

// Editar un ticket
router.put("/:ticketId", isLoggedIn, checkUser, editTicket);

//Agregar tags
router.put("/:ticketId/addTag/:tagId", isAdmin, addTag);

//Quitar tags
router.put("/:ticketId/removeTag/:tagId", isAdmin, removeTag);

//Agregar imagen
router.put("/images/:id", isLoggedIn, upload.any(), createImage);

//Editar comment
router.put("/:ticketId/:commentId", isAdmin, editComment);

// Borrar un ticket
router.delete("/:id", isLoggedIn, checkUser, deleteTicket);

module.exports = router;
