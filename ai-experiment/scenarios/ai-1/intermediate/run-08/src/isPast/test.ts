import { isPast } from "./index";

describe("isPast", () => {
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

  it("returns true if the given date is in the past", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    const result = isPast(pastDate);
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // December 31, 2014
    const result = isPast(futureDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is the current moment", () => {
    const currentDate = new Date(mockDate.getTime());
    const result = isPast(currentDate);
    expect(result).toBe(false);
  });

  it("returns false if the given date is the current moment even with milliseconds", () => {
    // Make sure it's strictly less
    const slightlyAfterCurrent = new Date(mockDate.getTime() + 1);
    const resultAfter = isPast(slightlyAfterCurrent);
    expect(resultAfter).toBe(false);

    const slightlyBeforeCurrent = new Date(mockDate.getTime() - 1);
    const resultBefore = isPast(slightlyBeforeCurrent);
    expect(resultBefore).toBe(true);
  });

  it("accepts a timestamp as the date argument", () => {
    const pastTimestamp = new Date(2014, 0, 1).getTime();
    const result = isPast(pastTimestamp);
    expect(result).toBe(true);
  });

  it("accepts a date string as the date argument", () => {
    const result = isPast("2014-09-01T00:00:00.000Z"); // September 1, 2014
    expect(result).toBe(true);
  });

  it("returns false if the date is invalid", () => {
    const result = isPast(new Date(NaN));
    expect(result).toBe(false);
  });

  it("returns false if the input date string is invalid", () => {
    const result = isPast("invalid date string");
    expect(result).toBe(false);
  });
});
