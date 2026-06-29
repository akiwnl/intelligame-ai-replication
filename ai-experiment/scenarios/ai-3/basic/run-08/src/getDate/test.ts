import { getDate } from "./index";

describe("getDate", () => {
  it("gets the day of the month", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const result = getDate(date);
    expect(result).toBeNaN();
  });
});
