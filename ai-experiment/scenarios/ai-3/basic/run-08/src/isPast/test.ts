import { isPast } from "./index";

describe("isPast", () => {
  it("checks if the date is in the past", () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles invalid dates", () => {
    const date = new Date(NaN);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
