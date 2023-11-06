const express = require("express");
const {
  homepage,
  currentUser,
  employesignup,
  employesignin,
  employesignout,
  currentEmploye,
  employesendmail,
  employeforgetlink,
  employeresetpassword,
  employeupdate,
  employeavatar,
  createinternship,
  readinternship,
  readsingleinternship,
  createjob,
  readjob,
  readsinglejob,
  employedelete,
} = require("../controllers/employeController");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

//GET/
router.get("/", homepage);

//POST/ employe
router.post("/current", isAuthenticated, currentEmploye);

// POST/ /employe/signup
router.post("/signup", employesignup);

//POST/ /employe/signin
router.post("/signin", employesignin);

//get/ /employe/signout
router.get("/signout", isAuthenticated, employesignout);

//POST  /employe/send-mail for reset password
router.post("/send-mail", employesendmail);

//GET  /employe/forget-link/:employeid for reset password
router.post("/forget-link/", employeforgetlink);

//POST  /employe/reset-password/:employeid for reset password
router.post("/reset-password/:id", isAuthenticated, employeresetpassword);

//POST  /employe/update/:employeid for reset password
router.post("/update/:id", isAuthenticated, employeupdate);

//POST  /employe/avatar/:employeid for reset password
router.post("/avatar/:id", isAuthenticated, employeavatar);

//-------------Internship-----------------//

//POST  /employe/internship/create for reset password
router.post("/internship/create", isAuthenticated, createinternship);

//POST  /employe/internship/read for reset password
router.post("/internship/read", isAuthenticated, readinternship);

//POST  /employe/internship/read/:id for reset password
router.post("/internship/read/:id", isAuthenticated, readsingleinternship);


//-------------Job-----------------//

//POST  /employe/job/create for reset password
router.post("/job/create", isAuthenticated, createjob);

//POST  /employe/job/read for reset password
router.post("/job/read", isAuthenticated, readjob);

//POST  /employe/job/read/:id for reset password
router.post("/job/read/:id", isAuthenticated, readsinglejob);


// ---------------- delete emplye-----------------//

router.post("/delete",isAuthenticated, employedelete);

// ---------------- delete student end-----------------//

module.exports = router;
