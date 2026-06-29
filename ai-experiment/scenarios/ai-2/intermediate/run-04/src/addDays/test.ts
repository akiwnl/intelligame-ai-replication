import { addDays } from "./index";

describe("addDays", () => {
  test("adds positive amount", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  test("adds negative amount", () => {
    const result = addDays(new Date(2014, 8, 10), -5);
    expect(result).toEqual(new Date(2014, 8, 5));
  });

  test("accepts timestamp", () => {
    const ts = new Date(2020, 0, 1).getTime();
    const result = addDays(ts, 1);
    expect(result).toEqual(new Date(2020, 0, 2));
  });
});
