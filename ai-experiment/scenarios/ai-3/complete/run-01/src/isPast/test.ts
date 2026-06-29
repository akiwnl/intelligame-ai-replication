import { isPast } from "./index";

describe("isPast", () => {
  it("should check if the date is in the past", () => {
    const date = new Date(new Date().getFullYear() - 1, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("should handle invalid dates", () => {
    const date = new Date(NaN);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
