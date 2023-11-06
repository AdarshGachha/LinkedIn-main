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
  Radio,
} from "@material-tailwind/react";

const page = ({ params }) => {
  const { student } = useSelector((state) => state.studentReducer);
  // console.log(student)
 const index = (student && student.resume.education.findIndex(
    (i) => i.id === params.id
  ))
 const mainstudent = (student && student.resume.education[index])
//  console.log(student && mainstudent.hs)


  const [hs, setHs] = useState(student && mainstudent.hs);
  const [status, setStatus] = useState(student && mainstudent.status);
  const [year, setYear] = useState(student && mainstudent.year);
  const [board, setBoard] = useState(student && mainstudent.board);
  const [performance, setPerformance] = useState(student && mainstudent.Percentage);
  const [school, setSchool] = useState(student && mainstudent.school);


  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(params);


  const Secondrayhandler =(e)=>{

    setHs(e.target.value)

  }
  const statushandler =(e)=>{

    setStatus(e.target.value);

  }

  const EditEducationHandler = () => {
    const education = {
      hs: hs,
      status: status,
      year: year,
      board: board,
      Percentage: performance,
      school: school,
    };
    dispatch(asyncediteducation(params.id, education));
    router.push("/student/auth/resume");
  };
  return (
    <div className="container mt-5  flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography color="gray" className="mt-1 font-normal">
          Update details
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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

          <Button onClick={EditEducationHandler} className="mt-6" fullWidth>
            Update
          </Button>
        </form>
      </Card>
     
    </div>
  );
};

export default page;
