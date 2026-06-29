import { getDate } from "./index";

describe("getDate", () => {
  it("should get the day of the month", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should handle edge cases", () => {
    const date = new Date(2014, 11, 31);
    const result = getDate(date);
    expect(result).toBe(31);
  });
});
