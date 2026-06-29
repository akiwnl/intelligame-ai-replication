import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1, 0, 0, 0, 0); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11, 0, 0, 0, 0)); // Sep 11, 2014
  });

  it("should handle negative amounts to subtract days", () => {
    const date = new Date(2014, 8, 11, 0, 0, 0, 0); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result).toEqual(new Date(2014, 8, 1, 0, 0, 0, 0)); // Sep 1, 2014
  });

  it("should handle zero amount, returning a cloned date", () => {
    const date = new Date(2014, 8, 1, 0, 0, 0, 0);
    const result = addDays(date, 0);
    expect(result).toEqual(date);
    expect(result).not.toBe(date); // Should be a new instance
  });

  it("should handle crossing month boundaries", () => {
    const date = new Date(2014, 0, 30, 0, 0, 0, 0); // Jan 30, 2014
    const result = addDays(date, 5);
    expect(result).toEqual(new Date(2014, 1, 4, 0, 0, 0, 0)); // Feb 4, 2014
  });

  it("should handle crossing year boundaries", () => {
    const date = new Date(2014, 11, 25, 0, 0, 0, 0); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2015, 0, 4, 0, 0, 0, 0)); // Jan 4, 2015
  });

  it("should return an invalid date if the initial date is invalid", () => {
    const result = addDays(new Date(NaN), 5);
    expect(result.toString()).toBe("Invalid Date");
  });

  it("should accept a timestamp as an argument", () => {
    const date = new Date(2014, 8, 1, 0, 0, 0, 0).getTime(); // Sep 1, 2014 timestamp
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11, 0, 0, 0, 0)); // Sep 11, 2014
  });

  it("should accept a string as an argument", () => {
    const dateString = "2014-09-01T12:00:00.000Z"; // Sep 1, 2014 (UTC)
    const result = addDays(dateString, 10);
    const expectedDate = new Date("2014-09-11T12:00:00.000Z"); // Sep 11, 2014 (UTC)
    expect(result.toISOString()).toEqual(expectedDate.toISOString());
  });
});
