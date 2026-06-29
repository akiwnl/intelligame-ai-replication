import { isFuture } from "./index";
import { describe, expect, it, jest } from "@jest/globals";

describe("isFuture", () => {
  // Mock Date.now() to ensure consistent test results
  const MOCK_DATE = new Date(2023, 9, 26, 10, 0, 0, 0); // October 26, 2023, 10:00:00.000
  const realDate = Date;

  beforeAll(() => {
    global.Date = class extends realDate {
      constructor(date?: Date | number | string) {
        if (date) {
          return new realDate(date);
        }
        return MOCK_DATE;
      }
    } as typeof Date;
  });

  afterAll(() => {
    global.Date = realDate;
  });

  it("returns true if the given date is in the future", () => {
    const futureDate = new Date(2023, 9, 26, 10, 0, 0, 1); // 1 millisecond after MOCK_DATE
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const pastDate = new Date(2023, 9, 26, 9, 59, 59, 999); // 1 millisecond before MOCK_DATE
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is the current moment", () => {
    const currentDate = new Date(2023, 9, 26, 10, 0, 0, 0); // Exact MOCK_DATE
    const result = isFuture(currentDate);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as an argument", () => {
    const futureTimestamp = new Date(2023, 9, 26, 10, 0, 0, 1).getTime();
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as an argument", () => {
    const futureDateString = "2023-10-26T10:00:00.001Z"; // 1 ms after MOCK_DATE UTC
    const result = isFuture(futureDateString);
    expect(result).toBe(true);
  });

  it("returns false for an invalid date", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for an invalid string date", () => {
    const result = isFuture("invalid date string");
    expect(result).toBe(false);
  });
});
