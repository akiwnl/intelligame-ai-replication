import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("returns 31 for January", () => {
    expect(getDaysInMonth(new Date(2021, 0, 1))).toBe(31);
  });

  it("returns 28 for non‑leap February", () => {
    expect(getDaysInMonth(new Date(2019, 1, 1))).toBe(28);
  });

  it("returns 29 for leap February", () => {
    expect(getDaysInMonth(new Date(2020, 1, 1))).toBe(29);
  });

  it("handles month boundaries", () => {
    // March 2021 has 31 days
    expect(getDaysInMonth("2021-03-15")).toBe(31);
  });

  it("invalid input yields NaN", () => {
    expect(getDaysInMonth("bad")).toBeNaN();
  });
});
