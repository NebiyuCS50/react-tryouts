import { describe, it, expect } from "vitest";

describe("Something true and Something false", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
  it("should be false", () => {
    expect(false).toBe(false);
  });
});
