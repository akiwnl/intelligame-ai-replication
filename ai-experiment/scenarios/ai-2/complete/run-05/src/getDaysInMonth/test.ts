import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns 31 for January", () => {
    expect(getDaysInMonth(new Date(2021, 0, 15))).toBe(31);
  });

  it("returns 28 for non‑leap February", () => {
    expect(getDaysInMonth(new Date(2019, 1, 1))).toBe(28);
  });

  it("returns 29 for leap February", () => {
    expect(getDaysInMonth(new Date(2020, 1, 1))).toBe(29);
  });

  it("handles month boundary (December)", () => {
    expect(getDaysInMonth(new Date(2021, 11, 5))).toBe(31);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2022, 3, 1); // April 2022
    expect(getDaysInMonth(ts)).toBe(30);
  });

  it("returns NaN for invalid date", () => {
    expect(getDaysInMonth(new Date("invalid"))).toBeNaN();
  });
});
