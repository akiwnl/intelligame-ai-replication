import { isBefore } from "./index";

describe("isBefore", () => {
  it("checks if the first date is before the second one", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("handles dates with the same time", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });
});
