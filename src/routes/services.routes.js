const { Router } = require ( 'express' );
const { getServicesById, createOneService, updateOneService, removeOneService, getAllServices } = require ( '../controllers/service.controller' )
const router = Router ();

router.get ('/services/', getAllServices);
router.get ('/services/:id', getServicesById );
router.post ('/services/', createOneService );
router.patch ('/services/:id', updateOneService );
router.delete ('/services/:id', removeOneService );


module.exports = router; 
