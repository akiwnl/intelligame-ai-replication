import { isBefore } from "./index";

describe("isBefore", () => {
  test("true when earlier", () => {
    expect(isBefore(new Date(1987, 1, 11), new Date(1989, 6, 10))).toBe(true);
  });

  test("false when later", () => {
    expect(isBefore(new Date(1995, 0, 1), new Date(1990, 0, 1))).toBe(false);
  });
});
