import { isAfter } from "./index";

describe("isAfter", () => {
  it("checks if a date is after another", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const result = isAfter("1989-07-10", "1987-02-11");
    expect(result).toBe(true);
  });
});
