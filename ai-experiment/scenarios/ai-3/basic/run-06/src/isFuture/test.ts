import { isFuture } from "./index";

describe("isFuture", () => {
  it("should check if the date is in the future", () => {
    const date = new Date(new Date().getTime() + 1000);
    const result = isFuture(date);
    expect(result).toBe(true);
  });
});
