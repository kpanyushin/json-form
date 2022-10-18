import { render, screen } from "@testing-library/react";
import { ResultForm } from "./ResultForm";

import { stubConfig } from "../../utils/stubConfig";
import { Config } from "../../types/types";

describe("ResultForm component", () => {
  const mockSchema = stubConfig;
  const setup = () => render(<ResultForm schema={mockSchema as Config} />);

  it("should render components based on provided schema", () => {
    setup();
    expect(screen.getByText(mockSchema.title)).toBeInTheDocument();
    expect(screen.getByText(mockSchema.description)).toBeInTheDocument();
    Object.entries(mockSchema.fields).forEach(([_, value]) => {
      expect(
        screen.getByLabelText(value.title, { exact: false })
      ).toBeInTheDocument();
    });
  });
});
