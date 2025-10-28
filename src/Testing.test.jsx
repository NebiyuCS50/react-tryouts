import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Test from "./test.jsx";

describe("Test Component", () => {
  it("renders Hello World", () => {
    render(<Test />);
    expect(screen.getByRole("heading").textContent).toMatch(/Hello World/i);
  });
});
