import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week", () => {
    const date = new Date(2012, 1, 29);
    expect(getDay(date)).toBe(3);
  });

  it("should handle dates in different weeks", () => {
    const date = new Date(2014, 8, 1);
    expect(getDay(date)).toBe(1);
  });
});
