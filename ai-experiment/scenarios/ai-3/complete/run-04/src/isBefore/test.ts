import { isBefore } from "./index";

describe("isBefore", () => {
  it("checks if a date is before another", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });

  it("handles non-date input", () => {
    const result = isBefore("1989-07-10", "1987-02-11");
    expect(result).toBe(false);
  });
});
