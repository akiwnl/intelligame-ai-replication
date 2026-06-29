import { isBefore } from "./index";

describe("isBefore", () => {
  test("returns true when first date is earlier", () => {
    expect(isBefore(new Date(1988, 5, 10), new Date(1990, 5, 10))).toBe(true);
  });

  test("returns false when first date is later", () => {
    expect(isBefore(new Date(1995, 0, 1), new Date(1990, 0, 1))).toBe(false);
  });
});
