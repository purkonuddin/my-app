import React from 'react';
import './register.css'; 
import { useForm, useStep } from "react-hooks-helper";

import InformationA from "./InformationA";
import InformationB from "./InformationB";
import ConfirmationData from "./ConfirmationData"; 
import Submit from "./Submit"; 

const steps = [
  { id: "a" },
  { id: "b" },
  { id: "c" },
  { id: "submit" },
];

const defaultData = {
  firstName: "Jane",
  lastName: "Doe",
  jobdesc: 'fornt end, back end',
  gender: "male",
  email: "email@domain.com",
  haveaLaptopPc: 'yes',
  address: "200 South Main St",
  mobileNumber: "+61 4252 454 332", 
};

function Register() { 
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
   
  switch (id) {
    case "a":
      return <InformationA {...props} />;
    case "b":
      return <InformationB {...props} />;
    case "c":
      return <ConfirmationData {...props} />; 
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
}
 
export default Register;