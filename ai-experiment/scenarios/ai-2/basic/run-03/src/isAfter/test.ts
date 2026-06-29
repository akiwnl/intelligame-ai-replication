import { isAfter } from "./index";

describe("isAfter", () => {
  test("returns true when first date is later", () => {
    expect(isAfter(new Date(1990, 0, 1), new Date(1989, 11, 31))).toBe(true);
  });

  test("returns false when first date is earlier", () => {
    expect(isAfter(new Date(1988, 5, 10), new Date(1990, 5, 10))).toBe(false);
  });
});
