import { getDate } from "./index";

describe("getDate", () => {
  it("gets the day of the month", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });

  it("handles non-date input", () => {
    const result = getDate("2012-02-29");
    expect(result).toBe(29);
  });
});
