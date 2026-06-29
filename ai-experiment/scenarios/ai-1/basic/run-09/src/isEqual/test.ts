import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true if the given dates are equal", () => {
    const dateLeft = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateRight = new Date(2014, 6, 2, 6, 30, 45, 0);
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(true);
  });

  it("returns false if the given dates are not equal", () => {
    const dateLeft = new Date(2014, 6, 2, 6, 30, 45, 0);
    const dateRight = new Date(2014, 6, 2, 6, 30, 45, 500);
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(false);
  });

  it("returns false if the dates differ only by milliseconds", () => {
    const dateLeft = new Date(2014, 6, 2, 6, 30, 45, 123);
    const dateRight = new Date(2014, 6, 2, 6, 30, 45, 456);
    const result = isEqual(dateLeft, dateRight);
    expect(result).toBe(false);
  });

  it("handles date arguments", () => {
    const result = isEqual(new Date(2023, 0, 1), new Date(2023, 0, 1));
    expect(result).toBe(true);
  });

  it("handles timestamp arguments", () => {
    const result = isEqual(
      new Date(2023, 0, 1).getTime(),
      new Date(2023, 0, 1).getTime(),
    );
    expect(result).toBe(true);
  });

  it("handles string arguments", () => {
    const result = isEqual(
      "2023-01-01T10:00:00.000Z",
      "2023-01-01T10:00:00.000Z",
    );
    expect(result).toBe(true);
  });

  it("returns false for Invalid Date arguments", () => {
    expect(isEqual(new Date(NaN), new Date(2000, 0, 1))).toBe(false);
    expect(isEqual(new Date(2000, 0, 1), new Date(NaN))).toBe(false);
    expect(isEqual(new Date(NaN), new Date(NaN))).toBe(false);
  });

  it("returns false for invalid string arguments", () => {
    expect(isEqual("invalid date", new Date(2000, 0, 1))).toBe(false);
    expect(isEqual(new Date(2000, 0, 1), "invalid date")).toBe(false);
    expect(isEqual("invalid date", "another invalid date")).toBe(false);
  });
});
