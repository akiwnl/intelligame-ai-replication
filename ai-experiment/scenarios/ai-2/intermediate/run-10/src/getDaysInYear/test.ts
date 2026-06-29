import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("detects leap years", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366);
    expect(getDaysInYear(new Date(2000, 0, 1))).toBe(366);
  });

  it("detects common years", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
    expect(getDaysInYear(new Date(1900, 0, 1))).toBe(365);
  });
});
