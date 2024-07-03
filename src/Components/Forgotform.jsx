import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/archis-logo.svg'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import { useForm } from "react-hook-form";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from '@mui/material';

const Forgotform = () => {
    const navigate = useNavigate()
    const emailregex = `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`

    const schema = yup.object().shape({
  
      email: yup.string().required("Email is required").matches(emailregex,"Email is Invalid"),
   
  
  
    })
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
     
        email: "",

     
      },
    })
    const HandleLogin=()=>{
    
    }
  return (
    <div className='d-block container forgot-detail'>
    <img src={logo} alt="" className='logo' />
    <div className='privacy'>
      Please enter your email, and we'll send a link to reset your password.
        </div>
      <form className='d-block' onSubmit={handleSubmit(HandleLogin)}>
          <div className="form-group d-block">
              <p>Email</p>
              {/* <input type="text" placeholder='johndeo@email.com' className='col-12 logininput'/> */}
              <TextField id="standard-basic"  variant="standard" placeholder='johndeo@email.com' className='col-12 logininput'{...register("email")} />
              <span className="error">{errors.email?.message}</span>
          </div>
         
          <div className='col-12 forgot'><Link to={'/'}>Sign-in</Link> &nbsp; &nbsp; <Link to={'/register'}>Sign-up</Link></div>
          <button className='create-button-1 col-12 btn' type='submit' >CONTINUE</button>
       
      </form>
      <div className='privacy'>
      By creating an account with us, you expressly confirm that you have read and understood our Privacy Policy and accepts our Terms of Service.
      </div>
  </div>
  )
}

export default Forgotform
