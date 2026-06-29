import { getDay } from "./index";

describe("getDay", () => {
  it("should return the day of the week for the given date (0 for Sunday)", () => {
    expect(getDay(new Date(2012, 1, 29))).toBe(3); // Feb 29, 2012 was a Wednesday (0=Sun, 1=Mon, 2=Tue, 3=Wed)
    expect(getDay(new Date(2023, 0, 1))).toBe(0); // Jan 1, 2023 was a Sunday
    expect(getDay(new Date(2023, 0, 2))).toBe(1); // Jan 2, 2023 was a Monday
    expect(getDay(new Date(2023, 0, 7))).toBe(6); // Jan 7, 2023 was a Saturday
    expect(getDay(new Date(2023, 0, 4))).toBe(3); // Jan 4, 2023 was a Wednesday
  });

  it("should return NaN for an invalid date", () => {
    expect(getDay(new Date(NaN))).toBeNaN();
  });

  it("should accept a timestamp as an argument", () => {
    const date = new Date(2023, 4, 20).getTime(); // May 20, 2023 was a Saturday (6)
    expect(getDay(date)).toBe(6);
  });

  it("should accept a string as an argument", () => {
    const date = "2023-07-25T14:00:00.000Z"; // July 25, 2023 (UTC) was a Tuesday (2)
    expect(getDay(date)).toBe(2);
  });
});
