const express = require( 'express' );
const app = express();
const cors = require( 'cors' );

const { dbConection } = require( './config/mongo.config' );
const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() );

//RUTAS QUE SE VAN CREAR






dbConection();

app.listen( PORT, function() {
    console.log( `servidor corriendo en http://localhost:${PORT}` );
})