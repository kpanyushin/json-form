import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {
  it.each(["text", "textarea", "number", "radio", "checkbox", "date"])(
    "should render %s input",
    (type) => {
      render(
        <Input
          id={type}
          name={type}
          type={type}
          value={type}
          placeholder={type}
        />
      );
      const input = screen.getByPlaceholderText(type);
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toEqual(type);
    }
  );
});
