"use client";
import { asyncsignupemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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

const page = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/employe/auth");
    }
    // if(!isAuthenticated){
    //   router.push('/employe/signin');
    // }
  }, [isAuthenticated]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organizationname, setOrganizationname] = useState("");

  const Genderhandler = (event) => {
    console.log(event.target.value);
    setGender(event.target.value);
    console.log(gender);
  };
  const SignupHandler = (e) => {
    e.preventDefault();
    const newemploye = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      email: email,
      password: password,
      organizationname: organizationname,
    };

    dispatch(asyncsignupemploye(newemploye));
  };

  return (
    // <div className="container mt-5">
    //   <form onSubmit={SignupHandler}>
    //     <h5>Firstname</h5>
    //     <input
    //       type="text"
    //       name="firstname"
    //       value={firstname}
    //       onChange={(e) => setFirstname(e.target.value)}
    //     />
    //     <br />
    //     <h5>Lastname</h5>
    //     <input
          // type="text"
          // name="lastname"
          // value={lastname}
          // onChange={(e) => setLastname(e.target.value)}
    //     />
    //     <br />
    //     <h5>Contact</h5>

    //     <input
    //       type="text"
    //       name="contact"
    //       value={contact}
    //       onChange={(e) => setContact(e.target.value)}
    //     />

    //     <br />

    //     <h5>Email</h5>

    //     <input
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <br />
    //     <br />
    //     <h5>Password</h5>

    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <br />
    //     <h5>Organization Name</h5>
    //     <input
    //       type="text"
    //       name="organizationname"
    //       value={organizationname}
    //       onChange={(e) => setOrganizationname(e.target.value)}
    //     />
    //     <br />
    //     <br />

    //     <button className="btn btn-success">SignUp</button>
    //   </form>
    // </div>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

      <div className="mt-10 sm:mx-auto sm:w-ful sm:max-w-sm">

      <Card color="transparent" shadow={false} >
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={SignupHandler}>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              size="lg"
              label="First Name"
            />
            <Input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              size="lg"
              label="Last Name"
            />
            <Input
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              size="lg"
              label="Contact"
            />


          
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              label="Email Address"
            />
            <Input
              type="Password"
              name="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              label="Password"
            />
            <Input
              type="text"
              name="organizationname"
              value={organizationname}
              onChange={(e) => setOrganizationname(e.target.value)}
              size="lg"
              label="Organization Name"
            />
          </div>
          
          <Button onClick={SignupHandler} className="mt-6 bg-primary" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link href="/employe/signin" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
        
      </div>
    </div>
  );
};

export default page;
