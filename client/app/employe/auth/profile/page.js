"use client";
import {
  asyncavataremploye,
  asyncupdateemploye,
} from "@/store/Actions/employeActions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ResetPassword from "@/components/employe/ResetPassword";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { employe } = useSelector((state) => state.employeReducer);

  console.log(employe);

  const [firstname, setFirstname] = useState(
    employe ? employe.firstname : undefined
  );
  const [lastname, setLastname] = useState(
    employe ? employe.lastname : undefined
  );
  const [contact, setContact] = useState(employe ? employe.contact : undefined);
  const [email, setEmail] = useState(employe ? employe.email : undefined);
  const [organizationname, setOrganizationname] = useState(
    employe ? employe.organizationname : undefined
  );

  const employeUpdateHandler = (e) => {
    e.preventDefault();
    const updateemploye = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      email: email,
      organizationname: organizationname,
    };

    dispatch(asyncupdateemploye(updateemploye));
    router.push("/employe/auth");
    toast.success("Successfully Updated ", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
    });
  };

  const ChangeProfile = (e) => {
    document.querySelector(".file").click();
  };
  const AvatarHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const formdata = new FormData(e.target);
    formdata.set("organizationlogo", e.target.organizationlogo.files[0]);
    dispatch(asyncavataremploye(formdata));
  };

  // rendering

  return (
    <>
      

{employe && (
  <div className="px-32 py-10" key={employe._id}>
    <div className="mb-5 flex items-center gap-x-3">
                    <img
                      onClick={ChangeProfile}
                      aria-hidden="true"
                      className="h-20 w-20 rounded-full"
                      src={employe && employe.organizationlogo.url}
                      alt=""
                    />
                    <form
                      onSubmit={AvatarHandler}
                      encType="multipart/form-data"
                    >
                      <input
                        type="file"
                        className="file hidden"
                        name="organizationlogo"
                      />
                      <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Change
                      </button>
                    </form>
                  </div>
  <form onSubmit={employeUpdateHandler}>
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

          

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Organization Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="organizationname"
                value={organizationname}
                onChange={(e) => setOrganizationname(e.target.value)}
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 outline-none px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

         

          

          
        </div>
      </div>

      
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <Link href="/employe/auth"
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
      
    </>
  );
};

export default profile;
