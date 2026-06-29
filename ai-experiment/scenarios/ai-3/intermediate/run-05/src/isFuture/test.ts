import { isFuture } from "./index";

describe("isFuture", () => {
  it("checks if the given date is in the future", () => {
    const date = new Date(2024, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });
});
