import { isAfter } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isAfter", () => {
  it("checks if a date is after another date", () => {
    const date = new Date(1989, 6, 10);
    const dateToCompare = new Date(1987, 1, 11);
    const result = isAfter(date, dateToCompare);
    expect(result).toBe(true);
  });
});
