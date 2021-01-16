import React from 'react';
import './register.css';
import InputForm from "./InputForm";

function InformationB({ setForm, formData, navigation }) {  
  const { haveaLaptopPc, address, mobileNumber } = formData;
  const { previous, next } = navigation;

  return (
    <div className="form_block">
      <div id="title">{'Information B'}</div>
      <div className="information-b-wrap">
        <div className="radio-group">
          <text>Have a Laptop/Pc</text>
          <div> 
          <input type="radio" value='yes' checked={haveaLaptopPc === 'yes'} onChange={setForm}/>
          {' '} Yes {'    '}
          <input type="radio" value='no' checked={haveaLaptopPc === 'no'} onChange={setForm}/>
          {' '} No
        </div>
        </div>
        <div>
          <InputForm placeholder="Enter address" label="Address" name="address" value={address} onChange={setForm} multi={true} className="address" /> 
        </div> 
        <div>
          <InputForm placeholder="Enter mobileNumber" label="Mobile Number" name="mobileNumber" value={mobileNumber} onChange={setForm} className="mobileNumber"  />
        </div>
      </div>
      <div className="register-button" >
        <button onClick={previous} >Back</button>
        <button onClick={next} >Next</button>
      </div>
  </div>
  )
}
 
export default InformationB;