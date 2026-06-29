import { getDaysInMonth } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDaysInMonth", () => {
  it("gets the number of days in a month", () => {
    const date = new Date(2000, 1);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });
});
