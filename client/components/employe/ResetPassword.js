import { asyncresetpasswordemploye } from '@/store/Actions/employeActions'
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

const ResetPassword = () => {

    const dispatch = useDispatch();
    const [password, setPassword] = useState("")

    const ResetPasswordHandler = (e)=>{
        e.preventDefault();
        const pwd = {
            password : password,
        }
        dispatch(asyncresetpasswordemploye(pwd));

        setPassword("");
        toast.success('Successfully changed your password', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
        });
    
    };
    

  return (


    <div className='container mt-5'>
       <form className='d-flex gap-2'>

       <div className="sm:col-span-2">
            <label
              htmlFor="Password"
              className="block font-semibold leading-6 text-xl  text-gray-900"
            >
              Reset Password
            </label>
            <div className="mt-2 w-96">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 outline-none px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
       
            <Button onClick={ResetPasswordHandler} className='mt-5 hover:bg-gray-300 hover:text-gray-800'>Reset Password</Button>
        </form>
    </div>
  )
}

export default ResetPassword