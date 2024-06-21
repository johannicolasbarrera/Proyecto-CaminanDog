const { Router } = require( 'express' );
const { crearReserva, obtenerReservas, obtenerReservasId, updateReservaId, removeReservaId } = require('../controllers/reservas.controller');
const router = Router();

router.post( '/', crearReserva );
router.get( '/', obtenerReservas );
router.get( '/:id', obtenerReservasId );
router.patch( '/:id', updateReservaId );
router.delete( '/:id', removeReservaId );


module.exports = router;