import { isFuture } from "./index";

describe("isFuture", () => {
  it("should return true if the date is in the future", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("should return false if the date is not in the future", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
