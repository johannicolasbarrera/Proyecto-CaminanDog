const { Router } = require( 'express' );
const { getPets, getPetsById, createPets, updatepetsById,  removePetById } = require('../controllers/pets.controller');
const router = Router();

router.get('/pets', getPets);
router.get('/pets/:id',getPetsById );
router.post('/pets',createPets );
router.patch('/pets/:id', updatepetsById);
router.delete('/pets/:id', removePetById);


module.exports = router;