import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11)); // Sep 11, 2014
  });

  it("handles negative amounts correctly", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result).toEqual(new Date(2014, 8, 1)); // Sep 1, 2014
  });

  it("handles zero amount", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 0);
    expect(result).toEqual(new Date(2014, 8, 1)); // Sep 1, 2014
  });

  it("handles month transitions", () => {
    const date = new Date(2014, 0, 25); // Jan 25, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 1, 4)); // Feb 4, 2014
  });

  it("handles year transitions", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2015, 0, 4)); // Jan 4, 2015
  });

  it("accepts a timestamp as a date", () => {
    const date = new Date(2014, 8, 1).getTime(); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11)); // Sep 11, 2014
  });

  it("accepts a string as a date", () => {
    const date = "2014-09-01T00:00:00.000Z";
    const result = addDays(date, 10);
    const expectedDate = new Date(date);
    expectedDate.setDate(expectedDate.getDate() + 10);
    expect(result).toEqual(expectedDate);
  });

  it("returns Invalid Date for an invalid date input", () => {
    const result = addDays(new Date(NaN), 5);
    expect(result.toString()).toBe("Invalid Date");
  });
});
