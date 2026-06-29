import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("handles February in leap year", () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29);
  });
  it("handles regular months", () => {
    expect(getDaysInMonth(new Date(2021, 0))).toBe(31); // Jan
    expect(getDaysInMonth(new Date(2021, 3))).toBe(30); // Apr
  });
});
