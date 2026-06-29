import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns true for a Saturday", () => {
    const date = new Date(2024, 2, 2); // March 2, 2024 is a Saturday
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns false for a Monday", () => {
    const date = new Date(2024, 2, 4); // March 4, 2024 is a Monday
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("returns false for other weekdays (Tuesday, Wednesday, Thursday, Friday)", () => {
    expect(isWeekend(new Date(2024, 2, 5))).toBe(false); // Tuesday
    expect(isWeekend(new Date(2024, 2, 6))).toBe(false); // Wednesday
    expect(isWeekend(new Date(2024, 2, 7))).toBe(false); // Thursday
    expect(isWeekend(new Date(2024, 2, 8))).toBe(false); // Friday
  });

  it("accepts a timestamp as the argument", () => {
    const date = new Date(2024, 2, 3).getTime(); // March 3, 2024 (Sunday)
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("accepts a date string as the argument", () => {
    const date = "2024-03-09T00:00:00.000Z"; // March 9, 2024 (Saturday)
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the date string is invalid", () => {
    const result = isWeekend("invalid date string");
    expect(result).toBe(false);
  });
});
