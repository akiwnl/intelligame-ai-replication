import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equal timestamps", () => {
    const a = new Date(2020, 0, 1, 12, 0, 0, 0);
    const b = new Date(2020, 0, 1, 12, 0, 0, 0);
    expect(isEqual(a, b)).toBe(true);
  });

  it("detects non‑equal timestamps", () => {
    const a = new Date(2020, 0, 1, 12, 0, 0, 0);
    const b = new Date(2020, 0, 1, 12, 0, 0, 1);
    expect(isEqual(a, b)).toBe(false);
  });
});
