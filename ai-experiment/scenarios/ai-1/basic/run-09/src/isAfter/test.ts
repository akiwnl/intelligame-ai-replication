import { isAfter } from "./index";

describe("isAfter", () => {
  it("returns true if the first date is after the second date", () => {
    const date = new Date(1989, 6, 10); // July 10, 1989
    const dateToCompare = new Date(1987, 1, 11); // Feb 11, 1987
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("returns false if the first date is before the second date", () => {
    const date = new Date(1987, 1, 11); // Feb 11, 1987
    const dateToCompare = new Date(1989, 6, 10); // July 10, 1989
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(false);
  });

  it("returns false if the first date is equal to the second date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(false);
  });

  it("handles date arguments", () => {
    const result = isAfter(new Date(2023, 0, 2), new Date(2023, 0, 1));
    expect(result).toBe(true);
  });

  it("handles timestamp arguments", () => {
    const result = isAfter(
      new Date(2023, 0, 2).getTime(),
      new Date(2023, 0, 1).getTime(),
    );
    expect(result).toBe(true);
  });

  it("handles string arguments", () => {
    const result = isAfter(
      "2023-01-02T10:00:00.000Z",
      "2023-01-01T10:00:00.000Z",
    );
    expect(result).toBe(true);
  });

  it("returns false for Invalid Date arguments", () => {
    expect(isAfter(new Date(NaN), new Date(2000, 0, 1))).toBe(false);
    expect(isAfter(new Date(2000, 0, 1), new Date(NaN))).toBe(false);
    expect(isAfter(new Date(NaN), new Date(NaN))).toBe(false);
  });

  it("returns false for invalid string arguments", () => {
    expect(isAfter("invalid date", new Date(2000, 0, 1))).toBe(false);
    expect(isAfter(new Date(2000, 0, 1), "invalid date")).toBe(false);
    expect(isAfter("invalid date", "another invalid date")).toBe(false);
  });
});
