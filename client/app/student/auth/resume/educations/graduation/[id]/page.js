"use client";
import { asyncediteducation } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select, Option 
} from "@material-tailwind/react";

const page = ({ params }) => {
  const { student } = useSelector((state) => state.studentReducer);



  const index = (student && student.resume.education.findIndex(
    (i) => i.id === params.id
  ))
 const mainstudent = (student && student.resume.education[index])
//  console.log(student && mainstudent.hs)



  const [college, setcollege] = useState(student && mainstudent.college);
  const [start, setStart] = useState(student && mainstudent.start);
  const [end, setEnd] = useState(student && mainstudent.end);
  const [degree, setdegree] = useState(student && mainstudent.degree);
  const [stream, setStream] = useState(student && mainstudent.stream);
  const [performance, setperformance] = useState(student && mainstudent.performance);

  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(params);

  const EditEducationHandler = () => {
    const education = {
      college: college,
      start: start,
      end: end,
      degree: degree,
      stream: stream,
      performance: performance,
    };
    dispatch(asyncediteducation(params.id, education));
    router.push("/student/auth/resume");
  };
  return (
    <div className="container mt-5 flex justify-center">
      <Card color="transparent" shadow={false}>
        
        <Typography color="gray" className="mt-1 font-normal">
          Update details
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6 ">
            <Input
              value={college}
              onChange={(e) => {
                setcollege(e.target.value);
              }}
              size="lg"
              label="College"
            />
            <div className="flex gap-5 ">
              
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
            </div>
            

            <Input
              value={degree}
              onChange={(e) => {
                setdegree(e.target.value);
              }}
              size="lg"
              label="degree"
            />
            <Input
              value={stream}
              onChange={(e) => {
                setStream(e.target.value);
              }}
              size="lg"
              label="stream"
            />

            <Input
              value={performance}
              onChange={(e) => {
                setperformance(e.target.value);
              }}
              size="lg"
              label="performance"
            />
          </div>

          <Button onClick={EditEducationHandler} className="mt-6" fullWidth>
          Update
          </Button>
        </form>
      </Card>
      
    </div>
  );
};

export default page;
