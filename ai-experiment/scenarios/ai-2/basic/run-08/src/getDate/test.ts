import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day of month", () => {
    expect(getDate(new Date(2021, 3, 15))).toBe(15);
  });

  it("works with timestamp", () => {
    const ts = new Date(1999, 11, 31).getTime();
    expect(getDate(ts)).toBe(31);
  });
});
