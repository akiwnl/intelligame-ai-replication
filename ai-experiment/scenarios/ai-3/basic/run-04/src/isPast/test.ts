import { isPast } from "./index";

describe("isPast", () => {
  it("should check if the date is in the past", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("should handle dates with times", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 12, 30, 0);
    const result = isPast(date);
    expect(result).toBe(true);
  });
});
