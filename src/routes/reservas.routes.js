const { Router } = require( 'express' );
const { crearReserva, obtenerReservas, obtenerReservasId, updateReservaId, removeReservaId } = require('../controllers/reservas.controller');
const router = Router();

router.post( '/reservas', crearReserva );
router.get( '/reservas', obtenerReservas );
router.get( '/reservas/:id', obtenerReservasId );
router.patch( '/reservas/:id', updateReservaId );
router.delete( '/reservas/:id', removeReservaId );


module.exports = router;