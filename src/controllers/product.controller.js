const { insertaPropducto } = require("../services/product.service");

async function crearProducto ( req, res ) {
    const producto = req.body;

    try {
        const nuevoProducto = await insertaPropducto( producto )

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

module.exports = {
    crearProducto
}