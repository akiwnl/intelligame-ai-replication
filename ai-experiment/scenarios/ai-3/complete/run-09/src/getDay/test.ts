import { getDay } from "./index";

describe("getDay", () => {
  it("gets the day of the week of the given date", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("handles dates with different months", () => {
    const date = new Date(2014, 8, 1);
    const result = getDay(date);
    expect(result).toBe(1);
  });

  it("handles dates with different years", () => {
    const date = new Date(2015, 8, 1);
    const result = getDay(date);
    expect(result).toBe(2);
  });
});
