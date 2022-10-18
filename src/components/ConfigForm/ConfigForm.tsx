import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { Config } from "../../types/types";
import { jsonSchema } from "../../utils/schemas";
import { JSONEditor } from "../JSONEditor/JSONEditor";
import { ErrorsBar } from "../ErrorsBar/ErrorsBar";

interface ConfigFormProps {
  config?: Config;
  onSubmit: (value: string) => void;
}

export const ConfigForm = ({
  config,
  onSubmit,
}: ConfigFormProps): JSX.Element => {
  const [jsonErrors, setJsonErrors] = useState<string[]>([]);
  const [schemaErrors, setSchemaErrors] = useState<string[]>([]);
  const [editorValue, setEditorValue] = useState<string>(
    JSON.stringify(config, null, 2)
  );
  const handleSubmit = () => {
    onSubmit(editorValue);
  };

  useEffect(() => {
    const checkValidity = async () => {
      try {
        await jsonSchema.validate(editorValue);
        setSchemaErrors([]);
      } catch (error: any) {
        setSchemaErrors([error.message]);
        console.error(error);
      }
    };
    checkValidity();
  }, [editorValue]);

  return (
    <>
      <JSONEditor
        onChange={setEditorValue}
        onValidate={setJsonErrors}
        defaultValue={editorValue}
      />
      <Button
        className="mb-3"
        disabled={jsonErrors.length > 0 || schemaErrors.length > 0}
        onClick={handleSubmit}
      >
        Apply
      </Button>
      {jsonErrors.length > 0 && (
        <ErrorsBar title="JSON errors" errors={jsonErrors} />
      )}
      {schemaErrors.length > 0 && (
        <ErrorsBar title="Schema errors" errors={schemaErrors} />
      )}
    </>
  );
};
