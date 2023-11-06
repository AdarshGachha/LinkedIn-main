"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeerror } from "@/store/Reducers/employeReducer";
import { toast } from 'react-toastify';



const page = () => {
  const router =  useRouter ();
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.employeReducer );
  const {errors} = useSelector((state) => state.employeReducer );

  console.log(errors.map((e,i)=>e.message));
  useEffect(() => {
      if(isAuthenticated){
        router.push('/employe/auth');
      }
      // if(!isAuthenticated){
      //   router.push('/employe/signin');
      // }
    }, [isAuthenticated]);

    
    if (errors.length > 0) {
      errors.map((e, i) => {
          toast.error(e.message);
      });
      dispatch(removeerror());
  }

   
  return (
    <section className='py-20 px-20 flex items-center justify-center gap-10'>
      <Link className = " py-5 px-10 bg-primary decoration-transparent text-white rounded-full duration-300 transition-all ease-in-out hover:bg-[#134761] hover:shadow-lg relative top-0 inline-block hover:-top-1" href="/employe/signin">SignIn</Link>
      <Link className = "py-5 px-10 bg-secondary decoration-transparent text-white rounded-full duration-300 transition-all ease-in-out hover:bg-[#179792] hover:shadow-lg relative top-0 inline-block hover:-top-1" href="/employe/signup">SignUp</Link>

    </section>
    
    
  )
}

export default page