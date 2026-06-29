import { getDate } from "./index";

describe("getDate", () => {
  it("should return the day of the month of the given date", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });
});
