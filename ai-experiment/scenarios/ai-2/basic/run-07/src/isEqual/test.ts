import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equal timestamps", () => {
    const a = new Date(2021, 3, 10, 12, 0, 0, 0);
    const b = new Date(a.getTime());
    expect(isEqual(a, b)).toBe(true);
  });

  it("detects unequal timestamps", () => {
    const a = new Date(2021, 3, 10, 12, 0, 0, 0);
    const b = new Date(2021, 3, 10, 12, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });
});
