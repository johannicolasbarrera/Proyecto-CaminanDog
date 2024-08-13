const mongoose = require( 'mongoose' );
require('dotenv').config({path:'.env'})

async function dbConection() {
    try {
        let mongoURL = process.env.DB_URL
        await mongoose.connect(mongoURL , {} );
        console.log( 'base de datos inicializanda exitosamente' );
    }

    catch ( error ) {
        console.log( error );
        throw new Error( 'Error al iniciar la base de datos' );
    }
}

module.exports = {
    dbConection
}