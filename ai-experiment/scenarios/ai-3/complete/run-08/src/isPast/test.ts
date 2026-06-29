import { isPast } from "./index";

describe("isPast", () => {
  it("should check if the date is in the past", () => {
    const date = new Date(2014, 6, 2);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("should handle edge cases", () => {
    const date = new Date(2024, 11, 31);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
