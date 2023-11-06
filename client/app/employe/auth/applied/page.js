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
  const { employe } = useSelector((state) => state.employeReducer);

  return (
    <div className="container px-20 ">
      <ul className=" list-group ">
        <h1>
          Applied jobs and Internships by{" "}
          <strong>{employe && employe.firstname}</strong>
        </h1>
        <div className="sm:col-span-3 flex flex-wrap gap-5">
          
          {employe &&
            employe.jobs.map((job, i) => (
              <div className="" key={job._id}>
                <Card className="mt-6 w-96  ">
                <Button className="mt-4 ml-4 border border-blue-600 text-blue-600 bg-transparent w-fit ">Job</Button>
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


          {employe &&
            employe.internships.map((internship, i) => (
              <div className="" key={internship._id}>
                  <Card className="mt-6 w-96  ">
                  <Button className="mt-4 ml-4 border border-yellow-600 text-yellow-600 bg-transparent w-fit">Internship</Button>
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
            
        </div>
      </ul>
    </div>
  );
};

export default page;
