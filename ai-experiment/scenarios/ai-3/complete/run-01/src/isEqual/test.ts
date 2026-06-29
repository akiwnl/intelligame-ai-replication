import { isEqual } from "./index";

describe("isEqual", () => {
  it("should check if the dates are equal", () => {
    const dateLeft = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateRight = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(true);
  });

  it("should handle invalid dates", () => {
    const dateLeft = new Date(NaN);
    const dateRight = new Date(NaN);
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(false);
  });
});
