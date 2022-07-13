const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema({
    id:{
        type: String,
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

const Student=mongoose.model("Student", StudentSchema, "student" );
module.exports = Student