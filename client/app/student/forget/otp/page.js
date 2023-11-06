"use client";
import { removeerror } from "@/store/Reducers/studentReducer";
import { asyncotppasswordstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Input } from "@material-tailwind/react";


const page = () => {
  const { errors } = useSelector((state) => state.studentReducer);
  const [studentemail, setStudentEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();



  const sendOtpHandler = async (e) => {
    e.preventDefault();
    const newpwd = {
      email: studentemail,
      otp: otp,
      password: password,
    };
    await dispatch(asyncotppasswordstudent(newpwd));

    if (errors.length === 1) {
      router.push("/student/signin");
    } else {
      toast.error(JSON.stringify(errors.message));
      return;
    }
  };
  return (
    <div className="container mt-5 flex justify-center">
      <form>
        
        <Input
        label="Re-Type Your Email"
          type="email"
          value={studentemail}
          onChange={(e) => setStudentEmail(e.target.value)}
          className="w-72"
        />
        <br />
        
        <Input
        label="OTP"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-72"

        />
        <br />
        <p>Enter New Password</p>

        <Input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-72"

        />
        <br />
        <Button onClick={sendOtpHandler}>
          {" "}
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default page;
