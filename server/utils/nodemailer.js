const nodemailer = require('nodemailer');
const ErrorHandler = require('./ErrorHandler');

exports.sendmail = (req,res,next,url)=>{
     const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        }
     });
     const mailOptions = {
        from: "Adarsh Private. Limited.",
        to : req.body.email,
        subject: "Reset Password Link",
        "text": "OTP for Forget Password Link",
        html: `<h1>${url}</h1> <br>
        <a href="${url}">Password Reset Link</a>`
    };
    transport.sendMail(mailOptions,(err,info)=>{
        if(err) return next(new ErrorHandler(err.message,500));
        console.log(info);

        return res.status(200).json({
            message: `Email sent to ${email}`,
            url,

        })

    })
};