import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(2020, 5, 1), new Date(2020, 4, 30))).toBe(true);
  });

  it("detects earlier date", () => {
    expect(isAfter(new Date(2020, 4, 30), new Date(2020, 5, 1))).toBe(false);
  });

  it("returns false for equal dates", () => {
    const d = new Date(2021, 0, 1);
    expect(isAfter(d, d)).toBe(false);
  });

  it("handles timestamps", () => {
    const a = Date.UTC(2022, 0, 1);
    const b = Date.UTC(2021, 11, 31);
    expect(isAfter(a, b)).toBe(true);
  });

  it("returns false for Invalid Date", () => {
    expect(isAfter(new Date(NaN), new Date())).toBe(false);
    expect(isAfter(new Date(), new Date(NaN))).toBe(false);
  });
});
