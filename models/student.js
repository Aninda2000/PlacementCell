const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    s_name:{
        type: String,
        required: true
    },
    s_email:{
        type: String,
        required:true
    },
    s_college:{
        type: String,
        required: true
    },
    s_placement_status:{
        type: String,
        required: true
    },
    s_batchName:{
        type:String,
        required:true
    },
    dsa_score:{
        type: Number,
    },
    web_score:{
        type: Number,
    },
    react_score:{
        type: Number,
    }
});

const Student= mongoose.model('students', studentSchema);
module.exports = Student;