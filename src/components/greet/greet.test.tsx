import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Renders correctly ", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
  test("Renders with a name", () => {
    render(<Greet name="Koushik" />);
    const textElement = screen.getByText("Hello Koushik");
    expect(textElement).toBeInTheDocument();
  });
});
