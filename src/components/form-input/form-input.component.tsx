import React, { ChangeEvent } from "react";
import "./form-input.styles.scss";

interface FromInputProps {
  label: string;
  type: string;
  required: true;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

const FormInput: React.FC<FromInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />

      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
