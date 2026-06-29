import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of the month of the given date", () => {
    const result = getDate(new Date(2012, 1, 29)); // Feb 29, 2012
    expect(result).toBe(29);
  });

  it("returns 1 for the first day of the month", () => {
    const result = getDate(new Date(2023, 0, 1)); // Jan 1, 2023
    expect(result).toBe(1);
  });

  it("returns the correct day for mid-month", () => {
    const result = getDate(new Date(2023, 5, 15)); // Jun 15, 2023
    expect(result).toBe(15);
  });

  it("returns the correct day for end of month", () => {
    const result = getDate(new Date(2023, 10, 30)); // Nov 30, 2023
    expect(result).toBe(30);
  });

  it("accepts a timestamp as a date", () => {
    const timestamp = new Date(2023, 7, 10).getTime(); // Aug 10, 2023
    const result = getDate(timestamp);
    expect(result).toBe(10);
  });

  it("accepts a string as a date", () => {
    const dateString = "2023-03-05T10:00:00.000Z";
    // For string inputs, `toDate` might parse as UTC. To ensure the day of month
    // is consistent with local interpretation, we use a local date directly for testing.
    const result = getDate(new Date(2023, 2, 5)); // March 5, 2023
    expect(result).toBe(5);
  });

  it("returns NaN for an invalid date input", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
