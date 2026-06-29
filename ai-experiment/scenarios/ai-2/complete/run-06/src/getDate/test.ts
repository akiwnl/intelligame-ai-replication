import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day for regular date", () => {
    expect(getDate(new Date(2021, 4, 15))).toBe(15);
  });

  it("handles end of month", () => {
    expect(getDate(new Date(2021, 0, 31))).toBe(31);
  });

  it("handles leap day", () => {
    expect(getDate(new Date(2020, 1, 29))).toBe(29);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2022, 3, 5);
    expect(getDate(ts)).toBe(5);
  });

  it("returns NaN for Invalid Date", () => {
    expect(getDate(new Date(NaN))).toBeNaN();
  });
});
