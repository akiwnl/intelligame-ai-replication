import { getDay } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("getDay", () => {
  it("gets the day of the week", () => {
    const date = new Date(2012, 1, 29);
    const result = getDay(date);
    expect(result).toBe(3);
  });
});
