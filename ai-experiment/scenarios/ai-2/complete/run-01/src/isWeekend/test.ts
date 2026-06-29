import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("detects Saturday", () => {
    // 2021-07-10 is Saturday
    expect(isWeekend(new Date(2021, 6, 10))).toBe(true);
  });

  it("detects Sunday", () => {
    // 2021-07-11 is Sunday
    expect(isWeekend(new Date(2021, 6, 11))).toBe(true);
  });

  it("detects weekday", () => {
    // 2021-07-12 is Monday
    expect(isWeekend(new Date(2021, 6, 12))).toBe(false);
  });

  it("accepts timestamp and string", () => {
    const ts = Date.UTC(2022, 0, 1); // Saturday
    expect(isWeekend(ts)).toBe(true);
    expect(isWeekend("2022-01-01T00:00:00.000Z")).toBe(true);
  });

  it("invalid date returns false", () => {
    expect(isWeekend("bad")).toBe(false);
  });
});
