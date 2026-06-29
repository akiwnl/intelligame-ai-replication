import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day for regular dates", () => {
    expect(getDate(new Date(2021, 5, 15))).toBe(15);
  });

  it("handles end of month", () => {
    expect(getDate(new Date(2021, 0, 31))).toBe(31);
  });

  it("handles leap day", () => {
    expect(getDate(new Date(2020, 1, 29))).toBe(29);
  });

  it("accepts timestamp and ISO string", () => {
    const ts = Date.UTC(2021, 0, 2);
    expect(getDate(ts)).toBe(2);
    expect(getDate("2021-01-03T00:00:00Z")).toBe(3);
  });

  it("returns NaN for invalid date", () => {
    expect(getDate(new Date("invalid"))).toBeNaN();
  });
});
