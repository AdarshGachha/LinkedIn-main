"use client";
import Footer from "@/app/ui/Footer";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employeAuth = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/employe/");
    }
    
   
  }, [isAuthenticated]);
  return (
    <>
    
    {children}
    <Footer/>
    </>
  );
};

export default employeAuth;
