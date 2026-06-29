import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day of month", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29);
    expect(getDate(new Date(2021, 0, 1))).toBe(1);
  });

  it("handles month boundaries", () => {
    expect(getDate(new Date(2021, 0, 31))).toBe(31);
    expect(getDate(new Date(2021, 1, 28))).toBe(28);
  });

  it("returns NaN for invalid date", () => {
    const result = getDate("not-a-date" as any);
    expect(isNaN(result)).toBe(true);
  });
});
