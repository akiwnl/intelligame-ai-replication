import { addDays } from "./index";

describe("addDays", () => {
  it("should add the specified number of days to the given date", () => {
    const date = new Date(2014, 8, 1); // Sep 1, 2014
    const expectedDate = new Date(2014, 8, 11); // Sep 11, 2014
    expect(addDays(date, 10)).toEqual(expectedDate);
  });

  it("should handle negative amounts", () => {
    const date = new Date(2014, 8, 11); // Sep 11, 2014
    const expectedDate = new Date(2014, 8, 1); // Sep 1, 2014
    expect(addDays(date, -10)).toEqual(expectedDate);
  });

  it("should handle crossing month boundaries", () => {
    const date = new Date(2014, 0, 25); // Jan 25, 2014
    const expectedDate = new Date(2014, 1, 4); // Feb 4, 2014
    expect(addDays(date, 10)).toEqual(expectedDate);
  });

  it("should handle crossing year boundaries", () => {
    const date = new Date(2014, 11, 25); // Dec 25, 2014
    const expectedDate = new Date(2015, 0, 4); // Jan 4, 2015
    expect(addDays(date, 10)).toEqual(expectedDate);
  });

  it("should return an Invalid Date if the input date is invalid", () => {
    const invalidDate = new Date(NaN);
    expect(addDays(invalidDate, 10).toString()).toEqual("Invalid Date");
  });

  it("should accept a timestamp as date argument", () => {
    const date = new Date(2014, 8, 1).getTime(); // Sep 1, 2014 as timestamp
    const expectedDate = new Date(2014, 8, 11); // Sep 11, 2014
    expect(addDays(date, 10)).toEqual(expectedDate);
  });

  it("should accept a date string as date argument", () => {
    const dateString = "2014-09-01"; // Sep 1, 2014 (local time)
    const expectedDate = new Date(2014, 8, 11); // Sep 11, 2014 (local time)
    const result = addDays(dateString, 10);
    expect(result.getFullYear()).toEqual(expectedDate.getFullYear());
    expect(result.getMonth()).toEqual(expectedDate.getMonth());
    expect(result.getDate()).toEqual(expectedDate.getDate());
  });
});
