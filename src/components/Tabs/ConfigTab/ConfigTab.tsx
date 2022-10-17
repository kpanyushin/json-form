import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { jsonSchema } from "../../../utils/schemas";
import { JSONEditor } from "../../JSONEditor/JSONEditor";
import { ErrorsBar } from "../../ErrorsBar/ErrorsBar";

const defaultSchema = {
  title: "A registration form",
  description: "A simple form example.",
  properties: {
    firstName: {
      type: "text",
      title: "First name",
      value: "Kirill",
      required: true,
    },
    lastName: {
      type: "text",
      title: "Last name",
      value: "Panyushin",
    },
    telephone: {
      type: "text",
      title: "Telephone",
    },
    experience: {
      type: "number",
      title: "Years of experience",
      value: 6,
    },
    bio: {
      type: "textarea",
      title: "Description",
    },
    birth: {
      type: "date",
      title: "Date of birth",
      value: "1993-01-02",
    },
    radio: {
      type: "radio",
      title: "Radio button example",
    },
    check: {
      type: "checkbox",
      title: "Checkbox example",
    },
  },
  buttons: {
    "1": {
      title: "Submit",
      actions: [],
    },
  },
};

interface ConfigProps {
  onSubmit: (value: string) => void;
}

export const ConfigTab = ({ onSubmit }: ConfigProps): JSX.Element => {
  const [schemaErrors, setSchemaErrors] = useState<string[]>([]);
  const [isValidSchema, setIsValidSchema] = useState<boolean>(false);
  const [editorValue, setEditorValue] = useState<string>(
    JSON.stringify(defaultSchema, null, 2)
  );
  const handleSubmit = () => {
    onSubmit(editorValue);
  };

  useEffect(() => {
    const checkValidity = async () => {
      try {
        await jsonSchema.validate(editorValue);
        setIsValidSchema(true);
        setSchemaErrors([]);
      } catch (error: any) {
        setSchemaErrors([error.message]);
        setIsValidSchema(false);
        console.error(error);
      }
    };
    checkValidity();
  }, [editorValue]);

  return (
    <>
      <JSONEditor
        onChange={setEditorValue}
        defaultValue={JSON.stringify(defaultSchema, null, 2)}
      >
        {({ errors }: { errors: string[] }) => (
          <>
            <Button
              className="mb-3"
              disabled={errors.length > 0 || !isValidSchema}
              onClick={handleSubmit}
            >
              Apply
            </Button>
            {errors.length > 0 && (
              <ErrorsBar title="JSON errors" errors={errors} />
            )}
            {schemaErrors.length > 0 && (
              <ErrorsBar title="Schema errors" errors={schemaErrors} />
            )}
          </>
        )}
      </JSONEditor>
    </>
  );
};
