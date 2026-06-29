import { isFuture } from "./index";

describe("isFuture", () => {
  it("checks if the given date is in the future", () => {
    const date = new Date(new Date().getFullYear() + 1, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("handles edge cases", () => {
    const date = new Date();
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
