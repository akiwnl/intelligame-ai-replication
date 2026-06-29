import { isBefore } from "./index";

describe("isBefore", () => {
  it("should check if the first date is before the second one", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("should handle non-date inputs", () => {
    const date = "1987-02-11";
    const dateToCompare = "1989-07-10";
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("should return false if dates are equal", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });
});
