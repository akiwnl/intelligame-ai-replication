import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month", () => {
    const date = new Date(2012, 1, 29);
    expect(getDate(date)).toBe(29);
  });

  it("should handle dates in different months", () => {
    const date = new Date(2014, 8, 1);
    expect(getDate(date)).toBe(1);
  });
});
