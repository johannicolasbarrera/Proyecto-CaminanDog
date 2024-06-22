const { Schema, model } = require( 'mongoose' );

const ReservaSchema = new Schema({
    day: {
        type: String,
        require: true
    },
    hour: {
        type: String,
        require: true
    },
    idServicio: {
        type: String,
        require: false
    },
    idUser: {
        type: String,
        require: false
    },

    idPet: {
        type: String,
        require: false
    }

},{
    timestamps: true
});

const ReservaModel = model(
    'Reserva', ReservaSchema
);

module.exports = ReservaModel;