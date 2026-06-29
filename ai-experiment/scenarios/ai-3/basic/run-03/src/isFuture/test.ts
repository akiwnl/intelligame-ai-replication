import { isFuture } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isFuture", () => {
  it("checks if a date is in the future", () => {
    const date = new Date(2050, 0, 1);
    const result = isFuture(date);
    expect(result).toBe(true);
  });
});
