import React from 'react'
import CreateForm from '../Components/CreateForm'
import Loginleft from '../Components/Loginleft'


const Create = () => {
   
  return (
    <div className='padding col-12 d-flex'>
      <div className='d-none d-lg-flex col-lg-6 col-12'>
    <Loginleft/>
      </div>
      <div className=' col-lg-6 col-12'>
        <CreateForm/>
      </div>

    </div>
  )
}

export default Create
