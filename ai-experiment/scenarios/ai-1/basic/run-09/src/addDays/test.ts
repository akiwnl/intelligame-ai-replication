import { addDays } from "./index";

describe("addDays", () => {
  it("adds the given number of days to the date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 10);
    expect(result).toEqual(new Date(2014, 8, 11)); // Sep 11, 2014
  });

  it("handles negative amount", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const result = addDays(date, -10);
    expect(result).toEqual(new Date(2014, 8, 1)); // Sep 1, 2014
  });

  it("handles zero amount", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const result = addDays(date, 0);
    expect(result).toEqual(new Date(2014, 8, 1)); // Sep 1, 2014
  });

  it("handles large amounts", () => {
    const date = new Date(2014, 0, 1); // Jan 1, 2014
    const result = addDays(date, 365);
    expect(result).toEqual(new Date(2015, 0, 1)); // Jan 1, 2015
  });

  it("handles date arguments", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("handles timestamp arguments", () => {
    const result = addDays(new Date(2014, 8, 1).getTime(), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  it("handles string arguments", () => {
    const result = addDays("2014-09-01T00:00:00.000Z", 10);
    // Note: When parsing ISO strings, Date constructor often interprets them as UTC.
    // The comparison should account for timezone differences or compare UTC components.
    // For simplicity, we'll check UTC components here.
    expect(result.getUTCFullYear()).toBe(2014);
    expect(result.getUTCMonth()).toBe(8); // September
    expect(result.getUTCDate()).toBe(11);
  });

  it("returns Invalid Date for Invalid Date argument", () => {
    const result = addDays(new Date(NaN), 10);
    expect(result.toString()).toBe("Invalid Date");
  });

  it("returns Invalid Date for invalid string argument", () => {
    const result = addDays("invalid date", 10);
    expect(result.toString()).toBe("Invalid Date");
  });
});
