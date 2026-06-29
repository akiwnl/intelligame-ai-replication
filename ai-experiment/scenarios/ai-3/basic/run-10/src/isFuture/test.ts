import { isFuture } from "./index";

describe("isFuture", () => {
  it("should check if the date is in the future", () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });
});
