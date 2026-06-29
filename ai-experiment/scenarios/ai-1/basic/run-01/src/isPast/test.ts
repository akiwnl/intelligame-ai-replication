import { isPast } from "./index";

describe("isPast", () => {
  // Use a fixed reference date for "now" in tests to ensure determinism
  const fixedNow = new Date(2023, 5, 15, 12, 0, 0, 0); // June 15, 2023 12:00:00.000

  // Mock Date.now() or new Date() to use fixedNow
  const realDate = Date;

  beforeAll(() => {
    global.Date = class extends realDate {
      constructor(date?: Date | number | string) {
        if (date) {
          return new realDate(date);
        }
        return fixedNow; // Return our fixed 'now' date when called without arguments
      }
    } as any;
  });

  afterAll(() => {
    global.Date = realDate; // Restore original Date object
  });

  it("should return true if the date is in the past", () => {
    const pastDate = new Date(2023, 5, 15, 11, 59, 59, 999); // 1ms before fixedNow
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("should return true for a date far in the past", () => {
    const pastDate = new Date(2022, 0, 1); // Jan 1, 2022
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("should return false if the date is in the future", () => {
    const futureDate = new Date(2023, 5, 15, 12, 0, 0, 1); // 1ms after fixedNow
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("should return false for a date far in the future", () => {
    const futureDate = new Date(2025, 0, 1); // Jan 1, 2025
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("should return false if the date is exactly 'now'", () => {
    const nowishDate = new Date(fixedNow.getTime()); // Exactly fixedNow
    const result = isPast(nowishDate);
    expect(result).toBe(false);
  });

  it("should return false for an invalid date input", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const pastTimestamp = new Date(2023, 5, 15, 11, 59, 59, 999).getTime();
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a date string as input", () => {
    const pastDateString = "2023-06-15T11:59:59.999Z"; // 1ms before fixedNow (in UTC if Z is used)
    const result = isPast(pastDateString);
    expect(result).toBe(true);
  });
});
