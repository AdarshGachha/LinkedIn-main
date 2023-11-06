"use client";
import { asyncforgetpasswordemploye } from "@/store/Actions/employeActions";
import { removeerror } from "@/store/Reducers/employeReducer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {

    
  const router = useRouter();
  const { errors } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();


  if (errors.length > 1) {
    errors.map((e, i) => {
        console.log(e.message)
        toast.error(e.message);
    });
    dispatch(removeerror());
}

  const [employeemail, setemployeEmail] = useState("");

  const sendemailHandler = async (e) => {
    e.preventDefault();

    const email = {
      email: employeemail,
    };
    await dispatch(asyncforgetpasswordemploye(email));

    if (errors.length <= 1) {
      router.push("/employe/forget/otp");
    } else {
      toast.error(JSON.stringify(errors.message));
      return;
    
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={sendemailHandler}>
        <input
          type="email"
          value={employeemail}
          onChange={(e) => setemployeEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default page;
