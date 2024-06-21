
const ReservaModel = require('../models/Reservas');


const crearReservas = async  ( reserva ) => {
    return await ReservaModel.create( reserva );
}

const obtenerReservasAll = async () => {
    return await ReservaModel.find();
}

const obtenerReservaId = async ( _id ) => {
    return await ReservaModel.findOne({ _id });
}

const updateReservasId = async ( _id, updateReservas ) => {
    return await ReservaModel.findOneAndUpdate( 
        { _id },

        updateReservas,
        { new: true }
    );
}

const removeReservasId = async ( _id ) => {
    return await ReservaModel.findOneAndDelete({ _id });
}

module.exports = {
    crearReservas,
    obtenerReservasAll,
    obtenerReservaId,
    updateReservasId,
    removeReservasId
}