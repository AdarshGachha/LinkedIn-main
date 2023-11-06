"use client";
import { asynccreatejobemploye } from "@/store/Actions/employeActions";
import { removeerror } from "@/store/Reducers/employeReducer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Input, Radio, Textarea } from "@material-tailwind/react";
import Link from "next/link";

const page = () => {
  const { errors } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [jobtype, setJobtype] = useState("In office");
  const [openings, setOpenings] = useState(Number);
  const [description, setDescription] = useState("");
  const [preferences, setPreferences] = useState("");
  const [salary, setSalary] = useState("");
  const [perks, setPerks] = useState("");
  const [assessments, setAssessments] = useState("");

  const JobTypehandler = (event) => {
    // console.log(event.target.value);
    setJobtype(event.target.value);
  };
  

  const CreateJobHandler = (e) => {
    e.preventDefault();
    const job = {
      title: title,
      skill: skill,
      jobtype: jobtype,
      openings: openings,
      description: description,
      preferences: preferences,
      salary: salary,
      perks: perks,
      assessments: assessments
    };
    dispatch(asynccreatejobemploye(job));
    

    setTitle("");
    setSkill("");
    setJobtype("");
    setOpenings("");
    setDescription("");
    setPreferences("");
    setSalary("");
    setPerks("");
    setAssessments("");

    router.push("/employe/auth/applied");

    
  };

  if (errors.length > 0) {
    errors.map((e, i) => {
      toast.error(e.message+ " - Fill all Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    });
    dispatch(removeerror());
  }

  return (
    <div className="container mt-5">

      <form onSubmit={CreateJobHandler} className="px-20">
        <div className="space-y-12">
          <div className="border-b flex flex-col border-gray-900/10 pb-12">
            <h2 className="text-3xl font-semibold leading-7 text-gray-900 ">
              Create Job
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm sm:max-w-md">
                    <Input
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      label="Title"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm sm:w-72">
                    <Input
                      type="text"
                      name="skill"
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                      autoComplete="skill"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      label="Skills"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 ">
                <label
                  htmlFor="jobtype"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Job Type
                </label>
                <div className="flex gap-5">
                  <Radio
                    name="type"
                    value="In office"
                    onChange={JobTypehandler}
                    label="In office"
                    
                  />
                  <Radio
                    name="type"
                    value="Remote"
                    onChange={JobTypehandler}
                    label="Remote"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:col-span-4 flex flex-col gap-10 border-gray-900/10 border-b pb-12 ">
            <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                type="text"
                name="openings"
                value={openings}
                onChange={(e) => setOpenings(e.target.value)}
                label="Openings"
              />
            </div>
            <div className="flex w-96 flex-col gap-6">
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="static"
                label="Description"
                placeholder="Description"
              />
            </div>

            <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                type="text"
                name="preferences"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                label="Preferences"
              />
            </div>
            <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                 type="text"
                 name="salary"
                 value={salary}
                 onChange={(e) => setSalary(e.target.value)}
                label="Salary"
              />
            </div>
            <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                 type="text"
                 name="perks"
                 value={perks}
                 onChange={(e) => setPerks(e.target.value)}
                label="Perks"
              />
            </div>
            <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                 type="text"
                 name="assessments"
                 value={assessments}
                 onChange={(e) => setAssessments(e.target.value)}
                label="Assessments"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-6">
          <Link href="/employe/auth"
            type="button"
            className="text-[15px] font-semibold leading-6 text-gray-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-5 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-gray-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
