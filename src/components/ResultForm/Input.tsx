import BootstrapForm from "react-bootstrap/Form";

import { InputType } from '../../types/types';

type ComponentsMap = {
  [key: string]: React.ElementType;
};

const componentsMap: ComponentsMap = {
  text: BootstrapForm.Control,
  number: BootstrapForm.Control,
  date: BootstrapForm.Control,
  radio: BootstrapForm.Check,
  checkbox: BootstrapForm.Check,
  textarea: BootstrapForm.Control,
};

interface InputProps {
  type: InputType;
  value: string | number | boolean;
  id: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  isValid?: boolean;
  onChange?: (e: React.ChangeEvent, value: string) => void;
}

export const Input = ({
  id,
  type,
  value,
  name = "",
  placeholder = "",
  isValid = true,
  required = false,
  onChange,
}: InputProps): JSX.Element => {
  const Control: React.ElementType =
    componentsMap[type] || BootstrapForm.Control;

  return (
    <Control
      id={id}
      type={type}
      name={name}
      value={value}
      isValid={isValid}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
      as={type === "textarea" ? "textarea" : "input"}
    />
  );
};
