"use client";
import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const page = () => {
  const { student } = useSelector((state) => state.studentReducer);

  return (
    <div className="container mt-5 flex flex-col items-center ">
      <ul className=" list-group ">
        <h1>
          Applied jobs and Internships by{" "}
          <strong>{student && student.firstname}</strong>
        </h1>
        {student &&
          student.jobs.map((job, i) => (
            <div className="list-group-item text-wrap p-5" key={job._id}>
             <Card className="mt-6 w-96  ">
                <Button className="mb-4 w-fit ml-5 bg-transparent outline outline-1 outline-secondary text-secondary">Job</Button>
                  <CardBody className="">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Job role : {job.title}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Skill Required : {job.skill}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Job Type : {job.jobtype}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Openings : {job.openings}
                    </Typography>

                    <Typography variant="h6">Description :</Typography>
                    <Typography>{job.description}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
            </div>
          ))}

        {student &&
          student.internships.map((internship, i) => (
            <div className="list-group-item p-5" key={internship._id}>
              <Card className="mt-6 w-96  ">
                  <Button className="mb-4 w-fit ml-5 bg-transparent outline outline-1 outline-secondary text-secondary">Internship</Button>
                  <CardBody className="">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      internship role : {internship.profile}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Skill Required : {internship.skill}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      internship Type : {internship.internshiptype}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Openings : {internship.openings}
                    </Typography>

                    <Typography variant="h6">Duration :</Typography>
                    <Typography>{internship.duration}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>Read More</Button>
                  </CardFooter>
                </Card>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
