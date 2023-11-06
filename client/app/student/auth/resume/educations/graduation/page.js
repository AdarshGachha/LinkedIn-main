"use client";
import { asyncaddeducation } from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select, Option 
} from "@material-tailwind/react";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [college, setcollege] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [degree, setdegree] = useState("");
  const [stream, setStream] = useState("");
  const [performance, setperformance] = useState("");

  console.log(college, start, performance, stream, degree);
  const AddEducationHandler = (e) => {
    e.preventDefault();
    const education = {
      college: college,
      start: start,
      end: end,
      degree: degree,
      stream: stream,
      performance: performance,
      // from: "2021-09-09T06:57:03.000Z",
      // to: "2021-09-09T06:57:03.000Z",
      // description: "string",
      // current: true,
      // id: "string"
    };

    dispatch(asyncaddeducation(education));
    router.push("/student/auth/resume");
  };

  return (
    <div className={`container mt-5 flex justify-center `}>
      <Card color="transparent" shadow={false}>
        
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details of Your Education.
        </Typography>
        <form onSubmit={AddEducationHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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

          <Button onClick={AddEducationHandler} className="mt-6" fullWidth>
            ADD
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default page;
