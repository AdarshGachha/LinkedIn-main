const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");

const Student = require("../models/studentModel");
const Internship = require("../models/internshipModel");
const Job = require("../models/jobModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImageKit();

exports.homepage = catchAsyncErrors(async (req, res, next) => {
  res.json({ message: "Secure Homepage!" });
});

exports.currentUser = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id)
    .populate("jobs")
    .populate("internships")
    .exec();
  res.json({ student });
});

//* Signup
exports.studentsignup = catchAsyncErrors(async (req, res, next) => {
  const student = await new Student(req.body).save();
  sendtoken(student, 201, res);
});

//* Signin
exports.studentsignin = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ email: req.body.email })
    .select("+password")
    .exec();

  if (!student) {
    return next(
      new ErrorHandler("User Not Found With This Email Address", 404)
    );
  }

  const isMatch = await student.comparepassword(req.body.password);
  if (!isMatch) return next(new ErrorHandler("Wrong Credentials", 401));

  sendtoken(student, 200, res);
  // res.json(student);

  res.json({ success: true, message: "successfully Logged In" }); // show the data of login user route in json form
});

//* Signout
exports.studentsignout = catchAsyncErrors(async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "succesfully signOut" });
});

// * student send mail --

exports.studentsendmail = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ email: req.body.email }).exec();

  if (!student) {
    return next(
      new ErrorHandler("User Not Found With This Email Address", 404)
    );
  }

  const url = Math.floor(Math.random() * 9000 + 1000);
  sendmail(req, res, next, url);

  student.resetPasswordToken = `${url}`;
  await student.save();

  res.json({
    message:
      "Reset Password Link Has Been Sent To Your Email check INbox/ Spam",
  });
});

//* student forget link --

exports.studentforgetlink = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ email: req.body.email }).exec();

  if (!student) {
    return next(
      new ErrorHandler("User Not Found With This Email Address", 404)
    );
  }

  if (student.resetPasswordToken == req.body.otp) {
    student.resetPasswordToken = "0";
    student.password = req.body.password;
    await student.save();
  } else {
    return next(
      new ErrorHandler("INVALID Reset Password Link! PLease Try Again", 500)
    );
  }

  res.status(200).json({
    message: "Password Has Been Successfully Updated",
  });
});

//* loggedin student Reset password link --

exports.studentresetpassword = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();
  student.password = req.body.password;
  await student.save();

  sendtoken(student, 201, res);

  res.status(200).json({
    message: "Password Has Been Successfully Reset",
  });
});

//* Student Update  Details

exports.studentupdate = catchAsyncErrors(async (req, res, next) => {
  await Student.findByIdAndUpdate(req.params.id, req.body).exec();

  res.status(200).json({
    success: true,
    message: "Student Details Has Been Successfully Updated!",
  });
});

//* Student avatar upload file upload

exports.studentavatar = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.params.id).exec();
  const file = req.files.avatar;
  const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(
    file.name
  )}`;

  // before uploading file we are deleting previous file from imagekit

  if (student.avatar.fileId != "") {
    await imagekit.deleteFile(student.avatar.fileId);
  }

  // accesing fileId and url which we deaclared inside studentModel avatar object and passing it to student function
  const { fileId, url } = await imagekit.upload({
    file: file.data,
    fileName: modifiedFileName,
  });

  student.avatar = { fileId, url };

  await student.save();

  res.status(200).json({
    success: true,
    message: "Profile Successfully Updated!",
  });
});

// ------------------ read all internships ------------------ //

exports.readallinternships = catchAsyncErrors(async (req, res, next) => {
  const internships = await Internship.find({}).exec();
  res.status(200).json({ internships });
});

// ------------------ read all jobs ------------------ //

exports.readalljobs = catchAsyncErrors(async (req, res, next) => {
  const jobs = await Job.find({}).exec();
  res.status(200).json({ jobs });
});

// ------------------ apply Internship ------------------ // 

exports.applyinternship = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();
  const internship = await Internship.findById(req.params.internshipid).exec();

  student.internships.push(internship._id);
  internship.students.push(student._id);
  

  await student.save();
  await internship.save();

  res.json({ student, internship });
});

// ------------------ apply job ------------------ //

exports.applyjob = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();
  const job = await Job.findById(req.params.jobid).exec();
  student.jobs.push(job._id);
  job.students.push(student._id);

  await student.save();
  await job.save();
  res.json({ student, job });
});

// ---------------- delete student-----------------//

exports.studentdelete = catchAsyncErrors(async (req, res, next) => {
  await Student.findByIdAndDelete(req.id).exec();
  res.clearCookie("token");

  res.json({ message: "student was deleted" });
});

// ---------------- delete student end-----------------//
