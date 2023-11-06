"use client";
import { asynceditinternship } from "@/store/Actions/studentActions";
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
 const index = (student && student.resume.internships.findIndex(
    (i) => i.id === params.id
  ))
 const mainstudent = (student && student.resume.internships[index])
//  console.log(student && mainstudent.hs)


const [profile, setProfile] = useState(student && mainstudent.profile)
const [organization, setOrganization] = useState(student && mainstudent.organization)
const [location, setLocation] = useState(student && mainstudent.location)
const [start, setStart] = useState(student && mainstudent.start)
const [end, setEnd] = useState(student && mainstudent.end)
const [description, setDescription] = useState(student && mainstudent.description)



  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(params);


  const Secondrayhandler =(e)=>{

    setHs(e.target.value)

  }
  const statushandler =(e)=>{

    setStatus(e.target.value);

  }

  const EditInternshipHandler = () => {
    const internship = {
      profile: profile,
          organization: organization,
          location: location,
          start:start,
          end:end,
          description: description,
    };
    dispatch(asynceditinternship(params.id, internship));
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
              value={profile}
              onChange={(e) => {
                setProfile(e.target.value);
              }}
              size="lg"
              label="Profile"
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

          <Button onClick={EditInternshipHandler} className="mt-6" fullWidth>
            Update
          </Button>
        </form>
      </Card>
     
    </div>
  );
};

export default page;
