import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(2020, 4, 1), new Date(2020, 4, 2))).toBe(true);
  });

  it("detects later date as false", () => {
    expect(isBefore(new Date(2020, 4, 3), new Date(2020, 4, 2))).toBe(false);
  });

  it("equal dates return false", () => {
    const d = new Date(2020, 0, 1);
    expect(isBefore(d, d)).toBe(false);
  });

  it("accepts timestamps", () => {
    const earlier = Date.UTC(2020, 0, 1);
    const later = Date.UTC(2020, 0, 2);
    expect(isBefore(earlier, later)).toBe(true);
  });

  it("handles invalid dates as false", () => {
    expect(isBefore(new Date("invalid"), new Date())).toBe(false);
    expect(isBefore(new Date(), new Date("invalid"))).toBe(false);
  });
});
