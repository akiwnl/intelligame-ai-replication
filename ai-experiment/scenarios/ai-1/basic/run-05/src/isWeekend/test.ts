import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true if the given date is a Sunday", () => {
    const date = new Date(2014, 9, 5); // Oct 5, 2014 was a Sunday
    expect(isWeekend(date)).toBe(true);
  });

  it("returns true if the given date is a Saturday", () => {
    const date = new Date(2014, 9, 4); // Oct 4, 2014 was a Saturday
    expect(isWeekend(date)).toBe(true);
  });

  it("returns false if the given date is a weekday (Monday)", () => {
    const date = new Date(2014, 9, 6); // Oct 6, 2014 was a Monday
    expect(isWeekend(date)).toBe(false);
  });

  it("returns false if the given date is a weekday (Wednesday)", () => {
    const date = new Date(2014, 9, 8); // Oct 8, 2014 was a Wednesday
    expect(isWeekend(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 9, 5).getTime(); // Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("accepts a date string", () => {
    const date = "2014-10-06T00:00:00.000Z"; // Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("returns false for an invalid date", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for an invalid date string", () => {
    const result = isWeekend("invalid date");
    expect(result).toBe(false);
  });
});
