import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Test2 from "./Test2.jsx";

describe("Test2 Component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<Test2 />);
    expect(container.textContent).toMatchSnapshot();
  });
  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();
    render(<Test2 />);
    const button = screen.getByRole("button", { name: /click me/i });
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/Radical Rhinos/i);
  });
});
