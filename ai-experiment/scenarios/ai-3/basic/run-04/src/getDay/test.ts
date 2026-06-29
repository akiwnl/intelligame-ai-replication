import { getDay } from "./index";

describe("getDay", () => {
  it("should get the day of the week", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });

  it("should handle dates with times", () => {
    const date = new Date(2012, 1, 29, 12, 30, 0);
    const result = getDay(date);
    expect(result).toBe(3);
  });
});
