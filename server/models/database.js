const mongoose = require('mongoose');

exports.connectDatbase = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Datbase Connection Established!");

        
    } catch (error) {
        console.log(error.message);
        
    }

}