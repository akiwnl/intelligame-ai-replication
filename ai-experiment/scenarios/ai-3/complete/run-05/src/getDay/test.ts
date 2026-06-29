import { getDay } from "./index";

describe("getDay", () => {
  it("gets the day of the week of the given date", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("handles edge cases", () => {
    const date = new Date(2014, 11, 31);
    const result = getDay(date);
    expect(result).toBe(3);
  });
});
