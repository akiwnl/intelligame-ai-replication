import { isPast } from "./index";

describe("isPast", () => {
  // Use fake timers to control `new Date()` for robust testing
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  // Test case 1: Date in the past
  it("should return true if the date is in the past", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0); // Fixed "now"
    jest.setSystemTime(now);

    const pastDate = new Date(2024, 0, 10, 11, 59, 59, 999); // 1ms before "now"
    expect(isPast(pastDate)).toBe(true);
  });

  // Test case 2: Date in the future
  it("should return false if the date is in the future", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const futureDate = new Date(2024, 0, 10, 12, 0, 0, 1); // 1ms after "now"
    expect(isPast(futureDate)).toBe(false);
  });

  // Test case 3: Date is exactly "now"
  it("should return false if the date is exactly 'now'", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const exactDate = new Date(2024, 0, 10, 12, 0, 0, 0);
    expect(isPast(exactDate)).toBe(false);
  });

  // Test case 4: Example from JSDoc
  it("should return true for the example case relative to a set 'now'", () => {
    const now = new Date(2014, 9, 6); // October 6, 2014
    jest.setSystemTime(now);

    const exampleDate = new Date(2014, 6, 2); // July 2, 2014
    expect(isPast(exampleDate)).toBe(true);
  });

  // Test case 5: Invalid date input
  it("should return false if the input date is invalid", () => {
    const now = new Date(2024, 0, 10);
    jest.setSystemTime(now);

    const invalidDate = new Date("invalid date");
    expect(isPast(invalidDate)).toBe(false);
  });

  // Test case 6: Input as timestamp
  it("should work with a timestamp as input", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastTimestamp = new Date(2024, 0, 10, 11, 59, 59, 999).getTime();
    expect(isPast(pastTimestamp)).toBe(true);
  });

  // Test case 7: Input as date string
  it("should work with a date string as input", () => {
    const now = new Date(2024, 0, 10, 12, 0, 0, 0);
    jest.setSystemTime(now);

    const pastDateString = "2024-01-10T11:59:59.999Z"; // 1ms before now UTC
    expect(isPast(pastDateString)).toBe(true);
  });

  // Test case 8: Date in the distant future
  it("should return false for a date far in the future", () => {
    const now = new Date(2024, 0, 1);
    jest.setSystemTime(now);

    const distantFuture = new Date(2050, 0, 1);
    expect(isPast(distantFuture)).toBe(false);
  });

  // Test case 9: Date in the distant past
  it("should return true for a date far in the past", () => {
    const now = new Date(2024, 0, 1);
    jest.setSystemTime(now);

    const distantPast = new Date(1990, 0, 1);
    expect(isPast(distantPast)).toBe(true);
  });
});
