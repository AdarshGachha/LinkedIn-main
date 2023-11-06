"use client";
import { asyncavatarstudent, asyncupdatestudent } from "@/store/Actions/studentActions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import  ResetPassword  from "@/components/student/ResetPassword";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Radio } from "@material-tailwind/react";

const profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { student } = useSelector((state) => state.studentReducer);

  console.log(student);

  const [firstname, setFirstname] = useState(student ? student.firstname : undefined);
  const [lastname, setLastname] = useState(student ? student.lastname : undefined);
  const [contact, setContact] = useState(student ? student.contact : undefined);
  const [city, setCity] = useState(student ? student.city : undefined);
  const [gender, setGender] = useState(student ? student.gender : "");
  const [email, setEmail] = useState(student ? student.email : undefined);

  console.log(gender);

  const StudentUpdateHandler = (e) => {
    e.preventDefault();
    const updateStudent = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      city: city,
      gender: gender,
      email: email,
    };

    dispatch(asyncupdatestudent(updateStudent));
    router.push("/student/auth");
    toast.success('Successfully Updated ', {
      position: toast.POSITION.TOP_RIGHT
  });
  };

  const AvatarHandler = (e)=>{
    e.preventDefault();
    console.log()
    const formdata = new FormData(e.target);
    formdata.set("avatar",e.target.avatar.files[0])
    dispatch(asyncavatarstudent(formdata));

  }


  const ChangeProfile = (e) => {
    document.querySelector(".file").click();
  };


  // rendering


  return (
    <div className="container">



{student && (
  <div className="px-32 py-10" key={student._id}>
    <div className="mb-5 flex items-center gap-x-3">
                    <img
                      onClick={ChangeProfile}
                      aria-hidden="true"
                      className="h-20 w-20 rounded-full"
                      src={student && student.avatar.url}
                      alt=""
                    />
                    <form
                      onSubmit={AvatarHandler}
                      encType="multipart/form-data"
                    >
                      <input
                        type="file"
                        className="file hidden"
                        name="avatar"
                      />
                      <button className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Change
                      </button>
                    </form>
                  </div>
  <form onSubmit={StudentUpdateHandler}>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what
          you share.
        </p>

        

          <ResetPassword />

        
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
        

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 outline-none px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 outline-none px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="contact"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Contact
            </label>
            <div className="mt-2">
              <input
               type="text"
               name="contact"
               value={contact}
               onChange={(e) => setContact(e.target.value)}
                autoComplete="contact"
                className="block w-full rounded-md border-0 py-1.5 outline-none px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div className="sm:col-span-3">
            <label
              htmlFor="contact"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
                autoComplete="contact"
                className="block w-full rounded-md border-0 py-1.5 outline-none px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
          <div className="flex gap-5">
                  <Radio
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                    label="Male"
                    
                  />
                  <Radio
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                    label="Female"
                  />
                </div>
                </div>



          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                 type="email"
                 name="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 outline-none px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          

          

         

          

          
        </div>
      </div>

      
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <Link href="/student/auth"
        type="button"
        className="text-[15px] font-semibold leading-6 text-gray-900"
      >
        Cancel
      </Link>
      <Button
        type="submit"
        size="lg"
        className="font-semibold shadow-sm hover:bg-gray-300 hover:text-gray-800 "
      >
        Update
      </Button>
    </div>
  </form>
</div>

)}
      

      
    </div>
  );
};

export default profile;
