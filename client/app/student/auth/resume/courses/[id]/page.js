"use client";
import { asynceditcourses, asynceditinternship } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";

const page = ({ params }) => {
  const { student } = useSelector((state) => state.studentReducer);
  // console.log(student)
 const index = (student && student.resume.courses.findIndex(
    (i) => i.id === params.id
  ))
 const mainstudent = (student && student.resume.courses[index])
//  console.log(student && mainstudent.hs)


const [program, setProgram] = useState(student && mainstudent.program)
const [organization, setOrganization] = useState(student && mainstudent.organization)
const [location, setLocation] = useState(student && mainstudent.location)
const [start, setStart] = useState(student && mainstudent.start)
const [end, setEnd] = useState(student && mainstudent.end)
const [description, setDescription] = useState(student && mainstudent.description)



  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(params);


  

  const EditCourseHandler = (e) => {
    e.preventDefault();
    const internship = {
      program: program,
          organization: organization,
          location: location,
          start:start,
          end:end,
          description: description,
    };
    dispatch(asynceditcourses(params.id, internship));
    router.push("/student/auth/resume");
  };
  return (
    <div className="container mt-5  flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography color="gray" className="mt-1 font-normal">
          Update details
        </Typography>
        <form onSubmit={EditCourseHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            
          
           
            <Input
              value={program}
              onChange={(e) => {
                setProgram(e.target.value);
              }}
              size="lg"
              label="program"
            />
            <Input
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
              size="lg"
              label="Organization"
            />
            <Input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              size="lg"
              label="Location"
            />
            <Input
            type="date"
              value={start}
              onChange={(e) => {
                setStart(e.target.value);
              }}
              size="lg"
              label="start"
            />
            <Input
            type="date"
              value={end}
              onChange={(e) => {
                setEnd(e.target.value);
              }}
              size="lg"
              label="end"
            />
            <Input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              size="lg"
              label="description"
            />
           
          </div>

          <Button onClick={EditCourseHandler} className="mt-6" fullWidth>
            Update
          </Button>
        </form>
      </Card>
     
    </div>
  );
};

export default page;
