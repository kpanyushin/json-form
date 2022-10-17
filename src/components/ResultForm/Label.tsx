import Form from "react-bootstrap/Form";

import styles from "./Label.module.css";

interface LabelProps {
  htmlFor: string;
  title: string;
  required?: boolean;
}

export const Label = ({
  htmlFor,
  title,
  required = false,
}: LabelProps): JSX.Element => (
  <Form.Label htmlFor={htmlFor}>
    {title}
    {required && <span className={styles.required}>*</span>}
  </Form.Label>
);
