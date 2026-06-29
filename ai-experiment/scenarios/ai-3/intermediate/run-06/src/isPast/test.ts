import { isPast } from "./index";

describe("isPast", () => {
  it("should check if the date is in the past", () => {
    const date = new Date(Date.now() - 1000);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("should handle dates that are not in the past", () => {
    const date = new Date(Date.now() + 1000);
    const result = isPast(date);
    expect(result).toBe(false);
  });
});
