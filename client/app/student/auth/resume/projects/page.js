"use client"
import { asyncaddprojects } from '@/store/Actions/studentActions';
// import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from "next/navigation";
import { Button, Card, Input, Radio, Typography } from '@material-tailwind/react';


const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [title, setTitle] = useState("")
      const [start, setStart] = useState("")
      const [end, setEnd] = useState("")
      const [description, setDescription] = useState("")
      const [link, setLink] = useState("")


    const AddProjectHandler = (e) => {
      e.preventDefault();

      

        const internship ={

          title: title,
          start:start,
          end:end,
          description: description,
          link:link,
           


        }

        dispatch(asyncaddprojects(internship));
    router.push("/student/auth/resume");

        
    }

  return (
    <div className={`container mt-5`}>
      <Card color="transparent" shadow={false}>
      <Typography color="gray" className="mt-1 font-normal">
          Enter your details of Your Projects.
        </Typography>

        <form onSubmit={AddProjectHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6 ">
          <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              size="lg"
              label="title"
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
              label="Project Link"
            />
          </div>

          <Button onClick={AddProjectHandler} className="mt-6" fullWidth>
            ADD
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default page