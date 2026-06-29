import { isFuture } from "./index";

describe("isFuture", () => {
  it("should check if a date is in the future", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });
});
