import { addDays } from "./index";

describe("addDays", () => {
  it("adds the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(11); // 1 + 10 = 11
  });

  it("handles negative amounts", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8); // September
    expect(result.getDate()).toBe(1); // 11 - 10 = 1
  });

  it("handles zero amount", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  it("handles month rollover", () => {
    const date = new Date(2014, 0, 25); // Jan 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(4); // Jan 25 + 10 days = Feb 4
  });

  it("handles year rollover", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2015);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(4); // Dec 25 + 10 days = Jan 4
  });

  it("accepts a timestamp", () => {
    const date = new Date(2014, 8, 1).getTime(); // Sep 1, 2014 as timestamp
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it("accepts a date string", () => {
    const date = "2014-09-01T00:00:00.000Z"; // Sep 1, 2014 as string
    const result = addDays(date, 10);
    expect(result.getFullYear()).toBe(2014);
    expect(result.getMonth()).toBe(8);
    expect(result.getDate()).toBe(11);
  });

  it("returns Invalid Date for an invalid date", () => {
    const result = addDays(new Date(NaN), 10);
    expect(result.toString()).toBe("Invalid Date");
  });

  it("returns Invalid Date for an invalid date string", () => {
    const result = addDays("invalid date", 10);
    expect(result.toString()).toBe("Invalid Date");
  });
});
