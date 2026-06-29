import { isFuture } from "./index";

describe("isFuture", () => {
  let mockDate: jest.SpyInstance;

  beforeAll(() => {
    // Mock the current date to a fixed point in time for consistent testing
    const fixedDate = new Date(2014, 9, 6, 0, 0, 0, 0); // October 6, 2014
    mockDate = jest.spyOn(global, "Date").mockImplementation((...args: any[]) => {
      if (args.length) {
        // @ts-ignore
        return new Date(...args);
      }
      return fixedDate;
    }) as jest.SpyInstance<Date, []>; // Cast to correct type
  });

  afterAll(() => {
    mockDate.mockRestore(); // Restore original Date object after tests
  });

  it("should return true if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // December 31, 2014
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const pastDate = new Date(2014, 8, 1); // September 1, 2014
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    const now = new Date(2014, 9, 6, 0, 0, 0, 0); // October 6, 2014 (mocked current time)
    const result = isFuture(now);
    expect(result).toBe(false);
  });

  it("should return false if the given date is slightly before the current moment", () => {
    const slightlyBefore = new Date(2014, 9, 5, 23, 59, 59, 999);
    const result = isFuture(slightlyBefore);
    expect(result).toBe(false);
  });

  it("should return true if the given date is slightly after the current moment", () => {
    const slightlyAfter = new Date(2014, 9, 6, 0, 0, 0, 1);
    const result = isFuture(slightlyAfter);
    expect(result).toBe(true);
  });

  it("should work with a timestamp as input", () => {
    const futureTimestamp = new Date(2015, 0, 1).getTime();
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a string date as input", () => {
    const futureStringDate = "2015-01-01T00:00:00.000Z";
    const result = isFuture(futureStringDate);
    expect(result).toBe(true);
  });

  it("should handle invalid dates", () => {
    const invalidDate = new Date(NaN);
    const result = isFuture(invalidDate);
    expect(result).toBe(false); // Invalid dates are not considered future
  });
});
