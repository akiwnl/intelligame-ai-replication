import { isBefore } from "./index";

describe("isBefore", () => {
  test("true when earlier", () => {
    expect(isBefore(new Date(1985, 3, 20), new Date(1990, 0, 1))).toBe(true);
  });

  test("false when later", () => {
    expect(isBefore(new Date(2020, 11, 31), new Date(2020, 0, 1))).toBe(false);
  });

  test("false when equal", () => {
    const d = new Date(2021, 5, 5);
    expect(isBefore(d, d)).toBe(false);
  });
});
