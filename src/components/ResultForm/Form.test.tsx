import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Form component", () => {
  let onSubmitMock = jest.fn();
  let onResetMock = jest.fn();
  const setup = () =>
    render(
      <Form onReset={onResetMock} onSubmit={onSubmitMock}>
        <>
          <input type="text" value="test-value" data-testid="test-input" />
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </>
      </Form>
    );

  it("renders correctly", () => {
    setup();
    expect(screen.getByTestId("test-input")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });

  it("should submit", () => {
    setup();
    screen.getByText("Submit").click();
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  it("should reset", () => {
    setup();
    screen.getByText("Clear").click();
    expect(onResetMock).toHaveBeenCalledTimes(1);
  });
});
