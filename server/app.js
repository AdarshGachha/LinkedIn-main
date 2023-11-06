require("dotenv").config({path: "./.env"});

const cors = require("cors");

const express = require('express');
const app = express();

//DBConnection

require("./models/database").connectDatbase();


//logger
const logger = require('morgan');
app.use(logger('dev'));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// session and cookie parser

const session = require('express-session');
const cookieparser = require('cookie-parser');

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret : process.env.EXPRESS_SESSION_SECRET,
}));

app.use(cookieparser());


// CORS
app.use(require("cors")({ credentials: true, origin: true }));





// express file-upload
const fileupload = require('express-fileupload');
app.use(fileupload());


// routes
app.use('/', require('./routes/indexRoutes'));
app.use('/resume', require('./routes/resumeRoutes'));
app.use('/employe', require('./routes/employeRoutes'));


// error handling
const ErrorHandler = require("./utils/ErrorHandler");
const { genratedErrors } = require("./middlewares/errors");

app.all('*',(req,res,next)=>{
    next(new ErrorHandler(`Requested Url Not Found ${req.url}`, 404))

});

app.use(genratedErrors);






app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`))