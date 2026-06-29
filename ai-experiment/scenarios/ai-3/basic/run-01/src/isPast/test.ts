import { isPast } from "./index";

describe("isPast", () => {
  it("checks if the given date is in the past", () => {
    const date = new Date(2010, 0, 1);
    const result = isPast(date);
    expect(result).toBe(true);
  });
});
