const { Router } = require ( 'express' );
const { getServicesById, createOneService, updateOneService, removeOneService, getAllServices } = require ( '../controllers/service.controller' )
const router = Router ();

router.get ('/', getAllServices);
router.get ('/:id', getServicesById );
router.post ('/', createOneService );
router.patch ('/:id', updateOneService );
router.delete ('/:id', removeOneService );


module.exports = router; 
