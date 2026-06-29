import { isFuture } from "./index";

describe("isFuture", () => {
  it("checks if a date is in the future", () => {
    const date = new Date(2099, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const result = isFuture("2099-01-01");
    expect(result).toBe(true);
  });
});
