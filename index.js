const express = require( 'express' );
const app = express();
const cors = require( 'cors' );
const { dbConection } = require('./config/mongo.config');

const express = require('express');
const dbConection = require( './config/mongo.config' );
const cors = require('cors');

PORT = process.env.PORT
dbConection();
const app = express();
app.use( cors() );
app.use( express.json() );

//RUTAS QUE SE VAN CREAR

app.use ( '/api', require ( './src/routes/pets.routes'));
app.use ( '/api', require ( './src/routes/reservas.routes'));
app.use ( '/api', require ( './src/routes/services.routes' ));

app.get('/api/ok', (req, res) => {
    // Devolver un mensaje de estado saludable
    res.status(200).json({ status: 'OK', message: 'API is OK' });
  });

app.listen(PORT || 3000, ()=>  {
    console.log( `servidor corriendo en http://localhost:${PORT}` )
})
