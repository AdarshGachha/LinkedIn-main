"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Suspense } from "react";
import {
  asyncapplyinternshipstudent,
  asyncapplyjobstudent,
} from "@/store/Actions/studentActions";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}



const page = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const dispatch = useDispatch();
  const { student, jobs, internships } = useSelector(
    (state) => state.studentReducer
  );
  // console.log(internships)

  const ApplyJobHandler = async (id) => {
    dispatch(asyncapplyjobstudent(id));
  };
  const ApplyInternshipHandler = async (id) => {
    dispatch(asyncapplyinternshipstudent(id));
  };
  return (
    <div className="container mt-5 flex flex-col items-center">
      <ul className="position-relative list-group ">
        <h1>
          Available jobs for <strong>{student && student.firstname}</strong>
        </h1>
        <div className="flex flex-wrap">
        {jobs &&
          jobs.map((job, i) => (
            <div className="list-group-item text-wrap p-5 " key={job._id}>
              <Card className="mt-6 w-96">
                <CardBody>
                  <Button
                    size="sm"
                    className="mb-5 outline outline-1 outline-yellow-400 bg-transparent text-yellow-400"
                  >
                    Job
                  </Button>
                  <div className="flex justify-between items-center">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Title : {job.title}
                    </Typography>
                    <Typography
                      
                      color="blue-gray"
                      className="mb-2 opacity-70 text-secondary"
                    >
                      {job.students.length}{" "}
                      {job.students.length === 1
                        ? "applicant"
                        : "applicants"}
                    </Typography>
                  </div>

                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Skills : {job.skill}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Type : {job.jobtype}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Openings : {job.openings}
                  </Typography>
                  <div className="flex items-center gap-3">
                    <Typography
                      
                      color="blue-gray"
                      className="mb-2 opacity-70"
                    >
                      Description : {job.description} 
                    </Typography>
                    
                  </div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Preferences : {job.preferences}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Salary : {job.salary}
                  </Typography>
                  <Accordion
                    open={open === 2}
                    icon={<Icon id={2} open={open} />}
                    animate={CUSTOM_ANIMATION}
                  >
                    <AccordionHeader onClick={() => handleOpen(2)}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Perks
                      </Typography>
                    </AccordionHeader>
                    <AccordionBody>{job.perks}</AccordionBody>
                  </Accordion>
                  <Accordion
                    open={open === 3}
                    icon={<Icon id={3} open={open} />}
                    animate={CUSTOM_ANIMATION}
                  >
                    <AccordionHeader onClick={() => handleOpen(3)}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Assesments
                      </Typography>
                    </AccordionHeader>
                    <AccordionBody>{job.assessments}</AccordionBody>
                  </Accordion>

                  
                </CardBody>
                <CardFooter className="pt-0">
                  {!job.students.includes(student && student._id) ? (
                    <Button
                      onClick={() => ApplyJobHandler(job._id)}
                      className="hover:bg-gray-100 hover:text-gray-800"
                    >
                      Apply
                    </Button>
                  ) : (
                    <Button className="hover:bg-gray-100 hover:text-gray-800">Applied</Button>
                  )}
                </CardFooter>
              </Card>
              <br />
              <br />
            </div>
          ))}

        </div>
       
      </ul>

      <hr />

      <ul className="list-group">
        <h1>
          Available Internships for{" "}
          <strong>{student && student.firstname}</strong>
        </h1>
        <div className="flex flex-wrap">
        {internships &&
          internships.map((internship, i) => (
            <div className="p-5" key={internship._id}>
              <Card className="mt-6 w-96">
                <CardBody>
                  <Button
                    size="sm"
                    className="mb-5 outline outline-1 outline-yellow-400 bg-transparent text-yellow-400"
                  >
                    internship
                  </Button>
                  <div className="flex justify-between items-center">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Profile : {internship.profile}
                    </Typography>
                    <Typography
                      
                      color="blue-gray"
                      className="mb-2 opacity-70 text-secondary"
                    >
                      {internship.students.length}{" "}
                      {internship.students.length === 1
                        ? "applicant"
                        : "applicants"}
                    </Typography>
                  </div>

                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Skills : {internship.skill}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Type : {internship.internshiptype}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Openings : {internship.openings}
                  </Typography>
                  <div className="flex items-center gap-3">
                    <Typography
                      
                      color="blue-gray"
                      className="mb-2 opacity-70"
                    >
                      {internship.from} To
                    </Typography>
                    <Typography
                      
                      color="blue-gray"
                      className="mb-2 opacity-70"
                    >
                      {internship.to}
                    </Typography>
                  </div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Duration : {internship.duration}
                  </Typography>

                  <Accordion
                    open={open === 1}
                    icon={<Icon id={1} open={open} />}
                    animate={CUSTOM_ANIMATION}
                  >
                    <AccordionHeader onClick={() => handleOpen(1)}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Responsibility
                      </Typography>
                    </AccordionHeader>
                    <AccordionBody>{internship.responsibility}</AccordionBody>
                  </Accordion>
                  <Accordion
                    open={open === 2}
                    icon={<Icon id={2} open={open} />}
                    animate={CUSTOM_ANIMATION}
                  >
                    <AccordionHeader onClick={() => handleOpen(2)}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Perks
                      </Typography>
                    </AccordionHeader>
                    <AccordionBody>{internship.perks}</AccordionBody>
                  </Accordion>
                  <Accordion
                    open={open === 3}
                    icon={<Icon id={3} open={open} />}
                    animate={CUSTOM_ANIMATION}
                  >
                    <AccordionHeader onClick={() => handleOpen(3)}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2"
                      >
                        Assesments
                      </Typography>
                    </AccordionHeader>
                    <AccordionBody>{internship.assessments}</AccordionBody>
                  </Accordion>
                </CardBody>
                <CardFooter className="pt-0">
                  {!internship.students.includes(student && student._id) ? (
                    <Button
                      onClick={() => ApplyInternshipHandler(internship._id)}
                      className="hover:bg-gray-100 hover:text-gray-800"
                    >
                      Apply
                    </Button>
                  ) : (
                    <Button
                      
                      className="hover:bg-gray-100 hover:text-gray-800"
                    >
                      Applied
                    </Button>
                  )}
                </CardFooter>
              </Card>

              <br />
              <br />
            </div>
          ))}

        </div>
        
      </ul>
    </div>
  );
};

export default page;
