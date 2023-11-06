"use client";
import { asynccreateinternshipemploye } from "@/store/Actions/employeActions";
import { removeerror } from "@/store/Reducers/employeReducer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Input, Radio, Textarea } from "@material-tailwind/react";
import Link from "next/link";

const page = () => {
  const { errors } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const [profile, setProfile] = useState("");
  const [skill, setSkill] = useState("");
  const [internshiptype, setInternshiptype] = useState(null);
  const [openings, setOpenings] = useState(Number);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duration, setDuration] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [stipendstatus, setStipendstatus] = useState("");
  const [stipendamount, setStipendamount] = useState(Number);
  const [perks, setPerks] = useState("");
  const [assessments, setAssessments] = useState("");


  const InternshipTypehandler = (event) => {
    // console.log(event.target.value);
    setInternshiptype(event.target.value);
  };
  console.log(internshiptype);

  const StipendStatusHandler = (event) => {
    // console.log(event.target.value);
    setStipendstatus(event.target.value);
  };
  console.log(stipendstatus);

  const CreateInternshipHandler = (e) => {
    e.preventDefault();
    const internship = {
      profile: profile,
      skill: skill,
      internshiptype: internshiptype,
      openings: openings,
      from:from,
      to:to,
      duration: duration,
      responsibility: responsibility,
      stipend: {
        status: stipendstatus,
        amount: stipendamount,

    },
      perks: perks,
      assessments: assessments,
    };
    dispatch(asynccreateinternshipemploye(internship));

    console.log(internship)

    setProfile("")
setSkill("")
setInternshiptype("")
setOpenings("")
setFrom("")
setTo("")
setDuration("")
setResponsibility("")
setStipendstatus("")
setStipendamount("")
setPerks("")
setAssessments("")
  };

  if (errors.length > 0) {
    errors.map((e, i) => {
      toast.error(e.errName + " - Fill all Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    });
    dispatch(removeerror());
  }

  return (
    <div className="container mt-5">

      <form onSubmit={CreateInternshipHandler} className="px-20">
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
                      name="profile"
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      autoComplete="profile"
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
                    onChange={InternshipTypehandler}
                    label="In office"
                    
                  />
                  <Radio
                    name="type"
                    value="Remote"
                    onChange={InternshipTypehandler}
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

            <div className="rounded-md shadow-sm sm:w-72 ">
            <Input
        label="From"
          type="date"
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
            </div>
        
            <div className="rounded-md shadow-sm sm:w-72 "> <Input
        label="To"
          type="date"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        /></div>


            

            <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                type="text"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                label="Duration"
              />
            </div>
            <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                 type="text"
                 name="responsibility"
                 value={responsibility}
                 onChange={(e) => setResponsibility(e.target.value)}
                label="responsibility"
              />
            </div>

            <div className="sm:col-span-4 ">
                <label
                  htmlFor="internshiptype"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Stipend Status
                </label>
                <div className="flex gap-5">
                <Radio
                    name="type"
                    value="Fixed"
                    onChange={StipendStatusHandler}
                    label="Fixed"
                    
                  />
                  <Radio
                    name="type"
                    value="Negotiable"
                    onChange={StipendStatusHandler}
                    label="Negotiable"
                    
                  />
                  <Radio
                    name="type"
                    value="Performance Based"
                    onChange={StipendStatusHandler}
                    label="Performance Based"
                    
                  />
                  <Radio
                    name="type"
                    value="Unpaid"
                    onChange={StipendStatusHandler}
                    label="Unpaid"
                  />
                </div>
              </div>
              <div className="rounded-md shadow-sm sm:w-72 ">
              <Input
                  type="text"
                  name="stipendamount"
                  value={stipendamount}
                  onChange={(e) => setStipendamount(e.target.value)}
                label="Amount"
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
          <Button
            type="submit"
            className="rounded-md bg-indigo-600 px-5 py-3 text-[15px] font-semibold text-white shadow-sm hover:bg-gray-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Internship
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
