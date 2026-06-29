import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equal timestamps", () => {
    const a = new Date(2021, 5, 15, 12, 0, 0, 0);
    const b = new Date(2021, 5, 15, 12, 0, 0, 0);
    expect(isEqual(a, b)).toBe(true);
  });

  it("detects different timestamps", () => {
    const a = new Date(2014, 6, 2, 6, 30, 45, 0);
    const b = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(a, b)).toBe(false);
  });
});
