import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label component", () => {
  it("renders correctly", () => {
    render(<Label htmlFor="test-hmtl-for" title="test-title" required />);
    const label = screen.getByText("test-title");
    expect(label).toBeInTheDocument();
    expect(label.getAttribute("for")).toEqual("test-hmtl-for");
  });
});
