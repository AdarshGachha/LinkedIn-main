
const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({
    students :[ { type: mongoose.Schema.Types.ObjectId, ref: 'students' } ],
    employe : { type: mongoose.Schema.Types.ObjectId, ref: 'employe' },
    profile:{
        type:String,
        required:[true,"Please enter profile name"],
        min:[3,"Profile name cannot be less than 3 characters"],
    },
    skill:{
        type:String,
        required:[true,"skill is required"],
    },
    internshiptype:{
        type:String,
       enum:["In office","Remote"],
    },
    openings :{
        type:Number,
        required:[true,"Openings is required"],
    },
    from:String,
    to:String,
    duration:{
        type:String,
        required:[true,"duration is required"],
    },
    responsibility:{
        type:String,
        required:[true,"responsibility is required"],
    },  
    stipend:{
        status:{
            type:String,
            enum:["Fixed","Negotiable","Performance Based","Unpaid"],
        },
        amount:Number,

    },
    perks:String,
    assessments:String,

},{timestamps:true});

const Internship = mongoose.model("internship",internshipModel);

module.exports = Internship;