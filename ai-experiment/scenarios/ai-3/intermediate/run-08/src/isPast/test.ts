import { isPast } from "./index";

describe("isPast", () => {
  it("checks if the given date is in the past", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles dates in the future", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
