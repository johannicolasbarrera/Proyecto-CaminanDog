const ProductModel = require ( '../models/Product' )

async function insertaPropducto ( product ) {
    return ProductModel.create( product )
}

module.exports = {
    insertaPropducto
}