import { isAfter } from "./index";

describe("isAfter", () => {
  it("detects later date", () => {
    expect(isAfter(new Date(2020, 5, 10), new Date(2020, 5, 9))).toBe(true);
    expect(isAfter(1600000000000, 1500000000000)).toBe(true);
  });

  it("detects equal or earlier date", () => {
    expect(isAfter(new Date(2020, 5, 9), new Date(2020, 5, 10))).toBe(false);
    expect(isAfter(new Date(2020, 5, 10), new Date(2020, 5, 10))).toBe(false);
  });

  it("handles invalid dates (returns false)", () => {
    expect(isAfter(new Date("invalid"), new Date())).toBe(false);
    expect(isAfter(new Date(), new Date("invalid"))).toBe(false);
  });
});
