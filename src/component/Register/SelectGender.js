import React from "react";

const genders = [
  ["-", "-Gender-"],
  ["woman", "Woman"],
  ["man", "Man"], 
];

const SelectGender = ({ label, ...others }) => (
  <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  }}>
    <label>{label}</label>
    <select {...others}>
      {genders.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </div>
);

export default SelectGender;