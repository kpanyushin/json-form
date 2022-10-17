import { FormikValues } from "formik";
import BootstrapForm from "react-bootstrap/Form";

interface FormProps {
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  onReset?: (values: FormikValues) => void;
  children: React.ReactElement;
}

export const Form = ({
  children,
  onSubmit = () => {},
  onReset = () => {},
}: FormProps): JSX.Element => {
  return (
    <BootstrapForm
      noValidate
      className="mb-3"
      onSubmit={onSubmit}
      onReset={onReset}
    >
      {children}
    </BootstrapForm>
  );
};
