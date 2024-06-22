const { Schema, model } = require( 'mongoose' );

const PetsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    race: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },

    idUser: {
        type: String,
        require: false
    },
    
    description: {
        type: String,
    },
    urlImage:{
        type: String,
    }

    

});

const PetsModel = model('pets', PetsSchema)

module.exports = PetsModel;