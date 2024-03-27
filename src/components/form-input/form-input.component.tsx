import React, { ChangeEvent } from "react";
import { FormInputLabel, Group, Input } from "./form-input.styles";

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
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel shrink={!!otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
