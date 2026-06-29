import { isPast } from "./index";

describe("isPast", () => {
  it("should return true if the date is in the past", () => {
    const date = new Date(new Date().getTime() - 1000);
    expect(isPast(date)).toBe(true);
  });

  it("should return false if the date is in the future", () => {
    const date = new Date(new Date().getTime() + 1000);
    expect(isPast(date)).toBe(false);
  });

  it("should return false if the date is today", () => {
    const date = new Date();
    expect(isPast(date)).toBe(false);
  });
});
