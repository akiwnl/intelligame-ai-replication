import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(2020, 4, 30), new Date(2020, 5, 1))).toBe(true);
  });

  it("detects later date", () => {
    expect(isBefore(new Date(2020, 5, 1), new Date(2020, 4, 30))).toBe(false);
  });

  it("returns false for equal dates", () => {
    const d = new Date(2021, 0, 1);
    expect(isBefore(d, d)).toBe(false);
  });

  it("handles timestamps", () => {
    const a = Date.UTC(2021, 11, 31);
    const b = Date.UTC(2022, 0, 1);
    expect(isBefore(a, b)).toBe(true);
  });

  it("returns false for Invalid Date", () => {
    expect(isBefore(new Date(NaN), new Date())).toBe(false);
    expect(isBefore(new Date(), new Date(NaN))).toBe(false);
  });
});
