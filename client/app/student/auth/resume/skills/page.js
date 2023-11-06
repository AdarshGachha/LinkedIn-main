"use client"
import { asyncaddskills } from '@/store/Actions/studentActions';
// import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from "next/navigation";
import { Button, Card, Input, Radio, Typography } from '@material-tailwind/react';


const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    
      const [skills, setSkills] = useState("")


    const AddSkillHandler = (e) => {
      e.preventDefault();
      

        const responsibility ={

         
          skills: skills,
           


        }

        dispatch(asyncaddskills(responsibility));
    router.push("/student/auth/resume");

        
    }

  return (
    <div className={`container mt-5`}>
      <Card color="transparent" shadow={false}>
      <Typography color="gray" className="mt-1 font-normal">
         Position of Your responsibility.
        </Typography>

        <form onSubmit={AddSkillHandler} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6 ">

            <Input
              value={skills}
              onChange={(e) => {
                setSkills(e.target.value);
              }}
              size="lg"
              label="skills"
            />
        
          </div>

          <Button onClick={AddSkillHandler} className="mt-6" fullWidth>
            ADD
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default page