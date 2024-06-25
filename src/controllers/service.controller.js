const { getServiceById, createService, updateServiceById, removeServiceById, getService } = require( '../services/services.service')
const getAllServices = async ( req, res ) => { 
    const data = await getService ();
    try {
        res.json({
            ok: true, 
            data
        })
    } catch (error) {
        console.error ( error ); 

        res.json({
            ok: false,
            msg: 'No se pudieron obtener los servicios'
        })
        
    }
}

const getServicesById = async ( req, res ) => {
    const id = req.params.id;

    try {
        const data = await getServiceById  ( id ); 

        res.json({ 
            ok: true,
            data
        })
        
    } catch (error) {
        console.error ( error );
        
        res.json ({
            ok: false, 
            msg: 'No se pudo obtener el producto'
        })
    }
}

const createOneService = async ( req, res ) => { 
    const service = req.body

    try {
        const data = await createService ( service ); 

        res.json({
            ok: true,
            data
        })

    } catch (error) {
        console.error ( error )
        
        res.json({
            ok: false, 
            msg: 'No se pudo crear el nuevo servicio'
        })
    }
}

const updateOneService = async ( req, res ) => { 
    const id = req.params.id; 
    const updateData = req.body;
    
    try {
        const data = await updateServiceById ( id, updateData)

        res.json ({ 
            ok: true, 
            data
        })

    } catch (error) {
        console.error ( error ); 
        
        res.json ({ 
            ok: false, 
            msg: 'No se pudo actualizar el servicio'
        })
    }

}

const removeOneService = async ( req, res ) => { 
    const id = req.params.id; 

    try {
        const data = await removeServiceById ( id )

        res.json({ 
            ok: true, 
            data
        })

    } catch (error) {
        console.error ( error )

        res.json ({ 
            ok: false, 
            msg: 'No se pudo eliminar el servicio'
        })
    }
}

module.exports = { 
    getAllServices,
    getServicesById, 
    createOneService,
    updateOneService,
    removeOneService
}