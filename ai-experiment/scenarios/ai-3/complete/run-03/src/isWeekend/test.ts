import { isWeekend } from "./index";

describe("isWeekend", () => {
  it("checks if a date falls on a weekend", () => {
    const date = new Date(2014, 9, 5);
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const date = "2014-10-05";
    const result = isWeekend(date);
    expect(result).toBe(true);
  });

  it("handles timestamp input", () => {
    const date = 1412524800000;
    const result = isWeekend(date);
    expect(result).toBe(true);
  });
});
