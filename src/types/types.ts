export type InputType =
  | "text"
  | "number"
  | "date"
  | "radio"
  | "checkbox"
  | "textarea";

export interface Config {
  title?: string;
  description?: string;
  fields: {
    [key: string]: {
      title: string;
      type: InputType;
      [key: string]: string | boolean | number;
    };
  };
  buttons?: {
    [key: string]: {
      title: string;
      type: "button" | "submit" | "reset";
      actions?: string[];
    };
  };
}
