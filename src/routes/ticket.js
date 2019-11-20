const express = require("express");
const router = express.Router();
const {
  fetchTickets,
  fetchStatus,
  editTicket,
  createTicket,
  deleteTicket
} = require("../resolvers/ticketResolver");

const { isLoggedIn } = require("../routes/middlewares");

// Traer todos los tickets
router.get("/", isLoggedIn, fetchTickets);

// Crear un ticket
router.post("/", isLoggedIn, createTicket);

// Buscar los tickets por status
router.get("/:status", isLoggedIn, fetchStatus);

// Editar un ticket
router.put("/:ticketId", isLoggedIn, editTicket);

// Borrar un ticket
router.delete("/:id", isLoggedIn, deleteTicket);

module.exports = router;
