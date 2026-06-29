import { isPast } from "./index";

describe("isPast", () => {
  it("checks if the given date is in the past", () => {
    const date = new Date(new Date().getFullYear() - 1, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles edge cases", () => {
    const date = new Date();
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
