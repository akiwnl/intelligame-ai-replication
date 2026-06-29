import { isBefore } from "./index";

describe("isBefore", () => {
  it("checks if the first date is before the second one", () => {
    const date = new Date(1987, 1, 11);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("handles equal dates", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1989, 6, 10);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });
});
