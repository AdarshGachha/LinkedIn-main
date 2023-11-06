"use client";
import { asyncforgetpasswordstudent } from "@/store/Actions/studentActions";
import { removeerror } from "@/store/Reducers/studentReducer";
import { Button, Input } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const router = useRouter();
  const { errors } = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();

  if (errors.length > 1) {
    errors.map((e, i) => {
      console.log(e.message);
      toast.error(e.message);
    });
    dispatch(removeerror());
  }

  const [studentemail, setStudentEmail] = useState("");

  const sendemailHandler = async (e) => {
    e.preventDefault();

    const email = {
      email: studentemail,
    };
    await dispatch(asyncforgetpasswordstudent(email));

    if (errors.length <= 1) {
      router.push("/student/forget/otp");
    } else {
      toast.error(JSON.stringify(errors.message));
      return;
    }
  };

  return (
    <div className="mt-5 flex justify-center w-screen h-screen">
      <form onSubmit={sendemailHandler}>
        <Input className="w-72"
          label="Email"
          type="email"
          value={studentemail}
          onChange={(e) => setStudentEmail(e.target.value)}
        />
        <br />
        <Button type="submit">Send Mail</Button>
      </form>
    </div>
  );
};

export default page;
