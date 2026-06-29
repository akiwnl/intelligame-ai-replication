import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("should get the number of days in a month of the given date", () => {
    const date = new Date(2000, 1);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("should handle non-date inputs", () => {
    const date = "2000-02-01";
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });
});
