import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("detects leap years", () => {
    expect(getDaysInYear(new Date(2012, 0, 1))).toBe(366);
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });
});
