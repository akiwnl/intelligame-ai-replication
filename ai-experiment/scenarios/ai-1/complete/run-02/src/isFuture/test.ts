import { isFuture } from "./index";

describe("isFuture", () => {
  // Use a fixed reference date for tests to ensure robustness
  const FIXED_REFERENCE_DATE = new Date(2024, 0, 15, 12, 0, 0, 0); // Jan 15th, 2024, 12:00:00.000

  // Mock Date.now() for consistent test results
  const mockDateNow = jest.spyOn(Date, "now");

  beforeEach(() => {
    mockDateNow.mockReturnValue(FIXED_REFERENCE_DATE.getTime());
  });

  afterEach(() => {
    mockDateNow.mockRestore();
  });

  it("returns true if the date is in the future relative to the fixed reference", () => {
    const futureDate = new Date(2024, 0, 15, 12, 0, 0, 1); // 1ms after reference
    expect(isFuture(futureDate)).toBe(true);

    const muchFutureDate = new Date(2025, 0, 1);
    expect(isFuture(muchFutureDate)).toBe(true);
  });

  it("returns false if the date is in the past relative to the fixed reference", () => {
    const pastDate = new Date(2024, 0, 15, 11, 59, 59, 999); // 1ms before reference
    expect(isFuture(pastDate)).toBe(false);

    const muchPastDate = new Date(2023, 11, 31);
    expect(isFuture(muchPastDate)).toBe(false);
  });

  it("returns false if the date is exactly the fixed reference date", () => {
    expect(isFuture(FIXED_REFERENCE_DATE)).toBe(false);
  });

  it("returns false for an invalid date", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("accepts a timestamp as date argument", () => {
    const futureTimestamp = new Date(2024, 0, 15, 12, 0, 0, 1).getTime();
    expect(isFuture(futureTimestamp)).toBe(true);

    const pastTimestamp = new Date(2024, 0, 15, 11, 59, 59, 999).getTime();
    expect(isFuture(pastTimestamp)).toBe(false);
  });

  it("accepts a date string as date argument", () => {
    const fixedRefLocal = FIXED_REFERENCE_DATE.getTime();
    const futureStringDate = new Date(fixedRefLocal + 1); // A date 1ms after the reference
    const pastStringDate = new Date(fixedRefLocal - 1); // A date 1ms before the reference

    expect(isFuture(futureStringDate.toISOString())).toBe(true);
    expect(isFuture(pastStringDate.toISOString())).toBe(false);

    // Test with a simpler string that gets parsed as local
    const futureSimpleDateString = "2024-01-16"; // Jan 16th, 2024 (after fixed ref)
    expect(isFuture(futureSimpleDateString)).toBe(true);

    const pastSimpleDateString = "2024-01-14"; // Jan 14th, 2024 (before fixed ref)
    expect(isFuture(pastSimpleDateString)).toBe(false);
  });
});
