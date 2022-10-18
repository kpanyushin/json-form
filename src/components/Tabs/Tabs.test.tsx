import { render, screen } from "@testing-library/react";
import { Tabs } from "./Tabs";

it("should render tabs", () => {
  render(<Tabs />);
  const tabs = screen.getByTestId("tabs");
  const configTab = screen.getByText("Config");
  const resultTab = screen.getByText("Result");
  expect(tabs).toBeInTheDocument();
  expect(configTab).toBeInTheDocument();
  expect(resultTab).toBeInTheDocument();
});
