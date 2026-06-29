import { getDate } from "./index";

describe("getDate", () => {
  it("returns correct day of month", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29);
    expect(getDate(new Date(2020, 0, 1))).toBe(1);
  });

  it("works with timestamp input", () => {
    const ts = new Date(2021, 11, 31).getTime();
    expect(getDate(ts)).toBe(31);
  });
});
