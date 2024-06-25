const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema ({
    name: {
        type: String, 
        require: true
    },
    description: { 
        type: String,
        require: true
    },
    timeOfWalk: { 
        type: Number, 
        require: true
    },
    price: { 
        type: Number, 
        require: true
    }    
    
});

const ServiceModel = model ( 
    'Service', ServiceSchema
);

module.exports = ServiceModel;