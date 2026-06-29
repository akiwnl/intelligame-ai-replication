import { isFuture } from "./index";

describe("isFuture", () => {
  it("should check if the date is in the future", () => {
    const date = new Date(2024, 11, 31);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("should handle edge cases", () => {
    const date = new Date(2014, 11, 31);
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
