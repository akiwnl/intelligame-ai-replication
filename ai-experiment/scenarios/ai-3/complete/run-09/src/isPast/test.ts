import { isPast } from "./index";

describe("isPast", () => {
  it("checks if the given date is in the past", () => {
    const date = new Date(2014, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles dates in the future", () => {
    const date = new Date(2099, 0, 1);
    const result = isPast(date);
    expect(result).toBe(false);
  });

  it("handles the current date", () => {
    const date = new Date();
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
