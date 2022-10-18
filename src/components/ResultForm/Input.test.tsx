import { render, screen } from "@testing-library/react";

import { InputType } from "../../types/types";
import { Input } from "./Input";

describe("Input component", () => {
  it.each(["text", "textarea", "number", "radio", "checkbox", "date"])(
    "should render %s input",
    (type) => {
      render(
        <Input
          id={type}
          name={type}
          value={type}
          placeholder={type}
          type={type as InputType}
        />
      );
      const input = screen.getByPlaceholderText(type);
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toEqual(type);
    }
  );
});
