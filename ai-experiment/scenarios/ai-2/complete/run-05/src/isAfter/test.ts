import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(2020, 5, 10), new Date(2020, 5, 9))).toBe(true);
  });

  it("detects earlier date", () => {
    expect(isAfter(new Date(2020, 5, 8), new Date(2020, 5, 9))).toBe(false);
  });

  it("handles equal dates as false", () => {
    const d = new Date(2020, 0, 1);
    expect(isAfter(d, d)).toBe(false);
  });

  it("accepts timestamps", () => {
    const later = Date.UTC(2021, 0, 2);
    const earlier = Date.UTC(2021, 0, 1);
    expect(isAfter(later, earlier)).toBe(true);
  });

  it("returns false for invalid dates", () => {
    expect(isAfter(new Date("invalid"), new Date())).toBe(false);
    expect(isAfter(new Date(), new Date("invalid"))).toBe(false);
  });
});
