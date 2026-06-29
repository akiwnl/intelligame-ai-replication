import { isPast } from "./index";

describe("isPast", () => {
  it("should check if the date is in the past", () => {
    const date = new Date(new Date().getTime() - 1000);
    const result = isPast(date);
    expect(result).toBe(true);
  });
});
