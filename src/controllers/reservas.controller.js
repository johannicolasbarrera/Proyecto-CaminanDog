const { crearReservas, obtenerReservasAll, obtenerReservaId, removeReservasId, updateReservasId } = require("../services/reservas.service");

async function crearReserva ( req, res ) {
    const producto = req.body;

    try {
        const nuevoProducto = await crearReservas( producto )

        res.json({
            ok:true,
            data:nuevoProducto
        })
    }

    catch ( error ) {
        console.error( error )
        res.json({
            ok:false,
            msg:"No se puede insertar producto"
        })
    }
}

const obtenerReservas = async ( req, res ) => {

    try{
        const data = await obtenerReservasAll ();

        res.json({
            ok: true,
            data
        });
    }

    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener las reservas'
        })
    }
}

const obtenerReservasId = async ( req, res ) => {

    const id = req.params.id

    try{
        const data = await obtenerReservaId ( id );

        res.json ({
            ok:true,
            data
        });
    }

    catch ( error ) {
        consol.error( error );
        res.json({
            ok: false,
            msg: 'Error al obtener la reserva especificada' 
        })
    }
}

const updateReservaId = async ( req, res ) => {

    const id = req.params.id;
    const updateData = req.body;

    try{
        const data = await updateReservasId ( id, updateData );

        res.json({
            ok:true,
            data
        })
    }

    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al actualizar la reserva por id '
        })
    }
}

const removeReservaId = async ( req, res ) => {
    const id = req.params.id;

    try{
        const data = await removeReservasId ( id );

        res.json({
            ok: true,
            data
        });
    }

    catch ( error ) {
        console.error( error );
        res.json({
            ok: false,
            msg: 'Error al elminar la reserva especificada'
        })
    }
}

module.exports = {
    crearReserva,
    obtenerReservas,
    obtenerReservasId,
    updateReservaId,
    removeReservaId
}