const Factura = require('../models/Factura');
const facturaCtrl = {};

facturaCtrl.welcome = async (req, res) => {
    res.status(200).json({
        message: 'Bienvenido a la API de facturacion electrica',
        author: 'Carlos Jorge',
        stack: 'MEAN'
    });   
}

facturaCtrl.getFacturas = async (req, res) => {
    try {
        const facturas = await Factura.find();
        res.status(200).json(facturas);
    }
    catch(error) {
        res.status(500).json({
            message: error.message || 'Error listar todas las facturas'
        });
    }
}

facturaCtrl.createFactura = async (req, res) => {
    try {
        const factura = new Factura({
            fecha: req.body.fecha,
            hora: req.body.hora,
            consumo: req.body.consumo,
            precio: req.body.precio,
            coste: req.body.coste
        });
        const facturaGuardada = await factura.save();
        res.status(200).json(facturaGuardada);
    }
    catch(error) {
        res.status(500).json({
            message: error.message || 'Error para crear una factura'
        });
    }
}

facturaCtrl.getFactura = async (req, res) => {
    const { id } = req.params;
    try {
        const factura = await Factura.findById(id);
        if(!factura){
            return res.status(404).json({ message: `Tarea con el id ${id} no existe`})
        }
        res.status(200).json(factura);
    }
    catch(error) {
        res.status(500).json({ message: 'Error al obtener la factura'});
    }
}

facturaCtrl.updateFactura = async (req, res) => {
    const { id } = req.params;
    try {
        await Factura.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            message: 'Factura actualizada'
        });
    }
    catch(error) {
        res.status(500).json({ message: 'Error al actualizatr factura'});
    }
}

facturaCtrl.deleteFactura = async (req, res) => {
    const { id } = req.params;
    try {
        await Factura.findByIdAndDelete(id);
        res.status(200).json({
            message: 'Factura borrada correctamente'
        });
    }
    catch(error) {
        res.status(500).json({ message: 'Error al borrar la tarea'});
    }
}

module.exports = facturaCtrl;