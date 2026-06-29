import { isBefore } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isBefore", () => {
  it("checks if a date is before another date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isBefore(date, dateToCompare);
    expect(result).toBe(false);
  });
});
