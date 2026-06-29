import { isFuture } from "./index";

describe("isFuture", () => {
  it("checks if the date is in the future", () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
