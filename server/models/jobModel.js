
const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({
    students :[ { type: mongoose.Schema.Types.ObjectId, ref: 'students' } ],
    employe : { type: mongoose.Schema.Types.ObjectId, ref: 'employe' },
    title:{
        type:String,
        required:[true,"Title is required"],
    },
    skill:{
        type:String,
        required:[true,"Skill is required"],
    },
    jobtype:{
        type:String,
        required:[true,"JobType is required"],
       enum:["In office","Remote"],
    },
    openings :{
        type:Number,
        required:[true,"Openings is required"],
    },
    description:{
        type:String,
        required:[true,"description is required"],
    },
    preferences:{
        type:String,
        required:[true,"preferences is required"],
    },
    salary:{
        type:String,
        required:[true,"salary is required"],
    },
    perks:String,
    assessments: String

},{timestamps:true});

const Job = mongoose.model("job",jobModel);

module.exports = Job;