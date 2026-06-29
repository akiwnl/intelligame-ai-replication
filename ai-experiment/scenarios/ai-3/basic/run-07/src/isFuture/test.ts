import { isFuture } from "./index";
import { toDate } from "../toDate/index.js";

describe("isFuture", () => {
  it("should check if a date is in the future", () => {
    const date = new Date(2024, 11, 31);
    const result = isFuture(date);
    expect(result).toBe(true);
  });
});
