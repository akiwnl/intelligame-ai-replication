import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier dates", () => {
    expect(isBefore(new Date(1987, 1, 11), new Date(1989, 6, 10))).toBe(true);
  });

  it("returns false when not before", () => {
    expect(isBefore(new Date(2000, 0, 1), new Date(1999, 11, 31))).toBe(false);
  });
});
