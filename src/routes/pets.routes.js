const { Router } = require( 'express' );
const { getPets, getPetsById, createPets, updatepetsById,  removePetById } = require('../controllers/pets.controller');
const router = Router();

router.get('/', getPets);
router.get('/:id',getPetsById );
router.post('/',createPets );
router.patch('/:id', updatepetsById);
router.delete('/:id', removePetById);


module.exports = router;