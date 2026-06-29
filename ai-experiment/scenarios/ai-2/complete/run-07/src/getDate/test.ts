import { getDate } from "./index";

describe("getDate", () => {
  it("returns the correct day for a normal date", () => {
    expect(getDate(new Date(2021, 3, 15))).toBe(15);
  });

  it("handles end of month", () => {
    expect(getDate(new Date(2021, 0, 31))).toBe(31);
  });

  it("handles leap day", () => {
    expect(getDate(new Date(2020, 1, 29))).toBe(29);
  });

  it("accepts timestamp", () => {
    const ts = new Date(2022, 10, 5).getTime();
    expect(getDate(ts)).toBe(5);
  });

  it("returns NaN for invalid date", () => {
    expect(getDate("invalid")).toBeNaN();
  });
});
