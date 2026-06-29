import { isFuture } from "./index";

describe("isFuture", () => {
  let mockDate: Date;
  let dateSpy: jest.SpyInstance;

  beforeAll(() => {
    // Mock system time to a fixed point for consistent testing
    mockDate = new Date(2014, 9, 6, 10, 0, 0, 0); // October 6, 2014 10:00:00
    dateSpy = jest.spyOn(global, 'Date').mockImplementation((...args) => {
      if (args.length) {
        // If Date is called with arguments, pass them through to the original Date constructor
        return new (jest.requireActual('date-fns/toDate'))(...args);
      }
      // If Date is called without arguments (i.e., new Date()), return our mock date
      return mockDate;
    });
  });

  afterAll(() => {
    // Restore original Date object after all tests are done
    dateSpy.mockRestore();
  });

  it("returns true if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // December 31, 2014
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const pastDate = new Date(2014, 8, 1); // September 1, 2014
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is the current moment", () => {
    const currentDate = new Date(mockDate.getTime());
    const result = isFuture(currentDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is the current moment even with milliseconds", () => {
    // Make sure it's strictly greater
    const slightlyBeforeCurrent = new Date(mockDate.getTime() - 1);
    const resultBefore = isFuture(slightlyBeforeCurrent);
    expect(resultBefore).toBe(false);

    const slightlyAfterCurrent = new Date(mockDate.getTime() + 1);
    const resultAfter = isFuture(slightlyAfterCurrent);
    expect(resultAfter).toBe(true);
  });

  it("accepts a timestamp as the date argument", () => {
    const futureTimestamp = new Date(2015, 0, 1).getTime();
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a date string as the date argument", () => {
    const result = isFuture("2014-11-01T00:00:00.000Z"); // November 1, 2014
    expect(result).toBe(true);
  });

  it("returns false if the date is invalid", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the input date string is invalid", () => {
    const result = isFuture("invalid date string");
    expect(result).toBe(false);
  });
});
