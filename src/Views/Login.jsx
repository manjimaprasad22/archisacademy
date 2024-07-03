import React from 'react'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import Loginform from '../Components/Loginform'
import Loginleft from '../Components/Loginleft'

const Login = () => {
  return (
    <div className='padding col-12 d-flex'>
      <div className='d-none d-lg-flex col-lg-6 col-12'>
    <Loginleft/>
      </div>
      <div className=' col-lg-6 col-12'>
        <Loginform/>
      </div>

    </div>
  )
}

export default Login
