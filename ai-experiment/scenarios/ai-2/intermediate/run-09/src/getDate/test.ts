import { getDate } from "./index";

describe("getDate", () => {
  it("returns the day of month", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29);
    expect(getDate("2023-04-05")).toBe(5);
  });
});
