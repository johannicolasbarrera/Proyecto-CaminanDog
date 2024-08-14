const express = require( 'express' );
const app = express();
const cors = require( 'cors' );

const { dbConection } = require( './config/mongo.config' );
const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() );

//RUTAS QUE SE VAN CREAR

app.use ('/api', require ('./routes/pets.routes'));
app.use ( '/api', require ( './routes/reservas.routes'));
app.use( '/api', require( './routes/services.routes' ));


dbConection();

app.listen( PORT || 3000, function() {
    console.log( `servidor corriendo en http://localhost:${PORT}` );
})