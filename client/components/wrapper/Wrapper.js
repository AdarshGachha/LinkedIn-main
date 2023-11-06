"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import Footer from "@/app/ui/Footer";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Wrapper = ({ children }) => {
  useEffect(() => {
    const _initTE = async () => {
      const use = (await import('tw-elements')).initTE;
      const { Dropdown,
        Ripple, } = await import('tw-elements');
      use({ Dropdown,
        Ripple, });
    };
    _initTE();
  }, []);
  
  return (
    <>
    <Provider store={store}>
    
      {children}
      
      <ToastContainer />
      </Provider>
    </>
  );
};

export default Wrapper;
