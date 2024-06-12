const { Schema, model } = require( 'mongoose' );

const ProductSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },

    fechaNacimiento: {
        type: String,
        require: true
    },

    cedula: {
        type: Number,
        default: 0
    },

    correo: {
        type: String,
        require: true
    },

    celular: {
        type: Number,
        default: 0
    },

    ciudad: {
        type: String,
        require: true
    },

    barrio: {
        type: String,
        require: true
    },

    direccion: {
        type: String,
        require: true
    }

},{
    timestamps: true
});

const ProductModel = model(
    'product', ProductSchema
);

module.exports = ProductModel;