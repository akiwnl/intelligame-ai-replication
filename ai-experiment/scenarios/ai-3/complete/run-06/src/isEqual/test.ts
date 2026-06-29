import { isEqual } from "./index";

describe("isEqual", () => {
  it("should check if the given dates are equal", () => {
    const dateLeft = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateRight = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(true);
  });

  it("should handle non-date inputs", () => {
    const dateLeft = "2014-07-02T06:30:45.000Z";
    const dateRight = "2014-07-02T06:30:45.000Z";
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(true);
  });

  it("should return false if dates are not equal", () => {
    const dateLeft = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateRight = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(false);
  });
});
