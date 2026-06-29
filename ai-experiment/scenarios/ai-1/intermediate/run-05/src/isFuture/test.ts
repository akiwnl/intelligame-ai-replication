import { isFuture } from "./index";

describe("isFuture", () => {
  let mockDateNow: jest.SpyInstance;
  const fixedNow = new Date(2014, 9, 6, 10, 0, 0, 0).getTime(); // Oct 6, 2014 10:00:00.000

  beforeAll(() => {
    mockDateNow = jest.spyOn(Date, 'now').mockReturnValue(fixedNow);
  });

  afterAll(() => {
    mockDateNow.mockRestore();
  });

  it("should return true if the given date is in the future", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    const result = isFuture(futureDate);
    expect(result).toBe(true);
  });

  it("should return false if the given date is in the past", () => {
    const pastDate = new Date(2014, 8, 1); // Sep 1, 2014
    const result = isFuture(pastDate);
    expect(result).toBe(false);
  });

  it("should return false if the given date is exactly now", () => {
    const now = new Date(fixedNow);
    const result = isFuture(now);
    expect(result).toBe(false);
  });

  it("should return true if the given date is slightly in the future (milliseconds)", () => {
    const slightlyFuture = new Date(fixedNow + 1);
    const result = isFuture(slightlyFuture);
    expect(result).toBe(true);
  });

  it("should return false if the given date is slightly in the past (milliseconds)", () => {
    const slightlyPast = new Date(fixedNow - 1);
    const result = isFuture(slightlyPast);
    expect(result).toBe(false);
  });

  it("should handle date as a timestamp", () => {
    const futureTimestamp = new Date(2015, 0, 1).getTime(); // Jan 1, 2015
    const result = isFuture(futureTimestamp);
    expect(result).toBe(true);
  });

  it("should handle date as a string", () => {
    const futureDateString = "2015-01-01T00:00:00.000Z";
    const result = isFuture(futureDateString);
    expect(result).toBe(true);
  });

  it("should return false for an invalid date input", () => {
    const result = isFuture(new Date(NaN));
    expect(result).toBe(false);
  });
});
