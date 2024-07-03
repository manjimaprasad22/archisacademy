import React from 'react'
import Loginleft from '../Components/Loginleft'
import Forgotform from '../Components/Forgotform'

const Forgot = () => {
  return (
    <div className='padding col-12 d-flex'>
    <div className='d-none d-lg-flex col-lg-6 col-12'>
  <Loginleft/>
    </div>
    <div className=' col-lg-6 col-12'>
      <Forgotform/>
    </div>

  </div>
  )
}

export default Forgot
