import React from 'react';
import './form-input.scss';
const FormInput = ({ name, type, label, handleChange, isRequired, value }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        name={name}
        required={isRequired}
        onChange={handleChange}
        value={value}
      />
      {label ? (
        <label className="form-input-label" htmlFor="">
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
