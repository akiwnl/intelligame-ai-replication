import { getDay } from "./index";

describe("getDay", () => {
  it("should get the day of the week of the given date", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("should handle non-date inputs", () => {
    const date = "2012-02-29";
    const result = getDay(date);
    expect(result).toBe(3);
  });
});
