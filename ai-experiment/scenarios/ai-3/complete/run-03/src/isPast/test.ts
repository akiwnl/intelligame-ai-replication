import { isPast } from "./index";

describe("isPast", () => {
  it("checks if a date is in the past", () => {
    const date = new Date(new Date().getTime() - 1000);
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles non-date input", () => {
    const date = "2014-01-01";
    const result = isPast(date);
    expect(result).toBe(true);
  });

  it("handles timestamp input", () => {
    const date = new Date().getTime() - 1000;
    const result = isPast(date);
    expect(result).toBe(true);
  });
});
