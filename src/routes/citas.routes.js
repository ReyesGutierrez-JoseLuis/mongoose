const express = require("express");
const router = express.Router();

const  {
    renderCitaForm,
    createNewCita,
    renderCita,
    renderEditCitaForm,
    updateCita,
    deleteCita
  } = require("../controllers/citas.controller");

  // Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Note
router.get("/citas/add", isAuthenticated, renderCitaForm);

router.post("/citas/new-cita", isAuthenticated, createNewCita);

// Get All Notes
router.get("/citas", isAuthenticated, renderCita);

// Edit Notes
router.get("/citas/edit-cita/:id", isAuthenticated, renderEditCitaForm);

router.put("/citas/edit-citas/:id", isAuthenticated, updateCita);

// Delete Notes
router.delete("/citas/delete/:id", isAuthenticated, deleteCita);


module.exports = router;
