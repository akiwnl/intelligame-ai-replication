import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day of month", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29);
    expect(getDate(new Date(2020, 0, 1))).toBe(1);
  });

  it("handles month boundaries", () => {
    expect(getDate(new Date(2020, 0, 31))).toBe(31);
    expect(getDate(new Date(2020, 1, 29))).toBe(29); // leap year
  });

  it("accepts timestamp and string", () => {
    const ts = Date.UTC(2021, 5, 15);
    expect(getDate(ts)).toBe(15);
    expect(getDate("2021-06-15T00:00:00Z")).toBe(15);
  });

  it("returns NaN for invalid date", () => {
    expect(getDate(new Date("invalid"))).toBeNaN();
  });
});
