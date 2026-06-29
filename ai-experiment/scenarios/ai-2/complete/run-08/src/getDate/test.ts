import { getDate } from "./index";

describe("getDate", () => {
  test("regular date", () => {
    expect(getDate(new Date(2021, 5, 15))).toBe(15);
  });

  test("leap day", () => {
    expect(getDate(new Date(2020, 1, 29))).toBe(29);
  });

  test("first day of month", () => {
    expect(getDate(new Date(2021, 0, 1))).toBe(1);
  });

  test("invalid date returns NaN", () => {
    const invalid = new Date("invalid");
    expect(getDate(invalid)).toBeNaN();
  });
});
