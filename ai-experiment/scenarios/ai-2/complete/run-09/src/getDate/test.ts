import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day for regular dates", () => {
    expect(getDate(new Date(2021, 3, 15))).toBe(15);
  });

  it("handles leap day", () => {
    expect(getDate(new Date(2020, 1, 29))).toBe(29);
  });

  it("accepts timestamps and strings", () => {
    const ts = new Date(2022, 0, 5).getTime();
    expect(getDate(ts)).toBe(5);
    expect(getDate(ts.toString())).toBe(5);
  });

  it("returns NaN for invalid date", () => {
    const result = getDate("not-a-date");
    expect(isNaN(result)).toBe(true);
  });
});
