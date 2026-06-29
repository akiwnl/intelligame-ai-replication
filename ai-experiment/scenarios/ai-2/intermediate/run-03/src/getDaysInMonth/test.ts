import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns 31 for January", () => {
    expect(getDaysInMonth(new Date(2021, 0))).toBe(31);
  });

  it("handles leap year February", () => {
    expect(getDaysInMonth(new Date(2000, 1))).toBe(29);
  });

  it("handles non‑leap year February", () => {
    expect(getDaysInMonth(new Date(2019, 1))).toBe(28);
  });
});
