"use client";
import { asyncsignupstudent } from "@/store/Actions/studentActions";
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
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  // console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");
    }
    // if(!isAuthenticated){
    //   router.push('/student/signin');
    // }
  }, [isAuthenticated]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Genderhandler = (event) => {
    // console.log(event.target.value);
    setGender(event.target.value);
  };
  console.log(gender);
  const SignupHandler = (e) => {
    e.preventDefault();
    const newStudent = {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
      city: city,
      gender: gender,
      email: email,
      password: password,
    };

    dispatch(asyncsignupstudent(newStudent));
  };

  return (
    <div className="container flex flex-col items-center  mt-5">
      <Card color="transparent" shadow={false}>
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
              type="location"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              size="lg"
              label="City"
            />

            <div className="flex gap-10">
              <Radio
                name="type"
                value="Male"
                onChange={Genderhandler}
                label="Male"
              />
              <Radio
                name="type"
                value="Female"
                onChange={Genderhandler}
                label="Female"
              />
            </div>
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
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 bg-primary" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link href="/student/signin" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
      
    </div>
  );
};

export default page;
