import { getDate } from "./index";

describe("getDate", () => {
  it("gets the day of the month of the given date", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 11, 31);
    const result = getDate(date);
    expect(result).toBe(31);
  });
});
