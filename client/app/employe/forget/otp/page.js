"use client";
import { removeerror } from "@/store/Reducers/employeReducer";
import { asyncotppasswordemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


const page = () => {
  const { errors } = useSelector((state) => state.employeReducer);
  const [employeemail, setemployeEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();



  const sendOtpHandler = async (e) => {
    e.preventDefault();
    const newpwd = {
      email: employeemail,
      otp: otp,
      password: password,
    };
    await dispatch(asyncotppasswordemploye(newpwd));

    if (errors.length === 1) {
      router.push("/employe/signin");
    } else {
      toast.error(JSON.stringify(errors.message));
      return;
    }
  };
  return (
    <div className="container mt-5">
      <form>
        
        <input
          type="email"
          value={employeemail}
          placeholder="Retype Your Email"
          onChange={(e) => setemployeEmail(e.target.value)}
        />
        <br />
        <br />
        <p>Enter OTP</p>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <br />
        <br />
        <p>Enter New Password</p>

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={sendOtpHandler} className="btn btn-success">
          {" "}
          Change Password
        </button>
      </form>
    </div>
  );
};

export default page;
