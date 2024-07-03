import React from 'react'
import logo from '../assets/images/archis-logo.svg'
import google from '../assets/images/google.png'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import TextField from '@mui/material/TextField';
import { useGoogleLogin } from '@react-oauth/google';
import { useForm } from "react-hook-form";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
const Loginform = () => {
    const navigate = useNavigate()
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
      const emailregex = `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`

  const schema = yup.object().shape({

    email: yup.string().required("Email is required").matches(emailregex,"Email is Invalid"),
    password: yup.string().required("Password is required"),


  })
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
   
      email: "",
      password: "",
   
    },
  })
  const HandleLogin=()=>{
  
  }
  return (
    <div className='d-block container login-detail'>
      <img src={logo} alt="" className='logo' />
      <button className='col-12 google btn ' onClick={() => login()}><img src={google} alt="" style={{width:"15px"}} type='button'/></button>
      <div className="col-12 d-flex">
        <div className="col-4 sign-border"><hr className='custom-hr'/></div>
        <div className="col-4 text-center">or sign in using</div>
        <div className="col-4" ><hr className='custom-hr'/></div>
      </div>
        <form className='d-block' onSubmit={handleSubmit(HandleLogin)}>
            <div className="form-group d-block">
                <p>Email</p>
                {/* <input type="text" placeholder='johndeo@email.com' className='col-12 logininput'/> */}
                <TextField id="standard-basic"  variant="standard" placeholder='johndeo@email.com' className='col-12 logininput'{...register("email")} />
                <span className="error">{errors.email?.message}</span>
            </div>
            <div className="form-group d-block">
                <p>Password</p>
                <TextField  id="standard-basic"  variant="standard" type="password" placeholder='******' className='col-12 logininput' {...register("password")}/>
                <span className="error">{errors.password?.message}</span>
            </div>
            <div className='col-12 forgot' onClick={()=>navigate('/forgot-password')} style={{cursor:"pointer"}}>Forgot Password?</div>
            <div className='button-container d-block d-lg-flex'>

        <button className='login-button col-lg-6 col-12 btn' type='submit'>LOG IN</button>
        <button className='create-button col-lg-6 col-12 btn' type='button' onClick={()=>navigate('/register')}>CREATE AN ACCOUNT</button>
            </div>
        </form>
        <div className='privacy'>
        By creating an account with us, you expressly confirm that you have read and understood our Privacy Policy and accepts our Terms of Service.
        </div>
    </div>
  )
}

export default Loginform
