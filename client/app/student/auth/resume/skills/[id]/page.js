"use client";
import { asynceditskills } from "@/store/Actions/studentActions";
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
 const index = (student && student.resume.skills.findIndex(
    (i) => i.id === params.id
  ))
 const mainstudent = (student && student.resume.skills[index])
//  console.log(student && mainstudent.hs)

const [skills, setSkills] = useState(student && mainstudent.skills)


  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(params);




  const EditSkillsHandler = (e) => {
    e.preventDefault();
    const skill = {
      
          skills: skills,
    };
    dispatch(asynceditskills(params.id, skill));
    router.push("/student/auth/resume");
  };
  return (
    <div className="container mt-5  flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography color="gray" className="mt-1 font-normal">
          Update details
        </Typography>
        <form onSubmit={EditSkillsHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
           
            <Input
              value={skills}
              onChange={(e) => {
                setSkills(e.target.value);
              }}
              size="lg"
              label="skills"
            />
           
          </div>

          <Button onClick={EditSkillsHandler} className="mt-6" fullWidth>
            Update
          </Button>
        </form>
      </Card>
     
    </div>
  );
};

export default page;
