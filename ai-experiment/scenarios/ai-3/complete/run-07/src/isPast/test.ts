import { isPast } from "./index";

describe("isPast", () => {
  it("should return true if the date is in the past", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("should return false if the date is not in the past", () => {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
