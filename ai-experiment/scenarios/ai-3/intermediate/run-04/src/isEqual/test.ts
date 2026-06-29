import { isEqual } from "./index";

describe("isEqual", () => {
  it("should check if the given dates are equal", () => {
    const date = new Date(2014, 6, 2, 6, 30, 45, 0);
    const otherDate = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(date, otherDate);
    expect(result).toBe(true);
  });

  it("should handle dates with different times", () => {
    const date = new Date(2014, 6, 2, 6, 30, 45, 0);
    const otherDate = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(date, otherDate);
    expect(result).toBe(false);
  });
});
