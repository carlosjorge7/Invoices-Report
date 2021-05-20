/** SERVER EN NODEJS Y EXPRESS */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); 

const app = express();

const facturasRoutes = require('./src/routes/factura.routes')
const { mongoose } = require('./db');

// import Data
const csv = require('csvtojson');

function insertFacturas() {
    const converter = csv()
        .fromFile('./Data.csv')
            .then((json) => {
                var facturas = json;
                const  Factura  = require('./src/models/Factura')
                Factura.insertMany(facturas)
        });
        console.log('Data.csv import to mongoDB facturacion-electrica')  
}
insertFacturas();

// Settings
app.set('port', process.env.PORT || 3600);

// Middlewares (morgan: nos da info del tipo de peticiones)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/facturas', facturasRoutes)

// Starting server (nodemon) y express
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});