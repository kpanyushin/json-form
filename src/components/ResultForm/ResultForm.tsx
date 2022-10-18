import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormikValues, useFormik } from "formik";

import { Config } from "../../types/types";
import { Form } from "./Form";
import { Input } from "./Input";
import { Label } from "./Label";

interface FormProps {
  schema: Config;
}

interface Errors {
  [key: string]: string;
}

export const ResultForm = ({ schema }: FormProps): JSX.Element => {
  const initialValues: { [key: string]: string | number | boolean } = {};
  for (const field of Object.keys(schema.fields)) {
    initialValues[field] = schema.fields[field].value || "";
  }
  const handleValidate = (values: FormikValues) => {
    const errors: Errors = {};
    for (const [field, fieldProps] of Object.entries(schema.fields)) {
      if (fieldProps.required && !Boolean(values[field])) {
        errors[field] = `${fieldProps.title} is required`;
      }
    }

    return errors;
  };
  const { errors, values, touched, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues,
      validate: handleValidate,
      onSubmit: (data) => {
        alert(JSON.stringify(data, null, 2));
      },
    });

  const { title, description, fields, buttons } = schema;

  return (
    <>
      {Boolean(title) && <h2>{title}</h2>}
      {Boolean(description) && <h3>{description}</h3>}
      <Form onSubmit={handleSubmit} onReset={resetForm}>
        {Object.entries(fields).map(([field, fieldProps]) => (
          <Row key={field}>
            <Col className="mb-3" xs={6}>
              <Label
                htmlFor={field}
                title={fieldProps.title}
                required={Boolean(fieldProps.required)}
              />
              <Input
                id={field}
                name={String(fieldProps.name ?? "")}
                value={values[field]}
                onChange={handleChange}
                type={fieldProps.type}
                isValid={Boolean(touched[field] && !errors[field])}
                required={Boolean(fieldProps.required)}
                placeholder={String(fieldProps.placeholder ?? "")}
              />
              <BootstrapForm.Control.Feedback type="invalid">
                {errors[field] as string}
              </BootstrapForm.Control.Feedback>
            </Col>
          </Row>
        ))}
        {buttons ? (
          Object.keys(buttons).map((button: any) => (
            <Button className="mx-1" key={button} type={buttons[button].type}>
              {buttons[button].title}
            </Button>
          ))
        ) : (
          <Button disabled={Object.keys(errors).length > 0} type="submit">
            Submit
          </Button>
        )}
      </Form>
    </>
  );
};
