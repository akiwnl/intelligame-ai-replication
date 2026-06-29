import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("detects leap year", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366);
  });
  it("detects common year", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });
});
