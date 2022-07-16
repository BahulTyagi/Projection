const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
    Tid:{
        type: String
    },
    Sid:{
        type: [String]
    },
    Fid:{
        type: String
    }
});

const Student=mongoose.model("Team", TeamSchema, "team" );
module.exports = Student