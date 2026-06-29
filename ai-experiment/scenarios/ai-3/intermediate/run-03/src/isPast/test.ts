import { isPast } from "./index";

describe("isPast", () => {
  it("should check if the date is in the past", () => {
    const date = new Date(2000, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });
});
