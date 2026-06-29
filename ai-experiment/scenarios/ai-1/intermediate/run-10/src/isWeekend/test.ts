import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for a Sunday", () => {
    const date = new Date(2014, 9, 5); // October 5, 2014 (Sunday)
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns true for a Saturday", () => {
    const date = new Date(2014, 9, 4); // October 4, 2014 (Saturday)
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("returns false for a Monday", () => {
    const date = new Date(2014, 9, 6); // October 6, 2014 (Monday)
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("returns false for a Friday", () => {
    const date = new Date(2014, 9, 3); // October 3, 2014 (Friday)
    const result = isWeekend(date);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as a date argument", () => {
    const timestamp = new Date(2023, 0, 7).getTime(); // January 7, 2023 (Saturday)
    const result = isWeekend(timestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as a date argument", () => {
    const dateString = "2023-01-08T10:00:00Z"; // January 8, 2023 (Sunday)
    const result = isWeekend(dateString);
    expect(result).toBe(true);
  });

  it("returns false if the date is invalid", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the input is an invalid string", () => {
    const result = isWeekend("this is not a date");
    expect(result).toBe(false);
  });
});
