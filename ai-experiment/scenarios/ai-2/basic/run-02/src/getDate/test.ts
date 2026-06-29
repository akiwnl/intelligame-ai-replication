import { getDate } from "./index";

describe("getDate", () => {
  it("returns the correct day of month", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29);
    expect(getDate(new Date(2021, 0, 1))).toBe(1);
  });
});
