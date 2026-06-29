import { getDaysInYear } from "./index";

describe("getDaysInYear", () => {
  it("detects common year", () => {
    expect(getDaysInYear(new Date(2019, 0, 1))).toBe(365);
  });

  it("detects leap year", () => {
    expect(getDaysInYear(new Date(2020, 0, 1))).toBe(366);
  });

  it("works for any month inside the year", () => {
    expect(getDaysInYear(new Date(2020, 5, 10))).toBe(366);
  });

  it("accepts timestamp and ISO string", () => {
    const ts = Date.UTC(2021, 0, 1);
    expect(getDaysInYear(ts)).toBe(365);
    expect(getDaysInYear("2020-03-01T00:00:00Z")).toBe(366);
  });
});
