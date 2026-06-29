import { isFuture } from "./index";

describe("isFuture", () => {
  it("should check if the date is in the future", () => {
    const date = new Date(Date.now() + 1000);
    const result = isFuture(date);
    expect(result).toBe(true);
  });

  it("should handle dates that are not in the future", () => {
    const date = new Date(Date.now() - 1000);
    const result = isFuture(date);
    expect(result).toBe(false);
  });
});
