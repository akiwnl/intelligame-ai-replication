import { isEqual } from "./index";

describe("isEqual", () => {
  it("returns true for identical timestamps", () => {
    const d = new Date(2021, 3, 5, 12, 0, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  it("returns false for different timestamps", () => {
    expect(isEqual(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(false);
  });
});
