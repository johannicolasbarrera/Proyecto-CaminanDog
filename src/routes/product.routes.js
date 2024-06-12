const { Router } = require( 'express' );
const { crearProducto } = require('../controllers/product.controller');
const router = Router();

router.post( '/', crearProducto );


module.exports = router;