const express = require("express");
const router = express.Router();
const {
  fetchTickets,
  fetchStatus,
  updateTicket,
  createTicket,
  deleteTicket
} = require("../resolvers/ticketResolver");

// Traer todos los tickets
router.get("/", fetchTickets);

// Crear un ticket
router.post("/", createTicket);

// Buscar los tickets por status
router.get("/:status", fetchStatus);

// Editar un ticket
router.put("/:ticketId", updateTicket);

// Borrar un ticket
router.delete("/:id", deleteTicket);

module.exports = router;
