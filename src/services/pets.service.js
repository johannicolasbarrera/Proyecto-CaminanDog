const PetsModel = require( '../models/Pets' );

const getAllPets = async () => {
    return await PetsModel.find();
}

const getOnePetsById = async (id) => {
    return await PetsModel.findOne({_id: id});
}

const createOnePets = async ( newPets ) => {
    return await PetsModel.create( newPets );
}

const removeOnePetById = async ( id ) => {
    return await PetsModel.findOneAndDelete({_id: id});
}

const updateOnePetById = async ( _id, updatedPets ) => {
    return await PetsModel.findOneAndUpdate(
        { _id },
        updatedPets,
        { new: true }
    );
}

module.exports = {
    getAllPets,
    getOnePetsById,
    createOnePets,
    removeOnePetById,
    updateOnePetById
}