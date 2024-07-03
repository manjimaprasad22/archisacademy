import React from 'react'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import join from '../assets/images/join-us.svg'

const Loginleft = () => {
  return (
    <div className='left-animation'>
      <img src={join} alt="" />
      <div className='left-text1'>WELCOME TO </div>
      <div className='left-text2'>ARCHI'S ACADEMY</div>
<div className='left-text3'>We open the door to tech careers for you!</div>
    </div>
  )
}

export default Loginleft
