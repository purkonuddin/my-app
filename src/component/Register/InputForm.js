import React from "react";

const InputForm = ({ multi = false, LeftComponent, RightComponent, label, children, type = "text", ...otherProps }) => (
    <>
        {LeftComponent}
        <>
        {type === "text" ? (
            <>
            {label && <label>{label}</label>}
            {/* <input type={type} {...otherProps} /> */}
            {multi ? (
                    <textarea {...otherProps}></textarea>
                ) : (
                    <input type={type} {...otherProps} />
                )}
            </>
        ) : (
            <>
            <label />
            <input type={type} {...otherProps} />
            {label}
            </>
        )}
        </>
        {RightComponent}
    </>
  );

  export default InputForm;

  InputForm.defaultProps = {
    LeftComponent:<></>,
    RightComponent:<></>,
  }