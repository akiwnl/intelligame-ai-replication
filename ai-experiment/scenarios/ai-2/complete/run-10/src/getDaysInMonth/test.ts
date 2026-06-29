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

  it("handles month boundary", () => {
    expect(getDaysInMonth(new Date(2021, 3, 30))).toBe(30); // April
  });

  it("accepts timestamp and string", () => {
    const ts = Date.UTC(2021, 0, 1); // January
    expect(getDaysInMonth(ts)).toBe(31);
    expect(getDaysInMonth("2021-02-01T00:00:00Z")).toBe(28);
  });
});
