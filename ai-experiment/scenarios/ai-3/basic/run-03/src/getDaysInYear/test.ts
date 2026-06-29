import { getDaysInYear } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDaysInYear", () => {
  it("gets the number of days in a year", () => {
    const date = new Date(2012, 0, 1);
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });
});
