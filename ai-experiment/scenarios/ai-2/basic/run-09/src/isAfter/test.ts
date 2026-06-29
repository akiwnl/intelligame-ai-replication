import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))).toBe(true);
  });

  it("detects earlier date", () => {
    expect(isAfter(new Date(1985, 0, 1), new Date(1990, 0, 1))).toBe(false);
  });
});
