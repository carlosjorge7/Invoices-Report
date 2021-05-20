const mongoose = require('mongoose');
const dbName = 'facturacion-electrica';
const URI = `mongodb://localhost/${dbName}`

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
    })
    .then(db => console.log(`Database is connectend to ${dbName}`))
        .catch(err => console.log(err));

module.exports = mongoose;