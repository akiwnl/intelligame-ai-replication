import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("checks if a date is on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const result = isWeekend("2014-10-05");
    expect(result).toBe(true);
  });
});
