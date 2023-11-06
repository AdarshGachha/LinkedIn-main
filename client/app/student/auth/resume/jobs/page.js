"use client"
import { asyncaddjob } from '@/store/Actions/studentActions';
// import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from "next/navigation";
import { Button, Card, Input, Radio, Typography } from '@material-tailwind/react';


const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [profile, setProfile] = useState("")
      const [organization, setOrganization] = useState("")
      const [location, setLocation] = useState("")
      const [start, setStart] = useState("")
      const [end, setEnd] = useState("")
      const [description, setDescription] = useState("")


    const AddJobHandler = (e) => {
        e.preventDefault();
      

        const job ={

          profile: profile,
          organization: organization,
          location: location,
          start:start,
          end:end,
          description: description,
           


        }

        dispatch(asyncaddjob(job));
    router.push("/student/auth/resume");

        
    }

  return (
    <div className={`container mt-5`}>
      <Card color="transparent" shadow={false}>
      <Typography color="gray" className="mt-1 font-normal">
          Enter your details of Your    Job.
        </Typography>

        <form onSubmit={AddJobHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6 ">
          <Input
              value={profile}
              onChange={(e) => {
                setProfile(e.target.value);
              }}
              size="lg"
              label="profile"
            />
            <Input
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
              size="lg"
              label="organization"
            />
             <Input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              size="lg"
              label="location"
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
        
          </div>

          <Button onClick={AddJobHandler} className="mt-6" fullWidth>
            ADD
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default page