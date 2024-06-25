const ServiceModel = require( '../models/services'); 

const getServiceById = async ( _id ) => { 
    return await ServiceModel.findOne ({ _id })
}

const createService = async ( service ) => { 
    return await ServiceModel.create ( service )
}

const updateServiceById = async ( _id, updateService ) => {
    return await ServiceModel.findOneAndUpdate (
        { _id }, 
        updateService, 
        { new: true }
    )
    
}

const removeServiceById = async ( _id ) => { 
    return await ServiceModel.findOneAndDelete ({ _id })
}

module.exports = { 
    getServiceById, 
    createService,
    updateServiceById,
    removeServiceById
}