import { isPast } from "./index";

describe("isPast", () => {
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
    }) as jest.SpyInstance<Date, []>;
  });

  afterAll(() => {
    mockDate.mockRestore(); // Restore original Date object after tests
  });

  it("should return true if the given date is in the past", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // December 31, 2014
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is the current moment", () => {
    const now = new Date(2014, 9, 6, 0, 0, 0, 0); // October 6, 2014 (mocked current time)
    const result = isPast(now);
    expect(result).toBe(false);
  });

  it("should return true if the given date is slightly before the current moment", () => {
    const slightlyBefore = new Date(2014, 9, 5, 23, 59, 59, 999);
    const result = isPast(slightlyBefore);
    expect(result).toBe(true);
  });

  it("should return false if the given date is slightly after the current moment", () => {
    const slightlyAfter = new Date(2014, 9, 6, 0, 0, 0, 1);
    const result = isPast(slightlyAfter);
    expect(result).toBe(false);
  });

  it("should work with a timestamp as input", () => {
    const pastTimestamp = new Date(2013, 11, 31).getTime();
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("should work with a string date as input", () => {
    const pastStringDate = "2013-12-31T23:59:59.999Z";
    const result = isPast(pastStringDate);
    expect(result).toBe(true);
  });

  it("should handle invalid dates", () => {
    const invalidDate = new Date(NaN);
    const result = isPast(invalidDate);
    expect(result).toBe(false); // Invalid dates are not considered past
  });
});
