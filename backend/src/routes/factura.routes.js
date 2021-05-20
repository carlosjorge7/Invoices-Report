const express = require('express');
const router = express.Router();

const facturasController = require('../controllers/factura.controller');

router.get('/welcome', facturasController.welcome);
router.get('/', facturasController.getFacturas);
router.post('/', facturasController.createFactura);
router.get('/:id', facturasController.getFactura);
router.delete('/:id', facturasController.deleteFactura);
router.put('/:id', facturasController.updateFactura);

module.exports = router;