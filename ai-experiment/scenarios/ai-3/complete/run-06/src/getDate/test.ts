import { getDate } from "./index";

describe("getDate", () => {
  it("should get the day of the month of the given date", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("should handle non-date inputs", () => {
    const date = "2012-02-29";
    const result = getDate(date);
    expect(result).toBe(29);
  });
});
