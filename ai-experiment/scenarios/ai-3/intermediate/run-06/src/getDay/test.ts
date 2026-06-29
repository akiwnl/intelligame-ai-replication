import { getDay } from "./index";

describe("getDay", () => {
  it("should get the day of the week", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("should handle dates with different days", () => {
    const date = new Date(2014, 8, 1);
    const result = getDay(date);
    expect(result).toBe(1);
  });
});
