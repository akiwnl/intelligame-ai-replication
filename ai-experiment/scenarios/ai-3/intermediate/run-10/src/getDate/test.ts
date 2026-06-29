import { getDate } from "./index";

describe("getDate", () => {
  it("gets the day of the month", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 8, 1);
    const result = getDate(date);
    expect(result).toBe(1);
  });
});
