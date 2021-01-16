import React, { useEffect } from "react";

const Submit = ({formData}) => { 
  const {
    firstName,
    lastName,
    jobdesc,
    gender,
    email,
    haveaLaptopPc,
    address,
    mobileNumber
  } = formData;
  console.log(jobdesc);

  useEffect(()=>{
    const data = {
      firstName,
      lastName,
      jobdesc: localStorage.getItem('jobdescList'),
      gender,
      email,
      haveaLaptopPc,
      address,
      mobileNumber}
      console.log(data);
    localStorage.setItem('register', data)
  })

  return (
    <div className='form_block submit_wrap'>
      <div className='submit_wrap'>
        <h3>Thank you for submit form</h3> 
      </div>
    </div>
  );
};

export default Submit;