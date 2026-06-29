import { isFuture } from "./index";

describe("isFuture", () => {
  it("checks if the given date is in the future", () => {
    const date = new Date(2099, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("handles dates in the past", () => {
    const date = new Date(2014, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(false);
  });

  it("handles the current date", () => {
    const date = new Date();
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
