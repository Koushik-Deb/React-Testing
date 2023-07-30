import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("Renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const conditionElement = screen.getByRole("checkbox");
    expect(conditionElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
