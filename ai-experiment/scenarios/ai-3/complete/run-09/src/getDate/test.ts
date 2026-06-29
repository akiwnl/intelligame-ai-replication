import { getDate } from "./index";

describe("getDate", () => {
  it("gets the day of the month of the given date", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("handles dates with different months", () => {
    const date = new Date(2014, 8, 1);
    const result = getDate(date);
    expect(result).toBe(1);
  });

  it("handles dates with different years", () => {
    const date = new Date(2015, 8, 1);
    const result = getDate(date);
    expect(result).toBe(1);
  });
});
