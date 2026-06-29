import { isPast } from "./index";
import { describe, expect, it } from "@jest/globals";

describe("isPast", () => {
  it("checks if a date is in the past", () => {
    const date = new Date(2010, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });
});
