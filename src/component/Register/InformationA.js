import React, {useState} from 'react';
import './register.css';
import { IconContext } from "react-icons";
import { IoIosRemoveCircle, IoIosAddCircle } from 'react-icons/io';
import InputForm from "./InputForm";
import SelectGender from "./SelectGender";

function InformationA({ setForm, formData, navigation }) { 
  const { firstName, jobdesc, lastName, gender, email } = formData;
  const { next } = navigation;
  console.log(jobdesc);
  const [inputJobdeskList, setInputJobdeskList] = useState([{ jobdesk: "" }]);
  const [jobdeskList, setJobdeskList] = useState([]);
  const [newjobsdesc, setNewjobsdesc] = useState();
  // handle input change
  const handleInputChange = (e, index) => {
    const list = [...inputJobdeskList];
    list[index].jobdesk = e.target.value;
    setInputJobdeskList(list); 
    setNewjobsdesc(e.target.value);
  };

  const addMoreJobdesc = async (newjobdesc) => {
    setJobdeskList(prevJobdeskList=> [...prevJobdeskList, newjobdesc])
  } 

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputJobdeskList];
    list.splice(index, 1);
    setInputJobdeskList(list);
  };

  // handle click event of the Add button
  const handleAddClick = async () => { 
    await addMoreJobdesc(newjobsdesc);
    await setInputJobdeskList([...inputJobdeskList, { jobdesk: "" }]);  
    await localStorage.setItem('jobdescList', jobdeskList);
  };

  return (
    <div className="form_block">
      <div id="title">{'Information A'}</div>
      <div className="information-a-wrap">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
        <div> 
          <InputForm placeholder="Enter First Name" label="First Name" name="firstName" value={firstName} onChange={setForm} />
        </div>
        <div>
          <InputForm placeholder="Enter last Name  " label="Last Name" name="lastName" value={lastName} onChange={setForm} /> 
        </div> 
      </div> 
      {/* jobdesk */}
      <text>Jobdesc</text>
      <div className="box" style={{paddingLeft:10, paddingRight:10}}> 
        {inputJobdeskList.map((x, i) => {
          return ( 
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', 
            }}> 
            <InputForm
              placeholder="Enter last Name  " 
              name="jobdesk"
              value={x.jobdesk}
              onChange={e => handleInputChange(e, i)}
              RightComponent={
                <>
                {inputJobdeskList.length - 1 === i && 
                  <div style={{cursor: 'pointer' }} onClick={handleAddClick}>
                    <IconContext.Provider value={{ color: "green", size:20 }}>
                      <IoIosAddCircle />
                    </IconContext.Provider>
                  </div>}
                </>
              } 
              LeftComponent={
                <>
                {inputJobdeskList.length !== 1 && 
                  <div className="mr10" style={{cursor: 'pointer' }} onClick={() => handleRemoveClick(i)}>
                    <IconContext.Provider value={{ color: "red", size:8}}>
                      <IoIosRemoveCircle/>
                    </IconContext.Provider>
                  </div>}
                </>
              }
            />  
            </div>
          );
        })}
          </div> 
        <SelectGender className="select-gender" label="Gender" name="gender" value={gender} onChange={setForm} /> 
        <InputForm label="Email"  placeholder="Enter Email Address" name="email" value={email} onChange={setForm} /> 
      </div>
      <div className="register-button" >
        <button onClick={next} >Next</button>
      </div>
  </div>
  )
}
 
export default InformationA;