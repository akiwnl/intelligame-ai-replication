import { isAfter } from "./index";

describe("isAfter", () => {
  it("should return true if the first date is after the second date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });
});
