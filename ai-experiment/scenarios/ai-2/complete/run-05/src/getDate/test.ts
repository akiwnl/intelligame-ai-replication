import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day for normal dates", () => {
    expect(getDate(new Date(Date.UTC(2021, 4, 15)))).toBe(15);
  });

  it("handles month boundary", () => {
    expect(getDate(new Date(Date.UTC(2021, 0, 31)))).toBe(31);
  });

  it("handles leap day", () => {
    expect(getDate(new Date(Date.UTC(2020, 1, 29)))).toBe(29);
  });

  it("accepts timestamp", () => {
    const ts = Date.UTC(2022, 10, 5);
    expect(getDate(ts)).toBe(5);
  });

  it("returns NaN for invalid date", () => {
    expect(getDate(new Date("invalid"))).toBeNaN();
  });
});
