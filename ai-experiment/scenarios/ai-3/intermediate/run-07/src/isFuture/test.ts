import { isFuture } from "./index";

describe("isFuture", () => {
  it("should return true if the date is in the future", () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    expect(isFuture(date)).toBe(true);
  });

  it("should return false if the date is in the past", () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    expect(isFuture(date)).toBe(false);
  });

  it("should return false if the date is today", () => {
    const date = new Date();
    expect(isFuture(date)).toBe(false);
  });
});
