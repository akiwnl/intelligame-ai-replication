import { isWeekend } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isWeekend", () => {
  it("returns true if the given date is a Sunday", () => {
    const sunday = new Date(2014, 9, 5); // October 5, 2014 was a Sunday
    const result = isWeekend(sunday);
    expect(result).toBe(true);
  });

  it("returns true if the given date is a Saturday", () => {
    const saturday = new Date(2014, 9, 4); // October 4, 2014 was a Saturday
    const result = isWeekend(saturday);
    expect(result).toBe(true);
  });

  it("returns false if the given date is a weekday (Monday)", () => {
    const monday = new Date(2014, 9, 6); // October 6, 2014 was a Monday
    const result = isWeekend(monday);
    expect(result).toBe(false);
  });

  it("returns false if the given date is a weekday (Wednesday)", () => {
    const wednesday = new Date(2014, 9, 8); // October 8, 2014 was a Wednesday
    const result = isWeekend(wednesday);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as an argument", () => {
    const saturdayTimestamp = new Date(2023, 10, 11).getTime(); // November 11, 2023 is a Saturday
    const result = isWeekend(saturdayTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as an argument", () => {
    const sundayString = "2023-11-12T00:00:00Z"; // November 12, 2023 is a Sunday
    const result = isWeekend(sundayString);
    expect(result).toBe(true);
  });

  it("returns false for an invalid date", () => {
    const result = isWeekend(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for an invalid string date", () => {
    const result = isWeekend("invalid date string");
    expect(result).toBe(false);
  });
});
