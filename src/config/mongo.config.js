const mongoose = require( 'mongoose' );
require('dotenv').config()

async function dbConection() {
    try {
        await mongoose.connect( process.env.DB_URL, {} );
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