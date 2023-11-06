const express = require("express");
const {
  homepage,
  currentUser,
  studentsignup,
  studentsignin,
  studentsignout,
  studentsendmail,
  studentforgetlink,
  studentresetpassword,
  studentupdate,
  studentavatar,
  applyinternship,
  applyjob,
  studentdelete,
  readallinternships,
  readalljobs,
  
} = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

//GET/
router.get("/",homepage);


//POST/ student
router.post("/student",isAuthenticated ,currentUser);

//POST/ /student/signup
router.post("/student/signup", studentsignup);

//POST/ /student/signin
router.post("/student/signin", studentsignin);



//get/ /student/signout
router.get("/student/signout",isAuthenticated , studentsignout);

//POST  /student/send-mail for reset password
router.post("/student/send-mail" , studentsendmail);


//GET  /student/forget-link/:studentid for reset password
router.post("/student/forget-link/" , studentforgetlink);

//POST  /student/reset-password/:studentid for reset password
router.post("/student/reset-password/:id" ,isAuthenticated, studentresetpassword);

//POST  /student/update/:studentid for reset password
router.post("/student/update/:id" ,isAuthenticated, studentupdate);

//POST  /student/avatar/:studentid for reset password
router.post("/student/avatar/:id" ,isAuthenticated, studentavatar);

// ------------------ read all jobs ------------------ //
router.post("/student/alljobs/" ,isAuthenticated, readalljobs);

// ------------------ read all internships ------------------ //
router.post("/student/allinternships/" ,isAuthenticated, readallinternships);





// ------------------ apply Internship ------------------ //

//POST  /student/apply/internship/:internshipid for reset password
router.post("/student/apply/internship/:internshipid" ,isAuthenticated, applyinternship);


// ------------------ apply Internship End ------------------ //
 

// ------------------ apply job ------------------ //

//POST  /student/apply/job/:jobid for reset password
router.post("/student/apply/job/:jobid" ,isAuthenticated, applyjob);


// ------------------ apply job End------------------ //


// ---------------- delete student-----------------//

router.post("/student/delete",isAuthenticated, studentdelete);

// ---------------- delete student end-----------------//





module.exports = router;
