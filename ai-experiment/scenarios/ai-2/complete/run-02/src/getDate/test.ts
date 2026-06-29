import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day for normal dates", () => {
    expect(getDate(new Date(2021, 3, 15))).toBe(15);
  });

  it("handles end of month boundaries", () => {
    expect(getDate(new Date(2021, 0, 31))).toBe(31);
    expect(getDate(new Date(2020, 1, 29))).toBe(29); // leap year
  });

  it("works with timestamps and strings", () => {
    const ts = Date.UTC(2022, 5, 7);
    expect(getDate(ts)).toBe(7);
    expect(getDate("2022-06-07T00:00:00Z")).toBe(7);
  });
});
