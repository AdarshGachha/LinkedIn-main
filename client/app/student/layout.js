"use client";
import Footer from "../ui/Footer";
import Navigation from "../ui/Navigation2";


const StudentLayout = ({ children }) => {
 

  return (
    <>
      <Navigation />

      
      {children}
      
    </>
  );
};

export default StudentLayout;
