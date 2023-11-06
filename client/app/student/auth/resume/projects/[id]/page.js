"use client";
import {
  asynceditcourses,
  asynceditinternship,
  asynceditprojects,
} from "@/store/Actions/studentActions";
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
import Link from "next/link";

const page = ({ params }) => {
  const { student } = useSelector((state) => state.studentReducer);
  // console.log(student)
  const index =
    student && student.resume.projects.findIndex((i) => i.id === params.id);
  const mainstudent = student && student.resume.projects[index];
  //  console.log(student && mainstudent.hs)

  const [title, setTitle] = useState(student && mainstudent.title);
  const [start, setStart] = useState(student && mainstudent.start);
  const [end, setEnd] = useState(student && mainstudent.end);
  const [description, setDescription] = useState(
    student && mainstudent.description
  );
  const [link, setLink] = useState(student && mainstudent.link);

  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(params);

  const EditProjectHandler = (e) => {
    e.preventDefault();
    const internship = {
      title: title,
      start: start,
      end: end,
      description: description,
      link: link,

    };
    dispatch(asynceditprojects(params.id, internship));
    router.push("/student/auth/resume");
  };
  return (
    <div className="container mt-5  flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography color="gray" className="mt-1 font-normal">
          Update details
        </Typography>
        <form
          onSubmit={EditProjectHandler}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              size="lg"
              label="title"
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
             <Input
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
              size="lg"
              label="link"
            />
          </div>
          <Button onClick={EditProjectHandler} className="mt-6" fullWidth>
            Update
          </Button>
          <Button className="mt-6" fullWidth>
            <Link href="/student/auth/resume">Cancel</Link>
            
          </Button>
          
        </form>
      </Card>
    </div>
  );
};

export default page;
