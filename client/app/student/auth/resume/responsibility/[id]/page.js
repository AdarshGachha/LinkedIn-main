"use client";
import { asynceditresponsibility } from "@/store/Actions/studentActions";
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
 const index = (student && student.resume.responsibilities.findIndex(
    (i) => i.id === params.id
  ))
 const mainstudent = (student && student.resume.responsibilities[index])
//  console.log(student && mainstudent.hs)



const [description, setDescription] = useState(student && mainstudent.description)



  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(params);




  const EditResponsibilityHandler = () => {
    const responsibilities = {
      
          description: description,
    };
    dispatch(asynceditresponsibility(params.id, responsibilities));
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
           
            <Input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              size="lg"
              label="description"
            />
           
          </div>

          <Button onClick={EditResponsibilityHandler} className="mt-6" fullWidth>
            Update
          </Button>
        </form>
      </Card>
     
    </div>
  );
};

export default page;
