import { isBefore } from "./index";

describe("isBefore", () => {
  it("should check if the first date is before the second one", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("should handle dates with times", () => {
    const date = new Date(1987, 1, 11, 12, 30, 0);
    const dateToCompare = new Date(1989, 6, 10, 12, 30, 0);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });
});
