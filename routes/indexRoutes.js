const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

// Rutas principales
router.get('/', indexController.index)
router.get('/detalle/:id', indexController.detalleMenu)

module.exports = router;