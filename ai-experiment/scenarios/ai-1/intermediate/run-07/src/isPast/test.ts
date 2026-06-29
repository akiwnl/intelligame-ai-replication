import { isPast } from "./index";
import { describe, expect, it, jest } from "@jest/globals";

describe("isPast", () => {
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

  it("returns true if the given date is in the past", () => {
    const pastDate = new Date(2023, 9, 26, 9, 59, 59, 999); // 1 millisecond before MOCK_DATE
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const futureDate = new Date(2023, 9, 26, 10, 0, 0, 1); // 1 millisecond after MOCK_DATE
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is the current moment", () => {
    const currentDate = new Date(2023, 9, 26, 10, 0, 0, 0); // Exact MOCK_DATE
    const result = isPast(currentDate);
    expect(result).toBe(false);
  });

  it("accepts a timestamp as an argument", () => {
    const pastTimestamp = new Date(2023, 9, 26, 9, 59, 59, 999).getTime();
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a string as an argument", () => {
    const pastDateString = "2023-10-26T09:59:59.999Z"; // 1 ms before MOCK_DATE UTC
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });

  it("returns false for an invalid date", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false for an invalid string date", () => {
    const result = isPast("invalid date string");
    expect(result).toBe(false);
  });
});
