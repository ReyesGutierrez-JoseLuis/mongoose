const express = require("express");
const router = express.Router();

const  {
    renderClienteForm,
    createNewCliente,
    renderClientes,
    renderEditClienteForm,
    updateCliente,
    deleteCliente
  } = require("../controllers/clientes.controller");

  // Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Note
router.get("/clientes/add", isAuthenticated, renderClienteForm);

router.post("/clientes/new-cliente", isAuthenticated, createNewCliente);

// Get All Notes
router.get("/clientes", isAuthenticated, renderClientes);

// Edit Notes
router.get("/clientes/edit-clientes/:id", isAuthenticated, renderEditClienteForm);

router.put("/clientes/edit-clientes/:id", isAuthenticated, updateCliente);

// Delete Notes
router.delete("/clientes/delete/:id", isAuthenticated, deleteCliente);


module.exports = router;
