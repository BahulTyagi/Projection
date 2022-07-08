const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("student", StudentSchema );