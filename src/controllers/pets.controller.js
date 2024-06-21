const { getAllPets, getOnePetsById, createOnePets, updateOnePetById, removeOnePetById } =require ("../services/pets.service");

const getPets = async ( req, res ) => {

    try {
        const data = await getAllPets ();

        res.json ({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error no puede obtener todas las mascotas'
        })  
    }

}

const getPetsById = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await getOnePetsById ( id );

        res.json ({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener categorias por ID'
        })  
    }
}

const createPets = async ( req, res ) => {
    const newCategory = req.body;
    try {
        const data = await createOnePets ( newCategory );

        res.json ({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al crear una categoria'
        })  
    }
}

const updatepetsById = async ( req, res ) => {
    const id = req.params.id;
    const updateData = req.body;
    
    try {
        const data = await updateOnePetById (id, updateData);

        res.json ({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'No pudo actualizar la categoria por ID'
        })  
    }
}

const removePetById = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await removeOnePetById ( id );

        res.json ({
            ok: true,
            data
        });
    } 
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'No pudo actualizar la categoria por ID'
        })  
    }
}

module.exports = {
    getPets,
    getPetsById,
    createPets,
    updatepetsById,
    removePetById
}