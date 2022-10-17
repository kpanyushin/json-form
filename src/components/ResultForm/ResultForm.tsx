import BootstrapForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormikValues, useFormik } from "formik";

import { Form } from "./Form";
import { Input } from "./Input";
import { Label } from "./Label";

interface FormProps {
  schema: {
    title?: string;
    description?: string;
    properties: {
      [key: string]: {
        title: string;
        type: string;
        [key: string]: string | boolean | number;
      };
    };
    buttons?: {
      [key: string]: {
        title: string;
        actions: string[];
        type: "button" | "submit" | "reset";
      };
    };
  };
}

interface Errors {
  [key: string]: string;
}

export const ResultForm = ({ schema }: FormProps): JSX.Element => {
  const initialValues: { [key: string]: string | number | boolean } = {};
  for (const field of Object.keys(schema.properties)) {
    initialValues[field] = schema.properties[field].value || "";
  }
  const handleValidate = (values: FormikValues) => {
    const errors: Errors = {};
    for (const field of Object.keys(schema.properties)) {
      if (schema.properties[field].required && !Boolean(values[field])) {
        errors[field] = `${field} is required`;
      }
    }

    return errors;
  };
  const { errors, values, touched, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues,
      validate: handleValidate,
      onSubmit: (data) => {
        alert(JSON.stringify(data, null, 2));
      },
    });

  const { title, description, properties, buttons } = schema;

  return (
    <>
      {Boolean(title) && <h2>{title}</h2>}
      {Boolean(description) && <h3>{description}</h3>}
      <Form
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <>
          {Object.entries(properties).map(([property, fieldProps]) => (
            <Row key={property}>
              <Col className="mb-3" xs={6}>
                <Label
                  htmlFor={property}
                  title={fieldProps.title}
                  required={Boolean(fieldProps.required)}
                />
                <Input
                  id={property}
                  name={String(fieldProps.name ?? "")}
                  value={values[property]}
                  onChange={handleChange}
                  type={fieldProps.type}
                  isValid={Boolean(touched[property] && !errors[property])}
                  required={Boolean(fieldProps.required)}
                  placeholder={String(fieldProps.placeholder ?? "")}
                />
                <BootstrapForm.Control.Feedback type="invalid">
                  {errors[property] as string}
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
        </>
      </Form>
    </>
  );
};
