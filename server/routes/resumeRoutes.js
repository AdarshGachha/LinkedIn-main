const express = require("express");
const router = express.Router();
const {
  resume,
  addeducation,
  editeducation,
  deleteeducation,
  editjobs,
  deletejobs,
  addjobs,
  addinternships,
  editinternships,
  deleteinternships,
  addresponsibilities,
  editresponsibilities,
  deleteresponsibilities,
  addcours,
  editcours,
  deletecours,
  addprojects,
  editprojects,
  deleteprojects,
  addskills,
  editskills,
  deleteskills,
  addaccomplishments,
  editaccomplishments,
  deleteaccomplishments,
} = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");

//GET/
router.get("/", isAuthenticated, resume);

//  ---------------------------- Education- Details  ----------------------------

// POST /education
router.post("/add-edu", isAuthenticated, addeducation);

// POST /edit-education
router.post("/edit-edu/:eduid", isAuthenticated, editeducation);

// POST /delete-education
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation);

// ---------------------------- Jobs- Details ----------------------------

// POST /JOBS
router.post("/add-job", isAuthenticated, addjobs);

// POST /edit-job
router.post("/edit-job/:jobid", isAuthenticated, editjobs);

// POST /delete-job
router.post("/delete-job/:jobid", isAuthenticated, deletejobs);



//  ----------------------------Internships - Details ----------------------------

// POST /intern
router.post("/add-intern", isAuthenticated, addinternships);

// POST /edit-intern
router.post("/edit-intern/:internid", isAuthenticated, editinternships);

// POST /delete-intern
router.post("/delete-intern/:internid", isAuthenticated, deleteinternships);


//  ---------------------------- responsibilities - Details -------------------------------


// POST /responsibilities - resp
router.post("/add-resp", isAuthenticated, addresponsibilities);

// POST /edit-resp
router.post("/edit-resp/:respid", isAuthenticated, editresponsibilities);

// POST /delete-resp
router.post("/delete-resp/:respid", isAuthenticated, deleteresponsibilities);




//  ---------------------------- Courses - Details -------------------------------


// POST /Courses - cours
router.post("/add-cours", isAuthenticated, addcours);

// POST /edit-cours
router.post("/edit-cours/:coursid", isAuthenticated, editcours);

// POST /delete-cours
router.post("/delete-cours/:coursid", isAuthenticated, deletecours);


//  ---------------------------- projects - Details -------------------------------


// POST /projects - proj
router.post("/add-proj", isAuthenticated, addprojects);

// POST /edit-proj
router.post("/edit-proj/:projid", isAuthenticated, editprojects);

// POST /delete-proj
router.post("/delete-proj/:projid", isAuthenticated, deleteprojects);


//  ---------------------------- skills - Details -------------------------------


// POST /skills - skil
router.post("/add-skil", isAuthenticated, addskills);

// POST /edit-skil
router.post("/edit-skil/:skilid", isAuthenticated, editskills);

// POST /delete-skil
router.post("/delete-skil/:skilid", isAuthenticated, deleteskills);


//  ---------------------------- accomplishments - Details -------------------------------


// POST /accomplishments - acomp
router.post("/add-acomp", isAuthenticated, addaccomplishments);

// POST /edit-acomp
router.post("/edit-acomp/:acompid", isAuthenticated, editaccomplishments);

// POST /delete-acomp
router.post("/delete-acomp/:acompid", isAuthenticated, deleteaccomplishments);



module.exports = router;
