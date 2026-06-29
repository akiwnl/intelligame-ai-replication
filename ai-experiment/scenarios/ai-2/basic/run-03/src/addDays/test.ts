import { addDays } from "./index";

describe("addDays", () => {
  test("adds positive amount", () => {
    const result = addDays(new Date(2020, 0, 1), 5);
    expect(result).toEqual(new Date(2020, 0, 6));
  });

  test("adds negative amount", () => {
    const result = addDays(new Date(2020, 0, 10), -3);
    expect(result).toEqual(new Date(2020, 0, 7));
  });
});
