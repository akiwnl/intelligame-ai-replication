import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(1990, 0, 1), new Date(1989, 11, 31))).toBe(true);
  });

  it("detects not later date", () => {
    expect(isAfter(new Date(1980, 5, 10), new Date(1990, 5, 10))).toBe(false);
  });
});
