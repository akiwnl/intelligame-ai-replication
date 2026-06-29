import { isPast } from "./index";

describe("isPast", () => {
  it("checks if a date is in the past", () => {
    const date = new Date(1900, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const result = isPast("1900-01-01");
    expect(result).toBe(true);
  });
});
