import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns 31 for January", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31);
  });

  it("handles leap year February", () => {
    expect(getDaysInMonth(new Date(2020, 1, 1))).toBe(29);
  });

  it("handles non‑leap year February", () => {
    expect(getDaysInMonth(new Date(2021, 1, 1))).toBe(28);
  });

  it("accepts timestamp and string", () => {
    const ts = new Date(2022, 3, 1).getTime(); // April
    expect(getDaysInMonth(ts)).toBe(30);
    expect(getDaysInMonth(ts.toString())).toBe(30);
  });

  it("returns NaN for invalid date", () => {
    const result = getDaysInMonth("invalid");
    expect(isNaN(result)).toBe(true);
  });
});
