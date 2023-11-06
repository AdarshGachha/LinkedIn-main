const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");

const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require("uuid");

exports.resume = catchAsyncErrors(async (req, res, next) => {
  const { resume } = await Student.findById(req.id).exec();

  res.json({
    message: "Secure Resume Page",
    resume,
  });
});


 
// ------------------------------- education  routes controllers -------------------------------

exports.addeducation = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.resume.education.push({ ...req.body, id: uuidv4() });

  await student.save();

  res.json({ message: "Education added" });
});

exports.editeducation = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  const eduIndex = student.resume.education.findIndex(
    (i) => i.id === req.params.eduid
  );

  student.resume.education[eduIndex] = {
    ...student.resume.education[eduIndex],
    ...req.body,
  };

  await student.save();

  res.json({ message: "Education edited" });
});

exports.deleteeducation = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const filterededu = student.resume.education.filter(
      (i) => i.id !== req.params.eduid
    );
   
    student.resume.education = filterededu;
  
    await student.save();
  
    res.json({ message: "Education deleted" });
  });


  // ------------------------------- jobs  routes controllers -------------------------------

exports.addjobs = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.resume.jobs.push({ ...req.body, id: uuidv4() });

  await student.save();

  res.json({ message: "Jobs are added" });
});

exports.editjobs = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  const jobIndex = student.resume.jobs.findIndex(
    (i) => i.id === req.params.jobid
  );

  student.resume.jobs[jobIndex] = {
    ...student.resume.jobs[jobIndex],
    ...req.body,
  };

  await student.save();

  res.json({ message: "job edited" });
});

exports.deletejobs = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const filteredjob = student.resume.jobs.filter(
      (i) => i.id !== req.params.jobid
    );
   
    student.resume.jobs = filteredjob;
  
    await student.save();
  
    res.json({ message: "job deleted" });
  });

  // ------------------------------- Internships routes controllers -------------------------------

  exports.addinternships = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    student.resume.internships.push({ ...req.body, id: uuidv4() });
  
    await student.save();
  
    res.json({ message: "internships are added" });
  });
  
  exports.editinternships = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const internIndex = student.resume.internships.findIndex(
      (i) => i.id === req.params.internid
    );
  
    student.resume.internships[internIndex] = {
      ...student.resume.internships[internIndex],
      ...req.body,
    };
  
    await student.save();
  
    res.json({ message: "internship edited" });
  });
  
  exports.deleteinternships = catchAsyncErrors(async (req, res, next) => {
      const student = await Student.findById(req.id).exec();
    
      const filteredintern = student.resume.internships.filter(
        (i) => i.id !== req.params.internid
      );
     
      student.resume.internships = filteredintern;
    
      await student.save();
    
      res.json({ message: "internship deleted" });
    });


 // ------------------------------- RESPONSIBILITY routes controllers -------------------------------

 exports.addresponsibilities = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.resume.responsibilities.push({ ...req.body, id: uuidv4() });

  await student.save();

  res.json({ message: "responsibilities are added" });
});

exports.editresponsibilities = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  const respIndex = student.resume.responsibilities.findIndex(
    (i) => i.id === req.params.respid
  );

  student.resume.responsibilities[respIndex] = {
    ...student.resume.responsibilities[respIndex],
    ...req.body,
  };

  await student.save();

  res.json({ message: "responsibilities edited" });
});

exports.deleteresponsibilities = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const filteredresp = student.resume.responsibilities.filter(
      (i) => i.id !== req.params.respid
    );
   
    student.resume.responsibilities = filteredresp;
  
    await student.save();
  
    res.json({ message: "responsibilities deleted" });
  });


  
 // ------------------------------- Courses routes controllers -------------------------------

exports.addcours = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.resume.courses.push({ ...req.body, id: uuidv4() });

  await student.save();

  res.json({ message: "courses are added" });
});

exports.editcours = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  const coursIndex = student.resume.courses.findIndex(
    (i) => i.id === req.params.coursid
  );

  student.resume.courses[coursIndex] = {
    ...student.resume.courses[coursIndex],
    ...req.body,
  };

  await student.save();

  res.json({ message: "courses edited" });
});

exports.deletecours = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const filteredcours = student.resume.courses.filter(
      (i) => i.id !== req.params.coursid
    );
   
    student.resume.courses = filteredcours;
  
    await student.save();
  
    res.json({ message: "courses deleted" });
  });



  // ------------------------------- PROJECTS routes controllers -------------------------------

exports.addprojects = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.resume.projects.push({ ...req.body, id: uuidv4() });

  await student.save();

  res.json({ message: "projects are added" });
});

exports.editprojects = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  const projIndex = student.resume.projects.findIndex(
    (i) => i.id === req.params.projid
  );

  student.resume.projects[projIndex] = {
    ...student.resume.projects[projIndex],
    ...req.body,
  };

  await student.save();

  res.json({ message: "projects edited" });
});

exports.deleteprojects = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const filteredproj = student.resume.projects.filter(
      (i) => i.id !== req.params.projid
    );
   
    student.resume.projects = filteredproj;
  
    await student.save();
  
    res.json({ message: "projects deleted" });
  });


  
// ------------------------------- SKILLS routes controllers -------------------------------

exports.addskills = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.resume.skills.push({ ...req.body, id: uuidv4() });

  await student.save();

  res.json({ message: "skills are added" });
});

exports.editskills = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  const skilIndex = student.resume.skills.findIndex(
    (i) => i.id === req.params.skilid
  );

  student.resume.skills[skilIndex] = {
    ...student.resume.skills[skilIndex],
    ...req.body,
  };

  await student.save();

  res.json({ message: "skills edited" });
});

exports.deleteskills = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const filteredskil = student.resume.skills.filter(
      (i) => i.id !== req.params.skilid
    );
   
    student.resume.skills = filteredskil;
  
    await student.save();
  
    res.json({ message: "skills deleted" });
  });


  
// ------------------------------- accomplishments routes controllers -------------------------------

exports.addaccomplishments = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  student.resume.accomplishments.push({ ...req.body, id: uuidv4() });

  await student.save();

  res.json({ message: "accomplishments are added" });
});

exports.editaccomplishments = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.id).exec();

  const acompIndex = student.resume.accomplishments.findIndex(
    (i) => i.id === req.params.acompid
  );

  student.resume.accomplishments[acompIndex] = {
    ...student.resume.accomplishments[acompIndex],
    ...req.body,
  };

  await student.save();

  res.json({ message: "accomplishments edited" });
});

exports.deleteaccomplishments = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
  
    const filteredacomp = student.resume.accomplishments.filter(
      (i) => i.id !== req.params.acompid
    );
   
    student.resume.accomplishments = filteredacomp;
  
    await student.save();
  
    res.json({ message: "accomplishments deleted" });
  });

