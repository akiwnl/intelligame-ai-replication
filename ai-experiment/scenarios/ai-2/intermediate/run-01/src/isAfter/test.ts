import { isAfter } from "./index";

describe("isAfter", () => {
  test("true when later", () => {
    expect(isAfter(new Date(1990, 0, 1), new Date(1989, 11, 31))).toBe(true);
  });

  test("false when earlier", () => {
    expect(isAfter(new Date(2000, 5, 10), new Date(2000, 5, 11))).toBe(false);
  });

  test("false when equal", () => {
    const d = new Date(2022, 3, 15);
    expect(isAfter(d, d)).toBe(false);
  });
});
