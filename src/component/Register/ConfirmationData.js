import React from 'react';
import './register.css'; 

function ConfirmationData({ setForm, formData, navigation }) {  
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
  const { go } = navigation;
  console.log(jobdesc);

  return (
    <div className="form_block">
      <div id="title">{'Confirmation data of entry'}</div>
      <div className="confirm-data-wrape">  
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`}, 
        <br />
        Jobdesc: {`${ localStorage.getItem('jobdescList') }`}
        <br />
        Gender: {`${gender}`},
        <br />
        Email: {` ${email}`},
        <br /> 
        Have a Laptop Pc: {`${haveaLaptopPc}`},
        <br />
        Address: {`${address}`}
        <br />
        Mobile Number: {`${mobileNumber}`}
      </div> 
      <div className="register-button" >
        <button onClick={() => go("b")}>Back</button>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}
 
export default ConfirmationData;