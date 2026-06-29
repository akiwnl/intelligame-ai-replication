import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("returns true for Saturday", () => {
    expect(isWeekend(new Date(2021, 0, 2))).toBe(true); // Jan 2 2021 = Saturday
  });
  it("returns true for Sunday", () => {
    expect(isWeekend(new Date(2021, 0, 3))).toBe(true); // Sunday
  });
  it("returns false for a weekday", () => {
    expect(isWeekend(new Date(2021, 0, 4))).toBe(false); // Monday
  });
});
