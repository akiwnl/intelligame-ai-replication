import { isBefore } from "./index";

describe("isBefore", () => {
  it("should check if a date is before another", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });
});
