import { getDate } from "./index";

describe("getDate", () => {
  test("returns correct day of month", () => {
    expect(getDate(new Date(2012, 1, 29))).toBe(29);
    expect(getDate(new Date(2020, 0, 1))).toBe(1);
  });

  test("accepts timestamp", () => {
    const ts = new Date(2021, 3, 15).getTime();
    expect(getDate(ts)).toBe(15);
  });
});
