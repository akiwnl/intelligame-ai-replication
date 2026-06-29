import { isBefore } from "./index";

describe("isBefore", () => {
  it("detects earlier date", () => {
    expect(isBefore(new Date(2020, 0, 1), new Date(2020, 0, 2))).toBe(true);
    expect(isBefore(1000000, 2000000)).toBe(true);
  });

  it("detects equal or later date", () => {
    expect(isBefore(new Date(2020, 0, 2), new Date(2020, 0, 1))).toBe(false);
    expect(isBefore(new Date(2020, 0, 1), new Date(2020, 0, 1))).toBe(false);
  });

  it("handles invalid dates (returns false)", () => {
    expect(isBefore(new Date("invalid"), new Date())).toBe(false);
    expect(isBefore(new Date(), new Date("invalid"))).toBe(false);
  });
});
