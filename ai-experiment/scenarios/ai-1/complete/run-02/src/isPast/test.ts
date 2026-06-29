import { isPast } from "./index";

describe("isPast", () => {
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

  it("returns true if the date is in the past relative to the fixed reference", () => {
    const pastDate = new Date(2024, 0, 15, 11, 59, 59, 999); // 1ms before reference
    expect(isPast(pastDate)).toBe(true);

    const muchPastDate = new Date(2023, 11, 31);
    expect(isPast(muchPastDate)).toBe(true);
  });

  it("returns false if the date is in the future relative to the fixed reference", () => {
    const futureDate = new Date(2024, 0, 15, 12, 0, 0, 1); // 1ms after reference
    expect(isPast(futureDate)).toBe(false);

    const muchFutureDate = new Date(2025, 0, 1);
    expect(isPast(muchFutureDate)).toBe(false);
  });

  it("returns false if the date is exactly the fixed reference date", () => {
    expect(isPast(FIXED_REFERENCE_DATE)).toBe(false);
  });

  it("returns false for an invalid date", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("accepts a timestamp as date argument", () => {
    const pastTimestamp = new Date(2024, 0, 15, 11, 59, 59, 999).getTime();
    expect(isPast(pastTimestamp)).toBe(true);

    const futureTimestamp = new Date(2024, 0, 15, 12, 0, 0, 1).getTime();
    expect(isPast(futureTimestamp)).toBe(false);
  });

  it("accepts a date string as date argument", () => {
    const fixedRefLocal = FIXED_REFERENCE_DATE.getTime();
    const futureStringDate = new Date(fixedRefLocal + 1);
    const pastStringDate = new Date(fixedRefLocal - 1);

    expect(isPast(pastStringDate.toISOString())).toBe(true);
    expect(isPast(futureStringDate.toISOString())).toBe(false);

    const futureSimpleDateString = "2024-01-16";
    expect(isPast(futureSimpleDateString)).toBe(false);

    const pastSimpleDateString = "2024-01-14";
    expect(isPast(pastSimpleDateString)).toBe(true);
  });
});
