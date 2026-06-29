import { addDays } from "./index";

describe("addDays", () => {
  test("adds positive days", () => {
    const result = addDays(new Date(2014, 8, 1), 10);
    expect(result).toEqual(new Date(2014, 8, 11));
  });

  test("adds negative days", () => {
    const result = addDays(new Date(2020, 0, 15), -5);
    expect(result).toEqual(new Date(2020, 0, 10));
  });

  test("accepts timestamp", () => {
    const ts = new Date(2021, 5, 1).getTime();
    const result = addDays(ts, 1);
    expect(result).toEqual(new Date(2021, 5, 2));
  });
});
