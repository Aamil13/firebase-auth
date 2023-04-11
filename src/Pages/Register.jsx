import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {UserAuth} from "../Context/AuthContext"
import { useState } from 'react'
import { async } from '@firebase/util'

const Register = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const {user , signUp} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
            e.preventDefault();

            try {
              let res =   await signUp(email , password);
            //   console.log(res);
                navigate("/dashboard")
            } catch (error) {
                console.log(error);
            }
    }

  return (
    <div className='d-flex justify-content-center align-items-center'  style={{height:"100vh",width:"100vw"}}>
        <div style={{width:"400px",height:"400px"}} className='bg-dark'>
        <form className='h-100 d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit}>
                        <input className='form-control w-75' onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='E-mail' autoComplete='email' /><br/>
                        <input className='form-control w-75' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'  />
                        <button className='mt-3 btn btn-success w-25' >Sign up</button>
                        
                        <p className='pt-5 mt-5 text-light'>
                            <span>
                                Already Have an Account?
                            </span>{" "}
                            <Link to='/login'>Sign IN</Link>
                        </p>
                    </form>
        </div>
    </div>
  )
}

export default Register