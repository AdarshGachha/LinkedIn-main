import { asyncresetpasswordstudent } from '@/store/Actions/studentActions'
import { Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
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
        dispatch(asyncresetpasswordstudent(pwd));

        setPassword("");
        toast.success('Successfully changed your password', {
          position: toast.POSITION.TOP_RIGHT
      });
    
    };
    

  return (


    <div className='container mt-5 w-96'>
       <form className='d-flex gap-2'>
        <Input
           type="password"
           name="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           autoComplete="given-name"
           label='Reset Password'
           
        />
      <Button onClick={ResetPasswordHandler}  className='mt-5'>Reset Password</Button>
        </form>
    </div>
  )
}

export default ResetPassword