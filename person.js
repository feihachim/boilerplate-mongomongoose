const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:1,
        max:150
    },
    favoriteFoods:[String]
});

module.exports = mongoose.model('Person',personschema);