import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day for normal dates", () => {
    expect(getDate(new Date(2021, 4, 15))).toBe(15);
  });

  it("handles leap day", () => {
    expect(getDate(new Date(2020, 1, 29))).toBe(29);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2021, 0, 1);
    expect(getDate(ts)).toBe(1);
  });

  it("accepts string", () => {
    expect(getDate("2022-12-31")).toBe(31);
  });

  it("returns NaN for invalid date", () => {
    expect(getDate("not-a-date")).toBeNaN();
  });
});
