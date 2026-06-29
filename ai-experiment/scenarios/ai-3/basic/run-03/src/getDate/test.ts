import { getDate } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDate", () => {
  it("gets the day of the month", () => {
    const date = new Date(2012, 1, 29);
    const result = getDate(date);
    expect(result).toBe(29);
  });
});
