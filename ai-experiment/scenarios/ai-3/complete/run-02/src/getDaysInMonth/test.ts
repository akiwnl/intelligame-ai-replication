import { getDaysInMonth } from "./index";

describe("getDaysInMonth", () => {
  it("gets the number of days in a month of the given date", () => {
    const date = new Date(2000, 1);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const result = getDaysInMonth(date);
    expect(result).toBeNaN();
  });
});
