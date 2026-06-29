import { isEqual } from "./index";

describe("isEqual", () => {
  it("detects equal timestamps", () => {
    const d = new Date(2020, 5, 15, 12, 0, 0, 0);
    expect(isEqual(d, d.getTime())).toBe(true);
  });

  it("detects non‑equal timestamps", () => {
    const a = new Date(2014, 6, 2, 6, 30, 45, 0);
    const b = new Date(2014, 6, 2, 6, 30, 45, 500);
    expect(isEqual(a, b)).toBe(false);
  });
});
