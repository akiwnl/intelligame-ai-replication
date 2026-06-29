import { addDays } from "./index";

describe("addDays", () => {
  test("adds positive days within same month", () => {
    const result = addDays(new Date(2021, 0, 10), 5);
    expect(result).toEqual(new Date(2021, 0, 15));
  });

  test("adds days crossing month boundary", () => {
    const result = addDays(new Date(2021, 0, 31), 1);
    expect(result).toEqual(new Date(2021, 1, 1));
  });

  test("adds days crossing year boundary", () => {
    const result = addDays(new Date(2020, 11, 31), 1);
    expect(result).toEqual(new Date(2021, 0, 1));
  });

  test("adds negative days", () => {
    const result = addDays(new Date(2021, 2, 1), -1);
    expect(result).toEqual(new Date(2021, 1, 28));
  });

  test("adds days over a leap day", () => {
    const result = addDays(new Date(2020, 1, 28), 2);
    expect(result).toEqual(new Date(2020, 2, 1));
  });

  test("preserves custom date constructor", () => {
    class MyDate extends Date {}
    const result = addDays(new MyDate(2021, 0, 1), 1);
    expect(result instanceof MyDate).toBe(true);
    expect(result).toEqual(new MyDate(2021, 0, 2));
  });
});
