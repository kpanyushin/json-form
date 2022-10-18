import { useCallback, useRef } from "react";
import Editor, { OnMount, OnValidate } from "@monaco-editor/react";

import { prettifyJsonString } from "../../utils/prettifyJson";

import styles from "./JSONEditor.module.css";

interface JSONEditorProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onValidate?: (errors: string[]) => void;
}

export const JSONEditor = ({
  defaultValue = "",
  onChange = () => {},
  onValidate = () => {},
}: JSONEditorProps): JSX.Element => {
  const editorRef = useRef(null);
  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;

    editor.getModel()?.updateOptions({ tabSize: 4, insertSpaces: false });
    const value = prettifyJsonString(defaultValue);
    editor.setValue(value);
  };

  const handleEditorValidation: OnValidate = useCallback(
    (markers) => {
      const errorMessage = markers.map(
        ({ startLineNumber, message }) => `line ${startLineNumber}: ${message}`
      );
      onValidate(errorMessage);
    },
    [onValidate]
  );

  const handleEditorChange = useCallback(
    (val: string | undefined) => {
      if (typeof val === "undefined") return;
      onChange(val);
    },
    [onChange]
  );

  return (
    <Editor
      className={styles.wrapper}
      height="50vh"
      language="json"
      options={{
        automaticLayout: true,
        autoClosingBrackets: "always",
        autoClosingQuotes: "always",
        formatOnPaste: true,
        formatOnType: true,
        scrollBeyondLastLine: false,
      }}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
      onValidate={handleEditorValidation}
    />
  );
};
