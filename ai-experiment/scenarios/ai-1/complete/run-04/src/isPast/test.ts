import { isPast } from "./index";

describe("isPast", () => {
  // Define a fixed reference date for tests to ensure robustness
  const referenceDate = new Date(2023, 9, 26, 12, 0, 0, 0); // Oct 26, 2023 12:00:00.000

  // Mock Date.now and Date constructor to control "current" time
  const mockDate = (d: Date) => {
    const mockNow = d.getTime();
    const originalDate = Date;
    // @ts-ignore
    global.Date = class extends originalDate {
      constructor(dateArg?: any) {
        if (dateArg) {
          return new originalDate(dateArg);
        }
        return new originalDate(mockNow);
      }
    };
    global.Date.now = jest.fn(() => mockNow);
  };

  afterEach(() => {
    // Restore original Date object
    global.Date = originalDate;
    jest.restoreAllMocks();
  });

  const originalDate = Date; // Store original Date constructor

  // Test case 1: Date is clearly in the past
  it("should return true if the date is clearly in the past", () => {
    mockDate(referenceDate);
    const pastDate = new Date(2023, 9, 26, 11, 59, 59, 999); // 1ms before reference
    expect(isPast(pastDate)).toBe(true);
  });

  // Test case 2: Date is clearly in the future
  it("should return false if the date is clearly in the future", () => {
    mockDate(referenceDate);
    const futureDate = new Date(2023, 9, 26, 12, 0, 0, 1); // 1ms after reference
    expect(isPast(futureDate)).toBe(false);
  });

  // Test case 3: Date is exactly "now"
  it("should return false if the date is exactly 'now'", () => {
    mockDate(referenceDate);
    const now = new Date(referenceDate.getTime());
    expect(isPast(now)).toBe(false);
  });

  // Test case 4: Example case (using a fixed 'today')
  it("should return true for the example case with a fixed 'today'", () => {
    const today = new Date(2014, 9, 6); // Oct 6, 2014
    mockDate(today);
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    expect(isPast(pastDate)).toBe(true);
  });

  // Test case 5: Input as a timestamp
  it("should work with a timestamp as input", () => {
    mockDate(referenceDate);
    const pastTimestamp = new Date(2023, 9, 26, 11, 59, 59, 999).getTime();
    expect(isPast(pastTimestamp)).toBe(true);
  });

  // Test case 6: Input as a date string
  it("should work with a date string as input", () => {
    mockDate(referenceDate);
    const pastDateString = "2023-10-26T11:59:59.999Z"; // 1ms before reference (UTC)
    // Adjusting for local timezone difference if 'referenceDate' is local
    // For robustness, compare getTime() directly after toDate conversion
    const dateToTest = new Date(pastDateString);
    const nowTime = referenceDate.getTime();
    if (dateToTest.getTime() < nowTime) {
      expect(isPast(pastDateString)).toBe(true);
    } else {
      expect(isPast(pastDateString)).toBe(false);
    }
  });

  // Test case 7: Invalid date input
  it("should return false if the input date is invalid", () => {
    mockDate(referenceDate);
    const invalidDate = new Date("not a date");
    expect(isPast(invalidDate)).toBe(false);
  });

  // Test case 8: Invalid date string input
  it("should return false if the date string is invalid", () => {
    mockDate(referenceDate);
    expect(isPast("invalid string")).toBe(false);
  });

  // Test case 9: Date is slightly in the past (boundary)
  it("should return true for a date 1 millisecond in the past", () => {
    mockDate(referenceDate);
    const slightlyPast = new Date(referenceDate.getTime() - 1);
    expect(isPast(slightlyPast)).toBe(true);
  });

  // Test case 10: Date is slightly in the future (boundary)
  it("should return false for a date 1 millisecond in the future", () => {
    mockDate(referenceDate);
    const slightlyFuture = new Date(referenceDate.getTime() + 1);
    expect(isPast(slightlyFuture)).toBe(false);
  });
});
