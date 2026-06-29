import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should return the number of days in a month", () => {
    const date = new Date(2000, 1);
    expect(getDaysInMonth(date)).toBe(29);
  });

  it("should handle months with different numbers of days", () => {
    const date = new Date(2014, 8);
    expect(getDaysInMonth(date)).toBe(30);
  });
});
