import { isPast } from "./index";

describe("isPast", () => {
  it("should check if the given date is in the past", () => {
    const date = new Date(Date.now() - 1000);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("should handle non-date inputs", () => {
    const date = "2024-01-01T00:00:00.000Z";
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("should return false if date is not in the past", () => {
    const date = new Date(Date.now() + 1000);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
