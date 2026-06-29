import { isFuture } from "./index";

describe("isFuture", () => {
  it("should check if the date is in the future", () => {
    const date = new Date(new Date().getFullYear() + 1, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
