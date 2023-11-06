"use client";
import { asyncaddeducation } from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [hs, setHs] = useState("");
  const [status, setStatus] = useState("");
  const [year, setYear] = useState("");
  const [board, setBoard] = useState("");
  const [performance, setPerformance] = useState("");
  const [school, setSchool] = useState("");

  // console.log(status, year, board, performance, school);
  const Secondrayhandler =(e)=>{

    setHs(e.target.value)

  }
  const statushandler =(e)=>{

    setStatus(e.target.value);

  }
  const AddEducationHandler = (e) => {
    e.preventDefault();
    const education = {
      hs: hs,
      status: status,
      year: year,
      board: board,
      Percentage: performance,
      school: school,
      
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
          Enter details of Your Education
        </Typography>
        <form onSubmit={AddEducationHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className="flex gap-10">
              <Radio
                name="hs"
                value="Hr. Secondary(XII)"
                onChange={Secondrayhandler}
                label="Hr. Secondary(XII)"
              />
              <Radio
                name="hs"
                value="Secondary(X)"
                onChange={Secondrayhandler}
                label="Secondary(X)"
              />
            </div>
            <h6>Matriculation status</h6>

            <div className="flex gap-10">
              
              <Radio
                name="status"
                value="Pursuing"
                onChange={statushandler}
                label="Pursuing"
              />
              <Radio
                name="status"
                value="Completed"
                onChange={statushandler}
                label="Completed"
              />
            </div>
           
            <Input
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              size="lg"
              label={status == "Pursuing"?"Expected year of completion":"Year of completion"}
            />
            <Input
              value={board}
              onChange={(e) => {
                setBoard(e.target.value);
              }}
              size="lg"
              label="Board"
            />
            <Input
              value={performance}
              onChange={(e) => {
                setPerformance(e.target.value);
              }}
              size="lg"
              label="Percentage"
            />
            <Input
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
              }}
              size="lg"
              label="school"
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
