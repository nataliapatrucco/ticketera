const express = require("express");
const router = express.Router();
const {
  addTag,
  removeTag,
  fetchTickets,
  fetchStatus,
  fetchByTitleTag,
  editTicket,
  createTicket,
  deleteTicket
} = require("../resolvers/ticketResolver");

const { isLoggedIn, isAdmin } = require("../routes/middlewares");

// Traer todos los tickets
router.get("/", isLoggedIn, fetchTickets);

router.get("/search", isLoggedIn, fetchByTitleTag);

// Crear un ticket
router.post("/", isLoggedIn, createTicket);

// Buscar los tickets por status
router.get("/status/:statusId", isLoggedIn, fetchStatus);

// Editar un ticket
router.put("/:ticketId", isLoggedIn, editTicket);

//Agregar tags
router.put("/:ticketId/addTag/:tagId", isLoggedIn, addTag);

//Quitar tags
router.put("/:ticketId/removeTag/:tagId", isLoggedIn, removeTag);

// Borrar un ticket
router.delete("/:id", isLoggedIn, deleteTicket);

module.exports = router;
