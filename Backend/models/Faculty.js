const mongoose = require('mongoose');
const { Schema } = mongoose;

const FacultySchema = new Schema({
    fid:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: email,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("faculty", FacultySchema );