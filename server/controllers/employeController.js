const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");

const Employe = require("../models/employeModel");
const Internship = require("../models/internshipModel");
const Job = require("../models/jobModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImageKit();

exports.homepage = catchAsyncErrors(async (req, res, next) => {
  res.json({ message: "Secure Employe Homepage!" });
});

exports.currentEmploye = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findById(req.id)
  .populate("jobs")
  .populate("internships")
  .exec();
  res.json({ employe });
});

// Signup
exports.employesignup = catchAsyncErrors(async (req, res, next) => {
  const employe = await new Employe(req.body).save();
  sendtoken(employe, 201, res);
});

// Signin
exports.employesignin = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findOne({ email: req.body.email })
    .select("+password")
    .exec();

  if (!employe) {
    return next(
      new ErrorHandler("User Not Found With This Email Address", 404)
    );
  }

  const isMatch = await employe.comparepassword(req.body.password);
  if (!isMatch) {
    return next(new ErrorHandler("Wrong Credentials", 401));
  }


  


  sendtoken(employe, 200, res);
  // res.json(employe);

  //    res.json(req.body); // show the data of login user route in json form
});

// Signout
exports.employesignout = catchAsyncErrors(async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "succesfully signOut" });
});

// * employe send mail --

exports.employesendmail = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findOne({ email: req.body.email }).exec();

  if (!employe) {
    return next(
      new ErrorHandler("User Not Found With This Email Address", 404)
    );
  }

  const url = Math.floor(Math.random() * 9000 + 1000);
  sendmail(req, res, next, url);

  employe.resetPasswordToken = `${url}`;
  await employe.save();

  res.json({
    message:
      "Reset Password Link Has Been Sent To Your Email check INbox/ Spam",
  });
});

//employe forget link --

exports.employeforgetlink = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findOne({ email: req.body.email }).exec();

  if (!employe) {
    return next(
      new ErrorHandler("User Not Found With This Email Address", 404)
    );
  }

  if (employe.resetPasswordToken == req.body.otp) {
    employe.resetPasswordToken = "0";
    employe.password = req.body.password;
    await employe.save();
  } else {
    return next(
      new ErrorHandler("INVALID Reset Password Link! PLease Try Again", 500)
    );
  }

  res.status(200).json({
    message: "Password Has Been Successfully Updated",
  });
});

//* loggedin employe Reset password link --

exports.employeresetpassword = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findById(req.id).exec();
  employe.password = req.body.password;
  await employe.save();

  sendtoken(employe, 201, res);

  res.status(200).json({
    message: "Password Has Been Successfully Reset",
  });
});

// employe Update  Details
exports.employeupdate = catchAsyncErrors(async (req, res, next) => {
  await Employe.findByIdAndUpdate(req.params.id, req.body).exec();

  res.status(200).json({
    success: true,
    message: "employe Details Has Been Successfully Updated!",
  });
});

// employe avatar upload file upload
exports.employeavatar = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findById(req.params.id).exec();
  const file = req.files.organizationlogo;
  const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(
    file.name
  )}`;

  // before uploading file we are deleting previous file from imagekit

  if (employe.organizationlogo.fileId != "") {
    await imagekit.deleteFile(employe.organizationlogo.fileId);
  }

  // accesing fileId and url which we deaclared inside employeModel avatar object and passing it to employe function
  const { fileId, url } = await imagekit.upload({
    file: file.data,
    fileName: modifiedFileName,
  });

  employe.organizationlogo = { fileId, url };

  await employe.save();

  res.status(200).json({
    success: true,
    message: "Profile Successfully Updated!",
  });
});

//---------------Internship-----------------//

exports.createinternship = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findById(req.id).exec();
  const internship = await new Internship(req.body);
  internship.employe = employe._id;
  employe.internships.push(internship._id);
  await internship.save();
  await employe.save();
  res.status(201).json({
    success: true,
    message: "Internship Successfully Created!",
    internship,
  });
});

exports.readinternship = catchAsyncErrors(async (req, res, next) => {
  const { internships } = await Employe.findById(req.id)
    .populate("internships")
    .exec();
  res.status(200).json({
    success: true,
    message: "Internships Successfully Fetched!",
    internships,
  });
});

exports.readsingleinternship = catchAsyncErrors(async (req, res, next) => {
  const internship = await Internship.findById(req.params.id).exec();

  res.status(200).json({
    success: true,
    message: "Internship Successfully Fetched!",
    internship,
  });
});

//---------------Internship-----------------//

exports.createjob = catchAsyncErrors(async (req, res, next) => {
  const employe = await Employe.findById(req.id).exec();
  const job = await new Job(req.body);
  job.employe = employe._id;
  employe.jobs.push(job._id); 
  await job.save();
  await employe.save();
  res.status(201).json({
    success: true,
    message: "job Successfully Created!",
    job,
  });
});

exports.readjob = catchAsyncErrors(async (req, res, next) => {
  const { jobs } = await Employe.findById(req.id).populate("jobs").exec();
  res.status(200).json({
    success: true,
    message: "jobs Successfully Fetched!",
    jobs,
  });
});

exports.readsinglejob = catchAsyncErrors(async (req, res, next) => {
  const job = await Job.findById(req.params.id).exec();

  res.status(200).json({
    success: true,
    message: "job Successfully Fetched!",
    job,
  });
});

// ---------------- delete employe-----------------//

exports.employedelete = catchAsyncErrors(async (req, res, next) => {
  await Employe.findByIdAndDelete(req.id).exec();

  res.json({ message: "employe was deleted" });
});

// ---------------- delete student end-----------------//
