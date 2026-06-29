import { isPast } from "./index";

describe("isPast", () => {
  // Mock Date.now() to ensure tests are robust to execution time
  const MOCKED_NOW = new Date(2014, 9, 6, 11, 0, 0, 0).getTime(); // Oct 6, 2014 11:00:00.000

  beforeAll(() => {
    jest.spyOn(Date, "now").mockImplementation(() => MOCKED_NOW);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  // Test Case 1: Example from JSDoc
  it("should return true if the date is in the past relative to the mocked 'now'", () => {
    const pastDate = new Date(2014, 6, 2); // July 2, 2014
    expect(isPast(pastDate)).toBe(true);
  });

  // Test Case 2: Date in the future
  it("should return false if the date is in the future relative to the mocked 'now'", () => {
    const futureDate = new Date(2014, 11, 31); // Dec 31, 2014
    expect(isPast(futureDate)).toBe(false);
  });

  // Test Case 3: Date is exactly 'now'
  it("should return false if the date is exactly 'now'", () => {
    const nowAsDate = new Date(MOCKED_NOW);
    expect(isPast(nowAsDate)).toBe(false);
  });

  // Test Case 4: Date is just after 'now' (milliseconds)
  it("should return false if the date is just one millisecond after 'now'", () => {
    const justAfterNow = new Date(MOCKED_NOW + 1);
    expect(isPast(justAfterNow)).toBe(false);
  });

  // Test Case 5: Date is just before 'now' (milliseconds)
  it("should return true if the date is just one millisecond before 'now'", () => {
    const justBeforeNow = new Date(MOCKED_NOW - 1);
    expect(isPast(justBeforeNow)).toBe(true);
  });

  // Test Case 6: Invalid date input
  it("should return false for an invalid date", () => {
    const invalidDate = new Date("invalid date");
    expect(isPast(invalidDate)).toBe(false);
  });

  // Test Case 7: Input as timestamp (past)
  it("should return true when timestamp is in the past", () => {
    const pastTimestamp = new Date(2013, 11, 31).getTime(); // Dec 31, 2013
    expect(isPast(pastTimestamp)).toBe(true);
  });

  // Test Case 8: Input as timestamp (future)
  it("should return false when timestamp is in the future", () => {
    const futureTimestamp = new Date(2015, 0, 1).getTime(); // Jan 1, 2015
    expect(isPast(futureTimestamp)).toBe(false);
  });

  // Test Case 9: Input as string (past)
  it("should return true when date string is in the past", () => {
    const pastDateString = "2014-10-06T10:59:59.999Z"; // 1ms before mocked now (in UTC)
    expect(isPast(pastDateString)).toBe(true);
  });

  // Test Case 10: Input as string (future)
  it("should return false when date string is in the future", () => {
    const futureDateString = "2014-10-06T11:00:00.001Z"; // 1ms after mocked now (in UTC)
    expect(isPast(futureDateString)).toBe(false);
  });

  // Test Case 11: Date in the future by a day
  it("should return false for a date one day after 'now'", () => {
    const nextDay = new Date(MOCKED_NOW);
    nextDay.setDate(nextDay.getDate() + 1);
    expect(isPast(nextDay)).toBe(false);
  });

  // Test Case 12: Date in the past by a day
  it("should return true for a date one day before 'now'", () => {
    const prevDay = new Date(MOCKED_NOW);
    prevDay.setDate(prevDay.getDate() - 1);
    expect(isPast(prevDay)).toBe(true);
  });
});
